// Compiled by ClojureScript 1.7.228 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__6455__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_8988 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_8988){
return (function (){
var _STAR_always_update_STAR_8989 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_8989;
}});})(_STAR_always_update_STAR_8988))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_8988;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args8990 = [];
var len__7513__auto___8993 = arguments.length;
var i__7514__auto___8994 = (0);
while(true){
if((i__7514__auto___8994 < len__7513__auto___8993)){
args8990.push((arguments[i__7514__auto___8994]));

var G__8995 = (i__7514__auto___8994 + (1));
i__7514__auto___8994 = G__8995;
continue;
} else {
}
break;
}

var G__8992 = args8990.length;
switch (G__8992) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8990.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__9001_9005 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__9002_9006 = null;
var count__9003_9007 = (0);
var i__9004_9008 = (0);
while(true){
if((i__9004_9008 < count__9003_9007)){
var v_9009 = cljs.core._nth.call(null,chunk__9002_9006,i__9004_9008);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_9009);

var G__9010 = seq__9001_9005;
var G__9011 = chunk__9002_9006;
var G__9012 = count__9003_9007;
var G__9013 = (i__9004_9008 + (1));
seq__9001_9005 = G__9010;
chunk__9002_9006 = G__9011;
count__9003_9007 = G__9012;
i__9004_9008 = G__9013;
continue;
} else {
var temp__4425__auto___9014 = cljs.core.seq.call(null,seq__9001_9005);
if(temp__4425__auto___9014){
var seq__9001_9015__$1 = temp__4425__auto___9014;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9001_9015__$1)){
var c__7258__auto___9016 = cljs.core.chunk_first.call(null,seq__9001_9015__$1);
var G__9017 = cljs.core.chunk_rest.call(null,seq__9001_9015__$1);
var G__9018 = c__7258__auto___9016;
var G__9019 = cljs.core.count.call(null,c__7258__auto___9016);
var G__9020 = (0);
seq__9001_9005 = G__9017;
chunk__9002_9006 = G__9018;
count__9003_9007 = G__9019;
i__9004_9008 = G__9020;
continue;
} else {
var v_9021 = cljs.core.first.call(null,seq__9001_9015__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_9021);

var G__9022 = cljs.core.next.call(null,seq__9001_9015__$1);
var G__9023 = null;
var G__9024 = (0);
var G__9025 = (0);
seq__9001_9005 = G__9022;
chunk__9002_9006 = G__9023;
count__9003_9007 = G__9024;
i__9004_9008 = G__9025;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map