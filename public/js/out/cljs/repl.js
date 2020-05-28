// Compiled by ClojureScript 1.10.597 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__66401){
var map__66402 = p__66401;
var map__66402__$1 = (((((!((map__66402 == null))))?(((((map__66402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66402):map__66402);
var m = map__66402__$1;
var n = cljs.core.get.call(null,map__66402__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__66402__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__66404_66436 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__66405_66437 = null;
var count__66406_66438 = (0);
var i__66407_66439 = (0);
while(true){
if((i__66407_66439 < count__66406_66438)){
var f_66440 = cljs.core._nth.call(null,chunk__66405_66437,i__66407_66439);
cljs.core.println.call(null,"  ",f_66440);


var G__66441 = seq__66404_66436;
var G__66442 = chunk__66405_66437;
var G__66443 = count__66406_66438;
var G__66444 = (i__66407_66439 + (1));
seq__66404_66436 = G__66441;
chunk__66405_66437 = G__66442;
count__66406_66438 = G__66443;
i__66407_66439 = G__66444;
continue;
} else {
var temp__5735__auto___66445 = cljs.core.seq.call(null,seq__66404_66436);
if(temp__5735__auto___66445){
var seq__66404_66446__$1 = temp__5735__auto___66445;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66404_66446__$1)){
var c__4609__auto___66447 = cljs.core.chunk_first.call(null,seq__66404_66446__$1);
var G__66448 = cljs.core.chunk_rest.call(null,seq__66404_66446__$1);
var G__66449 = c__4609__auto___66447;
var G__66450 = cljs.core.count.call(null,c__4609__auto___66447);
var G__66451 = (0);
seq__66404_66436 = G__66448;
chunk__66405_66437 = G__66449;
count__66406_66438 = G__66450;
i__66407_66439 = G__66451;
continue;
} else {
var f_66452 = cljs.core.first.call(null,seq__66404_66446__$1);
cljs.core.println.call(null,"  ",f_66452);


var G__66453 = cljs.core.next.call(null,seq__66404_66446__$1);
var G__66454 = null;
var G__66455 = (0);
var G__66456 = (0);
seq__66404_66436 = G__66453;
chunk__66405_66437 = G__66454;
count__66406_66438 = G__66455;
i__66407_66439 = G__66456;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_66457 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_66457);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_66457)))?cljs.core.second.call(null,arglists_66457):arglists_66457));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__66408_66458 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__66409_66459 = null;
var count__66410_66460 = (0);
var i__66411_66461 = (0);
while(true){
if((i__66411_66461 < count__66410_66460)){
var vec__66422_66462 = cljs.core._nth.call(null,chunk__66409_66459,i__66411_66461);
var name_66463 = cljs.core.nth.call(null,vec__66422_66462,(0),null);
var map__66425_66464 = cljs.core.nth.call(null,vec__66422_66462,(1),null);
var map__66425_66465__$1 = (((((!((map__66425_66464 == null))))?(((((map__66425_66464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66425_66464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66425_66464):map__66425_66464);
var doc_66466 = cljs.core.get.call(null,map__66425_66465__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_66467 = cljs.core.get.call(null,map__66425_66465__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_66463);

cljs.core.println.call(null," ",arglists_66467);

if(cljs.core.truth_(doc_66466)){
cljs.core.println.call(null," ",doc_66466);
} else {
}


var G__66468 = seq__66408_66458;
var G__66469 = chunk__66409_66459;
var G__66470 = count__66410_66460;
var G__66471 = (i__66411_66461 + (1));
seq__66408_66458 = G__66468;
chunk__66409_66459 = G__66469;
count__66410_66460 = G__66470;
i__66411_66461 = G__66471;
continue;
} else {
var temp__5735__auto___66472 = cljs.core.seq.call(null,seq__66408_66458);
if(temp__5735__auto___66472){
var seq__66408_66473__$1 = temp__5735__auto___66472;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66408_66473__$1)){
var c__4609__auto___66474 = cljs.core.chunk_first.call(null,seq__66408_66473__$1);
var G__66475 = cljs.core.chunk_rest.call(null,seq__66408_66473__$1);
var G__66476 = c__4609__auto___66474;
var G__66477 = cljs.core.count.call(null,c__4609__auto___66474);
var G__66478 = (0);
seq__66408_66458 = G__66475;
chunk__66409_66459 = G__66476;
count__66410_66460 = G__66477;
i__66411_66461 = G__66478;
continue;
} else {
var vec__66427_66479 = cljs.core.first.call(null,seq__66408_66473__$1);
var name_66480 = cljs.core.nth.call(null,vec__66427_66479,(0),null);
var map__66430_66481 = cljs.core.nth.call(null,vec__66427_66479,(1),null);
var map__66430_66482__$1 = (((((!((map__66430_66481 == null))))?(((((map__66430_66481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66430_66481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66430_66481):map__66430_66481);
var doc_66483 = cljs.core.get.call(null,map__66430_66482__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_66484 = cljs.core.get.call(null,map__66430_66482__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_66480);

cljs.core.println.call(null," ",arglists_66484);

if(cljs.core.truth_(doc_66483)){
cljs.core.println.call(null," ",doc_66483);
} else {
}


var G__66485 = cljs.core.next.call(null,seq__66408_66473__$1);
var G__66486 = null;
var G__66487 = (0);
var G__66488 = (0);
seq__66408_66458 = G__66485;
chunk__66409_66459 = G__66486;
count__66410_66460 = G__66487;
i__66411_66461 = G__66488;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__66432 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__66433 = null;
var count__66434 = (0);
var i__66435 = (0);
while(true){
if((i__66435 < count__66434)){
var role = cljs.core._nth.call(null,chunk__66433,i__66435);
var temp__5735__auto___66489__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___66489__$1)){
var spec_66490 = temp__5735__auto___66489__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_66490));
} else {
}


var G__66491 = seq__66432;
var G__66492 = chunk__66433;
var G__66493 = count__66434;
var G__66494 = (i__66435 + (1));
seq__66432 = G__66491;
chunk__66433 = G__66492;
count__66434 = G__66493;
i__66435 = G__66494;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__66432);
if(temp__5735__auto____$1){
var seq__66432__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66432__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__66432__$1);
var G__66495 = cljs.core.chunk_rest.call(null,seq__66432__$1);
var G__66496 = c__4609__auto__;
var G__66497 = cljs.core.count.call(null,c__4609__auto__);
var G__66498 = (0);
seq__66432 = G__66495;
chunk__66433 = G__66496;
count__66434 = G__66497;
i__66435 = G__66498;
continue;
} else {
var role = cljs.core.first.call(null,seq__66432__$1);
var temp__5735__auto___66499__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___66499__$2)){
var spec_66500 = temp__5735__auto___66499__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_66500));
} else {
}


var G__66501 = cljs.core.next.call(null,seq__66432__$1);
var G__66502 = null;
var G__66503 = (0);
var G__66504 = (0);
seq__66432 = G__66501;
chunk__66433 = G__66502;
count__66434 = G__66503;
i__66435 = G__66504;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__66505 = cljs.core.conj.call(null,via,t);
var G__66506 = cljs.core.ex_cause.call(null,t);
via = G__66505;
t = G__66506;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__66509 = datafied_throwable;
var map__66509__$1 = (((((!((map__66509 == null))))?(((((map__66509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66509):map__66509);
var via = cljs.core.get.call(null,map__66509__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__66509__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__66509__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__66510 = cljs.core.last.call(null,via);
var map__66510__$1 = (((((!((map__66510 == null))))?(((((map__66510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66510):map__66510);
var type = cljs.core.get.call(null,map__66510__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__66510__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__66510__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__66511 = data;
var map__66511__$1 = (((((!((map__66511 == null))))?(((((map__66511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66511):map__66511);
var problems = cljs.core.get.call(null,map__66511__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__66511__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__66511__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__66512 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__66512__$1 = (((((!((map__66512 == null))))?(((((map__66512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66512.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66512):map__66512);
var top_data = map__66512__$1;
var source = cljs.core.get.call(null,map__66512__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__66517 = phase;
var G__66517__$1 = (((G__66517 instanceof cljs.core.Keyword))?G__66517.fqn:null);
switch (G__66517__$1) {
case "read-source":
var map__66518 = data;
var map__66518__$1 = (((((!((map__66518 == null))))?(((((map__66518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66518):map__66518);
var line = cljs.core.get.call(null,map__66518__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__66518__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__66520 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__66520__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__66520,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__66520);
var G__66520__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__66520__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__66520__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__66520__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__66520__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__66521 = top_data;
var G__66521__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__66521,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__66521);
var G__66521__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__66521__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__66521__$1);
var G__66521__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__66521__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__66521__$2);
var G__66521__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__66521__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__66521__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__66521__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__66521__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__66522 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__66522,(0),null);
var method = cljs.core.nth.call(null,vec__66522,(1),null);
var file = cljs.core.nth.call(null,vec__66522,(2),null);
var line = cljs.core.nth.call(null,vec__66522,(3),null);
var G__66525 = top_data;
var G__66525__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__66525,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__66525);
var G__66525__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__66525__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__66525__$1);
var G__66525__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.call(null,G__66525__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__66525__$2);
var G__66525__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__66525__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__66525__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__66525__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__66525__$4;
}

break;
case "execution":
var vec__66526 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__66526,(0),null);
var method = cljs.core.nth.call(null,vec__66526,(1),null);
var file = cljs.core.nth.call(null,vec__66526,(2),null);
var line = cljs.core.nth.call(null,vec__66526,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__66508_SHARP_){
var or__4185__auto__ = (p1__66508_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__66508_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__66529 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__66529__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__66529,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__66529);
var G__66529__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__66529__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__66529__$1);
var G__66529__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.call(null,G__66529__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__66529__$2);
var G__66529__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__66529__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__66529__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__66529__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__66529__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66517__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__66533){
var map__66534 = p__66533;
var map__66534__$1 = (((((!((map__66534 == null))))?(((((map__66534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66534):map__66534);
var triage_data = map__66534__$1;
var phase = cljs.core.get.call(null,map__66534__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__66534__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__66534__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__66534__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__66534__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__66534__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__66534__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__66534__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__66536 = phase;
var G__66536__$1 = (((G__66536 instanceof cljs.core.Keyword))?G__66536.fqn:null);
switch (G__66536__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__66537_66546 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__66538_66547 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__66539_66548 = true;
var _STAR_print_fn_STAR__temp_val__66540_66549 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__66539_66548);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__66540_66549);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__66531_SHARP_){
return cljs.core.dissoc.call(null,p1__66531_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__66538_66547);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__66537_66546);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__66541_66550 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__66542_66551 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__66543_66552 = true;
var _STAR_print_fn_STAR__temp_val__66544_66553 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__66543_66552);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__66544_66553);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__66532_SHARP_){
return cljs.core.dissoc.call(null,p1__66532_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__66542_66551);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__66541_66550);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66536__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1589677420322
