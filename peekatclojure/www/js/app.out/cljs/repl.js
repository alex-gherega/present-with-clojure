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
var seq__9868_9882 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9869_9883 = null;
var count__9870_9884 = (0);
var i__9871_9885 = (0);
while(true){
if((i__9871_9885 < count__9870_9884)){
var f_9886 = cljs.core._nth.call(null,chunk__9869_9883,i__9871_9885);
cljs.core.println.call(null,"  ",f_9886);

var G__9887 = seq__9868_9882;
var G__9888 = chunk__9869_9883;
var G__9889 = count__9870_9884;
var G__9890 = (i__9871_9885 + (1));
seq__9868_9882 = G__9887;
chunk__9869_9883 = G__9888;
count__9870_9884 = G__9889;
i__9871_9885 = G__9890;
continue;
} else {
var temp__4425__auto___9891 = cljs.core.seq.call(null,seq__9868_9882);
if(temp__4425__auto___9891){
var seq__9868_9892__$1 = temp__4425__auto___9891;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9868_9892__$1)){
var c__7258__auto___9893 = cljs.core.chunk_first.call(null,seq__9868_9892__$1);
var G__9894 = cljs.core.chunk_rest.call(null,seq__9868_9892__$1);
var G__9895 = c__7258__auto___9893;
var G__9896 = cljs.core.count.call(null,c__7258__auto___9893);
var G__9897 = (0);
seq__9868_9882 = G__9894;
chunk__9869_9883 = G__9895;
count__9870_9884 = G__9896;
i__9871_9885 = G__9897;
continue;
} else {
var f_9898 = cljs.core.first.call(null,seq__9868_9892__$1);
cljs.core.println.call(null,"  ",f_9898);

var G__9899 = cljs.core.next.call(null,seq__9868_9892__$1);
var G__9900 = null;
var G__9901 = (0);
var G__9902 = (0);
seq__9868_9882 = G__9899;
chunk__9869_9883 = G__9900;
count__9870_9884 = G__9901;
i__9871_9885 = G__9902;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_9903 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6455__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_9903);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_9903)))?cljs.core.second.call(null,arglists_9903):arglists_9903));
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
var seq__9872 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9873 = null;
var count__9874 = (0);
var i__9875 = (0);
while(true){
if((i__9875 < count__9874)){
var vec__9876 = cljs.core._nth.call(null,chunk__9873,i__9875);
var name = cljs.core.nth.call(null,vec__9876,(0),null);
var map__9877 = cljs.core.nth.call(null,vec__9876,(1),null);
var map__9877__$1 = ((((!((map__9877 == null)))?((((map__9877.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9877.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9877):map__9877);
var doc = cljs.core.get.call(null,map__9877__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__9877__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__9904 = seq__9872;
var G__9905 = chunk__9873;
var G__9906 = count__9874;
var G__9907 = (i__9875 + (1));
seq__9872 = G__9904;
chunk__9873 = G__9905;
count__9874 = G__9906;
i__9875 = G__9907;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9872);
if(temp__4425__auto__){
var seq__9872__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9872__$1)){
var c__7258__auto__ = cljs.core.chunk_first.call(null,seq__9872__$1);
var G__9908 = cljs.core.chunk_rest.call(null,seq__9872__$1);
var G__9909 = c__7258__auto__;
var G__9910 = cljs.core.count.call(null,c__7258__auto__);
var G__9911 = (0);
seq__9872 = G__9908;
chunk__9873 = G__9909;
count__9874 = G__9910;
i__9875 = G__9911;
continue;
} else {
var vec__9879 = cljs.core.first.call(null,seq__9872__$1);
var name = cljs.core.nth.call(null,vec__9879,(0),null);
var map__9880 = cljs.core.nth.call(null,vec__9879,(1),null);
var map__9880__$1 = ((((!((map__9880 == null)))?((((map__9880.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9880.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9880):map__9880);
var doc = cljs.core.get.call(null,map__9880__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__9880__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__9912 = cljs.core.next.call(null,seq__9872__$1);
var G__9913 = null;
var G__9914 = (0);
var G__9915 = (0);
seq__9872 = G__9912;
chunk__9873 = G__9913;
count__9874 = G__9914;
i__9875 = G__9915;
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