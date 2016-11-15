// Compiled by ClojureScript 1.7.228 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__19272__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__19272 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19273__i = 0, G__19273__a = new Array(arguments.length -  0);
while (G__19273__i < G__19273__a.length) {G__19273__a[G__19273__i] = arguments[G__19273__i + 0]; ++G__19273__i;}
  args = new cljs.core.IndexedSeq(G__19273__a,0);
} 
return G__19272__delegate.call(this,args);};
G__19272.cljs$lang$maxFixedArity = 0;
G__19272.cljs$lang$applyTo = (function (arglist__19274){
var args = cljs.core.seq(arglist__19274);
return G__19272__delegate(args);
});
G__19272.cljs$core$IFn$_invoke$arity$variadic = G__19272__delegate;
return G__19272;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__19275__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__19275 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19276__i = 0, G__19276__a = new Array(arguments.length -  0);
while (G__19276__i < G__19276__a.length) {G__19276__a[G__19276__i] = arguments[G__19276__i + 0]; ++G__19276__i;}
  args = new cljs.core.IndexedSeq(G__19276__a,0);
} 
return G__19275__delegate.call(this,args);};
G__19275.cljs$lang$maxFixedArity = 0;
G__19275.cljs$lang$applyTo = (function (arglist__19277){
var args = cljs.core.seq(arglist__19277);
return G__19275__delegate(args);
});
G__19275.cljs$core$IFn$_invoke$arity$variadic = G__19275__delegate;
return G__19275;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map