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
var seq__9872_9886 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9873_9887 = null;
var count__9874_9888 = (0);
var i__9875_9889 = (0);
while(true){
if((i__9875_9889 < count__9874_9888)){
var f_9890 = cljs.core._nth.call(null,chunk__9873_9887,i__9875_9889);
cljs.core.println.call(null,"  ",f_9890);

var G__9891 = seq__9872_9886;
var G__9892 = chunk__9873_9887;
var G__9893 = count__9874_9888;
var G__9894 = (i__9875_9889 + (1));
seq__9872_9886 = G__9891;
chunk__9873_9887 = G__9892;
count__9874_9888 = G__9893;
i__9875_9889 = G__9894;
continue;
} else {
var temp__4425__auto___9895 = cljs.core.seq.call(null,seq__9872_9886);
if(temp__4425__auto___9895){
var seq__9872_9896__$1 = temp__4425__auto___9895;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9872_9896__$1)){
var c__7258__auto___9897 = cljs.core.chunk_first.call(null,seq__9872_9896__$1);
var G__9898 = cljs.core.chunk_rest.call(null,seq__9872_9896__$1);
var G__9899 = c__7258__auto___9897;
var G__9900 = cljs.core.count.call(null,c__7258__auto___9897);
var G__9901 = (0);
seq__9872_9886 = G__9898;
chunk__9873_9887 = G__9899;
count__9874_9888 = G__9900;
i__9875_9889 = G__9901;
continue;
} else {
var f_9902 = cljs.core.first.call(null,seq__9872_9896__$1);
cljs.core.println.call(null,"  ",f_9902);

var G__9903 = cljs.core.next.call(null,seq__9872_9896__$1);
var G__9904 = null;
var G__9905 = (0);
var G__9906 = (0);
seq__9872_9886 = G__9903;
chunk__9873_9887 = G__9904;
count__9874_9888 = G__9905;
i__9875_9889 = G__9906;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_9907 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6455__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_9907);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_9907)))?cljs.core.second.call(null,arglists_9907):arglists_9907));
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
var seq__9876 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9877 = null;
var count__9878 = (0);
var i__9879 = (0);
while(true){
if((i__9879 < count__9878)){
var vec__9880 = cljs.core._nth.call(null,chunk__9877,i__9879);
var name = cljs.core.nth.call(null,vec__9880,(0),null);
var map__9881 = cljs.core.nth.call(null,vec__9880,(1),null);
var map__9881__$1 = ((((!((map__9881 == null)))?((((map__9881.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9881.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9881):map__9881);
var doc = cljs.core.get.call(null,map__9881__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__9881__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__9908 = seq__9876;
var G__9909 = chunk__9877;
var G__9910 = count__9878;
var G__9911 = (i__9879 + (1));
seq__9876 = G__9908;
chunk__9877 = G__9909;
count__9878 = G__9910;
i__9879 = G__9911;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9876);
if(temp__4425__auto__){
var seq__9876__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9876__$1)){
var c__7258__auto__ = cljs.core.chunk_first.call(null,seq__9876__$1);
var G__9912 = cljs.core.chunk_rest.call(null,seq__9876__$1);
var G__9913 = c__7258__auto__;
var G__9914 = cljs.core.count.call(null,c__7258__auto__);
var G__9915 = (0);
seq__9876 = G__9912;
chunk__9877 = G__9913;
count__9878 = G__9914;
i__9879 = G__9915;
continue;
} else {
var vec__9883 = cljs.core.first.call(null,seq__9876__$1);
var name = cljs.core.nth.call(null,vec__9883,(0),null);
var map__9884 = cljs.core.nth.call(null,vec__9883,(1),null);
var map__9884__$1 = ((((!((map__9884 == null)))?((((map__9884.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9884.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9884):map__9884);
var doc = cljs.core.get.call(null,map__9884__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__9884__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__9916 = cljs.core.next.call(null,seq__9876__$1);
var G__9917 = null;
var G__9918 = (0);
var G__9919 = (0);
seq__9876 = G__9916;
chunk__9877 = G__9917;
count__9878 = G__9918;
i__9879 = G__9919;
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