(ns adzerk.boot-reload (:require [adzerk.boot-reload.client :as client] peekatclojure.app))
(client/connect "ws://localhost:46273" {:ws-host nil, :asset-host nil, :on-jsload (fn* [] (peekatclojure.app/init))})