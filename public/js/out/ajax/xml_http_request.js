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

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__44861,handler){
var map__44862 = p__44861;
var map__44862__$1 = (((((!((map__44862 == null))))?(((((map__44862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44862):map__44862);
var uri = cljs.core.get.call(null,map__44862__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__44862__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__44862__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__44862__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__44862__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__44862__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__44862__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__44860_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__44860_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5735__auto___44880 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___44880)){
var response_type_44881 = temp__5735__auto___44880;
(this$__$1.responseType = cljs.core.name.call(null,response_type_44881));
} else {
}

var seq__44864_44882 = cljs.core.seq.call(null,headers);
var chunk__44865_44883 = null;
var count__44866_44884 = (0);
var i__44867_44885 = (0);
while(true){
if((i__44867_44885 < count__44866_44884)){
var vec__44874_44886 = cljs.core._nth.call(null,chunk__44865_44883,i__44867_44885);
var k_44887 = cljs.core.nth.call(null,vec__44874_44886,(0),null);
var v_44888 = cljs.core.nth.call(null,vec__44874_44886,(1),null);
this$__$1.setRequestHeader(k_44887,v_44888);


var G__44889 = seq__44864_44882;
var G__44890 = chunk__44865_44883;
var G__44891 = count__44866_44884;
var G__44892 = (i__44867_44885 + (1));
seq__44864_44882 = G__44889;
chunk__44865_44883 = G__44890;
count__44866_44884 = G__44891;
i__44867_44885 = G__44892;
continue;
} else {
var temp__5735__auto___44893 = cljs.core.seq.call(null,seq__44864_44882);
if(temp__5735__auto___44893){
var seq__44864_44894__$1 = temp__5735__auto___44893;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44864_44894__$1)){
var c__4609__auto___44895 = cljs.core.chunk_first.call(null,seq__44864_44894__$1);
var G__44896 = cljs.core.chunk_rest.call(null,seq__44864_44894__$1);
var G__44897 = c__4609__auto___44895;
var G__44898 = cljs.core.count.call(null,c__4609__auto___44895);
var G__44899 = (0);
seq__44864_44882 = G__44896;
chunk__44865_44883 = G__44897;
count__44866_44884 = G__44898;
i__44867_44885 = G__44899;
continue;
} else {
var vec__44877_44900 = cljs.core.first.call(null,seq__44864_44894__$1);
var k_44901 = cljs.core.nth.call(null,vec__44877_44900,(0),null);
var v_44902 = cljs.core.nth.call(null,vec__44877_44900,(1),null);
this$__$1.setRequestHeader(k_44901,v_44902);


var G__44903 = cljs.core.next.call(null,seq__44864_44894__$1);
var G__44904 = null;
var G__44905 = (0);
var G__44906 = (0);
seq__44864_44882 = G__44903;
chunk__44865_44883 = G__44904;
count__44866_44884 = G__44905;
i__44867_44885 = G__44906;
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

//# sourceMappingURL=xml_http_request.js.map?rel=1589676412520
