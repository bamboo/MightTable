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


(object/object* ::mjs-lang
                :tags #{::print-js-code})

(def mjs-lang (object/create ::mjs-lang))


(def metascript-path
  (files/join
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

(defn start-check-for-errors [this]
  (check-for-errors this (editor/->val this) metascript-path))

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
                         (mapv (fn [[line hs]]
                                 (editor/line-widget this line (error-hint this hs)))))
            locations (apply sorted-set (map ->location hints))]
        (object/merge! this {:mjs-hints {:widgets widgets
                                         :locations locations}})))))

(defn hintable? [this]
  (object/has-tag? this :metascript.hintable))


(object/behavior* ::hint-on-change
                  :debounce 750
                  :type :user
                  :desc "Metascript Errors: Check for Metascript errors on change"
                  :triggers #{:change}
                  :reaction start-check-for-errors)


(object/behavior* ::inline-hints
                  :triggers #{:mjs-hinted}
                  :reaction (fn [this hints]
                              (editor/operation (editor/->cm-ed this) #(update-hints this hints))))


(object/behavior* ::tags-removed
                  :triggers #{:lt.object/tags-removed}
                  :reaction (fn [this t]
                              (when-not (hintable? this)
                                (remove-mjs-hints-from this))))


(object/behavior* ::tags-added
                  :triggers #{:lt.object/tags-added}
                  :reaction (fn [this t]
                              (when (hintable? this)
                                (start-check-for-errors this))))


(defn enable-error-hints []
  (when-let [editor (pool/last-active)]
    (object/add-tags editor [:metascript.hintable])))

(defn disable-error-hints []
  (when-let [editor (pool/last-active)]
    (object/remove-tags editor [:metascript.hintable])))


(cmd/command {:command :metascript.disable-file-hints
              :desc "Metascript: Disable error hints in file"
              :exec disable-error-hints})


(cmd/command {:command :metascript.enable-file-hints
              :desc "Metascript: Enable error hints in file"
              :exec enable-error-hints})



;; code evaluation

(defn node-seq [node]
  (for [i (range (. node argCount))]
    (. node argAt i)))

(defn ast-seq [ast]
  (tree-seq
   (fn [node] (pos? (. node argCount)))
   node-seq
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

(defn compile-node [compiler node]
  (let [jsAst (. compiler jsAstFor node)
        code (.-code (. compiler generate jsAst))]
    {:code code :node node :js-ast jsAst}))

(defn compile-top-level-at [code line ch]
  (let [{:keys [ast compiler]} (parse code)]
    (when-let [node (. ast findTopLevelAt line ch)]
      (compile-node compiler node))))

(defn dump-node [node]
  (println (. node id) (inspect (.-loc node) 2)))

(defn dump-nodes [nodes]
  (dorun (map dump-node nodes)))

(defn dump [ast]
  (dump-nodes (ast-seq ast)))

(defn ->ast [code]
  (->> code parse :ast))

(defn loc->map [loc]
  {:line (dec (.-line loc))
   :ch (.-column loc)})

(defn node->meta [node]
  {:start (loc->map (.-loc.start node))
   :end (loc->map (.-loc.end node))
   :type "ExpressionStatement"})

(defn has-nodejs-client?
  "checks if the editor is connected."
  [editor]
  (when-let [client (-> @editor :client :default)]
    (and (:tags @client)
         (object/has-tag? client :nodejs.client))))


(defn eval [editor {:keys [code node]}]
  (try
    (let [info (:info @editor)

          ; when already connected to a nodejs client
          ; mask the path as ltuser to prevent file evaluation
          info (if (has-nodejs-client? editor)
                 (assoc info :path "ltuser")
                 info)

          info (assoc info
                 :code code
                 :meta (node->meta node))]

      (when (object/has-tag? mjs-lang ::print-js-code)
        (println code))

      (object/raise js-lang/js-lang :eval! {:origin editor :info info}))

    (catch js/global.Error e
      (object/raise editor
                    :editor.eval.js.exception
                    {:ex e :meta {:end {:line (dec (.-loc.line e))}}}))))

(defn eval-one [editor]
  (try
    (let [{:keys [line ch]} (editor/->cursor editor)]
      (eval editor (compile-top-level-at (editor/->val editor) (inc line) ch)))
    (catch js/global.Error e
      (object/raise editor
                    :editor.eval.js.exception
                    {:ex e :meta {:end {:line (dec (.-loc.line e))}}}))))

(defn eval-file [editor]
  (let [code (editor/->val editor)
        {:keys [ast compiler]} (parse code)]
    (dorun
     (map #(eval editor (compile-node compiler %))
          (node-seq ast)))))


(behavior ::on-eval.one
          :triggers #{:eval.one}
          :reaction (fn [editor] (eval-one editor)))

(behavior ::on-eval
          :triggers #{:eval}
          :reaction (fn [editor] (eval-file editor)))



(cmd/command {:command :metascript.disable-file-hints
              :desc "Metascript: Disable javascript code output"
              :exec (fn [] (object/remove-tags mjs-lang [::print-js-code]))})


(cmd/command {:command :metascript.enable-file-hints
              :desc "Metascript: Enable javascript code output"
              :exec (fn [] (object/add-tags mjs-lang [::print-js-code]))})



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
