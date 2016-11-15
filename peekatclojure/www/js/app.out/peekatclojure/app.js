// Compiled by ClojureScript 1.7.228 {}
goog.provide('peekatclojure.app');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
peekatclojure.app.text_code = reagent.core.atom.call(null,"(peek @Clojure)");
peekatclojure.app.text_out = reagent.core.atom.call(null,"");
peekatclojure.app.atom_input = (function peekatclojure$app$atom_input(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"cols","cols",-1914801295),(50),new cljs.core.Keyword(null,"rows","rows",850049680),(50),new cljs.core.Keyword(null,"style","style",-496642736),{"border": (0), "width": "100%", "height": (150), "color": "green", "outline": "none", "font-size": "1.2em"},new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__9110_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__9110_SHARP_.target.value);
})], null)], null);
});
peekatclojure.app.do_editor = (function peekatclojure$app$do_editor(z_var){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Change it here:"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),{"display": "inline-block", "outline": "#f933ee solid thin", "border-color": "#f933ee", "position": "relative", "width": "100%"}], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [peekatclojure.app.atom_input,z_var], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(10),new cljs.core.Keyword(null,"right","right",-452581833),(10),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return ajax.core.ajax_request.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"uri","uri",-774711847),"/eval",new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.transit_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.text_response_format.call(null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (m){
return document.getElementById("output-container").innerHTML = [cljs.core.str(cljs.core.second.call(null,m)),cljs.core.str("<p>"),cljs.core.str(cljs.core.deref.call(null,peekatclojure.app.text_code)),cljs.core.str("</p>")].join('');
}),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),[cljs.core.str(cljs.core.deref.call(null,z_var))].join('')], null)], null));
})], null),"eval"], null)], null)], null);
});
});
peekatclojure.app.do_output = (function peekatclojure$app$do_output(text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"output-container",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(10)], null)], null),cljs.core.deref.call(null,text)], null);
});
peekatclojure.app.main = (function peekatclojure$app$main(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [peekatclojure.app.do_editor,peekatclojure.app.text_code], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [peekatclojure.app.do_output,peekatclojure.app.text_out], null)], null);
});
peekatclojure.app.init = (function peekatclojure$app$init(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [peekatclojure.app.main], null),document.getElementById("app"));
});

//# sourceMappingURL=app.js.map