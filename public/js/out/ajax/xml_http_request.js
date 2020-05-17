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

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__42198,handler){
var map__42199 = p__42198;
var map__42199__$1 = (((((!((map__42199 == null))))?(((((map__42199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42199):map__42199);
var uri = cljs.core.get.call(null,map__42199__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__42199__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__42199__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__42199__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__42199__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__42199__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__42199__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__42197_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__42197_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5735__auto___42217 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___42217)){
var response_type_42218 = temp__5735__auto___42217;
(this$__$1.responseType = cljs.core.name.call(null,response_type_42218));
} else {
}

var seq__42201_42219 = cljs.core.seq.call(null,headers);
var chunk__42202_42220 = null;
var count__42203_42221 = (0);
var i__42204_42222 = (0);
while(true){
if((i__42204_42222 < count__42203_42221)){
var vec__42211_42223 = cljs.core._nth.call(null,chunk__42202_42220,i__42204_42222);
var k_42224 = cljs.core.nth.call(null,vec__42211_42223,(0),null);
var v_42225 = cljs.core.nth.call(null,vec__42211_42223,(1),null);
this$__$1.setRequestHeader(k_42224,v_42225);


var G__42226 = seq__42201_42219;
var G__42227 = chunk__42202_42220;
var G__42228 = count__42203_42221;
var G__42229 = (i__42204_42222 + (1));
seq__42201_42219 = G__42226;
chunk__42202_42220 = G__42227;
count__42203_42221 = G__42228;
i__42204_42222 = G__42229;
continue;
} else {
var temp__5735__auto___42230 = cljs.core.seq.call(null,seq__42201_42219);
if(temp__5735__auto___42230){
var seq__42201_42231__$1 = temp__5735__auto___42230;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42201_42231__$1)){
var c__4609__auto___42232 = cljs.core.chunk_first.call(null,seq__42201_42231__$1);
var G__42233 = cljs.core.chunk_rest.call(null,seq__42201_42231__$1);
var G__42234 = c__4609__auto___42232;
var G__42235 = cljs.core.count.call(null,c__4609__auto___42232);
var G__42236 = (0);
seq__42201_42219 = G__42233;
chunk__42202_42220 = G__42234;
count__42203_42221 = G__42235;
i__42204_42222 = G__42236;
continue;
} else {
var vec__42214_42237 = cljs.core.first.call(null,seq__42201_42231__$1);
var k_42238 = cljs.core.nth.call(null,vec__42214_42237,(0),null);
var v_42239 = cljs.core.nth.call(null,vec__42214_42237,(1),null);
this$__$1.setRequestHeader(k_42238,v_42239);


var G__42240 = cljs.core.next.call(null,seq__42201_42231__$1);
var G__42241 = null;
var G__42242 = (0);
var G__42243 = (0);
seq__42201_42219 = G__42240;
chunk__42202_42220 = G__42241;
count__42203_42221 = G__42242;
i__42204_42222 = G__42243;
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

//# sourceMappingURL=xml_http_request.js.map?rel=1589675441405
