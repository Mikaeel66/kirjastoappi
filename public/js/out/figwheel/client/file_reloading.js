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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__64089_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__64089_SHARP_));
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
var seq__64090 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__64091 = null;
var count__64092 = (0);
var i__64093 = (0);
while(true){
if((i__64093 < count__64092)){
var n = cljs.core._nth.call(null,chunk__64091,i__64093);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__64094 = seq__64090;
var G__64095 = chunk__64091;
var G__64096 = count__64092;
var G__64097 = (i__64093 + (1));
seq__64090 = G__64094;
chunk__64091 = G__64095;
count__64092 = G__64096;
i__64093 = G__64097;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__64090);
if(temp__5735__auto__){
var seq__64090__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64090__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__64090__$1);
var G__64098 = cljs.core.chunk_rest.call(null,seq__64090__$1);
var G__64099 = c__4609__auto__;
var G__64100 = cljs.core.count.call(null,c__4609__auto__);
var G__64101 = (0);
seq__64090 = G__64098;
chunk__64091 = G__64099;
count__64092 = G__64100;
i__64093 = G__64101;
continue;
} else {
var n = cljs.core.first.call(null,seq__64090__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__64102 = cljs.core.next.call(null,seq__64090__$1);
var G__64103 = null;
var G__64104 = (0);
var G__64105 = (0);
seq__64090 = G__64102;
chunk__64091 = G__64103;
count__64092 = G__64104;
i__64093 = G__64105;
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
return cljs.core.some.call(null,(function (p__64106){
var vec__64107 = p__64106;
var _ = cljs.core.nth.call(null,vec__64107,(0),null);
var v = cljs.core.nth.call(null,vec__64107,(1),null);
var and__4174__auto__ = v;
if(cljs.core.truth_(and__4174__auto__)){
return v.call(null,dep);
} else {
return and__4174__auto__;
}
}),cljs.core.filter.call(null,(function (p__64110){
var vec__64111 = p__64110;
var k = cljs.core.nth.call(null,vec__64111,(0),null);
var v = cljs.core.nth.call(null,vec__64111,(1),null);
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

var seq__64123_64131 = cljs.core.seq.call(null,deps);
var chunk__64124_64132 = null;
var count__64125_64133 = (0);
var i__64126_64134 = (0);
while(true){
if((i__64126_64134 < count__64125_64133)){
var dep_64135 = cljs.core._nth.call(null,chunk__64124_64132,i__64126_64134);
if(cljs.core.truth_((function (){var and__4174__auto__ = dep_64135;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_64135));
} else {
return and__4174__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_64135,(depth + (1)),state);
} else {
}


var G__64136 = seq__64123_64131;
var G__64137 = chunk__64124_64132;
var G__64138 = count__64125_64133;
var G__64139 = (i__64126_64134 + (1));
seq__64123_64131 = G__64136;
chunk__64124_64132 = G__64137;
count__64125_64133 = G__64138;
i__64126_64134 = G__64139;
continue;
} else {
var temp__5735__auto___64140 = cljs.core.seq.call(null,seq__64123_64131);
if(temp__5735__auto___64140){
var seq__64123_64141__$1 = temp__5735__auto___64140;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64123_64141__$1)){
var c__4609__auto___64142 = cljs.core.chunk_first.call(null,seq__64123_64141__$1);
var G__64143 = cljs.core.chunk_rest.call(null,seq__64123_64141__$1);
var G__64144 = c__4609__auto___64142;
var G__64145 = cljs.core.count.call(null,c__4609__auto___64142);
var G__64146 = (0);
seq__64123_64131 = G__64143;
chunk__64124_64132 = G__64144;
count__64125_64133 = G__64145;
i__64126_64134 = G__64146;
continue;
} else {
var dep_64147 = cljs.core.first.call(null,seq__64123_64141__$1);
if(cljs.core.truth_((function (){var and__4174__auto__ = dep_64147;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_64147));
} else {
return and__4174__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_64147,(depth + (1)),state);
} else {
}


var G__64148 = cljs.core.next.call(null,seq__64123_64141__$1);
var G__64149 = null;
var G__64150 = (0);
var G__64151 = (0);
seq__64123_64131 = G__64148;
chunk__64124_64132 = G__64149;
count__64125_64133 = G__64150;
i__64126_64134 = G__64151;
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
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__64127){
var vec__64128 = p__64127;
var seq__64129 = cljs.core.seq.call(null,vec__64128);
var first__64130 = cljs.core.first.call(null,seq__64129);
var seq__64129__$1 = cljs.core.next.call(null,seq__64129);
var x = first__64130;
var xs = seq__64129__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__64114_SHARP_){
return clojure.set.difference.call(null,p1__64114_SHARP_,x);
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
var seq__64152 = cljs.core.seq.call(null,provides);
var chunk__64153 = null;
var count__64154 = (0);
var i__64155 = (0);
while(true){
if((i__64155 < count__64154)){
var prov = cljs.core._nth.call(null,chunk__64153,i__64155);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__64164_64172 = cljs.core.seq.call(null,requires);
var chunk__64165_64173 = null;
var count__64166_64174 = (0);
var i__64167_64175 = (0);
while(true){
if((i__64167_64175 < count__64166_64174)){
var req_64176 = cljs.core._nth.call(null,chunk__64165_64173,i__64167_64175);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_64176,prov);


var G__64177 = seq__64164_64172;
var G__64178 = chunk__64165_64173;
var G__64179 = count__64166_64174;
var G__64180 = (i__64167_64175 + (1));
seq__64164_64172 = G__64177;
chunk__64165_64173 = G__64178;
count__64166_64174 = G__64179;
i__64167_64175 = G__64180;
continue;
} else {
var temp__5735__auto___64181 = cljs.core.seq.call(null,seq__64164_64172);
if(temp__5735__auto___64181){
var seq__64164_64182__$1 = temp__5735__auto___64181;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64164_64182__$1)){
var c__4609__auto___64183 = cljs.core.chunk_first.call(null,seq__64164_64182__$1);
var G__64184 = cljs.core.chunk_rest.call(null,seq__64164_64182__$1);
var G__64185 = c__4609__auto___64183;
var G__64186 = cljs.core.count.call(null,c__4609__auto___64183);
var G__64187 = (0);
seq__64164_64172 = G__64184;
chunk__64165_64173 = G__64185;
count__64166_64174 = G__64186;
i__64167_64175 = G__64187;
continue;
} else {
var req_64188 = cljs.core.first.call(null,seq__64164_64182__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_64188,prov);


var G__64189 = cljs.core.next.call(null,seq__64164_64182__$1);
var G__64190 = null;
var G__64191 = (0);
var G__64192 = (0);
seq__64164_64172 = G__64189;
chunk__64165_64173 = G__64190;
count__64166_64174 = G__64191;
i__64167_64175 = G__64192;
continue;
}
} else {
}
}
break;
}


var G__64193 = seq__64152;
var G__64194 = chunk__64153;
var G__64195 = count__64154;
var G__64196 = (i__64155 + (1));
seq__64152 = G__64193;
chunk__64153 = G__64194;
count__64154 = G__64195;
i__64155 = G__64196;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__64152);
if(temp__5735__auto__){
var seq__64152__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64152__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__64152__$1);
var G__64197 = cljs.core.chunk_rest.call(null,seq__64152__$1);
var G__64198 = c__4609__auto__;
var G__64199 = cljs.core.count.call(null,c__4609__auto__);
var G__64200 = (0);
seq__64152 = G__64197;
chunk__64153 = G__64198;
count__64154 = G__64199;
i__64155 = G__64200;
continue;
} else {
var prov = cljs.core.first.call(null,seq__64152__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__64168_64201 = cljs.core.seq.call(null,requires);
var chunk__64169_64202 = null;
var count__64170_64203 = (0);
var i__64171_64204 = (0);
while(true){
if((i__64171_64204 < count__64170_64203)){
var req_64205 = cljs.core._nth.call(null,chunk__64169_64202,i__64171_64204);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_64205,prov);


var G__64206 = seq__64168_64201;
var G__64207 = chunk__64169_64202;
var G__64208 = count__64170_64203;
var G__64209 = (i__64171_64204 + (1));
seq__64168_64201 = G__64206;
chunk__64169_64202 = G__64207;
count__64170_64203 = G__64208;
i__64171_64204 = G__64209;
continue;
} else {
var temp__5735__auto___64210__$1 = cljs.core.seq.call(null,seq__64168_64201);
if(temp__5735__auto___64210__$1){
var seq__64168_64211__$1 = temp__5735__auto___64210__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64168_64211__$1)){
var c__4609__auto___64212 = cljs.core.chunk_first.call(null,seq__64168_64211__$1);
var G__64213 = cljs.core.chunk_rest.call(null,seq__64168_64211__$1);
var G__64214 = c__4609__auto___64212;
var G__64215 = cljs.core.count.call(null,c__4609__auto___64212);
var G__64216 = (0);
seq__64168_64201 = G__64213;
chunk__64169_64202 = G__64214;
count__64170_64203 = G__64215;
i__64171_64204 = G__64216;
continue;
} else {
var req_64217 = cljs.core.first.call(null,seq__64168_64211__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_64217,prov);


var G__64218 = cljs.core.next.call(null,seq__64168_64211__$1);
var G__64219 = null;
var G__64220 = (0);
var G__64221 = (0);
seq__64168_64201 = G__64218;
chunk__64169_64202 = G__64219;
count__64170_64203 = G__64220;
i__64171_64204 = G__64221;
continue;
}
} else {
}
}
break;
}


var G__64222 = cljs.core.next.call(null,seq__64152__$1);
var G__64223 = null;
var G__64224 = (0);
var G__64225 = (0);
seq__64152 = G__64222;
chunk__64153 = G__64223;
count__64154 = G__64224;
i__64155 = G__64225;
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
var seq__64226_64230 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__64227_64231 = null;
var count__64228_64232 = (0);
var i__64229_64233 = (0);
while(true){
if((i__64229_64233 < count__64228_64232)){
var ns_64234 = cljs.core._nth.call(null,chunk__64227_64231,i__64229_64233);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_64234);


var G__64235 = seq__64226_64230;
var G__64236 = chunk__64227_64231;
var G__64237 = count__64228_64232;
var G__64238 = (i__64229_64233 + (1));
seq__64226_64230 = G__64235;
chunk__64227_64231 = G__64236;
count__64228_64232 = G__64237;
i__64229_64233 = G__64238;
continue;
} else {
var temp__5735__auto___64239 = cljs.core.seq.call(null,seq__64226_64230);
if(temp__5735__auto___64239){
var seq__64226_64240__$1 = temp__5735__auto___64239;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64226_64240__$1)){
var c__4609__auto___64241 = cljs.core.chunk_first.call(null,seq__64226_64240__$1);
var G__64242 = cljs.core.chunk_rest.call(null,seq__64226_64240__$1);
var G__64243 = c__4609__auto___64241;
var G__64244 = cljs.core.count.call(null,c__4609__auto___64241);
var G__64245 = (0);
seq__64226_64230 = G__64242;
chunk__64227_64231 = G__64243;
count__64228_64232 = G__64244;
i__64229_64233 = G__64245;
continue;
} else {
var ns_64246 = cljs.core.first.call(null,seq__64226_64240__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_64246);


var G__64247 = cljs.core.next.call(null,seq__64226_64240__$1);
var G__64248 = null;
var G__64249 = (0);
var G__64250 = (0);
seq__64226_64230 = G__64247;
chunk__64227_64231 = G__64248;
count__64228_64232 = G__64249;
i__64229_64233 = G__64250;
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
var G__64251__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__64251 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64252__i = 0, G__64252__a = new Array(arguments.length -  0);
while (G__64252__i < G__64252__a.length) {G__64252__a[G__64252__i] = arguments[G__64252__i + 0]; ++G__64252__i;}
  args = new cljs.core.IndexedSeq(G__64252__a,0,null);
} 
return G__64251__delegate.call(this,args);};
G__64251.cljs$lang$maxFixedArity = 0;
G__64251.cljs$lang$applyTo = (function (arglist__64253){
var args = cljs.core.seq(arglist__64253);
return G__64251__delegate(args);
});
G__64251.cljs$core$IFn$_invoke$arity$variadic = G__64251__delegate;
return G__64251;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__64254_SHARP_,p2__64255_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__64254_SHARP_)),p2__64255_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__64256_SHARP_,p2__64257_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__64256_SHARP_),p2__64257_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__64258 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__64258.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__64258.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__64258;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e64259){if((e64259 instanceof Error)){
var e = e64259;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e64259;

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
}catch (e64260){if((e64260 instanceof Error)){
var e = e64260;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e64260;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__64261 = cljs.core._EQ_;
var expr__64262 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__64261.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__64262))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__64261.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__64262))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__64261.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__64262))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__64264,callback){
var map__64265 = p__64264;
var map__64265__$1 = (((((!((map__64265 == null))))?(((((map__64265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64265):map__64265);
var file_msg = map__64265__$1;
var request_url = cljs.core.get.call(null,map__64265__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
figwheel.client.file_reloading.reloader_loop = (function (){var c__29155__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_64303){
var state_val_64304 = (state_64303[(1)]);
if((state_val_64304 === (7))){
var inst_64299 = (state_64303[(2)]);
var state_64303__$1 = state_64303;
var statearr_64305_64331 = state_64303__$1;
(statearr_64305_64331[(2)] = inst_64299);

(statearr_64305_64331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64304 === (1))){
var state_64303__$1 = state_64303;
var statearr_64306_64332 = state_64303__$1;
(statearr_64306_64332[(2)] = null);

(statearr_64306_64332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64304 === (4))){
var inst_64269 = (state_64303[(7)]);
var inst_64269__$1 = (state_64303[(2)]);
var state_64303__$1 = (function (){var statearr_64307 = state_64303;
(statearr_64307[(7)] = inst_64269__$1);

return statearr_64307;
})();
if(cljs.core.truth_(inst_64269__$1)){
var statearr_64308_64333 = state_64303__$1;
(statearr_64308_64333[(1)] = (5));

} else {
var statearr_64309_64334 = state_64303__$1;
(statearr_64309_64334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64304 === (15))){
var inst_64284 = (state_64303[(8)]);
var inst_64282 = (state_64303[(9)]);
var inst_64286 = inst_64284.call(null,inst_64282);
var state_64303__$1 = state_64303;
var statearr_64310_64335 = state_64303__$1;
(statearr_64310_64335[(2)] = inst_64286);

(statearr_64310_64335[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64304 === (13))){
var inst_64293 = (state_64303[(2)]);
var state_64303__$1 = state_64303;
var statearr_64311_64336 = state_64303__$1;
(statearr_64311_64336[(2)] = inst_64293);

(statearr_64311_64336[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64304 === (6))){
var state_64303__$1 = state_64303;
var statearr_64312_64337 = state_64303__$1;
(statearr_64312_64337[(2)] = null);

(statearr_64312_64337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64304 === (17))){
var inst_64290 = (state_64303[(2)]);
var state_64303__$1 = state_64303;
var statearr_64313_64338 = state_64303__$1;
(statearr_64313_64338[(2)] = inst_64290);

(statearr_64313_64338[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64304 === (3))){
var inst_64301 = (state_64303[(2)]);
var state_64303__$1 = state_64303;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64303__$1,inst_64301);
} else {
if((state_val_64304 === (12))){
var state_64303__$1 = state_64303;
var statearr_64314_64339 = state_64303__$1;
(statearr_64314_64339[(2)] = null);

(statearr_64314_64339[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64304 === (2))){
var state_64303__$1 = state_64303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64303__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_64304 === (11))){
var inst_64274 = (state_64303[(10)]);
var inst_64280 = figwheel.client.file_reloading.blocking_load.call(null,inst_64274);
var state_64303__$1 = state_64303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64303__$1,(14),inst_64280);
} else {
if((state_val_64304 === (9))){
var inst_64274 = (state_64303[(10)]);
var state_64303__$1 = state_64303;
if(cljs.core.truth_(inst_64274)){
var statearr_64315_64340 = state_64303__$1;
(statearr_64315_64340[(1)] = (11));

} else {
var statearr_64316_64341 = state_64303__$1;
(statearr_64316_64341[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64304 === (5))){
var inst_64269 = (state_64303[(7)]);
var inst_64275 = (state_64303[(11)]);
var inst_64274 = cljs.core.nth.call(null,inst_64269,(0),null);
var inst_64275__$1 = cljs.core.nth.call(null,inst_64269,(1),null);
var state_64303__$1 = (function (){var statearr_64317 = state_64303;
(statearr_64317[(11)] = inst_64275__$1);

(statearr_64317[(10)] = inst_64274);

return statearr_64317;
})();
if(cljs.core.truth_(inst_64275__$1)){
var statearr_64318_64342 = state_64303__$1;
(statearr_64318_64342[(1)] = (8));

} else {
var statearr_64319_64343 = state_64303__$1;
(statearr_64319_64343[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64304 === (14))){
var inst_64284 = (state_64303[(8)]);
var inst_64274 = (state_64303[(10)]);
var inst_64282 = (state_64303[(2)]);
var inst_64283 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_64284__$1 = cljs.core.get.call(null,inst_64283,inst_64274);
var state_64303__$1 = (function (){var statearr_64320 = state_64303;
(statearr_64320[(8)] = inst_64284__$1);

(statearr_64320[(9)] = inst_64282);

return statearr_64320;
})();
if(cljs.core.truth_(inst_64284__$1)){
var statearr_64321_64344 = state_64303__$1;
(statearr_64321_64344[(1)] = (15));

} else {
var statearr_64322_64345 = state_64303__$1;
(statearr_64322_64345[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64304 === (16))){
var inst_64282 = (state_64303[(9)]);
var inst_64288 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_64282);
var state_64303__$1 = state_64303;
var statearr_64323_64346 = state_64303__$1;
(statearr_64323_64346[(2)] = inst_64288);

(statearr_64323_64346[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64304 === (10))){
var inst_64295 = (state_64303[(2)]);
var state_64303__$1 = (function (){var statearr_64324 = state_64303;
(statearr_64324[(12)] = inst_64295);

return statearr_64324;
})();
var statearr_64325_64347 = state_64303__$1;
(statearr_64325_64347[(2)] = null);

(statearr_64325_64347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64304 === (8))){
var inst_64275 = (state_64303[(11)]);
var inst_64277 = eval(inst_64275);
var state_64303__$1 = state_64303;
var statearr_64326_64348 = state_64303__$1;
(statearr_64326_64348[(2)] = inst_64277);

(statearr_64326_64348[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__29061__auto__ = null;
var figwheel$client$file_reloading$state_machine__29061__auto____0 = (function (){
var statearr_64327 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64327[(0)] = figwheel$client$file_reloading$state_machine__29061__auto__);

(statearr_64327[(1)] = (1));

return statearr_64327;
});
var figwheel$client$file_reloading$state_machine__29061__auto____1 = (function (state_64303){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_64303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e64328){if((e64328 instanceof Object)){
var ex__29064__auto__ = e64328;
var statearr_64329_64349 = state_64303;
(statearr_64329_64349[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64350 = state_64303;
state_64303 = G__64350;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29061__auto__ = function(state_64303){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29061__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29061__auto____1.call(this,state_64303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29061__auto____0;
figwheel$client$file_reloading$state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29061__auto____1;
return figwheel$client$file_reloading$state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_64330 = f__29156__auto__.call(null);
(statearr_64330[(6)] = c__29155__auto__);

return statearr_64330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29157__auto__);
}));

return c__29155__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__64352 = arguments.length;
switch (G__64352) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__64354,callback){
var map__64355 = p__64354;
var map__64355__$1 = (((((!((map__64355 == null))))?(((((map__64355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64355):map__64355);
var file_msg = map__64355__$1;
var namespace = cljs.core.get.call(null,map__64355__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__64357){
var map__64358 = p__64357;
var map__64358__$1 = (((((!((map__64358 == null))))?(((((map__64358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64358):map__64358);
var file_msg = map__64358__$1;
var namespace = cljs.core.get.call(null,map__64358__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__64360){
var map__64361 = p__64360;
var map__64361__$1 = (((((!((map__64361 == null))))?(((((map__64361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64361):map__64361);
var file_msg = map__64361__$1;
var namespace = cljs.core.get.call(null,map__64361__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__64363,callback){
var map__64364 = p__64363;
var map__64364__$1 = (((((!((map__64364 == null))))?(((((map__64364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64364):map__64364);
var file_msg = map__64364__$1;
var request_url = cljs.core.get.call(null,map__64364__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__64364__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__29155__auto___64414 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_64399){
var state_val_64400 = (state_64399[(1)]);
if((state_val_64400 === (1))){
var inst_64373 = cljs.core.seq.call(null,files);
var inst_64374 = cljs.core.first.call(null,inst_64373);
var inst_64375 = cljs.core.next.call(null,inst_64373);
var inst_64376 = files;
var state_64399__$1 = (function (){var statearr_64401 = state_64399;
(statearr_64401[(7)] = inst_64374);

(statearr_64401[(8)] = inst_64376);

(statearr_64401[(9)] = inst_64375);

return statearr_64401;
})();
var statearr_64402_64415 = state_64399__$1;
(statearr_64402_64415[(2)] = null);

(statearr_64402_64415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64400 === (2))){
var inst_64382 = (state_64399[(10)]);
var inst_64376 = (state_64399[(8)]);
var inst_64381 = cljs.core.seq.call(null,inst_64376);
var inst_64382__$1 = cljs.core.first.call(null,inst_64381);
var inst_64383 = cljs.core.next.call(null,inst_64381);
var inst_64384 = (inst_64382__$1 == null);
var inst_64385 = cljs.core.not.call(null,inst_64384);
var state_64399__$1 = (function (){var statearr_64403 = state_64399;
(statearr_64403[(11)] = inst_64383);

(statearr_64403[(10)] = inst_64382__$1);

return statearr_64403;
})();
if(inst_64385){
var statearr_64404_64416 = state_64399__$1;
(statearr_64404_64416[(1)] = (4));

} else {
var statearr_64405_64417 = state_64399__$1;
(statearr_64405_64417[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64400 === (3))){
var inst_64397 = (state_64399[(2)]);
var state_64399__$1 = state_64399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64399__$1,inst_64397);
} else {
if((state_val_64400 === (4))){
var inst_64382 = (state_64399[(10)]);
var inst_64387 = figwheel.client.file_reloading.reload_js_file.call(null,inst_64382);
var state_64399__$1 = state_64399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64399__$1,(7),inst_64387);
} else {
if((state_val_64400 === (5))){
var inst_64393 = cljs.core.async.close_BANG_.call(null,out);
var state_64399__$1 = state_64399;
var statearr_64406_64418 = state_64399__$1;
(statearr_64406_64418[(2)] = inst_64393);

(statearr_64406_64418[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64400 === (6))){
var inst_64395 = (state_64399[(2)]);
var state_64399__$1 = state_64399;
var statearr_64407_64419 = state_64399__$1;
(statearr_64407_64419[(2)] = inst_64395);

(statearr_64407_64419[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64400 === (7))){
var inst_64383 = (state_64399[(11)]);
var inst_64389 = (state_64399[(2)]);
var inst_64390 = cljs.core.async.put_BANG_.call(null,out,inst_64389);
var inst_64376 = inst_64383;
var state_64399__$1 = (function (){var statearr_64408 = state_64399;
(statearr_64408[(8)] = inst_64376);

(statearr_64408[(12)] = inst_64390);

return statearr_64408;
})();
var statearr_64409_64420 = state_64399__$1;
(statearr_64409_64420[(2)] = null);

(statearr_64409_64420[(1)] = (2));


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
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29061__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29061__auto____0 = (function (){
var statearr_64410 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64410[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29061__auto__);

(statearr_64410[(1)] = (1));

return statearr_64410;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29061__auto____1 = (function (state_64399){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_64399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e64411){if((e64411 instanceof Object)){
var ex__29064__auto__ = e64411;
var statearr_64412_64421 = state_64399;
(statearr_64412_64421[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64422 = state_64399;
state_64399 = G__64422;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29061__auto__ = function(state_64399){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29061__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29061__auto____1.call(this,state_64399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29061__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29061__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_64413 = f__29156__auto__.call(null);
(statearr_64413[(6)] = c__29155__auto___64414);

return statearr_64413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29157__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__64423,opts){
var map__64424 = p__64423;
var map__64424__$1 = (((((!((map__64424 == null))))?(((((map__64424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64424):map__64424);
var eval_body = cljs.core.get.call(null,map__64424__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__64424__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e64426){var e = e64426;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__64427_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__64427_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__64428){
var vec__64429 = p__64428;
var k = cljs.core.nth.call(null,vec__64429,(0),null);
var v = cljs.core.nth.call(null,vec__64429,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__64432){
var vec__64433 = p__64432;
var k = cljs.core.nth.call(null,vec__64433,(0),null);
var v = cljs.core.nth.call(null,vec__64433,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__64439,p__64440){
var map__64441 = p__64439;
var map__64441__$1 = (((((!((map__64441 == null))))?(((((map__64441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64441):map__64441);
var opts = map__64441__$1;
var before_jsload = cljs.core.get.call(null,map__64441__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__64441__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__64441__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__64442 = p__64440;
var map__64442__$1 = (((((!((map__64442 == null))))?(((((map__64442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64442):map__64442);
var msg = map__64442__$1;
var files = cljs.core.get.call(null,map__64442__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__64442__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__64442__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29155__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_64596){
var state_val_64597 = (state_64596[(1)]);
if((state_val_64597 === (7))){
var inst_64456 = (state_64596[(7)]);
var inst_64459 = (state_64596[(8)]);
var inst_64457 = (state_64596[(9)]);
var inst_64458 = (state_64596[(10)]);
var inst_64464 = cljs.core._nth.call(null,inst_64457,inst_64459);
var inst_64465 = figwheel.client.file_reloading.eval_body.call(null,inst_64464,opts);
var inst_64466 = (inst_64459 + (1));
var tmp64598 = inst_64456;
var tmp64599 = inst_64457;
var tmp64600 = inst_64458;
var inst_64456__$1 = tmp64598;
var inst_64457__$1 = tmp64599;
var inst_64458__$1 = tmp64600;
var inst_64459__$1 = inst_64466;
var state_64596__$1 = (function (){var statearr_64601 = state_64596;
(statearr_64601[(7)] = inst_64456__$1);

(statearr_64601[(11)] = inst_64465);

(statearr_64601[(8)] = inst_64459__$1);

(statearr_64601[(9)] = inst_64457__$1);

(statearr_64601[(10)] = inst_64458__$1);

return statearr_64601;
})();
var statearr_64602_64685 = state_64596__$1;
(statearr_64602_64685[(2)] = null);

(statearr_64602_64685[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (20))){
var inst_64499 = (state_64596[(12)]);
var inst_64507 = figwheel.client.file_reloading.sort_files.call(null,inst_64499);
var state_64596__$1 = state_64596;
var statearr_64603_64686 = state_64596__$1;
(statearr_64603_64686[(2)] = inst_64507);

(statearr_64603_64686[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (27))){
var state_64596__$1 = state_64596;
var statearr_64604_64687 = state_64596__$1;
(statearr_64604_64687[(2)] = null);

(statearr_64604_64687[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (1))){
var inst_64448 = (state_64596[(13)]);
var inst_64445 = before_jsload.call(null,files);
var inst_64446 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_64447 = (function (){return (function (p1__64436_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__64436_SHARP_);
});
})();
var inst_64448__$1 = cljs.core.filter.call(null,inst_64447,files);
var inst_64449 = cljs.core.not_empty.call(null,inst_64448__$1);
var state_64596__$1 = (function (){var statearr_64605 = state_64596;
(statearr_64605[(13)] = inst_64448__$1);

(statearr_64605[(14)] = inst_64446);

(statearr_64605[(15)] = inst_64445);

return statearr_64605;
})();
if(cljs.core.truth_(inst_64449)){
var statearr_64606_64688 = state_64596__$1;
(statearr_64606_64688[(1)] = (2));

} else {
var statearr_64607_64689 = state_64596__$1;
(statearr_64607_64689[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (24))){
var state_64596__$1 = state_64596;
var statearr_64608_64690 = state_64596__$1;
(statearr_64608_64690[(2)] = null);

(statearr_64608_64690[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (39))){
var inst_64549 = (state_64596[(16)]);
var state_64596__$1 = state_64596;
var statearr_64609_64691 = state_64596__$1;
(statearr_64609_64691[(2)] = inst_64549);

(statearr_64609_64691[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (46))){
var inst_64591 = (state_64596[(2)]);
var state_64596__$1 = state_64596;
var statearr_64610_64692 = state_64596__$1;
(statearr_64610_64692[(2)] = inst_64591);

(statearr_64610_64692[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (4))){
var inst_64493 = (state_64596[(2)]);
var inst_64494 = cljs.core.List.EMPTY;
var inst_64495 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_64494);
var inst_64496 = (function (){return (function (p1__64437_SHARP_){
var and__4174__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__64437_SHARP_);
if(cljs.core.truth_(and__4174__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__64437_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__64437_SHARP_))));
} else {
return and__4174__auto__;
}
});
})();
var inst_64497 = cljs.core.filter.call(null,inst_64496,files);
var inst_64498 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_64499 = cljs.core.concat.call(null,inst_64497,inst_64498);
var state_64596__$1 = (function (){var statearr_64611 = state_64596;
(statearr_64611[(12)] = inst_64499);

(statearr_64611[(17)] = inst_64493);

(statearr_64611[(18)] = inst_64495);

return statearr_64611;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_64612_64693 = state_64596__$1;
(statearr_64612_64693[(1)] = (16));

} else {
var statearr_64613_64694 = state_64596__$1;
(statearr_64613_64694[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (15))){
var inst_64483 = (state_64596[(2)]);
var state_64596__$1 = state_64596;
var statearr_64614_64695 = state_64596__$1;
(statearr_64614_64695[(2)] = inst_64483);

(statearr_64614_64695[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (21))){
var inst_64509 = (state_64596[(19)]);
var inst_64509__$1 = (state_64596[(2)]);
var inst_64510 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_64509__$1);
var state_64596__$1 = (function (){var statearr_64615 = state_64596;
(statearr_64615[(19)] = inst_64509__$1);

return statearr_64615;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64596__$1,(22),inst_64510);
} else {
if((state_val_64597 === (31))){
var inst_64594 = (state_64596[(2)]);
var state_64596__$1 = state_64596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64596__$1,inst_64594);
} else {
if((state_val_64597 === (32))){
var inst_64549 = (state_64596[(16)]);
var inst_64554 = inst_64549.cljs$lang$protocol_mask$partition0$;
var inst_64555 = (inst_64554 & (64));
var inst_64556 = inst_64549.cljs$core$ISeq$;
var inst_64557 = (cljs.core.PROTOCOL_SENTINEL === inst_64556);
var inst_64558 = ((inst_64555) || (inst_64557));
var state_64596__$1 = state_64596;
if(cljs.core.truth_(inst_64558)){
var statearr_64616_64696 = state_64596__$1;
(statearr_64616_64696[(1)] = (35));

} else {
var statearr_64617_64697 = state_64596__$1;
(statearr_64617_64697[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (40))){
var inst_64571 = (state_64596[(20)]);
var inst_64570 = (state_64596[(2)]);
var inst_64571__$1 = cljs.core.get.call(null,inst_64570,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_64572 = cljs.core.get.call(null,inst_64570,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_64573 = cljs.core.not_empty.call(null,inst_64571__$1);
var state_64596__$1 = (function (){var statearr_64618 = state_64596;
(statearr_64618[(20)] = inst_64571__$1);

(statearr_64618[(21)] = inst_64572);

return statearr_64618;
})();
if(cljs.core.truth_(inst_64573)){
var statearr_64619_64698 = state_64596__$1;
(statearr_64619_64698[(1)] = (41));

} else {
var statearr_64620_64699 = state_64596__$1;
(statearr_64620_64699[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (33))){
var state_64596__$1 = state_64596;
var statearr_64621_64700 = state_64596__$1;
(statearr_64621_64700[(2)] = false);

(statearr_64621_64700[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (13))){
var inst_64469 = (state_64596[(22)]);
var inst_64473 = cljs.core.chunk_first.call(null,inst_64469);
var inst_64474 = cljs.core.chunk_rest.call(null,inst_64469);
var inst_64475 = cljs.core.count.call(null,inst_64473);
var inst_64456 = inst_64474;
var inst_64457 = inst_64473;
var inst_64458 = inst_64475;
var inst_64459 = (0);
var state_64596__$1 = (function (){var statearr_64622 = state_64596;
(statearr_64622[(7)] = inst_64456);

(statearr_64622[(8)] = inst_64459);

(statearr_64622[(9)] = inst_64457);

(statearr_64622[(10)] = inst_64458);

return statearr_64622;
})();
var statearr_64623_64701 = state_64596__$1;
(statearr_64623_64701[(2)] = null);

(statearr_64623_64701[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (22))){
var inst_64512 = (state_64596[(23)]);
var inst_64513 = (state_64596[(24)]);
var inst_64509 = (state_64596[(19)]);
var inst_64517 = (state_64596[(25)]);
var inst_64512__$1 = (state_64596[(2)]);
var inst_64513__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_64512__$1);
var inst_64514 = (function (){var all_files = inst_64509;
var res_SINGLEQUOTE_ = inst_64512__$1;
var res = inst_64513__$1;
return (function (p1__64438_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__64438_SHARP_));
});
})();
var inst_64515 = cljs.core.filter.call(null,inst_64514,inst_64512__$1);
var inst_64516 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_64517__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_64516);
var inst_64518 = cljs.core.not_empty.call(null,inst_64517__$1);
var state_64596__$1 = (function (){var statearr_64624 = state_64596;
(statearr_64624[(23)] = inst_64512__$1);

(statearr_64624[(26)] = inst_64515);

(statearr_64624[(24)] = inst_64513__$1);

(statearr_64624[(25)] = inst_64517__$1);

return statearr_64624;
})();
if(cljs.core.truth_(inst_64518)){
var statearr_64625_64702 = state_64596__$1;
(statearr_64625_64702[(1)] = (23));

} else {
var statearr_64626_64703 = state_64596__$1;
(statearr_64626_64703[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (36))){
var state_64596__$1 = state_64596;
var statearr_64627_64704 = state_64596__$1;
(statearr_64627_64704[(2)] = false);

(statearr_64627_64704[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (41))){
var inst_64571 = (state_64596[(20)]);
var inst_64575 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_64576 = cljs.core.map.call(null,inst_64575,inst_64571);
var inst_64577 = cljs.core.pr_str.call(null,inst_64576);
var inst_64578 = ["figwheel-no-load meta-data: ",inst_64577].join('');
var inst_64579 = figwheel.client.utils.log.call(null,inst_64578);
var state_64596__$1 = state_64596;
var statearr_64628_64705 = state_64596__$1;
(statearr_64628_64705[(2)] = inst_64579);

(statearr_64628_64705[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (43))){
var inst_64572 = (state_64596[(21)]);
var inst_64582 = (state_64596[(2)]);
var inst_64583 = cljs.core.not_empty.call(null,inst_64572);
var state_64596__$1 = (function (){var statearr_64629 = state_64596;
(statearr_64629[(27)] = inst_64582);

return statearr_64629;
})();
if(cljs.core.truth_(inst_64583)){
var statearr_64630_64706 = state_64596__$1;
(statearr_64630_64706[(1)] = (44));

} else {
var statearr_64631_64707 = state_64596__$1;
(statearr_64631_64707[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (29))){
var inst_64549 = (state_64596[(16)]);
var inst_64512 = (state_64596[(23)]);
var inst_64515 = (state_64596[(26)]);
var inst_64513 = (state_64596[(24)]);
var inst_64509 = (state_64596[(19)]);
var inst_64517 = (state_64596[(25)]);
var inst_64545 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_64548 = (function (){var all_files = inst_64509;
var res_SINGLEQUOTE_ = inst_64512;
var res = inst_64513;
var files_not_loaded = inst_64515;
var dependencies_that_loaded = inst_64517;
return (function (p__64547){
var map__64632 = p__64547;
var map__64632__$1 = (((((!((map__64632 == null))))?(((((map__64632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64632):map__64632);
var namespace = cljs.core.get.call(null,map__64632__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
var inst_64549__$1 = cljs.core.group_by.call(null,inst_64548,inst_64515);
var inst_64551 = (inst_64549__$1 == null);
var inst_64552 = cljs.core.not.call(null,inst_64551);
var state_64596__$1 = (function (){var statearr_64634 = state_64596;
(statearr_64634[(16)] = inst_64549__$1);

(statearr_64634[(28)] = inst_64545);

return statearr_64634;
})();
if(inst_64552){
var statearr_64635_64708 = state_64596__$1;
(statearr_64635_64708[(1)] = (32));

} else {
var statearr_64636_64709 = state_64596__$1;
(statearr_64636_64709[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (44))){
var inst_64572 = (state_64596[(21)]);
var inst_64585 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_64572);
var inst_64586 = cljs.core.pr_str.call(null,inst_64585);
var inst_64587 = ["not required: ",inst_64586].join('');
var inst_64588 = figwheel.client.utils.log.call(null,inst_64587);
var state_64596__$1 = state_64596;
var statearr_64637_64710 = state_64596__$1;
(statearr_64637_64710[(2)] = inst_64588);

(statearr_64637_64710[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (6))){
var inst_64490 = (state_64596[(2)]);
var state_64596__$1 = state_64596;
var statearr_64638_64711 = state_64596__$1;
(statearr_64638_64711[(2)] = inst_64490);

(statearr_64638_64711[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (28))){
var inst_64515 = (state_64596[(26)]);
var inst_64542 = (state_64596[(2)]);
var inst_64543 = cljs.core.not_empty.call(null,inst_64515);
var state_64596__$1 = (function (){var statearr_64639 = state_64596;
(statearr_64639[(29)] = inst_64542);

return statearr_64639;
})();
if(cljs.core.truth_(inst_64543)){
var statearr_64640_64712 = state_64596__$1;
(statearr_64640_64712[(1)] = (29));

} else {
var statearr_64641_64713 = state_64596__$1;
(statearr_64641_64713[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (25))){
var inst_64513 = (state_64596[(24)]);
var inst_64529 = (state_64596[(2)]);
var inst_64530 = cljs.core.not_empty.call(null,inst_64513);
var state_64596__$1 = (function (){var statearr_64642 = state_64596;
(statearr_64642[(30)] = inst_64529);

return statearr_64642;
})();
if(cljs.core.truth_(inst_64530)){
var statearr_64643_64714 = state_64596__$1;
(statearr_64643_64714[(1)] = (26));

} else {
var statearr_64644_64715 = state_64596__$1;
(statearr_64644_64715[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (34))){
var inst_64565 = (state_64596[(2)]);
var state_64596__$1 = state_64596;
if(cljs.core.truth_(inst_64565)){
var statearr_64645_64716 = state_64596__$1;
(statearr_64645_64716[(1)] = (38));

} else {
var statearr_64646_64717 = state_64596__$1;
(statearr_64646_64717[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (17))){
var state_64596__$1 = state_64596;
var statearr_64647_64718 = state_64596__$1;
(statearr_64647_64718[(2)] = recompile_dependents);

(statearr_64647_64718[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (3))){
var state_64596__$1 = state_64596;
var statearr_64648_64719 = state_64596__$1;
(statearr_64648_64719[(2)] = null);

(statearr_64648_64719[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (12))){
var inst_64486 = (state_64596[(2)]);
var state_64596__$1 = state_64596;
var statearr_64649_64720 = state_64596__$1;
(statearr_64649_64720[(2)] = inst_64486);

(statearr_64649_64720[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (2))){
var inst_64448 = (state_64596[(13)]);
var inst_64455 = cljs.core.seq.call(null,inst_64448);
var inst_64456 = inst_64455;
var inst_64457 = null;
var inst_64458 = (0);
var inst_64459 = (0);
var state_64596__$1 = (function (){var statearr_64650 = state_64596;
(statearr_64650[(7)] = inst_64456);

(statearr_64650[(8)] = inst_64459);

(statearr_64650[(9)] = inst_64457);

(statearr_64650[(10)] = inst_64458);

return statearr_64650;
})();
var statearr_64651_64721 = state_64596__$1;
(statearr_64651_64721[(2)] = null);

(statearr_64651_64721[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (23))){
var inst_64512 = (state_64596[(23)]);
var inst_64515 = (state_64596[(26)]);
var inst_64513 = (state_64596[(24)]);
var inst_64509 = (state_64596[(19)]);
var inst_64517 = (state_64596[(25)]);
var inst_64520 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_64522 = (function (){var all_files = inst_64509;
var res_SINGLEQUOTE_ = inst_64512;
var res = inst_64513;
var files_not_loaded = inst_64515;
var dependencies_that_loaded = inst_64517;
return (function (p__64521){
var map__64652 = p__64521;
var map__64652__$1 = (((((!((map__64652 == null))))?(((((map__64652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64652):map__64652);
var request_url = cljs.core.get.call(null,map__64652__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_64523 = cljs.core.reverse.call(null,inst_64517);
var inst_64524 = cljs.core.map.call(null,inst_64522,inst_64523);
var inst_64525 = cljs.core.pr_str.call(null,inst_64524);
var inst_64526 = figwheel.client.utils.log.call(null,inst_64525);
var state_64596__$1 = (function (){var statearr_64654 = state_64596;
(statearr_64654[(31)] = inst_64520);

return statearr_64654;
})();
var statearr_64655_64722 = state_64596__$1;
(statearr_64655_64722[(2)] = inst_64526);

(statearr_64655_64722[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (35))){
var state_64596__$1 = state_64596;
var statearr_64656_64723 = state_64596__$1;
(statearr_64656_64723[(2)] = true);

(statearr_64656_64723[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (19))){
var inst_64499 = (state_64596[(12)]);
var inst_64505 = figwheel.client.file_reloading.expand_files.call(null,inst_64499);
var state_64596__$1 = state_64596;
var statearr_64657_64724 = state_64596__$1;
(statearr_64657_64724[(2)] = inst_64505);

(statearr_64657_64724[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (11))){
var state_64596__$1 = state_64596;
var statearr_64658_64725 = state_64596__$1;
(statearr_64658_64725[(2)] = null);

(statearr_64658_64725[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (9))){
var inst_64488 = (state_64596[(2)]);
var state_64596__$1 = state_64596;
var statearr_64659_64726 = state_64596__$1;
(statearr_64659_64726[(2)] = inst_64488);

(statearr_64659_64726[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (5))){
var inst_64459 = (state_64596[(8)]);
var inst_64458 = (state_64596[(10)]);
var inst_64461 = (inst_64459 < inst_64458);
var inst_64462 = inst_64461;
var state_64596__$1 = state_64596;
if(cljs.core.truth_(inst_64462)){
var statearr_64660_64727 = state_64596__$1;
(statearr_64660_64727[(1)] = (7));

} else {
var statearr_64661_64728 = state_64596__$1;
(statearr_64661_64728[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (14))){
var inst_64469 = (state_64596[(22)]);
var inst_64478 = cljs.core.first.call(null,inst_64469);
var inst_64479 = figwheel.client.file_reloading.eval_body.call(null,inst_64478,opts);
var inst_64480 = cljs.core.next.call(null,inst_64469);
var inst_64456 = inst_64480;
var inst_64457 = null;
var inst_64458 = (0);
var inst_64459 = (0);
var state_64596__$1 = (function (){var statearr_64662 = state_64596;
(statearr_64662[(7)] = inst_64456);

(statearr_64662[(32)] = inst_64479);

(statearr_64662[(8)] = inst_64459);

(statearr_64662[(9)] = inst_64457);

(statearr_64662[(10)] = inst_64458);

return statearr_64662;
})();
var statearr_64663_64729 = state_64596__$1;
(statearr_64663_64729[(2)] = null);

(statearr_64663_64729[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (45))){
var state_64596__$1 = state_64596;
var statearr_64664_64730 = state_64596__$1;
(statearr_64664_64730[(2)] = null);

(statearr_64664_64730[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (26))){
var inst_64512 = (state_64596[(23)]);
var inst_64515 = (state_64596[(26)]);
var inst_64513 = (state_64596[(24)]);
var inst_64509 = (state_64596[(19)]);
var inst_64517 = (state_64596[(25)]);
var inst_64532 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_64534 = (function (){var all_files = inst_64509;
var res_SINGLEQUOTE_ = inst_64512;
var res = inst_64513;
var files_not_loaded = inst_64515;
var dependencies_that_loaded = inst_64517;
return (function (p__64533){
var map__64665 = p__64533;
var map__64665__$1 = (((((!((map__64665 == null))))?(((((map__64665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64665):map__64665);
var namespace = cljs.core.get.call(null,map__64665__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__64665__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_64535 = cljs.core.map.call(null,inst_64534,inst_64513);
var inst_64536 = cljs.core.pr_str.call(null,inst_64535);
var inst_64537 = figwheel.client.utils.log.call(null,inst_64536);
var inst_64538 = (function (){var all_files = inst_64509;
var res_SINGLEQUOTE_ = inst_64512;
var res = inst_64513;
var files_not_loaded = inst_64515;
var dependencies_that_loaded = inst_64517;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_64539 = setTimeout(inst_64538,(10));
var state_64596__$1 = (function (){var statearr_64667 = state_64596;
(statearr_64667[(33)] = inst_64532);

(statearr_64667[(34)] = inst_64537);

return statearr_64667;
})();
var statearr_64668_64731 = state_64596__$1;
(statearr_64668_64731[(2)] = inst_64539);

(statearr_64668_64731[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (16))){
var state_64596__$1 = state_64596;
var statearr_64669_64732 = state_64596__$1;
(statearr_64669_64732[(2)] = reload_dependents);

(statearr_64669_64732[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (38))){
var inst_64549 = (state_64596[(16)]);
var inst_64567 = cljs.core.apply.call(null,cljs.core.hash_map,inst_64549);
var state_64596__$1 = state_64596;
var statearr_64670_64733 = state_64596__$1;
(statearr_64670_64733[(2)] = inst_64567);

(statearr_64670_64733[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (30))){
var state_64596__$1 = state_64596;
var statearr_64671_64734 = state_64596__$1;
(statearr_64671_64734[(2)] = null);

(statearr_64671_64734[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (10))){
var inst_64469 = (state_64596[(22)]);
var inst_64471 = cljs.core.chunked_seq_QMARK_.call(null,inst_64469);
var state_64596__$1 = state_64596;
if(inst_64471){
var statearr_64672_64735 = state_64596__$1;
(statearr_64672_64735[(1)] = (13));

} else {
var statearr_64673_64736 = state_64596__$1;
(statearr_64673_64736[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (18))){
var inst_64503 = (state_64596[(2)]);
var state_64596__$1 = state_64596;
if(cljs.core.truth_(inst_64503)){
var statearr_64674_64737 = state_64596__$1;
(statearr_64674_64737[(1)] = (19));

} else {
var statearr_64675_64738 = state_64596__$1;
(statearr_64675_64738[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (42))){
var state_64596__$1 = state_64596;
var statearr_64676_64739 = state_64596__$1;
(statearr_64676_64739[(2)] = null);

(statearr_64676_64739[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (37))){
var inst_64562 = (state_64596[(2)]);
var state_64596__$1 = state_64596;
var statearr_64677_64740 = state_64596__$1;
(statearr_64677_64740[(2)] = inst_64562);

(statearr_64677_64740[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (8))){
var inst_64456 = (state_64596[(7)]);
var inst_64469 = (state_64596[(22)]);
var inst_64469__$1 = cljs.core.seq.call(null,inst_64456);
var state_64596__$1 = (function (){var statearr_64678 = state_64596;
(statearr_64678[(22)] = inst_64469__$1);

return statearr_64678;
})();
if(inst_64469__$1){
var statearr_64679_64741 = state_64596__$1;
(statearr_64679_64741[(1)] = (10));

} else {
var statearr_64680_64742 = state_64596__$1;
(statearr_64680_64742[(1)] = (11));

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
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29061__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29061__auto____0 = (function (){
var statearr_64681 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64681[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29061__auto__);

(statearr_64681[(1)] = (1));

return statearr_64681;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29061__auto____1 = (function (state_64596){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_64596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e64682){if((e64682 instanceof Object)){
var ex__29064__auto__ = e64682;
var statearr_64683_64743 = state_64596;
(statearr_64683_64743[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64744 = state_64596;
state_64596 = G__64744;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29061__auto__ = function(state_64596){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29061__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29061__auto____1.call(this,state_64596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29061__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29061__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_64684 = f__29156__auto__.call(null);
(statearr_64684[(6)] = c__29155__auto__);

return statearr_64684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29157__auto__);
}));

return c__29155__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__64747,link){
var map__64748 = p__64747;
var map__64748__$1 = (((((!((map__64748 == null))))?(((((map__64748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64748):map__64748);
var file = cljs.core.get.call(null,map__64748__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__64745_SHARP_,p2__64746_SHARP_){
if(cljs.core._EQ_.call(null,p1__64745_SHARP_,p2__64746_SHARP_)){
return p1__64745_SHARP_;
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
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__64751){
var map__64752 = p__64751;
var map__64752__$1 = (((((!((map__64752 == null))))?(((((map__64752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64752):map__64752);
var match_length = cljs.core.get.call(null,map__64752__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__64752__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__64750_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__64750_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__64754_SHARP_,p2__64755_SHARP_){
return cljs.core.assoc.call(null,p1__64754_SHARP_,cljs.core.get.call(null,p2__64755_SHARP_,key),p2__64755_SHARP_);
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
var loaded_f_datas_64756 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_64756);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_64756);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__64757,p__64758){
var map__64759 = p__64757;
var map__64759__$1 = (((((!((map__64759 == null))))?(((((map__64759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64759):map__64759);
var on_cssload = cljs.core.get.call(null,map__64759__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__64760 = p__64758;
var map__64760__$1 = (((((!((map__64760 == null))))?(((((map__64760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64760):map__64760);
var files_msg = map__64760__$1;
var files = cljs.core.get.call(null,map__64760__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1589677418641
