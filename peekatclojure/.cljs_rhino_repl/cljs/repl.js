// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18528_18542 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18529_18543 = null;
var count__18530_18544 = (0);
var i__18531_18545 = (0);
while(true){
if((i__18531_18545 < count__18530_18544)){
var f_18546 = cljs.core._nth.call(null,chunk__18529_18543,i__18531_18545);
cljs.core.println.call(null,"  ",f_18546);

var G__18547 = seq__18528_18542;
var G__18548 = chunk__18529_18543;
var G__18549 = count__18530_18544;
var G__18550 = (i__18531_18545 + (1));
seq__18528_18542 = G__18547;
chunk__18529_18543 = G__18548;
count__18530_18544 = G__18549;
i__18531_18545 = G__18550;
continue;
} else {
var temp__4425__auto___18551 = cljs.core.seq.call(null,seq__18528_18542);
if(temp__4425__auto___18551){
var seq__18528_18552__$1 = temp__4425__auto___18551;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18528_18552__$1)){
var c__18175__auto___18553 = cljs.core.chunk_first.call(null,seq__18528_18552__$1);
var G__18554 = cljs.core.chunk_rest.call(null,seq__18528_18552__$1);
var G__18555 = c__18175__auto___18553;
var G__18556 = cljs.core.count.call(null,c__18175__auto___18553);
var G__18557 = (0);
seq__18528_18542 = G__18554;
chunk__18529_18543 = G__18555;
count__18530_18544 = G__18556;
i__18531_18545 = G__18557;
continue;
} else {
var f_18558 = cljs.core.first.call(null,seq__18528_18552__$1);
cljs.core.println.call(null,"  ",f_18558);

var G__18559 = cljs.core.next.call(null,seq__18528_18552__$1);
var G__18560 = null;
var G__18561 = (0);
var G__18562 = (0);
seq__18528_18542 = G__18559;
chunk__18529_18543 = G__18560;
count__18530_18544 = G__18561;
i__18531_18545 = G__18562;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18563 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__17372__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__17372__auto__)){
return or__17372__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_18563);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_18563)))?cljs.core.second.call(null,arglists_18563):arglists_18563));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18532 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18533 = null;
var count__18534 = (0);
var i__18535 = (0);
while(true){
if((i__18535 < count__18534)){
var vec__18536 = cljs.core._nth.call(null,chunk__18533,i__18535);
var name = cljs.core.nth.call(null,vec__18536,(0),null);
var map__18537 = cljs.core.nth.call(null,vec__18536,(1),null);
var map__18537__$1 = ((((!((map__18537 == null)))?((((map__18537.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18537.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18537):map__18537);
var doc = cljs.core.get.call(null,map__18537__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__18537__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__18564 = seq__18532;
var G__18565 = chunk__18533;
var G__18566 = count__18534;
var G__18567 = (i__18535 + (1));
seq__18532 = G__18564;
chunk__18533 = G__18565;
count__18534 = G__18566;
i__18535 = G__18567;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__18532);
if(temp__4425__auto__){
var seq__18532__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18532__$1)){
var c__18175__auto__ = cljs.core.chunk_first.call(null,seq__18532__$1);
var G__18568 = cljs.core.chunk_rest.call(null,seq__18532__$1);
var G__18569 = c__18175__auto__;
var G__18570 = cljs.core.count.call(null,c__18175__auto__);
var G__18571 = (0);
seq__18532 = G__18568;
chunk__18533 = G__18569;
count__18534 = G__18570;
i__18535 = G__18571;
continue;
} else {
var vec__18539 = cljs.core.first.call(null,seq__18532__$1);
var name = cljs.core.nth.call(null,vec__18539,(0),null);
var map__18540 = cljs.core.nth.call(null,vec__18539,(1),null);
var map__18540__$1 = ((((!((map__18540 == null)))?((((map__18540.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18540.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18540):map__18540);
var doc = cljs.core.get.call(null,map__18540__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__18540__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__18572 = cljs.core.next.call(null,seq__18532__$1);
var G__18573 = null;
var G__18574 = (0);
var G__18575 = (0);
seq__18532 = G__18572;
chunk__18533 = G__18573;
count__18534 = G__18574;
i__18535 = G__18575;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map