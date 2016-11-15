(ns peekatclojure.app
  (:require [reagent.core :as r]
            [ajax.core :refer [GET ajax-request
                               transit-request-format
                               text-request-format
                               text-response-format]]))

;; test ground
(def text-code (r/atom "(peek @Clojure)"))

(def text-out (r/atom ""))

(defn atom-input [value]
  [:textarea {:value @value
              :cols 50
              :rows 50
              :style #js {:border 0
                          :width "100%" :height 150
                          :color "green"
                          :outline "none"
                          :font-size "1.2em"}
           :on-change #(reset! value (-> % .-target .-value))}])

(defn do-editor [z-var]
  (fn []
    [:div {:style {:width "100%"}} [:p "Change it here:"]
     [:div {:style #js {:display "inline-block"
                        :outline "#f933ee solid thin"
                        :border-color "#f933ee"
                        :position "relative"
                        :width "100%"}}
      [atom-input z-var]
      [:button {:style {:bottom 10
                        :right 10
                        :position "absolute"}
                :on-click
                #(ajax-request {:uri "/eval"
                                :method :get
                                :format (transit-request-format)
                                :response-format (text-response-format)
                                :handler (fn [m] (set! (.-innerHTML (.getElementById js/document "output-container")) (str (second m) "<p>" @text-code "</p>"))
                                        ;(reset! text-out m)
                                           )
                                :params {:code (str @z-var)}
                                ;; :error-handler (fn [m] (js/alert "No Cross Origins"))
                                })
                }  "eval"]]]))


(defn do-output [text]
  [:div {:id "output-container"
         :style {:margin-top 10}}
   @text])

(defn main []
  [:div
   [do-editor text-code]
   [do-output text-out]])


(defn init []
  ;; (let [c (.. js/document (createElement "DIV"))]
  ;;   (aset c "innerHTML" "<p>i'm dynamically created</p>")
  ;;   (.. js/document (getElementById "container") (appendChild c)))
  (r/render-component [main]
                      (.getElementById js/document "app"))
  )
