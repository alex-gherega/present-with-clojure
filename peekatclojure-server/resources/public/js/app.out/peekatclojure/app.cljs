(ns peekatclojure.app
  (:require [reagent.core :as r]
            [ajax.core :refer [params-to-str-alt params-to-str
                               GET POST ajax-request
                               raw-response-format
                               transit-request-format
                               url-request-format
                               text-request-format
                               text-response-format
                               json-request-format]]))

;; test ground
(def text-code (r/atom "(peek @Clojure)"))

(def text-out (r/atom "")) ;; currently unused

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

(defn- eval-request [z-var]
  (ajax-request {:uri "/eval"
                 :method :get
                 :format (url-request-format)
                 :response-format (raw-response-format)
                 :handler (fn [[ok result]]
                            (set! (.-innerHTML
                                   (.getElementById js/document
                                                    "output-container"))
                                  (str result)
                                  ;; uncomment for debug
                                  ;; (str result "<p>"
                                                 ;;      (params-to-str-alt
                                  ;;       {:code (str "\"" @text-code "\"")})
                                  ;;      "</p>")
                                  ))
                 :params {:code @z-var}
                 ;; :error-handler (fn [m] (js/alert "No Cross Origins"))
                 }))

(defn do-editor [z-var]
  (fn []
    [:div {:style {:width "100%"}} [:p "Code playground:"]
     [:div {:style #js {:display "inline-block"
                        :outline "#f933ee solid thin"
                        :border-color "#f933ee"
                        :position "relative"
                        :width "100%"}}
      [atom-input z-var]
      [:div {:class "pointer"
             :style {:bottom 10
                     :right 10
                     :position "absolute"
                     :padding 5
                     :border "2px solid #00ccff"
                     ;:background "cyan"
                     :color "teal"
                     :border-radius "5px"
                     :cursor "pointer"}
             :on-click #(eval-request z-var)

             } "eval"]]]))


(defn do-output [text]
  [:div {:id "output-container"
         :style {:margin-top 10}}])

(defn main []
  [:div
   [do-editor text-code]
   [do-output text-out]
   [:div {:id "footer"
             :style {:position "absolute"
                     :margin-top "100px"
                     }
             }
    [:font {:size "2"}
     "by" [:a {:href "https://ro.linkedin.com/in/alexandru-gherega-73340719"} "Alex Gherega"] " "
     [:a {:href "http://www.icslab.eu"}
      [:img {:src "public/logo-1.png" :height 40 :width 40
             :style {:vertical-align "middle"}}]]]
    ]])


(defn init []
  (r/render-component [main]
                      (.getElementById js/document "app")))
