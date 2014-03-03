(ns lt.plugins.metascript

  (:require [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.object :as object]
            [lt.objs.files :as files]
            [lt.objs.plugins :as plugins]
            [lt.objs.sidebar.command :as cmd]
            [lt.objs.jump-stack :as jump-stack]
            [lt.plugins.js :as js-lang])

  (:require-macros [lt.macros :refer [defui background behavior]]))


(def metascript-path (files/join
                      (or plugins/*plugin-dir* "/home/bamboo/.config/LightTable/plugins/MightTable")
                      "node_modules/meta-script"))

(def check-for-errors
  (background
   (fn [obj-id code metascript-path]
     (letfn [(map-error [e] {:message (.-message e)
                             :line (dec (.-line e))
                             :ch (.-column e)
                             :nested-errors (map-errors (.-nestedErrors e))})
             (map-errors [es] (mapv map-error es))]

       (let [meta ((js/require metascript-path))
             compiler (. meta compilerFromString code)
             ast (. compiler produceAst)
             errors (map-errors (.-errors compiler))]
         (raise obj-id :mjs-hinted errors))))))

(declare jump-to)

(defui clickable [tag editor hint]
  [tag {:style "cursor: pointer;"} (:message hint)]
  :click #(jump-to editor hint))

(defui error-hint [editor errors]
  [:div.hintwrapper
   [:ul {:style "background-color: darkred;"}
    (for [{:keys [nested-errors] :as e} errors]
      [:li (clickable :div editor e)
       (when-not (empty? nested-errors)
         [:ul
          (for [ne nested-errors]
            (clickable :li.button editor ne))])])]])

(defn preserving-scroll-location-of [this action]
  (let [cm-ed (editor/->cm-ed this)
        prev (.getScrollInfo cm-ed)]
    (action)
    (.scrollTo cm-ed (.-left prev) (.-top prev))))

(defn remove-mjs-hints-from [this]
  (doseq [widget (:widgets (:mjs-hints @this))]
    (editor/remove-line-widget this widget)))

(def ->location (juxt :line :ch))

(defn update-hints [this hints]
  (preserving-scroll-location-of
   this
   #(do
      (remove-mjs-hints-from this)
      (let [widgets (->> hints
                         (group-by :line)
                         (mapv (fn [[line hs]] (editor/line-widget this line (error-hint this hs)))))
            locations (apply sorted-set (map ->location hints))]
        (object/merge! this {:mjs-hints {:widgets widgets
                                         :locations locations}})))))


(object/behavior* ::on-change
                  :debounce 750
                  :type :user
                  :desc "Metascript Errors: Check for Metascript errors on change"
                  :triggers #{:change}
                  :reaction (fn [this]
                              (check-for-errors this (editor/->val this) metascript-path)))


(object/behavior* ::inline-hints
                  :triggers #{:mjs-hinted}
                  :reaction (fn [this hints]
                              (editor/operation (editor/->cm-ed this) #(update-hints this hints))))


;; code evaluation

(defn ast->seq [ast]
  (tree-seq
   (fn [node] (pos? (. node argCount)))
   (fn [node] (for [i (range (. node argCount))] (. node argAt i)))
   ast))

(def meta-script ((js/require metascript-path)))

(def util-inspect (.-inspect (js/require "util")))

(defn inspect [thing depth]
  (util-inspect thing false (or depth 5)))

(defn parse [code]
  (let [compiler (. meta-script compilerFromString code)
        ast (-> (doto compiler (. parse) (. pipeline)) .-root)]
    (. ast normalizeLocation)
    {:ast ast :compiler compiler}))

(defn node-to-the-left [ast line column]
  (->> (ast->seq ast)
      (filter
       #(and (= line (.-loc.end.line %)) (<= (.-loc.end.column %) column)
             (zero? (.-loc.start.column %))))
      first))

(defn compile [code line ch]
  (let [{:keys [ast compiler]} (parse code)]
    (when-let [node (node-to-the-left ast line ch)]
      (println node)
      (let [jsAst (. compiler jsAstFor node)]
        (.-code (. compiler generate jsAst))))))

(defn dump-node [node]
  (println (. node id) (inspect (.-loc node) 2)))

(defn dump-nodes [nodes]
  (dorun (map dump-node nodes)))

(defn dump [ast]
  (dump-nodes (ast->seq ast)))

(defn ->ast [code]
  (->> code parse :ast))

(dump (->ast "console.log(42)"))

(comment
  (dump-node
   (node-to-the-left
    (->ast "app.get\n  'client.js'\n  (res, rsp) -> rsp.sendfile './client.js'")
    3 42)))

(defn eval-one [editor]
  (try
    (let [info (:info @editor)
          info (if (editor/selection? editor)
                 (assoc info
                   :code (editor/selection editor)
                   :meta {:start {:line (-> (editor/->cursor editor "start") :line)}
                          :end {:line (-> (editor/->cursor editor "end") :line)}
                          :type "ExpressionStatement"})
                 (let [{:keys [line ch]} (editor/->cursor editor)]
                   (assoc info
                     :code (compile (editor/->val editor) (inc line) ch)
                     :meta {:start {:line line}
                            :end {:line line}
                            :type "ExpressionStatement"})))]

      (println (:code info))
      (object/raise js-lang/js-lang :eval! {:origin editor :info info}))

    (catch js/global.Error e
      (object/raise editor :editor.eval.js.exception {:ex e :meta {:end {:line (dec (.-loc.line e))}}}))))


(behavior ::on-eval.one
          :triggers #{:eval.one}
          :reaction (fn [editor] (eval-one editor)))


;; error jumping

(defn next-or-first [x xs]
  (or (first (subseq xs > x))
      (first xs)))

(defn previous-or-last [x xs]
  (or (first (rsubseq xs < x))
      (last xs)))

(defn jump-to [editor pos]
  (object/raise jump-stack/jump-stack :jump-stack.push! editor (:path (:info @editor)) pos))

(defn cursor-location [editor]
  (->location (editor/->cursor editor)))

(defn jump-to-error [select-location]
  (let [editor (pool/last-active)
        locations (:locations (:mjs-hints @editor))
        location (select-location (cursor-location editor) locations)]
    (when-let [[line ch] location]
      (jump-to editor {:line line :ch ch}))))

(defn jump-to-next-error []
  (jump-to-error next-or-first))

(defn jump-to-previous-error []
  (jump-to-error previous-or-last))

(cmd/command {:command :metascript.jump-to-next-error
              :desc "Metascript: Jump to next error in file"
              :exec jump-to-next-error})

(cmd/command {:command :metascript.jump-to-previous-error
              :desc "Metascript: Jump to previous error in file"
              :exec jump-to-previous-error})
