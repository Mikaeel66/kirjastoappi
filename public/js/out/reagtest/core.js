// Compiled by ClojureScript 1.10.597 {}
goog.provide('reagtest.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('day8.re_frame.http_fx');
goog.require('kehys.db');
goog.require('kehys.subs');
goog.require('kehys.events');
goog.require('ajax.core');
goog.require('clojure.edn');
var ret__4835__auto___48013 = reagtest.core.log = (function reagtest$core$log(_AMPERSAND_form,_AMPERSAND_env,msg){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),null,(1),null)),(new cljs.core.List(null,msg,null,(1),null)))));
});
(reagtest.core.log.cljs$lang$macro = true);

reagtest.core.dangerous = (function reagtest$core$dangerous(var_args){
var G__48015 = arguments.length;
switch (G__48015) {
case 2:
return reagtest.core.dangerous.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagtest.core.dangerous.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagtest.core.dangerous.cljs$core$IFn$_invoke$arity$2 = (function (comp,content){
return reagtest.core.dangerous.call(null,comp,null,content);
}));

(reagtest.core.dangerous.cljs$core$IFn$_invoke$arity$3 = (function (comp,props,content){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),content], null))], null);
}));

(reagtest.core.dangerous.cljs$lang$maxFixedArity = 3);

reagtest.core.diivi = (function reagtest$core$diivi(id,sisus){
return reagtest.core.dangerous.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"margin","margin",-995903681),(5),new cljs.core.Keyword(null,"border","border",1444987323),"dotted 1",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"lightblue",new cljs.core.Keyword(null,"background-color","background-color",570434026),"lightgrey"], null),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (p1__48017_SHARP_){
return console.log("mouse",p1__48017_SHARP_,id);
}),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"valitse_juttu","valitse_juttu",-1753998930),id], null));
})], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sisus));
});
reagtest.core.editoi = (function reagtest$core$editoi(id,sisus){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__48018_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value-change","value-change",-895685042),p1__48018_SHARP_.target.value], null));
}),new cljs.core.Keyword(null,"cols","cols",-1914801295),(57),new cljs.core.Keyword(null,"rows","rows",850049680),(7),new cljs.core.Keyword(null,"wrap","wrap",851669987),"hard",new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),sisus], null)], null)], null);
});
reagtest.core.Walinta = (function reagtest$core$Walinta(id,name,clr){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),clr], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"valinta","valinta",1778824689),id], null));
})], null),"",name], null)], null);
});
reagtest.core.div = (function reagtest$core$div(a,c,d,e){
console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1(d),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not_EQ_.call(null,cljs.core.count.call(null,a),(0)))?clojure.edn.read_string.call(null,["{:style {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),"}}"].join('')):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"contenteditable","contenteditable",-770210530),"true",new cljs.core.Keyword(null,"style","style",-496642736),clojure.edn.read_string.call(null,[" {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),"}"].join(''))], null),c,e], null);
});
reagtest.core.testii = (function reagtest$core$testii(a){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),((cljs.core._EQ_.call(null,a,"OK"))?"green":"red")], null)], null),a], null);
});
reagtest.core.home_page = (function reagtest$core$home_page(){
var kanavat = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kehys.subs","categories","kehys.subs/categories",-1718109397)], null));
var muuvi = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kehys.subs","muuvi","kehys.subs/muuvi",-1229032627)], null));
var valittu_id = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kehys.subs","valittu_juttu_id","kehys.subs/valittu_juttu_id",195859950)], null));
var uusi_id = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kehys.subs","uusi_id","kehys.subs/uusi_id",243462309)], null));
var kaikki = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kehys.subs","kaikki","kehys.subs/kaikki",-1167356639)], null));
var valittu_juttu = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kehys.subs","valittu_juttu","kehys.subs/valittu_juttu",-2065444766)], null));
var roto = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kehys.subs","roto","kehys.subs/roto",1425537410)], null));
var name = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kehys.subs","name","kehys.subs/name",1357755064)], null));
var finna_haku = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kehys.subs","finna_haku","kehys.subs/finna_haku",965304547)], null));
var abc = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kehys.subs","abc","kehys.subs/abc",1267367450)], null));
reagtest.core.bb = (function reagtest$core$home_page_$_bb(go){
return cljs.core.map.call(null,(function (p1__48019_SHARP_){
return reagtest.core.div.call(null,new cljs.core.Keyword(null,"css","css",1135045163).cljs$core$IFn$_invoke$arity$1(p1__48019_SHARP_),new cljs.core.Keyword(null,"teksti","teksti",647142377).cljs$core$IFn$_invoke$arity$1(p1__48019_SHARP_),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__48019_SHARP_),(function (){var go__$1 = cljs.core.filter.call(null,(function (x){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"master_id","master_id",586792487).cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__48019_SHARP_)));
}),cljs.core.deref.call(null,abc));
if((cljs.core.count.call(null,go__$1) > (0))){
return reagtest.core.bb.call(null,go__$1);
} else {
return null;
}
})());
}),go);
});

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),"1fr 1fr"], null)], null),new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"contenteditable","contenteditable",-770210530),"true",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"heigth","heigth",914329217),"1120",new cljs.core.Keyword(null,"border","border",1444987323),"solid 2px"], null)], null),reagtest.core.testii.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,kaikki))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"Valitse:",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),cljs.core.map.call(null,(function (p1__48020_SHARP_){
return reagtest.core.Walinta.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__48020_SHARP_),new cljs.core.Keyword(null,"teksti","teksti",647142377).cljs$core$IFn$_invoke$arity$1(p1__48020_SHARP_),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__48020_SHARP_)))?"grey":"lightgrey"));
}),cljs.core.deref.call(null,abc)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),cljs.core.deref.call(null,name)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"finna",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__48021_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"finna-haku","finna-haku",1358996403),p1__48021_SHARP_.target.value], null));
}),new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),""], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),cljs.core.deref.call(null,finna_haku),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4582__auto__ = (function reagtest$core$home_page_$_iter__48024(s__48025){
return (new cljs.core.LazySeq(null,(function (){
var s__48025__$1 = s__48025;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__48025__$1);
if(temp__5735__auto__){
var s__48025__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48025__$2)){
var c__4580__auto__ = cljs.core.chunk_first.call(null,s__48025__$2);
var size__4581__auto__ = cljs.core.count.call(null,c__4580__auto__);
var b__48027 = cljs.core.chunk_buffer.call(null,size__4581__auto__);
if((function (){var i__48026 = (0);
while(true){
if((i__48026 < size__4581__auto__)){
var i = cljs.core._nth.call(null,c__4580__auto__,i__48026);
cljs.core.chunk_append.call(null,b__48027,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(i),["--> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.map.call(null,((function (i__48026,i,c__4580__auto__,size__4581__auto__,b__48027,s__48025__$2,temp__5735__auto__,kanavat,muuvi,valittu_id,uusi_id,kaikki,valittu_juttu,roto,name,finna_haku,abc){
return (function (p1__48022_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48022_SHARP_),"-> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48022_SHARP_.call(null,i))].join('');
});})(i__48026,i,c__4580__auto__,size__4581__auto__,b__48027,s__48025__$2,temp__5735__auto__,kanavat,muuvi,valittu_id,uusi_id,kaikki,valittu_juttu,roto,name,finna_haku,abc))
,cljs.core.keys.call(null,i)))].join('')," ",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(i)], null));

var G__48028 = (i__48026 + (1));
i__48026 = G__48028;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48027),reagtest$core$home_page_$_iter__48024.call(null,cljs.core.chunk_rest.call(null,s__48025__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48027),null);
}
} else {
var i = cljs.core.first.call(null,s__48025__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(i),["--> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.map.call(null,((function (i,s__48025__$2,temp__5735__auto__,kanavat,muuvi,valittu_id,uusi_id,kaikki,valittu_juttu,roto,name,finna_haku,abc){
return (function (p1__48022_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48022_SHARP_),"-> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48022_SHARP_.call(null,i))].join('');
});})(i,s__48025__$2,temp__5735__auto__,kanavat,muuvi,valittu_id,uusi_id,kaikki,valittu_juttu,roto,name,finna_haku,abc))
,cljs.core.keys.call(null,i)))].join('')," ",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(i)], null),reagtest$core$home_page_$_iter__48024.call(null,cljs.core.rest.call(null,s__48025__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__.call(null,new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,kanavat)));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"2",new cljs.core.Keyword(null,"border","border",1444987323),"solid 2px"], null)], null),reagtest.core.bb.call(null,cljs.core.filter.call(null,(function (p1__48023_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__48023_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1((86)));
}),cljs.core.deref.call(null,abc)))], null)], null);
});
reagtest.core.mount_root = (function reagtest$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagtest.core.home_page], null),document.getElementById("app"));
});
reagtest.core.init_BANG_ = (function reagtest$core$init_BANG_(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kehys.events","initialize-db","kehys.events/initialize-db",-1544847043)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"valinta","valinta",1778824689),(1)], null));

return reagtest.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map?rel=1589676230226
