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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"value-change2","value-change2",-1040550491),(function (db,p__43192){
var vec__43193 = p__43192;
var _ = cljs.core.nth.call(null,vec__43193,(0),null);
var new_value = cljs.core.nth.call(null,vec__43193,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"val2","val2",2138372881),new_value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"uusi-juttu","uusi-juttu",-1113568224),(function (db,p__43196){
var vec__43197 = p__43196;
var _ = cljs.core.nth.call(null,vec__43197,(0),null);
console.log("uusi juttu-> osa 1.-> ",cljs.core.get.call(null,db,new cljs.core.Keyword(null,"name","name",1843675177)));

kehys.events.uusi_juttu.call(null,cljs.core.get.call(null,db,new cljs.core.Keyword(null,"cate","cate",958726099)));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"finna-haku","finna-haku",1358996403),(function (db,p__43200){
var vec__43201 = p__43200;
var _ = cljs.core.nth.call(null,vec__43201,(0),null);
var new_value = cljs.core.nth.call(null,vec__43201,(1),null);
if((cljs.core.count.call(null,new_value) > (3))){
cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"finna_haku","finna_haku",-1399391642),new_value);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-api-data","get-api-data",-1854187592),new cljs.core.Keyword(null,"categories","categories",178386610),["https://api.finna.fi/v1/search?filter[]=~building:0/Helmet/&lookfor=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_value),"*"].join('')], null));
} else {
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"finna_haku","finna_haku",-1399391642),new_value,new cljs.core.Keyword(null,"categories","categories",178386610),cljs.core.PersistentArrayMap.EMPTY);
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"valinta","valinta",1778824689),(function (db,p__43204){
var vec__43205 = p__43204;
var _ = cljs.core.nth.call(null,vec__43205,(0),null);
var id = cljs.core.nth.call(null,vec__43205,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"name","name",1843675177),id);
}));
kehys.events.lue_valittu_juttu = (function kehys$events$lue_valittu_juttu(db,id){
return cljs.core.reduce.call(null,(function (p1__43209_SHARP_,p2__43208_SHARP_){
if(cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__43208_SHARP_))){
return new cljs.core.Keyword(null,"teksti","teksti",647142377).cljs$core$IFn$_invoke$arity$1(p2__43208_SHARP_);
} else {
return p1__43209_SHARP_;
}
}),"",new cljs.core.Keyword(null,"muuvi","muuvi",767842520).cljs$core$IFn$_invoke$arity$1(db));
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"valitse_juttu","valitse_juttu",-1753998930),(function (db,p__43210){
var vec__43211 = p__43210;
var _ = cljs.core.nth.call(null,vec__43211,(0),null);
var id = cljs.core.nth.call(null,vec__43211,(1),null);
console.log("valittu juttu ---> ",kehys.events.lue_valittu_juttu.call(null,db,id));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"uusi_id","uusi_id",-1954755042),"",new cljs.core.Keyword(null,"muuvi","muuvi",767842520),"",new cljs.core.Keyword(null,"valittu_juttu_id","valittu_juttu_id",1688695875),id,new cljs.core.Keyword(null,"valittu_juttu","valittu_juttu",680373735),clojure.string.replace.call(null,kehys.events.lue_valittu_juttu.call(null,db,id),"<br>","\n"));
}));
kehys.events.make_api_call = (function kehys$events$make_api_call(resource,on_success,on_failure){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),resource,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),on_failure], null)], null);
});
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"get-api-data","get-api-data",-1854187592),(function (p__43214,p__43215){
var map__43216 = p__43214;
var map__43216__$1 = (((((!((map__43216 == null))))?(((((map__43216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43216):map__43216);
var db = cljs.core.get.call(null,map__43216__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43217 = p__43215;
var _ = cljs.core.nth.call(null,vec__43217,(0),null);
var key = cljs.core.nth.call(null,vec__43217,(1),null);
var resource = cljs.core.nth.call(null,vec__43217,(2),null);
return kehys.events.make_api_call.call(null,resource,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-api-data-success","get-api-data-success",1282042566),key], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-api-data-failure","get-api-data-failure",2009472208),key], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"get-api-data-success","get-api-data-success",1282042566),(function (db,p__43221){
var vec__43222 = p__43221;
var _ = cljs.core.nth.call(null,vec__43222,(0),null);
var key = cljs.core.nth.call(null,vec__43222,(1),null);
var data = cljs.core.nth.call(null,vec__43222,(2),null);
return cljs.core.assoc.call(null,db,key,data);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"get-api-data-failure","get-api-data-failure",2009472208),(function (db,p__43225){
var vec__43226 = p__43225;
var _ = cljs.core.nth.call(null,vec__43226,(0),null);
var k = cljs.core.nth.call(null,vec__43226,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"error","error",-978969032),["virhe",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("kehys.events","update-user-data-success","kehys.events/update-user-data-success",-1290604799),(function (p__43229,p__43230){
var map__43231 = p__43229;
var map__43231__$1 = (((((!((map__43231 == null))))?(((((map__43231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43231):map__43231);
var db = cljs.core.get.call(null,map__43231__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43232 = p__43230;
var _ = cljs.core.nth.call(null,vec__43232,(0),null);
var resp = cljs.core.nth.call(null,vec__43232,(1),null);
return console.log("onnistu-->22.57",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resp));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("kehys.events","update-user-data-failure","kehys.events/update-user-data-failure",-1249453685),(function (p__43236,p__43237){
var map__43238 = p__43236;
var map__43238__$1 = (((((!((map__43238 == null))))?(((((map__43238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43238):map__43238);
var db = cljs.core.get.call(null,map__43238__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43239 = p__43237;
var _ = cljs.core.nth.call(null,vec__43239,(0),null);
var resp = cljs.core.nth.call(null,vec__43239,(1),null);
return console.log("Ei lukenu!!!!");
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("kehys.events","update-user-data","kehys.events/update-user-data",1101281631),(function (p__43243,p__43244){
var map__43245 = p__43243;
var map__43245__$1 = (((((!((map__43245 == null))))?(((((map__43245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43245):map__43245);
var db = cljs.core.get.call(null,map__43245__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43246 = p__43244;
var _ = cljs.core.nth.call(null,vec__43246,(0),null);
var user_data = cljs.core.nth.call(null,vec__43246,(1),null);
var token = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(db);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"https://juu.azurewebsites.net/test.php",new cljs.core.Keyword(null,"params","params",710516235),user_data,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.transit_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.transit_response_format.call(null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kehys.events","update-user-data-success","kehys.events/update-user-data-success",-1290604799)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kehys.events","update-user-data-failure","kehys.events/update-user-data-failure",-1249453685)], null)], null)], null);
}));

//# sourceMappingURL=events.js.map?rel=1589675442887
