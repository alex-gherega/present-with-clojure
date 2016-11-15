(defproject peekatclojure-server "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [compojure "1.5.1"]
                 [ring/ring-defaults "0.2.1"]
                 ;[ring/ring-jetty-adapter "1.6.0-beta6"]
                 [hiccup "1.0.5"]]

  :plugins [[lein-ring "0.9.7"]
            [lein-gorilla "0.3.6"]]
  :ring {:handler peekatclojure-server.handler/app}
  :profiles
  {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring/ring-mock "0.3.0"]]}})
