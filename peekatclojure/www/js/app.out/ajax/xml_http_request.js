// Compiled by ClojureScript 1.7.228 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__7576,handler){
var map__7577 = p__7576;
var map__7577__$1 = ((((!((map__7577 == null)))?((((map__7577.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7577.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7577):map__7577);
var uri = cljs.core.get.call(null,map__7577__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__7577__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__7577__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__7577__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__7577__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__7577__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__7577__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__7577,map__7577__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__7575_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__7575_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__7577,map__7577__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___7585 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___7585)){
var response_type_7586 = temp__4425__auto___7585;
this$__$1.responseType = cljs.core.name.call(null,response_type_7586);
} else {
}

var seq__7579_7587 = cljs.core.seq.call(null,headers);
var chunk__7580_7588 = null;
var count__7581_7589 = (0);
var i__7582_7590 = (0);
while(true){
if((i__7582_7590 < count__7581_7589)){
var vec__7583_7591 = cljs.core._nth.call(null,chunk__7580_7588,i__7582_7590);
var k_7592 = cljs.core.nth.call(null,vec__7583_7591,(0),null);
var v_7593 = cljs.core.nth.call(null,vec__7583_7591,(1),null);
this$__$1.setRequestHeader(k_7592,v_7593);

var G__7594 = seq__7579_7587;
var G__7595 = chunk__7580_7588;
var G__7596 = count__7581_7589;
var G__7597 = (i__7582_7590 + (1));
seq__7579_7587 = G__7594;
chunk__7580_7588 = G__7595;
count__7581_7589 = G__7596;
i__7582_7590 = G__7597;
continue;
} else {
var temp__4425__auto___7598 = cljs.core.seq.call(null,seq__7579_7587);
if(temp__4425__auto___7598){
var seq__7579_7599__$1 = temp__4425__auto___7598;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7579_7599__$1)){
var c__7258__auto___7600 = cljs.core.chunk_first.call(null,seq__7579_7599__$1);
var G__7601 = cljs.core.chunk_rest.call(null,seq__7579_7599__$1);
var G__7602 = c__7258__auto___7600;
var G__7603 = cljs.core.count.call(null,c__7258__auto___7600);
var G__7604 = (0);
seq__7579_7587 = G__7601;
chunk__7580_7588 = G__7602;
count__7581_7589 = G__7603;
i__7582_7590 = G__7604;
continue;
} else {
var vec__7584_7605 = cljs.core.first.call(null,seq__7579_7599__$1);
var k_7606 = cljs.core.nth.call(null,vec__7584_7605,(0),null);
var v_7607 = cljs.core.nth.call(null,vec__7584_7605,(1),null);
this$__$1.setRequestHeader(k_7606,v_7607);

var G__7608 = cljs.core.next.call(null,seq__7579_7599__$1);
var G__7609 = null;
var G__7610 = (0);
var G__7611 = (0);
seq__7579_7587 = G__7608;
chunk__7580_7588 = G__7609;
count__7581_7589 = G__7610;
i__7582_7590 = G__7611;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__6455__auto__ = body;
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map