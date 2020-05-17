// Compiled by ClojureScript 1.10.597 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__39593__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__39593 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39594__i = 0, G__39594__a = new Array(arguments.length -  0);
while (G__39594__i < G__39594__a.length) {G__39594__a[G__39594__i] = arguments[G__39594__i + 0]; ++G__39594__i;}
  args = new cljs.core.IndexedSeq(G__39594__a,0,null);
} 
return G__39593__delegate.call(this,args);};
G__39593.cljs$lang$maxFixedArity = 0;
G__39593.cljs$lang$applyTo = (function (arglist__39595){
var args = cljs.core.seq(arglist__39595);
return G__39593__delegate(args);
});
G__39593.cljs$core$IFn$_invoke$arity$variadic = G__39593__delegate;
return G__39593;
})()
);

(o.error = (function() { 
var G__39596__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__39596 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39597__i = 0, G__39597__a = new Array(arguments.length -  0);
while (G__39597__i < G__39597__a.length) {G__39597__a[G__39597__i] = arguments[G__39597__i + 0]; ++G__39597__i;}
  args = new cljs.core.IndexedSeq(G__39597__a,0,null);
} 
return G__39596__delegate.call(this,args);};
G__39596.cljs$lang$maxFixedArity = 0;
G__39596.cljs$lang$applyTo = (function (arglist__39598){
var args = cljs.core.seq(arglist__39598);
return G__39596__delegate(args);
});
G__39596.cljs$core$IFn$_invoke$arity$variadic = G__39596__delegate;
return G__39596;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1589676401580
