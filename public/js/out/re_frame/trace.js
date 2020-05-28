// Compiled by ClojureScript 1.10.597 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__54078){
var map__54079 = p__54078;
var map__54079__$1 = (((((!((map__54079 == null))))?(((((map__54079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54079):map__54079);
var operation = cljs.core.get.call(null,map__54079__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__54079__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__54079__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__54079__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4185__auto__ = child_of;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__54081_54101 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__54082_54102 = null;
var count__54083_54103 = (0);
var i__54084_54104 = (0);
while(true){
if((i__54084_54104 < count__54083_54103)){
var vec__54093_54105 = cljs.core._nth.call(null,chunk__54082_54102,i__54084_54104);
var k_54106 = cljs.core.nth.call(null,vec__54093_54105,(0),null);
var cb_54107 = cljs.core.nth.call(null,vec__54093_54105,(1),null);
try{cb_54107.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e54096){var e_54108 = e54096;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_54106,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_54108);
}

var G__54109 = seq__54081_54101;
var G__54110 = chunk__54082_54102;
var G__54111 = count__54083_54103;
var G__54112 = (i__54084_54104 + (1));
seq__54081_54101 = G__54109;
chunk__54082_54102 = G__54110;
count__54083_54103 = G__54111;
i__54084_54104 = G__54112;
continue;
} else {
var temp__5735__auto___54113 = cljs.core.seq.call(null,seq__54081_54101);
if(temp__5735__auto___54113){
var seq__54081_54114__$1 = temp__5735__auto___54113;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54081_54114__$1)){
var c__4609__auto___54115 = cljs.core.chunk_first.call(null,seq__54081_54114__$1);
var G__54116 = cljs.core.chunk_rest.call(null,seq__54081_54114__$1);
var G__54117 = c__4609__auto___54115;
var G__54118 = cljs.core.count.call(null,c__4609__auto___54115);
var G__54119 = (0);
seq__54081_54101 = G__54116;
chunk__54082_54102 = G__54117;
count__54083_54103 = G__54118;
i__54084_54104 = G__54119;
continue;
} else {
var vec__54097_54120 = cljs.core.first.call(null,seq__54081_54114__$1);
var k_54121 = cljs.core.nth.call(null,vec__54097_54120,(0),null);
var cb_54122 = cljs.core.nth.call(null,vec__54097_54120,(1),null);
try{cb_54122.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e54100){var e_54123 = e54100;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_54121,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_54123);
}

var G__54124 = cljs.core.next.call(null,seq__54081_54114__$1);
var G__54125 = null;
var G__54126 = (0);
var G__54127 = (0);
seq__54081_54101 = G__54124;
chunk__54082_54102 = G__54125;
count__54083_54103 = G__54126;
i__54084_54104 = G__54127;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (25)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map?rel=1589677409652
