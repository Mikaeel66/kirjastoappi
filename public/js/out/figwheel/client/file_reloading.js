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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__45658_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__45658_SHARP_));
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
var seq__45659 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__45660 = null;
var count__45661 = (0);
var i__45662 = (0);
while(true){
if((i__45662 < count__45661)){
var n = cljs.core._nth.call(null,chunk__45660,i__45662);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__45663 = seq__45659;
var G__45664 = chunk__45660;
var G__45665 = count__45661;
var G__45666 = (i__45662 + (1));
seq__45659 = G__45663;
chunk__45660 = G__45664;
count__45661 = G__45665;
i__45662 = G__45666;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__45659);
if(temp__5735__auto__){
var seq__45659__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45659__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__45659__$1);
var G__45667 = cljs.core.chunk_rest.call(null,seq__45659__$1);
var G__45668 = c__4609__auto__;
var G__45669 = cljs.core.count.call(null,c__4609__auto__);
var G__45670 = (0);
seq__45659 = G__45667;
chunk__45660 = G__45668;
count__45661 = G__45669;
i__45662 = G__45670;
continue;
} else {
var n = cljs.core.first.call(null,seq__45659__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__45671 = cljs.core.next.call(null,seq__45659__$1);
var G__45672 = null;
var G__45673 = (0);
var G__45674 = (0);
seq__45659 = G__45671;
chunk__45660 = G__45672;
count__45661 = G__45673;
i__45662 = G__45674;
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
return cljs.core.some.call(null,(function (p__45675){
var vec__45676 = p__45675;
var _ = cljs.core.nth.call(null,vec__45676,(0),null);
var v = cljs.core.nth.call(null,vec__45676,(1),null);
var and__4174__auto__ = v;
if(cljs.core.truth_(and__4174__auto__)){
return v.call(null,dep);
} else {
return and__4174__auto__;
}
}),cljs.core.filter.call(null,(function (p__45679){
var vec__45680 = p__45679;
var k = cljs.core.nth.call(null,vec__45680,(0),null);
var v = cljs.core.nth.call(null,vec__45680,(1),null);
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

var seq__45692_45700 = cljs.core.seq.call(null,deps);
var chunk__45693_45701 = null;
var count__45694_45702 = (0);
var i__45695_45703 = (0);
while(true){
if((i__45695_45703 < count__45694_45702)){
var dep_45704 = cljs.core._nth.call(null,chunk__45693_45701,i__45695_45703);
if(cljs.core.truth_((function (){var and__4174__auto__ = dep_45704;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_45704));
} else {
return and__4174__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_45704,(depth + (1)),state);
} else {
}


var G__45705 = seq__45692_45700;
var G__45706 = chunk__45693_45701;
var G__45707 = count__45694_45702;
var G__45708 = (i__45695_45703 + (1));
seq__45692_45700 = G__45705;
chunk__45693_45701 = G__45706;
count__45694_45702 = G__45707;
i__45695_45703 = G__45708;
continue;
} else {
var temp__5735__auto___45709 = cljs.core.seq.call(null,seq__45692_45700);
if(temp__5735__auto___45709){
var seq__45692_45710__$1 = temp__5735__auto___45709;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45692_45710__$1)){
var c__4609__auto___45711 = cljs.core.chunk_first.call(null,seq__45692_45710__$1);
var G__45712 = cljs.core.chunk_rest.call(null,seq__45692_45710__$1);
var G__45713 = c__4609__auto___45711;
var G__45714 = cljs.core.count.call(null,c__4609__auto___45711);
var G__45715 = (0);
seq__45692_45700 = G__45712;
chunk__45693_45701 = G__45713;
count__45694_45702 = G__45714;
i__45695_45703 = G__45715;
continue;
} else {
var dep_45716 = cljs.core.first.call(null,seq__45692_45710__$1);
if(cljs.core.truth_((function (){var and__4174__auto__ = dep_45716;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_45716));
} else {
return and__4174__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_45716,(depth + (1)),state);
} else {
}


var G__45717 = cljs.core.next.call(null,seq__45692_45710__$1);
var G__45718 = null;
var G__45719 = (0);
var G__45720 = (0);
seq__45692_45700 = G__45717;
chunk__45693_45701 = G__45718;
count__45694_45702 = G__45719;
i__45695_45703 = G__45720;
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
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__45696){
var vec__45697 = p__45696;
var seq__45698 = cljs.core.seq.call(null,vec__45697);
var first__45699 = cljs.core.first.call(null,seq__45698);
var seq__45698__$1 = cljs.core.next.call(null,seq__45698);
var x = first__45699;
var xs = seq__45698__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__45683_SHARP_){
return clojure.set.difference.call(null,p1__45683_SHARP_,x);
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
var seq__45721 = cljs.core.seq.call(null,provides);
var chunk__45722 = null;
var count__45723 = (0);
var i__45724 = (0);
while(true){
if((i__45724 < count__45723)){
var prov = cljs.core._nth.call(null,chunk__45722,i__45724);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__45733_45741 = cljs.core.seq.call(null,requires);
var chunk__45734_45742 = null;
var count__45735_45743 = (0);
var i__45736_45744 = (0);
while(true){
if((i__45736_45744 < count__45735_45743)){
var req_45745 = cljs.core._nth.call(null,chunk__45734_45742,i__45736_45744);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45745,prov);


var G__45746 = seq__45733_45741;
var G__45747 = chunk__45734_45742;
var G__45748 = count__45735_45743;
var G__45749 = (i__45736_45744 + (1));
seq__45733_45741 = G__45746;
chunk__45734_45742 = G__45747;
count__45735_45743 = G__45748;
i__45736_45744 = G__45749;
continue;
} else {
var temp__5735__auto___45750 = cljs.core.seq.call(null,seq__45733_45741);
if(temp__5735__auto___45750){
var seq__45733_45751__$1 = temp__5735__auto___45750;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45733_45751__$1)){
var c__4609__auto___45752 = cljs.core.chunk_first.call(null,seq__45733_45751__$1);
var G__45753 = cljs.core.chunk_rest.call(null,seq__45733_45751__$1);
var G__45754 = c__4609__auto___45752;
var G__45755 = cljs.core.count.call(null,c__4609__auto___45752);
var G__45756 = (0);
seq__45733_45741 = G__45753;
chunk__45734_45742 = G__45754;
count__45735_45743 = G__45755;
i__45736_45744 = G__45756;
continue;
} else {
var req_45757 = cljs.core.first.call(null,seq__45733_45751__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45757,prov);


var G__45758 = cljs.core.next.call(null,seq__45733_45751__$1);
var G__45759 = null;
var G__45760 = (0);
var G__45761 = (0);
seq__45733_45741 = G__45758;
chunk__45734_45742 = G__45759;
count__45735_45743 = G__45760;
i__45736_45744 = G__45761;
continue;
}
} else {
}
}
break;
}


var G__45762 = seq__45721;
var G__45763 = chunk__45722;
var G__45764 = count__45723;
var G__45765 = (i__45724 + (1));
seq__45721 = G__45762;
chunk__45722 = G__45763;
count__45723 = G__45764;
i__45724 = G__45765;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__45721);
if(temp__5735__auto__){
var seq__45721__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45721__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__45721__$1);
var G__45766 = cljs.core.chunk_rest.call(null,seq__45721__$1);
var G__45767 = c__4609__auto__;
var G__45768 = cljs.core.count.call(null,c__4609__auto__);
var G__45769 = (0);
seq__45721 = G__45766;
chunk__45722 = G__45767;
count__45723 = G__45768;
i__45724 = G__45769;
continue;
} else {
var prov = cljs.core.first.call(null,seq__45721__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__45737_45770 = cljs.core.seq.call(null,requires);
var chunk__45738_45771 = null;
var count__45739_45772 = (0);
var i__45740_45773 = (0);
while(true){
if((i__45740_45773 < count__45739_45772)){
var req_45774 = cljs.core._nth.call(null,chunk__45738_45771,i__45740_45773);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45774,prov);


var G__45775 = seq__45737_45770;
var G__45776 = chunk__45738_45771;
var G__45777 = count__45739_45772;
var G__45778 = (i__45740_45773 + (1));
seq__45737_45770 = G__45775;
chunk__45738_45771 = G__45776;
count__45739_45772 = G__45777;
i__45740_45773 = G__45778;
continue;
} else {
var temp__5735__auto___45779__$1 = cljs.core.seq.call(null,seq__45737_45770);
if(temp__5735__auto___45779__$1){
var seq__45737_45780__$1 = temp__5735__auto___45779__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45737_45780__$1)){
var c__4609__auto___45781 = cljs.core.chunk_first.call(null,seq__45737_45780__$1);
var G__45782 = cljs.core.chunk_rest.call(null,seq__45737_45780__$1);
var G__45783 = c__4609__auto___45781;
var G__45784 = cljs.core.count.call(null,c__4609__auto___45781);
var G__45785 = (0);
seq__45737_45770 = G__45782;
chunk__45738_45771 = G__45783;
count__45739_45772 = G__45784;
i__45740_45773 = G__45785;
continue;
} else {
var req_45786 = cljs.core.first.call(null,seq__45737_45780__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45786,prov);


var G__45787 = cljs.core.next.call(null,seq__45737_45780__$1);
var G__45788 = null;
var G__45789 = (0);
var G__45790 = (0);
seq__45737_45770 = G__45787;
chunk__45738_45771 = G__45788;
count__45739_45772 = G__45789;
i__45740_45773 = G__45790;
continue;
}
} else {
}
}
break;
}


var G__45791 = cljs.core.next.call(null,seq__45721__$1);
var G__45792 = null;
var G__45793 = (0);
var G__45794 = (0);
seq__45721 = G__45791;
chunk__45722 = G__45792;
count__45723 = G__45793;
i__45724 = G__45794;
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
var seq__45795_45799 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__45796_45800 = null;
var count__45797_45801 = (0);
var i__45798_45802 = (0);
while(true){
if((i__45798_45802 < count__45797_45801)){
var ns_45803 = cljs.core._nth.call(null,chunk__45796_45800,i__45798_45802);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_45803);


var G__45804 = seq__45795_45799;
var G__45805 = chunk__45796_45800;
var G__45806 = count__45797_45801;
var G__45807 = (i__45798_45802 + (1));
seq__45795_45799 = G__45804;
chunk__45796_45800 = G__45805;
count__45797_45801 = G__45806;
i__45798_45802 = G__45807;
continue;
} else {
var temp__5735__auto___45808 = cljs.core.seq.call(null,seq__45795_45799);
if(temp__5735__auto___45808){
var seq__45795_45809__$1 = temp__5735__auto___45808;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45795_45809__$1)){
var c__4609__auto___45810 = cljs.core.chunk_first.call(null,seq__45795_45809__$1);
var G__45811 = cljs.core.chunk_rest.call(null,seq__45795_45809__$1);
var G__45812 = c__4609__auto___45810;
var G__45813 = cljs.core.count.call(null,c__4609__auto___45810);
var G__45814 = (0);
seq__45795_45799 = G__45811;
chunk__45796_45800 = G__45812;
count__45797_45801 = G__45813;
i__45798_45802 = G__45814;
continue;
} else {
var ns_45815 = cljs.core.first.call(null,seq__45795_45809__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_45815);


var G__45816 = cljs.core.next.call(null,seq__45795_45809__$1);
var G__45817 = null;
var G__45818 = (0);
var G__45819 = (0);
seq__45795_45799 = G__45816;
chunk__45796_45800 = G__45817;
count__45797_45801 = G__45818;
i__45798_45802 = G__45819;
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
var G__45820__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__45820 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45821__i = 0, G__45821__a = new Array(arguments.length -  0);
while (G__45821__i < G__45821__a.length) {G__45821__a[G__45821__i] = arguments[G__45821__i + 0]; ++G__45821__i;}
  args = new cljs.core.IndexedSeq(G__45821__a,0,null);
} 
return G__45820__delegate.call(this,args);};
G__45820.cljs$lang$maxFixedArity = 0;
G__45820.cljs$lang$applyTo = (function (arglist__45822){
var args = cljs.core.seq(arglist__45822);
return G__45820__delegate(args);
});
G__45820.cljs$core$IFn$_invoke$arity$variadic = G__45820__delegate;
return G__45820;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__45823_SHARP_,p2__45824_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__45823_SHARP_)),p2__45824_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__45825_SHARP_,p2__45826_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__45825_SHARP_),p2__45826_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__45827 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__45827.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__45827.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__45827;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e45828){if((e45828 instanceof Error)){
var e = e45828;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e45828;

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
}catch (e45829){if((e45829 instanceof Error)){
var e = e45829;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e45829;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__45830 = cljs.core._EQ_;
var expr__45831 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__45830.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__45831))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__45830.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__45831))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__45830.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__45831))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__45833,callback){
var map__45834 = p__45833;
var map__45834__$1 = (((((!((map__45834 == null))))?(((((map__45834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45834):map__45834);
var file_msg = map__45834__$1;
var request_url = cljs.core.get.call(null,map__45834__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_45872){
var state_val_45873 = (state_45872[(1)]);
if((state_val_45873 === (7))){
var inst_45868 = (state_45872[(2)]);
var state_45872__$1 = state_45872;
var statearr_45874_45900 = state_45872__$1;
(statearr_45874_45900[(2)] = inst_45868);

(statearr_45874_45900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (1))){
var state_45872__$1 = state_45872;
var statearr_45875_45901 = state_45872__$1;
(statearr_45875_45901[(2)] = null);

(statearr_45875_45901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (4))){
var inst_45838 = (state_45872[(7)]);
var inst_45838__$1 = (state_45872[(2)]);
var state_45872__$1 = (function (){var statearr_45876 = state_45872;
(statearr_45876[(7)] = inst_45838__$1);

return statearr_45876;
})();
if(cljs.core.truth_(inst_45838__$1)){
var statearr_45877_45902 = state_45872__$1;
(statearr_45877_45902[(1)] = (5));

} else {
var statearr_45878_45903 = state_45872__$1;
(statearr_45878_45903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (15))){
var inst_45853 = (state_45872[(8)]);
var inst_45851 = (state_45872[(9)]);
var inst_45855 = inst_45853.call(null,inst_45851);
var state_45872__$1 = state_45872;
var statearr_45879_45904 = state_45872__$1;
(statearr_45879_45904[(2)] = inst_45855);

(statearr_45879_45904[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (13))){
var inst_45862 = (state_45872[(2)]);
var state_45872__$1 = state_45872;
var statearr_45880_45905 = state_45872__$1;
(statearr_45880_45905[(2)] = inst_45862);

(statearr_45880_45905[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (6))){
var state_45872__$1 = state_45872;
var statearr_45881_45906 = state_45872__$1;
(statearr_45881_45906[(2)] = null);

(statearr_45881_45906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (17))){
var inst_45859 = (state_45872[(2)]);
var state_45872__$1 = state_45872;
var statearr_45882_45907 = state_45872__$1;
(statearr_45882_45907[(2)] = inst_45859);

(statearr_45882_45907[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (3))){
var inst_45870 = (state_45872[(2)]);
var state_45872__$1 = state_45872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45872__$1,inst_45870);
} else {
if((state_val_45873 === (12))){
var state_45872__$1 = state_45872;
var statearr_45883_45908 = state_45872__$1;
(statearr_45883_45908[(2)] = null);

(statearr_45883_45908[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (2))){
var state_45872__$1 = state_45872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45872__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_45873 === (11))){
var inst_45843 = (state_45872[(10)]);
var inst_45849 = figwheel.client.file_reloading.blocking_load.call(null,inst_45843);
var state_45872__$1 = state_45872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45872__$1,(14),inst_45849);
} else {
if((state_val_45873 === (9))){
var inst_45843 = (state_45872[(10)]);
var state_45872__$1 = state_45872;
if(cljs.core.truth_(inst_45843)){
var statearr_45884_45909 = state_45872__$1;
(statearr_45884_45909[(1)] = (11));

} else {
var statearr_45885_45910 = state_45872__$1;
(statearr_45885_45910[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (5))){
var inst_45844 = (state_45872[(11)]);
var inst_45838 = (state_45872[(7)]);
var inst_45843 = cljs.core.nth.call(null,inst_45838,(0),null);
var inst_45844__$1 = cljs.core.nth.call(null,inst_45838,(1),null);
var state_45872__$1 = (function (){var statearr_45886 = state_45872;
(statearr_45886[(10)] = inst_45843);

(statearr_45886[(11)] = inst_45844__$1);

return statearr_45886;
})();
if(cljs.core.truth_(inst_45844__$1)){
var statearr_45887_45911 = state_45872__$1;
(statearr_45887_45911[(1)] = (8));

} else {
var statearr_45888_45912 = state_45872__$1;
(statearr_45888_45912[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (14))){
var inst_45843 = (state_45872[(10)]);
var inst_45853 = (state_45872[(8)]);
var inst_45851 = (state_45872[(2)]);
var inst_45852 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_45853__$1 = cljs.core.get.call(null,inst_45852,inst_45843);
var state_45872__$1 = (function (){var statearr_45889 = state_45872;
(statearr_45889[(8)] = inst_45853__$1);

(statearr_45889[(9)] = inst_45851);

return statearr_45889;
})();
if(cljs.core.truth_(inst_45853__$1)){
var statearr_45890_45913 = state_45872__$1;
(statearr_45890_45913[(1)] = (15));

} else {
var statearr_45891_45914 = state_45872__$1;
(statearr_45891_45914[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (16))){
var inst_45851 = (state_45872[(9)]);
var inst_45857 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_45851);
var state_45872__$1 = state_45872;
var statearr_45892_45915 = state_45872__$1;
(statearr_45892_45915[(2)] = inst_45857);

(statearr_45892_45915[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (10))){
var inst_45864 = (state_45872[(2)]);
var state_45872__$1 = (function (){var statearr_45893 = state_45872;
(statearr_45893[(12)] = inst_45864);

return statearr_45893;
})();
var statearr_45894_45916 = state_45872__$1;
(statearr_45894_45916[(2)] = null);

(statearr_45894_45916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (8))){
var inst_45844 = (state_45872[(11)]);
var inst_45846 = eval(inst_45844);
var state_45872__$1 = state_45872;
var statearr_45895_45917 = state_45872__$1;
(statearr_45895_45917[(2)] = inst_45846);

(statearr_45895_45917[(1)] = (10));


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
var statearr_45896 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45896[(0)] = figwheel$client$file_reloading$state_machine__29061__auto__);

(statearr_45896[(1)] = (1));

return statearr_45896;
});
var figwheel$client$file_reloading$state_machine__29061__auto____1 = (function (state_45872){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_45872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e45897){if((e45897 instanceof Object)){
var ex__29064__auto__ = e45897;
var statearr_45898_45918 = state_45872;
(statearr_45898_45918[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45919 = state_45872;
state_45872 = G__45919;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29061__auto__ = function(state_45872){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29061__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29061__auto____1.call(this,state_45872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29061__auto____0;
figwheel$client$file_reloading$state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29061__auto____1;
return figwheel$client$file_reloading$state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_45899 = f__29156__auto__.call(null);
(statearr_45899[(6)] = c__29155__auto__);

return statearr_45899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29157__auto__);
}));

return c__29155__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__45921 = arguments.length;
switch (G__45921) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__45923,callback){
var map__45924 = p__45923;
var map__45924__$1 = (((((!((map__45924 == null))))?(((((map__45924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45924):map__45924);
var file_msg = map__45924__$1;
var namespace = cljs.core.get.call(null,map__45924__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__45926){
var map__45927 = p__45926;
var map__45927__$1 = (((((!((map__45927 == null))))?(((((map__45927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45927):map__45927);
var file_msg = map__45927__$1;
var namespace = cljs.core.get.call(null,map__45927__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__45929){
var map__45930 = p__45929;
var map__45930__$1 = (((((!((map__45930 == null))))?(((((map__45930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45930):map__45930);
var file_msg = map__45930__$1;
var namespace = cljs.core.get.call(null,map__45930__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__45932,callback){
var map__45933 = p__45932;
var map__45933__$1 = (((((!((map__45933 == null))))?(((((map__45933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45933):map__45933);
var file_msg = map__45933__$1;
var request_url = cljs.core.get.call(null,map__45933__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__45933__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__29155__auto___45983 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_45968){
var state_val_45969 = (state_45968[(1)]);
if((state_val_45969 === (1))){
var inst_45942 = cljs.core.seq.call(null,files);
var inst_45943 = cljs.core.first.call(null,inst_45942);
var inst_45944 = cljs.core.next.call(null,inst_45942);
var inst_45945 = files;
var state_45968__$1 = (function (){var statearr_45970 = state_45968;
(statearr_45970[(7)] = inst_45944);

(statearr_45970[(8)] = inst_45943);

(statearr_45970[(9)] = inst_45945);

return statearr_45970;
})();
var statearr_45971_45984 = state_45968__$1;
(statearr_45971_45984[(2)] = null);

(statearr_45971_45984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45969 === (2))){
var inst_45951 = (state_45968[(10)]);
var inst_45945 = (state_45968[(9)]);
var inst_45950 = cljs.core.seq.call(null,inst_45945);
var inst_45951__$1 = cljs.core.first.call(null,inst_45950);
var inst_45952 = cljs.core.next.call(null,inst_45950);
var inst_45953 = (inst_45951__$1 == null);
var inst_45954 = cljs.core.not.call(null,inst_45953);
var state_45968__$1 = (function (){var statearr_45972 = state_45968;
(statearr_45972[(10)] = inst_45951__$1);

(statearr_45972[(11)] = inst_45952);

return statearr_45972;
})();
if(inst_45954){
var statearr_45973_45985 = state_45968__$1;
(statearr_45973_45985[(1)] = (4));

} else {
var statearr_45974_45986 = state_45968__$1;
(statearr_45974_45986[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45969 === (3))){
var inst_45966 = (state_45968[(2)]);
var state_45968__$1 = state_45968;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45968__$1,inst_45966);
} else {
if((state_val_45969 === (4))){
var inst_45951 = (state_45968[(10)]);
var inst_45956 = figwheel.client.file_reloading.reload_js_file.call(null,inst_45951);
var state_45968__$1 = state_45968;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45968__$1,(7),inst_45956);
} else {
if((state_val_45969 === (5))){
var inst_45962 = cljs.core.async.close_BANG_.call(null,out);
var state_45968__$1 = state_45968;
var statearr_45975_45987 = state_45968__$1;
(statearr_45975_45987[(2)] = inst_45962);

(statearr_45975_45987[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45969 === (6))){
var inst_45964 = (state_45968[(2)]);
var state_45968__$1 = state_45968;
var statearr_45976_45988 = state_45968__$1;
(statearr_45976_45988[(2)] = inst_45964);

(statearr_45976_45988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45969 === (7))){
var inst_45952 = (state_45968[(11)]);
var inst_45958 = (state_45968[(2)]);
var inst_45959 = cljs.core.async.put_BANG_.call(null,out,inst_45958);
var inst_45945 = inst_45952;
var state_45968__$1 = (function (){var statearr_45977 = state_45968;
(statearr_45977[(9)] = inst_45945);

(statearr_45977[(12)] = inst_45959);

return statearr_45977;
})();
var statearr_45978_45989 = state_45968__$1;
(statearr_45978_45989[(2)] = null);

(statearr_45978_45989[(1)] = (2));


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
var statearr_45979 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45979[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29061__auto__);

(statearr_45979[(1)] = (1));

return statearr_45979;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29061__auto____1 = (function (state_45968){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_45968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e45980){if((e45980 instanceof Object)){
var ex__29064__auto__ = e45980;
var statearr_45981_45990 = state_45968;
(statearr_45981_45990[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45991 = state_45968;
state_45968 = G__45991;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29061__auto__ = function(state_45968){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29061__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29061__auto____1.call(this,state_45968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29061__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29061__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_45982 = f__29156__auto__.call(null);
(statearr_45982[(6)] = c__29155__auto___45983);

return statearr_45982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29157__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__45992,opts){
var map__45993 = p__45992;
var map__45993__$1 = (((((!((map__45993 == null))))?(((((map__45993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45993):map__45993);
var eval_body = cljs.core.get.call(null,map__45993__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__45993__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e45995){var e = e45995;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__45996_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__45996_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__45997){
var vec__45998 = p__45997;
var k = cljs.core.nth.call(null,vec__45998,(0),null);
var v = cljs.core.nth.call(null,vec__45998,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__46001){
var vec__46002 = p__46001;
var k = cljs.core.nth.call(null,vec__46002,(0),null);
var v = cljs.core.nth.call(null,vec__46002,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__46008,p__46009){
var map__46010 = p__46008;
var map__46010__$1 = (((((!((map__46010 == null))))?(((((map__46010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46010):map__46010);
var opts = map__46010__$1;
var before_jsload = cljs.core.get.call(null,map__46010__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__46010__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__46010__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__46011 = p__46009;
var map__46011__$1 = (((((!((map__46011 == null))))?(((((map__46011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46011):map__46011);
var msg = map__46011__$1;
var files = cljs.core.get.call(null,map__46011__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__46011__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__46011__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29155__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_46165){
var state_val_46166 = (state_46165[(1)]);
if((state_val_46166 === (7))){
var inst_46025 = (state_46165[(7)]);
var inst_46026 = (state_46165[(8)]);
var inst_46028 = (state_46165[(9)]);
var inst_46027 = (state_46165[(10)]);
var inst_46033 = cljs.core._nth.call(null,inst_46026,inst_46028);
var inst_46034 = figwheel.client.file_reloading.eval_body.call(null,inst_46033,opts);
var inst_46035 = (inst_46028 + (1));
var tmp46167 = inst_46025;
var tmp46168 = inst_46026;
var tmp46169 = inst_46027;
var inst_46025__$1 = tmp46167;
var inst_46026__$1 = tmp46168;
var inst_46027__$1 = tmp46169;
var inst_46028__$1 = inst_46035;
var state_46165__$1 = (function (){var statearr_46170 = state_46165;
(statearr_46170[(7)] = inst_46025__$1);

(statearr_46170[(8)] = inst_46026__$1);

(statearr_46170[(9)] = inst_46028__$1);

(statearr_46170[(10)] = inst_46027__$1);

(statearr_46170[(11)] = inst_46034);

return statearr_46170;
})();
var statearr_46171_46254 = state_46165__$1;
(statearr_46171_46254[(2)] = null);

(statearr_46171_46254[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46166 === (20))){
var inst_46068 = (state_46165[(12)]);
var inst_46076 = figwheel.client.file_reloading.sort_files.call(null,inst_46068);
var state_46165__$1 = state_46165;
var statearr_46172_46255 = state_46165__$1;
(statearr_46172_46255[(2)] = inst_46076);

(statearr_46172_46255[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46166 === (27))){
var state_46165__$1 = state_46165;
var statearr_46173_46256 = state_46165__$1;
(statearr_46173_46256[(2)] = null);

(statearr_46173_46256[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46166 === (1))){
var inst_46017 = (state_46165[(13)]);
var inst_46014 = before_jsload.call(null,files);
var inst_46015 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_46016 = (function (){return (function (p1__46005_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__46005_SHARP_);
});
})();
var inst_46017__$1 = cljs.core.filter.call(null,inst_46016,files);
var inst_46018 = cljs.core.not_empty.call(null,inst_46017__$1);
var state_46165__$1 = (function (){var statearr_46174 = state_46165;
(statearr_46174[(14)] = inst_46014);

(statearr_46174[(15)] = inst_46015);

(statearr_46174[(13)] = inst_46017__$1);

return statearr_46174;
})();
if(cljs.core.truth_(inst_46018)){
var statearr_46175_46257 = state_46165__$1;
(statearr_46175_46257[(1)] = (2));

} else {
var statearr_46176_46258 = state_46165__$1;
(statearr_46176_46258[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46166 === (24))){
var state_46165__$1 = state_46165;
var statearr_46177_46259 = state_46165__$1;
(statearr_46177_46259[(2)] = null);

(statearr_46177_46259[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46166 === (39))){
var inst_46118 = (state_46165[(16)]);
var state_46165__$1 = state_46165;
var statearr_46178_46260 = state_46165__$1;
(statearr_46178_46260[(2)] = inst_46118);

(statearr_46178_46260[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46166 === (46))){
var inst_46160 = (state_46165[(2)]);
var state_46165__$1 = state_46165;
var statearr_46179_46261 = state_46165__$1;
(statearr_46179_46261[(2)] = inst_46160);

(statearr_46179_46261[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46166 === (4))){
var inst_46062 = (state_46165[(2)]);
var inst_46063 = cljs.core.List.EMPTY;
var inst_46064 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_46063);
var inst_46065 = (function (){return (function (p1__46006_SHARP_){
var and__4174__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__46006_SHARP_);
if(cljs.core.truth_(and__4174__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__46006_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__46006_SHARP_))));
} else {
return and__4174__auto__;
}
});
})();
var inst_46066 = cljs.core.filter.call(null,inst_46065,files);
var inst_46067 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_46068 = cljs.core.concat.call(null,inst_46066,inst_46067);
var state_46165__$1 = (function (){var statearr_46180 = state_46165;
(statearr_46180[(12)] = inst_46068);

(statearr_46180[(17)] = inst_46064);

(statearr_46180[(18)] = inst_46062);

return statearr_46180;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_46181_46262 = state_46165__$1;
(statearr_46181_46262[(1)] = (16));

} else {
var statearr_46182_46263 = state_46165__$1;
(statearr_46182_46263[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46166 === (15))){
var inst_46052 = (state_46165[(2)]);
var state_46165__$1 = state_46165;
var statearr_46183_46264 = state_46165__$1;
(statearr_46183_46264[(2)] = inst_46052);

(statearr_46183_46264[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46166 === (21))){
var inst_46078 = (state_46165[(19)]);
var inst_46078__$1 = (state_46165[(2)]);
var inst_46079 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_46078__$1);
var state_46165__$1 = (function (){var statearr_46184 = state_46165;
(statearr_46184[(19)] = inst_46078__$1);

return statearr_46184;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46165__$1,(22),inst_46079);
} else {
if((state_val_46166 === (31))){
var inst_46163 = (state_46165[(2)]);
var state_46165__$1 = state_46165;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46165__$1,inst_46163);
} else {
if((state_val_46166 === (32))){
var inst_46118 = (state_46165[(16)]);
var inst_46123 = inst_46118.cljs$lang$protocol_mask$partition0$;
var inst_46124 = (inst_46123 & (64));
var inst_46125 = inst_46118.cljs$core$ISeq$;
var inst_46126 = (cljs.core.PROTOCOL_SENTINEL === inst_46125);
var inst_46127 = ((inst_46124) || (inst_46126));
var state_46165__$1 = state_46165;
if(cljs.core.truth_(inst_46127)){
var statearr_46185_46265 = state_46165__$1;
(statearr_46185_46265[(1)] = (35));

} else {
var statearr_46186_46266 = state_46165__$1;
(statearr_46186_46266[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46166 === (40))){
var inst_46140 = (state_46165[(20)]);
var inst_46139 = (state_46165[(2)]);
var inst_46140__$1 = cljs.core.get.call(null,inst_46139,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_46141 = cljs.core.get.call(null,inst_46139,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_46142 = cljs.core.not_empty.call(null,inst_46140__$1);
var state_46165__$1 = (function (){var statearr_46187 = state_46165;
(statearr_46187[(21)] = inst_46141);

(statearr_46187[(20)] = inst_46140__$1);

return statearr_46187;
})();
if(cljs.core.truth_(inst_46142)){
var statearr_46188_46267 = state_46165__$1;
(statearr_46188_46267[(1)] = (41));

} else {
var statearr_46189_46268 = state_46165__$1;
(statearr_46189_46268[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46166 === (33))){
var state_46165__$1 = state_46165;
var statearr_46190_46269 = state_46165__$1;
(statearr_46190_46269[(2)] = false);

(statearr_46190_46269[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46166 === (13))){
var inst_46038 = (state_46165[(22)]);
var inst_46042 = cljs.core.chunk_first.call(null,inst_46038);
var inst_46043 = cljs.core.chunk_rest.call(null,inst_46038);
var inst_46044 = cljs.core.count.call(null,inst_46042);
var inst_46025 = inst_46043;
var inst_46026 = inst_46042;
var inst_46027 = inst_46044;
var inst_46028 = (0);
var state_46165__$1 = (function (){var statearr_46191 = state_46165;
(statearr_46191[(7)] = inst_46025);

(statearr_46191[(8)] = inst_46026);

(statearr_46191[(9)] = inst_46028);

(statearr_46191[(10)] = inst_46027);

return statearr_46191;
})();
var statearr_46192_46270 = state_46165__$1;
(statearr_46192_46270[(2)] = null);

(statearr_46192_46270[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46166 === (22))){
var inst_46086 = (state_46165[(23)]);
var inst_46082 = (state_46165[(24)]);
var inst_46078 = (state_46165[(19)]);
var inst_46081 = (state_46165[(25)]);
var inst_46081__$1 = (state_46165[(2)]);
var inst_46082__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_46081__$1);
var inst_46083 = (function (){var all_files = inst_46078;
var res_SINGLEQUOTE_ = inst_46081__$1;
var res = inst_46082__$1;
return (function (p1__46007_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__46007_SHARP_));
});
})();
var inst_46084 = cljs.core.filter.call(null,inst_46083,inst_46081__$1);
var inst_46085 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_46086__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_46085);
var inst_46087 = cljs.core.not_empty.call(null,inst_46086__$1);
var state_46165__$1 = (function (){var statearr_46193 = state_46165;
(statearr_46193[(23)] = inst_46086__$1);

(statearr_46193[(24)] = inst_46082__$1);

(statearr_46193[(26)] = inst_46084);

(statearr_46193[(25)] = inst_46081__$1);

return statearr_46193;
})();
if(cljs.core.truth_(inst_46087)){
var statearr_46194_46271 = state_46165__$1;
(statearr_46194_46271[(1)] = (23));

} else {
var statearr_46195_46272 = state_46165__$1;
(statearr_46195_46272[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46166 === (36))){
var state_46165__$1 = state_46165;
var statearr_46196_46273 = state_46165__$1;
(statearr_46196_46273[(2)] = false);

(statearr_46196_46273[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46166 === (41))){
var inst_46140 = (state_46165[(20)]);
var inst_46144 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_46145 = cljs.core.map.call(null,inst_46144,inst_46140);
var inst_46146 = cljs.core.pr_str.call(null,inst_46145);
var inst_46147 = ["figwheel-no-load meta-data: ",inst_46146].join('');
var inst_46148 = figwheel.client.utils.log.call(null,inst_46147);
var state_46165__$1 = state_46165;
var statearr_46197_46274 = state_46165__$1;
(statearr_46197_46274[(2)] = inst_46148);

(statearr_46197_46274[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46166 === (43))){
var inst_46141 = (state_46165[(21)]);
var inst_46151 = (state_46165[(2)]);
var inst_46152 = cljs.core.not_empty.call(null,inst_46141);
var state_46165__$1 = (function (){var statearr_46198 = state_46165;
(statearr_46198[(27)] = inst_46151);

return statearr_46198;
})();
if(cljs.core.truth_(inst_46152)){
var statearr_46199_46275 = state_46165__$1;
(statearr_46199_46275[(1)] = (44));

} else {
var statearr_46200_46276 = state_46165__$1;
(statearr_46200_46276[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46166 === (29))){
var inst_46086 = (state_46165[(23)]);
var inst_46082 = (state_46165[(24)]);
var inst_46084 = (state_46165[(26)]);
var inst_46118 = (state_46165[(16)]);
var inst_46078 = (state_46165[(19)]);
var inst_46081 = (state_46165[(25)]);
var inst_46114 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_46117 = (function (){var all_files = inst_46078;
var res_SINGLEQUOTE_ = inst_46081;
var res = inst_46082;
var files_not_loaded = inst_46084;
var dependencies_that_loaded = inst_46086;
return (function (p__46116){
var map__46201 = p__46116;
var map__46201__$1 = (((((!((map__46201 == null))))?(((((map__46201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46201):map__46201);
var namespace = cljs.core.get.call(null,map__46201__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
var inst_46118__$1 = cljs.core.group_by.call(null,inst_46117,inst_46084);
var inst_46120 = (inst_46118__$1 == null);
var inst_46121 = cljs.core.not.call(null,inst_46120);
var state_46165__$1 = (function (){var statearr_46203 = state_46165;
(statearr_46203[(16)] = inst_46118__$1);

(statearr_46203[(28)] = inst_46114);

return statearr_46203;
})();
if(inst_46121){
var statearr_46204_46277 = state_46165__$1;
(statearr_46204_46277[(1)] = (32));

} else {
var statearr_46205_46278 = state_46165__$1;
(statearr_46205_46278[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46166 === (44))){
var inst_46141 = (state_46165[(21)]);
var inst_46154 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_46141);
var inst_46155 = cljs.core.pr_str.call(null,inst_46154);
var inst_46156 = ["not required: ",inst_46155].join('');
var inst_46157 = figwheel.client.utils.log.call(null,inst_46156);
var state_46165__$1 = state_46165;
var statearr_46206_46279 = state_46165__$1;
(statearr_46206_46279[(2)] = inst_46157);

(statearr_46206_46279[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46166 === (6))){
var inst_46059 = (state_46165[(2)]);
var state_46165__$1 = state_46165;
var statearr_46207_46280 = state_46165__$1;
(statearr_46207_46280[(2)] = inst_46059);

(statearr_46207_46280[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46166 === (28))){
var inst_46084 = (state_46165[(26)]);
var inst_46111 = (state_46165[(2)]);
var inst_46112 = cljs.core.not_empty.call(null,inst_46084);
var state_46165__$1 = (function (){var statearr_46208 = state_46165;
(statearr_46208[(29)] = inst_46111);

return statearr_46208;
})();
if(cljs.core.truth_(inst_46112)){
var statearr_46209_46281 = state_46165__$1;
(statearr_46209_46281[(1)] = (29));

} else {
var statearr_46210_46282 = state_46165__$1;
(statearr_46210_46282[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46166 === (25))){
var inst_46082 = (state_46165[(24)]);
var inst_46098 = (state_46165[(2)]);
var inst_46099 = cljs.core.not_empty.call(null,inst_46082);
var state_46165__$1 = (function (){var statearr_46211 = state_46165;
(statearr_46211[(30)] = inst_46098);

return statearr_46211;
})();
if(cljs.core.truth_(inst_46099)){
var statearr_46212_46283 = state_46165__$1;
(statearr_46212_46283[(1)] = (26));

} else {
var statearr_46213_46284 = state_46165__$1;
(statearr_46213_46284[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46166 === (34))){
var inst_46134 = (state_46165[(2)]);
var state_46165__$1 = state_46165;
if(cljs.core.truth_(inst_46134)){
var statearr_46214_46285 = state_46165__$1;
(statearr_46214_46285[(1)] = (38));

} else {
var statearr_46215_46286 = state_46165__$1;
(statearr_46215_46286[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46166 === (17))){
var state_46165__$1 = state_46165;
var statearr_46216_46287 = state_46165__$1;
(statearr_46216_46287[(2)] = recompile_dependents);

(statearr_46216_46287[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46166 === (3))){
var state_46165__$1 = state_46165;
var statearr_46217_46288 = state_46165__$1;
(statearr_46217_46288[(2)] = null);

(statearr_46217_46288[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46166 === (12))){
var inst_46055 = (state_46165[(2)]);
var state_46165__$1 = state_46165;
var statearr_46218_46289 = state_46165__$1;
(statearr_46218_46289[(2)] = inst_46055);

(statearr_46218_46289[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46166 === (2))){
var inst_46017 = (state_46165[(13)]);
var inst_46024 = cljs.core.seq.call(null,inst_46017);
var inst_46025 = inst_46024;
var inst_46026 = null;
var inst_46027 = (0);
var inst_46028 = (0);
var state_46165__$1 = (function (){var statearr_46219 = state_46165;
(statearr_46219[(7)] = inst_46025);

(statearr_46219[(8)] = inst_46026);

(statearr_46219[(9)] = inst_46028);

(statearr_46219[(10)] = inst_46027);

return statearr_46219;
})();
var statearr_46220_46290 = state_46165__$1;
(statearr_46220_46290[(2)] = null);

(statearr_46220_46290[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46166 === (23))){
var inst_46086 = (state_46165[(23)]);
var inst_46082 = (state_46165[(24)]);
var inst_46084 = (state_46165[(26)]);
var inst_46078 = (state_46165[(19)]);
var inst_46081 = (state_46165[(25)]);
var inst_46089 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_46091 = (function (){var all_files = inst_46078;
var res_SINGLEQUOTE_ = inst_46081;
var res = inst_46082;
var files_not_loaded = inst_46084;
var dependencies_that_loaded = inst_46086;
return (function (p__46090){
var map__46221 = p__46090;
var map__46221__$1 = (((((!((map__46221 == null))))?(((((map__46221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46221):map__46221);
var request_url = cljs.core.get.call(null,map__46221__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_46092 = cljs.core.reverse.call(null,inst_46086);
var inst_46093 = cljs.core.map.call(null,inst_46091,inst_46092);
var inst_46094 = cljs.core.pr_str.call(null,inst_46093);
var inst_46095 = figwheel.client.utils.log.call(null,inst_46094);
var state_46165__$1 = (function (){var statearr_46223 = state_46165;
(statearr_46223[(31)] = inst_46089);

return statearr_46223;
})();
var statearr_46224_46291 = state_46165__$1;
(statearr_46224_46291[(2)] = inst_46095);

(statearr_46224_46291[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46166 === (35))){
var state_46165__$1 = state_46165;
var statearr_46225_46292 = state_46165__$1;
(statearr_46225_46292[(2)] = true);

(statearr_46225_46292[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46166 === (19))){
var inst_46068 = (state_46165[(12)]);
var inst_46074 = figwheel.client.file_reloading.expand_files.call(null,inst_46068);
var state_46165__$1 = state_46165;
var statearr_46226_46293 = state_46165__$1;
(statearr_46226_46293[(2)] = inst_46074);

(statearr_46226_46293[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46166 === (11))){
var state_46165__$1 = state_46165;
var statearr_46227_46294 = state_46165__$1;
(statearr_46227_46294[(2)] = null);

(statearr_46227_46294[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46166 === (9))){
var inst_46057 = (state_46165[(2)]);
var state_46165__$1 = state_46165;
var statearr_46228_46295 = state_46165__$1;
(statearr_46228_46295[(2)] = inst_46057);

(statearr_46228_46295[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46166 === (5))){
var inst_46028 = (state_46165[(9)]);
var inst_46027 = (state_46165[(10)]);
var inst_46030 = (inst_46028 < inst_46027);
var inst_46031 = inst_46030;
var state_46165__$1 = state_46165;
if(cljs.core.truth_(inst_46031)){
var statearr_46229_46296 = state_46165__$1;
(statearr_46229_46296[(1)] = (7));

} else {
var statearr_46230_46297 = state_46165__$1;
(statearr_46230_46297[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46166 === (14))){
var inst_46038 = (state_46165[(22)]);
var inst_46047 = cljs.core.first.call(null,inst_46038);
var inst_46048 = figwheel.client.file_reloading.eval_body.call(null,inst_46047,opts);
var inst_46049 = cljs.core.next.call(null,inst_46038);
var inst_46025 = inst_46049;
var inst_46026 = null;
var inst_46027 = (0);
var inst_46028 = (0);
var state_46165__$1 = (function (){var statearr_46231 = state_46165;
(statearr_46231[(7)] = inst_46025);

(statearr_46231[(8)] = inst_46026);

(statearr_46231[(9)] = inst_46028);

(statearr_46231[(32)] = inst_46048);

(statearr_46231[(10)] = inst_46027);

return statearr_46231;
})();
var statearr_46232_46298 = state_46165__$1;
(statearr_46232_46298[(2)] = null);

(statearr_46232_46298[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46166 === (45))){
var state_46165__$1 = state_46165;
var statearr_46233_46299 = state_46165__$1;
(statearr_46233_46299[(2)] = null);

(statearr_46233_46299[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46166 === (26))){
var inst_46086 = (state_46165[(23)]);
var inst_46082 = (state_46165[(24)]);
var inst_46084 = (state_46165[(26)]);
var inst_46078 = (state_46165[(19)]);
var inst_46081 = (state_46165[(25)]);
var inst_46101 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_46103 = (function (){var all_files = inst_46078;
var res_SINGLEQUOTE_ = inst_46081;
var res = inst_46082;
var files_not_loaded = inst_46084;
var dependencies_that_loaded = inst_46086;
return (function (p__46102){
var map__46234 = p__46102;
var map__46234__$1 = (((((!((map__46234 == null))))?(((((map__46234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46234):map__46234);
var namespace = cljs.core.get.call(null,map__46234__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__46234__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_46104 = cljs.core.map.call(null,inst_46103,inst_46082);
var inst_46105 = cljs.core.pr_str.call(null,inst_46104);
var inst_46106 = figwheel.client.utils.log.call(null,inst_46105);
var inst_46107 = (function (){var all_files = inst_46078;
var res_SINGLEQUOTE_ = inst_46081;
var res = inst_46082;
var files_not_loaded = inst_46084;
var dependencies_that_loaded = inst_46086;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_46108 = setTimeout(inst_46107,(10));
var state_46165__$1 = (function (){var statearr_46236 = state_46165;
(statearr_46236[(33)] = inst_46106);

(statearr_46236[(34)] = inst_46101);

return statearr_46236;
})();
var statearr_46237_46300 = state_46165__$1;
(statearr_46237_46300[(2)] = inst_46108);

(statearr_46237_46300[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46166 === (16))){
var state_46165__$1 = state_46165;
var statearr_46238_46301 = state_46165__$1;
(statearr_46238_46301[(2)] = reload_dependents);

(statearr_46238_46301[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46166 === (38))){
var inst_46118 = (state_46165[(16)]);
var inst_46136 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46118);
var state_46165__$1 = state_46165;
var statearr_46239_46302 = state_46165__$1;
(statearr_46239_46302[(2)] = inst_46136);

(statearr_46239_46302[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46166 === (30))){
var state_46165__$1 = state_46165;
var statearr_46240_46303 = state_46165__$1;
(statearr_46240_46303[(2)] = null);

(statearr_46240_46303[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46166 === (10))){
var inst_46038 = (state_46165[(22)]);
var inst_46040 = cljs.core.chunked_seq_QMARK_.call(null,inst_46038);
var state_46165__$1 = state_46165;
if(inst_46040){
var statearr_46241_46304 = state_46165__$1;
(statearr_46241_46304[(1)] = (13));

} else {
var statearr_46242_46305 = state_46165__$1;
(statearr_46242_46305[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46166 === (18))){
var inst_46072 = (state_46165[(2)]);
var state_46165__$1 = state_46165;
if(cljs.core.truth_(inst_46072)){
var statearr_46243_46306 = state_46165__$1;
(statearr_46243_46306[(1)] = (19));

} else {
var statearr_46244_46307 = state_46165__$1;
(statearr_46244_46307[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46166 === (42))){
var state_46165__$1 = state_46165;
var statearr_46245_46308 = state_46165__$1;
(statearr_46245_46308[(2)] = null);

(statearr_46245_46308[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46166 === (37))){
var inst_46131 = (state_46165[(2)]);
var state_46165__$1 = state_46165;
var statearr_46246_46309 = state_46165__$1;
(statearr_46246_46309[(2)] = inst_46131);

(statearr_46246_46309[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46166 === (8))){
var inst_46025 = (state_46165[(7)]);
var inst_46038 = (state_46165[(22)]);
var inst_46038__$1 = cljs.core.seq.call(null,inst_46025);
var state_46165__$1 = (function (){var statearr_46247 = state_46165;
(statearr_46247[(22)] = inst_46038__$1);

return statearr_46247;
})();
if(inst_46038__$1){
var statearr_46248_46310 = state_46165__$1;
(statearr_46248_46310[(1)] = (10));

} else {
var statearr_46249_46311 = state_46165__$1;
(statearr_46249_46311[(1)] = (11));

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
var statearr_46250 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46250[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29061__auto__);

(statearr_46250[(1)] = (1));

return statearr_46250;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29061__auto____1 = (function (state_46165){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_46165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e46251){if((e46251 instanceof Object)){
var ex__29064__auto__ = e46251;
var statearr_46252_46312 = state_46165;
(statearr_46252_46312[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46313 = state_46165;
state_46165 = G__46313;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29061__auto__ = function(state_46165){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29061__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29061__auto____1.call(this,state_46165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29061__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29061__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_46253 = f__29156__auto__.call(null);
(statearr_46253[(6)] = c__29155__auto__);

return statearr_46253;
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
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__46316,link){
var map__46317 = p__46316;
var map__46317__$1 = (((((!((map__46317 == null))))?(((((map__46317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46317):map__46317);
var file = cljs.core.get.call(null,map__46317__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__46314_SHARP_,p2__46315_SHARP_){
if(cljs.core._EQ_.call(null,p1__46314_SHARP_,p2__46315_SHARP_)){
return p1__46314_SHARP_;
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
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__46320){
var map__46321 = p__46320;
var map__46321__$1 = (((((!((map__46321 == null))))?(((((map__46321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46321):map__46321);
var match_length = cljs.core.get.call(null,map__46321__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__46321__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__46319_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__46319_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__46323_SHARP_,p2__46324_SHARP_){
return cljs.core.assoc.call(null,p1__46323_SHARP_,cljs.core.get.call(null,p2__46324_SHARP_,key),p2__46324_SHARP_);
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
var loaded_f_datas_46325 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_46325);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_46325);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__46326,p__46327){
var map__46328 = p__46326;
var map__46328__$1 = (((((!((map__46328 == null))))?(((((map__46328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46328):map__46328);
var on_cssload = cljs.core.get.call(null,map__46328__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__46329 = p__46327;
var map__46329__$1 = (((((!((map__46329 == null))))?(((((map__46329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46329):map__46329);
var files_msg = map__46329__$1;
var files = cljs.core.get.call(null,map__46329__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1589675444707
