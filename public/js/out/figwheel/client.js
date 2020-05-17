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
}catch (e47535){if((e47535 instanceof Error)){
var e = e47535;
return "Error: Unable to stringify";
} else {
throw e47535;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__47538 = arguments.length;
switch (G__47538) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__47536_SHARP_){
if(typeof p1__47536_SHARP_ === 'string'){
return p1__47536_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__47536_SHARP_);
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
var len__4789__auto___47541 = arguments.length;
var i__4790__auto___47542 = (0);
while(true){
if((i__4790__auto___47542 < len__4789__auto___47541)){
args__4795__auto__.push((arguments[i__4790__auto___47542]));

var G__47543 = (i__4790__auto___47542 + (1));
i__4790__auto___47542 = G__47543;
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
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq47540){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47540));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4795__auto__ = [];
var len__4789__auto___47545 = arguments.length;
var i__4790__auto___47546 = (0);
while(true){
if((i__4790__auto___47546 < len__4789__auto___47545)){
args__4795__auto__.push((arguments[i__4790__auto___47546]));

var G__47547 = (i__4790__auto___47546 + (1));
i__4790__auto___47546 = G__47547;
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
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq47544){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47544));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__47548){
var map__47549 = p__47548;
var map__47549__$1 = (((((!((map__47549 == null))))?(((((map__47549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47549):map__47549);
var message = cljs.core.get.call(null,map__47549__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__47549__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__29155__auto___47628 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_47600){
var state_val_47601 = (state_47600[(1)]);
if((state_val_47601 === (7))){
var inst_47596 = (state_47600[(2)]);
var state_47600__$1 = state_47600;
var statearr_47602_47629 = state_47600__$1;
(statearr_47602_47629[(2)] = inst_47596);

(statearr_47602_47629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47601 === (1))){
var state_47600__$1 = state_47600;
var statearr_47603_47630 = state_47600__$1;
(statearr_47603_47630[(2)] = null);

(statearr_47603_47630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47601 === (4))){
var inst_47553 = (state_47600[(7)]);
var inst_47553__$1 = (state_47600[(2)]);
var state_47600__$1 = (function (){var statearr_47604 = state_47600;
(statearr_47604[(7)] = inst_47553__$1);

return statearr_47604;
})();
if(cljs.core.truth_(inst_47553__$1)){
var statearr_47605_47631 = state_47600__$1;
(statearr_47605_47631[(1)] = (5));

} else {
var statearr_47606_47632 = state_47600__$1;
(statearr_47606_47632[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47601 === (15))){
var inst_47560 = (state_47600[(8)]);
var inst_47575 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_47560);
var inst_47576 = cljs.core.first.call(null,inst_47575);
var inst_47577 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_47576);
var inst_47578 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_47577)].join('');
var inst_47579 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_47578);
var state_47600__$1 = state_47600;
var statearr_47607_47633 = state_47600__$1;
(statearr_47607_47633[(2)] = inst_47579);

(statearr_47607_47633[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47601 === (13))){
var inst_47584 = (state_47600[(2)]);
var state_47600__$1 = state_47600;
var statearr_47608_47634 = state_47600__$1;
(statearr_47608_47634[(2)] = inst_47584);

(statearr_47608_47634[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47601 === (6))){
var state_47600__$1 = state_47600;
var statearr_47609_47635 = state_47600__$1;
(statearr_47609_47635[(2)] = null);

(statearr_47609_47635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47601 === (17))){
var inst_47582 = (state_47600[(2)]);
var state_47600__$1 = state_47600;
var statearr_47610_47636 = state_47600__$1;
(statearr_47610_47636[(2)] = inst_47582);

(statearr_47610_47636[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47601 === (3))){
var inst_47598 = (state_47600[(2)]);
var state_47600__$1 = state_47600;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47600__$1,inst_47598);
} else {
if((state_val_47601 === (12))){
var inst_47559 = (state_47600[(9)]);
var inst_47573 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_47559,opts);
var state_47600__$1 = state_47600;
if(inst_47573){
var statearr_47611_47637 = state_47600__$1;
(statearr_47611_47637[(1)] = (15));

} else {
var statearr_47612_47638 = state_47600__$1;
(statearr_47612_47638[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47601 === (2))){
var state_47600__$1 = state_47600;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47600__$1,(4),ch);
} else {
if((state_val_47601 === (11))){
var inst_47560 = (state_47600[(8)]);
var inst_47565 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47566 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_47560);
var inst_47567 = cljs.core.async.timeout.call(null,(1000));
var inst_47568 = [inst_47566,inst_47567];
var inst_47569 = (new cljs.core.PersistentVector(null,2,(5),inst_47565,inst_47568,null));
var state_47600__$1 = state_47600;
return cljs.core.async.ioc_alts_BANG_.call(null,state_47600__$1,(14),inst_47569);
} else {
if((state_val_47601 === (9))){
var inst_47560 = (state_47600[(8)]);
var inst_47586 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_47587 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_47560);
var inst_47588 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_47587);
var inst_47589 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_47588)].join('');
var inst_47590 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_47589);
var state_47600__$1 = (function (){var statearr_47613 = state_47600;
(statearr_47613[(10)] = inst_47586);

return statearr_47613;
})();
var statearr_47614_47639 = state_47600__$1;
(statearr_47614_47639[(2)] = inst_47590);

(statearr_47614_47639[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47601 === (5))){
var inst_47553 = (state_47600[(7)]);
var inst_47555 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_47556 = (new cljs.core.PersistentArrayMap(null,2,inst_47555,null));
var inst_47557 = (new cljs.core.PersistentHashSet(null,inst_47556,null));
var inst_47558 = figwheel.client.focus_msgs.call(null,inst_47557,inst_47553);
var inst_47559 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_47558);
var inst_47560 = cljs.core.first.call(null,inst_47558);
var inst_47561 = figwheel.client.autoload_QMARK_.call(null);
var state_47600__$1 = (function (){var statearr_47615 = state_47600;
(statearr_47615[(8)] = inst_47560);

(statearr_47615[(9)] = inst_47559);

return statearr_47615;
})();
if(cljs.core.truth_(inst_47561)){
var statearr_47616_47640 = state_47600__$1;
(statearr_47616_47640[(1)] = (8));

} else {
var statearr_47617_47641 = state_47600__$1;
(statearr_47617_47641[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47601 === (14))){
var inst_47571 = (state_47600[(2)]);
var state_47600__$1 = state_47600;
var statearr_47618_47642 = state_47600__$1;
(statearr_47618_47642[(2)] = inst_47571);

(statearr_47618_47642[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47601 === (16))){
var state_47600__$1 = state_47600;
var statearr_47619_47643 = state_47600__$1;
(statearr_47619_47643[(2)] = null);

(statearr_47619_47643[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47601 === (10))){
var inst_47592 = (state_47600[(2)]);
var state_47600__$1 = (function (){var statearr_47620 = state_47600;
(statearr_47620[(11)] = inst_47592);

return statearr_47620;
})();
var statearr_47621_47644 = state_47600__$1;
(statearr_47621_47644[(2)] = null);

(statearr_47621_47644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47601 === (8))){
var inst_47559 = (state_47600[(9)]);
var inst_47563 = figwheel.client.reload_file_state_QMARK_.call(null,inst_47559,opts);
var state_47600__$1 = state_47600;
if(cljs.core.truth_(inst_47563)){
var statearr_47622_47645 = state_47600__$1;
(statearr_47622_47645[(1)] = (11));

} else {
var statearr_47623_47646 = state_47600__$1;
(statearr_47623_47646[(1)] = (12));

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
var statearr_47624 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47624[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29061__auto__);

(statearr_47624[(1)] = (1));

return statearr_47624;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29061__auto____1 = (function (state_47600){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_47600);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e47625){if((e47625 instanceof Object)){
var ex__29064__auto__ = e47625;
var statearr_47626_47647 = state_47600;
(statearr_47626_47647[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47600);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47648 = state_47600;
state_47600 = G__47648;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29061__auto__ = function(state_47600){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29061__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29061__auto____1.call(this,state_47600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29061__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29061__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_47627 = f__29156__auto__.call(null);
(statearr_47627[(6)] = c__29155__auto___47628);

return statearr_47627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29157__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__47649_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__47649_SHARP_));
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
var base_path_47655 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__47651 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__47652 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__47653 = true;
var _STAR_print_fn_STAR__temp_val__47654 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__47653);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__47654);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__47652);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__47651);
}}catch (e47650){if((e47650 instanceof Error)){
var e = e47650;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_47655], null));
} else {
var e = e47650;
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__47656){
var map__47657 = p__47656;
var map__47657__$1 = (((((!((map__47657 == null))))?(((((map__47657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47657):map__47657);
var opts = map__47657__$1;
var build_id = cljs.core.get.call(null,map__47657__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__47659){
var vec__47660 = p__47659;
var seq__47661 = cljs.core.seq.call(null,vec__47660);
var first__47662 = cljs.core.first.call(null,seq__47661);
var seq__47661__$1 = cljs.core.next.call(null,seq__47661);
var map__47663 = first__47662;
var map__47663__$1 = (((((!((map__47663 == null))))?(((((map__47663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47663):map__47663);
var msg = map__47663__$1;
var msg_name = cljs.core.get.call(null,map__47663__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__47661__$1;
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
return (function (p__47665){
var vec__47666 = p__47665;
var seq__47667 = cljs.core.seq.call(null,vec__47666);
var first__47668 = cljs.core.first.call(null,seq__47667);
var seq__47667__$1 = cljs.core.next.call(null,seq__47667);
var map__47669 = first__47668;
var map__47669__$1 = (((((!((map__47669 == null))))?(((((map__47669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47669):map__47669);
var msg = map__47669__$1;
var msg_name = cljs.core.get.call(null,map__47669__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__47667__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__47671){
var map__47672 = p__47671;
var map__47672__$1 = (((((!((map__47672 == null))))?(((((map__47672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47672):map__47672);
var on_compile_warning = cljs.core.get.call(null,map__47672__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__47672__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__47674){
var vec__47675 = p__47674;
var seq__47676 = cljs.core.seq.call(null,vec__47675);
var first__47677 = cljs.core.first.call(null,seq__47676);
var seq__47676__$1 = cljs.core.next.call(null,seq__47676);
var map__47678 = first__47677;
var map__47678__$1 = (((((!((map__47678 == null))))?(((((map__47678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47678):map__47678);
var msg = map__47678__$1;
var msg_name = cljs.core.get.call(null,map__47678__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__47676__$1;
var pred__47680 = cljs.core._EQ_;
var expr__47681 = msg_name;
if(cljs.core.truth_(pred__47680.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__47681))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__47680.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__47681))){
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
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_47770){
var state_val_47771 = (state_47770[(1)]);
if((state_val_47771 === (7))){
var inst_47690 = (state_47770[(2)]);
var state_47770__$1 = state_47770;
if(cljs.core.truth_(inst_47690)){
var statearr_47772_47819 = state_47770__$1;
(statearr_47772_47819[(1)] = (8));

} else {
var statearr_47773_47820 = state_47770__$1;
(statearr_47773_47820[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47771 === (20))){
var inst_47764 = (state_47770[(2)]);
var state_47770__$1 = state_47770;
var statearr_47774_47821 = state_47770__$1;
(statearr_47774_47821[(2)] = inst_47764);

(statearr_47774_47821[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47771 === (27))){
var inst_47760 = (state_47770[(2)]);
var state_47770__$1 = state_47770;
var statearr_47775_47822 = state_47770__$1;
(statearr_47775_47822[(2)] = inst_47760);

(statearr_47775_47822[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47771 === (1))){
var inst_47683 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_47770__$1 = state_47770;
if(cljs.core.truth_(inst_47683)){
var statearr_47776_47823 = state_47770__$1;
(statearr_47776_47823[(1)] = (2));

} else {
var statearr_47777_47824 = state_47770__$1;
(statearr_47777_47824[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47771 === (24))){
var inst_47762 = (state_47770[(2)]);
var state_47770__$1 = state_47770;
var statearr_47778_47825 = state_47770__$1;
(statearr_47778_47825[(2)] = inst_47762);

(statearr_47778_47825[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47771 === (4))){
var inst_47768 = (state_47770[(2)]);
var state_47770__$1 = state_47770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47770__$1,inst_47768);
} else {
if((state_val_47771 === (15))){
var inst_47766 = (state_47770[(2)]);
var state_47770__$1 = state_47770;
var statearr_47779_47826 = state_47770__$1;
(statearr_47779_47826[(2)] = inst_47766);

(statearr_47779_47826[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47771 === (21))){
var inst_47719 = (state_47770[(2)]);
var inst_47720 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47721 = figwheel.client.auto_jump_to_error.call(null,opts,inst_47720);
var state_47770__$1 = (function (){var statearr_47780 = state_47770;
(statearr_47780[(7)] = inst_47719);

return statearr_47780;
})();
var statearr_47781_47827 = state_47770__$1;
(statearr_47781_47827[(2)] = inst_47721);

(statearr_47781_47827[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47771 === (31))){
var inst_47749 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_47770__$1 = state_47770;
if(inst_47749){
var statearr_47782_47828 = state_47770__$1;
(statearr_47782_47828[(1)] = (34));

} else {
var statearr_47783_47829 = state_47770__$1;
(statearr_47783_47829[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47771 === (32))){
var inst_47758 = (state_47770[(2)]);
var state_47770__$1 = state_47770;
var statearr_47784_47830 = state_47770__$1;
(statearr_47784_47830[(2)] = inst_47758);

(statearr_47784_47830[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47771 === (33))){
var inst_47745 = (state_47770[(2)]);
var inst_47746 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47747 = figwheel.client.auto_jump_to_error.call(null,opts,inst_47746);
var state_47770__$1 = (function (){var statearr_47785 = state_47770;
(statearr_47785[(8)] = inst_47745);

return statearr_47785;
})();
var statearr_47786_47831 = state_47770__$1;
(statearr_47786_47831[(2)] = inst_47747);

(statearr_47786_47831[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47771 === (13))){
var inst_47704 = figwheel.client.heads_up.clear.call(null);
var state_47770__$1 = state_47770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47770__$1,(16),inst_47704);
} else {
if((state_val_47771 === (22))){
var inst_47725 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47726 = figwheel.client.heads_up.append_warning_message.call(null,inst_47725);
var state_47770__$1 = state_47770;
var statearr_47787_47832 = state_47770__$1;
(statearr_47787_47832[(2)] = inst_47726);

(statearr_47787_47832[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47771 === (36))){
var inst_47756 = (state_47770[(2)]);
var state_47770__$1 = state_47770;
var statearr_47788_47833 = state_47770__$1;
(statearr_47788_47833[(2)] = inst_47756);

(statearr_47788_47833[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47771 === (29))){
var inst_47736 = (state_47770[(2)]);
var inst_47737 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47738 = figwheel.client.auto_jump_to_error.call(null,opts,inst_47737);
var state_47770__$1 = (function (){var statearr_47789 = state_47770;
(statearr_47789[(9)] = inst_47736);

return statearr_47789;
})();
var statearr_47790_47834 = state_47770__$1;
(statearr_47790_47834[(2)] = inst_47738);

(statearr_47790_47834[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47771 === (6))){
var inst_47685 = (state_47770[(10)]);
var state_47770__$1 = state_47770;
var statearr_47791_47835 = state_47770__$1;
(statearr_47791_47835[(2)] = inst_47685);

(statearr_47791_47835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47771 === (28))){
var inst_47732 = (state_47770[(2)]);
var inst_47733 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47734 = figwheel.client.heads_up.display_warning.call(null,inst_47733);
var state_47770__$1 = (function (){var statearr_47792 = state_47770;
(statearr_47792[(11)] = inst_47732);

return statearr_47792;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47770__$1,(29),inst_47734);
} else {
if((state_val_47771 === (25))){
var inst_47730 = figwheel.client.heads_up.clear.call(null);
var state_47770__$1 = state_47770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47770__$1,(28),inst_47730);
} else {
if((state_val_47771 === (34))){
var inst_47751 = figwheel.client.heads_up.flash_loaded.call(null);
var state_47770__$1 = state_47770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47770__$1,(37),inst_47751);
} else {
if((state_val_47771 === (17))){
var inst_47710 = (state_47770[(2)]);
var inst_47711 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47712 = figwheel.client.auto_jump_to_error.call(null,opts,inst_47711);
var state_47770__$1 = (function (){var statearr_47793 = state_47770;
(statearr_47793[(12)] = inst_47710);

return statearr_47793;
})();
var statearr_47794_47836 = state_47770__$1;
(statearr_47794_47836[(2)] = inst_47712);

(statearr_47794_47836[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47771 === (3))){
var inst_47702 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_47770__$1 = state_47770;
if(inst_47702){
var statearr_47795_47837 = state_47770__$1;
(statearr_47795_47837[(1)] = (13));

} else {
var statearr_47796_47838 = state_47770__$1;
(statearr_47796_47838[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47771 === (12))){
var inst_47698 = (state_47770[(2)]);
var state_47770__$1 = state_47770;
var statearr_47797_47839 = state_47770__$1;
(statearr_47797_47839[(2)] = inst_47698);

(statearr_47797_47839[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47771 === (2))){
var inst_47685 = (state_47770[(10)]);
var inst_47685__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_47770__$1 = (function (){var statearr_47798 = state_47770;
(statearr_47798[(10)] = inst_47685__$1);

return statearr_47798;
})();
if(cljs.core.truth_(inst_47685__$1)){
var statearr_47799_47840 = state_47770__$1;
(statearr_47799_47840[(1)] = (5));

} else {
var statearr_47800_47841 = state_47770__$1;
(statearr_47800_47841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47771 === (23))){
var inst_47728 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_47770__$1 = state_47770;
if(inst_47728){
var statearr_47801_47842 = state_47770__$1;
(statearr_47801_47842[(1)] = (25));

} else {
var statearr_47802_47843 = state_47770__$1;
(statearr_47802_47843[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47771 === (35))){
var state_47770__$1 = state_47770;
var statearr_47803_47844 = state_47770__$1;
(statearr_47803_47844[(2)] = null);

(statearr_47803_47844[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47771 === (19))){
var inst_47723 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_47770__$1 = state_47770;
if(inst_47723){
var statearr_47804_47845 = state_47770__$1;
(statearr_47804_47845[(1)] = (22));

} else {
var statearr_47805_47846 = state_47770__$1;
(statearr_47805_47846[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47771 === (11))){
var inst_47694 = (state_47770[(2)]);
var state_47770__$1 = state_47770;
var statearr_47806_47847 = state_47770__$1;
(statearr_47806_47847[(2)] = inst_47694);

(statearr_47806_47847[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47771 === (9))){
var inst_47696 = figwheel.client.heads_up.clear.call(null);
var state_47770__$1 = state_47770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47770__$1,(12),inst_47696);
} else {
if((state_val_47771 === (5))){
var inst_47687 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_47770__$1 = state_47770;
var statearr_47807_47848 = state_47770__$1;
(statearr_47807_47848[(2)] = inst_47687);

(statearr_47807_47848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47771 === (14))){
var inst_47714 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_47770__$1 = state_47770;
if(inst_47714){
var statearr_47808_47849 = state_47770__$1;
(statearr_47808_47849[(1)] = (18));

} else {
var statearr_47809_47850 = state_47770__$1;
(statearr_47809_47850[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47771 === (26))){
var inst_47740 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_47770__$1 = state_47770;
if(inst_47740){
var statearr_47810_47851 = state_47770__$1;
(statearr_47810_47851[(1)] = (30));

} else {
var statearr_47811_47852 = state_47770__$1;
(statearr_47811_47852[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47771 === (16))){
var inst_47706 = (state_47770[(2)]);
var inst_47707 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47708 = figwheel.client.heads_up.display_exception.call(null,inst_47707);
var state_47770__$1 = (function (){var statearr_47812 = state_47770;
(statearr_47812[(13)] = inst_47706);

return statearr_47812;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47770__$1,(17),inst_47708);
} else {
if((state_val_47771 === (30))){
var inst_47742 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47743 = figwheel.client.heads_up.display_warning.call(null,inst_47742);
var state_47770__$1 = state_47770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47770__$1,(33),inst_47743);
} else {
if((state_val_47771 === (10))){
var inst_47700 = (state_47770[(2)]);
var state_47770__$1 = state_47770;
var statearr_47813_47853 = state_47770__$1;
(statearr_47813_47853[(2)] = inst_47700);

(statearr_47813_47853[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47771 === (18))){
var inst_47716 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47717 = figwheel.client.heads_up.display_exception.call(null,inst_47716);
var state_47770__$1 = state_47770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47770__$1,(21),inst_47717);
} else {
if((state_val_47771 === (37))){
var inst_47753 = (state_47770[(2)]);
var state_47770__$1 = state_47770;
var statearr_47814_47854 = state_47770__$1;
(statearr_47814_47854[(2)] = inst_47753);

(statearr_47814_47854[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47771 === (8))){
var inst_47692 = figwheel.client.heads_up.flash_loaded.call(null);
var state_47770__$1 = state_47770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47770__$1,(11),inst_47692);
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
var statearr_47815 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47815[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29061__auto__);

(statearr_47815[(1)] = (1));

return statearr_47815;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29061__auto____1 = (function (state_47770){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_47770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e47816){if((e47816 instanceof Object)){
var ex__29064__auto__ = e47816;
var statearr_47817_47855 = state_47770;
(statearr_47817_47855[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47856 = state_47770;
state_47770 = G__47856;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29061__auto__ = function(state_47770){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29061__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29061__auto____1.call(this,state_47770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29061__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29061__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_47818 = f__29156__auto__.call(null);
(statearr_47818[(6)] = c__29155__auto__);

return statearr_47818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29157__auto__);
}));

return c__29155__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29155__auto___47885 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_47871){
var state_val_47872 = (state_47871[(1)]);
if((state_val_47872 === (1))){
var state_47871__$1 = state_47871;
var statearr_47873_47886 = state_47871__$1;
(statearr_47873_47886[(2)] = null);

(statearr_47873_47886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47872 === (2))){
var state_47871__$1 = state_47871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47871__$1,(4),ch);
} else {
if((state_val_47872 === (3))){
var inst_47869 = (state_47871[(2)]);
var state_47871__$1 = state_47871;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47871__$1,inst_47869);
} else {
if((state_val_47872 === (4))){
var inst_47859 = (state_47871[(7)]);
var inst_47859__$1 = (state_47871[(2)]);
var state_47871__$1 = (function (){var statearr_47874 = state_47871;
(statearr_47874[(7)] = inst_47859__$1);

return statearr_47874;
})();
if(cljs.core.truth_(inst_47859__$1)){
var statearr_47875_47887 = state_47871__$1;
(statearr_47875_47887[(1)] = (5));

} else {
var statearr_47876_47888 = state_47871__$1;
(statearr_47876_47888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47872 === (5))){
var inst_47859 = (state_47871[(7)]);
var inst_47861 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_47859);
var state_47871__$1 = state_47871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47871__$1,(8),inst_47861);
} else {
if((state_val_47872 === (6))){
var state_47871__$1 = state_47871;
var statearr_47877_47889 = state_47871__$1;
(statearr_47877_47889[(2)] = null);

(statearr_47877_47889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47872 === (7))){
var inst_47867 = (state_47871[(2)]);
var state_47871__$1 = state_47871;
var statearr_47878_47890 = state_47871__$1;
(statearr_47878_47890[(2)] = inst_47867);

(statearr_47878_47890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47872 === (8))){
var inst_47863 = (state_47871[(2)]);
var state_47871__$1 = (function (){var statearr_47879 = state_47871;
(statearr_47879[(8)] = inst_47863);

return statearr_47879;
})();
var statearr_47880_47891 = state_47871__$1;
(statearr_47880_47891[(2)] = null);

(statearr_47880_47891[(1)] = (2));


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
var statearr_47881 = [null,null,null,null,null,null,null,null,null];
(statearr_47881[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29061__auto__);

(statearr_47881[(1)] = (1));

return statearr_47881;
});
var figwheel$client$heads_up_plugin_$_state_machine__29061__auto____1 = (function (state_47871){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_47871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e47882){if((e47882 instanceof Object)){
var ex__29064__auto__ = e47882;
var statearr_47883_47892 = state_47871;
(statearr_47883_47892[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47882;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47893 = state_47871;
state_47871 = G__47893;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29061__auto__ = function(state_47871){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29061__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29061__auto____1.call(this,state_47871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29061__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29061__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_47884 = f__29156__auto__.call(null);
(statearr_47884[(6)] = c__29155__auto___47885);

return statearr_47884;
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
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_47899){
var state_val_47900 = (state_47899[(1)]);
if((state_val_47900 === (1))){
var inst_47894 = cljs.core.async.timeout.call(null,(3000));
var state_47899__$1 = state_47899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47899__$1,(2),inst_47894);
} else {
if((state_val_47900 === (2))){
var inst_47896 = (state_47899[(2)]);
var inst_47897 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_47899__$1 = (function (){var statearr_47901 = state_47899;
(statearr_47901[(7)] = inst_47896);

return statearr_47901;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47899__$1,inst_47897);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29061__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29061__auto____0 = (function (){
var statearr_47902 = [null,null,null,null,null,null,null,null];
(statearr_47902[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29061__auto__);

(statearr_47902[(1)] = (1));

return statearr_47902;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29061__auto____1 = (function (state_47899){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_47899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e47903){if((e47903 instanceof Object)){
var ex__29064__auto__ = e47903;
var statearr_47904_47906 = state_47899;
(statearr_47904_47906[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47907 = state_47899;
state_47899 = G__47907;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29061__auto__ = function(state_47899){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29061__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29061__auto____1.call(this,state_47899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29061__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29061__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_47905 = f__29156__auto__.call(null);
(statearr_47905[(6)] = c__29155__auto__);

return statearr_47905;
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
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_47914){
var state_val_47915 = (state_47914[(1)]);
if((state_val_47915 === (1))){
var inst_47908 = cljs.core.async.timeout.call(null,(2000));
var state_47914__$1 = state_47914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47914__$1,(2),inst_47908);
} else {
if((state_val_47915 === (2))){
var inst_47910 = (state_47914[(2)]);
var inst_47911 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_47912 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_47911);
var state_47914__$1 = (function (){var statearr_47916 = state_47914;
(statearr_47916[(7)] = inst_47910);

return statearr_47916;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47914__$1,inst_47912);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29061__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29061__auto____0 = (function (){
var statearr_47917 = [null,null,null,null,null,null,null,null];
(statearr_47917[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29061__auto__);

(statearr_47917[(1)] = (1));

return statearr_47917;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29061__auto____1 = (function (state_47914){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_47914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e47918){if((e47918 instanceof Object)){
var ex__29064__auto__ = e47918;
var statearr_47919_47921 = state_47914;
(statearr_47919_47921[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47922 = state_47914;
state_47914 = G__47922;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29061__auto__ = function(state_47914){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29061__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29061__auto____1.call(this,state_47914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29061__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29061__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_47920 = f__29156__auto__.call(null);
(statearr_47920[(6)] = c__29155__auto__);

return statearr_47920;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__47923){
var map__47924 = p__47923;
var map__47924__$1 = (((((!((map__47924 == null))))?(((((map__47924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47924):map__47924);
var file = cljs.core.get.call(null,map__47924__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__47924__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__47924__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__47926 = "";
var G__47926__$1 = (cljs.core.truth_(file)?[G__47926,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__47926);
var G__47926__$2 = (cljs.core.truth_(line)?[G__47926__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__47926__$1);
if(cljs.core.truth_((function (){var and__4174__auto__ = line;
if(cljs.core.truth_(and__4174__auto__)){
return column;
} else {
return and__4174__auto__;
}
})())){
return [G__47926__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__47926__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__47927){
var map__47928 = p__47927;
var map__47928__$1 = (((((!((map__47928 == null))))?(((((map__47928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47928):map__47928);
var ed = map__47928__$1;
var exception_data = cljs.core.get.call(null,map__47928__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__47928__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_47931 = (function (){var G__47930 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47930)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__47930;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_47931);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__47932){
var map__47933 = p__47932;
var map__47933__$1 = (((((!((map__47933 == null))))?(((((map__47933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47933):map__47933);
var w = map__47933__$1;
var message = cljs.core.get.call(null,map__47933__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__47935 = cljs.core.seq.call(null,plugins);
var chunk__47936 = null;
var count__47937 = (0);
var i__47938 = (0);
while(true){
if((i__47938 < count__47937)){
var vec__47945 = cljs.core._nth.call(null,chunk__47936,i__47938);
var k = cljs.core.nth.call(null,vec__47945,(0),null);
var plugin = cljs.core.nth.call(null,vec__47945,(1),null);
if(cljs.core.truth_(plugin)){
var pl_47951 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__47935,chunk__47936,count__47937,i__47938,pl_47951,vec__47945,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_47951.call(null,msg_hist);
});})(seq__47935,chunk__47936,count__47937,i__47938,pl_47951,vec__47945,k,plugin))
);
} else {
}


var G__47952 = seq__47935;
var G__47953 = chunk__47936;
var G__47954 = count__47937;
var G__47955 = (i__47938 + (1));
seq__47935 = G__47952;
chunk__47936 = G__47953;
count__47937 = G__47954;
i__47938 = G__47955;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__47935);
if(temp__5735__auto__){
var seq__47935__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47935__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__47935__$1);
var G__47956 = cljs.core.chunk_rest.call(null,seq__47935__$1);
var G__47957 = c__4609__auto__;
var G__47958 = cljs.core.count.call(null,c__4609__auto__);
var G__47959 = (0);
seq__47935 = G__47956;
chunk__47936 = G__47957;
count__47937 = G__47958;
i__47938 = G__47959;
continue;
} else {
var vec__47948 = cljs.core.first.call(null,seq__47935__$1);
var k = cljs.core.nth.call(null,vec__47948,(0),null);
var plugin = cljs.core.nth.call(null,vec__47948,(1),null);
if(cljs.core.truth_(plugin)){
var pl_47960 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__47935,chunk__47936,count__47937,i__47938,pl_47960,vec__47948,k,plugin,seq__47935__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_47960.call(null,msg_hist);
});})(seq__47935,chunk__47936,count__47937,i__47938,pl_47960,vec__47948,k,plugin,seq__47935__$1,temp__5735__auto__))
);
} else {
}


var G__47961 = cljs.core.next.call(null,seq__47935__$1);
var G__47962 = null;
var G__47963 = (0);
var G__47964 = (0);
seq__47935 = G__47961;
chunk__47936 = G__47962;
count__47937 = G__47963;
i__47938 = G__47964;
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
var G__47966 = arguments.length;
switch (G__47966) {
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

var seq__47967_47972 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__47968_47973 = null;
var count__47969_47974 = (0);
var i__47970_47975 = (0);
while(true){
if((i__47970_47975 < count__47969_47974)){
var msg_47976 = cljs.core._nth.call(null,chunk__47968_47973,i__47970_47975);
figwheel.client.socket.handle_incoming_message.call(null,msg_47976);


var G__47977 = seq__47967_47972;
var G__47978 = chunk__47968_47973;
var G__47979 = count__47969_47974;
var G__47980 = (i__47970_47975 + (1));
seq__47967_47972 = G__47977;
chunk__47968_47973 = G__47978;
count__47969_47974 = G__47979;
i__47970_47975 = G__47980;
continue;
} else {
var temp__5735__auto___47981 = cljs.core.seq.call(null,seq__47967_47972);
if(temp__5735__auto___47981){
var seq__47967_47982__$1 = temp__5735__auto___47981;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47967_47982__$1)){
var c__4609__auto___47983 = cljs.core.chunk_first.call(null,seq__47967_47982__$1);
var G__47984 = cljs.core.chunk_rest.call(null,seq__47967_47982__$1);
var G__47985 = c__4609__auto___47983;
var G__47986 = cljs.core.count.call(null,c__4609__auto___47983);
var G__47987 = (0);
seq__47967_47972 = G__47984;
chunk__47968_47973 = G__47985;
count__47969_47974 = G__47986;
i__47970_47975 = G__47987;
continue;
} else {
var msg_47988 = cljs.core.first.call(null,seq__47967_47982__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_47988);


var G__47989 = cljs.core.next.call(null,seq__47967_47982__$1);
var G__47990 = null;
var G__47991 = (0);
var G__47992 = (0);
seq__47967_47972 = G__47989;
chunk__47968_47973 = G__47990;
count__47969_47974 = G__47991;
i__47970_47975 = G__47992;
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
var len__4789__auto___47997 = arguments.length;
var i__4790__auto___47998 = (0);
while(true){
if((i__4790__auto___47998 < len__4789__auto___47997)){
args__4795__auto__.push((arguments[i__4790__auto___47998]));

var G__47999 = (i__4790__auto___47998 + (1));
i__4790__auto___47998 = G__47999;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__47994){
var map__47995 = p__47994;
var map__47995__$1 = (((((!((map__47995 == null))))?(((((map__47995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47995):map__47995);
var opts = map__47995__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq47993){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47993));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e48000){if((e48000 instanceof Error)){
var e = e48000;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e48000;

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

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__48001){
var map__48002 = p__48001;
var map__48002__$1 = (((((!((map__48002 == null))))?(((((map__48002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48002):map__48002);
var msg_name = cljs.core.get.call(null,map__48002__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1589675446089
