(ns peekatclojure.app
  (:require [reagent.core :as r]))

;; test ground
(def intext (r/atom "(peek @Clojure)"))

(defn atom-input [value]
  [:textarea {:value @value
              :cols 50
              :rows 50
              :style #js {:border 0
                          :width "100%" :height "150px"
                          :color "green"
                          :outline "none"}
           :on-change #(reset! value (-> % .-target .-value))}])

(defn shared-state [val]
  (fn []
    [:div {:style #js {:dissplay "block"
                       :outline "#f933ee solid thin"
                       :border-color "#f933ee"
                       :position "relative"}}
     [:p "Change it here: " [atom-input val]]
     [:button {:style ;; {:position "relative"
                      ;;  :height "30px"
                      ;;  :right "-90%" :margin-top "0px"}
               {:float "right"
                :height "30px"
                :overflow ""}
               } "run" ]]))

(defn output-div [text]
  [:div
   [:p "The value is now: " text]])

(defn main []
  [:div
   [shared-state intext]
   [output-div @intext]])

(defn init []
  ;; (let [c (.. js/document (createElement "DIV"))]
  ;;   (aset c "innerHTML" "<p>i'm dynamically created</p>")
  ;;   (.. js/document (getElementById "container") (appendChild c)))
  (r/render-component [main]
                      (.getElementById js/document "app"))
  )
