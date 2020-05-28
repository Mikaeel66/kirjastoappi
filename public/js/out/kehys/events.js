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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"value-change2","value-change2",-1040550491),(function (db,p__22556){
var vec__22557 = p__22556;
var _ = cljs.core.nth.call(null,vec__22557,(0),null);
var new_value = cljs.core.nth.call(null,vec__22557,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"val2","val2",2138372881),new_value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"uusi-juttu","uusi-juttu",-1113568224),(function (db,p__22560){
var vec__22561 = p__22560;
var _ = cljs.core.nth.call(null,vec__22561,(0),null);
console.log("uusi juttu-> osa 1.-> ",cljs.core.get.call(null,db,new cljs.core.Keyword(null,"name","name",1843675177)));

kehys.events.uusi_juttu.call(null,cljs.core.get.call(null,db,new cljs.core.Keyword(null,"cate","cate",958726099)));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"finna-haku","finna-haku",1358996403),(function (db,p__22564){
var vec__22565 = p__22564;
var _ = cljs.core.nth.call(null,vec__22565,(0),null);
var new_value = cljs.core.nth.call(null,vec__22565,(1),null);
if((cljs.core.count.call(null,new_value) > (3))){
cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"finna_haku","finna_haku",-1399391642),new_value);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-api-data","get-api-data",-1854187592),new cljs.core.Keyword(null,"categories","categories",178386610),["https://api.finna.fi/v1/search?filter[]=~building:0/Helmet/&filter[]=~building:0/Kirkes/&lookfor=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_value),"*"].join('')], null));
} else {
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"finna_haku","finna_haku",-1399391642),new_value,new cljs.core.Keyword(null,"categories","categories",178386610),cljs.core.PersistentArrayMap.EMPTY);
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"valinta","valinta",1778824689),(function (db,p__22568){
var vec__22569 = p__22568;
var _ = cljs.core.nth.call(null,vec__22569,(0),null);
var id = cljs.core.nth.call(null,vec__22569,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"name","name",1843675177),id);
}));
kehys.events.lue_valittu_juttu = (function kehys$events$lue_valittu_juttu(db,id){
return cljs.core.reduce.call(null,(function (p1__22573_SHARP_,p2__22572_SHARP_){
if(cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__22572_SHARP_))){
return new cljs.core.Keyword(null,"teksti","teksti",647142377).cljs$core$IFn$_invoke$arity$1(p2__22572_SHARP_);
} else {
return p1__22573_SHARP_;
}
}),"",new cljs.core.Keyword(null,"muuvi","muuvi",767842520).cljs$core$IFn$_invoke$arity$1(db));
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"valitse_juttu","valitse_juttu",-1753998930),(function (db,p__22574){
var vec__22575 = p__22574;
var _ = cljs.core.nth.call(null,vec__22575,(0),null);
var id = cljs.core.nth.call(null,vec__22575,(1),null);
console.log("valittu juttu ---> ",kehys.events.lue_valittu_juttu.call(null,db,id));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"uusi_id","uusi_id",-1954755042),"",new cljs.core.Keyword(null,"muuvi","muuvi",767842520),"",new cljs.core.Keyword(null,"valittu_juttu_id","valittu_juttu_id",1688695875),id,new cljs.core.Keyword(null,"valittu_juttu","valittu_juttu",680373735),clojure.string.replace.call(null,kehys.events.lue_valittu_juttu.call(null,db,id),"<br>","\n"));
}));
kehys.events.make_api_call = (function kehys$events$make_api_call(resource,on_success,on_failure){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),resource,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),on_failure], null)], null);
});
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"get-api-data","get-api-data",-1854187592),(function (p__22578,p__22579){
var map__22580 = p__22578;
var map__22580__$1 = (((((!((map__22580 == null))))?(((((map__22580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22580):map__22580);
var db = cljs.core.get.call(null,map__22580__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__22581 = p__22579;
var _ = cljs.core.nth.call(null,vec__22581,(0),null);
var key = cljs.core.nth.call(null,vec__22581,(1),null);
var resource = cljs.core.nth.call(null,vec__22581,(2),null);
return kehys.events.make_api_call.call(null,resource,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-api-data-success","get-api-data-success",1282042566),key], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-api-data-failure","get-api-data-failure",2009472208),key], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"get-api-data-success","get-api-data-success",1282042566),(function (db,p__22585){
var vec__22586 = p__22585;
var _ = cljs.core.nth.call(null,vec__22586,(0),null);
var key = cljs.core.nth.call(null,vec__22586,(1),null);
var data = cljs.core.nth.call(null,vec__22586,(2),null);
return cljs.core.assoc.call(null,db,key,data);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"get-api-data-failure","get-api-data-failure",2009472208),(function (db,p__22589){
var vec__22590 = p__22589;
var _ = cljs.core.nth.call(null,vec__22590,(0),null);
var k = cljs.core.nth.call(null,vec__22590,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"error","error",-978969032),["virhe",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("kehys.events","update-user-data-success","kehys.events/update-user-data-success",-1290604799),(function (p__22593,p__22594){
var map__22595 = p__22593;
var map__22595__$1 = (((((!((map__22595 == null))))?(((((map__22595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22595):map__22595);
var db = cljs.core.get.call(null,map__22595__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__22596 = p__22594;
var _ = cljs.core.nth.call(null,vec__22596,(0),null);
var resp = cljs.core.nth.call(null,vec__22596,(1),null);
return console.log("onnistu-->22.57",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resp));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("kehys.events","update-user-data-failure","kehys.events/update-user-data-failure",-1249453685),(function (p__22600,p__22601){
var map__22602 = p__22600;
var map__22602__$1 = (((((!((map__22602 == null))))?(((((map__22602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22602):map__22602);
var db = cljs.core.get.call(null,map__22602__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__22603 = p__22601;
var _ = cljs.core.nth.call(null,vec__22603,(0),null);
var resp = cljs.core.nth.call(null,vec__22603,(1),null);
return console.log("Ei lukenu!!!!");
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("kehys.events","update-user-data","kehys.events/update-user-data",1101281631),(function (p__22607,p__22608){
var map__22609 = p__22607;
var map__22609__$1 = (((((!((map__22609 == null))))?(((((map__22609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22609):map__22609);
var db = cljs.core.get.call(null,map__22609__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__22610 = p__22608;
var _ = cljs.core.nth.call(null,vec__22610,(0),null);
var user_data = cljs.core.nth.call(null,vec__22610,(1),null);
var token = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(db);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"https://juu.azurewebsites.net/test.php",new cljs.core.Keyword(null,"params","params",710516235),user_data,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.transit_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.transit_response_format.call(null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kehys.events","update-user-data-success","kehys.events/update-user-data-success",-1290604799)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kehys.events","update-user-data-failure","kehys.events/update-user-data-failure",-1249453685)], null)], null)], null);
}));

//# sourceMappingURL=events.js.map?rel=1589769437953
