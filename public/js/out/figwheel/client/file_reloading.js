// Compiled by ClojureScript 1.10.597 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4185__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4185__auto__){
return or__4185__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4185__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return ((goog.string.startsWith("clojure.",name)) || (goog.string.startsWith("goog.",name)));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__55253_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__55253_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,(function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
}));
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,(function (v,k,_){
return goog.object.forEach(v,(function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__55254 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__55255 = null;
var count__55256 = (0);
var i__55257 = (0);
while(true){
if((i__55257 < count__55256)){
var n = cljs.core._nth.call(null,chunk__55255,i__55257);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__55258 = seq__55254;
var G__55259 = chunk__55255;
var G__55260 = count__55256;
var G__55261 = (i__55257 + (1));
seq__55254 = G__55258;
chunk__55255 = G__55259;
count__55256 = G__55260;
i__55257 = G__55261;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__55254);
if(temp__5735__auto__){
var seq__55254__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55254__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__55254__$1);
var G__55262 = cljs.core.chunk_rest.call(null,seq__55254__$1);
var G__55263 = c__4609__auto__;
var G__55264 = cljs.core.count.call(null,c__4609__auto__);
var G__55265 = (0);
seq__55254 = G__55262;
chunk__55255 = G__55263;
count__55256 = G__55264;
i__55257 = G__55265;
continue;
} else {
var n = cljs.core.first.call(null,seq__55254__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__55266 = cljs.core.next.call(null,seq__55254__$1);
var G__55267 = null;
var G__55268 = (0);
var G__55269 = (0);
seq__55254 = G__55266;
chunk__55255 = G__55267;
count__55256 = G__55268;
i__55257 = G__55269;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__55270){
var vec__55271 = p__55270;
var _ = cljs.core.nth.call(null,vec__55271,(0),null);
var v = cljs.core.nth.call(null,vec__55271,(1),null);
var and__4174__auto__ = v;
if(cljs.core.truth_(and__4174__auto__)){
return v.call(null,dep);
} else {
return and__4174__auto__;
}
}),cljs.core.filter.call(null,(function (p__55274){
var vec__55275 = p__55274;
var k = cljs.core.nth.call(null,vec__55275,(0),null);
var v = cljs.core.nth.call(null,vec__55275,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});
var topo_sort_STAR_ = (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__55287_55295 = cljs.core.seq.call(null,deps);
var chunk__55288_55296 = null;
var count__55289_55297 = (0);
var i__55290_55298 = (0);
while(true){
if((i__55290_55298 < count__55289_55297)){
var dep_55299 = cljs.core._nth.call(null,chunk__55288_55296,i__55290_55298);
if(cljs.core.truth_((function (){var and__4174__auto__ = dep_55299;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_55299));
} else {
return and__4174__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_55299,(depth + (1)),state);
} else {
}


var G__55300 = seq__55287_55295;
var G__55301 = chunk__55288_55296;
var G__55302 = count__55289_55297;
var G__55303 = (i__55290_55298 + (1));
seq__55287_55295 = G__55300;
chunk__55288_55296 = G__55301;
count__55289_55297 = G__55302;
i__55290_55298 = G__55303;
continue;
} else {
var temp__5735__auto___55304 = cljs.core.seq.call(null,seq__55287_55295);
if(temp__5735__auto___55304){
var seq__55287_55305__$1 = temp__5735__auto___55304;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55287_55305__$1)){
var c__4609__auto___55306 = cljs.core.chunk_first.call(null,seq__55287_55305__$1);
var G__55307 = cljs.core.chunk_rest.call(null,seq__55287_55305__$1);
var G__55308 = c__4609__auto___55306;
var G__55309 = cljs.core.count.call(null,c__4609__auto___55306);
var G__55310 = (0);
seq__55287_55295 = G__55307;
chunk__55288_55296 = G__55308;
count__55289_55297 = G__55309;
i__55290_55298 = G__55310;
continue;
} else {
var dep_55311 = cljs.core.first.call(null,seq__55287_55305__$1);
if(cljs.core.truth_((function (){var and__4174__auto__ = dep_55311;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_55311));
} else {
return and__4174__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_55311,(depth + (1)),state);
} else {
}


var G__55312 = cljs.core.next.call(null,seq__55287_55305__$1);
var G__55313 = null;
var G__55314 = (0);
var G__55315 = (0);
seq__55287_55295 = G__55312;
chunk__55288_55296 = G__55313;
count__55289_55297 = G__55314;
i__55290_55298 = G__55315;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__55291){
var vec__55292 = p__55291;
var seq__55293 = cljs.core.seq.call(null,vec__55292);
var first__55294 = cljs.core.first.call(null,seq__55293);
var seq__55293__$1 = cljs.core.next.call(null,seq__55293);
var x = first__55294;
var xs = seq__55293__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__55278_SHARP_){
return clojure.set.difference.call(null,p1__55278_SHARP_,x);
}),xs)));
}
});
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__55316 = cljs.core.seq.call(null,provides);
var chunk__55317 = null;
var count__55318 = (0);
var i__55319 = (0);
while(true){
if((i__55319 < count__55318)){
var prov = cljs.core._nth.call(null,chunk__55317,i__55319);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__55328_55336 = cljs.core.seq.call(null,requires);
var chunk__55329_55337 = null;
var count__55330_55338 = (0);
var i__55331_55339 = (0);
while(true){
if((i__55331_55339 < count__55330_55338)){
var req_55340 = cljs.core._nth.call(null,chunk__55329_55337,i__55331_55339);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_55340,prov);


var G__55341 = seq__55328_55336;
var G__55342 = chunk__55329_55337;
var G__55343 = count__55330_55338;
var G__55344 = (i__55331_55339 + (1));
seq__55328_55336 = G__55341;
chunk__55329_55337 = G__55342;
count__55330_55338 = G__55343;
i__55331_55339 = G__55344;
continue;
} else {
var temp__5735__auto___55345 = cljs.core.seq.call(null,seq__55328_55336);
if(temp__5735__auto___55345){
var seq__55328_55346__$1 = temp__5735__auto___55345;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55328_55346__$1)){
var c__4609__auto___55347 = cljs.core.chunk_first.call(null,seq__55328_55346__$1);
var G__55348 = cljs.core.chunk_rest.call(null,seq__55328_55346__$1);
var G__55349 = c__4609__auto___55347;
var G__55350 = cljs.core.count.call(null,c__4609__auto___55347);
var G__55351 = (0);
seq__55328_55336 = G__55348;
chunk__55329_55337 = G__55349;
count__55330_55338 = G__55350;
i__55331_55339 = G__55351;
continue;
} else {
var req_55352 = cljs.core.first.call(null,seq__55328_55346__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_55352,prov);


var G__55353 = cljs.core.next.call(null,seq__55328_55346__$1);
var G__55354 = null;
var G__55355 = (0);
var G__55356 = (0);
seq__55328_55336 = G__55353;
chunk__55329_55337 = G__55354;
count__55330_55338 = G__55355;
i__55331_55339 = G__55356;
continue;
}
} else {
}
}
break;
}


var G__55357 = seq__55316;
var G__55358 = chunk__55317;
var G__55359 = count__55318;
var G__55360 = (i__55319 + (1));
seq__55316 = G__55357;
chunk__55317 = G__55358;
count__55318 = G__55359;
i__55319 = G__55360;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__55316);
if(temp__5735__auto__){
var seq__55316__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55316__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__55316__$1);
var G__55361 = cljs.core.chunk_rest.call(null,seq__55316__$1);
var G__55362 = c__4609__auto__;
var G__55363 = cljs.core.count.call(null,c__4609__auto__);
var G__55364 = (0);
seq__55316 = G__55361;
chunk__55317 = G__55362;
count__55318 = G__55363;
i__55319 = G__55364;
continue;
} else {
var prov = cljs.core.first.call(null,seq__55316__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__55332_55365 = cljs.core.seq.call(null,requires);
var chunk__55333_55366 = null;
var count__55334_55367 = (0);
var i__55335_55368 = (0);
while(true){
if((i__55335_55368 < count__55334_55367)){
var req_55369 = cljs.core._nth.call(null,chunk__55333_55366,i__55335_55368);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_55369,prov);


var G__55370 = seq__55332_55365;
var G__55371 = chunk__55333_55366;
var G__55372 = count__55334_55367;
var G__55373 = (i__55335_55368 + (1));
seq__55332_55365 = G__55370;
chunk__55333_55366 = G__55371;
count__55334_55367 = G__55372;
i__55335_55368 = G__55373;
continue;
} else {
var temp__5735__auto___55374__$1 = cljs.core.seq.call(null,seq__55332_55365);
if(temp__5735__auto___55374__$1){
var seq__55332_55375__$1 = temp__5735__auto___55374__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55332_55375__$1)){
var c__4609__auto___55376 = cljs.core.chunk_first.call(null,seq__55332_55375__$1);
var G__55377 = cljs.core.chunk_rest.call(null,seq__55332_55375__$1);
var G__55378 = c__4609__auto___55376;
var G__55379 = cljs.core.count.call(null,c__4609__auto___55376);
var G__55380 = (0);
seq__55332_55365 = G__55377;
chunk__55333_55366 = G__55378;
count__55334_55367 = G__55379;
i__55335_55368 = G__55380;
continue;
} else {
var req_55381 = cljs.core.first.call(null,seq__55332_55375__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_55381,prov);


var G__55382 = cljs.core.next.call(null,seq__55332_55375__$1);
var G__55383 = null;
var G__55384 = (0);
var G__55385 = (0);
seq__55332_55365 = G__55382;
chunk__55333_55366 = G__55383;
count__55334_55367 = G__55384;
i__55335_55368 = G__55385;
continue;
}
} else {
}
}
break;
}


var G__55386 = cljs.core.next.call(null,seq__55316__$1);
var G__55387 = null;
var G__55388 = (0);
var G__55389 = (0);
seq__55316 = G__55386;
chunk__55317 = G__55387;
count__55318 = G__55388;
i__55319 = G__55389;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
(goog.require = figwheel.client.file_reloading.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__55390_55394 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__55391_55395 = null;
var count__55392_55396 = (0);
var i__55393_55397 = (0);
while(true){
if((i__55393_55397 < count__55392_55396)){
var ns_55398 = cljs.core._nth.call(null,chunk__55391_55395,i__55393_55397);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_55398);


var G__55399 = seq__55390_55394;
var G__55400 = chunk__55391_55395;
var G__55401 = count__55392_55396;
var G__55402 = (i__55393_55397 + (1));
seq__55390_55394 = G__55399;
chunk__55391_55395 = G__55400;
count__55392_55396 = G__55401;
i__55393_55397 = G__55402;
continue;
} else {
var temp__5735__auto___55403 = cljs.core.seq.call(null,seq__55390_55394);
if(temp__5735__auto___55403){
var seq__55390_55404__$1 = temp__5735__auto___55403;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55390_55404__$1)){
var c__4609__auto___55405 = cljs.core.chunk_first.call(null,seq__55390_55404__$1);
var G__55406 = cljs.core.chunk_rest.call(null,seq__55390_55404__$1);
var G__55407 = c__4609__auto___55405;
var G__55408 = cljs.core.count.call(null,c__4609__auto___55405);
var G__55409 = (0);
seq__55390_55394 = G__55406;
chunk__55391_55395 = G__55407;
count__55392_55396 = G__55408;
i__55393_55397 = G__55409;
continue;
} else {
var ns_55410 = cljs.core.first.call(null,seq__55390_55404__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_55410);


var G__55411 = cljs.core.next.call(null,seq__55390_55404__$1);
var G__55412 = null;
var G__55413 = (0);
var G__55414 = (0);
seq__55390_55394 = G__55411;
chunk__55391_55395 = G__55412;
count__55392_55396 = G__55413;
i__55393_55397 = G__55414;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
(goog.require_figwheel_backup_ = (function (){var or__4185__auto__ = goog.require__;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.require;
}
})());

(goog.isProvided_ = (function (name){
return false;
}));

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

(goog.addDependency_figwheel_backup_ = goog.addDependency);

(goog.addDependency = (function() { 
var G__55415__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__55415 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55416__i = 0, G__55416__a = new Array(arguments.length -  0);
while (G__55416__i < G__55416__a.length) {G__55416__a[G__55416__i] = arguments[G__55416__i + 0]; ++G__55416__i;}
  args = new cljs.core.IndexedSeq(G__55416__a,0,null);
} 
return G__55415__delegate.call(this,args);};
G__55415.cljs$lang$maxFixedArity = 0;
G__55415.cljs$lang$applyTo = (function (arglist__55417){
var args = cljs.core.seq(arglist__55417);
return G__55415__delegate(args);
});
G__55415.cljs$core$IFn$_invoke$arity$variadic = G__55415__delegate;
return G__55415;
})()
);

goog.constructNamespace_("cljs.user");

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload);

return (goog.require = figwheel.client.file_reloading.figwheel_require);
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__55418_SHARP_,p2__55419_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__55418_SHARP_)),p2__55419_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__55420_SHARP_,p2__55421_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__55420_SHARP_),p2__55421_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__55422 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__55422.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__55422.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__55422;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e55423){if((e55423 instanceof Error)){
var e = e55423;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e55423;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e55424){if((e55424 instanceof Error)){
var e = e55424;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e55424;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__55425 = cljs.core._EQ_;
var expr__55426 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__55425.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__55426))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__55425.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__55426))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__55425.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__55426))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__55428,callback){
var map__55429 = p__55428;
var map__55429__$1 = (((((!((map__55429 == null))))?(((((map__55429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55429):map__55429);
var file_msg = map__55429__$1;
var request_url = cljs.core.get.call(null,map__55429__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4185__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__29223__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29224__auto__ = (function (){var switch__29128__auto__ = (function (state_55467){
var state_val_55468 = (state_55467[(1)]);
if((state_val_55468 === (7))){
var inst_55463 = (state_55467[(2)]);
var state_55467__$1 = state_55467;
var statearr_55469_55495 = state_55467__$1;
(statearr_55469_55495[(2)] = inst_55463);

(statearr_55469_55495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55468 === (1))){
var state_55467__$1 = state_55467;
var statearr_55470_55496 = state_55467__$1;
(statearr_55470_55496[(2)] = null);

(statearr_55470_55496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55468 === (4))){
var inst_55433 = (state_55467[(7)]);
var inst_55433__$1 = (state_55467[(2)]);
var state_55467__$1 = (function (){var statearr_55471 = state_55467;
(statearr_55471[(7)] = inst_55433__$1);

return statearr_55471;
})();
if(cljs.core.truth_(inst_55433__$1)){
var statearr_55472_55497 = state_55467__$1;
(statearr_55472_55497[(1)] = (5));

} else {
var statearr_55473_55498 = state_55467__$1;
(statearr_55473_55498[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55468 === (15))){
var inst_55446 = (state_55467[(8)]);
var inst_55448 = (state_55467[(9)]);
var inst_55450 = inst_55448.call(null,inst_55446);
var state_55467__$1 = state_55467;
var statearr_55474_55499 = state_55467__$1;
(statearr_55474_55499[(2)] = inst_55450);

(statearr_55474_55499[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55468 === (13))){
var inst_55457 = (state_55467[(2)]);
var state_55467__$1 = state_55467;
var statearr_55475_55500 = state_55467__$1;
(statearr_55475_55500[(2)] = inst_55457);

(statearr_55475_55500[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55468 === (6))){
var state_55467__$1 = state_55467;
var statearr_55476_55501 = state_55467__$1;
(statearr_55476_55501[(2)] = null);

(statearr_55476_55501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55468 === (17))){
var inst_55454 = (state_55467[(2)]);
var state_55467__$1 = state_55467;
var statearr_55477_55502 = state_55467__$1;
(statearr_55477_55502[(2)] = inst_55454);

(statearr_55477_55502[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55468 === (3))){
var inst_55465 = (state_55467[(2)]);
var state_55467__$1 = state_55467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55467__$1,inst_55465);
} else {
if((state_val_55468 === (12))){
var state_55467__$1 = state_55467;
var statearr_55478_55503 = state_55467__$1;
(statearr_55478_55503[(2)] = null);

(statearr_55478_55503[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55468 === (2))){
var state_55467__$1 = state_55467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55467__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_55468 === (11))){
var inst_55438 = (state_55467[(10)]);
var inst_55444 = figwheel.client.file_reloading.blocking_load.call(null,inst_55438);
var state_55467__$1 = state_55467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55467__$1,(14),inst_55444);
} else {
if((state_val_55468 === (9))){
var inst_55438 = (state_55467[(10)]);
var state_55467__$1 = state_55467;
if(cljs.core.truth_(inst_55438)){
var statearr_55479_55504 = state_55467__$1;
(statearr_55479_55504[(1)] = (11));

} else {
var statearr_55480_55505 = state_55467__$1;
(statearr_55480_55505[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55468 === (5))){
var inst_55433 = (state_55467[(7)]);
var inst_55439 = (state_55467[(11)]);
var inst_55438 = cljs.core.nth.call(null,inst_55433,(0),null);
var inst_55439__$1 = cljs.core.nth.call(null,inst_55433,(1),null);
var state_55467__$1 = (function (){var statearr_55481 = state_55467;
(statearr_55481[(11)] = inst_55439__$1);

(statearr_55481[(10)] = inst_55438);

return statearr_55481;
})();
if(cljs.core.truth_(inst_55439__$1)){
var statearr_55482_55506 = state_55467__$1;
(statearr_55482_55506[(1)] = (8));

} else {
var statearr_55483_55507 = state_55467__$1;
(statearr_55483_55507[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55468 === (14))){
var inst_55448 = (state_55467[(9)]);
var inst_55438 = (state_55467[(10)]);
var inst_55446 = (state_55467[(2)]);
var inst_55447 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_55448__$1 = cljs.core.get.call(null,inst_55447,inst_55438);
var state_55467__$1 = (function (){var statearr_55484 = state_55467;
(statearr_55484[(8)] = inst_55446);

(statearr_55484[(9)] = inst_55448__$1);

return statearr_55484;
})();
if(cljs.core.truth_(inst_55448__$1)){
var statearr_55485_55508 = state_55467__$1;
(statearr_55485_55508[(1)] = (15));

} else {
var statearr_55486_55509 = state_55467__$1;
(statearr_55486_55509[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55468 === (16))){
var inst_55446 = (state_55467[(8)]);
var inst_55452 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_55446);
var state_55467__$1 = state_55467;
var statearr_55487_55510 = state_55467__$1;
(statearr_55487_55510[(2)] = inst_55452);

(statearr_55487_55510[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55468 === (10))){
var inst_55459 = (state_55467[(2)]);
var state_55467__$1 = (function (){var statearr_55488 = state_55467;
(statearr_55488[(12)] = inst_55459);

return statearr_55488;
})();
var statearr_55489_55511 = state_55467__$1;
(statearr_55489_55511[(2)] = null);

(statearr_55489_55511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55468 === (8))){
var inst_55439 = (state_55467[(11)]);
var inst_55441 = eval(inst_55439);
var state_55467__$1 = state_55467;
var statearr_55490_55512 = state_55467__$1;
(statearr_55490_55512[(2)] = inst_55441);

(statearr_55490_55512[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__29129__auto__ = null;
var figwheel$client$file_reloading$state_machine__29129__auto____0 = (function (){
var statearr_55491 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55491[(0)] = figwheel$client$file_reloading$state_machine__29129__auto__);

(statearr_55491[(1)] = (1));

return statearr_55491;
});
var figwheel$client$file_reloading$state_machine__29129__auto____1 = (function (state_55467){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_55467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e55492){if((e55492 instanceof Object)){
var ex__29132__auto__ = e55492;
var statearr_55493_55513 = state_55467;
(statearr_55493_55513[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55514 = state_55467;
state_55467 = G__55514;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29129__auto__ = function(state_55467){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29129__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29129__auto____1.call(this,state_55467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29129__auto____0;
figwheel$client$file_reloading$state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29129__auto____1;
return figwheel$client$file_reloading$state_machine__29129__auto__;
})()
})();
var state__29225__auto__ = (function (){var statearr_55494 = f__29224__auto__.call(null);
(statearr_55494[(6)] = c__29223__auto__);

return statearr_55494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29225__auto__);
}));

return c__29223__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__55516 = arguments.length;
switch (G__55516) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2);

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__55518,callback){
var map__55519 = p__55518;
var map__55519__$1 = (((((!((map__55519 == null))))?(((((map__55519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55519):map__55519);
var file_msg = map__55519__$1;
var namespace = cljs.core.get.call(null,map__55519__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__55521){
var map__55522 = p__55521;
var map__55522__$1 = (((((!((map__55522 == null))))?(((((map__55522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55522):map__55522);
var file_msg = map__55522__$1;
var namespace = cljs.core.get.call(null,map__55522__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__55524){
var map__55525 = p__55524;
var map__55525__$1 = (((((!((map__55525 == null))))?(((((map__55525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55525):map__55525);
var file_msg = map__55525__$1;
var namespace = cljs.core.get.call(null,map__55525__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if(cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg))){
var or__4185__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
var or__4185__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4185__auto____$2)){
return or__4185__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return false;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__55527,callback){
var map__55528 = p__55527;
var map__55528__$1 = (((((!((map__55528 == null))))?(((((map__55528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55528):map__55528);
var file_msg = map__55528__$1;
var request_url = cljs.core.get.call(null,map__55528__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__55528__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,(function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__29223__auto___55578 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29224__auto__ = (function (){var switch__29128__auto__ = (function (state_55563){
var state_val_55564 = (state_55563[(1)]);
if((state_val_55564 === (1))){
var inst_55537 = cljs.core.seq.call(null,files);
var inst_55538 = cljs.core.first.call(null,inst_55537);
var inst_55539 = cljs.core.next.call(null,inst_55537);
var inst_55540 = files;
var state_55563__$1 = (function (){var statearr_55565 = state_55563;
(statearr_55565[(7)] = inst_55538);

(statearr_55565[(8)] = inst_55540);

(statearr_55565[(9)] = inst_55539);

return statearr_55565;
})();
var statearr_55566_55579 = state_55563__$1;
(statearr_55566_55579[(2)] = null);

(statearr_55566_55579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55564 === (2))){
var inst_55546 = (state_55563[(10)]);
var inst_55540 = (state_55563[(8)]);
var inst_55545 = cljs.core.seq.call(null,inst_55540);
var inst_55546__$1 = cljs.core.first.call(null,inst_55545);
var inst_55547 = cljs.core.next.call(null,inst_55545);
var inst_55548 = (inst_55546__$1 == null);
var inst_55549 = cljs.core.not.call(null,inst_55548);
var state_55563__$1 = (function (){var statearr_55567 = state_55563;
(statearr_55567[(10)] = inst_55546__$1);

(statearr_55567[(11)] = inst_55547);

return statearr_55567;
})();
if(inst_55549){
var statearr_55568_55580 = state_55563__$1;
(statearr_55568_55580[(1)] = (4));

} else {
var statearr_55569_55581 = state_55563__$1;
(statearr_55569_55581[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55564 === (3))){
var inst_55561 = (state_55563[(2)]);
var state_55563__$1 = state_55563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55563__$1,inst_55561);
} else {
if((state_val_55564 === (4))){
var inst_55546 = (state_55563[(10)]);
var inst_55551 = figwheel.client.file_reloading.reload_js_file.call(null,inst_55546);
var state_55563__$1 = state_55563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55563__$1,(7),inst_55551);
} else {
if((state_val_55564 === (5))){
var inst_55557 = cljs.core.async.close_BANG_.call(null,out);
var state_55563__$1 = state_55563;
var statearr_55570_55582 = state_55563__$1;
(statearr_55570_55582[(2)] = inst_55557);

(statearr_55570_55582[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55564 === (6))){
var inst_55559 = (state_55563[(2)]);
var state_55563__$1 = state_55563;
var statearr_55571_55583 = state_55563__$1;
(statearr_55571_55583[(2)] = inst_55559);

(statearr_55571_55583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55564 === (7))){
var inst_55547 = (state_55563[(11)]);
var inst_55553 = (state_55563[(2)]);
var inst_55554 = cljs.core.async.put_BANG_.call(null,out,inst_55553);
var inst_55540 = inst_55547;
var state_55563__$1 = (function (){var statearr_55572 = state_55563;
(statearr_55572[(8)] = inst_55540);

(statearr_55572[(12)] = inst_55554);

return statearr_55572;
})();
var statearr_55573_55584 = state_55563__$1;
(statearr_55573_55584[(2)] = null);

(statearr_55573_55584[(1)] = (2));


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
});
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29129__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29129__auto____0 = (function (){
var statearr_55574 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55574[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29129__auto__);

(statearr_55574[(1)] = (1));

return statearr_55574;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29129__auto____1 = (function (state_55563){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_55563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e55575){if((e55575 instanceof Object)){
var ex__29132__auto__ = e55575;
var statearr_55576_55585 = state_55563;
(statearr_55576_55585[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55575;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55586 = state_55563;
state_55563 = G__55586;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29129__auto__ = function(state_55563){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29129__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29129__auto____1.call(this,state_55563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29129__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29129__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29129__auto__;
})()
})();
var state__29225__auto__ = (function (){var statearr_55577 = f__29224__auto__.call(null);
(statearr_55577[(6)] = c__29223__auto___55578);

return statearr_55577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29225__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__55587,opts){
var map__55588 = p__55587;
var map__55588__$1 = (((((!((map__55588 == null))))?(((((map__55588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55588):map__55588);
var eval_body = cljs.core.get.call(null,map__55588__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__55588__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4174__auto__ = eval_body;
if(cljs.core.truth_(and__4174__auto__)){
return typeof eval_body === 'string';
} else {
return and__4174__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e55590){var e = e55590;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__55591_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__55591_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5733__auto__)){
var file_msg = temp__5733__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
}),deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__55592){
var vec__55593 = p__55592;
var k = cljs.core.nth.call(null,vec__55593,(0),null);
var v = cljs.core.nth.call(null,vec__55593,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__55596){
var vec__55597 = p__55596;
var k = cljs.core.nth.call(null,vec__55597,(0),null);
var v = cljs.core.nth.call(null,vec__55597,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__55603,p__55604){
var map__55605 = p__55603;
var map__55605__$1 = (((((!((map__55605 == null))))?(((((map__55605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55605):map__55605);
var opts = map__55605__$1;
var before_jsload = cljs.core.get.call(null,map__55605__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__55605__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__55605__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__55606 = p__55604;
var map__55606__$1 = (((((!((map__55606 == null))))?(((((map__55606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55606):map__55606);
var msg = map__55606__$1;
var files = cljs.core.get.call(null,map__55606__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__55606__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__55606__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29223__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29224__auto__ = (function (){var switch__29128__auto__ = (function (state_55760){
var state_val_55761 = (state_55760[(1)]);
if((state_val_55761 === (7))){
var inst_55620 = (state_55760[(7)]);
var inst_55623 = (state_55760[(8)]);
var inst_55621 = (state_55760[(9)]);
var inst_55622 = (state_55760[(10)]);
var inst_55628 = cljs.core._nth.call(null,inst_55621,inst_55623);
var inst_55629 = figwheel.client.file_reloading.eval_body.call(null,inst_55628,opts);
var inst_55630 = (inst_55623 + (1));
var tmp55762 = inst_55620;
var tmp55763 = inst_55621;
var tmp55764 = inst_55622;
var inst_55620__$1 = tmp55762;
var inst_55621__$1 = tmp55763;
var inst_55622__$1 = tmp55764;
var inst_55623__$1 = inst_55630;
var state_55760__$1 = (function (){var statearr_55765 = state_55760;
(statearr_55765[(7)] = inst_55620__$1);

(statearr_55765[(8)] = inst_55623__$1);

(statearr_55765[(9)] = inst_55621__$1);

(statearr_55765[(10)] = inst_55622__$1);

(statearr_55765[(11)] = inst_55629);

return statearr_55765;
})();
var statearr_55766_55849 = state_55760__$1;
(statearr_55766_55849[(2)] = null);

(statearr_55766_55849[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55761 === (20))){
var inst_55663 = (state_55760[(12)]);
var inst_55671 = figwheel.client.file_reloading.sort_files.call(null,inst_55663);
var state_55760__$1 = state_55760;
var statearr_55767_55850 = state_55760__$1;
(statearr_55767_55850[(2)] = inst_55671);

(statearr_55767_55850[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55761 === (27))){
var state_55760__$1 = state_55760;
var statearr_55768_55851 = state_55760__$1;
(statearr_55768_55851[(2)] = null);

(statearr_55768_55851[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55761 === (1))){
var inst_55612 = (state_55760[(13)]);
var inst_55609 = before_jsload.call(null,files);
var inst_55610 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_55611 = (function (){return (function (p1__55600_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__55600_SHARP_);
});
})();
var inst_55612__$1 = cljs.core.filter.call(null,inst_55611,files);
var inst_55613 = cljs.core.not_empty.call(null,inst_55612__$1);
var state_55760__$1 = (function (){var statearr_55769 = state_55760;
(statearr_55769[(14)] = inst_55609);

(statearr_55769[(13)] = inst_55612__$1);

(statearr_55769[(15)] = inst_55610);

return statearr_55769;
})();
if(cljs.core.truth_(inst_55613)){
var statearr_55770_55852 = state_55760__$1;
(statearr_55770_55852[(1)] = (2));

} else {
var statearr_55771_55853 = state_55760__$1;
(statearr_55771_55853[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55761 === (24))){
var state_55760__$1 = state_55760;
var statearr_55772_55854 = state_55760__$1;
(statearr_55772_55854[(2)] = null);

(statearr_55772_55854[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55761 === (39))){
var inst_55713 = (state_55760[(16)]);
var state_55760__$1 = state_55760;
var statearr_55773_55855 = state_55760__$1;
(statearr_55773_55855[(2)] = inst_55713);

(statearr_55773_55855[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55761 === (46))){
var inst_55755 = (state_55760[(2)]);
var state_55760__$1 = state_55760;
var statearr_55774_55856 = state_55760__$1;
(statearr_55774_55856[(2)] = inst_55755);

(statearr_55774_55856[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55761 === (4))){
var inst_55657 = (state_55760[(2)]);
var inst_55658 = cljs.core.List.EMPTY;
var inst_55659 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_55658);
var inst_55660 = (function (){return (function (p1__55601_SHARP_){
var and__4174__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__55601_SHARP_);
if(cljs.core.truth_(and__4174__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__55601_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__55601_SHARP_))));
} else {
return and__4174__auto__;
}
});
})();
var inst_55661 = cljs.core.filter.call(null,inst_55660,files);
var inst_55662 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_55663 = cljs.core.concat.call(null,inst_55661,inst_55662);
var state_55760__$1 = (function (){var statearr_55775 = state_55760;
(statearr_55775[(17)] = inst_55657);

(statearr_55775[(18)] = inst_55659);

(statearr_55775[(12)] = inst_55663);

return statearr_55775;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_55776_55857 = state_55760__$1;
(statearr_55776_55857[(1)] = (16));

} else {
var statearr_55777_55858 = state_55760__$1;
(statearr_55777_55858[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55761 === (15))){
var inst_55647 = (state_55760[(2)]);
var state_55760__$1 = state_55760;
var statearr_55778_55859 = state_55760__$1;
(statearr_55778_55859[(2)] = inst_55647);

(statearr_55778_55859[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55761 === (21))){
var inst_55673 = (state_55760[(19)]);
var inst_55673__$1 = (state_55760[(2)]);
var inst_55674 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_55673__$1);
var state_55760__$1 = (function (){var statearr_55779 = state_55760;
(statearr_55779[(19)] = inst_55673__$1);

return statearr_55779;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55760__$1,(22),inst_55674);
} else {
if((state_val_55761 === (31))){
var inst_55758 = (state_55760[(2)]);
var state_55760__$1 = state_55760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55760__$1,inst_55758);
} else {
if((state_val_55761 === (32))){
var inst_55713 = (state_55760[(16)]);
var inst_55718 = inst_55713.cljs$lang$protocol_mask$partition0$;
var inst_55719 = (inst_55718 & (64));
var inst_55720 = inst_55713.cljs$core$ISeq$;
var inst_55721 = (cljs.core.PROTOCOL_SENTINEL === inst_55720);
var inst_55722 = ((inst_55719) || (inst_55721));
var state_55760__$1 = state_55760;
if(cljs.core.truth_(inst_55722)){
var statearr_55780_55860 = state_55760__$1;
(statearr_55780_55860[(1)] = (35));

} else {
var statearr_55781_55861 = state_55760__$1;
(statearr_55781_55861[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55761 === (40))){
var inst_55735 = (state_55760[(20)]);
var inst_55734 = (state_55760[(2)]);
var inst_55735__$1 = cljs.core.get.call(null,inst_55734,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_55736 = cljs.core.get.call(null,inst_55734,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_55737 = cljs.core.not_empty.call(null,inst_55735__$1);
var state_55760__$1 = (function (){var statearr_55782 = state_55760;
(statearr_55782[(20)] = inst_55735__$1);

(statearr_55782[(21)] = inst_55736);

return statearr_55782;
})();
if(cljs.core.truth_(inst_55737)){
var statearr_55783_55862 = state_55760__$1;
(statearr_55783_55862[(1)] = (41));

} else {
var statearr_55784_55863 = state_55760__$1;
(statearr_55784_55863[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55761 === (33))){
var state_55760__$1 = state_55760;
var statearr_55785_55864 = state_55760__$1;
(statearr_55785_55864[(2)] = false);

(statearr_55785_55864[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55761 === (13))){
var inst_55633 = (state_55760[(22)]);
var inst_55637 = cljs.core.chunk_first.call(null,inst_55633);
var inst_55638 = cljs.core.chunk_rest.call(null,inst_55633);
var inst_55639 = cljs.core.count.call(null,inst_55637);
var inst_55620 = inst_55638;
var inst_55621 = inst_55637;
var inst_55622 = inst_55639;
var inst_55623 = (0);
var state_55760__$1 = (function (){var statearr_55786 = state_55760;
(statearr_55786[(7)] = inst_55620);

(statearr_55786[(8)] = inst_55623);

(statearr_55786[(9)] = inst_55621);

(statearr_55786[(10)] = inst_55622);

return statearr_55786;
})();
var statearr_55787_55865 = state_55760__$1;
(statearr_55787_55865[(2)] = null);

(statearr_55787_55865[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55761 === (22))){
var inst_55676 = (state_55760[(23)]);
var inst_55677 = (state_55760[(24)]);
var inst_55673 = (state_55760[(19)]);
var inst_55681 = (state_55760[(25)]);
var inst_55676__$1 = (state_55760[(2)]);
var inst_55677__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_55676__$1);
var inst_55678 = (function (){var all_files = inst_55673;
var res_SINGLEQUOTE_ = inst_55676__$1;
var res = inst_55677__$1;
return (function (p1__55602_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__55602_SHARP_));
});
})();
var inst_55679 = cljs.core.filter.call(null,inst_55678,inst_55676__$1);
var inst_55680 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_55681__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_55680);
var inst_55682 = cljs.core.not_empty.call(null,inst_55681__$1);
var state_55760__$1 = (function (){var statearr_55788 = state_55760;
(statearr_55788[(23)] = inst_55676__$1);

(statearr_55788[(24)] = inst_55677__$1);

(statearr_55788[(25)] = inst_55681__$1);

(statearr_55788[(26)] = inst_55679);

return statearr_55788;
})();
if(cljs.core.truth_(inst_55682)){
var statearr_55789_55866 = state_55760__$1;
(statearr_55789_55866[(1)] = (23));

} else {
var statearr_55790_55867 = state_55760__$1;
(statearr_55790_55867[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55761 === (36))){
var state_55760__$1 = state_55760;
var statearr_55791_55868 = state_55760__$1;
(statearr_55791_55868[(2)] = false);

(statearr_55791_55868[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55761 === (41))){
var inst_55735 = (state_55760[(20)]);
var inst_55739 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_55740 = cljs.core.map.call(null,inst_55739,inst_55735);
var inst_55741 = cljs.core.pr_str.call(null,inst_55740);
var inst_55742 = ["figwheel-no-load meta-data: ",inst_55741].join('');
var inst_55743 = figwheel.client.utils.log.call(null,inst_55742);
var state_55760__$1 = state_55760;
var statearr_55792_55869 = state_55760__$1;
(statearr_55792_55869[(2)] = inst_55743);

(statearr_55792_55869[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55761 === (43))){
var inst_55736 = (state_55760[(21)]);
var inst_55746 = (state_55760[(2)]);
var inst_55747 = cljs.core.not_empty.call(null,inst_55736);
var state_55760__$1 = (function (){var statearr_55793 = state_55760;
(statearr_55793[(27)] = inst_55746);

return statearr_55793;
})();
if(cljs.core.truth_(inst_55747)){
var statearr_55794_55870 = state_55760__$1;
(statearr_55794_55870[(1)] = (44));

} else {
var statearr_55795_55871 = state_55760__$1;
(statearr_55795_55871[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55761 === (29))){
var inst_55676 = (state_55760[(23)]);
var inst_55713 = (state_55760[(16)]);
var inst_55677 = (state_55760[(24)]);
var inst_55673 = (state_55760[(19)]);
var inst_55681 = (state_55760[(25)]);
var inst_55679 = (state_55760[(26)]);
var inst_55709 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_55712 = (function (){var all_files = inst_55673;
var res_SINGLEQUOTE_ = inst_55676;
var res = inst_55677;
var files_not_loaded = inst_55679;
var dependencies_that_loaded = inst_55681;
return (function (p__55711){
var map__55796 = p__55711;
var map__55796__$1 = (((((!((map__55796 == null))))?(((((map__55796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55796):map__55796);
var namespace = cljs.core.get.call(null,map__55796__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
})();
var inst_55713__$1 = cljs.core.group_by.call(null,inst_55712,inst_55679);
var inst_55715 = (inst_55713__$1 == null);
var inst_55716 = cljs.core.not.call(null,inst_55715);
var state_55760__$1 = (function (){var statearr_55798 = state_55760;
(statearr_55798[(16)] = inst_55713__$1);

(statearr_55798[(28)] = inst_55709);

return statearr_55798;
})();
if(inst_55716){
var statearr_55799_55872 = state_55760__$1;
(statearr_55799_55872[(1)] = (32));

} else {
var statearr_55800_55873 = state_55760__$1;
(statearr_55800_55873[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55761 === (44))){
var inst_55736 = (state_55760[(21)]);
var inst_55749 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_55736);
var inst_55750 = cljs.core.pr_str.call(null,inst_55749);
var inst_55751 = ["not required: ",inst_55750].join('');
var inst_55752 = figwheel.client.utils.log.call(null,inst_55751);
var state_55760__$1 = state_55760;
var statearr_55801_55874 = state_55760__$1;
(statearr_55801_55874[(2)] = inst_55752);

(statearr_55801_55874[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55761 === (6))){
var inst_55654 = (state_55760[(2)]);
var state_55760__$1 = state_55760;
var statearr_55802_55875 = state_55760__$1;
(statearr_55802_55875[(2)] = inst_55654);

(statearr_55802_55875[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55761 === (28))){
var inst_55679 = (state_55760[(26)]);
var inst_55706 = (state_55760[(2)]);
var inst_55707 = cljs.core.not_empty.call(null,inst_55679);
var state_55760__$1 = (function (){var statearr_55803 = state_55760;
(statearr_55803[(29)] = inst_55706);

return statearr_55803;
})();
if(cljs.core.truth_(inst_55707)){
var statearr_55804_55876 = state_55760__$1;
(statearr_55804_55876[(1)] = (29));

} else {
var statearr_55805_55877 = state_55760__$1;
(statearr_55805_55877[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55761 === (25))){
var inst_55677 = (state_55760[(24)]);
var inst_55693 = (state_55760[(2)]);
var inst_55694 = cljs.core.not_empty.call(null,inst_55677);
var state_55760__$1 = (function (){var statearr_55806 = state_55760;
(statearr_55806[(30)] = inst_55693);

return statearr_55806;
})();
if(cljs.core.truth_(inst_55694)){
var statearr_55807_55878 = state_55760__$1;
(statearr_55807_55878[(1)] = (26));

} else {
var statearr_55808_55879 = state_55760__$1;
(statearr_55808_55879[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55761 === (34))){
var inst_55729 = (state_55760[(2)]);
var state_55760__$1 = state_55760;
if(cljs.core.truth_(inst_55729)){
var statearr_55809_55880 = state_55760__$1;
(statearr_55809_55880[(1)] = (38));

} else {
var statearr_55810_55881 = state_55760__$1;
(statearr_55810_55881[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55761 === (17))){
var state_55760__$1 = state_55760;
var statearr_55811_55882 = state_55760__$1;
(statearr_55811_55882[(2)] = recompile_dependents);

(statearr_55811_55882[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55761 === (3))){
var state_55760__$1 = state_55760;
var statearr_55812_55883 = state_55760__$1;
(statearr_55812_55883[(2)] = null);

(statearr_55812_55883[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55761 === (12))){
var inst_55650 = (state_55760[(2)]);
var state_55760__$1 = state_55760;
var statearr_55813_55884 = state_55760__$1;
(statearr_55813_55884[(2)] = inst_55650);

(statearr_55813_55884[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55761 === (2))){
var inst_55612 = (state_55760[(13)]);
var inst_55619 = cljs.core.seq.call(null,inst_55612);
var inst_55620 = inst_55619;
var inst_55621 = null;
var inst_55622 = (0);
var inst_55623 = (0);
var state_55760__$1 = (function (){var statearr_55814 = state_55760;
(statearr_55814[(7)] = inst_55620);

(statearr_55814[(8)] = inst_55623);

(statearr_55814[(9)] = inst_55621);

(statearr_55814[(10)] = inst_55622);

return statearr_55814;
})();
var statearr_55815_55885 = state_55760__$1;
(statearr_55815_55885[(2)] = null);

(statearr_55815_55885[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55761 === (23))){
var inst_55676 = (state_55760[(23)]);
var inst_55677 = (state_55760[(24)]);
var inst_55673 = (state_55760[(19)]);
var inst_55681 = (state_55760[(25)]);
var inst_55679 = (state_55760[(26)]);
var inst_55684 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_55686 = (function (){var all_files = inst_55673;
var res_SINGLEQUOTE_ = inst_55676;
var res = inst_55677;
var files_not_loaded = inst_55679;
var dependencies_that_loaded = inst_55681;
return (function (p__55685){
var map__55816 = p__55685;
var map__55816__$1 = (((((!((map__55816 == null))))?(((((map__55816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55816):map__55816);
var request_url = cljs.core.get.call(null,map__55816__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_55687 = cljs.core.reverse.call(null,inst_55681);
var inst_55688 = cljs.core.map.call(null,inst_55686,inst_55687);
var inst_55689 = cljs.core.pr_str.call(null,inst_55688);
var inst_55690 = figwheel.client.utils.log.call(null,inst_55689);
var state_55760__$1 = (function (){var statearr_55818 = state_55760;
(statearr_55818[(31)] = inst_55684);

return statearr_55818;
})();
var statearr_55819_55886 = state_55760__$1;
(statearr_55819_55886[(2)] = inst_55690);

(statearr_55819_55886[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55761 === (35))){
var state_55760__$1 = state_55760;
var statearr_55820_55887 = state_55760__$1;
(statearr_55820_55887[(2)] = true);

(statearr_55820_55887[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55761 === (19))){
var inst_55663 = (state_55760[(12)]);
var inst_55669 = figwheel.client.file_reloading.expand_files.call(null,inst_55663);
var state_55760__$1 = state_55760;
var statearr_55821_55888 = state_55760__$1;
(statearr_55821_55888[(2)] = inst_55669);

(statearr_55821_55888[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55761 === (11))){
var state_55760__$1 = state_55760;
var statearr_55822_55889 = state_55760__$1;
(statearr_55822_55889[(2)] = null);

(statearr_55822_55889[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55761 === (9))){
var inst_55652 = (state_55760[(2)]);
var state_55760__$1 = state_55760;
var statearr_55823_55890 = state_55760__$1;
(statearr_55823_55890[(2)] = inst_55652);

(statearr_55823_55890[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55761 === (5))){
var inst_55623 = (state_55760[(8)]);
var inst_55622 = (state_55760[(10)]);
var inst_55625 = (inst_55623 < inst_55622);
var inst_55626 = inst_55625;
var state_55760__$1 = state_55760;
if(cljs.core.truth_(inst_55626)){
var statearr_55824_55891 = state_55760__$1;
(statearr_55824_55891[(1)] = (7));

} else {
var statearr_55825_55892 = state_55760__$1;
(statearr_55825_55892[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55761 === (14))){
var inst_55633 = (state_55760[(22)]);
var inst_55642 = cljs.core.first.call(null,inst_55633);
var inst_55643 = figwheel.client.file_reloading.eval_body.call(null,inst_55642,opts);
var inst_55644 = cljs.core.next.call(null,inst_55633);
var inst_55620 = inst_55644;
var inst_55621 = null;
var inst_55622 = (0);
var inst_55623 = (0);
var state_55760__$1 = (function (){var statearr_55826 = state_55760;
(statearr_55826[(7)] = inst_55620);

(statearr_55826[(8)] = inst_55623);

(statearr_55826[(9)] = inst_55621);

(statearr_55826[(10)] = inst_55622);

(statearr_55826[(32)] = inst_55643);

return statearr_55826;
})();
var statearr_55827_55893 = state_55760__$1;
(statearr_55827_55893[(2)] = null);

(statearr_55827_55893[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55761 === (45))){
var state_55760__$1 = state_55760;
var statearr_55828_55894 = state_55760__$1;
(statearr_55828_55894[(2)] = null);

(statearr_55828_55894[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55761 === (26))){
var inst_55676 = (state_55760[(23)]);
var inst_55677 = (state_55760[(24)]);
var inst_55673 = (state_55760[(19)]);
var inst_55681 = (state_55760[(25)]);
var inst_55679 = (state_55760[(26)]);
var inst_55696 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_55698 = (function (){var all_files = inst_55673;
var res_SINGLEQUOTE_ = inst_55676;
var res = inst_55677;
var files_not_loaded = inst_55679;
var dependencies_that_loaded = inst_55681;
return (function (p__55697){
var map__55829 = p__55697;
var map__55829__$1 = (((((!((map__55829 == null))))?(((((map__55829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55829):map__55829);
var namespace = cljs.core.get.call(null,map__55829__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__55829__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_55699 = cljs.core.map.call(null,inst_55698,inst_55677);
var inst_55700 = cljs.core.pr_str.call(null,inst_55699);
var inst_55701 = figwheel.client.utils.log.call(null,inst_55700);
var inst_55702 = (function (){var all_files = inst_55673;
var res_SINGLEQUOTE_ = inst_55676;
var res = inst_55677;
var files_not_loaded = inst_55679;
var dependencies_that_loaded = inst_55681;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_55703 = setTimeout(inst_55702,(10));
var state_55760__$1 = (function (){var statearr_55831 = state_55760;
(statearr_55831[(33)] = inst_55701);

(statearr_55831[(34)] = inst_55696);

return statearr_55831;
})();
var statearr_55832_55895 = state_55760__$1;
(statearr_55832_55895[(2)] = inst_55703);

(statearr_55832_55895[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55761 === (16))){
var state_55760__$1 = state_55760;
var statearr_55833_55896 = state_55760__$1;
(statearr_55833_55896[(2)] = reload_dependents);

(statearr_55833_55896[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55761 === (38))){
var inst_55713 = (state_55760[(16)]);
var inst_55731 = cljs.core.apply.call(null,cljs.core.hash_map,inst_55713);
var state_55760__$1 = state_55760;
var statearr_55834_55897 = state_55760__$1;
(statearr_55834_55897[(2)] = inst_55731);

(statearr_55834_55897[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55761 === (30))){
var state_55760__$1 = state_55760;
var statearr_55835_55898 = state_55760__$1;
(statearr_55835_55898[(2)] = null);

(statearr_55835_55898[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55761 === (10))){
var inst_55633 = (state_55760[(22)]);
var inst_55635 = cljs.core.chunked_seq_QMARK_.call(null,inst_55633);
var state_55760__$1 = state_55760;
if(inst_55635){
var statearr_55836_55899 = state_55760__$1;
(statearr_55836_55899[(1)] = (13));

} else {
var statearr_55837_55900 = state_55760__$1;
(statearr_55837_55900[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55761 === (18))){
var inst_55667 = (state_55760[(2)]);
var state_55760__$1 = state_55760;
if(cljs.core.truth_(inst_55667)){
var statearr_55838_55901 = state_55760__$1;
(statearr_55838_55901[(1)] = (19));

} else {
var statearr_55839_55902 = state_55760__$1;
(statearr_55839_55902[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55761 === (42))){
var state_55760__$1 = state_55760;
var statearr_55840_55903 = state_55760__$1;
(statearr_55840_55903[(2)] = null);

(statearr_55840_55903[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55761 === (37))){
var inst_55726 = (state_55760[(2)]);
var state_55760__$1 = state_55760;
var statearr_55841_55904 = state_55760__$1;
(statearr_55841_55904[(2)] = inst_55726);

(statearr_55841_55904[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55761 === (8))){
var inst_55620 = (state_55760[(7)]);
var inst_55633 = (state_55760[(22)]);
var inst_55633__$1 = cljs.core.seq.call(null,inst_55620);
var state_55760__$1 = (function (){var statearr_55842 = state_55760;
(statearr_55842[(22)] = inst_55633__$1);

return statearr_55842;
})();
if(inst_55633__$1){
var statearr_55843_55905 = state_55760__$1;
(statearr_55843_55905[(1)] = (10));

} else {
var statearr_55844_55906 = state_55760__$1;
(statearr_55844_55906[(1)] = (11));

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
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29129__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29129__auto____0 = (function (){
var statearr_55845 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55845[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29129__auto__);

(statearr_55845[(1)] = (1));

return statearr_55845;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29129__auto____1 = (function (state_55760){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_55760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e55846){if((e55846 instanceof Object)){
var ex__29132__auto__ = e55846;
var statearr_55847_55907 = state_55760;
(statearr_55847_55907[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55908 = state_55760;
state_55760 = G__55908;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29129__auto__ = function(state_55760){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29129__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29129__auto____1.call(this,state_55760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29129__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29129__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29129__auto__;
})()
})();
var state__29225__auto__ = (function (){var statearr_55848 = f__29224__auto__.call(null);
(statearr_55848[(6)] = c__29223__auto__);

return statearr_55848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29225__auto__);
}));

return c__29223__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__55911,link){
var map__55912 = p__55911;
var map__55912__$1 = (((((!((map__55912 == null))))?(((((map__55912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55912):map__55912);
var file = cljs.core.get.call(null,map__55912__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__55909_SHARP_,p2__55910_SHARP_){
if(cljs.core._EQ_.call(null,p1__55909_SHARP_,p2__55910_SHARP_)){
return p1__55909_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.client.file_reloading.truncate_url.call(null,link_href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__55915){
var map__55916 = p__55915;
var map__55916__$1 = (((((!((map__55916 == null))))?(((((map__55916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55916):map__55916);
var match_length = cljs.core.get.call(null,map__55916__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__55916__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__55914_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__55914_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
(link.rel = "stylesheet");

(link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__55918_SHARP_,p2__55919_SHARP_){
return cljs.core.assoc.call(null,p1__55918_SHARP_,cljs.core.get.call(null,p2__55919_SHARP_,key),p2__55919_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout((function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}),(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5733__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5733__auto__)){
var link = temp__5733__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_55920 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_55920);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_55920);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__55921,p__55922){
var map__55923 = p__55921;
var map__55923__$1 = (((((!((map__55923 == null))))?(((((map__55923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55923):map__55923);
var on_cssload = cljs.core.get.call(null,map__55923__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__55924 = p__55922;
var map__55924__$1 = (((((!((map__55924 == null))))?(((((map__55924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55924):map__55924);
var files_msg = map__55924__$1;
var files = cljs.core.get.call(null,map__55924__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5735__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5735__auto__)){
var f_datas = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1589676429864
