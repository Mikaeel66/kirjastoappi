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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__45606){
var map__45607 = p__45606;
var map__45607__$1 = (((((!((map__45607 == null))))?(((((map__45607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45607):map__45607);
var operation = cljs.core.get.call(null,map__45607__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__45607__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__45607__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__45607__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__45609_45629 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__45610_45630 = null;
var count__45611_45631 = (0);
var i__45612_45632 = (0);
while(true){
if((i__45612_45632 < count__45611_45631)){
var vec__45621_45633 = cljs.core._nth.call(null,chunk__45610_45630,i__45612_45632);
var k_45634 = cljs.core.nth.call(null,vec__45621_45633,(0),null);
var cb_45635 = cljs.core.nth.call(null,vec__45621_45633,(1),null);
try{cb_45635.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e45624){var e_45636 = e45624;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_45634,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_45636);
}

var G__45637 = seq__45609_45629;
var G__45638 = chunk__45610_45630;
var G__45639 = count__45611_45631;
var G__45640 = (i__45612_45632 + (1));
seq__45609_45629 = G__45637;
chunk__45610_45630 = G__45638;
count__45611_45631 = G__45639;
i__45612_45632 = G__45640;
continue;
} else {
var temp__5735__auto___45641 = cljs.core.seq.call(null,seq__45609_45629);
if(temp__5735__auto___45641){
var seq__45609_45642__$1 = temp__5735__auto___45641;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45609_45642__$1)){
var c__4609__auto___45643 = cljs.core.chunk_first.call(null,seq__45609_45642__$1);
var G__45644 = cljs.core.chunk_rest.call(null,seq__45609_45642__$1);
var G__45645 = c__4609__auto___45643;
var G__45646 = cljs.core.count.call(null,c__4609__auto___45643);
var G__45647 = (0);
seq__45609_45629 = G__45644;
chunk__45610_45630 = G__45645;
count__45611_45631 = G__45646;
i__45612_45632 = G__45647;
continue;
} else {
var vec__45625_45648 = cljs.core.first.call(null,seq__45609_45642__$1);
var k_45649 = cljs.core.nth.call(null,vec__45625_45648,(0),null);
var cb_45650 = cljs.core.nth.call(null,vec__45625_45648,(1),null);
try{cb_45650.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e45628){var e_45651 = e45628;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_45649,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_45651);
}

var G__45652 = cljs.core.next.call(null,seq__45609_45642__$1);
var G__45653 = null;
var G__45654 = (0);
var G__45655 = (0);
seq__45609_45629 = G__45652;
chunk__45610_45630 = G__45653;
count__45611_45631 = G__45654;
i__45612_45632 = G__45655;
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

//# sourceMappingURL=trace.js.map?rel=1589676414520
