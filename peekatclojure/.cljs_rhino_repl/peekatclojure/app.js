// Compiled by ClojureScript 1.7.228 {}
goog.provide('peekatclojure.app');
goog.require('cljs.core');
goog.require('reagent.core');
peekatclojure.app.intext = reagent.core.atom.call(null,"(peek @Clojure)");
peekatclojure.app.atom_input = (function peekatclojure$app$atom_input(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"cols","cols",-1914801295),(50),new cljs.core.Keyword(null,"rows","rows",850049680),(50),new cljs.core.Keyword(null,"style","style",-496642736),{"border": (0), "width": "100%", "height": "150px", "color": "green", "outline": "none"},new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__19160_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__19160_SHARP_.target.value);
})], null)], null);
});
peekatclojure.app.shared_state = (function peekatclojure$app$shared_state(val){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),{"dissplay": "block", "outline": "#f933ee solid thin", "border-color": "#f933ee", "position": "relative"}], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Change it here: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [peekatclojure.app.atom_input,val], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"float","float",-1732389368),"right",new cljs.core.Keyword(null,"height","height",1025178622),"30px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),""], null)], null),"run"], null)], null);
});
});
peekatclojure.app.output_div = (function peekatclojure$app$output_div(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The value is now: ",text], null)], null);
});
peekatclojure.app.main = (function peekatclojure$app$main(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [peekatclojure.app.shared_state,peekatclojure.app.intext], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [peekatclojure.app.output_div,cljs.core.deref.call(null,peekatclojure.app.intext)], null)], null);
});
peekatclojure.app.init = (function peekatclojure$app$init(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [peekatclojure.app.main], null),document.getElementById("app"));
});

//# sourceMappingURL=app.js.map