(ns reagtest.core
    (:require
     [reagent.core :as r]
     [re-frame.core :as rf]
     [day8.re-frame.http-fx]
     [kehys.db :as db]
     [kehys.subs :as subs]
     [kehys.events :as events]
     [ajax.core :as ajax :refer [GET POST PUT]]
     [clojure.edn :as edn]))
(defmacro log [msg]
  `(js/console.log ~msg))

(defn dangerous
  ([comp content]
   (dangerous comp nil content))
  ([comp props content]
   [comp (assoc props :dangerouslySetInnerHTML {:__html content})]))

(defn diivi [id sisus]
  (dangerous :div {:id id
                   :key id
                   :flex 1
                   :style {:padding 10
                           :margin 5
                           :border "dotted 1"
                           :border-color "lightblue"
                           :background-color "lightgrey"}
                   :on-mouse-over #(js/console.log "mouse" % id)
                   :on-click  #(rf/dispatch [:valitse_juttu id])}  (str sisus)))
(defn editoi [id sisus] [:div [:textarea {:id id
                                          :on-change #(rf/dispatch [:value-change  (-> % .-target .-value)])
                                          :cols 57
                                          :rows 7
                                          :wrap "hard"
                                          :defaultValue sisus}]])


(defn Walinta [id name clr]
  [:div
   [:button {:id id
             :style {:background-color clr}
             :on-click #(rf/dispatch [:valinta id])} "" name]])

(defn div [a c d e]
  (do (js/console.log (str d (when (not= (count a) 0)
                               (edn/read-string (str "{:style {" a "}}"))) c e))
      [d {:contenteditable "true" :style
          (edn/read-string (str " {" a "}")) } c e]))


(defn testii[a] [:h1 {:style {:color (if (= a "OK")
                                       "green"
                                       "red")}} a])

(defn home-page []

   (let [kanavat  (rf/subscribe [::subs/categories])
         muuvi (rf/subscribe [::subs/muuvi])
         valittu_id (rf/subscribe [::subs/valittu_juttu_id])
         uusi_id (rf/subscribe [::subs/uusi_id])
         kaikki (rf/subscribe [::subs/kaikki])
         valittu_juttu (rf/subscribe [::subs/valittu_juttu])
         roto (rf/subscribe [::subs/roto])
         name (rf/subscribe [::subs/name])
         finna_haku (rf/subscribe [::subs/finna_haku])
         abc (rf/subscribe [::subs/abc])]



;(defn ar [i] (xdb i) )
    (defn bb [go]
      (map #(div (:css %) (:teksti %) (:type %)
                  (let [go (filter (fn [x] (= (:master_id x) (str (:id %)))) @abc)]
                    (when (> (count go) 0)
                      (bb go))))
           go))

    [:div {:style {:display "grid" :grid-template-columns "1fr 1fr"}}

     [:div  {:contenteditable "true" :style {:heigth "1120" :border "solid 2px"}} (->> @kaikki :error testii)[:br] "Valitse:" [:br] [:br]

      (map #(Walinta (:id %) (:teksti %) (if (= @name (:id %)) "grey" "lightgrey"))
              ;edn/read-string (
              ;str "[:button "
              ;"{ :on-change #(rf/dispatch [:value-change  " (:id %)
              ;"])} "
              ;(:type %) "_id_" (:id %) "__m_id_" (:master_id %)
              ;" ]  "
                           ;    )
            @abc)
      [:br]

      [:input   {:defaultValue @name}] [:br]
      ; [:input   {:defaultValue (:css (nth (filter  #(= (:id %) @name) @abc) 0 )) }] [:br]
      ; [:input   {:id (str "tek" (:id @name)) :defaultValue (:teksti (nth (filter  #(= (:id %) @name) @abc) 0 )) }] [:br]
      [:input   ] [:br]
      [:input  {:id "finna"
                                          :on-change #(rf/dispatch [:finna-haku  (-> % .-target .-value)])
                                          :defaultValue ""}  ] [:br] 
                                          
                                          @finna_haku
      ;[edn/read-string  
         ; (reduce #(str % (:title %2) " [:br] ") ""  (:records @kanavat))
      ;]
      ;)




[:ul
    (for [i (:records @kanavat)]
      [:li (:title i)
      ; (str "--> " (map #(str % "-> " (% i)) (keys i))) 
      ;" " (:id i)
       ])]


      ;(str " qw--->    " (keys (nth (:records @kanavat)0)) 
      ;(nth (:records @kanavat) 0)
      ;)
      ]
       ;(editoi @name (:teksti (nth (filter  #(= (:id %) @name) @abc) 0)))



     [:div  {:style {:flex "2" :border "solid 2px"}}

      (bb (filter #(= (:id %) (str 86)) @abc))]]))
      ;(bb (filter #(= (:id %) (str 40)) @abc))






;; -------------------------
;; Initialize app


(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (rf/dispatch-sync [::events/initialize-db])
  ;(rf/dispatch [:get-api-data :abc "https://juu.azurewebsites.net/lue_jutut.php?kanava_id=5"])
  ;(rf/dispatch [:get-api-data :categories "https://api.finna.fi/v1/search?lookfor=javascript&limit=50&page=2"])
  
  
  
  ;(rf/dispatch [:get-api-data :categories "https://juu.azurewebsites.net/lue_kanavat.php"])
  (rf/dispatch [:valinta 1])
  (mount-root))
