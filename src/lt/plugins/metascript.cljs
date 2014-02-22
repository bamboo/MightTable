(ns lt.plugins.metascript
  (:require [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.object :as object]
            [lt.objs.files :as files]
            [lt.objs.plugins :as plugins]
            [lt.objs.sidebar.command :as cmd]
            [lt.objs.jump-stack :as jump-stack])
  (:require-macros [lt.macros :refer [defui background behavior]]))

(def metascript-path (files/join
                      (or plugins/*plugin-dir* "/home/bamboo/.config/LightTable/plugins/MightTable")
                      "node_modules/meta-script"))

(def check-for-errors
  (background
   (fn [obj-id code metascript-path]
     (let [meta ((js/require metascript-path))
           compiler (. meta compilerFromString code)
           ast (. compiler produceAst)
           errors (.-errors compiler)
           mjserror->clj (fn [e] {:message (.-message e) :line (.-line e)})
           errors (vec (map mjserror->clj errors))]
       (raise obj-id :mjs-hinted errors)))))


(defui error-hint [errors]
  [:div.hintwrapper
   [:ul {:style "background-color: darkred;"}
    (for [e errors]
      [:li (:message e)])]])


(defn preserving-scroll-location-of [this action]
  (let [cm-ed (editor/->cm-ed this)
        prev (.getScrollInfo cm-ed)]
    (action)
    (.scrollTo cm-ed (.-left prev) (.-top prev))))


(defn remove-mjs-hints-from [this]
  (doseq [hint (:mjs-hints @this)]
    (editor/remove-line-widget this hint)))


(defn update-hints [this hints]
  (preserving-scroll-location-of
   this
   #(do
      (remove-mjs-hints-from this)
      (let [widgets {:mjs-hints
                     (->> hints
                          (group-by :line)
                          (map (fn [[line hs]] (editor/line-widget this (dec line) (error-hint hs))))
                          (doall))}]
        (object/merge! this widgets)))))


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

;; error jumping

(defn hinted-line-numbers [editor hints-tag]
  (let [cm (editor/->cm-ed editor)
        hints (hints-tag @editor)]
    (map #(. cm getLineNumber (.-line %)) hints)))

(defn current-line [editor]
  (:line (editor/->cursor editor)))

(defn next-or-first [x xs]
  (or (first (subseq xs > x))
      (first xs)))

(defn previous-or-last [x xs]
  (or (first (rsubseq xs < x))
      (last xs)))

(defn jump-to [editor pos]
  (object/raise jump-stack/jump-stack :jump-stack.push! editor (:path (:info @editor)) pos))

(defn jump-to-error [select-line]
  (let [editor (pool/last-active)
        line-ns (apply sorted-set (hinted-line-numbers editor :mjs-hints))
        line (select-line (current-line editor) line-ns)]
    (when line
      (jump-to editor {:line line :ch 0}))))

(defn jump-to-next-error []
  (jump-to-error next-or-first))

(defn jump-to-previous-error []
  (jump-to-error previous-or-last))

(cmd/command {:command :metascript.jump-to-next-error
              :desc "Metascript: Jump to next error in file"
              :exec (fn [] (jump-to-next-error))})

(cmd/command {:command :metascript.jump-to-previous-error
              :desc "Metascript: Jump to previous error in file"
              :exec (fn [] (jump-to-previous-error))})

