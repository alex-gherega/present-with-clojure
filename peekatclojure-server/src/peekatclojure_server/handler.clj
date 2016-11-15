(ns peekatclojure-server.handler
  (:use [clojure.core]
        [clojure.repl]
        [peekatclojure-server.scenes])
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [clojure.java.io :as io]
            [ring.util.codec :as codec]
            [clojure.walk :refer [keywordize-keys]]
            [ring.middleware.defaults :refer [wrap-defaults wrap-defaults site-defaults]]
            [ring.middleware.params :refer [wrap-params]]
            [ring.util.response :as resp]
            [hiccup.core :as h]
            [peekatclojure-server.scenes :as sc]
            [peekatclojure-server.scenes :as CLJ]
            ;; required for result eval
            [clojure.repl]
            [clojure.core]))

;; (def Clojure sc/Clojure)
;; (def background (:background sc/scenes))
;; (def syntax sc/syntax)
;; (def state sc/state)

(defmacro with-ns
  "Evaluates body in another namespace.  ns is either a namespace
  object or a symbol.  This makes it possible to define functions in
  namespaces other than the current one."
  [ns & body]
  `(binding [*ns* (the-ns ~ns)]
     ~@(map (fn [form] `(eval '~form)) body)))

(defn- lexify [code]
  (.replace code "Clojure" (str 'peekatclojure-server.scenes/Clojure)))

(defn- safe-eval [code]
  (binding [*ns* (the-ns 'peekatclojure-server.handler)]
    (let [code code];(lexify code)]
      (try (-> code read-string eval)
           (catch Exception e (str code "..some bad cheese indeed, Batman!"))))))

(defn- clean-query-string [q-str]
  (let [util-str (.replace q-str "+" "%2B")]
    util-str))

(defn- parse-query [q-str]
  (keywordize-keys (codec/form-decode q-str)))


(defn- output-div [res rows prn]
  (h/html [:div {:style "width:100%"}
           [:div "user-result> "
            [:font {:color "green" :size "5"} (str res)]
            [:p]
            [:textarea {:style "border:0; outline:\"none\";
                          width:100%; background:#ffffff"
                        :rows rows
                        :disabled true}
             (str prn)]]
           (sc/scenes res)]))

(defn- render-result [code]
  (let [prn (with-out-str (safe-eval code))
        rows (count (clojure.string/split-lines prn))
        res (safe-eval code)]
    (output-div res rows prn)))

(defroutes app-routes

  (GET "/" [] (resp/file-response "index.html"
                                  {:root "resources/public"}))

  (GET "/eval" {query-str :query-string}
        ;; uncomment for DEBUG
        ;; (str "result " (->> query-str clean-query-string parse-query :code read-string eva)
        ;;         " ")

        ;; (str ;code
        ;;  " "
        ;;  query-str
        ;;  " "
        ;;  (-> query-str clean-query-string parse-query :code)
        ;;  " "
        ;;  (-> query-str clean-query-string parse-query :code render-result)

        (-> query-str clean-query-string parse-query :code render-result))

  (route/resources "/")
  (route/not-found "Not Found"))

(def app
  (wrap-params app-routes)
  ;(wrap-defaults app-routes (assoc-in site-defaults [:security :anti-forgery] false))
)
