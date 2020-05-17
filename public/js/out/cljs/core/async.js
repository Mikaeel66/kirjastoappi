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
var G__43767 = arguments.length;
switch (G__43767) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43768 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43768 = (function (f,blockable,meta43769){
this.f = f;
this.blockable = blockable;
this.meta43769 = meta43769;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43770,meta43769__$1){
var self__ = this;
var _43770__$1 = this;
return (new cljs.core.async.t_cljs$core$async43768(self__.f,self__.blockable,meta43769__$1));
}));

(cljs.core.async.t_cljs$core$async43768.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43770){
var self__ = this;
var _43770__$1 = this;
return self__.meta43769;
}));

(cljs.core.async.t_cljs$core$async43768.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43768.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43768.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async43768.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async43768.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta43769","meta43769",-481689892,null)], null);
}));

(cljs.core.async.t_cljs$core$async43768.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43768.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43768");

(cljs.core.async.t_cljs$core$async43768.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async43768");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43768.
 */
cljs.core.async.__GT_t_cljs$core$async43768 = (function cljs$core$async$__GT_t_cljs$core$async43768(f__$1,blockable__$1,meta43769){
return (new cljs.core.async.t_cljs$core$async43768(f__$1,blockable__$1,meta43769));
});

}

return (new cljs.core.async.t_cljs$core$async43768(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__43774 = arguments.length;
switch (G__43774) {
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
var G__43777 = arguments.length;
switch (G__43777) {
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
var G__43780 = arguments.length;
switch (G__43780) {
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
var val_43782 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_43782);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_43782);
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
var G__43784 = arguments.length;
switch (G__43784) {
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
var n__4666__auto___43786 = n;
var x_43787 = (0);
while(true){
if((x_43787 < n__4666__auto___43786)){
(a[x_43787] = (0));

var G__43788 = (x_43787 + (1));
x_43787 = G__43788;
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

var G__43789 = (i + (1));
i = G__43789;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43790 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43790 = (function (flag,meta43791){
this.flag = flag;
this.meta43791 = meta43791;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43792,meta43791__$1){
var self__ = this;
var _43792__$1 = this;
return (new cljs.core.async.t_cljs$core$async43790(self__.flag,meta43791__$1));
}));

(cljs.core.async.t_cljs$core$async43790.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43792){
var self__ = this;
var _43792__$1 = this;
return self__.meta43791;
}));

(cljs.core.async.t_cljs$core$async43790.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43790.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async43790.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43790.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async43790.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta43791","meta43791",1828307617,null)], null);
}));

(cljs.core.async.t_cljs$core$async43790.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43790.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43790");

(cljs.core.async.t_cljs$core$async43790.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async43790");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43790.
 */
cljs.core.async.__GT_t_cljs$core$async43790 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async43790(flag__$1,meta43791){
return (new cljs.core.async.t_cljs$core$async43790(flag__$1,meta43791));
});

}

return (new cljs.core.async.t_cljs$core$async43790(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43793 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43793 = (function (flag,cb,meta43794){
this.flag = flag;
this.cb = cb;
this.meta43794 = meta43794;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43795,meta43794__$1){
var self__ = this;
var _43795__$1 = this;
return (new cljs.core.async.t_cljs$core$async43793(self__.flag,self__.cb,meta43794__$1));
}));

(cljs.core.async.t_cljs$core$async43793.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43795){
var self__ = this;
var _43795__$1 = this;
return self__.meta43794;
}));

(cljs.core.async.t_cljs$core$async43793.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43793.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async43793.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43793.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async43793.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta43794","meta43794",-1659718988,null)], null);
}));

(cljs.core.async.t_cljs$core$async43793.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43793.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43793");

(cljs.core.async.t_cljs$core$async43793.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async43793");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43793.
 */
cljs.core.async.__GT_t_cljs$core$async43793 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async43793(flag__$1,cb__$1,meta43794){
return (new cljs.core.async.t_cljs$core$async43793(flag__$1,cb__$1,meta43794));
});

}

return (new cljs.core.async.t_cljs$core$async43793(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__43796_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43796_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43797_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43797_SHARP_,port], null));
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
var G__43798 = (i + (1));
i = G__43798;
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
var len__4789__auto___43804 = arguments.length;
var i__4790__auto___43805 = (0);
while(true){
if((i__4790__auto___43805 < len__4789__auto___43804)){
args__4795__auto__.push((arguments[i__4790__auto___43805]));

var G__43806 = (i__4790__auto___43805 + (1));
i__4790__auto___43805 = G__43806;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__43801){
var map__43802 = p__43801;
var map__43802__$1 = (((((!((map__43802 == null))))?(((((map__43802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43802):map__43802);
var opts = map__43802__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq43799){
var G__43800 = cljs.core.first.call(null,seq43799);
var seq43799__$1 = cljs.core.next.call(null,seq43799);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43800,seq43799__$1);
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
var G__43808 = arguments.length;
switch (G__43808) {
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
var c__29155__auto___43854 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_43832){
var state_val_43833 = (state_43832[(1)]);
if((state_val_43833 === (7))){
var inst_43828 = (state_43832[(2)]);
var state_43832__$1 = state_43832;
var statearr_43834_43855 = state_43832__$1;
(statearr_43834_43855[(2)] = inst_43828);

(statearr_43834_43855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43833 === (1))){
var state_43832__$1 = state_43832;
var statearr_43835_43856 = state_43832__$1;
(statearr_43835_43856[(2)] = null);

(statearr_43835_43856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43833 === (4))){
var inst_43811 = (state_43832[(7)]);
var inst_43811__$1 = (state_43832[(2)]);
var inst_43812 = (inst_43811__$1 == null);
var state_43832__$1 = (function (){var statearr_43836 = state_43832;
(statearr_43836[(7)] = inst_43811__$1);

return statearr_43836;
})();
if(cljs.core.truth_(inst_43812)){
var statearr_43837_43857 = state_43832__$1;
(statearr_43837_43857[(1)] = (5));

} else {
var statearr_43838_43858 = state_43832__$1;
(statearr_43838_43858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43833 === (13))){
var state_43832__$1 = state_43832;
var statearr_43839_43859 = state_43832__$1;
(statearr_43839_43859[(2)] = null);

(statearr_43839_43859[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43833 === (6))){
var inst_43811 = (state_43832[(7)]);
var state_43832__$1 = state_43832;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43832__$1,(11),to,inst_43811);
} else {
if((state_val_43833 === (3))){
var inst_43830 = (state_43832[(2)]);
var state_43832__$1 = state_43832;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43832__$1,inst_43830);
} else {
if((state_val_43833 === (12))){
var state_43832__$1 = state_43832;
var statearr_43840_43860 = state_43832__$1;
(statearr_43840_43860[(2)] = null);

(statearr_43840_43860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43833 === (2))){
var state_43832__$1 = state_43832;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43832__$1,(4),from);
} else {
if((state_val_43833 === (11))){
var inst_43821 = (state_43832[(2)]);
var state_43832__$1 = state_43832;
if(cljs.core.truth_(inst_43821)){
var statearr_43841_43861 = state_43832__$1;
(statearr_43841_43861[(1)] = (12));

} else {
var statearr_43842_43862 = state_43832__$1;
(statearr_43842_43862[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43833 === (9))){
var state_43832__$1 = state_43832;
var statearr_43843_43863 = state_43832__$1;
(statearr_43843_43863[(2)] = null);

(statearr_43843_43863[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43833 === (5))){
var state_43832__$1 = state_43832;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43844_43864 = state_43832__$1;
(statearr_43844_43864[(1)] = (8));

} else {
var statearr_43845_43865 = state_43832__$1;
(statearr_43845_43865[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43833 === (14))){
var inst_43826 = (state_43832[(2)]);
var state_43832__$1 = state_43832;
var statearr_43846_43866 = state_43832__$1;
(statearr_43846_43866[(2)] = inst_43826);

(statearr_43846_43866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43833 === (10))){
var inst_43818 = (state_43832[(2)]);
var state_43832__$1 = state_43832;
var statearr_43847_43867 = state_43832__$1;
(statearr_43847_43867[(2)] = inst_43818);

(statearr_43847_43867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43833 === (8))){
var inst_43815 = cljs.core.async.close_BANG_.call(null,to);
var state_43832__$1 = state_43832;
var statearr_43848_43868 = state_43832__$1;
(statearr_43848_43868[(2)] = inst_43815);

(statearr_43848_43868[(1)] = (10));


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
var statearr_43849 = [null,null,null,null,null,null,null,null];
(statearr_43849[(0)] = cljs$core$async$state_machine__29061__auto__);

(statearr_43849[(1)] = (1));

return statearr_43849;
});
var cljs$core$async$state_machine__29061__auto____1 = (function (state_43832){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_43832);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e43850){if((e43850 instanceof Object)){
var ex__29064__auto__ = e43850;
var statearr_43851_43869 = state_43832;
(statearr_43851_43869[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43870 = state_43832;
state_43832 = G__43870;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
cljs$core$async$state_machine__29061__auto__ = function(state_43832){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29061__auto____1.call(this,state_43832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29061__auto____0;
cljs$core$async$state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29061__auto____1;
return cljs$core$async$state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_43852 = f__29156__auto__.call(null);
(statearr_43852[(6)] = c__29155__auto___43854);

return statearr_43852;
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
var process__$1 = (function (p__43871){
var vec__43872 = p__43871;
var v = cljs.core.nth.call(null,vec__43872,(0),null);
var p = cljs.core.nth.call(null,vec__43872,(1),null);
var job = vec__43872;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29155__auto___44043 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_43879){
var state_val_43880 = (state_43879[(1)]);
if((state_val_43880 === (1))){
var state_43879__$1 = state_43879;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43879__$1,(2),res,v);
} else {
if((state_val_43880 === (2))){
var inst_43876 = (state_43879[(2)]);
var inst_43877 = cljs.core.async.close_BANG_.call(null,res);
var state_43879__$1 = (function (){var statearr_43881 = state_43879;
(statearr_43881[(7)] = inst_43876);

return statearr_43881;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43879__$1,inst_43877);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____0 = (function (){
var statearr_43882 = [null,null,null,null,null,null,null,null];
(statearr_43882[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__);

(statearr_43882[(1)] = (1));

return statearr_43882;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____1 = (function (state_43879){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_43879);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e43883){if((e43883 instanceof Object)){
var ex__29064__auto__ = e43883;
var statearr_43884_44044 = state_43879;
(statearr_43884_44044[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43879);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44045 = state_43879;
state_43879 = G__44045;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__ = function(state_43879){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____1.call(this,state_43879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_43885 = f__29156__auto__.call(null);
(statearr_43885[(6)] = c__29155__auto___44043);

return statearr_43885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29157__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__43886){
var vec__43887 = p__43886;
var v = cljs.core.nth.call(null,vec__43887,(0),null);
var p = cljs.core.nth.call(null,vec__43887,(1),null);
var job = vec__43887;
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
var n__4666__auto___44046 = n;
var __44047 = (0);
while(true){
if((__44047 < n__4666__auto___44046)){
var G__43890_44048 = type;
var G__43890_44049__$1 = (((G__43890_44048 instanceof cljs.core.Keyword))?G__43890_44048.fqn:null);
switch (G__43890_44049__$1) {
case "compute":
var c__29155__auto___44051 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__44047,c__29155__auto___44051,G__43890_44048,G__43890_44049__$1,n__4666__auto___44046,jobs,results,process__$1,async){
return (function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = ((function (__44047,c__29155__auto___44051,G__43890_44048,G__43890_44049__$1,n__4666__auto___44046,jobs,results,process__$1,async){
return (function (state_43903){
var state_val_43904 = (state_43903[(1)]);
if((state_val_43904 === (1))){
var state_43903__$1 = state_43903;
var statearr_43905_44052 = state_43903__$1;
(statearr_43905_44052[(2)] = null);

(statearr_43905_44052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43904 === (2))){
var state_43903__$1 = state_43903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43903__$1,(4),jobs);
} else {
if((state_val_43904 === (3))){
var inst_43901 = (state_43903[(2)]);
var state_43903__$1 = state_43903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43903__$1,inst_43901);
} else {
if((state_val_43904 === (4))){
var inst_43893 = (state_43903[(2)]);
var inst_43894 = process__$1.call(null,inst_43893);
var state_43903__$1 = state_43903;
if(cljs.core.truth_(inst_43894)){
var statearr_43906_44053 = state_43903__$1;
(statearr_43906_44053[(1)] = (5));

} else {
var statearr_43907_44054 = state_43903__$1;
(statearr_43907_44054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43904 === (5))){
var state_43903__$1 = state_43903;
var statearr_43908_44055 = state_43903__$1;
(statearr_43908_44055[(2)] = null);

(statearr_43908_44055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43904 === (6))){
var state_43903__$1 = state_43903;
var statearr_43909_44056 = state_43903__$1;
(statearr_43909_44056[(2)] = null);

(statearr_43909_44056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43904 === (7))){
var inst_43899 = (state_43903[(2)]);
var state_43903__$1 = state_43903;
var statearr_43910_44057 = state_43903__$1;
(statearr_43910_44057[(2)] = inst_43899);

(statearr_43910_44057[(1)] = (3));


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
});})(__44047,c__29155__auto___44051,G__43890_44048,G__43890_44049__$1,n__4666__auto___44046,jobs,results,process__$1,async))
;
return ((function (__44047,switch__29060__auto__,c__29155__auto___44051,G__43890_44048,G__43890_44049__$1,n__4666__auto___44046,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____0 = (function (){
var statearr_43911 = [null,null,null,null,null,null,null];
(statearr_43911[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__);

(statearr_43911[(1)] = (1));

return statearr_43911;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____1 = (function (state_43903){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_43903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e43912){if((e43912 instanceof Object)){
var ex__29064__auto__ = e43912;
var statearr_43913_44058 = state_43903;
(statearr_43913_44058[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43912;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44059 = state_43903;
state_43903 = G__44059;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__ = function(state_43903){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____1.call(this,state_43903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__;
})()
;})(__44047,switch__29060__auto__,c__29155__auto___44051,G__43890_44048,G__43890_44049__$1,n__4666__auto___44046,jobs,results,process__$1,async))
})();
var state__29157__auto__ = (function (){var statearr_43914 = f__29156__auto__.call(null);
(statearr_43914[(6)] = c__29155__auto___44051);

return statearr_43914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29157__auto__);
});})(__44047,c__29155__auto___44051,G__43890_44048,G__43890_44049__$1,n__4666__auto___44046,jobs,results,process__$1,async))
);


break;
case "async":
var c__29155__auto___44060 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__44047,c__29155__auto___44060,G__43890_44048,G__43890_44049__$1,n__4666__auto___44046,jobs,results,process__$1,async){
return (function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = ((function (__44047,c__29155__auto___44060,G__43890_44048,G__43890_44049__$1,n__4666__auto___44046,jobs,results,process__$1,async){
return (function (state_43927){
var state_val_43928 = (state_43927[(1)]);
if((state_val_43928 === (1))){
var state_43927__$1 = state_43927;
var statearr_43929_44061 = state_43927__$1;
(statearr_43929_44061[(2)] = null);

(statearr_43929_44061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43928 === (2))){
var state_43927__$1 = state_43927;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43927__$1,(4),jobs);
} else {
if((state_val_43928 === (3))){
var inst_43925 = (state_43927[(2)]);
var state_43927__$1 = state_43927;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43927__$1,inst_43925);
} else {
if((state_val_43928 === (4))){
var inst_43917 = (state_43927[(2)]);
var inst_43918 = async.call(null,inst_43917);
var state_43927__$1 = state_43927;
if(cljs.core.truth_(inst_43918)){
var statearr_43930_44062 = state_43927__$1;
(statearr_43930_44062[(1)] = (5));

} else {
var statearr_43931_44063 = state_43927__$1;
(statearr_43931_44063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43928 === (5))){
var state_43927__$1 = state_43927;
var statearr_43932_44064 = state_43927__$1;
(statearr_43932_44064[(2)] = null);

(statearr_43932_44064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43928 === (6))){
var state_43927__$1 = state_43927;
var statearr_43933_44065 = state_43927__$1;
(statearr_43933_44065[(2)] = null);

(statearr_43933_44065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43928 === (7))){
var inst_43923 = (state_43927[(2)]);
var state_43927__$1 = state_43927;
var statearr_43934_44066 = state_43927__$1;
(statearr_43934_44066[(2)] = inst_43923);

(statearr_43934_44066[(1)] = (3));


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
});})(__44047,c__29155__auto___44060,G__43890_44048,G__43890_44049__$1,n__4666__auto___44046,jobs,results,process__$1,async))
;
return ((function (__44047,switch__29060__auto__,c__29155__auto___44060,G__43890_44048,G__43890_44049__$1,n__4666__auto___44046,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____0 = (function (){
var statearr_43935 = [null,null,null,null,null,null,null];
(statearr_43935[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__);

(statearr_43935[(1)] = (1));

return statearr_43935;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____1 = (function (state_43927){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_43927);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e43936){if((e43936 instanceof Object)){
var ex__29064__auto__ = e43936;
var statearr_43937_44067 = state_43927;
(statearr_43937_44067[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44068 = state_43927;
state_43927 = G__44068;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__ = function(state_43927){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____1.call(this,state_43927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__;
})()
;})(__44047,switch__29060__auto__,c__29155__auto___44060,G__43890_44048,G__43890_44049__$1,n__4666__auto___44046,jobs,results,process__$1,async))
})();
var state__29157__auto__ = (function (){var statearr_43938 = f__29156__auto__.call(null);
(statearr_43938[(6)] = c__29155__auto___44060);

return statearr_43938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29157__auto__);
});})(__44047,c__29155__auto___44060,G__43890_44048,G__43890_44049__$1,n__4666__auto___44046,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43890_44049__$1)].join('')));

}

var G__44069 = (__44047 + (1));
__44047 = G__44069;
continue;
} else {
}
break;
}

var c__29155__auto___44070 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_43960){
var state_val_43961 = (state_43960[(1)]);
if((state_val_43961 === (7))){
var inst_43956 = (state_43960[(2)]);
var state_43960__$1 = state_43960;
var statearr_43962_44071 = state_43960__$1;
(statearr_43962_44071[(2)] = inst_43956);

(statearr_43962_44071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43961 === (1))){
var state_43960__$1 = state_43960;
var statearr_43963_44072 = state_43960__$1;
(statearr_43963_44072[(2)] = null);

(statearr_43963_44072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43961 === (4))){
var inst_43941 = (state_43960[(7)]);
var inst_43941__$1 = (state_43960[(2)]);
var inst_43942 = (inst_43941__$1 == null);
var state_43960__$1 = (function (){var statearr_43964 = state_43960;
(statearr_43964[(7)] = inst_43941__$1);

return statearr_43964;
})();
if(cljs.core.truth_(inst_43942)){
var statearr_43965_44073 = state_43960__$1;
(statearr_43965_44073[(1)] = (5));

} else {
var statearr_43966_44074 = state_43960__$1;
(statearr_43966_44074[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43961 === (6))){
var inst_43941 = (state_43960[(7)]);
var inst_43946 = (state_43960[(8)]);
var inst_43946__$1 = cljs.core.async.chan.call(null,(1));
var inst_43947 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43948 = [inst_43941,inst_43946__$1];
var inst_43949 = (new cljs.core.PersistentVector(null,2,(5),inst_43947,inst_43948,null));
var state_43960__$1 = (function (){var statearr_43967 = state_43960;
(statearr_43967[(8)] = inst_43946__$1);

return statearr_43967;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43960__$1,(8),jobs,inst_43949);
} else {
if((state_val_43961 === (3))){
var inst_43958 = (state_43960[(2)]);
var state_43960__$1 = state_43960;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43960__$1,inst_43958);
} else {
if((state_val_43961 === (2))){
var state_43960__$1 = state_43960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43960__$1,(4),from);
} else {
if((state_val_43961 === (9))){
var inst_43953 = (state_43960[(2)]);
var state_43960__$1 = (function (){var statearr_43968 = state_43960;
(statearr_43968[(9)] = inst_43953);

return statearr_43968;
})();
var statearr_43969_44075 = state_43960__$1;
(statearr_43969_44075[(2)] = null);

(statearr_43969_44075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43961 === (5))){
var inst_43944 = cljs.core.async.close_BANG_.call(null,jobs);
var state_43960__$1 = state_43960;
var statearr_43970_44076 = state_43960__$1;
(statearr_43970_44076[(2)] = inst_43944);

(statearr_43970_44076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43961 === (8))){
var inst_43946 = (state_43960[(8)]);
var inst_43951 = (state_43960[(2)]);
var state_43960__$1 = (function (){var statearr_43971 = state_43960;
(statearr_43971[(10)] = inst_43951);

return statearr_43971;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43960__$1,(9),results,inst_43946);
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
var statearr_43972 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43972[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__);

(statearr_43972[(1)] = (1));

return statearr_43972;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____1 = (function (state_43960){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_43960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e43973){if((e43973 instanceof Object)){
var ex__29064__auto__ = e43973;
var statearr_43974_44077 = state_43960;
(statearr_43974_44077[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44078 = state_43960;
state_43960 = G__44078;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__ = function(state_43960){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____1.call(this,state_43960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_43975 = f__29156__auto__.call(null);
(statearr_43975[(6)] = c__29155__auto___44070);

return statearr_43975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29157__auto__);
}));


var c__29155__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_44013){
var state_val_44014 = (state_44013[(1)]);
if((state_val_44014 === (7))){
var inst_44009 = (state_44013[(2)]);
var state_44013__$1 = state_44013;
var statearr_44015_44079 = state_44013__$1;
(statearr_44015_44079[(2)] = inst_44009);

(statearr_44015_44079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44014 === (20))){
var state_44013__$1 = state_44013;
var statearr_44016_44080 = state_44013__$1;
(statearr_44016_44080[(2)] = null);

(statearr_44016_44080[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44014 === (1))){
var state_44013__$1 = state_44013;
var statearr_44017_44081 = state_44013__$1;
(statearr_44017_44081[(2)] = null);

(statearr_44017_44081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44014 === (4))){
var inst_43978 = (state_44013[(7)]);
var inst_43978__$1 = (state_44013[(2)]);
var inst_43979 = (inst_43978__$1 == null);
var state_44013__$1 = (function (){var statearr_44018 = state_44013;
(statearr_44018[(7)] = inst_43978__$1);

return statearr_44018;
})();
if(cljs.core.truth_(inst_43979)){
var statearr_44019_44082 = state_44013__$1;
(statearr_44019_44082[(1)] = (5));

} else {
var statearr_44020_44083 = state_44013__$1;
(statearr_44020_44083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44014 === (15))){
var inst_43991 = (state_44013[(8)]);
var state_44013__$1 = state_44013;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44013__$1,(18),to,inst_43991);
} else {
if((state_val_44014 === (21))){
var inst_44004 = (state_44013[(2)]);
var state_44013__$1 = state_44013;
var statearr_44021_44084 = state_44013__$1;
(statearr_44021_44084[(2)] = inst_44004);

(statearr_44021_44084[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44014 === (13))){
var inst_44006 = (state_44013[(2)]);
var state_44013__$1 = (function (){var statearr_44022 = state_44013;
(statearr_44022[(9)] = inst_44006);

return statearr_44022;
})();
var statearr_44023_44085 = state_44013__$1;
(statearr_44023_44085[(2)] = null);

(statearr_44023_44085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44014 === (6))){
var inst_43978 = (state_44013[(7)]);
var state_44013__$1 = state_44013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44013__$1,(11),inst_43978);
} else {
if((state_val_44014 === (17))){
var inst_43999 = (state_44013[(2)]);
var state_44013__$1 = state_44013;
if(cljs.core.truth_(inst_43999)){
var statearr_44024_44086 = state_44013__$1;
(statearr_44024_44086[(1)] = (19));

} else {
var statearr_44025_44087 = state_44013__$1;
(statearr_44025_44087[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44014 === (3))){
var inst_44011 = (state_44013[(2)]);
var state_44013__$1 = state_44013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44013__$1,inst_44011);
} else {
if((state_val_44014 === (12))){
var inst_43988 = (state_44013[(10)]);
var state_44013__$1 = state_44013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44013__$1,(14),inst_43988);
} else {
if((state_val_44014 === (2))){
var state_44013__$1 = state_44013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44013__$1,(4),results);
} else {
if((state_val_44014 === (19))){
var state_44013__$1 = state_44013;
var statearr_44026_44088 = state_44013__$1;
(statearr_44026_44088[(2)] = null);

(statearr_44026_44088[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44014 === (11))){
var inst_43988 = (state_44013[(2)]);
var state_44013__$1 = (function (){var statearr_44027 = state_44013;
(statearr_44027[(10)] = inst_43988);

return statearr_44027;
})();
var statearr_44028_44089 = state_44013__$1;
(statearr_44028_44089[(2)] = null);

(statearr_44028_44089[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44014 === (9))){
var state_44013__$1 = state_44013;
var statearr_44029_44090 = state_44013__$1;
(statearr_44029_44090[(2)] = null);

(statearr_44029_44090[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44014 === (5))){
var state_44013__$1 = state_44013;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44030_44091 = state_44013__$1;
(statearr_44030_44091[(1)] = (8));

} else {
var statearr_44031_44092 = state_44013__$1;
(statearr_44031_44092[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44014 === (14))){
var inst_43991 = (state_44013[(8)]);
var inst_43991__$1 = (state_44013[(2)]);
var inst_43992 = (inst_43991__$1 == null);
var inst_43993 = cljs.core.not.call(null,inst_43992);
var state_44013__$1 = (function (){var statearr_44032 = state_44013;
(statearr_44032[(8)] = inst_43991__$1);

return statearr_44032;
})();
if(inst_43993){
var statearr_44033_44093 = state_44013__$1;
(statearr_44033_44093[(1)] = (15));

} else {
var statearr_44034_44094 = state_44013__$1;
(statearr_44034_44094[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44014 === (16))){
var state_44013__$1 = state_44013;
var statearr_44035_44095 = state_44013__$1;
(statearr_44035_44095[(2)] = false);

(statearr_44035_44095[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44014 === (10))){
var inst_43985 = (state_44013[(2)]);
var state_44013__$1 = state_44013;
var statearr_44036_44096 = state_44013__$1;
(statearr_44036_44096[(2)] = inst_43985);

(statearr_44036_44096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44014 === (18))){
var inst_43996 = (state_44013[(2)]);
var state_44013__$1 = state_44013;
var statearr_44037_44097 = state_44013__$1;
(statearr_44037_44097[(2)] = inst_43996);

(statearr_44037_44097[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44014 === (8))){
var inst_43982 = cljs.core.async.close_BANG_.call(null,to);
var state_44013__$1 = state_44013;
var statearr_44038_44098 = state_44013__$1;
(statearr_44038_44098[(2)] = inst_43982);

(statearr_44038_44098[(1)] = (10));


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
var statearr_44039 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44039[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__);

(statearr_44039[(1)] = (1));

return statearr_44039;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____1 = (function (state_44013){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_44013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e44040){if((e44040 instanceof Object)){
var ex__29064__auto__ = e44040;
var statearr_44041_44099 = state_44013;
(statearr_44041_44099[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44100 = state_44013;
state_44013 = G__44100;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__ = function(state_44013){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____1.call(this,state_44013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29061__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_44042 = f__29156__auto__.call(null);
(statearr_44042[(6)] = c__29155__auto__);

return statearr_44042;
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
var G__44102 = arguments.length;
switch (G__44102) {
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
var G__44105 = arguments.length;
switch (G__44105) {
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
var G__44108 = arguments.length;
switch (G__44108) {
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
var c__29155__auto___44157 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_44134){
var state_val_44135 = (state_44134[(1)]);
if((state_val_44135 === (7))){
var inst_44130 = (state_44134[(2)]);
var state_44134__$1 = state_44134;
var statearr_44136_44158 = state_44134__$1;
(statearr_44136_44158[(2)] = inst_44130);

(statearr_44136_44158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44135 === (1))){
var state_44134__$1 = state_44134;
var statearr_44137_44159 = state_44134__$1;
(statearr_44137_44159[(2)] = null);

(statearr_44137_44159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44135 === (4))){
var inst_44111 = (state_44134[(7)]);
var inst_44111__$1 = (state_44134[(2)]);
var inst_44112 = (inst_44111__$1 == null);
var state_44134__$1 = (function (){var statearr_44138 = state_44134;
(statearr_44138[(7)] = inst_44111__$1);

return statearr_44138;
})();
if(cljs.core.truth_(inst_44112)){
var statearr_44139_44160 = state_44134__$1;
(statearr_44139_44160[(1)] = (5));

} else {
var statearr_44140_44161 = state_44134__$1;
(statearr_44140_44161[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44135 === (13))){
var state_44134__$1 = state_44134;
var statearr_44141_44162 = state_44134__$1;
(statearr_44141_44162[(2)] = null);

(statearr_44141_44162[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44135 === (6))){
var inst_44111 = (state_44134[(7)]);
var inst_44117 = p.call(null,inst_44111);
var state_44134__$1 = state_44134;
if(cljs.core.truth_(inst_44117)){
var statearr_44142_44163 = state_44134__$1;
(statearr_44142_44163[(1)] = (9));

} else {
var statearr_44143_44164 = state_44134__$1;
(statearr_44143_44164[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44135 === (3))){
var inst_44132 = (state_44134[(2)]);
var state_44134__$1 = state_44134;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44134__$1,inst_44132);
} else {
if((state_val_44135 === (12))){
var state_44134__$1 = state_44134;
var statearr_44144_44165 = state_44134__$1;
(statearr_44144_44165[(2)] = null);

(statearr_44144_44165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44135 === (2))){
var state_44134__$1 = state_44134;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44134__$1,(4),ch);
} else {
if((state_val_44135 === (11))){
var inst_44111 = (state_44134[(7)]);
var inst_44121 = (state_44134[(2)]);
var state_44134__$1 = state_44134;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44134__$1,(8),inst_44121,inst_44111);
} else {
if((state_val_44135 === (9))){
var state_44134__$1 = state_44134;
var statearr_44145_44166 = state_44134__$1;
(statearr_44145_44166[(2)] = tc);

(statearr_44145_44166[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44135 === (5))){
var inst_44114 = cljs.core.async.close_BANG_.call(null,tc);
var inst_44115 = cljs.core.async.close_BANG_.call(null,fc);
var state_44134__$1 = (function (){var statearr_44146 = state_44134;
(statearr_44146[(8)] = inst_44114);

return statearr_44146;
})();
var statearr_44147_44167 = state_44134__$1;
(statearr_44147_44167[(2)] = inst_44115);

(statearr_44147_44167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44135 === (14))){
var inst_44128 = (state_44134[(2)]);
var state_44134__$1 = state_44134;
var statearr_44148_44168 = state_44134__$1;
(statearr_44148_44168[(2)] = inst_44128);

(statearr_44148_44168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44135 === (10))){
var state_44134__$1 = state_44134;
var statearr_44149_44169 = state_44134__$1;
(statearr_44149_44169[(2)] = fc);

(statearr_44149_44169[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44135 === (8))){
var inst_44123 = (state_44134[(2)]);
var state_44134__$1 = state_44134;
if(cljs.core.truth_(inst_44123)){
var statearr_44150_44170 = state_44134__$1;
(statearr_44150_44170[(1)] = (12));

} else {
var statearr_44151_44171 = state_44134__$1;
(statearr_44151_44171[(1)] = (13));

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
var statearr_44152 = [null,null,null,null,null,null,null,null,null];
(statearr_44152[(0)] = cljs$core$async$state_machine__29061__auto__);

(statearr_44152[(1)] = (1));

return statearr_44152;
});
var cljs$core$async$state_machine__29061__auto____1 = (function (state_44134){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_44134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e44153){if((e44153 instanceof Object)){
var ex__29064__auto__ = e44153;
var statearr_44154_44172 = state_44134;
(statearr_44154_44172[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44173 = state_44134;
state_44134 = G__44173;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
cljs$core$async$state_machine__29061__auto__ = function(state_44134){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29061__auto____1.call(this,state_44134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29061__auto____0;
cljs$core$async$state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29061__auto____1;
return cljs$core$async$state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_44155 = f__29156__auto__.call(null);
(statearr_44155[(6)] = c__29155__auto___44157);

return statearr_44155;
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
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_44194){
var state_val_44195 = (state_44194[(1)]);
if((state_val_44195 === (7))){
var inst_44190 = (state_44194[(2)]);
var state_44194__$1 = state_44194;
var statearr_44196_44214 = state_44194__$1;
(statearr_44196_44214[(2)] = inst_44190);

(statearr_44196_44214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44195 === (1))){
var inst_44174 = init;
var state_44194__$1 = (function (){var statearr_44197 = state_44194;
(statearr_44197[(7)] = inst_44174);

return statearr_44197;
})();
var statearr_44198_44215 = state_44194__$1;
(statearr_44198_44215[(2)] = null);

(statearr_44198_44215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44195 === (4))){
var inst_44177 = (state_44194[(8)]);
var inst_44177__$1 = (state_44194[(2)]);
var inst_44178 = (inst_44177__$1 == null);
var state_44194__$1 = (function (){var statearr_44199 = state_44194;
(statearr_44199[(8)] = inst_44177__$1);

return statearr_44199;
})();
if(cljs.core.truth_(inst_44178)){
var statearr_44200_44216 = state_44194__$1;
(statearr_44200_44216[(1)] = (5));

} else {
var statearr_44201_44217 = state_44194__$1;
(statearr_44201_44217[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44195 === (6))){
var inst_44181 = (state_44194[(9)]);
var inst_44177 = (state_44194[(8)]);
var inst_44174 = (state_44194[(7)]);
var inst_44181__$1 = f.call(null,inst_44174,inst_44177);
var inst_44182 = cljs.core.reduced_QMARK_.call(null,inst_44181__$1);
var state_44194__$1 = (function (){var statearr_44202 = state_44194;
(statearr_44202[(9)] = inst_44181__$1);

return statearr_44202;
})();
if(inst_44182){
var statearr_44203_44218 = state_44194__$1;
(statearr_44203_44218[(1)] = (8));

} else {
var statearr_44204_44219 = state_44194__$1;
(statearr_44204_44219[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44195 === (3))){
var inst_44192 = (state_44194[(2)]);
var state_44194__$1 = state_44194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44194__$1,inst_44192);
} else {
if((state_val_44195 === (2))){
var state_44194__$1 = state_44194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44194__$1,(4),ch);
} else {
if((state_val_44195 === (9))){
var inst_44181 = (state_44194[(9)]);
var inst_44174 = inst_44181;
var state_44194__$1 = (function (){var statearr_44205 = state_44194;
(statearr_44205[(7)] = inst_44174);

return statearr_44205;
})();
var statearr_44206_44220 = state_44194__$1;
(statearr_44206_44220[(2)] = null);

(statearr_44206_44220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44195 === (5))){
var inst_44174 = (state_44194[(7)]);
var state_44194__$1 = state_44194;
var statearr_44207_44221 = state_44194__$1;
(statearr_44207_44221[(2)] = inst_44174);

(statearr_44207_44221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44195 === (10))){
var inst_44188 = (state_44194[(2)]);
var state_44194__$1 = state_44194;
var statearr_44208_44222 = state_44194__$1;
(statearr_44208_44222[(2)] = inst_44188);

(statearr_44208_44222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44195 === (8))){
var inst_44181 = (state_44194[(9)]);
var inst_44184 = cljs.core.deref.call(null,inst_44181);
var state_44194__$1 = state_44194;
var statearr_44209_44223 = state_44194__$1;
(statearr_44209_44223[(2)] = inst_44184);

(statearr_44209_44223[(1)] = (10));


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
var statearr_44210 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44210[(0)] = cljs$core$async$reduce_$_state_machine__29061__auto__);

(statearr_44210[(1)] = (1));

return statearr_44210;
});
var cljs$core$async$reduce_$_state_machine__29061__auto____1 = (function (state_44194){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_44194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e44211){if((e44211 instanceof Object)){
var ex__29064__auto__ = e44211;
var statearr_44212_44224 = state_44194;
(statearr_44212_44224[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44225 = state_44194;
state_44194 = G__44225;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29061__auto__ = function(state_44194){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29061__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29061__auto____1.call(this,state_44194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29061__auto____0;
cljs$core$async$reduce_$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29061__auto____1;
return cljs$core$async$reduce_$_state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_44213 = f__29156__auto__.call(null);
(statearr_44213[(6)] = c__29155__auto__);

return statearr_44213;
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
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_44231){
var state_val_44232 = (state_44231[(1)]);
if((state_val_44232 === (1))){
var inst_44226 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_44231__$1 = state_44231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44231__$1,(2),inst_44226);
} else {
if((state_val_44232 === (2))){
var inst_44228 = (state_44231[(2)]);
var inst_44229 = f__$1.call(null,inst_44228);
var state_44231__$1 = state_44231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44231__$1,inst_44229);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29061__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29061__auto____0 = (function (){
var statearr_44233 = [null,null,null,null,null,null,null];
(statearr_44233[(0)] = cljs$core$async$transduce_$_state_machine__29061__auto__);

(statearr_44233[(1)] = (1));

return statearr_44233;
});
var cljs$core$async$transduce_$_state_machine__29061__auto____1 = (function (state_44231){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_44231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e44234){if((e44234 instanceof Object)){
var ex__29064__auto__ = e44234;
var statearr_44235_44237 = state_44231;
(statearr_44235_44237[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44238 = state_44231;
state_44231 = G__44238;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29061__auto__ = function(state_44231){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29061__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29061__auto____1.call(this,state_44231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29061__auto____0;
cljs$core$async$transduce_$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29061__auto____1;
return cljs$core$async$transduce_$_state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_44236 = f__29156__auto__.call(null);
(statearr_44236[(6)] = c__29155__auto__);

return statearr_44236;
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
var G__44240 = arguments.length;
switch (G__44240) {
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
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_44265){
var state_val_44266 = (state_44265[(1)]);
if((state_val_44266 === (7))){
var inst_44247 = (state_44265[(2)]);
var state_44265__$1 = state_44265;
var statearr_44267_44288 = state_44265__$1;
(statearr_44267_44288[(2)] = inst_44247);

(statearr_44267_44288[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44266 === (1))){
var inst_44241 = cljs.core.seq.call(null,coll);
var inst_44242 = inst_44241;
var state_44265__$1 = (function (){var statearr_44268 = state_44265;
(statearr_44268[(7)] = inst_44242);

return statearr_44268;
})();
var statearr_44269_44289 = state_44265__$1;
(statearr_44269_44289[(2)] = null);

(statearr_44269_44289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44266 === (4))){
var inst_44242 = (state_44265[(7)]);
var inst_44245 = cljs.core.first.call(null,inst_44242);
var state_44265__$1 = state_44265;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44265__$1,(7),ch,inst_44245);
} else {
if((state_val_44266 === (13))){
var inst_44259 = (state_44265[(2)]);
var state_44265__$1 = state_44265;
var statearr_44270_44290 = state_44265__$1;
(statearr_44270_44290[(2)] = inst_44259);

(statearr_44270_44290[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44266 === (6))){
var inst_44250 = (state_44265[(2)]);
var state_44265__$1 = state_44265;
if(cljs.core.truth_(inst_44250)){
var statearr_44271_44291 = state_44265__$1;
(statearr_44271_44291[(1)] = (8));

} else {
var statearr_44272_44292 = state_44265__$1;
(statearr_44272_44292[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44266 === (3))){
var inst_44263 = (state_44265[(2)]);
var state_44265__$1 = state_44265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44265__$1,inst_44263);
} else {
if((state_val_44266 === (12))){
var state_44265__$1 = state_44265;
var statearr_44273_44293 = state_44265__$1;
(statearr_44273_44293[(2)] = null);

(statearr_44273_44293[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44266 === (2))){
var inst_44242 = (state_44265[(7)]);
var state_44265__$1 = state_44265;
if(cljs.core.truth_(inst_44242)){
var statearr_44274_44294 = state_44265__$1;
(statearr_44274_44294[(1)] = (4));

} else {
var statearr_44275_44295 = state_44265__$1;
(statearr_44275_44295[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44266 === (11))){
var inst_44256 = cljs.core.async.close_BANG_.call(null,ch);
var state_44265__$1 = state_44265;
var statearr_44276_44296 = state_44265__$1;
(statearr_44276_44296[(2)] = inst_44256);

(statearr_44276_44296[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44266 === (9))){
var state_44265__$1 = state_44265;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44277_44297 = state_44265__$1;
(statearr_44277_44297[(1)] = (11));

} else {
var statearr_44278_44298 = state_44265__$1;
(statearr_44278_44298[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44266 === (5))){
var inst_44242 = (state_44265[(7)]);
var state_44265__$1 = state_44265;
var statearr_44279_44299 = state_44265__$1;
(statearr_44279_44299[(2)] = inst_44242);

(statearr_44279_44299[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44266 === (10))){
var inst_44261 = (state_44265[(2)]);
var state_44265__$1 = state_44265;
var statearr_44280_44300 = state_44265__$1;
(statearr_44280_44300[(2)] = inst_44261);

(statearr_44280_44300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44266 === (8))){
var inst_44242 = (state_44265[(7)]);
var inst_44252 = cljs.core.next.call(null,inst_44242);
var inst_44242__$1 = inst_44252;
var state_44265__$1 = (function (){var statearr_44281 = state_44265;
(statearr_44281[(7)] = inst_44242__$1);

return statearr_44281;
})();
var statearr_44282_44301 = state_44265__$1;
(statearr_44282_44301[(2)] = null);

(statearr_44282_44301[(1)] = (2));


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
var statearr_44283 = [null,null,null,null,null,null,null,null];
(statearr_44283[(0)] = cljs$core$async$state_machine__29061__auto__);

(statearr_44283[(1)] = (1));

return statearr_44283;
});
var cljs$core$async$state_machine__29061__auto____1 = (function (state_44265){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_44265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e44284){if((e44284 instanceof Object)){
var ex__29064__auto__ = e44284;
var statearr_44285_44302 = state_44265;
(statearr_44285_44302[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44303 = state_44265;
state_44265 = G__44303;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
cljs$core$async$state_machine__29061__auto__ = function(state_44265){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29061__auto____1.call(this,state_44265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29061__auto____0;
cljs$core$async$state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29061__auto____1;
return cljs$core$async$state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_44286 = f__29156__auto__.call(null);
(statearr_44286[(6)] = c__29155__auto__);

return statearr_44286;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44304 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44304 = (function (ch,cs,meta44305){
this.ch = ch;
this.cs = cs;
this.meta44305 = meta44305;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44306,meta44305__$1){
var self__ = this;
var _44306__$1 = this;
return (new cljs.core.async.t_cljs$core$async44304(self__.ch,self__.cs,meta44305__$1));
}));

(cljs.core.async.t_cljs$core$async44304.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44306){
var self__ = this;
var _44306__$1 = this;
return self__.meta44305;
}));

(cljs.core.async.t_cljs$core$async44304.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44304.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async44304.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44304.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async44304.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async44304.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async44304.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta44305","meta44305",-2118574805,null)], null);
}));

(cljs.core.async.t_cljs$core$async44304.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44304.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44304");

(cljs.core.async.t_cljs$core$async44304.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async44304");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44304.
 */
cljs.core.async.__GT_t_cljs$core$async44304 = (function cljs$core$async$mult_$___GT_t_cljs$core$async44304(ch__$1,cs__$1,meta44305){
return (new cljs.core.async.t_cljs$core$async44304(ch__$1,cs__$1,meta44305));
});

}

return (new cljs.core.async.t_cljs$core$async44304(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__29155__auto___44526 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_44441){
var state_val_44442 = (state_44441[(1)]);
if((state_val_44442 === (7))){
var inst_44437 = (state_44441[(2)]);
var state_44441__$1 = state_44441;
var statearr_44443_44527 = state_44441__$1;
(statearr_44443_44527[(2)] = inst_44437);

(statearr_44443_44527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (20))){
var inst_44340 = (state_44441[(7)]);
var inst_44352 = cljs.core.first.call(null,inst_44340);
var inst_44353 = cljs.core.nth.call(null,inst_44352,(0),null);
var inst_44354 = cljs.core.nth.call(null,inst_44352,(1),null);
var state_44441__$1 = (function (){var statearr_44444 = state_44441;
(statearr_44444[(8)] = inst_44353);

return statearr_44444;
})();
if(cljs.core.truth_(inst_44354)){
var statearr_44445_44528 = state_44441__$1;
(statearr_44445_44528[(1)] = (22));

} else {
var statearr_44446_44529 = state_44441__$1;
(statearr_44446_44529[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (27))){
var inst_44382 = (state_44441[(9)]);
var inst_44389 = (state_44441[(10)]);
var inst_44384 = (state_44441[(11)]);
var inst_44309 = (state_44441[(12)]);
var inst_44389__$1 = cljs.core._nth.call(null,inst_44382,inst_44384);
var inst_44390 = cljs.core.async.put_BANG_.call(null,inst_44389__$1,inst_44309,done);
var state_44441__$1 = (function (){var statearr_44447 = state_44441;
(statearr_44447[(10)] = inst_44389__$1);

return statearr_44447;
})();
if(cljs.core.truth_(inst_44390)){
var statearr_44448_44530 = state_44441__$1;
(statearr_44448_44530[(1)] = (30));

} else {
var statearr_44449_44531 = state_44441__$1;
(statearr_44449_44531[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (1))){
var state_44441__$1 = state_44441;
var statearr_44450_44532 = state_44441__$1;
(statearr_44450_44532[(2)] = null);

(statearr_44450_44532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (24))){
var inst_44340 = (state_44441[(7)]);
var inst_44359 = (state_44441[(2)]);
var inst_44360 = cljs.core.next.call(null,inst_44340);
var inst_44318 = inst_44360;
var inst_44319 = null;
var inst_44320 = (0);
var inst_44321 = (0);
var state_44441__$1 = (function (){var statearr_44451 = state_44441;
(statearr_44451[(13)] = inst_44319);

(statearr_44451[(14)] = inst_44359);

(statearr_44451[(15)] = inst_44320);

(statearr_44451[(16)] = inst_44321);

(statearr_44451[(17)] = inst_44318);

return statearr_44451;
})();
var statearr_44452_44533 = state_44441__$1;
(statearr_44452_44533[(2)] = null);

(statearr_44452_44533[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (39))){
var state_44441__$1 = state_44441;
var statearr_44456_44534 = state_44441__$1;
(statearr_44456_44534[(2)] = null);

(statearr_44456_44534[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (4))){
var inst_44309 = (state_44441[(12)]);
var inst_44309__$1 = (state_44441[(2)]);
var inst_44310 = (inst_44309__$1 == null);
var state_44441__$1 = (function (){var statearr_44457 = state_44441;
(statearr_44457[(12)] = inst_44309__$1);

return statearr_44457;
})();
if(cljs.core.truth_(inst_44310)){
var statearr_44458_44535 = state_44441__$1;
(statearr_44458_44535[(1)] = (5));

} else {
var statearr_44459_44536 = state_44441__$1;
(statearr_44459_44536[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (15))){
var inst_44319 = (state_44441[(13)]);
var inst_44320 = (state_44441[(15)]);
var inst_44321 = (state_44441[(16)]);
var inst_44318 = (state_44441[(17)]);
var inst_44336 = (state_44441[(2)]);
var inst_44337 = (inst_44321 + (1));
var tmp44453 = inst_44319;
var tmp44454 = inst_44320;
var tmp44455 = inst_44318;
var inst_44318__$1 = tmp44455;
var inst_44319__$1 = tmp44453;
var inst_44320__$1 = tmp44454;
var inst_44321__$1 = inst_44337;
var state_44441__$1 = (function (){var statearr_44460 = state_44441;
(statearr_44460[(13)] = inst_44319__$1);

(statearr_44460[(18)] = inst_44336);

(statearr_44460[(15)] = inst_44320__$1);

(statearr_44460[(16)] = inst_44321__$1);

(statearr_44460[(17)] = inst_44318__$1);

return statearr_44460;
})();
var statearr_44461_44537 = state_44441__$1;
(statearr_44461_44537[(2)] = null);

(statearr_44461_44537[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (21))){
var inst_44363 = (state_44441[(2)]);
var state_44441__$1 = state_44441;
var statearr_44465_44538 = state_44441__$1;
(statearr_44465_44538[(2)] = inst_44363);

(statearr_44465_44538[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (31))){
var inst_44389 = (state_44441[(10)]);
var inst_44393 = done.call(null,null);
var inst_44394 = cljs.core.async.untap_STAR_.call(null,m,inst_44389);
var state_44441__$1 = (function (){var statearr_44466 = state_44441;
(statearr_44466[(19)] = inst_44393);

return statearr_44466;
})();
var statearr_44467_44539 = state_44441__$1;
(statearr_44467_44539[(2)] = inst_44394);

(statearr_44467_44539[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (32))){
var inst_44382 = (state_44441[(9)]);
var inst_44383 = (state_44441[(20)]);
var inst_44384 = (state_44441[(11)]);
var inst_44381 = (state_44441[(21)]);
var inst_44396 = (state_44441[(2)]);
var inst_44397 = (inst_44384 + (1));
var tmp44462 = inst_44382;
var tmp44463 = inst_44383;
var tmp44464 = inst_44381;
var inst_44381__$1 = tmp44464;
var inst_44382__$1 = tmp44462;
var inst_44383__$1 = tmp44463;
var inst_44384__$1 = inst_44397;
var state_44441__$1 = (function (){var statearr_44468 = state_44441;
(statearr_44468[(9)] = inst_44382__$1);

(statearr_44468[(20)] = inst_44383__$1);

(statearr_44468[(11)] = inst_44384__$1);

(statearr_44468[(21)] = inst_44381__$1);

(statearr_44468[(22)] = inst_44396);

return statearr_44468;
})();
var statearr_44469_44540 = state_44441__$1;
(statearr_44469_44540[(2)] = null);

(statearr_44469_44540[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (40))){
var inst_44409 = (state_44441[(23)]);
var inst_44413 = done.call(null,null);
var inst_44414 = cljs.core.async.untap_STAR_.call(null,m,inst_44409);
var state_44441__$1 = (function (){var statearr_44470 = state_44441;
(statearr_44470[(24)] = inst_44413);

return statearr_44470;
})();
var statearr_44471_44541 = state_44441__$1;
(statearr_44471_44541[(2)] = inst_44414);

(statearr_44471_44541[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (33))){
var inst_44400 = (state_44441[(25)]);
var inst_44402 = cljs.core.chunked_seq_QMARK_.call(null,inst_44400);
var state_44441__$1 = state_44441;
if(inst_44402){
var statearr_44472_44542 = state_44441__$1;
(statearr_44472_44542[(1)] = (36));

} else {
var statearr_44473_44543 = state_44441__$1;
(statearr_44473_44543[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (13))){
var inst_44330 = (state_44441[(26)]);
var inst_44333 = cljs.core.async.close_BANG_.call(null,inst_44330);
var state_44441__$1 = state_44441;
var statearr_44474_44544 = state_44441__$1;
(statearr_44474_44544[(2)] = inst_44333);

(statearr_44474_44544[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (22))){
var inst_44353 = (state_44441[(8)]);
var inst_44356 = cljs.core.async.close_BANG_.call(null,inst_44353);
var state_44441__$1 = state_44441;
var statearr_44475_44545 = state_44441__$1;
(statearr_44475_44545[(2)] = inst_44356);

(statearr_44475_44545[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (36))){
var inst_44400 = (state_44441[(25)]);
var inst_44404 = cljs.core.chunk_first.call(null,inst_44400);
var inst_44405 = cljs.core.chunk_rest.call(null,inst_44400);
var inst_44406 = cljs.core.count.call(null,inst_44404);
var inst_44381 = inst_44405;
var inst_44382 = inst_44404;
var inst_44383 = inst_44406;
var inst_44384 = (0);
var state_44441__$1 = (function (){var statearr_44476 = state_44441;
(statearr_44476[(9)] = inst_44382);

(statearr_44476[(20)] = inst_44383);

(statearr_44476[(11)] = inst_44384);

(statearr_44476[(21)] = inst_44381);

return statearr_44476;
})();
var statearr_44477_44546 = state_44441__$1;
(statearr_44477_44546[(2)] = null);

(statearr_44477_44546[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (41))){
var inst_44400 = (state_44441[(25)]);
var inst_44416 = (state_44441[(2)]);
var inst_44417 = cljs.core.next.call(null,inst_44400);
var inst_44381 = inst_44417;
var inst_44382 = null;
var inst_44383 = (0);
var inst_44384 = (0);
var state_44441__$1 = (function (){var statearr_44478 = state_44441;
(statearr_44478[(27)] = inst_44416);

(statearr_44478[(9)] = inst_44382);

(statearr_44478[(20)] = inst_44383);

(statearr_44478[(11)] = inst_44384);

(statearr_44478[(21)] = inst_44381);

return statearr_44478;
})();
var statearr_44479_44547 = state_44441__$1;
(statearr_44479_44547[(2)] = null);

(statearr_44479_44547[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (43))){
var state_44441__$1 = state_44441;
var statearr_44480_44548 = state_44441__$1;
(statearr_44480_44548[(2)] = null);

(statearr_44480_44548[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (29))){
var inst_44425 = (state_44441[(2)]);
var state_44441__$1 = state_44441;
var statearr_44481_44549 = state_44441__$1;
(statearr_44481_44549[(2)] = inst_44425);

(statearr_44481_44549[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (44))){
var inst_44434 = (state_44441[(2)]);
var state_44441__$1 = (function (){var statearr_44482 = state_44441;
(statearr_44482[(28)] = inst_44434);

return statearr_44482;
})();
var statearr_44483_44550 = state_44441__$1;
(statearr_44483_44550[(2)] = null);

(statearr_44483_44550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (6))){
var inst_44373 = (state_44441[(29)]);
var inst_44372 = cljs.core.deref.call(null,cs);
var inst_44373__$1 = cljs.core.keys.call(null,inst_44372);
var inst_44374 = cljs.core.count.call(null,inst_44373__$1);
var inst_44375 = cljs.core.reset_BANG_.call(null,dctr,inst_44374);
var inst_44380 = cljs.core.seq.call(null,inst_44373__$1);
var inst_44381 = inst_44380;
var inst_44382 = null;
var inst_44383 = (0);
var inst_44384 = (0);
var state_44441__$1 = (function (){var statearr_44484 = state_44441;
(statearr_44484[(30)] = inst_44375);

(statearr_44484[(9)] = inst_44382);

(statearr_44484[(20)] = inst_44383);

(statearr_44484[(11)] = inst_44384);

(statearr_44484[(21)] = inst_44381);

(statearr_44484[(29)] = inst_44373__$1);

return statearr_44484;
})();
var statearr_44485_44551 = state_44441__$1;
(statearr_44485_44551[(2)] = null);

(statearr_44485_44551[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (28))){
var inst_44400 = (state_44441[(25)]);
var inst_44381 = (state_44441[(21)]);
var inst_44400__$1 = cljs.core.seq.call(null,inst_44381);
var state_44441__$1 = (function (){var statearr_44486 = state_44441;
(statearr_44486[(25)] = inst_44400__$1);

return statearr_44486;
})();
if(inst_44400__$1){
var statearr_44487_44552 = state_44441__$1;
(statearr_44487_44552[(1)] = (33));

} else {
var statearr_44488_44553 = state_44441__$1;
(statearr_44488_44553[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (25))){
var inst_44383 = (state_44441[(20)]);
var inst_44384 = (state_44441[(11)]);
var inst_44386 = (inst_44384 < inst_44383);
var inst_44387 = inst_44386;
var state_44441__$1 = state_44441;
if(cljs.core.truth_(inst_44387)){
var statearr_44489_44554 = state_44441__$1;
(statearr_44489_44554[(1)] = (27));

} else {
var statearr_44490_44555 = state_44441__$1;
(statearr_44490_44555[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (34))){
var state_44441__$1 = state_44441;
var statearr_44491_44556 = state_44441__$1;
(statearr_44491_44556[(2)] = null);

(statearr_44491_44556[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (17))){
var state_44441__$1 = state_44441;
var statearr_44492_44557 = state_44441__$1;
(statearr_44492_44557[(2)] = null);

(statearr_44492_44557[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (3))){
var inst_44439 = (state_44441[(2)]);
var state_44441__$1 = state_44441;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44441__$1,inst_44439);
} else {
if((state_val_44442 === (12))){
var inst_44368 = (state_44441[(2)]);
var state_44441__$1 = state_44441;
var statearr_44493_44558 = state_44441__$1;
(statearr_44493_44558[(2)] = inst_44368);

(statearr_44493_44558[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (2))){
var state_44441__$1 = state_44441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44441__$1,(4),ch);
} else {
if((state_val_44442 === (23))){
var state_44441__$1 = state_44441;
var statearr_44494_44559 = state_44441__$1;
(statearr_44494_44559[(2)] = null);

(statearr_44494_44559[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (35))){
var inst_44423 = (state_44441[(2)]);
var state_44441__$1 = state_44441;
var statearr_44495_44560 = state_44441__$1;
(statearr_44495_44560[(2)] = inst_44423);

(statearr_44495_44560[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (19))){
var inst_44340 = (state_44441[(7)]);
var inst_44344 = cljs.core.chunk_first.call(null,inst_44340);
var inst_44345 = cljs.core.chunk_rest.call(null,inst_44340);
var inst_44346 = cljs.core.count.call(null,inst_44344);
var inst_44318 = inst_44345;
var inst_44319 = inst_44344;
var inst_44320 = inst_44346;
var inst_44321 = (0);
var state_44441__$1 = (function (){var statearr_44496 = state_44441;
(statearr_44496[(13)] = inst_44319);

(statearr_44496[(15)] = inst_44320);

(statearr_44496[(16)] = inst_44321);

(statearr_44496[(17)] = inst_44318);

return statearr_44496;
})();
var statearr_44497_44561 = state_44441__$1;
(statearr_44497_44561[(2)] = null);

(statearr_44497_44561[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (11))){
var inst_44340 = (state_44441[(7)]);
var inst_44318 = (state_44441[(17)]);
var inst_44340__$1 = cljs.core.seq.call(null,inst_44318);
var state_44441__$1 = (function (){var statearr_44498 = state_44441;
(statearr_44498[(7)] = inst_44340__$1);

return statearr_44498;
})();
if(inst_44340__$1){
var statearr_44499_44562 = state_44441__$1;
(statearr_44499_44562[(1)] = (16));

} else {
var statearr_44500_44563 = state_44441__$1;
(statearr_44500_44563[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (9))){
var inst_44370 = (state_44441[(2)]);
var state_44441__$1 = state_44441;
var statearr_44501_44564 = state_44441__$1;
(statearr_44501_44564[(2)] = inst_44370);

(statearr_44501_44564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (5))){
var inst_44316 = cljs.core.deref.call(null,cs);
var inst_44317 = cljs.core.seq.call(null,inst_44316);
var inst_44318 = inst_44317;
var inst_44319 = null;
var inst_44320 = (0);
var inst_44321 = (0);
var state_44441__$1 = (function (){var statearr_44502 = state_44441;
(statearr_44502[(13)] = inst_44319);

(statearr_44502[(15)] = inst_44320);

(statearr_44502[(16)] = inst_44321);

(statearr_44502[(17)] = inst_44318);

return statearr_44502;
})();
var statearr_44503_44565 = state_44441__$1;
(statearr_44503_44565[(2)] = null);

(statearr_44503_44565[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (14))){
var state_44441__$1 = state_44441;
var statearr_44504_44566 = state_44441__$1;
(statearr_44504_44566[(2)] = null);

(statearr_44504_44566[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (45))){
var inst_44431 = (state_44441[(2)]);
var state_44441__$1 = state_44441;
var statearr_44505_44567 = state_44441__$1;
(statearr_44505_44567[(2)] = inst_44431);

(statearr_44505_44567[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (26))){
var inst_44373 = (state_44441[(29)]);
var inst_44427 = (state_44441[(2)]);
var inst_44428 = cljs.core.seq.call(null,inst_44373);
var state_44441__$1 = (function (){var statearr_44506 = state_44441;
(statearr_44506[(31)] = inst_44427);

return statearr_44506;
})();
if(inst_44428){
var statearr_44507_44568 = state_44441__$1;
(statearr_44507_44568[(1)] = (42));

} else {
var statearr_44508_44569 = state_44441__$1;
(statearr_44508_44569[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (16))){
var inst_44340 = (state_44441[(7)]);
var inst_44342 = cljs.core.chunked_seq_QMARK_.call(null,inst_44340);
var state_44441__$1 = state_44441;
if(inst_44342){
var statearr_44509_44570 = state_44441__$1;
(statearr_44509_44570[(1)] = (19));

} else {
var statearr_44510_44571 = state_44441__$1;
(statearr_44510_44571[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (38))){
var inst_44420 = (state_44441[(2)]);
var state_44441__$1 = state_44441;
var statearr_44511_44572 = state_44441__$1;
(statearr_44511_44572[(2)] = inst_44420);

(statearr_44511_44572[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (30))){
var state_44441__$1 = state_44441;
var statearr_44512_44573 = state_44441__$1;
(statearr_44512_44573[(2)] = null);

(statearr_44512_44573[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (10))){
var inst_44319 = (state_44441[(13)]);
var inst_44321 = (state_44441[(16)]);
var inst_44329 = cljs.core._nth.call(null,inst_44319,inst_44321);
var inst_44330 = cljs.core.nth.call(null,inst_44329,(0),null);
var inst_44331 = cljs.core.nth.call(null,inst_44329,(1),null);
var state_44441__$1 = (function (){var statearr_44513 = state_44441;
(statearr_44513[(26)] = inst_44330);

return statearr_44513;
})();
if(cljs.core.truth_(inst_44331)){
var statearr_44514_44574 = state_44441__$1;
(statearr_44514_44574[(1)] = (13));

} else {
var statearr_44515_44575 = state_44441__$1;
(statearr_44515_44575[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (18))){
var inst_44366 = (state_44441[(2)]);
var state_44441__$1 = state_44441;
var statearr_44516_44576 = state_44441__$1;
(statearr_44516_44576[(2)] = inst_44366);

(statearr_44516_44576[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (42))){
var state_44441__$1 = state_44441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44441__$1,(45),dchan);
} else {
if((state_val_44442 === (37))){
var inst_44400 = (state_44441[(25)]);
var inst_44409 = (state_44441[(23)]);
var inst_44309 = (state_44441[(12)]);
var inst_44409__$1 = cljs.core.first.call(null,inst_44400);
var inst_44410 = cljs.core.async.put_BANG_.call(null,inst_44409__$1,inst_44309,done);
var state_44441__$1 = (function (){var statearr_44517 = state_44441;
(statearr_44517[(23)] = inst_44409__$1);

return statearr_44517;
})();
if(cljs.core.truth_(inst_44410)){
var statearr_44518_44577 = state_44441__$1;
(statearr_44518_44577[(1)] = (39));

} else {
var statearr_44519_44578 = state_44441__$1;
(statearr_44519_44578[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44442 === (8))){
var inst_44320 = (state_44441[(15)]);
var inst_44321 = (state_44441[(16)]);
var inst_44323 = (inst_44321 < inst_44320);
var inst_44324 = inst_44323;
var state_44441__$1 = state_44441;
if(cljs.core.truth_(inst_44324)){
var statearr_44520_44579 = state_44441__$1;
(statearr_44520_44579[(1)] = (10));

} else {
var statearr_44521_44580 = state_44441__$1;
(statearr_44521_44580[(1)] = (11));

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
var statearr_44522 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44522[(0)] = cljs$core$async$mult_$_state_machine__29061__auto__);

(statearr_44522[(1)] = (1));

return statearr_44522;
});
var cljs$core$async$mult_$_state_machine__29061__auto____1 = (function (state_44441){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_44441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e44523){if((e44523 instanceof Object)){
var ex__29064__auto__ = e44523;
var statearr_44524_44581 = state_44441;
(statearr_44524_44581[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44582 = state_44441;
state_44441 = G__44582;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29061__auto__ = function(state_44441){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29061__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29061__auto____1.call(this,state_44441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29061__auto____0;
cljs$core$async$mult_$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29061__auto____1;
return cljs$core$async$mult_$_state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_44525 = f__29156__auto__.call(null);
(statearr_44525[(6)] = c__29155__auto___44526);

return statearr_44525;
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
var G__44584 = arguments.length;
switch (G__44584) {
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
var len__4789__auto___44596 = arguments.length;
var i__4790__auto___44597 = (0);
while(true){
if((i__4790__auto___44597 < len__4789__auto___44596)){
args__4795__auto__.push((arguments[i__4790__auto___44597]));

var G__44598 = (i__4790__auto___44597 + (1));
i__4790__auto___44597 = G__44598;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__44590){
var map__44591 = p__44590;
var map__44591__$1 = (((((!((map__44591 == null))))?(((((map__44591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44591):map__44591);
var opts = map__44591__$1;
var statearr_44593_44599 = state;
(statearr_44593_44599[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_44594_44600 = state;
(statearr_44594_44600[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_44595_44601 = state;
(statearr_44595_44601[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq44586){
var G__44587 = cljs.core.first.call(null,seq44586);
var seq44586__$1 = cljs.core.next.call(null,seq44586);
var G__44588 = cljs.core.first.call(null,seq44586__$1);
var seq44586__$2 = cljs.core.next.call(null,seq44586__$1);
var G__44589 = cljs.core.first.call(null,seq44586__$2);
var seq44586__$3 = cljs.core.next.call(null,seq44586__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44587,G__44588,G__44589,seq44586__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44602 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44602 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta44603){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta44603 = meta44603;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44604,meta44603__$1){
var self__ = this;
var _44604__$1 = this;
return (new cljs.core.async.t_cljs$core$async44602(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta44603__$1));
}));

(cljs.core.async.t_cljs$core$async44602.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44604){
var self__ = this;
var _44604__$1 = this;
return self__.meta44603;
}));

(cljs.core.async.t_cljs$core$async44602.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44602.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async44602.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44602.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async44602.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async44602.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async44602.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async44602.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async44602.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta44603","meta44603",1147641240,null)], null);
}));

(cljs.core.async.t_cljs$core$async44602.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44602.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44602");

(cljs.core.async.t_cljs$core$async44602.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async44602");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44602.
 */
cljs.core.async.__GT_t_cljs$core$async44602 = (function cljs$core$async$mix_$___GT_t_cljs$core$async44602(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44603){
return (new cljs.core.async.t_cljs$core$async44602(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44603));
});

}

return (new cljs.core.async.t_cljs$core$async44602(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29155__auto___44766 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_44706){
var state_val_44707 = (state_44706[(1)]);
if((state_val_44707 === (7))){
var inst_44621 = (state_44706[(2)]);
var state_44706__$1 = state_44706;
var statearr_44708_44767 = state_44706__$1;
(statearr_44708_44767[(2)] = inst_44621);

(statearr_44708_44767[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (20))){
var inst_44633 = (state_44706[(7)]);
var state_44706__$1 = state_44706;
var statearr_44709_44768 = state_44706__$1;
(statearr_44709_44768[(2)] = inst_44633);

(statearr_44709_44768[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (27))){
var state_44706__$1 = state_44706;
var statearr_44710_44769 = state_44706__$1;
(statearr_44710_44769[(2)] = null);

(statearr_44710_44769[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (1))){
var inst_44608 = (state_44706[(8)]);
var inst_44608__$1 = calc_state.call(null);
var inst_44610 = (inst_44608__$1 == null);
var inst_44611 = cljs.core.not.call(null,inst_44610);
var state_44706__$1 = (function (){var statearr_44711 = state_44706;
(statearr_44711[(8)] = inst_44608__$1);

return statearr_44711;
})();
if(inst_44611){
var statearr_44712_44770 = state_44706__$1;
(statearr_44712_44770[(1)] = (2));

} else {
var statearr_44713_44771 = state_44706__$1;
(statearr_44713_44771[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (24))){
var inst_44657 = (state_44706[(9)]);
var inst_44680 = (state_44706[(10)]);
var inst_44666 = (state_44706[(11)]);
var inst_44680__$1 = inst_44657.call(null,inst_44666);
var state_44706__$1 = (function (){var statearr_44714 = state_44706;
(statearr_44714[(10)] = inst_44680__$1);

return statearr_44714;
})();
if(cljs.core.truth_(inst_44680__$1)){
var statearr_44715_44772 = state_44706__$1;
(statearr_44715_44772[(1)] = (29));

} else {
var statearr_44716_44773 = state_44706__$1;
(statearr_44716_44773[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (4))){
var inst_44624 = (state_44706[(2)]);
var state_44706__$1 = state_44706;
if(cljs.core.truth_(inst_44624)){
var statearr_44717_44774 = state_44706__$1;
(statearr_44717_44774[(1)] = (8));

} else {
var statearr_44718_44775 = state_44706__$1;
(statearr_44718_44775[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (15))){
var inst_44651 = (state_44706[(2)]);
var state_44706__$1 = state_44706;
if(cljs.core.truth_(inst_44651)){
var statearr_44719_44776 = state_44706__$1;
(statearr_44719_44776[(1)] = (19));

} else {
var statearr_44720_44777 = state_44706__$1;
(statearr_44720_44777[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (21))){
var inst_44656 = (state_44706[(12)]);
var inst_44656__$1 = (state_44706[(2)]);
var inst_44657 = cljs.core.get.call(null,inst_44656__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44658 = cljs.core.get.call(null,inst_44656__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44659 = cljs.core.get.call(null,inst_44656__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_44706__$1 = (function (){var statearr_44721 = state_44706;
(statearr_44721[(13)] = inst_44658);

(statearr_44721[(9)] = inst_44657);

(statearr_44721[(12)] = inst_44656__$1);

return statearr_44721;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_44706__$1,(22),inst_44659);
} else {
if((state_val_44707 === (31))){
var inst_44688 = (state_44706[(2)]);
var state_44706__$1 = state_44706;
if(cljs.core.truth_(inst_44688)){
var statearr_44722_44778 = state_44706__$1;
(statearr_44722_44778[(1)] = (32));

} else {
var statearr_44723_44779 = state_44706__$1;
(statearr_44723_44779[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (32))){
var inst_44665 = (state_44706[(14)]);
var state_44706__$1 = state_44706;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44706__$1,(35),out,inst_44665);
} else {
if((state_val_44707 === (33))){
var inst_44656 = (state_44706[(12)]);
var inst_44633 = inst_44656;
var state_44706__$1 = (function (){var statearr_44724 = state_44706;
(statearr_44724[(7)] = inst_44633);

return statearr_44724;
})();
var statearr_44725_44780 = state_44706__$1;
(statearr_44725_44780[(2)] = null);

(statearr_44725_44780[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (13))){
var inst_44633 = (state_44706[(7)]);
var inst_44640 = inst_44633.cljs$lang$protocol_mask$partition0$;
var inst_44641 = (inst_44640 & (64));
var inst_44642 = inst_44633.cljs$core$ISeq$;
var inst_44643 = (cljs.core.PROTOCOL_SENTINEL === inst_44642);
var inst_44644 = ((inst_44641) || (inst_44643));
var state_44706__$1 = state_44706;
if(cljs.core.truth_(inst_44644)){
var statearr_44726_44781 = state_44706__$1;
(statearr_44726_44781[(1)] = (16));

} else {
var statearr_44727_44782 = state_44706__$1;
(statearr_44727_44782[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (22))){
var inst_44665 = (state_44706[(14)]);
var inst_44666 = (state_44706[(11)]);
var inst_44664 = (state_44706[(2)]);
var inst_44665__$1 = cljs.core.nth.call(null,inst_44664,(0),null);
var inst_44666__$1 = cljs.core.nth.call(null,inst_44664,(1),null);
var inst_44667 = (inst_44665__$1 == null);
var inst_44668 = cljs.core._EQ_.call(null,inst_44666__$1,change);
var inst_44669 = ((inst_44667) || (inst_44668));
var state_44706__$1 = (function (){var statearr_44728 = state_44706;
(statearr_44728[(14)] = inst_44665__$1);

(statearr_44728[(11)] = inst_44666__$1);

return statearr_44728;
})();
if(cljs.core.truth_(inst_44669)){
var statearr_44729_44783 = state_44706__$1;
(statearr_44729_44783[(1)] = (23));

} else {
var statearr_44730_44784 = state_44706__$1;
(statearr_44730_44784[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (36))){
var inst_44656 = (state_44706[(12)]);
var inst_44633 = inst_44656;
var state_44706__$1 = (function (){var statearr_44731 = state_44706;
(statearr_44731[(7)] = inst_44633);

return statearr_44731;
})();
var statearr_44732_44785 = state_44706__$1;
(statearr_44732_44785[(2)] = null);

(statearr_44732_44785[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (29))){
var inst_44680 = (state_44706[(10)]);
var state_44706__$1 = state_44706;
var statearr_44733_44786 = state_44706__$1;
(statearr_44733_44786[(2)] = inst_44680);

(statearr_44733_44786[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (6))){
var state_44706__$1 = state_44706;
var statearr_44734_44787 = state_44706__$1;
(statearr_44734_44787[(2)] = false);

(statearr_44734_44787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (28))){
var inst_44676 = (state_44706[(2)]);
var inst_44677 = calc_state.call(null);
var inst_44633 = inst_44677;
var state_44706__$1 = (function (){var statearr_44735 = state_44706;
(statearr_44735[(15)] = inst_44676);

(statearr_44735[(7)] = inst_44633);

return statearr_44735;
})();
var statearr_44736_44788 = state_44706__$1;
(statearr_44736_44788[(2)] = null);

(statearr_44736_44788[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (25))){
var inst_44702 = (state_44706[(2)]);
var state_44706__$1 = state_44706;
var statearr_44737_44789 = state_44706__$1;
(statearr_44737_44789[(2)] = inst_44702);

(statearr_44737_44789[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (34))){
var inst_44700 = (state_44706[(2)]);
var state_44706__$1 = state_44706;
var statearr_44738_44790 = state_44706__$1;
(statearr_44738_44790[(2)] = inst_44700);

(statearr_44738_44790[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (17))){
var state_44706__$1 = state_44706;
var statearr_44739_44791 = state_44706__$1;
(statearr_44739_44791[(2)] = false);

(statearr_44739_44791[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (3))){
var state_44706__$1 = state_44706;
var statearr_44740_44792 = state_44706__$1;
(statearr_44740_44792[(2)] = false);

(statearr_44740_44792[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (12))){
var inst_44704 = (state_44706[(2)]);
var state_44706__$1 = state_44706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44706__$1,inst_44704);
} else {
if((state_val_44707 === (2))){
var inst_44608 = (state_44706[(8)]);
var inst_44613 = inst_44608.cljs$lang$protocol_mask$partition0$;
var inst_44614 = (inst_44613 & (64));
var inst_44615 = inst_44608.cljs$core$ISeq$;
var inst_44616 = (cljs.core.PROTOCOL_SENTINEL === inst_44615);
var inst_44617 = ((inst_44614) || (inst_44616));
var state_44706__$1 = state_44706;
if(cljs.core.truth_(inst_44617)){
var statearr_44741_44793 = state_44706__$1;
(statearr_44741_44793[(1)] = (5));

} else {
var statearr_44742_44794 = state_44706__$1;
(statearr_44742_44794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (23))){
var inst_44665 = (state_44706[(14)]);
var inst_44671 = (inst_44665 == null);
var state_44706__$1 = state_44706;
if(cljs.core.truth_(inst_44671)){
var statearr_44743_44795 = state_44706__$1;
(statearr_44743_44795[(1)] = (26));

} else {
var statearr_44744_44796 = state_44706__$1;
(statearr_44744_44796[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (35))){
var inst_44691 = (state_44706[(2)]);
var state_44706__$1 = state_44706;
if(cljs.core.truth_(inst_44691)){
var statearr_44745_44797 = state_44706__$1;
(statearr_44745_44797[(1)] = (36));

} else {
var statearr_44746_44798 = state_44706__$1;
(statearr_44746_44798[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (19))){
var inst_44633 = (state_44706[(7)]);
var inst_44653 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44633);
var state_44706__$1 = state_44706;
var statearr_44747_44799 = state_44706__$1;
(statearr_44747_44799[(2)] = inst_44653);

(statearr_44747_44799[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (11))){
var inst_44633 = (state_44706[(7)]);
var inst_44637 = (inst_44633 == null);
var inst_44638 = cljs.core.not.call(null,inst_44637);
var state_44706__$1 = state_44706;
if(inst_44638){
var statearr_44748_44800 = state_44706__$1;
(statearr_44748_44800[(1)] = (13));

} else {
var statearr_44749_44801 = state_44706__$1;
(statearr_44749_44801[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (9))){
var inst_44608 = (state_44706[(8)]);
var state_44706__$1 = state_44706;
var statearr_44750_44802 = state_44706__$1;
(statearr_44750_44802[(2)] = inst_44608);

(statearr_44750_44802[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (5))){
var state_44706__$1 = state_44706;
var statearr_44751_44803 = state_44706__$1;
(statearr_44751_44803[(2)] = true);

(statearr_44751_44803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (14))){
var state_44706__$1 = state_44706;
var statearr_44752_44804 = state_44706__$1;
(statearr_44752_44804[(2)] = false);

(statearr_44752_44804[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (26))){
var inst_44666 = (state_44706[(11)]);
var inst_44673 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_44666);
var state_44706__$1 = state_44706;
var statearr_44753_44805 = state_44706__$1;
(statearr_44753_44805[(2)] = inst_44673);

(statearr_44753_44805[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (16))){
var state_44706__$1 = state_44706;
var statearr_44754_44806 = state_44706__$1;
(statearr_44754_44806[(2)] = true);

(statearr_44754_44806[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (38))){
var inst_44696 = (state_44706[(2)]);
var state_44706__$1 = state_44706;
var statearr_44755_44807 = state_44706__$1;
(statearr_44755_44807[(2)] = inst_44696);

(statearr_44755_44807[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (30))){
var inst_44658 = (state_44706[(13)]);
var inst_44657 = (state_44706[(9)]);
var inst_44666 = (state_44706[(11)]);
var inst_44683 = cljs.core.empty_QMARK_.call(null,inst_44657);
var inst_44684 = inst_44658.call(null,inst_44666);
var inst_44685 = cljs.core.not.call(null,inst_44684);
var inst_44686 = ((inst_44683) && (inst_44685));
var state_44706__$1 = state_44706;
var statearr_44756_44808 = state_44706__$1;
(statearr_44756_44808[(2)] = inst_44686);

(statearr_44756_44808[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (10))){
var inst_44608 = (state_44706[(8)]);
var inst_44629 = (state_44706[(2)]);
var inst_44630 = cljs.core.get.call(null,inst_44629,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44631 = cljs.core.get.call(null,inst_44629,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44632 = cljs.core.get.call(null,inst_44629,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_44633 = inst_44608;
var state_44706__$1 = (function (){var statearr_44757 = state_44706;
(statearr_44757[(16)] = inst_44631);

(statearr_44757[(7)] = inst_44633);

(statearr_44757[(17)] = inst_44630);

(statearr_44757[(18)] = inst_44632);

return statearr_44757;
})();
var statearr_44758_44809 = state_44706__$1;
(statearr_44758_44809[(2)] = null);

(statearr_44758_44809[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (18))){
var inst_44648 = (state_44706[(2)]);
var state_44706__$1 = state_44706;
var statearr_44759_44810 = state_44706__$1;
(statearr_44759_44810[(2)] = inst_44648);

(statearr_44759_44810[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (37))){
var state_44706__$1 = state_44706;
var statearr_44760_44811 = state_44706__$1;
(statearr_44760_44811[(2)] = null);

(statearr_44760_44811[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44707 === (8))){
var inst_44608 = (state_44706[(8)]);
var inst_44626 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44608);
var state_44706__$1 = state_44706;
var statearr_44761_44812 = state_44706__$1;
(statearr_44761_44812[(2)] = inst_44626);

(statearr_44761_44812[(1)] = (10));


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
var statearr_44762 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44762[(0)] = cljs$core$async$mix_$_state_machine__29061__auto__);

(statearr_44762[(1)] = (1));

return statearr_44762;
});
var cljs$core$async$mix_$_state_machine__29061__auto____1 = (function (state_44706){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_44706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e44763){if((e44763 instanceof Object)){
var ex__29064__auto__ = e44763;
var statearr_44764_44813 = state_44706;
(statearr_44764_44813[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44814 = state_44706;
state_44706 = G__44814;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29061__auto__ = function(state_44706){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29061__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29061__auto____1.call(this,state_44706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29061__auto____0;
cljs$core$async$mix_$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29061__auto____1;
return cljs$core$async$mix_$_state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_44765 = f__29156__auto__.call(null);
(statearr_44765[(6)] = c__29155__auto___44766);

return statearr_44765;
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
var G__44816 = arguments.length;
switch (G__44816) {
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
var G__44820 = arguments.length;
switch (G__44820) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__44818_SHARP_){
if(cljs.core.truth_(p1__44818_SHARP_.call(null,topic))){
return p1__44818_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__44818_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44821 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44821 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta44822){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta44822 = meta44822;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44821.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44823,meta44822__$1){
var self__ = this;
var _44823__$1 = this;
return (new cljs.core.async.t_cljs$core$async44821(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta44822__$1));
}));

(cljs.core.async.t_cljs$core$async44821.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44823){
var self__ = this;
var _44823__$1 = this;
return self__.meta44822;
}));

(cljs.core.async.t_cljs$core$async44821.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44821.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async44821.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44821.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async44821.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async44821.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async44821.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async44821.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta44822","meta44822",-1064849136,null)], null);
}));

(cljs.core.async.t_cljs$core$async44821.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44821.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44821");

(cljs.core.async.t_cljs$core$async44821.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async44821");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44821.
 */
cljs.core.async.__GT_t_cljs$core$async44821 = (function cljs$core$async$__GT_t_cljs$core$async44821(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44822){
return (new cljs.core.async.t_cljs$core$async44821(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44822));
});

}

return (new cljs.core.async.t_cljs$core$async44821(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29155__auto___44941 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_44895){
var state_val_44896 = (state_44895[(1)]);
if((state_val_44896 === (7))){
var inst_44891 = (state_44895[(2)]);
var state_44895__$1 = state_44895;
var statearr_44897_44942 = state_44895__$1;
(statearr_44897_44942[(2)] = inst_44891);

(statearr_44897_44942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44896 === (20))){
var state_44895__$1 = state_44895;
var statearr_44898_44943 = state_44895__$1;
(statearr_44898_44943[(2)] = null);

(statearr_44898_44943[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44896 === (1))){
var state_44895__$1 = state_44895;
var statearr_44899_44944 = state_44895__$1;
(statearr_44899_44944[(2)] = null);

(statearr_44899_44944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44896 === (24))){
var inst_44874 = (state_44895[(7)]);
var inst_44883 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_44874);
var state_44895__$1 = state_44895;
var statearr_44900_44945 = state_44895__$1;
(statearr_44900_44945[(2)] = inst_44883);

(statearr_44900_44945[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44896 === (4))){
var inst_44826 = (state_44895[(8)]);
var inst_44826__$1 = (state_44895[(2)]);
var inst_44827 = (inst_44826__$1 == null);
var state_44895__$1 = (function (){var statearr_44901 = state_44895;
(statearr_44901[(8)] = inst_44826__$1);

return statearr_44901;
})();
if(cljs.core.truth_(inst_44827)){
var statearr_44902_44946 = state_44895__$1;
(statearr_44902_44946[(1)] = (5));

} else {
var statearr_44903_44947 = state_44895__$1;
(statearr_44903_44947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44896 === (15))){
var inst_44868 = (state_44895[(2)]);
var state_44895__$1 = state_44895;
var statearr_44904_44948 = state_44895__$1;
(statearr_44904_44948[(2)] = inst_44868);

(statearr_44904_44948[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44896 === (21))){
var inst_44888 = (state_44895[(2)]);
var state_44895__$1 = (function (){var statearr_44905 = state_44895;
(statearr_44905[(9)] = inst_44888);

return statearr_44905;
})();
var statearr_44906_44949 = state_44895__$1;
(statearr_44906_44949[(2)] = null);

(statearr_44906_44949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44896 === (13))){
var inst_44850 = (state_44895[(10)]);
var inst_44852 = cljs.core.chunked_seq_QMARK_.call(null,inst_44850);
var state_44895__$1 = state_44895;
if(inst_44852){
var statearr_44907_44950 = state_44895__$1;
(statearr_44907_44950[(1)] = (16));

} else {
var statearr_44908_44951 = state_44895__$1;
(statearr_44908_44951[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44896 === (22))){
var inst_44880 = (state_44895[(2)]);
var state_44895__$1 = state_44895;
if(cljs.core.truth_(inst_44880)){
var statearr_44909_44952 = state_44895__$1;
(statearr_44909_44952[(1)] = (23));

} else {
var statearr_44910_44953 = state_44895__$1;
(statearr_44910_44953[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44896 === (6))){
var inst_44876 = (state_44895[(11)]);
var inst_44826 = (state_44895[(8)]);
var inst_44874 = (state_44895[(7)]);
var inst_44874__$1 = topic_fn.call(null,inst_44826);
var inst_44875 = cljs.core.deref.call(null,mults);
var inst_44876__$1 = cljs.core.get.call(null,inst_44875,inst_44874__$1);
var state_44895__$1 = (function (){var statearr_44911 = state_44895;
(statearr_44911[(11)] = inst_44876__$1);

(statearr_44911[(7)] = inst_44874__$1);

return statearr_44911;
})();
if(cljs.core.truth_(inst_44876__$1)){
var statearr_44912_44954 = state_44895__$1;
(statearr_44912_44954[(1)] = (19));

} else {
var statearr_44913_44955 = state_44895__$1;
(statearr_44913_44955[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44896 === (25))){
var inst_44885 = (state_44895[(2)]);
var state_44895__$1 = state_44895;
var statearr_44914_44956 = state_44895__$1;
(statearr_44914_44956[(2)] = inst_44885);

(statearr_44914_44956[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44896 === (17))){
var inst_44850 = (state_44895[(10)]);
var inst_44859 = cljs.core.first.call(null,inst_44850);
var inst_44860 = cljs.core.async.muxch_STAR_.call(null,inst_44859);
var inst_44861 = cljs.core.async.close_BANG_.call(null,inst_44860);
var inst_44862 = cljs.core.next.call(null,inst_44850);
var inst_44836 = inst_44862;
var inst_44837 = null;
var inst_44838 = (0);
var inst_44839 = (0);
var state_44895__$1 = (function (){var statearr_44915 = state_44895;
(statearr_44915[(12)] = inst_44839);

(statearr_44915[(13)] = inst_44836);

(statearr_44915[(14)] = inst_44861);

(statearr_44915[(15)] = inst_44837);

(statearr_44915[(16)] = inst_44838);

return statearr_44915;
})();
var statearr_44916_44957 = state_44895__$1;
(statearr_44916_44957[(2)] = null);

(statearr_44916_44957[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44896 === (3))){
var inst_44893 = (state_44895[(2)]);
var state_44895__$1 = state_44895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44895__$1,inst_44893);
} else {
if((state_val_44896 === (12))){
var inst_44870 = (state_44895[(2)]);
var state_44895__$1 = state_44895;
var statearr_44917_44958 = state_44895__$1;
(statearr_44917_44958[(2)] = inst_44870);

(statearr_44917_44958[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44896 === (2))){
var state_44895__$1 = state_44895;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44895__$1,(4),ch);
} else {
if((state_val_44896 === (23))){
var state_44895__$1 = state_44895;
var statearr_44918_44959 = state_44895__$1;
(statearr_44918_44959[(2)] = null);

(statearr_44918_44959[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44896 === (19))){
var inst_44876 = (state_44895[(11)]);
var inst_44826 = (state_44895[(8)]);
var inst_44878 = cljs.core.async.muxch_STAR_.call(null,inst_44876);
var state_44895__$1 = state_44895;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44895__$1,(22),inst_44878,inst_44826);
} else {
if((state_val_44896 === (11))){
var inst_44836 = (state_44895[(13)]);
var inst_44850 = (state_44895[(10)]);
var inst_44850__$1 = cljs.core.seq.call(null,inst_44836);
var state_44895__$1 = (function (){var statearr_44919 = state_44895;
(statearr_44919[(10)] = inst_44850__$1);

return statearr_44919;
})();
if(inst_44850__$1){
var statearr_44920_44960 = state_44895__$1;
(statearr_44920_44960[(1)] = (13));

} else {
var statearr_44921_44961 = state_44895__$1;
(statearr_44921_44961[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44896 === (9))){
var inst_44872 = (state_44895[(2)]);
var state_44895__$1 = state_44895;
var statearr_44922_44962 = state_44895__$1;
(statearr_44922_44962[(2)] = inst_44872);

(statearr_44922_44962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44896 === (5))){
var inst_44833 = cljs.core.deref.call(null,mults);
var inst_44834 = cljs.core.vals.call(null,inst_44833);
var inst_44835 = cljs.core.seq.call(null,inst_44834);
var inst_44836 = inst_44835;
var inst_44837 = null;
var inst_44838 = (0);
var inst_44839 = (0);
var state_44895__$1 = (function (){var statearr_44923 = state_44895;
(statearr_44923[(12)] = inst_44839);

(statearr_44923[(13)] = inst_44836);

(statearr_44923[(15)] = inst_44837);

(statearr_44923[(16)] = inst_44838);

return statearr_44923;
})();
var statearr_44924_44963 = state_44895__$1;
(statearr_44924_44963[(2)] = null);

(statearr_44924_44963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44896 === (14))){
var state_44895__$1 = state_44895;
var statearr_44928_44964 = state_44895__$1;
(statearr_44928_44964[(2)] = null);

(statearr_44928_44964[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44896 === (16))){
var inst_44850 = (state_44895[(10)]);
var inst_44854 = cljs.core.chunk_first.call(null,inst_44850);
var inst_44855 = cljs.core.chunk_rest.call(null,inst_44850);
var inst_44856 = cljs.core.count.call(null,inst_44854);
var inst_44836 = inst_44855;
var inst_44837 = inst_44854;
var inst_44838 = inst_44856;
var inst_44839 = (0);
var state_44895__$1 = (function (){var statearr_44929 = state_44895;
(statearr_44929[(12)] = inst_44839);

(statearr_44929[(13)] = inst_44836);

(statearr_44929[(15)] = inst_44837);

(statearr_44929[(16)] = inst_44838);

return statearr_44929;
})();
var statearr_44930_44965 = state_44895__$1;
(statearr_44930_44965[(2)] = null);

(statearr_44930_44965[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44896 === (10))){
var inst_44839 = (state_44895[(12)]);
var inst_44836 = (state_44895[(13)]);
var inst_44837 = (state_44895[(15)]);
var inst_44838 = (state_44895[(16)]);
var inst_44844 = cljs.core._nth.call(null,inst_44837,inst_44839);
var inst_44845 = cljs.core.async.muxch_STAR_.call(null,inst_44844);
var inst_44846 = cljs.core.async.close_BANG_.call(null,inst_44845);
var inst_44847 = (inst_44839 + (1));
var tmp44925 = inst_44836;
var tmp44926 = inst_44837;
var tmp44927 = inst_44838;
var inst_44836__$1 = tmp44925;
var inst_44837__$1 = tmp44926;
var inst_44838__$1 = tmp44927;
var inst_44839__$1 = inst_44847;
var state_44895__$1 = (function (){var statearr_44931 = state_44895;
(statearr_44931[(12)] = inst_44839__$1);

(statearr_44931[(13)] = inst_44836__$1);

(statearr_44931[(15)] = inst_44837__$1);

(statearr_44931[(16)] = inst_44838__$1);

(statearr_44931[(17)] = inst_44846);

return statearr_44931;
})();
var statearr_44932_44966 = state_44895__$1;
(statearr_44932_44966[(2)] = null);

(statearr_44932_44966[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44896 === (18))){
var inst_44865 = (state_44895[(2)]);
var state_44895__$1 = state_44895;
var statearr_44933_44967 = state_44895__$1;
(statearr_44933_44967[(2)] = inst_44865);

(statearr_44933_44967[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44896 === (8))){
var inst_44839 = (state_44895[(12)]);
var inst_44838 = (state_44895[(16)]);
var inst_44841 = (inst_44839 < inst_44838);
var inst_44842 = inst_44841;
var state_44895__$1 = state_44895;
if(cljs.core.truth_(inst_44842)){
var statearr_44934_44968 = state_44895__$1;
(statearr_44934_44968[(1)] = (10));

} else {
var statearr_44935_44969 = state_44895__$1;
(statearr_44935_44969[(1)] = (11));

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
var statearr_44936 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44936[(0)] = cljs$core$async$state_machine__29061__auto__);

(statearr_44936[(1)] = (1));

return statearr_44936;
});
var cljs$core$async$state_machine__29061__auto____1 = (function (state_44895){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_44895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e44937){if((e44937 instanceof Object)){
var ex__29064__auto__ = e44937;
var statearr_44938_44970 = state_44895;
(statearr_44938_44970[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44971 = state_44895;
state_44895 = G__44971;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
cljs$core$async$state_machine__29061__auto__ = function(state_44895){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29061__auto____1.call(this,state_44895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29061__auto____0;
cljs$core$async$state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29061__auto____1;
return cljs$core$async$state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_44939 = f__29156__auto__.call(null);
(statearr_44939[(6)] = c__29155__auto___44941);

return statearr_44939;
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
var G__44973 = arguments.length;
switch (G__44973) {
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
var G__44976 = arguments.length;
switch (G__44976) {
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
var G__44979 = arguments.length;
switch (G__44979) {
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
var c__29155__auto___45046 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_45018){
var state_val_45019 = (state_45018[(1)]);
if((state_val_45019 === (7))){
var state_45018__$1 = state_45018;
var statearr_45020_45047 = state_45018__$1;
(statearr_45020_45047[(2)] = null);

(statearr_45020_45047[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45019 === (1))){
var state_45018__$1 = state_45018;
var statearr_45021_45048 = state_45018__$1;
(statearr_45021_45048[(2)] = null);

(statearr_45021_45048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45019 === (4))){
var inst_44982 = (state_45018[(7)]);
var inst_44984 = (inst_44982 < cnt);
var state_45018__$1 = state_45018;
if(cljs.core.truth_(inst_44984)){
var statearr_45022_45049 = state_45018__$1;
(statearr_45022_45049[(1)] = (6));

} else {
var statearr_45023_45050 = state_45018__$1;
(statearr_45023_45050[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45019 === (15))){
var inst_45014 = (state_45018[(2)]);
var state_45018__$1 = state_45018;
var statearr_45024_45051 = state_45018__$1;
(statearr_45024_45051[(2)] = inst_45014);

(statearr_45024_45051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45019 === (13))){
var inst_45007 = cljs.core.async.close_BANG_.call(null,out);
var state_45018__$1 = state_45018;
var statearr_45025_45052 = state_45018__$1;
(statearr_45025_45052[(2)] = inst_45007);

(statearr_45025_45052[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45019 === (6))){
var state_45018__$1 = state_45018;
var statearr_45026_45053 = state_45018__$1;
(statearr_45026_45053[(2)] = null);

(statearr_45026_45053[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45019 === (3))){
var inst_45016 = (state_45018[(2)]);
var state_45018__$1 = state_45018;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45018__$1,inst_45016);
} else {
if((state_val_45019 === (12))){
var inst_45004 = (state_45018[(8)]);
var inst_45004__$1 = (state_45018[(2)]);
var inst_45005 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_45004__$1);
var state_45018__$1 = (function (){var statearr_45027 = state_45018;
(statearr_45027[(8)] = inst_45004__$1);

return statearr_45027;
})();
if(cljs.core.truth_(inst_45005)){
var statearr_45028_45054 = state_45018__$1;
(statearr_45028_45054[(1)] = (13));

} else {
var statearr_45029_45055 = state_45018__$1;
(statearr_45029_45055[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45019 === (2))){
var inst_44981 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_44982 = (0);
var state_45018__$1 = (function (){var statearr_45030 = state_45018;
(statearr_45030[(7)] = inst_44982);

(statearr_45030[(9)] = inst_44981);

return statearr_45030;
})();
var statearr_45031_45056 = state_45018__$1;
(statearr_45031_45056[(2)] = null);

(statearr_45031_45056[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45019 === (11))){
var inst_44982 = (state_45018[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_45018,(10),Object,null,(9));
var inst_44991 = chs__$1.call(null,inst_44982);
var inst_44992 = done.call(null,inst_44982);
var inst_44993 = cljs.core.async.take_BANG_.call(null,inst_44991,inst_44992);
var state_45018__$1 = state_45018;
var statearr_45032_45057 = state_45018__$1;
(statearr_45032_45057[(2)] = inst_44993);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45018__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45019 === (9))){
var inst_44982 = (state_45018[(7)]);
var inst_44995 = (state_45018[(2)]);
var inst_44996 = (inst_44982 + (1));
var inst_44982__$1 = inst_44996;
var state_45018__$1 = (function (){var statearr_45033 = state_45018;
(statearr_45033[(10)] = inst_44995);

(statearr_45033[(7)] = inst_44982__$1);

return statearr_45033;
})();
var statearr_45034_45058 = state_45018__$1;
(statearr_45034_45058[(2)] = null);

(statearr_45034_45058[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45019 === (5))){
var inst_45002 = (state_45018[(2)]);
var state_45018__$1 = (function (){var statearr_45035 = state_45018;
(statearr_45035[(11)] = inst_45002);

return statearr_45035;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45018__$1,(12),dchan);
} else {
if((state_val_45019 === (14))){
var inst_45004 = (state_45018[(8)]);
var inst_45009 = cljs.core.apply.call(null,f,inst_45004);
var state_45018__$1 = state_45018;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45018__$1,(16),out,inst_45009);
} else {
if((state_val_45019 === (16))){
var inst_45011 = (state_45018[(2)]);
var state_45018__$1 = (function (){var statearr_45036 = state_45018;
(statearr_45036[(12)] = inst_45011);

return statearr_45036;
})();
var statearr_45037_45059 = state_45018__$1;
(statearr_45037_45059[(2)] = null);

(statearr_45037_45059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45019 === (10))){
var inst_44986 = (state_45018[(2)]);
var inst_44987 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_45018__$1 = (function (){var statearr_45038 = state_45018;
(statearr_45038[(13)] = inst_44986);

return statearr_45038;
})();
var statearr_45039_45060 = state_45018__$1;
(statearr_45039_45060[(2)] = inst_44987);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45018__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45019 === (8))){
var inst_45000 = (state_45018[(2)]);
var state_45018__$1 = state_45018;
var statearr_45040_45061 = state_45018__$1;
(statearr_45040_45061[(2)] = inst_45000);

(statearr_45040_45061[(1)] = (5));


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
var statearr_45041 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45041[(0)] = cljs$core$async$state_machine__29061__auto__);

(statearr_45041[(1)] = (1));

return statearr_45041;
});
var cljs$core$async$state_machine__29061__auto____1 = (function (state_45018){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_45018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e45042){if((e45042 instanceof Object)){
var ex__29064__auto__ = e45042;
var statearr_45043_45062 = state_45018;
(statearr_45043_45062[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45042;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45063 = state_45018;
state_45018 = G__45063;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
cljs$core$async$state_machine__29061__auto__ = function(state_45018){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29061__auto____1.call(this,state_45018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29061__auto____0;
cljs$core$async$state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29061__auto____1;
return cljs$core$async$state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_45044 = f__29156__auto__.call(null);
(statearr_45044[(6)] = c__29155__auto___45046);

return statearr_45044;
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
var G__45066 = arguments.length;
switch (G__45066) {
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
var c__29155__auto___45120 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_45098){
var state_val_45099 = (state_45098[(1)]);
if((state_val_45099 === (7))){
var inst_45078 = (state_45098[(7)]);
var inst_45077 = (state_45098[(8)]);
var inst_45077__$1 = (state_45098[(2)]);
var inst_45078__$1 = cljs.core.nth.call(null,inst_45077__$1,(0),null);
var inst_45079 = cljs.core.nth.call(null,inst_45077__$1,(1),null);
var inst_45080 = (inst_45078__$1 == null);
var state_45098__$1 = (function (){var statearr_45100 = state_45098;
(statearr_45100[(9)] = inst_45079);

(statearr_45100[(7)] = inst_45078__$1);

(statearr_45100[(8)] = inst_45077__$1);

return statearr_45100;
})();
if(cljs.core.truth_(inst_45080)){
var statearr_45101_45121 = state_45098__$1;
(statearr_45101_45121[(1)] = (8));

} else {
var statearr_45102_45122 = state_45098__$1;
(statearr_45102_45122[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45099 === (1))){
var inst_45067 = cljs.core.vec.call(null,chs);
var inst_45068 = inst_45067;
var state_45098__$1 = (function (){var statearr_45103 = state_45098;
(statearr_45103[(10)] = inst_45068);

return statearr_45103;
})();
var statearr_45104_45123 = state_45098__$1;
(statearr_45104_45123[(2)] = null);

(statearr_45104_45123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45099 === (4))){
var inst_45068 = (state_45098[(10)]);
var state_45098__$1 = state_45098;
return cljs.core.async.ioc_alts_BANG_.call(null,state_45098__$1,(7),inst_45068);
} else {
if((state_val_45099 === (6))){
var inst_45094 = (state_45098[(2)]);
var state_45098__$1 = state_45098;
var statearr_45105_45124 = state_45098__$1;
(statearr_45105_45124[(2)] = inst_45094);

(statearr_45105_45124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45099 === (3))){
var inst_45096 = (state_45098[(2)]);
var state_45098__$1 = state_45098;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45098__$1,inst_45096);
} else {
if((state_val_45099 === (2))){
var inst_45068 = (state_45098[(10)]);
var inst_45070 = cljs.core.count.call(null,inst_45068);
var inst_45071 = (inst_45070 > (0));
var state_45098__$1 = state_45098;
if(cljs.core.truth_(inst_45071)){
var statearr_45107_45125 = state_45098__$1;
(statearr_45107_45125[(1)] = (4));

} else {
var statearr_45108_45126 = state_45098__$1;
(statearr_45108_45126[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45099 === (11))){
var inst_45068 = (state_45098[(10)]);
var inst_45087 = (state_45098[(2)]);
var tmp45106 = inst_45068;
var inst_45068__$1 = tmp45106;
var state_45098__$1 = (function (){var statearr_45109 = state_45098;
(statearr_45109[(11)] = inst_45087);

(statearr_45109[(10)] = inst_45068__$1);

return statearr_45109;
})();
var statearr_45110_45127 = state_45098__$1;
(statearr_45110_45127[(2)] = null);

(statearr_45110_45127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45099 === (9))){
var inst_45078 = (state_45098[(7)]);
var state_45098__$1 = state_45098;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45098__$1,(11),out,inst_45078);
} else {
if((state_val_45099 === (5))){
var inst_45092 = cljs.core.async.close_BANG_.call(null,out);
var state_45098__$1 = state_45098;
var statearr_45111_45128 = state_45098__$1;
(statearr_45111_45128[(2)] = inst_45092);

(statearr_45111_45128[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45099 === (10))){
var inst_45090 = (state_45098[(2)]);
var state_45098__$1 = state_45098;
var statearr_45112_45129 = state_45098__$1;
(statearr_45112_45129[(2)] = inst_45090);

(statearr_45112_45129[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45099 === (8))){
var inst_45079 = (state_45098[(9)]);
var inst_45068 = (state_45098[(10)]);
var inst_45078 = (state_45098[(7)]);
var inst_45077 = (state_45098[(8)]);
var inst_45082 = (function (){var cs = inst_45068;
var vec__45073 = inst_45077;
var v = inst_45078;
var c = inst_45079;
return (function (p1__45064_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__45064_SHARP_);
});
})();
var inst_45083 = cljs.core.filterv.call(null,inst_45082,inst_45068);
var inst_45068__$1 = inst_45083;
var state_45098__$1 = (function (){var statearr_45113 = state_45098;
(statearr_45113[(10)] = inst_45068__$1);

return statearr_45113;
})();
var statearr_45114_45130 = state_45098__$1;
(statearr_45114_45130[(2)] = null);

(statearr_45114_45130[(1)] = (2));


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
var statearr_45115 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45115[(0)] = cljs$core$async$state_machine__29061__auto__);

(statearr_45115[(1)] = (1));

return statearr_45115;
});
var cljs$core$async$state_machine__29061__auto____1 = (function (state_45098){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_45098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e45116){if((e45116 instanceof Object)){
var ex__29064__auto__ = e45116;
var statearr_45117_45131 = state_45098;
(statearr_45117_45131[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45132 = state_45098;
state_45098 = G__45132;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
cljs$core$async$state_machine__29061__auto__ = function(state_45098){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29061__auto____1.call(this,state_45098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29061__auto____0;
cljs$core$async$state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29061__auto____1;
return cljs$core$async$state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_45118 = f__29156__auto__.call(null);
(statearr_45118[(6)] = c__29155__auto___45120);

return statearr_45118;
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
var G__45134 = arguments.length;
switch (G__45134) {
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
var c__29155__auto___45179 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_45158){
var state_val_45159 = (state_45158[(1)]);
if((state_val_45159 === (7))){
var inst_45140 = (state_45158[(7)]);
var inst_45140__$1 = (state_45158[(2)]);
var inst_45141 = (inst_45140__$1 == null);
var inst_45142 = cljs.core.not.call(null,inst_45141);
var state_45158__$1 = (function (){var statearr_45160 = state_45158;
(statearr_45160[(7)] = inst_45140__$1);

return statearr_45160;
})();
if(inst_45142){
var statearr_45161_45180 = state_45158__$1;
(statearr_45161_45180[(1)] = (8));

} else {
var statearr_45162_45181 = state_45158__$1;
(statearr_45162_45181[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45159 === (1))){
var inst_45135 = (0);
var state_45158__$1 = (function (){var statearr_45163 = state_45158;
(statearr_45163[(8)] = inst_45135);

return statearr_45163;
})();
var statearr_45164_45182 = state_45158__$1;
(statearr_45164_45182[(2)] = null);

(statearr_45164_45182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45159 === (4))){
var state_45158__$1 = state_45158;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45158__$1,(7),ch);
} else {
if((state_val_45159 === (6))){
var inst_45153 = (state_45158[(2)]);
var state_45158__$1 = state_45158;
var statearr_45165_45183 = state_45158__$1;
(statearr_45165_45183[(2)] = inst_45153);

(statearr_45165_45183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45159 === (3))){
var inst_45155 = (state_45158[(2)]);
var inst_45156 = cljs.core.async.close_BANG_.call(null,out);
var state_45158__$1 = (function (){var statearr_45166 = state_45158;
(statearr_45166[(9)] = inst_45155);

return statearr_45166;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45158__$1,inst_45156);
} else {
if((state_val_45159 === (2))){
var inst_45135 = (state_45158[(8)]);
var inst_45137 = (inst_45135 < n);
var state_45158__$1 = state_45158;
if(cljs.core.truth_(inst_45137)){
var statearr_45167_45184 = state_45158__$1;
(statearr_45167_45184[(1)] = (4));

} else {
var statearr_45168_45185 = state_45158__$1;
(statearr_45168_45185[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45159 === (11))){
var inst_45135 = (state_45158[(8)]);
var inst_45145 = (state_45158[(2)]);
var inst_45146 = (inst_45135 + (1));
var inst_45135__$1 = inst_45146;
var state_45158__$1 = (function (){var statearr_45169 = state_45158;
(statearr_45169[(8)] = inst_45135__$1);

(statearr_45169[(10)] = inst_45145);

return statearr_45169;
})();
var statearr_45170_45186 = state_45158__$1;
(statearr_45170_45186[(2)] = null);

(statearr_45170_45186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45159 === (9))){
var state_45158__$1 = state_45158;
var statearr_45171_45187 = state_45158__$1;
(statearr_45171_45187[(2)] = null);

(statearr_45171_45187[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45159 === (5))){
var state_45158__$1 = state_45158;
var statearr_45172_45188 = state_45158__$1;
(statearr_45172_45188[(2)] = null);

(statearr_45172_45188[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45159 === (10))){
var inst_45150 = (state_45158[(2)]);
var state_45158__$1 = state_45158;
var statearr_45173_45189 = state_45158__$1;
(statearr_45173_45189[(2)] = inst_45150);

(statearr_45173_45189[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45159 === (8))){
var inst_45140 = (state_45158[(7)]);
var state_45158__$1 = state_45158;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45158__$1,(11),out,inst_45140);
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
var statearr_45174 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45174[(0)] = cljs$core$async$state_machine__29061__auto__);

(statearr_45174[(1)] = (1));

return statearr_45174;
});
var cljs$core$async$state_machine__29061__auto____1 = (function (state_45158){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_45158);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e45175){if((e45175 instanceof Object)){
var ex__29064__auto__ = e45175;
var statearr_45176_45190 = state_45158;
(statearr_45176_45190[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45175;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45191 = state_45158;
state_45158 = G__45191;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
cljs$core$async$state_machine__29061__auto__ = function(state_45158){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29061__auto____1.call(this,state_45158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29061__auto____0;
cljs$core$async$state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29061__auto____1;
return cljs$core$async$state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_45177 = f__29156__auto__.call(null);
(statearr_45177[(6)] = c__29155__auto___45179);

return statearr_45177;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45193 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45193 = (function (f,ch,meta45194){
this.f = f;
this.ch = ch;
this.meta45194 = meta45194;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45195,meta45194__$1){
var self__ = this;
var _45195__$1 = this;
return (new cljs.core.async.t_cljs$core$async45193(self__.f,self__.ch,meta45194__$1));
}));

(cljs.core.async.t_cljs$core$async45193.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45195){
var self__ = this;
var _45195__$1 = this;
return self__.meta45194;
}));

(cljs.core.async.t_cljs$core$async45193.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45193.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async45193.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async45193.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45193.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45196 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45196 = (function (f,ch,meta45194,_,fn1,meta45197){
this.f = f;
this.ch = ch;
this.meta45194 = meta45194;
this._ = _;
this.fn1 = fn1;
this.meta45197 = meta45197;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45198,meta45197__$1){
var self__ = this;
var _45198__$1 = this;
return (new cljs.core.async.t_cljs$core$async45196(self__.f,self__.ch,self__.meta45194,self__._,self__.fn1,meta45197__$1));
}));

(cljs.core.async.t_cljs$core$async45196.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45198){
var self__ = this;
var _45198__$1 = this;
return self__.meta45197;
}));

(cljs.core.async.t_cljs$core$async45196.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45196.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async45196.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45196.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__45192_SHARP_){
return f1.call(null,(((p1__45192_SHARP_ == null))?null:self__.f.call(null,p1__45192_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async45196.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45194","meta45194",-1476227870,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async45193","cljs.core.async/t_cljs$core$async45193",1026577425,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta45197","meta45197",1028296486,null)], null);
}));

(cljs.core.async.t_cljs$core$async45196.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45196.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45196");

(cljs.core.async.t_cljs$core$async45196.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async45196");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45196.
 */
cljs.core.async.__GT_t_cljs$core$async45196 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45196(f__$1,ch__$1,meta45194__$1,___$2,fn1__$1,meta45197){
return (new cljs.core.async.t_cljs$core$async45196(f__$1,ch__$1,meta45194__$1,___$2,fn1__$1,meta45197));
});

}

return (new cljs.core.async.t_cljs$core$async45196(self__.f,self__.ch,self__.meta45194,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async45193.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45193.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async45193.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45194","meta45194",-1476227870,null)], null);
}));

(cljs.core.async.t_cljs$core$async45193.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45193.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45193");

(cljs.core.async.t_cljs$core$async45193.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async45193");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45193.
 */
cljs.core.async.__GT_t_cljs$core$async45193 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45193(f__$1,ch__$1,meta45194){
return (new cljs.core.async.t_cljs$core$async45193(f__$1,ch__$1,meta45194));
});

}

return (new cljs.core.async.t_cljs$core$async45193(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45199 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45199 = (function (f,ch,meta45200){
this.f = f;
this.ch = ch;
this.meta45200 = meta45200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45201,meta45200__$1){
var self__ = this;
var _45201__$1 = this;
return (new cljs.core.async.t_cljs$core$async45199(self__.f,self__.ch,meta45200__$1));
}));

(cljs.core.async.t_cljs$core$async45199.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45201){
var self__ = this;
var _45201__$1 = this;
return self__.meta45200;
}));

(cljs.core.async.t_cljs$core$async45199.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45199.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async45199.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45199.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async45199.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45199.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async45199.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45200","meta45200",1785701602,null)], null);
}));

(cljs.core.async.t_cljs$core$async45199.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45199.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45199");

(cljs.core.async.t_cljs$core$async45199.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async45199");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45199.
 */
cljs.core.async.__GT_t_cljs$core$async45199 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async45199(f__$1,ch__$1,meta45200){
return (new cljs.core.async.t_cljs$core$async45199(f__$1,ch__$1,meta45200));
});

}

return (new cljs.core.async.t_cljs$core$async45199(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45202 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45202 = (function (p,ch,meta45203){
this.p = p;
this.ch = ch;
this.meta45203 = meta45203;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45204,meta45203__$1){
var self__ = this;
var _45204__$1 = this;
return (new cljs.core.async.t_cljs$core$async45202(self__.p,self__.ch,meta45203__$1));
}));

(cljs.core.async.t_cljs$core$async45202.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45204){
var self__ = this;
var _45204__$1 = this;
return self__.meta45203;
}));

(cljs.core.async.t_cljs$core$async45202.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45202.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async45202.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async45202.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45202.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async45202.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45202.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async45202.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45203","meta45203",1647751616,null)], null);
}));

(cljs.core.async.t_cljs$core$async45202.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45202.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45202");

(cljs.core.async.t_cljs$core$async45202.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async45202");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45202.
 */
cljs.core.async.__GT_t_cljs$core$async45202 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async45202(p__$1,ch__$1,meta45203){
return (new cljs.core.async.t_cljs$core$async45202(p__$1,ch__$1,meta45203));
});

}

return (new cljs.core.async.t_cljs$core$async45202(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__45206 = arguments.length;
switch (G__45206) {
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
var c__29155__auto___45246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_45227){
var state_val_45228 = (state_45227[(1)]);
if((state_val_45228 === (7))){
var inst_45223 = (state_45227[(2)]);
var state_45227__$1 = state_45227;
var statearr_45229_45247 = state_45227__$1;
(statearr_45229_45247[(2)] = inst_45223);

(statearr_45229_45247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45228 === (1))){
var state_45227__$1 = state_45227;
var statearr_45230_45248 = state_45227__$1;
(statearr_45230_45248[(2)] = null);

(statearr_45230_45248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45228 === (4))){
var inst_45209 = (state_45227[(7)]);
var inst_45209__$1 = (state_45227[(2)]);
var inst_45210 = (inst_45209__$1 == null);
var state_45227__$1 = (function (){var statearr_45231 = state_45227;
(statearr_45231[(7)] = inst_45209__$1);

return statearr_45231;
})();
if(cljs.core.truth_(inst_45210)){
var statearr_45232_45249 = state_45227__$1;
(statearr_45232_45249[(1)] = (5));

} else {
var statearr_45233_45250 = state_45227__$1;
(statearr_45233_45250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45228 === (6))){
var inst_45209 = (state_45227[(7)]);
var inst_45214 = p.call(null,inst_45209);
var state_45227__$1 = state_45227;
if(cljs.core.truth_(inst_45214)){
var statearr_45234_45251 = state_45227__$1;
(statearr_45234_45251[(1)] = (8));

} else {
var statearr_45235_45252 = state_45227__$1;
(statearr_45235_45252[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45228 === (3))){
var inst_45225 = (state_45227[(2)]);
var state_45227__$1 = state_45227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45227__$1,inst_45225);
} else {
if((state_val_45228 === (2))){
var state_45227__$1 = state_45227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45227__$1,(4),ch);
} else {
if((state_val_45228 === (11))){
var inst_45217 = (state_45227[(2)]);
var state_45227__$1 = state_45227;
var statearr_45236_45253 = state_45227__$1;
(statearr_45236_45253[(2)] = inst_45217);

(statearr_45236_45253[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45228 === (9))){
var state_45227__$1 = state_45227;
var statearr_45237_45254 = state_45227__$1;
(statearr_45237_45254[(2)] = null);

(statearr_45237_45254[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45228 === (5))){
var inst_45212 = cljs.core.async.close_BANG_.call(null,out);
var state_45227__$1 = state_45227;
var statearr_45238_45255 = state_45227__$1;
(statearr_45238_45255[(2)] = inst_45212);

(statearr_45238_45255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45228 === (10))){
var inst_45220 = (state_45227[(2)]);
var state_45227__$1 = (function (){var statearr_45239 = state_45227;
(statearr_45239[(8)] = inst_45220);

return statearr_45239;
})();
var statearr_45240_45256 = state_45227__$1;
(statearr_45240_45256[(2)] = null);

(statearr_45240_45256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45228 === (8))){
var inst_45209 = (state_45227[(7)]);
var state_45227__$1 = state_45227;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45227__$1,(11),out,inst_45209);
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
var statearr_45241 = [null,null,null,null,null,null,null,null,null];
(statearr_45241[(0)] = cljs$core$async$state_machine__29061__auto__);

(statearr_45241[(1)] = (1));

return statearr_45241;
});
var cljs$core$async$state_machine__29061__auto____1 = (function (state_45227){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_45227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e45242){if((e45242 instanceof Object)){
var ex__29064__auto__ = e45242;
var statearr_45243_45257 = state_45227;
(statearr_45243_45257[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45258 = state_45227;
state_45227 = G__45258;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
cljs$core$async$state_machine__29061__auto__ = function(state_45227){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29061__auto____1.call(this,state_45227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29061__auto____0;
cljs$core$async$state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29061__auto____1;
return cljs$core$async$state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_45244 = f__29156__auto__.call(null);
(statearr_45244[(6)] = c__29155__auto___45246);

return statearr_45244;
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
var G__45260 = arguments.length;
switch (G__45260) {
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
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_45323){
var state_val_45324 = (state_45323[(1)]);
if((state_val_45324 === (7))){
var inst_45319 = (state_45323[(2)]);
var state_45323__$1 = state_45323;
var statearr_45325_45363 = state_45323__$1;
(statearr_45325_45363[(2)] = inst_45319);

(statearr_45325_45363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45324 === (20))){
var inst_45289 = (state_45323[(7)]);
var inst_45300 = (state_45323[(2)]);
var inst_45301 = cljs.core.next.call(null,inst_45289);
var inst_45275 = inst_45301;
var inst_45276 = null;
var inst_45277 = (0);
var inst_45278 = (0);
var state_45323__$1 = (function (){var statearr_45326 = state_45323;
(statearr_45326[(8)] = inst_45277);

(statearr_45326[(9)] = inst_45278);

(statearr_45326[(10)] = inst_45300);

(statearr_45326[(11)] = inst_45275);

(statearr_45326[(12)] = inst_45276);

return statearr_45326;
})();
var statearr_45327_45364 = state_45323__$1;
(statearr_45327_45364[(2)] = null);

(statearr_45327_45364[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45324 === (1))){
var state_45323__$1 = state_45323;
var statearr_45328_45365 = state_45323__$1;
(statearr_45328_45365[(2)] = null);

(statearr_45328_45365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45324 === (4))){
var inst_45264 = (state_45323[(13)]);
var inst_45264__$1 = (state_45323[(2)]);
var inst_45265 = (inst_45264__$1 == null);
var state_45323__$1 = (function (){var statearr_45329 = state_45323;
(statearr_45329[(13)] = inst_45264__$1);

return statearr_45329;
})();
if(cljs.core.truth_(inst_45265)){
var statearr_45330_45366 = state_45323__$1;
(statearr_45330_45366[(1)] = (5));

} else {
var statearr_45331_45367 = state_45323__$1;
(statearr_45331_45367[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45324 === (15))){
var state_45323__$1 = state_45323;
var statearr_45335_45368 = state_45323__$1;
(statearr_45335_45368[(2)] = null);

(statearr_45335_45368[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45324 === (21))){
var state_45323__$1 = state_45323;
var statearr_45336_45369 = state_45323__$1;
(statearr_45336_45369[(2)] = null);

(statearr_45336_45369[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45324 === (13))){
var inst_45277 = (state_45323[(8)]);
var inst_45278 = (state_45323[(9)]);
var inst_45275 = (state_45323[(11)]);
var inst_45276 = (state_45323[(12)]);
var inst_45285 = (state_45323[(2)]);
var inst_45286 = (inst_45278 + (1));
var tmp45332 = inst_45277;
var tmp45333 = inst_45275;
var tmp45334 = inst_45276;
var inst_45275__$1 = tmp45333;
var inst_45276__$1 = tmp45334;
var inst_45277__$1 = tmp45332;
var inst_45278__$1 = inst_45286;
var state_45323__$1 = (function (){var statearr_45337 = state_45323;
(statearr_45337[(8)] = inst_45277__$1);

(statearr_45337[(9)] = inst_45278__$1);

(statearr_45337[(14)] = inst_45285);

(statearr_45337[(11)] = inst_45275__$1);

(statearr_45337[(12)] = inst_45276__$1);

return statearr_45337;
})();
var statearr_45338_45370 = state_45323__$1;
(statearr_45338_45370[(2)] = null);

(statearr_45338_45370[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45324 === (22))){
var state_45323__$1 = state_45323;
var statearr_45339_45371 = state_45323__$1;
(statearr_45339_45371[(2)] = null);

(statearr_45339_45371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45324 === (6))){
var inst_45264 = (state_45323[(13)]);
var inst_45273 = f.call(null,inst_45264);
var inst_45274 = cljs.core.seq.call(null,inst_45273);
var inst_45275 = inst_45274;
var inst_45276 = null;
var inst_45277 = (0);
var inst_45278 = (0);
var state_45323__$1 = (function (){var statearr_45340 = state_45323;
(statearr_45340[(8)] = inst_45277);

(statearr_45340[(9)] = inst_45278);

(statearr_45340[(11)] = inst_45275);

(statearr_45340[(12)] = inst_45276);

return statearr_45340;
})();
var statearr_45341_45372 = state_45323__$1;
(statearr_45341_45372[(2)] = null);

(statearr_45341_45372[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45324 === (17))){
var inst_45289 = (state_45323[(7)]);
var inst_45293 = cljs.core.chunk_first.call(null,inst_45289);
var inst_45294 = cljs.core.chunk_rest.call(null,inst_45289);
var inst_45295 = cljs.core.count.call(null,inst_45293);
var inst_45275 = inst_45294;
var inst_45276 = inst_45293;
var inst_45277 = inst_45295;
var inst_45278 = (0);
var state_45323__$1 = (function (){var statearr_45342 = state_45323;
(statearr_45342[(8)] = inst_45277);

(statearr_45342[(9)] = inst_45278);

(statearr_45342[(11)] = inst_45275);

(statearr_45342[(12)] = inst_45276);

return statearr_45342;
})();
var statearr_45343_45373 = state_45323__$1;
(statearr_45343_45373[(2)] = null);

(statearr_45343_45373[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45324 === (3))){
var inst_45321 = (state_45323[(2)]);
var state_45323__$1 = state_45323;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45323__$1,inst_45321);
} else {
if((state_val_45324 === (12))){
var inst_45309 = (state_45323[(2)]);
var state_45323__$1 = state_45323;
var statearr_45344_45374 = state_45323__$1;
(statearr_45344_45374[(2)] = inst_45309);

(statearr_45344_45374[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45324 === (2))){
var state_45323__$1 = state_45323;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45323__$1,(4),in$);
} else {
if((state_val_45324 === (23))){
var inst_45317 = (state_45323[(2)]);
var state_45323__$1 = state_45323;
var statearr_45345_45375 = state_45323__$1;
(statearr_45345_45375[(2)] = inst_45317);

(statearr_45345_45375[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45324 === (19))){
var inst_45304 = (state_45323[(2)]);
var state_45323__$1 = state_45323;
var statearr_45346_45376 = state_45323__$1;
(statearr_45346_45376[(2)] = inst_45304);

(statearr_45346_45376[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45324 === (11))){
var inst_45289 = (state_45323[(7)]);
var inst_45275 = (state_45323[(11)]);
var inst_45289__$1 = cljs.core.seq.call(null,inst_45275);
var state_45323__$1 = (function (){var statearr_45347 = state_45323;
(statearr_45347[(7)] = inst_45289__$1);

return statearr_45347;
})();
if(inst_45289__$1){
var statearr_45348_45377 = state_45323__$1;
(statearr_45348_45377[(1)] = (14));

} else {
var statearr_45349_45378 = state_45323__$1;
(statearr_45349_45378[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45324 === (9))){
var inst_45311 = (state_45323[(2)]);
var inst_45312 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_45323__$1 = (function (){var statearr_45350 = state_45323;
(statearr_45350[(15)] = inst_45311);

return statearr_45350;
})();
if(cljs.core.truth_(inst_45312)){
var statearr_45351_45379 = state_45323__$1;
(statearr_45351_45379[(1)] = (21));

} else {
var statearr_45352_45380 = state_45323__$1;
(statearr_45352_45380[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45324 === (5))){
var inst_45267 = cljs.core.async.close_BANG_.call(null,out);
var state_45323__$1 = state_45323;
var statearr_45353_45381 = state_45323__$1;
(statearr_45353_45381[(2)] = inst_45267);

(statearr_45353_45381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45324 === (14))){
var inst_45289 = (state_45323[(7)]);
var inst_45291 = cljs.core.chunked_seq_QMARK_.call(null,inst_45289);
var state_45323__$1 = state_45323;
if(inst_45291){
var statearr_45354_45382 = state_45323__$1;
(statearr_45354_45382[(1)] = (17));

} else {
var statearr_45355_45383 = state_45323__$1;
(statearr_45355_45383[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45324 === (16))){
var inst_45307 = (state_45323[(2)]);
var state_45323__$1 = state_45323;
var statearr_45356_45384 = state_45323__$1;
(statearr_45356_45384[(2)] = inst_45307);

(statearr_45356_45384[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45324 === (10))){
var inst_45278 = (state_45323[(9)]);
var inst_45276 = (state_45323[(12)]);
var inst_45283 = cljs.core._nth.call(null,inst_45276,inst_45278);
var state_45323__$1 = state_45323;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45323__$1,(13),out,inst_45283);
} else {
if((state_val_45324 === (18))){
var inst_45289 = (state_45323[(7)]);
var inst_45298 = cljs.core.first.call(null,inst_45289);
var state_45323__$1 = state_45323;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45323__$1,(20),out,inst_45298);
} else {
if((state_val_45324 === (8))){
var inst_45277 = (state_45323[(8)]);
var inst_45278 = (state_45323[(9)]);
var inst_45280 = (inst_45278 < inst_45277);
var inst_45281 = inst_45280;
var state_45323__$1 = state_45323;
if(cljs.core.truth_(inst_45281)){
var statearr_45357_45385 = state_45323__$1;
(statearr_45357_45385[(1)] = (10));

} else {
var statearr_45358_45386 = state_45323__$1;
(statearr_45358_45386[(1)] = (11));

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
var statearr_45359 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45359[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29061__auto__);

(statearr_45359[(1)] = (1));

return statearr_45359;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29061__auto____1 = (function (state_45323){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_45323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e45360){if((e45360 instanceof Object)){
var ex__29064__auto__ = e45360;
var statearr_45361_45387 = state_45323;
(statearr_45361_45387[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45388 = state_45323;
state_45323 = G__45388;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29061__auto__ = function(state_45323){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29061__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29061__auto____1.call(this,state_45323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29061__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29061__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_45362 = f__29156__auto__.call(null);
(statearr_45362[(6)] = c__29155__auto__);

return statearr_45362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29157__auto__);
}));

return c__29155__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__45390 = arguments.length;
switch (G__45390) {
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
var G__45393 = arguments.length;
switch (G__45393) {
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
var G__45396 = arguments.length;
switch (G__45396) {
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
var c__29155__auto___45443 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_45420){
var state_val_45421 = (state_45420[(1)]);
if((state_val_45421 === (7))){
var inst_45415 = (state_45420[(2)]);
var state_45420__$1 = state_45420;
var statearr_45422_45444 = state_45420__$1;
(statearr_45422_45444[(2)] = inst_45415);

(statearr_45422_45444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45421 === (1))){
var inst_45397 = null;
var state_45420__$1 = (function (){var statearr_45423 = state_45420;
(statearr_45423[(7)] = inst_45397);

return statearr_45423;
})();
var statearr_45424_45445 = state_45420__$1;
(statearr_45424_45445[(2)] = null);

(statearr_45424_45445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45421 === (4))){
var inst_45400 = (state_45420[(8)]);
var inst_45400__$1 = (state_45420[(2)]);
var inst_45401 = (inst_45400__$1 == null);
var inst_45402 = cljs.core.not.call(null,inst_45401);
var state_45420__$1 = (function (){var statearr_45425 = state_45420;
(statearr_45425[(8)] = inst_45400__$1);

return statearr_45425;
})();
if(inst_45402){
var statearr_45426_45446 = state_45420__$1;
(statearr_45426_45446[(1)] = (5));

} else {
var statearr_45427_45447 = state_45420__$1;
(statearr_45427_45447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45421 === (6))){
var state_45420__$1 = state_45420;
var statearr_45428_45448 = state_45420__$1;
(statearr_45428_45448[(2)] = null);

(statearr_45428_45448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45421 === (3))){
var inst_45417 = (state_45420[(2)]);
var inst_45418 = cljs.core.async.close_BANG_.call(null,out);
var state_45420__$1 = (function (){var statearr_45429 = state_45420;
(statearr_45429[(9)] = inst_45417);

return statearr_45429;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45420__$1,inst_45418);
} else {
if((state_val_45421 === (2))){
var state_45420__$1 = state_45420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45420__$1,(4),ch);
} else {
if((state_val_45421 === (11))){
var inst_45400 = (state_45420[(8)]);
var inst_45409 = (state_45420[(2)]);
var inst_45397 = inst_45400;
var state_45420__$1 = (function (){var statearr_45430 = state_45420;
(statearr_45430[(10)] = inst_45409);

(statearr_45430[(7)] = inst_45397);

return statearr_45430;
})();
var statearr_45431_45449 = state_45420__$1;
(statearr_45431_45449[(2)] = null);

(statearr_45431_45449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45421 === (9))){
var inst_45400 = (state_45420[(8)]);
var state_45420__$1 = state_45420;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45420__$1,(11),out,inst_45400);
} else {
if((state_val_45421 === (5))){
var inst_45400 = (state_45420[(8)]);
var inst_45397 = (state_45420[(7)]);
var inst_45404 = cljs.core._EQ_.call(null,inst_45400,inst_45397);
var state_45420__$1 = state_45420;
if(inst_45404){
var statearr_45433_45450 = state_45420__$1;
(statearr_45433_45450[(1)] = (8));

} else {
var statearr_45434_45451 = state_45420__$1;
(statearr_45434_45451[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45421 === (10))){
var inst_45412 = (state_45420[(2)]);
var state_45420__$1 = state_45420;
var statearr_45435_45452 = state_45420__$1;
(statearr_45435_45452[(2)] = inst_45412);

(statearr_45435_45452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45421 === (8))){
var inst_45397 = (state_45420[(7)]);
var tmp45432 = inst_45397;
var inst_45397__$1 = tmp45432;
var state_45420__$1 = (function (){var statearr_45436 = state_45420;
(statearr_45436[(7)] = inst_45397__$1);

return statearr_45436;
})();
var statearr_45437_45453 = state_45420__$1;
(statearr_45437_45453[(2)] = null);

(statearr_45437_45453[(1)] = (2));


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
var statearr_45438 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45438[(0)] = cljs$core$async$state_machine__29061__auto__);

(statearr_45438[(1)] = (1));

return statearr_45438;
});
var cljs$core$async$state_machine__29061__auto____1 = (function (state_45420){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_45420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e45439){if((e45439 instanceof Object)){
var ex__29064__auto__ = e45439;
var statearr_45440_45454 = state_45420;
(statearr_45440_45454[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45455 = state_45420;
state_45420 = G__45455;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
cljs$core$async$state_machine__29061__auto__ = function(state_45420){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29061__auto____1.call(this,state_45420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29061__auto____0;
cljs$core$async$state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29061__auto____1;
return cljs$core$async$state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_45441 = f__29156__auto__.call(null);
(statearr_45441[(6)] = c__29155__auto___45443);

return statearr_45441;
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
var G__45457 = arguments.length;
switch (G__45457) {
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
var c__29155__auto___45523 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_45495){
var state_val_45496 = (state_45495[(1)]);
if((state_val_45496 === (7))){
var inst_45491 = (state_45495[(2)]);
var state_45495__$1 = state_45495;
var statearr_45497_45524 = state_45495__$1;
(statearr_45497_45524[(2)] = inst_45491);

(statearr_45497_45524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45496 === (1))){
var inst_45458 = (new Array(n));
var inst_45459 = inst_45458;
var inst_45460 = (0);
var state_45495__$1 = (function (){var statearr_45498 = state_45495;
(statearr_45498[(7)] = inst_45460);

(statearr_45498[(8)] = inst_45459);

return statearr_45498;
})();
var statearr_45499_45525 = state_45495__$1;
(statearr_45499_45525[(2)] = null);

(statearr_45499_45525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45496 === (4))){
var inst_45463 = (state_45495[(9)]);
var inst_45463__$1 = (state_45495[(2)]);
var inst_45464 = (inst_45463__$1 == null);
var inst_45465 = cljs.core.not.call(null,inst_45464);
var state_45495__$1 = (function (){var statearr_45500 = state_45495;
(statearr_45500[(9)] = inst_45463__$1);

return statearr_45500;
})();
if(inst_45465){
var statearr_45501_45526 = state_45495__$1;
(statearr_45501_45526[(1)] = (5));

} else {
var statearr_45502_45527 = state_45495__$1;
(statearr_45502_45527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45496 === (15))){
var inst_45485 = (state_45495[(2)]);
var state_45495__$1 = state_45495;
var statearr_45503_45528 = state_45495__$1;
(statearr_45503_45528[(2)] = inst_45485);

(statearr_45503_45528[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45496 === (13))){
var state_45495__$1 = state_45495;
var statearr_45504_45529 = state_45495__$1;
(statearr_45504_45529[(2)] = null);

(statearr_45504_45529[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45496 === (6))){
var inst_45460 = (state_45495[(7)]);
var inst_45481 = (inst_45460 > (0));
var state_45495__$1 = state_45495;
if(cljs.core.truth_(inst_45481)){
var statearr_45505_45530 = state_45495__$1;
(statearr_45505_45530[(1)] = (12));

} else {
var statearr_45506_45531 = state_45495__$1;
(statearr_45506_45531[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45496 === (3))){
var inst_45493 = (state_45495[(2)]);
var state_45495__$1 = state_45495;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45495__$1,inst_45493);
} else {
if((state_val_45496 === (12))){
var inst_45459 = (state_45495[(8)]);
var inst_45483 = cljs.core.vec.call(null,inst_45459);
var state_45495__$1 = state_45495;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45495__$1,(15),out,inst_45483);
} else {
if((state_val_45496 === (2))){
var state_45495__$1 = state_45495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45495__$1,(4),ch);
} else {
if((state_val_45496 === (11))){
var inst_45475 = (state_45495[(2)]);
var inst_45476 = (new Array(n));
var inst_45459 = inst_45476;
var inst_45460 = (0);
var state_45495__$1 = (function (){var statearr_45507 = state_45495;
(statearr_45507[(7)] = inst_45460);

(statearr_45507[(10)] = inst_45475);

(statearr_45507[(8)] = inst_45459);

return statearr_45507;
})();
var statearr_45508_45532 = state_45495__$1;
(statearr_45508_45532[(2)] = null);

(statearr_45508_45532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45496 === (9))){
var inst_45459 = (state_45495[(8)]);
var inst_45473 = cljs.core.vec.call(null,inst_45459);
var state_45495__$1 = state_45495;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45495__$1,(11),out,inst_45473);
} else {
if((state_val_45496 === (5))){
var inst_45460 = (state_45495[(7)]);
var inst_45468 = (state_45495[(11)]);
var inst_45463 = (state_45495[(9)]);
var inst_45459 = (state_45495[(8)]);
var inst_45467 = (inst_45459[inst_45460] = inst_45463);
var inst_45468__$1 = (inst_45460 + (1));
var inst_45469 = (inst_45468__$1 < n);
var state_45495__$1 = (function (){var statearr_45509 = state_45495;
(statearr_45509[(12)] = inst_45467);

(statearr_45509[(11)] = inst_45468__$1);

return statearr_45509;
})();
if(cljs.core.truth_(inst_45469)){
var statearr_45510_45533 = state_45495__$1;
(statearr_45510_45533[(1)] = (8));

} else {
var statearr_45511_45534 = state_45495__$1;
(statearr_45511_45534[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45496 === (14))){
var inst_45488 = (state_45495[(2)]);
var inst_45489 = cljs.core.async.close_BANG_.call(null,out);
var state_45495__$1 = (function (){var statearr_45513 = state_45495;
(statearr_45513[(13)] = inst_45488);

return statearr_45513;
})();
var statearr_45514_45535 = state_45495__$1;
(statearr_45514_45535[(2)] = inst_45489);

(statearr_45514_45535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45496 === (10))){
var inst_45479 = (state_45495[(2)]);
var state_45495__$1 = state_45495;
var statearr_45515_45536 = state_45495__$1;
(statearr_45515_45536[(2)] = inst_45479);

(statearr_45515_45536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45496 === (8))){
var inst_45468 = (state_45495[(11)]);
var inst_45459 = (state_45495[(8)]);
var tmp45512 = inst_45459;
var inst_45459__$1 = tmp45512;
var inst_45460 = inst_45468;
var state_45495__$1 = (function (){var statearr_45516 = state_45495;
(statearr_45516[(7)] = inst_45460);

(statearr_45516[(8)] = inst_45459__$1);

return statearr_45516;
})();
var statearr_45517_45537 = state_45495__$1;
(statearr_45517_45537[(2)] = null);

(statearr_45517_45537[(1)] = (2));


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
var statearr_45518 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45518[(0)] = cljs$core$async$state_machine__29061__auto__);

(statearr_45518[(1)] = (1));

return statearr_45518;
});
var cljs$core$async$state_machine__29061__auto____1 = (function (state_45495){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_45495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e45519){if((e45519 instanceof Object)){
var ex__29064__auto__ = e45519;
var statearr_45520_45538 = state_45495;
(statearr_45520_45538[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45519;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45539 = state_45495;
state_45495 = G__45539;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
cljs$core$async$state_machine__29061__auto__ = function(state_45495){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29061__auto____1.call(this,state_45495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29061__auto____0;
cljs$core$async$state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29061__auto____1;
return cljs$core$async$state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_45521 = f__29156__auto__.call(null);
(statearr_45521[(6)] = c__29155__auto___45523);

return statearr_45521;
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
var G__45541 = arguments.length;
switch (G__45541) {
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
var c__29155__auto___45611 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__29156__auto__ = (function (){var switch__29060__auto__ = (function (state_45583){
var state_val_45584 = (state_45583[(1)]);
if((state_val_45584 === (7))){
var inst_45579 = (state_45583[(2)]);
var state_45583__$1 = state_45583;
var statearr_45585_45612 = state_45583__$1;
(statearr_45585_45612[(2)] = inst_45579);

(statearr_45585_45612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45584 === (1))){
var inst_45542 = [];
var inst_45543 = inst_45542;
var inst_45544 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_45583__$1 = (function (){var statearr_45586 = state_45583;
(statearr_45586[(7)] = inst_45543);

(statearr_45586[(8)] = inst_45544);

return statearr_45586;
})();
var statearr_45587_45613 = state_45583__$1;
(statearr_45587_45613[(2)] = null);

(statearr_45587_45613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45584 === (4))){
var inst_45547 = (state_45583[(9)]);
var inst_45547__$1 = (state_45583[(2)]);
var inst_45548 = (inst_45547__$1 == null);
var inst_45549 = cljs.core.not.call(null,inst_45548);
var state_45583__$1 = (function (){var statearr_45588 = state_45583;
(statearr_45588[(9)] = inst_45547__$1);

return statearr_45588;
})();
if(inst_45549){
var statearr_45589_45614 = state_45583__$1;
(statearr_45589_45614[(1)] = (5));

} else {
var statearr_45590_45615 = state_45583__$1;
(statearr_45590_45615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45584 === (15))){
var inst_45573 = (state_45583[(2)]);
var state_45583__$1 = state_45583;
var statearr_45591_45616 = state_45583__$1;
(statearr_45591_45616[(2)] = inst_45573);

(statearr_45591_45616[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45584 === (13))){
var state_45583__$1 = state_45583;
var statearr_45592_45617 = state_45583__$1;
(statearr_45592_45617[(2)] = null);

(statearr_45592_45617[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45584 === (6))){
var inst_45543 = (state_45583[(7)]);
var inst_45568 = inst_45543.length;
var inst_45569 = (inst_45568 > (0));
var state_45583__$1 = state_45583;
if(cljs.core.truth_(inst_45569)){
var statearr_45593_45618 = state_45583__$1;
(statearr_45593_45618[(1)] = (12));

} else {
var statearr_45594_45619 = state_45583__$1;
(statearr_45594_45619[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45584 === (3))){
var inst_45581 = (state_45583[(2)]);
var state_45583__$1 = state_45583;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45583__$1,inst_45581);
} else {
if((state_val_45584 === (12))){
var inst_45543 = (state_45583[(7)]);
var inst_45571 = cljs.core.vec.call(null,inst_45543);
var state_45583__$1 = state_45583;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45583__$1,(15),out,inst_45571);
} else {
if((state_val_45584 === (2))){
var state_45583__$1 = state_45583;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45583__$1,(4),ch);
} else {
if((state_val_45584 === (11))){
var inst_45547 = (state_45583[(9)]);
var inst_45551 = (state_45583[(10)]);
var inst_45561 = (state_45583[(2)]);
var inst_45562 = [];
var inst_45563 = inst_45562.push(inst_45547);
var inst_45543 = inst_45562;
var inst_45544 = inst_45551;
var state_45583__$1 = (function (){var statearr_45595 = state_45583;
(statearr_45595[(7)] = inst_45543);

(statearr_45595[(8)] = inst_45544);

(statearr_45595[(11)] = inst_45563);

(statearr_45595[(12)] = inst_45561);

return statearr_45595;
})();
var statearr_45596_45620 = state_45583__$1;
(statearr_45596_45620[(2)] = null);

(statearr_45596_45620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45584 === (9))){
var inst_45543 = (state_45583[(7)]);
var inst_45559 = cljs.core.vec.call(null,inst_45543);
var state_45583__$1 = state_45583;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45583__$1,(11),out,inst_45559);
} else {
if((state_val_45584 === (5))){
var inst_45547 = (state_45583[(9)]);
var inst_45544 = (state_45583[(8)]);
var inst_45551 = (state_45583[(10)]);
var inst_45551__$1 = f.call(null,inst_45547);
var inst_45552 = cljs.core._EQ_.call(null,inst_45551__$1,inst_45544);
var inst_45553 = cljs.core.keyword_identical_QMARK_.call(null,inst_45544,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_45554 = ((inst_45552) || (inst_45553));
var state_45583__$1 = (function (){var statearr_45597 = state_45583;
(statearr_45597[(10)] = inst_45551__$1);

return statearr_45597;
})();
if(cljs.core.truth_(inst_45554)){
var statearr_45598_45621 = state_45583__$1;
(statearr_45598_45621[(1)] = (8));

} else {
var statearr_45599_45622 = state_45583__$1;
(statearr_45599_45622[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45584 === (14))){
var inst_45576 = (state_45583[(2)]);
var inst_45577 = cljs.core.async.close_BANG_.call(null,out);
var state_45583__$1 = (function (){var statearr_45601 = state_45583;
(statearr_45601[(13)] = inst_45576);

return statearr_45601;
})();
var statearr_45602_45623 = state_45583__$1;
(statearr_45602_45623[(2)] = inst_45577);

(statearr_45602_45623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45584 === (10))){
var inst_45566 = (state_45583[(2)]);
var state_45583__$1 = state_45583;
var statearr_45603_45624 = state_45583__$1;
(statearr_45603_45624[(2)] = inst_45566);

(statearr_45603_45624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45584 === (8))){
var inst_45547 = (state_45583[(9)]);
var inst_45543 = (state_45583[(7)]);
var inst_45551 = (state_45583[(10)]);
var inst_45556 = inst_45543.push(inst_45547);
var tmp45600 = inst_45543;
var inst_45543__$1 = tmp45600;
var inst_45544 = inst_45551;
var state_45583__$1 = (function (){var statearr_45604 = state_45583;
(statearr_45604[(14)] = inst_45556);

(statearr_45604[(7)] = inst_45543__$1);

(statearr_45604[(8)] = inst_45544);

return statearr_45604;
})();
var statearr_45605_45625 = state_45583__$1;
(statearr_45605_45625[(2)] = null);

(statearr_45605_45625[(1)] = (2));


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
var statearr_45606 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45606[(0)] = cljs$core$async$state_machine__29061__auto__);

(statearr_45606[(1)] = (1));

return statearr_45606;
});
var cljs$core$async$state_machine__29061__auto____1 = (function (state_45583){
while(true){
var ret_value__29062__auto__ = (function (){try{while(true){
var result__29063__auto__ = switch__29060__auto__.call(null,state_45583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29063__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29063__auto__;
}
break;
}
}catch (e45607){if((e45607 instanceof Object)){
var ex__29064__auto__ = e45607;
var statearr_45608_45626 = state_45583;
(statearr_45608_45626[(5)] = ex__29064__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45607;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29062__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45627 = state_45583;
state_45583 = G__45627;
continue;
} else {
return ret_value__29062__auto__;
}
break;
}
});
cljs$core$async$state_machine__29061__auto__ = function(state_45583){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29061__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29061__auto____1.call(this,state_45583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29061__auto____0;
cljs$core$async$state_machine__29061__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29061__auto____1;
return cljs$core$async$state_machine__29061__auto__;
})()
})();
var state__29157__auto__ = (function (){var statearr_45609 = f__29156__auto__.call(null);
(statearr_45609[(6)] = c__29155__auto___45611);

return statearr_45609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29157__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1589675444257
