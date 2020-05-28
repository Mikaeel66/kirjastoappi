// Compiled by ClojureScript 1.10.597 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.call(null,(function (headers,header_line){
if(goog.string.isEmptyOrWhitespace(header_line)){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.call(null,headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__53504,handler){
var map__53505 = p__53504;
var map__53505__$1 = (((((!((map__53505 == null))))?(((((map__53505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53505):map__53505);
var uri = cljs.core.get.call(null,map__53505__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__53505__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__53505__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__53505__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__53505__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__53505__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__53505__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__53503_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__53503_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5735__auto___53523 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___53523)){
var response_type_53524 = temp__5735__auto___53523;
(this$__$1.responseType = cljs.core.name.call(null,response_type_53524));
} else {
}

var seq__53507_53525 = cljs.core.seq.call(null,headers);
var chunk__53508_53526 = null;
var count__53509_53527 = (0);
var i__53510_53528 = (0);
while(true){
if((i__53510_53528 < count__53509_53527)){
var vec__53517_53529 = cljs.core._nth.call(null,chunk__53508_53526,i__53510_53528);
var k_53530 = cljs.core.nth.call(null,vec__53517_53529,(0),null);
var v_53531 = cljs.core.nth.call(null,vec__53517_53529,(1),null);
this$__$1.setRequestHeader(k_53530,v_53531);


var G__53532 = seq__53507_53525;
var G__53533 = chunk__53508_53526;
var G__53534 = count__53509_53527;
var G__53535 = (i__53510_53528 + (1));
seq__53507_53525 = G__53532;
chunk__53508_53526 = G__53533;
count__53509_53527 = G__53534;
i__53510_53528 = G__53535;
continue;
} else {
var temp__5735__auto___53536 = cljs.core.seq.call(null,seq__53507_53525);
if(temp__5735__auto___53536){
var seq__53507_53537__$1 = temp__5735__auto___53536;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53507_53537__$1)){
var c__4609__auto___53538 = cljs.core.chunk_first.call(null,seq__53507_53537__$1);
var G__53539 = cljs.core.chunk_rest.call(null,seq__53507_53537__$1);
var G__53540 = c__4609__auto___53538;
var G__53541 = cljs.core.count.call(null,c__4609__auto___53538);
var G__53542 = (0);
seq__53507_53525 = G__53539;
chunk__53508_53526 = G__53540;
count__53509_53527 = G__53541;
i__53510_53528 = G__53542;
continue;
} else {
var vec__53520_53543 = cljs.core.first.call(null,seq__53507_53537__$1);
var k_53544 = cljs.core.nth.call(null,vec__53520_53543,(0),null);
var v_53545 = cljs.core.nth.call(null,vec__53520_53543,(1),null);
this$__$1.setRequestHeader(k_53544,v_53545);


var G__53546 = cljs.core.next.call(null,seq__53507_53537__$1);
var G__53547 = null;
var G__53548 = (0);
var G__53549 = (0);
seq__53507_53525 = G__53546;
chunk__53508_53526 = G__53547;
count__53509_53527 = G__53548;
i__53510_53528 = G__53549;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4185__auto__ = body;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers.call(null,this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
}));

//# sourceMappingURL=xml_http_request.js.map?rel=1589677408658
