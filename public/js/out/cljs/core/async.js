// Compiled by ClojureScript 1.10.597 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__50134 = arguments.length;
switch (G__50134) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50135 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50135 = (function (f,blockable,meta50136){
this.f = f;
this.blockable = blockable;
this.meta50136 = meta50136;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50137,meta50136__$1){
var self__ = this;
var _50137__$1 = this;
return (new cljs.core.async.t_cljs$core$async50135(self__.f,self__.blockable,meta50136__$1));
}));

(cljs.core.async.t_cljs$core$async50135.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50137){
var self__ = this;
var _50137__$1 = this;
return self__.meta50136;
}));

(cljs.core.async.t_cljs$core$async50135.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50135.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50135.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async50135.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async50135.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta50136","meta50136",6048611,null)], null);
}));

(cljs.core.async.t_cljs$core$async50135.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50135.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50135");

(cljs.core.async.t_cljs$core$async50135.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async50135");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50135.
 */
cljs.core.async.__GT_t_cljs$core$async50135 = (function cljs$core$async$__GT_t_cljs$core$async50135(f__$1,blockable__$1,meta50136){
return (new cljs.core.async.t_cljs$core$async50135(f__$1,blockable__$1,meta50136));
});

}

return (new cljs.core.async.t_cljs$core$async50135(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__50141 = arguments.length;
switch (G__50141) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__50144 = arguments.length;
switch (G__50144) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__50147 = arguments.length;
switch (G__50147) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_50149 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_50149);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_50149);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__50151 = arguments.length;
switch (G__50151) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___50153 = n;
var x_50154 = (0);
while(true){
if((x_50154 < n__4666__auto___50153)){
(a[x_50154] = (0));

var G__50155 = (x_50154 + (1));
x_50154 = G__50155;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__50156 = (i + (1));
i = G__50156;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50157 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50157 = (function (flag,meta50158){
this.flag = flag;
this.meta50158 = meta50158;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50159,meta50158__$1){
var self__ = this;
var _50159__$1 = this;
return (new cljs.core.async.t_cljs$core$async50157(self__.flag,meta50158__$1));
}));

(cljs.core.async.t_cljs$core$async50157.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50159){
var self__ = this;
var _50159__$1 = this;
return self__.meta50158;
}));

(cljs.core.async.t_cljs$core$async50157.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50157.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async50157.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50157.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async50157.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta50158","meta50158",-1025119068,null)], null);
}));

(cljs.core.async.t_cljs$core$async50157.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50157.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50157");

(cljs.core.async.t_cljs$core$async50157.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async50157");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50157.
 */
cljs.core.async.__GT_t_cljs$core$async50157 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async50157(flag__$1,meta50158){
return (new cljs.core.async.t_cljs$core$async50157(flag__$1,meta50158));
});

}

return (new cljs.core.async.t_cljs$core$async50157(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50160 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50160 = (function (flag,cb,meta50161){
this.flag = flag;
this.cb = cb;
this.meta50161 = meta50161;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50162,meta50161__$1){
var self__ = this;
var _50162__$1 = this;
return (new cljs.core.async.t_cljs$core$async50160(self__.flag,self__.cb,meta50161__$1));
}));

(cljs.core.async.t_cljs$core$async50160.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50162){
var self__ = this;
var _50162__$1 = this;
return self__.meta50161;
}));

(cljs.core.async.t_cljs$core$async50160.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50160.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async50160.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50160.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async50160.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta50161","meta50161",-1959545156,null)], null);
}));

(cljs.core.async.t_cljs$core$async50160.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50160.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50160");

(cljs.core.async.t_cljs$core$async50160.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async50160");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50160.
 */
cljs.core.async.__GT_t_cljs$core$async50160 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async50160(flag__$1,cb__$1,meta50161){
return (new cljs.core.async.t_cljs$core$async50160(flag__$1,cb__$1,meta50161));
});

}

return (new cljs.core.async.t_cljs$core$async50160(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__50163_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50163_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__50164_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50164_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__50165 = (i + (1));
i = G__50165;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___50171 = arguments.length;
var i__4790__auto___50172 = (0);
while(true){
if((i__4790__auto___50172 < len__4789__auto___50171)){
args__4795__auto__.push((arguments[i__4790__auto___50172]));

var G__50173 = (i__4790__auto___50172 + (1));
i__4790__auto___50172 = G__50173;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__50168){
var map__50169 = p__50168;
var map__50169__$1 = (((((!((map__50169 == null))))?(((((map__50169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50169):map__50169);
var opts = map__50169__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq50166){
var G__50167 = cljs.core.first.call(null,seq50166);
var seq50166__$1 = cljs.core.next.call(null,seq50166);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50167,seq50166__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__50175 = arguments.length;
switch (G__50175) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29223__auto___50221 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29224__auto__ = (function (){var switch__29128__auto__ = (function (state_50199){
var state_val_50200 = (state_50199[(1)]);
if((state_val_50200 === (7))){
var inst_50195 = (state_50199[(2)]);
var state_50199__$1 = state_50199;
var statearr_50201_50222 = state_50199__$1;
(statearr_50201_50222[(2)] = inst_50195);

(statearr_50201_50222[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50200 === (1))){
var state_50199__$1 = state_50199;
var statearr_50202_50223 = state_50199__$1;
(statearr_50202_50223[(2)] = null);

(statearr_50202_50223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50200 === (4))){
var inst_50178 = (state_50199[(7)]);
var inst_50178__$1 = (state_50199[(2)]);
var inst_50179 = (inst_50178__$1 == null);
var state_50199__$1 = (function (){var statearr_50203 = state_50199;
(statearr_50203[(7)] = inst_50178__$1);

return statearr_50203;
})();
if(cljs.core.truth_(inst_50179)){
var statearr_50204_50224 = state_50199__$1;
(statearr_50204_50224[(1)] = (5));

} else {
var statearr_50205_50225 = state_50199__$1;
(statearr_50205_50225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50200 === (13))){
var state_50199__$1 = state_50199;
var statearr_50206_50226 = state_50199__$1;
(statearr_50206_50226[(2)] = null);

(statearr_50206_50226[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50200 === (6))){
var inst_50178 = (state_50199[(7)]);
var state_50199__$1 = state_50199;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50199__$1,(11),to,inst_50178);
} else {
if((state_val_50200 === (3))){
var inst_50197 = (state_50199[(2)]);
var state_50199__$1 = state_50199;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50199__$1,inst_50197);
} else {
if((state_val_50200 === (12))){
var state_50199__$1 = state_50199;
var statearr_50207_50227 = state_50199__$1;
(statearr_50207_50227[(2)] = null);

(statearr_50207_50227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50200 === (2))){
var state_50199__$1 = state_50199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50199__$1,(4),from);
} else {
if((state_val_50200 === (11))){
var inst_50188 = (state_50199[(2)]);
var state_50199__$1 = state_50199;
if(cljs.core.truth_(inst_50188)){
var statearr_50208_50228 = state_50199__$1;
(statearr_50208_50228[(1)] = (12));

} else {
var statearr_50209_50229 = state_50199__$1;
(statearr_50209_50229[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50200 === (9))){
var state_50199__$1 = state_50199;
var statearr_50210_50230 = state_50199__$1;
(statearr_50210_50230[(2)] = null);

(statearr_50210_50230[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50200 === (5))){
var state_50199__$1 = state_50199;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50211_50231 = state_50199__$1;
(statearr_50211_50231[(1)] = (8));

} else {
var statearr_50212_50232 = state_50199__$1;
(statearr_50212_50232[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50200 === (14))){
var inst_50193 = (state_50199[(2)]);
var state_50199__$1 = state_50199;
var statearr_50213_50233 = state_50199__$1;
(statearr_50213_50233[(2)] = inst_50193);

(statearr_50213_50233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50200 === (10))){
var inst_50185 = (state_50199[(2)]);
var state_50199__$1 = state_50199;
var statearr_50214_50234 = state_50199__$1;
(statearr_50214_50234[(2)] = inst_50185);

(statearr_50214_50234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50200 === (8))){
var inst_50182 = cljs.core.async.close_BANG_.call(null,to);
var state_50199__$1 = state_50199;
var statearr_50215_50235 = state_50199__$1;
(statearr_50215_50235[(2)] = inst_50182);

(statearr_50215_50235[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__29129__auto__ = null;
var cljs$core$async$state_machine__29129__auto____0 = (function (){
var statearr_50216 = [null,null,null,null,null,null,null,null];
(statearr_50216[(0)] = cljs$core$async$state_machine__29129__auto__);

(statearr_50216[(1)] = (1));

return statearr_50216;
});
var cljs$core$async$state_machine__29129__auto____1 = (function (state_50199){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_50199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e50217){if((e50217 instanceof Object)){
var ex__29132__auto__ = e50217;
var statearr_50218_50236 = state_50199;
(statearr_50218_50236[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50237 = state_50199;
state_50199 = G__50237;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
cljs$core$async$state_machine__29129__auto__ = function(state_50199){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29129__auto____1.call(this,state_50199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29129__auto____0;
cljs$core$async$state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29129__auto____1;
return cljs$core$async$state_machine__29129__auto__;
})()
})();
var state__29225__auto__ = (function (){var statearr_50219 = f__29224__auto__.call(null);
(statearr_50219[(6)] = c__29223__auto___50221);

return statearr_50219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29225__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process__$1 = (function (p__50238){
var vec__50239 = p__50238;
var v = cljs.core.nth.call(null,vec__50239,(0),null);
var p = cljs.core.nth.call(null,vec__50239,(1),null);
var job = vec__50239;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29223__auto___50410 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29224__auto__ = (function (){var switch__29128__auto__ = (function (state_50246){
var state_val_50247 = (state_50246[(1)]);
if((state_val_50247 === (1))){
var state_50246__$1 = state_50246;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50246__$1,(2),res,v);
} else {
if((state_val_50247 === (2))){
var inst_50243 = (state_50246[(2)]);
var inst_50244 = cljs.core.async.close_BANG_.call(null,res);
var state_50246__$1 = (function (){var statearr_50248 = state_50246;
(statearr_50248[(7)] = inst_50243);

return statearr_50248;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50246__$1,inst_50244);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____0 = (function (){
var statearr_50249 = [null,null,null,null,null,null,null,null];
(statearr_50249[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__);

(statearr_50249[(1)] = (1));

return statearr_50249;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____1 = (function (state_50246){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_50246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e50250){if((e50250 instanceof Object)){
var ex__29132__auto__ = e50250;
var statearr_50251_50411 = state_50246;
(statearr_50251_50411[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50412 = state_50246;
state_50246 = G__50412;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__ = function(state_50246){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____1.call(this,state_50246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__;
})()
})();
var state__29225__auto__ = (function (){var statearr_50252 = f__29224__auto__.call(null);
(statearr_50252[(6)] = c__29223__auto___50410);

return statearr_50252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29225__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__50253){
var vec__50254 = p__50253;
var v = cljs.core.nth.call(null,vec__50254,(0),null);
var p = cljs.core.nth.call(null,vec__50254,(1),null);
var job = vec__50254;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4666__auto___50413 = n;
var __50414 = (0);
while(true){
if((__50414 < n__4666__auto___50413)){
var G__50257_50415 = type;
var G__50257_50416__$1 = (((G__50257_50415 instanceof cljs.core.Keyword))?G__50257_50415.fqn:null);
switch (G__50257_50416__$1) {
case "compute":
var c__29223__auto___50418 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__50414,c__29223__auto___50418,G__50257_50415,G__50257_50416__$1,n__4666__auto___50413,jobs,results,process__$1,async){
return (function (){
var f__29224__auto__ = (function (){var switch__29128__auto__ = ((function (__50414,c__29223__auto___50418,G__50257_50415,G__50257_50416__$1,n__4666__auto___50413,jobs,results,process__$1,async){
return (function (state_50270){
var state_val_50271 = (state_50270[(1)]);
if((state_val_50271 === (1))){
var state_50270__$1 = state_50270;
var statearr_50272_50419 = state_50270__$1;
(statearr_50272_50419[(2)] = null);

(statearr_50272_50419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50271 === (2))){
var state_50270__$1 = state_50270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50270__$1,(4),jobs);
} else {
if((state_val_50271 === (3))){
var inst_50268 = (state_50270[(2)]);
var state_50270__$1 = state_50270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50270__$1,inst_50268);
} else {
if((state_val_50271 === (4))){
var inst_50260 = (state_50270[(2)]);
var inst_50261 = process__$1.call(null,inst_50260);
var state_50270__$1 = state_50270;
if(cljs.core.truth_(inst_50261)){
var statearr_50273_50420 = state_50270__$1;
(statearr_50273_50420[(1)] = (5));

} else {
var statearr_50274_50421 = state_50270__$1;
(statearr_50274_50421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50271 === (5))){
var state_50270__$1 = state_50270;
var statearr_50275_50422 = state_50270__$1;
(statearr_50275_50422[(2)] = null);

(statearr_50275_50422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50271 === (6))){
var state_50270__$1 = state_50270;
var statearr_50276_50423 = state_50270__$1;
(statearr_50276_50423[(2)] = null);

(statearr_50276_50423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50271 === (7))){
var inst_50266 = (state_50270[(2)]);
var state_50270__$1 = state_50270;
var statearr_50277_50424 = state_50270__$1;
(statearr_50277_50424[(2)] = inst_50266);

(statearr_50277_50424[(1)] = (3));


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
});})(__50414,c__29223__auto___50418,G__50257_50415,G__50257_50416__$1,n__4666__auto___50413,jobs,results,process__$1,async))
;
return ((function (__50414,switch__29128__auto__,c__29223__auto___50418,G__50257_50415,G__50257_50416__$1,n__4666__auto___50413,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____0 = (function (){
var statearr_50278 = [null,null,null,null,null,null,null];
(statearr_50278[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__);

(statearr_50278[(1)] = (1));

return statearr_50278;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____1 = (function (state_50270){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_50270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e50279){if((e50279 instanceof Object)){
var ex__29132__auto__ = e50279;
var statearr_50280_50425 = state_50270;
(statearr_50280_50425[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50426 = state_50270;
state_50270 = G__50426;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__ = function(state_50270){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____1.call(this,state_50270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__;
})()
;})(__50414,switch__29128__auto__,c__29223__auto___50418,G__50257_50415,G__50257_50416__$1,n__4666__auto___50413,jobs,results,process__$1,async))
})();
var state__29225__auto__ = (function (){var statearr_50281 = f__29224__auto__.call(null);
(statearr_50281[(6)] = c__29223__auto___50418);

return statearr_50281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29225__auto__);
});})(__50414,c__29223__auto___50418,G__50257_50415,G__50257_50416__$1,n__4666__auto___50413,jobs,results,process__$1,async))
);


break;
case "async":
var c__29223__auto___50427 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__50414,c__29223__auto___50427,G__50257_50415,G__50257_50416__$1,n__4666__auto___50413,jobs,results,process__$1,async){
return (function (){
var f__29224__auto__ = (function (){var switch__29128__auto__ = ((function (__50414,c__29223__auto___50427,G__50257_50415,G__50257_50416__$1,n__4666__auto___50413,jobs,results,process__$1,async){
return (function (state_50294){
var state_val_50295 = (state_50294[(1)]);
if((state_val_50295 === (1))){
var state_50294__$1 = state_50294;
var statearr_50296_50428 = state_50294__$1;
(statearr_50296_50428[(2)] = null);

(statearr_50296_50428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50295 === (2))){
var state_50294__$1 = state_50294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50294__$1,(4),jobs);
} else {
if((state_val_50295 === (3))){
var inst_50292 = (state_50294[(2)]);
var state_50294__$1 = state_50294;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50294__$1,inst_50292);
} else {
if((state_val_50295 === (4))){
var inst_50284 = (state_50294[(2)]);
var inst_50285 = async.call(null,inst_50284);
var state_50294__$1 = state_50294;
if(cljs.core.truth_(inst_50285)){
var statearr_50297_50429 = state_50294__$1;
(statearr_50297_50429[(1)] = (5));

} else {
var statearr_50298_50430 = state_50294__$1;
(statearr_50298_50430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50295 === (5))){
var state_50294__$1 = state_50294;
var statearr_50299_50431 = state_50294__$1;
(statearr_50299_50431[(2)] = null);

(statearr_50299_50431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50295 === (6))){
var state_50294__$1 = state_50294;
var statearr_50300_50432 = state_50294__$1;
(statearr_50300_50432[(2)] = null);

(statearr_50300_50432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50295 === (7))){
var inst_50290 = (state_50294[(2)]);
var state_50294__$1 = state_50294;
var statearr_50301_50433 = state_50294__$1;
(statearr_50301_50433[(2)] = inst_50290);

(statearr_50301_50433[(1)] = (3));


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
});})(__50414,c__29223__auto___50427,G__50257_50415,G__50257_50416__$1,n__4666__auto___50413,jobs,results,process__$1,async))
;
return ((function (__50414,switch__29128__auto__,c__29223__auto___50427,G__50257_50415,G__50257_50416__$1,n__4666__auto___50413,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____0 = (function (){
var statearr_50302 = [null,null,null,null,null,null,null];
(statearr_50302[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__);

(statearr_50302[(1)] = (1));

return statearr_50302;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____1 = (function (state_50294){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_50294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e50303){if((e50303 instanceof Object)){
var ex__29132__auto__ = e50303;
var statearr_50304_50434 = state_50294;
(statearr_50304_50434[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50303;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50435 = state_50294;
state_50294 = G__50435;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__ = function(state_50294){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____1.call(this,state_50294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__;
})()
;})(__50414,switch__29128__auto__,c__29223__auto___50427,G__50257_50415,G__50257_50416__$1,n__4666__auto___50413,jobs,results,process__$1,async))
})();
var state__29225__auto__ = (function (){var statearr_50305 = f__29224__auto__.call(null);
(statearr_50305[(6)] = c__29223__auto___50427);

return statearr_50305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29225__auto__);
});})(__50414,c__29223__auto___50427,G__50257_50415,G__50257_50416__$1,n__4666__auto___50413,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50257_50416__$1)].join('')));

}

var G__50436 = (__50414 + (1));
__50414 = G__50436;
continue;
} else {
}
break;
}

var c__29223__auto___50437 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29224__auto__ = (function (){var switch__29128__auto__ = (function (state_50327){
var state_val_50328 = (state_50327[(1)]);
if((state_val_50328 === (7))){
var inst_50323 = (state_50327[(2)]);
var state_50327__$1 = state_50327;
var statearr_50329_50438 = state_50327__$1;
(statearr_50329_50438[(2)] = inst_50323);

(statearr_50329_50438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50328 === (1))){
var state_50327__$1 = state_50327;
var statearr_50330_50439 = state_50327__$1;
(statearr_50330_50439[(2)] = null);

(statearr_50330_50439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50328 === (4))){
var inst_50308 = (state_50327[(7)]);
var inst_50308__$1 = (state_50327[(2)]);
var inst_50309 = (inst_50308__$1 == null);
var state_50327__$1 = (function (){var statearr_50331 = state_50327;
(statearr_50331[(7)] = inst_50308__$1);

return statearr_50331;
})();
if(cljs.core.truth_(inst_50309)){
var statearr_50332_50440 = state_50327__$1;
(statearr_50332_50440[(1)] = (5));

} else {
var statearr_50333_50441 = state_50327__$1;
(statearr_50333_50441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50328 === (6))){
var inst_50313 = (state_50327[(8)]);
var inst_50308 = (state_50327[(7)]);
var inst_50313__$1 = cljs.core.async.chan.call(null,(1));
var inst_50314 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50315 = [inst_50308,inst_50313__$1];
var inst_50316 = (new cljs.core.PersistentVector(null,2,(5),inst_50314,inst_50315,null));
var state_50327__$1 = (function (){var statearr_50334 = state_50327;
(statearr_50334[(8)] = inst_50313__$1);

return statearr_50334;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50327__$1,(8),jobs,inst_50316);
} else {
if((state_val_50328 === (3))){
var inst_50325 = (state_50327[(2)]);
var state_50327__$1 = state_50327;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50327__$1,inst_50325);
} else {
if((state_val_50328 === (2))){
var state_50327__$1 = state_50327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50327__$1,(4),from);
} else {
if((state_val_50328 === (9))){
var inst_50320 = (state_50327[(2)]);
var state_50327__$1 = (function (){var statearr_50335 = state_50327;
(statearr_50335[(9)] = inst_50320);

return statearr_50335;
})();
var statearr_50336_50442 = state_50327__$1;
(statearr_50336_50442[(2)] = null);

(statearr_50336_50442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50328 === (5))){
var inst_50311 = cljs.core.async.close_BANG_.call(null,jobs);
var state_50327__$1 = state_50327;
var statearr_50337_50443 = state_50327__$1;
(statearr_50337_50443[(2)] = inst_50311);

(statearr_50337_50443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50328 === (8))){
var inst_50313 = (state_50327[(8)]);
var inst_50318 = (state_50327[(2)]);
var state_50327__$1 = (function (){var statearr_50338 = state_50327;
(statearr_50338[(10)] = inst_50318);

return statearr_50338;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50327__$1,(9),results,inst_50313);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____0 = (function (){
var statearr_50339 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50339[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__);

(statearr_50339[(1)] = (1));

return statearr_50339;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____1 = (function (state_50327){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_50327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e50340){if((e50340 instanceof Object)){
var ex__29132__auto__ = e50340;
var statearr_50341_50444 = state_50327;
(statearr_50341_50444[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50445 = state_50327;
state_50327 = G__50445;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__ = function(state_50327){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____1.call(this,state_50327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__;
})()
})();
var state__29225__auto__ = (function (){var statearr_50342 = f__29224__auto__.call(null);
(statearr_50342[(6)] = c__29223__auto___50437);

return statearr_50342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29225__auto__);
}));


var c__29223__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29224__auto__ = (function (){var switch__29128__auto__ = (function (state_50380){
var state_val_50381 = (state_50380[(1)]);
if((state_val_50381 === (7))){
var inst_50376 = (state_50380[(2)]);
var state_50380__$1 = state_50380;
var statearr_50382_50446 = state_50380__$1;
(statearr_50382_50446[(2)] = inst_50376);

(statearr_50382_50446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50381 === (20))){
var state_50380__$1 = state_50380;
var statearr_50383_50447 = state_50380__$1;
(statearr_50383_50447[(2)] = null);

(statearr_50383_50447[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50381 === (1))){
var state_50380__$1 = state_50380;
var statearr_50384_50448 = state_50380__$1;
(statearr_50384_50448[(2)] = null);

(statearr_50384_50448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50381 === (4))){
var inst_50345 = (state_50380[(7)]);
var inst_50345__$1 = (state_50380[(2)]);
var inst_50346 = (inst_50345__$1 == null);
var state_50380__$1 = (function (){var statearr_50385 = state_50380;
(statearr_50385[(7)] = inst_50345__$1);

return statearr_50385;
})();
if(cljs.core.truth_(inst_50346)){
var statearr_50386_50449 = state_50380__$1;
(statearr_50386_50449[(1)] = (5));

} else {
var statearr_50387_50450 = state_50380__$1;
(statearr_50387_50450[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50381 === (15))){
var inst_50358 = (state_50380[(8)]);
var state_50380__$1 = state_50380;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50380__$1,(18),to,inst_50358);
} else {
if((state_val_50381 === (21))){
var inst_50371 = (state_50380[(2)]);
var state_50380__$1 = state_50380;
var statearr_50388_50451 = state_50380__$1;
(statearr_50388_50451[(2)] = inst_50371);

(statearr_50388_50451[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50381 === (13))){
var inst_50373 = (state_50380[(2)]);
var state_50380__$1 = (function (){var statearr_50389 = state_50380;
(statearr_50389[(9)] = inst_50373);

return statearr_50389;
})();
var statearr_50390_50452 = state_50380__$1;
(statearr_50390_50452[(2)] = null);

(statearr_50390_50452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50381 === (6))){
var inst_50345 = (state_50380[(7)]);
var state_50380__$1 = state_50380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50380__$1,(11),inst_50345);
} else {
if((state_val_50381 === (17))){
var inst_50366 = (state_50380[(2)]);
var state_50380__$1 = state_50380;
if(cljs.core.truth_(inst_50366)){
var statearr_50391_50453 = state_50380__$1;
(statearr_50391_50453[(1)] = (19));

} else {
var statearr_50392_50454 = state_50380__$1;
(statearr_50392_50454[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50381 === (3))){
var inst_50378 = (state_50380[(2)]);
var state_50380__$1 = state_50380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50380__$1,inst_50378);
} else {
if((state_val_50381 === (12))){
var inst_50355 = (state_50380[(10)]);
var state_50380__$1 = state_50380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50380__$1,(14),inst_50355);
} else {
if((state_val_50381 === (2))){
var state_50380__$1 = state_50380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50380__$1,(4),results);
} else {
if((state_val_50381 === (19))){
var state_50380__$1 = state_50380;
var statearr_50393_50455 = state_50380__$1;
(statearr_50393_50455[(2)] = null);

(statearr_50393_50455[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50381 === (11))){
var inst_50355 = (state_50380[(2)]);
var state_50380__$1 = (function (){var statearr_50394 = state_50380;
(statearr_50394[(10)] = inst_50355);

return statearr_50394;
})();
var statearr_50395_50456 = state_50380__$1;
(statearr_50395_50456[(2)] = null);

(statearr_50395_50456[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50381 === (9))){
var state_50380__$1 = state_50380;
var statearr_50396_50457 = state_50380__$1;
(statearr_50396_50457[(2)] = null);

(statearr_50396_50457[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50381 === (5))){
var state_50380__$1 = state_50380;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50397_50458 = state_50380__$1;
(statearr_50397_50458[(1)] = (8));

} else {
var statearr_50398_50459 = state_50380__$1;
(statearr_50398_50459[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50381 === (14))){
var inst_50358 = (state_50380[(8)]);
var inst_50358__$1 = (state_50380[(2)]);
var inst_50359 = (inst_50358__$1 == null);
var inst_50360 = cljs.core.not.call(null,inst_50359);
var state_50380__$1 = (function (){var statearr_50399 = state_50380;
(statearr_50399[(8)] = inst_50358__$1);

return statearr_50399;
})();
if(inst_50360){
var statearr_50400_50460 = state_50380__$1;
(statearr_50400_50460[(1)] = (15));

} else {
var statearr_50401_50461 = state_50380__$1;
(statearr_50401_50461[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50381 === (16))){
var state_50380__$1 = state_50380;
var statearr_50402_50462 = state_50380__$1;
(statearr_50402_50462[(2)] = false);

(statearr_50402_50462[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50381 === (10))){
var inst_50352 = (state_50380[(2)]);
var state_50380__$1 = state_50380;
var statearr_50403_50463 = state_50380__$1;
(statearr_50403_50463[(2)] = inst_50352);

(statearr_50403_50463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50381 === (18))){
var inst_50363 = (state_50380[(2)]);
var state_50380__$1 = state_50380;
var statearr_50404_50464 = state_50380__$1;
(statearr_50404_50464[(2)] = inst_50363);

(statearr_50404_50464[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50381 === (8))){
var inst_50349 = cljs.core.async.close_BANG_.call(null,to);
var state_50380__$1 = state_50380;
var statearr_50405_50465 = state_50380__$1;
(statearr_50405_50465[(2)] = inst_50349);

(statearr_50405_50465[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____0 = (function (){
var statearr_50406 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50406[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__);

(statearr_50406[(1)] = (1));

return statearr_50406;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____1 = (function (state_50380){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_50380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e50407){if((e50407 instanceof Object)){
var ex__29132__auto__ = e50407;
var statearr_50408_50466 = state_50380;
(statearr_50408_50466[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50467 = state_50380;
state_50380 = G__50467;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__ = function(state_50380){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____1.call(this,state_50380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29129__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29129__auto__;
})()
})();
var state__29225__auto__ = (function (){var statearr_50409 = f__29224__auto__.call(null);
(statearr_50409[(6)] = c__29223__auto__);

return statearr_50409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29225__auto__);
}));

return c__29223__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__50469 = arguments.length;
switch (G__50469) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__50472 = arguments.length;
switch (G__50472) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__50475 = arguments.length;
switch (G__50475) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29223__auto___50524 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29224__auto__ = (function (){var switch__29128__auto__ = (function (state_50501){
var state_val_50502 = (state_50501[(1)]);
if((state_val_50502 === (7))){
var inst_50497 = (state_50501[(2)]);
var state_50501__$1 = state_50501;
var statearr_50503_50525 = state_50501__$1;
(statearr_50503_50525[(2)] = inst_50497);

(statearr_50503_50525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50502 === (1))){
var state_50501__$1 = state_50501;
var statearr_50504_50526 = state_50501__$1;
(statearr_50504_50526[(2)] = null);

(statearr_50504_50526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50502 === (4))){
var inst_50478 = (state_50501[(7)]);
var inst_50478__$1 = (state_50501[(2)]);
var inst_50479 = (inst_50478__$1 == null);
var state_50501__$1 = (function (){var statearr_50505 = state_50501;
(statearr_50505[(7)] = inst_50478__$1);

return statearr_50505;
})();
if(cljs.core.truth_(inst_50479)){
var statearr_50506_50527 = state_50501__$1;
(statearr_50506_50527[(1)] = (5));

} else {
var statearr_50507_50528 = state_50501__$1;
(statearr_50507_50528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50502 === (13))){
var state_50501__$1 = state_50501;
var statearr_50508_50529 = state_50501__$1;
(statearr_50508_50529[(2)] = null);

(statearr_50508_50529[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50502 === (6))){
var inst_50478 = (state_50501[(7)]);
var inst_50484 = p.call(null,inst_50478);
var state_50501__$1 = state_50501;
if(cljs.core.truth_(inst_50484)){
var statearr_50509_50530 = state_50501__$1;
(statearr_50509_50530[(1)] = (9));

} else {
var statearr_50510_50531 = state_50501__$1;
(statearr_50510_50531[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50502 === (3))){
var inst_50499 = (state_50501[(2)]);
var state_50501__$1 = state_50501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50501__$1,inst_50499);
} else {
if((state_val_50502 === (12))){
var state_50501__$1 = state_50501;
var statearr_50511_50532 = state_50501__$1;
(statearr_50511_50532[(2)] = null);

(statearr_50511_50532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50502 === (2))){
var state_50501__$1 = state_50501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50501__$1,(4),ch);
} else {
if((state_val_50502 === (11))){
var inst_50478 = (state_50501[(7)]);
var inst_50488 = (state_50501[(2)]);
var state_50501__$1 = state_50501;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50501__$1,(8),inst_50488,inst_50478);
} else {
if((state_val_50502 === (9))){
var state_50501__$1 = state_50501;
var statearr_50512_50533 = state_50501__$1;
(statearr_50512_50533[(2)] = tc);

(statearr_50512_50533[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50502 === (5))){
var inst_50481 = cljs.core.async.close_BANG_.call(null,tc);
var inst_50482 = cljs.core.async.close_BANG_.call(null,fc);
var state_50501__$1 = (function (){var statearr_50513 = state_50501;
(statearr_50513[(8)] = inst_50481);

return statearr_50513;
})();
var statearr_50514_50534 = state_50501__$1;
(statearr_50514_50534[(2)] = inst_50482);

(statearr_50514_50534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50502 === (14))){
var inst_50495 = (state_50501[(2)]);
var state_50501__$1 = state_50501;
var statearr_50515_50535 = state_50501__$1;
(statearr_50515_50535[(2)] = inst_50495);

(statearr_50515_50535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50502 === (10))){
var state_50501__$1 = state_50501;
var statearr_50516_50536 = state_50501__$1;
(statearr_50516_50536[(2)] = fc);

(statearr_50516_50536[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50502 === (8))){
var inst_50490 = (state_50501[(2)]);
var state_50501__$1 = state_50501;
if(cljs.core.truth_(inst_50490)){
var statearr_50517_50537 = state_50501__$1;
(statearr_50517_50537[(1)] = (12));

} else {
var statearr_50518_50538 = state_50501__$1;
(statearr_50518_50538[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__29129__auto__ = null;
var cljs$core$async$state_machine__29129__auto____0 = (function (){
var statearr_50519 = [null,null,null,null,null,null,null,null,null];
(statearr_50519[(0)] = cljs$core$async$state_machine__29129__auto__);

(statearr_50519[(1)] = (1));

return statearr_50519;
});
var cljs$core$async$state_machine__29129__auto____1 = (function (state_50501){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_50501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e50520){if((e50520 instanceof Object)){
var ex__29132__auto__ = e50520;
var statearr_50521_50539 = state_50501;
(statearr_50521_50539[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50540 = state_50501;
state_50501 = G__50540;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
cljs$core$async$state_machine__29129__auto__ = function(state_50501){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29129__auto____1.call(this,state_50501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29129__auto____0;
cljs$core$async$state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29129__auto____1;
return cljs$core$async$state_machine__29129__auto__;
})()
})();
var state__29225__auto__ = (function (){var statearr_50522 = f__29224__auto__.call(null);
(statearr_50522[(6)] = c__29223__auto___50524);

return statearr_50522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29225__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29223__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29224__auto__ = (function (){var switch__29128__auto__ = (function (state_50561){
var state_val_50562 = (state_50561[(1)]);
if((state_val_50562 === (7))){
var inst_50557 = (state_50561[(2)]);
var state_50561__$1 = state_50561;
var statearr_50563_50581 = state_50561__$1;
(statearr_50563_50581[(2)] = inst_50557);

(statearr_50563_50581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50562 === (1))){
var inst_50541 = init;
var state_50561__$1 = (function (){var statearr_50564 = state_50561;
(statearr_50564[(7)] = inst_50541);

return statearr_50564;
})();
var statearr_50565_50582 = state_50561__$1;
(statearr_50565_50582[(2)] = null);

(statearr_50565_50582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50562 === (4))){
var inst_50544 = (state_50561[(8)]);
var inst_50544__$1 = (state_50561[(2)]);
var inst_50545 = (inst_50544__$1 == null);
var state_50561__$1 = (function (){var statearr_50566 = state_50561;
(statearr_50566[(8)] = inst_50544__$1);

return statearr_50566;
})();
if(cljs.core.truth_(inst_50545)){
var statearr_50567_50583 = state_50561__$1;
(statearr_50567_50583[(1)] = (5));

} else {
var statearr_50568_50584 = state_50561__$1;
(statearr_50568_50584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50562 === (6))){
var inst_50541 = (state_50561[(7)]);
var inst_50544 = (state_50561[(8)]);
var inst_50548 = (state_50561[(9)]);
var inst_50548__$1 = f.call(null,inst_50541,inst_50544);
var inst_50549 = cljs.core.reduced_QMARK_.call(null,inst_50548__$1);
var state_50561__$1 = (function (){var statearr_50569 = state_50561;
(statearr_50569[(9)] = inst_50548__$1);

return statearr_50569;
})();
if(inst_50549){
var statearr_50570_50585 = state_50561__$1;
(statearr_50570_50585[(1)] = (8));

} else {
var statearr_50571_50586 = state_50561__$1;
(statearr_50571_50586[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50562 === (3))){
var inst_50559 = (state_50561[(2)]);
var state_50561__$1 = state_50561;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50561__$1,inst_50559);
} else {
if((state_val_50562 === (2))){
var state_50561__$1 = state_50561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50561__$1,(4),ch);
} else {
if((state_val_50562 === (9))){
var inst_50548 = (state_50561[(9)]);
var inst_50541 = inst_50548;
var state_50561__$1 = (function (){var statearr_50572 = state_50561;
(statearr_50572[(7)] = inst_50541);

return statearr_50572;
})();
var statearr_50573_50587 = state_50561__$1;
(statearr_50573_50587[(2)] = null);

(statearr_50573_50587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50562 === (5))){
var inst_50541 = (state_50561[(7)]);
var state_50561__$1 = state_50561;
var statearr_50574_50588 = state_50561__$1;
(statearr_50574_50588[(2)] = inst_50541);

(statearr_50574_50588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50562 === (10))){
var inst_50555 = (state_50561[(2)]);
var state_50561__$1 = state_50561;
var statearr_50575_50589 = state_50561__$1;
(statearr_50575_50589[(2)] = inst_50555);

(statearr_50575_50589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50562 === (8))){
var inst_50548 = (state_50561[(9)]);
var inst_50551 = cljs.core.deref.call(null,inst_50548);
var state_50561__$1 = state_50561;
var statearr_50576_50590 = state_50561__$1;
(statearr_50576_50590[(2)] = inst_50551);

(statearr_50576_50590[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29129__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29129__auto____0 = (function (){
var statearr_50577 = [null,null,null,null,null,null,null,null,null,null];
(statearr_50577[(0)] = cljs$core$async$reduce_$_state_machine__29129__auto__);

(statearr_50577[(1)] = (1));

return statearr_50577;
});
var cljs$core$async$reduce_$_state_machine__29129__auto____1 = (function (state_50561){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_50561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e50578){if((e50578 instanceof Object)){
var ex__29132__auto__ = e50578;
var statearr_50579_50591 = state_50561;
(statearr_50579_50591[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50592 = state_50561;
state_50561 = G__50592;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29129__auto__ = function(state_50561){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29129__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29129__auto____1.call(this,state_50561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29129__auto____0;
cljs$core$async$reduce_$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29129__auto____1;
return cljs$core$async$reduce_$_state_machine__29129__auto__;
})()
})();
var state__29225__auto__ = (function (){var statearr_50580 = f__29224__auto__.call(null);
(statearr_50580[(6)] = c__29223__auto__);

return statearr_50580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29225__auto__);
}));

return c__29223__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__29223__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29224__auto__ = (function (){var switch__29128__auto__ = (function (state_50598){
var state_val_50599 = (state_50598[(1)]);
if((state_val_50599 === (1))){
var inst_50593 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_50598__$1 = state_50598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50598__$1,(2),inst_50593);
} else {
if((state_val_50599 === (2))){
var inst_50595 = (state_50598[(2)]);
var inst_50596 = f__$1.call(null,inst_50595);
var state_50598__$1 = state_50598;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50598__$1,inst_50596);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29129__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29129__auto____0 = (function (){
var statearr_50600 = [null,null,null,null,null,null,null];
(statearr_50600[(0)] = cljs$core$async$transduce_$_state_machine__29129__auto__);

(statearr_50600[(1)] = (1));

return statearr_50600;
});
var cljs$core$async$transduce_$_state_machine__29129__auto____1 = (function (state_50598){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_50598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e50601){if((e50601 instanceof Object)){
var ex__29132__auto__ = e50601;
var statearr_50602_50604 = state_50598;
(statearr_50602_50604[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50605 = state_50598;
state_50598 = G__50605;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29129__auto__ = function(state_50598){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29129__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29129__auto____1.call(this,state_50598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29129__auto____0;
cljs$core$async$transduce_$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29129__auto____1;
return cljs$core$async$transduce_$_state_machine__29129__auto__;
})()
})();
var state__29225__auto__ = (function (){var statearr_50603 = f__29224__auto__.call(null);
(statearr_50603[(6)] = c__29223__auto__);

return statearr_50603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29225__auto__);
}));

return c__29223__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__50607 = arguments.length;
switch (G__50607) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29223__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29224__auto__ = (function (){var switch__29128__auto__ = (function (state_50632){
var state_val_50633 = (state_50632[(1)]);
if((state_val_50633 === (7))){
var inst_50614 = (state_50632[(2)]);
var state_50632__$1 = state_50632;
var statearr_50634_50655 = state_50632__$1;
(statearr_50634_50655[(2)] = inst_50614);

(statearr_50634_50655[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50633 === (1))){
var inst_50608 = cljs.core.seq.call(null,coll);
var inst_50609 = inst_50608;
var state_50632__$1 = (function (){var statearr_50635 = state_50632;
(statearr_50635[(7)] = inst_50609);

return statearr_50635;
})();
var statearr_50636_50656 = state_50632__$1;
(statearr_50636_50656[(2)] = null);

(statearr_50636_50656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50633 === (4))){
var inst_50609 = (state_50632[(7)]);
var inst_50612 = cljs.core.first.call(null,inst_50609);
var state_50632__$1 = state_50632;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50632__$1,(7),ch,inst_50612);
} else {
if((state_val_50633 === (13))){
var inst_50626 = (state_50632[(2)]);
var state_50632__$1 = state_50632;
var statearr_50637_50657 = state_50632__$1;
(statearr_50637_50657[(2)] = inst_50626);

(statearr_50637_50657[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50633 === (6))){
var inst_50617 = (state_50632[(2)]);
var state_50632__$1 = state_50632;
if(cljs.core.truth_(inst_50617)){
var statearr_50638_50658 = state_50632__$1;
(statearr_50638_50658[(1)] = (8));

} else {
var statearr_50639_50659 = state_50632__$1;
(statearr_50639_50659[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50633 === (3))){
var inst_50630 = (state_50632[(2)]);
var state_50632__$1 = state_50632;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50632__$1,inst_50630);
} else {
if((state_val_50633 === (12))){
var state_50632__$1 = state_50632;
var statearr_50640_50660 = state_50632__$1;
(statearr_50640_50660[(2)] = null);

(statearr_50640_50660[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50633 === (2))){
var inst_50609 = (state_50632[(7)]);
var state_50632__$1 = state_50632;
if(cljs.core.truth_(inst_50609)){
var statearr_50641_50661 = state_50632__$1;
(statearr_50641_50661[(1)] = (4));

} else {
var statearr_50642_50662 = state_50632__$1;
(statearr_50642_50662[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50633 === (11))){
var inst_50623 = cljs.core.async.close_BANG_.call(null,ch);
var state_50632__$1 = state_50632;
var statearr_50643_50663 = state_50632__$1;
(statearr_50643_50663[(2)] = inst_50623);

(statearr_50643_50663[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50633 === (9))){
var state_50632__$1 = state_50632;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50644_50664 = state_50632__$1;
(statearr_50644_50664[(1)] = (11));

} else {
var statearr_50645_50665 = state_50632__$1;
(statearr_50645_50665[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50633 === (5))){
var inst_50609 = (state_50632[(7)]);
var state_50632__$1 = state_50632;
var statearr_50646_50666 = state_50632__$1;
(statearr_50646_50666[(2)] = inst_50609);

(statearr_50646_50666[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50633 === (10))){
var inst_50628 = (state_50632[(2)]);
var state_50632__$1 = state_50632;
var statearr_50647_50667 = state_50632__$1;
(statearr_50647_50667[(2)] = inst_50628);

(statearr_50647_50667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50633 === (8))){
var inst_50609 = (state_50632[(7)]);
var inst_50619 = cljs.core.next.call(null,inst_50609);
var inst_50609__$1 = inst_50619;
var state_50632__$1 = (function (){var statearr_50648 = state_50632;
(statearr_50648[(7)] = inst_50609__$1);

return statearr_50648;
})();
var statearr_50649_50668 = state_50632__$1;
(statearr_50649_50668[(2)] = null);

(statearr_50649_50668[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__29129__auto__ = null;
var cljs$core$async$state_machine__29129__auto____0 = (function (){
var statearr_50650 = [null,null,null,null,null,null,null,null];
(statearr_50650[(0)] = cljs$core$async$state_machine__29129__auto__);

(statearr_50650[(1)] = (1));

return statearr_50650;
});
var cljs$core$async$state_machine__29129__auto____1 = (function (state_50632){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_50632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e50651){if((e50651 instanceof Object)){
var ex__29132__auto__ = e50651;
var statearr_50652_50669 = state_50632;
(statearr_50652_50669[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50670 = state_50632;
state_50632 = G__50670;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
cljs$core$async$state_machine__29129__auto__ = function(state_50632){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29129__auto____1.call(this,state_50632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29129__auto____0;
cljs$core$async$state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29129__auto____1;
return cljs$core$async$state_machine__29129__auto__;
})()
})();
var state__29225__auto__ = (function (){var statearr_50653 = f__29224__auto__.call(null);
(statearr_50653[(6)] = c__29223__auto__);

return statearr_50653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29225__auto__);
}));

return c__29223__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,_);
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch);
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m);
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50671 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50671 = (function (ch,cs,meta50672){
this.ch = ch;
this.cs = cs;
this.meta50672 = meta50672;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50673,meta50672__$1){
var self__ = this;
var _50673__$1 = this;
return (new cljs.core.async.t_cljs$core$async50671(self__.ch,self__.cs,meta50672__$1));
}));

(cljs.core.async.t_cljs$core$async50671.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50673){
var self__ = this;
var _50673__$1 = this;
return self__.meta50672;
}));

(cljs.core.async.t_cljs$core$async50671.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50671.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async50671.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50671.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async50671.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async50671.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async50671.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta50672","meta50672",-2146991169,null)], null);
}));

(cljs.core.async.t_cljs$core$async50671.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50671.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50671");

(cljs.core.async.t_cljs$core$async50671.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async50671");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50671.
 */
cljs.core.async.__GT_t_cljs$core$async50671 = (function cljs$core$async$mult_$___GT_t_cljs$core$async50671(ch__$1,cs__$1,meta50672){
return (new cljs.core.async.t_cljs$core$async50671(ch__$1,cs__$1,meta50672));
});

}

return (new cljs.core.async.t_cljs$core$async50671(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__29223__auto___50893 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29224__auto__ = (function (){var switch__29128__auto__ = (function (state_50808){
var state_val_50809 = (state_50808[(1)]);
if((state_val_50809 === (7))){
var inst_50804 = (state_50808[(2)]);
var state_50808__$1 = state_50808;
var statearr_50810_50894 = state_50808__$1;
(statearr_50810_50894[(2)] = inst_50804);

(statearr_50810_50894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50809 === (20))){
var inst_50707 = (state_50808[(7)]);
var inst_50719 = cljs.core.first.call(null,inst_50707);
var inst_50720 = cljs.core.nth.call(null,inst_50719,(0),null);
var inst_50721 = cljs.core.nth.call(null,inst_50719,(1),null);
var state_50808__$1 = (function (){var statearr_50811 = state_50808;
(statearr_50811[(8)] = inst_50720);

return statearr_50811;
})();
if(cljs.core.truth_(inst_50721)){
var statearr_50812_50895 = state_50808__$1;
(statearr_50812_50895[(1)] = (22));

} else {
var statearr_50813_50896 = state_50808__$1;
(statearr_50813_50896[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50809 === (27))){
var inst_50676 = (state_50808[(9)]);
var inst_50751 = (state_50808[(10)]);
var inst_50749 = (state_50808[(11)]);
var inst_50756 = (state_50808[(12)]);
var inst_50756__$1 = cljs.core._nth.call(null,inst_50749,inst_50751);
var inst_50757 = cljs.core.async.put_BANG_.call(null,inst_50756__$1,inst_50676,done);
var state_50808__$1 = (function (){var statearr_50814 = state_50808;
(statearr_50814[(12)] = inst_50756__$1);

return statearr_50814;
})();
if(cljs.core.truth_(inst_50757)){
var statearr_50815_50897 = state_50808__$1;
(statearr_50815_50897[(1)] = (30));

} else {
var statearr_50816_50898 = state_50808__$1;
(statearr_50816_50898[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50809 === (1))){
var state_50808__$1 = state_50808;
var statearr_50817_50899 = state_50808__$1;
(statearr_50817_50899[(2)] = null);

(statearr_50817_50899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50809 === (24))){
var inst_50707 = (state_50808[(7)]);
var inst_50726 = (state_50808[(2)]);
var inst_50727 = cljs.core.next.call(null,inst_50707);
var inst_50685 = inst_50727;
var inst_50686 = null;
var inst_50687 = (0);
var inst_50688 = (0);
var state_50808__$1 = (function (){var statearr_50818 = state_50808;
(statearr_50818[(13)] = inst_50688);

(statearr_50818[(14)] = inst_50686);

(statearr_50818[(15)] = inst_50687);

(statearr_50818[(16)] = inst_50726);

(statearr_50818[(17)] = inst_50685);

return statearr_50818;
})();
var statearr_50819_50900 = state_50808__$1;
(statearr_50819_50900[(2)] = null);

(statearr_50819_50900[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50809 === (39))){
var state_50808__$1 = state_50808;
var statearr_50823_50901 = state_50808__$1;
(statearr_50823_50901[(2)] = null);

(statearr_50823_50901[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50809 === (4))){
var inst_50676 = (state_50808[(9)]);
var inst_50676__$1 = (state_50808[(2)]);
var inst_50677 = (inst_50676__$1 == null);
var state_50808__$1 = (function (){var statearr_50824 = state_50808;
(statearr_50824[(9)] = inst_50676__$1);

return statearr_50824;
})();
if(cljs.core.truth_(inst_50677)){
var statearr_50825_50902 = state_50808__$1;
(statearr_50825_50902[(1)] = (5));

} else {
var statearr_50826_50903 = state_50808__$1;
(statearr_50826_50903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50809 === (15))){
var inst_50688 = (state_50808[(13)]);
var inst_50686 = (state_50808[(14)]);
var inst_50687 = (state_50808[(15)]);
var inst_50685 = (state_50808[(17)]);
var inst_50703 = (state_50808[(2)]);
var inst_50704 = (inst_50688 + (1));
var tmp50820 = inst_50686;
var tmp50821 = inst_50687;
var tmp50822 = inst_50685;
var inst_50685__$1 = tmp50822;
var inst_50686__$1 = tmp50820;
var inst_50687__$1 = tmp50821;
var inst_50688__$1 = inst_50704;
var state_50808__$1 = (function (){var statearr_50827 = state_50808;
(statearr_50827[(13)] = inst_50688__$1);

(statearr_50827[(14)] = inst_50686__$1);

(statearr_50827[(15)] = inst_50687__$1);

(statearr_50827[(17)] = inst_50685__$1);

(statearr_50827[(18)] = inst_50703);

return statearr_50827;
})();
var statearr_50828_50904 = state_50808__$1;
(statearr_50828_50904[(2)] = null);

(statearr_50828_50904[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50809 === (21))){
var inst_50730 = (state_50808[(2)]);
var state_50808__$1 = state_50808;
var statearr_50832_50905 = state_50808__$1;
(statearr_50832_50905[(2)] = inst_50730);

(statearr_50832_50905[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50809 === (31))){
var inst_50756 = (state_50808[(12)]);
var inst_50760 = done.call(null,null);
var inst_50761 = cljs.core.async.untap_STAR_.call(null,m,inst_50756);
var state_50808__$1 = (function (){var statearr_50833 = state_50808;
(statearr_50833[(19)] = inst_50760);

return statearr_50833;
})();
var statearr_50834_50906 = state_50808__$1;
(statearr_50834_50906[(2)] = inst_50761);

(statearr_50834_50906[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50809 === (32))){
var inst_50748 = (state_50808[(20)]);
var inst_50751 = (state_50808[(10)]);
var inst_50749 = (state_50808[(11)]);
var inst_50750 = (state_50808[(21)]);
var inst_50763 = (state_50808[(2)]);
var inst_50764 = (inst_50751 + (1));
var tmp50829 = inst_50748;
var tmp50830 = inst_50749;
var tmp50831 = inst_50750;
var inst_50748__$1 = tmp50829;
var inst_50749__$1 = tmp50830;
var inst_50750__$1 = tmp50831;
var inst_50751__$1 = inst_50764;
var state_50808__$1 = (function (){var statearr_50835 = state_50808;
(statearr_50835[(20)] = inst_50748__$1);

(statearr_50835[(22)] = inst_50763);

(statearr_50835[(10)] = inst_50751__$1);

(statearr_50835[(11)] = inst_50749__$1);

(statearr_50835[(21)] = inst_50750__$1);

return statearr_50835;
})();
var statearr_50836_50907 = state_50808__$1;
(statearr_50836_50907[(2)] = null);

(statearr_50836_50907[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50809 === (40))){
var inst_50776 = (state_50808[(23)]);
var inst_50780 = done.call(null,null);
var inst_50781 = cljs.core.async.untap_STAR_.call(null,m,inst_50776);
var state_50808__$1 = (function (){var statearr_50837 = state_50808;
(statearr_50837[(24)] = inst_50780);

return statearr_50837;
})();
var statearr_50838_50908 = state_50808__$1;
(statearr_50838_50908[(2)] = inst_50781);

(statearr_50838_50908[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50809 === (33))){
var inst_50767 = (state_50808[(25)]);
var inst_50769 = cljs.core.chunked_seq_QMARK_.call(null,inst_50767);
var state_50808__$1 = state_50808;
if(inst_50769){
var statearr_50839_50909 = state_50808__$1;
(statearr_50839_50909[(1)] = (36));

} else {
var statearr_50840_50910 = state_50808__$1;
(statearr_50840_50910[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50809 === (13))){
var inst_50697 = (state_50808[(26)]);
var inst_50700 = cljs.core.async.close_BANG_.call(null,inst_50697);
var state_50808__$1 = state_50808;
var statearr_50841_50911 = state_50808__$1;
(statearr_50841_50911[(2)] = inst_50700);

(statearr_50841_50911[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50809 === (22))){
var inst_50720 = (state_50808[(8)]);
var inst_50723 = cljs.core.async.close_BANG_.call(null,inst_50720);
var state_50808__$1 = state_50808;
var statearr_50842_50912 = state_50808__$1;
(statearr_50842_50912[(2)] = inst_50723);

(statearr_50842_50912[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50809 === (36))){
var inst_50767 = (state_50808[(25)]);
var inst_50771 = cljs.core.chunk_first.call(null,inst_50767);
var inst_50772 = cljs.core.chunk_rest.call(null,inst_50767);
var inst_50773 = cljs.core.count.call(null,inst_50771);
var inst_50748 = inst_50772;
var inst_50749 = inst_50771;
var inst_50750 = inst_50773;
var inst_50751 = (0);
var state_50808__$1 = (function (){var statearr_50843 = state_50808;
(statearr_50843[(20)] = inst_50748);

(statearr_50843[(10)] = inst_50751);

(statearr_50843[(11)] = inst_50749);

(statearr_50843[(21)] = inst_50750);

return statearr_50843;
})();
var statearr_50844_50913 = state_50808__$1;
(statearr_50844_50913[(2)] = null);

(statearr_50844_50913[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50809 === (41))){
var inst_50767 = (state_50808[(25)]);
var inst_50783 = (state_50808[(2)]);
var inst_50784 = cljs.core.next.call(null,inst_50767);
var inst_50748 = inst_50784;
var inst_50749 = null;
var inst_50750 = (0);
var inst_50751 = (0);
var state_50808__$1 = (function (){var statearr_50845 = state_50808;
(statearr_50845[(20)] = inst_50748);

(statearr_50845[(27)] = inst_50783);

(statearr_50845[(10)] = inst_50751);

(statearr_50845[(11)] = inst_50749);

(statearr_50845[(21)] = inst_50750);

return statearr_50845;
})();
var statearr_50846_50914 = state_50808__$1;
(statearr_50846_50914[(2)] = null);

(statearr_50846_50914[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50809 === (43))){
var state_50808__$1 = state_50808;
var statearr_50847_50915 = state_50808__$1;
(statearr_50847_50915[(2)] = null);

(statearr_50847_50915[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50809 === (29))){
var inst_50792 = (state_50808[(2)]);
var state_50808__$1 = state_50808;
var statearr_50848_50916 = state_50808__$1;
(statearr_50848_50916[(2)] = inst_50792);

(statearr_50848_50916[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50809 === (44))){
var inst_50801 = (state_50808[(2)]);
var state_50808__$1 = (function (){var statearr_50849 = state_50808;
(statearr_50849[(28)] = inst_50801);

return statearr_50849;
})();
var statearr_50850_50917 = state_50808__$1;
(statearr_50850_50917[(2)] = null);

(statearr_50850_50917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50809 === (6))){
var inst_50740 = (state_50808[(29)]);
var inst_50739 = cljs.core.deref.call(null,cs);
var inst_50740__$1 = cljs.core.keys.call(null,inst_50739);
var inst_50741 = cljs.core.count.call(null,inst_50740__$1);
var inst_50742 = cljs.core.reset_BANG_.call(null,dctr,inst_50741);
var inst_50747 = cljs.core.seq.call(null,inst_50740__$1);
var inst_50748 = inst_50747;
var inst_50749 = null;
var inst_50750 = (0);
var inst_50751 = (0);
var state_50808__$1 = (function (){var statearr_50851 = state_50808;
(statearr_50851[(29)] = inst_50740__$1);

(statearr_50851[(20)] = inst_50748);

(statearr_50851[(30)] = inst_50742);

(statearr_50851[(10)] = inst_50751);

(statearr_50851[(11)] = inst_50749);

(statearr_50851[(21)] = inst_50750);

return statearr_50851;
})();
var statearr_50852_50918 = state_50808__$1;
(statearr_50852_50918[(2)] = null);

(statearr_50852_50918[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50809 === (28))){
var inst_50748 = (state_50808[(20)]);
var inst_50767 = (state_50808[(25)]);
var inst_50767__$1 = cljs.core.seq.call(null,inst_50748);
var state_50808__$1 = (function (){var statearr_50853 = state_50808;
(statearr_50853[(25)] = inst_50767__$1);

return statearr_50853;
})();
if(inst_50767__$1){
var statearr_50854_50919 = state_50808__$1;
(statearr_50854_50919[(1)] = (33));

} else {
var statearr_50855_50920 = state_50808__$1;
(statearr_50855_50920[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50809 === (25))){
var inst_50751 = (state_50808[(10)]);
var inst_50750 = (state_50808[(21)]);
var inst_50753 = (inst_50751 < inst_50750);
var inst_50754 = inst_50753;
var state_50808__$1 = state_50808;
if(cljs.core.truth_(inst_50754)){
var statearr_50856_50921 = state_50808__$1;
(statearr_50856_50921[(1)] = (27));

} else {
var statearr_50857_50922 = state_50808__$1;
(statearr_50857_50922[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50809 === (34))){
var state_50808__$1 = state_50808;
var statearr_50858_50923 = state_50808__$1;
(statearr_50858_50923[(2)] = null);

(statearr_50858_50923[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50809 === (17))){
var state_50808__$1 = state_50808;
var statearr_50859_50924 = state_50808__$1;
(statearr_50859_50924[(2)] = null);

(statearr_50859_50924[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50809 === (3))){
var inst_50806 = (state_50808[(2)]);
var state_50808__$1 = state_50808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50808__$1,inst_50806);
} else {
if((state_val_50809 === (12))){
var inst_50735 = (state_50808[(2)]);
var state_50808__$1 = state_50808;
var statearr_50860_50925 = state_50808__$1;
(statearr_50860_50925[(2)] = inst_50735);

(statearr_50860_50925[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50809 === (2))){
var state_50808__$1 = state_50808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50808__$1,(4),ch);
} else {
if((state_val_50809 === (23))){
var state_50808__$1 = state_50808;
var statearr_50861_50926 = state_50808__$1;
(statearr_50861_50926[(2)] = null);

(statearr_50861_50926[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50809 === (35))){
var inst_50790 = (state_50808[(2)]);
var state_50808__$1 = state_50808;
var statearr_50862_50927 = state_50808__$1;
(statearr_50862_50927[(2)] = inst_50790);

(statearr_50862_50927[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50809 === (19))){
var inst_50707 = (state_50808[(7)]);
var inst_50711 = cljs.core.chunk_first.call(null,inst_50707);
var inst_50712 = cljs.core.chunk_rest.call(null,inst_50707);
var inst_50713 = cljs.core.count.call(null,inst_50711);
var inst_50685 = inst_50712;
var inst_50686 = inst_50711;
var inst_50687 = inst_50713;
var inst_50688 = (0);
var state_50808__$1 = (function (){var statearr_50863 = state_50808;
(statearr_50863[(13)] = inst_50688);

(statearr_50863[(14)] = inst_50686);

(statearr_50863[(15)] = inst_50687);

(statearr_50863[(17)] = inst_50685);

return statearr_50863;
})();
var statearr_50864_50928 = state_50808__$1;
(statearr_50864_50928[(2)] = null);

(statearr_50864_50928[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50809 === (11))){
var inst_50707 = (state_50808[(7)]);
var inst_50685 = (state_50808[(17)]);
var inst_50707__$1 = cljs.core.seq.call(null,inst_50685);
var state_50808__$1 = (function (){var statearr_50865 = state_50808;
(statearr_50865[(7)] = inst_50707__$1);

return statearr_50865;
})();
if(inst_50707__$1){
var statearr_50866_50929 = state_50808__$1;
(statearr_50866_50929[(1)] = (16));

} else {
var statearr_50867_50930 = state_50808__$1;
(statearr_50867_50930[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50809 === (9))){
var inst_50737 = (state_50808[(2)]);
var state_50808__$1 = state_50808;
var statearr_50868_50931 = state_50808__$1;
(statearr_50868_50931[(2)] = inst_50737);

(statearr_50868_50931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50809 === (5))){
var inst_50683 = cljs.core.deref.call(null,cs);
var inst_50684 = cljs.core.seq.call(null,inst_50683);
var inst_50685 = inst_50684;
var inst_50686 = null;
var inst_50687 = (0);
var inst_50688 = (0);
var state_50808__$1 = (function (){var statearr_50869 = state_50808;
(statearr_50869[(13)] = inst_50688);

(statearr_50869[(14)] = inst_50686);

(statearr_50869[(15)] = inst_50687);

(statearr_50869[(17)] = inst_50685);

return statearr_50869;
})();
var statearr_50870_50932 = state_50808__$1;
(statearr_50870_50932[(2)] = null);

(statearr_50870_50932[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50809 === (14))){
var state_50808__$1 = state_50808;
var statearr_50871_50933 = state_50808__$1;
(statearr_50871_50933[(2)] = null);

(statearr_50871_50933[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50809 === (45))){
var inst_50798 = (state_50808[(2)]);
var state_50808__$1 = state_50808;
var statearr_50872_50934 = state_50808__$1;
(statearr_50872_50934[(2)] = inst_50798);

(statearr_50872_50934[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50809 === (26))){
var inst_50740 = (state_50808[(29)]);
var inst_50794 = (state_50808[(2)]);
var inst_50795 = cljs.core.seq.call(null,inst_50740);
var state_50808__$1 = (function (){var statearr_50873 = state_50808;
(statearr_50873[(31)] = inst_50794);

return statearr_50873;
})();
if(inst_50795){
var statearr_50874_50935 = state_50808__$1;
(statearr_50874_50935[(1)] = (42));

} else {
var statearr_50875_50936 = state_50808__$1;
(statearr_50875_50936[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50809 === (16))){
var inst_50707 = (state_50808[(7)]);
var inst_50709 = cljs.core.chunked_seq_QMARK_.call(null,inst_50707);
var state_50808__$1 = state_50808;
if(inst_50709){
var statearr_50876_50937 = state_50808__$1;
(statearr_50876_50937[(1)] = (19));

} else {
var statearr_50877_50938 = state_50808__$1;
(statearr_50877_50938[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50809 === (38))){
var inst_50787 = (state_50808[(2)]);
var state_50808__$1 = state_50808;
var statearr_50878_50939 = state_50808__$1;
(statearr_50878_50939[(2)] = inst_50787);

(statearr_50878_50939[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50809 === (30))){
var state_50808__$1 = state_50808;
var statearr_50879_50940 = state_50808__$1;
(statearr_50879_50940[(2)] = null);

(statearr_50879_50940[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50809 === (10))){
var inst_50688 = (state_50808[(13)]);
var inst_50686 = (state_50808[(14)]);
var inst_50696 = cljs.core._nth.call(null,inst_50686,inst_50688);
var inst_50697 = cljs.core.nth.call(null,inst_50696,(0),null);
var inst_50698 = cljs.core.nth.call(null,inst_50696,(1),null);
var state_50808__$1 = (function (){var statearr_50880 = state_50808;
(statearr_50880[(26)] = inst_50697);

return statearr_50880;
})();
if(cljs.core.truth_(inst_50698)){
var statearr_50881_50941 = state_50808__$1;
(statearr_50881_50941[(1)] = (13));

} else {
var statearr_50882_50942 = state_50808__$1;
(statearr_50882_50942[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50809 === (18))){
var inst_50733 = (state_50808[(2)]);
var state_50808__$1 = state_50808;
var statearr_50883_50943 = state_50808__$1;
(statearr_50883_50943[(2)] = inst_50733);

(statearr_50883_50943[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50809 === (42))){
var state_50808__$1 = state_50808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50808__$1,(45),dchan);
} else {
if((state_val_50809 === (37))){
var inst_50767 = (state_50808[(25)]);
var inst_50676 = (state_50808[(9)]);
var inst_50776 = (state_50808[(23)]);
var inst_50776__$1 = cljs.core.first.call(null,inst_50767);
var inst_50777 = cljs.core.async.put_BANG_.call(null,inst_50776__$1,inst_50676,done);
var state_50808__$1 = (function (){var statearr_50884 = state_50808;
(statearr_50884[(23)] = inst_50776__$1);

return statearr_50884;
})();
if(cljs.core.truth_(inst_50777)){
var statearr_50885_50944 = state_50808__$1;
(statearr_50885_50944[(1)] = (39));

} else {
var statearr_50886_50945 = state_50808__$1;
(statearr_50886_50945[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50809 === (8))){
var inst_50688 = (state_50808[(13)]);
var inst_50687 = (state_50808[(15)]);
var inst_50690 = (inst_50688 < inst_50687);
var inst_50691 = inst_50690;
var state_50808__$1 = state_50808;
if(cljs.core.truth_(inst_50691)){
var statearr_50887_50946 = state_50808__$1;
(statearr_50887_50946[(1)] = (10));

} else {
var statearr_50888_50947 = state_50808__$1;
(statearr_50888_50947[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__29129__auto__ = null;
var cljs$core$async$mult_$_state_machine__29129__auto____0 = (function (){
var statearr_50889 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50889[(0)] = cljs$core$async$mult_$_state_machine__29129__auto__);

(statearr_50889[(1)] = (1));

return statearr_50889;
});
var cljs$core$async$mult_$_state_machine__29129__auto____1 = (function (state_50808){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_50808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e50890){if((e50890 instanceof Object)){
var ex__29132__auto__ = e50890;
var statearr_50891_50948 = state_50808;
(statearr_50891_50948[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50949 = state_50808;
state_50808 = G__50949;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29129__auto__ = function(state_50808){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29129__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29129__auto____1.call(this,state_50808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29129__auto____0;
cljs$core$async$mult_$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29129__auto____1;
return cljs$core$async$mult_$_state_machine__29129__auto__;
})()
})();
var state__29225__auto__ = (function (){var statearr_50892 = f__29224__auto__.call(null);
(statearr_50892[(6)] = c__29223__auto___50893);

return statearr_50892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29225__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__50951 = arguments.length;
switch (G__50951) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch);
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch);
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m);
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,state_map);
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,mode);
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___50963 = arguments.length;
var i__4790__auto___50964 = (0);
while(true){
if((i__4790__auto___50964 < len__4789__auto___50963)){
args__4795__auto__.push((arguments[i__4790__auto___50964]));

var G__50965 = (i__4790__auto___50964 + (1));
i__4790__auto___50964 = G__50965;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__50957){
var map__50958 = p__50957;
var map__50958__$1 = (((((!((map__50958 == null))))?(((((map__50958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50958):map__50958);
var opts = map__50958__$1;
var statearr_50960_50966 = state;
(statearr_50960_50966[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_50961_50967 = state;
(statearr_50961_50967[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_50962_50968 = state;
(statearr_50962_50968[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq50953){
var G__50954 = cljs.core.first.call(null,seq50953);
var seq50953__$1 = cljs.core.next.call(null,seq50953);
var G__50955 = cljs.core.first.call(null,seq50953__$1);
var seq50953__$2 = cljs.core.next.call(null,seq50953__$1);
var G__50956 = cljs.core.first.call(null,seq50953__$2);
var seq50953__$3 = cljs.core.next.call(null,seq50953__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50954,G__50955,G__50956,seq50953__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50969 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50969 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta50970){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta50970 = meta50970;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50971,meta50970__$1){
var self__ = this;
var _50971__$1 = this;
return (new cljs.core.async.t_cljs$core$async50969(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta50970__$1));
}));

(cljs.core.async.t_cljs$core$async50969.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50971){
var self__ = this;
var _50971__$1 = this;
return self__.meta50970;
}));

(cljs.core.async.t_cljs$core$async50969.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50969.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async50969.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50969.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async50969.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async50969.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async50969.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async50969.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async50969.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta50970","meta50970",-908848138,null)], null);
}));

(cljs.core.async.t_cljs$core$async50969.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50969.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50969");

(cljs.core.async.t_cljs$core$async50969.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async50969");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50969.
 */
cljs.core.async.__GT_t_cljs$core$async50969 = (function cljs$core$async$mix_$___GT_t_cljs$core$async50969(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta50970){
return (new cljs.core.async.t_cljs$core$async50969(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta50970));
});

}

return (new cljs.core.async.t_cljs$core$async50969(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29223__auto___51133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29224__auto__ = (function (){var switch__29128__auto__ = (function (state_51073){
var state_val_51074 = (state_51073[(1)]);
if((state_val_51074 === (7))){
var inst_50988 = (state_51073[(2)]);
var state_51073__$1 = state_51073;
var statearr_51075_51134 = state_51073__$1;
(statearr_51075_51134[(2)] = inst_50988);

(statearr_51075_51134[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51074 === (20))){
var inst_51000 = (state_51073[(7)]);
var state_51073__$1 = state_51073;
var statearr_51076_51135 = state_51073__$1;
(statearr_51076_51135[(2)] = inst_51000);

(statearr_51076_51135[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51074 === (27))){
var state_51073__$1 = state_51073;
var statearr_51077_51136 = state_51073__$1;
(statearr_51077_51136[(2)] = null);

(statearr_51077_51136[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51074 === (1))){
var inst_50975 = (state_51073[(8)]);
var inst_50975__$1 = calc_state.call(null);
var inst_50977 = (inst_50975__$1 == null);
var inst_50978 = cljs.core.not.call(null,inst_50977);
var state_51073__$1 = (function (){var statearr_51078 = state_51073;
(statearr_51078[(8)] = inst_50975__$1);

return statearr_51078;
})();
if(inst_50978){
var statearr_51079_51137 = state_51073__$1;
(statearr_51079_51137[(1)] = (2));

} else {
var statearr_51080_51138 = state_51073__$1;
(statearr_51080_51138[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51074 === (24))){
var inst_51024 = (state_51073[(9)]);
var inst_51033 = (state_51073[(10)]);
var inst_51047 = (state_51073[(11)]);
var inst_51047__$1 = inst_51024.call(null,inst_51033);
var state_51073__$1 = (function (){var statearr_51081 = state_51073;
(statearr_51081[(11)] = inst_51047__$1);

return statearr_51081;
})();
if(cljs.core.truth_(inst_51047__$1)){
var statearr_51082_51139 = state_51073__$1;
(statearr_51082_51139[(1)] = (29));

} else {
var statearr_51083_51140 = state_51073__$1;
(statearr_51083_51140[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51074 === (4))){
var inst_50991 = (state_51073[(2)]);
var state_51073__$1 = state_51073;
if(cljs.core.truth_(inst_50991)){
var statearr_51084_51141 = state_51073__$1;
(statearr_51084_51141[(1)] = (8));

} else {
var statearr_51085_51142 = state_51073__$1;
(statearr_51085_51142[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51074 === (15))){
var inst_51018 = (state_51073[(2)]);
var state_51073__$1 = state_51073;
if(cljs.core.truth_(inst_51018)){
var statearr_51086_51143 = state_51073__$1;
(statearr_51086_51143[(1)] = (19));

} else {
var statearr_51087_51144 = state_51073__$1;
(statearr_51087_51144[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51074 === (21))){
var inst_51023 = (state_51073[(12)]);
var inst_51023__$1 = (state_51073[(2)]);
var inst_51024 = cljs.core.get.call(null,inst_51023__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51025 = cljs.core.get.call(null,inst_51023__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51026 = cljs.core.get.call(null,inst_51023__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_51073__$1 = (function (){var statearr_51088 = state_51073;
(statearr_51088[(9)] = inst_51024);

(statearr_51088[(12)] = inst_51023__$1);

(statearr_51088[(13)] = inst_51025);

return statearr_51088;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_51073__$1,(22),inst_51026);
} else {
if((state_val_51074 === (31))){
var inst_51055 = (state_51073[(2)]);
var state_51073__$1 = state_51073;
if(cljs.core.truth_(inst_51055)){
var statearr_51089_51145 = state_51073__$1;
(statearr_51089_51145[(1)] = (32));

} else {
var statearr_51090_51146 = state_51073__$1;
(statearr_51090_51146[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51074 === (32))){
var inst_51032 = (state_51073[(14)]);
var state_51073__$1 = state_51073;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51073__$1,(35),out,inst_51032);
} else {
if((state_val_51074 === (33))){
var inst_51023 = (state_51073[(12)]);
var inst_51000 = inst_51023;
var state_51073__$1 = (function (){var statearr_51091 = state_51073;
(statearr_51091[(7)] = inst_51000);

return statearr_51091;
})();
var statearr_51092_51147 = state_51073__$1;
(statearr_51092_51147[(2)] = null);

(statearr_51092_51147[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51074 === (13))){
var inst_51000 = (state_51073[(7)]);
var inst_51007 = inst_51000.cljs$lang$protocol_mask$partition0$;
var inst_51008 = (inst_51007 & (64));
var inst_51009 = inst_51000.cljs$core$ISeq$;
var inst_51010 = (cljs.core.PROTOCOL_SENTINEL === inst_51009);
var inst_51011 = ((inst_51008) || (inst_51010));
var state_51073__$1 = state_51073;
if(cljs.core.truth_(inst_51011)){
var statearr_51093_51148 = state_51073__$1;
(statearr_51093_51148[(1)] = (16));

} else {
var statearr_51094_51149 = state_51073__$1;
(statearr_51094_51149[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51074 === (22))){
var inst_51032 = (state_51073[(14)]);
var inst_51033 = (state_51073[(10)]);
var inst_51031 = (state_51073[(2)]);
var inst_51032__$1 = cljs.core.nth.call(null,inst_51031,(0),null);
var inst_51033__$1 = cljs.core.nth.call(null,inst_51031,(1),null);
var inst_51034 = (inst_51032__$1 == null);
var inst_51035 = cljs.core._EQ_.call(null,inst_51033__$1,change);
var inst_51036 = ((inst_51034) || (inst_51035));
var state_51073__$1 = (function (){var statearr_51095 = state_51073;
(statearr_51095[(14)] = inst_51032__$1);

(statearr_51095[(10)] = inst_51033__$1);

return statearr_51095;
})();
if(cljs.core.truth_(inst_51036)){
var statearr_51096_51150 = state_51073__$1;
(statearr_51096_51150[(1)] = (23));

} else {
var statearr_51097_51151 = state_51073__$1;
(statearr_51097_51151[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51074 === (36))){
var inst_51023 = (state_51073[(12)]);
var inst_51000 = inst_51023;
var state_51073__$1 = (function (){var statearr_51098 = state_51073;
(statearr_51098[(7)] = inst_51000);

return statearr_51098;
})();
var statearr_51099_51152 = state_51073__$1;
(statearr_51099_51152[(2)] = null);

(statearr_51099_51152[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51074 === (29))){
var inst_51047 = (state_51073[(11)]);
var state_51073__$1 = state_51073;
var statearr_51100_51153 = state_51073__$1;
(statearr_51100_51153[(2)] = inst_51047);

(statearr_51100_51153[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51074 === (6))){
var state_51073__$1 = state_51073;
var statearr_51101_51154 = state_51073__$1;
(statearr_51101_51154[(2)] = false);

(statearr_51101_51154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51074 === (28))){
var inst_51043 = (state_51073[(2)]);
var inst_51044 = calc_state.call(null);
var inst_51000 = inst_51044;
var state_51073__$1 = (function (){var statearr_51102 = state_51073;
(statearr_51102[(7)] = inst_51000);

(statearr_51102[(15)] = inst_51043);

return statearr_51102;
})();
var statearr_51103_51155 = state_51073__$1;
(statearr_51103_51155[(2)] = null);

(statearr_51103_51155[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51074 === (25))){
var inst_51069 = (state_51073[(2)]);
var state_51073__$1 = state_51073;
var statearr_51104_51156 = state_51073__$1;
(statearr_51104_51156[(2)] = inst_51069);

(statearr_51104_51156[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51074 === (34))){
var inst_51067 = (state_51073[(2)]);
var state_51073__$1 = state_51073;
var statearr_51105_51157 = state_51073__$1;
(statearr_51105_51157[(2)] = inst_51067);

(statearr_51105_51157[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51074 === (17))){
var state_51073__$1 = state_51073;
var statearr_51106_51158 = state_51073__$1;
(statearr_51106_51158[(2)] = false);

(statearr_51106_51158[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51074 === (3))){
var state_51073__$1 = state_51073;
var statearr_51107_51159 = state_51073__$1;
(statearr_51107_51159[(2)] = false);

(statearr_51107_51159[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51074 === (12))){
var inst_51071 = (state_51073[(2)]);
var state_51073__$1 = state_51073;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51073__$1,inst_51071);
} else {
if((state_val_51074 === (2))){
var inst_50975 = (state_51073[(8)]);
var inst_50980 = inst_50975.cljs$lang$protocol_mask$partition0$;
var inst_50981 = (inst_50980 & (64));
var inst_50982 = inst_50975.cljs$core$ISeq$;
var inst_50983 = (cljs.core.PROTOCOL_SENTINEL === inst_50982);
var inst_50984 = ((inst_50981) || (inst_50983));
var state_51073__$1 = state_51073;
if(cljs.core.truth_(inst_50984)){
var statearr_51108_51160 = state_51073__$1;
(statearr_51108_51160[(1)] = (5));

} else {
var statearr_51109_51161 = state_51073__$1;
(statearr_51109_51161[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51074 === (23))){
var inst_51032 = (state_51073[(14)]);
var inst_51038 = (inst_51032 == null);
var state_51073__$1 = state_51073;
if(cljs.core.truth_(inst_51038)){
var statearr_51110_51162 = state_51073__$1;
(statearr_51110_51162[(1)] = (26));

} else {
var statearr_51111_51163 = state_51073__$1;
(statearr_51111_51163[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51074 === (35))){
var inst_51058 = (state_51073[(2)]);
var state_51073__$1 = state_51073;
if(cljs.core.truth_(inst_51058)){
var statearr_51112_51164 = state_51073__$1;
(statearr_51112_51164[(1)] = (36));

} else {
var statearr_51113_51165 = state_51073__$1;
(statearr_51113_51165[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51074 === (19))){
var inst_51000 = (state_51073[(7)]);
var inst_51020 = cljs.core.apply.call(null,cljs.core.hash_map,inst_51000);
var state_51073__$1 = state_51073;
var statearr_51114_51166 = state_51073__$1;
(statearr_51114_51166[(2)] = inst_51020);

(statearr_51114_51166[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51074 === (11))){
var inst_51000 = (state_51073[(7)]);
var inst_51004 = (inst_51000 == null);
var inst_51005 = cljs.core.not.call(null,inst_51004);
var state_51073__$1 = state_51073;
if(inst_51005){
var statearr_51115_51167 = state_51073__$1;
(statearr_51115_51167[(1)] = (13));

} else {
var statearr_51116_51168 = state_51073__$1;
(statearr_51116_51168[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51074 === (9))){
var inst_50975 = (state_51073[(8)]);
var state_51073__$1 = state_51073;
var statearr_51117_51169 = state_51073__$1;
(statearr_51117_51169[(2)] = inst_50975);

(statearr_51117_51169[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51074 === (5))){
var state_51073__$1 = state_51073;
var statearr_51118_51170 = state_51073__$1;
(statearr_51118_51170[(2)] = true);

(statearr_51118_51170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51074 === (14))){
var state_51073__$1 = state_51073;
var statearr_51119_51171 = state_51073__$1;
(statearr_51119_51171[(2)] = false);

(statearr_51119_51171[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51074 === (26))){
var inst_51033 = (state_51073[(10)]);
var inst_51040 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_51033);
var state_51073__$1 = state_51073;
var statearr_51120_51172 = state_51073__$1;
(statearr_51120_51172[(2)] = inst_51040);

(statearr_51120_51172[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51074 === (16))){
var state_51073__$1 = state_51073;
var statearr_51121_51173 = state_51073__$1;
(statearr_51121_51173[(2)] = true);

(statearr_51121_51173[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51074 === (38))){
var inst_51063 = (state_51073[(2)]);
var state_51073__$1 = state_51073;
var statearr_51122_51174 = state_51073__$1;
(statearr_51122_51174[(2)] = inst_51063);

(statearr_51122_51174[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51074 === (30))){
var inst_51024 = (state_51073[(9)]);
var inst_51033 = (state_51073[(10)]);
var inst_51025 = (state_51073[(13)]);
var inst_51050 = cljs.core.empty_QMARK_.call(null,inst_51024);
var inst_51051 = inst_51025.call(null,inst_51033);
var inst_51052 = cljs.core.not.call(null,inst_51051);
var inst_51053 = ((inst_51050) && (inst_51052));
var state_51073__$1 = state_51073;
var statearr_51123_51175 = state_51073__$1;
(statearr_51123_51175[(2)] = inst_51053);

(statearr_51123_51175[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51074 === (10))){
var inst_50975 = (state_51073[(8)]);
var inst_50996 = (state_51073[(2)]);
var inst_50997 = cljs.core.get.call(null,inst_50996,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_50998 = cljs.core.get.call(null,inst_50996,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_50999 = cljs.core.get.call(null,inst_50996,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_51000 = inst_50975;
var state_51073__$1 = (function (){var statearr_51124 = state_51073;
(statearr_51124[(7)] = inst_51000);

(statearr_51124[(16)] = inst_50997);

(statearr_51124[(17)] = inst_50998);

(statearr_51124[(18)] = inst_50999);

return statearr_51124;
})();
var statearr_51125_51176 = state_51073__$1;
(statearr_51125_51176[(2)] = null);

(statearr_51125_51176[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51074 === (18))){
var inst_51015 = (state_51073[(2)]);
var state_51073__$1 = state_51073;
var statearr_51126_51177 = state_51073__$1;
(statearr_51126_51177[(2)] = inst_51015);

(statearr_51126_51177[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51074 === (37))){
var state_51073__$1 = state_51073;
var statearr_51127_51178 = state_51073__$1;
(statearr_51127_51178[(2)] = null);

(statearr_51127_51178[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51074 === (8))){
var inst_50975 = (state_51073[(8)]);
var inst_50993 = cljs.core.apply.call(null,cljs.core.hash_map,inst_50975);
var state_51073__$1 = state_51073;
var statearr_51128_51179 = state_51073__$1;
(statearr_51128_51179[(2)] = inst_50993);

(statearr_51128_51179[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__29129__auto__ = null;
var cljs$core$async$mix_$_state_machine__29129__auto____0 = (function (){
var statearr_51129 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51129[(0)] = cljs$core$async$mix_$_state_machine__29129__auto__);

(statearr_51129[(1)] = (1));

return statearr_51129;
});
var cljs$core$async$mix_$_state_machine__29129__auto____1 = (function (state_51073){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_51073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e51130){if((e51130 instanceof Object)){
var ex__29132__auto__ = e51130;
var statearr_51131_51180 = state_51073;
(statearr_51131_51180[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51181 = state_51073;
state_51073 = G__51181;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29129__auto__ = function(state_51073){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29129__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29129__auto____1.call(this,state_51073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29129__auto____0;
cljs$core$async$mix_$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29129__auto____1;
return cljs$core$async$mix_$_state_machine__29129__auto__;
})()
})();
var state__29225__auto__ = (function (){var statearr_51132 = f__29224__auto__.call(null);
(statearr_51132[(6)] = c__29223__auto___51133);

return statearr_51132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29225__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p,v,ch);
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__51183 = arguments.length;
switch (G__51183) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p);
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p,v);
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__51187 = arguments.length;
switch (G__51187) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__51185_SHARP_){
if(cljs.core.truth_(p1__51185_SHARP_.call(null,topic))){
return p1__51185_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__51185_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51188 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51188 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta51189){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta51189 = meta51189;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51190,meta51189__$1){
var self__ = this;
var _51190__$1 = this;
return (new cljs.core.async.t_cljs$core$async51188(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta51189__$1));
}));

(cljs.core.async.t_cljs$core$async51188.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51190){
var self__ = this;
var _51190__$1 = this;
return self__.meta51189;
}));

(cljs.core.async.t_cljs$core$async51188.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51188.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async51188.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51188.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async51188.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async51188.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async51188.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async51188.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta51189","meta51189",1647401171,null)], null);
}));

(cljs.core.async.t_cljs$core$async51188.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51188.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51188");

(cljs.core.async.t_cljs$core$async51188.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async51188");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51188.
 */
cljs.core.async.__GT_t_cljs$core$async51188 = (function cljs$core$async$__GT_t_cljs$core$async51188(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51189){
return (new cljs.core.async.t_cljs$core$async51188(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51189));
});

}

return (new cljs.core.async.t_cljs$core$async51188(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29223__auto___51308 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29224__auto__ = (function (){var switch__29128__auto__ = (function (state_51262){
var state_val_51263 = (state_51262[(1)]);
if((state_val_51263 === (7))){
var inst_51258 = (state_51262[(2)]);
var state_51262__$1 = state_51262;
var statearr_51264_51309 = state_51262__$1;
(statearr_51264_51309[(2)] = inst_51258);

(statearr_51264_51309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51263 === (20))){
var state_51262__$1 = state_51262;
var statearr_51265_51310 = state_51262__$1;
(statearr_51265_51310[(2)] = null);

(statearr_51265_51310[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51263 === (1))){
var state_51262__$1 = state_51262;
var statearr_51266_51311 = state_51262__$1;
(statearr_51266_51311[(2)] = null);

(statearr_51266_51311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51263 === (24))){
var inst_51241 = (state_51262[(7)]);
var inst_51250 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_51241);
var state_51262__$1 = state_51262;
var statearr_51267_51312 = state_51262__$1;
(statearr_51267_51312[(2)] = inst_51250);

(statearr_51267_51312[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51263 === (4))){
var inst_51193 = (state_51262[(8)]);
var inst_51193__$1 = (state_51262[(2)]);
var inst_51194 = (inst_51193__$1 == null);
var state_51262__$1 = (function (){var statearr_51268 = state_51262;
(statearr_51268[(8)] = inst_51193__$1);

return statearr_51268;
})();
if(cljs.core.truth_(inst_51194)){
var statearr_51269_51313 = state_51262__$1;
(statearr_51269_51313[(1)] = (5));

} else {
var statearr_51270_51314 = state_51262__$1;
(statearr_51270_51314[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51263 === (15))){
var inst_51235 = (state_51262[(2)]);
var state_51262__$1 = state_51262;
var statearr_51271_51315 = state_51262__$1;
(statearr_51271_51315[(2)] = inst_51235);

(statearr_51271_51315[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51263 === (21))){
var inst_51255 = (state_51262[(2)]);
var state_51262__$1 = (function (){var statearr_51272 = state_51262;
(statearr_51272[(9)] = inst_51255);

return statearr_51272;
})();
var statearr_51273_51316 = state_51262__$1;
(statearr_51273_51316[(2)] = null);

(statearr_51273_51316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51263 === (13))){
var inst_51217 = (state_51262[(10)]);
var inst_51219 = cljs.core.chunked_seq_QMARK_.call(null,inst_51217);
var state_51262__$1 = state_51262;
if(inst_51219){
var statearr_51274_51317 = state_51262__$1;
(statearr_51274_51317[(1)] = (16));

} else {
var statearr_51275_51318 = state_51262__$1;
(statearr_51275_51318[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51263 === (22))){
var inst_51247 = (state_51262[(2)]);
var state_51262__$1 = state_51262;
if(cljs.core.truth_(inst_51247)){
var statearr_51276_51319 = state_51262__$1;
(statearr_51276_51319[(1)] = (23));

} else {
var statearr_51277_51320 = state_51262__$1;
(statearr_51277_51320[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51263 === (6))){
var inst_51241 = (state_51262[(7)]);
var inst_51243 = (state_51262[(11)]);
var inst_51193 = (state_51262[(8)]);
var inst_51241__$1 = topic_fn.call(null,inst_51193);
var inst_51242 = cljs.core.deref.call(null,mults);
var inst_51243__$1 = cljs.core.get.call(null,inst_51242,inst_51241__$1);
var state_51262__$1 = (function (){var statearr_51278 = state_51262;
(statearr_51278[(7)] = inst_51241__$1);

(statearr_51278[(11)] = inst_51243__$1);

return statearr_51278;
})();
if(cljs.core.truth_(inst_51243__$1)){
var statearr_51279_51321 = state_51262__$1;
(statearr_51279_51321[(1)] = (19));

} else {
var statearr_51280_51322 = state_51262__$1;
(statearr_51280_51322[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51263 === (25))){
var inst_51252 = (state_51262[(2)]);
var state_51262__$1 = state_51262;
var statearr_51281_51323 = state_51262__$1;
(statearr_51281_51323[(2)] = inst_51252);

(statearr_51281_51323[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51263 === (17))){
var inst_51217 = (state_51262[(10)]);
var inst_51226 = cljs.core.first.call(null,inst_51217);
var inst_51227 = cljs.core.async.muxch_STAR_.call(null,inst_51226);
var inst_51228 = cljs.core.async.close_BANG_.call(null,inst_51227);
var inst_51229 = cljs.core.next.call(null,inst_51217);
var inst_51203 = inst_51229;
var inst_51204 = null;
var inst_51205 = (0);
var inst_51206 = (0);
var state_51262__$1 = (function (){var statearr_51282 = state_51262;
(statearr_51282[(12)] = inst_51204);

(statearr_51282[(13)] = inst_51228);

(statearr_51282[(14)] = inst_51206);

(statearr_51282[(15)] = inst_51205);

(statearr_51282[(16)] = inst_51203);

return statearr_51282;
})();
var statearr_51283_51324 = state_51262__$1;
(statearr_51283_51324[(2)] = null);

(statearr_51283_51324[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51263 === (3))){
var inst_51260 = (state_51262[(2)]);
var state_51262__$1 = state_51262;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51262__$1,inst_51260);
} else {
if((state_val_51263 === (12))){
var inst_51237 = (state_51262[(2)]);
var state_51262__$1 = state_51262;
var statearr_51284_51325 = state_51262__$1;
(statearr_51284_51325[(2)] = inst_51237);

(statearr_51284_51325[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51263 === (2))){
var state_51262__$1 = state_51262;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51262__$1,(4),ch);
} else {
if((state_val_51263 === (23))){
var state_51262__$1 = state_51262;
var statearr_51285_51326 = state_51262__$1;
(statearr_51285_51326[(2)] = null);

(statearr_51285_51326[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51263 === (19))){
var inst_51243 = (state_51262[(11)]);
var inst_51193 = (state_51262[(8)]);
var inst_51245 = cljs.core.async.muxch_STAR_.call(null,inst_51243);
var state_51262__$1 = state_51262;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51262__$1,(22),inst_51245,inst_51193);
} else {
if((state_val_51263 === (11))){
var inst_51217 = (state_51262[(10)]);
var inst_51203 = (state_51262[(16)]);
var inst_51217__$1 = cljs.core.seq.call(null,inst_51203);
var state_51262__$1 = (function (){var statearr_51286 = state_51262;
(statearr_51286[(10)] = inst_51217__$1);

return statearr_51286;
})();
if(inst_51217__$1){
var statearr_51287_51327 = state_51262__$1;
(statearr_51287_51327[(1)] = (13));

} else {
var statearr_51288_51328 = state_51262__$1;
(statearr_51288_51328[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51263 === (9))){
var inst_51239 = (state_51262[(2)]);
var state_51262__$1 = state_51262;
var statearr_51289_51329 = state_51262__$1;
(statearr_51289_51329[(2)] = inst_51239);

(statearr_51289_51329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51263 === (5))){
var inst_51200 = cljs.core.deref.call(null,mults);
var inst_51201 = cljs.core.vals.call(null,inst_51200);
var inst_51202 = cljs.core.seq.call(null,inst_51201);
var inst_51203 = inst_51202;
var inst_51204 = null;
var inst_51205 = (0);
var inst_51206 = (0);
var state_51262__$1 = (function (){var statearr_51290 = state_51262;
(statearr_51290[(12)] = inst_51204);

(statearr_51290[(14)] = inst_51206);

(statearr_51290[(15)] = inst_51205);

(statearr_51290[(16)] = inst_51203);

return statearr_51290;
})();
var statearr_51291_51330 = state_51262__$1;
(statearr_51291_51330[(2)] = null);

(statearr_51291_51330[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51263 === (14))){
var state_51262__$1 = state_51262;
var statearr_51295_51331 = state_51262__$1;
(statearr_51295_51331[(2)] = null);

(statearr_51295_51331[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51263 === (16))){
var inst_51217 = (state_51262[(10)]);
var inst_51221 = cljs.core.chunk_first.call(null,inst_51217);
var inst_51222 = cljs.core.chunk_rest.call(null,inst_51217);
var inst_51223 = cljs.core.count.call(null,inst_51221);
var inst_51203 = inst_51222;
var inst_51204 = inst_51221;
var inst_51205 = inst_51223;
var inst_51206 = (0);
var state_51262__$1 = (function (){var statearr_51296 = state_51262;
(statearr_51296[(12)] = inst_51204);

(statearr_51296[(14)] = inst_51206);

(statearr_51296[(15)] = inst_51205);

(statearr_51296[(16)] = inst_51203);

return statearr_51296;
})();
var statearr_51297_51332 = state_51262__$1;
(statearr_51297_51332[(2)] = null);

(statearr_51297_51332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51263 === (10))){
var inst_51204 = (state_51262[(12)]);
var inst_51206 = (state_51262[(14)]);
var inst_51205 = (state_51262[(15)]);
var inst_51203 = (state_51262[(16)]);
var inst_51211 = cljs.core._nth.call(null,inst_51204,inst_51206);
var inst_51212 = cljs.core.async.muxch_STAR_.call(null,inst_51211);
var inst_51213 = cljs.core.async.close_BANG_.call(null,inst_51212);
var inst_51214 = (inst_51206 + (1));
var tmp51292 = inst_51204;
var tmp51293 = inst_51205;
var tmp51294 = inst_51203;
var inst_51203__$1 = tmp51294;
var inst_51204__$1 = tmp51292;
var inst_51205__$1 = tmp51293;
var inst_51206__$1 = inst_51214;
var state_51262__$1 = (function (){var statearr_51298 = state_51262;
(statearr_51298[(12)] = inst_51204__$1);

(statearr_51298[(17)] = inst_51213);

(statearr_51298[(14)] = inst_51206__$1);

(statearr_51298[(15)] = inst_51205__$1);

(statearr_51298[(16)] = inst_51203__$1);

return statearr_51298;
})();
var statearr_51299_51333 = state_51262__$1;
(statearr_51299_51333[(2)] = null);

(statearr_51299_51333[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51263 === (18))){
var inst_51232 = (state_51262[(2)]);
var state_51262__$1 = state_51262;
var statearr_51300_51334 = state_51262__$1;
(statearr_51300_51334[(2)] = inst_51232);

(statearr_51300_51334[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51263 === (8))){
var inst_51206 = (state_51262[(14)]);
var inst_51205 = (state_51262[(15)]);
var inst_51208 = (inst_51206 < inst_51205);
var inst_51209 = inst_51208;
var state_51262__$1 = state_51262;
if(cljs.core.truth_(inst_51209)){
var statearr_51301_51335 = state_51262__$1;
(statearr_51301_51335[(1)] = (10));

} else {
var statearr_51302_51336 = state_51262__$1;
(statearr_51302_51336[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__29129__auto__ = null;
var cljs$core$async$state_machine__29129__auto____0 = (function (){
var statearr_51303 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51303[(0)] = cljs$core$async$state_machine__29129__auto__);

(statearr_51303[(1)] = (1));

return statearr_51303;
});
var cljs$core$async$state_machine__29129__auto____1 = (function (state_51262){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_51262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e51304){if((e51304 instanceof Object)){
var ex__29132__auto__ = e51304;
var statearr_51305_51337 = state_51262;
(statearr_51305_51337[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51338 = state_51262;
state_51262 = G__51338;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
cljs$core$async$state_machine__29129__auto__ = function(state_51262){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29129__auto____1.call(this,state_51262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29129__auto____0;
cljs$core$async$state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29129__auto____1;
return cljs$core$async$state_machine__29129__auto__;
})()
})();
var state__29225__auto__ = (function (){var statearr_51306 = f__29224__auto__.call(null);
(statearr_51306[(6)] = c__29223__auto___51308);

return statearr_51306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29225__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__51340 = arguments.length;
switch (G__51340) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__51343 = arguments.length;
switch (G__51343) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__51346 = arguments.length;
switch (G__51346) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__29223__auto___51413 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29224__auto__ = (function (){var switch__29128__auto__ = (function (state_51385){
var state_val_51386 = (state_51385[(1)]);
if((state_val_51386 === (7))){
var state_51385__$1 = state_51385;
var statearr_51387_51414 = state_51385__$1;
(statearr_51387_51414[(2)] = null);

(statearr_51387_51414[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51386 === (1))){
var state_51385__$1 = state_51385;
var statearr_51388_51415 = state_51385__$1;
(statearr_51388_51415[(2)] = null);

(statearr_51388_51415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51386 === (4))){
var inst_51349 = (state_51385[(7)]);
var inst_51351 = (inst_51349 < cnt);
var state_51385__$1 = state_51385;
if(cljs.core.truth_(inst_51351)){
var statearr_51389_51416 = state_51385__$1;
(statearr_51389_51416[(1)] = (6));

} else {
var statearr_51390_51417 = state_51385__$1;
(statearr_51390_51417[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51386 === (15))){
var inst_51381 = (state_51385[(2)]);
var state_51385__$1 = state_51385;
var statearr_51391_51418 = state_51385__$1;
(statearr_51391_51418[(2)] = inst_51381);

(statearr_51391_51418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51386 === (13))){
var inst_51374 = cljs.core.async.close_BANG_.call(null,out);
var state_51385__$1 = state_51385;
var statearr_51392_51419 = state_51385__$1;
(statearr_51392_51419[(2)] = inst_51374);

(statearr_51392_51419[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51386 === (6))){
var state_51385__$1 = state_51385;
var statearr_51393_51420 = state_51385__$1;
(statearr_51393_51420[(2)] = null);

(statearr_51393_51420[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51386 === (3))){
var inst_51383 = (state_51385[(2)]);
var state_51385__$1 = state_51385;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51385__$1,inst_51383);
} else {
if((state_val_51386 === (12))){
var inst_51371 = (state_51385[(8)]);
var inst_51371__$1 = (state_51385[(2)]);
var inst_51372 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_51371__$1);
var state_51385__$1 = (function (){var statearr_51394 = state_51385;
(statearr_51394[(8)] = inst_51371__$1);

return statearr_51394;
})();
if(cljs.core.truth_(inst_51372)){
var statearr_51395_51421 = state_51385__$1;
(statearr_51395_51421[(1)] = (13));

} else {
var statearr_51396_51422 = state_51385__$1;
(statearr_51396_51422[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51386 === (2))){
var inst_51348 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_51349 = (0);
var state_51385__$1 = (function (){var statearr_51397 = state_51385;
(statearr_51397[(7)] = inst_51349);

(statearr_51397[(9)] = inst_51348);

return statearr_51397;
})();
var statearr_51398_51423 = state_51385__$1;
(statearr_51398_51423[(2)] = null);

(statearr_51398_51423[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51386 === (11))){
var inst_51349 = (state_51385[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_51385,(10),Object,null,(9));
var inst_51358 = chs__$1.call(null,inst_51349);
var inst_51359 = done.call(null,inst_51349);
var inst_51360 = cljs.core.async.take_BANG_.call(null,inst_51358,inst_51359);
var state_51385__$1 = state_51385;
var statearr_51399_51424 = state_51385__$1;
(statearr_51399_51424[(2)] = inst_51360);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51385__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51386 === (9))){
var inst_51349 = (state_51385[(7)]);
var inst_51362 = (state_51385[(2)]);
var inst_51363 = (inst_51349 + (1));
var inst_51349__$1 = inst_51363;
var state_51385__$1 = (function (){var statearr_51400 = state_51385;
(statearr_51400[(7)] = inst_51349__$1);

(statearr_51400[(10)] = inst_51362);

return statearr_51400;
})();
var statearr_51401_51425 = state_51385__$1;
(statearr_51401_51425[(2)] = null);

(statearr_51401_51425[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51386 === (5))){
var inst_51369 = (state_51385[(2)]);
var state_51385__$1 = (function (){var statearr_51402 = state_51385;
(statearr_51402[(11)] = inst_51369);

return statearr_51402;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51385__$1,(12),dchan);
} else {
if((state_val_51386 === (14))){
var inst_51371 = (state_51385[(8)]);
var inst_51376 = cljs.core.apply.call(null,f,inst_51371);
var state_51385__$1 = state_51385;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51385__$1,(16),out,inst_51376);
} else {
if((state_val_51386 === (16))){
var inst_51378 = (state_51385[(2)]);
var state_51385__$1 = (function (){var statearr_51403 = state_51385;
(statearr_51403[(12)] = inst_51378);

return statearr_51403;
})();
var statearr_51404_51426 = state_51385__$1;
(statearr_51404_51426[(2)] = null);

(statearr_51404_51426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51386 === (10))){
var inst_51353 = (state_51385[(2)]);
var inst_51354 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_51385__$1 = (function (){var statearr_51405 = state_51385;
(statearr_51405[(13)] = inst_51353);

return statearr_51405;
})();
var statearr_51406_51427 = state_51385__$1;
(statearr_51406_51427[(2)] = inst_51354);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51385__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51386 === (8))){
var inst_51367 = (state_51385[(2)]);
var state_51385__$1 = state_51385;
var statearr_51407_51428 = state_51385__$1;
(statearr_51407_51428[(2)] = inst_51367);

(statearr_51407_51428[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__29129__auto__ = null;
var cljs$core$async$state_machine__29129__auto____0 = (function (){
var statearr_51408 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51408[(0)] = cljs$core$async$state_machine__29129__auto__);

(statearr_51408[(1)] = (1));

return statearr_51408;
});
var cljs$core$async$state_machine__29129__auto____1 = (function (state_51385){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_51385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e51409){if((e51409 instanceof Object)){
var ex__29132__auto__ = e51409;
var statearr_51410_51429 = state_51385;
(statearr_51410_51429[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51430 = state_51385;
state_51385 = G__51430;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
cljs$core$async$state_machine__29129__auto__ = function(state_51385){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29129__auto____1.call(this,state_51385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29129__auto____0;
cljs$core$async$state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29129__auto____1;
return cljs$core$async$state_machine__29129__auto__;
})()
})();
var state__29225__auto__ = (function (){var statearr_51411 = f__29224__auto__.call(null);
(statearr_51411[(6)] = c__29223__auto___51413);

return statearr_51411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29225__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__51433 = arguments.length;
switch (G__51433) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29223__auto___51487 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29224__auto__ = (function (){var switch__29128__auto__ = (function (state_51465){
var state_val_51466 = (state_51465[(1)]);
if((state_val_51466 === (7))){
var inst_51444 = (state_51465[(7)]);
var inst_51445 = (state_51465[(8)]);
var inst_51444__$1 = (state_51465[(2)]);
var inst_51445__$1 = cljs.core.nth.call(null,inst_51444__$1,(0),null);
var inst_51446 = cljs.core.nth.call(null,inst_51444__$1,(1),null);
var inst_51447 = (inst_51445__$1 == null);
var state_51465__$1 = (function (){var statearr_51467 = state_51465;
(statearr_51467[(7)] = inst_51444__$1);

(statearr_51467[(9)] = inst_51446);

(statearr_51467[(8)] = inst_51445__$1);

return statearr_51467;
})();
if(cljs.core.truth_(inst_51447)){
var statearr_51468_51488 = state_51465__$1;
(statearr_51468_51488[(1)] = (8));

} else {
var statearr_51469_51489 = state_51465__$1;
(statearr_51469_51489[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51466 === (1))){
var inst_51434 = cljs.core.vec.call(null,chs);
var inst_51435 = inst_51434;
var state_51465__$1 = (function (){var statearr_51470 = state_51465;
(statearr_51470[(10)] = inst_51435);

return statearr_51470;
})();
var statearr_51471_51490 = state_51465__$1;
(statearr_51471_51490[(2)] = null);

(statearr_51471_51490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51466 === (4))){
var inst_51435 = (state_51465[(10)]);
var state_51465__$1 = state_51465;
return cljs.core.async.ioc_alts_BANG_.call(null,state_51465__$1,(7),inst_51435);
} else {
if((state_val_51466 === (6))){
var inst_51461 = (state_51465[(2)]);
var state_51465__$1 = state_51465;
var statearr_51472_51491 = state_51465__$1;
(statearr_51472_51491[(2)] = inst_51461);

(statearr_51472_51491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51466 === (3))){
var inst_51463 = (state_51465[(2)]);
var state_51465__$1 = state_51465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51465__$1,inst_51463);
} else {
if((state_val_51466 === (2))){
var inst_51435 = (state_51465[(10)]);
var inst_51437 = cljs.core.count.call(null,inst_51435);
var inst_51438 = (inst_51437 > (0));
var state_51465__$1 = state_51465;
if(cljs.core.truth_(inst_51438)){
var statearr_51474_51492 = state_51465__$1;
(statearr_51474_51492[(1)] = (4));

} else {
var statearr_51475_51493 = state_51465__$1;
(statearr_51475_51493[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51466 === (11))){
var inst_51435 = (state_51465[(10)]);
var inst_51454 = (state_51465[(2)]);
var tmp51473 = inst_51435;
var inst_51435__$1 = tmp51473;
var state_51465__$1 = (function (){var statearr_51476 = state_51465;
(statearr_51476[(10)] = inst_51435__$1);

(statearr_51476[(11)] = inst_51454);

return statearr_51476;
})();
var statearr_51477_51494 = state_51465__$1;
(statearr_51477_51494[(2)] = null);

(statearr_51477_51494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51466 === (9))){
var inst_51445 = (state_51465[(8)]);
var state_51465__$1 = state_51465;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51465__$1,(11),out,inst_51445);
} else {
if((state_val_51466 === (5))){
var inst_51459 = cljs.core.async.close_BANG_.call(null,out);
var state_51465__$1 = state_51465;
var statearr_51478_51495 = state_51465__$1;
(statearr_51478_51495[(2)] = inst_51459);

(statearr_51478_51495[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51466 === (10))){
var inst_51457 = (state_51465[(2)]);
var state_51465__$1 = state_51465;
var statearr_51479_51496 = state_51465__$1;
(statearr_51479_51496[(2)] = inst_51457);

(statearr_51479_51496[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51466 === (8))){
var inst_51435 = (state_51465[(10)]);
var inst_51444 = (state_51465[(7)]);
var inst_51446 = (state_51465[(9)]);
var inst_51445 = (state_51465[(8)]);
var inst_51449 = (function (){var cs = inst_51435;
var vec__51440 = inst_51444;
var v = inst_51445;
var c = inst_51446;
return (function (p1__51431_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__51431_SHARP_);
});
})();
var inst_51450 = cljs.core.filterv.call(null,inst_51449,inst_51435);
var inst_51435__$1 = inst_51450;
var state_51465__$1 = (function (){var statearr_51480 = state_51465;
(statearr_51480[(10)] = inst_51435__$1);

return statearr_51480;
})();
var statearr_51481_51497 = state_51465__$1;
(statearr_51481_51497[(2)] = null);

(statearr_51481_51497[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__29129__auto__ = null;
var cljs$core$async$state_machine__29129__auto____0 = (function (){
var statearr_51482 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51482[(0)] = cljs$core$async$state_machine__29129__auto__);

(statearr_51482[(1)] = (1));

return statearr_51482;
});
var cljs$core$async$state_machine__29129__auto____1 = (function (state_51465){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_51465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e51483){if((e51483 instanceof Object)){
var ex__29132__auto__ = e51483;
var statearr_51484_51498 = state_51465;
(statearr_51484_51498[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51499 = state_51465;
state_51465 = G__51499;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
cljs$core$async$state_machine__29129__auto__ = function(state_51465){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29129__auto____1.call(this,state_51465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29129__auto____0;
cljs$core$async$state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29129__auto____1;
return cljs$core$async$state_machine__29129__auto__;
})()
})();
var state__29225__auto__ = (function (){var statearr_51485 = f__29224__auto__.call(null);
(statearr_51485[(6)] = c__29223__auto___51487);

return statearr_51485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29225__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__51501 = arguments.length;
switch (G__51501) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29223__auto___51546 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29224__auto__ = (function (){var switch__29128__auto__ = (function (state_51525){
var state_val_51526 = (state_51525[(1)]);
if((state_val_51526 === (7))){
var inst_51507 = (state_51525[(7)]);
var inst_51507__$1 = (state_51525[(2)]);
var inst_51508 = (inst_51507__$1 == null);
var inst_51509 = cljs.core.not.call(null,inst_51508);
var state_51525__$1 = (function (){var statearr_51527 = state_51525;
(statearr_51527[(7)] = inst_51507__$1);

return statearr_51527;
})();
if(inst_51509){
var statearr_51528_51547 = state_51525__$1;
(statearr_51528_51547[(1)] = (8));

} else {
var statearr_51529_51548 = state_51525__$1;
(statearr_51529_51548[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51526 === (1))){
var inst_51502 = (0);
var state_51525__$1 = (function (){var statearr_51530 = state_51525;
(statearr_51530[(8)] = inst_51502);

return statearr_51530;
})();
var statearr_51531_51549 = state_51525__$1;
(statearr_51531_51549[(2)] = null);

(statearr_51531_51549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51526 === (4))){
var state_51525__$1 = state_51525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51525__$1,(7),ch);
} else {
if((state_val_51526 === (6))){
var inst_51520 = (state_51525[(2)]);
var state_51525__$1 = state_51525;
var statearr_51532_51550 = state_51525__$1;
(statearr_51532_51550[(2)] = inst_51520);

(statearr_51532_51550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51526 === (3))){
var inst_51522 = (state_51525[(2)]);
var inst_51523 = cljs.core.async.close_BANG_.call(null,out);
var state_51525__$1 = (function (){var statearr_51533 = state_51525;
(statearr_51533[(9)] = inst_51522);

return statearr_51533;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51525__$1,inst_51523);
} else {
if((state_val_51526 === (2))){
var inst_51502 = (state_51525[(8)]);
var inst_51504 = (inst_51502 < n);
var state_51525__$1 = state_51525;
if(cljs.core.truth_(inst_51504)){
var statearr_51534_51551 = state_51525__$1;
(statearr_51534_51551[(1)] = (4));

} else {
var statearr_51535_51552 = state_51525__$1;
(statearr_51535_51552[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51526 === (11))){
var inst_51502 = (state_51525[(8)]);
var inst_51512 = (state_51525[(2)]);
var inst_51513 = (inst_51502 + (1));
var inst_51502__$1 = inst_51513;
var state_51525__$1 = (function (){var statearr_51536 = state_51525;
(statearr_51536[(10)] = inst_51512);

(statearr_51536[(8)] = inst_51502__$1);

return statearr_51536;
})();
var statearr_51537_51553 = state_51525__$1;
(statearr_51537_51553[(2)] = null);

(statearr_51537_51553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51526 === (9))){
var state_51525__$1 = state_51525;
var statearr_51538_51554 = state_51525__$1;
(statearr_51538_51554[(2)] = null);

(statearr_51538_51554[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51526 === (5))){
var state_51525__$1 = state_51525;
var statearr_51539_51555 = state_51525__$1;
(statearr_51539_51555[(2)] = null);

(statearr_51539_51555[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51526 === (10))){
var inst_51517 = (state_51525[(2)]);
var state_51525__$1 = state_51525;
var statearr_51540_51556 = state_51525__$1;
(statearr_51540_51556[(2)] = inst_51517);

(statearr_51540_51556[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51526 === (8))){
var inst_51507 = (state_51525[(7)]);
var state_51525__$1 = state_51525;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51525__$1,(11),out,inst_51507);
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
});
return (function() {
var cljs$core$async$state_machine__29129__auto__ = null;
var cljs$core$async$state_machine__29129__auto____0 = (function (){
var statearr_51541 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51541[(0)] = cljs$core$async$state_machine__29129__auto__);

(statearr_51541[(1)] = (1));

return statearr_51541;
});
var cljs$core$async$state_machine__29129__auto____1 = (function (state_51525){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_51525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e51542){if((e51542 instanceof Object)){
var ex__29132__auto__ = e51542;
var statearr_51543_51557 = state_51525;
(statearr_51543_51557[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51558 = state_51525;
state_51525 = G__51558;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
cljs$core$async$state_machine__29129__auto__ = function(state_51525){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29129__auto____1.call(this,state_51525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29129__auto____0;
cljs$core$async$state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29129__auto____1;
return cljs$core$async$state_machine__29129__auto__;
})()
})();
var state__29225__auto__ = (function (){var statearr_51544 = f__29224__auto__.call(null);
(statearr_51544[(6)] = c__29223__auto___51546);

return statearr_51544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29225__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51560 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51560 = (function (f,ch,meta51561){
this.f = f;
this.ch = ch;
this.meta51561 = meta51561;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51560.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51562,meta51561__$1){
var self__ = this;
var _51562__$1 = this;
return (new cljs.core.async.t_cljs$core$async51560(self__.f,self__.ch,meta51561__$1));
}));

(cljs.core.async.t_cljs$core$async51560.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51562){
var self__ = this;
var _51562__$1 = this;
return self__.meta51561;
}));

(cljs.core.async.t_cljs$core$async51560.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51560.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async51560.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async51560.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51560.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51563 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51563 = (function (f,ch,meta51561,_,fn1,meta51564){
this.f = f;
this.ch = ch;
this.meta51561 = meta51561;
this._ = _;
this.fn1 = fn1;
this.meta51564 = meta51564;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51565,meta51564__$1){
var self__ = this;
var _51565__$1 = this;
return (new cljs.core.async.t_cljs$core$async51563(self__.f,self__.ch,self__.meta51561,self__._,self__.fn1,meta51564__$1));
}));

(cljs.core.async.t_cljs$core$async51563.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51565){
var self__ = this;
var _51565__$1 = this;
return self__.meta51564;
}));

(cljs.core.async.t_cljs$core$async51563.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51563.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async51563.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async51563.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__51559_SHARP_){
return f1.call(null,(((p1__51559_SHARP_ == null))?null:self__.f.call(null,p1__51559_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async51563.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51561","meta51561",-227995848,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async51560","cljs.core.async/t_cljs$core$async51560",-1684642684,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta51564","meta51564",-311940429,null)], null);
}));

(cljs.core.async.t_cljs$core$async51563.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51563.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51563");

(cljs.core.async.t_cljs$core$async51563.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async51563");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51563.
 */
cljs.core.async.__GT_t_cljs$core$async51563 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async51563(f__$1,ch__$1,meta51561__$1,___$2,fn1__$1,meta51564){
return (new cljs.core.async.t_cljs$core$async51563(f__$1,ch__$1,meta51561__$1,___$2,fn1__$1,meta51564));
});

}

return (new cljs.core.async.t_cljs$core$async51563(self__.f,self__.ch,self__.meta51561,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async51560.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51560.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async51560.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51561","meta51561",-227995848,null)], null);
}));

(cljs.core.async.t_cljs$core$async51560.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51560.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51560");

(cljs.core.async.t_cljs$core$async51560.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async51560");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51560.
 */
cljs.core.async.__GT_t_cljs$core$async51560 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async51560(f__$1,ch__$1,meta51561){
return (new cljs.core.async.t_cljs$core$async51560(f__$1,ch__$1,meta51561));
});

}

return (new cljs.core.async.t_cljs$core$async51560(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51566 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51566 = (function (f,ch,meta51567){
this.f = f;
this.ch = ch;
this.meta51567 = meta51567;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51568,meta51567__$1){
var self__ = this;
var _51568__$1 = this;
return (new cljs.core.async.t_cljs$core$async51566(self__.f,self__.ch,meta51567__$1));
}));

(cljs.core.async.t_cljs$core$async51566.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51568){
var self__ = this;
var _51568__$1 = this;
return self__.meta51567;
}));

(cljs.core.async.t_cljs$core$async51566.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51566.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async51566.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51566.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async51566.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51566.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async51566.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51567","meta51567",-264117136,null)], null);
}));

(cljs.core.async.t_cljs$core$async51566.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51566.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51566");

(cljs.core.async.t_cljs$core$async51566.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async51566");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51566.
 */
cljs.core.async.__GT_t_cljs$core$async51566 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async51566(f__$1,ch__$1,meta51567){
return (new cljs.core.async.t_cljs$core$async51566(f__$1,ch__$1,meta51567));
});

}

return (new cljs.core.async.t_cljs$core$async51566(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51569 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51569 = (function (p,ch,meta51570){
this.p = p;
this.ch = ch;
this.meta51570 = meta51570;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51571,meta51570__$1){
var self__ = this;
var _51571__$1 = this;
return (new cljs.core.async.t_cljs$core$async51569(self__.p,self__.ch,meta51570__$1));
}));

(cljs.core.async.t_cljs$core$async51569.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51571){
var self__ = this;
var _51571__$1 = this;
return self__.meta51570;
}));

(cljs.core.async.t_cljs$core$async51569.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51569.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async51569.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async51569.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51569.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async51569.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51569.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async51569.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51570","meta51570",389059217,null)], null);
}));

(cljs.core.async.t_cljs$core$async51569.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51569.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51569");

(cljs.core.async.t_cljs$core$async51569.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async51569");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51569.
 */
cljs.core.async.__GT_t_cljs$core$async51569 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async51569(p__$1,ch__$1,meta51570){
return (new cljs.core.async.t_cljs$core$async51569(p__$1,ch__$1,meta51570));
});

}

return (new cljs.core.async.t_cljs$core$async51569(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__51573 = arguments.length;
switch (G__51573) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29223__auto___51613 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29224__auto__ = (function (){var switch__29128__auto__ = (function (state_51594){
var state_val_51595 = (state_51594[(1)]);
if((state_val_51595 === (7))){
var inst_51590 = (state_51594[(2)]);
var state_51594__$1 = state_51594;
var statearr_51596_51614 = state_51594__$1;
(statearr_51596_51614[(2)] = inst_51590);

(statearr_51596_51614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51595 === (1))){
var state_51594__$1 = state_51594;
var statearr_51597_51615 = state_51594__$1;
(statearr_51597_51615[(2)] = null);

(statearr_51597_51615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51595 === (4))){
var inst_51576 = (state_51594[(7)]);
var inst_51576__$1 = (state_51594[(2)]);
var inst_51577 = (inst_51576__$1 == null);
var state_51594__$1 = (function (){var statearr_51598 = state_51594;
(statearr_51598[(7)] = inst_51576__$1);

return statearr_51598;
})();
if(cljs.core.truth_(inst_51577)){
var statearr_51599_51616 = state_51594__$1;
(statearr_51599_51616[(1)] = (5));

} else {
var statearr_51600_51617 = state_51594__$1;
(statearr_51600_51617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51595 === (6))){
var inst_51576 = (state_51594[(7)]);
var inst_51581 = p.call(null,inst_51576);
var state_51594__$1 = state_51594;
if(cljs.core.truth_(inst_51581)){
var statearr_51601_51618 = state_51594__$1;
(statearr_51601_51618[(1)] = (8));

} else {
var statearr_51602_51619 = state_51594__$1;
(statearr_51602_51619[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51595 === (3))){
var inst_51592 = (state_51594[(2)]);
var state_51594__$1 = state_51594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51594__$1,inst_51592);
} else {
if((state_val_51595 === (2))){
var state_51594__$1 = state_51594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51594__$1,(4),ch);
} else {
if((state_val_51595 === (11))){
var inst_51584 = (state_51594[(2)]);
var state_51594__$1 = state_51594;
var statearr_51603_51620 = state_51594__$1;
(statearr_51603_51620[(2)] = inst_51584);

(statearr_51603_51620[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51595 === (9))){
var state_51594__$1 = state_51594;
var statearr_51604_51621 = state_51594__$1;
(statearr_51604_51621[(2)] = null);

(statearr_51604_51621[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51595 === (5))){
var inst_51579 = cljs.core.async.close_BANG_.call(null,out);
var state_51594__$1 = state_51594;
var statearr_51605_51622 = state_51594__$1;
(statearr_51605_51622[(2)] = inst_51579);

(statearr_51605_51622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51595 === (10))){
var inst_51587 = (state_51594[(2)]);
var state_51594__$1 = (function (){var statearr_51606 = state_51594;
(statearr_51606[(8)] = inst_51587);

return statearr_51606;
})();
var statearr_51607_51623 = state_51594__$1;
(statearr_51607_51623[(2)] = null);

(statearr_51607_51623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51595 === (8))){
var inst_51576 = (state_51594[(7)]);
var state_51594__$1 = state_51594;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51594__$1,(11),out,inst_51576);
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
});
return (function() {
var cljs$core$async$state_machine__29129__auto__ = null;
var cljs$core$async$state_machine__29129__auto____0 = (function (){
var statearr_51608 = [null,null,null,null,null,null,null,null,null];
(statearr_51608[(0)] = cljs$core$async$state_machine__29129__auto__);

(statearr_51608[(1)] = (1));

return statearr_51608;
});
var cljs$core$async$state_machine__29129__auto____1 = (function (state_51594){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_51594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e51609){if((e51609 instanceof Object)){
var ex__29132__auto__ = e51609;
var statearr_51610_51624 = state_51594;
(statearr_51610_51624[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51609;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51625 = state_51594;
state_51594 = G__51625;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
cljs$core$async$state_machine__29129__auto__ = function(state_51594){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29129__auto____1.call(this,state_51594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29129__auto____0;
cljs$core$async$state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29129__auto____1;
return cljs$core$async$state_machine__29129__auto__;
})()
})();
var state__29225__auto__ = (function (){var statearr_51611 = f__29224__auto__.call(null);
(statearr_51611[(6)] = c__29223__auto___51613);

return statearr_51611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29225__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__51627 = arguments.length;
switch (G__51627) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29223__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29224__auto__ = (function (){var switch__29128__auto__ = (function (state_51690){
var state_val_51691 = (state_51690[(1)]);
if((state_val_51691 === (7))){
var inst_51686 = (state_51690[(2)]);
var state_51690__$1 = state_51690;
var statearr_51692_51730 = state_51690__$1;
(statearr_51692_51730[(2)] = inst_51686);

(statearr_51692_51730[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51691 === (20))){
var inst_51656 = (state_51690[(7)]);
var inst_51667 = (state_51690[(2)]);
var inst_51668 = cljs.core.next.call(null,inst_51656);
var inst_51642 = inst_51668;
var inst_51643 = null;
var inst_51644 = (0);
var inst_51645 = (0);
var state_51690__$1 = (function (){var statearr_51693 = state_51690;
(statearr_51693[(8)] = inst_51642);

(statearr_51693[(9)] = inst_51667);

(statearr_51693[(10)] = inst_51643);

(statearr_51693[(11)] = inst_51645);

(statearr_51693[(12)] = inst_51644);

return statearr_51693;
})();
var statearr_51694_51731 = state_51690__$1;
(statearr_51694_51731[(2)] = null);

(statearr_51694_51731[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51691 === (1))){
var state_51690__$1 = state_51690;
var statearr_51695_51732 = state_51690__$1;
(statearr_51695_51732[(2)] = null);

(statearr_51695_51732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51691 === (4))){
var inst_51631 = (state_51690[(13)]);
var inst_51631__$1 = (state_51690[(2)]);
var inst_51632 = (inst_51631__$1 == null);
var state_51690__$1 = (function (){var statearr_51696 = state_51690;
(statearr_51696[(13)] = inst_51631__$1);

return statearr_51696;
})();
if(cljs.core.truth_(inst_51632)){
var statearr_51697_51733 = state_51690__$1;
(statearr_51697_51733[(1)] = (5));

} else {
var statearr_51698_51734 = state_51690__$1;
(statearr_51698_51734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51691 === (15))){
var state_51690__$1 = state_51690;
var statearr_51702_51735 = state_51690__$1;
(statearr_51702_51735[(2)] = null);

(statearr_51702_51735[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51691 === (21))){
var state_51690__$1 = state_51690;
var statearr_51703_51736 = state_51690__$1;
(statearr_51703_51736[(2)] = null);

(statearr_51703_51736[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51691 === (13))){
var inst_51642 = (state_51690[(8)]);
var inst_51643 = (state_51690[(10)]);
var inst_51645 = (state_51690[(11)]);
var inst_51644 = (state_51690[(12)]);
var inst_51652 = (state_51690[(2)]);
var inst_51653 = (inst_51645 + (1));
var tmp51699 = inst_51642;
var tmp51700 = inst_51643;
var tmp51701 = inst_51644;
var inst_51642__$1 = tmp51699;
var inst_51643__$1 = tmp51700;
var inst_51644__$1 = tmp51701;
var inst_51645__$1 = inst_51653;
var state_51690__$1 = (function (){var statearr_51704 = state_51690;
(statearr_51704[(8)] = inst_51642__$1);

(statearr_51704[(10)] = inst_51643__$1);

(statearr_51704[(11)] = inst_51645__$1);

(statearr_51704[(14)] = inst_51652);

(statearr_51704[(12)] = inst_51644__$1);

return statearr_51704;
})();
var statearr_51705_51737 = state_51690__$1;
(statearr_51705_51737[(2)] = null);

(statearr_51705_51737[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51691 === (22))){
var state_51690__$1 = state_51690;
var statearr_51706_51738 = state_51690__$1;
(statearr_51706_51738[(2)] = null);

(statearr_51706_51738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51691 === (6))){
var inst_51631 = (state_51690[(13)]);
var inst_51640 = f.call(null,inst_51631);
var inst_51641 = cljs.core.seq.call(null,inst_51640);
var inst_51642 = inst_51641;
var inst_51643 = null;
var inst_51644 = (0);
var inst_51645 = (0);
var state_51690__$1 = (function (){var statearr_51707 = state_51690;
(statearr_51707[(8)] = inst_51642);

(statearr_51707[(10)] = inst_51643);

(statearr_51707[(11)] = inst_51645);

(statearr_51707[(12)] = inst_51644);

return statearr_51707;
})();
var statearr_51708_51739 = state_51690__$1;
(statearr_51708_51739[(2)] = null);

(statearr_51708_51739[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51691 === (17))){
var inst_51656 = (state_51690[(7)]);
var inst_51660 = cljs.core.chunk_first.call(null,inst_51656);
var inst_51661 = cljs.core.chunk_rest.call(null,inst_51656);
var inst_51662 = cljs.core.count.call(null,inst_51660);
var inst_51642 = inst_51661;
var inst_51643 = inst_51660;
var inst_51644 = inst_51662;
var inst_51645 = (0);
var state_51690__$1 = (function (){var statearr_51709 = state_51690;
(statearr_51709[(8)] = inst_51642);

(statearr_51709[(10)] = inst_51643);

(statearr_51709[(11)] = inst_51645);

(statearr_51709[(12)] = inst_51644);

return statearr_51709;
})();
var statearr_51710_51740 = state_51690__$1;
(statearr_51710_51740[(2)] = null);

(statearr_51710_51740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51691 === (3))){
var inst_51688 = (state_51690[(2)]);
var state_51690__$1 = state_51690;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51690__$1,inst_51688);
} else {
if((state_val_51691 === (12))){
var inst_51676 = (state_51690[(2)]);
var state_51690__$1 = state_51690;
var statearr_51711_51741 = state_51690__$1;
(statearr_51711_51741[(2)] = inst_51676);

(statearr_51711_51741[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51691 === (2))){
var state_51690__$1 = state_51690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51690__$1,(4),in$);
} else {
if((state_val_51691 === (23))){
var inst_51684 = (state_51690[(2)]);
var state_51690__$1 = state_51690;
var statearr_51712_51742 = state_51690__$1;
(statearr_51712_51742[(2)] = inst_51684);

(statearr_51712_51742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51691 === (19))){
var inst_51671 = (state_51690[(2)]);
var state_51690__$1 = state_51690;
var statearr_51713_51743 = state_51690__$1;
(statearr_51713_51743[(2)] = inst_51671);

(statearr_51713_51743[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51691 === (11))){
var inst_51642 = (state_51690[(8)]);
var inst_51656 = (state_51690[(7)]);
var inst_51656__$1 = cljs.core.seq.call(null,inst_51642);
var state_51690__$1 = (function (){var statearr_51714 = state_51690;
(statearr_51714[(7)] = inst_51656__$1);

return statearr_51714;
})();
if(inst_51656__$1){
var statearr_51715_51744 = state_51690__$1;
(statearr_51715_51744[(1)] = (14));

} else {
var statearr_51716_51745 = state_51690__$1;
(statearr_51716_51745[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51691 === (9))){
var inst_51678 = (state_51690[(2)]);
var inst_51679 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_51690__$1 = (function (){var statearr_51717 = state_51690;
(statearr_51717[(15)] = inst_51678);

return statearr_51717;
})();
if(cljs.core.truth_(inst_51679)){
var statearr_51718_51746 = state_51690__$1;
(statearr_51718_51746[(1)] = (21));

} else {
var statearr_51719_51747 = state_51690__$1;
(statearr_51719_51747[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51691 === (5))){
var inst_51634 = cljs.core.async.close_BANG_.call(null,out);
var state_51690__$1 = state_51690;
var statearr_51720_51748 = state_51690__$1;
(statearr_51720_51748[(2)] = inst_51634);

(statearr_51720_51748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51691 === (14))){
var inst_51656 = (state_51690[(7)]);
var inst_51658 = cljs.core.chunked_seq_QMARK_.call(null,inst_51656);
var state_51690__$1 = state_51690;
if(inst_51658){
var statearr_51721_51749 = state_51690__$1;
(statearr_51721_51749[(1)] = (17));

} else {
var statearr_51722_51750 = state_51690__$1;
(statearr_51722_51750[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51691 === (16))){
var inst_51674 = (state_51690[(2)]);
var state_51690__$1 = state_51690;
var statearr_51723_51751 = state_51690__$1;
(statearr_51723_51751[(2)] = inst_51674);

(statearr_51723_51751[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51691 === (10))){
var inst_51643 = (state_51690[(10)]);
var inst_51645 = (state_51690[(11)]);
var inst_51650 = cljs.core._nth.call(null,inst_51643,inst_51645);
var state_51690__$1 = state_51690;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51690__$1,(13),out,inst_51650);
} else {
if((state_val_51691 === (18))){
var inst_51656 = (state_51690[(7)]);
var inst_51665 = cljs.core.first.call(null,inst_51656);
var state_51690__$1 = state_51690;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51690__$1,(20),out,inst_51665);
} else {
if((state_val_51691 === (8))){
var inst_51645 = (state_51690[(11)]);
var inst_51644 = (state_51690[(12)]);
var inst_51647 = (inst_51645 < inst_51644);
var inst_51648 = inst_51647;
var state_51690__$1 = state_51690;
if(cljs.core.truth_(inst_51648)){
var statearr_51724_51752 = state_51690__$1;
(statearr_51724_51752[(1)] = (10));

} else {
var statearr_51725_51753 = state_51690__$1;
(statearr_51725_51753[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29129__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29129__auto____0 = (function (){
var statearr_51726 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51726[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29129__auto__);

(statearr_51726[(1)] = (1));

return statearr_51726;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29129__auto____1 = (function (state_51690){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_51690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e51727){if((e51727 instanceof Object)){
var ex__29132__auto__ = e51727;
var statearr_51728_51754 = state_51690;
(statearr_51728_51754[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51755 = state_51690;
state_51690 = G__51755;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29129__auto__ = function(state_51690){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29129__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29129__auto____1.call(this,state_51690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29129__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29129__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29129__auto__;
})()
})();
var state__29225__auto__ = (function (){var statearr_51729 = f__29224__auto__.call(null);
(statearr_51729[(6)] = c__29223__auto__);

return statearr_51729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29225__auto__);
}));

return c__29223__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__51757 = arguments.length;
switch (G__51757) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__51760 = arguments.length;
switch (G__51760) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__51763 = arguments.length;
switch (G__51763) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29223__auto___51810 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29224__auto__ = (function (){var switch__29128__auto__ = (function (state_51787){
var state_val_51788 = (state_51787[(1)]);
if((state_val_51788 === (7))){
var inst_51782 = (state_51787[(2)]);
var state_51787__$1 = state_51787;
var statearr_51789_51811 = state_51787__$1;
(statearr_51789_51811[(2)] = inst_51782);

(statearr_51789_51811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51788 === (1))){
var inst_51764 = null;
var state_51787__$1 = (function (){var statearr_51790 = state_51787;
(statearr_51790[(7)] = inst_51764);

return statearr_51790;
})();
var statearr_51791_51812 = state_51787__$1;
(statearr_51791_51812[(2)] = null);

(statearr_51791_51812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51788 === (4))){
var inst_51767 = (state_51787[(8)]);
var inst_51767__$1 = (state_51787[(2)]);
var inst_51768 = (inst_51767__$1 == null);
var inst_51769 = cljs.core.not.call(null,inst_51768);
var state_51787__$1 = (function (){var statearr_51792 = state_51787;
(statearr_51792[(8)] = inst_51767__$1);

return statearr_51792;
})();
if(inst_51769){
var statearr_51793_51813 = state_51787__$1;
(statearr_51793_51813[(1)] = (5));

} else {
var statearr_51794_51814 = state_51787__$1;
(statearr_51794_51814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51788 === (6))){
var state_51787__$1 = state_51787;
var statearr_51795_51815 = state_51787__$1;
(statearr_51795_51815[(2)] = null);

(statearr_51795_51815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51788 === (3))){
var inst_51784 = (state_51787[(2)]);
var inst_51785 = cljs.core.async.close_BANG_.call(null,out);
var state_51787__$1 = (function (){var statearr_51796 = state_51787;
(statearr_51796[(9)] = inst_51784);

return statearr_51796;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51787__$1,inst_51785);
} else {
if((state_val_51788 === (2))){
var state_51787__$1 = state_51787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51787__$1,(4),ch);
} else {
if((state_val_51788 === (11))){
var inst_51767 = (state_51787[(8)]);
var inst_51776 = (state_51787[(2)]);
var inst_51764 = inst_51767;
var state_51787__$1 = (function (){var statearr_51797 = state_51787;
(statearr_51797[(7)] = inst_51764);

(statearr_51797[(10)] = inst_51776);

return statearr_51797;
})();
var statearr_51798_51816 = state_51787__$1;
(statearr_51798_51816[(2)] = null);

(statearr_51798_51816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51788 === (9))){
var inst_51767 = (state_51787[(8)]);
var state_51787__$1 = state_51787;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51787__$1,(11),out,inst_51767);
} else {
if((state_val_51788 === (5))){
var inst_51764 = (state_51787[(7)]);
var inst_51767 = (state_51787[(8)]);
var inst_51771 = cljs.core._EQ_.call(null,inst_51767,inst_51764);
var state_51787__$1 = state_51787;
if(inst_51771){
var statearr_51800_51817 = state_51787__$1;
(statearr_51800_51817[(1)] = (8));

} else {
var statearr_51801_51818 = state_51787__$1;
(statearr_51801_51818[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51788 === (10))){
var inst_51779 = (state_51787[(2)]);
var state_51787__$1 = state_51787;
var statearr_51802_51819 = state_51787__$1;
(statearr_51802_51819[(2)] = inst_51779);

(statearr_51802_51819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51788 === (8))){
var inst_51764 = (state_51787[(7)]);
var tmp51799 = inst_51764;
var inst_51764__$1 = tmp51799;
var state_51787__$1 = (function (){var statearr_51803 = state_51787;
(statearr_51803[(7)] = inst_51764__$1);

return statearr_51803;
})();
var statearr_51804_51820 = state_51787__$1;
(statearr_51804_51820[(2)] = null);

(statearr_51804_51820[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__29129__auto__ = null;
var cljs$core$async$state_machine__29129__auto____0 = (function (){
var statearr_51805 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51805[(0)] = cljs$core$async$state_machine__29129__auto__);

(statearr_51805[(1)] = (1));

return statearr_51805;
});
var cljs$core$async$state_machine__29129__auto____1 = (function (state_51787){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_51787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e51806){if((e51806 instanceof Object)){
var ex__29132__auto__ = e51806;
var statearr_51807_51821 = state_51787;
(statearr_51807_51821[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51822 = state_51787;
state_51787 = G__51822;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
cljs$core$async$state_machine__29129__auto__ = function(state_51787){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29129__auto____1.call(this,state_51787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29129__auto____0;
cljs$core$async$state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29129__auto____1;
return cljs$core$async$state_machine__29129__auto__;
})()
})();
var state__29225__auto__ = (function (){var statearr_51808 = f__29224__auto__.call(null);
(statearr_51808[(6)] = c__29223__auto___51810);

return statearr_51808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29225__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__51824 = arguments.length;
switch (G__51824) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29223__auto___51890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29224__auto__ = (function (){var switch__29128__auto__ = (function (state_51862){
var state_val_51863 = (state_51862[(1)]);
if((state_val_51863 === (7))){
var inst_51858 = (state_51862[(2)]);
var state_51862__$1 = state_51862;
var statearr_51864_51891 = state_51862__$1;
(statearr_51864_51891[(2)] = inst_51858);

(statearr_51864_51891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51863 === (1))){
var inst_51825 = (new Array(n));
var inst_51826 = inst_51825;
var inst_51827 = (0);
var state_51862__$1 = (function (){var statearr_51865 = state_51862;
(statearr_51865[(7)] = inst_51827);

(statearr_51865[(8)] = inst_51826);

return statearr_51865;
})();
var statearr_51866_51892 = state_51862__$1;
(statearr_51866_51892[(2)] = null);

(statearr_51866_51892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51863 === (4))){
var inst_51830 = (state_51862[(9)]);
var inst_51830__$1 = (state_51862[(2)]);
var inst_51831 = (inst_51830__$1 == null);
var inst_51832 = cljs.core.not.call(null,inst_51831);
var state_51862__$1 = (function (){var statearr_51867 = state_51862;
(statearr_51867[(9)] = inst_51830__$1);

return statearr_51867;
})();
if(inst_51832){
var statearr_51868_51893 = state_51862__$1;
(statearr_51868_51893[(1)] = (5));

} else {
var statearr_51869_51894 = state_51862__$1;
(statearr_51869_51894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51863 === (15))){
var inst_51852 = (state_51862[(2)]);
var state_51862__$1 = state_51862;
var statearr_51870_51895 = state_51862__$1;
(statearr_51870_51895[(2)] = inst_51852);

(statearr_51870_51895[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51863 === (13))){
var state_51862__$1 = state_51862;
var statearr_51871_51896 = state_51862__$1;
(statearr_51871_51896[(2)] = null);

(statearr_51871_51896[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51863 === (6))){
var inst_51827 = (state_51862[(7)]);
var inst_51848 = (inst_51827 > (0));
var state_51862__$1 = state_51862;
if(cljs.core.truth_(inst_51848)){
var statearr_51872_51897 = state_51862__$1;
(statearr_51872_51897[(1)] = (12));

} else {
var statearr_51873_51898 = state_51862__$1;
(statearr_51873_51898[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51863 === (3))){
var inst_51860 = (state_51862[(2)]);
var state_51862__$1 = state_51862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51862__$1,inst_51860);
} else {
if((state_val_51863 === (12))){
var inst_51826 = (state_51862[(8)]);
var inst_51850 = cljs.core.vec.call(null,inst_51826);
var state_51862__$1 = state_51862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51862__$1,(15),out,inst_51850);
} else {
if((state_val_51863 === (2))){
var state_51862__$1 = state_51862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51862__$1,(4),ch);
} else {
if((state_val_51863 === (11))){
var inst_51842 = (state_51862[(2)]);
var inst_51843 = (new Array(n));
var inst_51826 = inst_51843;
var inst_51827 = (0);
var state_51862__$1 = (function (){var statearr_51874 = state_51862;
(statearr_51874[(7)] = inst_51827);

(statearr_51874[(8)] = inst_51826);

(statearr_51874[(10)] = inst_51842);

return statearr_51874;
})();
var statearr_51875_51899 = state_51862__$1;
(statearr_51875_51899[(2)] = null);

(statearr_51875_51899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51863 === (9))){
var inst_51826 = (state_51862[(8)]);
var inst_51840 = cljs.core.vec.call(null,inst_51826);
var state_51862__$1 = state_51862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51862__$1,(11),out,inst_51840);
} else {
if((state_val_51863 === (5))){
var inst_51827 = (state_51862[(7)]);
var inst_51830 = (state_51862[(9)]);
var inst_51826 = (state_51862[(8)]);
var inst_51835 = (state_51862[(11)]);
var inst_51834 = (inst_51826[inst_51827] = inst_51830);
var inst_51835__$1 = (inst_51827 + (1));
var inst_51836 = (inst_51835__$1 < n);
var state_51862__$1 = (function (){var statearr_51876 = state_51862;
(statearr_51876[(12)] = inst_51834);

(statearr_51876[(11)] = inst_51835__$1);

return statearr_51876;
})();
if(cljs.core.truth_(inst_51836)){
var statearr_51877_51900 = state_51862__$1;
(statearr_51877_51900[(1)] = (8));

} else {
var statearr_51878_51901 = state_51862__$1;
(statearr_51878_51901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51863 === (14))){
var inst_51855 = (state_51862[(2)]);
var inst_51856 = cljs.core.async.close_BANG_.call(null,out);
var state_51862__$1 = (function (){var statearr_51880 = state_51862;
(statearr_51880[(13)] = inst_51855);

return statearr_51880;
})();
var statearr_51881_51902 = state_51862__$1;
(statearr_51881_51902[(2)] = inst_51856);

(statearr_51881_51902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51863 === (10))){
var inst_51846 = (state_51862[(2)]);
var state_51862__$1 = state_51862;
var statearr_51882_51903 = state_51862__$1;
(statearr_51882_51903[(2)] = inst_51846);

(statearr_51882_51903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51863 === (8))){
var inst_51826 = (state_51862[(8)]);
var inst_51835 = (state_51862[(11)]);
var tmp51879 = inst_51826;
var inst_51826__$1 = tmp51879;
var inst_51827 = inst_51835;
var state_51862__$1 = (function (){var statearr_51883 = state_51862;
(statearr_51883[(7)] = inst_51827);

(statearr_51883[(8)] = inst_51826__$1);

return statearr_51883;
})();
var statearr_51884_51904 = state_51862__$1;
(statearr_51884_51904[(2)] = null);

(statearr_51884_51904[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__29129__auto__ = null;
var cljs$core$async$state_machine__29129__auto____0 = (function (){
var statearr_51885 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51885[(0)] = cljs$core$async$state_machine__29129__auto__);

(statearr_51885[(1)] = (1));

return statearr_51885;
});
var cljs$core$async$state_machine__29129__auto____1 = (function (state_51862){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_51862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e51886){if((e51886 instanceof Object)){
var ex__29132__auto__ = e51886;
var statearr_51887_51905 = state_51862;
(statearr_51887_51905[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51906 = state_51862;
state_51862 = G__51906;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
cljs$core$async$state_machine__29129__auto__ = function(state_51862){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29129__auto____1.call(this,state_51862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29129__auto____0;
cljs$core$async$state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29129__auto____1;
return cljs$core$async$state_machine__29129__auto__;
})()
})();
var state__29225__auto__ = (function (){var statearr_51888 = f__29224__auto__.call(null);
(statearr_51888[(6)] = c__29223__auto___51890);

return statearr_51888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29225__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__51908 = arguments.length;
switch (G__51908) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29223__auto___51978 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29224__auto__ = (function (){var switch__29128__auto__ = (function (state_51950){
var state_val_51951 = (state_51950[(1)]);
if((state_val_51951 === (7))){
var inst_51946 = (state_51950[(2)]);
var state_51950__$1 = state_51950;
var statearr_51952_51979 = state_51950__$1;
(statearr_51952_51979[(2)] = inst_51946);

(statearr_51952_51979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51951 === (1))){
var inst_51909 = [];
var inst_51910 = inst_51909;
var inst_51911 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_51950__$1 = (function (){var statearr_51953 = state_51950;
(statearr_51953[(7)] = inst_51911);

(statearr_51953[(8)] = inst_51910);

return statearr_51953;
})();
var statearr_51954_51980 = state_51950__$1;
(statearr_51954_51980[(2)] = null);

(statearr_51954_51980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51951 === (4))){
var inst_51914 = (state_51950[(9)]);
var inst_51914__$1 = (state_51950[(2)]);
var inst_51915 = (inst_51914__$1 == null);
var inst_51916 = cljs.core.not.call(null,inst_51915);
var state_51950__$1 = (function (){var statearr_51955 = state_51950;
(statearr_51955[(9)] = inst_51914__$1);

return statearr_51955;
})();
if(inst_51916){
var statearr_51956_51981 = state_51950__$1;
(statearr_51956_51981[(1)] = (5));

} else {
var statearr_51957_51982 = state_51950__$1;
(statearr_51957_51982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51951 === (15))){
var inst_51940 = (state_51950[(2)]);
var state_51950__$1 = state_51950;
var statearr_51958_51983 = state_51950__$1;
(statearr_51958_51983[(2)] = inst_51940);

(statearr_51958_51983[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51951 === (13))){
var state_51950__$1 = state_51950;
var statearr_51959_51984 = state_51950__$1;
(statearr_51959_51984[(2)] = null);

(statearr_51959_51984[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51951 === (6))){
var inst_51910 = (state_51950[(8)]);
var inst_51935 = inst_51910.length;
var inst_51936 = (inst_51935 > (0));
var state_51950__$1 = state_51950;
if(cljs.core.truth_(inst_51936)){
var statearr_51960_51985 = state_51950__$1;
(statearr_51960_51985[(1)] = (12));

} else {
var statearr_51961_51986 = state_51950__$1;
(statearr_51961_51986[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51951 === (3))){
var inst_51948 = (state_51950[(2)]);
var state_51950__$1 = state_51950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51950__$1,inst_51948);
} else {
if((state_val_51951 === (12))){
var inst_51910 = (state_51950[(8)]);
var inst_51938 = cljs.core.vec.call(null,inst_51910);
var state_51950__$1 = state_51950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51950__$1,(15),out,inst_51938);
} else {
if((state_val_51951 === (2))){
var state_51950__$1 = state_51950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51950__$1,(4),ch);
} else {
if((state_val_51951 === (11))){
var inst_51914 = (state_51950[(9)]);
var inst_51918 = (state_51950[(10)]);
var inst_51928 = (state_51950[(2)]);
var inst_51929 = [];
var inst_51930 = inst_51929.push(inst_51914);
var inst_51910 = inst_51929;
var inst_51911 = inst_51918;
var state_51950__$1 = (function (){var statearr_51962 = state_51950;
(statearr_51962[(7)] = inst_51911);

(statearr_51962[(11)] = inst_51930);

(statearr_51962[(12)] = inst_51928);

(statearr_51962[(8)] = inst_51910);

return statearr_51962;
})();
var statearr_51963_51987 = state_51950__$1;
(statearr_51963_51987[(2)] = null);

(statearr_51963_51987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51951 === (9))){
var inst_51910 = (state_51950[(8)]);
var inst_51926 = cljs.core.vec.call(null,inst_51910);
var state_51950__$1 = state_51950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51950__$1,(11),out,inst_51926);
} else {
if((state_val_51951 === (5))){
var inst_51911 = (state_51950[(7)]);
var inst_51914 = (state_51950[(9)]);
var inst_51918 = (state_51950[(10)]);
var inst_51918__$1 = f.call(null,inst_51914);
var inst_51919 = cljs.core._EQ_.call(null,inst_51918__$1,inst_51911);
var inst_51920 = cljs.core.keyword_identical_QMARK_.call(null,inst_51911,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_51921 = ((inst_51919) || (inst_51920));
var state_51950__$1 = (function (){var statearr_51964 = state_51950;
(statearr_51964[(10)] = inst_51918__$1);

return statearr_51964;
})();
if(cljs.core.truth_(inst_51921)){
var statearr_51965_51988 = state_51950__$1;
(statearr_51965_51988[(1)] = (8));

} else {
var statearr_51966_51989 = state_51950__$1;
(statearr_51966_51989[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51951 === (14))){
var inst_51943 = (state_51950[(2)]);
var inst_51944 = cljs.core.async.close_BANG_.call(null,out);
var state_51950__$1 = (function (){var statearr_51968 = state_51950;
(statearr_51968[(13)] = inst_51943);

return statearr_51968;
})();
var statearr_51969_51990 = state_51950__$1;
(statearr_51969_51990[(2)] = inst_51944);

(statearr_51969_51990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51951 === (10))){
var inst_51933 = (state_51950[(2)]);
var state_51950__$1 = state_51950;
var statearr_51970_51991 = state_51950__$1;
(statearr_51970_51991[(2)] = inst_51933);

(statearr_51970_51991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51951 === (8))){
var inst_51910 = (state_51950[(8)]);
var inst_51914 = (state_51950[(9)]);
var inst_51918 = (state_51950[(10)]);
var inst_51923 = inst_51910.push(inst_51914);
var tmp51967 = inst_51910;
var inst_51910__$1 = tmp51967;
var inst_51911 = inst_51918;
var state_51950__$1 = (function (){var statearr_51971 = state_51950;
(statearr_51971[(7)] = inst_51911);

(statearr_51971[(8)] = inst_51910__$1);

(statearr_51971[(14)] = inst_51923);

return statearr_51971;
})();
var statearr_51972_51992 = state_51950__$1;
(statearr_51972_51992[(2)] = null);

(statearr_51972_51992[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__29129__auto__ = null;
var cljs$core$async$state_machine__29129__auto____0 = (function (){
var statearr_51973 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51973[(0)] = cljs$core$async$state_machine__29129__auto__);

(statearr_51973[(1)] = (1));

return statearr_51973;
});
var cljs$core$async$state_machine__29129__auto____1 = (function (state_51950){
while(true){
var ret_value__29130__auto__ = (function (){try{while(true){
var result__29131__auto__ = switch__29128__auto__.call(null,state_51950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29131__auto__;
}
break;
}
}catch (e51974){if((e51974 instanceof Object)){
var ex__29132__auto__ = e51974;
var statearr_51975_51993 = state_51950;
(statearr_51975_51993[(5)] = ex__29132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51994 = state_51950;
state_51950 = G__51994;
continue;
} else {
return ret_value__29130__auto__;
}
break;
}
});
cljs$core$async$state_machine__29129__auto__ = function(state_51950){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29129__auto____1.call(this,state_51950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29129__auto____0;
cljs$core$async$state_machine__29129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29129__auto____1;
return cljs$core$async$state_machine__29129__auto__;
})()
})();
var state__29225__auto__ = (function (){var statearr_51976 = f__29224__auto__.call(null);
(statearr_51976[(6)] = c__29223__auto___51978);

return statearr_51976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29225__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1589676424138
