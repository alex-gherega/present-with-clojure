(ns peekatclojure-server.scenes
  (:require [hiccup.core :as h]))

(defn- make-info [& args]
  (if (seq args)
    [:div (map-indexed #(if (odd? %1)
                          [:p %2]
                          [:br %2])
                       args)]))

(def Clojure (atom '("A peek at something cool")))
(def syntax "prefix notation (FN arg1 arg2 arg3 ...)")
(def state "state")
(def Features :features)
(def background :background)
(def *env* :env)
(def clojure :the-best-language-for-me)
(defn universe-of [x] (if (= x clojure) clojure))

(def scenes {(peek @Clojure) (h/html
                              (make-info "Bind a variable:"
                                         "&#09; (def my-variable \"stores a string\")"
                                         "Or a fn definition:"
                                         "&#09; (defn regex? [str-or-re] (...))"))

             :background (h/html
                          (make-info "Pre-Clojure:"
                                     "&#09;ML, MAS, large distributed systems"
                                     "UBS years:"
                                     "&#09;RBS app with various u-services"
                                     "self: "
                                     "&#09;Android, CLJS, Web"))
             [:w :w :w] (h/html
                         (make-info "When was Clojure releases?"
                                    "&#09;2007"
                                    "Who was the author?"
                                    "&#09;Rich Hickey"
                                    "What was he up to?"
                                    "&#09;..plenty naughty things"))
             '(Philosophy) (h/html
                            (make-info "Simple"
                                       "&#09;pure fns instead of classes"
                                       "Expressive"
                                       "&#09;free to focus on the problem"
                                       "Practical"
                                       "&#09;always look for the practical approach"))
             '~'syntax (h/html
                        (make-info "Syntax"
                                   (str "&#09" syntax)))
             :features (h/html
                        (make-info "Dynamic env" "&#09" "Runtyme polymorphism"
                                   "&#09" "Plenty diffs from CLisp" "&#09"
                                   "Hosted on a symbiotic platform" "&#09"
                                   "Was designed with concurrency support baked-in"))
             5 (h/html
                (make-info "A 2 phase evaluation logic is used" "Reader"
                           "&#09-> coverts text to clj data-structs" "Evaluation"
                           "&#09-> resolves the expressions to a single value"))
             {:data 'struct} (h/html
                              (make-info "Basic data-structs"
                                         "&#09 nums, chars, strings, booleans, null"
                                         "Collections"
                                         "&#09 lists + vectors, maps, sets <- sequences"))
             (= state identity) (h/html
                              (make-info "Did you know?"
                                         "&#09 Clojure discerns between state and identity?"
                                         "Also.."
                                         "&#09 whatever is not nil or false is true"))
             "abstract" (h/html
                                 (make-info "Clojure is built in terms of asbtractions"
                                            "&#09 sequences, callability, collections"))
             (type +) (h/html
                       (make-info "Datatypes"
                                  "&#09 Protocols, *Type8, Records"))
             :ref-types (h/html
                         (make-info "For safe mutations, you get"
                                    "&#09 4 referential types: "
                                    "Vars, Refs, Agents and Atoms"))
             Math/PI (h/html
                      (make-info "Direct Java/platform interop"
                                 "&#09 using the dot operator"
                                 "Try it out:"
                                 "&#09 (.replace \"Clojure\" \"e\" \"e is the BEST\")"))
             :env (h/html
                   (make-info [:a {:href "http://leiningen.org/"} "Leiningen"]
                              "&#09"
                              [:a {:href "https://github.com/clojure-emacs/cider-nrepl/blob/master/README.md"} "Cider{[]}"]
                              "&#09"
                              [:a {:href "https://cursive-ide.com/"} "Cursive"]))
             clojure (h/html
                      (make-info "Success stories"
                                 [:a {:href "http://dev.clojure.org/display/community/Clojure+Success+Stories"} "&#09 here"]))
})
