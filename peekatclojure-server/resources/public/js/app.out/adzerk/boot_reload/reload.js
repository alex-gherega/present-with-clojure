// Compiled by ClojureScript 1.7.228 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (function adzerk$boot_reload$reload$page_uri(){
return (new goog.Uri(window.location.href));
});
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.call(null).resolve(uri).getPath();
});
adzerk.boot_reload.reload.changed_href_QMARK_ = (function adzerk$boot_reload$reload$changed_href_QMARK_(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__7874_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__7874_SHARP_),path);
});})(path))
,changed)))){
return goog.Uri.parse(path);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__7879 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__7880 = null;
var count__7881 = (0);
var i__7882 = (0);
while(true){
if((i__7882 < count__7881)){
var s = cljs.core._nth.call(null,chunk__7880,i__7882);
var temp__4425__auto___7883 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___7883)){
var sheet_7884 = temp__4425__auto___7883;
var temp__4425__auto___7885__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_7884.href,changed);
if(cljs.core.truth_(temp__4425__auto___7885__$1)){
var href_uri_7886 = temp__4425__auto___7885__$1;
sheet_7884.ownerNode.href = href_uri_7886.makeUnique().toString();
} else {
}
} else {
}

var G__7887 = seq__7879;
var G__7888 = chunk__7880;
var G__7889 = count__7881;
var G__7890 = (i__7882 + (1));
seq__7879 = G__7887;
chunk__7880 = G__7888;
count__7881 = G__7889;
i__7882 = G__7890;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7879);
if(temp__4425__auto__){
var seq__7879__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7879__$1)){
var c__7258__auto__ = cljs.core.chunk_first.call(null,seq__7879__$1);
var G__7891 = cljs.core.chunk_rest.call(null,seq__7879__$1);
var G__7892 = c__7258__auto__;
var G__7893 = cljs.core.count.call(null,c__7258__auto__);
var G__7894 = (0);
seq__7879 = G__7891;
chunk__7880 = G__7892;
count__7881 = G__7893;
i__7882 = G__7894;
continue;
} else {
var s = cljs.core.first.call(null,seq__7879__$1);
var temp__4425__auto___7895__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___7895__$1)){
var sheet_7896 = temp__4425__auto___7895__$1;
var temp__4425__auto___7897__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_7896.href,changed);
if(cljs.core.truth_(temp__4425__auto___7897__$2)){
var href_uri_7898 = temp__4425__auto___7897__$2;
sheet_7896.ownerNode.href = href_uri_7898.makeUnique().toString();
} else {
}
} else {
}

var G__7899 = cljs.core.next.call(null,seq__7879__$1);
var G__7900 = null;
var G__7901 = (0);
var G__7902 = (0);
seq__7879 = G__7899;
chunk__7880 = G__7900;
count__7881 = G__7901;
i__7882 = G__7902;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__7907 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__7908 = null;
var count__7909 = (0);
var i__7910 = (0);
while(true){
if((i__7910 < count__7909)){
var s = cljs.core._nth.call(null,chunk__7908,i__7910);
var temp__4425__auto___7911 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___7911)){
var image_7912 = temp__4425__auto___7911;
var temp__4425__auto___7913__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_7912.src,changed);
if(cljs.core.truth_(temp__4425__auto___7913__$1)){
var href_uri_7914 = temp__4425__auto___7913__$1;
image_7912.src = href_uri_7914.makeUnique().toString();
} else {
}
} else {
}

var G__7915 = seq__7907;
var G__7916 = chunk__7908;
var G__7917 = count__7909;
var G__7918 = (i__7910 + (1));
seq__7907 = G__7915;
chunk__7908 = G__7916;
count__7909 = G__7917;
i__7910 = G__7918;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7907);
if(temp__4425__auto__){
var seq__7907__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7907__$1)){
var c__7258__auto__ = cljs.core.chunk_first.call(null,seq__7907__$1);
var G__7919 = cljs.core.chunk_rest.call(null,seq__7907__$1);
var G__7920 = c__7258__auto__;
var G__7921 = cljs.core.count.call(null,c__7258__auto__);
var G__7922 = (0);
seq__7907 = G__7919;
chunk__7908 = G__7920;
count__7909 = G__7921;
i__7910 = G__7922;
continue;
} else {
var s = cljs.core.first.call(null,seq__7907__$1);
var temp__4425__auto___7923__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___7923__$1)){
var image_7924 = temp__4425__auto___7923__$1;
var temp__4425__auto___7925__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_7924.src,changed);
if(cljs.core.truth_(temp__4425__auto___7925__$2)){
var href_uri_7926 = temp__4425__auto___7925__$2;
image_7924.src = href_uri_7926.makeUnique().toString();
} else {
}
} else {
}

var G__7927 = cljs.core.next.call(null,seq__7907__$1);
var G__7928 = null;
var G__7929 = (0);
var G__7930 = (0);
seq__7907 = G__7927;
chunk__7908 = G__7928;
count__7909 = G__7929;
i__7910 = G__7930;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__7933){
var map__7936 = p__7933;
var map__7936__$1 = ((((!((map__7936 == null)))?((((map__7936.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7936.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7936):map__7936);
var on_jsload = cljs.core.get.call(null,map__7936__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__7936,map__7936__$1,on_jsload){
return (function (p1__7931_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__7931_SHARP_,".js");
});})(map__7936,map__7936__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.net.jsloader.loadMany(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__7936,map__7936__$1,on_jsload){
return (function (p1__7932_SHARP_){
return goog.Uri.parse(p1__7932_SHARP_).makeUnique();
});})(js_files,map__7936,map__7936__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__7936,map__7936__$1,on_jsload){
return (function() { 
var G__7938__delegate = function (_){
return on_jsload.call(null);
};
var G__7938 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__7939__i = 0, G__7939__a = new Array(arguments.length -  0);
while (G__7939__i < G__7939__a.length) {G__7939__a[G__7939__i] = arguments[G__7939__i + 0]; ++G__7939__i;}
  _ = new cljs.core.IndexedSeq(G__7939__a,0);
} 
return G__7938__delegate.call(this,_);};
G__7938.cljs$lang$maxFixedArity = 0;
G__7938.cljs$lang$applyTo = (function (arglist__7940){
var _ = cljs.core.seq(arglist__7940);
return G__7938__delegate(_);
});
G__7938.cljs$core$IFn$_invoke$arity$variadic = G__7938__delegate;
return G__7938;
})()
;})(js_files,map__7936,map__7936__$1,on_jsload))
,((function (js_files,map__7936,map__7936__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__7936,map__7936__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.call(null).getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_href_QMARK_.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__7945_7949 = cljs.core.seq.call(null,things_to_log);
var chunk__7946_7950 = null;
var count__7947_7951 = (0);
var i__7948_7952 = (0);
while(true){
if((i__7948_7952 < count__7947_7951)){
var t_7953 = cljs.core._nth.call(null,chunk__7946_7950,i__7948_7952);
console.log(t_7953);

var G__7954 = seq__7945_7949;
var G__7955 = chunk__7946_7950;
var G__7956 = count__7947_7951;
var G__7957 = (i__7948_7952 + (1));
seq__7945_7949 = G__7954;
chunk__7946_7950 = G__7955;
count__7947_7951 = G__7956;
i__7948_7952 = G__7957;
continue;
} else {
var temp__4425__auto___7958 = cljs.core.seq.call(null,seq__7945_7949);
if(temp__4425__auto___7958){
var seq__7945_7959__$1 = temp__4425__auto___7958;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7945_7959__$1)){
var c__7258__auto___7960 = cljs.core.chunk_first.call(null,seq__7945_7959__$1);
var G__7961 = cljs.core.chunk_rest.call(null,seq__7945_7959__$1);
var G__7962 = c__7258__auto___7960;
var G__7963 = cljs.core.count.call(null,c__7258__auto___7960);
var G__7964 = (0);
seq__7945_7949 = G__7961;
chunk__7946_7950 = G__7962;
count__7947_7951 = G__7963;
i__7948_7952 = G__7964;
continue;
} else {
var t_7965 = cljs.core.first.call(null,seq__7945_7959__$1);
console.log(t_7965);

var G__7966 = cljs.core.next.call(null,seq__7945_7959__$1);
var G__7967 = null;
var G__7968 = (0);
var G__7969 = (0);
seq__7945_7949 = G__7966;
chunk__7946_7950 = G__7967;
count__7947_7951 = G__7968;
i__7948_7952 = G__7969;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
/**
 * Perform heuristics to check if a non-shimmed DOM is available
 */
adzerk.boot_reload.reload.has_dom_QMARK_ = (function adzerk$boot_reload$reload$has_dom_QMARK_(){
return (typeof window !== 'undefined') && (typeof window.document !== 'undefined') && (typeof window.document.documentURI !== 'undefined');
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
var changed_STAR_ = cljs.core.map.call(null,(function (p1__7970_SHARP_){
return [cljs.core.str(new cljs.core.Keyword(null,"asset-host","asset-host",-899289050).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(p1__7970_SHARP_)].join('');
}),changed);
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed_STAR_);

adzerk.boot_reload.reload.reload_js.call(null,changed_STAR_,opts);

if(cljs.core.truth_(adzerk.boot_reload.reload.has_dom_QMARK_.call(null))){
var G__7972 = changed_STAR_;
adzerk.boot_reload.reload.reload_html.call(null,G__7972);

adzerk.boot_reload.reload.reload_css.call(null,G__7972);

adzerk.boot_reload.reload.reload_img.call(null,G__7972);

return G__7972;
} else {
return null;
}
});

//# sourceMappingURL=reload.js.map