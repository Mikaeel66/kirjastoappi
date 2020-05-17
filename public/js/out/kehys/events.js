// Compiled by ClojureScript 1.10.597 {}
goog.provide('kehys.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('kehys.db');
goog.require('day8.re_frame.http_fx');
goog.require('ajax.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("kehys.events","initialize-db","kehys.events/initialize-db",-1544847043),(function (_,___$1){
return kehys.db.default_db;
}));
kehys.events.isChecked = (function kehys$events$isChecked(c_id){
return document.getElementById(c_id).checked;
});
kehys.events.lue_muuvit = (function kehys$events$lue_muuvit(a){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-api-data","get-api-data",-1854187592),new cljs.core.Keyword(null,"muuvi","muuvi",767842520),["https://juu.azurewebsites.net/lue_jutut.php?kanava_id=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)].join('')], null));
});
kehys.events.tallenna_juttu = (function kehys$events$tallenna_juttu(a,b){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-api-data","get-api-data",-1854187592),new cljs.core.Keyword(null,"lukuvirhe222","lukuvirhe222",-1564111122),["https://juu.azurewebsites.net/talleta.php?otsikko=ei&id=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),"&teksti=",clojure.string.replace.call(null,b,"\n","<br>")].join('')], null));
});
kehys.events.uusi_juttu = (function kehys$events$uusi_juttu(a){
console.log("uusi juttu osa 2.-> ",a);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-api-data","get-api-data",-1854187592),new cljs.core.Keyword(null,"uusi_id","uusi_id",-1954755042),["https://juu.azurewebsites.net/talleta.php?kanava_id=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)].join('')], null));
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"value-change2","value-change2",-1040550491),(function (db,p__46965){
var vec__46966 = p__46965;
var _ = cljs.core.nth.call(null,vec__46966,(0),null);
var new_value = cljs.core.nth.call(null,vec__46966,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"val2","val2",2138372881),new_value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"uusi-juttu","uusi-juttu",-1113568224),(function (db,p__46969){
var vec__46970 = p__46969;
var _ = cljs.core.nth.call(null,vec__46970,(0),null);
console.log("uusi juttu-> osa 1.-> ",cljs.core.get.call(null,db,new cljs.core.Keyword(null,"name","name",1843675177)));

kehys.events.uusi_juttu.call(null,cljs.core.get.call(null,db,new cljs.core.Keyword(null,"cate","cate",958726099)));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"finna-haku","finna-haku",1358996403),(function (db,p__46973){
var vec__46974 = p__46973;
var _ = cljs.core.nth.call(null,vec__46974,(0),null);
var new_value = cljs.core.nth.call(null,vec__46974,(1),null);
if((cljs.core.count.call(null,new_value) > (3))){
cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"finna_haku","finna_haku",-1399391642),new_value);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-api-data","get-api-data",-1854187592),new cljs.core.Keyword(null,"categories","categories",178386610),["https://api.finna.fi/v1/search?filter[]=~building:0/Helmet/&lookfor=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_value),"*"].join('')], null));
} else {
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"finna_haku","finna_haku",-1399391642),new_value,new cljs.core.Keyword(null,"categories","categories",178386610),cljs.core.PersistentArrayMap.EMPTY);
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"valinta","valinta",1778824689),(function (db,p__46977){
var vec__46978 = p__46977;
var _ = cljs.core.nth.call(null,vec__46978,(0),null);
var id = cljs.core.nth.call(null,vec__46978,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"name","name",1843675177),id);
}));
kehys.events.lue_valittu_juttu = (function kehys$events$lue_valittu_juttu(db,id){
return cljs.core.reduce.call(null,(function (p1__46982_SHARP_,p2__46981_SHARP_){
if(cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__46981_SHARP_))){
return new cljs.core.Keyword(null,"teksti","teksti",647142377).cljs$core$IFn$_invoke$arity$1(p2__46981_SHARP_);
} else {
return p1__46982_SHARP_;
}
}),"",new cljs.core.Keyword(null,"muuvi","muuvi",767842520).cljs$core$IFn$_invoke$arity$1(db));
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"valitse_juttu","valitse_juttu",-1753998930),(function (db,p__46983){
var vec__46984 = p__46983;
var _ = cljs.core.nth.call(null,vec__46984,(0),null);
var id = cljs.core.nth.call(null,vec__46984,(1),null);
console.log("valittu juttu ---> ",kehys.events.lue_valittu_juttu.call(null,db,id));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"uusi_id","uusi_id",-1954755042),"",new cljs.core.Keyword(null,"muuvi","muuvi",767842520),"",new cljs.core.Keyword(null,"valittu_juttu_id","valittu_juttu_id",1688695875),id,new cljs.core.Keyword(null,"valittu_juttu","valittu_juttu",680373735),clojure.string.replace.call(null,kehys.events.lue_valittu_juttu.call(null,db,id),"<br>","\n"));
}));
kehys.events.make_api_call = (function kehys$events$make_api_call(resource,on_success,on_failure){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),resource,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),on_failure], null)], null);
});
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"get-api-data","get-api-data",-1854187592),(function (p__46987,p__46988){
var map__46989 = p__46987;
var map__46989__$1 = (((((!((map__46989 == null))))?(((((map__46989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46989):map__46989);
var db = cljs.core.get.call(null,map__46989__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__46990 = p__46988;
var _ = cljs.core.nth.call(null,vec__46990,(0),null);
var key = cljs.core.nth.call(null,vec__46990,(1),null);
var resource = cljs.core.nth.call(null,vec__46990,(2),null);
return kehys.events.make_api_call.call(null,resource,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-api-data-success","get-api-data-success",1282042566),key], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-api-data-failure","get-api-data-failure",2009472208),key], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"get-api-data-success","get-api-data-success",1282042566),(function (db,p__46994){
var vec__46995 = p__46994;
var _ = cljs.core.nth.call(null,vec__46995,(0),null);
var key = cljs.core.nth.call(null,vec__46995,(1),null);
var data = cljs.core.nth.call(null,vec__46995,(2),null);
return cljs.core.assoc.call(null,db,key,data);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"get-api-data-failure","get-api-data-failure",2009472208),(function (db,p__46998){
var vec__46999 = p__46998;
var _ = cljs.core.nth.call(null,vec__46999,(0),null);
var k = cljs.core.nth.call(null,vec__46999,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"error","error",-978969032),["virhe",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("kehys.events","update-user-data-success","kehys.events/update-user-data-success",-1290604799),(function (p__47002,p__47003){
var map__47004 = p__47002;
var map__47004__$1 = (((((!((map__47004 == null))))?(((((map__47004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47004):map__47004);
var db = cljs.core.get.call(null,map__47004__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47005 = p__47003;
var _ = cljs.core.nth.call(null,vec__47005,(0),null);
var resp = cljs.core.nth.call(null,vec__47005,(1),null);
return console.log("onnistu-->22.57",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resp));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("kehys.events","update-user-data-failure","kehys.events/update-user-data-failure",-1249453685),(function (p__47009,p__47010){
var map__47011 = p__47009;
var map__47011__$1 = (((((!((map__47011 == null))))?(((((map__47011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47011):map__47011);
var db = cljs.core.get.call(null,map__47011__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47012 = p__47010;
var _ = cljs.core.nth.call(null,vec__47012,(0),null);
var resp = cljs.core.nth.call(null,vec__47012,(1),null);
return console.log("Ei lukenu!!!!");
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("kehys.events","update-user-data","kehys.events/update-user-data",1101281631),(function (p__47016,p__47017){
var map__47018 = p__47016;
var map__47018__$1 = (((((!((map__47018 == null))))?(((((map__47018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47018):map__47018);
var db = cljs.core.get.call(null,map__47018__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__47019 = p__47017;
var _ = cljs.core.nth.call(null,vec__47019,(0),null);
var user_data = cljs.core.nth.call(null,vec__47019,(1),null);
var token = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(db);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"https://juu.azurewebsites.net/test.php",new cljs.core.Keyword(null,"params","params",710516235),user_data,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.transit_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.transit_response_format.call(null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kehys.events","update-user-data-success","kehys.events/update-user-data-success",-1290604799)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kehys.events","update-user-data-failure","kehys.events/update-user-data-failure",-1249453685)], null)], null)], null);
}));

//# sourceMappingURL=events.js.map?rel=1589676417657
