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
}catch (e58575){if((e58575 instanceof Error)){
var e = e58575;
return "Error: Unable to stringify";
} else {
throw e58575;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__58578 = arguments.length;
switch (G__58578) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__58576_SHARP_){
if(typeof p1__58576_SHARP_ === 'string'){
return p1__58576_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__58576_SHARP_);
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
var len__4789__auto___58581 = arguments.length;
var i__4790__auto___58582 = (0);
while(true){
if((i__4790__auto___58582 < len__4789__auto___58581)){
args__4795__auto__.push((arguments[i__4790__auto___58582]));

var G__58583 = (i__4790__auto___58582 + (1));
i__4790__auto___58582 = G__58583;
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
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq58580){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58580));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4795__auto__ = [];
var len__4789__auto___58585 = arguments.length;
var i__4790__auto___58586 = (0);
while(true){
if((i__4790__auto___58586 < len__4789__auto___58585)){
args__4795__auto__.push((arguments[i__4790__auto___58586]));

var G__58587 = (i__4790__auto___58586 + (1));
i__4790__auto___58586 = G__58587;
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
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq58584){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58584));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__58588){
var map__58589 = p__58588;
var map__58589__$1 = (((((!((map__58589 == null))))?(((((map__58589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58589):map__58589);
var message = cljs.core.get.call(null,map__58589__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__58589__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__29223__auto___58668 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29224__auto__ = (function (){var switch__29128__auto__ = (function (state_58640){
var state_val_58641 = (state_58640[(1)]);
if((state_val_58641 === (7))){
var inst_58636 = (state_58640[(2)]);
var state_58640__$1 = state_58640;
var statearr_58642_58669 = state_58640__$1;
(statearr_58642_58669[(2)] = inst_58636);

(statearr_58642_58669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58641 === (1))){
var state_58640__$1 = state_58640;
var statearr_58643_58670 = state_58640__$1;
(statearr_58643_58670[(2)] = null);

(statearr_58643_58670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58641 === (4))){
var inst_58593 = (state_58640[(7)]);
var inst_58593__$1 = (state_58640[(2)]);
var state_58640__$1 = (function (){var statearr_58644 = state_58640;
(statearr_58644[(7)] = inst_58593__$1);

return statearr_58644;
})();
if(cljs.core.truth_(inst_58593__$1)){
var statearr_58645_58671 = state_58640__$1;
(statearr_58645_58671[(1)] = (5));

} else {
var statearr_58646_58672 = state_58640__$1;
(statearr_58646_58672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58641 === (15))){
var inst_58600 = (state_58640[(8)]);
var inst_58615 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_58600);
var inst_58616 = cljs.core.first.call(null,inst_58615);
var inst_58617 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_58616);
var inst_58618 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_58617)].join('');
var inst_58619 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_58618);
var state_58640__$1 = state_58640;
var statearr_58647_58673 = state_58640__$1;
(statearr_58647_58673[(2)] = inst_58619);

(statearr_58647_58673[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58641 === (13))){
var inst_58624 = (state_58640[(2)]);
var state_58640__$1 = state_58640;
var statearr_58648_58674 = state_58640__$1;
(statearr_58648_58674[(2)] = inst_58624);

(statearr_58648_58674[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58641 === (6))){
var state_58640__$1 = state_58640;
var statearr_58649_58675 = state_58640__$1;
(statearr_58649_58675[(2)] = null);

(statearr_58649_58675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58641 === (17))){
var inst_58622 = (state_58640[(2)]);
var state_58640__$1 = state_58640;
var statearr_58650_58676 = state_58640__$1;
(statearr_58650_58676[(2)] = inst_58622);

(statearr_58650_58676[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58641 === (3))){
var inst_58638 = (state_58640[(2)]);
var state_58640__$1 = state_58640;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58640__$1,inst_58638);
} else {
if((state_val_58641 === (12))){
var inst_58599 = (state_58640[(9)]);
var inst_58613 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_58599,opts);
var state_58640__$1 = state_58640;
if(inst_58613){
var statearr_58651_58677 = state_58640__$1;
(statearr_58651_58677[(1)] = (15));

} else {
var statearr_58652_58678 = state_58640__$1;
(statearr_58652_58678[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58641 === (2))){
var state_58640__$1 = state_58640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58640__$1,(4),ch);
} else {
if((state_val_58641 === (11))){
var inst_58600 = (state_58640[(8)]);
var inst_58605 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_58606 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_58600);
var inst_58607 = cljs.core.async.timeout.call(null,(1000));
var inst_58608 = [inst_58606,inst_58607];
var inst_58609 = (new cljs.core.PersistentVector(null,2,(5),inst_58605,inst_58608,null));
var state_58640__$1 = state_58640;
return cljs.core.async.ioc_alts_BANG_.call(null,state_58640__$1,(14),inst_58609);
} else {
if((state_val_58641 === (9))){
var inst_58600 = (state_58640[(8)]);
var inst_58626 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_58627 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_58600);
var inst_58628 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_58627);
var inst_58629 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_58628)].join('');
var inst_58630 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_58629);
var state_58640__$1 = (function (){var statearr_58653 = state_58640;
(statearr_58653[(10)] = inst_58626);

return statearr_58653;
})();
var statearr_58654_58679 = state_58640__$1;
(statearr_58654_58679[(2)] = inst_58630);

(statearr_58654_58679[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58641 === (5))){
var inst_58593 = (state_58640[(7)]);
var inst_58595 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_58596 = (new cljs.core.PersistentArrayMap(null,2,inst_58595,null));
var inst_58597 = (new cljs.core.PersistentHashSet(null,inst_58596,null));
var inst_58598 = figwheel.client.focus_msgs.call(null,inst_58597,inst_58593);
var inst_58599 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_58598);
var inst_58600 = cljs.core.first.call(null,inst_58598);
var inst_58601 = figwheel.client.autoload_QMARK_.call(null);
var state_58640__$1 = (function (){var statearr_58655 = state_58640;
(statearr_58655[(9)] = inst_58599);

(statearr_58655[(8)] = inst_58600);

return statearr_58655;
})();
if(cljs.core.truth_(inst_58601)){
var statearr_58656_58680 = state_58640__$1;
(statearr_58656_58680[(1)] = (8));

} else {
var statearr_58657_58681 = state_58640__$1;
(statearr_58657_58681[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58641 === (14))){
var inst_58611 = (state_58640[(2)]);
var state_58640__$1 = state_58640;
var statearr_58658_58682 = state_58640__$1;
(statearr_58658_58682[(2)] = inst_58611);

(statearr_58658_58682[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58641 === (16))){
var state_58640__$1 = state_58640;
var statearr_58659_58683 = state_58640__$1;
(statearr_58659_58683[(2)] = null);

(statearr_58659_58683[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58641 === (10))){
var inst_58632 = (state_58640[(2)]);
var state_58640__$1 = (function (){var statearr_58660 = state_58640;
(statearr_58660[(11)] = inst_58632);

return statearr_58660;
})();
var statearr_58661_58684 = state_58640__$1;
(statearr_58661_58684[(2)] = null);

(statearr_58661_58684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58641 === (8))){
var inst_58599 = (state_58640[(9)]);
var inst_58603 = figwheel.client.reload_file_state_QMARK_.call(null,inst_58599,opts);
var state_58640__$1 = state_58640;
if(cljs.core.truth_(inst_58603)){
var statearr_58662_58685 = state_58640__$1;
(statearr_58662_58685[(1)] = (11));

} else {
var statearr_58663_58686 = state_58640__$1;
(statearr_58663_58686[(1)] = (12));

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
var figwheel$client$file_reloader_plugin_$_state_machine__29129__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29129__auto____0 = (function (){
var statearr_58664 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58664[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29129__auto__);

(statearr_58664[(1)] = (1));

return statearr_58664;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29129__auto____1 = (function (state_58640){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_58640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e58665){if((e58665 instanceof Object)){
var ex__29132__auto__ = e58665;
var statearr_58666_58687 = state_58640;
(statearr_58666_58687[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58688 = state_58640;
state_58640 = G__58688;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29129__auto__ = function(state_58640){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29129__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29129__auto____1.call(this,state_58640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29129__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29129__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29129__auto__;
})()
})();
var state__29225__auto__ = (function (){var statearr_58667 = f__29224__auto__.call(null);
(statearr_58667[(6)] = c__29223__auto___58668);

return statearr_58667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29225__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__58689_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__58689_SHARP_));
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
var base_path_58695 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__58691 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__58692 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__58693 = true;
var _STAR_print_fn_STAR__temp_val__58694 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__58693);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__58694);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__58692);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__58691);
}}catch (e58690){if((e58690 instanceof Error)){
var e = e58690;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_58695], null));
} else {
var e = e58690;
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__58696){
var map__58697 = p__58696;
var map__58697__$1 = (((((!((map__58697 == null))))?(((((map__58697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58697):map__58697);
var opts = map__58697__$1;
var build_id = cljs.core.get.call(null,map__58697__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__58699){
var vec__58700 = p__58699;
var seq__58701 = cljs.core.seq.call(null,vec__58700);
var first__58702 = cljs.core.first.call(null,seq__58701);
var seq__58701__$1 = cljs.core.next.call(null,seq__58701);
var map__58703 = first__58702;
var map__58703__$1 = (((((!((map__58703 == null))))?(((((map__58703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58703):map__58703);
var msg = map__58703__$1;
var msg_name = cljs.core.get.call(null,map__58703__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__58701__$1;
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
return (function (p__58705){
var vec__58706 = p__58705;
var seq__58707 = cljs.core.seq.call(null,vec__58706);
var first__58708 = cljs.core.first.call(null,seq__58707);
var seq__58707__$1 = cljs.core.next.call(null,seq__58707);
var map__58709 = first__58708;
var map__58709__$1 = (((((!((map__58709 == null))))?(((((map__58709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58709):map__58709);
var msg = map__58709__$1;
var msg_name = cljs.core.get.call(null,map__58709__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__58707__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__58711){
var map__58712 = p__58711;
var map__58712__$1 = (((((!((map__58712 == null))))?(((((map__58712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58712):map__58712);
var on_compile_warning = cljs.core.get.call(null,map__58712__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__58712__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__58714){
var vec__58715 = p__58714;
var seq__58716 = cljs.core.seq.call(null,vec__58715);
var first__58717 = cljs.core.first.call(null,seq__58716);
var seq__58716__$1 = cljs.core.next.call(null,seq__58716);
var map__58718 = first__58717;
var map__58718__$1 = (((((!((map__58718 == null))))?(((((map__58718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58718):map__58718);
var msg = map__58718__$1;
var msg_name = cljs.core.get.call(null,map__58718__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__58716__$1;
var pred__58720 = cljs.core._EQ_;
var expr__58721 = msg_name;
if(cljs.core.truth_(pred__58720.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__58721))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__58720.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__58721))){
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
var c__29223__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29224__auto__ = (function (){var switch__29128__auto__ = (function (state_58810){
var state_val_58811 = (state_58810[(1)]);
if((state_val_58811 === (7))){
var inst_58730 = (state_58810[(2)]);
var state_58810__$1 = state_58810;
if(cljs.core.truth_(inst_58730)){
var statearr_58812_58859 = state_58810__$1;
(statearr_58812_58859[(1)] = (8));

} else {
var statearr_58813_58860 = state_58810__$1;
(statearr_58813_58860[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58811 === (20))){
var inst_58804 = (state_58810[(2)]);
var state_58810__$1 = state_58810;
var statearr_58814_58861 = state_58810__$1;
(statearr_58814_58861[(2)] = inst_58804);

(statearr_58814_58861[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58811 === (27))){
var inst_58800 = (state_58810[(2)]);
var state_58810__$1 = state_58810;
var statearr_58815_58862 = state_58810__$1;
(statearr_58815_58862[(2)] = inst_58800);

(statearr_58815_58862[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58811 === (1))){
var inst_58723 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_58810__$1 = state_58810;
if(cljs.core.truth_(inst_58723)){
var statearr_58816_58863 = state_58810__$1;
(statearr_58816_58863[(1)] = (2));

} else {
var statearr_58817_58864 = state_58810__$1;
(statearr_58817_58864[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58811 === (24))){
var inst_58802 = (state_58810[(2)]);
var state_58810__$1 = state_58810;
var statearr_58818_58865 = state_58810__$1;
(statearr_58818_58865[(2)] = inst_58802);

(statearr_58818_58865[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58811 === (4))){
var inst_58808 = (state_58810[(2)]);
var state_58810__$1 = state_58810;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58810__$1,inst_58808);
} else {
if((state_val_58811 === (15))){
var inst_58806 = (state_58810[(2)]);
var state_58810__$1 = state_58810;
var statearr_58819_58866 = state_58810__$1;
(statearr_58819_58866[(2)] = inst_58806);

(statearr_58819_58866[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58811 === (21))){
var inst_58759 = (state_58810[(2)]);
var inst_58760 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_58761 = figwheel.client.auto_jump_to_error.call(null,opts,inst_58760);
var state_58810__$1 = (function (){var statearr_58820 = state_58810;
(statearr_58820[(7)] = inst_58759);

return statearr_58820;
})();
var statearr_58821_58867 = state_58810__$1;
(statearr_58821_58867[(2)] = inst_58761);

(statearr_58821_58867[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58811 === (31))){
var inst_58789 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_58810__$1 = state_58810;
if(inst_58789){
var statearr_58822_58868 = state_58810__$1;
(statearr_58822_58868[(1)] = (34));

} else {
var statearr_58823_58869 = state_58810__$1;
(statearr_58823_58869[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58811 === (32))){
var inst_58798 = (state_58810[(2)]);
var state_58810__$1 = state_58810;
var statearr_58824_58870 = state_58810__$1;
(statearr_58824_58870[(2)] = inst_58798);

(statearr_58824_58870[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58811 === (33))){
var inst_58785 = (state_58810[(2)]);
var inst_58786 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_58787 = figwheel.client.auto_jump_to_error.call(null,opts,inst_58786);
var state_58810__$1 = (function (){var statearr_58825 = state_58810;
(statearr_58825[(8)] = inst_58785);

return statearr_58825;
})();
var statearr_58826_58871 = state_58810__$1;
(statearr_58826_58871[(2)] = inst_58787);

(statearr_58826_58871[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58811 === (13))){
var inst_58744 = figwheel.client.heads_up.clear.call(null);
var state_58810__$1 = state_58810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58810__$1,(16),inst_58744);
} else {
if((state_val_58811 === (22))){
var inst_58765 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_58766 = figwheel.client.heads_up.append_warning_message.call(null,inst_58765);
var state_58810__$1 = state_58810;
var statearr_58827_58872 = state_58810__$1;
(statearr_58827_58872[(2)] = inst_58766);

(statearr_58827_58872[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58811 === (36))){
var inst_58796 = (state_58810[(2)]);
var state_58810__$1 = state_58810;
var statearr_58828_58873 = state_58810__$1;
(statearr_58828_58873[(2)] = inst_58796);

(statearr_58828_58873[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58811 === (29))){
var inst_58776 = (state_58810[(2)]);
var inst_58777 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_58778 = figwheel.client.auto_jump_to_error.call(null,opts,inst_58777);
var state_58810__$1 = (function (){var statearr_58829 = state_58810;
(statearr_58829[(9)] = inst_58776);

return statearr_58829;
})();
var statearr_58830_58874 = state_58810__$1;
(statearr_58830_58874[(2)] = inst_58778);

(statearr_58830_58874[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58811 === (6))){
var inst_58725 = (state_58810[(10)]);
var state_58810__$1 = state_58810;
var statearr_58831_58875 = state_58810__$1;
(statearr_58831_58875[(2)] = inst_58725);

(statearr_58831_58875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58811 === (28))){
var inst_58772 = (state_58810[(2)]);
var inst_58773 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_58774 = figwheel.client.heads_up.display_warning.call(null,inst_58773);
var state_58810__$1 = (function (){var statearr_58832 = state_58810;
(statearr_58832[(11)] = inst_58772);

return statearr_58832;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58810__$1,(29),inst_58774);
} else {
if((state_val_58811 === (25))){
var inst_58770 = figwheel.client.heads_up.clear.call(null);
var state_58810__$1 = state_58810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58810__$1,(28),inst_58770);
} else {
if((state_val_58811 === (34))){
var inst_58791 = figwheel.client.heads_up.flash_loaded.call(null);
var state_58810__$1 = state_58810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58810__$1,(37),inst_58791);
} else {
if((state_val_58811 === (17))){
var inst_58750 = (state_58810[(2)]);
var inst_58751 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_58752 = figwheel.client.auto_jump_to_error.call(null,opts,inst_58751);
var state_58810__$1 = (function (){var statearr_58833 = state_58810;
(statearr_58833[(12)] = inst_58750);

return statearr_58833;
})();
var statearr_58834_58876 = state_58810__$1;
(statearr_58834_58876[(2)] = inst_58752);

(statearr_58834_58876[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58811 === (3))){
var inst_58742 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_58810__$1 = state_58810;
if(inst_58742){
var statearr_58835_58877 = state_58810__$1;
(statearr_58835_58877[(1)] = (13));

} else {
var statearr_58836_58878 = state_58810__$1;
(statearr_58836_58878[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58811 === (12))){
var inst_58738 = (state_58810[(2)]);
var state_58810__$1 = state_58810;
var statearr_58837_58879 = state_58810__$1;
(statearr_58837_58879[(2)] = inst_58738);

(statearr_58837_58879[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58811 === (2))){
var inst_58725 = (state_58810[(10)]);
var inst_58725__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_58810__$1 = (function (){var statearr_58838 = state_58810;
(statearr_58838[(10)] = inst_58725__$1);

return statearr_58838;
})();
if(cljs.core.truth_(inst_58725__$1)){
var statearr_58839_58880 = state_58810__$1;
(statearr_58839_58880[(1)] = (5));

} else {
var statearr_58840_58881 = state_58810__$1;
(statearr_58840_58881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58811 === (23))){
var inst_58768 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_58810__$1 = state_58810;
if(inst_58768){
var statearr_58841_58882 = state_58810__$1;
(statearr_58841_58882[(1)] = (25));

} else {
var statearr_58842_58883 = state_58810__$1;
(statearr_58842_58883[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58811 === (35))){
var state_58810__$1 = state_58810;
var statearr_58843_58884 = state_58810__$1;
(statearr_58843_58884[(2)] = null);

(statearr_58843_58884[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58811 === (19))){
var inst_58763 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_58810__$1 = state_58810;
if(inst_58763){
var statearr_58844_58885 = state_58810__$1;
(statearr_58844_58885[(1)] = (22));

} else {
var statearr_58845_58886 = state_58810__$1;
(statearr_58845_58886[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58811 === (11))){
var inst_58734 = (state_58810[(2)]);
var state_58810__$1 = state_58810;
var statearr_58846_58887 = state_58810__$1;
(statearr_58846_58887[(2)] = inst_58734);

(statearr_58846_58887[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58811 === (9))){
var inst_58736 = figwheel.client.heads_up.clear.call(null);
var state_58810__$1 = state_58810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58810__$1,(12),inst_58736);
} else {
if((state_val_58811 === (5))){
var inst_58727 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_58810__$1 = state_58810;
var statearr_58847_58888 = state_58810__$1;
(statearr_58847_58888[(2)] = inst_58727);

(statearr_58847_58888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58811 === (14))){
var inst_58754 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_58810__$1 = state_58810;
if(inst_58754){
var statearr_58848_58889 = state_58810__$1;
(statearr_58848_58889[(1)] = (18));

} else {
var statearr_58849_58890 = state_58810__$1;
(statearr_58849_58890[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58811 === (26))){
var inst_58780 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_58810__$1 = state_58810;
if(inst_58780){
var statearr_58850_58891 = state_58810__$1;
(statearr_58850_58891[(1)] = (30));

} else {
var statearr_58851_58892 = state_58810__$1;
(statearr_58851_58892[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58811 === (16))){
var inst_58746 = (state_58810[(2)]);
var inst_58747 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_58748 = figwheel.client.heads_up.display_exception.call(null,inst_58747);
var state_58810__$1 = (function (){var statearr_58852 = state_58810;
(statearr_58852[(13)] = inst_58746);

return statearr_58852;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58810__$1,(17),inst_58748);
} else {
if((state_val_58811 === (30))){
var inst_58782 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_58783 = figwheel.client.heads_up.display_warning.call(null,inst_58782);
var state_58810__$1 = state_58810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58810__$1,(33),inst_58783);
} else {
if((state_val_58811 === (10))){
var inst_58740 = (state_58810[(2)]);
var state_58810__$1 = state_58810;
var statearr_58853_58893 = state_58810__$1;
(statearr_58853_58893[(2)] = inst_58740);

(statearr_58853_58893[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58811 === (18))){
var inst_58756 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_58757 = figwheel.client.heads_up.display_exception.call(null,inst_58756);
var state_58810__$1 = state_58810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58810__$1,(21),inst_58757);
} else {
if((state_val_58811 === (37))){
var inst_58793 = (state_58810[(2)]);
var state_58810__$1 = state_58810;
var statearr_58854_58894 = state_58810__$1;
(statearr_58854_58894[(2)] = inst_58793);

(statearr_58854_58894[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58811 === (8))){
var inst_58732 = figwheel.client.heads_up.flash_loaded.call(null);
var state_58810__$1 = state_58810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58810__$1,(11),inst_58732);
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
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29129__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29129__auto____0 = (function (){
var statearr_58855 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58855[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29129__auto__);

(statearr_58855[(1)] = (1));

return statearr_58855;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29129__auto____1 = (function (state_58810){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_58810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e58856){if((e58856 instanceof Object)){
var ex__29132__auto__ = e58856;
var statearr_58857_58895 = state_58810;
(statearr_58857_58895[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58896 = state_58810;
state_58810 = G__58896;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29129__auto__ = function(state_58810){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29129__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29129__auto____1.call(this,state_58810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29129__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29129__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29129__auto__;
})()
})();
var state__29225__auto__ = (function (){var statearr_58858 = f__29224__auto__.call(null);
(statearr_58858[(6)] = c__29223__auto__);

return statearr_58858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29225__auto__);
}));

return c__29223__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29223__auto___58925 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29224__auto__ = (function (){var switch__29128__auto__ = (function (state_58911){
var state_val_58912 = (state_58911[(1)]);
if((state_val_58912 === (1))){
var state_58911__$1 = state_58911;
var statearr_58913_58926 = state_58911__$1;
(statearr_58913_58926[(2)] = null);

(statearr_58913_58926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58912 === (2))){
var state_58911__$1 = state_58911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58911__$1,(4),ch);
} else {
if((state_val_58912 === (3))){
var inst_58909 = (state_58911[(2)]);
var state_58911__$1 = state_58911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58911__$1,inst_58909);
} else {
if((state_val_58912 === (4))){
var inst_58899 = (state_58911[(7)]);
var inst_58899__$1 = (state_58911[(2)]);
var state_58911__$1 = (function (){var statearr_58914 = state_58911;
(statearr_58914[(7)] = inst_58899__$1);

return statearr_58914;
})();
if(cljs.core.truth_(inst_58899__$1)){
var statearr_58915_58927 = state_58911__$1;
(statearr_58915_58927[(1)] = (5));

} else {
var statearr_58916_58928 = state_58911__$1;
(statearr_58916_58928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58912 === (5))){
var inst_58899 = (state_58911[(7)]);
var inst_58901 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_58899);
var state_58911__$1 = state_58911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58911__$1,(8),inst_58901);
} else {
if((state_val_58912 === (6))){
var state_58911__$1 = state_58911;
var statearr_58917_58929 = state_58911__$1;
(statearr_58917_58929[(2)] = null);

(statearr_58917_58929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58912 === (7))){
var inst_58907 = (state_58911[(2)]);
var state_58911__$1 = state_58911;
var statearr_58918_58930 = state_58911__$1;
(statearr_58918_58930[(2)] = inst_58907);

(statearr_58918_58930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58912 === (8))){
var inst_58903 = (state_58911[(2)]);
var state_58911__$1 = (function (){var statearr_58919 = state_58911;
(statearr_58919[(8)] = inst_58903);

return statearr_58919;
})();
var statearr_58920_58931 = state_58911__$1;
(statearr_58920_58931[(2)] = null);

(statearr_58920_58931[(1)] = (2));


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
var figwheel$client$heads_up_plugin_$_state_machine__29129__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29129__auto____0 = (function (){
var statearr_58921 = [null,null,null,null,null,null,null,null,null];
(statearr_58921[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29129__auto__);

(statearr_58921[(1)] = (1));

return statearr_58921;
});
var figwheel$client$heads_up_plugin_$_state_machine__29129__auto____1 = (function (state_58911){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_58911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e58922){if((e58922 instanceof Object)){
var ex__29132__auto__ = e58922;
var statearr_58923_58932 = state_58911;
(statearr_58923_58932[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58933 = state_58911;
state_58911 = G__58933;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29129__auto__ = function(state_58911){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29129__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29129__auto____1.call(this,state_58911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29129__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29129__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29129__auto__;
})()
})();
var state__29225__auto__ = (function (){var statearr_58924 = f__29224__auto__.call(null);
(statearr_58924[(6)] = c__29223__auto___58925);

return statearr_58924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29225__auto__);
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
var c__29223__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29224__auto__ = (function (){var switch__29128__auto__ = (function (state_58939){
var state_val_58940 = (state_58939[(1)]);
if((state_val_58940 === (1))){
var inst_58934 = cljs.core.async.timeout.call(null,(3000));
var state_58939__$1 = state_58939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58939__$1,(2),inst_58934);
} else {
if((state_val_58940 === (2))){
var inst_58936 = (state_58939[(2)]);
var inst_58937 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_58939__$1 = (function (){var statearr_58941 = state_58939;
(statearr_58941[(7)] = inst_58936);

return statearr_58941;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58939__$1,inst_58937);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29129__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29129__auto____0 = (function (){
var statearr_58942 = [null,null,null,null,null,null,null,null];
(statearr_58942[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29129__auto__);

(statearr_58942[(1)] = (1));

return statearr_58942;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29129__auto____1 = (function (state_58939){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_58939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e58943){if((e58943 instanceof Object)){
var ex__29132__auto__ = e58943;
var statearr_58944_58946 = state_58939;
(statearr_58944_58946[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58947 = state_58939;
state_58939 = G__58947;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29129__auto__ = function(state_58939){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29129__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29129__auto____1.call(this,state_58939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29129__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29129__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29129__auto__;
})()
})();
var state__29225__auto__ = (function (){var statearr_58945 = f__29224__auto__.call(null);
(statearr_58945[(6)] = c__29223__auto__);

return statearr_58945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29225__auto__);
}));

return c__29223__auto__;
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
var c__29223__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29224__auto__ = (function (){var switch__29128__auto__ = (function (state_58954){
var state_val_58955 = (state_58954[(1)]);
if((state_val_58955 === (1))){
var inst_58948 = cljs.core.async.timeout.call(null,(2000));
var state_58954__$1 = state_58954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58954__$1,(2),inst_58948);
} else {
if((state_val_58955 === (2))){
var inst_58950 = (state_58954[(2)]);
var inst_58951 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_58952 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_58951);
var state_58954__$1 = (function (){var statearr_58956 = state_58954;
(statearr_58956[(7)] = inst_58950);

return statearr_58956;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58954__$1,inst_58952);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29129__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29129__auto____0 = (function (){
var statearr_58957 = [null,null,null,null,null,null,null,null];
(statearr_58957[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29129__auto__);

(statearr_58957[(1)] = (1));

return statearr_58957;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29129__auto____1 = (function (state_58954){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_58954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e58958){if((e58958 instanceof Object)){
var ex__29132__auto__ = e58958;
var statearr_58959_58961 = state_58954;
(statearr_58959_58961[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58962 = state_58954;
state_58954 = G__58962;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29129__auto__ = function(state_58954){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29129__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29129__auto____1.call(this,state_58954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29129__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29129__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29129__auto__;
})()
})();
var state__29225__auto__ = (function (){var statearr_58960 = f__29224__auto__.call(null);
(statearr_58960[(6)] = c__29223__auto__);

return statearr_58960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29225__auto__);
}));

return c__29223__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__58963){
var map__58964 = p__58963;
var map__58964__$1 = (((((!((map__58964 == null))))?(((((map__58964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58964):map__58964);
var file = cljs.core.get.call(null,map__58964__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__58964__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__58964__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__58966 = "";
var G__58966__$1 = (cljs.core.truth_(file)?[G__58966,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__58966);
var G__58966__$2 = (cljs.core.truth_(line)?[G__58966__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__58966__$1);
if(cljs.core.truth_((function (){var and__4174__auto__ = line;
if(cljs.core.truth_(and__4174__auto__)){
return column;
} else {
return and__4174__auto__;
}
})())){
return [G__58966__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__58966__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__58967){
var map__58968 = p__58967;
var map__58968__$1 = (((((!((map__58968 == null))))?(((((map__58968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58968):map__58968);
var ed = map__58968__$1;
var exception_data = cljs.core.get.call(null,map__58968__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__58968__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_58971 = (function (){var G__58970 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58970)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__58970;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_58971);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__58972){
var map__58973 = p__58972;
var map__58973__$1 = (((((!((map__58973 == null))))?(((((map__58973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58973):map__58973);
var w = map__58973__$1;
var message = cljs.core.get.call(null,map__58973__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__58975 = cljs.core.seq.call(null,plugins);
var chunk__58976 = null;
var count__58977 = (0);
var i__58978 = (0);
while(true){
if((i__58978 < count__58977)){
var vec__58985 = cljs.core._nth.call(null,chunk__58976,i__58978);
var k = cljs.core.nth.call(null,vec__58985,(0),null);
var plugin = cljs.core.nth.call(null,vec__58985,(1),null);
if(cljs.core.truth_(plugin)){
var pl_58991 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__58975,chunk__58976,count__58977,i__58978,pl_58991,vec__58985,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_58991.call(null,msg_hist);
});})(seq__58975,chunk__58976,count__58977,i__58978,pl_58991,vec__58985,k,plugin))
);
} else {
}


var G__58992 = seq__58975;
var G__58993 = chunk__58976;
var G__58994 = count__58977;
var G__58995 = (i__58978 + (1));
seq__58975 = G__58992;
chunk__58976 = G__58993;
count__58977 = G__58994;
i__58978 = G__58995;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__58975);
if(temp__5735__auto__){
var seq__58975__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58975__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__58975__$1);
var G__58996 = cljs.core.chunk_rest.call(null,seq__58975__$1);
var G__58997 = c__4609__auto__;
var G__58998 = cljs.core.count.call(null,c__4609__auto__);
var G__58999 = (0);
seq__58975 = G__58996;
chunk__58976 = G__58997;
count__58977 = G__58998;
i__58978 = G__58999;
continue;
} else {
var vec__58988 = cljs.core.first.call(null,seq__58975__$1);
var k = cljs.core.nth.call(null,vec__58988,(0),null);
var plugin = cljs.core.nth.call(null,vec__58988,(1),null);
if(cljs.core.truth_(plugin)){
var pl_59000 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__58975,chunk__58976,count__58977,i__58978,pl_59000,vec__58988,k,plugin,seq__58975__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_59000.call(null,msg_hist);
});})(seq__58975,chunk__58976,count__58977,i__58978,pl_59000,vec__58988,k,plugin,seq__58975__$1,temp__5735__auto__))
);
} else {
}


var G__59001 = cljs.core.next.call(null,seq__58975__$1);
var G__59002 = null;
var G__59003 = (0);
var G__59004 = (0);
seq__58975 = G__59001;
chunk__58976 = G__59002;
count__58977 = G__59003;
i__58978 = G__59004;
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
var G__59006 = arguments.length;
switch (G__59006) {
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

var seq__59007_59012 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__59008_59013 = null;
var count__59009_59014 = (0);
var i__59010_59015 = (0);
while(true){
if((i__59010_59015 < count__59009_59014)){
var msg_59016 = cljs.core._nth.call(null,chunk__59008_59013,i__59010_59015);
figwheel.client.socket.handle_incoming_message.call(null,msg_59016);


var G__59017 = seq__59007_59012;
var G__59018 = chunk__59008_59013;
var G__59019 = count__59009_59014;
var G__59020 = (i__59010_59015 + (1));
seq__59007_59012 = G__59017;
chunk__59008_59013 = G__59018;
count__59009_59014 = G__59019;
i__59010_59015 = G__59020;
continue;
} else {
var temp__5735__auto___59021 = cljs.core.seq.call(null,seq__59007_59012);
if(temp__5735__auto___59021){
var seq__59007_59022__$1 = temp__5735__auto___59021;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59007_59022__$1)){
var c__4609__auto___59023 = cljs.core.chunk_first.call(null,seq__59007_59022__$1);
var G__59024 = cljs.core.chunk_rest.call(null,seq__59007_59022__$1);
var G__59025 = c__4609__auto___59023;
var G__59026 = cljs.core.count.call(null,c__4609__auto___59023);
var G__59027 = (0);
seq__59007_59012 = G__59024;
chunk__59008_59013 = G__59025;
count__59009_59014 = G__59026;
i__59010_59015 = G__59027;
continue;
} else {
var msg_59028 = cljs.core.first.call(null,seq__59007_59022__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_59028);


var G__59029 = cljs.core.next.call(null,seq__59007_59022__$1);
var G__59030 = null;
var G__59031 = (0);
var G__59032 = (0);
seq__59007_59012 = G__59029;
chunk__59008_59013 = G__59030;
count__59009_59014 = G__59031;
i__59010_59015 = G__59032;
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
var len__4789__auto___59037 = arguments.length;
var i__4790__auto___59038 = (0);
while(true){
if((i__4790__auto___59038 < len__4789__auto___59037)){
args__4795__auto__.push((arguments[i__4790__auto___59038]));

var G__59039 = (i__4790__auto___59038 + (1));
i__4790__auto___59038 = G__59039;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__59034){
var map__59035 = p__59034;
var map__59035__$1 = (((((!((map__59035 == null))))?(((((map__59035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59035):map__59035);
var opts = map__59035__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq59033){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59033));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e59040){if((e59040 instanceof Error)){
var e = e59040;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e59040;

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

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__59041){
var map__59042 = p__59041;
var map__59042__$1 = (((((!((map__59042 == null))))?(((((map__59042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59042):map__59042);
var msg_name = cljs.core.get.call(null,map__59042__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1589676434340
