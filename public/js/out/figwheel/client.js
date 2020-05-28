// Compiled by ClojureScript 1.10.597 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.19";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e67411){if((e67411 instanceof Error)){
var e = e67411;
return "Error: Unable to stringify";
} else {
throw e67411;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__67414 = arguments.length;
switch (G__67414) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__67412_SHARP_){
if(typeof p1__67412_SHARP_ === 'string'){
return p1__67412_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__67412_SHARP_);
}
}),args)], null)], null));

return null;
}));

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
}));

(figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2);

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4795__auto__ = [];
var len__4789__auto___67417 = arguments.length;
var i__4790__auto___67418 = (0);
while(true){
if((i__4790__auto___67418 < len__4789__auto___67417)){
args__4795__auto__.push((arguments[i__4790__auto___67418]));

var G__67419 = (i__4790__auto___67418 + (1));
i__4790__auto___67418 = G__67419;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
}));

(figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq67416){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67416));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4795__auto__ = [];
var len__4789__auto___67421 = arguments.length;
var i__4790__auto___67422 = (0);
while(true){
if((i__4790__auto___67422 < len__4789__auto___67421)){
args__4795__auto__.push((arguments[i__4790__auto___67422]));

var G__67423 = (i__4790__auto___67422 + (1));
i__4790__auto___67422 = G__67423;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
}));

(figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq67420){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67420));
}));

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__67424){
var map__67425 = p__67424;
var map__67425__$1 = (((((!((map__67425 == null))))?(((((map__67425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67425):map__67425);
var message = cljs.core.get.call(null,map__67425__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__67425__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4185__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return false;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__29155__auto___67504 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_67476){
var state_val_67477 = (state_67476[(1)]);
if((state_val_67477 === (7))){
var inst_67472 = (state_67476[(2)]);
var state_67476__$1 = state_67476;
var statearr_67478_67505 = state_67476__$1;
(statearr_67478_67505[(2)] = inst_67472);

(statearr_67478_67505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67477 === (1))){
var state_67476__$1 = state_67476;
var statearr_67479_67506 = state_67476__$1;
(statearr_67479_67506[(2)] = null);

(statearr_67479_67506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67477 === (4))){
var inst_67429 = (state_67476[(7)]);
var inst_67429__$1 = (state_67476[(2)]);
var state_67476__$1 = (function (){var statearr_67480 = state_67476;
(statearr_67480[(7)] = inst_67429__$1);

return statearr_67480;
})();
if(cljs.core.truth_(inst_67429__$1)){
var statearr_67481_67507 = state_67476__$1;
(statearr_67481_67507[(1)] = (5));

} else {
var statearr_67482_67508 = state_67476__$1;
(statearr_67482_67508[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67477 === (15))){
var inst_67436 = (state_67476[(8)]);
var inst_67451 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_67436);
var inst_67452 = cljs.core.first.call(null,inst_67451);
var inst_67453 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_67452);
var inst_67454 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_67453)].join('');
var inst_67455 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_67454);
var state_67476__$1 = state_67476;
var statearr_67483_67509 = state_67476__$1;
(statearr_67483_67509[(2)] = inst_67455);

(statearr_67483_67509[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67477 === (13))){
var inst_67460 = (state_67476[(2)]);
var state_67476__$1 = state_67476;
var statearr_67484_67510 = state_67476__$1;
(statearr_67484_67510[(2)] = inst_67460);

(statearr_67484_67510[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67477 === (6))){
var state_67476__$1 = state_67476;
var statearr_67485_67511 = state_67476__$1;
(statearr_67485_67511[(2)] = null);

(statearr_67485_67511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67477 === (17))){
var inst_67458 = (state_67476[(2)]);
var state_67476__$1 = state_67476;
var statearr_67486_67512 = state_67476__$1;
(statearr_67486_67512[(2)] = inst_67458);

(statearr_67486_67512[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67477 === (3))){
var inst_67474 = (state_67476[(2)]);
var state_67476__$1 = state_67476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67476__$1,inst_67474);
} else {
if((state_val_67477 === (12))){
var inst_67435 = (state_67476[(9)]);
var inst_67449 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_67435,opts);
var state_67476__$1 = state_67476;
if(inst_67449){
var statearr_67487_67513 = state_67476__$1;
(statearr_67487_67513[(1)] = (15));

} else {
var statearr_67488_67514 = state_67476__$1;
(statearr_67488_67514[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67477 === (2))){
var state_67476__$1 = state_67476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67476__$1,(4),ch);
} else {
if((state_val_67477 === (11))){
var inst_67436 = (state_67476[(8)]);
var inst_67441 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_67442 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_67436);
var inst_67443 = cljs.core.async.timeout.call(null,(1000));
var inst_67444 = [inst_67442,inst_67443];
var inst_67445 = (new cljs.core.PersistentVector(null,2,(5),inst_67441,inst_67444,null));
var state_67476__$1 = state_67476;
return cljs.core.async.ioc_alts_BANG_.call(null,state_67476__$1,(14),inst_67445);
} else {
if((state_val_67477 === (9))){
var inst_67436 = (state_67476[(8)]);
var inst_67462 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_67463 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_67436);
var inst_67464 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_67463);
var inst_67465 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_67464)].join('');
var inst_67466 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_67465);
var state_67476__$1 = (function (){var statearr_67489 = state_67476;
(statearr_67489[(10)] = inst_67462);

return statearr_67489;
})();
var statearr_67490_67515 = state_67476__$1;
(statearr_67490_67515[(2)] = inst_67466);

(statearr_67490_67515[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67477 === (5))){
var inst_67429 = (state_67476[(7)]);
var inst_67431 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_67432 = (new cljs.core.PersistentArrayMap(null,2,inst_67431,null));
var inst_67433 = (new cljs.core.PersistentHashSet(null,inst_67432,null));
var inst_67434 = figwheel.client.focus_msgs.call(null,inst_67433,inst_67429);
var inst_67435 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_67434);
var inst_67436 = cljs.core.first.call(null,inst_67434);
var inst_67437 = figwheel.client.autoload_QMARK_.call(null);
var state_67476__$1 = (function (){var statearr_67491 = state_67476;
(statearr_67491[(8)] = inst_67436);

(statearr_67491[(9)] = inst_67435);

return statearr_67491;
})();
if(cljs.core.truth_(inst_67437)){
var statearr_67492_67516 = state_67476__$1;
(statearr_67492_67516[(1)] = (8));

} else {
var statearr_67493_67517 = state_67476__$1;
(statearr_67493_67517[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67477 === (14))){
var inst_67447 = (state_67476[(2)]);
var state_67476__$1 = state_67476;
var statearr_67494_67518 = state_67476__$1;
(statearr_67494_67518[(2)] = inst_67447);

(statearr_67494_67518[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67477 === (16))){
var state_67476__$1 = state_67476;
var statearr_67495_67519 = state_67476__$1;
(statearr_67495_67519[(2)] = null);

(statearr_67495_67519[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67477 === (10))){
var inst_67468 = (state_67476[(2)]);
var state_67476__$1 = (function (){var statearr_67496 = state_67476;
(statearr_67496[(11)] = inst_67468);

return statearr_67496;
})();
var statearr_67497_67520 = state_67476__$1;
(statearr_67497_67520[(2)] = null);

(statearr_67497_67520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67477 === (8))){
var inst_67435 = (state_67476[(9)]);
var inst_67439 = figwheel.client.reload_file_state_QMARK_.call(null,inst_67435,opts);
var state_67476__$1 = state_67476;
if(cljs.core.truth_(inst_67439)){
var statearr_67498_67521 = state_67476__$1;
(statearr_67498_67521[(1)] = (11));

} else {
var statearr_67499_67522 = state_67476__$1;
(statearr_67499_67522[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29061__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29061__auto____0 = (function (){
var statearr_67500 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_67500[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29061__auto__);

(statearr_67500[(1)] = (1));

return statearr_67500;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29061__auto____1 = (function (state_67476){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_67476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e67501){if((e67501 instanceof Object)){
var ex__29064__auto__ = e67501;
var statearr_67502_67523 = state_67476;
(statearr_67502_67523[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67524 = state_67476;
state_67476 = G__67524;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29061__auto__ = function(state_67476){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29061__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29061__auto____1.call(this,state_67476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29061__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29061__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_67503 = f__29156__auto__.call(null);
(statearr_67503[(6)] = c__29155__auto___67504);

return statearr_67503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29157__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__67525_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__67525_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_67531 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__67527 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__67528 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__67529 = true;
var _STAR_print_fn_STAR__temp_val__67530 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__67529);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__67530);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__67528);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__67527);
}}catch (e67526){if((e67526 instanceof Error)){
var e = e67526;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_67531], null));
} else {
var e = e67526;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return (cljs.user = ({}));
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__67532){
var map__67533 = p__67532;
var map__67533__$1 = (((((!((map__67533 == null))))?(((((map__67533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67533):map__67533);
var opts = map__67533__$1;
var build_id = cljs.core.get.call(null,map__67533__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__67535){
var vec__67536 = p__67535;
var seq__67537 = cljs.core.seq.call(null,vec__67536);
var first__67538 = cljs.core.first.call(null,seq__67537);
var seq__67537__$1 = cljs.core.next.call(null,seq__67537);
var map__67539 = first__67538;
var map__67539__$1 = (((((!((map__67539 == null))))?(((((map__67539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67539):map__67539);
var msg = map__67539__$1;
var msg_name = cljs.core.get.call(null,map__67539__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__67537__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,(function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
}));
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__67541){
var vec__67542 = p__67541;
var seq__67543 = cljs.core.seq.call(null,vec__67542);
var first__67544 = cljs.core.first.call(null,seq__67543);
var seq__67543__$1 = cljs.core.next.call(null,seq__67543);
var map__67545 = first__67544;
var map__67545__$1 = (((((!((map__67545 == null))))?(((((map__67545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67545):map__67545);
var msg = map__67545__$1;
var msg_name = cljs.core.get.call(null,map__67545__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__67543__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__67547){
var map__67548 = p__67547;
var map__67548__$1 = (((((!((map__67548 == null))))?(((((map__67548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67548):map__67548);
var on_compile_warning = cljs.core.get.call(null,map__67548__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__67548__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__67550){
var vec__67551 = p__67550;
var seq__67552 = cljs.core.seq.call(null,vec__67551);
var first__67553 = cljs.core.first.call(null,seq__67552);
var seq__67552__$1 = cljs.core.next.call(null,seq__67552);
var map__67554 = first__67553;
var map__67554__$1 = (((((!((map__67554 == null))))?(((((map__67554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67554):map__67554);
var msg = map__67554__$1;
var msg_name = cljs.core.get.call(null,map__67554__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__67552__$1;
var pred__67556 = cljs.core._EQ_;
var expr__67557 = msg_name;
if(cljs.core.truth_(pred__67556.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__67557))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__67556.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__67557))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__29155__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_67646){
var state_val_67647 = (state_67646[(1)]);
if((state_val_67647 === (7))){
var inst_67566 = (state_67646[(2)]);
var state_67646__$1 = state_67646;
if(cljs.core.truth_(inst_67566)){
var statearr_67648_67695 = state_67646__$1;
(statearr_67648_67695[(1)] = (8));

} else {
var statearr_67649_67696 = state_67646__$1;
(statearr_67649_67696[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67647 === (20))){
var inst_67640 = (state_67646[(2)]);
var state_67646__$1 = state_67646;
var statearr_67650_67697 = state_67646__$1;
(statearr_67650_67697[(2)] = inst_67640);

(statearr_67650_67697[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67647 === (27))){
var inst_67636 = (state_67646[(2)]);
var state_67646__$1 = state_67646;
var statearr_67651_67698 = state_67646__$1;
(statearr_67651_67698[(2)] = inst_67636);

(statearr_67651_67698[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67647 === (1))){
var inst_67559 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_67646__$1 = state_67646;
if(cljs.core.truth_(inst_67559)){
var statearr_67652_67699 = state_67646__$1;
(statearr_67652_67699[(1)] = (2));

} else {
var statearr_67653_67700 = state_67646__$1;
(statearr_67653_67700[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67647 === (24))){
var inst_67638 = (state_67646[(2)]);
var state_67646__$1 = state_67646;
var statearr_67654_67701 = state_67646__$1;
(statearr_67654_67701[(2)] = inst_67638);

(statearr_67654_67701[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67647 === (4))){
var inst_67644 = (state_67646[(2)]);
var state_67646__$1 = state_67646;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67646__$1,inst_67644);
} else {
if((state_val_67647 === (15))){
var inst_67642 = (state_67646[(2)]);
var state_67646__$1 = state_67646;
var statearr_67655_67702 = state_67646__$1;
(statearr_67655_67702[(2)] = inst_67642);

(statearr_67655_67702[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67647 === (21))){
var inst_67595 = (state_67646[(2)]);
var inst_67596 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_67597 = figwheel.client.auto_jump_to_error.call(null,opts,inst_67596);
var state_67646__$1 = (function (){var statearr_67656 = state_67646;
(statearr_67656[(7)] = inst_67595);

return statearr_67656;
})();
var statearr_67657_67703 = state_67646__$1;
(statearr_67657_67703[(2)] = inst_67597);

(statearr_67657_67703[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67647 === (31))){
var inst_67625 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_67646__$1 = state_67646;
if(inst_67625){
var statearr_67658_67704 = state_67646__$1;
(statearr_67658_67704[(1)] = (34));

} else {
var statearr_67659_67705 = state_67646__$1;
(statearr_67659_67705[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67647 === (32))){
var inst_67634 = (state_67646[(2)]);
var state_67646__$1 = state_67646;
var statearr_67660_67706 = state_67646__$1;
(statearr_67660_67706[(2)] = inst_67634);

(statearr_67660_67706[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67647 === (33))){
var inst_67621 = (state_67646[(2)]);
var inst_67622 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_67623 = figwheel.client.auto_jump_to_error.call(null,opts,inst_67622);
var state_67646__$1 = (function (){var statearr_67661 = state_67646;
(statearr_67661[(8)] = inst_67621);

return statearr_67661;
})();
var statearr_67662_67707 = state_67646__$1;
(statearr_67662_67707[(2)] = inst_67623);

(statearr_67662_67707[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67647 === (13))){
var inst_67580 = figwheel.client.heads_up.clear.call(null);
var state_67646__$1 = state_67646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67646__$1,(16),inst_67580);
} else {
if((state_val_67647 === (22))){
var inst_67601 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_67602 = figwheel.client.heads_up.append_warning_message.call(null,inst_67601);
var state_67646__$1 = state_67646;
var statearr_67663_67708 = state_67646__$1;
(statearr_67663_67708[(2)] = inst_67602);

(statearr_67663_67708[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67647 === (36))){
var inst_67632 = (state_67646[(2)]);
var state_67646__$1 = state_67646;
var statearr_67664_67709 = state_67646__$1;
(statearr_67664_67709[(2)] = inst_67632);

(statearr_67664_67709[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67647 === (29))){
var inst_67612 = (state_67646[(2)]);
var inst_67613 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_67614 = figwheel.client.auto_jump_to_error.call(null,opts,inst_67613);
var state_67646__$1 = (function (){var statearr_67665 = state_67646;
(statearr_67665[(9)] = inst_67612);

return statearr_67665;
})();
var statearr_67666_67710 = state_67646__$1;
(statearr_67666_67710[(2)] = inst_67614);

(statearr_67666_67710[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67647 === (6))){
var inst_67561 = (state_67646[(10)]);
var state_67646__$1 = state_67646;
var statearr_67667_67711 = state_67646__$1;
(statearr_67667_67711[(2)] = inst_67561);

(statearr_67667_67711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67647 === (28))){
var inst_67608 = (state_67646[(2)]);
var inst_67609 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_67610 = figwheel.client.heads_up.display_warning.call(null,inst_67609);
var state_67646__$1 = (function (){var statearr_67668 = state_67646;
(statearr_67668[(11)] = inst_67608);

return statearr_67668;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67646__$1,(29),inst_67610);
} else {
if((state_val_67647 === (25))){
var inst_67606 = figwheel.client.heads_up.clear.call(null);
var state_67646__$1 = state_67646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67646__$1,(28),inst_67606);
} else {
if((state_val_67647 === (34))){
var inst_67627 = figwheel.client.heads_up.flash_loaded.call(null);
var state_67646__$1 = state_67646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67646__$1,(37),inst_67627);
} else {
if((state_val_67647 === (17))){
var inst_67586 = (state_67646[(2)]);
var inst_67587 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_67588 = figwheel.client.auto_jump_to_error.call(null,opts,inst_67587);
var state_67646__$1 = (function (){var statearr_67669 = state_67646;
(statearr_67669[(12)] = inst_67586);

return statearr_67669;
})();
var statearr_67670_67712 = state_67646__$1;
(statearr_67670_67712[(2)] = inst_67588);

(statearr_67670_67712[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67647 === (3))){
var inst_67578 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_67646__$1 = state_67646;
if(inst_67578){
var statearr_67671_67713 = state_67646__$1;
(statearr_67671_67713[(1)] = (13));

} else {
var statearr_67672_67714 = state_67646__$1;
(statearr_67672_67714[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67647 === (12))){
var inst_67574 = (state_67646[(2)]);
var state_67646__$1 = state_67646;
var statearr_67673_67715 = state_67646__$1;
(statearr_67673_67715[(2)] = inst_67574);

(statearr_67673_67715[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67647 === (2))){
var inst_67561 = (state_67646[(10)]);
var inst_67561__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_67646__$1 = (function (){var statearr_67674 = state_67646;
(statearr_67674[(10)] = inst_67561__$1);

return statearr_67674;
})();
if(cljs.core.truth_(inst_67561__$1)){
var statearr_67675_67716 = state_67646__$1;
(statearr_67675_67716[(1)] = (5));

} else {
var statearr_67676_67717 = state_67646__$1;
(statearr_67676_67717[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67647 === (23))){
var inst_67604 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_67646__$1 = state_67646;
if(inst_67604){
var statearr_67677_67718 = state_67646__$1;
(statearr_67677_67718[(1)] = (25));

} else {
var statearr_67678_67719 = state_67646__$1;
(statearr_67678_67719[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67647 === (35))){
var state_67646__$1 = state_67646;
var statearr_67679_67720 = state_67646__$1;
(statearr_67679_67720[(2)] = null);

(statearr_67679_67720[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67647 === (19))){
var inst_67599 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_67646__$1 = state_67646;
if(inst_67599){
var statearr_67680_67721 = state_67646__$1;
(statearr_67680_67721[(1)] = (22));

} else {
var statearr_67681_67722 = state_67646__$1;
(statearr_67681_67722[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67647 === (11))){
var inst_67570 = (state_67646[(2)]);
var state_67646__$1 = state_67646;
var statearr_67682_67723 = state_67646__$1;
(statearr_67682_67723[(2)] = inst_67570);

(statearr_67682_67723[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67647 === (9))){
var inst_67572 = figwheel.client.heads_up.clear.call(null);
var state_67646__$1 = state_67646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67646__$1,(12),inst_67572);
} else {
if((state_val_67647 === (5))){
var inst_67563 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_67646__$1 = state_67646;
var statearr_67683_67724 = state_67646__$1;
(statearr_67683_67724[(2)] = inst_67563);

(statearr_67683_67724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67647 === (14))){
var inst_67590 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_67646__$1 = state_67646;
if(inst_67590){
var statearr_67684_67725 = state_67646__$1;
(statearr_67684_67725[(1)] = (18));

} else {
var statearr_67685_67726 = state_67646__$1;
(statearr_67685_67726[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67647 === (26))){
var inst_67616 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_67646__$1 = state_67646;
if(inst_67616){
var statearr_67686_67727 = state_67646__$1;
(statearr_67686_67727[(1)] = (30));

} else {
var statearr_67687_67728 = state_67646__$1;
(statearr_67687_67728[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67647 === (16))){
var inst_67582 = (state_67646[(2)]);
var inst_67583 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_67584 = figwheel.client.heads_up.display_exception.call(null,inst_67583);
var state_67646__$1 = (function (){var statearr_67688 = state_67646;
(statearr_67688[(13)] = inst_67582);

return statearr_67688;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67646__$1,(17),inst_67584);
} else {
if((state_val_67647 === (30))){
var inst_67618 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_67619 = figwheel.client.heads_up.display_warning.call(null,inst_67618);
var state_67646__$1 = state_67646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67646__$1,(33),inst_67619);
} else {
if((state_val_67647 === (10))){
var inst_67576 = (state_67646[(2)]);
var state_67646__$1 = state_67646;
var statearr_67689_67729 = state_67646__$1;
(statearr_67689_67729[(2)] = inst_67576);

(statearr_67689_67729[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67647 === (18))){
var inst_67592 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_67593 = figwheel.client.heads_up.display_exception.call(null,inst_67592);
var state_67646__$1 = state_67646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67646__$1,(21),inst_67593);
} else {
if((state_val_67647 === (37))){
var inst_67629 = (state_67646[(2)]);
var state_67646__$1 = state_67646;
var statearr_67690_67730 = state_67646__$1;
(statearr_67690_67730[(2)] = inst_67629);

(statearr_67690_67730[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67647 === (8))){
var inst_67568 = figwheel.client.heads_up.flash_loaded.call(null);
var state_67646__$1 = state_67646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67646__$1,(11),inst_67568);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29061__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29061__auto____0 = (function (){
var statearr_67691 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_67691[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29061__auto__);

(statearr_67691[(1)] = (1));

return statearr_67691;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29061__auto____1 = (function (state_67646){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_67646);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e67692){if((e67692 instanceof Object)){
var ex__29064__auto__ = e67692;
var statearr_67693_67731 = state_67646;
(statearr_67693_67731[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67732 = state_67646;
state_67646 = G__67732;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29061__auto__ = function(state_67646){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29061__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29061__auto____1.call(this,state_67646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29061__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29061__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_67694 = f__29156__auto__.call(null);
(statearr_67694[(6)] = c__29155__auto__);

return statearr_67694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29157__auto__);
}));

return c__29155__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29155__auto___67761 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_67747){
var state_val_67748 = (state_67747[(1)]);
if((state_val_67748 === (1))){
var state_67747__$1 = state_67747;
var statearr_67749_67762 = state_67747__$1;
(statearr_67749_67762[(2)] = null);

(statearr_67749_67762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67748 === (2))){
var state_67747__$1 = state_67747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67747__$1,(4),ch);
} else {
if((state_val_67748 === (3))){
var inst_67745 = (state_67747[(2)]);
var state_67747__$1 = state_67747;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67747__$1,inst_67745);
} else {
if((state_val_67748 === (4))){
var inst_67735 = (state_67747[(7)]);
var inst_67735__$1 = (state_67747[(2)]);
var state_67747__$1 = (function (){var statearr_67750 = state_67747;
(statearr_67750[(7)] = inst_67735__$1);

return statearr_67750;
})();
if(cljs.core.truth_(inst_67735__$1)){
var statearr_67751_67763 = state_67747__$1;
(statearr_67751_67763[(1)] = (5));

} else {
var statearr_67752_67764 = state_67747__$1;
(statearr_67752_67764[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67748 === (5))){
var inst_67735 = (state_67747[(7)]);
var inst_67737 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_67735);
var state_67747__$1 = state_67747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67747__$1,(8),inst_67737);
} else {
if((state_val_67748 === (6))){
var state_67747__$1 = state_67747;
var statearr_67753_67765 = state_67747__$1;
(statearr_67753_67765[(2)] = null);

(statearr_67753_67765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67748 === (7))){
var inst_67743 = (state_67747[(2)]);
var state_67747__$1 = state_67747;
var statearr_67754_67766 = state_67747__$1;
(statearr_67754_67766[(2)] = inst_67743);

(statearr_67754_67766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67748 === (8))){
var inst_67739 = (state_67747[(2)]);
var state_67747__$1 = (function (){var statearr_67755 = state_67747;
(statearr_67755[(8)] = inst_67739);

return statearr_67755;
})();
var statearr_67756_67767 = state_67747__$1;
(statearr_67756_67767[(2)] = null);

(statearr_67756_67767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29061__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29061__auto____0 = (function (){
var statearr_67757 = [null,null,null,null,null,null,null,null,null];
(statearr_67757[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29061__auto__);

(statearr_67757[(1)] = (1));

return statearr_67757;
});
var figwheel$client$heads_up_plugin_$_state_machine__29061__auto____1 = (function (state_67747){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_67747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e67758){if((e67758 instanceof Object)){
var ex__29064__auto__ = e67758;
var statearr_67759_67768 = state_67747;
(statearr_67759_67768[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67769 = state_67747;
state_67747 = G__67769;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29061__auto__ = function(state_67747){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29061__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29061__auto____1.call(this,state_67747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29061__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29061__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_67760 = f__29156__auto__.call(null);
(statearr_67760[(6)] = c__29155__auto___67761);

return statearr_67760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29157__auto__);
}));


figwheel.client.heads_up.ensure_container.call(null);

return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29155__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_67775){
var state_val_67776 = (state_67775[(1)]);
if((state_val_67776 === (1))){
var inst_67770 = cljs.core.async.timeout.call(null,(3000));
var state_67775__$1 = state_67775;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67775__$1,(2),inst_67770);
} else {
if((state_val_67776 === (2))){
var inst_67772 = (state_67775[(2)]);
var inst_67773 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_67775__$1 = (function (){var statearr_67777 = state_67775;
(statearr_67777[(7)] = inst_67772);

return statearr_67777;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67775__$1,inst_67773);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29061__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29061__auto____0 = (function (){
var statearr_67778 = [null,null,null,null,null,null,null,null];
(statearr_67778[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29061__auto__);

(statearr_67778[(1)] = (1));

return statearr_67778;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29061__auto____1 = (function (state_67775){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_67775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e67779){if((e67779 instanceof Object)){
var ex__29064__auto__ = e67779;
var statearr_67780_67782 = state_67775;
(statearr_67780_67782[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67779;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67783 = state_67775;
state_67775 = G__67783;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29061__auto__ = function(state_67775){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29061__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29061__auto____1.call(this,state_67775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29061__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29061__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_67781 = f__29156__auto__.call(null);
(statearr_67781[(6)] = c__29155__auto__);

return statearr_67781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29157__auto__);
}));

return c__29155__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5735__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5735__auto__)){
var figwheel_version = temp__5735__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29155__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_67790){
var state_val_67791 = (state_67790[(1)]);
if((state_val_67791 === (1))){
var inst_67784 = cljs.core.async.timeout.call(null,(2000));
var state_67790__$1 = state_67790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67790__$1,(2),inst_67784);
} else {
if((state_val_67791 === (2))){
var inst_67786 = (state_67790[(2)]);
var inst_67787 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_67788 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_67787);
var state_67790__$1 = (function (){var statearr_67792 = state_67790;
(statearr_67792[(7)] = inst_67786);

return statearr_67792;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67790__$1,inst_67788);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29061__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29061__auto____0 = (function (){
var statearr_67793 = [null,null,null,null,null,null,null,null];
(statearr_67793[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29061__auto__);

(statearr_67793[(1)] = (1));

return statearr_67793;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29061__auto____1 = (function (state_67790){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_67790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e67794){if((e67794 instanceof Object)){
var ex__29064__auto__ = e67794;
var statearr_67795_67797 = state_67790;
(statearr_67795_67797[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67798 = state_67790;
state_67790 = G__67798;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29061__auto__ = function(state_67790){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29061__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29061__auto____1.call(this,state_67790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29061__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29061__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_67796 = f__29156__auto__.call(null);
(statearr_67796[(6)] = c__29155__auto__);

return statearr_67796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29157__auto__);
}));

return c__29155__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__67799){
var map__67800 = p__67799;
var map__67800__$1 = (((((!((map__67800 == null))))?(((((map__67800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67800):map__67800);
var file = cljs.core.get.call(null,map__67800__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__67800__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__67800__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__67802 = "";
var G__67802__$1 = (cljs.core.truth_(file)?[G__67802,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__67802);
var G__67802__$2 = (cljs.core.truth_(line)?[G__67802__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__67802__$1);
if(cljs.core.truth_((function (){var and__4174__auto__ = line;
if(cljs.core.truth_(and__4174__auto__)){
return column;
} else {
return and__4174__auto__;
}
})())){
return [G__67802__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__67802__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__67803){
var map__67804 = p__67803;
var map__67804__$1 = (((((!((map__67804 == null))))?(((((map__67804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67804):map__67804);
var ed = map__67804__$1;
var exception_data = cljs.core.get.call(null,map__67804__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__67804__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_67807 = (function (){var G__67806 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67806)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__67806;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_67807);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__67808){
var map__67809 = p__67808;
var map__67809__$1 = (((((!((map__67809 == null))))?(((((map__67809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67809):map__67809);
var w = map__67809__$1;
var message = cljs.core.get.call(null,map__67809__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"public/js/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"public/js/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4174__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4174__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4174__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__67811 = cljs.core.seq.call(null,plugins);
var chunk__67812 = null;
var count__67813 = (0);
var i__67814 = (0);
while(true){
if((i__67814 < count__67813)){
var vec__67821 = cljs.core._nth.call(null,chunk__67812,i__67814);
var k = cljs.core.nth.call(null,vec__67821,(0),null);
var plugin = cljs.core.nth.call(null,vec__67821,(1),null);
if(cljs.core.truth_(plugin)){
var pl_67827 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__67811,chunk__67812,count__67813,i__67814,pl_67827,vec__67821,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_67827.call(null,msg_hist);
});})(seq__67811,chunk__67812,count__67813,i__67814,pl_67827,vec__67821,k,plugin))
);
} else {
}


var G__67828 = seq__67811;
var G__67829 = chunk__67812;
var G__67830 = count__67813;
var G__67831 = (i__67814 + (1));
seq__67811 = G__67828;
chunk__67812 = G__67829;
count__67813 = G__67830;
i__67814 = G__67831;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__67811);
if(temp__5735__auto__){
var seq__67811__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67811__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__67811__$1);
var G__67832 = cljs.core.chunk_rest.call(null,seq__67811__$1);
var G__67833 = c__4609__auto__;
var G__67834 = cljs.core.count.call(null,c__4609__auto__);
var G__67835 = (0);
seq__67811 = G__67832;
chunk__67812 = G__67833;
count__67813 = G__67834;
i__67814 = G__67835;
continue;
} else {
var vec__67824 = cljs.core.first.call(null,seq__67811__$1);
var k = cljs.core.nth.call(null,vec__67824,(0),null);
var plugin = cljs.core.nth.call(null,vec__67824,(1),null);
if(cljs.core.truth_(plugin)){
var pl_67836 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__67811,chunk__67812,count__67813,i__67814,pl_67836,vec__67824,k,plugin,seq__67811__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_67836.call(null,msg_hist);
});})(seq__67811,chunk__67812,count__67813,i__67814,pl_67836,vec__67824,k,plugin,seq__67811__$1,temp__5735__auto__))
);
} else {
}


var G__67837 = cljs.core.next.call(null,seq__67811__$1);
var G__67838 = null;
var G__67839 = (0);
var G__67840 = (0);
seq__67811 = G__67837;
chunk__67812 = G__67838;
count__67813 = G__67839;
i__67814 = G__67840;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__67842 = arguments.length;
switch (G__67842) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
(figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts));

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__67843_67848 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__67844_67849 = null;
var count__67845_67850 = (0);
var i__67846_67851 = (0);
while(true){
if((i__67846_67851 < count__67845_67850)){
var msg_67852 = cljs.core._nth.call(null,chunk__67844_67849,i__67846_67851);
figwheel.client.socket.handle_incoming_message.call(null,msg_67852);


var G__67853 = seq__67843_67848;
var G__67854 = chunk__67844_67849;
var G__67855 = count__67845_67850;
var G__67856 = (i__67846_67851 + (1));
seq__67843_67848 = G__67853;
chunk__67844_67849 = G__67854;
count__67845_67850 = G__67855;
i__67846_67851 = G__67856;
continue;
} else {
var temp__5735__auto___67857 = cljs.core.seq.call(null,seq__67843_67848);
if(temp__5735__auto___67857){
var seq__67843_67858__$1 = temp__5735__auto___67857;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67843_67858__$1)){
var c__4609__auto___67859 = cljs.core.chunk_first.call(null,seq__67843_67858__$1);
var G__67860 = cljs.core.chunk_rest.call(null,seq__67843_67858__$1);
var G__67861 = c__4609__auto___67859;
var G__67862 = cljs.core.count.call(null,c__4609__auto___67859);
var G__67863 = (0);
seq__67843_67848 = G__67860;
chunk__67844_67849 = G__67861;
count__67845_67850 = G__67862;
i__67846_67851 = G__67863;
continue;
} else {
var msg_67864 = cljs.core.first.call(null,seq__67843_67858__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_67864);


var G__67865 = cljs.core.next.call(null,seq__67843_67858__$1);
var G__67866 = null;
var G__67867 = (0);
var G__67868 = (0);
seq__67843_67848 = G__67865;
chunk__67844_67849 = G__67866;
count__67845_67850 = G__67867;
i__67846_67851 = G__67868;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
}));

(figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(figwheel.client.start.cljs$lang$maxFixedArity = 1);

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4795__auto__ = [];
var len__4789__auto___67873 = arguments.length;
var i__4790__auto___67874 = (0);
while(true){
if((i__4790__auto___67874 < len__4789__auto___67873)){
args__4795__auto__.push((arguments[i__4790__auto___67874]));

var G__67875 = (i__4790__auto___67874 + (1));
i__4790__auto___67874 = G__67875;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__67870){
var map__67871 = p__67870;
var map__67871__$1 = (((((!((map__67871 == null))))?(((((map__67871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67871):map__67871);
var opts = map__67871__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq67869){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67869));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e67876){if((e67876 instanceof Error)){
var e = e67876;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e67876;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
(goog.dependencies_ = true);
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__67877){
var map__67878 = p__67877;
var map__67878__$1 = (((((!((map__67878 == null))))?(((((map__67878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67878):map__67878);
var msg_name = cljs.core.get.call(null,map__67878__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1589677421033
