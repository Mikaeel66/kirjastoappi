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
var _STAR_current_trace_STAR__orig_val__42835 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__42836 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__42836);

try{try{var seq__42837 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__42838 = null;
var count__42839 = (0);
var i__42840 = (0);
while(true){
if((i__42840 < count__42839)){
var vec__42847 = cljs.core._nth.call(null,chunk__42838,i__42840);
var effect_key = cljs.core.nth.call(null,vec__42847,(0),null);
var effect_value = cljs.core.nth.call(null,vec__42847,(1),null);
var temp__5733__auto___42869 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___42869)){
var effect_fn_42870 = temp__5733__auto___42869;
effect_fn_42870.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__42871 = seq__42837;
var G__42872 = chunk__42838;
var G__42873 = count__42839;
var G__42874 = (i__42840 + (1));
seq__42837 = G__42871;
chunk__42838 = G__42872;
count__42839 = G__42873;
i__42840 = G__42874;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__42837);
if(temp__5735__auto__){
var seq__42837__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42837__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__42837__$1);
var G__42875 = cljs.core.chunk_rest.call(null,seq__42837__$1);
var G__42876 = c__4609__auto__;
var G__42877 = cljs.core.count.call(null,c__4609__auto__);
var G__42878 = (0);
seq__42837 = G__42875;
chunk__42838 = G__42876;
count__42839 = G__42877;
i__42840 = G__42878;
continue;
} else {
var vec__42850 = cljs.core.first.call(null,seq__42837__$1);
var effect_key = cljs.core.nth.call(null,vec__42850,(0),null);
var effect_value = cljs.core.nth.call(null,vec__42850,(1),null);
var temp__5733__auto___42879 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___42879)){
var effect_fn_42880 = temp__5733__auto___42879;
effect_fn_42880.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__42881 = cljs.core.next.call(null,seq__42837__$1);
var G__42882 = null;
var G__42883 = (0);
var G__42884 = (0);
seq__42837 = G__42881;
chunk__42838 = G__42882;
count__42839 = G__42883;
i__42840 = G__42884;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__26524__auto___42885 = re_frame.interop.now.call(null);
var duration__26525__auto___42886 = (end__26524__auto___42885 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__26525__auto___42886,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__26524__auto___42885);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__42835);
}} else {
var seq__42853 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__42854 = null;
var count__42855 = (0);
var i__42856 = (0);
while(true){
if((i__42856 < count__42855)){
var vec__42863 = cljs.core._nth.call(null,chunk__42854,i__42856);
var effect_key = cljs.core.nth.call(null,vec__42863,(0),null);
var effect_value = cljs.core.nth.call(null,vec__42863,(1),null);
var temp__5733__auto___42887 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___42887)){
var effect_fn_42888 = temp__5733__auto___42887;
effect_fn_42888.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__42889 = seq__42853;
var G__42890 = chunk__42854;
var G__42891 = count__42855;
var G__42892 = (i__42856 + (1));
seq__42853 = G__42889;
chunk__42854 = G__42890;
count__42855 = G__42891;
i__42856 = G__42892;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__42853);
if(temp__5735__auto__){
var seq__42853__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42853__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__42853__$1);
var G__42893 = cljs.core.chunk_rest.call(null,seq__42853__$1);
var G__42894 = c__4609__auto__;
var G__42895 = cljs.core.count.call(null,c__4609__auto__);
var G__42896 = (0);
seq__42853 = G__42893;
chunk__42854 = G__42894;
count__42855 = G__42895;
i__42856 = G__42896;
continue;
} else {
var vec__42866 = cljs.core.first.call(null,seq__42853__$1);
var effect_key = cljs.core.nth.call(null,vec__42866,(0),null);
var effect_value = cljs.core.nth.call(null,vec__42866,(1),null);
var temp__5733__auto___42897 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___42897)){
var effect_fn_42898 = temp__5733__auto___42897;
effect_fn_42898.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__42899 = cljs.core.next.call(null,seq__42853__$1);
var G__42900 = null;
var G__42901 = (0);
var G__42902 = (0);
seq__42853 = G__42899;
chunk__42854 = G__42900;
count__42855 = G__42901;
i__42856 = G__42902;
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
var seq__42903 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__42904 = null;
var count__42905 = (0);
var i__42906 = (0);
while(true){
if((i__42906 < count__42905)){
var map__42911 = cljs.core._nth.call(null,chunk__42904,i__42906);
var map__42911__$1 = (((((!((map__42911 == null))))?(((((map__42911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42911):map__42911);
var effect = map__42911__$1;
var ms = cljs.core.get.call(null,map__42911__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__42911__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__42903,chunk__42904,count__42905,i__42906,map__42911,map__42911__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__42903,chunk__42904,count__42905,i__42906,map__42911,map__42911__$1,effect,ms,dispatch))
,ms);
}


var G__42915 = seq__42903;
var G__42916 = chunk__42904;
var G__42917 = count__42905;
var G__42918 = (i__42906 + (1));
seq__42903 = G__42915;
chunk__42904 = G__42916;
count__42905 = G__42917;
i__42906 = G__42918;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__42903);
if(temp__5735__auto__){
var seq__42903__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42903__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__42903__$1);
var G__42919 = cljs.core.chunk_rest.call(null,seq__42903__$1);
var G__42920 = c__4609__auto__;
var G__42921 = cljs.core.count.call(null,c__4609__auto__);
var G__42922 = (0);
seq__42903 = G__42919;
chunk__42904 = G__42920;
count__42905 = G__42921;
i__42906 = G__42922;
continue;
} else {
var map__42913 = cljs.core.first.call(null,seq__42903__$1);
var map__42913__$1 = (((((!((map__42913 == null))))?(((((map__42913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42913):map__42913);
var effect = map__42913__$1;
var ms = cljs.core.get.call(null,map__42913__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__42913__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__42903,chunk__42904,count__42905,i__42906,map__42913,map__42913__$1,effect,ms,dispatch,seq__42903__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__42903,chunk__42904,count__42905,i__42906,map__42913,map__42913__$1,effect,ms,dispatch,seq__42903__$1,temp__5735__auto__))
,ms);
}


var G__42923 = cljs.core.next.call(null,seq__42903__$1);
var G__42924 = null;
var G__42925 = (0);
var G__42926 = (0);
seq__42903 = G__42923;
chunk__42904 = G__42924;
count__42905 = G__42925;
i__42906 = G__42926;
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
var seq__42927 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__42928 = null;
var count__42929 = (0);
var i__42930 = (0);
while(true){
if((i__42930 < count__42929)){
var event = cljs.core._nth.call(null,chunk__42928,i__42930);
re_frame.router.dispatch.call(null,event);


var G__42931 = seq__42927;
var G__42932 = chunk__42928;
var G__42933 = count__42929;
var G__42934 = (i__42930 + (1));
seq__42927 = G__42931;
chunk__42928 = G__42932;
count__42929 = G__42933;
i__42930 = G__42934;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__42927);
if(temp__5735__auto__){
var seq__42927__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42927__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__42927__$1);
var G__42935 = cljs.core.chunk_rest.call(null,seq__42927__$1);
var G__42936 = c__4609__auto__;
var G__42937 = cljs.core.count.call(null,c__4609__auto__);
var G__42938 = (0);
seq__42927 = G__42935;
chunk__42928 = G__42936;
count__42929 = G__42937;
i__42930 = G__42938;
continue;
} else {
var event = cljs.core.first.call(null,seq__42927__$1);
re_frame.router.dispatch.call(null,event);


var G__42939 = cljs.core.next.call(null,seq__42927__$1);
var G__42940 = null;
var G__42941 = (0);
var G__42942 = (0);
seq__42927 = G__42939;
chunk__42928 = G__42940;
count__42929 = G__42941;
i__42930 = G__42942;
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
var seq__42943 = cljs.core.seq.call(null,value);
var chunk__42944 = null;
var count__42945 = (0);
var i__42946 = (0);
while(true){
if((i__42946 < count__42945)){
var event = cljs.core._nth.call(null,chunk__42944,i__42946);
clear_event.call(null,event);


var G__42947 = seq__42943;
var G__42948 = chunk__42944;
var G__42949 = count__42945;
var G__42950 = (i__42946 + (1));
seq__42943 = G__42947;
chunk__42944 = G__42948;
count__42945 = G__42949;
i__42946 = G__42950;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__42943);
if(temp__5735__auto__){
var seq__42943__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42943__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__42943__$1);
var G__42951 = cljs.core.chunk_rest.call(null,seq__42943__$1);
var G__42952 = c__4609__auto__;
var G__42953 = cljs.core.count.call(null,c__4609__auto__);
var G__42954 = (0);
seq__42943 = G__42951;
chunk__42944 = G__42952;
count__42945 = G__42953;
i__42946 = G__42954;
continue;
} else {
var event = cljs.core.first.call(null,seq__42943__$1);
clear_event.call(null,event);


var G__42955 = cljs.core.next.call(null,seq__42943__$1);
var G__42956 = null;
var G__42957 = (0);
var G__42958 = (0);
seq__42943 = G__42955;
chunk__42944 = G__42956;
count__42945 = G__42957;
i__42946 = G__42958;
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

//# sourceMappingURL=fx.js.map?rel=1589675442553
