// Compiled by ClojureScript 1.10.597 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__59051__delegate = function (x__33520__auto__){
if(cljs.core.truth_(reagtest.core.mount_root)){
return cljs.core.apply.call(null,reagtest.core.mount_root,x__33520__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '","reagtest.core/mount-root","' is missing"].join(''));
}
};
var G__59051 = function (var_args){
var x__33520__auto__ = null;
if (arguments.length > 0) {
var G__59052__i = 0, G__59052__a = new Array(arguments.length -  0);
while (G__59052__i < G__59052__a.length) {G__59052__a[G__59052__i] = arguments[G__59052__i + 0]; ++G__59052__i;}
  x__33520__auto__ = new cljs.core.IndexedSeq(G__59052__a,0,null);
} 
return G__59051__delegate.call(this,x__33520__auto__);};
G__59051.cljs$lang$maxFixedArity = 0;
G__59051.cljs$lang$applyTo = (function (arglist__59053){
var x__33520__auto__ = cljs.core.seq(arglist__59053);
return G__59051__delegate(x__33520__auto__);
});
G__59051.cljs$core$IFn$_invoke$arity$variadic = G__59051__delegate;
return G__59051;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3450/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"app",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3450/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1589676434417
