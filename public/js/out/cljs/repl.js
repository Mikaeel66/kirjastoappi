// Compiled by ClojureScript 1.10.597 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__47188){
var map__47189 = p__47188;
var map__47189__$1 = (((((!((map__47189 == null))))?(((((map__47189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47189):map__47189);
var m = map__47189__$1;
var n = cljs.core.get.call(null,map__47189__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__47189__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__47191_47223 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47192_47224 = null;
var count__47193_47225 = (0);
var i__47194_47226 = (0);
while(true){
if((i__47194_47226 < count__47193_47225)){
var f_47227 = cljs.core._nth.call(null,chunk__47192_47224,i__47194_47226);
cljs.core.println.call(null,"  ",f_47227);


var G__47228 = seq__47191_47223;
var G__47229 = chunk__47192_47224;
var G__47230 = count__47193_47225;
var G__47231 = (i__47194_47226 + (1));
seq__47191_47223 = G__47228;
chunk__47192_47224 = G__47229;
count__47193_47225 = G__47230;
i__47194_47226 = G__47231;
continue;
} else {
var temp__5735__auto___47232 = cljs.core.seq.call(null,seq__47191_47223);
if(temp__5735__auto___47232){
var seq__47191_47233__$1 = temp__5735__auto___47232;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47191_47233__$1)){
var c__4609__auto___47234 = cljs.core.chunk_first.call(null,seq__47191_47233__$1);
var G__47235 = cljs.core.chunk_rest.call(null,seq__47191_47233__$1);
var G__47236 = c__4609__auto___47234;
var G__47237 = cljs.core.count.call(null,c__4609__auto___47234);
var G__47238 = (0);
seq__47191_47223 = G__47235;
chunk__47192_47224 = G__47236;
count__47193_47225 = G__47237;
i__47194_47226 = G__47238;
continue;
} else {
var f_47239 = cljs.core.first.call(null,seq__47191_47233__$1);
cljs.core.println.call(null,"  ",f_47239);


var G__47240 = cljs.core.next.call(null,seq__47191_47233__$1);
var G__47241 = null;
var G__47242 = (0);
var G__47243 = (0);
seq__47191_47223 = G__47240;
chunk__47192_47224 = G__47241;
count__47193_47225 = G__47242;
i__47194_47226 = G__47243;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_47244 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_47244);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_47244)))?cljs.core.second.call(null,arglists_47244):arglists_47244));
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
var seq__47195_47245 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47196_47246 = null;
var count__47197_47247 = (0);
var i__47198_47248 = (0);
while(true){
if((i__47198_47248 < count__47197_47247)){
var vec__47209_47249 = cljs.core._nth.call(null,chunk__47196_47246,i__47198_47248);
var name_47250 = cljs.core.nth.call(null,vec__47209_47249,(0),null);
var map__47212_47251 = cljs.core.nth.call(null,vec__47209_47249,(1),null);
var map__47212_47252__$1 = (((((!((map__47212_47251 == null))))?(((((map__47212_47251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47212_47251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47212_47251):map__47212_47251);
var doc_47253 = cljs.core.get.call(null,map__47212_47252__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_47254 = cljs.core.get.call(null,map__47212_47252__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_47250);

cljs.core.println.call(null," ",arglists_47254);

if(cljs.core.truth_(doc_47253)){
cljs.core.println.call(null," ",doc_47253);
} else {
}


var G__47255 = seq__47195_47245;
var G__47256 = chunk__47196_47246;
var G__47257 = count__47197_47247;
var G__47258 = (i__47198_47248 + (1));
seq__47195_47245 = G__47255;
chunk__47196_47246 = G__47256;
count__47197_47247 = G__47257;
i__47198_47248 = G__47258;
continue;
} else {
var temp__5735__auto___47259 = cljs.core.seq.call(null,seq__47195_47245);
if(temp__5735__auto___47259){
var seq__47195_47260__$1 = temp__5735__auto___47259;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47195_47260__$1)){
var c__4609__auto___47261 = cljs.core.chunk_first.call(null,seq__47195_47260__$1);
var G__47262 = cljs.core.chunk_rest.call(null,seq__47195_47260__$1);
var G__47263 = c__4609__auto___47261;
var G__47264 = cljs.core.count.call(null,c__4609__auto___47261);
var G__47265 = (0);
seq__47195_47245 = G__47262;
chunk__47196_47246 = G__47263;
count__47197_47247 = G__47264;
i__47198_47248 = G__47265;
continue;
} else {
var vec__47214_47266 = cljs.core.first.call(null,seq__47195_47260__$1);
var name_47267 = cljs.core.nth.call(null,vec__47214_47266,(0),null);
var map__47217_47268 = cljs.core.nth.call(null,vec__47214_47266,(1),null);
var map__47217_47269__$1 = (((((!((map__47217_47268 == null))))?(((((map__47217_47268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47217_47268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47217_47268):map__47217_47268);
var doc_47270 = cljs.core.get.call(null,map__47217_47269__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_47271 = cljs.core.get.call(null,map__47217_47269__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_47267);

cljs.core.println.call(null," ",arglists_47271);

if(cljs.core.truth_(doc_47270)){
cljs.core.println.call(null," ",doc_47270);
} else {
}


var G__47272 = cljs.core.next.call(null,seq__47195_47260__$1);
var G__47273 = null;
var G__47274 = (0);
var G__47275 = (0);
seq__47195_47245 = G__47272;
chunk__47196_47246 = G__47273;
count__47197_47247 = G__47274;
i__47198_47248 = G__47275;
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

var seq__47219 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__47220 = null;
var count__47221 = (0);
var i__47222 = (0);
while(true){
if((i__47222 < count__47221)){
var role = cljs.core._nth.call(null,chunk__47220,i__47222);
var temp__5735__auto___47276__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___47276__$1)){
var spec_47277 = temp__5735__auto___47276__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_47277));
} else {
}


var G__47278 = seq__47219;
var G__47279 = chunk__47220;
var G__47280 = count__47221;
var G__47281 = (i__47222 + (1));
seq__47219 = G__47278;
chunk__47220 = G__47279;
count__47221 = G__47280;
i__47222 = G__47281;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__47219);
if(temp__5735__auto____$1){
var seq__47219__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47219__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__47219__$1);
var G__47282 = cljs.core.chunk_rest.call(null,seq__47219__$1);
var G__47283 = c__4609__auto__;
var G__47284 = cljs.core.count.call(null,c__4609__auto__);
var G__47285 = (0);
seq__47219 = G__47282;
chunk__47220 = G__47283;
count__47221 = G__47284;
i__47222 = G__47285;
continue;
} else {
var role = cljs.core.first.call(null,seq__47219__$1);
var temp__5735__auto___47286__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___47286__$2)){
var spec_47287 = temp__5735__auto___47286__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_47287));
} else {
}


var G__47288 = cljs.core.next.call(null,seq__47219__$1);
var G__47289 = null;
var G__47290 = (0);
var G__47291 = (0);
seq__47219 = G__47288;
chunk__47220 = G__47289;
count__47221 = G__47290;
i__47222 = G__47291;
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
var G__47292 = cljs.core.conj.call(null,via,t);
var G__47293 = cljs.core.ex_cause.call(null,t);
via = G__47292;
t = G__47293;
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
var map__47296 = datafied_throwable;
var map__47296__$1 = (((((!((map__47296 == null))))?(((((map__47296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47296):map__47296);
var via = cljs.core.get.call(null,map__47296__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__47296__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__47296__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__47297 = cljs.core.last.call(null,via);
var map__47297__$1 = (((((!((map__47297 == null))))?(((((map__47297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47297):map__47297);
var type = cljs.core.get.call(null,map__47297__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__47297__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__47297__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__47298 = data;
var map__47298__$1 = (((((!((map__47298 == null))))?(((((map__47298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47298):map__47298);
var problems = cljs.core.get.call(null,map__47298__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__47298__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__47298__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__47299 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__47299__$1 = (((((!((map__47299 == null))))?(((((map__47299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47299):map__47299);
var top_data = map__47299__$1;
var source = cljs.core.get.call(null,map__47299__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__47304 = phase;
var G__47304__$1 = (((G__47304 instanceof cljs.core.Keyword))?G__47304.fqn:null);
switch (G__47304__$1) {
case "read-source":
var map__47305 = data;
var map__47305__$1 = (((((!((map__47305 == null))))?(((((map__47305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47305):map__47305);
var line = cljs.core.get.call(null,map__47305__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__47305__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__47307 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__47307__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__47307,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__47307);
var G__47307__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__47307__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__47307__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__47307__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__47307__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__47308 = top_data;
var G__47308__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__47308,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__47308);
var G__47308__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__47308__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__47308__$1);
var G__47308__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__47308__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__47308__$2);
var G__47308__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__47308__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__47308__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__47308__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__47308__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__47309 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__47309,(0),null);
var method = cljs.core.nth.call(null,vec__47309,(1),null);
var file = cljs.core.nth.call(null,vec__47309,(2),null);
var line = cljs.core.nth.call(null,vec__47309,(3),null);
var G__47312 = top_data;
var G__47312__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__47312,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__47312);
var G__47312__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__47312__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__47312__$1);
var G__47312__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.call(null,G__47312__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__47312__$2);
var G__47312__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__47312__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__47312__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__47312__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__47312__$4;
}

break;
case "execution":
var vec__47313 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__47313,(0),null);
var method = cljs.core.nth.call(null,vec__47313,(1),null);
var file = cljs.core.nth.call(null,vec__47313,(2),null);
var line = cljs.core.nth.call(null,vec__47313,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__47295_SHARP_){
var or__4185__auto__ = (p1__47295_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__47295_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__47316 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__47316__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__47316,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__47316);
var G__47316__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__47316__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__47316__$1);
var G__47316__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__47316__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__47316__$2);
var G__47316__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__47316__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__47316__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__47316__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__47316__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47304__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__47320){
var map__47321 = p__47320;
var map__47321__$1 = (((((!((map__47321 == null))))?(((((map__47321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47321):map__47321);
var triage_data = map__47321__$1;
var phase = cljs.core.get.call(null,map__47321__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__47321__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__47321__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__47321__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__47321__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__47321__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__47321__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__47321__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__47323 = phase;
var G__47323__$1 = (((G__47323 instanceof cljs.core.Keyword))?G__47323.fqn:null);
switch (G__47323__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__47324_47333 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__47325_47334 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__47326_47335 = true;
var _STAR_print_fn_STAR__temp_val__47327_47336 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__47326_47335);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__47327_47336);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__47318_SHARP_){
return cljs.core.dissoc.call(null,p1__47318_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__47325_47334);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__47324_47333);
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
var _STAR_print_newline_STAR__orig_val__47328_47337 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__47329_47338 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__47330_47339 = true;
var _STAR_print_fn_STAR__temp_val__47331_47340 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__47330_47339);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__47331_47340);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__47319_SHARP_){
return cljs.core.dissoc.call(null,p1__47319_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__47329_47338);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__47328_47337);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47323__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1589675445704
