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
var _STAR_current_trace_STAR__orig_val__54849 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__54850 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__54850);

try{try{var seq__54851 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__54852 = null;
var count__54853 = (0);
var i__54854 = (0);
while(true){
if((i__54854 < count__54853)){
var vec__54861 = cljs.core._nth.call(null,chunk__54852,i__54854);
var effect_key = cljs.core.nth.call(null,vec__54861,(0),null);
var effect_value = cljs.core.nth.call(null,vec__54861,(1),null);
var temp__5733__auto___54883 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___54883)){
var effect_fn_54884 = temp__5733__auto___54883;
effect_fn_54884.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__54885 = seq__54851;
var G__54886 = chunk__54852;
var G__54887 = count__54853;
var G__54888 = (i__54854 + (1));
seq__54851 = G__54885;
chunk__54852 = G__54886;
count__54853 = G__54887;
i__54854 = G__54888;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__54851);
if(temp__5735__auto__){
var seq__54851__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54851__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__54851__$1);
var G__54889 = cljs.core.chunk_rest.call(null,seq__54851__$1);
var G__54890 = c__4609__auto__;
var G__54891 = cljs.core.count.call(null,c__4609__auto__);
var G__54892 = (0);
seq__54851 = G__54889;
chunk__54852 = G__54890;
count__54853 = G__54891;
i__54854 = G__54892;
continue;
} else {
var vec__54864 = cljs.core.first.call(null,seq__54851__$1);
var effect_key = cljs.core.nth.call(null,vec__54864,(0),null);
var effect_value = cljs.core.nth.call(null,vec__54864,(1),null);
var temp__5733__auto___54893 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___54893)){
var effect_fn_54894 = temp__5733__auto___54893;
effect_fn_54894.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__54895 = cljs.core.next.call(null,seq__54851__$1);
var G__54896 = null;
var G__54897 = (0);
var G__54898 = (0);
seq__54851 = G__54895;
chunk__54852 = G__54896;
count__54853 = G__54897;
i__54854 = G__54898;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__26524__auto___54899 = re_frame.interop.now.call(null);
var duration__26525__auto___54900 = (end__26524__auto___54899 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__26525__auto___54900,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__26524__auto___54899);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__54849);
}} else {
var seq__54867 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__54868 = null;
var count__54869 = (0);
var i__54870 = (0);
while(true){
if((i__54870 < count__54869)){
var vec__54877 = cljs.core._nth.call(null,chunk__54868,i__54870);
var effect_key = cljs.core.nth.call(null,vec__54877,(0),null);
var effect_value = cljs.core.nth.call(null,vec__54877,(1),null);
var temp__5733__auto___54901 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___54901)){
var effect_fn_54902 = temp__5733__auto___54901;
effect_fn_54902.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__54903 = seq__54867;
var G__54904 = chunk__54868;
var G__54905 = count__54869;
var G__54906 = (i__54870 + (1));
seq__54867 = G__54903;
chunk__54868 = G__54904;
count__54869 = G__54905;
i__54870 = G__54906;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__54867);
if(temp__5735__auto__){
var seq__54867__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54867__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__54867__$1);
var G__54907 = cljs.core.chunk_rest.call(null,seq__54867__$1);
var G__54908 = c__4609__auto__;
var G__54909 = cljs.core.count.call(null,c__4609__auto__);
var G__54910 = (0);
seq__54867 = G__54907;
chunk__54868 = G__54908;
count__54869 = G__54909;
i__54870 = G__54910;
continue;
} else {
var vec__54880 = cljs.core.first.call(null,seq__54867__$1);
var effect_key = cljs.core.nth.call(null,vec__54880,(0),null);
var effect_value = cljs.core.nth.call(null,vec__54880,(1),null);
var temp__5733__auto___54911 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___54911)){
var effect_fn_54912 = temp__5733__auto___54911;
effect_fn_54912.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__54913 = cljs.core.next.call(null,seq__54867__$1);
var G__54914 = null;
var G__54915 = (0);
var G__54916 = (0);
seq__54867 = G__54913;
chunk__54868 = G__54914;
count__54869 = G__54915;
i__54870 = G__54916;
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
var seq__54917 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__54918 = null;
var count__54919 = (0);
var i__54920 = (0);
while(true){
if((i__54920 < count__54919)){
var map__54925 = cljs.core._nth.call(null,chunk__54918,i__54920);
var map__54925__$1 = (((((!((map__54925 == null))))?(((((map__54925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54925):map__54925);
var effect = map__54925__$1;
var ms = cljs.core.get.call(null,map__54925__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__54925__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__54917,chunk__54918,count__54919,i__54920,map__54925,map__54925__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__54917,chunk__54918,count__54919,i__54920,map__54925,map__54925__$1,effect,ms,dispatch))
,ms);
}


var G__54929 = seq__54917;
var G__54930 = chunk__54918;
var G__54931 = count__54919;
var G__54932 = (i__54920 + (1));
seq__54917 = G__54929;
chunk__54918 = G__54930;
count__54919 = G__54931;
i__54920 = G__54932;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__54917);
if(temp__5735__auto__){
var seq__54917__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54917__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__54917__$1);
var G__54933 = cljs.core.chunk_rest.call(null,seq__54917__$1);
var G__54934 = c__4609__auto__;
var G__54935 = cljs.core.count.call(null,c__4609__auto__);
var G__54936 = (0);
seq__54917 = G__54933;
chunk__54918 = G__54934;
count__54919 = G__54935;
i__54920 = G__54936;
continue;
} else {
var map__54927 = cljs.core.first.call(null,seq__54917__$1);
var map__54927__$1 = (((((!((map__54927 == null))))?(((((map__54927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54927):map__54927);
var effect = map__54927__$1;
var ms = cljs.core.get.call(null,map__54927__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__54927__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__54917,chunk__54918,count__54919,i__54920,map__54927,map__54927__$1,effect,ms,dispatch,seq__54917__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__54917,chunk__54918,count__54919,i__54920,map__54927,map__54927__$1,effect,ms,dispatch,seq__54917__$1,temp__5735__auto__))
,ms);
}


var G__54937 = cljs.core.next.call(null,seq__54917__$1);
var G__54938 = null;
var G__54939 = (0);
var G__54940 = (0);
seq__54917 = G__54937;
chunk__54918 = G__54938;
count__54919 = G__54939;
i__54920 = G__54940;
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
var seq__54941 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__54942 = null;
var count__54943 = (0);
var i__54944 = (0);
while(true){
if((i__54944 < count__54943)){
var event = cljs.core._nth.call(null,chunk__54942,i__54944);
re_frame.router.dispatch.call(null,event);


var G__54945 = seq__54941;
var G__54946 = chunk__54942;
var G__54947 = count__54943;
var G__54948 = (i__54944 + (1));
seq__54941 = G__54945;
chunk__54942 = G__54946;
count__54943 = G__54947;
i__54944 = G__54948;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__54941);
if(temp__5735__auto__){
var seq__54941__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54941__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__54941__$1);
var G__54949 = cljs.core.chunk_rest.call(null,seq__54941__$1);
var G__54950 = c__4609__auto__;
var G__54951 = cljs.core.count.call(null,c__4609__auto__);
var G__54952 = (0);
seq__54941 = G__54949;
chunk__54942 = G__54950;
count__54943 = G__54951;
i__54944 = G__54952;
continue;
} else {
var event = cljs.core.first.call(null,seq__54941__$1);
re_frame.router.dispatch.call(null,event);


var G__54953 = cljs.core.next.call(null,seq__54941__$1);
var G__54954 = null;
var G__54955 = (0);
var G__54956 = (0);
seq__54941 = G__54953;
chunk__54942 = G__54954;
count__54943 = G__54955;
i__54944 = G__54956;
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
var seq__54957 = cljs.core.seq.call(null,value);
var chunk__54958 = null;
var count__54959 = (0);
var i__54960 = (0);
while(true){
if((i__54960 < count__54959)){
var event = cljs.core._nth.call(null,chunk__54958,i__54960);
clear_event.call(null,event);


var G__54961 = seq__54957;
var G__54962 = chunk__54958;
var G__54963 = count__54959;
var G__54964 = (i__54960 + (1));
seq__54957 = G__54961;
chunk__54958 = G__54962;
count__54959 = G__54963;
i__54960 = G__54964;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__54957);
if(temp__5735__auto__){
var seq__54957__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54957__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__54957__$1);
var G__54965 = cljs.core.chunk_rest.call(null,seq__54957__$1);
var G__54966 = c__4609__auto__;
var G__54967 = cljs.core.count.call(null,c__4609__auto__);
var G__54968 = (0);
seq__54957 = G__54965;
chunk__54958 = G__54966;
count__54959 = G__54967;
i__54960 = G__54968;
continue;
} else {
var event = cljs.core.first.call(null,seq__54957__$1);
clear_event.call(null,event);


var G__54969 = cljs.core.next.call(null,seq__54957__$1);
var G__54970 = null;
var G__54971 = (0);
var G__54972 = (0);
seq__54957 = G__54969;
chunk__54958 = G__54970;
count__54959 = G__54971;
i__54960 = G__54972;
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

//# sourceMappingURL=fx.js.map?rel=1589677411065
