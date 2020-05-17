// Compiled by ClojureScript 1.10.597 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__46377 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__46378 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__46378);

try{try{var seq__46379 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__46380 = null;
var count__46381 = (0);
var i__46382 = (0);
while(true){
if((i__46382 < count__46381)){
var vec__46389 = cljs.core._nth.call(null,chunk__46380,i__46382);
var effect_key = cljs.core.nth.call(null,vec__46389,(0),null);
var effect_value = cljs.core.nth.call(null,vec__46389,(1),null);
var temp__5733__auto___46411 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46411)){
var effect_fn_46412 = temp__5733__auto___46411;
effect_fn_46412.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__46413 = seq__46379;
var G__46414 = chunk__46380;
var G__46415 = count__46381;
var G__46416 = (i__46382 + (1));
seq__46379 = G__46413;
chunk__46380 = G__46414;
count__46381 = G__46415;
i__46382 = G__46416;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__46379);
if(temp__5735__auto__){
var seq__46379__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46379__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__46379__$1);
var G__46417 = cljs.core.chunk_rest.call(null,seq__46379__$1);
var G__46418 = c__4609__auto__;
var G__46419 = cljs.core.count.call(null,c__4609__auto__);
var G__46420 = (0);
seq__46379 = G__46417;
chunk__46380 = G__46418;
count__46381 = G__46419;
i__46382 = G__46420;
continue;
} else {
var vec__46392 = cljs.core.first.call(null,seq__46379__$1);
var effect_key = cljs.core.nth.call(null,vec__46392,(0),null);
var effect_value = cljs.core.nth.call(null,vec__46392,(1),null);
var temp__5733__auto___46421 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46421)){
var effect_fn_46422 = temp__5733__auto___46421;
effect_fn_46422.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__46423 = cljs.core.next.call(null,seq__46379__$1);
var G__46424 = null;
var G__46425 = (0);
var G__46426 = (0);
seq__46379 = G__46423;
chunk__46380 = G__46424;
count__46381 = G__46425;
i__46382 = G__46426;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__26523__auto___46427 = re_frame.interop.now.call(null);
var duration__26524__auto___46428 = (end__26523__auto___46427 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__26524__auto___46428,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__26523__auto___46427);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__46377);
}} else {
var seq__46395 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__46396 = null;
var count__46397 = (0);
var i__46398 = (0);
while(true){
if((i__46398 < count__46397)){
var vec__46405 = cljs.core._nth.call(null,chunk__46396,i__46398);
var effect_key = cljs.core.nth.call(null,vec__46405,(0),null);
var effect_value = cljs.core.nth.call(null,vec__46405,(1),null);
var temp__5733__auto___46429 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46429)){
var effect_fn_46430 = temp__5733__auto___46429;
effect_fn_46430.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__46431 = seq__46395;
var G__46432 = chunk__46396;
var G__46433 = count__46397;
var G__46434 = (i__46398 + (1));
seq__46395 = G__46431;
chunk__46396 = G__46432;
count__46397 = G__46433;
i__46398 = G__46434;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__46395);
if(temp__5735__auto__){
var seq__46395__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46395__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__46395__$1);
var G__46435 = cljs.core.chunk_rest.call(null,seq__46395__$1);
var G__46436 = c__4609__auto__;
var G__46437 = cljs.core.count.call(null,c__4609__auto__);
var G__46438 = (0);
seq__46395 = G__46435;
chunk__46396 = G__46436;
count__46397 = G__46437;
i__46398 = G__46438;
continue;
} else {
var vec__46408 = cljs.core.first.call(null,seq__46395__$1);
var effect_key = cljs.core.nth.call(null,vec__46408,(0),null);
var effect_value = cljs.core.nth.call(null,vec__46408,(1),null);
var temp__5733__auto___46439 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46439)){
var effect_fn_46440 = temp__5733__auto___46439;
effect_fn_46440.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__46441 = cljs.core.next.call(null,seq__46395__$1);
var G__46442 = null;
var G__46443 = (0);
var G__46444 = (0);
seq__46395 = G__46441;
chunk__46396 = G__46442;
count__46397 = G__46443;
i__46398 = G__46444;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__46445 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__46446 = null;
var count__46447 = (0);
var i__46448 = (0);
while(true){
if((i__46448 < count__46447)){
var map__46453 = cljs.core._nth.call(null,chunk__46446,i__46448);
var map__46453__$1 = (((((!((map__46453 == null))))?(((((map__46453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46453):map__46453);
var effect = map__46453__$1;
var ms = cljs.core.get.call(null,map__46453__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__46453__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__46445,chunk__46446,count__46447,i__46448,map__46453,map__46453__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__46445,chunk__46446,count__46447,i__46448,map__46453,map__46453__$1,effect,ms,dispatch))
,ms);
}


var G__46457 = seq__46445;
var G__46458 = chunk__46446;
var G__46459 = count__46447;
var G__46460 = (i__46448 + (1));
seq__46445 = G__46457;
chunk__46446 = G__46458;
count__46447 = G__46459;
i__46448 = G__46460;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__46445);
if(temp__5735__auto__){
var seq__46445__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46445__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__46445__$1);
var G__46461 = cljs.core.chunk_rest.call(null,seq__46445__$1);
var G__46462 = c__4609__auto__;
var G__46463 = cljs.core.count.call(null,c__4609__auto__);
var G__46464 = (0);
seq__46445 = G__46461;
chunk__46446 = G__46462;
count__46447 = G__46463;
i__46448 = G__46464;
continue;
} else {
var map__46455 = cljs.core.first.call(null,seq__46445__$1);
var map__46455__$1 = (((((!((map__46455 == null))))?(((((map__46455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46455):map__46455);
var effect = map__46455__$1;
var ms = cljs.core.get.call(null,map__46455__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__46455__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__46445,chunk__46446,count__46447,i__46448,map__46455,map__46455__$1,effect,ms,dispatch,seq__46445__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__46445,chunk__46446,count__46447,i__46448,map__46455,map__46455__$1,effect,ms,dispatch,seq__46445__$1,temp__5735__auto__))
,ms);
}


var G__46465 = cljs.core.next.call(null,seq__46445__$1);
var G__46466 = null;
var G__46467 = (0);
var G__46468 = (0);
seq__46445 = G__46465;
chunk__46446 = G__46466;
count__46447 = G__46467;
i__46448 = G__46468;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value);
} else {
var seq__46469 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__46470 = null;
var count__46471 = (0);
var i__46472 = (0);
while(true){
if((i__46472 < count__46471)){
var event = cljs.core._nth.call(null,chunk__46470,i__46472);
re_frame.router.dispatch.call(null,event);


var G__46473 = seq__46469;
var G__46474 = chunk__46470;
var G__46475 = count__46471;
var G__46476 = (i__46472 + (1));
seq__46469 = G__46473;
chunk__46470 = G__46474;
count__46471 = G__46475;
i__46472 = G__46476;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__46469);
if(temp__5735__auto__){
var seq__46469__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46469__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__46469__$1);
var G__46477 = cljs.core.chunk_rest.call(null,seq__46469__$1);
var G__46478 = c__4609__auto__;
var G__46479 = cljs.core.count.call(null,c__4609__auto__);
var G__46480 = (0);
seq__46469 = G__46477;
chunk__46470 = G__46478;
count__46471 = G__46479;
i__46472 = G__46480;
continue;
} else {
var event = cljs.core.first.call(null,seq__46469__$1);
re_frame.router.dispatch.call(null,event);


var G__46481 = cljs.core.next.call(null,seq__46469__$1);
var G__46482 = null;
var G__46483 = (0);
var G__46484 = (0);
seq__46469 = G__46481;
chunk__46470 = G__46482;
count__46471 = G__46483;
i__46472 = G__46484;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__46485 = cljs.core.seq.call(null,value);
var chunk__46486 = null;
var count__46487 = (0);
var i__46488 = (0);
while(true){
if((i__46488 < count__46487)){
var event = cljs.core._nth.call(null,chunk__46486,i__46488);
clear_event.call(null,event);


var G__46489 = seq__46485;
var G__46490 = chunk__46486;
var G__46491 = count__46487;
var G__46492 = (i__46488 + (1));
seq__46485 = G__46489;
chunk__46486 = G__46490;
count__46487 = G__46491;
i__46488 = G__46492;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__46485);
if(temp__5735__auto__){
var seq__46485__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46485__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__46485__$1);
var G__46493 = cljs.core.chunk_rest.call(null,seq__46485__$1);
var G__46494 = c__4609__auto__;
var G__46495 = cljs.core.count.call(null,c__4609__auto__);
var G__46496 = (0);
seq__46485 = G__46493;
chunk__46486 = G__46494;
count__46487 = G__46495;
i__46488 = G__46496;
continue;
} else {
var event = cljs.core.first.call(null,seq__46485__$1);
clear_event.call(null,event);


var G__46497 = cljs.core.next.call(null,seq__46485__$1);
var G__46498 = null;
var G__46499 = (0);
var G__46500 = (0);
seq__46485 = G__46497;
chunk__46486 = G__46498;
count__46487 = G__46499;
i__46488 = G__46500;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1589676416688
