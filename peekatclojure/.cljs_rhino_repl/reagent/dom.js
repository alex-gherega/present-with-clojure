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
var or__17372__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__17372__auto__)){
return or__17372__auto__;
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
var _STAR_always_update_STAR_19232 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_19232){
return (function (){
var _STAR_always_update_STAR_19233 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_19233;
}});})(_STAR_always_update_STAR_19232))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_19232;
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
var args19234 = [];
var len__18430__auto___19237 = arguments.length;
var i__18431__auto___19238 = (0);
while(true){
if((i__18431__auto___19238 < len__18430__auto___19237)){
args19234.push((arguments[i__18431__auto___19238]));

var G__19239 = (i__18431__auto___19238 + (1));
i__18431__auto___19238 = G__19239;
continue;
} else {
}
break;
}

var G__19236 = args19234.length;
switch (G__19236) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19234.length)].join('')));

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

var seq__19245_19249 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__19246_19250 = null;
var count__19247_19251 = (0);
var i__19248_19252 = (0);
while(true){
if((i__19248_19252 < count__19247_19251)){
var v_19253 = cljs.core._nth.call(null,chunk__19246_19250,i__19248_19252);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_19253);

var G__19254 = seq__19245_19249;
var G__19255 = chunk__19246_19250;
var G__19256 = count__19247_19251;
var G__19257 = (i__19248_19252 + (1));
seq__19245_19249 = G__19254;
chunk__19246_19250 = G__19255;
count__19247_19251 = G__19256;
i__19248_19252 = G__19257;
continue;
} else {
var temp__4425__auto___19258 = cljs.core.seq.call(null,seq__19245_19249);
if(temp__4425__auto___19258){
var seq__19245_19259__$1 = temp__4425__auto___19258;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19245_19259__$1)){
var c__18175__auto___19260 = cljs.core.chunk_first.call(null,seq__19245_19259__$1);
var G__19261 = cljs.core.chunk_rest.call(null,seq__19245_19259__$1);
var G__19262 = c__18175__auto___19260;
var G__19263 = cljs.core.count.call(null,c__18175__auto___19260);
var G__19264 = (0);
seq__19245_19249 = G__19261;
chunk__19246_19250 = G__19262;
count__19247_19251 = G__19263;
i__19248_19252 = G__19264;
continue;
} else {
var v_19265 = cljs.core.first.call(null,seq__19245_19259__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_19265);

var G__19266 = cljs.core.next.call(null,seq__19245_19259__$1);
var G__19267 = null;
var G__19268 = (0);
var G__19269 = (0);
seq__19245_19249 = G__19266;
chunk__19246_19250 = G__19267;
count__19247_19251 = G__19268;
i__19248_19252 = G__19269;
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