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
var G__58970 = arguments.length;
switch (G__58970) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58971 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58971 = (function (f,blockable,meta58972){
this.f = f;
this.blockable = blockable;
this.meta58972 = meta58972;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58973,meta58972__$1){
var self__ = this;
var _58973__$1 = this;
return (new cljs.core.async.t_cljs$core$async58971(self__.f,self__.blockable,meta58972__$1));
}));

(cljs.core.async.t_cljs$core$async58971.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58973){
var self__ = this;
var _58973__$1 = this;
return self__.meta58972;
}));

(cljs.core.async.t_cljs$core$async58971.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58971.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async58971.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async58971.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async58971.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta58972","meta58972",-7100677,null)], null);
}));

(cljs.core.async.t_cljs$core$async58971.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58971.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58971");

(cljs.core.async.t_cljs$core$async58971.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async58971");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58971.
 */
cljs.core.async.__GT_t_cljs$core$async58971 = (function cljs$core$async$__GT_t_cljs$core$async58971(f__$1,blockable__$1,meta58972){
return (new cljs.core.async.t_cljs$core$async58971(f__$1,blockable__$1,meta58972));
});

}

return (new cljs.core.async.t_cljs$core$async58971(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__58977 = arguments.length;
switch (G__58977) {
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
var G__58980 = arguments.length;
switch (G__58980) {
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
var G__58983 = arguments.length;
switch (G__58983) {
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
var val_58985 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_58985);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_58985);
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
var G__58987 = arguments.length;
switch (G__58987) {
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
var n__4666__auto___58989 = n;
var x_58990 = (0);
while(true){
if((x_58990 < n__4666__auto___58989)){
(a[x_58990] = (0));

var G__58991 = (x_58990 + (1));
x_58990 = G__58991;
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

var G__58992 = (i + (1));
i = G__58992;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58993 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58993 = (function (flag,meta58994){
this.flag = flag;
this.meta58994 = meta58994;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58995,meta58994__$1){
var self__ = this;
var _58995__$1 = this;
return (new cljs.core.async.t_cljs$core$async58993(self__.flag,meta58994__$1));
}));

(cljs.core.async.t_cljs$core$async58993.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58995){
var self__ = this;
var _58995__$1 = this;
return self__.meta58994;
}));

(cljs.core.async.t_cljs$core$async58993.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58993.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async58993.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async58993.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async58993.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta58994","meta58994",-845231212,null)], null);
}));

(cljs.core.async.t_cljs$core$async58993.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58993.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58993");

(cljs.core.async.t_cljs$core$async58993.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async58993");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58993.
 */
cljs.core.async.__GT_t_cljs$core$async58993 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async58993(flag__$1,meta58994){
return (new cljs.core.async.t_cljs$core$async58993(flag__$1,meta58994));
});

}

return (new cljs.core.async.t_cljs$core$async58993(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58996 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58996 = (function (flag,cb,meta58997){
this.flag = flag;
this.cb = cb;
this.meta58997 = meta58997;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58998,meta58997__$1){
var self__ = this;
var _58998__$1 = this;
return (new cljs.core.async.t_cljs$core$async58996(self__.flag,self__.cb,meta58997__$1));
}));

(cljs.core.async.t_cljs$core$async58996.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58998){
var self__ = this;
var _58998__$1 = this;
return self__.meta58997;
}));

(cljs.core.async.t_cljs$core$async58996.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58996.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async58996.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async58996.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async58996.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta58997","meta58997",1435776513,null)], null);
}));

(cljs.core.async.t_cljs$core$async58996.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58996.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58996");

(cljs.core.async.t_cljs$core$async58996.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async58996");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58996.
 */
cljs.core.async.__GT_t_cljs$core$async58996 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async58996(flag__$1,cb__$1,meta58997){
return (new cljs.core.async.t_cljs$core$async58996(flag__$1,cb__$1,meta58997));
});

}

return (new cljs.core.async.t_cljs$core$async58996(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__58999_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__58999_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__59000_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__59000_SHARP_,port], null));
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
var G__59001 = (i + (1));
i = G__59001;
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
var len__4789__auto___59007 = arguments.length;
var i__4790__auto___59008 = (0);
while(true){
if((i__4790__auto___59008 < len__4789__auto___59007)){
args__4795__auto__.push((arguments[i__4790__auto___59008]));

var G__59009 = (i__4790__auto___59008 + (1));
i__4790__auto___59008 = G__59009;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__59004){
var map__59005 = p__59004;
var map__59005__$1 = (((((!((map__59005 == null))))?(((((map__59005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59005):map__59005);
var opts = map__59005__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq59002){
var G__59003 = cljs.core.first.call(null,seq59002);
var seq59002__$1 = cljs.core.next.call(null,seq59002);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59003,seq59002__$1);
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
var G__59011 = arguments.length;
switch (G__59011) {
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
var c__29155__auto___59057 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_59035){
var state_val_59036 = (state_59035[(1)]);
if((state_val_59036 === (7))){
var inst_59031 = (state_59035[(2)]);
var state_59035__$1 = state_59035;
var statearr_59037_59058 = state_59035__$1;
(statearr_59037_59058[(2)] = inst_59031);

(statearr_59037_59058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59036 === (1))){
var state_59035__$1 = state_59035;
var statearr_59038_59059 = state_59035__$1;
(statearr_59038_59059[(2)] = null);

(statearr_59038_59059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59036 === (4))){
var inst_59014 = (state_59035[(7)]);
var inst_59014__$1 = (state_59035[(2)]);
var inst_59015 = (inst_59014__$1 == null);
var state_59035__$1 = (function (){var statearr_59039 = state_59035;
(statearr_59039[(7)] = inst_59014__$1);

return statearr_59039;
})();
if(cljs.core.truth_(inst_59015)){
var statearr_59040_59060 = state_59035__$1;
(statearr_59040_59060[(1)] = (5));

} else {
var statearr_59041_59061 = state_59035__$1;
(statearr_59041_59061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59036 === (13))){
var state_59035__$1 = state_59035;
var statearr_59042_59062 = state_59035__$1;
(statearr_59042_59062[(2)] = null);

(statearr_59042_59062[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59036 === (6))){
var inst_59014 = (state_59035[(7)]);
var state_59035__$1 = state_59035;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59035__$1,(11),to,inst_59014);
} else {
if((state_val_59036 === (3))){
var inst_59033 = (state_59035[(2)]);
var state_59035__$1 = state_59035;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59035__$1,inst_59033);
} else {
if((state_val_59036 === (12))){
var state_59035__$1 = state_59035;
var statearr_59043_59063 = state_59035__$1;
(statearr_59043_59063[(2)] = null);

(statearr_59043_59063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59036 === (2))){
var state_59035__$1 = state_59035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59035__$1,(4),from);
} else {
if((state_val_59036 === (11))){
var inst_59024 = (state_59035[(2)]);
var state_59035__$1 = state_59035;
if(cljs.core.truth_(inst_59024)){
var statearr_59044_59064 = state_59035__$1;
(statearr_59044_59064[(1)] = (12));

} else {
var statearr_59045_59065 = state_59035__$1;
(statearr_59045_59065[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59036 === (9))){
var state_59035__$1 = state_59035;
var statearr_59046_59066 = state_59035__$1;
(statearr_59046_59066[(2)] = null);

(statearr_59046_59066[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59036 === (5))){
var state_59035__$1 = state_59035;
if(cljs.core.truth_(close_QMARK_)){
var statearr_59047_59067 = state_59035__$1;
(statearr_59047_59067[(1)] = (8));

} else {
var statearr_59048_59068 = state_59035__$1;
(statearr_59048_59068[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59036 === (14))){
var inst_59029 = (state_59035[(2)]);
var state_59035__$1 = state_59035;
var statearr_59049_59069 = state_59035__$1;
(statearr_59049_59069[(2)] = inst_59029);

(statearr_59049_59069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59036 === (10))){
var inst_59021 = (state_59035[(2)]);
var state_59035__$1 = state_59035;
var statearr_59050_59070 = state_59035__$1;
(statearr_59050_59070[(2)] = inst_59021);

(statearr_59050_59070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59036 === (8))){
var inst_59018 = cljs.core.async.close_BANG_.call(null,to);
var state_59035__$1 = state_59035;
var statearr_59051_59071 = state_59035__$1;
(statearr_59051_59071[(2)] = inst_59018);

(statearr_59051_59071[(1)] = (10));


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
var cljs$core$async$state_machine__29061__auto__ = null;
var cljs$core$async$state_machine__29061__auto____0 = (function (){
var statearr_59052 = [null,null,null,null,null,null,null,null];
(statearr_59052[(0)] = cljs$core$async$state_machine__29061__auto__);

(statearr_59052[(1)] = (1));

return statearr_59052;
});
var cljs$core$async$state_machine__29061__auto____1 = (function (state_59035){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_59035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e59053){if((e59053 instanceof Object)){
var ex__29064__auto__ = e59053;
var statearr_59054_59072 = state_59035;
(statearr_59054_59072[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59073 = state_59035;
state_59035 = G__59073;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
cljs$core$async$state_machine__29061__auto__ = function(state_59035){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29061__auto____1.call(this,state_59035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29061__auto____0;
cljs$core$async$state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29061__auto____1;
return cljs$core$async$state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_59055 = f__29156__auto__.call(null);
(statearr_59055[(6)] = c__29155__auto___59057);

return statearr_59055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29157__auto__);
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
var process__$1 = (function (p__59074){
var vec__59075 = p__59074;
var v = cljs.core.nth.call(null,vec__59075,(0),null);
var p = cljs.core.nth.call(null,vec__59075,(1),null);
var job = vec__59075;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29155__auto___59246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_59082){
var state_val_59083 = (state_59082[(1)]);
if((state_val_59083 === (1))){
var state_59082__$1 = state_59082;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59082__$1,(2),res,v);
} else {
if((state_val_59083 === (2))){
var inst_59079 = (state_59082[(2)]);
var inst_59080 = cljs.core.async.close_BANG_.call(null,res);
var state_59082__$1 = (function (){var statearr_59084 = state_59082;
(statearr_59084[(7)] = inst_59079);

return statearr_59084;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59082__$1,inst_59080);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____0 = (function (){
var statearr_59085 = [null,null,null,null,null,null,null,null];
(statearr_59085[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__);

(statearr_59085[(1)] = (1));

return statearr_59085;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____1 = (function (state_59082){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_59082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e59086){if((e59086 instanceof Object)){
var ex__29064__auto__ = e59086;
var statearr_59087_59247 = state_59082;
(statearr_59087_59247[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59248 = state_59082;
state_59082 = G__59248;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__ = function(state_59082){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____1.call(this,state_59082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_59088 = f__29156__auto__.call(null);
(statearr_59088[(6)] = c__29155__auto___59246);

return statearr_59088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29157__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__59089){
var vec__59090 = p__59089;
var v = cljs.core.nth.call(null,vec__59090,(0),null);
var p = cljs.core.nth.call(null,vec__59090,(1),null);
var job = vec__59090;
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
var n__4666__auto___59249 = n;
var __59250 = (0);
while(true){
if((__59250 < n__4666__auto___59249)){
var G__59093_59251 = type;
var G__59093_59252__$1 = (((G__59093_59251 instanceof cljs.core.Keyword))?G__59093_59251.fqn:null);
switch (G__59093_59252__$1) {
case "compute":
var c__29155__auto___59254 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__59250,c__29155__auto___59254,G__59093_59251,G__59093_59252__$1,n__4666__auto___59249,jobs,results,process__$1,async){
return (function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = ((function (__59250,c__29155__auto___59254,G__59093_59251,G__59093_59252__$1,n__4666__auto___59249,jobs,results,process__$1,async){
return (function (state_59106){
var state_val_59107 = (state_59106[(1)]);
if((state_val_59107 === (1))){
var state_59106__$1 = state_59106;
var statearr_59108_59255 = state_59106__$1;
(statearr_59108_59255[(2)] = null);

(statearr_59108_59255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59107 === (2))){
var state_59106__$1 = state_59106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59106__$1,(4),jobs);
} else {
if((state_val_59107 === (3))){
var inst_59104 = (state_59106[(2)]);
var state_59106__$1 = state_59106;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59106__$1,inst_59104);
} else {
if((state_val_59107 === (4))){
var inst_59096 = (state_59106[(2)]);
var inst_59097 = process__$1.call(null,inst_59096);
var state_59106__$1 = state_59106;
if(cljs.core.truth_(inst_59097)){
var statearr_59109_59256 = state_59106__$1;
(statearr_59109_59256[(1)] = (5));

} else {
var statearr_59110_59257 = state_59106__$1;
(statearr_59110_59257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59107 === (5))){
var state_59106__$1 = state_59106;
var statearr_59111_59258 = state_59106__$1;
(statearr_59111_59258[(2)] = null);

(statearr_59111_59258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59107 === (6))){
var state_59106__$1 = state_59106;
var statearr_59112_59259 = state_59106__$1;
(statearr_59112_59259[(2)] = null);

(statearr_59112_59259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59107 === (7))){
var inst_59102 = (state_59106[(2)]);
var state_59106__$1 = state_59106;
var statearr_59113_59260 = state_59106__$1;
(statearr_59113_59260[(2)] = inst_59102);

(statearr_59113_59260[(1)] = (3));


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
});})(__59250,c__29155__auto___59254,G__59093_59251,G__59093_59252__$1,n__4666__auto___59249,jobs,results,process__$1,async))
;
return ((function (__59250,switch__29060__auto__,c__29155__auto___59254,G__59093_59251,G__59093_59252__$1,n__4666__auto___59249,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____0 = (function (){
var statearr_59114 = [null,null,null,null,null,null,null];
(statearr_59114[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__);

(statearr_59114[(1)] = (1));

return statearr_59114;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____1 = (function (state_59106){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_59106);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e59115){if((e59115 instanceof Object)){
var ex__29064__auto__ = e59115;
var statearr_59116_59261 = state_59106;
(statearr_59116_59261[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59262 = state_59106;
state_59106 = G__59262;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__ = function(state_59106){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____1.call(this,state_59106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__;
})()
;})(__59250,switch__29060__auto__,c__29155__auto___59254,G__59093_59251,G__59093_59252__$1,n__4666__auto___59249,jobs,results,process__$1,async))
})();
var state__29157__auto__ = (function (){var statearr_59117 = f__29156__auto__.call(null);
(statearr_59117[(6)] = c__29155__auto___59254);

return statearr_59117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29157__auto__);
});})(__59250,c__29155__auto___59254,G__59093_59251,G__59093_59252__$1,n__4666__auto___59249,jobs,results,process__$1,async))
);


break;
case "async":
var c__29155__auto___59263 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__59250,c__29155__auto___59263,G__59093_59251,G__59093_59252__$1,n__4666__auto___59249,jobs,results,process__$1,async){
return (function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = ((function (__59250,c__29155__auto___59263,G__59093_59251,G__59093_59252__$1,n__4666__auto___59249,jobs,results,process__$1,async){
return (function (state_59130){
var state_val_59131 = (state_59130[(1)]);
if((state_val_59131 === (1))){
var state_59130__$1 = state_59130;
var statearr_59132_59264 = state_59130__$1;
(statearr_59132_59264[(2)] = null);

(statearr_59132_59264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59131 === (2))){
var state_59130__$1 = state_59130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59130__$1,(4),jobs);
} else {
if((state_val_59131 === (3))){
var inst_59128 = (state_59130[(2)]);
var state_59130__$1 = state_59130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59130__$1,inst_59128);
} else {
if((state_val_59131 === (4))){
var inst_59120 = (state_59130[(2)]);
var inst_59121 = async.call(null,inst_59120);
var state_59130__$1 = state_59130;
if(cljs.core.truth_(inst_59121)){
var statearr_59133_59265 = state_59130__$1;
(statearr_59133_59265[(1)] = (5));

} else {
var statearr_59134_59266 = state_59130__$1;
(statearr_59134_59266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59131 === (5))){
var state_59130__$1 = state_59130;
var statearr_59135_59267 = state_59130__$1;
(statearr_59135_59267[(2)] = null);

(statearr_59135_59267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59131 === (6))){
var state_59130__$1 = state_59130;
var statearr_59136_59268 = state_59130__$1;
(statearr_59136_59268[(2)] = null);

(statearr_59136_59268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59131 === (7))){
var inst_59126 = (state_59130[(2)]);
var state_59130__$1 = state_59130;
var statearr_59137_59269 = state_59130__$1;
(statearr_59137_59269[(2)] = inst_59126);

(statearr_59137_59269[(1)] = (3));


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
});})(__59250,c__29155__auto___59263,G__59093_59251,G__59093_59252__$1,n__4666__auto___59249,jobs,results,process__$1,async))
;
return ((function (__59250,switch__29060__auto__,c__29155__auto___59263,G__59093_59251,G__59093_59252__$1,n__4666__auto___59249,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____0 = (function (){
var statearr_59138 = [null,null,null,null,null,null,null];
(statearr_59138[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__);

(statearr_59138[(1)] = (1));

return statearr_59138;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____1 = (function (state_59130){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_59130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e59139){if((e59139 instanceof Object)){
var ex__29064__auto__ = e59139;
var statearr_59140_59270 = state_59130;
(statearr_59140_59270[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59271 = state_59130;
state_59130 = G__59271;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__ = function(state_59130){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____1.call(this,state_59130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__;
})()
;})(__59250,switch__29060__auto__,c__29155__auto___59263,G__59093_59251,G__59093_59252__$1,n__4666__auto___59249,jobs,results,process__$1,async))
})();
var state__29157__auto__ = (function (){var statearr_59141 = f__29156__auto__.call(null);
(statearr_59141[(6)] = c__29155__auto___59263);

return statearr_59141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29157__auto__);
});})(__59250,c__29155__auto___59263,G__59093_59251,G__59093_59252__$1,n__4666__auto___59249,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59093_59252__$1)].join('')));

}

var G__59272 = (__59250 + (1));
__59250 = G__59272;
continue;
} else {
}
break;
}

var c__29155__auto___59273 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_59163){
var state_val_59164 = (state_59163[(1)]);
if((state_val_59164 === (7))){
var inst_59159 = (state_59163[(2)]);
var state_59163__$1 = state_59163;
var statearr_59165_59274 = state_59163__$1;
(statearr_59165_59274[(2)] = inst_59159);

(statearr_59165_59274[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59164 === (1))){
var state_59163__$1 = state_59163;
var statearr_59166_59275 = state_59163__$1;
(statearr_59166_59275[(2)] = null);

(statearr_59166_59275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59164 === (4))){
var inst_59144 = (state_59163[(7)]);
var inst_59144__$1 = (state_59163[(2)]);
var inst_59145 = (inst_59144__$1 == null);
var state_59163__$1 = (function (){var statearr_59167 = state_59163;
(statearr_59167[(7)] = inst_59144__$1);

return statearr_59167;
})();
if(cljs.core.truth_(inst_59145)){
var statearr_59168_59276 = state_59163__$1;
(statearr_59168_59276[(1)] = (5));

} else {
var statearr_59169_59277 = state_59163__$1;
(statearr_59169_59277[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59164 === (6))){
var inst_59149 = (state_59163[(8)]);
var inst_59144 = (state_59163[(7)]);
var inst_59149__$1 = cljs.core.async.chan.call(null,(1));
var inst_59150 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59151 = [inst_59144,inst_59149__$1];
var inst_59152 = (new cljs.core.PersistentVector(null,2,(5),inst_59150,inst_59151,null));
var state_59163__$1 = (function (){var statearr_59170 = state_59163;
(statearr_59170[(8)] = inst_59149__$1);

return statearr_59170;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59163__$1,(8),jobs,inst_59152);
} else {
if((state_val_59164 === (3))){
var inst_59161 = (state_59163[(2)]);
var state_59163__$1 = state_59163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59163__$1,inst_59161);
} else {
if((state_val_59164 === (2))){
var state_59163__$1 = state_59163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59163__$1,(4),from);
} else {
if((state_val_59164 === (9))){
var inst_59156 = (state_59163[(2)]);
var state_59163__$1 = (function (){var statearr_59171 = state_59163;
(statearr_59171[(9)] = inst_59156);

return statearr_59171;
})();
var statearr_59172_59278 = state_59163__$1;
(statearr_59172_59278[(2)] = null);

(statearr_59172_59278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59164 === (5))){
var inst_59147 = cljs.core.async.close_BANG_.call(null,jobs);
var state_59163__$1 = state_59163;
var statearr_59173_59279 = state_59163__$1;
(statearr_59173_59279[(2)] = inst_59147);

(statearr_59173_59279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59164 === (8))){
var inst_59149 = (state_59163[(8)]);
var inst_59154 = (state_59163[(2)]);
var state_59163__$1 = (function (){var statearr_59174 = state_59163;
(statearr_59174[(10)] = inst_59154);

return statearr_59174;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59163__$1,(9),results,inst_59149);
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
var cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____0 = (function (){
var statearr_59175 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59175[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__);

(statearr_59175[(1)] = (1));

return statearr_59175;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____1 = (function (state_59163){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_59163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e59176){if((e59176 instanceof Object)){
var ex__29064__auto__ = e59176;
var statearr_59177_59280 = state_59163;
(statearr_59177_59280[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59281 = state_59163;
state_59163 = G__59281;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__ = function(state_59163){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____1.call(this,state_59163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_59178 = f__29156__auto__.call(null);
(statearr_59178[(6)] = c__29155__auto___59273);

return statearr_59178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29157__auto__);
}));


var c__29155__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_59216){
var state_val_59217 = (state_59216[(1)]);
if((state_val_59217 === (7))){
var inst_59212 = (state_59216[(2)]);
var state_59216__$1 = state_59216;
var statearr_59218_59282 = state_59216__$1;
(statearr_59218_59282[(2)] = inst_59212);

(statearr_59218_59282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59217 === (20))){
var state_59216__$1 = state_59216;
var statearr_59219_59283 = state_59216__$1;
(statearr_59219_59283[(2)] = null);

(statearr_59219_59283[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59217 === (1))){
var state_59216__$1 = state_59216;
var statearr_59220_59284 = state_59216__$1;
(statearr_59220_59284[(2)] = null);

(statearr_59220_59284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59217 === (4))){
var inst_59181 = (state_59216[(7)]);
var inst_59181__$1 = (state_59216[(2)]);
var inst_59182 = (inst_59181__$1 == null);
var state_59216__$1 = (function (){var statearr_59221 = state_59216;
(statearr_59221[(7)] = inst_59181__$1);

return statearr_59221;
})();
if(cljs.core.truth_(inst_59182)){
var statearr_59222_59285 = state_59216__$1;
(statearr_59222_59285[(1)] = (5));

} else {
var statearr_59223_59286 = state_59216__$1;
(statearr_59223_59286[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59217 === (15))){
var inst_59194 = (state_59216[(8)]);
var state_59216__$1 = state_59216;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59216__$1,(18),to,inst_59194);
} else {
if((state_val_59217 === (21))){
var inst_59207 = (state_59216[(2)]);
var state_59216__$1 = state_59216;
var statearr_59224_59287 = state_59216__$1;
(statearr_59224_59287[(2)] = inst_59207);

(statearr_59224_59287[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59217 === (13))){
var inst_59209 = (state_59216[(2)]);
var state_59216__$1 = (function (){var statearr_59225 = state_59216;
(statearr_59225[(9)] = inst_59209);

return statearr_59225;
})();
var statearr_59226_59288 = state_59216__$1;
(statearr_59226_59288[(2)] = null);

(statearr_59226_59288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59217 === (6))){
var inst_59181 = (state_59216[(7)]);
var state_59216__$1 = state_59216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59216__$1,(11),inst_59181);
} else {
if((state_val_59217 === (17))){
var inst_59202 = (state_59216[(2)]);
var state_59216__$1 = state_59216;
if(cljs.core.truth_(inst_59202)){
var statearr_59227_59289 = state_59216__$1;
(statearr_59227_59289[(1)] = (19));

} else {
var statearr_59228_59290 = state_59216__$1;
(statearr_59228_59290[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59217 === (3))){
var inst_59214 = (state_59216[(2)]);
var state_59216__$1 = state_59216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59216__$1,inst_59214);
} else {
if((state_val_59217 === (12))){
var inst_59191 = (state_59216[(10)]);
var state_59216__$1 = state_59216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59216__$1,(14),inst_59191);
} else {
if((state_val_59217 === (2))){
var state_59216__$1 = state_59216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59216__$1,(4),results);
} else {
if((state_val_59217 === (19))){
var state_59216__$1 = state_59216;
var statearr_59229_59291 = state_59216__$1;
(statearr_59229_59291[(2)] = null);

(statearr_59229_59291[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59217 === (11))){
var inst_59191 = (state_59216[(2)]);
var state_59216__$1 = (function (){var statearr_59230 = state_59216;
(statearr_59230[(10)] = inst_59191);

return statearr_59230;
})();
var statearr_59231_59292 = state_59216__$1;
(statearr_59231_59292[(2)] = null);

(statearr_59231_59292[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59217 === (9))){
var state_59216__$1 = state_59216;
var statearr_59232_59293 = state_59216__$1;
(statearr_59232_59293[(2)] = null);

(statearr_59232_59293[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59217 === (5))){
var state_59216__$1 = state_59216;
if(cljs.core.truth_(close_QMARK_)){
var statearr_59233_59294 = state_59216__$1;
(statearr_59233_59294[(1)] = (8));

} else {
var statearr_59234_59295 = state_59216__$1;
(statearr_59234_59295[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59217 === (14))){
var inst_59194 = (state_59216[(8)]);
var inst_59194__$1 = (state_59216[(2)]);
var inst_59195 = (inst_59194__$1 == null);
var inst_59196 = cljs.core.not.call(null,inst_59195);
var state_59216__$1 = (function (){var statearr_59235 = state_59216;
(statearr_59235[(8)] = inst_59194__$1);

return statearr_59235;
})();
if(inst_59196){
var statearr_59236_59296 = state_59216__$1;
(statearr_59236_59296[(1)] = (15));

} else {
var statearr_59237_59297 = state_59216__$1;
(statearr_59237_59297[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59217 === (16))){
var state_59216__$1 = state_59216;
var statearr_59238_59298 = state_59216__$1;
(statearr_59238_59298[(2)] = false);

(statearr_59238_59298[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59217 === (10))){
var inst_59188 = (state_59216[(2)]);
var state_59216__$1 = state_59216;
var statearr_59239_59299 = state_59216__$1;
(statearr_59239_59299[(2)] = inst_59188);

(statearr_59239_59299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59217 === (18))){
var inst_59199 = (state_59216[(2)]);
var state_59216__$1 = state_59216;
var statearr_59240_59300 = state_59216__$1;
(statearr_59240_59300[(2)] = inst_59199);

(statearr_59240_59300[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59217 === (8))){
var inst_59185 = cljs.core.async.close_BANG_.call(null,to);
var state_59216__$1 = state_59216;
var statearr_59241_59301 = state_59216__$1;
(statearr_59241_59301[(2)] = inst_59185);

(statearr_59241_59301[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____0 = (function (){
var statearr_59242 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59242[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__);

(statearr_59242[(1)] = (1));

return statearr_59242;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____1 = (function (state_59216){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_59216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e59243){if((e59243 instanceof Object)){
var ex__29064__auto__ = e59243;
var statearr_59244_59302 = state_59216;
(statearr_59244_59302[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59303 = state_59216;
state_59216 = G__59303;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__ = function(state_59216){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____1.call(this,state_59216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_59245 = f__29156__auto__.call(null);
(statearr_59245[(6)] = c__29155__auto__);

return statearr_59245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29157__auto__);
}));

return c__29155__auto__;
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
var G__59305 = arguments.length;
switch (G__59305) {
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
var G__59308 = arguments.length;
switch (G__59308) {
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
var G__59311 = arguments.length;
switch (G__59311) {
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
var c__29155__auto___59360 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_59337){
var state_val_59338 = (state_59337[(1)]);
if((state_val_59338 === (7))){
var inst_59333 = (state_59337[(2)]);
var state_59337__$1 = state_59337;
var statearr_59339_59361 = state_59337__$1;
(statearr_59339_59361[(2)] = inst_59333);

(statearr_59339_59361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59338 === (1))){
var state_59337__$1 = state_59337;
var statearr_59340_59362 = state_59337__$1;
(statearr_59340_59362[(2)] = null);

(statearr_59340_59362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59338 === (4))){
var inst_59314 = (state_59337[(7)]);
var inst_59314__$1 = (state_59337[(2)]);
var inst_59315 = (inst_59314__$1 == null);
var state_59337__$1 = (function (){var statearr_59341 = state_59337;
(statearr_59341[(7)] = inst_59314__$1);

return statearr_59341;
})();
if(cljs.core.truth_(inst_59315)){
var statearr_59342_59363 = state_59337__$1;
(statearr_59342_59363[(1)] = (5));

} else {
var statearr_59343_59364 = state_59337__$1;
(statearr_59343_59364[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59338 === (13))){
var state_59337__$1 = state_59337;
var statearr_59344_59365 = state_59337__$1;
(statearr_59344_59365[(2)] = null);

(statearr_59344_59365[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59338 === (6))){
var inst_59314 = (state_59337[(7)]);
var inst_59320 = p.call(null,inst_59314);
var state_59337__$1 = state_59337;
if(cljs.core.truth_(inst_59320)){
var statearr_59345_59366 = state_59337__$1;
(statearr_59345_59366[(1)] = (9));

} else {
var statearr_59346_59367 = state_59337__$1;
(statearr_59346_59367[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59338 === (3))){
var inst_59335 = (state_59337[(2)]);
var state_59337__$1 = state_59337;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59337__$1,inst_59335);
} else {
if((state_val_59338 === (12))){
var state_59337__$1 = state_59337;
var statearr_59347_59368 = state_59337__$1;
(statearr_59347_59368[(2)] = null);

(statearr_59347_59368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59338 === (2))){
var state_59337__$1 = state_59337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59337__$1,(4),ch);
} else {
if((state_val_59338 === (11))){
var inst_59314 = (state_59337[(7)]);
var inst_59324 = (state_59337[(2)]);
var state_59337__$1 = state_59337;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59337__$1,(8),inst_59324,inst_59314);
} else {
if((state_val_59338 === (9))){
var state_59337__$1 = state_59337;
var statearr_59348_59369 = state_59337__$1;
(statearr_59348_59369[(2)] = tc);

(statearr_59348_59369[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59338 === (5))){
var inst_59317 = cljs.core.async.close_BANG_.call(null,tc);
var inst_59318 = cljs.core.async.close_BANG_.call(null,fc);
var state_59337__$1 = (function (){var statearr_59349 = state_59337;
(statearr_59349[(8)] = inst_59317);

return statearr_59349;
})();
var statearr_59350_59370 = state_59337__$1;
(statearr_59350_59370[(2)] = inst_59318);

(statearr_59350_59370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59338 === (14))){
var inst_59331 = (state_59337[(2)]);
var state_59337__$1 = state_59337;
var statearr_59351_59371 = state_59337__$1;
(statearr_59351_59371[(2)] = inst_59331);

(statearr_59351_59371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59338 === (10))){
var state_59337__$1 = state_59337;
var statearr_59352_59372 = state_59337__$1;
(statearr_59352_59372[(2)] = fc);

(statearr_59352_59372[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59338 === (8))){
var inst_59326 = (state_59337[(2)]);
var state_59337__$1 = state_59337;
if(cljs.core.truth_(inst_59326)){
var statearr_59353_59373 = state_59337__$1;
(statearr_59353_59373[(1)] = (12));

} else {
var statearr_59354_59374 = state_59337__$1;
(statearr_59354_59374[(1)] = (13));

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
var cljs$core$async$state_machine__29061__auto__ = null;
var cljs$core$async$state_machine__29061__auto____0 = (function (){
var statearr_59355 = [null,null,null,null,null,null,null,null,null];
(statearr_59355[(0)] = cljs$core$async$state_machine__29061__auto__);

(statearr_59355[(1)] = (1));

return statearr_59355;
});
var cljs$core$async$state_machine__29061__auto____1 = (function (state_59337){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_59337);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e59356){if((e59356 instanceof Object)){
var ex__29064__auto__ = e59356;
var statearr_59357_59375 = state_59337;
(statearr_59357_59375[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59376 = state_59337;
state_59337 = G__59376;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
cljs$core$async$state_machine__29061__auto__ = function(state_59337){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29061__auto____1.call(this,state_59337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29061__auto____0;
cljs$core$async$state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29061__auto____1;
return cljs$core$async$state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_59358 = f__29156__auto__.call(null);
(statearr_59358[(6)] = c__29155__auto___59360);

return statearr_59358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29157__auto__);
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
var c__29155__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_59397){
var state_val_59398 = (state_59397[(1)]);
if((state_val_59398 === (7))){
var inst_59393 = (state_59397[(2)]);
var state_59397__$1 = state_59397;
var statearr_59399_59417 = state_59397__$1;
(statearr_59399_59417[(2)] = inst_59393);

(statearr_59399_59417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59398 === (1))){
var inst_59377 = init;
var state_59397__$1 = (function (){var statearr_59400 = state_59397;
(statearr_59400[(7)] = inst_59377);

return statearr_59400;
})();
var statearr_59401_59418 = state_59397__$1;
(statearr_59401_59418[(2)] = null);

(statearr_59401_59418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59398 === (4))){
var inst_59380 = (state_59397[(8)]);
var inst_59380__$1 = (state_59397[(2)]);
var inst_59381 = (inst_59380__$1 == null);
var state_59397__$1 = (function (){var statearr_59402 = state_59397;
(statearr_59402[(8)] = inst_59380__$1);

return statearr_59402;
})();
if(cljs.core.truth_(inst_59381)){
var statearr_59403_59419 = state_59397__$1;
(statearr_59403_59419[(1)] = (5));

} else {
var statearr_59404_59420 = state_59397__$1;
(statearr_59404_59420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59398 === (6))){
var inst_59384 = (state_59397[(9)]);
var inst_59377 = (state_59397[(7)]);
var inst_59380 = (state_59397[(8)]);
var inst_59384__$1 = f.call(null,inst_59377,inst_59380);
var inst_59385 = cljs.core.reduced_QMARK_.call(null,inst_59384__$1);
var state_59397__$1 = (function (){var statearr_59405 = state_59397;
(statearr_59405[(9)] = inst_59384__$1);

return statearr_59405;
})();
if(inst_59385){
var statearr_59406_59421 = state_59397__$1;
(statearr_59406_59421[(1)] = (8));

} else {
var statearr_59407_59422 = state_59397__$1;
(statearr_59407_59422[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59398 === (3))){
var inst_59395 = (state_59397[(2)]);
var state_59397__$1 = state_59397;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59397__$1,inst_59395);
} else {
if((state_val_59398 === (2))){
var state_59397__$1 = state_59397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59397__$1,(4),ch);
} else {
if((state_val_59398 === (9))){
var inst_59384 = (state_59397[(9)]);
var inst_59377 = inst_59384;
var state_59397__$1 = (function (){var statearr_59408 = state_59397;
(statearr_59408[(7)] = inst_59377);

return statearr_59408;
})();
var statearr_59409_59423 = state_59397__$1;
(statearr_59409_59423[(2)] = null);

(statearr_59409_59423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59398 === (5))){
var inst_59377 = (state_59397[(7)]);
var state_59397__$1 = state_59397;
var statearr_59410_59424 = state_59397__$1;
(statearr_59410_59424[(2)] = inst_59377);

(statearr_59410_59424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59398 === (10))){
var inst_59391 = (state_59397[(2)]);
var state_59397__$1 = state_59397;
var statearr_59411_59425 = state_59397__$1;
(statearr_59411_59425[(2)] = inst_59391);

(statearr_59411_59425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59398 === (8))){
var inst_59384 = (state_59397[(9)]);
var inst_59387 = cljs.core.deref.call(null,inst_59384);
var state_59397__$1 = state_59397;
var statearr_59412_59426 = state_59397__$1;
(statearr_59412_59426[(2)] = inst_59387);

(statearr_59412_59426[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__29061__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29061__auto____0 = (function (){
var statearr_59413 = [null,null,null,null,null,null,null,null,null,null];
(statearr_59413[(0)] = cljs$core$async$reduce_$_state_machine__29061__auto__);

(statearr_59413[(1)] = (1));

return statearr_59413;
});
var cljs$core$async$reduce_$_state_machine__29061__auto____1 = (function (state_59397){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_59397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e59414){if((e59414 instanceof Object)){
var ex__29064__auto__ = e59414;
var statearr_59415_59427 = state_59397;
(statearr_59415_59427[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59428 = state_59397;
state_59397 = G__59428;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29061__auto__ = function(state_59397){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29061__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29061__auto____1.call(this,state_59397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29061__auto____0;
cljs$core$async$reduce_$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29061__auto____1;
return cljs$core$async$reduce_$_state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_59416 = f__29156__auto__.call(null);
(statearr_59416[(6)] = c__29155__auto__);

return statearr_59416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29157__auto__);
}));

return c__29155__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__29155__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_59434){
var state_val_59435 = (state_59434[(1)]);
if((state_val_59435 === (1))){
var inst_59429 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_59434__$1 = state_59434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59434__$1,(2),inst_59429);
} else {
if((state_val_59435 === (2))){
var inst_59431 = (state_59434[(2)]);
var inst_59432 = f__$1.call(null,inst_59431);
var state_59434__$1 = state_59434;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59434__$1,inst_59432);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29061__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29061__auto____0 = (function (){
var statearr_59436 = [null,null,null,null,null,null,null];
(statearr_59436[(0)] = cljs$core$async$transduce_$_state_machine__29061__auto__);

(statearr_59436[(1)] = (1));

return statearr_59436;
});
var cljs$core$async$transduce_$_state_machine__29061__auto____1 = (function (state_59434){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_59434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e59437){if((e59437 instanceof Object)){
var ex__29064__auto__ = e59437;
var statearr_59438_59440 = state_59434;
(statearr_59438_59440[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59441 = state_59434;
state_59434 = G__59441;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29061__auto__ = function(state_59434){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29061__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29061__auto____1.call(this,state_59434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29061__auto____0;
cljs$core$async$transduce_$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29061__auto____1;
return cljs$core$async$transduce_$_state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_59439 = f__29156__auto__.call(null);
(statearr_59439[(6)] = c__29155__auto__);

return statearr_59439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29157__auto__);
}));

return c__29155__auto__;
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
var G__59443 = arguments.length;
switch (G__59443) {
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
var c__29155__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_59468){
var state_val_59469 = (state_59468[(1)]);
if((state_val_59469 === (7))){
var inst_59450 = (state_59468[(2)]);
var state_59468__$1 = state_59468;
var statearr_59470_59491 = state_59468__$1;
(statearr_59470_59491[(2)] = inst_59450);

(statearr_59470_59491[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59469 === (1))){
var inst_59444 = cljs.core.seq.call(null,coll);
var inst_59445 = inst_59444;
var state_59468__$1 = (function (){var statearr_59471 = state_59468;
(statearr_59471[(7)] = inst_59445);

return statearr_59471;
})();
var statearr_59472_59492 = state_59468__$1;
(statearr_59472_59492[(2)] = null);

(statearr_59472_59492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59469 === (4))){
var inst_59445 = (state_59468[(7)]);
var inst_59448 = cljs.core.first.call(null,inst_59445);
var state_59468__$1 = state_59468;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59468__$1,(7),ch,inst_59448);
} else {
if((state_val_59469 === (13))){
var inst_59462 = (state_59468[(2)]);
var state_59468__$1 = state_59468;
var statearr_59473_59493 = state_59468__$1;
(statearr_59473_59493[(2)] = inst_59462);

(statearr_59473_59493[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59469 === (6))){
var inst_59453 = (state_59468[(2)]);
var state_59468__$1 = state_59468;
if(cljs.core.truth_(inst_59453)){
var statearr_59474_59494 = state_59468__$1;
(statearr_59474_59494[(1)] = (8));

} else {
var statearr_59475_59495 = state_59468__$1;
(statearr_59475_59495[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59469 === (3))){
var inst_59466 = (state_59468[(2)]);
var state_59468__$1 = state_59468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59468__$1,inst_59466);
} else {
if((state_val_59469 === (12))){
var state_59468__$1 = state_59468;
var statearr_59476_59496 = state_59468__$1;
(statearr_59476_59496[(2)] = null);

(statearr_59476_59496[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59469 === (2))){
var inst_59445 = (state_59468[(7)]);
var state_59468__$1 = state_59468;
if(cljs.core.truth_(inst_59445)){
var statearr_59477_59497 = state_59468__$1;
(statearr_59477_59497[(1)] = (4));

} else {
var statearr_59478_59498 = state_59468__$1;
(statearr_59478_59498[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59469 === (11))){
var inst_59459 = cljs.core.async.close_BANG_.call(null,ch);
var state_59468__$1 = state_59468;
var statearr_59479_59499 = state_59468__$1;
(statearr_59479_59499[(2)] = inst_59459);

(statearr_59479_59499[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59469 === (9))){
var state_59468__$1 = state_59468;
if(cljs.core.truth_(close_QMARK_)){
var statearr_59480_59500 = state_59468__$1;
(statearr_59480_59500[(1)] = (11));

} else {
var statearr_59481_59501 = state_59468__$1;
(statearr_59481_59501[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59469 === (5))){
var inst_59445 = (state_59468[(7)]);
var state_59468__$1 = state_59468;
var statearr_59482_59502 = state_59468__$1;
(statearr_59482_59502[(2)] = inst_59445);

(statearr_59482_59502[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59469 === (10))){
var inst_59464 = (state_59468[(2)]);
var state_59468__$1 = state_59468;
var statearr_59483_59503 = state_59468__$1;
(statearr_59483_59503[(2)] = inst_59464);

(statearr_59483_59503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59469 === (8))){
var inst_59445 = (state_59468[(7)]);
var inst_59455 = cljs.core.next.call(null,inst_59445);
var inst_59445__$1 = inst_59455;
var state_59468__$1 = (function (){var statearr_59484 = state_59468;
(statearr_59484[(7)] = inst_59445__$1);

return statearr_59484;
})();
var statearr_59485_59504 = state_59468__$1;
(statearr_59485_59504[(2)] = null);

(statearr_59485_59504[(1)] = (2));


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
var cljs$core$async$state_machine__29061__auto__ = null;
var cljs$core$async$state_machine__29061__auto____0 = (function (){
var statearr_59486 = [null,null,null,null,null,null,null,null];
(statearr_59486[(0)] = cljs$core$async$state_machine__29061__auto__);

(statearr_59486[(1)] = (1));

return statearr_59486;
});
var cljs$core$async$state_machine__29061__auto____1 = (function (state_59468){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_59468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e59487){if((e59487 instanceof Object)){
var ex__29064__auto__ = e59487;
var statearr_59488_59505 = state_59468;
(statearr_59488_59505[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59506 = state_59468;
state_59468 = G__59506;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
cljs$core$async$state_machine__29061__auto__ = function(state_59468){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29061__auto____1.call(this,state_59468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29061__auto____0;
cljs$core$async$state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29061__auto____1;
return cljs$core$async$state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_59489 = f__29156__auto__.call(null);
(statearr_59489[(6)] = c__29155__auto__);

return statearr_59489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29157__auto__);
}));

return c__29155__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59507 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59507 = (function (ch,cs,meta59508){
this.ch = ch;
this.cs = cs;
this.meta59508 = meta59508;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59509,meta59508__$1){
var self__ = this;
var _59509__$1 = this;
return (new cljs.core.async.t_cljs$core$async59507(self__.ch,self__.cs,meta59508__$1));
}));

(cljs.core.async.t_cljs$core$async59507.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59509){
var self__ = this;
var _59509__$1 = this;
return self__.meta59508;
}));

(cljs.core.async.t_cljs$core$async59507.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59507.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async59507.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59507.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async59507.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async59507.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async59507.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta59508","meta59508",-568072719,null)], null);
}));

(cljs.core.async.t_cljs$core$async59507.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59507.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59507");

(cljs.core.async.t_cljs$core$async59507.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async59507");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59507.
 */
cljs.core.async.__GT_t_cljs$core$async59507 = (function cljs$core$async$mult_$___GT_t_cljs$core$async59507(ch__$1,cs__$1,meta59508){
return (new cljs.core.async.t_cljs$core$async59507(ch__$1,cs__$1,meta59508));
});

}

return (new cljs.core.async.t_cljs$core$async59507(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__29155__auto___59729 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_59644){
var state_val_59645 = (state_59644[(1)]);
if((state_val_59645 === (7))){
var inst_59640 = (state_59644[(2)]);
var state_59644__$1 = state_59644;
var statearr_59646_59730 = state_59644__$1;
(statearr_59646_59730[(2)] = inst_59640);

(statearr_59646_59730[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (20))){
var inst_59543 = (state_59644[(7)]);
var inst_59555 = cljs.core.first.call(null,inst_59543);
var inst_59556 = cljs.core.nth.call(null,inst_59555,(0),null);
var inst_59557 = cljs.core.nth.call(null,inst_59555,(1),null);
var state_59644__$1 = (function (){var statearr_59647 = state_59644;
(statearr_59647[(8)] = inst_59556);

return statearr_59647;
})();
if(cljs.core.truth_(inst_59557)){
var statearr_59648_59731 = state_59644__$1;
(statearr_59648_59731[(1)] = (22));

} else {
var statearr_59649_59732 = state_59644__$1;
(statearr_59649_59732[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (27))){
var inst_59592 = (state_59644[(9)]);
var inst_59585 = (state_59644[(10)]);
var inst_59587 = (state_59644[(11)]);
var inst_59512 = (state_59644[(12)]);
var inst_59592__$1 = cljs.core._nth.call(null,inst_59585,inst_59587);
var inst_59593 = cljs.core.async.put_BANG_.call(null,inst_59592__$1,inst_59512,done);
var state_59644__$1 = (function (){var statearr_59650 = state_59644;
(statearr_59650[(9)] = inst_59592__$1);

return statearr_59650;
})();
if(cljs.core.truth_(inst_59593)){
var statearr_59651_59733 = state_59644__$1;
(statearr_59651_59733[(1)] = (30));

} else {
var statearr_59652_59734 = state_59644__$1;
(statearr_59652_59734[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (1))){
var state_59644__$1 = state_59644;
var statearr_59653_59735 = state_59644__$1;
(statearr_59653_59735[(2)] = null);

(statearr_59653_59735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (24))){
var inst_59543 = (state_59644[(7)]);
var inst_59562 = (state_59644[(2)]);
var inst_59563 = cljs.core.next.call(null,inst_59543);
var inst_59521 = inst_59563;
var inst_59522 = null;
var inst_59523 = (0);
var inst_59524 = (0);
var state_59644__$1 = (function (){var statearr_59654 = state_59644;
(statearr_59654[(13)] = inst_59524);

(statearr_59654[(14)] = inst_59562);

(statearr_59654[(15)] = inst_59523);

(statearr_59654[(16)] = inst_59521);

(statearr_59654[(17)] = inst_59522);

return statearr_59654;
})();
var statearr_59655_59736 = state_59644__$1;
(statearr_59655_59736[(2)] = null);

(statearr_59655_59736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (39))){
var state_59644__$1 = state_59644;
var statearr_59659_59737 = state_59644__$1;
(statearr_59659_59737[(2)] = null);

(statearr_59659_59737[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (4))){
var inst_59512 = (state_59644[(12)]);
var inst_59512__$1 = (state_59644[(2)]);
var inst_59513 = (inst_59512__$1 == null);
var state_59644__$1 = (function (){var statearr_59660 = state_59644;
(statearr_59660[(12)] = inst_59512__$1);

return statearr_59660;
})();
if(cljs.core.truth_(inst_59513)){
var statearr_59661_59738 = state_59644__$1;
(statearr_59661_59738[(1)] = (5));

} else {
var statearr_59662_59739 = state_59644__$1;
(statearr_59662_59739[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (15))){
var inst_59524 = (state_59644[(13)]);
var inst_59523 = (state_59644[(15)]);
var inst_59521 = (state_59644[(16)]);
var inst_59522 = (state_59644[(17)]);
var inst_59539 = (state_59644[(2)]);
var inst_59540 = (inst_59524 + (1));
var tmp59656 = inst_59523;
var tmp59657 = inst_59521;
var tmp59658 = inst_59522;
var inst_59521__$1 = tmp59657;
var inst_59522__$1 = tmp59658;
var inst_59523__$1 = tmp59656;
var inst_59524__$1 = inst_59540;
var state_59644__$1 = (function (){var statearr_59663 = state_59644;
(statearr_59663[(13)] = inst_59524__$1);

(statearr_59663[(18)] = inst_59539);

(statearr_59663[(15)] = inst_59523__$1);

(statearr_59663[(16)] = inst_59521__$1);

(statearr_59663[(17)] = inst_59522__$1);

return statearr_59663;
})();
var statearr_59664_59740 = state_59644__$1;
(statearr_59664_59740[(2)] = null);

(statearr_59664_59740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (21))){
var inst_59566 = (state_59644[(2)]);
var state_59644__$1 = state_59644;
var statearr_59668_59741 = state_59644__$1;
(statearr_59668_59741[(2)] = inst_59566);

(statearr_59668_59741[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (31))){
var inst_59592 = (state_59644[(9)]);
var inst_59596 = done.call(null,null);
var inst_59597 = cljs.core.async.untap_STAR_.call(null,m,inst_59592);
var state_59644__$1 = (function (){var statearr_59669 = state_59644;
(statearr_59669[(19)] = inst_59596);

return statearr_59669;
})();
var statearr_59670_59742 = state_59644__$1;
(statearr_59670_59742[(2)] = inst_59597);

(statearr_59670_59742[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (32))){
var inst_59584 = (state_59644[(20)]);
var inst_59586 = (state_59644[(21)]);
var inst_59585 = (state_59644[(10)]);
var inst_59587 = (state_59644[(11)]);
var inst_59599 = (state_59644[(2)]);
var inst_59600 = (inst_59587 + (1));
var tmp59665 = inst_59584;
var tmp59666 = inst_59586;
var tmp59667 = inst_59585;
var inst_59584__$1 = tmp59665;
var inst_59585__$1 = tmp59667;
var inst_59586__$1 = tmp59666;
var inst_59587__$1 = inst_59600;
var state_59644__$1 = (function (){var statearr_59671 = state_59644;
(statearr_59671[(22)] = inst_59599);

(statearr_59671[(20)] = inst_59584__$1);

(statearr_59671[(21)] = inst_59586__$1);

(statearr_59671[(10)] = inst_59585__$1);

(statearr_59671[(11)] = inst_59587__$1);

return statearr_59671;
})();
var statearr_59672_59743 = state_59644__$1;
(statearr_59672_59743[(2)] = null);

(statearr_59672_59743[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (40))){
var inst_59612 = (state_59644[(23)]);
var inst_59616 = done.call(null,null);
var inst_59617 = cljs.core.async.untap_STAR_.call(null,m,inst_59612);
var state_59644__$1 = (function (){var statearr_59673 = state_59644;
(statearr_59673[(24)] = inst_59616);

return statearr_59673;
})();
var statearr_59674_59744 = state_59644__$1;
(statearr_59674_59744[(2)] = inst_59617);

(statearr_59674_59744[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (33))){
var inst_59603 = (state_59644[(25)]);
var inst_59605 = cljs.core.chunked_seq_QMARK_.call(null,inst_59603);
var state_59644__$1 = state_59644;
if(inst_59605){
var statearr_59675_59745 = state_59644__$1;
(statearr_59675_59745[(1)] = (36));

} else {
var statearr_59676_59746 = state_59644__$1;
(statearr_59676_59746[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (13))){
var inst_59533 = (state_59644[(26)]);
var inst_59536 = cljs.core.async.close_BANG_.call(null,inst_59533);
var state_59644__$1 = state_59644;
var statearr_59677_59747 = state_59644__$1;
(statearr_59677_59747[(2)] = inst_59536);

(statearr_59677_59747[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (22))){
var inst_59556 = (state_59644[(8)]);
var inst_59559 = cljs.core.async.close_BANG_.call(null,inst_59556);
var state_59644__$1 = state_59644;
var statearr_59678_59748 = state_59644__$1;
(statearr_59678_59748[(2)] = inst_59559);

(statearr_59678_59748[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (36))){
var inst_59603 = (state_59644[(25)]);
var inst_59607 = cljs.core.chunk_first.call(null,inst_59603);
var inst_59608 = cljs.core.chunk_rest.call(null,inst_59603);
var inst_59609 = cljs.core.count.call(null,inst_59607);
var inst_59584 = inst_59608;
var inst_59585 = inst_59607;
var inst_59586 = inst_59609;
var inst_59587 = (0);
var state_59644__$1 = (function (){var statearr_59679 = state_59644;
(statearr_59679[(20)] = inst_59584);

(statearr_59679[(21)] = inst_59586);

(statearr_59679[(10)] = inst_59585);

(statearr_59679[(11)] = inst_59587);

return statearr_59679;
})();
var statearr_59680_59749 = state_59644__$1;
(statearr_59680_59749[(2)] = null);

(statearr_59680_59749[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (41))){
var inst_59603 = (state_59644[(25)]);
var inst_59619 = (state_59644[(2)]);
var inst_59620 = cljs.core.next.call(null,inst_59603);
var inst_59584 = inst_59620;
var inst_59585 = null;
var inst_59586 = (0);
var inst_59587 = (0);
var state_59644__$1 = (function (){var statearr_59681 = state_59644;
(statearr_59681[(20)] = inst_59584);

(statearr_59681[(21)] = inst_59586);

(statearr_59681[(10)] = inst_59585);

(statearr_59681[(27)] = inst_59619);

(statearr_59681[(11)] = inst_59587);

return statearr_59681;
})();
var statearr_59682_59750 = state_59644__$1;
(statearr_59682_59750[(2)] = null);

(statearr_59682_59750[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (43))){
var state_59644__$1 = state_59644;
var statearr_59683_59751 = state_59644__$1;
(statearr_59683_59751[(2)] = null);

(statearr_59683_59751[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (29))){
var inst_59628 = (state_59644[(2)]);
var state_59644__$1 = state_59644;
var statearr_59684_59752 = state_59644__$1;
(statearr_59684_59752[(2)] = inst_59628);

(statearr_59684_59752[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (44))){
var inst_59637 = (state_59644[(2)]);
var state_59644__$1 = (function (){var statearr_59685 = state_59644;
(statearr_59685[(28)] = inst_59637);

return statearr_59685;
})();
var statearr_59686_59753 = state_59644__$1;
(statearr_59686_59753[(2)] = null);

(statearr_59686_59753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (6))){
var inst_59576 = (state_59644[(29)]);
var inst_59575 = cljs.core.deref.call(null,cs);
var inst_59576__$1 = cljs.core.keys.call(null,inst_59575);
var inst_59577 = cljs.core.count.call(null,inst_59576__$1);
var inst_59578 = cljs.core.reset_BANG_.call(null,dctr,inst_59577);
var inst_59583 = cljs.core.seq.call(null,inst_59576__$1);
var inst_59584 = inst_59583;
var inst_59585 = null;
var inst_59586 = (0);
var inst_59587 = (0);
var state_59644__$1 = (function (){var statearr_59687 = state_59644;
(statearr_59687[(20)] = inst_59584);

(statearr_59687[(29)] = inst_59576__$1);

(statearr_59687[(21)] = inst_59586);

(statearr_59687[(10)] = inst_59585);

(statearr_59687[(30)] = inst_59578);

(statearr_59687[(11)] = inst_59587);

return statearr_59687;
})();
var statearr_59688_59754 = state_59644__$1;
(statearr_59688_59754[(2)] = null);

(statearr_59688_59754[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (28))){
var inst_59584 = (state_59644[(20)]);
var inst_59603 = (state_59644[(25)]);
var inst_59603__$1 = cljs.core.seq.call(null,inst_59584);
var state_59644__$1 = (function (){var statearr_59689 = state_59644;
(statearr_59689[(25)] = inst_59603__$1);

return statearr_59689;
})();
if(inst_59603__$1){
var statearr_59690_59755 = state_59644__$1;
(statearr_59690_59755[(1)] = (33));

} else {
var statearr_59691_59756 = state_59644__$1;
(statearr_59691_59756[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (25))){
var inst_59586 = (state_59644[(21)]);
var inst_59587 = (state_59644[(11)]);
var inst_59589 = (inst_59587 < inst_59586);
var inst_59590 = inst_59589;
var state_59644__$1 = state_59644;
if(cljs.core.truth_(inst_59590)){
var statearr_59692_59757 = state_59644__$1;
(statearr_59692_59757[(1)] = (27));

} else {
var statearr_59693_59758 = state_59644__$1;
(statearr_59693_59758[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (34))){
var state_59644__$1 = state_59644;
var statearr_59694_59759 = state_59644__$1;
(statearr_59694_59759[(2)] = null);

(statearr_59694_59759[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (17))){
var state_59644__$1 = state_59644;
var statearr_59695_59760 = state_59644__$1;
(statearr_59695_59760[(2)] = null);

(statearr_59695_59760[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (3))){
var inst_59642 = (state_59644[(2)]);
var state_59644__$1 = state_59644;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59644__$1,inst_59642);
} else {
if((state_val_59645 === (12))){
var inst_59571 = (state_59644[(2)]);
var state_59644__$1 = state_59644;
var statearr_59696_59761 = state_59644__$1;
(statearr_59696_59761[(2)] = inst_59571);

(statearr_59696_59761[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (2))){
var state_59644__$1 = state_59644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59644__$1,(4),ch);
} else {
if((state_val_59645 === (23))){
var state_59644__$1 = state_59644;
var statearr_59697_59762 = state_59644__$1;
(statearr_59697_59762[(2)] = null);

(statearr_59697_59762[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (35))){
var inst_59626 = (state_59644[(2)]);
var state_59644__$1 = state_59644;
var statearr_59698_59763 = state_59644__$1;
(statearr_59698_59763[(2)] = inst_59626);

(statearr_59698_59763[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (19))){
var inst_59543 = (state_59644[(7)]);
var inst_59547 = cljs.core.chunk_first.call(null,inst_59543);
var inst_59548 = cljs.core.chunk_rest.call(null,inst_59543);
var inst_59549 = cljs.core.count.call(null,inst_59547);
var inst_59521 = inst_59548;
var inst_59522 = inst_59547;
var inst_59523 = inst_59549;
var inst_59524 = (0);
var state_59644__$1 = (function (){var statearr_59699 = state_59644;
(statearr_59699[(13)] = inst_59524);

(statearr_59699[(15)] = inst_59523);

(statearr_59699[(16)] = inst_59521);

(statearr_59699[(17)] = inst_59522);

return statearr_59699;
})();
var statearr_59700_59764 = state_59644__$1;
(statearr_59700_59764[(2)] = null);

(statearr_59700_59764[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (11))){
var inst_59521 = (state_59644[(16)]);
var inst_59543 = (state_59644[(7)]);
var inst_59543__$1 = cljs.core.seq.call(null,inst_59521);
var state_59644__$1 = (function (){var statearr_59701 = state_59644;
(statearr_59701[(7)] = inst_59543__$1);

return statearr_59701;
})();
if(inst_59543__$1){
var statearr_59702_59765 = state_59644__$1;
(statearr_59702_59765[(1)] = (16));

} else {
var statearr_59703_59766 = state_59644__$1;
(statearr_59703_59766[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (9))){
var inst_59573 = (state_59644[(2)]);
var state_59644__$1 = state_59644;
var statearr_59704_59767 = state_59644__$1;
(statearr_59704_59767[(2)] = inst_59573);

(statearr_59704_59767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (5))){
var inst_59519 = cljs.core.deref.call(null,cs);
var inst_59520 = cljs.core.seq.call(null,inst_59519);
var inst_59521 = inst_59520;
var inst_59522 = null;
var inst_59523 = (0);
var inst_59524 = (0);
var state_59644__$1 = (function (){var statearr_59705 = state_59644;
(statearr_59705[(13)] = inst_59524);

(statearr_59705[(15)] = inst_59523);

(statearr_59705[(16)] = inst_59521);

(statearr_59705[(17)] = inst_59522);

return statearr_59705;
})();
var statearr_59706_59768 = state_59644__$1;
(statearr_59706_59768[(2)] = null);

(statearr_59706_59768[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (14))){
var state_59644__$1 = state_59644;
var statearr_59707_59769 = state_59644__$1;
(statearr_59707_59769[(2)] = null);

(statearr_59707_59769[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (45))){
var inst_59634 = (state_59644[(2)]);
var state_59644__$1 = state_59644;
var statearr_59708_59770 = state_59644__$1;
(statearr_59708_59770[(2)] = inst_59634);

(statearr_59708_59770[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (26))){
var inst_59576 = (state_59644[(29)]);
var inst_59630 = (state_59644[(2)]);
var inst_59631 = cljs.core.seq.call(null,inst_59576);
var state_59644__$1 = (function (){var statearr_59709 = state_59644;
(statearr_59709[(31)] = inst_59630);

return statearr_59709;
})();
if(inst_59631){
var statearr_59710_59771 = state_59644__$1;
(statearr_59710_59771[(1)] = (42));

} else {
var statearr_59711_59772 = state_59644__$1;
(statearr_59711_59772[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (16))){
var inst_59543 = (state_59644[(7)]);
var inst_59545 = cljs.core.chunked_seq_QMARK_.call(null,inst_59543);
var state_59644__$1 = state_59644;
if(inst_59545){
var statearr_59712_59773 = state_59644__$1;
(statearr_59712_59773[(1)] = (19));

} else {
var statearr_59713_59774 = state_59644__$1;
(statearr_59713_59774[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (38))){
var inst_59623 = (state_59644[(2)]);
var state_59644__$1 = state_59644;
var statearr_59714_59775 = state_59644__$1;
(statearr_59714_59775[(2)] = inst_59623);

(statearr_59714_59775[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (30))){
var state_59644__$1 = state_59644;
var statearr_59715_59776 = state_59644__$1;
(statearr_59715_59776[(2)] = null);

(statearr_59715_59776[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (10))){
var inst_59524 = (state_59644[(13)]);
var inst_59522 = (state_59644[(17)]);
var inst_59532 = cljs.core._nth.call(null,inst_59522,inst_59524);
var inst_59533 = cljs.core.nth.call(null,inst_59532,(0),null);
var inst_59534 = cljs.core.nth.call(null,inst_59532,(1),null);
var state_59644__$1 = (function (){var statearr_59716 = state_59644;
(statearr_59716[(26)] = inst_59533);

return statearr_59716;
})();
if(cljs.core.truth_(inst_59534)){
var statearr_59717_59777 = state_59644__$1;
(statearr_59717_59777[(1)] = (13));

} else {
var statearr_59718_59778 = state_59644__$1;
(statearr_59718_59778[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (18))){
var inst_59569 = (state_59644[(2)]);
var state_59644__$1 = state_59644;
var statearr_59719_59779 = state_59644__$1;
(statearr_59719_59779[(2)] = inst_59569);

(statearr_59719_59779[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (42))){
var state_59644__$1 = state_59644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59644__$1,(45),dchan);
} else {
if((state_val_59645 === (37))){
var inst_59612 = (state_59644[(23)]);
var inst_59603 = (state_59644[(25)]);
var inst_59512 = (state_59644[(12)]);
var inst_59612__$1 = cljs.core.first.call(null,inst_59603);
var inst_59613 = cljs.core.async.put_BANG_.call(null,inst_59612__$1,inst_59512,done);
var state_59644__$1 = (function (){var statearr_59720 = state_59644;
(statearr_59720[(23)] = inst_59612__$1);

return statearr_59720;
})();
if(cljs.core.truth_(inst_59613)){
var statearr_59721_59780 = state_59644__$1;
(statearr_59721_59780[(1)] = (39));

} else {
var statearr_59722_59781 = state_59644__$1;
(statearr_59722_59781[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59645 === (8))){
var inst_59524 = (state_59644[(13)]);
var inst_59523 = (state_59644[(15)]);
var inst_59526 = (inst_59524 < inst_59523);
var inst_59527 = inst_59526;
var state_59644__$1 = state_59644;
if(cljs.core.truth_(inst_59527)){
var statearr_59723_59782 = state_59644__$1;
(statearr_59723_59782[(1)] = (10));

} else {
var statearr_59724_59783 = state_59644__$1;
(statearr_59724_59783[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__29061__auto__ = null;
var cljs$core$async$mult_$_state_machine__29061__auto____0 = (function (){
var statearr_59725 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59725[(0)] = cljs$core$async$mult_$_state_machine__29061__auto__);

(statearr_59725[(1)] = (1));

return statearr_59725;
});
var cljs$core$async$mult_$_state_machine__29061__auto____1 = (function (state_59644){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_59644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e59726){if((e59726 instanceof Object)){
var ex__29064__auto__ = e59726;
var statearr_59727_59784 = state_59644;
(statearr_59727_59784[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59785 = state_59644;
state_59644 = G__59785;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29061__auto__ = function(state_59644){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29061__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29061__auto____1.call(this,state_59644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29061__auto____0;
cljs$core$async$mult_$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29061__auto____1;
return cljs$core$async$mult_$_state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_59728 = f__29156__auto__.call(null);
(statearr_59728[(6)] = c__29155__auto___59729);

return statearr_59728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29157__auto__);
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
var G__59787 = arguments.length;
switch (G__59787) {
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
var len__4789__auto___59799 = arguments.length;
var i__4790__auto___59800 = (0);
while(true){
if((i__4790__auto___59800 < len__4789__auto___59799)){
args__4795__auto__.push((arguments[i__4790__auto___59800]));

var G__59801 = (i__4790__auto___59800 + (1));
i__4790__auto___59800 = G__59801;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__59793){
var map__59794 = p__59793;
var map__59794__$1 = (((((!((map__59794 == null))))?(((((map__59794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59794):map__59794);
var opts = map__59794__$1;
var statearr_59796_59802 = state;
(statearr_59796_59802[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_59797_59803 = state;
(statearr_59797_59803[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_59798_59804 = state;
(statearr_59798_59804[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq59789){
var G__59790 = cljs.core.first.call(null,seq59789);
var seq59789__$1 = cljs.core.next.call(null,seq59789);
var G__59791 = cljs.core.first.call(null,seq59789__$1);
var seq59789__$2 = cljs.core.next.call(null,seq59789__$1);
var G__59792 = cljs.core.first.call(null,seq59789__$2);
var seq59789__$3 = cljs.core.next.call(null,seq59789__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59790,G__59791,G__59792,seq59789__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59805 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59805 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta59806){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta59806 = meta59806;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59807,meta59806__$1){
var self__ = this;
var _59807__$1 = this;
return (new cljs.core.async.t_cljs$core$async59805(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta59806__$1));
}));

(cljs.core.async.t_cljs$core$async59805.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59807){
var self__ = this;
var _59807__$1 = this;
return self__.meta59806;
}));

(cljs.core.async.t_cljs$core$async59805.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59805.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async59805.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59805.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async59805.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async59805.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async59805.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async59805.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async59805.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta59806","meta59806",166780916,null)], null);
}));

(cljs.core.async.t_cljs$core$async59805.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59805.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59805");

(cljs.core.async.t_cljs$core$async59805.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async59805");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59805.
 */
cljs.core.async.__GT_t_cljs$core$async59805 = (function cljs$core$async$mix_$___GT_t_cljs$core$async59805(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta59806){
return (new cljs.core.async.t_cljs$core$async59805(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta59806));
});

}

return (new cljs.core.async.t_cljs$core$async59805(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29155__auto___59969 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_59909){
var state_val_59910 = (state_59909[(1)]);
if((state_val_59910 === (7))){
var inst_59824 = (state_59909[(2)]);
var state_59909__$1 = state_59909;
var statearr_59911_59970 = state_59909__$1;
(statearr_59911_59970[(2)] = inst_59824);

(statearr_59911_59970[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59910 === (20))){
var inst_59836 = (state_59909[(7)]);
var state_59909__$1 = state_59909;
var statearr_59912_59971 = state_59909__$1;
(statearr_59912_59971[(2)] = inst_59836);

(statearr_59912_59971[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59910 === (27))){
var state_59909__$1 = state_59909;
var statearr_59913_59972 = state_59909__$1;
(statearr_59913_59972[(2)] = null);

(statearr_59913_59972[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59910 === (1))){
var inst_59811 = (state_59909[(8)]);
var inst_59811__$1 = calc_state.call(null);
var inst_59813 = (inst_59811__$1 == null);
var inst_59814 = cljs.core.not.call(null,inst_59813);
var state_59909__$1 = (function (){var statearr_59914 = state_59909;
(statearr_59914[(8)] = inst_59811__$1);

return statearr_59914;
})();
if(inst_59814){
var statearr_59915_59973 = state_59909__$1;
(statearr_59915_59973[(1)] = (2));

} else {
var statearr_59916_59974 = state_59909__$1;
(statearr_59916_59974[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59910 === (24))){
var inst_59869 = (state_59909[(9)]);
var inst_59883 = (state_59909[(10)]);
var inst_59860 = (state_59909[(11)]);
var inst_59883__$1 = inst_59860.call(null,inst_59869);
var state_59909__$1 = (function (){var statearr_59917 = state_59909;
(statearr_59917[(10)] = inst_59883__$1);

return statearr_59917;
})();
if(cljs.core.truth_(inst_59883__$1)){
var statearr_59918_59975 = state_59909__$1;
(statearr_59918_59975[(1)] = (29));

} else {
var statearr_59919_59976 = state_59909__$1;
(statearr_59919_59976[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59910 === (4))){
var inst_59827 = (state_59909[(2)]);
var state_59909__$1 = state_59909;
if(cljs.core.truth_(inst_59827)){
var statearr_59920_59977 = state_59909__$1;
(statearr_59920_59977[(1)] = (8));

} else {
var statearr_59921_59978 = state_59909__$1;
(statearr_59921_59978[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59910 === (15))){
var inst_59854 = (state_59909[(2)]);
var state_59909__$1 = state_59909;
if(cljs.core.truth_(inst_59854)){
var statearr_59922_59979 = state_59909__$1;
(statearr_59922_59979[(1)] = (19));

} else {
var statearr_59923_59980 = state_59909__$1;
(statearr_59923_59980[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59910 === (21))){
var inst_59859 = (state_59909[(12)]);
var inst_59859__$1 = (state_59909[(2)]);
var inst_59860 = cljs.core.get.call(null,inst_59859__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_59861 = cljs.core.get.call(null,inst_59859__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_59862 = cljs.core.get.call(null,inst_59859__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_59909__$1 = (function (){var statearr_59924 = state_59909;
(statearr_59924[(13)] = inst_59861);

(statearr_59924[(11)] = inst_59860);

(statearr_59924[(12)] = inst_59859__$1);

return statearr_59924;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_59909__$1,(22),inst_59862);
} else {
if((state_val_59910 === (31))){
var inst_59891 = (state_59909[(2)]);
var state_59909__$1 = state_59909;
if(cljs.core.truth_(inst_59891)){
var statearr_59925_59981 = state_59909__$1;
(statearr_59925_59981[(1)] = (32));

} else {
var statearr_59926_59982 = state_59909__$1;
(statearr_59926_59982[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59910 === (32))){
var inst_59868 = (state_59909[(14)]);
var state_59909__$1 = state_59909;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59909__$1,(35),out,inst_59868);
} else {
if((state_val_59910 === (33))){
var inst_59859 = (state_59909[(12)]);
var inst_59836 = inst_59859;
var state_59909__$1 = (function (){var statearr_59927 = state_59909;
(statearr_59927[(7)] = inst_59836);

return statearr_59927;
})();
var statearr_59928_59983 = state_59909__$1;
(statearr_59928_59983[(2)] = null);

(statearr_59928_59983[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59910 === (13))){
var inst_59836 = (state_59909[(7)]);
var inst_59843 = inst_59836.cljs$lang$protocol_mask$partition0$;
var inst_59844 = (inst_59843 & (64));
var inst_59845 = inst_59836.cljs$core$ISeq$;
var inst_59846 = (cljs.core.PROTOCOL_SENTINEL === inst_59845);
var inst_59847 = ((inst_59844) || (inst_59846));
var state_59909__$1 = state_59909;
if(cljs.core.truth_(inst_59847)){
var statearr_59929_59984 = state_59909__$1;
(statearr_59929_59984[(1)] = (16));

} else {
var statearr_59930_59985 = state_59909__$1;
(statearr_59930_59985[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59910 === (22))){
var inst_59869 = (state_59909[(9)]);
var inst_59868 = (state_59909[(14)]);
var inst_59867 = (state_59909[(2)]);
var inst_59868__$1 = cljs.core.nth.call(null,inst_59867,(0),null);
var inst_59869__$1 = cljs.core.nth.call(null,inst_59867,(1),null);
var inst_59870 = (inst_59868__$1 == null);
var inst_59871 = cljs.core._EQ_.call(null,inst_59869__$1,change);
var inst_59872 = ((inst_59870) || (inst_59871));
var state_59909__$1 = (function (){var statearr_59931 = state_59909;
(statearr_59931[(9)] = inst_59869__$1);

(statearr_59931[(14)] = inst_59868__$1);

return statearr_59931;
})();
if(cljs.core.truth_(inst_59872)){
var statearr_59932_59986 = state_59909__$1;
(statearr_59932_59986[(1)] = (23));

} else {
var statearr_59933_59987 = state_59909__$1;
(statearr_59933_59987[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59910 === (36))){
var inst_59859 = (state_59909[(12)]);
var inst_59836 = inst_59859;
var state_59909__$1 = (function (){var statearr_59934 = state_59909;
(statearr_59934[(7)] = inst_59836);

return statearr_59934;
})();
var statearr_59935_59988 = state_59909__$1;
(statearr_59935_59988[(2)] = null);

(statearr_59935_59988[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59910 === (29))){
var inst_59883 = (state_59909[(10)]);
var state_59909__$1 = state_59909;
var statearr_59936_59989 = state_59909__$1;
(statearr_59936_59989[(2)] = inst_59883);

(statearr_59936_59989[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59910 === (6))){
var state_59909__$1 = state_59909;
var statearr_59937_59990 = state_59909__$1;
(statearr_59937_59990[(2)] = false);

(statearr_59937_59990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59910 === (28))){
var inst_59879 = (state_59909[(2)]);
var inst_59880 = calc_state.call(null);
var inst_59836 = inst_59880;
var state_59909__$1 = (function (){var statearr_59938 = state_59909;
(statearr_59938[(7)] = inst_59836);

(statearr_59938[(15)] = inst_59879);

return statearr_59938;
})();
var statearr_59939_59991 = state_59909__$1;
(statearr_59939_59991[(2)] = null);

(statearr_59939_59991[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59910 === (25))){
var inst_59905 = (state_59909[(2)]);
var state_59909__$1 = state_59909;
var statearr_59940_59992 = state_59909__$1;
(statearr_59940_59992[(2)] = inst_59905);

(statearr_59940_59992[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59910 === (34))){
var inst_59903 = (state_59909[(2)]);
var state_59909__$1 = state_59909;
var statearr_59941_59993 = state_59909__$1;
(statearr_59941_59993[(2)] = inst_59903);

(statearr_59941_59993[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59910 === (17))){
var state_59909__$1 = state_59909;
var statearr_59942_59994 = state_59909__$1;
(statearr_59942_59994[(2)] = false);

(statearr_59942_59994[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59910 === (3))){
var state_59909__$1 = state_59909;
var statearr_59943_59995 = state_59909__$1;
(statearr_59943_59995[(2)] = false);

(statearr_59943_59995[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59910 === (12))){
var inst_59907 = (state_59909[(2)]);
var state_59909__$1 = state_59909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59909__$1,inst_59907);
} else {
if((state_val_59910 === (2))){
var inst_59811 = (state_59909[(8)]);
var inst_59816 = inst_59811.cljs$lang$protocol_mask$partition0$;
var inst_59817 = (inst_59816 & (64));
var inst_59818 = inst_59811.cljs$core$ISeq$;
var inst_59819 = (cljs.core.PROTOCOL_SENTINEL === inst_59818);
var inst_59820 = ((inst_59817) || (inst_59819));
var state_59909__$1 = state_59909;
if(cljs.core.truth_(inst_59820)){
var statearr_59944_59996 = state_59909__$1;
(statearr_59944_59996[(1)] = (5));

} else {
var statearr_59945_59997 = state_59909__$1;
(statearr_59945_59997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59910 === (23))){
var inst_59868 = (state_59909[(14)]);
var inst_59874 = (inst_59868 == null);
var state_59909__$1 = state_59909;
if(cljs.core.truth_(inst_59874)){
var statearr_59946_59998 = state_59909__$1;
(statearr_59946_59998[(1)] = (26));

} else {
var statearr_59947_59999 = state_59909__$1;
(statearr_59947_59999[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59910 === (35))){
var inst_59894 = (state_59909[(2)]);
var state_59909__$1 = state_59909;
if(cljs.core.truth_(inst_59894)){
var statearr_59948_60000 = state_59909__$1;
(statearr_59948_60000[(1)] = (36));

} else {
var statearr_59949_60001 = state_59909__$1;
(statearr_59949_60001[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59910 === (19))){
var inst_59836 = (state_59909[(7)]);
var inst_59856 = cljs.core.apply.call(null,cljs.core.hash_map,inst_59836);
var state_59909__$1 = state_59909;
var statearr_59950_60002 = state_59909__$1;
(statearr_59950_60002[(2)] = inst_59856);

(statearr_59950_60002[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59910 === (11))){
var inst_59836 = (state_59909[(7)]);
var inst_59840 = (inst_59836 == null);
var inst_59841 = cljs.core.not.call(null,inst_59840);
var state_59909__$1 = state_59909;
if(inst_59841){
var statearr_59951_60003 = state_59909__$1;
(statearr_59951_60003[(1)] = (13));

} else {
var statearr_59952_60004 = state_59909__$1;
(statearr_59952_60004[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59910 === (9))){
var inst_59811 = (state_59909[(8)]);
var state_59909__$1 = state_59909;
var statearr_59953_60005 = state_59909__$1;
(statearr_59953_60005[(2)] = inst_59811);

(statearr_59953_60005[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59910 === (5))){
var state_59909__$1 = state_59909;
var statearr_59954_60006 = state_59909__$1;
(statearr_59954_60006[(2)] = true);

(statearr_59954_60006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59910 === (14))){
var state_59909__$1 = state_59909;
var statearr_59955_60007 = state_59909__$1;
(statearr_59955_60007[(2)] = false);

(statearr_59955_60007[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59910 === (26))){
var inst_59869 = (state_59909[(9)]);
var inst_59876 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_59869);
var state_59909__$1 = state_59909;
var statearr_59956_60008 = state_59909__$1;
(statearr_59956_60008[(2)] = inst_59876);

(statearr_59956_60008[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59910 === (16))){
var state_59909__$1 = state_59909;
var statearr_59957_60009 = state_59909__$1;
(statearr_59957_60009[(2)] = true);

(statearr_59957_60009[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59910 === (38))){
var inst_59899 = (state_59909[(2)]);
var state_59909__$1 = state_59909;
var statearr_59958_60010 = state_59909__$1;
(statearr_59958_60010[(2)] = inst_59899);

(statearr_59958_60010[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59910 === (30))){
var inst_59869 = (state_59909[(9)]);
var inst_59861 = (state_59909[(13)]);
var inst_59860 = (state_59909[(11)]);
var inst_59886 = cljs.core.empty_QMARK_.call(null,inst_59860);
var inst_59887 = inst_59861.call(null,inst_59869);
var inst_59888 = cljs.core.not.call(null,inst_59887);
var inst_59889 = ((inst_59886) && (inst_59888));
var state_59909__$1 = state_59909;
var statearr_59959_60011 = state_59909__$1;
(statearr_59959_60011[(2)] = inst_59889);

(statearr_59959_60011[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59910 === (10))){
var inst_59811 = (state_59909[(8)]);
var inst_59832 = (state_59909[(2)]);
var inst_59833 = cljs.core.get.call(null,inst_59832,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_59834 = cljs.core.get.call(null,inst_59832,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_59835 = cljs.core.get.call(null,inst_59832,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_59836 = inst_59811;
var state_59909__$1 = (function (){var statearr_59960 = state_59909;
(statearr_59960[(16)] = inst_59834);

(statearr_59960[(17)] = inst_59833);

(statearr_59960[(18)] = inst_59835);

(statearr_59960[(7)] = inst_59836);

return statearr_59960;
})();
var statearr_59961_60012 = state_59909__$1;
(statearr_59961_60012[(2)] = null);

(statearr_59961_60012[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59910 === (18))){
var inst_59851 = (state_59909[(2)]);
var state_59909__$1 = state_59909;
var statearr_59962_60013 = state_59909__$1;
(statearr_59962_60013[(2)] = inst_59851);

(statearr_59962_60013[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59910 === (37))){
var state_59909__$1 = state_59909;
var statearr_59963_60014 = state_59909__$1;
(statearr_59963_60014[(2)] = null);

(statearr_59963_60014[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59910 === (8))){
var inst_59811 = (state_59909[(8)]);
var inst_59829 = cljs.core.apply.call(null,cljs.core.hash_map,inst_59811);
var state_59909__$1 = state_59909;
var statearr_59964_60015 = state_59909__$1;
(statearr_59964_60015[(2)] = inst_59829);

(statearr_59964_60015[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__29061__auto__ = null;
var cljs$core$async$mix_$_state_machine__29061__auto____0 = (function (){
var statearr_59965 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59965[(0)] = cljs$core$async$mix_$_state_machine__29061__auto__);

(statearr_59965[(1)] = (1));

return statearr_59965;
});
var cljs$core$async$mix_$_state_machine__29061__auto____1 = (function (state_59909){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_59909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e59966){if((e59966 instanceof Object)){
var ex__29064__auto__ = e59966;
var statearr_59967_60016 = state_59909;
(statearr_59967_60016[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60017 = state_59909;
state_59909 = G__60017;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29061__auto__ = function(state_59909){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29061__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29061__auto____1.call(this,state_59909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29061__auto____0;
cljs$core$async$mix_$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29061__auto____1;
return cljs$core$async$mix_$_state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_59968 = f__29156__auto__.call(null);
(statearr_59968[(6)] = c__29155__auto___59969);

return statearr_59968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29157__auto__);
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
var G__60019 = arguments.length;
switch (G__60019) {
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
var G__60023 = arguments.length;
switch (G__60023) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__60021_SHARP_){
if(cljs.core.truth_(p1__60021_SHARP_.call(null,topic))){
return p1__60021_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__60021_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60024 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60024 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta60025){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta60025 = meta60025;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async60024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60026,meta60025__$1){
var self__ = this;
var _60026__$1 = this;
return (new cljs.core.async.t_cljs$core$async60024(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta60025__$1));
}));

(cljs.core.async.t_cljs$core$async60024.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60026){
var self__ = this;
var _60026__$1 = this;
return self__.meta60025;
}));

(cljs.core.async.t_cljs$core$async60024.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60024.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async60024.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60024.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async60024.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async60024.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async60024.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async60024.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta60025","meta60025",-1817751699,null)], null);
}));

(cljs.core.async.t_cljs$core$async60024.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async60024.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60024");

(cljs.core.async.t_cljs$core$async60024.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async60024");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60024.
 */
cljs.core.async.__GT_t_cljs$core$async60024 = (function cljs$core$async$__GT_t_cljs$core$async60024(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta60025){
return (new cljs.core.async.t_cljs$core$async60024(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta60025));
});

}

return (new cljs.core.async.t_cljs$core$async60024(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29155__auto___60144 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_60098){
var state_val_60099 = (state_60098[(1)]);
if((state_val_60099 === (7))){
var inst_60094 = (state_60098[(2)]);
var state_60098__$1 = state_60098;
var statearr_60100_60145 = state_60098__$1;
(statearr_60100_60145[(2)] = inst_60094);

(statearr_60100_60145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60099 === (20))){
var state_60098__$1 = state_60098;
var statearr_60101_60146 = state_60098__$1;
(statearr_60101_60146[(2)] = null);

(statearr_60101_60146[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60099 === (1))){
var state_60098__$1 = state_60098;
var statearr_60102_60147 = state_60098__$1;
(statearr_60102_60147[(2)] = null);

(statearr_60102_60147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60099 === (24))){
var inst_60077 = (state_60098[(7)]);
var inst_60086 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_60077);
var state_60098__$1 = state_60098;
var statearr_60103_60148 = state_60098__$1;
(statearr_60103_60148[(2)] = inst_60086);

(statearr_60103_60148[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60099 === (4))){
var inst_60029 = (state_60098[(8)]);
var inst_60029__$1 = (state_60098[(2)]);
var inst_60030 = (inst_60029__$1 == null);
var state_60098__$1 = (function (){var statearr_60104 = state_60098;
(statearr_60104[(8)] = inst_60029__$1);

return statearr_60104;
})();
if(cljs.core.truth_(inst_60030)){
var statearr_60105_60149 = state_60098__$1;
(statearr_60105_60149[(1)] = (5));

} else {
var statearr_60106_60150 = state_60098__$1;
(statearr_60106_60150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60099 === (15))){
var inst_60071 = (state_60098[(2)]);
var state_60098__$1 = state_60098;
var statearr_60107_60151 = state_60098__$1;
(statearr_60107_60151[(2)] = inst_60071);

(statearr_60107_60151[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60099 === (21))){
var inst_60091 = (state_60098[(2)]);
var state_60098__$1 = (function (){var statearr_60108 = state_60098;
(statearr_60108[(9)] = inst_60091);

return statearr_60108;
})();
var statearr_60109_60152 = state_60098__$1;
(statearr_60109_60152[(2)] = null);

(statearr_60109_60152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60099 === (13))){
var inst_60053 = (state_60098[(10)]);
var inst_60055 = cljs.core.chunked_seq_QMARK_.call(null,inst_60053);
var state_60098__$1 = state_60098;
if(inst_60055){
var statearr_60110_60153 = state_60098__$1;
(statearr_60110_60153[(1)] = (16));

} else {
var statearr_60111_60154 = state_60098__$1;
(statearr_60111_60154[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60099 === (22))){
var inst_60083 = (state_60098[(2)]);
var state_60098__$1 = state_60098;
if(cljs.core.truth_(inst_60083)){
var statearr_60112_60155 = state_60098__$1;
(statearr_60112_60155[(1)] = (23));

} else {
var statearr_60113_60156 = state_60098__$1;
(statearr_60113_60156[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60099 === (6))){
var inst_60077 = (state_60098[(7)]);
var inst_60079 = (state_60098[(11)]);
var inst_60029 = (state_60098[(8)]);
var inst_60077__$1 = topic_fn.call(null,inst_60029);
var inst_60078 = cljs.core.deref.call(null,mults);
var inst_60079__$1 = cljs.core.get.call(null,inst_60078,inst_60077__$1);
var state_60098__$1 = (function (){var statearr_60114 = state_60098;
(statearr_60114[(7)] = inst_60077__$1);

(statearr_60114[(11)] = inst_60079__$1);

return statearr_60114;
})();
if(cljs.core.truth_(inst_60079__$1)){
var statearr_60115_60157 = state_60098__$1;
(statearr_60115_60157[(1)] = (19));

} else {
var statearr_60116_60158 = state_60098__$1;
(statearr_60116_60158[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60099 === (25))){
var inst_60088 = (state_60098[(2)]);
var state_60098__$1 = state_60098;
var statearr_60117_60159 = state_60098__$1;
(statearr_60117_60159[(2)] = inst_60088);

(statearr_60117_60159[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60099 === (17))){
var inst_60053 = (state_60098[(10)]);
var inst_60062 = cljs.core.first.call(null,inst_60053);
var inst_60063 = cljs.core.async.muxch_STAR_.call(null,inst_60062);
var inst_60064 = cljs.core.async.close_BANG_.call(null,inst_60063);
var inst_60065 = cljs.core.next.call(null,inst_60053);
var inst_60039 = inst_60065;
var inst_60040 = null;
var inst_60041 = (0);
var inst_60042 = (0);
var state_60098__$1 = (function (){var statearr_60118 = state_60098;
(statearr_60118[(12)] = inst_60041);

(statearr_60118[(13)] = inst_60039);

(statearr_60118[(14)] = inst_60064);

(statearr_60118[(15)] = inst_60040);

(statearr_60118[(16)] = inst_60042);

return statearr_60118;
})();
var statearr_60119_60160 = state_60098__$1;
(statearr_60119_60160[(2)] = null);

(statearr_60119_60160[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60099 === (3))){
var inst_60096 = (state_60098[(2)]);
var state_60098__$1 = state_60098;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60098__$1,inst_60096);
} else {
if((state_val_60099 === (12))){
var inst_60073 = (state_60098[(2)]);
var state_60098__$1 = state_60098;
var statearr_60120_60161 = state_60098__$1;
(statearr_60120_60161[(2)] = inst_60073);

(statearr_60120_60161[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60099 === (2))){
var state_60098__$1 = state_60098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60098__$1,(4),ch);
} else {
if((state_val_60099 === (23))){
var state_60098__$1 = state_60098;
var statearr_60121_60162 = state_60098__$1;
(statearr_60121_60162[(2)] = null);

(statearr_60121_60162[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60099 === (19))){
var inst_60079 = (state_60098[(11)]);
var inst_60029 = (state_60098[(8)]);
var inst_60081 = cljs.core.async.muxch_STAR_.call(null,inst_60079);
var state_60098__$1 = state_60098;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60098__$1,(22),inst_60081,inst_60029);
} else {
if((state_val_60099 === (11))){
var inst_60039 = (state_60098[(13)]);
var inst_60053 = (state_60098[(10)]);
var inst_60053__$1 = cljs.core.seq.call(null,inst_60039);
var state_60098__$1 = (function (){var statearr_60122 = state_60098;
(statearr_60122[(10)] = inst_60053__$1);

return statearr_60122;
})();
if(inst_60053__$1){
var statearr_60123_60163 = state_60098__$1;
(statearr_60123_60163[(1)] = (13));

} else {
var statearr_60124_60164 = state_60098__$1;
(statearr_60124_60164[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60099 === (9))){
var inst_60075 = (state_60098[(2)]);
var state_60098__$1 = state_60098;
var statearr_60125_60165 = state_60098__$1;
(statearr_60125_60165[(2)] = inst_60075);

(statearr_60125_60165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60099 === (5))){
var inst_60036 = cljs.core.deref.call(null,mults);
var inst_60037 = cljs.core.vals.call(null,inst_60036);
var inst_60038 = cljs.core.seq.call(null,inst_60037);
var inst_60039 = inst_60038;
var inst_60040 = null;
var inst_60041 = (0);
var inst_60042 = (0);
var state_60098__$1 = (function (){var statearr_60126 = state_60098;
(statearr_60126[(12)] = inst_60041);

(statearr_60126[(13)] = inst_60039);

(statearr_60126[(15)] = inst_60040);

(statearr_60126[(16)] = inst_60042);

return statearr_60126;
})();
var statearr_60127_60166 = state_60098__$1;
(statearr_60127_60166[(2)] = null);

(statearr_60127_60166[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60099 === (14))){
var state_60098__$1 = state_60098;
var statearr_60131_60167 = state_60098__$1;
(statearr_60131_60167[(2)] = null);

(statearr_60131_60167[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60099 === (16))){
var inst_60053 = (state_60098[(10)]);
var inst_60057 = cljs.core.chunk_first.call(null,inst_60053);
var inst_60058 = cljs.core.chunk_rest.call(null,inst_60053);
var inst_60059 = cljs.core.count.call(null,inst_60057);
var inst_60039 = inst_60058;
var inst_60040 = inst_60057;
var inst_60041 = inst_60059;
var inst_60042 = (0);
var state_60098__$1 = (function (){var statearr_60132 = state_60098;
(statearr_60132[(12)] = inst_60041);

(statearr_60132[(13)] = inst_60039);

(statearr_60132[(15)] = inst_60040);

(statearr_60132[(16)] = inst_60042);

return statearr_60132;
})();
var statearr_60133_60168 = state_60098__$1;
(statearr_60133_60168[(2)] = null);

(statearr_60133_60168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60099 === (10))){
var inst_60041 = (state_60098[(12)]);
var inst_60039 = (state_60098[(13)]);
var inst_60040 = (state_60098[(15)]);
var inst_60042 = (state_60098[(16)]);
var inst_60047 = cljs.core._nth.call(null,inst_60040,inst_60042);
var inst_60048 = cljs.core.async.muxch_STAR_.call(null,inst_60047);
var inst_60049 = cljs.core.async.close_BANG_.call(null,inst_60048);
var inst_60050 = (inst_60042 + (1));
var tmp60128 = inst_60041;
var tmp60129 = inst_60039;
var tmp60130 = inst_60040;
var inst_60039__$1 = tmp60129;
var inst_60040__$1 = tmp60130;
var inst_60041__$1 = tmp60128;
var inst_60042__$1 = inst_60050;
var state_60098__$1 = (function (){var statearr_60134 = state_60098;
(statearr_60134[(12)] = inst_60041__$1);

(statearr_60134[(13)] = inst_60039__$1);

(statearr_60134[(15)] = inst_60040__$1);

(statearr_60134[(17)] = inst_60049);

(statearr_60134[(16)] = inst_60042__$1);

return statearr_60134;
})();
var statearr_60135_60169 = state_60098__$1;
(statearr_60135_60169[(2)] = null);

(statearr_60135_60169[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60099 === (18))){
var inst_60068 = (state_60098[(2)]);
var state_60098__$1 = state_60098;
var statearr_60136_60170 = state_60098__$1;
(statearr_60136_60170[(2)] = inst_60068);

(statearr_60136_60170[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60099 === (8))){
var inst_60041 = (state_60098[(12)]);
var inst_60042 = (state_60098[(16)]);
var inst_60044 = (inst_60042 < inst_60041);
var inst_60045 = inst_60044;
var state_60098__$1 = state_60098;
if(cljs.core.truth_(inst_60045)){
var statearr_60137_60171 = state_60098__$1;
(statearr_60137_60171[(1)] = (10));

} else {
var statearr_60138_60172 = state_60098__$1;
(statearr_60138_60172[(1)] = (11));

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
var cljs$core$async$state_machine__29061__auto__ = null;
var cljs$core$async$state_machine__29061__auto____0 = (function (){
var statearr_60139 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60139[(0)] = cljs$core$async$state_machine__29061__auto__);

(statearr_60139[(1)] = (1));

return statearr_60139;
});
var cljs$core$async$state_machine__29061__auto____1 = (function (state_60098){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_60098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e60140){if((e60140 instanceof Object)){
var ex__29064__auto__ = e60140;
var statearr_60141_60173 = state_60098;
(statearr_60141_60173[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60174 = state_60098;
state_60098 = G__60174;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
cljs$core$async$state_machine__29061__auto__ = function(state_60098){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29061__auto____1.call(this,state_60098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29061__auto____0;
cljs$core$async$state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29061__auto____1;
return cljs$core$async$state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_60142 = f__29156__auto__.call(null);
(statearr_60142[(6)] = c__29155__auto___60144);

return statearr_60142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29157__auto__);
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
var G__60176 = arguments.length;
switch (G__60176) {
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
var G__60179 = arguments.length;
switch (G__60179) {
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
var G__60182 = arguments.length;
switch (G__60182) {
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
var c__29155__auto___60249 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_60221){
var state_val_60222 = (state_60221[(1)]);
if((state_val_60222 === (7))){
var state_60221__$1 = state_60221;
var statearr_60223_60250 = state_60221__$1;
(statearr_60223_60250[(2)] = null);

(statearr_60223_60250[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60222 === (1))){
var state_60221__$1 = state_60221;
var statearr_60224_60251 = state_60221__$1;
(statearr_60224_60251[(2)] = null);

(statearr_60224_60251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60222 === (4))){
var inst_60185 = (state_60221[(7)]);
var inst_60187 = (inst_60185 < cnt);
var state_60221__$1 = state_60221;
if(cljs.core.truth_(inst_60187)){
var statearr_60225_60252 = state_60221__$1;
(statearr_60225_60252[(1)] = (6));

} else {
var statearr_60226_60253 = state_60221__$1;
(statearr_60226_60253[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60222 === (15))){
var inst_60217 = (state_60221[(2)]);
var state_60221__$1 = state_60221;
var statearr_60227_60254 = state_60221__$1;
(statearr_60227_60254[(2)] = inst_60217);

(statearr_60227_60254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60222 === (13))){
var inst_60210 = cljs.core.async.close_BANG_.call(null,out);
var state_60221__$1 = state_60221;
var statearr_60228_60255 = state_60221__$1;
(statearr_60228_60255[(2)] = inst_60210);

(statearr_60228_60255[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60222 === (6))){
var state_60221__$1 = state_60221;
var statearr_60229_60256 = state_60221__$1;
(statearr_60229_60256[(2)] = null);

(statearr_60229_60256[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60222 === (3))){
var inst_60219 = (state_60221[(2)]);
var state_60221__$1 = state_60221;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60221__$1,inst_60219);
} else {
if((state_val_60222 === (12))){
var inst_60207 = (state_60221[(8)]);
var inst_60207__$1 = (state_60221[(2)]);
var inst_60208 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_60207__$1);
var state_60221__$1 = (function (){var statearr_60230 = state_60221;
(statearr_60230[(8)] = inst_60207__$1);

return statearr_60230;
})();
if(cljs.core.truth_(inst_60208)){
var statearr_60231_60257 = state_60221__$1;
(statearr_60231_60257[(1)] = (13));

} else {
var statearr_60232_60258 = state_60221__$1;
(statearr_60232_60258[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60222 === (2))){
var inst_60184 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_60185 = (0);
var state_60221__$1 = (function (){var statearr_60233 = state_60221;
(statearr_60233[(9)] = inst_60184);

(statearr_60233[(7)] = inst_60185);

return statearr_60233;
})();
var statearr_60234_60259 = state_60221__$1;
(statearr_60234_60259[(2)] = null);

(statearr_60234_60259[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60222 === (11))){
var inst_60185 = (state_60221[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_60221,(10),Object,null,(9));
var inst_60194 = chs__$1.call(null,inst_60185);
var inst_60195 = done.call(null,inst_60185);
var inst_60196 = cljs.core.async.take_BANG_.call(null,inst_60194,inst_60195);
var state_60221__$1 = state_60221;
var statearr_60235_60260 = state_60221__$1;
(statearr_60235_60260[(2)] = inst_60196);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60221__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60222 === (9))){
var inst_60185 = (state_60221[(7)]);
var inst_60198 = (state_60221[(2)]);
var inst_60199 = (inst_60185 + (1));
var inst_60185__$1 = inst_60199;
var state_60221__$1 = (function (){var statearr_60236 = state_60221;
(statearr_60236[(7)] = inst_60185__$1);

(statearr_60236[(10)] = inst_60198);

return statearr_60236;
})();
var statearr_60237_60261 = state_60221__$1;
(statearr_60237_60261[(2)] = null);

(statearr_60237_60261[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60222 === (5))){
var inst_60205 = (state_60221[(2)]);
var state_60221__$1 = (function (){var statearr_60238 = state_60221;
(statearr_60238[(11)] = inst_60205);

return statearr_60238;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60221__$1,(12),dchan);
} else {
if((state_val_60222 === (14))){
var inst_60207 = (state_60221[(8)]);
var inst_60212 = cljs.core.apply.call(null,f,inst_60207);
var state_60221__$1 = state_60221;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60221__$1,(16),out,inst_60212);
} else {
if((state_val_60222 === (16))){
var inst_60214 = (state_60221[(2)]);
var state_60221__$1 = (function (){var statearr_60239 = state_60221;
(statearr_60239[(12)] = inst_60214);

return statearr_60239;
})();
var statearr_60240_60262 = state_60221__$1;
(statearr_60240_60262[(2)] = null);

(statearr_60240_60262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60222 === (10))){
var inst_60189 = (state_60221[(2)]);
var inst_60190 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_60221__$1 = (function (){var statearr_60241 = state_60221;
(statearr_60241[(13)] = inst_60189);

return statearr_60241;
})();
var statearr_60242_60263 = state_60221__$1;
(statearr_60242_60263[(2)] = inst_60190);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60221__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60222 === (8))){
var inst_60203 = (state_60221[(2)]);
var state_60221__$1 = state_60221;
var statearr_60243_60264 = state_60221__$1;
(statearr_60243_60264[(2)] = inst_60203);

(statearr_60243_60264[(1)] = (5));


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
var cljs$core$async$state_machine__29061__auto__ = null;
var cljs$core$async$state_machine__29061__auto____0 = (function (){
var statearr_60244 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60244[(0)] = cljs$core$async$state_machine__29061__auto__);

(statearr_60244[(1)] = (1));

return statearr_60244;
});
var cljs$core$async$state_machine__29061__auto____1 = (function (state_60221){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_60221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e60245){if((e60245 instanceof Object)){
var ex__29064__auto__ = e60245;
var statearr_60246_60265 = state_60221;
(statearr_60246_60265[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60245;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60266 = state_60221;
state_60221 = G__60266;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
cljs$core$async$state_machine__29061__auto__ = function(state_60221){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29061__auto____1.call(this,state_60221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29061__auto____0;
cljs$core$async$state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29061__auto____1;
return cljs$core$async$state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_60247 = f__29156__auto__.call(null);
(statearr_60247[(6)] = c__29155__auto___60249);

return statearr_60247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29157__auto__);
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
var G__60269 = arguments.length;
switch (G__60269) {
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
var c__29155__auto___60323 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_60301){
var state_val_60302 = (state_60301[(1)]);
if((state_val_60302 === (7))){
var inst_60280 = (state_60301[(7)]);
var inst_60281 = (state_60301[(8)]);
var inst_60280__$1 = (state_60301[(2)]);
var inst_60281__$1 = cljs.core.nth.call(null,inst_60280__$1,(0),null);
var inst_60282 = cljs.core.nth.call(null,inst_60280__$1,(1),null);
var inst_60283 = (inst_60281__$1 == null);
var state_60301__$1 = (function (){var statearr_60303 = state_60301;
(statearr_60303[(7)] = inst_60280__$1);

(statearr_60303[(8)] = inst_60281__$1);

(statearr_60303[(9)] = inst_60282);

return statearr_60303;
})();
if(cljs.core.truth_(inst_60283)){
var statearr_60304_60324 = state_60301__$1;
(statearr_60304_60324[(1)] = (8));

} else {
var statearr_60305_60325 = state_60301__$1;
(statearr_60305_60325[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60302 === (1))){
var inst_60270 = cljs.core.vec.call(null,chs);
var inst_60271 = inst_60270;
var state_60301__$1 = (function (){var statearr_60306 = state_60301;
(statearr_60306[(10)] = inst_60271);

return statearr_60306;
})();
var statearr_60307_60326 = state_60301__$1;
(statearr_60307_60326[(2)] = null);

(statearr_60307_60326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60302 === (4))){
var inst_60271 = (state_60301[(10)]);
var state_60301__$1 = state_60301;
return cljs.core.async.ioc_alts_BANG_.call(null,state_60301__$1,(7),inst_60271);
} else {
if((state_val_60302 === (6))){
var inst_60297 = (state_60301[(2)]);
var state_60301__$1 = state_60301;
var statearr_60308_60327 = state_60301__$1;
(statearr_60308_60327[(2)] = inst_60297);

(statearr_60308_60327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60302 === (3))){
var inst_60299 = (state_60301[(2)]);
var state_60301__$1 = state_60301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60301__$1,inst_60299);
} else {
if((state_val_60302 === (2))){
var inst_60271 = (state_60301[(10)]);
var inst_60273 = cljs.core.count.call(null,inst_60271);
var inst_60274 = (inst_60273 > (0));
var state_60301__$1 = state_60301;
if(cljs.core.truth_(inst_60274)){
var statearr_60310_60328 = state_60301__$1;
(statearr_60310_60328[(1)] = (4));

} else {
var statearr_60311_60329 = state_60301__$1;
(statearr_60311_60329[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60302 === (11))){
var inst_60271 = (state_60301[(10)]);
var inst_60290 = (state_60301[(2)]);
var tmp60309 = inst_60271;
var inst_60271__$1 = tmp60309;
var state_60301__$1 = (function (){var statearr_60312 = state_60301;
(statearr_60312[(10)] = inst_60271__$1);

(statearr_60312[(11)] = inst_60290);

return statearr_60312;
})();
var statearr_60313_60330 = state_60301__$1;
(statearr_60313_60330[(2)] = null);

(statearr_60313_60330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60302 === (9))){
var inst_60281 = (state_60301[(8)]);
var state_60301__$1 = state_60301;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60301__$1,(11),out,inst_60281);
} else {
if((state_val_60302 === (5))){
var inst_60295 = cljs.core.async.close_BANG_.call(null,out);
var state_60301__$1 = state_60301;
var statearr_60314_60331 = state_60301__$1;
(statearr_60314_60331[(2)] = inst_60295);

(statearr_60314_60331[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60302 === (10))){
var inst_60293 = (state_60301[(2)]);
var state_60301__$1 = state_60301;
var statearr_60315_60332 = state_60301__$1;
(statearr_60315_60332[(2)] = inst_60293);

(statearr_60315_60332[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60302 === (8))){
var inst_60271 = (state_60301[(10)]);
var inst_60280 = (state_60301[(7)]);
var inst_60281 = (state_60301[(8)]);
var inst_60282 = (state_60301[(9)]);
var inst_60285 = (function (){var cs = inst_60271;
var vec__60276 = inst_60280;
var v = inst_60281;
var c = inst_60282;
return (function (p1__60267_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__60267_SHARP_);
});
})();
var inst_60286 = cljs.core.filterv.call(null,inst_60285,inst_60271);
var inst_60271__$1 = inst_60286;
var state_60301__$1 = (function (){var statearr_60316 = state_60301;
(statearr_60316[(10)] = inst_60271__$1);

return statearr_60316;
})();
var statearr_60317_60333 = state_60301__$1;
(statearr_60317_60333[(2)] = null);

(statearr_60317_60333[(1)] = (2));


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
var cljs$core$async$state_machine__29061__auto__ = null;
var cljs$core$async$state_machine__29061__auto____0 = (function (){
var statearr_60318 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60318[(0)] = cljs$core$async$state_machine__29061__auto__);

(statearr_60318[(1)] = (1));

return statearr_60318;
});
var cljs$core$async$state_machine__29061__auto____1 = (function (state_60301){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_60301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e60319){if((e60319 instanceof Object)){
var ex__29064__auto__ = e60319;
var statearr_60320_60334 = state_60301;
(statearr_60320_60334[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60335 = state_60301;
state_60301 = G__60335;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
cljs$core$async$state_machine__29061__auto__ = function(state_60301){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29061__auto____1.call(this,state_60301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29061__auto____0;
cljs$core$async$state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29061__auto____1;
return cljs$core$async$state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_60321 = f__29156__auto__.call(null);
(statearr_60321[(6)] = c__29155__auto___60323);

return statearr_60321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29157__auto__);
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
var G__60337 = arguments.length;
switch (G__60337) {
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
var c__29155__auto___60382 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_60361){
var state_val_60362 = (state_60361[(1)]);
if((state_val_60362 === (7))){
var inst_60343 = (state_60361[(7)]);
var inst_60343__$1 = (state_60361[(2)]);
var inst_60344 = (inst_60343__$1 == null);
var inst_60345 = cljs.core.not.call(null,inst_60344);
var state_60361__$1 = (function (){var statearr_60363 = state_60361;
(statearr_60363[(7)] = inst_60343__$1);

return statearr_60363;
})();
if(inst_60345){
var statearr_60364_60383 = state_60361__$1;
(statearr_60364_60383[(1)] = (8));

} else {
var statearr_60365_60384 = state_60361__$1;
(statearr_60365_60384[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60362 === (1))){
var inst_60338 = (0);
var state_60361__$1 = (function (){var statearr_60366 = state_60361;
(statearr_60366[(8)] = inst_60338);

return statearr_60366;
})();
var statearr_60367_60385 = state_60361__$1;
(statearr_60367_60385[(2)] = null);

(statearr_60367_60385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60362 === (4))){
var state_60361__$1 = state_60361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60361__$1,(7),ch);
} else {
if((state_val_60362 === (6))){
var inst_60356 = (state_60361[(2)]);
var state_60361__$1 = state_60361;
var statearr_60368_60386 = state_60361__$1;
(statearr_60368_60386[(2)] = inst_60356);

(statearr_60368_60386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60362 === (3))){
var inst_60358 = (state_60361[(2)]);
var inst_60359 = cljs.core.async.close_BANG_.call(null,out);
var state_60361__$1 = (function (){var statearr_60369 = state_60361;
(statearr_60369[(9)] = inst_60358);

return statearr_60369;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60361__$1,inst_60359);
} else {
if((state_val_60362 === (2))){
var inst_60338 = (state_60361[(8)]);
var inst_60340 = (inst_60338 < n);
var state_60361__$1 = state_60361;
if(cljs.core.truth_(inst_60340)){
var statearr_60370_60387 = state_60361__$1;
(statearr_60370_60387[(1)] = (4));

} else {
var statearr_60371_60388 = state_60361__$1;
(statearr_60371_60388[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60362 === (11))){
var inst_60338 = (state_60361[(8)]);
var inst_60348 = (state_60361[(2)]);
var inst_60349 = (inst_60338 + (1));
var inst_60338__$1 = inst_60349;
var state_60361__$1 = (function (){var statearr_60372 = state_60361;
(statearr_60372[(8)] = inst_60338__$1);

(statearr_60372[(10)] = inst_60348);

return statearr_60372;
})();
var statearr_60373_60389 = state_60361__$1;
(statearr_60373_60389[(2)] = null);

(statearr_60373_60389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60362 === (9))){
var state_60361__$1 = state_60361;
var statearr_60374_60390 = state_60361__$1;
(statearr_60374_60390[(2)] = null);

(statearr_60374_60390[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60362 === (5))){
var state_60361__$1 = state_60361;
var statearr_60375_60391 = state_60361__$1;
(statearr_60375_60391[(2)] = null);

(statearr_60375_60391[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60362 === (10))){
var inst_60353 = (state_60361[(2)]);
var state_60361__$1 = state_60361;
var statearr_60376_60392 = state_60361__$1;
(statearr_60376_60392[(2)] = inst_60353);

(statearr_60376_60392[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60362 === (8))){
var inst_60343 = (state_60361[(7)]);
var state_60361__$1 = state_60361;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60361__$1,(11),out,inst_60343);
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
var cljs$core$async$state_machine__29061__auto__ = null;
var cljs$core$async$state_machine__29061__auto____0 = (function (){
var statearr_60377 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_60377[(0)] = cljs$core$async$state_machine__29061__auto__);

(statearr_60377[(1)] = (1));

return statearr_60377;
});
var cljs$core$async$state_machine__29061__auto____1 = (function (state_60361){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_60361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e60378){if((e60378 instanceof Object)){
var ex__29064__auto__ = e60378;
var statearr_60379_60393 = state_60361;
(statearr_60379_60393[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60394 = state_60361;
state_60361 = G__60394;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
cljs$core$async$state_machine__29061__auto__ = function(state_60361){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29061__auto____1.call(this,state_60361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29061__auto____0;
cljs$core$async$state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29061__auto____1;
return cljs$core$async$state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_60380 = f__29156__auto__.call(null);
(statearr_60380[(6)] = c__29155__auto___60382);

return statearr_60380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29157__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60396 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60396 = (function (f,ch,meta60397){
this.f = f;
this.ch = ch;
this.meta60397 = meta60397;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async60396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60398,meta60397__$1){
var self__ = this;
var _60398__$1 = this;
return (new cljs.core.async.t_cljs$core$async60396(self__.f,self__.ch,meta60397__$1));
}));

(cljs.core.async.t_cljs$core$async60396.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60398){
var self__ = this;
var _60398__$1 = this;
return self__.meta60397;
}));

(cljs.core.async.t_cljs$core$async60396.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60396.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async60396.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async60396.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60396.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60399 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60399 = (function (f,ch,meta60397,_,fn1,meta60400){
this.f = f;
this.ch = ch;
this.meta60397 = meta60397;
this._ = _;
this.fn1 = fn1;
this.meta60400 = meta60400;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async60399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60401,meta60400__$1){
var self__ = this;
var _60401__$1 = this;
return (new cljs.core.async.t_cljs$core$async60399(self__.f,self__.ch,self__.meta60397,self__._,self__.fn1,meta60400__$1));
}));

(cljs.core.async.t_cljs$core$async60399.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60401){
var self__ = this;
var _60401__$1 = this;
return self__.meta60400;
}));

(cljs.core.async.t_cljs$core$async60399.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60399.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async60399.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async60399.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__60395_SHARP_){
return f1.call(null,(((p1__60395_SHARP_ == null))?null:self__.f.call(null,p1__60395_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async60399.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta60397","meta60397",-357126628,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async60396","cljs.core.async/t_cljs$core$async60396",-303878445,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta60400","meta60400",-55792686,null)], null);
}));

(cljs.core.async.t_cljs$core$async60399.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async60399.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60399");

(cljs.core.async.t_cljs$core$async60399.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async60399");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60399.
 */
cljs.core.async.__GT_t_cljs$core$async60399 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async60399(f__$1,ch__$1,meta60397__$1,___$2,fn1__$1,meta60400){
return (new cljs.core.async.t_cljs$core$async60399(f__$1,ch__$1,meta60397__$1,___$2,fn1__$1,meta60400));
});

}

return (new cljs.core.async.t_cljs$core$async60399(self__.f,self__.ch,self__.meta60397,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async60396.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60396.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async60396.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta60397","meta60397",-357126628,null)], null);
}));

(cljs.core.async.t_cljs$core$async60396.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async60396.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60396");

(cljs.core.async.t_cljs$core$async60396.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async60396");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60396.
 */
cljs.core.async.__GT_t_cljs$core$async60396 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async60396(f__$1,ch__$1,meta60397){
return (new cljs.core.async.t_cljs$core$async60396(f__$1,ch__$1,meta60397));
});

}

return (new cljs.core.async.t_cljs$core$async60396(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60402 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60402 = (function (f,ch,meta60403){
this.f = f;
this.ch = ch;
this.meta60403 = meta60403;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async60402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60404,meta60403__$1){
var self__ = this;
var _60404__$1 = this;
return (new cljs.core.async.t_cljs$core$async60402(self__.f,self__.ch,meta60403__$1));
}));

(cljs.core.async.t_cljs$core$async60402.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60404){
var self__ = this;
var _60404__$1 = this;
return self__.meta60403;
}));

(cljs.core.async.t_cljs$core$async60402.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60402.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async60402.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60402.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async60402.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60402.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async60402.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta60403","meta60403",-899170686,null)], null);
}));

(cljs.core.async.t_cljs$core$async60402.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async60402.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60402");

(cljs.core.async.t_cljs$core$async60402.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async60402");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60402.
 */
cljs.core.async.__GT_t_cljs$core$async60402 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async60402(f__$1,ch__$1,meta60403){
return (new cljs.core.async.t_cljs$core$async60402(f__$1,ch__$1,meta60403));
});

}

return (new cljs.core.async.t_cljs$core$async60402(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60405 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60405 = (function (p,ch,meta60406){
this.p = p;
this.ch = ch;
this.meta60406 = meta60406;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async60405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60407,meta60406__$1){
var self__ = this;
var _60407__$1 = this;
return (new cljs.core.async.t_cljs$core$async60405(self__.p,self__.ch,meta60406__$1));
}));

(cljs.core.async.t_cljs$core$async60405.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60407){
var self__ = this;
var _60407__$1 = this;
return self__.meta60406;
}));

(cljs.core.async.t_cljs$core$async60405.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60405.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async60405.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async60405.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60405.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async60405.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60405.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async60405.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta60406","meta60406",-387793383,null)], null);
}));

(cljs.core.async.t_cljs$core$async60405.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async60405.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60405");

(cljs.core.async.t_cljs$core$async60405.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async60405");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60405.
 */
cljs.core.async.__GT_t_cljs$core$async60405 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async60405(p__$1,ch__$1,meta60406){
return (new cljs.core.async.t_cljs$core$async60405(p__$1,ch__$1,meta60406));
});

}

return (new cljs.core.async.t_cljs$core$async60405(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__60409 = arguments.length;
switch (G__60409) {
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
var c__29155__auto___60449 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_60430){
var state_val_60431 = (state_60430[(1)]);
if((state_val_60431 === (7))){
var inst_60426 = (state_60430[(2)]);
var state_60430__$1 = state_60430;
var statearr_60432_60450 = state_60430__$1;
(statearr_60432_60450[(2)] = inst_60426);

(statearr_60432_60450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60431 === (1))){
var state_60430__$1 = state_60430;
var statearr_60433_60451 = state_60430__$1;
(statearr_60433_60451[(2)] = null);

(statearr_60433_60451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60431 === (4))){
var inst_60412 = (state_60430[(7)]);
var inst_60412__$1 = (state_60430[(2)]);
var inst_60413 = (inst_60412__$1 == null);
var state_60430__$1 = (function (){var statearr_60434 = state_60430;
(statearr_60434[(7)] = inst_60412__$1);

return statearr_60434;
})();
if(cljs.core.truth_(inst_60413)){
var statearr_60435_60452 = state_60430__$1;
(statearr_60435_60452[(1)] = (5));

} else {
var statearr_60436_60453 = state_60430__$1;
(statearr_60436_60453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60431 === (6))){
var inst_60412 = (state_60430[(7)]);
var inst_60417 = p.call(null,inst_60412);
var state_60430__$1 = state_60430;
if(cljs.core.truth_(inst_60417)){
var statearr_60437_60454 = state_60430__$1;
(statearr_60437_60454[(1)] = (8));

} else {
var statearr_60438_60455 = state_60430__$1;
(statearr_60438_60455[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60431 === (3))){
var inst_60428 = (state_60430[(2)]);
var state_60430__$1 = state_60430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60430__$1,inst_60428);
} else {
if((state_val_60431 === (2))){
var state_60430__$1 = state_60430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60430__$1,(4),ch);
} else {
if((state_val_60431 === (11))){
var inst_60420 = (state_60430[(2)]);
var state_60430__$1 = state_60430;
var statearr_60439_60456 = state_60430__$1;
(statearr_60439_60456[(2)] = inst_60420);

(statearr_60439_60456[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60431 === (9))){
var state_60430__$1 = state_60430;
var statearr_60440_60457 = state_60430__$1;
(statearr_60440_60457[(2)] = null);

(statearr_60440_60457[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60431 === (5))){
var inst_60415 = cljs.core.async.close_BANG_.call(null,out);
var state_60430__$1 = state_60430;
var statearr_60441_60458 = state_60430__$1;
(statearr_60441_60458[(2)] = inst_60415);

(statearr_60441_60458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60431 === (10))){
var inst_60423 = (state_60430[(2)]);
var state_60430__$1 = (function (){var statearr_60442 = state_60430;
(statearr_60442[(8)] = inst_60423);

return statearr_60442;
})();
var statearr_60443_60459 = state_60430__$1;
(statearr_60443_60459[(2)] = null);

(statearr_60443_60459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60431 === (8))){
var inst_60412 = (state_60430[(7)]);
var state_60430__$1 = state_60430;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60430__$1,(11),out,inst_60412);
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
var cljs$core$async$state_machine__29061__auto__ = null;
var cljs$core$async$state_machine__29061__auto____0 = (function (){
var statearr_60444 = [null,null,null,null,null,null,null,null,null];
(statearr_60444[(0)] = cljs$core$async$state_machine__29061__auto__);

(statearr_60444[(1)] = (1));

return statearr_60444;
});
var cljs$core$async$state_machine__29061__auto____1 = (function (state_60430){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_60430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e60445){if((e60445 instanceof Object)){
var ex__29064__auto__ = e60445;
var statearr_60446_60460 = state_60430;
(statearr_60446_60460[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60461 = state_60430;
state_60430 = G__60461;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
cljs$core$async$state_machine__29061__auto__ = function(state_60430){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29061__auto____1.call(this,state_60430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29061__auto____0;
cljs$core$async$state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29061__auto____1;
return cljs$core$async$state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_60447 = f__29156__auto__.call(null);
(statearr_60447[(6)] = c__29155__auto___60449);

return statearr_60447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29157__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__60463 = arguments.length;
switch (G__60463) {
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
var c__29155__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_60526){
var state_val_60527 = (state_60526[(1)]);
if((state_val_60527 === (7))){
var inst_60522 = (state_60526[(2)]);
var state_60526__$1 = state_60526;
var statearr_60528_60566 = state_60526__$1;
(statearr_60528_60566[(2)] = inst_60522);

(statearr_60528_60566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60527 === (20))){
var inst_60492 = (state_60526[(7)]);
var inst_60503 = (state_60526[(2)]);
var inst_60504 = cljs.core.next.call(null,inst_60492);
var inst_60478 = inst_60504;
var inst_60479 = null;
var inst_60480 = (0);
var inst_60481 = (0);
var state_60526__$1 = (function (){var statearr_60529 = state_60526;
(statearr_60529[(8)] = inst_60479);

(statearr_60529[(9)] = inst_60481);

(statearr_60529[(10)] = inst_60503);

(statearr_60529[(11)] = inst_60478);

(statearr_60529[(12)] = inst_60480);

return statearr_60529;
})();
var statearr_60530_60567 = state_60526__$1;
(statearr_60530_60567[(2)] = null);

(statearr_60530_60567[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60527 === (1))){
var state_60526__$1 = state_60526;
var statearr_60531_60568 = state_60526__$1;
(statearr_60531_60568[(2)] = null);

(statearr_60531_60568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60527 === (4))){
var inst_60467 = (state_60526[(13)]);
var inst_60467__$1 = (state_60526[(2)]);
var inst_60468 = (inst_60467__$1 == null);
var state_60526__$1 = (function (){var statearr_60532 = state_60526;
(statearr_60532[(13)] = inst_60467__$1);

return statearr_60532;
})();
if(cljs.core.truth_(inst_60468)){
var statearr_60533_60569 = state_60526__$1;
(statearr_60533_60569[(1)] = (5));

} else {
var statearr_60534_60570 = state_60526__$1;
(statearr_60534_60570[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60527 === (15))){
var state_60526__$1 = state_60526;
var statearr_60538_60571 = state_60526__$1;
(statearr_60538_60571[(2)] = null);

(statearr_60538_60571[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60527 === (21))){
var state_60526__$1 = state_60526;
var statearr_60539_60572 = state_60526__$1;
(statearr_60539_60572[(2)] = null);

(statearr_60539_60572[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60527 === (13))){
var inst_60479 = (state_60526[(8)]);
var inst_60481 = (state_60526[(9)]);
var inst_60478 = (state_60526[(11)]);
var inst_60480 = (state_60526[(12)]);
var inst_60488 = (state_60526[(2)]);
var inst_60489 = (inst_60481 + (1));
var tmp60535 = inst_60479;
var tmp60536 = inst_60478;
var tmp60537 = inst_60480;
var inst_60478__$1 = tmp60536;
var inst_60479__$1 = tmp60535;
var inst_60480__$1 = tmp60537;
var inst_60481__$1 = inst_60489;
var state_60526__$1 = (function (){var statearr_60540 = state_60526;
(statearr_60540[(14)] = inst_60488);

(statearr_60540[(8)] = inst_60479__$1);

(statearr_60540[(9)] = inst_60481__$1);

(statearr_60540[(11)] = inst_60478__$1);

(statearr_60540[(12)] = inst_60480__$1);

return statearr_60540;
})();
var statearr_60541_60573 = state_60526__$1;
(statearr_60541_60573[(2)] = null);

(statearr_60541_60573[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60527 === (22))){
var state_60526__$1 = state_60526;
var statearr_60542_60574 = state_60526__$1;
(statearr_60542_60574[(2)] = null);

(statearr_60542_60574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60527 === (6))){
var inst_60467 = (state_60526[(13)]);
var inst_60476 = f.call(null,inst_60467);
var inst_60477 = cljs.core.seq.call(null,inst_60476);
var inst_60478 = inst_60477;
var inst_60479 = null;
var inst_60480 = (0);
var inst_60481 = (0);
var state_60526__$1 = (function (){var statearr_60543 = state_60526;
(statearr_60543[(8)] = inst_60479);

(statearr_60543[(9)] = inst_60481);

(statearr_60543[(11)] = inst_60478);

(statearr_60543[(12)] = inst_60480);

return statearr_60543;
})();
var statearr_60544_60575 = state_60526__$1;
(statearr_60544_60575[(2)] = null);

(statearr_60544_60575[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60527 === (17))){
var inst_60492 = (state_60526[(7)]);
var inst_60496 = cljs.core.chunk_first.call(null,inst_60492);
var inst_60497 = cljs.core.chunk_rest.call(null,inst_60492);
var inst_60498 = cljs.core.count.call(null,inst_60496);
var inst_60478 = inst_60497;
var inst_60479 = inst_60496;
var inst_60480 = inst_60498;
var inst_60481 = (0);
var state_60526__$1 = (function (){var statearr_60545 = state_60526;
(statearr_60545[(8)] = inst_60479);

(statearr_60545[(9)] = inst_60481);

(statearr_60545[(11)] = inst_60478);

(statearr_60545[(12)] = inst_60480);

return statearr_60545;
})();
var statearr_60546_60576 = state_60526__$1;
(statearr_60546_60576[(2)] = null);

(statearr_60546_60576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60527 === (3))){
var inst_60524 = (state_60526[(2)]);
var state_60526__$1 = state_60526;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60526__$1,inst_60524);
} else {
if((state_val_60527 === (12))){
var inst_60512 = (state_60526[(2)]);
var state_60526__$1 = state_60526;
var statearr_60547_60577 = state_60526__$1;
(statearr_60547_60577[(2)] = inst_60512);

(statearr_60547_60577[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60527 === (2))){
var state_60526__$1 = state_60526;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60526__$1,(4),in$);
} else {
if((state_val_60527 === (23))){
var inst_60520 = (state_60526[(2)]);
var state_60526__$1 = state_60526;
var statearr_60548_60578 = state_60526__$1;
(statearr_60548_60578[(2)] = inst_60520);

(statearr_60548_60578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60527 === (19))){
var inst_60507 = (state_60526[(2)]);
var state_60526__$1 = state_60526;
var statearr_60549_60579 = state_60526__$1;
(statearr_60549_60579[(2)] = inst_60507);

(statearr_60549_60579[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60527 === (11))){
var inst_60478 = (state_60526[(11)]);
var inst_60492 = (state_60526[(7)]);
var inst_60492__$1 = cljs.core.seq.call(null,inst_60478);
var state_60526__$1 = (function (){var statearr_60550 = state_60526;
(statearr_60550[(7)] = inst_60492__$1);

return statearr_60550;
})();
if(inst_60492__$1){
var statearr_60551_60580 = state_60526__$1;
(statearr_60551_60580[(1)] = (14));

} else {
var statearr_60552_60581 = state_60526__$1;
(statearr_60552_60581[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60527 === (9))){
var inst_60514 = (state_60526[(2)]);
var inst_60515 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_60526__$1 = (function (){var statearr_60553 = state_60526;
(statearr_60553[(15)] = inst_60514);

return statearr_60553;
})();
if(cljs.core.truth_(inst_60515)){
var statearr_60554_60582 = state_60526__$1;
(statearr_60554_60582[(1)] = (21));

} else {
var statearr_60555_60583 = state_60526__$1;
(statearr_60555_60583[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60527 === (5))){
var inst_60470 = cljs.core.async.close_BANG_.call(null,out);
var state_60526__$1 = state_60526;
var statearr_60556_60584 = state_60526__$1;
(statearr_60556_60584[(2)] = inst_60470);

(statearr_60556_60584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60527 === (14))){
var inst_60492 = (state_60526[(7)]);
var inst_60494 = cljs.core.chunked_seq_QMARK_.call(null,inst_60492);
var state_60526__$1 = state_60526;
if(inst_60494){
var statearr_60557_60585 = state_60526__$1;
(statearr_60557_60585[(1)] = (17));

} else {
var statearr_60558_60586 = state_60526__$1;
(statearr_60558_60586[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60527 === (16))){
var inst_60510 = (state_60526[(2)]);
var state_60526__$1 = state_60526;
var statearr_60559_60587 = state_60526__$1;
(statearr_60559_60587[(2)] = inst_60510);

(statearr_60559_60587[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60527 === (10))){
var inst_60479 = (state_60526[(8)]);
var inst_60481 = (state_60526[(9)]);
var inst_60486 = cljs.core._nth.call(null,inst_60479,inst_60481);
var state_60526__$1 = state_60526;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60526__$1,(13),out,inst_60486);
} else {
if((state_val_60527 === (18))){
var inst_60492 = (state_60526[(7)]);
var inst_60501 = cljs.core.first.call(null,inst_60492);
var state_60526__$1 = state_60526;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60526__$1,(20),out,inst_60501);
} else {
if((state_val_60527 === (8))){
var inst_60481 = (state_60526[(9)]);
var inst_60480 = (state_60526[(12)]);
var inst_60483 = (inst_60481 < inst_60480);
var inst_60484 = inst_60483;
var state_60526__$1 = state_60526;
if(cljs.core.truth_(inst_60484)){
var statearr_60560_60588 = state_60526__$1;
(statearr_60560_60588[(1)] = (10));

} else {
var statearr_60561_60589 = state_60526__$1;
(statearr_60561_60589[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__29061__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29061__auto____0 = (function (){
var statearr_60562 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60562[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29061__auto__);

(statearr_60562[(1)] = (1));

return statearr_60562;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29061__auto____1 = (function (state_60526){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_60526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e60563){if((e60563 instanceof Object)){
var ex__29064__auto__ = e60563;
var statearr_60564_60590 = state_60526;
(statearr_60564_60590[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60563;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60591 = state_60526;
state_60526 = G__60591;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29061__auto__ = function(state_60526){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29061__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29061__auto____1.call(this,state_60526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29061__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29061__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_60565 = f__29156__auto__.call(null);
(statearr_60565[(6)] = c__29155__auto__);

return statearr_60565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29157__auto__);
}));

return c__29155__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__60593 = arguments.length;
switch (G__60593) {
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
var G__60596 = arguments.length;
switch (G__60596) {
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
var G__60599 = arguments.length;
switch (G__60599) {
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
var c__29155__auto___60646 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_60623){
var state_val_60624 = (state_60623[(1)]);
if((state_val_60624 === (7))){
var inst_60618 = (state_60623[(2)]);
var state_60623__$1 = state_60623;
var statearr_60625_60647 = state_60623__$1;
(statearr_60625_60647[(2)] = inst_60618);

(statearr_60625_60647[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60624 === (1))){
var inst_60600 = null;
var state_60623__$1 = (function (){var statearr_60626 = state_60623;
(statearr_60626[(7)] = inst_60600);

return statearr_60626;
})();
var statearr_60627_60648 = state_60623__$1;
(statearr_60627_60648[(2)] = null);

(statearr_60627_60648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60624 === (4))){
var inst_60603 = (state_60623[(8)]);
var inst_60603__$1 = (state_60623[(2)]);
var inst_60604 = (inst_60603__$1 == null);
var inst_60605 = cljs.core.not.call(null,inst_60604);
var state_60623__$1 = (function (){var statearr_60628 = state_60623;
(statearr_60628[(8)] = inst_60603__$1);

return statearr_60628;
})();
if(inst_60605){
var statearr_60629_60649 = state_60623__$1;
(statearr_60629_60649[(1)] = (5));

} else {
var statearr_60630_60650 = state_60623__$1;
(statearr_60630_60650[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60624 === (6))){
var state_60623__$1 = state_60623;
var statearr_60631_60651 = state_60623__$1;
(statearr_60631_60651[(2)] = null);

(statearr_60631_60651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60624 === (3))){
var inst_60620 = (state_60623[(2)]);
var inst_60621 = cljs.core.async.close_BANG_.call(null,out);
var state_60623__$1 = (function (){var statearr_60632 = state_60623;
(statearr_60632[(9)] = inst_60620);

return statearr_60632;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60623__$1,inst_60621);
} else {
if((state_val_60624 === (2))){
var state_60623__$1 = state_60623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60623__$1,(4),ch);
} else {
if((state_val_60624 === (11))){
var inst_60603 = (state_60623[(8)]);
var inst_60612 = (state_60623[(2)]);
var inst_60600 = inst_60603;
var state_60623__$1 = (function (){var statearr_60633 = state_60623;
(statearr_60633[(7)] = inst_60600);

(statearr_60633[(10)] = inst_60612);

return statearr_60633;
})();
var statearr_60634_60652 = state_60623__$1;
(statearr_60634_60652[(2)] = null);

(statearr_60634_60652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60624 === (9))){
var inst_60603 = (state_60623[(8)]);
var state_60623__$1 = state_60623;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60623__$1,(11),out,inst_60603);
} else {
if((state_val_60624 === (5))){
var inst_60600 = (state_60623[(7)]);
var inst_60603 = (state_60623[(8)]);
var inst_60607 = cljs.core._EQ_.call(null,inst_60603,inst_60600);
var state_60623__$1 = state_60623;
if(inst_60607){
var statearr_60636_60653 = state_60623__$1;
(statearr_60636_60653[(1)] = (8));

} else {
var statearr_60637_60654 = state_60623__$1;
(statearr_60637_60654[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60624 === (10))){
var inst_60615 = (state_60623[(2)]);
var state_60623__$1 = state_60623;
var statearr_60638_60655 = state_60623__$1;
(statearr_60638_60655[(2)] = inst_60615);

(statearr_60638_60655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60624 === (8))){
var inst_60600 = (state_60623[(7)]);
var tmp60635 = inst_60600;
var inst_60600__$1 = tmp60635;
var state_60623__$1 = (function (){var statearr_60639 = state_60623;
(statearr_60639[(7)] = inst_60600__$1);

return statearr_60639;
})();
var statearr_60640_60656 = state_60623__$1;
(statearr_60640_60656[(2)] = null);

(statearr_60640_60656[(1)] = (2));


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
var cljs$core$async$state_machine__29061__auto__ = null;
var cljs$core$async$state_machine__29061__auto____0 = (function (){
var statearr_60641 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_60641[(0)] = cljs$core$async$state_machine__29061__auto__);

(statearr_60641[(1)] = (1));

return statearr_60641;
});
var cljs$core$async$state_machine__29061__auto____1 = (function (state_60623){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_60623);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e60642){if((e60642 instanceof Object)){
var ex__29064__auto__ = e60642;
var statearr_60643_60657 = state_60623;
(statearr_60643_60657[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60658 = state_60623;
state_60623 = G__60658;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
cljs$core$async$state_machine__29061__auto__ = function(state_60623){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29061__auto____1.call(this,state_60623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29061__auto____0;
cljs$core$async$state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29061__auto____1;
return cljs$core$async$state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_60644 = f__29156__auto__.call(null);
(statearr_60644[(6)] = c__29155__auto___60646);

return statearr_60644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29157__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__60660 = arguments.length;
switch (G__60660) {
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
var c__29155__auto___60726 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_60698){
var state_val_60699 = (state_60698[(1)]);
if((state_val_60699 === (7))){
var inst_60694 = (state_60698[(2)]);
var state_60698__$1 = state_60698;
var statearr_60700_60727 = state_60698__$1;
(statearr_60700_60727[(2)] = inst_60694);

(statearr_60700_60727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60699 === (1))){
var inst_60661 = (new Array(n));
var inst_60662 = inst_60661;
var inst_60663 = (0);
var state_60698__$1 = (function (){var statearr_60701 = state_60698;
(statearr_60701[(7)] = inst_60663);

(statearr_60701[(8)] = inst_60662);

return statearr_60701;
})();
var statearr_60702_60728 = state_60698__$1;
(statearr_60702_60728[(2)] = null);

(statearr_60702_60728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60699 === (4))){
var inst_60666 = (state_60698[(9)]);
var inst_60666__$1 = (state_60698[(2)]);
var inst_60667 = (inst_60666__$1 == null);
var inst_60668 = cljs.core.not.call(null,inst_60667);
var state_60698__$1 = (function (){var statearr_60703 = state_60698;
(statearr_60703[(9)] = inst_60666__$1);

return statearr_60703;
})();
if(inst_60668){
var statearr_60704_60729 = state_60698__$1;
(statearr_60704_60729[(1)] = (5));

} else {
var statearr_60705_60730 = state_60698__$1;
(statearr_60705_60730[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60699 === (15))){
var inst_60688 = (state_60698[(2)]);
var state_60698__$1 = state_60698;
var statearr_60706_60731 = state_60698__$1;
(statearr_60706_60731[(2)] = inst_60688);

(statearr_60706_60731[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60699 === (13))){
var state_60698__$1 = state_60698;
var statearr_60707_60732 = state_60698__$1;
(statearr_60707_60732[(2)] = null);

(statearr_60707_60732[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60699 === (6))){
var inst_60663 = (state_60698[(7)]);
var inst_60684 = (inst_60663 > (0));
var state_60698__$1 = state_60698;
if(cljs.core.truth_(inst_60684)){
var statearr_60708_60733 = state_60698__$1;
(statearr_60708_60733[(1)] = (12));

} else {
var statearr_60709_60734 = state_60698__$1;
(statearr_60709_60734[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60699 === (3))){
var inst_60696 = (state_60698[(2)]);
var state_60698__$1 = state_60698;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60698__$1,inst_60696);
} else {
if((state_val_60699 === (12))){
var inst_60662 = (state_60698[(8)]);
var inst_60686 = cljs.core.vec.call(null,inst_60662);
var state_60698__$1 = state_60698;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60698__$1,(15),out,inst_60686);
} else {
if((state_val_60699 === (2))){
var state_60698__$1 = state_60698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60698__$1,(4),ch);
} else {
if((state_val_60699 === (11))){
var inst_60678 = (state_60698[(2)]);
var inst_60679 = (new Array(n));
var inst_60662 = inst_60679;
var inst_60663 = (0);
var state_60698__$1 = (function (){var statearr_60710 = state_60698;
(statearr_60710[(10)] = inst_60678);

(statearr_60710[(7)] = inst_60663);

(statearr_60710[(8)] = inst_60662);

return statearr_60710;
})();
var statearr_60711_60735 = state_60698__$1;
(statearr_60711_60735[(2)] = null);

(statearr_60711_60735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60699 === (9))){
var inst_60662 = (state_60698[(8)]);
var inst_60676 = cljs.core.vec.call(null,inst_60662);
var state_60698__$1 = state_60698;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60698__$1,(11),out,inst_60676);
} else {
if((state_val_60699 === (5))){
var inst_60663 = (state_60698[(7)]);
var inst_60671 = (state_60698[(11)]);
var inst_60662 = (state_60698[(8)]);
var inst_60666 = (state_60698[(9)]);
var inst_60670 = (inst_60662[inst_60663] = inst_60666);
var inst_60671__$1 = (inst_60663 + (1));
var inst_60672 = (inst_60671__$1 < n);
var state_60698__$1 = (function (){var statearr_60712 = state_60698;
(statearr_60712[(11)] = inst_60671__$1);

(statearr_60712[(12)] = inst_60670);

return statearr_60712;
})();
if(cljs.core.truth_(inst_60672)){
var statearr_60713_60736 = state_60698__$1;
(statearr_60713_60736[(1)] = (8));

} else {
var statearr_60714_60737 = state_60698__$1;
(statearr_60714_60737[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60699 === (14))){
var inst_60691 = (state_60698[(2)]);
var inst_60692 = cljs.core.async.close_BANG_.call(null,out);
var state_60698__$1 = (function (){var statearr_60716 = state_60698;
(statearr_60716[(13)] = inst_60691);

return statearr_60716;
})();
var statearr_60717_60738 = state_60698__$1;
(statearr_60717_60738[(2)] = inst_60692);

(statearr_60717_60738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60699 === (10))){
var inst_60682 = (state_60698[(2)]);
var state_60698__$1 = state_60698;
var statearr_60718_60739 = state_60698__$1;
(statearr_60718_60739[(2)] = inst_60682);

(statearr_60718_60739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60699 === (8))){
var inst_60671 = (state_60698[(11)]);
var inst_60662 = (state_60698[(8)]);
var tmp60715 = inst_60662;
var inst_60662__$1 = tmp60715;
var inst_60663 = inst_60671;
var state_60698__$1 = (function (){var statearr_60719 = state_60698;
(statearr_60719[(7)] = inst_60663);

(statearr_60719[(8)] = inst_60662__$1);

return statearr_60719;
})();
var statearr_60720_60740 = state_60698__$1;
(statearr_60720_60740[(2)] = null);

(statearr_60720_60740[(1)] = (2));


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
var cljs$core$async$state_machine__29061__auto__ = null;
var cljs$core$async$state_machine__29061__auto____0 = (function (){
var statearr_60721 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60721[(0)] = cljs$core$async$state_machine__29061__auto__);

(statearr_60721[(1)] = (1));

return statearr_60721;
});
var cljs$core$async$state_machine__29061__auto____1 = (function (state_60698){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_60698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e60722){if((e60722 instanceof Object)){
var ex__29064__auto__ = e60722;
var statearr_60723_60741 = state_60698;
(statearr_60723_60741[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60742 = state_60698;
state_60698 = G__60742;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
cljs$core$async$state_machine__29061__auto__ = function(state_60698){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29061__auto____1.call(this,state_60698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29061__auto____0;
cljs$core$async$state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29061__auto____1;
return cljs$core$async$state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_60724 = f__29156__auto__.call(null);
(statearr_60724[(6)] = c__29155__auto___60726);

return statearr_60724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29157__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__60744 = arguments.length;
switch (G__60744) {
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
var c__29155__auto___60814 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_60786){
var state_val_60787 = (state_60786[(1)]);
if((state_val_60787 === (7))){
var inst_60782 = (state_60786[(2)]);
var state_60786__$1 = state_60786;
var statearr_60788_60815 = state_60786__$1;
(statearr_60788_60815[(2)] = inst_60782);

(statearr_60788_60815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60787 === (1))){
var inst_60745 = [];
var inst_60746 = inst_60745;
var inst_60747 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_60786__$1 = (function (){var statearr_60789 = state_60786;
(statearr_60789[(7)] = inst_60746);

(statearr_60789[(8)] = inst_60747);

return statearr_60789;
})();
var statearr_60790_60816 = state_60786__$1;
(statearr_60790_60816[(2)] = null);

(statearr_60790_60816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60787 === (4))){
var inst_60750 = (state_60786[(9)]);
var inst_60750__$1 = (state_60786[(2)]);
var inst_60751 = (inst_60750__$1 == null);
var inst_60752 = cljs.core.not.call(null,inst_60751);
var state_60786__$1 = (function (){var statearr_60791 = state_60786;
(statearr_60791[(9)] = inst_60750__$1);

return statearr_60791;
})();
if(inst_60752){
var statearr_60792_60817 = state_60786__$1;
(statearr_60792_60817[(1)] = (5));

} else {
var statearr_60793_60818 = state_60786__$1;
(statearr_60793_60818[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60787 === (15))){
var inst_60776 = (state_60786[(2)]);
var state_60786__$1 = state_60786;
var statearr_60794_60819 = state_60786__$1;
(statearr_60794_60819[(2)] = inst_60776);

(statearr_60794_60819[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60787 === (13))){
var state_60786__$1 = state_60786;
var statearr_60795_60820 = state_60786__$1;
(statearr_60795_60820[(2)] = null);

(statearr_60795_60820[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60787 === (6))){
var inst_60746 = (state_60786[(7)]);
var inst_60771 = inst_60746.length;
var inst_60772 = (inst_60771 > (0));
var state_60786__$1 = state_60786;
if(cljs.core.truth_(inst_60772)){
var statearr_60796_60821 = state_60786__$1;
(statearr_60796_60821[(1)] = (12));

} else {
var statearr_60797_60822 = state_60786__$1;
(statearr_60797_60822[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60787 === (3))){
var inst_60784 = (state_60786[(2)]);
var state_60786__$1 = state_60786;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60786__$1,inst_60784);
} else {
if((state_val_60787 === (12))){
var inst_60746 = (state_60786[(7)]);
var inst_60774 = cljs.core.vec.call(null,inst_60746);
var state_60786__$1 = state_60786;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60786__$1,(15),out,inst_60774);
} else {
if((state_val_60787 === (2))){
var state_60786__$1 = state_60786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60786__$1,(4),ch);
} else {
if((state_val_60787 === (11))){
var inst_60750 = (state_60786[(9)]);
var inst_60754 = (state_60786[(10)]);
var inst_60764 = (state_60786[(2)]);
var inst_60765 = [];
var inst_60766 = inst_60765.push(inst_60750);
var inst_60746 = inst_60765;
var inst_60747 = inst_60754;
var state_60786__$1 = (function (){var statearr_60798 = state_60786;
(statearr_60798[(7)] = inst_60746);

(statearr_60798[(11)] = inst_60764);

(statearr_60798[(12)] = inst_60766);

(statearr_60798[(8)] = inst_60747);

return statearr_60798;
})();
var statearr_60799_60823 = state_60786__$1;
(statearr_60799_60823[(2)] = null);

(statearr_60799_60823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60787 === (9))){
var inst_60746 = (state_60786[(7)]);
var inst_60762 = cljs.core.vec.call(null,inst_60746);
var state_60786__$1 = state_60786;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60786__$1,(11),out,inst_60762);
} else {
if((state_val_60787 === (5))){
var inst_60750 = (state_60786[(9)]);
var inst_60747 = (state_60786[(8)]);
var inst_60754 = (state_60786[(10)]);
var inst_60754__$1 = f.call(null,inst_60750);
var inst_60755 = cljs.core._EQ_.call(null,inst_60754__$1,inst_60747);
var inst_60756 = cljs.core.keyword_identical_QMARK_.call(null,inst_60747,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_60757 = ((inst_60755) || (inst_60756));
var state_60786__$1 = (function (){var statearr_60800 = state_60786;
(statearr_60800[(10)] = inst_60754__$1);

return statearr_60800;
})();
if(cljs.core.truth_(inst_60757)){
var statearr_60801_60824 = state_60786__$1;
(statearr_60801_60824[(1)] = (8));

} else {
var statearr_60802_60825 = state_60786__$1;
(statearr_60802_60825[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60787 === (14))){
var inst_60779 = (state_60786[(2)]);
var inst_60780 = cljs.core.async.close_BANG_.call(null,out);
var state_60786__$1 = (function (){var statearr_60804 = state_60786;
(statearr_60804[(13)] = inst_60779);

return statearr_60804;
})();
var statearr_60805_60826 = state_60786__$1;
(statearr_60805_60826[(2)] = inst_60780);

(statearr_60805_60826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60787 === (10))){
var inst_60769 = (state_60786[(2)]);
var state_60786__$1 = state_60786;
var statearr_60806_60827 = state_60786__$1;
(statearr_60806_60827[(2)] = inst_60769);

(statearr_60806_60827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60787 === (8))){
var inst_60746 = (state_60786[(7)]);
var inst_60750 = (state_60786[(9)]);
var inst_60754 = (state_60786[(10)]);
var inst_60759 = inst_60746.push(inst_60750);
var tmp60803 = inst_60746;
var inst_60746__$1 = tmp60803;
var inst_60747 = inst_60754;
var state_60786__$1 = (function (){var statearr_60807 = state_60786;
(statearr_60807[(14)] = inst_60759);

(statearr_60807[(7)] = inst_60746__$1);

(statearr_60807[(8)] = inst_60747);

return statearr_60807;
})();
var statearr_60808_60828 = state_60786__$1;
(statearr_60808_60828[(2)] = null);

(statearr_60808_60828[(1)] = (2));


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
var cljs$core$async$state_machine__29061__auto__ = null;
var cljs$core$async$state_machine__29061__auto____0 = (function (){
var statearr_60809 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60809[(0)] = cljs$core$async$state_machine__29061__auto__);

(statearr_60809[(1)] = (1));

return statearr_60809;
});
var cljs$core$async$state_machine__29061__auto____1 = (function (state_60786){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_60786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e60810){if((e60810 instanceof Object)){
var ex__29064__auto__ = e60810;
var statearr_60811_60829 = state_60786;
(statearr_60811_60829[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60830 = state_60786;
state_60786 = G__60830;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
cljs$core$async$state_machine__29061__auto__ = function(state_60786){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29061__auto____1.call(this,state_60786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29061__auto____0;
cljs$core$async$state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29061__auto____1;
return cljs$core$async$state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_60812 = f__29156__auto__.call(null);
(statearr_60812[(6)] = c__29155__auto___60814);

return statearr_60812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29157__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1589677415452
