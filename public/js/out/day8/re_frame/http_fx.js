// Compiled by ClojureScript 1.10.597 {}
goog.provide('day8.re_frame.http_fx');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('goog.net.XhrIo');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__43165){
var vec__43166 = p__43165;
var success_QMARK_ = cljs.core.nth.call(null,vec__43166,(0),null);
var response = cljs.core.nth.call(null,vec__43166,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return on_success.call(null,response);
} else {
var details = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode())], null),response);
return on_failure.call(null,details);
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__43171){
var map__43172 = p__43171;
var map__43172__$1 = (((((!((map__43172 == null))))?(((((map__43172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43172):map__43172);
var request = map__43172__$1;
var on_success = cljs.core.get.call(null,map__43172__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.call(null,map__43172__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"api","api",-899839580),api,new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.call(null,day8.re_frame.http_fx.ajax_xhrio_handler,(function (p1__43169_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_success,p1__43169_SHARP_));
}),(function (p1__43170_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_failure,p1__43170_SHARP_));
}),api)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_.call(null,request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__43174 = cljs.core.seq.call(null,seq_request_maps);
var chunk__43175 = null;
var count__43176 = (0);
var i__43177 = (0);
while(true){
if((i__43177 < count__43176)){
var request__$1 = cljs.core._nth.call(null,chunk__43175,i__43177);
ajax.core.ajax_request.call(null,day8.re_frame.http_fx.request__GT_xhrio_options.call(null,request__$1));


var G__43178 = seq__43174;
var G__43179 = chunk__43175;
var G__43180 = count__43176;
var G__43181 = (i__43177 + (1));
seq__43174 = G__43178;
chunk__43175 = G__43179;
count__43176 = G__43180;
i__43177 = G__43181;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__43174);
if(temp__5735__auto__){
var seq__43174__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43174__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__43174__$1);
var G__43182 = cljs.core.chunk_rest.call(null,seq__43174__$1);
var G__43183 = c__4609__auto__;
var G__43184 = cljs.core.count.call(null,c__4609__auto__);
var G__43185 = (0);
seq__43174 = G__43182;
chunk__43175 = G__43183;
count__43176 = G__43184;
i__43177 = G__43185;
continue;
} else {
var request__$1 = cljs.core.first.call(null,seq__43174__$1);
ajax.core.ajax_request.call(null,day8.re_frame.http_fx.request__GT_xhrio_options.call(null,request__$1));


var G__43186 = cljs.core.next.call(null,seq__43174__$1);
var G__43187 = null;
var G__43188 = (0);
var G__43189 = (0);
seq__43174 = G__43186;
chunk__43175 = G__43187;
count__43176 = G__43188;
i__43177 = G__43189;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),day8.re_frame.http_fx.http_effect);

//# sourceMappingURL=http_fx.js.map?rel=1589675442846
