(ns lt.plugins.todo
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]

            [clojure.string :as string]

            [crate.binding :refer [bound subatom]])
  (:require-macros [lt.macros :refer [defui behavior]]))

(behavior ::on-close-destroy
          :triggers #{:close}
          :reaction (fn [this]
                      (when-let [ts (:lt.objs.tabs/tabset @this)]
                        (when (= (count (:objs @ts)) 1)
                          (tabs/rem-tabset ts)))
                      (object/raise this :destroy)))

(defn get-filename [ed]
  (-> @ed :info :name))

(defn setTodoHtml! [ed obj]
  (object/merge! obj {:text (.getValue (editor/->cm-ed ed))}))

(defui makeTodos [text]
  [:div
   [:ol
    (for [i (map #(str (:lineNumber %) ": " (:comment %)) (todoLines (commentLines text)))]
      [:li {:style "list-style-type: decimal"} i])
    ]
   ])

(defn todoLines [lines]
  (filter #(containsAny (:line %) '("TODO" "FIXME")) lines))

(defn commentLines [text]
  (filter #(.startsWith (:line %) ";") (map-indexed (fn [idx line] {:lineNumber (inc idx) :line (string/trim line) :comment (string/trim (string/replace line ";" ""))}) (string/split-lines text))))

(defn containsAny [s sss]
   (reduce (fn [a b] (or a b)) (map #(.contains s %) sss)) )


(defui todo-list [this]
  [:div
   [:h1 "Todo List"]
   [:div#container {:class "todo"}
    (makeTodos (:text this))]])

(object/object* ::todo.list
                :behaviors [::on-close-destroy]
                :name "Todo List"
                :init (fn [this filename]
                        (object/update! this [:name] (constantly (str filename " - Todo List")))
                        [:div (bound this todo-list)]))

(behavior ::read-editor
          :triggers [:change ::read-editor]
          :desc "Todo: Read the content inside an editor"
          :reaction (fn [this]
                      (let [todo-obj (:todo-list @this)]
                        (setTodoHtml! this todo-obj))))

(cmd/command {:command ::watch-editor
              :desc "Todo: Watch this editor for changes"
              :exec (fn []
                      (let [ed (pool/last-active)
                            filename (get-filename ed)
                            todo-obj (object/create ::todo.list filename)]
                        (tabs/add-or-focus! todo-obj)
                        (object/update! ed [:todo-list] (fn [] todo-obj))
                        (object/add-behavior! ed ::read-editor)
                        (object/raise ed ::read-editor)))})
