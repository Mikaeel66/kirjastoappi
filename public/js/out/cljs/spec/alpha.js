// Compiled by ClojureScript 1.10.597 {}
goog.provide('cljs.spec.alpha');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('cljs.spec.gen.alpha');
goog.require('clojure.string');
cljs.spec.alpha.MAX_INT = (9007199254740991);
/**
 * A soft limit on how many times a branching spec (or/alt/* /opt-keys/multi-spec)
 *   can be recursed through during generation. After this a
 *   non-recursive branch will be chosen.
 */
cljs.spec.alpha._STAR_recursion_limit_STAR_ = (4);
/**
 * The number of times an anonymous fn specified by fspec will be (generatively) tested during conform
 */
cljs.spec.alpha._STAR_fspec_iterations_STAR_ = (21);
/**
 * The number of items validated in a collection spec'ed with 'every'
 */
cljs.spec.alpha._STAR_coll_check_limit_STAR_ = (101);
/**
 * The number of errors reported by explain in a collection spec'ed with 'every'
 */
cljs.spec.alpha._STAR_coll_error_limit_STAR_ = (20);

/**
 * @interface
 */
cljs.spec.alpha.Spec = function(){};

cljs.spec.alpha.conform_STAR_ = (function cljs$spec$alpha$conform_STAR_(spec,x){
if((((!((spec == null)))) && ((!((spec.cljs$spec$alpha$Spec$conform_STAR_$arity$2 == null)))))){
return spec.cljs$spec$alpha$Spec$conform_STAR_$arity$2(spec,x);
} else {
var x__4487__auto__ = (((spec == null))?null:spec);
var m__4488__auto__ = (cljs.spec.alpha.conform_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,spec,x);
} else {
var m__4485__auto__ = (cljs.spec.alpha.conform_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,spec,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.conform*",spec);
}
}
}
});

cljs.spec.alpha.unform_STAR_ = (function cljs$spec$alpha$unform_STAR_(spec,y){
if((((!((spec == null)))) && ((!((spec.cljs$spec$alpha$Spec$unform_STAR_$arity$2 == null)))))){
return spec.cljs$spec$alpha$Spec$unform_STAR_$arity$2(spec,y);
} else {
var x__4487__auto__ = (((spec == null))?null:spec);
var m__4488__auto__ = (cljs.spec.alpha.unform_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,spec,y);
} else {
var m__4485__auto__ = (cljs.spec.alpha.unform_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,spec,y);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.unform*",spec);
}
}
}
});

cljs.spec.alpha.explain_STAR_ = (function cljs$spec$alpha$explain_STAR_(spec,path,via,in$,x){
if((((!((spec == null)))) && ((!((spec.cljs$spec$alpha$Spec$explain_STAR_$arity$5 == null)))))){
return spec.cljs$spec$alpha$Spec$explain_STAR_$arity$5(spec,path,via,in$,x);
} else {
var x__4487__auto__ = (((spec == null))?null:spec);
var m__4488__auto__ = (cljs.spec.alpha.explain_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,spec,path,via,in$,x);
} else {
var m__4485__auto__ = (cljs.spec.alpha.explain_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,spec,path,via,in$,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.explain*",spec);
}
}
}
});

cljs.spec.alpha.gen_STAR_ = (function cljs$spec$alpha$gen_STAR_(spec,overrides,path,rmap){
if((((!((spec == null)))) && ((!((spec.cljs$spec$alpha$Spec$gen_STAR_$arity$4 == null)))))){
return spec.cljs$spec$alpha$Spec$gen_STAR_$arity$4(spec,overrides,path,rmap);
} else {
var x__4487__auto__ = (((spec == null))?null:spec);
var m__4488__auto__ = (cljs.spec.alpha.gen_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,spec,overrides,path,rmap);
} else {
var m__4485__auto__ = (cljs.spec.alpha.gen_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,spec,overrides,path,rmap);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.gen*",spec);
}
}
}
});

cljs.spec.alpha.with_gen_STAR_ = (function cljs$spec$alpha$with_gen_STAR_(spec,gfn){
if((((!((spec == null)))) && ((!((spec.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 == null)))))){
return spec.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2(spec,gfn);
} else {
var x__4487__auto__ = (((spec == null))?null:spec);
var m__4488__auto__ = (cljs.spec.alpha.with_gen_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,spec,gfn);
} else {
var m__4485__auto__ = (cljs.spec.alpha.with_gen_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,spec,gfn);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.with-gen*",spec);
}
}
}
});

cljs.spec.alpha.describe_STAR_ = (function cljs$spec$alpha$describe_STAR_(spec){
if((((!((spec == null)))) && ((!((spec.cljs$spec$alpha$Spec$describe_STAR_$arity$1 == null)))))){
return spec.cljs$spec$alpha$Spec$describe_STAR_$arity$1(spec);
} else {
var x__4487__auto__ = (((spec == null))?null:spec);
var m__4488__auto__ = (cljs.spec.alpha.describe_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,spec);
} else {
var m__4485__auto__ = (cljs.spec.alpha.describe_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,spec);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.describe*",spec);
}
}
}
});

if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.registry_ref !== 'undefined')){
} else {
cljs.spec.alpha.registry_ref = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
cljs.spec.alpha.deep_resolve = (function cljs$spec$alpha$deep_resolve(reg,k){
var spec = k;
while(true){
if(cljs.core.ident_QMARK_.call(null,spec)){
var G__65619 = cljs.core.get.call(null,reg,spec);
spec = G__65619;
continue;
} else {
return spec;
}
break;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, nil if not found, k if k not ident
 */
cljs.spec.alpha.reg_resolve = (function cljs$spec$alpha$reg_resolve(k){
if(cljs.core.ident_QMARK_.call(null,k)){
var reg = cljs.core.deref.call(null,cljs.spec.alpha.registry_ref);
var spec = cljs.core.get.call(null,reg,k);
if((!(cljs.core.ident_QMARK_.call(null,spec)))){
return spec;
} else {
return cljs.spec.alpha.deep_resolve.call(null,reg,spec);
}
} else {
return k;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, throws if not found, k if k not ident
 */
cljs.spec.alpha.reg_resolve_BANG_ = (function cljs$spec$alpha$reg_resolve_BANG_(k){
if(cljs.core.ident_QMARK_.call(null,k)){
var or__4185__auto__ = cljs.spec.alpha.reg_resolve.call(null,k);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
throw (new Error(["Unable to resolve spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')));
}
} else {
return k;
}
});
/**
 * returns x if x is a spec object, else logical false
 */
cljs.spec.alpha.spec_QMARK_ = (function cljs$spec$alpha$spec_QMARK_(x){
if((((!((x == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$spec$alpha$Spec$))))?true:false):false)){
return x;
} else {
return null;
}
});
/**
 * returns x if x is a (cljs.spec.alpha) regex op, else logical false
 */
cljs.spec.alpha.regex_QMARK_ = (function cljs$spec$alpha$regex_QMARK_(x){
var and__4174__auto__ = new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__4174__auto__)){
return x;
} else {
return and__4174__auto__;
}
});
cljs.spec.alpha.with_name = (function cljs$spec$alpha$with_name(spec,name){
if(cljs.core.ident_QMARK_.call(null,spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_.call(null,spec))){
return cljs.core.assoc.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570),name);
} else {
if((((!((spec == null))))?(((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$))))?true:false):false)){
return cljs.core.with_meta.call(null,spec,cljs.core.assoc.call(null,cljs.core.meta.call(null,spec),new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570),name));
} else {
return null;
}
}
}
});
cljs.spec.alpha.spec_name = (function cljs$spec$alpha$spec_name(spec){
if(cljs.core.ident_QMARK_.call(null,spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_.call(null,spec))){
return new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570).cljs$core$IFn$_invoke$arity$1(spec);
} else {
if((((!((spec == null))))?(((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$))))?true:false):false)){
return new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,spec));
} else {
return null;
}
}
}
});
/**
 * spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.
 */
cljs.spec.alpha.maybe_spec = (function cljs$spec$alpha$maybe_spec(spec_or_k){
var s = (function (){var or__4185__auto__ = ((cljs.core.ident_QMARK_.call(null,spec_or_k))?cljs.spec.alpha.reg_resolve.call(null,spec_or_k):false);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = cljs.spec.alpha.spec_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
var or__4185__auto____$2 = cljs.spec.alpha.regex_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__4185__auto____$2)){
return or__4185__auto____$2;
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_.call(null,s))){
return cljs.spec.alpha.with_name.call(null,cljs.spec.alpha.regex_spec_impl.call(null,s,null),cljs.spec.alpha.spec_name.call(null,s));
} else {
return s;
}
});
/**
 * spec-or-k must be a spec, regex or kw/sym, else returns nil. Throws if unresolvable kw/sym
 */
cljs.spec.alpha.the_spec = (function cljs$spec$alpha$the_spec(spec_or_k){
var or__4185__auto__ = cljs.spec.alpha.maybe_spec.call(null,spec_or_k);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.ident_QMARK_.call(null,spec_or_k)){
throw (new Error(["Unable to resolve spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec_or_k)].join('')));
} else {
return null;
}
}
});
cljs.spec.alpha.fn_sym = (function cljs$spec$alpha$fn_sym(f_n){
if(clojure.string.blank_QMARK_.call(null,f_n)){
return null;
} else {
var xs = cljs.core.map.call(null,cljs.core.demunge,clojure.string.split.call(null,f_n,"$"));
if(((((2) <= cljs.core.count.call(null,xs))) && (cljs.core.every_QMARK_.call(null,(function (p1__65623_SHARP_){
return (!(clojure.string.blank_QMARK_.call(null,p1__65623_SHARP_)));
}),xs)))){
var vec__65624 = cljs.core.juxt.call(null,cljs.core.butlast,cljs.core.last).call(null,xs);
var xs__$1 = cljs.core.nth.call(null,vec__65624,(0),null);
var y = cljs.core.nth.call(null,vec__65624,(1),null);
return cljs.core.symbol.call(null,[clojure.string.join.call(null,".",xs__$1),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join(''));
} else {
return null;
}
}
});

/**
 * @interface
 */
cljs.spec.alpha.Specize = function(){};

cljs.spec.alpha.specize_STAR_ = (function cljs$spec$alpha$specize_STAR_(var_args){
var G__65628 = arguments.length;
switch (G__65628) {
case 1:
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.cljs$spec$alpha$Specize$specize_STAR_$arity$1 == null)))))){
return _.cljs$spec$alpha$Specize$specize_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.spec.alpha.specize_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,_);
} else {
var m__4485__auto__ = (cljs.spec.alpha.specize_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Specize.specize*",_);
}
}
}
}));

(cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_,form){
if((((!((_ == null)))) && ((!((_.cljs$spec$alpha$Specize$specize_STAR_$arity$2 == null)))))){
return _.cljs$spec$alpha$Specize$specize_STAR_$arity$2(_,form);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.spec.alpha.specize_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,_,form);
} else {
var m__4485__auto__ = (cljs.spec.alpha.specize_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,_,form);
} else {
throw cljs.core.missing_protocol.call(null,"Specize.specize*",_);
}
}
}
}));

(cljs.spec.alpha.specize_STAR_.cljs$lang$maxFixedArity = 2);


(cljs.core.Keyword.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (k){
var k__$1 = this;
return cljs.spec.alpha.specize_STAR_.call(null,cljs.spec.alpha.reg_resolve_BANG_.call(null,k__$1));
}));

(cljs.core.Keyword.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (k,_){
var k__$1 = this;
return cljs.spec.alpha.specize_STAR_.call(null,cljs.spec.alpha.reg_resolve_BANG_.call(null,k__$1));
}));

(cljs.core.Symbol.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Symbol.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var s__$1 = this;
return cljs.spec.alpha.specize_STAR_.call(null,cljs.spec.alpha.reg_resolve_BANG_.call(null,s__$1));
}));

(cljs.core.Symbol.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var s__$1 = this;
return cljs.spec.alpha.specize_STAR_.call(null,cljs.spec.alpha.reg_resolve_BANG_.call(null,s__$1));
}));

(cljs.core.PersistentHashSet.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var s__$1 = this;
return cljs.spec.alpha.spec_impl.call(null,s__$1,s__$1,null,null);
}));

(cljs.core.PersistentHashSet.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,form){
var s__$1 = this;
return cljs.spec.alpha.spec_impl.call(null,form,s__$1,null,null);
}));

(cljs.core.PersistentTreeSet.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentTreeSet.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var s__$1 = this;
return cljs.spec.alpha.spec_impl.call(null,s__$1,s__$1,null,null);
}));

(cljs.core.PersistentTreeSet.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,form){
var s__$1 = this;
return cljs.spec.alpha.spec_impl.call(null,form,s__$1,null,null);
}));

goog.object.set(cljs.spec.alpha.Specize,"_",true);

goog.object.set(cljs.spec.alpha.specize_STAR_,"_",(function() {
var G__65630 = null;
var G__65630__1 = (function (o){
var temp__5733__auto__ = ((cljs.core.fn_QMARK_.call(null,o))?cljs.spec.alpha.fn_sym.call(null,o.name):false);
if(cljs.core.truth_(temp__5733__auto__)){
var f_n = temp__5733__auto__;
return cljs.spec.alpha.spec_impl.call(null,f_n,o,null,null);
} else {
return cljs.spec.alpha.spec_impl.call(null,new cljs.core.Keyword("cljs.spec.alpha","unknown","cljs.spec.alpha/unknown",651034818),o,null,null);
}
});
var G__65630__2 = (function (o,form){
return cljs.spec.alpha.spec_impl.call(null,form,o,null,null);
});
G__65630 = function(o,form){
switch(arguments.length){
case 1:
return G__65630__1.call(this,o);
case 2:
return G__65630__2.call(this,o,form);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__65630.cljs$core$IFn$_invoke$arity$1 = G__65630__1;
G__65630.cljs$core$IFn$_invoke$arity$2 = G__65630__2;
return G__65630;
})()
);
cljs.spec.alpha.specize = (function cljs$spec$alpha$specize(var_args){
var G__65632 = arguments.length;
switch (G__65632) {
case 1:
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1 = (function (s){
var or__4185__auto__ = cljs.spec.alpha.spec_QMARK_.call(null,s);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.spec.alpha.specize_STAR_.call(null,s);
}
}));

(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2 = (function (s,form){
var or__4185__auto__ = cljs.spec.alpha.spec_QMARK_.call(null,s);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.spec.alpha.specize_STAR_.call(null,s,form);
}
}));

(cljs.spec.alpha.specize.cljs$lang$maxFixedArity = 2);

/**
 * tests the validity of a conform return value
 */
cljs.spec.alpha.invalid_QMARK_ = (function cljs$spec$alpha$invalid_QMARK_(ret){
return cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119),ret);
});
/**
 * Given a spec and a value, returns :cljs.spec.alpha/invalid if value does
 *   not match spec, else the (possibly destructured) value.
 */
cljs.spec.alpha.conform = (function cljs$spec$alpha$conform(spec,x){
return cljs.spec.alpha.conform_STAR_.call(null,cljs.spec.alpha.specize.call(null,spec),x);
});
/**
 * Given a spec and a value created by or compliant with a call to
 *   'conform' with the same spec, returns a value with all conform
 * destructuring undone.
 */
cljs.spec.alpha.unform = (function cljs$spec$alpha$unform(spec,x){
return cljs.spec.alpha.unform_STAR_.call(null,cljs.spec.alpha.specize.call(null,spec),x);
});
/**
 * returns the spec as data
 */
cljs.spec.alpha.form = (function cljs$spec$alpha$form(spec){
return cljs.spec.alpha.describe_STAR_.call(null,cljs.spec.alpha.specize.call(null,spec));
});
cljs.spec.alpha.abbrev = (function cljs$spec$alpha$abbrev(form){
if(cljs.core.seq_QMARK_.call(null,form)){
return clojure.walk.postwalk.call(null,(function (form__$1){
if(cljs.core.truth_((((form__$1 instanceof cljs.core.Symbol))?cljs.core.namespace.call(null,form__$1):false))){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form__$1));
} else {
if(((cljs.core.seq_QMARK_.call(null,form__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.first.call(null,form__$1))) && (cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.second.call(null,form__$1))))){
return cljs.core.last.call(null,form__$1);
} else {
return form__$1;

}
}
}),form);
} else {
if(cljs.core.truth_((((form instanceof cljs.core.Symbol))?cljs.core.namespace.call(null,form):false))){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form));
} else {
return form;

}
}
});
/**
 * returns an abbreviated description of the spec as data
 */
cljs.spec.alpha.describe = (function cljs$spec$alpha$describe(spec){
return cljs.spec.alpha.abbrev.call(null,cljs.spec.alpha.form.call(null,spec));
});
/**
 * Takes a spec and a no-arg, generator-returning fn and returns a version of that spec that uses that generator
 */
cljs.spec.alpha.with_gen = (function cljs$spec$alpha$with_gen(spec,gen_fn){
var spec__$1 = cljs.spec.alpha.reg_resolve.call(null,spec);
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_.call(null,spec__$1))){
return cljs.core.assoc.call(null,spec__$1,new cljs.core.Keyword("cljs.spec.alpha","gfn","cljs.spec.alpha/gfn",-593120375),gen_fn);
} else {
return cljs.spec.alpha.with_gen_STAR_.call(null,cljs.spec.alpha.specize.call(null,spec__$1),gen_fn);
}
});
cljs.spec.alpha.explain_data_STAR_ = (function cljs$spec$alpha$explain_data_STAR_(spec,path,via,in$,x){
var temp__5735__auto__ = cljs.spec.alpha.explain_STAR_.call(null,cljs.spec.alpha.specize.call(null,spec),path,via,in$,x);
if(cljs.core.truth_(temp__5735__auto__)){
var probs = temp__5735__auto__;
if(cljs.core.empty_QMARK_.call(null,probs)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),probs,new cljs.core.Keyword("cljs.spec.alpha","spec","cljs.spec.alpha/spec",1947137578),spec,new cljs.core.Keyword("cljs.spec.alpha","value","cljs.spec.alpha/value",1974786274),x], null);
}
} else {
return null;
}
});
/**
 * Given a spec and a value x which ought to conform, returns nil if x
 *   conforms, else a map with at least the key ::problems whose value is
 *   a collection of problem-maps, where problem-map has at least :path :pred and :val
 *   keys describing the predicate and the value that failed at that
 *   path.
 */
cljs.spec.alpha.explain_data = (function cljs$spec$alpha$explain_data(spec,x){
return cljs.spec.alpha.explain_data_STAR_.call(null,spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__5733__auto__ = cljs.spec.alpha.spec_name.call(null,spec);
if(cljs.core.truth_(temp__5733__auto__)){
var name = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,x);
});
/**
 * Default printer for explain-data. nil indicates a successful validation.
 */
cljs.spec.alpha.explain_printer = (function cljs$spec$alpha$explain_printer(ed){
if(cljs.core.truth_(ed)){
var problems = cljs.core.sort_by.call(null,(function (p1__65635_SHARP_){
return (- cljs.core.count.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1__65635_SHARP_)));
}),cljs.core.sort_by.call(null,(function (p1__65634_SHARP_){
return (- cljs.core.count.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(p1__65634_SHARP_)));
}),new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814).cljs$core$IFn$_invoke$arity$1(ed)));
return cljs.core.print.call(null,(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__65636_65716 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__65637_65717 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__65638_65718 = true;
var _STAR_print_fn_STAR__temp_val__65639_65719 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__65638_65718);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__65639_65719);

try{var seq__65640_65720 = cljs.core.seq.call(null,problems);
var chunk__65641_65721 = null;
var count__65642_65722 = (0);
var i__65643_65723 = (0);
while(true){
if((i__65643_65723 < count__65642_65722)){
var map__65680_65724 = cljs.core._nth.call(null,chunk__65641_65721,i__65643_65723);
var map__65680_65725__$1 = (((((!((map__65680_65724 == null))))?(((((map__65680_65724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65680_65724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65680_65724):map__65680_65724);
var prob_65726 = map__65680_65725__$1;
var path_65727 = cljs.core.get.call(null,map__65680_65725__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_65728 = cljs.core.get.call(null,map__65680_65725__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_65729 = cljs.core.get.call(null,map__65680_65725__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_65730 = cljs.core.get.call(null,map__65680_65725__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_65731 = cljs.core.get.call(null,map__65680_65725__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_65732 = cljs.core.get.call(null,map__65680_65725__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
cljs.core.pr.call(null,val_65729);

cljs.core.print.call(null," - failed: ");

if(cljs.core.truth_(reason_65730)){
cljs.core.print.call(null,reason_65730);
} else {
cljs.core.pr.call(null,cljs.spec.alpha.abbrev.call(null,pred_65728));
}

if(cljs.core.empty_QMARK_.call(null,in_65732)){
} else {
cljs.core.print.call(null,[" in: ",cljs.core.pr_str.call(null,in_65732)].join(''));
}

if(cljs.core.empty_QMARK_.call(null,path_65727)){
} else {
cljs.core.print.call(null,[" at: ",cljs.core.pr_str.call(null,path_65727)].join(''));
}

if(cljs.core.empty_QMARK_.call(null,via_65731)){
} else {
cljs.core.print.call(null,[" spec: ",cljs.core.pr_str.call(null,cljs.core.last.call(null,via_65731))].join(''));
}

var seq__65682_65733 = cljs.core.seq.call(null,prob_65726);
var chunk__65683_65734 = null;
var count__65684_65735 = (0);
var i__65685_65736 = (0);
while(true){
if((i__65685_65736 < count__65684_65735)){
var vec__65692_65737 = cljs.core._nth.call(null,chunk__65683_65734,i__65685_65736);
var k_65738 = cljs.core.nth.call(null,vec__65692_65737,(0),null);
var v_65739 = cljs.core.nth.call(null,vec__65692_65737,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_65738))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_65738)," ");

cljs.core.pr.call(null,v_65739);
}


var G__65740 = seq__65682_65733;
var G__65741 = chunk__65683_65734;
var G__65742 = count__65684_65735;
var G__65743 = (i__65685_65736 + (1));
seq__65682_65733 = G__65740;
chunk__65683_65734 = G__65741;
count__65684_65735 = G__65742;
i__65685_65736 = G__65743;
continue;
} else {
var temp__5735__auto___65744 = cljs.core.seq.call(null,seq__65682_65733);
if(temp__5735__auto___65744){
var seq__65682_65745__$1 = temp__5735__auto___65744;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65682_65745__$1)){
var c__4609__auto___65746 = cljs.core.chunk_first.call(null,seq__65682_65745__$1);
var G__65747 = cljs.core.chunk_rest.call(null,seq__65682_65745__$1);
var G__65748 = c__4609__auto___65746;
var G__65749 = cljs.core.count.call(null,c__4609__auto___65746);
var G__65750 = (0);
seq__65682_65733 = G__65747;
chunk__65683_65734 = G__65748;
count__65684_65735 = G__65749;
i__65685_65736 = G__65750;
continue;
} else {
var vec__65695_65751 = cljs.core.first.call(null,seq__65682_65745__$1);
var k_65752 = cljs.core.nth.call(null,vec__65695_65751,(0),null);
var v_65753 = cljs.core.nth.call(null,vec__65695_65751,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_65752))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_65752)," ");

cljs.core.pr.call(null,v_65753);
}


var G__65754 = cljs.core.next.call(null,seq__65682_65745__$1);
var G__65755 = null;
var G__65756 = (0);
var G__65757 = (0);
seq__65682_65733 = G__65754;
chunk__65683_65734 = G__65755;
count__65684_65735 = G__65756;
i__65685_65736 = G__65757;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);


var G__65758 = seq__65640_65720;
var G__65759 = chunk__65641_65721;
var G__65760 = count__65642_65722;
var G__65761 = (i__65643_65723 + (1));
seq__65640_65720 = G__65758;
chunk__65641_65721 = G__65759;
count__65642_65722 = G__65760;
i__65643_65723 = G__65761;
continue;
} else {
var temp__5735__auto___65762 = cljs.core.seq.call(null,seq__65640_65720);
if(temp__5735__auto___65762){
var seq__65640_65763__$1 = temp__5735__auto___65762;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65640_65763__$1)){
var c__4609__auto___65764 = cljs.core.chunk_first.call(null,seq__65640_65763__$1);
var G__65765 = cljs.core.chunk_rest.call(null,seq__65640_65763__$1);
var G__65766 = c__4609__auto___65764;
var G__65767 = cljs.core.count.call(null,c__4609__auto___65764);
var G__65768 = (0);
seq__65640_65720 = G__65765;
chunk__65641_65721 = G__65766;
count__65642_65722 = G__65767;
i__65643_65723 = G__65768;
continue;
} else {
var map__65698_65769 = cljs.core.first.call(null,seq__65640_65763__$1);
var map__65698_65770__$1 = (((((!((map__65698_65769 == null))))?(((((map__65698_65769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65698_65769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65698_65769):map__65698_65769);
var prob_65771 = map__65698_65770__$1;
var path_65772 = cljs.core.get.call(null,map__65698_65770__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_65773 = cljs.core.get.call(null,map__65698_65770__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_65774 = cljs.core.get.call(null,map__65698_65770__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_65775 = cljs.core.get.call(null,map__65698_65770__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_65776 = cljs.core.get.call(null,map__65698_65770__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_65777 = cljs.core.get.call(null,map__65698_65770__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
cljs.core.pr.call(null,val_65774);

cljs.core.print.call(null," - failed: ");

if(cljs.core.truth_(reason_65775)){
cljs.core.print.call(null,reason_65775);
} else {
cljs.core.pr.call(null,cljs.spec.alpha.abbrev.call(null,pred_65773));
}

if(cljs.core.empty_QMARK_.call(null,in_65777)){
} else {
cljs.core.print.call(null,[" in: ",cljs.core.pr_str.call(null,in_65777)].join(''));
}

if(cljs.core.empty_QMARK_.call(null,path_65772)){
} else {
cljs.core.print.call(null,[" at: ",cljs.core.pr_str.call(null,path_65772)].join(''));
}

if(cljs.core.empty_QMARK_.call(null,via_65776)){
} else {
cljs.core.print.call(null,[" spec: ",cljs.core.pr_str.call(null,cljs.core.last.call(null,via_65776))].join(''));
}

var seq__65700_65778 = cljs.core.seq.call(null,prob_65771);
var chunk__65701_65779 = null;
var count__65702_65780 = (0);
var i__65703_65781 = (0);
while(true){
if((i__65703_65781 < count__65702_65780)){
var vec__65710_65782 = cljs.core._nth.call(null,chunk__65701_65779,i__65703_65781);
var k_65783 = cljs.core.nth.call(null,vec__65710_65782,(0),null);
var v_65784 = cljs.core.nth.call(null,vec__65710_65782,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_65783))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_65783)," ");

cljs.core.pr.call(null,v_65784);
}


var G__65785 = seq__65700_65778;
var G__65786 = chunk__65701_65779;
var G__65787 = count__65702_65780;
var G__65788 = (i__65703_65781 + (1));
seq__65700_65778 = G__65785;
chunk__65701_65779 = G__65786;
count__65702_65780 = G__65787;
i__65703_65781 = G__65788;
continue;
} else {
var temp__5735__auto___65789__$1 = cljs.core.seq.call(null,seq__65700_65778);
if(temp__5735__auto___65789__$1){
var seq__65700_65790__$1 = temp__5735__auto___65789__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65700_65790__$1)){
var c__4609__auto___65791 = cljs.core.chunk_first.call(null,seq__65700_65790__$1);
var G__65792 = cljs.core.chunk_rest.call(null,seq__65700_65790__$1);
var G__65793 = c__4609__auto___65791;
var G__65794 = cljs.core.count.call(null,c__4609__auto___65791);
var G__65795 = (0);
seq__65700_65778 = G__65792;
chunk__65701_65779 = G__65793;
count__65702_65780 = G__65794;
i__65703_65781 = G__65795;
continue;
} else {
var vec__65713_65796 = cljs.core.first.call(null,seq__65700_65790__$1);
var k_65797 = cljs.core.nth.call(null,vec__65713_65796,(0),null);
var v_65798 = cljs.core.nth.call(null,vec__65713_65796,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_65797))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_65797)," ");

cljs.core.pr.call(null,v_65798);
}


var G__65799 = cljs.core.next.call(null,seq__65700_65790__$1);
var G__65800 = null;
var G__65801 = (0);
var G__65802 = (0);
seq__65700_65778 = G__65799;
chunk__65701_65779 = G__65800;
count__65702_65780 = G__65801;
i__65703_65781 = G__65802;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);


var G__65803 = cljs.core.next.call(null,seq__65640_65763__$1);
var G__65804 = null;
var G__65805 = (0);
var G__65806 = (0);
seq__65640_65720 = G__65803;
chunk__65641_65721 = G__65804;
count__65642_65722 = G__65805;
i__65643_65723 = G__65806;
continue;
}
} else {
}
}
break;
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__65637_65717);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__65636_65716);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})());
} else {
return cljs.core.println.call(null,"Success!");
}
});
cljs.spec.alpha._STAR_explain_out_STAR_ = cljs.spec.alpha.explain_printer;
/**
 * Prints explanation data (per 'explain-data') to *out* using the printer in *explain-out*,
 *  by default explain-printer.
 */
cljs.spec.alpha.explain_out = (function cljs$spec$alpha$explain_out(ed){
return cljs.spec.alpha._STAR_explain_out_STAR_.call(null,ed);
});
/**
 * Given a spec and a value that fails to conform, prints an explanation to *out*.
 */
cljs.spec.alpha.explain = (function cljs$spec$alpha$explain(spec,x){
return cljs.spec.alpha.explain_out.call(null,cljs.spec.alpha.explain_data.call(null,spec,x));
});
/**
 * Given a spec and a value that fails to conform, returns an explanation as a string.
 */
cljs.spec.alpha.explain_str = (function cljs$spec$alpha$explain_str(spec,x){
var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__65807_65811 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__65808_65812 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__65809_65813 = true;
var _STAR_print_fn_STAR__temp_val__65810_65814 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__65809_65813);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__65810_65814);

try{cljs.spec.alpha.explain.call(null,spec,x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__65808_65812);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__65807_65811);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
});
cljs.spec.alpha.gensub = (function cljs$spec$alpha$gensub(spec,overrides,path,rmap,form){
var spec__$1 = cljs.spec.alpha.specize.call(null,spec);
var temp__5733__auto__ = (function (){var or__4185__auto__ = (function (){var temp__5735__auto__ = (function (){var or__4185__auto__ = cljs.core.get.call(null,overrides,(function (){var or__4185__auto__ = cljs.spec.alpha.spec_name.call(null,spec__$1);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return spec__$1;
}
})());
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.call(null,overrides,path);
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var gfn = temp__5735__auto__;
return gfn.call(null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.spec.alpha.gen_STAR_.call(null,spec__$1,overrides,path,rmap);
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var g = temp__5733__auto__;
return cljs.spec.gen.alpha.such_that.call(null,(function (p1__65815_SHARP_){
return cljs.spec.alpha.valid_QMARK_.call(null,spec__$1,p1__65815_SHARP_);
}),g,(100));
} else {
throw (new Error(["Unable to construct gen at: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)," for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.abbrev.call(null,form))].join('')));
}
});
/**
 * Given a spec, returns the generator for it, or throws if none can
 *   be constructed. Optionally an overrides map can be provided which
 *   should map spec names or paths (vectors of keywords) to no-arg
 *   generator-creating fns. These will be used instead of the generators at those
 *   names/paths. Note that parent generator (in the spec or overrides
 *   map) will supersede those of any subtrees. A generator for a regex
 *   op must always return a sequential collection (i.e. a generator for
 *   s/? should return either an empty sequence/vector or a
 *   sequence/vector with one item in it)
 */
cljs.spec.alpha.gen = (function cljs$spec$alpha$gen(var_args){
var G__65817 = arguments.length;
switch (G__65817) {
case 1:
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.alpha.gen.call(null,spec,null);
}));

(cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2 = (function (spec,overrides){
return cljs.spec.alpha.gensub.call(null,spec,overrides,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","recursion-limit","cljs.spec.alpha/recursion-limit",601284994),cljs.spec.alpha._STAR_recursion_limit_STAR_], null),spec);
}));

(cljs.spec.alpha.gen.cljs$lang$maxFixedArity = 2);

/**
 * Do not call this directly, use 'def'
 */
cljs.spec.alpha.def_impl = (function cljs$spec$alpha$def_impl(k,form,spec){
if(cljs.core.truth_(((cljs.core.ident_QMARK_.call(null,k))?cljs.core.namespace.call(null,k):false))){
} else {
throw (new Error(["Assert failed: ","k must be namespaced keyword or resolveable symbol","\n","(c/and (ident? k) (namespace k))"].join('')));
}

if((spec == null)){
cljs.core.swap_BANG_.call(null,cljs.spec.alpha.registry_ref,cljs.core.dissoc,k);
} else {
var spec_65819__$1 = (cljs.core.truth_((function (){var or__4185__auto__ = cljs.spec.alpha.spec_QMARK_.call(null,spec);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = cljs.spec.alpha.regex_QMARK_.call(null,spec);
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.alpha.registry_ref),spec);
}
}
})())?spec:cljs.spec.alpha.spec_impl.call(null,form,spec,null,null));
cljs.core.swap_BANG_.call(null,cljs.spec.alpha.registry_ref,cljs.core.assoc,k,cljs.spec.alpha.with_name.call(null,spec_65819__$1,k));
}

return k;
});
/**
 * returns the registry map, prefer 'get-spec' to lookup a spec by name
 */
cljs.spec.alpha.registry = (function cljs$spec$alpha$registry(){
return cljs.core.deref.call(null,cljs.spec.alpha.registry_ref);
});
/**
 * Returns a symbol from a symbol or var
 */
cljs.spec.alpha.__GT_sym = (function cljs$spec$alpha$__GT_sym(x){
if(cljs.core.var_QMARK_.call(null,x)){
return x.sym;
} else {
return x;
}
});
/**
 * Returns spec registered for keyword/symbol/var k, or nil.
 */
cljs.spec.alpha.get_spec = (function cljs$spec$alpha$get_spec(k){
return cljs.core.get.call(null,cljs.spec.alpha.registry.call(null),(((k instanceof cljs.core.Keyword))?k:cljs.spec.alpha.__GT_sym.call(null,k)));
});
cljs.spec.alpha.macroexpand_check = (function cljs$spec$alpha$macroexpand_check(v,args){
var specs = cljs.spec.alpha.get_spec.call(null,v);
var temp__5735__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(temp__5735__auto__)){
var arg_spec = temp__5735__auto__;
if(cljs.spec.alpha.invalid_QMARK_.call(null,cljs.spec.alpha.conform.call(null,arg_spec,args))){
var ed = cljs.core.assoc.call(null,cljs.spec.alpha.explain_data_STAR_.call(null,arg_spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__5733__auto__ = cljs.spec.alpha.spec_name.call(null,arg_spec);
if(cljs.core.truth_(temp__5733__auto__)){
var name = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,args),new cljs.core.Keyword("cljs.spec.alpha","args","cljs.spec.alpha/args",1870769783),args);
throw cljs.core.ex_info.call(null,["Call to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.__GT_sym.call(null,v))," did not conform to spec."].join(''),ed);
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.alpha.recur_limit_QMARK_ = (function cljs$spec$alpha$recur_limit_QMARK_(rmap,id,path,k){
return (((cljs.core.get.call(null,rmap,id) > new cljs.core.Keyword("cljs.spec.alpha","recursion-limit","cljs.spec.alpha/recursion-limit",601284994).cljs$core$IFn$_invoke$arity$1(rmap))) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,path),k)));
});
cljs.spec.alpha.inck = (function cljs$spec$alpha$inck(m,k){
return cljs.core.assoc.call(null,m,k,((function (){var or__4185__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (0);
}
})() + (1)));
});
cljs.spec.alpha.dt = (function cljs$spec$alpha$dt(var_args){
var G__65821 = arguments.length;
switch (G__65821) {
case 3:
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.spec.alpha.dt.call(null,pred,x,form,null);
}));

(cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4 = (function (pred,x,form,cpred_QMARK_){
if(cljs.core.truth_(pred)){
var temp__5733__auto__ = cljs.spec.alpha.the_spec.call(null,pred);
if(cljs.core.truth_(temp__5733__auto__)){
var spec = temp__5733__auto__;
return cljs.spec.alpha.conform.call(null,spec,x);
} else {
if(cljs.core.ifn_QMARK_.call(null,pred)){
if(cljs.core.truth_(cpred_QMARK_)){
return pred.call(null,x);
} else {
if(cljs.core.truth_(pred.call(null,x))){
return x;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}
} else {
throw (new Error([cljs.core.pr_str.call(null,form)," is not a fn, expected predicate fn"].join('')));
}
}
} else {
return x;
}
}));

(cljs.spec.alpha.dt.cljs$lang$maxFixedArity = 4);

/**
 * Helper function that returns true when x is valid for spec.
 */
cljs.spec.alpha.valid_QMARK_ = (function cljs$spec$alpha$valid_QMARK_(var_args){
var G__65824 = arguments.length;
switch (G__65824) {
case 2:
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,x){
var spec__$1 = cljs.spec.alpha.specize.call(null,spec);
return (!(cljs.spec.alpha.invalid_QMARK_.call(null,cljs.spec.alpha.conform_STAR_.call(null,spec__$1,x))));
}));

(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (spec,x,form){
var spec__$1 = cljs.spec.alpha.specize.call(null,spec,form);
return (!(cljs.spec.alpha.invalid_QMARK_.call(null,cljs.spec.alpha.conform_STAR_.call(null,spec__$1,x))));
}));

(cljs.spec.alpha.valid_QMARK_.cljs$lang$maxFixedArity = 3);

/**
 * internal helper function that returns true when x is valid for spec.
 */
cljs.spec.alpha.pvalid_QMARK_ = (function cljs$spec$alpha$pvalid_QMARK_(var_args){
var G__65827 = arguments.length;
switch (G__65827) {
case 2:
return cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return (!(cljs.spec.alpha.invalid_QMARK_.call(null,cljs.spec.alpha.dt.call(null,pred,x,new cljs.core.Keyword("cljs.spec.alpha","unknown","cljs.spec.alpha/unknown",651034818)))));
}));

(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return (!(cljs.spec.alpha.invalid_QMARK_.call(null,cljs.spec.alpha.dt.call(null,pred,x,form))));
}));

(cljs.spec.alpha.pvalid_QMARK_.cljs$lang$maxFixedArity = 3);

cljs.spec.alpha.explain_1 = (function cljs$spec$alpha$explain_1(form,pred,path,via,in$,v){
var pred__$1 = cljs.spec.alpha.maybe_spec.call(null,pred);
if(cljs.core.truth_(cljs.spec.alpha.spec_QMARK_.call(null,pred__$1))){
return cljs.spec.alpha.explain_STAR_.call(null,pred__$1,path,(function (){var temp__5733__auto__ = cljs.spec.alpha.spec_name.call(null,pred__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var name = temp__5733__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})(),in$,v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),form,new cljs.core.Keyword(null,"val","val",128701612),v,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});

/**
 * returns a generator for form f, which can be a keyword or a list
 *   starting with 'or or 'and.
 */
cljs.spec.alpha.k_gen = (function cljs$spec$alpha$k_gen(f){
if((f instanceof cljs.core.Keyword)){
return cljs.spec.gen.alpha.return$.call(null,f);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.first.call(null,f))){
return cljs.spec.alpha.or_k_gen.call(null,(1),cljs.core.rest.call(null,f));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.first.call(null,f))){
return cljs.spec.alpha.and_k_gen.call(null,cljs.core.rest.call(null,f));
} else {
return null;
}
}
}
});
/**
 * returns a tuple generator made up of generators for a random subset
 *   of min-count (default 0) to all elements in s.
 */
cljs.spec.alpha.or_k_gen = (function cljs$spec$alpha$or_k_gen(var_args){
var G__65830 = arguments.length;
switch (G__65830) {
case 1:
return cljs.spec.alpha.or_k_gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.or_k_gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.alpha.or_k_gen.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.spec.alpha.or_k_gen.call(null,(0),s);
}));

(cljs.spec.alpha.or_k_gen.cljs$core$IFn$_invoke$arity$2 = (function (min_count,s){
return cljs.spec.gen.alpha.bind.call(null,cljs.spec.gen.alpha.tuple.call(null,cljs.spec.gen.alpha.choose.call(null,min_count,cljs.core.count.call(null,s)),cljs.spec.gen.alpha.shuffle.call(null,cljs.core.map.call(null,cljs.spec.alpha.k_gen,s))),(function (p__65831){
var vec__65832 = p__65831;
var n = cljs.core.nth.call(null,vec__65832,(0),null);
var gens = cljs.core.nth.call(null,vec__65832,(1),null);
return cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,cljs.core.take.call(null,n,gens));
}));
}));

(cljs.spec.alpha.or_k_gen.cljs$lang$maxFixedArity = 2);

/**
 * returns a tuple generator made up of generators for every element
 *   in s.
 */
cljs.spec.alpha.and_k_gen = (function cljs$spec$alpha$and_k_gen(s){
return cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,cljs.core.map.call(null,cljs.spec.alpha.k_gen,s));
});
/**
 * Do not call this directly, use 'spec' with a map argument
 */
cljs.spec.alpha.map_spec_impl = (function cljs$spec$alpha$map_spec_impl(p__65839){
var map__65840 = p__65839;
var map__65840__$1 = (((((!((map__65840 == null))))?(((((map__65840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65840):map__65840);
var argm = map__65840__$1;
var opt = cljs.core.get.call(null,map__65840__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var req_un = cljs.core.get.call(null,map__65840__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt_un = cljs.core.get.call(null,map__65840__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
var gfn = cljs.core.get.call(null,map__65840__$1,new cljs.core.Keyword(null,"gfn","gfn",791517474));
var pred_exprs = cljs.core.get.call(null,map__65840__$1,new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395));
var keys_pred = cljs.core.get.call(null,map__65840__$1,new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739));
var opt_keys = cljs.core.get.call(null,map__65840__$1,new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261));
var req_specs = cljs.core.get.call(null,map__65840__$1,new cljs.core.Keyword(null,"req-specs","req-specs",553962313));
var req = cljs.core.get.call(null,map__65840__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var req_keys = cljs.core.get.call(null,map__65840__$1,new cljs.core.Keyword(null,"req-keys","req-keys",514319221));
var opt_specs = cljs.core.get.call(null,map__65840__$1,new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450));
var pred_forms = cljs.core.get.call(null,map__65840__$1,new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832));
var k__GT_s = cljs.core.zipmap.call(null,cljs.core.concat.call(null,req_keys,opt_keys),cljs.core.concat.call(null,req_specs,opt_specs));
var keys__GT_specnames = (function (p1__65836_SHARP_){
var or__4185__auto__ = k__GT_s.call(null,p1__65836_SHARP_);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return p1__65836_SHARP_;
}
});
var id = cljs.core.random_uuid.call(null);
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha65842 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha65842 = (function (keys__GT_specnames,opt,req_un,opt_un,gfn,pred_exprs,map__65840,keys_pred,argm,opt_keys,p__65839,req_specs,req,id,req_keys,opt_specs,k__GT_s,pred_forms,meta65843){
this.keys__GT_specnames = keys__GT_specnames;
this.opt = opt;
this.req_un = req_un;
this.opt_un = opt_un;
this.gfn = gfn;
this.pred_exprs = pred_exprs;
this.map__65840 = map__65840;
this.keys_pred = keys_pred;
this.argm = argm;
this.opt_keys = opt_keys;
this.p__65839 = p__65839;
this.req_specs = req_specs;
this.req = req;
this.id = id;
this.req_keys = req_keys;
this.opt_specs = opt_specs;
this.k__GT_s = k__GT_s;
this.pred_forms = pred_forms;
this.meta65843 = meta65843;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.alpha.t_cljs$spec$alpha65842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65844,meta65843__$1){
var self__ = this;
var _65844__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha65842(self__.keys__GT_specnames,self__.opt,self__.req_un,self__.opt_un,self__.gfn,self__.pred_exprs,self__.map__65840,self__.keys_pred,self__.argm,self__.opt_keys,self__.p__65839,self__.req_specs,self__.req,self__.id,self__.req_keys,self__.opt_specs,self__.k__GT_s,self__.pred_forms,meta65843__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha65842.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65844){
var self__ = this;
var _65844__$1 = this;
return self__.meta65843;
}));

(cljs.spec.alpha.t_cljs$spec$alpha65842.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha65842.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha65842.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha65842.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha65842.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.keys_pred.call(null,m))){
var reg = cljs.spec.alpha.registry.call(null);
var ret = m;
var G__65851 = m;
var vec__65852 = G__65851;
var seq__65853 = cljs.core.seq.call(null,vec__65852);
var first__65854 = cljs.core.first.call(null,seq__65853);
var seq__65853__$1 = cljs.core.next.call(null,seq__65853);
var vec__65855 = first__65854;
var k = cljs.core.nth.call(null,vec__65855,(0),null);
var v = cljs.core.nth.call(null,vec__65855,(1),null);
var ks = seq__65853__$1;
var keys = vec__65852;
var ret__$1 = ret;
var G__65851__$1 = G__65851;
while(true){
var ret__$2 = ret__$1;
var vec__65858 = G__65851__$1;
var seq__65859 = cljs.core.seq.call(null,vec__65858);
var first__65860 = cljs.core.first.call(null,seq__65859);
var seq__65859__$1 = cljs.core.next.call(null,seq__65859);
var vec__65861 = first__65860;
var k__$1 = cljs.core.nth.call(null,vec__65861,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__65861,(1),null);
var ks__$1 = seq__65859__$1;
var keys__$1 = vec__65858;
if(cljs.core.truth_(keys__$1)){
var sname = self__.keys__GT_specnames.call(null,k__$1);
var temp__5733__auto__ = cljs.core.get.call(null,reg,sname);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
var cv = cljs.spec.alpha.conform.call(null,s,v__$1);
if(cljs.spec.alpha.invalid_QMARK_.call(null,cv)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__65886 = (((cv === v__$1))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,cv));
var G__65887 = ks__$1;
ret__$1 = G__65886;
G__65851__$1 = G__65887;
continue;
}
} else {
var G__65888 = ret__$2;
var G__65889 = ks__$1;
ret__$1 = G__65888;
G__65851__$1 = G__65889;
continue;
}
} else {
return ret__$2;
}
break;
}
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha65842.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
var reg = cljs.spec.alpha.registry.call(null);
var ret = m;
var G__65867 = cljs.core.keys.call(null,m);
var vec__65868 = G__65867;
var seq__65869 = cljs.core.seq.call(null,vec__65868);
var first__65870 = cljs.core.first.call(null,seq__65869);
var seq__65869__$1 = cljs.core.next.call(null,seq__65869);
var k = first__65870;
var ks = seq__65869__$1;
var keys = vec__65868;
var ret__$1 = ret;
var G__65867__$1 = G__65867;
while(true){
var ret__$2 = ret__$1;
var vec__65874 = G__65867__$1;
var seq__65875 = cljs.core.seq.call(null,vec__65874);
var first__65876 = cljs.core.first.call(null,seq__65875);
var seq__65875__$1 = cljs.core.next.call(null,seq__65875);
var k__$1 = first__65876;
var ks__$1 = seq__65875__$1;
var keys__$1 = vec__65874;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specnames.call(null,k__$1))){
var cv = cljs.core.get.call(null,m,k__$1);
var v = cljs.spec.alpha.unform.call(null,self__.keys__GT_specnames.call(null,k__$1),cv);
var G__65890 = (((cv === v))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,v));
var G__65891 = ks__$1;
ret__$1 = G__65890;
G__65867__$1 = G__65891;
continue;
} else {
var G__65892 = ret__$2;
var G__65893 = ks__$1;
ret__$1 = G__65892;
G__65867__$1 = G__65893;
continue;
}
} else {
return ret__$2;
}
break;
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha65842.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if((!(cljs.core.map_QMARK_.call(null,x)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
var reg = cljs.spec.alpha.registry.call(null);
return cljs.core.apply.call(null,cljs.core.concat,(function (){var temp__5735__auto__ = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,(function (pred,form){
if(cljs.core.truth_(pred.call(null,x))){
return null;
} else {
return form;
}
}),self__.pred_exprs,self__.pred_forms)));
if(temp__5735__auto__){
var probs = temp__5735__auto__;
return cljs.core.map.call(null,(function (p1__65837_SHARP_){
return cljs.core.identity.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),p1__65837_SHARP_,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null));
}),probs);
} else {
return null;
}
})(),cljs.core.map.call(null,(function (p__65877){
var vec__65878 = p__65877;
var k = cljs.core.nth.call(null,vec__65878,(0),null);
var v = cljs.core.nth.call(null,vec__65878,(1),null);
if((((!(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specnames.call(null,k))))) || (cljs.spec.alpha.pvalid_QMARK_.call(null,self__.keys__GT_specnames.call(null,k),v,k)))){
return null;
} else {
return cljs.spec.alpha.explain_1.call(null,self__.keys__GT_specnames.call(null,k),self__.keys__GT_specnames.call(null,k),cljs.core.conj.call(null,path,k),via,cljs.core.conj.call(null,in$,k),v);
}
}),cljs.core.seq.call(null,x)));
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha65842.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var rmap__$1 = cljs.spec.alpha.inck.call(null,rmap,self__.id);
var rgen = (function (k,s){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.alpha.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k)], null);
});
var ogen = (function (k,s){
if(cljs.spec.alpha.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k)){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay((function (){
return cljs.spec.alpha.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
}),null)))], null);
}
});
var reqs = cljs.core.map.call(null,rgen,self__.req_keys,self__.req_specs);
var opts = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,ogen,self__.opt_keys,self__.opt_specs));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.second,reqs),cljs.core.map.call(null,cljs.core.second,opts)))){
return cljs.spec.gen.alpha.bind.call(null,cljs.spec.gen.alpha.tuple.call(null,cljs.spec.alpha.and_k_gen.call(null,self__.req),cljs.spec.alpha.or_k_gen.call(null,self__.opt),cljs.spec.alpha.and_k_gen.call(null,self__.req_un),cljs.spec.alpha.or_k_gen.call(null,self__.opt_un)),(function (p__65881){
var vec__65882 = p__65881;
var req_ks = cljs.core.nth.call(null,vec__65882,(0),null);
var opt_ks = cljs.core.nth.call(null,vec__65882,(1),null);
var req_un_ks = cljs.core.nth.call(null,vec__65882,(2),null);
var opt_un_ks = cljs.core.nth.call(null,vec__65882,(3),null);
var qks = cljs.core.flatten.call(null,cljs.core.concat.call(null,req_ks,opt_ks));
var unqks = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.keyword,cljs.core.name),cljs.core.flatten.call(null,cljs.core.concat.call(null,req_un_ks,opt_un_ks)));
return cljs.core.apply.call(null,cljs.spec.gen.alpha.hash_map,cljs.core.apply.call(null,cljs.core.concat,cljs.core.filter.call(null,(function (p1__65838_SHARP_){
return cljs.core.set.call(null,cljs.core.concat.call(null,qks,unqks)).call(null,cljs.core.first.call(null,p1__65838_SHARP_));
}),cljs.core.into.call(null,reqs,opts))));
}));
} else {
return null;
}
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha65842.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.map_spec_impl.call(null,cljs.core.assoc.call(null,self__.argm,new cljs.core.Keyword(null,"gfn","gfn",791517474),gfn__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha65842.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),(function (){var G__65885 = cljs.core.PersistentVector.EMPTY;
var G__65885__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.call(null,G__65885,new cljs.core.Keyword(null,"req","req",-326448303),self__.req):G__65885);
var G__65885__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.call(null,G__65885__$1,new cljs.core.Keyword(null,"opt","opt",-794706369),self__.opt):G__65885__$1);
var G__65885__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.call(null,G__65885__$2,new cljs.core.Keyword(null,"req-un","req-un",1074571008),self__.req_un):G__65885__$2);
if(cljs.core.truth_(self__.opt_un)){
return cljs.core.conj.call(null,G__65885__$3,new cljs.core.Keyword(null,"opt-un","opt-un",883442496),self__.opt_un);
} else {
return G__65885__$3;
}
})());
}));

(cljs.spec.alpha.t_cljs$spec$alpha65842.getBasis = (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys->specnames","keys->specnames",1791294693,null),new cljs.core.Symbol(null,"opt","opt",845825158,null),new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"map__65840","map__65840",-571969846,null),new cljs.core.Symbol(null,"keys-pred","keys-pred",-1795451030,null),new cljs.core.Symbol(null,"argm","argm",-181546357,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"p__65839","p__65839",457746509,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"k->s","k->s",-1685112801,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"meta65843","meta65843",658810615,null)], null);
}));

(cljs.spec.alpha.t_cljs$spec$alpha65842.cljs$lang$type = true);

(cljs.spec.alpha.t_cljs$spec$alpha65842.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha65842");

(cljs.spec.alpha.t_cljs$spec$alpha65842.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.spec.alpha/t_cljs$spec$alpha65842");
}));

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha65842.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha65842 = (function cljs$spec$alpha$map_spec_impl_$___GT_t_cljs$spec$alpha65842(keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,map__65840__$2,keys_pred__$1,argm__$1,opt_keys__$1,p__65839__$1,req_specs__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta65843){
return (new cljs.spec.alpha.t_cljs$spec$alpha65842(keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,map__65840__$2,keys_pred__$1,argm__$1,opt_keys__$1,p__65839__$1,req_specs__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta65843));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha65842(keys__GT_specnames,opt,req_un,opt_un,gfn,pred_exprs,map__65840__$1,keys_pred,argm,opt_keys,p__65839,req_specs,req,id,req_keys,opt_specs,k__GT_s,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'spec'
 */
cljs.spec.alpha.spec_impl = (function cljs$spec$alpha$spec_impl(var_args){
var G__65895 = arguments.length;
switch (G__65895) {
case 4:
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,gfn,cpred_QMARK_){
return cljs.spec.alpha.spec_impl.call(null,form,pred,gfn,cpred_QMARK_,null);
}));

(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5 = (function (form,pred,gfn,cpred_QMARK_,unc){
if(cljs.core.truth_(cljs.spec.alpha.spec_QMARK_.call(null,pred))){
var G__65896 = pred;
if(cljs.core.truth_(gfn)){
return cljs.spec.alpha.with_gen.call(null,G__65896,gfn);
} else {
return G__65896;
}
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_.call(null,pred))){
return cljs.spec.alpha.regex_spec_impl.call(null,pred,gfn);
} else {
if(cljs.core.ident_QMARK_.call(null,pred)){
var G__65897 = cljs.spec.alpha.the_spec.call(null,pred);
if(cljs.core.truth_(gfn)){
return cljs.spec.alpha.with_gen.call(null,G__65897,gfn);
} else {
return G__65897;
}
} else {
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha65898 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha65898 = (function (form,pred,gfn,cpred_QMARK_,unc,meta65899){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.cpred_QMARK_ = cpred_QMARK_;
this.unc = unc;
this.meta65899 = meta65899;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.alpha.t_cljs$spec$alpha65898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65900,meta65899__$1){
var self__ = this;
var _65900__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha65898(self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,self__.unc,meta65899__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha65898.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65900){
var self__ = this;
var _65900__$1 = this;
return self__.meta65899;
}));

(cljs.spec.alpha.t_cljs$spec$alpha65898.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha65898.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha65898.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha65898.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha65898.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ret = self__.pred.call(null,x);
if(cljs.core.truth_(self__.cpred_QMARK_)){
return ret;
} else {
if(cljs.core.truth_(ret)){
return x;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha65898.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.cpred_QMARK_)){
if(cljs.core.truth_(self__.unc)){
return self__.unc.call(null,x);
} else {
throw (new Error("no unform fn for conformer"));
}
} else {
return x;
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha65898.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.spec.alpha.invalid_QMARK_.call(null,cljs.spec.alpha.dt.call(null,self__.pred,x,self__.form,self__.cpred_QMARK_))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),self__.form,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return null;
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha65898.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gen.alpha.gen_for_pred.call(null,self__.pred);
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha65898.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.spec_impl.call(null,self__.form,self__.pred,gfn__$1,self__.cpred_QMARK_,self__.unc);
}));

(cljs.spec.alpha.t_cljs$spec$alpha65898.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.form;
}));

(cljs.spec.alpha.t_cljs$spec$alpha65898.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"cpred?","cpred?",35589515,null),new cljs.core.Symbol(null,"unc","unc",-465250751,null),new cljs.core.Symbol(null,"meta65899","meta65899",1190503530,null)], null);
}));

(cljs.spec.alpha.t_cljs$spec$alpha65898.cljs$lang$type = true);

(cljs.spec.alpha.t_cljs$spec$alpha65898.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha65898");

(cljs.spec.alpha.t_cljs$spec$alpha65898.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.spec.alpha/t_cljs$spec$alpha65898");
}));

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha65898.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha65898 = (function cljs$spec$alpha$__GT_t_cljs$spec$alpha65898(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta65899){
return (new cljs.spec.alpha.t_cljs$spec$alpha65898(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta65899));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha65898(form,pred,gfn,cpred_QMARK_,unc,cljs.core.PersistentArrayMap.EMPTY));

}
}
}
}));

(cljs.spec.alpha.spec_impl.cljs$lang$maxFixedArity = 5);

/**
 * Do not call this directly, use 'multi-spec'
 */
cljs.spec.alpha.multi_spec_impl = (function cljs$spec$alpha$multi_spec_impl(var_args){
var G__65908 = arguments.length;
switch (G__65908) {
case 3:
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,mmvar,retag){
return cljs.spec.alpha.multi_spec_impl.call(null,form,mmvar,retag,null);
}));

(cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,mmvar,retag,gfn){
var id = cljs.core.random_uuid.call(null);
var predx = (function (p1__65902_SHARP_){
var mm = cljs.core.deref.call(null,mmvar);
var and__4174__auto__ = cljs.core._get_method.call(null,mm,cljs.core._dispatch_fn.call(null,mm).call(null,p1__65902_SHARP_));
if(cljs.core.truth_(and__4174__auto__)){
return mm.call(null,p1__65902_SHARP_);
} else {
return and__4174__auto__;
}
});
var dval = (function (p1__65903_SHARP_){
return cljs.core._dispatch_fn.call(null,cljs.core.deref.call(null,mmvar)).call(null,p1__65903_SHARP_);
});
var tag = (((retag instanceof cljs.core.Keyword))?(function (p1__65904_SHARP_,p2__65905_SHARP_){
return cljs.core.assoc.call(null,p1__65904_SHARP_,retag,p2__65905_SHARP_);
}):retag);
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha65909 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha65909 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta65910){
this.form = form;
this.mmvar = mmvar;
this.retag = retag;
this.gfn = gfn;
this.id = id;
this.predx = predx;
this.dval = dval;
this.tag = tag;
this.meta65910 = meta65910;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.alpha.t_cljs$spec$alpha65909.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65911,meta65910__$1){
var self__ = this;
var _65911__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha65909(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta65910__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha65909.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65911){
var self__ = this;
var _65911__$1 = this;
return self__.meta65910;
}));

(cljs.spec.alpha.t_cljs$spec$alpha65909.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha65909.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha65909.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha65909.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha65909.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__5733__auto__)){
var pred = temp__5733__auto__;
return cljs.spec.alpha.dt.call(null,pred,x,self__.form);
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha65909.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__5733__auto__)){
var pred = temp__5733__auto__;
return cljs.spec.alpha.unform.call(null,pred,x);
} else {
throw (new Error(["No method of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.form)," for dispatch value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.dval.call(null,x))].join('')));
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha65909.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var dv = self__.dval.call(null,x);
var path__$1 = cljs.core.conj.call(null,path,dv);
var temp__5733__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__5733__auto__)){
var pred = temp__5733__auto__;
return cljs.spec.alpha.explain_1.call(null,self__.form,pred,path__$1,via,in$,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"pred","pred",1927423397),self__.form,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"reason","reason",-2070751759),"no method",new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha65909.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = (function (p__65912){
var vec__65913 = p__65912;
var k = cljs.core.nth.call(null,vec__65913,(0),null);
var f = cljs.core.nth.call(null,vec__65913,(1),null);
var p = f.call(null,null);
var rmap__$1 = cljs.spec.alpha.inck.call(null,rmap,self__.id);
if(cljs.spec.alpha.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k)){
return null;
} else {
return cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay((function (){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__65906_SHARP_){
return self__.tag.call(null,p1__65906_SHARP_,k);
}),cljs.spec.alpha.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,(new cljs.core.List(null,new cljs.core.Symbol(null,"method","method",1696235119,null),(new cljs.core.List(null,self__.form,(new cljs.core.List(null,k,null,(1),null)),(2),null)),(3),null))));
}),null)));
}
});
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,cljs.core.remove.call(null,(function (p__65916){
var vec__65917 = p__65916;
var k = cljs.core.nth.call(null,vec__65917,(0),null);
return cljs.spec.alpha.invalid_QMARK_.call(null,k);
}),cljs.core.methods$.call(null,cljs.core.deref.call(null,self__.mmvar)))));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.spec.gen.alpha.one_of.call(null,gs);
} else {
return null;
}
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha65909.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.multi_spec_impl.call(null,self__.form,self__.mmvar,self__.retag,gfn__$1);
}));

(cljs.spec.alpha.t_cljs$spec$alpha65909.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","multi-spec","cljs.spec.alpha/multi-spec",175821274,null),null,(1),null)),(new cljs.core.List(null,self__.form,null,(1),null)),(new cljs.core.List(null,self__.retag,null,(1),null)))));
}));

(cljs.spec.alpha.t_cljs$spec$alpha65909.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"mmvar","mmvar",-1714325675,null),new cljs.core.Symbol(null,"retag","retag",528972725,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"predx","predx",2063470948,null),new cljs.core.Symbol(null,"dval","dval",835211877,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta65910","meta65910",-773684013,null)], null);
}));

(cljs.spec.alpha.t_cljs$spec$alpha65909.cljs$lang$type = true);

(cljs.spec.alpha.t_cljs$spec$alpha65909.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha65909");

(cljs.spec.alpha.t_cljs$spec$alpha65909.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.spec.alpha/t_cljs$spec$alpha65909");
}));

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha65909.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha65909 = (function cljs$spec$alpha$__GT_t_cljs$spec$alpha65909(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta65910){
return (new cljs.spec.alpha.t_cljs$spec$alpha65909(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta65910));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha65909(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.spec.alpha.multi_spec_impl.cljs$lang$maxFixedArity = 4);

/**
 * Do not call this directly, use 'tuple'
 */
cljs.spec.alpha.tuple_impl = (function cljs$spec$alpha$tuple_impl(var_args){
var G__65922 = arguments.length;
switch (G__65922) {
case 2:
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2 = (function (forms,preds){
return cljs.spec.alpha.tuple_impl.call(null,forms,preds,null);
}));

(cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3 = (function (forms,preds,gfn){
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.call(null,cljs.spec.alpha.specize,preds,forms);
}),null));
var cnt = cljs.core.count.call(null,preds);
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha65923 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha65923 = (function (forms,preds,gfn,specs,cnt,meta65924){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cnt = cnt;
this.meta65924 = meta65924;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.alpha.t_cljs$spec$alpha65923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65925,meta65924__$1){
var self__ = this;
var _65925__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha65923(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cnt,meta65924__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha65923.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65925){
var self__ = this;
var _65925__$1 = this;
return self__.meta65924;
}));

(cljs.spec.alpha.t_cljs$spec$alpha65923.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha65923.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha65923.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha65923.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha65923.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var specs__$1 = cljs.core.deref.call(null,self__.specs);
if((!(((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),self__.cnt)))))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,self__.cnt)){
return ret;
} else {
var v = x.call(null,i);
var cv = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,i),v);
if(cljs.spec.alpha.invalid_QMARK_.call(null,cv)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__65927 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,cv));
var G__65928 = (i + (1));
ret = G__65927;
i = G__65928;
continue;
}
}
break;
}
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha65923.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))))){
} else {
throw (new Error("Assert failed: (c/and (vector? x) (= (count x) (count preds)))"));
}

var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,x))){
return ret;
} else {
var cv = x.call(null,i);
var v = cljs.spec.alpha.unform.call(null,self__.preds.call(null,i),cv);
var G__65929 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,v));
var G__65930 = (i + (1));
ret = G__65929;
i = G__65930;
continue;
}
break;
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha65923.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if((!(cljs.core.vector_QMARK_.call(null,x)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.count.call(null,self__.preds),null,(1),null))))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,(function (i,form,pred){
var v = x.call(null,i);
if(cljs.spec.alpha.pvalid_QMARK_.call(null,pred,v)){
return null;
} else {
return cljs.spec.alpha.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,i),via,cljs.core.conj.call(null,in$,i),v);
}
}),cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.forms,self__.preds));

}
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha65923.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = (function (i,p,f){
return cljs.spec.alpha.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,i),rmap,f);
});
var gs = cljs.core.map.call(null,gen,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.preds,self__.forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gs);
} else {
return null;
}
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha65923.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.tuple_impl.call(null,self__.forms,self__.preds,gfn__$1);
}));

(cljs.spec.alpha.t_cljs$spec$alpha65923.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),null,(1),null)),self__.forms)));
}));

(cljs.spec.alpha.t_cljs$spec$alpha65923.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.Symbol(null,"meta65924","meta65924",-1501332073,null)], null);
}));

(cljs.spec.alpha.t_cljs$spec$alpha65923.cljs$lang$type = true);

(cljs.spec.alpha.t_cljs$spec$alpha65923.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha65923");

(cljs.spec.alpha.t_cljs$spec$alpha65923.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.spec.alpha/t_cljs$spec$alpha65923");
}));

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha65923.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha65923 = (function cljs$spec$alpha$__GT_t_cljs$spec$alpha65923(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta65924){
return (new cljs.spec.alpha.t_cljs$spec$alpha65923(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta65924));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha65923(forms,preds,gfn,specs,cnt,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.spec.alpha.tuple_impl.cljs$lang$maxFixedArity = 3);

cljs.spec.alpha.tagged_ret = (function cljs$spec$alpha$tagged_ret(tag,ret){
return (new cljs.core.MapEntry(tag,ret,null));
});
/**
 * Do not call this directly, use 'or'
 */
cljs.spec.alpha.or_spec_impl = (function cljs$spec$alpha$or_spec_impl(keys,forms,preds,gfn){
var id = cljs.core.random_uuid.call(null);
var kps = cljs.core.zipmap.call(null,keys,preds);
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.call(null,cljs.spec.alpha.specize,preds,forms);
}),null));
var cform = (function (){var G__65931 = cljs.core.count.call(null,preds);
switch (G__65931) {
case (2):
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret)){
var ret__$1 = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(1)),x);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret__$1)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.spec.alpha.tagged_ret.call(null,keys.call(null,(1)),ret__$1);
}
} else {
return cljs.spec.alpha.tagged_ret.call(null,keys.call(null,(0)),ret);
}
});

break;
case (3):
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret)){
var ret__$1 = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(1)),x);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret__$1)){
var ret__$2 = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(2)),x);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret__$2)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.spec.alpha.tagged_ret.call(null,keys.call(null,(2)),ret__$2);
}
} else {
return cljs.spec.alpha.tagged_ret.call(null,keys.call(null,(1)),ret__$1);
}
} else {
return cljs.spec.alpha.tagged_ret.call(null,keys.call(null,(0)),ret);
}
});

break;
default:
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var i = (0);
while(true){
if((i < cljs.core.count.call(null,specs__$1))){
var spec = specs__$1.call(null,i);
var ret = cljs.spec.alpha.conform_STAR_.call(null,spec,x);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret)){
var G__65940 = (i + (1));
i = G__65940;
continue;
} else {
return cljs.spec.alpha.tagged_ret.call(null,keys.call(null,i),ret);
}
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
break;
}
});

}
})();
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha65932 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha65932 = (function (keys,forms,preds,gfn,id,kps,specs,cform,meta65933){
this.keys = keys;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.id = id;
this.kps = kps;
this.specs = specs;
this.cform = cform;
this.meta65933 = meta65933;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.alpha.t_cljs$spec$alpha65932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65934,meta65933__$1){
var self__ = this;
var _65934__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha65932(self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.kps,self__.specs,self__.cform,meta65933__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha65932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65934){
var self__ = this;
var _65934__$1 = this;
return self__.meta65933;
}));

(cljs.spec.alpha.t_cljs$spec$alpha65932.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha65932.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha65932.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha65932.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha65932.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return self__.cform.call(null,x);
}));

(cljs.spec.alpha.t_cljs$spec$alpha65932.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,p__65935){
var self__ = this;
var vec__65936 = p__65935;
var k = cljs.core.nth.call(null,vec__65936,(0),null);
var x = cljs.core.nth.call(null,vec__65936,(1),null);
var ___$1 = this;
return cljs.spec.alpha.unform.call(null,self__.kps.call(null,k),x);
}));

(cljs.spec.alpha.t_cljs$spec$alpha65932.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (this$,path,via,in$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.spec.alpha.pvalid_QMARK_.call(null,this$__$1,x)){
return null;
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,(function (k,form,pred){
if(cljs.spec.alpha.pvalid_QMARK_.call(null,pred,x)){
return null;
} else {
return cljs.spec.alpha.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,k),via,in$,x);
}
}),self__.keys,self__.forms,self__.preds));
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha65932.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = (function (k,p,f){
var rmap__$1 = cljs.spec.alpha.inck.call(null,rmap,self__.id);
if(cljs.spec.alpha.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k)){
return null;
} else {
return cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay((function (){
return cljs.spec.alpha.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,f);
}),null)));
}
});
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,self__.keys,self__.preds,self__.forms));
if(cljs.core.empty_QMARK_.call(null,gs)){
return null;
} else {
return cljs.spec.gen.alpha.one_of.call(null,gs);
}
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha65932.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.or_spec_impl.call(null,self__.keys,self__.forms,self__.preds,gfn__$1);
}));

(cljs.spec.alpha.t_cljs$spec$alpha65932.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),null,(1),null)),cljs.core.mapcat.call(null,cljs.core.vector,self__.keys,self__.forms))));
}));

(cljs.spec.alpha.t_cljs$spec$alpha65932.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"kps","kps",-1157342767,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta65933","meta65933",408409033,null)], null);
}));

(cljs.spec.alpha.t_cljs$spec$alpha65932.cljs$lang$type = true);

(cljs.spec.alpha.t_cljs$spec$alpha65932.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha65932");

(cljs.spec.alpha.t_cljs$spec$alpha65932.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.spec.alpha/t_cljs$spec$alpha65932");
}));

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha65932.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha65932 = (function cljs$spec$alpha$or_spec_impl_$___GT_t_cljs$spec$alpha65932(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta65933){
return (new cljs.spec.alpha.t_cljs$spec$alpha65932(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta65933));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha65932(keys,forms,preds,gfn,id,kps,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.and_preds = (function cljs$spec$alpha$and_preds(x,preds,forms){
var ret = x;
var G__65947 = preds;
var vec__65949 = G__65947;
var seq__65950 = cljs.core.seq.call(null,vec__65949);
var first__65951 = cljs.core.first.call(null,seq__65950);
var seq__65950__$1 = cljs.core.next.call(null,seq__65950);
var pred = first__65951;
var preds__$1 = seq__65950__$1;
var G__65948 = forms;
var vec__65952 = G__65948;
var seq__65953 = cljs.core.seq.call(null,vec__65952);
var first__65954 = cljs.core.first.call(null,seq__65953);
var seq__65953__$1 = cljs.core.next.call(null,seq__65953);
var form = first__65954;
var forms__$1 = seq__65953__$1;
var ret__$1 = ret;
var G__65947__$1 = G__65947;
var G__65948__$1 = G__65948;
while(true){
var ret__$2 = ret__$1;
var vec__65955 = G__65947__$1;
var seq__65956 = cljs.core.seq.call(null,vec__65955);
var first__65957 = cljs.core.first.call(null,seq__65956);
var seq__65956__$1 = cljs.core.next.call(null,seq__65956);
var pred__$1 = first__65957;
var preds__$2 = seq__65956__$1;
var vec__65958 = G__65948__$1;
var seq__65959 = cljs.core.seq.call(null,vec__65958);
var first__65960 = cljs.core.first.call(null,seq__65959);
var seq__65959__$1 = cljs.core.next.call(null,seq__65959);
var form__$1 = first__65960;
var forms__$2 = seq__65959__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.alpha.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.spec.alpha.invalid_QMARK_.call(null,nret)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__65961 = nret;
var G__65962 = preds__$2;
var G__65963 = forms__$2;
ret__$1 = G__65961;
G__65947__$1 = G__65962;
G__65948__$1 = G__65963;
continue;
}
} else {
return ret__$2;
}
break;
}
});
cljs.spec.alpha.explain_pred_list = (function cljs$spec$alpha$explain_pred_list(forms,preds,path,via,in$,x){
var ret = x;
var G__65970 = forms;
var vec__65972 = G__65970;
var seq__65973 = cljs.core.seq.call(null,vec__65972);
var first__65974 = cljs.core.first.call(null,seq__65973);
var seq__65973__$1 = cljs.core.next.call(null,seq__65973);
var form = first__65974;
var forms__$1 = seq__65973__$1;
var G__65971 = preds;
var vec__65975 = G__65971;
var seq__65976 = cljs.core.seq.call(null,vec__65975);
var first__65977 = cljs.core.first.call(null,seq__65976);
var seq__65976__$1 = cljs.core.next.call(null,seq__65976);
var pred = first__65977;
var preds__$1 = seq__65976__$1;
var ret__$1 = ret;
var G__65970__$1 = G__65970;
var G__65971__$1 = G__65971;
while(true){
var ret__$2 = ret__$1;
var vec__65978 = G__65970__$1;
var seq__65979 = cljs.core.seq.call(null,vec__65978);
var first__65980 = cljs.core.first.call(null,seq__65979);
var seq__65979__$1 = cljs.core.next.call(null,seq__65979);
var form__$1 = first__65980;
var forms__$2 = seq__65979__$1;
var vec__65981 = G__65971__$1;
var seq__65982 = cljs.core.seq.call(null,vec__65981);
var first__65983 = cljs.core.first.call(null,seq__65982);
var seq__65982__$1 = cljs.core.next.call(null,seq__65982);
var pred__$1 = first__65983;
var preds__$2 = seq__65982__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.alpha.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.spec.alpha.invalid_QMARK_.call(null,nret)){
return cljs.spec.alpha.explain_1.call(null,form__$1,pred__$1,path,via,in$,ret__$2);
} else {
var G__65984 = nret;
var G__65985 = forms__$2;
var G__65986 = preds__$2;
ret__$1 = G__65984;
G__65970__$1 = G__65985;
G__65971__$1 = G__65986;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Do not call this directly, use 'and'
 */
cljs.spec.alpha.and_spec_impl = (function cljs$spec$alpha$and_spec_impl(forms,preds,gfn){
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.call(null,cljs.spec.alpha.specize,preds,forms);
}),null));
var cform = (function (){var G__65989 = cljs.core.count.call(null,preds);
switch (G__65989) {
case (2):
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(1)),ret);
}
});

break;
case (3):
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var ret__$1 = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(1)),ret);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret__$1)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,(2)),ret__$1);
}
}
});

break;
default:
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = x;
var i = (0);
while(true){
if((i < cljs.core.count.call(null,specs__$1))){
var nret = cljs.spec.alpha.conform_STAR_.call(null,specs__$1.call(null,i),ret);
if(cljs.spec.alpha.invalid_QMARK_.call(null,nret)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__65994 = nret;
var G__65995 = (i + (1));
ret = G__65994;
i = G__65995;
continue;
}
} else {
return ret;
}
break;
}
});

}
})();
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha65990 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha65990 = (function (forms,preds,gfn,specs,cform,meta65991){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cform = cform;
this.meta65991 = meta65991;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.alpha.t_cljs$spec$alpha65990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65992,meta65991__$1){
var self__ = this;
var _65992__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha65990(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cform,meta65991__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha65990.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65992){
var self__ = this;
var _65992__$1 = this;
return self__.meta65991;
}));

(cljs.spec.alpha.t_cljs$spec$alpha65990.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha65990.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha65990.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha65990.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha65990.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return self__.cform.call(null,x);
}));

(cljs.spec.alpha.t_cljs$spec$alpha65990.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.call(null,(function (p1__65988_SHARP_,p2__65987_SHARP_){
return cljs.spec.alpha.unform.call(null,p2__65987_SHARP_,p1__65988_SHARP_);
}),x,cljs.core.reverse.call(null,self__.preds));
}));

(cljs.spec.alpha.t_cljs$spec$alpha65990.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.explain_pred_list.call(null,self__.forms,self__.preds,path,via,in$,x);
}));

(cljs.spec.alpha.t_cljs$spec$alpha65990.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.alpha.gensub.call(null,cljs.core.first.call(null,self__.preds),overrides,path,rmap,cljs.core.first.call(null,self__.forms));
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha65990.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.and_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
}));

(cljs.spec.alpha.t_cljs$spec$alpha65990.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),null,(1),null)),self__.forms)));
}));

(cljs.spec.alpha.t_cljs$spec$alpha65990.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta65991","meta65991",1215523602,null)], null);
}));

(cljs.spec.alpha.t_cljs$spec$alpha65990.cljs$lang$type = true);

(cljs.spec.alpha.t_cljs$spec$alpha65990.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha65990");

(cljs.spec.alpha.t_cljs$spec$alpha65990.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.spec.alpha/t_cljs$spec$alpha65990");
}));

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha65990.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha65990 = (function cljs$spec$alpha$and_spec_impl_$___GT_t_cljs$spec$alpha65990(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta65991){
return (new cljs.spec.alpha.t_cljs$spec$alpha65990(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta65991));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha65990(forms,preds,gfn,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.coll_prob = (function cljs$spec$alpha$coll_prob(x,kfn,kform,distinct,count,min_count,max_count,path,via,in$){
var pred = (function (){var or__4185__auto__ = kfn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.coll_QMARK_;
}
})();
var kform__$1 = (function (){var or__4185__auto__ = kform;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null);
}
})();
if((!(cljs.spec.alpha.pvalid_QMARK_.call(null,pred,x)))){
return cljs.spec.alpha.explain_1.call(null,kform__$1,pred,path,via,in$,x);
} else {
if(cljs.core.truth_((function (){var and__4174__auto__ = count;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not_EQ_.call(null,count,cljs.core.bounded_count.call(null,count,x));
} else {
return and__4174__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,count,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))))),null,(1),null))))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__4174__auto__ = (function (){var or__4185__auto__ = min_count;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return max_count;
}
})();
if(cljs.core.truth_(and__4174__auto__)){
return (!(((((function (){var or__4185__auto__ = min_count;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count.call(null,(cljs.core.truth_(max_count)?(max_count + (1)):min_count),x))) && ((cljs.core.bounded_count.call(null,(cljs.core.truth_(max_count)?(max_count + (1)):min_count),x) <= (function (){var or__4185__auto__ = max_count;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (9007199254740991);
}
})())))));
} else {
return and__4174__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),null,(1),null)),(new cljs.core.List(null,(function (){var or__4185__auto__ = min_count;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (0);
}
})(),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,(function (){var or__4185__auto__ = max_count;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (9007199254740991);
}
})(),null,(1),null))))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__4174__auto__ = distinct;
if(cljs.core.truth_(and__4174__auto__)){
return (((!(cljs.core.empty_QMARK_.call(null,x)))) && (cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core.distinct_QMARK_,x))));
} else {
return and__4174__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"distinct?","distinct?",-1684357959,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return null;
}
}
}
}
});
/**
 * Do not call this directly, use 'merge'
 */
cljs.spec.alpha.merge_spec_impl = (function cljs$spec$alpha$merge_spec_impl(forms,preds,gfn){
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha66004 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha66004 = (function (forms,preds,gfn,meta66005){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta66005 = meta66005;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.alpha.t_cljs$spec$alpha66004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66006,meta66005__$1){
var self__ = this;
var _66006__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha66004(self__.forms,self__.preds,self__.gfn,meta66005__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha66004.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66006){
var self__ = this;
var _66006__$1 = this;
return self__.meta66005;
}));

(cljs.spec.alpha.t_cljs$spec$alpha66004.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha66004.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha66004.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha66004.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha66004.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ms = cljs.core.map.call(null,(function (p1__65996_SHARP_,p2__65997_SHARP_){
return cljs.spec.alpha.dt.call(null,p1__65996_SHARP_,x,p2__65997_SHARP_);
}),self__.preds,self__.forms);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.spec.alpha.invalid_QMARK_,ms))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.core.apply.call(null,cljs.core.merge,ms);
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha66004.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p1__65998_SHARP_){
return cljs.spec.alpha.unform.call(null,p1__65998_SHARP_,x);
}),cljs.core.reverse.call(null,self__.preds)));
}));

(cljs.spec.alpha.t_cljs$spec$alpha66004.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,(function (p1__65999_SHARP_,p2__66000_SHARP_){
return cljs.spec.alpha.explain_1.call(null,p1__65999_SHARP_,p2__66000_SHARP_,path,via,in$,x);
}),self__.forms,self__.preds));
}));

(cljs.spec.alpha.t_cljs$spec$alpha66004.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__66001_SHARP_){
return cljs.core.apply.call(null,cljs.core.merge,p1__66001_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,cljs.core.map.call(null,(function (p1__66002_SHARP_,p2__66003_SHARP_){
return cljs.spec.alpha.gensub.call(null,p1__66002_SHARP_,overrides,path,rmap,p2__66003_SHARP_);
}),self__.preds,self__.forms)));
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha66004.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.merge_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
}));

(cljs.spec.alpha.t_cljs$spec$alpha66004.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","merge","cljs.spec.alpha/merge",1420080689,null),null,(1),null)),self__.forms)));
}));

(cljs.spec.alpha.t_cljs$spec$alpha66004.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta66005","meta66005",1365963044,null)], null);
}));

(cljs.spec.alpha.t_cljs$spec$alpha66004.cljs$lang$type = true);

(cljs.spec.alpha.t_cljs$spec$alpha66004.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha66004");

(cljs.spec.alpha.t_cljs$spec$alpha66004.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.spec.alpha/t_cljs$spec$alpha66004");
}));

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha66004.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha66004 = (function cljs$spec$alpha$merge_spec_impl_$___GT_t_cljs$spec$alpha66004(forms__$1,preds__$1,gfn__$1,meta66005){
return (new cljs.spec.alpha.t_cljs$spec$alpha66004(forms__$1,preds__$1,gfn__$1,meta66005));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha66004(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.empty_coll = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.PersistentVector.EMPTY,new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Symbol("cljs.core","list?","cljs.core/list?",-684796618,null),cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Do not call this directly, use 'every', 'every-kv', 'coll-of' or 'map-of'
 */
cljs.spec.alpha.every_impl = (function cljs$spec$alpha$every_impl(var_args){
var G__66012 = arguments.length;
switch (G__66012) {
case 3:
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,pred,opts){
return cljs.spec.alpha.every_impl.call(null,form,pred,opts,null);
}));

(cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,p__66013,gfn){
var map__66014 = p__66013;
var map__66014__$1 = (((((!((map__66014 == null))))?(((((map__66014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66014):map__66014);
var opts = map__66014__$1;
var max_count = cljs.core.get.call(null,map__66014__$1,new cljs.core.Keyword(null,"max-count","max-count",1539185305));
var kind_form = cljs.core.get.call(null,map__66014__$1,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697));
var gen_max = cljs.core.get.call(null,map__66014__$1,new cljs.core.Keyword(null,"gen-max","gen-max",-793680445),(20));
var cpred = cljs.core.get.call(null,map__66014__$1,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218));
var conform_keys = cljs.core.get.call(null,map__66014__$1,new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814));
var describe_form = cljs.core.get.call(null,map__66014__$1,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911));
var distinct = cljs.core.get.call(null,map__66014__$1,new cljs.core.Keyword(null,"distinct","distinct",-1788879121));
var kfn = cljs.core.get.call(null,map__66014__$1,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897));
var count = cljs.core.get.call(null,map__66014__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var min_count = cljs.core.get.call(null,map__66014__$1,new cljs.core.Keyword(null,"min-count","min-count",1594709013));
var kind = cljs.core.get.call(null,map__66014__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var conform_all = cljs.core.get.call(null,map__66014__$1,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917));
var conform_into = cljs.core.get.call(null,map__66014__$1,new cljs.core.Keyword(null,"into","into",-150836029));
var gen_into = (cljs.core.truth_(conform_into)?cljs.core.empty.call(null,conform_into):cljs.core.get.call(null,cljs.spec.alpha.empty_coll,kind_form));
var spec = (new cljs.core.Delay((function (){
return cljs.spec.alpha.specize.call(null,pred);
}),null));
var check_QMARK_ = (function (p1__66007_SHARP_){
return cljs.spec.alpha.valid_QMARK_.call(null,cljs.core.deref.call(null,spec),p1__66007_SHARP_);
});
var kfn__$1 = (function (){var or__4185__auto__ = kfn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (function (i,v){
return i;
});
}
})();
var addcv = (function (ret,i,v,cv){
return cljs.core.conj.call(null,ret,cv);
});
var cfns = (function (x){
if(((cljs.core.vector_QMARK_.call(null,x)) && (((cljs.core.not.call(null,conform_into)) || (cljs.core.vector_QMARK_.call(null,conform_into)))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.identity,(function (ret,i,v,cv){
if((v === cv)){
return ret;
} else {
return cljs.core.assoc.call(null,ret,i,cv);
}
}),cljs.core.identity], null);
} else {
if(cljs.core.truth_(((cljs.core.map_QMARK_.call(null,x))?(function (){var or__4185__auto__ = (function (){var and__4174__auto__ = kind;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not.call(null,conform_into);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.map_QMARK_.call(null,conform_into);
}
})():false))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(conform_keys)?cljs.core.empty:cljs.core.identity),(function (ret,i,v,cv){
if((((v === cv)) && (cljs.core.not.call(null,conform_keys)))){
return ret;
} else {
return cljs.core.assoc.call(null,ret,cljs.core.nth.call(null,(cljs.core.truth_(conform_keys)?cv:v),(0)),cljs.core.nth.call(null,cv,(1)));
}
}),cljs.core.identity], null);
} else {
if(((cljs.core.list_QMARK_.call(null,conform_into)) || (cljs.core.seq_QMARK_.call(null,conform_into)) || (((cljs.core.not.call(null,conform_into)) && (((cljs.core.list_QMARK_.call(null,x)) || (cljs.core.seq_QMARK_.call(null,x)))))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.empty,addcv,cljs.core.reverse], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__66008_SHARP_){
return cljs.core.empty.call(null,(function (){var or__4185__auto__ = conform_into;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return p1__66008_SHARP_;
}
})());
}),addcv,cljs.core.identity], null);

}
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha66016 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha66016 = (function (form,max_count,check_QMARK_,p__66013,gfn,gen_max,pred,cpred,conform_keys,kind_form,addcv,cfns,describe_form,distinct,spec,map__66014,kfn,gen_into,count,min_count,opts,kind,conform_all,conform_into,meta66017){
this.form = form;
this.max_count = max_count;
this.check_QMARK_ = check_QMARK_;
this.p__66013 = p__66013;
this.gfn = gfn;
this.gen_max = gen_max;
this.pred = pred;
this.cpred = cpred;
this.conform_keys = conform_keys;
this.kind_form = kind_form;
this.addcv = addcv;
this.cfns = cfns;
this.describe_form = describe_form;
this.distinct = distinct;
this.spec = spec;
this.map__66014 = map__66014;
this.kfn = kfn;
this.gen_into = gen_into;
this.count = count;
this.min_count = min_count;
this.opts = opts;
this.kind = kind;
this.conform_all = conform_all;
this.conform_into = conform_into;
this.meta66017 = meta66017;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.alpha.t_cljs$spec$alpha66016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66018,meta66017__$1){
var self__ = this;
var _66018__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha66016(self__.form,self__.max_count,self__.check_QMARK_,self__.p__66013,self__.gfn,self__.gen_max,self__.pred,self__.cpred,self__.conform_keys,self__.kind_form,self__.addcv,self__.cfns,self__.describe_form,self__.distinct,self__.spec,self__.map__66014,self__.kfn,self__.gen_into,self__.count,self__.min_count,self__.opts,self__.kind,self__.conform_all,self__.conform_into,meta66017__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha66016.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66018){
var self__ = this;
var _66018__$1 = this;
return self__.meta66017;
}));

(cljs.spec.alpha.t_cljs$spec$alpha66016.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha66016.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha66016.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha66016.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha66016.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var spec__$1 = cljs.core.deref.call(null,self__.spec);
if(cljs.core.not.call(null,self__.cpred.call(null,x))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
if(cljs.core.truth_(self__.conform_all)){
var vec__66019 = self__.cfns.call(null,x);
var init = cljs.core.nth.call(null,vec__66019,(0),null);
var add = cljs.core.nth.call(null,vec__66019,(1),null);
var complete = cljs.core.nth.call(null,vec__66019,(2),null);
var ret = init.call(null,x);
var i = (0);
var G__66025 = cljs.core.seq.call(null,x);
var vec__66026 = G__66025;
var seq__66027 = cljs.core.seq.call(null,vec__66026);
var first__66028 = cljs.core.first.call(null,seq__66027);
var seq__66027__$1 = cljs.core.next.call(null,seq__66027);
var v = first__66028;
var vs = seq__66027__$1;
var vseq = vec__66026;
var ret__$1 = ret;
var i__$1 = i;
var G__66025__$1 = G__66025;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__66029 = G__66025__$1;
var seq__66030 = cljs.core.seq.call(null,vec__66029);
var first__66031 = cljs.core.first.call(null,seq__66030);
var seq__66030__$1 = cljs.core.next.call(null,seq__66030);
var v__$1 = first__66031;
var vs__$1 = seq__66030__$1;
var vseq__$1 = vec__66029;
if(vseq__$1){
var cv = cljs.spec.alpha.conform_STAR_.call(null,spec__$1,v__$1);
if(cljs.spec.alpha.invalid_QMARK_.call(null,cv)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
var G__66056 = add.call(null,ret__$2,i__$2,v__$1,cv);
var G__66057 = (i__$2 + (1));
var G__66058 = vs__$1;
ret__$1 = G__66056;
i__$1 = G__66057;
G__66025__$1 = G__66058;
continue;
}
} else {
return complete.call(null,ret__$2);
}
break;
}
} else {
if(cljs.core.indexed_QMARK_.call(null,x)){
var step = (function (){var x__4273__auto__ = (1);
var y__4274__auto__ = cljs.core.long$.call(null,(cljs.core.count.call(null,x) / cljs.spec.alpha._STAR_coll_check_limit_STAR_));
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
})();
var i = (0);
while(true){
if((i >= cljs.core.count.call(null,x))){
return x;
} else {
if(cljs.spec.alpha.valid_QMARK_.call(null,spec__$1,cljs.core.nth.call(null,x,i))){
var G__66059 = (i + step);
i = G__66059;
continue;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}
break;
}
} else {
var limit = cljs.spec.alpha._STAR_coll_check_limit_STAR_;
var i = (0);
var G__66035 = cljs.core.seq.call(null,x);
var vec__66036 = G__66035;
var seq__66037 = cljs.core.seq.call(null,vec__66036);
var first__66038 = cljs.core.first.call(null,seq__66037);
var seq__66037__$1 = cljs.core.next.call(null,seq__66037);
var v = first__66038;
var vs = seq__66037__$1;
var vseq = vec__66036;
var i__$1 = i;
var G__66035__$1 = G__66035;
while(true){
var i__$2 = i__$1;
var vec__66039 = G__66035__$1;
var seq__66040 = cljs.core.seq.call(null,vec__66039);
var first__66041 = cljs.core.first.call(null,seq__66040);
var seq__66040__$1 = cljs.core.next.call(null,seq__66040);
var v__$1 = first__66041;
var vs__$1 = seq__66040__$1;
var vseq__$1 = vec__66039;
if((((vseq__$1 == null)) || (cljs.core._EQ_.call(null,i__$2,limit)))){
return x;
} else {
if(cljs.spec.alpha.valid_QMARK_.call(null,spec__$1,v__$1)){
var G__66060 = (i__$2 + (1));
var G__66061 = vs__$1;
i__$1 = G__66060;
G__66035__$1 = G__66061;
continue;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);

}
}
break;
}
}

}
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha66016.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.conform_all)){
var spec__$1 = cljs.core.deref.call(null,self__.spec);
var vec__66042 = self__.cfns.call(null,x);
var init = cljs.core.nth.call(null,vec__66042,(0),null);
var add = cljs.core.nth.call(null,vec__66042,(1),null);
var complete = cljs.core.nth.call(null,vec__66042,(2),null);
var ret = init.call(null,x);
var i = (0);
var G__66048 = cljs.core.seq.call(null,x);
var vec__66049 = G__66048;
var seq__66050 = cljs.core.seq.call(null,vec__66049);
var first__66051 = cljs.core.first.call(null,seq__66050);
var seq__66050__$1 = cljs.core.next.call(null,seq__66050);
var v = first__66051;
var vs = seq__66050__$1;
var vseq = vec__66049;
var ret__$1 = ret;
var i__$1 = i;
var G__66048__$1 = G__66048;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__66052 = G__66048__$1;
var seq__66053 = cljs.core.seq.call(null,vec__66052);
var first__66054 = cljs.core.first.call(null,seq__66053);
var seq__66053__$1 = cljs.core.next.call(null,seq__66053);
var v__$1 = first__66054;
var vs__$1 = seq__66053__$1;
var vseq__$1 = vec__66052;
if((i__$2 >= cljs.core.count.call(null,x))){
return complete.call(null,ret__$2);
} else {
var G__66062 = add.call(null,ret__$2,i__$2,v__$1,cljs.spec.alpha.unform_STAR_.call(null,spec__$1,v__$1));
var G__66063 = (i__$2 + (1));
var G__66064 = vs__$1;
ret__$1 = G__66062;
i__$1 = G__66063;
G__66048__$1 = G__66064;
continue;
}
break;
}
} else {
return x;
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha66016.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var or__4185__auto__ = cljs.spec.alpha.coll_prob.call(null,x,self__.kind,self__.kind_form,self__.distinct,self__.count,self__.min_count,self__.max_count,path,via,in$);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.apply.call(null,cljs.core.concat,(cljs.core.truth_(self__.conform_all)?cljs.core.identity:cljs.core.partial.call(null,cljs.core.take,cljs.spec.alpha._STAR_coll_error_limit_STAR_)).call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,(function (i,v){
var k = self__.kfn.call(null,i,v);
if(cljs.core.truth_(self__.check_QMARK_.call(null,v))){
return null;
} else {
var prob = cljs.spec.alpha.explain_1.call(null,self__.form,self__.pred,path,via,cljs.core.conj.call(null,in$,k),v);
return prob;
}
}),cljs.core.range.call(null),x))));
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha66016.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var pgen = cljs.spec.alpha.gensub.call(null,self__.pred,overrides,path,rmap,self__.form);
return cljs.spec.gen.alpha.bind.call(null,(cljs.core.truth_(self__.gen_into)?cljs.spec.gen.alpha.return$.call(null,self__.gen_into):(cljs.core.truth_(self__.kind)?cljs.spec.gen.alpha.fmap.call(null,(function (p1__66009_SHARP_){
if(cljs.core.empty_QMARK_.call(null,p1__66009_SHARP_)){
return p1__66009_SHARP_;
} else {
return cljs.core.empty.call(null,p1__66009_SHARP_);
}
}),cljs.spec.alpha.gensub.call(null,self__.kind,overrides,path,rmap,self__.form)):cljs.spec.gen.alpha.return$.call(null,cljs.core.PersistentVector.EMPTY)
)),(function (init){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__66010_SHARP_){
if(cljs.core.vector_QMARK_.call(null,init)){
return p1__66010_SHARP_;
} else {
return cljs.core.into.call(null,init,p1__66010_SHARP_);
}
}),(cljs.core.truth_(self__.distinct)?(cljs.core.truth_(self__.count)?cljs.spec.gen.alpha.vector_distinct.call(null,pgen,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num-elements","num-elements",1960422107),self__.count,new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null)):cljs.spec.gen.alpha.vector_distinct.call(null,pgen,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-elements","min-elements",949370780),(function (){var or__4185__auto__ = self__.min_count;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"max-elements","max-elements",433034073),(function (){var or__4185__auto__ = self__.max_count;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var x__4273__auto__ = self__.gen_max;
var y__4274__auto__ = ((2) * (function (){var or__4185__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
return (0);
}
})());
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
}
})(),new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null))):(cljs.core.truth_(self__.count)?cljs.spec.gen.alpha.vector.call(null,pgen,self__.count):(cljs.core.truth_((function (){var or__4185__auto__ = self__.min_count;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return self__.max_count;
}
})())?cljs.spec.gen.alpha.vector.call(null,pgen,(function (){var or__4185__auto__ = self__.min_count;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (0);
}
})(),(function (){var or__4185__auto__ = self__.max_count;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var x__4273__auto__ = self__.gen_max;
var y__4274__auto__ = ((2) * (function (){var or__4185__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
return (0);
}
})());
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
}
})()):cljs.spec.gen.alpha.vector.call(null,pgen,(0),self__.gen_max)
))));
}));
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha66016.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.every_impl.call(null,self__.form,self__.pred,self__.opts,gfn__$1);
}));

(cljs.spec.alpha.t_cljs$spec$alpha66016.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__4185__auto__ = self__.describe_form;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null),null,(1),null)),(new cljs.core.List(null,self__.form,null,(1),null)),cljs.core.mapcat.call(null,cljs.core.identity,self__.opts))));
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha66016.getBasis = (function (){
return new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"max-count","max-count",-1115250464,null),new cljs.core.Symbol(null,"check?","check?",409539557,null),new cljs.core.Symbol(null,"p__66013","p__66013",-1477461753,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"gen-max","gen-max",846851082,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"cpred","cpred",-540353554,null),new cljs.core.Symbol(null,"conform-keys","conform-keys",-159510287,null),new cljs.core.Symbol(null,"kind-form","kind-form",1155997457,null),new cljs.core.Symbol(null,"addcv","addcv",-1552991247,null),new cljs.core.Symbol(null,"cfns","cfns",1335482066,null),new cljs.core.Symbol(null,"describe-form","describe-form",-1410156588,null),new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"map__66014","map__66014",-805921543,null),new cljs.core.Symbol(null,"kfn","kfn",729311001,null),new cljs.core.Symbol(null,"gen-into","gen-into",592640985,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"min-count","min-count",-1059726756,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"conform-all","conform-all",-980179459,null),new cljs.core.Symbol(null,"conform-into","conform-into",-1039113729,null),new cljs.core.Symbol(null,"meta66017","meta66017",1466437591,null)], null);
}));

(cljs.spec.alpha.t_cljs$spec$alpha66016.cljs$lang$type = true);

(cljs.spec.alpha.t_cljs$spec$alpha66016.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha66016");

(cljs.spec.alpha.t_cljs$spec$alpha66016.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.spec.alpha/t_cljs$spec$alpha66016");
}));

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha66016.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha66016 = (function cljs$spec$alpha$__GT_t_cljs$spec$alpha66016(form__$1,max_count__$1,check_QMARK___$1,p__66013__$1,gfn__$1,gen_max__$1,pred__$1,cpred__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,describe_form__$1,distinct__$1,spec__$1,map__66014__$2,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta66017){
return (new cljs.spec.alpha.t_cljs$spec$alpha66016(form__$1,max_count__$1,check_QMARK___$1,p__66013__$1,gfn__$1,gen_max__$1,pred__$1,cpred__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,describe_form__$1,distinct__$1,spec__$1,map__66014__$2,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,meta66017));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha66016(form,max_count,check_QMARK_,p__66013,gfn,gen_max,pred,cpred,conform_keys,kind_form,addcv,cfns,describe_form,distinct,spec,map__66014__$1,kfn__$1,gen_into,count,min_count,opts,kind,conform_all,conform_into,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.spec.alpha.every_impl.cljs$lang$maxFixedArity = 4);

cljs.spec.alpha.accept = (function cljs$spec$alpha$accept(x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),new cljs.core.Keyword(null,"ret","ret",-468222814),x], null);
});
cljs.spec.alpha.accept_QMARK_ = (function cljs$spec$alpha$accept_QMARK_(p__66065){
var map__66066 = p__66065;
var map__66066__$1 = (((((!((map__66066 == null))))?(((((map__66066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66066):map__66066);
var op = cljs.core.get.call(null,map__66066__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
return cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),op);
});
cljs.spec.alpha.pcat_STAR_ = (function cljs$spec$alpha$pcat_STAR_(p__66068){
var map__66069 = p__66068;
var map__66069__$1 = (((((!((map__66069 == null))))?(((((map__66069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66069):map__66069);
var vec__66070 = cljs.core.get.call(null,map__66069__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__66071 = cljs.core.seq.call(null,vec__66070);
var first__66072 = cljs.core.first.call(null,seq__66071);
var seq__66071__$1 = cljs.core.next.call(null,seq__66071);
var p1 = first__66072;
var pr = seq__66071__$1;
var ps = vec__66070;
var vec__66073 = cljs.core.get.call(null,map__66069__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__66074 = cljs.core.seq.call(null,vec__66073);
var first__66075 = cljs.core.first.call(null,seq__66074);
var seq__66074__$1 = cljs.core.next.call(null,seq__66074);
var k1 = first__66075;
var kr = seq__66074__$1;
var ks = vec__66073;
var vec__66076 = cljs.core.get.call(null,map__66069__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var seq__66077 = cljs.core.seq.call(null,vec__66076);
var first__66078 = cljs.core.first.call(null,seq__66077);
var seq__66077__$1 = cljs.core.next.call(null,seq__66077);
var f1 = first__66078;
var fr = seq__66077__$1;
var forms = vec__66076;
var ret = cljs.core.get.call(null,map__66069__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var rep_PLUS_ = cljs.core.get.call(null,map__66069__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ps)){
if(cljs.spec.alpha.accept_QMARK_.call(null,p1)){
var rp = new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1);
var ret__$1 = cljs.core.conj.call(null,ret,(cljs.core.truth_(ks)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,rp]):rp));
if(pr){
return cljs.spec.alpha.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),fr,new cljs.core.Keyword(null,"ret","ret",-468222814),ret__$1], null));
} else {
return cljs.spec.alpha.accept.call(null,ret__$1);
}
} else {
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),ret,new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"rep+","rep+",-281382396),rep_PLUS_], null);
}
} else {
return null;
}
});
cljs.spec.alpha.pcat = (function cljs$spec$alpha$pcat(var_args){
var args__4795__auto__ = [];
var len__4789__auto___66081 = arguments.length;
var i__4790__auto___66082 = (0);
while(true){
if((i__4790__auto___66082 < len__4789__auto___66081)){
args__4795__auto__.push((arguments[i__4790__auto___66082]));

var G__66083 = (i__4790__auto___66082 + (1));
i__4790__auto___66082 = G__66083;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return cljs.spec.alpha.pcat.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(cljs.spec.alpha.pcat.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alpha.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY], null));
}));

(cljs.spec.alpha.pcat.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.alpha.pcat.cljs$lang$applyTo = (function (seq66080){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66080));
}));

/**
 * Do not call this directly, use 'cat'
 */
cljs.spec.alpha.cat_impl = (function cljs$spec$alpha$cat_impl(ks,ps,forms){
return cljs.spec.alpha.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.spec.alpha.rep_STAR_ = (function cljs$spec$alpha$rep_STAR_(p1,p2,ret,splice,form){
if(cljs.core.truth_(p1)){
var r = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),new cljs.core.Keyword(null,"p2","p2",905500641),p2,new cljs.core.Keyword(null,"splice","splice",449588165),splice,new cljs.core.Keyword(null,"forms","forms",2045992350),form,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null)], null);
if(cljs.spec.alpha.accept_QMARK_.call(null,p1)){
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p2,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.conj.call(null,ret,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)));
} else {
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p1,new cljs.core.Keyword(null,"ret","ret",-468222814),ret);
}
} else {
return null;
}
});
/**
 * Do not call this directly, use '*'
 */
cljs.spec.alpha.rep_impl = (function cljs$spec$alpha$rep_impl(form,p){
return cljs.spec.alpha.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,false,form);
});
/**
 * Do not call this directly, use '+'
 */
cljs.spec.alpha.rep_PLUS_impl = (function cljs$spec$alpha$rep_PLUS_impl(form,p){
return cljs.spec.alpha.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.alpha.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,true,form)], null),new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)))))),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"rep+","rep+",-281382396),form], null));
});
/**
 * Do not call this directly, use '&'
 */
cljs.spec.alpha.amp_impl = (function cljs$spec$alpha$amp_impl(re,re_form,preds,pred_forms){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),new cljs.core.Keyword(null,"p1","p1",-936759954),re,new cljs.core.Keyword(null,"amp","amp",271690571),re_form,new cljs.core.Keyword(null,"ps","ps",292358046),preds,new cljs.core.Keyword(null,"forms","forms",2045992350),pred_forms], null);
});
cljs.spec.alpha.filter_alt = (function cljs$spec$alpha$filter_alt(ps,ks,forms,f){
if(cljs.core.truth_((function (){var or__4185__auto__ = ks;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return forms;
}
})())){
var pks = cljs.core.filter.call(null,(function (p1__66084_SHARP_){
return f.call(null,cljs.core.first.call(null,p1__66084_SHARP_));
}),cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__4185__auto__ = cljs.core.seq.call(null,ks);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__4185__auto__ = cljs.core.seq.call(null,forms);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,pks)),(cljs.core.truth_(ks)?cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,pks)):null),(cljs.core.truth_(forms)?cljs.core.seq.call(null,cljs.core.map.call(null,(function (p1__66085_SHARP_){
return cljs.core.nth.call(null,p1__66085_SHARP_,(2));
}),pks)):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.filter.call(null,f,ps)),ks,forms], null);
}
});
cljs.spec.alpha.alt_STAR_ = (function cljs$spec$alpha$alt_STAR_(ps,ks,forms){
var vec__66086 = cljs.spec.alpha.filter_alt.call(null,ps,ks,forms,cljs.core.identity);
var vec__66089 = cljs.core.nth.call(null,vec__66086,(0),null);
var seq__66090 = cljs.core.seq.call(null,vec__66089);
var first__66091 = cljs.core.first.call(null,seq__66090);
var seq__66090__$1 = cljs.core.next.call(null,seq__66090);
var p1 = first__66091;
var pr = seq__66090__$1;
var ps__$1 = vec__66089;
var vec__66092 = cljs.core.nth.call(null,vec__66086,(1),null);
var k1 = cljs.core.nth.call(null,vec__66092,(0),null);
var ks__$1 = vec__66092;
var forms__$1 = cljs.core.nth.call(null,vec__66086,(2),null);
if(cljs.core.truth_(ps__$1)){
var ret = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252),new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),new cljs.core.Keyword(null,"ps","ps",292358046),ps__$1,new cljs.core.Keyword(null,"ks","ks",1900203942),ks__$1,new cljs.core.Keyword(null,"forms","forms",2045992350),forms__$1], null);
if((pr == null)){
if(cljs.core.truth_(k1)){
if(cljs.spec.alpha.accept_QMARK_.call(null,p1)){
return cljs.spec.alpha.accept.call(null,cljs.spec.alpha.tagged_ret.call(null,k1,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)));
} else {
return ret;
}
} else {
return p1;
}
} else {
return ret;
}
} else {
return null;
}
});
cljs.spec.alpha.alts = (function cljs$spec$alpha$alts(var_args){
var args__4795__auto__ = [];
var len__4789__auto___66096 = arguments.length;
var i__4790__auto___66097 = (0);
while(true){
if((i__4790__auto___66097 < len__4789__auto___66096)){
args__4795__auto__.push((arguments[i__4790__auto___66097]));

var G__66098 = (i__4790__auto___66097 + (1));
i__4790__auto___66097 = G__66098;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alpha.alt_STAR_.call(null,ps,null,null);
}));

(cljs.spec.alpha.alts.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.spec.alpha.alts.cljs$lang$applyTo = (function (seq66095){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66095));
}));

cljs.spec.alpha.alt2 = (function cljs$spec$alpha$alt2(p1,p2){
if(cljs.core.truth_((function (){var and__4174__auto__ = p1;
if(cljs.core.truth_(and__4174__auto__)){
return p2;
} else {
return and__4174__auto__;
}
})())){
return cljs.spec.alpha.alts.call(null,p1,p2);
} else {
var or__4185__auto__ = p1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return p2;
}
}
});
/**
 * Do not call this directly, use 'alt'
 */
cljs.spec.alpha.alt_impl = (function cljs$spec$alpha$alt_impl(ks,ps,forms){
return cljs.core.assoc.call(null,cljs.spec.alpha.alt_STAR_.call(null,ps,ks,forms),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null));
});
/**
 * Do not call this directly, use '?'
 */
cljs.spec.alpha.maybe_impl = (function cljs$spec$alpha$maybe_impl(p,form){
return cljs.core.assoc.call(null,cljs.spec.alpha.alt_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.alpha.accept.call(null,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950)], null)),new cljs.core.Keyword(null,"maybe","maybe",-314397560),form);
});
cljs.spec.alpha.noret_QMARK_ = (function cljs$spec$alpha$noret_QMARK_(p1,pret){
var or__4185__auto__ = cljs.core._EQ_.call(null,pret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950));
if(or__4185__auto__){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = (function (){var and__4174__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),null], null), null).call(null,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252).cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_.call(null,p1)));
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.empty_QMARK_.call(null,pret);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
return null;
}
}
});
cljs.spec.alpha.accept_nil_QMARK_ = (function cljs$spec$alpha$accept_nil_QMARK_(p){
var map__66099 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__66099__$1 = (((((!((map__66099 == null))))?(((((map__66099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66099):map__66099);
var p__$1 = map__66099__$1;
var op = cljs.core.get.call(null,map__66099__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var ps = cljs.core.get.call(null,map__66099__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var p1 = cljs.core.get.call(null,map__66099__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__66099__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var forms = cljs.core.get.call(null,map__66099__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__66101 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__66101)){
return true;
} else {
if(cljs.core._EQ_.call(null,null,G__66101)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__66101)){
var and__4174__auto__ = cljs.spec.alpha.accept_nil_QMARK_.call(null,p1);
if(cljs.core.truth_(and__4174__auto__)){
var ret = cljs.spec.alpha.and_preds.call(null,cljs.spec.alpha.preturn.call(null,p1),ps,cljs.core.next.call(null,forms));
return (!(cljs.spec.alpha.invalid_QMARK_.call(null,ret)));
} else {
return and__4174__auto__;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__66101)){
var or__4185__auto__ = (p1 === p2);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return cljs.spec.alpha.accept_nil_QMARK_.call(null,p1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__66101)){
return cljs.core.every_QMARK_.call(null,cljs.spec.alpha.accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__66101)){
return cljs.core.some.call(null,cljs.spec.alpha.accept_nil_QMARK_,ps);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66101)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.preturn = (function cljs$spec$alpha$preturn(p){
var map__66102 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__66102__$1 = (((((!((map__66102 == null))))?(((((map__66102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66102):map__66102);
var p__$1 = map__66102__$1;
var vec__66103 = cljs.core.get.call(null,map__66102__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__66104 = cljs.core.seq.call(null,vec__66103);
var first__66105 = cljs.core.first.call(null,seq__66104);
var seq__66104__$1 = cljs.core.next.call(null,seq__66104);
var p0 = first__66105;
var pr = seq__66104__$1;
var ps = vec__66103;
var vec__66106 = cljs.core.get.call(null,map__66102__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__66106,(0),null);
var ks = vec__66106;
var op = cljs.core.get.call(null,map__66102__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var p1 = cljs.core.get.call(null,map__66102__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__66102__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__66102__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__66110 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__66110)){
return ret;
} else {
if(cljs.core._EQ_.call(null,null,G__66110)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__66110)){
var pret = cljs.spec.alpha.preturn.call(null,p1);
if(cljs.core.truth_(cljs.spec.alpha.noret_QMARK_.call(null,p1,pret))){
return new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950);
} else {
return cljs.spec.alpha.and_preds.call(null,pret,ps,forms);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__66110)){
return cljs.spec.alpha.add_ret.call(null,p1,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__66110)){
return cljs.spec.alpha.add_ret.call(null,p0,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__66110)){
var vec__66111 = cljs.spec.alpha.filter_alt.call(null,ps,ks,forms,cljs.spec.alpha.accept_nil_QMARK_);
var vec__66114 = cljs.core.nth.call(null,vec__66111,(0),null);
var p0__$1 = cljs.core.nth.call(null,vec__66114,(0),null);
var vec__66117 = cljs.core.nth.call(null,vec__66111,(1),null);
var k0 = cljs.core.nth.call(null,vec__66117,(0),null);
var r = (((p0__$1 == null))?new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950):cljs.spec.alpha.preturn.call(null,p0__$1));
if(cljs.core.truth_(k0)){
return cljs.spec.alpha.tagged_ret.call(null,k0,r);
} else {
return r;
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66110)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.op_unform = (function cljs$spec$alpha$op_unform(p,x){
var map__66124 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__66124__$1 = (((((!((map__66124 == null))))?(((((map__66124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66124):map__66124);
var p__$1 = map__66124__$1;
var vec__66125 = cljs.core.get.call(null,map__66124__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__66126 = cljs.core.seq.call(null,vec__66125);
var first__66127 = cljs.core.first.call(null,seq__66126);
var seq__66126__$1 = cljs.core.next.call(null,seq__66126);
var p0 = first__66127;
var pr = seq__66126__$1;
var ps = vec__66125;
var vec__66128 = cljs.core.get.call(null,map__66124__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__66128,(0),null);
var ks = vec__66128;
var op = cljs.core.get.call(null,map__66124__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var p1 = cljs.core.get.call(null,map__66124__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__66124__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__66124__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var rep_PLUS_ = cljs.core.get.call(null,map__66124__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.call(null,map__66124__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
var kps = cljs.core.zipmap.call(null,ks,ps);
var G__66132 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__66132)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
} else {
if(cljs.core._EQ_.call(null,null,G__66132)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.unform.call(null,p__$1,x)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__66132)){
var px = cljs.core.reduce.call(null,(function (p1__66121_SHARP_,p2__66120_SHARP_){
return cljs.spec.alpha.unform.call(null,p2__66120_SHARP_,p1__66121_SHARP_);
}),x,cljs.core.reverse.call(null,ps));
return cljs.spec.alpha.op_unform.call(null,p1,px);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__66132)){
return cljs.core.mapcat.call(null,(function (p1__66122_SHARP_){
return cljs.spec.alpha.op_unform.call(null,p1,p1__66122_SHARP_);
}),x);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__66132)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core.mapcat.call(null,(function (p1__66123_SHARP_){
return cljs.spec.alpha.op_unform.call(null,p0,p1__66123_SHARP_);
}),x);
} else {
return cljs.core.mapcat.call(null,(function (k__$1){
if(cljs.core.contains_QMARK_.call(null,x,k__$1)){
return cljs.spec.alpha.op_unform.call(null,kps.call(null,k__$1),cljs.core.get.call(null,x,k__$1));
} else {
return null;
}
}),ks);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__66132)){
if(cljs.core.truth_(maybe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.unform.call(null,p0,x)], null);
} else {
var vec__66133 = x;
var k__$1 = cljs.core.nth.call(null,vec__66133,(0),null);
var v = cljs.core.nth.call(null,vec__66133,(1),null);
return cljs.spec.alpha.op_unform.call(null,kps.call(null,k__$1),v);
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66132)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.add_ret = (function cljs$spec$alpha$add_ret(p,r,k){
var map__66136 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__66136__$1 = (((((!((map__66136 == null))))?(((((map__66136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66136):map__66136);
var p__$1 = map__66136__$1;
var op = cljs.core.get.call(null,map__66136__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var ps = cljs.core.get.call(null,map__66136__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var splice = cljs.core.get.call(null,map__66136__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var prop = (function (){
var ret = cljs.spec.alpha.preturn.call(null,p__$1);
if(cljs.core.empty_QMARK_.call(null,ret)){
return r;
} else {
return (cljs.core.truth_(splice)?cljs.core.into:cljs.core.conj).call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
});
var G__66138 = op;
if(cljs.core._EQ_.call(null,null,G__66138)){
return r;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__66138)){
var ret = cljs.spec.alpha.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__66138)){
var ret = cljs.spec.alpha.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__66138)){
var ret = cljs.spec.alpha.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__66138)){
return prop.call(null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__66138)){
return prop.call(null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66138)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.deriv = (function cljs$spec$alpha$deriv(p,x){
var map__66140 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__66140__$1 = (((((!((map__66140 == null))))?(((((map__66140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66140):map__66140);
var p__$1 = map__66140__$1;
var forms = cljs.core.get.call(null,map__66140__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var p2 = cljs.core.get.call(null,map__66140__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var vec__66141 = cljs.core.get.call(null,map__66140__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__66142 = cljs.core.seq.call(null,vec__66141);
var first__66143 = cljs.core.first.call(null,seq__66142);
var seq__66142__$1 = cljs.core.next.call(null,seq__66142);
var p0 = first__66143;
var pr = seq__66142__$1;
var ps = vec__66141;
var ret = cljs.core.get.call(null,map__66140__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var op = cljs.core.get.call(null,map__66140__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var splice = cljs.core.get.call(null,map__66140__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var vec__66144 = cljs.core.get.call(null,map__66140__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__66145 = cljs.core.seq.call(null,vec__66144);
var first__66146 = cljs.core.first.call(null,seq__66145);
var seq__66145__$1 = cljs.core.next.call(null,seq__66145);
var k0 = first__66146;
var kr = seq__66145__$1;
var ks = vec__66144;
var amp = cljs.core.get.call(null,map__66140__$1,new cljs.core.Keyword(null,"amp","amp",271690571));
var p1 = cljs.core.get.call(null,map__66140__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
if(cljs.core.truth_(p__$1)){
var G__66148 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__66148)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__66148)){
var ret__$1 = cljs.spec.alpha.dt.call(null,p__$1,x,p__$1);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret__$1)){
return null;
} else {
return cljs.spec.alpha.accept.call(null,ret__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__66148)){
var temp__5735__auto__ = cljs.spec.alpha.deriv.call(null,p1,x);
if(cljs.core.truth_(temp__5735__auto__)){
var p1__$1 = temp__5735__auto__;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252).cljs$core$IFn$_invoke$arity$1(p1__$1))){
var ret__$1 = cljs.spec.alpha.and_preds.call(null,cljs.spec.alpha.preturn.call(null,p1__$1),ps,cljs.core.next.call(null,forms));
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret__$1)){
return null;
} else {
return cljs.spec.alpha.accept.call(null,ret__$1);
}
} else {
return cljs.spec.alpha.amp_impl.call(null,p1__$1,amp,ps,forms);
}
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__66148)){
return cljs.spec.alpha.alt2.call(null,cljs.spec.alpha.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.cons.call(null,cljs.spec.alpha.deriv.call(null,p0,x),pr),new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),ret], null)),(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_.call(null,p0))?cljs.spec.alpha.deriv.call(null,cljs.spec.alpha.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.next.call(null,forms),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.spec.alpha.add_ret.call(null,p0,ret,k0)], null)),x):null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__66148)){
return cljs.spec.alpha.alt_STAR_.call(null,cljs.core.map.call(null,(function (p1__66139_SHARP_){
return cljs.spec.alpha.deriv.call(null,p1__66139_SHARP_,x);
}),ps),ks,forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__66148)){
return cljs.spec.alpha.alt2.call(null,cljs.spec.alpha.rep_STAR_.call(null,cljs.spec.alpha.deriv.call(null,p1,x),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_.call(null,p1))?cljs.spec.alpha.deriv.call(null,cljs.spec.alpha.rep_STAR_.call(null,p2,p2,cljs.spec.alpha.add_ret.call(null,p1,ret,null),splice,forms),x):null));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66148)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.alpha.op_describe = (function cljs$spec$alpha$op_describe(p){
var map__66149 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__66149__$1 = (((((!((map__66149 == null))))?(((((map__66149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66149):map__66149);
var p__$1 = map__66149__$1;
var ps = cljs.core.get.call(null,map__66149__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var forms = cljs.core.get.call(null,map__66149__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var rep_PLUS_ = cljs.core.get.call(null,map__66149__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var op = cljs.core.get.call(null,map__66149__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var splice = cljs.core.get.call(null,map__66149__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var ks = cljs.core.get.call(null,map__66149__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var maybe = cljs.core.get.call(null,map__66149__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
var amp = cljs.core.get.call(null,map__66149__$1,new cljs.core.Keyword(null,"amp","amp",271690571));
var p1 = cljs.core.get.call(null,map__66149__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
if(cljs.core.truth_(p__$1)){
var G__66151 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__66151)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__66151)){
return p__$1;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__66151)){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("cljs.spec.alpha","&","cljs.spec.alpha/&",1635809823,null),amp,forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__66151)){
if(cljs.core.truth_(rep_PLUS_)){
return (new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null),(new cljs.core.List(null,rep_PLUS_,null,(1),null)),(2),null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),cljs.core.mapcat.call(null,cljs.core.vector,(function (){var or__4185__auto__ = cljs.core.seq.call(null,ks);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return cljs.core.repeat.call(null,new cljs.core.Keyword(null,"_","_",1453416199));
}
})(),forms));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__66151)){
if(cljs.core.truth_(maybe)){
return (new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",1605136319,null),(new cljs.core.List(null,maybe,null,(1),null)),(2),null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec.alpha","alt","cljs.spec.alpha/alt",-2130750332,null),cljs.core.mapcat.call(null,cljs.core.vector,ks,forms));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__66151)){
return (new cljs.core.List(null,(cljs.core.truth_(splice)?new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",2101263265,null):new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null)),(new cljs.core.List(null,forms,null,(1),null)),(2),null));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66151)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.alpha.op_explain = (function cljs$spec$alpha$op_explain(form,p,path,via,in$,input){
var vec__66152 = input;
var x = cljs.core.nth.call(null,vec__66152,(0),null);
var input__$1 = vec__66152;
var map__66155 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__66155__$1 = (((((!((map__66155 == null))))?(((((map__66155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66155):map__66155);
var p__$1 = map__66155__$1;
var op = cljs.core.get.call(null,map__66155__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var ps = cljs.core.get.call(null,map__66155__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__66155__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__66155__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__66155__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__66155__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__66155__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var via__$1 = (function (){var temp__5733__auto__ = cljs.spec.alpha.spec_name.call(null,p__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var name = temp__5733__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})();
var insufficient = (function (path__$1,form__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Insufficient input",new cljs.core.Keyword(null,"pred","pred",1927423397),form__$1,new cljs.core.Keyword(null,"val","val",128701612),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"via","via",-1904457336),via__$1,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
});
if(cljs.core.truth_(p__$1)){
var G__66157 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__66157)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__66157)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,form);
} else {
return cljs.spec.alpha.explain_1.call(null,form,p__$1,path,via__$1,in$,x);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__66157)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
if(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_.call(null,p1))){
return cljs.spec.alpha.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.alpha.preturn.call(null,p1));
} else {
return insufficient.call(null,path,new cljs.core.Keyword(null,"amp","amp",271690571).cljs$core$IFn$_invoke$arity$1(p__$1));
}
} else {
var temp__5733__auto__ = cljs.spec.alpha.deriv.call(null,p1,x);
if(cljs.core.truth_(temp__5733__auto__)){
var p1__$1 = temp__5733__auto__;
return cljs.spec.alpha.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.alpha.preturn.call(null,p1__$1));
} else {
return cljs.spec.alpha.op_explain.call(null,new cljs.core.Keyword(null,"amp","amp",271690571).cljs$core$IFn$_invoke$arity$1(p__$1),p1,path,via__$1,in$,input__$1);
}
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__66157)){
var pkfs = cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__4185__auto__ = cljs.core.seq.call(null,ks);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__4185__auto__ = cljs.core.seq.call(null,forms);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
var vec__66158 = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,pkfs)))?cljs.core.first.call(null,pkfs):cljs.core.first.call(null,cljs.core.remove.call(null,(function (p__66161){
var vec__66162 = p__66161;
var p__$2 = cljs.core.nth.call(null,vec__66162,(0),null);
return cljs.spec.alpha.accept_nil_QMARK_.call(null,p__$2);
}),pkfs)));
var pred = cljs.core.nth.call(null,vec__66158,(0),null);
var k = cljs.core.nth.call(null,vec__66158,(1),null);
var form__$1 = cljs.core.nth.call(null,vec__66158,(2),null);
var path__$1 = (cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path);
var form__$2 = (function (){var or__4185__auto__ = form__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.spec.alpha.op_describe.call(null,pred);
}
})();
if(((cljs.core.empty_QMARK_.call(null,input__$1)) && (cljs.core.not.call(null,pred)))){
return insufficient.call(null,path__$1,form__$2);
} else {
return cljs.spec.alpha.op_explain.call(null,form__$2,pred,path__$1,via__$1,in$,input__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__66157)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,cljs.spec.alpha.op_describe.call(null,p__$1));
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,(function (k,form__$1,pred){
return cljs.spec.alpha.op_explain.call(null,(function (){var or__4185__auto__ = form__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.spec.alpha.op_describe.call(null,pred);
}
})(),pred,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),via__$1,in$,input__$1);
}),(function (){var or__4185__auto__ = cljs.core.seq.call(null,ks);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__4185__auto__ = cljs.core.seq.call(null,forms);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),ps));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__66157)){
return cljs.spec.alpha.op_explain.call(null,(((p1 === p2))?forms:cljs.spec.alpha.op_describe.call(null,p1)),p1,path,via__$1,in$,input__$1);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66157)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.alpha.re_gen = (function cljs$spec$alpha$re_gen(p,overrides,path,rmap,f){
var map__66166 = cljs.spec.alpha.reg_resolve_BANG_.call(null,p);
var map__66166__$1 = (((((!((map__66166 == null))))?(((((map__66166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66166):map__66166);
var p__$1 = map__66166__$1;
var ps = cljs.core.get.call(null,map__66166__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var forms = cljs.core.get.call(null,map__66166__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var p2 = cljs.core.get.call(null,map__66166__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.call(null,map__66166__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var gfn = cljs.core.get.call(null,map__66166__$1,new cljs.core.Keyword("cljs.spec.alpha","gfn","cljs.spec.alpha/gfn",-593120375));
var op = cljs.core.get.call(null,map__66166__$1,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252));
var splice = cljs.core.get.call(null,map__66166__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var ks = cljs.core.get.call(null,map__66166__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var p1 = cljs.core.get.call(null,map__66166__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var id = cljs.core.get.call(null,map__66166__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.alpha.inck.call(null,rmap,id):rmap);
var ggens = (function (ps__$1,ks__$1,forms__$1){
var gen = (function (p__$2,k,f__$1){
if(cljs.core.truth_((function (){var and__4174__auto__ = rmap__$1;
if(cljs.core.truth_(and__4174__auto__)){
var and__4174__auto____$1 = id;
if(cljs.core.truth_(and__4174__auto____$1)){
var and__4174__auto____$2 = k;
if(cljs.core.truth_(and__4174__auto____$2)){
return cljs.spec.alpha.recur_limit_QMARK_.call(null,rmap__$1,id,path,k);
} else {
return and__4174__auto____$2;
}
} else {
return and__4174__auto____$1;
}
} else {
return and__4174__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(id)){
return cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay((function (){
return cljs.spec.alpha.re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__4185__auto__ = f__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return p__$2;
}
})());
}),null)));
} else {
return cljs.spec.alpha.re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__4185__auto__ = f__$1;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return p__$2;
}
})());
}
}
});
return cljs.core.map.call(null,gen,ps__$1,(function (){var or__4185__auto__ = cljs.core.seq.call(null,ks__$1);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__4185__auto__ = cljs.core.seq.call(null,forms__$1);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
});
var or__4185__auto__ = (function (){var temp__5735__auto__ = cljs.core.get.call(null,overrides,path);
if(cljs.core.truth_(temp__5735__auto__)){
var g = temp__5735__auto__;
var G__66169 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"accept","accept",1874130431),G__66169)){
return cljs.spec.gen.alpha.fmap.call(null,cljs.core.vector,g);
} else {
if(cljs.core._EQ_.call(null,null,G__66169)){
return cljs.spec.gen.alpha.fmap.call(null,cljs.core.vector,g);
} else {
return g;

}
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = (cljs.core.truth_(gfn)?gfn.call(null):null);
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
if(cljs.core.truth_(p__$1)){
var G__66170 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","accept","cljs.spec.alpha/accept",370988198),G__66170)){
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return cljs.spec.gen.alpha.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.spec.gen.alpha.return$.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null));
}
} else {
if(cljs.core._EQ_.call(null,null,G__66170)){
var temp__5735__auto__ = cljs.spec.alpha.gensub.call(null,p__$1,overrides,path,rmap__$1,f);
if(cljs.core.truth_(temp__5735__auto__)){
var g = temp__5735__auto__;
return cljs.spec.gen.alpha.fmap.call(null,cljs.core.vector,g);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","amp","cljs.spec.alpha/amp",831147508),G__66170)){
return cljs.spec.alpha.re_gen.call(null,p1,overrides,path,rmap__$1,cljs.spec.alpha.op_describe.call(null,p1));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623),G__66170)){
var gens = ggens.call(null,ps,ks,forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gens)){
return cljs.core.apply.call(null,cljs.spec.gen.alpha.cat,gens);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","alt","cljs.spec.alpha/alt",523685437),G__66170)){
var gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,ggens.call(null,ps,ks,forms));
if(cljs.core.empty_QMARK_.call(null,gens)){
return null;
} else {
return cljs.spec.gen.alpha.one_of.call(null,gens);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","rep","cljs.spec.alpha/rep",1483217317),G__66170)){
if(cljs.spec.alpha.recur_limit_QMARK_.call(null,rmap__$1,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),id)){
return cljs.spec.gen.alpha.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
var temp__5735__auto__ = cljs.spec.alpha.re_gen.call(null,p2,overrides,path,rmap__$1,forms);
if(cljs.core.truth_(temp__5735__auto__)){
var g = temp__5735__auto__;
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__66165_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__66165_SHARP_);
}),cljs.spec.gen.alpha.vector.call(null,g));
} else {
return null;
}
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66170)].join('')));

}
}
}
}
}
}
} else {
return null;
}
}
}
});
cljs.spec.alpha.re_conform = (function cljs$spec$alpha$re_conform(p,p__66171){
while(true){
var vec__66172 = p__66171;
var seq__66173 = cljs.core.seq.call(null,vec__66172);
var first__66174 = cljs.core.first.call(null,seq__66173);
var seq__66173__$1 = cljs.core.next.call(null,seq__66173);
var x = first__66174;
var xs = seq__66173__$1;
var data = vec__66172;
if(cljs.core.empty_QMARK_.call(null,data)){
if(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_.call(null,p))){
var ret = cljs.spec.alpha.preturn.call(null,p);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950))){
return null;
} else {
return ret;
}
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
} else {
var temp__5733__auto__ = cljs.spec.alpha.deriv.call(null,p,x);
if(cljs.core.truth_(temp__5733__auto__)){
var dp = temp__5733__auto__;
var G__66175 = dp;
var G__66176 = xs;
p = G__66175;
p__66171 = G__66176;
continue;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}
break;
}
});
cljs.spec.alpha.re_explain = (function cljs$spec$alpha$re_explain(path,via,in$,re,input){
var p = re;
var G__66180 = input;
var vec__66181 = G__66180;
var seq__66182 = cljs.core.seq.call(null,vec__66181);
var first__66183 = cljs.core.first.call(null,seq__66182);
var seq__66182__$1 = cljs.core.next.call(null,seq__66182);
var x = first__66183;
var xs = seq__66182__$1;
var data = vec__66181;
var i = (0);
var p__$1 = p;
var G__66180__$1 = G__66180;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__66184 = G__66180__$1;
var seq__66185 = cljs.core.seq.call(null,vec__66184);
var first__66186 = cljs.core.first.call(null,seq__66185);
var seq__66185__$1 = cljs.core.next.call(null,seq__66185);
var x__$1 = first__66186;
var xs__$1 = seq__66185__$1;
var data__$1 = vec__66184;
var i__$2 = i__$1;
if(cljs.core.empty_QMARK_.call(null,data__$1)){
if(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_.call(null,p__$2))){
return null;
} else {
return cljs.spec.alpha.op_explain.call(null,cljs.spec.alpha.op_describe.call(null,p__$2),p__$2,path,via,in$,null);
}
} else {
var temp__5733__auto__ = cljs.spec.alpha.deriv.call(null,p__$2,x__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var dp = temp__5733__auto__;
var G__66187 = dp;
var G__66188 = xs__$1;
var G__66189 = (i__$2 + (1));
p__$1 = G__66187;
G__66180__$1 = G__66188;
i__$1 = G__66189;
continue;
} else {
if(cljs.spec.alpha.accept_QMARK_.call(null,p__$2)){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","op","cljs.spec.alpha/op",-1269055252).cljs$core$IFn$_invoke$arity$1(p__$2),new cljs.core.Keyword("cljs.spec.alpha","pcat","cljs.spec.alpha/pcat",26406623))){
return cljs.spec.alpha.op_explain.call(null,cljs.spec.alpha.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.alpha.op_describe.call(null,re),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], null);
}
} else {
var or__4185__auto__ = cljs.spec.alpha.op_explain.call(null,cljs.spec.alpha.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.alpha.op_describe.call(null,p__$2),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], null);
}
}
}
}
break;
}
});
/**
 * Do not call this directly, use 'spec' with a regex op argument
 */
cljs.spec.alpha.regex_spec_impl = (function cljs$spec$alpha$regex_spec_impl(re,gfn){
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha66190 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha66190 = (function (re,gfn,meta66191){
this.re = re;
this.gfn = gfn;
this.meta66191 = meta66191;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.alpha.t_cljs$spec$alpha66190.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66192,meta66191__$1){
var self__ = this;
var _66192__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha66190(self__.re,self__.gfn,meta66191__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha66190.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66192){
var self__ = this;
var _66192__$1 = this;
return self__.meta66191;
}));

(cljs.spec.alpha.t_cljs$spec$alpha66190.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha66190.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha66190.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha66190.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha66190.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if((((x == null)) || (cljs.core.sequential_QMARK_.call(null,x)))){
return cljs.spec.alpha.re_conform.call(null,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha66190.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.op_unform.call(null,self__.re,x);
}));

(cljs.spec.alpha.t_cljs$spec$alpha66190.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if((((x == null)) || (cljs.core.sequential_QMARK_.call(null,x)))){
return cljs.spec.alpha.re_explain.call(null,path,via,in$,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha66190.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.alpha.re_gen.call(null,self__.re,overrides,path,rmap,cljs.spec.alpha.op_describe.call(null,self__.re));
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha66190.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.regex_spec_impl.call(null,self__.re,gfn__$1);
}));

(cljs.spec.alpha.t_cljs$spec$alpha66190.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.op_describe.call(null,self__.re);
}));

(cljs.spec.alpha.t_cljs$spec$alpha66190.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta66191","meta66191",-1193165087,null)], null);
}));

(cljs.spec.alpha.t_cljs$spec$alpha66190.cljs$lang$type = true);

(cljs.spec.alpha.t_cljs$spec$alpha66190.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha66190");

(cljs.spec.alpha.t_cljs$spec$alpha66190.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.spec.alpha/t_cljs$spec$alpha66190");
}));

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha66190.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha66190 = (function cljs$spec$alpha$regex_spec_impl_$___GT_t_cljs$spec$alpha66190(re__$1,gfn__$1,meta66191){
return (new cljs.spec.alpha.t_cljs$spec$alpha66190(re__$1,gfn__$1,meta66191));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha66190(re,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.call_valid_QMARK_ = (function cljs$spec$alpha$call_valid_QMARK_(f,specs,args){
var cargs = cljs.spec.alpha.conform.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),args);
if(cljs.spec.alpha.invalid_QMARK_.call(null,cargs)){
return null;
} else {
var ret = cljs.core.apply.call(null,f,args);
var cret = cljs.spec.alpha.conform.call(null,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs),ret);
if((!(cljs.spec.alpha.invalid_QMARK_.call(null,cret)))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs))){
return cljs.spec.alpha.pvalid_QMARK_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return true;
}
} else {
return false;
}
}
});
/**
 * returns f if valid, else smallest
 */
cljs.spec.alpha.validate_fn = (function cljs$spec$alpha$validate_fn(f,specs,iters){
var g = cljs.spec.alpha.gen.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs));
var prop = cljs.spec.gen.alpha.for_all_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),(function (p1__66193_SHARP_){
return cljs.spec.alpha.call_valid_QMARK_.call(null,f,specs,p1__66193_SHARP_);
}));
var ret = cljs.spec.gen.alpha.quick_check.call(null,iters,prop);
var temp__5733__auto__ = new cljs.core.Keyword(null,"smallest","smallest",-152623883).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(ret));
if(cljs.core.truth_(temp__5733__auto__)){
var vec__66194 = temp__5733__auto__;
var smallest = cljs.core.nth.call(null,vec__66194,(0),null);
return smallest;
} else {
return f;
}
});
/**
 * Do not call this directly, use 'fspec'
 */
cljs.spec.alpha.fspec_impl = (function cljs$spec$alpha$fspec_impl(argspec,aform,retspec,rform,fnspec,fform,gfn){
var specs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),argspec,new cljs.core.Keyword(null,"ret","ret",-468222814),retspec,new cljs.core.Keyword(null,"fn","fn",-1175266204),fnspec], null);
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha66197 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
cljs.spec.alpha.t_cljs$spec$alpha66197 = (function (argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta66198){
this.argspec = argspec;
this.aform = aform;
this.retspec = retspec;
this.rform = rform;
this.fnspec = fnspec;
this.fform = fform;
this.gfn = gfn;
this.specs = specs;
this.meta66198 = meta66198;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.alpha.t_cljs$spec$alpha66197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66199,meta66198__$1){
var self__ = this;
var _66199__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha66197(self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta66198__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha66197.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66199){
var self__ = this;
var _66199__$1 = this;
return self__.meta66198;
}));

(cljs.spec.alpha.t_cljs$spec$alpha66197.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.call(null,self__.specs,k);
}));

(cljs.spec.alpha.t_cljs$spec$alpha66197.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core.get.call(null,self__.specs,k,not_found);
}));

(cljs.spec.alpha.t_cljs$spec$alpha66197.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha66197.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha66197.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha66197.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha66197.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
if((f === cljs.spec.alpha.validate_fn.call(null,f,self__.specs,cljs.spec.alpha._STAR_fspec_iterations_STAR_))){
return f;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
} else {
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha66197.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
return f;
}));

(cljs.spec.alpha.t_cljs$spec$alpha66197.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
var args = cljs.spec.alpha.validate_fn.call(null,f,self__.specs,(100));
if((f === args)){
return null;
} else {
var ret = (function (){try{return cljs.core.apply.call(null,f,args);
}catch (e66200){if((e66200 instanceof Error)){
var t = e66200;
return t;
} else {
throw e66200;

}
}})();
if((ret instanceof Error)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"fn","fn",465265323,null)),new cljs.core.Keyword(null,"val","val",128701612),args,new cljs.core.Keyword(null,"reason","reason",-2070751759),ret.message,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
var cret = cljs.spec.alpha.dt.call(null,self__.retspec,ret,self__.rform);
if(cljs.spec.alpha.invalid_QMARK_.call(null,cret)){
return cljs.spec.alpha.explain_1.call(null,self__.rform,self__.retspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"ret","ret",-468222814)),via,in$,ret);
} else {
if(cljs.core.truth_(self__.fnspec)){
var cargs = cljs.spec.alpha.conform.call(null,self__.argspec,args);
return cljs.spec.alpha.explain_1.call(null,self__.fform,self__.fnspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"fn","fn",-1175266204)),via,in$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return null;
}
}
}
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Keyword(null,"val","val",128701612),f,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha66197.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gen.alpha.return$.call(null,(function() { 
var G__66209__delegate = function (args){
if(cljs.spec.alpha.pvalid_QMARK_.call(null,self__.argspec,args)){
} else {
throw (new Error(["Assert failed: ",(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__66205_66210 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__66206_66211 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__66207_66212 = true;
var _STAR_print_fn_STAR__temp_val__66208_66213 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__66207_66212);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__66208_66213);

try{cljs.spec.alpha.explain.call(null,self__.argspec,args);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__66206_66211);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__66205_66210);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})(),"\n","(pvalid? argspec args)"].join('')));
}

return cljs.spec.gen.alpha.generate.call(null,cljs.spec.alpha.gen.call(null,self__.retspec,overrides));
};
var G__66209 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66214__i = 0, G__66214__a = new Array(arguments.length -  0);
while (G__66214__i < G__66214__a.length) {G__66214__a[G__66214__i] = arguments[G__66214__i + 0]; ++G__66214__i;}
  args = new cljs.core.IndexedSeq(G__66214__a,0,null);
} 
return G__66209__delegate.call(this,args);};
G__66209.cljs$lang$maxFixedArity = 0;
G__66209.cljs$lang$applyTo = (function (arglist__66215){
var args = cljs.core.seq(arglist__66215);
return G__66209__delegate(args);
});
G__66209.cljs$core$IFn$_invoke$arity$variadic = G__66209__delegate;
return G__66209;
})()
);
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha66197.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.fspec_impl.call(null,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1);
}));

(cljs.spec.alpha.t_cljs$spec$alpha66197.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"args","args",1315556576),null,(1),null)),(new cljs.core.List(null,self__.aform,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"ret","ret",-468222814),null,(1),null)),(new cljs.core.List(null,self__.rform,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,(1),null)),(new cljs.core.List(null,self__.fform,null,(1),null)))));
}));

(cljs.spec.alpha.t_cljs$spec$alpha66197.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"meta66198","meta66198",517202409,null)], null);
}));

(cljs.spec.alpha.t_cljs$spec$alpha66197.cljs$lang$type = true);

(cljs.spec.alpha.t_cljs$spec$alpha66197.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha66197");

(cljs.spec.alpha.t_cljs$spec$alpha66197.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.spec.alpha/t_cljs$spec$alpha66197");
}));

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha66197.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha66197 = (function cljs$spec$alpha$fspec_impl_$___GT_t_cljs$spec$alpha66197(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta66198){
return (new cljs.spec.alpha.t_cljs$spec$alpha66197(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta66198));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha66197(argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("cljs.spec.alpha","kvs->map","cljs.spec.alpha/kvs->map",579713455),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__66216#","p1__66216#",-1040690395,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"p1__66216#","p1__66216#",-1040690395,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"p1__66216#","p1__66216#",-1040690395,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__66217#","p1__66217#",-818088915,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.Symbol(null,"p1__66217#","p1__66217#",-818088915,null)))),cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"%","%",-950237169,null)))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.Symbol(null,"%","%",-950237169,null)))),(function (p1__66216_SHARP_){
return cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),p1__66216_SHARP_),cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),p1__66216_SHARP_));
}),null,true,(function (p1__66217_SHARP_){
return cljs.core.map.call(null,(function (p__66218){
var vec__66219 = p__66218;
var k = cljs.core.nth.call(null,vec__66219,(0),null);
var v = cljs.core.nth.call(null,vec__66219,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),k,new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),v], null);
}),p1__66217_SHARP_);
})));
/**
 * takes a spec and returns a spec that has the same properties except
 *   'conform' returns the original (not the conformed) value. Note, will specize regex ops.
 */
cljs.spec.alpha.nonconforming = (function cljs$spec$alpha$nonconforming(spec){
var spec__$1 = (new cljs.core.Delay((function (){
return cljs.spec.alpha.specize.call(null,spec);
}),null));
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha66222 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha66222 = (function (spec,meta66223){
this.spec = spec;
this.meta66223 = meta66223;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.alpha.t_cljs$spec$alpha66222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66224,meta66223__$1){
var self__ = this;
var _66224__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha66222(self__.spec,meta66223__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha66222.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66224){
var self__ = this;
var _66224__$1 = this;
return self__.meta66223;
}));

(cljs.spec.alpha.t_cljs$spec$alpha66222.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha66222.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha66222.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha66222.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha66222.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ret = cljs.spec.alpha.conform_STAR_.call(null,cljs.core.deref.call(null,self__.spec),x);
if(cljs.spec.alpha.invalid_QMARK_.call(null,ret)){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return x;
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha66222.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.unform_STAR_.call(null,cljs.core.deref.call(null,self__.spec),x);
}));

(cljs.spec.alpha.t_cljs$spec$alpha66222.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.explain_STAR_.call(null,cljs.core.deref.call(null,self__.spec),path,via,in$,x);
}));

(cljs.spec.alpha.t_cljs$spec$alpha66222.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.gen_STAR_.call(null,cljs.core.deref.call(null,self__.spec),overrides,path,rmap);
}));

(cljs.spec.alpha.t_cljs$spec$alpha66222.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.nonconforming.call(null,cljs.spec.alpha.with_gen_STAR_.call(null,cljs.core.deref.call(null,self__.spec),gfn));
}));

(cljs.spec.alpha.t_cljs$spec$alpha66222.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","nonconforming","cljs.spec.alpha/nonconforming",-1009218508,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha.describe_STAR_.call(null,cljs.core.deref.call(null,self__.spec)),null,(1),null)))));
}));

(cljs.spec.alpha.t_cljs$spec$alpha66222.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"meta66223","meta66223",413809518,null)], null);
}));

(cljs.spec.alpha.t_cljs$spec$alpha66222.cljs$lang$type = true);

(cljs.spec.alpha.t_cljs$spec$alpha66222.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha66222");

(cljs.spec.alpha.t_cljs$spec$alpha66222.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.spec.alpha/t_cljs$spec$alpha66222");
}));

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha66222.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha66222 = (function cljs$spec$alpha$nonconforming_$___GT_t_cljs$spec$alpha66222(spec__$2,meta66223){
return (new cljs.spec.alpha.t_cljs$spec$alpha66222(spec__$2,meta66223));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha66222(spec__$1,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'nilable'
 */
cljs.spec.alpha.nilable_impl = (function cljs$spec$alpha$nilable_impl(form,pred,gfn){
var spec = (new cljs.core.Delay((function (){
return cljs.spec.alpha.specize.call(null,pred,form);
}),null));
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha.t_cljs$spec$alpha66225 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha66225 = (function (form,pred,gfn,spec,meta66226){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.spec = spec;
this.meta66226 = meta66226;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.spec.alpha.t_cljs$spec$alpha66225.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66227,meta66226__$1){
var self__ = this;
var _66227__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha66225(self__.form,self__.pred,self__.gfn,self__.spec,meta66226__$1));
}));

(cljs.spec.alpha.t_cljs$spec$alpha66225.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66227){
var self__ = this;
var _66227__$1 = this;
return self__.meta66226;
}));

(cljs.spec.alpha.t_cljs$spec$alpha66225.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha66225.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha66225.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
}));

(cljs.spec.alpha.t_cljs$spec$alpha66225.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.spec.alpha.t_cljs$spec$alpha66225.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if((x == null)){
return null;
} else {
return cljs.spec.alpha.conform_STAR_.call(null,cljs.core.deref.call(null,self__.spec),x);
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha66225.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if((x == null)){
return null;
} else {
return cljs.spec.alpha.unform_STAR_.call(null,cljs.core.deref.call(null,self__.spec),x);
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha66225.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(((cljs.spec.alpha.pvalid_QMARK_.call(null,cljs.core.deref.call(null,self__.spec),x)) || ((x == null)))){
return null;
} else {
return cljs.core.conj.call(null,cljs.spec.alpha.explain_1.call(null,self__.form,self__.pred,cljs.core.conj.call(null,path,new cljs.core.Keyword("cljs.spec.alpha","pred","cljs.spec.alpha/pred",-798342594)),via,in$,x),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.call(null,path,new cljs.core.Keyword("cljs.spec.alpha","nil","cljs.spec.alpha/nil",1733813950)),new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null));
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha66225.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gen.alpha.frequency.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay((function (){
return cljs.spec.gen.alpha.return$.call(null,null);
}),null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),cljs.spec.gen.alpha.delay_impl.call(null,(new cljs.core.Delay((function (){
return cljs.spec.alpha.gensub.call(null,self__.pred,overrides,cljs.core.conj.call(null,path,new cljs.core.Keyword("cljs.spec.alpha","pred","cljs.spec.alpha/pred",-798342594)),rmap,self__.form);
}),null)))], null)], null));
}
}));

(cljs.spec.alpha.t_cljs$spec$alpha66225.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.nilable_impl.call(null,self__.form,self__.pred,gfn__$1);
}));

(cljs.spec.alpha.t_cljs$spec$alpha66225.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),null,(1),null)),(new cljs.core.List(null,self__.form,null,(1),null)))));
}));

(cljs.spec.alpha.t_cljs$spec$alpha66225.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"meta66226","meta66226",1401151253,null)], null);
}));

(cljs.spec.alpha.t_cljs$spec$alpha66225.cljs$lang$type = true);

(cljs.spec.alpha.t_cljs$spec$alpha66225.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha66225");

(cljs.spec.alpha.t_cljs$spec$alpha66225.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.spec.alpha/t_cljs$spec$alpha66225");
}));

/**
 * Positional factory function for cljs.spec.alpha/t_cljs$spec$alpha66225.
 */
cljs.spec.alpha.__GT_t_cljs$spec$alpha66225 = (function cljs$spec$alpha$nilable_impl_$___GT_t_cljs$spec$alpha66225(form__$1,pred__$1,gfn__$1,spec__$1,meta66226){
return (new cljs.spec.alpha.t_cljs$spec$alpha66225(form__$1,pred__$1,gfn__$1,spec__$1,meta66226));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha66225(form,pred,gfn,spec,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * generates a number (default 10) of values compatible with spec and maps conform over them,
 *   returning a sequence of [val conformed-val] tuples. Optionally takes
 *   a generator overrides map as per gen
 */
cljs.spec.alpha.exercise = (function cljs$spec$alpha$exercise(var_args){
var G__66230 = arguments.length;
switch (G__66230) {
case 1:
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.alpha.exercise.call(null,spec,(10));
}));

(cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$2 = (function (spec,n){
return cljs.spec.alpha.exercise.call(null,spec,n,null);
}));

(cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$3 = (function (spec,n,overrides){
return cljs.core.map.call(null,(function (p1__66228_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__66228_SHARP_,cljs.spec.alpha.conform.call(null,spec,p1__66228_SHARP_)],null));
}),cljs.spec.gen.alpha.sample.call(null,cljs.spec.alpha.gen.call(null,spec,overrides),n));
}));

(cljs.spec.alpha.exercise.cljs$lang$maxFixedArity = 3);

/**
 * Return true if inst at or after start and before end
 */
cljs.spec.alpha.inst_in_range_QMARK_ = (function cljs$spec$alpha$inst_in_range_QMARK_(start,end,inst){
if(cljs.core.inst_QMARK_.call(null,inst)){
var t = cljs.core.inst_ms.call(null,inst);
return (((cljs.core.inst_ms.call(null,start) <= t)) && ((t < cljs.core.inst_ms.call(null,end))));
} else {
return false;
}
});
/**
 * Return true if start <= val, val < end and val is a fixed
 *   precision integer.
 */
cljs.spec.alpha.int_in_range_QMARK_ = (function cljs$spec$alpha$int_in_range_QMARK_(start,end,val){
if(cljs.core.integer_QMARK_.call(null,val)){
return (((start <= val)) && ((val < end)));
} else {
if((val instanceof goog.math.Long)){
var and__4174__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__4174__auto__)){
return val.lessThan(end);
} else {
return and__4174__auto__;
}
} else {
if((val instanceof goog.math.Integer)){
var and__4174__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__4174__auto__)){
return val.lessThan(end);
} else {
return and__4174__auto__;
}
} else {
return false;

}
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha._STAR_compile_asserts_STAR_ !== 'undefined')){
} else {
/**
 * If true, compiler will enable spec asserts, which are then
 * subject to runtime control via check-asserts? If false, compiler
 * will eliminate all spec assert overhead. See 'assert'.
 * Initially set to the negation of the ':elide-asserts' compiler option.
 * Defaults to true.
 */
cljs.spec.alpha._STAR_compile_asserts_STAR_ = true;
}
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha !== 'undefined') && (typeof cljs.spec.alpha._STAR_runtime_asserts_STAR_ !== 'undefined')){
} else {
cljs.spec.alpha._STAR_runtime_asserts_STAR_ = false;
}
/**
 * Returns the value set by check-asserts.
 */
cljs.spec.alpha.check_asserts_QMARK_ = (function cljs$spec$alpha$check_asserts_QMARK_(){
return cljs.spec.alpha._STAR_runtime_asserts_STAR_;
});
/**
 * Enable or disable spec asserts that have been compiled
 * with '*compile-asserts*' true.  See 'assert'.
 * Initially set to boolean value of cljs.spec.alpha/*runtime-asserts*.
 * Defaults to false.
 */
cljs.spec.alpha.check_asserts = (function cljs$spec$alpha$check_asserts(flag){
return (cljs.spec.alpha._STAR_runtime_asserts_STAR_ = flag);
});
/**
 * Do not call this directly, use 'assert'.
 */
cljs.spec.alpha.assert_STAR_ = (function cljs$spec$alpha$assert_STAR_(spec,x){
if(cljs.spec.alpha.valid_QMARK_.call(null,spec,x)){
return x;
} else {
var ed = cljs.core.merge.call(null,cljs.core.assoc.call(null,cljs.spec.alpha.explain_data_STAR_.call(null,spec,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,x),new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"assertion-failed","assertion-failed",-970534477)));
throw (new Error(["Spec assertion failed\n",(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__66236_66240 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__66237_66241 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__66238_66242 = true;
var _STAR_print_fn_STAR__temp_val__66239_66243 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__66238_66242);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__66239_66243);

try{cljs.spec.alpha.explain_out.call(null,ed);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__66237_66241);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__66236_66240);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})()].join('')));
}
});

//# sourceMappingURL=alpha.js.map?rel=1589677420064
