// Compiled by ClojureScript 1.10.597 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('react_dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.imported !== 'undefined')){
} else {
reagent.dom.imported = null;
}
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__49231 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__49232 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__49232);

try{return reagent.dom.global$module$react_dom.render(comp.call(null),container,(function (){
var _STAR_always_update_STAR__orig_val__49233 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__49234 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__49234);

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__49233);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__49231);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__49236 = arguments.length;
switch (G__49236) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode(this$);
});
(reagent.impl.template.find_dom_node = reagent.dom.dom_node);
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__49238_49242 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__49239_49243 = null;
var count__49240_49244 = (0);
var i__49241_49245 = (0);
while(true){
if((i__49241_49245 < count__49240_49244)){
var v_49246 = cljs.core._nth.call(null,chunk__49239_49243,i__49241_49245);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_49246);


var G__49247 = seq__49238_49242;
var G__49248 = chunk__49239_49243;
var G__49249 = count__49240_49244;
var G__49250 = (i__49241_49245 + (1));
seq__49238_49242 = G__49247;
chunk__49239_49243 = G__49248;
count__49240_49244 = G__49249;
i__49241_49245 = G__49250;
continue;
} else {
var temp__5735__auto___49251 = cljs.core.seq.call(null,seq__49238_49242);
if(temp__5735__auto___49251){
var seq__49238_49252__$1 = temp__5735__auto___49251;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49238_49252__$1)){
var c__4609__auto___49253 = cljs.core.chunk_first.call(null,seq__49238_49252__$1);
var G__49254 = cljs.core.chunk_rest.call(null,seq__49238_49252__$1);
var G__49255 = c__4609__auto___49253;
var G__49256 = cljs.core.count.call(null,c__4609__auto___49253);
var G__49257 = (0);
seq__49238_49242 = G__49254;
chunk__49239_49243 = G__49255;
count__49240_49244 = G__49256;
i__49241_49245 = G__49257;
continue;
} else {
var v_49258 = cljs.core.first.call(null,seq__49238_49252__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_49258);


var G__49259 = cljs.core.next.call(null,seq__49238_49252__$1);
var G__49260 = null;
var G__49261 = (0);
var G__49262 = (0);
seq__49238_49242 = G__49259;
chunk__49239_49243 = G__49260;
count__49240_49244 = G__49261;
i__49241_49245 = G__49262;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1589677404035
