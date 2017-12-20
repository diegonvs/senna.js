define(["metal"], function(__WEBPACK_EXTERNAL_MODULE_0__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var globals = globals || {};

if (typeof window !== 'undefined') {
	globals.window = window;
}

if (typeof document !== 'undefined') {
	globals.document = document;
}

/* harmony default export */ __webpack_exports__["a"] = (globals);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// This file exists just for backwards compatibility, making sure that old
// default imports for this file still work. It's best to use the named exports
// for each function instead though, since that allows bundlers like Rollup to
// reduce the bundle size by removing unused code.

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dom = undefined;

var _domNamed = __webpack_require__(39);

Object.keys(_domNamed).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _domNamed[key];
    }
  });
});

var dom = _interopRequireWildcard(_domNamed);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = dom;
exports.dom = dom;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Promises polyfill from Google's Closure Library.
 *
 *      Copyright 2013 The Closure Library Authors. All Rights Reserved.
 *
 * NOTE(eduardo): Promise support is not ready on all supported browsers,
 * therefore metal-promise is temporarily using Google's promises as polyfill.
 * It supports cancellable promises and has clean and fast implementation.
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CancellablePromise = undefined;

var _metal = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Provides a more strict interface for Thenables in terms of
 * http://promisesaplus.com for interop with {@see CancellablePromise}.
 *
 * @interface
 * @extends {IThenable.<TYPE>}
 * @template TYPE
 */
var Thenable = function Thenable() {};

/**
 * Adds callbacks that will operate on the result of the Thenable, returning a
 * new child Promise.
 *
 * If the Thenable is fulfilled, the {@code onFulfilled} callback will be
 * invoked with the fulfillment value as argument, and the child Promise will
 * be fulfilled with the return value of the callback. If the callback throws
 * an exception, the child Promise will be rejected with the thrown value
 * instead.
 *
 * If the Thenable is rejected, the {@code onRejected} callback will be invoked
 * with the rejection reason as argument, and the child Promise will be rejected
 * with the return value of the callback or thrown value.
 *
 * @param {?(function(this:THIS, TYPE):
 *             (RESULT|IThenable.<RESULT>|Thenable))=} opt_onFulfilled A
 *     function that will be invoked with the fulfillment value if the Promise
 *     is fullfilled.
 * @param {?(function(*): *)=} opt_onRejected A function that will be invoked
 *     with the rejection reason if the Promise is rejected.
 * @param {THIS=} opt_context An optional context object that will be the
 *     execution context for the callbacks. By default, functions are executed
 *     with the default this.
 * @return {!CancellablePromise.<RESULT>} A new Promise that will receive the
 *     result of the fulfillment or rejection callback.
 * @template RESULT,THIS
 */
Thenable.prototype.then = function () {};

/**
 * An expando property to indicate that an object implements
 * {@code Thenable}.
 *
 * {@see addImplementation}.
 *
 * @const
 */
Thenable.IMPLEMENTED_BY_PROP = '$goog_Thenable';

/**
 * Marks a given class (constructor) as an implementation of Thenable, so
 * that we can query that fact at runtime. The class must have already
 * implemented the interface.
 * Exports a 'then' method on the constructor prototype, so that the objects
 * also implement the extern {@see Thenable} interface for interop with
 * other Promise implementations.
 * @param {function(new:Thenable,...[?])} ctor The class constructor. The
 *     corresponding class must have already implemented the interface.
 */
Thenable.addImplementation = function (ctor) {
  ctor.prototype.then = ctor.prototype.then;
  ctor.prototype.$goog_Thenable = true;
};

/**
 * @param {*} object
 * @return {boolean} Whether a given instance implements {@code Thenable}.
 *     The class/superclass of the instance must call {@code addImplementation}.
 */
Thenable.isImplementedBy = function (object) {
  if (!object) {
    return false;
  }
  try {
    return !!object.$goog_Thenable;
  } catch (e) {
    // Property access seems to be forbidden.
    return false;
  }
};

/**
 * Like bind(), except that a 'this object' is not required. Useful when the
 * target function is already bound.
 *
 * Usage:
 * var g = partial(f, arg1, arg2);
 * g(arg3, arg4);
 *
 * @param {Function} fn A function to partially apply.
 * @param {...*} var_args Additional arguments that are partially applied to fn.
 * @return {!Function} A partially-applied form of the function bind() was
 *     invoked as a method of.
 */
var partial = function partial(fn) {
  var args = Array.prototype.slice.call(arguments, 1);
  return function () {
    // Clone the array (with slice()) and append additional arguments
    // to the existing arguments.
    var newArgs = args.slice();
    newArgs.push.apply(newArgs, arguments);
    return fn.apply(this, newArgs);
  };
};

/**
 * Promises provide a result that may be resolved asynchronously. A Promise may
 * be resolved by being fulfilled or rejected with a value, which will be known
 * as the fulfillment value or the rejection reason. Whether fulfilled or
 * rejected, the Promise result is immutable once it is set.
 *
 * Promises may represent results of any type, including undefined. Rejection
 * reasons are typically Errors, but may also be of any type. Closure Promises
 * allow for optional type annotations that enforce that fulfillment values are
 * of the appropriate types at compile time.
 *
 * The result of a Promise is accessible by calling {@code then} and registering
 * {@code onFulfilled} and {@code onRejected} callbacks. Once the Promise
 * resolves, the relevant callbacks are invoked with the fulfillment value or
 * rejection reason as argument. Callbacks are always invoked in the order they
 * were registered, even when additional {@code then} calls are made from inside
 * another callback. A callback is always run asynchronously sometime after the
 * scope containing the registering {@code then} invocation has returned.
 *
 * If a Promise is resolved with another Promise, the first Promise will block
 * until the second is resolved, and then assumes the same result as the second
 * Promise. This allows Promises to depend on the results of other Promises,
 * linking together multiple asynchronous operations.
 *
 * This implementation is compatible with the Promises/A+ specification and
 * passes that specification's conformance test suite. A Closure Promise may be
 * resolved with a Promise instance (or sufficiently compatible Promise-like
 * object) created by other Promise implementations. From the specification,
 * Promise-like objects are known as "Thenables".
 *
 * @see http://promisesaplus.com/
 *
 * @param {function(
 *             this:RESOLVER_CONTEXT,
 *             function((TYPE|IThenable.<TYPE>|Thenable)),
 *             function(*)): void} resolver
 *     Initialization function that is invoked immediately with {@code resolve}
 *     and {@code reject} functions as arguments. The Promise is resolved or
 *     rejected with the first argument passed to either function.
 * @param {RESOLVER_CONTEXT=} opt_context An optional context for executing the
 *     resolver function. If unspecified, the resolver function will be executed
 *     in the default scope.
 * @constructor
 * @struct
 * @final
 * @implements {Thenable.<TYPE>}
 * @template TYPE,RESOLVER_CONTEXT
 */
var CancellablePromise = function CancellablePromise(resolver, opt_context) {
  /**
   * The internal state of this Promise. Either PENDING, FULFILLED, REJECTED, or
   * BLOCKED.
   * @private {CancellablePromise.State_}
   */
  this.state_ = CancellablePromise.State_.PENDING;

  /**
   * The resolved result of the Promise. Immutable once set with either a
   * fulfillment value or rejection reason.
   * @private {*}
   */
  this.result_ = undefined;

  /**
   * For Promises created by calling {@code then()}, the originating parent.
   * @private {CancellablePromise}
   */
  this.parent_ = null;

  /**
   * The list of {@code onFulfilled} and {@code onRejected} callbacks added to
   * this Promise by calls to {@code then()}.
   * @private {Array.<CancellablePromise.CallbackEntry_>}
   */
  this.callbackEntries_ = null;

  /**
   * Whether the Promise is in the queue of Promises to execute.
   * @private {boolean}
   */
  this.executing_ = false;

  if (CancellablePromise.UNHANDLED_REJECTION_DELAY > 0) {
    /**
     * A timeout ID used when the {@code UNHANDLED_REJECTION_DELAY} is greater
     * than 0 milliseconds. The ID is set when the Promise is rejected, and
     * cleared only if an {@code onRejected} callback is invoked for the
     * Promise (or one of its descendants) before the delay is exceeded.
     *
     * If the rejection is not handled before the timeout completes, the
     * rejection reason is passed to the unhandled rejection handler.
     * @private {number}
     */
    this.unhandledRejectionId_ = 0;
  } else if (CancellablePromise.UNHANDLED_REJECTION_DELAY === 0) {
    /**
     * When the {@code UNHANDLED_REJECTION_DELAY} is set to 0 milliseconds, a
     * boolean that is set if the Promise is rejected, and reset to false if an
     * {@code onRejected} callback is invoked for the Promise (or one of its
     * descendants). If the rejection is not handled before the next timestep,
     * the rejection reason is passed to the unhandled rejection handler.
     * @private {boolean}
     */
    this.hadUnhandledRejection_ = false;
  }

  try {
    var self = this;
    resolver.call(opt_context, function (value) {
      self.resolve_(CancellablePromise.State_.FULFILLED, value);
    }, function (reason) {
      self.resolve_(CancellablePromise.State_.REJECTED, reason);
    });
  } catch (e) {
    this.resolve_(CancellablePromise.State_.REJECTED, e);
  }
};

/**
 * The delay in milliseconds before a rejected Promise's reason is passed to
 * the rejection handler. By default, the rejection handler rethrows the
 * rejection reason so that it appears in the developer console or
 * {@code window.onerror} handler.
 * Rejections are rethrown as quickly as possible by default. A negative value
 * disables rejection handling entirely.
 * @type {number}
 */
CancellablePromise.UNHANDLED_REJECTION_DELAY = 0;

/**
 * The possible internal states for a Promise. These states are not directly
 * observable to external callers.
 * @enum {number}
 * @private
 */
CancellablePromise.State_ = {
  /** The Promise is waiting for resolution. */
  PENDING: 0,

  /** The Promise is blocked waiting for the result of another Thenable. */
  BLOCKED: 1,

  /** The Promise has been resolved with a fulfillment value. */
  FULFILLED: 2,

  /** The Promise has been resolved with a rejection reason. */
  REJECTED: 3
};

/**
 * Typedef for entries in the callback chain. Each call to {@code then},
 * {@code thenCatch}, or {@code thenAlways} creates an entry containing the
 * functions that may be invoked once the Promise is resolved.
 *
 * @typedef {{
 *   child: CancellablePromise,
 *   onFulfilled: function(*),
 *   onRejected: function(*)
 * }}
 * @private
 */
CancellablePromise.CallbackEntry_ = null;

/**
 * @param {(TYPE|Thenable.<TYPE>|Thenable)=} opt_value
 * @return {!CancellablePromise.<TYPE>} A new Promise that is immediately resolved
 *     with the given value.
 * @template TYPE
 */
CancellablePromise.resolve = function (opt_value) {
  return new CancellablePromise(function (resolve) {
    resolve(opt_value);
  });
};

/**
 * @param {*=} opt_reason
 * @return {!CancellablePromise} A new Promise that is immediately rejected with the
 *     given reason.
 */
CancellablePromise.reject = function (opt_reason) {
  return new CancellablePromise(function (resolve, reject) {
    reject(opt_reason);
  });
};

/**
 * @param {!Array.<!(Thenable.<TYPE>|Thenable)>} promises
 * @return {!CancellablePromise.<TYPE>} A Promise that receives the result of the
 *     first Promise (or Promise-like) input to complete.
 * @template TYPE
 */
CancellablePromise.race = function (promises) {
  return new CancellablePromise(function (resolve, reject) {
    if (!promises.length) {
      resolve(undefined);
    }
    for (var i = 0, promise; promise = promises[i]; i++) {
      promise.then(resolve, reject);
    }
  });
};

/**
 * @param {!Array.<!(Thenable.<TYPE>|Thenable)>} promises
 * @return {!CancellablePromise.<!Array.<TYPE>>} A Promise that receives a list of
 *     every fulfilled value once every input Promise (or Promise-like) is
 *     successfully fulfilled, or is rejected by the first rejection result.
 * @template TYPE
 */
CancellablePromise.all = function (promises) {
  return new CancellablePromise(function (resolve, reject) {
    var toFulfill = promises.length;
    var values = [];

    if (!toFulfill) {
      resolve(values);
      return;
    }

    var onFulfill = function onFulfill(index, value) {
      toFulfill--;
      values[index] = value;
      if (toFulfill === 0) {
        resolve(values);
      }
    };

    var onReject = function onReject(reason) {
      reject(reason);
    };

    for (var i = 0, promise; promise = promises[i]; i++) {
      promise.then(partial(onFulfill, i), onReject);
    }
  });
};

/**
 * @param {!Array.<!(Thenable.<TYPE>|Thenable)>} promises
 * @return {!CancellablePromise.<TYPE>} A Promise that receives the value of
 *     the first input to be fulfilled, or is rejected with a list of every
 *     rejection reason if all inputs are rejected.
 * @template TYPE
 */
CancellablePromise.firstFulfilled = function (promises) {
  return new CancellablePromise(function (resolve, reject) {
    var toReject = promises.length;
    var reasons = [];

    if (!toReject) {
      resolve(undefined);
      return;
    }

    var onFulfill = function onFulfill(value) {
      resolve(value);
    };

    var onReject = function onReject(index, reason) {
      toReject--;
      reasons[index] = reason;
      if (toReject === 0) {
        reject(reasons);
      }
    };

    for (var i = 0, promise; promise = promises[i]; i++) {
      promise.then(onFulfill, partial(onReject, i));
    }
  });
};

/**
 * Adds callbacks that will operate on the result of the Promise, returning a
 * new child Promise.
 *
 * If the Promise is fulfilled, the {@code onFulfilled} callback will be invoked
 * with the fulfillment value as argument, and the child Promise will be
 * fulfilled with the return value of the callback. If the callback throws an
 * exception, the child Promise will be rejected with the thrown value instead.
 *
 * If the Promise is rejected, the {@code onRejected} callback will be invoked
 * with the rejection reason as argument, and the child Promise will be rejected
 * with the return value (or thrown value) of the callback.
 *
 * @override
 */
CancellablePromise.prototype.then = function (opt_onFulfilled, opt_onRejected, opt_context) {
  return this.addChildPromise_((0, _metal.isFunction)(opt_onFulfilled) ? opt_onFulfilled : null, (0, _metal.isFunction)(opt_onRejected) ? opt_onRejected : null, opt_context);
};
Thenable.addImplementation(CancellablePromise);

/**
 * Adds a callback that will be invoked whether the Promise is fulfilled or
 * rejected. The callback receives no argument, and no new child Promise is
 * created. This is useful for ensuring that cleanup takes place after certain
 * asynchronous operations. Callbacks added with {@code thenAlways} will be
 * executed in the same order with other calls to {@code then},
 * {@code thenAlways}, or {@code thenCatch}.
 *
 * Since it does not produce a new child Promise, cancellation propagation is
 * not prevented by adding callbacks with {@code thenAlways}. A Promise that has
 * a cleanup handler added with {@code thenAlways} will be canceled if all of
 * its children created by {@code then} (or {@code thenCatch}) are canceled.
 *
 * @param {function(this:THIS): void} onResolved A function that will be invoked
 *     when the Promise is resolved.
 * @param {THIS=} opt_context An optional context object that will be the
 *     execution context for the callbacks. By default, functions are executed
 *     in the global scope.
 * @return {!CancellablePromise.<TYPE>} This Promise, for chaining additional calls.
 * @template THIS
 */
CancellablePromise.prototype.thenAlways = function (onResolved, opt_context) {
  var callback = function callback() {
    try {
      // Ensure that no arguments are passed to onResolved.
      onResolved.call(opt_context);
    } catch (err) {
      CancellablePromise.handleRejection_.call(null, err);
    }
  };

  this.addCallbackEntry_({
    child: null,
    onRejected: callback,
    onFulfilled: callback
  });
  return this;
};

/**
 * Adds a callback that will be invoked only if the Promise is rejected. This
 * is equivalent to {@code then(null, onRejected)}.
 *
 * @param {!function(this:THIS, *): *} onRejected A function that will be
 *     invoked with the rejection reason if the Promise is rejected.
 * @param {THIS=} opt_context An optional context object that will be the
 *     execution context for the callbacks. By default, functions are executed
 *     in the global scope.
 * @return {!CancellablePromise} A new Promise that will receive the result of the
 *     callback.
 * @template THIS
 */
CancellablePromise.prototype.thenCatch = function (onRejected, opt_context) {
  return this.addChildPromise_(null, onRejected, opt_context);
};

/**
 * Alias of {@link CancellablePromise.prototype.thenCatch}
 */
CancellablePromise.prototype.catch = CancellablePromise.prototype.thenCatch;

/**
 * Cancels the Promise if it is still pending by rejecting it with a cancel
 * Error. No action is performed if the Promise is already resolved.
 *
 * All child Promises of the canceled Promise will be rejected with the same
 * cancel error, as with normal Promise rejection. If the Promise to be canceled
 * is the only child of a pending Promise, the parent Promise will also be
 * canceled. Cancellation may propagate upward through multiple generations.
 *
 * @param {string=} opt_message An optional debugging message for describing the
 *     cancellation reason.
 */
CancellablePromise.prototype.cancel = function (opt_message) {
  if (this.state_ === CancellablePromise.State_.PENDING) {
    _metal.async.run(function () {
      var err = new CancellablePromise.CancellationError(opt_message);
      err.IS_CANCELLATION_ERROR = true;
      this.cancelInternal_(err);
    }, this);
  }
};

/**
 * Cancels this Promise with the given error.
 *
 * @param {!Error} err The cancellation error.
 * @private
 */
CancellablePromise.prototype.cancelInternal_ = function (err) {
  if (this.state_ === CancellablePromise.State_.PENDING) {
    if (this.parent_) {
      // Cancel the Promise and remove it from the parent's child list.
      this.parent_.cancelChild_(this, err);
    } else {
      this.resolve_(CancellablePromise.State_.REJECTED, err);
    }
  }
};

/**
 * Cancels a child Promise from the list of callback entries. If the Promise has
 * not already been resolved, reject it with a cancel error. If there are no
 * other children in the list of callback entries, propagate the cancellation
 * by canceling this Promise as well.
 *
 * @param {!CancellablePromise} childPromise The Promise to cancel.
 * @param {!Error} err The cancel error to use for rejecting the Promise.
 * @private
 */
CancellablePromise.prototype.cancelChild_ = function (childPromise, err) {
  if (!this.callbackEntries_) {
    return;
  }
  var childCount = 0;
  var childIndex = -1;

  // Find the callback entry for the childPromise, and count whether there are
  // additional child Promises.
  for (var i = 0, entry; entry = this.callbackEntries_[i]; i++) {
    var child = entry.child;
    if (child) {
      childCount++;
      if (child === childPromise) {
        childIndex = i;
      }
      if (childIndex >= 0 && childCount > 1) {
        break;
      }
    }
  }

  // If the child Promise was the only child, cancel this Promise as well.
  // Otherwise, reject only the child Promise with the cancel error.
  if (childIndex >= 0) {
    if (this.state_ === CancellablePromise.State_.PENDING && childCount === 1) {
      this.cancelInternal_(err);
    } else {
      var callbackEntry = this.callbackEntries_.splice(childIndex, 1)[0];
      this.executeCallback_(callbackEntry, CancellablePromise.State_.REJECTED, err);
    }
  }
};

/**
 * Adds a callback entry to the current Promise, and schedules callback
 * execution if the Promise has already been resolved.
 *
 * @param {CancellablePromise.CallbackEntry_} callbackEntry Record containing
 *     {@code onFulfilled} and {@code onRejected} callbacks to execute after
 *     the Promise is resolved.
 * @private
 */
CancellablePromise.prototype.addCallbackEntry_ = function (callbackEntry) {
  if ((!this.callbackEntries_ || !this.callbackEntries_.length) && (this.state_ === CancellablePromise.State_.FULFILLED || this.state_ === CancellablePromise.State_.REJECTED)) {
    this.scheduleCallbacks_();
  }
  if (!this.callbackEntries_) {
    this.callbackEntries_ = [];
  }
  this.callbackEntries_.push(callbackEntry);
};

/**
 * Creates a child Promise and adds it to the callback entry list. The result of
 * the child Promise is determined by the state of the parent Promise and the
 * result of the {@code onFulfilled} or {@code onRejected} callbacks as
 * specified in the Promise resolution procedure.
 *
 * @see http://promisesaplus.com/#the__method
 *
 * @param {?function(this:THIS, TYPE):
 *          (RESULT|CancellablePromise.<RESULT>|Thenable)} onFulfilled A callback that
 *     will be invoked if the Promise is fullfilled, or null.
 * @param {?function(this:THIS, *): *} onRejected A callback that will be
 *     invoked if the Promise is rejected, or null.
 * @param {THIS=} opt_context An optional execution context for the callbacks.
 *     in the default calling context.
 * @return {!CancellablePromise} The child Promise.
 * @template RESULT,THIS
 * @private
 */
CancellablePromise.prototype.addChildPromise_ = function (onFulfilled, onRejected, opt_context) {

  var callbackEntry = {
    child: null,
    onFulfilled: null,
    onRejected: null
  };

  callbackEntry.child = new CancellablePromise(function (resolve, reject) {
    // Invoke onFulfilled, or resolve with the parent's value if absent.
    callbackEntry.onFulfilled = onFulfilled ? function (value) {
      try {
        var result = onFulfilled.call(opt_context, value);
        resolve(result);
      } catch (err) {
        reject(err);
      }
    } : resolve;

    // Invoke onRejected, or reject with the parent's reason if absent.
    callbackEntry.onRejected = onRejected ? function (reason) {
      try {
        var result = onRejected.call(opt_context, reason);
        if (!(0, _metal.isDef)(result) && reason.IS_CANCELLATION_ERROR) {
          // Propagate cancellation to children if no other result is returned.
          reject(reason);
        } else {
          resolve(result);
        }
      } catch (err) {
        reject(err);
      }
    } : reject;
  });

  callbackEntry.child.parent_ = this;
  this.addCallbackEntry_(
  /** @type {CancellablePromise.CallbackEntry_} */callbackEntry);
  return callbackEntry.child;
};

/**
 * Unblocks the Promise and fulfills it with the given value.
 *
 * @param {TYPE} value
 * @private
 */
CancellablePromise.prototype.unblockAndFulfill_ = function (value) {
  if (this.state_ !== CancellablePromise.State_.BLOCKED) {
    throw new Error('CancellablePromise is not blocked.');
  }
  this.state_ = CancellablePromise.State_.PENDING;
  this.resolve_(CancellablePromise.State_.FULFILLED, value);
};

/**
 * Unblocks the Promise and rejects it with the given rejection reason.
 *
 * @param {*} reason
 * @private
 */
CancellablePromise.prototype.unblockAndReject_ = function (reason) {
  if (this.state_ !== CancellablePromise.State_.BLOCKED) {
    throw new Error('CancellablePromise is not blocked.');
  }
  this.state_ = CancellablePromise.State_.PENDING;
  this.resolve_(CancellablePromise.State_.REJECTED, reason);
};

/**
 * Attempts to resolve a Promise with a given resolution state and value. This
 * is a no-op if the given Promise has already been resolved.
 *
 * If the given result is a Thenable (such as another Promise), the Promise will
 * be resolved with the same state and result as the Thenable once it is itself
 * resolved.
 *
 * If the given result is not a Thenable, the Promise will be fulfilled or
 * rejected with that result based on the given state.
 *
 * @see http://promisesaplus.com/#the_promise_resolution_procedure
 *
 * @param {CancellablePromise.State_} state
 * @param {*} x The result to apply to the Promise.
 * @private
 */
CancellablePromise.prototype.resolve_ = function (state, x) {
  if (this.state_ !== CancellablePromise.State_.PENDING) {
    return;
  }

  if (this === x) {
    state = CancellablePromise.State_.REJECTED;
    x = new TypeError('CancellablePromise cannot resolve to itself');
  } else if (Thenable.isImplementedBy(x)) {
    x = /** @type {!Thenable} */x;
    this.state_ = CancellablePromise.State_.BLOCKED;
    x.then(this.unblockAndFulfill_, this.unblockAndReject_, this);
    return;
  } else if ((0, _metal.isObject)(x)) {
    try {
      var then = x.then;
      if ((0, _metal.isFunction)(then)) {
        this.tryThen_(x, then);
        return;
      }
    } catch (e) {
      state = CancellablePromise.State_.REJECTED;
      x = e;
    }
  }

  this.result_ = x;
  this.state_ = state;
  this.scheduleCallbacks_();

  if (state === CancellablePromise.State_.REJECTED && !x.IS_CANCELLATION_ERROR) {
    CancellablePromise.addUnhandledRejection_(this, x);
  }
};

/**
 * Attempts to call the {@code then} method on an object in the hopes that it is
 * a Promise-compatible instance. This allows interoperation between different
 * Promise implementations, however a non-compliant object may cause a Promise
 * to hang indefinitely. If the {@code then} method throws an exception, the
 * dependent Promise will be rejected with the thrown value.
 *
 * @see http://promisesaplus.com/#point-70
 *
 * @param {Thenable} thenable An object with a {@code then} method that may be
 *     compatible with the Promise/A+ specification.
 * @param {!Function} then The {@code then} method of the Thenable object.
 * @private
 */
CancellablePromise.prototype.tryThen_ = function (thenable, then) {
  this.state_ = CancellablePromise.State_.BLOCKED;
  var promise = this;
  var called = false;

  var resolve = function resolve(value) {
    if (!called) {
      called = true;
      promise.unblockAndFulfill_(value);
    }
  };

  var reject = function reject(reason) {
    if (!called) {
      called = true;
      promise.unblockAndReject_(reason);
    }
  };

  try {
    then.call(thenable, resolve, reject);
  } catch (e) {
    reject(e);
  }
};

/**
 * Executes the pending callbacks of a resolved Promise after a timeout.
 *
 * Section 2.2.4 of the Promises/A+ specification requires that Promise
 * callbacks must only be invoked from a call stack that only contains Promise
 * implementation code, which we accomplish by invoking callback execution after
 * a timeout. If {@code startExecution_} is called multiple times for the same
 * Promise, the callback chain will be evaluated only once. Additional callbacks
 * may be added during the evaluation phase, and will be executed in the same
 * event loop.
 *
 * All Promises added to the waiting list during the same browser event loop
 * will be executed in one batch to avoid using a separate timeout per Promise.
 *
 * @private
 */
CancellablePromise.prototype.scheduleCallbacks_ = function () {
  if (!this.executing_) {
    this.executing_ = true;
    _metal.async.run(this.executeCallbacks_, this);
  }
};

/**
 * Executes all pending callbacks for this Promise.
 *
 * @private
 */
CancellablePromise.prototype.executeCallbacks_ = function () {
  while (this.callbackEntries_ && this.callbackEntries_.length) {
    var entries = this.callbackEntries_;
    this.callbackEntries_ = [];

    for (var i = 0; i < entries.length; i++) {
      this.executeCallback_(entries[i], this.state_, this.result_);
    }
  }
  this.executing_ = false;
};

/**
 * Executes a pending callback for this Promise. Invokes an {@code onFulfilled}
 * or {@code onRejected} callback based on the resolved state of the Promise.
 *
 * @param {!CancellablePromise.CallbackEntry_} callbackEntry An entry containing the
 *     onFulfilled and/or onRejected callbacks for this step.
 * @param {CancellablePromise.State_} state The resolution status of the Promise,
 *     either FULFILLED or REJECTED.
 * @param {*} result The resolved result of the Promise.
 * @private
 */
CancellablePromise.prototype.executeCallback_ = function (callbackEntry, state, result) {
  if (state === CancellablePromise.State_.FULFILLED) {
    callbackEntry.onFulfilled(result);
  } else {
    this.removeUnhandledRejection_();
    callbackEntry.onRejected(result);
  }
};

/**
 * Marks this rejected Promise as having being handled. Also marks any parent
 * Promises in the rejected state as handled. The rejection handler will no
 * longer be invoked for this Promise (if it has not been called already).
 *
 * @private
 */
CancellablePromise.prototype.removeUnhandledRejection_ = function () {
  var p;
  if (CancellablePromise.UNHANDLED_REJECTION_DELAY > 0) {
    for (p = this; p && p.unhandledRejectionId_; p = p.parent_) {
      clearTimeout(p.unhandledRejectionId_);
      p.unhandledRejectionId_ = 0;
    }
  } else if (CancellablePromise.UNHANDLED_REJECTION_DELAY === 0) {
    for (p = this; p && p.hadUnhandledRejection_; p = p.parent_) {
      p.hadUnhandledRejection_ = false;
    }
  }
};

/**
 * Marks this rejected Promise as unhandled. If no {@code onRejected} callback
 * is called for this Promise before the {@code UNHANDLED_REJECTION_DELAY}
 * expires, the reason will be passed to the unhandled rejection handler. The
 * handler typically rethrows the rejection reason so that it becomes visible in
 * the developer console.
 *
 * @param {!CancellablePromise} promise The rejected Promise.
 * @param {*} reason The Promise rejection reason.
 * @private
 */
CancellablePromise.addUnhandledRejection_ = function (promise, reason) {
  if (CancellablePromise.UNHANDLED_REJECTION_DELAY > 0) {
    promise.unhandledRejectionId_ = setTimeout(function () {
      CancellablePromise.handleRejection_.call(null, reason);
    }, CancellablePromise.UNHANDLED_REJECTION_DELAY);
  } else if (CancellablePromise.UNHANDLED_REJECTION_DELAY === 0) {
    promise.hadUnhandledRejection_ = true;
    _metal.async.run(function () {
      if (promise.hadUnhandledRejection_) {
        CancellablePromise.handleRejection_.call(null, reason);
      }
    });
  }
};

/**
 * A method that is invoked with the rejection reasons for Promises that are
 * rejected but have no {@code onRejected} callbacks registered yet.
 * @type {function(*)}
 * @private
 */
CancellablePromise.handleRejection_ = _metal.async.throwException;

/**
 * Sets a handler that will be called with reasons from unhandled rejected
 * Promises. If the rejected Promise (or one of its descendants) has an
 * {@code onRejected} callback registered, the rejection will be considered
 * handled, and the rejection handler will not be called.
 *
 * By default, unhandled rejections are rethrown so that the error may be
 * captured by the developer console or a {@code window.onerror} handler.
 *
 * @param {function(*)} handler A function that will be called with reasons from
 *     rejected Promises. Defaults to {@code async.throwException}.
 */
CancellablePromise.setUnhandledRejectionHandler = function (handler) {
  CancellablePromise.handleRejection_ = handler;
};

/**
 * Error used as a rejection reason for canceled Promises.
 *
 * @param {string=} opt_message
 * @constructor
 * @extends {Error}
 * @final
 */
CancellablePromise.CancellationError = function (_Error) {
  _inherits(_class, _Error);

  function _class(opt_message) {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, _Error.call(this, opt_message));

    if (opt_message) {
      _this.message = opt_message;
    }
    return _this;
  }

  return _class;
}(Error);

/** @override */
CancellablePromise.CancellationError.prototype.name = 'cancel';

exports.CancellablePromise = CancellablePromise;
exports.default = CancellablePromise;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Uri = __webpack_require__(21).default;

if (typeof URL === 'undefined' && "function" !== 'undefined') {
	// If there is no "document", then this should be running in NodeJS or in ReactNative env and
	// in this case we should use the "url" NPM module as the parse function.
	// In ReactNative env "path" will be replaced with "path-browserify".

	var path = __webpack_require__(26);
	var url = __webpack_require__(28);

	Uri.setParseFn(function(urlStr) {
		var parsed = url.parse(urlStr);
		parsed.pathname = path.normalize(parsed.pathname);
		return parsed;
	});
}

module.exports = Uri;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__globals_globals__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_metal_uri__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_metal_uri___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_metal_uri__);





/**
 * A collection of static utility functions.
 * @const
 */
class utils {

	/**
	 * Copies attributes form source node to target node.
	 * @return {void}
	 * @static
	 */
	static copyNodeAttributes(source, target) {
		Array.prototype.slice.call(source.attributes).forEach((attribute) => target.setAttribute(attribute.name, attribute.value));
	}

	/**
	 * Gets the current browser path including hashbang.
	 * @return {!string}
	 * @static
	 */
	static getCurrentBrowserPath() {
		return this.getCurrentBrowserPathWithoutHash() + __WEBPACK_IMPORTED_MODULE_0__globals_globals__["a" /* default */].window.location.hash;
	}

	/**
	 * Gets the current browser path excluding hashbang.
	 * @return {!string}
	 * @static
	 */
	static getCurrentBrowserPathWithoutHash() {
		return __WEBPACK_IMPORTED_MODULE_0__globals_globals__["a" /* default */].window.location.pathname + __WEBPACK_IMPORTED_MODULE_0__globals_globals__["a" /* default */].window.location.search;
	}

	/**
	 * Gets the given node offset coordinates.
	 * @return {!object}
	 * @static
	 */
	static getNodeOffset(node) {
		let [offsetLeft, offsetTop] = [0, 0];
		do {
			offsetLeft += node.offsetLeft;
			offsetTop += node.offsetTop;
			node = node.offsetParent;
		} while (node);
		return {
			offsetLeft,
			offsetTop
		};
	}

	/**
	 * Extracts the path part of an url.
	 * @return {!string}
	 * @static
	 */
	static getUrlPath(url) {
		var uri = new __WEBPACK_IMPORTED_MODULE_1_metal_uri___default.a(url);
		return uri.getPathname() + uri.getSearch() + uri.getHash();
	}

	/**
	 * Extracts the path part of an url without hashbang.
	 * @return {!string}
	 * @static
	 */
	static getUrlPathWithoutHash(url) {
		var uri = new __WEBPACK_IMPORTED_MODULE_1_metal_uri___default.a(url);
		return uri.getPathname() + uri.getSearch();
	}

	/**
	 * Extracts the path part of an url without hashbang and query search.
	 * @return {!string}
	 * @static
	 */
	static getUrlPathWithoutHashAndSearch(url) {
		var uri = new __WEBPACK_IMPORTED_MODULE_1_metal_uri___default.a(url);
		return uri.getPathname();
	}

	/**
	 * Checks if url is in the same browser current url excluding the hashbang.
	 * @param  {!string} url
	 * @return {boolean}
	 * @static
	 */
	static isCurrentBrowserPath(url) {
		if (url) {
			const currentBrowserPath = this.getCurrentBrowserPathWithoutHash();
			// the getUrlPath will create a Uri and will normalize the path and
			// remove the trailling '/' for properly comparing paths.
			return utils.getUrlPathWithoutHash(url) === this.getUrlPath(currentBrowserPath);
		}
		return false;
	}

	/**
	 * Returns true if HTML5 History api is supported.
	 * @return {boolean}
	 * @static
	 */
	static isHtml5HistorySupported() {
		return !!(__WEBPACK_IMPORTED_MODULE_0__globals_globals__["a" /* default */].window.history && __WEBPACK_IMPORTED_MODULE_0__globals_globals__["a" /* default */].window.history.pushState);
	}

	/**
	 * Checks if a given url is a valid http(s) uri and returns the formed Uri
	 * or false if the parsing failed
	 * @return {Uri|boolean}
	 * @static
	 */
	static isWebUri(url) {
		try {
			return new __WEBPACK_IMPORTED_MODULE_1_metal_uri___default.a(url);
		} catch (err) {
			console.error(`${err.message} ${url}`);
			return false;
		}
	}

	/**
	 * Removes all attributes form node.
	 * @return {void}
	 * @static
	 */
	static clearNodeAttributes(node) {
		Array.prototype.slice.call(node.attributes).forEach((attribute) => node.removeAttribute(attribute.name));
	}

	/**
	* Removes trailing slash in path.
	* @param {!string}
	* @return {string}
	*/
	static removePathTrailingSlash(path) {
		var length = path ? path.length : 0;
		if (length > 1 && path[length - 1] === '/') {
			path = path.substr(0, length - 1);
		}
		return path;
	}
}

/* harmony default export */ __webpack_exports__["a"] = (utils);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.globalEvalStyles = exports.globalEval = exports.features = exports.DomEventHandle = exports.DomEventEmitterProxy = exports.domData = undefined;

var _dom = __webpack_require__(2);

Object.keys(_dom).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _dom[key];
    }
  });
});

var _dom2 = _interopRequireDefault(_dom);

var _domData = __webpack_require__(8);

var _domData2 = _interopRequireDefault(_domData);

var _DomEventEmitterProxy = __webpack_require__(44);

var _DomEventEmitterProxy2 = _interopRequireDefault(_DomEventEmitterProxy);

var _DomEventHandle = __webpack_require__(14);

var _DomEventHandle2 = _interopRequireDefault(_DomEventHandle);

var _features = __webpack_require__(15);

var _features2 = _interopRequireDefault(_features);

var _globalEval = __webpack_require__(45);

var _globalEval2 = _interopRequireDefault(_globalEval);

var _globalEvalStyles = __webpack_require__(46);

var _globalEvalStyles2 = _interopRequireDefault(_globalEvalStyles);

__webpack_require__(47);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.domData = _domData2.default;
exports.DomEventEmitterProxy = _DomEventEmitterProxy2.default;
exports.DomEventHandle = _DomEventHandle2.default;
exports.features = _features2.default;
exports.globalEval = _globalEval2.default;
exports.globalEvalStyles = _globalEvalStyles2.default;
exports.default = _dom2.default;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventHandler = exports.EventHandle = exports.EventEmitterProxy = exports.EventEmitter = undefined;

var _EventEmitter = __webpack_require__(41);

var _EventEmitter2 = _interopRequireDefault(_EventEmitter);

var _EventEmitterProxy = __webpack_require__(42);

var _EventEmitterProxy2 = _interopRequireDefault(_EventEmitterProxy);

var _EventHandle = __webpack_require__(13);

var _EventHandle2 = _interopRequireDefault(_EventHandle);

var _EventHandler = __webpack_require__(43);

var _EventHandler2 = _interopRequireDefault(_EventHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _EventEmitter2.default;
exports.EventEmitter = _EventEmitter2.default;
exports.EventEmitterProxy = _EventEmitterProxy2.default;
exports.EventHandle = _EventHandle2.default;
exports.EventHandler = _EventHandler2.default;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var METAL_DATA = '__metal_data__';

var domData = function () {
	function domData() {
		_classCallCheck(this, domData);
	}

	_createClass(domData, null, [{
		key: 'get',

		/**
   * Gets Metal.js's data for the given element.
   * @param {!Element} element
   * @param {string=} opt_name Optional property from the data to be returned.
   * @param {*} opt_initialVal Optinal value to the set the requested property
   *     to if it doesn't exist yet in the data.
   * @return {!Object}
   */
		value: function get(element, opt_name, opt_initialVal) {
			if (!element[METAL_DATA]) {
				element[METAL_DATA] = {};
			}
			if (!opt_name) {
				return element[METAL_DATA];
			}
			if (!element[METAL_DATA][opt_name] && opt_initialVal) {
				element[METAL_DATA][opt_name] = opt_initialVal;
			}
			return element[METAL_DATA][opt_name];
		}

		/**
   * Checks if the given element has data stored in it.
   * @param {!Element} element
   * @return {boolean}
   */

	}, {
		key: 'has',
		value: function has(element) {
			return !!element[METAL_DATA];
		}
	}]);

	return domData;
}();

exports.default = domData;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_metal__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_metal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_metal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_metal_path_parser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_metal_path_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_metal_path_parser__);





class Route {

	/**
	 * Route class.
	 * @param {!string|RegExp|Function} path
	 * @param {!Function} handler
	 * @constructor
	 */
	constructor(path, handler) {
		if (!Object(__WEBPACK_IMPORTED_MODULE_0_metal__["isDefAndNotNull"])(path)) {
			throw new Error('Route path not specified.');
		}
		if (!Object(__WEBPACK_IMPORTED_MODULE_0_metal__["isFunction"])(handler)) {
			throw new Error('Route handler is not a function.');
		}

		/**
		 * Defines the handler which will execute once a URL in the application
		 * matches the path.
		 * @type {!Function}
		 * @protected
		 */
		this.handler = handler;

		/**
		 * Defines the path which will trigger the route handler.
		 * @type {!string|RegExp|Function}
		 * @protected
		 */
		this.path = path;
	}

	/**
	* Builds parsed data (regex and tokens) for this route.
	* @return {!Object}
	* @protected
	*/
	buildParsedData_() {
		if (!this.parsedData_) {
			var tokens = Object(__WEBPACK_IMPORTED_MODULE_1_metal_path_parser__["parse"])(this.path);
			var regex = Object(__WEBPACK_IMPORTED_MODULE_1_metal_path_parser__["toRegex"])(tokens);
			this.parsedData_ = {
				regex,
				tokens
			};
		}
		return this.parsedData_;
	}

	/**
	 * Extracts param data from the given path, according to this route.
	 * @param {string} path The url path to extract params from.
	 * @return {Object} The extracted data, if the path matches this route, or
	 *     null otherwise.
	 */
	extractParams(path) {
		if (Object(__WEBPACK_IMPORTED_MODULE_0_metal__["isString"])(this.path)) {
			return Object(__WEBPACK_IMPORTED_MODULE_1_metal_path_parser__["extractData"])(this.buildParsedData_().tokens, path);
		}
		return {};
	}

	/**
	 * Gets the route handler.
	 * @return {!Function}
	 */
	getHandler() {
		return this.handler;
	}

	/**
	 * Gets the route path.
	 * @return {!string|RegExp|Function}
	 */
	getPath() {
		return this.path;
	}

	/**
 	 * Matches if the router can handle the tested path.
 	 * @param {!string} value Path to test (may contain the querystring part).
	 * @return {boolean} Returns true if matches any route.
	 */
	matchesPath(value) {
		var path = this.path;

		if (Object(__WEBPACK_IMPORTED_MODULE_0_metal__["isFunction"])(path)) {
			return path(value);
		}
		if (Object(__WEBPACK_IMPORTED_MODULE_0_metal__["isString"])(path)) {
			path = this.buildParsedData_().regex;
		}
		if (path instanceof RegExp) {
			return value.search(path) > -1;
		}

		return false;
	}

}

/* harmony default export */ __webpack_exports__["a"] = (Route);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_metal__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_metal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_metal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_metal_dom__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_metal_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_metal_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cacheable_Cacheable__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_metal_promise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_metal_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_metal_promise__);







class Screen extends __WEBPACK_IMPORTED_MODULE_2__cacheable_Cacheable__["a" /* default */] {

	/**
	 * Screen class is a special type of route handler that provides helper
	 * utilities that adds lifecycle and methods to provide content to each
	 * registered surface.
	 * @constructor
	 * @extends {Cacheable}
	 */
	constructor() {
		super();

		/**
		 * Holds the screen id.
		 * @type {string}
		 * @protected
		 */
		this.id = this.makeId_(Object(__WEBPACK_IMPORTED_MODULE_0_metal__["getUid"])());

		/**
		 * Holds the screen title. Relevant when the page title should be
		 * upadated when screen is rendered.
		 * @type {?string=}
		 * @default null
		 * @protected
		 */
		this.title = null;
	}

	/**
	 * Fires when the screen is active. Allows a screen to perform any setup
	 * that requires its DOM to be visible. Lifecycle.
	 */
	activate() {
		console.log('Screen [' + this + '] activate');
	}

	/**
	 * Gives the Screen a chance to cancel the navigation and stop itself from
	 * being deactivated. Can be used, for example, if the screen has unsaved
	 * state. Lifecycle. Clean-up should not be preformed here, since the
	 * navigation may still be cancelled. Do clean-up in deactivate.
	 * @return {boolean=} If returns true, the current screen is locked and the
	 *     next nagivation interrupted.
	 */
	beforeDeactivate() {
		console.log('Screen [' + this + '] beforeDeactivate');
	}

	/**
	 * Gives the Screen a chance format the path before history update.
	 * @path {!string} path Navigation path.
	 * @return {!string} Navigation path to use on history.
	 */
	beforeUpdateHistoryPath(path) {
		return path;
	}

	/**
	 * Gives the Screen a chance format the state before history update.
	 * @path {!object} state History state.
	 * @return {!object} History state to use on history.
	 */
	beforeUpdateHistoryState(state) {
		return state;
	}

	/**
	 * Allows a screen to do any cleanup necessary after it has been
	 * deactivated, for example cancelling outstanding requests or stopping
	 * timers. Lifecycle.
	 */
	deactivate() {
		console.log('Screen [' + this + '] deactivate');
	}

	/**
	 * Dispose a screen, either after it is deactivated (in the case of a
	 * non-cacheable view) or when the App is itself disposed for whatever
	 * reason. Lifecycle.
	 */
	disposeInternal() {
		super.disposeInternal();
		console.log('Screen [' + this + '] dispose');
	}

	/**
	 * Allows a screen to evaluate scripts before the element is made visible.
	 * Lifecycle.
	 * @param {!object} surfaces Map of surfaces to flip keyed by surface id.
	 * @return {?CancellablePromise=} This can return a promise, which will
	 *     pause the navigation until it is resolved.
	 */
	evaluateScripts(surfaces) {
		Object.keys(surfaces).forEach(sId => {
			if (surfaces[sId].activeChild) {
				__WEBPACK_IMPORTED_MODULE_1_metal_dom__["globalEval"].runScriptsInElement(surfaces[sId].activeChild);
			}
		});
		return __WEBPACK_IMPORTED_MODULE_3_metal_promise___default.a.resolve();
	}

	/**
	 * Allows a screen to evaluate styles before the element is made visible.
	 * Lifecycle.
	 * @param {!object} surfaces Map of surfaces to flip keyed by surface id.
	 * @return {?CancellablePromise=} This can return a promise, which will
	 *     pause the navigation until it is resolved.
	 */
	evaluateStyles() {
		return __WEBPACK_IMPORTED_MODULE_3_metal_promise___default.a.resolve();
	}

	/**
	 * Allows a screen to perform any setup immediately before the element is
	 * made visible. Lifecycle.
	 * @param {!object} surfaces Map of surfaces to flip keyed by surface id.
	 * @return {?CancellablePromise=} This can return a promise, which will pause the
	 *     navigation until it is resolved.
	 */
	flip(surfaces) {
		console.log('Screen [' + this + '] flip');

		var transitions = [];

		Object.keys(surfaces).forEach(sId => {
			var surface = surfaces[sId];
			var deferred = surface.show(this.id);
			transitions.push(deferred);
		});

		return __WEBPACK_IMPORTED_MODULE_3_metal_promise___default.a.all(transitions);
	}

	/**
	 * Gets the screen id.
	 * @return {string}
	 */
	getId() {
		return this.id;
	}

	/**
	 * Returns the content for the given surface, or null if the surface isn't
	 * used by this screen. This will be called when a screen is initially
	 * constructed or, if a screen is non-cacheable, when navigated.
	 * @param {!string} surfaceId The id of the surface DOM element.
	 * @param {!Object} params Params extracted from the current path.
	 * @return {?string|Element=} This can return a string or node representing
	 *     the content of the surface. If returns falsy values surface default
	 *     content is restored.
	 */
	getSurfaceContent() {
		console.log('Screen [' + this + '] getSurfaceContent');
	}

	/**
	 * Gets the screen title.
	 * @return {?string=}
	 */
	getTitle() {
		return this.title;
	}

	/**
	 * Returns all contents for the surfaces. This will pass the loaded content
	 * to <code>Screen.load</code> with all information you
	 * need to fulfill the surfaces. Lifecycle.
	 * @param {!string=} path The requested path.
	 * @return {!CancellablePromise} This can return a string representing the
	 *     contents of the surfaces or a promise, which will pause the navigation
	 *     until it is resolved. This is useful for loading async content.
	 */
	load() {
		console.log('Screen [' + this + '] load');
		return __WEBPACK_IMPORTED_MODULE_3_metal_promise___default.a.resolve();
	}

	/**
	 * Makes the id for the screen.
	 * @param {!string} id The screen id the content belongs too.
	 * @return {string}
	 * @private
	 */
	makeId_(id) {
		return 'screen_' + id;
	}

	/**
	 * Sets the screen id.
	 * @param {!string} id
	 */
	setId(id) {
		this.id = id;
	}

	/**
	 * Sets the screen title.
	 * @param {?string=} title
	 */
	setTitle(title) {
		this.title = title;
	}

	/**
	 * @return {string}
	 */
	toString() {
		return this.id;
	}

}

/**
 * @param {*} object
 * @return {boolean} Whether a given instance implements
 * <code>Screen</code>.
 */
Screen.isImplementedBy = function(object) {
	return object instanceof Screen;
};

/* harmony default export */ __webpack_exports__["a"] = (Screen);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeNode = exports.MultiMap = undefined;

var _MultiMap = __webpack_require__(24);

var _MultiMap2 = _interopRequireDefault(_MultiMap);

var _TreeNode = __webpack_require__(25);

var _TreeNode2 = _interopRequireDefault(_TreeNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.MultiMap = _MultiMap2.default;
exports.TreeNode = _TreeNode2.default;

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_metal_dom__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_metal_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_metal_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_metal__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_metal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_metal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_metal_events__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_metal_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_metal_events__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_metal_promise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_metal_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_metal_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_metal_debounce__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_metal_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_metal_debounce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__globals_globals__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__route_Route__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__screen_Screen__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__surface_Surface__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_metal_uri__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_metal_uri___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_metal_uri__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_utils__ = __webpack_require__(5);














class App extends __WEBPACK_IMPORTED_MODULE_2_metal_events__["EventEmitter"] {

	/**
	 * App class that handle routes and screens lifecycle.
	 * @constructor
	 * @extends {EventEmitter}
	 */
	constructor() {
		super();

		/**
		 * Holds the active screen.
		 * @type {?Screen}
		 * @protected
		 */
		this.activeScreen = null;

		/**
		 * Holds the active path containing the query parameters.
		 * @type {?string}
		 * @protected
		 */
		this.activePath = null;

		/**
		 * Allows prevent navigate from dom prevented event.
		 * @type {boolean}
		 * @default true
		 * @protected
		 */
		this.allowPreventNavigate = true;

		/**
		 * Holds link base path.
		 * @type {!string}
		 * @default ''
		 * @protected
		 */
		this.basePath = '';

		/**
		 * Holds the value of the browser path before a navigation is performed.
		 * @type {!string}
		 * @default the current browser path.
		 * @protected
		 */
		this.browserPathBeforeNavigate = __WEBPACK_IMPORTED_MODULE_10__utils_utils__["a" /* default */].getCurrentBrowserPathWithoutHash();

		/**
		 * Captures scroll position from scroll event.
		 * @type {!boolean}
		 * @default true
		 * @protected
		 */
		this.captureScrollPositionFromScrollEvent = true;

		/**
		 * Holds the default page title.
		 * @type {string}
		 * @default null
		 * @protected
		 */
		this.defaultTitle = __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* default */].document.title;

		/**
		 * Holds the form selector to define forms that are routed.
		 * @type {!string}
		 * @default form[enctype="multipart/form-data"]:not([data-senna-off])
		 * @protected
		 */
		this.formSelector = 'form[enctype="multipart/form-data"]:not([data-senna-off])';

		/**
		 * When enabled, the route matching ignores query string from the path.
		 * @type {boolean}
		 * @default false
		 * @protected
		 */
		this.ignoreQueryStringFromRoutePath = false;

		/**
		 * Holds the link selector to define links that are routed.
		 * @type {!string}
		 * @default a:not([data-senna-off])
		 * @protected
		 */
		this.linkSelector = 'a:not([data-senna-off]):not([target="_blank"])';

		/**
		 * Holds the loading css class.
		 * @type {!string}
		 * @default senna-loading
		 * @protected
		 */
		this.loadingCssClass = 'senna-loading';

		/**
		 * Using the History API to manage your URLs is awesome and, as it happens,
		 * a crucial feature of good web apps. One of its downsides, however, is
		 * that scroll positions are stored and then, more importantly, restored
		 * whenever you traverse the history. This often means unsightly jumps as
		 * the scroll position changes automatically, and especially so if your app
		 * does transitions, or changes the contents of the page in any way.
		 * Ultimately this leads to an horrible user experience. The good news is,
		 * however, that there’s a potential fix: history.scrollRestoration.
		 * https://developers.google.com/web/updates/2015/09/history-api-scroll-restoration
		 * @type {boolean}
		 * @protected
		 */
		this.nativeScrollRestorationSupported = ('scrollRestoration' in __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* default */].window.history);

		/**
		 * When set to true there is a pendingNavigate that has not yet been
		 * resolved or rejected.
		 * @type {boolean}
		 * @default false
		 * @protected
		 */
		this.isNavigationPending = false;

		/**
		 * Holds a deferred with the current navigation.
		 * @type {?CancellablePromise}
		 * @default null
		 * @protected
		 */
		this.pendingNavigate = null;

		/**
		 * Holds the window horizontal scroll position when the navigation using
		 * back or forward happens to be restored after the surfaces are updated.
		 * @type {!Number}
		 * @default 0
		 * @protected
		 */
		this.popstateScrollLeft = 0;

		/**
		 * Holds the window vertical scroll position when the navigation using
		 * back or forward happens to be restored after the surfaces are updated.
		 * @type {!Number}
		 * @default 0
		 * @protected
		 */
		this.popstateScrollTop = 0;

		/**
		 * Holds the redirect path containing the query parameters.
		 * @type {?string}
		 * @protected
		 */
		this.redirectPath = null;

		/**
		 * Holds the screen routes configuration.
		 * @type {?Array}
		 * @default []
		 * @protected
		 */
		this.routes = [];

		/**
		 * Maps the screen instances by the url containing the parameters.
		 * @type {?Object}
		 * @default {}
		 * @protected
		 */
		this.screens = {};

		/**
		 * When set to true the first erroneous popstate fired on page load will be
		 * ignored, only if <code>globals.window.history.state</code> is also
		 * <code>null</code>.
		 * @type {boolean}
		 * @default false
		 * @protected
		 */
		this.skipLoadPopstate = false;

		/**
		 * Maps that index the surfaces instances by the surface id.
		 * @type {?Object}
		 * @default {}
		 * @protected
		 */
		this.surfaces = {};

		/**
		 * When set to true, moves the scroll position after popstate, or to the
		 * top of the viewport for new navigation. If false, the browser will
		 * take care of scroll restoration.
		 * @type {!boolean}
		 * @default true
		 * @protected
		 */
		this.updateScrollPosition = true;

		this.appEventHandlers_ = new __WEBPACK_IMPORTED_MODULE_2_metal_events__["EventHandler"]();

		this.appEventHandlers_.add(
			Object(__WEBPACK_IMPORTED_MODULE_0_metal_dom__["on"])(__WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* default */].window, 'scroll', __WEBPACK_IMPORTED_MODULE_4_metal_debounce___default()(this.onScroll_.bind(this), 100)),
			Object(__WEBPACK_IMPORTED_MODULE_0_metal_dom__["on"])(__WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* default */].window, 'load', this.onLoad_.bind(this)),
			Object(__WEBPACK_IMPORTED_MODULE_0_metal_dom__["on"])(__WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* default */].window, 'popstate', this.onPopstate_.bind(this))
		);

		this.on('startNavigate', this.onStartNavigate_);
		this.on('beforeNavigate', this.onBeforeNavigate_);
		this.on('beforeNavigate', this.onBeforeNavigateDefault_, true);
		this.on('beforeUnload', this.onBeforeUnloadDefault_);

		this.setLinkSelector(this.linkSelector);
		this.setFormSelector(this.formSelector);

		this.maybeOverloadBeforeUnload_();
	}

	/**
	 * Adds one or more screens to the application.
	 *
	 * Example:
	 *
	 * <code>
	 *   app.addRoutes({ path: '/foo', handler: FooScreen });
	 *   or
	 *   app.addRoutes([{ path: '/foo', handler: function(route) { return new FooScreen(); } }]);
	 * </code>
	 *
	 * @param {Object} or {Array} routes Single object or an array of object.
	 *     Each object should contain <code>path</code> and <code>screen</code>.
	 *     The <code>path</code> should be a string or a regex that maps the
	 *     navigation route to a screen class definition (not an instance), e.g:
	 *         <code>{ path: "/home:param1", handler: MyScreen }</code>
	 *         <code>{ path: /foo.+/, handler: MyScreen }</code>
	 * @chainable
	 */
	addRoutes(routes) {
		if (!Array.isArray(routes)) {
			routes = [routes];
		}
		routes.forEach((route) => {
			if (!(route instanceof __WEBPACK_IMPORTED_MODULE_6__route_Route__["a" /* default */])) {
				route = new __WEBPACK_IMPORTED_MODULE_6__route_Route__["a" /* default */](route.path, route.handler);
			}
			this.routes.push(route);
		});
		return this;
	}

	/**
	 * Adds one or more surfaces to the application.
	 * @param {Surface|String|Array.<Surface|String>} surfaces
	 *     Surface element id or surface instance. You can also pass an Array
	 *     whichcontains surface instances or id. In case of ID, these should be
	 *     the id of surface element.
	 * @chainable
	 */
	addSurfaces(surfaces) {
		if (!Array.isArray(surfaces)) {
			surfaces = [surfaces];
		}
		surfaces.forEach((surface) => {
			if (Object(__WEBPACK_IMPORTED_MODULE_1_metal__["isString"])(surface)) {
				surface = new __WEBPACK_IMPORTED_MODULE_8__surface_Surface__["a" /* default */](surface);
			}
			this.surfaces[surface.getId()] = surface;
		});
		return this;
	}

	/**
	 * Returns if can navigate to path.
	 * @param {!string} url
	 * @return {boolean}
	 */
	canNavigate(url) {
		const uri = __WEBPACK_IMPORTED_MODULE_10__utils_utils__["a" /* default */].isWebUri(url);

		if (!uri) {
			return false;
		}

		const path = __WEBPACK_IMPORTED_MODULE_10__utils_utils__["a" /* default */].getUrlPath(url);

		if (!this.isLinkSameOrigin_(uri.getHostname())) {
			console.log('Offsite link clicked');
			return false;
		}
		if (!this.isSameBasePath_(path)) {
			console.log('Link clicked outside app\'s base path');
			return false;
		}
		// Prevents navigation if it's a hash change on the same url.
		if (uri.getHash() && __WEBPACK_IMPORTED_MODULE_10__utils_utils__["a" /* default */].isCurrentBrowserPath(path)) {
			return false;
		}
		if (!this.findRoute(path)) {
			console.log('No route for ' + path);
			return false;
		}

		return true;
	}

	/**
	 * Clear screens cache.
	 * @chainable
	 */
	clearScreensCache() {
		Object.keys(this.screens).forEach((path) => {
			if (path === this.activePath) {
				this.activeScreen.clearCache();
			} else {
				this.removeScreen(path);
			}
		});
	}

	/**
	 * Retrieves or create a screen instance to a path.
	 * @param {!string} path Path containing the querystring part.
	 * @return {Screen}
	 */
	createScreenInstance(path, route) {
		if (!this.pendingNavigate && path === this.activePath) {
			console.log('Already at destination, refresh navigation');
			return this.activeScreen;
		}
		/* jshint newcap: false */
		var screen = this.screens[path];
		if (!screen) {
			var handler = route.getHandler();
			if (handler === __WEBPACK_IMPORTED_MODULE_7__screen_Screen__["a" /* default */] || __WEBPACK_IMPORTED_MODULE_7__screen_Screen__["a" /* default */].isImplementedBy(handler.prototype)) {
				screen = new handler();
			} else {
				screen = handler(route) || new __WEBPACK_IMPORTED_MODULE_7__screen_Screen__["a" /* default */]();
			}
			console.log('Create screen for [' + path + '] [' + screen + ']');
		}
		return screen;
	}

	/**
	 * @inheritDoc
	 */
	disposeInternal() {
		if (this.activeScreen) {
			this.removeScreen(this.activePath);
		}
		this.clearScreensCache();
		this.formEventHandler_.removeListener();
		this.linkEventHandler_.removeListener();
		this.appEventHandlers_.removeAllListeners();
		super.disposeInternal();
	}

	/**
	 * Dispatches to the first route handler that matches the current path, if
	 * any.
	 * @return {CancellablePromise} Returns a pending request cancellable promise.
	 */
	dispatch() {
		return this.navigate(__WEBPACK_IMPORTED_MODULE_10__utils_utils__["a" /* default */].getCurrentBrowserPath(), true);
	}

	/**
	 * Starts navigation to a path.
	 * @param {!string} path Path containing the querystring part.
	 * @param {boolean=} opt_replaceHistory Replaces browser history.
	 * @return {CancellablePromise} Returns a pending request cancellable promise.
	 */
	doNavigate_(path, opt_replaceHistory) {
		if (this.activeScreen && this.activeScreen.beforeDeactivate()) {
			this.pendingNavigate = __WEBPACK_IMPORTED_MODULE_3_metal_promise___default.a.reject(new __WEBPACK_IMPORTED_MODULE_3_metal_promise___default.a.CancellationError('Cancelled by active screen'));
			return this.pendingNavigate;
		}

		var route = this.findRoute(path);
		if (!route) {
			this.pendingNavigate = __WEBPACK_IMPORTED_MODULE_3_metal_promise___default.a.reject(new __WEBPACK_IMPORTED_MODULE_3_metal_promise___default.a.CancellationError('No route for ' + path));
			return this.pendingNavigate;
		}

		console.log('Navigate to [' + path + ']');

		this.stopPendingNavigate_();
		this.isNavigationPending = true;

		var nextScreen = this.createScreenInstance(path, route);

		return nextScreen.load(path)
			.then(() => {
				if (this.activeScreen) {
					this.activeScreen.deactivate();
				}
				this.prepareNavigateHistory_(path, nextScreen, opt_replaceHistory);
				this.prepareNavigateSurfaces_(
					nextScreen,
					this.surfaces,
					this.extractParams(route, path)
				);
			})
			.then(() => nextScreen.evaluateStyles(this.surfaces))
			.then(() => nextScreen.flip(this.surfaces))
			.then(() => nextScreen.evaluateScripts(this.surfaces))
			.then(() => this.maybeUpdateScrollPositionState_())
			.then(() => this.syncScrollPositionSyncThenAsync_())
			.then(() => this.finalizeNavigate_(path, nextScreen))
			.then(() => this.maybeOverloadBeforeUnload_())
			.catch((reason) => {
				this.isNavigationPending = false;
				this.handleNavigateError_(path, nextScreen, reason);
				throw reason;
			});
	}

	/**
	 * Extracts params according to the given path and route.
	 * @param {!Route} route
	 * @param {string} path
	 * @param {!Object}
	 */
	extractParams(route, path) {
		return route.extractParams(this.getRoutePath(path));
	}

	/**
	 * Finalizes a screen navigation.
	 * @param {!string} path Path containing the querystring part.
	 * @param {!Screen} nextScreen
	 * @protected
	 */
	finalizeNavigate_(path, nextScreen) {
		nextScreen.activate();

		if (this.activeScreen && !this.activeScreen.isCacheable()) {
			if (this.activeScreen !== nextScreen) {
				this.removeScreen(this.activePath);
			}
		}

		this.activePath = path;
		this.activeScreen = nextScreen;
		this.browserPathBeforeNavigate = __WEBPACK_IMPORTED_MODULE_10__utils_utils__["a" /* default */].getCurrentBrowserPathWithoutHash();
		this.screens[path] = nextScreen;
		this.isNavigationPending = false;
		this.pendingNavigate = null;
		__WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* default */].capturedFormElement = null;
		__WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* default */].capturedFormButtonElement = null;
		console.log('Navigation done');
	}

	/**
	 * Finds a route for the test path. Returns true if matches has a route,
	 * otherwise returns null.
	 * @param {!string} path Path containing the querystring part.
	 * @return {?Object} Route handler if match any or <code>null</code> if the
	 *     path is the same as the current url and the path contains a fragment.
	 */
	findRoute(path) {
		path = this.getRoutePath(path);
		for (var i = 0; i < this.routes.length; i++) {
			var route = this.routes[i];
			if (route.matchesPath(path)) {
				return route;
			}
		}

		return null;
	}

	/**
	 * Gets allow prevent navigate.
	 * @return {boolean}
	 */
	getAllowPreventNavigate() {
		return this.allowPreventNavigate;
	}

	/**
	 * Gets link base path.
	 * @return {!string}
	 */
	getBasePath() {
		return this.basePath;
	}

	/**
	 * Gets the default page title.
	 * @return {string} defaultTitle
	 */
	getDefaultTitle() {
		return this.defaultTitle;
	}

	/**
	 * Gets the form selector.
	 * @return {!string}
	 */
	getFormSelector() {
		return this.formSelector;
	}

	/**
	 * Check if route matching is ignoring query string from the route path.
	 * @return {boolean}
	 */
	getIgnoreQueryStringFromRoutePath() {
		return this.ignoreQueryStringFromRoutePath;
	}

	/**
	 * Gets the link selector.
	 * @return {!string}
	 */
	getLinkSelector() {
		return this.linkSelector;
	}

	/**
	 * Gets the loading css class.
	 * @return {!string}
	 */
	getLoadingCssClass() {
		return this.loadingCssClass;
	}

	/**
	 * Returns the given path formatted to be matched by a route. This will,
	 * for example, remove the base path from it, but make sure it will end
	 * with a '/'.
	 * @param {string} path
	 * @return {string}
	 */
	getRoutePath(path) {
		if (this.getIgnoreQueryStringFromRoutePath()) {
			path = __WEBPACK_IMPORTED_MODULE_10__utils_utils__["a" /* default */].getUrlPathWithoutHashAndSearch(path);
			return __WEBPACK_IMPORTED_MODULE_10__utils_utils__["a" /* default */].getUrlPathWithoutHashAndSearch(path.substr(this.basePath.length));
		}

		path = __WEBPACK_IMPORTED_MODULE_10__utils_utils__["a" /* default */].getUrlPathWithoutHash(path);
		return __WEBPACK_IMPORTED_MODULE_10__utils_utils__["a" /* default */].getUrlPathWithoutHash(path.substr(this.basePath.length));
	}

	/**
	 * Gets the update scroll position value.
	 * @return {boolean}
	 */
	getUpdateScrollPosition() {
		return this.updateScrollPosition;
	}

	/**
	 * Handle navigation error.
	 * @param {!string} path Path containing the querystring part.
	 * @param {!Screen} nextScreen
	 * @param {!Error} error
	 * @protected
	 */
	handleNavigateError_(path, nextScreen, error) {
		console.log('Navigation error for [' + nextScreen + '] (' + error + ')');
		this.emit('navigationError', {
			error,
			nextScreen,
			path
		});
		if (!__WEBPACK_IMPORTED_MODULE_10__utils_utils__["a" /* default */].isCurrentBrowserPath(path)) {
			if (this.isNavigationPending && this.pendingNavigate) {
				this.pendingNavigate.thenAlways(() => this.removeScreen(path), this);
			} else {
				this.removeScreen(path);
			}
		}
	}

	/**
	 * Checks if app has routes.
	 * @return {boolean}
	 */
	hasRoutes() {
		return this.routes.length > 0;
	}

	/**
	 * Tests if hostname is an offsite link.
	 * @param {!string} hostname Link hostname to compare with
	 *     <code>globals.window.location.hostname</code>.
	 * @return {boolean}
	 * @protected
	 */
	isLinkSameOrigin_(hostname) {
		return hostname === __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* default */].window.location.hostname;
	}

	/**
	 * Tests if link element has the same app's base path.
	 * @param {!string} path Link path containing the querystring part.
	 * @return {boolean}
	 * @protected
	 */
	isSameBasePath_(path) {
		return path.indexOf(this.basePath) === 0;
	}

	/**
	 * Lock the document scroll in order to avoid the browser native back and
	 * forward navigation to change the scroll position. In the end of
	 * navigation lifecycle scroll is repositioned.
	 * @protected
	 */
	lockHistoryScrollPosition_() {
		var state = __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* default */].window.history.state;
		if (!state) {
			return;
		}
		// Browsers are inconsistent when re-positioning the scroll history on
		// popstate. At some browsers, history scroll happens before popstate, then
		// lock the scroll on the last known position as soon as possible after the
		// current JS execution context and capture the current value. Some others,
		// history scroll happens after popstate, in this case, we bind an once
		// scroll event to lock the las known position. Lastly, the previous two
		// behaviors can happen even on the same browser, hence the race will decide
		// the winner.
		var winner = false;
		var switchScrollPositionRace = function() {
			__WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* default */].document.removeEventListener('scroll', switchScrollPositionRace, false);
			if (!winner) {
				__WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* default */].window.scrollTo(state.scrollLeft, state.scrollTop);
				winner = true;
			}
		};
		__WEBPACK_IMPORTED_MODULE_1_metal__["async"].nextTick(switchScrollPositionRace);
		__WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* default */].document.addEventListener('scroll', switchScrollPositionRace, false);
	}

	/**
	 * If supported by the browser, disables native scroll restoration and
	 * stores current value.
	 */
	maybeDisableNativeScrollRestoration() {
		if (this.nativeScrollRestorationSupported) {
			this.nativeScrollRestoration_ = __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* default */].window.history.scrollRestoration;
			__WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* default */].window.history.scrollRestoration = 'manual';
		}
	}

	/**
	 * Maybe navigate to a path.
	 * @param {string} href Information about the link's href.
	 * @param {Event} event Dom event that initiated the navigation.
	 */
	maybeNavigate_(href, event) {
		if (!this.canNavigate(href)) {
			return;
		}

		__WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* default */].capturedFormElement = event.capturedFormElement;
		__WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* default */].capturedFormButtonElement = event.capturedFormButtonElement;

		var navigateFailed = false;
		try {
			this.navigate(__WEBPACK_IMPORTED_MODULE_10__utils_utils__["a" /* default */].getUrlPath(href), false, event);
		} catch (err) {
			// Do not prevent link navigation in case some synchronous error occurs
			navigateFailed = true;
		}

		if (!navigateFailed) {
			event.preventDefault();
		}
	}

	/**
	 * Checks whether the onbeforeunload global event handler is overloaded
	 * by client code. If so, it replaces with a function that halts the normal
	 * event flow in relation with the client onbeforeunload function.
	 * This can be in most part used to prematurely terminate navigation to other pages
	 * according to the given constrait(s). 
	 * @protected 
	 */
	maybeOverloadBeforeUnload_() {
		if ('function' === typeof window.onbeforeunload) {
			window._onbeforeunload = window.onbeforeunload;

			window.onbeforeunload = event => {
				this.emit('beforeUnload', event);
				if (event && event.defaultPrevented) {
					return true;
				}
			};

			// mark the updated handler due unwanted recursion 
			window.onbeforeunload._overloaded = true;
		}
	}

	/**
	 * Maybe reposition scroll to hashed anchor.
	 */
	maybeRepositionScrollToHashedAnchor() {
		const hash = __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* default */].window.location.hash;
		if (hash) {
			let anchorElement = __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* default */].document.getElementById(hash.substring(1));
			if (anchorElement) {
				const {offsetLeft, offsetTop} = __WEBPACK_IMPORTED_MODULE_10__utils_utils__["a" /* default */].getNodeOffset(anchorElement);
				__WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* default */].window.scrollTo(offsetLeft, offsetTop);
			}
		}
	}

	/**
	 * If supported by the browser, restores native scroll restoration to the
	 * value captured by `maybeDisableNativeScrollRestoration`.
	 */
	maybeRestoreNativeScrollRestoration() {
		if (this.nativeScrollRestorationSupported && this.nativeScrollRestoration_) {
			__WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* default */].window.history.scrollRestoration = this.nativeScrollRestoration_;
		}
	}

	/**
	 * Maybe restore redirected path hash in case both the current path and
	 * the given path are the same.
	 * @param {!string} path Path before navigation.
	 * @param {!string} redirectPath Path after navigation.
	 * @param {!string} hash Hash to be added to the path.
	 * @return {!string} Returns the path with the hash restored.
	 */
	maybeRestoreRedirectPathHash_(path, redirectPath, hash) {
		if (redirectPath === __WEBPACK_IMPORTED_MODULE_10__utils_utils__["a" /* default */].getUrlPathWithoutHash(path)) {
			return redirectPath + hash;
		}
		return redirectPath;
	}

	/**
	 * Maybe update scroll position in history state to anchor on path.
	 * @param {!string} path Path containing anchor
	 */
	maybeUpdateScrollPositionState_() {
		var hash = __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* default */].window.location.hash;
		var anchorElement = __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* default */].document.getElementById(hash.substring(1));
		if (anchorElement) {
			const {offsetLeft, offsetTop} = __WEBPACK_IMPORTED_MODULE_10__utils_utils__["a" /* default */].getNodeOffset(anchorElement);
			this.saveHistoryCurrentPageScrollPosition_(offsetTop, offsetLeft);
		}
	}

	/**
	 * Navigates to the specified path if there is a route handler that matches.
	 * @param {!string} path Path to navigate containing the base path.
	 * @param {boolean=} opt_replaceHistory Replaces browser history.
	 * @param {Event=} event Optional event object that triggered the navigation.
	 * @return {CancellablePromise} Returns a pending request cancellable promise.
	 */
	navigate(path, opt_replaceHistory, opt_event) {
		if (!__WEBPACK_IMPORTED_MODULE_10__utils_utils__["a" /* default */].isHtml5HistorySupported()) {
			throw new Error('HTML5 History is not supported. Senna will not intercept navigation.');
		}

		// When reloading the same path do replaceState instead of pushState to
		// avoid polluting history with states with the same path.
		if (path === this.activePath) {
			opt_replaceHistory = true;
		}

		this.emit('beforeNavigate', {
			event: opt_event,
			path: path,
			replaceHistory: !!opt_replaceHistory
		});

		return this.pendingNavigate;
	}

	/**
	 * Befores navigation to a path.
	 * @param {!Event} event Event facade containing <code>path</code> and
	 *     <code>replaceHistory</code>.
	 * @protected
	 */
	onBeforeNavigate_(event) {
		if (__WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* default */].capturedFormElement) {
			event.form = __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* default */].capturedFormElement;
		}
	}

	/**
	 * Befores navigation to a path. Runs after external listeners.
	 * @param {!Event} event Event facade containing <code>path</code> and
	 *     <code>replaceHistory</code>.
	 * @protected
	 */
	onBeforeNavigateDefault_(event) {
		if (this.pendingNavigate) {
			if (this.pendingNavigate.path === event.path) {
				console.log('Waiting...');
				return;
			}
		}

		this.emit('beforeUnload', event);

		this.emit('startNavigate', {
			form: event.form,
			path: event.path,
			replaceHistory: event.replaceHistory
		});
	}

	/**
	 * Custom event handler that executes the original listener that has been
	 * added by the client code and terminates the navigation accordingly.
	 * @param {!Event} event original Event facade.
	 * @protected
	 */
	onBeforeUnloadDefault_(event) {
		var func = window._onbeforeunload;
		if (func && !func._overloaded && func()) {
			event.preventDefault();
		}
	}

	/**
	 * Intercepts document clicks and test link elements in order to decide
	 * whether Surface app can navigate.
	 * @param {!Event} event Event facade
	 * @protected
	 */
	onDocClickDelegate_(event) {
		if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || event.button) {
			console.log('Navigate aborted, invalid mouse button or modifier key pressed.');
			return;
		}
		this.maybeNavigate_(event.delegateTarget.href, event);
	}

	/**
	 * Intercepts document form submits and test action path in order to decide
	 * whether Surface app can navigate.
	 * @param {!Event} event Event facade
	 * @protected
	 */
	onDocSubmitDelegate_(event) {
		var form = event.delegateTarget;
		if (form.method === 'get') {
			console.log('GET method not supported');
			return;
		}
		event.capturedFormElement = form;
		const buttonSelector = 'button:not([type]),button[type=submit],input[type=submit]';
		if (Object(__WEBPACK_IMPORTED_MODULE_0_metal_dom__["match"])(__WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* default */].document.activeElement, buttonSelector)) {
			event.capturedFormButtonElement = __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* default */].document.activeElement;
		} else {
			event.capturedFormButtonElement = form.querySelector(buttonSelector);
		}
		this.maybeNavigate_(form.action, event);
	}

	/**
	 * Listens to the window's load event in order to avoid issues with some browsers
	 * that trigger popstate calls on the first load. For more information see
	 * http://stackoverflow.com/questions/6421769/popstate-on-pages-load-in-chrome.
	 * @protected
	 */
	onLoad_() {
		this.skipLoadPopstate = true;
		setTimeout(() => {
			// The timeout ensures that popstate events will be unblocked right
			// after the load event occured, but not in the same event-loop cycle.
			this.skipLoadPopstate = false;
		}, 0);
		// Try to reposition scroll to the hashed anchor when page loads.
		this.maybeRepositionScrollToHashedAnchor();
	}

	/**
	 * Handles browser history changes and fires app's navigation if the state
	 * belows to us. If we detect a popstate and the state is <code>null</code>,
	 * assume it is navigating to an external page or to a page we don't have
	 * route, then <code>globals.window.location.reload()</code> is invoked in order to
	 * reload the content to the current url.
	 * @param {!Event} event Event facade
	 * @protected
	 */
	onPopstate_(event) {
		if (this.skipLoadPopstate) {
			return;
		}

		// Do not navigate if the popstate was triggered by a hash change.
		if (__WEBPACK_IMPORTED_MODULE_10__utils_utils__["a" /* default */].isCurrentBrowserPath(this.browserPathBeforeNavigate)) {
			this.maybeRepositionScrollToHashedAnchor();
			return;
		}

		var state = event.state;

		if (!state) {
			if (__WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* default */].window.location.hash) {
				// If senna is on an redirect path and a hash popstate happens
				// to a different url, reload the browser. This behavior doesn't
				// require senna to route hashed links and is closer to native
				// browser behavior.
				if (this.redirectPath && !__WEBPACK_IMPORTED_MODULE_10__utils_utils__["a" /* default */].isCurrentBrowserPath(this.redirectPath)) {
					this.reloadPage();
				}
				// Always try to reposition scroll to the hashed anchor when
				// hash popstate happens.
				this.maybeRepositionScrollToHashedAnchor();
			} else {
				this.reloadPage();
			}
			return;
		}

		if (state.senna) {
			console.log('History navigation to [' + state.path + ']');
			this.popstateScrollTop = state.scrollTop;
			this.popstateScrollLeft = state.scrollLeft;
			if (!this.nativeScrollRestorationSupported) {
				this.lockHistoryScrollPosition_();
			}
			this.navigate(state.path, true);
		}
	}

	/**
	 * Listens document scroll changes in order to capture the possible lock
	 * scroll position for history scrolling.
	 * @protected
	 */
	onScroll_() {
		if (this.captureScrollPositionFromScrollEvent) {
			this.saveHistoryCurrentPageScrollPosition_(__WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* default */].window.pageYOffset, __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* default */].window.pageXOffset);
		}
	}

	/**
	 * Starts navigation to a path.
	 * @param {!Event} event Event facade containing <code>path</code> and
	 *     <code>replaceHistory</code>.
	 * @protected
	 */
	onStartNavigate_(event) {
		this.maybeDisableNativeScrollRestoration();
		this.captureScrollPositionFromScrollEvent = false;
		Object(__WEBPACK_IMPORTED_MODULE_0_metal_dom__["addClasses"])(__WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* default */].document.documentElement, this.loadingCssClass);

		var endNavigatePayload = {
			form: event.form,
			path: event.path
		};

		this.pendingNavigate = this.doNavigate_(event.path, event.replaceHistory)
			.catch((reason) => {
				endNavigatePayload.error = reason;
				throw reason;
			})
			.thenAlways(() => {
				if (!this.pendingNavigate) {
					Object(__WEBPACK_IMPORTED_MODULE_0_metal_dom__["removeClasses"])(__WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* default */].document.documentElement, this.loadingCssClass);
					this.maybeRestoreNativeScrollRestoration();
					this.captureScrollPositionFromScrollEvent = true;
				}
				this.emit('endNavigate', endNavigatePayload);
			});

		this.pendingNavigate.path = event.path;
	}

	/**
	 * Prefetches the specified path if there is a route handler that matches.
	 * @param {!string} path Path to navigate containing the base path.
	 * @return {CancellablePromise} Returns a pending request cancellable promise.
	 */
	prefetch(path) {
		var route = this.findRoute(path);
		if (!route) {
			return __WEBPACK_IMPORTED_MODULE_3_metal_promise___default.a.reject(new __WEBPACK_IMPORTED_MODULE_3_metal_promise___default.a.CancellationError('No route for ' + path));
		}

		console.log('Prefetching [' + path + ']');

		var nextScreen = this.createScreenInstance(path, route);

		return nextScreen.load(path)
			.then(() => this.screens[path] = nextScreen)
			.catch((reason) => {
				this.handleNavigateError_(path, nextScreen, reason);
				throw reason;
			});
	}

	/**
	 * Prepares screen flip. Updates history state and surfaces content.
	 * @param {!string} path Path containing the querystring part.
	 * @param {!Screen} nextScreen
	 * @param {boolean=} opt_replaceHistory Replaces browser history.
	 */
	prepareNavigateHistory_(path, nextScreen, opt_replaceHistory) {
		let title = nextScreen.getTitle();
		if (!Object(__WEBPACK_IMPORTED_MODULE_1_metal__["isString"])(title)) {
			title = this.getDefaultTitle();
		}
		let redirectPath = nextScreen.beforeUpdateHistoryPath(path);
		const historyState = {
			form: Object(__WEBPACK_IMPORTED_MODULE_1_metal__["isDefAndNotNull"])(__WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* default */].capturedFormElement),
			path,
			redirectPath,
			scrollLeft: 0,
			scrollTop: 0,
			senna: true
		};
		if (opt_replaceHistory) {
			historyState.scrollTop = this.popstateScrollTop;
			historyState.scrollLeft = this.popstateScrollLeft;
		}
		const hash = new __WEBPACK_IMPORTED_MODULE_9_metal_uri___default.a(path).getHash();
		redirectPath = this.maybeRestoreRedirectPathHash_(path, redirectPath, hash);
		this.updateHistory_(title, redirectPath, nextScreen.beforeUpdateHistoryState(historyState), opt_replaceHistory);
		this.redirectPath = redirectPath;
	}

	/**
	 * Prepares screen flip. Updates history state and surfaces content.
	 * @param {!Screen} nextScreen
	 * @param {!Object} surfaces Map of surfaces to flip keyed by surface id.
	 * @param {!Object} params Params extracted from the current path.
	 */
	prepareNavigateSurfaces_(nextScreen, surfaces, params) {
		Object.keys(surfaces).forEach((id) => {
			var surfaceContent = nextScreen.getSurfaceContent(id, params);
			surfaces[id].addContent(nextScreen.getId(), surfaceContent);
			console.log('Screen [' + nextScreen.getId() + '] add content to surface ' +
				'[' + surfaces[id] + '] [' + (Object(__WEBPACK_IMPORTED_MODULE_1_metal__["isDefAndNotNull"])(surfaceContent) ? '...' : 'empty') + ']');
		});
	}

	/**
	 * Reloads the page by performing `window.location.reload()`.
	 */
	reloadPage() {
		__WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* default */].window.location.reload();
	}

	/**
	 * Removes route instance from app routes.
	 * @param {Route} route
	 * @return {boolean} True if an element was removed.
	 */
	removeRoute(route) {
		return __WEBPACK_IMPORTED_MODULE_1_metal__["array"].remove(this.routes, route);
	}

	/**
	 * Removes a screen.
	 * @param {!string} path Path containing the querystring part.
	 */
	removeScreen(path) {
		var screen = this.screens[path];
		if (screen) {
			Object.keys(this.surfaces).forEach((surfaceId) => this.surfaces[surfaceId].remove(screen.getId()));
			screen.dispose();
			delete this.screens[path];
		}
	}

	/**
	 * Saves given scroll position into history state.
	 * @param {!number} scrollTop Number containing the top scroll position to be saved.
	 * @param {!number} scrollLeft Number containing the left scroll position to be saved.
	 */
	saveHistoryCurrentPageScrollPosition_(scrollTop, scrollLeft) {
		var state = __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* default */].window.history.state;
		if (state && state.senna) {
			[state.scrollTop, state.scrollLeft] = [scrollTop, scrollLeft];
			__WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* default */].window.history.replaceState(state, null, null);
		}
	}

	/**
	 * Sets allow prevent navigate.
	 * @param {boolean} allowPreventNavigate
	 */
	setAllowPreventNavigate(allowPreventNavigate) {
		this.allowPreventNavigate = allowPreventNavigate;
	}

	/**
	 * Sets link base path.
	 * @param {!string} path
	 */
	setBasePath(basePath) {
		this.basePath = __WEBPACK_IMPORTED_MODULE_10__utils_utils__["a" /* default */].removePathTrailingSlash(basePath);
	}

	/**
	 * Sets the default page title.
	 * @param {string} defaultTitle
	 */
	setDefaultTitle(defaultTitle) {
		this.defaultTitle = defaultTitle;
	}

	/**
	 * Sets the form selector.
	 * @param {!string} formSelector
	 */
	setFormSelector(formSelector) {
		this.formSelector = formSelector;
		if (this.formEventHandler_) {
			this.formEventHandler_.removeListener();
		}
		this.formEventHandler_ = Object(__WEBPACK_IMPORTED_MODULE_0_metal_dom__["delegate"])(document, 'submit', this.formSelector, this.onDocSubmitDelegate_.bind(this), this.allowPreventNavigate);
	}

	/**
	 * Sets if route matching should ignore query string from the route path.
	 * @param {boolean} ignoreQueryStringFromRoutePath
	 */
	setIgnoreQueryStringFromRoutePath(ignoreQueryStringFromRoutePath) {
		this.ignoreQueryStringFromRoutePath = ignoreQueryStringFromRoutePath;
	}

	/**
	 * Sets the link selector.
	 * @param {!string} linkSelector
	 */
	setLinkSelector(linkSelector) {
		this.linkSelector = linkSelector;
		if (this.linkEventHandler_) {
			this.linkEventHandler_.removeListener();
		}
		this.linkEventHandler_ = Object(__WEBPACK_IMPORTED_MODULE_0_metal_dom__["delegate"])(document, 'click', this.linkSelector, this.onDocClickDelegate_.bind(this), this.allowPreventNavigate);
	}

	/**
	 * Sets the loading css class.
	 * @param {!string} loadingCssClass
	 */
	setLoadingCssClass(loadingCssClass) {
		this.loadingCssClass = loadingCssClass;
	}

	/**
	 * Sets the update scroll position value.
	 * @param {boolean} updateScrollPosition
	 */
	setUpdateScrollPosition(updateScrollPosition) {
		this.updateScrollPosition = updateScrollPosition;
	}

	/**
	 * Cancels pending navigate with <code>Cancel pending navigation</code> error.
	 * @protected
	 */
	stopPendingNavigate_() {
		if (this.pendingNavigate) {
			this.pendingNavigate.cancel('Cancel pending navigation');
			this.pendingNavigate = null;
		}
	}

	/**
	 * Sync document scroll position twice, the first one synchronous and then
	 * one inside <code>async.nextTick</code>. Relevant to browsers that fires
	 * scroll restoration asynchronously after popstate.
	 * @protected
	 * @return {?CancellablePromise=}
	 */
	syncScrollPositionSyncThenAsync_() {
		var state = __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* default */].window.history.state;
		if (!state) {
			return;
		}

		var scrollTop = state.scrollTop;
		var scrollLeft = state.scrollLeft;

		var sync = () => {
			if (this.updateScrollPosition) {
				__WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* default */].window.scrollTo(scrollLeft, scrollTop);
			}
		};

		return new __WEBPACK_IMPORTED_MODULE_3_metal_promise___default.a((resolve) => sync() & __WEBPACK_IMPORTED_MODULE_1_metal__["async"].nextTick(() => sync() & resolve()));
	}

	/**
	 * Updates or replace browser history.
	 * @param {?string} title Document title.
	 * @param {!string} path Path containing the querystring part.
	 * @param {!object} state
	 * @param {boolean=} opt_replaceHistory Replaces browser history.
	 * @protected
	 */
	updateHistory_(title, path, state, opt_replaceHistory) {
		if (opt_replaceHistory) {
			__WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* default */].window.history.replaceState(state, title, path);
		} else {
			__WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* default */].window.history.pushState(state, title, path);
		}

		let titleNode = __WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* default */].document.querySelector('title');
		if (titleNode) {
			titleNode.innerHTML = title;
		} else {
			__WEBPACK_IMPORTED_MODULE_5__globals_globals__["a" /* default */].document.title = title;
		}
	}

}

/* harmony default export */ __webpack_exports__["a"] = (App);


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metal = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * EventHandle utility. Holds information about an event subscription, and
 * allows removing them easily.
 * EventHandle is a Disposable, but it's important to note that the
 * EventEmitter that created it is not the one responsible for disposing it.
 * That responsibility is for the code that holds a reference to it.
 * @param {!EventEmitter} emitter Emitter the event was subscribed to.
 * @param {string} event The name of the event that was subscribed to.
 * @param {!Function} listener The listener subscribed to the event.
 * @constructor
 * @extends {Disposable}
 */
var EventHandle = function (_Disposable) {
	_inherits(EventHandle, _Disposable);

	function EventHandle(emitter, event, listener) {
		_classCallCheck(this, EventHandle);

		/**
   * The EventEmitter instance that the event was subscribed to.
   * @type {EventEmitter}
   * @protected
   */
		var _this = _possibleConstructorReturn(this, (EventHandle.__proto__ || Object.getPrototypeOf(EventHandle)).call(this));

		_this.emitter_ = emitter;

		/**
   * The name of the event that was subscribed to.
   * @type {string}
   * @protected
   */
		_this.event_ = event;

		/**
   * The listener subscribed to the event.
   * @type {Function}
   * @protected
   */
		_this.listener_ = listener;
		return _this;
	}

	/**
  * Disposes of this instance's object references.
  * @override
  */


	_createClass(EventHandle, [{
		key: 'disposeInternal',
		value: function disposeInternal() {
			this.removeListener();
			this.emitter_ = null;
			this.listener_ = null;
		}

		/**
   * Removes the listener subscription from the emitter.
   */

	}, {
		key: 'removeListener',
		value: function removeListener() {
			if (!this.emitter_.isDisposed()) {
				this.emitter_.removeListener(this.event_, this.listener_);
			}
		}
	}]);

	return EventHandle;
}(_metal.Disposable);

exports.default = EventHandle;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metalEvents = __webpack_require__(7);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This is a special EventHandle, that is responsible for dom events, instead
 * of EventEmitter events.
 * @extends {EventHandle}
 */
var DomEventHandle = function (_EventHandle) {
	_inherits(DomEventHandle, _EventHandle);

	/**
  * The constructor for `DomEventHandle`.
  * @param {!EventEmitter} emitter Emitter the event was subscribed to.
  * @param {string} event The name of the event that was subscribed to.
  * @param {!Function} listener The listener subscribed to the event.
  * @param {boolean} opt_capture Flag indicating if listener should be triggered
  *   during capture phase, instead of during the bubbling phase. Defaults to false.
  * @constructor
  */
	function DomEventHandle(emitter, event, listener, opt_capture) {
		_classCallCheck(this, DomEventHandle);

		var _this = _possibleConstructorReturn(this, (DomEventHandle.__proto__ || Object.getPrototypeOf(DomEventHandle)).call(this, emitter, event, listener));

		_this.capture_ = opt_capture;
		return _this;
	}

	/**
  * @inheritDoc
  */


	_createClass(DomEventHandle, [{
		key: 'removeListener',
		value: function removeListener() {
			this.emitter_.removeEventListener(this.event_, this.listener_, this.capture_);
		}
	}]);

	return DomEventHandle;
}(_metalEvents.EventHandle);

exports.default = DomEventHandle;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dom = __webpack_require__(2);

var _metal = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class with static methods responsible for doing browser feature checks.
 */
var features = function () {
	function features() {
		_classCallCheck(this, features);
	}

	_createClass(features, null, [{
		key: 'checkAnimationEventName',

		/**
   * Some browsers still supports prefixed animation events. This method can
   * be used to retrieve the current browser event name for both, animation
   * and transition.
   * @return {object}
   */
		value: function checkAnimationEventName() {
			if (features.animationEventName_ === undefined) {
				features.animationEventName_ = {
					animation: features.checkAnimationEventName_('animation'),
					transition: features.checkAnimationEventName_('transition')
				};
			}
			return features.animationEventName_;
		}

		/**
   * @protected
   * @param {string} type Type to test: animation, transition.
   * @return {string} Browser event name.
   */

	}, {
		key: 'checkAnimationEventName_',
		value: function checkAnimationEventName_(type) {
			var prefixes = ['Webkit', 'MS', 'O', ''];
			var typeTitleCase = _metal.string.replaceInterval(type, 0, 1, type.substring(0, 1).toUpperCase());
			var suffixes = [typeTitleCase + 'End', typeTitleCase + 'End', typeTitleCase + 'End', type + 'end'];
			for (var i = 0; i < prefixes.length; i++) {
				if (features.animationElement_.style[prefixes[i] + typeTitleCase] !== undefined) {
					return prefixes[i].toLowerCase() + suffixes[i];
				}
			}
			return type + 'end';
		}

		/**
   * Some browsers (like IE9) change the order of element attributes, when html
   * is rendered. This method can be used to check if this behavior happens on
   * the current browser.
   * @return {boolean}
   */

	}, {
		key: 'checkAttrOrderChange',
		value: function checkAttrOrderChange() {
			if (features.attrOrderChange_ === undefined) {
				var originalContent = '<div data-component="" data-ref=""></div>';
				var element = document.createElement('div');
				(0, _dom.append)(element, originalContent);
				features.attrOrderChange_ = originalContent !== element.innerHTML;
			}
			return features.attrOrderChange_;
		}
	}]);

	return features;
}();

features.animationElement_ = document.createElement('div');
features.animationEventName_ = undefined;
features.attrOrderChange_ = undefined;

exports.default = features;

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__globals_globals__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_metal__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_metal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_metal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_metal_dom__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_metal_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_metal_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_metal_promise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_metal_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_metal_promise__);







class Surface extends __WEBPACK_IMPORTED_MODULE_1_metal__["Disposable"] {

	/**
	 * Surface class representing the references to elements on the page that
	 * can potentially be updated by <code>App</code>.
	 * @param {string} id
	 * @constructor
	 */
	constructor(id) {
		super();

		if (!id) {
			throw new Error('Surface element id not specified. A surface element requires a valid id.');
		}

		/**
		 * Holds the active child element.
		 * @type {Element}
		 * @default null
		 * @protected
		 */
		this.activeChild = null;

		/**
		 * Holds the default child element.
		 * @type {Element}
		 * @default null
		 * @protected
		 */
		this.defaultChild = null;

		/**
		 * Holds the element with the specified surface id, if not found creates a
		 * new element with the specified id.
		 * @type {Element}
		 * @default null
		 * @protected
		 */
		this.element = null;

		/**
		 * Holds the surface id.
		 * @type {String}
		 * @default null
		 * @protected
		 */
		this.id = id;

		/**
		 * Holds the default transitionFn for the surfaces.
		 * @param {?Element=} from The visible surface element.
		 * @param {?Element=} to The surface element to be flipped.
		 * @default null
		 */
		this.transitionFn = null;

		this.defaultChild = this.getChild(Surface.DEFAULT);
		this.maybeWrapContentAsDefault_();
		this.activeChild = this.defaultChild;
	}

	/**
	 * Adds screen content to a surface. If content hasn't been passed, see if
	 * an element exists in the DOM that matches the id. By convention, the
	 * element should already be nested in the right element and should have an
	 * id that is a concatentation of the surface id + '-' + the screen id.
	 * @param {!string} screenId The screen id the content belongs too.
	 * @param {?string|Element=} opt_content The string content or element to
	 *     add be added as surface content.
	 * @return {Element}
	 */
	addContent(screenId, opt_content) {
		var child = this.defaultChild;

		if (Object(__WEBPACK_IMPORTED_MODULE_1_metal__["isDefAndNotNull"])(opt_content)) {
			child = this.getChild(screenId);
			if (child) {
				Object(__WEBPACK_IMPORTED_MODULE_2_metal_dom__["removeChildren"])(child);
			} else {
				child = this.createChild(screenId);
				this.transition(child, null);
			}
			Object(__WEBPACK_IMPORTED_MODULE_2_metal_dom__["append"])(child, opt_content);
		}

		var element = this.getElement();

		if (element && child) {
			Object(__WEBPACK_IMPORTED_MODULE_2_metal_dom__["append"])(element, child);
		}

		return child;
	}

	/**
	 * Creates child node for the surface.
	 * @param {!string} screenId The screen id.
	 * @return {Element}
	 */
	createChild(screenId) {
		var child = __WEBPACK_IMPORTED_MODULE_0__globals_globals__["a" /* default */].document.createElement('div');
		child.setAttribute('id', this.makeId_(screenId));
		return child;
	}

	/**
	 * Gets child node of the surface.
	 * @param {!string} screenId The screen id.
	 * @return {?Element}
	 */
	getChild(screenId) {
		return __WEBPACK_IMPORTED_MODULE_0__globals_globals__["a" /* default */].document.getElementById(this.makeId_(screenId));
	}

	/**
	 * Gets the surface element from element, and sets it to the el property of
	 * the current instance.
	 * <code>this.element</code> will be used.
	 * @return {?Element} The current surface element.
	 */
	getElement() {
		if (this.element) {
			return this.element;
		}
		this.element = __WEBPACK_IMPORTED_MODULE_0__globals_globals__["a" /* default */].document.getElementById(this.id);
		return this.element;
	}

	/**
	 * Gets the surface id.
	 * @return {String}
	 */
	getId() {
		return this.id;
	}

	/**
	 * Gets the surface transition function.
	 * See <code>Surface.defaultTransition</code>.
	 * @return {?Function=} The transition function.
	 */
	getTransitionFn() {
		return this.transitionFn;
	}

	/**
	 * Makes the id for the element that holds content for a screen.
	 * @param {!string} screenId The screen id the content belongs too.
	 * @return {String}
	 * @private
	 */
	makeId_(screenId) {
		return this.id + '-' + screenId;
	}

	/**
	 * If default child is missing, wraps surface content as default child. If
	 * surface have static content, make sure to place a
	 * <code>surfaceId-default</code> element inside surface, only contents
	 * inside the default child will be replaced by navigation.
	 */
	maybeWrapContentAsDefault_() {
		var element = this.getElement();
		if (element && !this.defaultChild) {
			var fragment = __WEBPACK_IMPORTED_MODULE_0__globals_globals__["a" /* default */].document.createDocumentFragment();
			while (element.firstChild) {
				fragment.appendChild(element.firstChild);
			}
			this.defaultChild = this.addContent(Surface.DEFAULT, fragment);
			this.transition(null, this.defaultChild);
		}
	}

	/**
	 * Sets the surface id.
	 * @param {!string} id
	 */
	setId(id) {
		this.id = id;
	}

	/**
	 * Sets the surface transition function.
	 * See <code>Surface.defaultTransition</code>.
	 * @param {?Function=} transitionFn The transition function.
	 */
	setTransitionFn(transitionFn) {
		this.transitionFn = transitionFn;
	}

	/**
	 * Shows screen content from a surface.
	 * @param {String} screenId The screen id to show.
	 * @return {CancellablePromise} Pauses the navigation until it is resolved.
	 */
	show(screenId) {
		var from = this.activeChild;
		var to = this.getChild(screenId);
		if (!to) {
			to = this.defaultChild;
		}
		this.activeChild = to;
		return this.transition(from, to).thenAlways(() => {
			if (from && from !== to) {
				Object(__WEBPACK_IMPORTED_MODULE_2_metal_dom__["exitDocument"])(from);
			}
		});
	}

	/**
	 * Removes screen content from a surface.
	 * @param {!string} screenId The screen id to remove.
	 */
	remove(screenId) {
		var child = this.getChild(screenId);
		if (child) {
			Object(__WEBPACK_IMPORTED_MODULE_2_metal_dom__["exitDocument"])(child);
		}
	}

	/**
	 * @return {String}
	 */
	toString() {
		return this.id;
	}

	/**
	 * Invokes the transition function specified on <code>transition</code> attribute.
	 * @param {?Element=} from
	 * @param {?Element=} to
	 * @return {?CancellablePromise=} This can return a promise, which will pause the
	 *     navigation until it is resolved.
	 */
	transition(from, to) {
		var transitionFn = this.transitionFn || Surface.defaultTransition;
		return __WEBPACK_IMPORTED_MODULE_3_metal_promise___default.a.resolve(transitionFn.call(this, from, to));
	}

}

/**
   * Holds the default surface name. Elements on the page must contain a child
   * element containing the default content, this element must be as following:
   *
   * Example:
   * <code>
   *   <div id="mysurface">
   *     <div id="mysurface-default">Default surface content.</div>
   *   </div>
   * </code>
   *
   * The default content is relevant for the initial page content. When a
   * screen doesn't provide content for the surface the default content is
   * restored into the page.
   *
   * @type {!String}
   * @default default
   * @static
   */
Surface.DEFAULT = 'default';

/**
 * Holds the default transition for all surfaces. Each surface could have its
 * own transition.
 *
 * Example:
 *
 * <code>
 * surface.setTransitionFn(function(from, to) {
 *   if (from) {
 *     from.style.display = 'none';
 *     from.classList.remove('flipped');
 *   }
 *   if (to) {
 *     to.style.display = 'block';
 *     to.classList.add('flipped');
 *   }
 *   return null;
 * });
 * </code>
 *
 * @param {?Element=} from The visible surface element.
 * @param {?Element=} to The surface element to be flipped.
 * @static
 */
Surface.defaultTransition = function(from, to) {
	if (from) {
		from.style.display = 'none';
		from.classList.remove('flipped');
	}
	if (to) {
		to.style.display = 'block';
		to.classList.add('flipped');
	}
};

/* harmony default export */ __webpack_exports__["a"] = (Surface);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_metal__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_metal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_metal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_metal_dom__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_metal_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_metal_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_metal_promise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_metal_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_metal_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals_globals__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RequestScreen__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__surface_Surface__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_metal_useragent__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_metal_useragent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_metal_useragent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_metal_uri__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_metal_uri___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_metal_uri__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_utils__ = __webpack_require__(5);












class HtmlScreen extends __WEBPACK_IMPORTED_MODULE_4__RequestScreen__["a" /* default */] {

	/**
	 * Screen class that perform a request and extracts surface contents from
	 * the response content.
	 * @constructor
	 * @extends {RequestScreen}
	 */
	constructor() {
		super();

		/**
		 * Holds the title selector. Relevant to extract the <code><title></code>
		 * element from request fragments to use as the screen title.
		 * @type {!string}
		 * @default title
		 * @protected
		 */
		this.titleSelector = 'title';
	}

	/**
	 * @inheritDoc
	 */
	activate() {
		super.activate();
		this.releaseVirtualDocument();
		this.pendingStyles = null;
	}

	/**
	 * Allocates virtual document for content. After allocated virtual document
	 * can be accessed by <code>this.virtualDocument</code>.
	 * @param {!string} htmlString
	 */
	allocateVirtualDocumentForContent(htmlString) {
		if (!this.virtualDocument) {
			this.virtualDocument = __WEBPACK_IMPORTED_MODULE_3__globals_globals__["a" /* default */].document.createElement('html');
		}

		this.copyNodeAttributesFromContent_(htmlString, this.virtualDocument);

		this.virtualDocument.innerHTML = htmlString;
	}

	/**
	 * Customizes logic to append styles into document. Relevant to when
	 * tracking a style by id make sure to re-positions the new style in the
	 * same dom order.
	 * @param {Element} newStyle
	 */
	appendStyleIntoDocument_(newStyle) {
		var isTemporaryStyle = Object(__WEBPACK_IMPORTED_MODULE_1_metal_dom__["match"])(newStyle, HtmlScreen.selectors.stylesTemporary);
		if (isTemporaryStyle) {
			this.pendingStyles.push(newStyle);
		}
		if (newStyle.id) {
			var styleInDoc = __WEBPACK_IMPORTED_MODULE_3__globals_globals__["a" /* default */].document.getElementById(newStyle.id);
			if (styleInDoc) {
				styleInDoc.parentNode.insertBefore(newStyle, styleInDoc.nextSibling);
				return;
			}
		}
		__WEBPACK_IMPORTED_MODULE_3__globals_globals__["a" /* default */].document.head.appendChild(newStyle);
	}

	/**
	 * If body is used as surface forces the requested documents to have same id
	 * of the initial page.
	 */
	assertSameBodyIdInVirtualDocument() {
		var bodySurface = this.virtualDocument.querySelector('body');
		if (!__WEBPACK_IMPORTED_MODULE_3__globals_globals__["a" /* default */].document.body.id) {
			__WEBPACK_IMPORTED_MODULE_3__globals_globals__["a" /* default */].document.body.id = 'senna_surface_' + Object(__WEBPACK_IMPORTED_MODULE_0_metal__["getUid"])();
		}
		if (bodySurface) {
			bodySurface.id = __WEBPACK_IMPORTED_MODULE_3__globals_globals__["a" /* default */].document.body.id;
		}
	}

	/**
	 * Copies attributes from the <html> tag of content to the given node.
	 */
	copyNodeAttributesFromContent_(content, node) {
		content = content.replace(/[<]\s*html/ig, '<senna');
		content = content.replace(/\/html\s*\>/ig, '/senna>');
		node.innerHTML = content;
		var placeholder = node.querySelector('senna');
		if (placeholder) {
			__WEBPACK_IMPORTED_MODULE_8__utils_utils__["a" /* default */].clearNodeAttributes(node);
			__WEBPACK_IMPORTED_MODULE_8__utils_utils__["a" /* default */].copyNodeAttributes(placeholder, node);
		}
	}

	/**
	 * @Override
	 */
	disposeInternal() {
		this.disposePendingStyles();
		super.disposeInternal();
	}

	/**
	 * Disposes pending styles if screen get disposed prior to its loading.
	 */
	disposePendingStyles() {
		if (this.pendingStyles) {
			this.pendingStyles.forEach((style) => Object(__WEBPACK_IMPORTED_MODULE_1_metal_dom__["exitDocument"])(style));
		}
	}

	/**
	 * @Override
	 */
	evaluateScripts(surfaces) {
		var evaluateTrackedScripts = this.evaluateTrackedResources_(
			__WEBPACK_IMPORTED_MODULE_1_metal_dom__["globalEval"].runScriptsInElement, HtmlScreen.selectors.scripts,
			HtmlScreen.selectors.scriptsTemporary, HtmlScreen.selectors.scriptsPermanent);

		return evaluateTrackedScripts.then(() => super.evaluateScripts(surfaces));
	}

	/**
	 * @Override
	 */
	evaluateStyles(surfaces) {
		this.pendingStyles = [];
		var evaluateTrackedStyles = this.evaluateTrackedResources_(
			__WEBPACK_IMPORTED_MODULE_1_metal_dom__["globalEvalStyles"].runStylesInElement, HtmlScreen.selectors.styles,
			HtmlScreen.selectors.stylesTemporary, HtmlScreen.selectors.stylesPermanent,
			this.appendStyleIntoDocument_.bind(this));

		return evaluateTrackedStyles.then(() => super.evaluateStyles(surfaces));
	}

	/**
	 * Evaluates tracked resources inside incoming fragment and remove existing
	 * temporary resources.
	 * @param {?function()} appendFn Function to append the node into document.
	 * @param {!string} selector Selector used to find resources to track.
	 * @param {!string} selectorTemporary Selector used to find temporary
	 *     resources to track.
	 * @param {!string} selectorPermanent Selector used to find permanent
	 *     resources to track.
	 * @param {!function} opt_appendResourceFn Optional function used to
	 *     evaluate fragment containing resources.
	 * @return {CancellablePromise} Deferred that waits resources evaluation to
	 *     complete.
	 * @private
	 */
	evaluateTrackedResources_(evaluatorFn, selector, selectorTemporary, selectorPermanent, opt_appendResourceFn) {
		var tracked = this.virtualQuerySelectorAll_(selector);
		var temporariesInDoc = this.querySelectorAll_(selectorTemporary);
		var permanentsInDoc = this.querySelectorAll_(selectorPermanent);

		// Adds permanent resources in document to cache.
		permanentsInDoc.forEach((resource) => {
			var resourceKey = this.getResourceKey_(resource);
			if (resourceKey) {
				HtmlScreen.permanentResourcesInDoc[resourceKey] = true;
			}
		});

		var frag = Object(__WEBPACK_IMPORTED_MODULE_1_metal_dom__["buildFragment"])();
		tracked.forEach((resource) => {
			var resourceKey = this.getResourceKey_(resource);
			// Do not load permanent resources if already in document.
			if (!HtmlScreen.permanentResourcesInDoc[resourceKey]) {
				frag.appendChild(resource);
			}
			// If resource has key and is permanent add to cache.
			if (resourceKey && Object(__WEBPACK_IMPORTED_MODULE_1_metal_dom__["match"])(resource, selectorPermanent)) {
				HtmlScreen.permanentResourcesInDoc[resourceKey] = true;
			}
		});

		return new __WEBPACK_IMPORTED_MODULE_2_metal_promise___default.a((resolve) => {
			evaluatorFn(frag, () => {
				temporariesInDoc.forEach((resource) => Object(__WEBPACK_IMPORTED_MODULE_1_metal_dom__["exitDocument"])(resource));
				resolve();
			}, opt_appendResourceFn);
		});
	}

	/**
	 * @Override
	 */
	flip(surfaces) {
		return super.flip(surfaces).then(() => {
			__WEBPACK_IMPORTED_MODULE_8__utils_utils__["a" /* default */].clearNodeAttributes(document.documentElement);
			__WEBPACK_IMPORTED_MODULE_8__utils_utils__["a" /* default */].copyNodeAttributes(this.virtualDocument, document.documentElement);
		});
	}

	/**
	 * Extracts a key to identify the resource based on its attributes.
	 * @param {Element} resource
	 * @return {string} Extracted key based on resource attributes in order of
	 *     preference: id, href, src.
	 */
	getResourceKey_(resource) {
		return resource.id || resource.href || resource.src || '';
	}

	/**
	 * @inheritDoc
	 */
	getSurfaceContent(surfaceId) {
		var surface = this.virtualDocument.querySelector('#' + surfaceId);
		if (surface) {
			var defaultChild = surface.querySelector('#' + surfaceId + '-' + __WEBPACK_IMPORTED_MODULE_5__surface_Surface__["a" /* default */].DEFAULT);
			if (defaultChild) {
				return defaultChild.innerHTML;
			}
			return surface.innerHTML; // If default content not found, use surface content
		}
	}

	/**
	 * Gets the title selector.
	 * @return {!string}
	 */
	getTitleSelector() {
		return this.titleSelector;
	}

	/**
	 * @inheritDoc
	 */
	load(path) {
		return super.load(path)
			.then(content => {
				this.allocateVirtualDocumentForContent(content);
				this.resolveTitleFromVirtualDocument();
				this.assertSameBodyIdInVirtualDocument();
				if (__WEBPACK_IMPORTED_MODULE_6_metal_useragent___default.a.isIe) {
					this.makeTemporaryStylesHrefsUnique_();
				}
				return content;
			});
	}

	/**
	 * Queries temporary styles from virtual document, and makes them unique.
	 * This is necessary for caching and load event firing issues specific to
	 * IE11. https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7940171/
	 */
	makeTemporaryStylesHrefsUnique_() {
		var temporariesInDoc = this.virtualQuerySelectorAll_(HtmlScreen.selectors.stylesTemporary);
		temporariesInDoc.forEach((style) => this.replaceStyleAndMakeUnique_(style));
	}

	/**
	 * Creates a new element from given, copies attributes, mutates href to be
	 * unique to prevent caching and more than one load/error event from firing.
	 */
	replaceStyleAndMakeUnique_(style) {
		if (style.href) {
			var newStyle = __WEBPACK_IMPORTED_MODULE_3__globals_globals__["a" /* default */].document.createElement(style.tagName);
			style.href = new __WEBPACK_IMPORTED_MODULE_7_metal_uri___default.a(style.href).makeUnique().toString();
			__WEBPACK_IMPORTED_MODULE_8__utils_utils__["a" /* default */].copyNodeAttributes(style, newStyle);
			style.parentNode.replaceChild(newStyle, style);
			style.disabled = true;
		}
	}

	/**
	 * Queries elements from virtual document and returns an array of elements.
	 * @param {!string} selector
	 * @return {array.<Element>}
	 */
	virtualQuerySelectorAll_(selector) {
		return Array.prototype.slice.call(this.virtualDocument.querySelectorAll(selector));
	}

	/**
	 * Queries elements from document and returns an array of elements.
	 * @param {!string} selector
	 * @return {array.<Element>}
	 */
	querySelectorAll_(selector) {
		return Array.prototype.slice.call(__WEBPACK_IMPORTED_MODULE_3__globals_globals__["a" /* default */].document.querySelectorAll(selector));
	}

	/**
	 * Releases virtual document allocated for content.
	 */
	releaseVirtualDocument() {
		this.virtualDocument = null;
	}

	/**
	 * Resolves title from allocated virtual document.
	 */
	resolveTitleFromVirtualDocument() {
		var title = this.virtualDocument.querySelector(this.titleSelector);
		if (title) {
			this.setTitle(title.textContent.trim());
		}
	}

	/**
	 * Sets the title selector.
	 * @param {!string} titleSelector
	 */
	setTitleSelector(titleSelector) {
		this.titleSelector = titleSelector;
	}

}

/**
 * Helper selectors for tracking resources.
 * @type {object}
 * @protected
 * @static
 */
HtmlScreen.selectors = {
	scripts: 'script[data-senna-track]',
	scriptsPermanent: 'script[data-senna-track="permanent"]',
	scriptsTemporary: 'script[data-senna-track="temporary"]',
	styles: 'style[data-senna-track],link[data-senna-track]',
	stylesPermanent: 'style[data-senna-track="permanent"],link[data-senna-track="permanent"]',
	stylesTemporary: 'style[data-senna-track="temporary"],link[data-senna-track="temporary"]'
};

/**
 * Caches permanent resource keys.
 * @type {object}
 * @protected
 * @static
 */
HtmlScreen.permanentResourcesInDoc = {};

/* harmony default export */ __webpack_exports__["a"] = (HtmlScreen);


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_metal__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_metal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_metal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_metal_ajax__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_metal_ajax___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_metal_ajax__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_metal_structs__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_metal_structs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_metal_structs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_metal_promise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_metal_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_metal_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__errors_errors__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_utils__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__globals_globals__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Screen__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_metal_uri__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_metal_uri___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_metal_uri__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_metal_useragent__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_metal_useragent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_metal_useragent__);













class RequestScreen extends __WEBPACK_IMPORTED_MODULE_7__Screen__["a" /* default */] {

	/**
	 * Request screen abstract class to perform io operations on descendant
	 * screens.
	 * @constructor
	 * @extends {Screen}
	 */
	constructor() {
		super();

		/**
		 * @inheritDoc
		 * @default true
		 */
		this.cacheable = true;

		/**
		 * Holds default http headers to set on request.
		 * @type {?Object=}
		 * @default {
		 *   'X-PJAX': 'true',
		 *   'X-Requested-With': 'XMLHttpRequest'
		 * }
		 * @protected
		 */
		this.httpHeaders = {
			'X-PJAX': 'true',
			'X-Requested-With': 'XMLHttpRequest'
		};

		/**
		 * Holds default http method to perform the request.
		 * @type {!string}
		 * @default RequestScreen.GET
		 * @protected
		 */
		this.httpMethod = RequestScreen.GET;

		/**
		 * Holds the XHR object responsible for the request.
		 * @type {XMLHttpRequest}
		 * @default null
		 * @protected
		 */
		this.request = null;

		/**
		 * Holds the request timeout in milliseconds.
		 * @type {!number}
		 * @default 30000
		 * @protected
		 */
		this.timeout = 30000;
	}

	/**
	 * Asserts that response status code is valid.
	 * @param {number} status
	 * @protected
	 */
	assertValidResponseStatusCode(status) {
		if (!this.isValidResponseStatusCode(status)) {
			var error = new Error(__WEBPACK_IMPORTED_MODULE_4__errors_errors__["a" /* default */].INVALID_STATUS);
			error.invalidStatus = true;
			error.statusCode = status;
			throw error;
		}
	}

	/**
	 * @inheritDoc
	 */
	beforeUpdateHistoryPath(path) {
		var redirectPath = this.getRequestPath();
		if (redirectPath && redirectPath !== path) {
			return redirectPath;
		}
		return path;
	}

	/**
	 * @inheritDoc
	 */
	beforeUpdateHistoryState(state) {
		// If state is ours and navigate to post-without-redirect-get set
		// history state to null, that way Senna will reload the page on
		// popstate since it cannot predict post data.
		if (state.senna && state.form && state.redirectPath === state.path) {
			return null;
		}
		return state;
	}

	/**
	 * Formats load path before invoking ajax call.
	 * @param {string} path
	 * @return {string} Formatted path;
	 * @protected
	 */
	formatLoadPath(path) {
		var uri = new __WEBPACK_IMPORTED_MODULE_8_metal_uri___default.a(path);

		uri.setHostname(__WEBPACK_IMPORTED_MODULE_6__globals_globals__["a" /* default */].window.location.hostname);
		uri.setProtocol(__WEBPACK_IMPORTED_MODULE_6__globals_globals__["a" /* default */].window.location.protocol);

		if (__WEBPACK_IMPORTED_MODULE_6__globals_globals__["a" /* default */].window.location.port) {
			uri.setPort(__WEBPACK_IMPORTED_MODULE_6__globals_globals__["a" /* default */].window.location.port);
		}

		if (__WEBPACK_IMPORTED_MODULE_9_metal_useragent___default.a.isIeOrEdge && this.httpMethod === RequestScreen.GET) {
			return uri.makeUnique().toString();
		}

		return uri.toString();
	}

	/**
	 * Gets the http headers.
	 * @return {?Object=}
	 */
	getHttpHeaders() {
		return this.httpHeaders;
	}

	/**
	 * Gets the http method.
	 * @return {!string}
	 */
	getHttpMethod() {
		return this.httpMethod;
	}

	/**
	 * Gets request path.
	 * @return {string=}
	 */
	getRequestPath() {
		var request = this.getRequest();
		if (request) {
			var requestPath = request.requestPath;
			var responseUrl = this.maybeExtractResponseUrlFromRequest(request);
			if (responseUrl) {
				requestPath = responseUrl;
			}
			if (__WEBPACK_IMPORTED_MODULE_9_metal_useragent___default.a.isIeOrEdge && this.httpMethod === RequestScreen.GET) {
				requestPath = new __WEBPACK_IMPORTED_MODULE_8_metal_uri___default.a(requestPath).removeUnique().toString();
			}
			return __WEBPACK_IMPORTED_MODULE_5__utils_utils__["a" /* default */].getUrlPath(requestPath);
		}
		return null;
	}

	/**
	 * Gets the request object.
	 * @return {?Object}
	 */
	getRequest() {
		return this.request;
	}

	/**
	 * Gets the request timeout.
	 * @return {!number}
	 */
	getTimeout() {
		return this.timeout;
	}

	/**
	 * Checks if response succeeded. Any status code 2xx or 3xx is considered
	 * valid.
	 * @param {number} statusCode
	 */
	isValidResponseStatusCode(statusCode) {
		return statusCode >= 200 && statusCode <= 399;
	}

	/**
	 * @inheritDoc
	 */
	load(path) {
		const cache = this.getCache();
		if (Object(__WEBPACK_IMPORTED_MODULE_0_metal__["isDefAndNotNull"])(cache)) {
			return __WEBPACK_IMPORTED_MODULE_3_metal_promise___default.a.resolve(cache);
		}
		let body = null;
		let httpMethod = this.httpMethod;
		const headers = new __WEBPACK_IMPORTED_MODULE_2_metal_structs__["MultiMap"]();
		Object.keys(this.httpHeaders).forEach(header => headers.add(header, this.httpHeaders[header]));
		if (__WEBPACK_IMPORTED_MODULE_6__globals_globals__["a" /* default */].capturedFormElement) {
			body = new FormData(__WEBPACK_IMPORTED_MODULE_6__globals_globals__["a" /* default */].capturedFormElement);
			this.maybeAppendSubmitButtonValue_(body);
			httpMethod = RequestScreen.POST;
			if (__WEBPACK_IMPORTED_MODULE_9_metal_useragent___default.a.isIeOrEdge) {
				headers.add('If-None-Match', '"0"');
			}
		}
		const requestPath = this.formatLoadPath(path);
		return __WEBPACK_IMPORTED_MODULE_1_metal_ajax___default.a
			.request(requestPath, httpMethod, body, headers, null, this.timeout)
			.then(xhr => {
				this.setRequest(xhr);
				this.assertValidResponseStatusCode(xhr.status);
				if (httpMethod === RequestScreen.GET && this.isCacheable()) {
					this.addCache(xhr.responseText);
				}
				xhr.requestPath = requestPath;
				return xhr.responseText;
			})
			.catch((reason) => {
				switch (reason.message) {
					case __WEBPACK_IMPORTED_MODULE_4__errors_errors__["a" /* default */].REQUEST_TIMEOUT:
						reason.timeout = true;
						break;
					case __WEBPACK_IMPORTED_MODULE_4__errors_errors__["a" /* default */].REQUEST_ERROR:
						reason.requestError = true;
						break;
					case __WEBPACK_IMPORTED_MODULE_4__errors_errors__["a" /* default */].REQUEST_PREMATURE_TERMINATION:
						reason.requestError = true;
						reason.requestPrematureTermination = true;
						break;
				}
				throw reason;
			});
	}

	/**
	 * Adds aditional data to the body of the request in case a submit button
	 * is captured during form submission.
	 * @param {!FormData} body The FormData containing the request body.
	 * @protected
	 */
	maybeAppendSubmitButtonValue_(body) {
		const button = __WEBPACK_IMPORTED_MODULE_6__globals_globals__["a" /* default */].capturedFormButtonElement;
		if (button && button.name) {
			body.append(button.name, button.value);
		}
	}

	/**
	 * The following method tries to extract the response url value by checking
	 * the custom response header 'X-Request-URL' if proper value is not present
	 * in XMLHttpRequest. The value of responseURL will be the final URL
	 * obtained after any redirects. Internet Explorer, Edge and Safari <= 7
	 * does not yet support the feature. For more information see:
	 * https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseURL
	 * https://xhr.spec.whatwg.org/#the-responseurl-attribute
	 * @param {XMLHttpRequest} request
	 * @return {?string} Response url best match.
	 */
	maybeExtractResponseUrlFromRequest(request) {
		var responseUrl = request.responseURL;
		if (responseUrl) {
			return responseUrl;
		}
		return request.getResponseHeader(RequestScreen.X_REQUEST_URL_HEADER);
	}

	/**
	 * Sets the http headers.
	 * @param {?Object=} httpHeaders
	 */
	setHttpHeaders(httpHeaders) {
		this.httpHeaders = httpHeaders;
	}

	/**
	 * Sets the http method.
	 * @param {!string} httpMethod
	 */
	setHttpMethod(httpMethod) {
		this.httpMethod = httpMethod.toLowerCase();
	}

	/**
	 * Sets the request object.
	 * @param {?Object} request
	 */
	setRequest(request) {
		this.request = request;
	}

	/**
	 * Sets the request timeout in milliseconds.
	 * @param {!number} timeout
	 */
	setTimeout(timeout) {
		this.timeout = timeout;
	}

}

/**
 * Holds value for method get.
 * @type {string}
 * @default 'get'
 * @static
 */
RequestScreen.GET = 'get';

/**
 * Holds value for method post.
 * @type {string}
 * @default 'post'
 * @static
 */
RequestScreen.POST = 'post';

/**
 * Fallback http header to retrieve response request url.
 * @type {string}
 * @default 'X-Request-URL'
 * @static
 */
RequestScreen.X_REQUEST_URL_HEADER = 'X-Request-URL';

/* harmony default export */ __webpack_exports__["a"] = (RequestScreen);


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Metal.js browser user agent detection. It's extremely recommended the usage
 * of feature checking over browser user agent sniffing. Unfortunately, in some
 * situations feature checking can be slow or even impossible, therefore use
 * this utility with caution.
 * @see <a href="http://www.useragentstring.com/">User agent strings</a>.
 */

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UA = function () {
	function UA() {
		_classCallCheck(this, UA);
	}

	_createClass(UA, null, [{
		key: 'getNativeUserAgent',

		/**
   * Gets the native userAgent string from navigator if it exists. If
   * navigator or navigator.userAgent string is missing, returns an empty
   * string.
   * @return {string}
   * @private
   * @static
   */
		value: function getNativeUserAgent() {
			var navigator = UA.globals.window.navigator;
			if (navigator) {
				var userAgent = navigator.userAgent;
				if (userAgent) {
					return userAgent;
				}
			}
			return '';
		}

		/**
   * Gets the native platform string from navigator if it exists. If
   * navigator or navigator.platform string is missing, returns an empty
   * string.
   * @return {string}
   * @private
   * @static
   */

	}, {
		key: 'getNativePlatform',
		value: function getNativePlatform() {
			var navigator = UA.globals.window.navigator;
			if (navigator) {
				var platform = navigator.platform;
				if (platform) {
					return platform;
				}
			}
			return '';
		}

		/**
   * Whether the platform contains the given string, ignoring case.
   * @param {string} str
   * @return {boolean}
   * @private
   * @static
  */

	}, {
		key: 'matchPlatform',
		value: function matchPlatform(str) {
			return UA.platform.indexOf(str) !== -1;
		}

		/**
   * Whether the user agent contains the given string, ignoring case.
   * @param {string} str
   * @return {boolean}
   * @private
   * @static
  */

	}, {
		key: 'matchUserAgent',
		value: function matchUserAgent(str) {
			return UA.userAgent.indexOf(str) !== -1;
		}

		/**
   * Tests the user agent.
   * @param {string} userAgent The user agent string.
   * @static
   */

	}, {
		key: 'testUserAgent',
		value: function testUserAgent() {
			var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
			var platform = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

			/**
    * Holds the user agent value extracted from browser native user agent.
    * @type {string}
    * @static
    */
			UA.userAgent = userAgent;

			/**
    * Holds the platform value extracted from browser native platform.
    * @type {string}
    * @static
    */
			UA.platform = platform;

			/**
    * Whether the user's OS is Mac.
    * @type {boolean}
    * @static
    */
			UA.isMac = UA.matchPlatform('Mac');

			/**
    * Whether the user's OS is Win.
    * @type {boolean}
    * @static
    */
			UA.isWin = UA.matchPlatform('Win');

			/**
    * Whether the user's browser is Opera.
    * @type {boolean}
    * @static
    */
			UA.isOpera = UA.matchUserAgent('Opera') || UA.matchUserAgent('OPR');

			/**
    * Whether the user's browser is IE.
    * @type {boolean}
    * @static
    */
			UA.isIe = UA.matchUserAgent('Trident') || UA.matchUserAgent('MSIE');

			/**
    * Whether the user's browser is Edge.
    * @type {boolean}
    * @static
    */
			UA.isEdge = UA.matchUserAgent('Edge');

			/**
    * Whether the user's browser is IE or Edge.
    * @type {boolean}
    * @static
    */
			UA.isIeOrEdge = UA.isIe || UA.isEdge;

			/**
    * Whether the user's browser is Chrome.
    * @type {boolean}
    * @static
    */
			UA.isChrome = (UA.matchUserAgent('Chrome') || UA.matchUserAgent('CriOS')) && !UA.isOpera && !UA.isEdge;

			/**
    * Whether the user's browser is Safari.
    * @type {boolean}
    * @static
    */
			UA.isSafari = UA.matchUserAgent('Safari') && !(UA.isChrome || UA.isOpera || UA.isEdge);

			/**
    * Whether the user's browser is Firefox.
    * @type {boolean}
    * @static
    */
			UA.isFirefox = UA.matchUserAgent('Firefox');
		}
	}]);

	return UA;
}();

/**
 * Exposes global references.
 * @type {object}
 * @static
 */


UA.globals = {
	window: window
};

UA.testUserAgent(UA.getNativeUserAgent(), UA.getNativePlatform());

exports.default = UA;

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_utils__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_dataAttributeHandler__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_App__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__screen_HtmlScreen__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__screen_RequestScreen__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__route_Route__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__screen_Screen__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "dataAttributeHandler", function() { return __WEBPACK_IMPORTED_MODULE_1__app_dataAttributeHandler__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return __WEBPACK_IMPORTED_MODULE_2__app_App__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlScreen", function() { return __WEBPACK_IMPORTED_MODULE_3__screen_HtmlScreen__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return __WEBPACK_IMPORTED_MODULE_5__route_Route__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RequestScreen", function() { return __WEBPACK_IMPORTED_MODULE_4__screen_RequestScreen__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Screen", function() { return __WEBPACK_IMPORTED_MODULE_6__screen_Screen__["a"]; });









// import metal from '../node_modules/metal';
// import metalAjax from '../node_modules/metal-ajax';
// import metalDebounce from '../node_modules/metal-debounce';
// import metalDom from '../node_modules/metal-dom';
// import metalEvents from '../node_modules/metal-events';
// import metalStructs from '../node_modules/metal-structs';
// import metalPathParser from '../node_modules/metal-path-parser';
// import metalPromise from '../node_modules/metal-promise';
// import metalUri from '../node_modules/metal-uri';
// import metalUserAgent from '../node_modules/metal-useragent';

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_2__app_App__["a" /* default */]);


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metal = __webpack_require__(0);

var _parse = __webpack_require__(22);

var _parse2 = _interopRequireDefault(_parse);

var _metalStructs = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var parseFn_ = _parse2.default;

var Uri = function () {

	/**
  * This class contains setters and getters for the parts of the URI.
  * The following figure displays an example URIs and their component parts.
  *
  *                                  path
  *	                             ┌───┴────┐
  *	  abc://example.com:123/path/data?key=value#fragid1
  *	  └┬┘   └────┬────┘ └┬┘           └───┬───┘ └──┬──┘
  * protocol  hostname  port            search    hash
  *          └──────┬───────┘
  *                host
  *
  * @param {*=} opt_uri Optional string URI to parse
  * @constructor
  */
	function Uri() {
		var opt_uri = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

		_classCallCheck(this, Uri);

		this.url = Uri.parse(this.maybeAddProtocolAndHostname_(opt_uri));
	}

	/**
  * Adds parameters to uri from a <code>MultiMap</code> as source.
  * @param {MultiMap} multimap The <code>MultiMap</code> containing the
  *   parameters.
  * @protected
  * @chainable
  */


	_createClass(Uri, [{
		key: 'addParametersFromMultiMap',
		value: function addParametersFromMultiMap(multimap) {
			var _this = this;

			multimap.names().forEach(function (name) {
				multimap.getAll(name).forEach(function (value) {
					_this.addParameterValue(name, value);
				});
			});
			return this;
		}

		/**
   * Adds the value of the named query parameters.
   * @param {string} key The parameter to set.
   * @param {*} value The new value. Will be explicitly casted to String.
   * @chainable
   */

	}, {
		key: 'addParameterValue',
		value: function addParameterValue(name, value) {
			this.ensureQueryInitialized_();
			if ((0, _metal.isDef)(value)) {
				value = String(value);
			}
			this.query.add(name, value);
			return this;
		}

		/**
   * Adds the values of the named query parameter.
   * @param {string} key The parameter to set.
   * @param {*} value The new value.
   * @chainable
   */

	}, {
		key: 'addParameterValues',
		value: function addParameterValues(name, values) {
			var _this2 = this;

			values.forEach(function (value) {
				return _this2.addParameterValue(name, value);
			});
			return this;
		}

		/**
   * Ensures query internal map is initialized and synced with initial value
   * extracted from URI search part.
   * @protected
   */

	}, {
		key: 'ensureQueryInitialized_',
		value: function ensureQueryInitialized_() {
			var _this3 = this;

			if (this.query) {
				return;
			}
			this.query = new _metalStructs.MultiMap();
			var search = this.url.search;
			if (search) {
				search.substring(1).split('&').forEach(function (param) {
					var _param$split = param.split('='),
					    _param$split2 = _slicedToArray(_param$split, 2),
					    key = _param$split2[0],
					    value = _param$split2[1];

					if ((0, _metal.isDef)(value)) {
						value = Uri.urlDecode(value);
					}
					_this3.addParameterValue(key, value);
				});
			}
		}

		/**
   * Gets the hash part of uri.
   * @return {string}
   */

	}, {
		key: 'getHash',
		value: function getHash() {
			return this.url.hash || '';
		}

		/**
   * Gets the host part of uri. E.g. <code>[hostname]:[port]</code>.
   * @return {string}
   */

	}, {
		key: 'getHost',
		value: function getHost() {
			var host = this.getHostname();
			if (host) {
				var port = this.getPort();
				if (port && port !== '80') {
					host += ':' + port;
				}
			}
			return host;
		}

		/**
   * Gets the hostname part of uri without protocol and port.
   * @return {string}
   */

	}, {
		key: 'getHostname',
		value: function getHostname() {
			var hostname = this.url.hostname;
			if (hostname === Uri.HOSTNAME_PLACEHOLDER) {
				return '';
			}
			return hostname;
		}

		/**
   * Gets the origin part of uri. E.g. <code>http://[hostname]:[port]</code>.
   * @return {string}
   */

	}, {
		key: 'getOrigin',
		value: function getOrigin() {
			var host = this.getHost();
			if (host) {
				return this.getProtocol() + '//' + host;
			}
			return '';
		}

		/**
   * Returns the first value for a given parameter or undefined if the given
   * parameter name does not appear in the query string.
   * @param {string} paramName Unescaped parameter name.
   * @return {string|undefined} The first value for a given parameter or
   *   undefined if the given parameter name does not appear in the query
   *   string.
   */

	}, {
		key: 'getParameterValue',
		value: function getParameterValue(name) {
			this.ensureQueryInitialized_();
			return this.query.get(name);
		}

		/**
   * Returns the value<b>s</b> for a given parameter as a list of decoded
   * query parameter values.
   * @param {string} name The parameter to get values for.
   * @return {!Array<?>} The values for a given parameter as a list of decoded
   *   query parameter values.
   */

	}, {
		key: 'getParameterValues',
		value: function getParameterValues(name) {
			this.ensureQueryInitialized_();
			return this.query.getAll(name);
		}

		/**
   * Returns the name<b>s</b> of the parameters.
   * @return {!Array<string>} The names for the parameters as a list of
   *   strings.
   */

	}, {
		key: 'getParameterNames',
		value: function getParameterNames() {
			this.ensureQueryInitialized_();
			return this.query.names();
		}

		/**
   * Gets the function currently being used to parse URIs.
   * @return {!function()}
   */

	}, {
		key: 'getPathname',


		/**
   * Gets the pathname part of uri.
   * @return {string}
   */
		value: function getPathname() {
			return this.url.pathname;
		}

		/**
   * Gets the port number part of uri as string.
   * @return {string}
   */

	}, {
		key: 'getPort',
		value: function getPort() {
			return this.url.port;
		}

		/**
   * Gets the protocol part of uri. E.g. <code>http:</code>.
   * @return {string}
   */

	}, {
		key: 'getProtocol',
		value: function getProtocol() {
			return this.url.protocol;
		}

		/**
   * Gets the search part of uri. Search value is retrieved from query
   * parameters.
   * @return {string}
   */

	}, {
		key: 'getSearch',
		value: function getSearch() {
			var _this4 = this;

			var search = '';
			var querystring = '';
			this.getParameterNames().forEach(function (name) {
				_this4.getParameterValues(name).forEach(function (value) {
					querystring += name;
					if ((0, _metal.isDef)(value)) {
						querystring += '=' + encodeURIComponent(value);
					}
					querystring += '&';
				});
			});
			querystring = querystring.slice(0, -1);
			if (querystring) {
				search += '?' + querystring;
			}
			return search;
		}

		/**
   * Checks if uri contains the parameter.
   * @param {string} name
   * @return {boolean}
   */

	}, {
		key: 'hasParameter',
		value: function hasParameter(name) {
			this.ensureQueryInitialized_();
			return this.query.contains(name);
		}

		/**
   * Makes this URL unique by adding a random param to it. Useful for avoiding
   * cache.
   */

	}, {
		key: 'makeUnique',
		value: function makeUnique() {
			this.setParameterValue(Uri.RANDOM_PARAM, _metal.string.getRandomString());
			return this;
		}

		/**
   * Maybe adds protocol and a hostname placeholder on a parial URI if needed.
   * Relevent for compatibility with <code>URL</code> native object.
   * @param {string=} opt_uri
   * @return {string} URI with protocol and hostname placeholder.
   */

	}, {
		key: 'maybeAddProtocolAndHostname_',
		value: function maybeAddProtocolAndHostname_(opt_uri) {
			var url = opt_uri;
			if (opt_uri.indexOf('://') === -1 && opt_uri.indexOf('javascript:') !== 0) {
				// jshint ignore:line

				url = Uri.DEFAULT_PROTOCOL;
				if (opt_uri[0] !== '/' || opt_uri[1] !== '/') {
					url += '//';
				}

				switch (opt_uri.charAt(0)) {
					case '.':
					case '?':
					case '#':
						url += Uri.HOSTNAME_PLACEHOLDER;
						url += '/';
						url += opt_uri;
						break;
					case '':
					case '/':
						if (opt_uri[1] !== '/') {
							url += Uri.HOSTNAME_PLACEHOLDER;
						}
						url += opt_uri;
						break;
					default:
						url += opt_uri;
				}
			}
			return url;
		}

		/**
   * Parses the given uri string into an object.
   * @param {*=} opt_uri Optional string URI to parse
   */

	}, {
		key: 'removeParameter',


		/**
   * Removes the named query parameter.
   * @param {string} name The parameter to remove.
   * @chainable
   */
		value: function removeParameter(name) {
			this.ensureQueryInitialized_();
			this.query.remove(name);
			return this;
		}

		/**
   * Removes uniqueness parameter of the uri.
   * @chainable
   */

	}, {
		key: 'removeUnique',
		value: function removeUnique() {
			this.removeParameter(Uri.RANDOM_PARAM);
			return this;
		}

		/**
   * Sets the hash.
   * @param {string} hash
   * @chainable
   */

	}, {
		key: 'setHash',
		value: function setHash(hash) {
			this.url.hash = hash;
			return this;
		}

		/**
   * Sets the hostname.
   * @param {string} hostname
   * @chainable
   */

	}, {
		key: 'setHostname',
		value: function setHostname(hostname) {
			this.url.hostname = hostname;
			return this;
		}

		/**
   * Sets the value of the named query parameters, clearing previous values
   * for that key.
   * @param {string} key The parameter to set.
   * @param {*} value The new value.
   * @chainable
   */

	}, {
		key: 'setParameterValue',
		value: function setParameterValue(name, value) {
			this.removeParameter(name);
			this.addParameterValue(name, value);
			return this;
		}

		/**
   * Sets the values of the named query parameters, clearing previous values
   * for that key.
   * @param {string} key The parameter to set.
   * @param {*} value The new value.
   * @chainable
   */

	}, {
		key: 'setParameterValues',
		value: function setParameterValues(name, values) {
			var _this5 = this;

			this.removeParameter(name);
			values.forEach(function (value) {
				return _this5.addParameterValue(name, value);
			});
			return this;
		}

		/**
   * Sets the pathname.
   * @param {string} pathname
   * @chainable
   */

	}, {
		key: 'setPathname',
		value: function setPathname(pathname) {
			this.url.pathname = pathname;
			return this;
		}

		/**
   * Sets the port number.
   * @param {*} port Port number.
   * @chainable
   */

	}, {
		key: 'setPort',
		value: function setPort(port) {
			this.url.port = port;
			return this;
		}

		/**
   * Sets the function that will be used for parsing the original string uri
   * into an object.
   * @param {!function()} parseFn
   */

	}, {
		key: 'setProtocol',


		/**
   * Sets the protocol. If missing <code>http:</code> is used as default.
   * @param {string} protocol
   * @chainable
   */
		value: function setProtocol(protocol) {
			this.url.protocol = protocol;
			if (this.url.protocol[this.url.protocol.length - 1] !== ':') {
				this.url.protocol += ':';
			}
			return this;
		}

		/**
   * @return {string} The string form of the url.
   * @override
   */

	}, {
		key: 'toString',
		value: function toString() {
			var href = '';
			var host = this.getHost();
			if (host) {
				href += this.getProtocol() + '//';
			}
			href += host + this.getPathname() + this.getSearch() + this.getHash();
			return href;
		}

		/**
   * Joins the given paths.
   * @param {string} basePath
   * @param {...string} ...paths Any number of paths to be joined with the base url.
   * @static
   */

	}], [{
		key: 'getParseFn',
		value: function getParseFn() {
			return parseFn_;
		}
	}, {
		key: 'parse',
		value: function parse(opt_uri) {
			return parseFn_(opt_uri);
		}
	}, {
		key: 'setParseFn',
		value: function setParseFn(parseFn) {
			parseFn_ = parseFn;
		}
	}, {
		key: 'joinPaths',
		value: function joinPaths(basePath) {
			for (var _len = arguments.length, paths = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
				paths[_key - 1] = arguments[_key];
			}

			if (basePath.charAt(basePath.length - 1) === '/') {
				basePath = basePath.substring(0, basePath.length - 1);
			}
			paths = paths.map(function (path) {
				return path.charAt(0) === '/' ? path.substring(1) : path;
			});
			return [basePath].concat(paths).join('/').replace(/\/$/, '');
		}

		/**
   * URL-decodes the string. We need to specially handle '+'s because
   * the javascript library doesn't convert them to spaces.
   * @param {string} str The string to url decode.
   * @return {string} The decoded {@code str}.
   */

	}, {
		key: 'urlDecode',
		value: function urlDecode(str) {
			return decodeURIComponent(str.replace(/\+/g, ' '));
		}
	}]);

	return Uri;
}();

/**
 * Default protocol value.
 * @type {string}
 * @default http:
 * @static
 */


var isSecure = function isSecure() {
	return typeof window !== 'undefined' && window.location && window.location.protocol && window.location.protocol.indexOf('https') === 0;
};

Uri.DEFAULT_PROTOCOL = isSecure() ? 'https:' : 'http:';

/**
 * Hostname placeholder. Relevant to internal usage only.
 * @type {string}
 * @static
 */
Uri.HOSTNAME_PLACEHOLDER = 'hostname' + Date.now();

/**
 * Name used by the param generated by `makeUnique`.
 * @type {string}
 * @static
 */
Uri.RANDOM_PARAM = 'zx';

exports.default = Uri;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _metal = __webpack_require__(0);

var _parseFromAnchor = __webpack_require__(23);

var _parseFromAnchor2 = _interopRequireDefault(_parseFromAnchor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Parses the given uri string into an object. The URL function will be used
 * when present, otherwise we'll fall back to the anchor node element.
 * @param {*=} opt_uri Optional string URI to parse
 */
function parse(opt_uri) {
	if ((0, _metal.isFunction)(URL) && URL.length) {
		var url = new URL(opt_uri);

		// Safari Browsers will cap port to the max 16-bit unsigned integer (65535) instead
		// of throwing a TypeError as per spec. It will still keep the port number in the
		// href attribute, so we can use this mismatch to raise the expected exception.
		if (url.port && url.href.indexOf(url.port) === -1) {
			throw new TypeError(opt_uri + ' is not a valid URL');
		}

		return url;
	} else {
		return (0, _parseFromAnchor2.default)(opt_uri);
	}
}

exports.default = parse;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Parses the given uri string into an object.
 * @param {*=} opt_uri Optional string URI to parse
 */

Object.defineProperty(exports, "__esModule", {
	value: true
});
function parseFromAnchor(opt_uri) {
	var link = document.createElement('a');
	link.href = opt_uri;

	if (link.protocol === ':' || !/:/.test(link.href)) {
		throw new TypeError(opt_uri + ' is not a valid URL');
	}

	return {
		hash: link.hash,
		hostname: link.hostname,
		password: link.password,
		pathname: link.pathname[0] === '/' ? link.pathname : '/' + link.pathname,
		port: link.port,
		protocol: link.protocol,
		search: link.search,
		username: link.username
	};
}

exports.default = parseFromAnchor;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _metal = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A cached reference to the create function.
 */
var create = Object.create;

/**
 * Case insensitive string Multimap implementation. Allows multiple values for
 * the same key name.
 * @extends {Disposable}
 */

var MultiMap = function (_Disposable) {
	_inherits(MultiMap, _Disposable);

	function MultiMap() {
		_classCallCheck(this, MultiMap);

		var _this = _possibleConstructorReturn(this, _Disposable.call(this));

		_this.keys = create(null);
		_this.values = create(null);
		return _this;
	}

	/**
  * Adds value to a key name.
  * @param {string} name
  * @param {*} value
  * @chainable
  */


	MultiMap.prototype.add = function add(name, value) {
		this.keys[name.toLowerCase()] = name;
		this.values[name.toLowerCase()] = this.values[name.toLowerCase()] || [];
		this.values[name.toLowerCase()].push(value);
		return this;
	};

	/**
  * Clears map names and values.
  * @chainable
  */


	MultiMap.prototype.clear = function clear() {
		this.keys = create(null);
		this.values = create(null);
		return this;
	};

	/**
  * Checks if map contains a value to the key name.
  * @param {string} name
  * @return {boolean}
  * @chainable
  */


	MultiMap.prototype.contains = function contains(name) {
		return name.toLowerCase() in this.values;
	};

	/**
  * @inheritDoc
  */


	MultiMap.prototype.disposeInternal = function disposeInternal() {
		this.values = null;
	};

	/**
  * Creates a `MultiMap` instance from the given object.
  * @param {!Object} obj
  * @return {!MultiMap}
  */


	MultiMap.fromObject = function fromObject(obj) {
		var map = new MultiMap();
		var keys = Object.keys(obj);
		for (var i = 0; i < keys.length; i++) {
			map.set(keys[i], obj[keys[i]]);
		}
		return map;
	};

	/**
  * Gets the first added value from a key name.
  * @param {string} name
  * @return {*}
  * @chainable
  */


	MultiMap.prototype.get = function get(name) {
		var values = this.values[name.toLowerCase()];
		if (values) {
			return values[0];
		}
	};

	/**
  * Gets all values from a key name.
  * @param {string} name
  * @return {Array.<*>}
  */


	MultiMap.prototype.getAll = function getAll(name) {
		return this.values[name.toLowerCase()];
	};

	/**
  * Returns true if the map is empty, false otherwise.
  * @return {boolean}
  */


	MultiMap.prototype.isEmpty = function isEmpty() {
		return this.size() === 0;
	};

	/**
  * Gets array of key names.
  * @return {Array.<string>}
  */


	MultiMap.prototype.names = function names() {
		var _this2 = this;

		return Object.keys(this.values).map(function (key) {
			return _this2.keys[key];
		});
	};

	/**
  * Removes all values from a key name.
  * @param {string} name
  * @chainable
  */


	MultiMap.prototype.remove = function remove(name) {
		delete this.keys[name.toLowerCase()];
		delete this.values[name.toLowerCase()];
		return this;
	};

	/**
  * Sets the value of a key name. Relevant to replace the current values with
  * a new one.
  * @param {string} name
  * @param {*} value
  * @chainable
  */


	MultiMap.prototype.set = function set(name, value) {
		this.keys[name.toLowerCase()] = name;
		this.values[name.toLowerCase()] = [value];
		return this;
	};

	/**
  * Gets the size of the map key names.
  * @return {number}
  */


	MultiMap.prototype.size = function size() {
		return this.names().length;
	};

	/**
  * Returns the parsed values as a string.
  * @return {string}
  */


	MultiMap.prototype.toString = function toString() {
		return JSON.stringify(this.values);
	};

	return MultiMap;
}(_metal.Disposable);

exports.default = MultiMap;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _metal = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Generic tree node data structure with arbitrary number of child nodes.
 * @param {V} value Value.
 * @constructor
 */
var TreeNode = function () {
	function TreeNode(value) {
		_classCallCheck(this, TreeNode);

		/**
   * The value.
   * @private {V}
   */
		this.value_ = value;

		/**
   * Reference to the parent node or null if it has no parent.
   * @private {TreeNode}
   */
		this.parent_ = null;

		/**
   * Child nodes or null in case of leaf node.
   * @private {Array<!TreeNode>}
   */
		this.children_ = null;
	}

	/**
  * Appends a child node to this node.
  * @param {!TreeNode} child Orphan child node.
  */


	TreeNode.prototype.addChild = function addChild(child) {
		assertChildHasNoParent(child);
		child.setParent(this);
		this.children_ = this.children_ || [];
		this.children_.push(child);
	};

	/**
  * Tells whether this node is the ancestor of the given node.
  * @param {!TreeNode} node A node.
  * @return {boolean} Whether this node is the ancestor of {@code node}.
  */


	TreeNode.prototype.contains = function contains(node) {
		var current = node.getParent();
		while (current) {
			if (current === this) {
				return true;
			}
			current = current.getParent();
		}
		return false;
	};

	/**
  * @return {!Array<TreeNode>} All ancestor nodes in bottom-up order.
  */


	TreeNode.prototype.getAncestors = function getAncestors() {
		var ancestors = [];
		var node = this.getParent();
		while (node) {
			ancestors.push(node);
			node = node.getParent();
		}
		return ancestors;
	};

	/**
  * Gets the child node of this node at the given index.
  * @param {number} index Child index.
  * @return {?TreeNode} The node at the given index
  * or null if not found.
  */


	TreeNode.prototype.getChildAt = function getChildAt(index) {
		return this.getChildren()[index] || null;
	};

	/**
  * @return {?Array<!TreeNode>} Child nodes or null in case of leaf node.
  */


	TreeNode.prototype.getChildren = function getChildren() {
		return this.children_ || TreeNode.EMPTY_ARRAY;
	};

	/**
  * @return {number} The number of children.
  */


	TreeNode.prototype.getChildCount = function getChildCount() {
		return this.getChildren().length;
	};

	/**
  * @return {number} The number of ancestors of the node.
  */


	TreeNode.prototype.getDepth = function getDepth() {
		var depth = 0;
		var node = this;
		while (node.getParent()) {
			depth++;
			node = node.getParent();
		}
		return depth;
	};

	/**
  * @return {?TreeNode} Parent node or null if it has no parent.
  */


	TreeNode.prototype.getParent = function getParent() {
		return this.parent_;
	};

	/**
  * @return {!TreeNode} The root of the tree structure, i.e. the farthest
  * ancestor of the node or the node itself if it has no parents.
  */


	TreeNode.prototype.getRoot = function getRoot() {
		var root = this;
		while (root.getParent()) {
			root = root.getParent();
		}
		return root;
	};

	/**
  * Gets the value.
  * @return {V} The value.
  */


	TreeNode.prototype.getValue = function getValue() {
		return this.value_;
	};

	/**
  * @return {boolean} Whether the node is a leaf node.
  */


	TreeNode.prototype.isLeaf = function isLeaf() {
		return !this.getChildCount();
	};

	/**
  * Removes the given child node of this node.
  * @param {TreeNode} child The node to remove.
  * @return {TreeNode} The removed node if any, null otherwise.
  */


	TreeNode.prototype.removeChild = function removeChild(child) {
		if (_metal.array.remove(this.getChildren(), child)) {
			return child;
		}
		return null;
	};

	/**
  * Sets the parent node of this node. The callers must ensure that the
  * parent node and only that has this node among its children.
  * @param {TreeNode} parent The parent to set. If null, the node will be
  * detached from the tree.
  * @protected
  */


	TreeNode.prototype.setParent = function setParent(parent) {
		this.parent_ = parent;
	};

	/**
  * Traverses the subtree. The first callback starts with this node,
  * and visits the descendant nodes depth-first, in preorder.
  * The second callback, starts with deepest child then visits
  * the ancestor nodes depth-first, in postorder. E.g.
  *
  *  	 A
  *    / \
  *   B   C
  *  /   / \
  * D   E   F
  *
  * preorder -> ['A', 'B', 'D', 'C', 'E', 'F']
  * postorder -> ['D', 'B', 'E', 'F', 'C', 'A']
  *
  * @param {function=} opt_preorderFn The callback to execute when visiting a node.
  * @param {function=} opt_postorderFn The callback to execute before leaving a node.
  */


	TreeNode.prototype.traverse = function traverse(opt_preorderFn, opt_postorderFn) {
		if (opt_preorderFn) {
			opt_preorderFn(this);
		}
		this.getChildren().forEach(function (child) {
			return child.traverse(opt_preorderFn, opt_postorderFn);
		});
		if (opt_postorderFn) {
			opt_postorderFn(this);
		}
	};

	return TreeNode;
}();

/**
 * Constant for empty array to avoid unnecessary allocations.
 * @private
 */


TreeNode.EMPTY_ARRAY = [];

/**
 * Asserts that child has no parent.
 * @param {TreeNode} child A child.
 * @private
 */
var assertChildHasNoParent = function assertChildHasNoParent(child) {
	if (child.getParent()) {
		throw new Error('Cannot add child with parent.');
	}
};

exports.default = TreeNode;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(27)))

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var punycode = __webpack_require__(29);
var util = __webpack_require__(32);

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = __webpack_require__(33);

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.3.2 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports = typeof exports == 'object' && exports &&
		!exports.nodeType && exports;
	var freeModule = typeof module == 'object' && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * http://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.3.2',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return punycode;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (freeExports && freeModule) {
		if (module.exports == freeExports) { // in Node.js or RingoJS v0.8.0+
			freeModule.exports = punycode;
		} else { // in Narwhal or RingoJS v0.7.0-
			for (key in punycode) {
				punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
			}
		}
	} else { // in Rhino or a web browser
		root.punycode = punycode;
	}

}(this));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(30)(module), __webpack_require__(31)))

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(34);
exports.encode = exports.stringify = __webpack_require__(35);


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__globals_globals__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppDataAttributeHandler__ = __webpack_require__(37);





/**
 * Data attribute handler.
 * @type {AppDataAttributeHandler}
 */
var dataAttributeHandler = new __WEBPACK_IMPORTED_MODULE_1__AppDataAttributeHandler__["a" /* default */]();

__WEBPACK_IMPORTED_MODULE_0__globals_globals__["a" /* default */].document.addEventListener('DOMContentLoaded', function() {
	dataAttributeHandler.setBaseElement(__WEBPACK_IMPORTED_MODULE_0__globals_globals__["a" /* default */].document.body);
	dataAttributeHandler.handle();
});

/* harmony default export */ __webpack_exports__["a"] = (dataAttributeHandler);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_metal__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_metal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_metal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dataAttributes__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals_globals__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__screen_HtmlScreen__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__route_Route__ = __webpack_require__(9);









class AppDataAttributeHandler extends __WEBPACK_IMPORTED_MODULE_0_metal__["Disposable"] {

	/**
	 * Initilizes App, register surfaces and routes from data attributes.
	 * @constructor
	 */
	constructor() {
		super();

		/**
		 * Holds the app reference initialized by data attributes.
		 * @type {App}
		 * @default null
		 */
		this.app = null;

		/**
		 * Holds the base element to search initialization data attributes. This
		 * element is the container used to enable initialization based on the
		 * presence of `data-senna` attribute.
		 * @type {Element}
		 * @default null
		 */
		this.baseElement = null;
	}

	/**
	 * Inits application based on information scanned from document.
	 */
	handle() {
		if (!Object(__WEBPACK_IMPORTED_MODULE_0_metal__["isElement"])(this.baseElement)) {
			throw new Error('Senna data attribute handler base element ' +
				'not set or invalid, try setting a valid element that ' +
				'contains a `data-senna` attribute.');
		}

		if (!this.baseElement.hasAttribute(__WEBPACK_IMPORTED_MODULE_1__dataAttributes__["a" /* default */].senna)) {
			console.log('Senna was not initialized from data attributes. ' +
				'In order to enable its usage from data attributes try setting ' +
				'in the base element, e.g. `<body data-senna>`.');
			return;
		}

		if (this.app) {
			throw new Error('Senna app was already initialized.');
		}

		console.log('Senna initialized from data attribute.');

		this.app = new __WEBPACK_IMPORTED_MODULE_3__App__["a" /* default */]();
		this.maybeAddRoutes_();
		this.maybeAddSurfaces_();
		this.maybeSetBasePath_();
		this.maybeSetLinkSelector_();
		this.maybeSetLoadingCssClass_();
		this.maybeSetUpdateScrollPosition_();
		this.maybeDispatch_();
	}

	/**
	 * Disposes of this instance's object references.
	 * @override
	 */
	disposeInternal() {
		if (this.app) {
			this.app.dispose();
		}
	}

	/**
	 * Gets the app reference.
	 * @return {App}
	 */
	getApp() {
		return this.app;
	}

	/**
	 * Gets the base element.
	 * @return {Element} baseElement
	 */
	getBaseElement() {
		return this.baseElement;
	}

	/**
	 * Maybe adds app routes from link elements that are `senna-route`.
	 */
	maybeAddRoutes_() {
		var routesSelector = 'link[rel="senna-route"]';
		this.querySelectorAllAsArray_(routesSelector).forEach((link) => this.maybeParseLinkRoute_(link));
		if (!this.app.hasRoutes()) {
			this.app.addRoutes(new __WEBPACK_IMPORTED_MODULE_5__route_Route__["a" /* default */](/.*/, __WEBPACK_IMPORTED_MODULE_4__screen_HtmlScreen__["a" /* default */]));
			console.log('Senna can\'t find route elements, adding default.');
		}
	}

	/**
	 * Maybe adds app surfaces by scanning `data-senna-surface` data attribute.
	 */
	maybeAddSurfaces_() {
		var surfacesSelector = '[' + __WEBPACK_IMPORTED_MODULE_1__dataAttributes__["a" /* default */].surface + ']';
		this.querySelectorAllAsArray_(surfacesSelector).forEach((surfaceElement) => {
			this.updateElementIdIfSpecialSurface_(surfaceElement);
			this.app.addSurfaces(surfaceElement.id);
		});
	}

	/**
	 * Dispatches app navigation to the current path when initializes.
	 */
	maybeDispatch_() {
		if (this.baseElement.hasAttribute(__WEBPACK_IMPORTED_MODULE_1__dataAttributes__["a" /* default */].dispatch)) {
			this.app.dispatch();
		}
	}

	/**
	 * Adds app route by parsing valid link elements. A valid link element is of
	 * the kind `rel="senna-route"`.
	 * @param {Element} link
	 */
	maybeParseLinkRoute_(link) {
		var route = new __WEBPACK_IMPORTED_MODULE_5__route_Route__["a" /* default */](this.maybeParseLinkRoutePath_(link), this.maybeParseLinkRouteHandler_(link));
		this.app.addRoutes(route);
		console.log('Senna scanned route ' + route.getPath());
	}

	/**
	 * Maybe parse link route handler.
	 * @param {Element} link
	 * @return {?string}
	 */
	maybeParseLinkRouteHandler_(link) {
		var handler = link.getAttribute('type');
		if (Object(__WEBPACK_IMPORTED_MODULE_0_metal__["isDefAndNotNull"])(handler)) {
			handler = __WEBPACK_IMPORTED_MODULE_0_metal__["object"].getObjectByName(handler);
		}
		return handler;
	}

	/**
	 * Maybe parse link route path.
	 * @param {Element} link
	 * @return {?string}
	 */
	maybeParseLinkRoutePath_(link) {
		var path = link.getAttribute('href');
		if (Object(__WEBPACK_IMPORTED_MODULE_0_metal__["isDefAndNotNull"])(path)) {
			if (path.indexOf('regex:') === 0) {
				path = new RegExp(path.substring(6));
			}
		}
		return path;
	}

	/**
	 * Maybe sets app base path from `data-senna-base-path` data attribute.
	 */
	maybeSetBasePath_() {
		var basePath = this.baseElement.getAttribute(__WEBPACK_IMPORTED_MODULE_1__dataAttributes__["a" /* default */].basePath);
		if (Object(__WEBPACK_IMPORTED_MODULE_0_metal__["isDefAndNotNull"])(basePath)) {
			this.app.setBasePath(basePath);
			console.log('Senna scanned base path ' + basePath);
		}
	}

	/**
	 * Maybe sets app link selector from `data-senna-link-selector` data
	 * attribute.
	 */
	maybeSetLinkSelector_() {
		var linkSelector = this.baseElement.getAttribute(__WEBPACK_IMPORTED_MODULE_1__dataAttributes__["a" /* default */].linkSelector);
		if (Object(__WEBPACK_IMPORTED_MODULE_0_metal__["isDefAndNotNull"])(linkSelector)) {
			this.app.setLinkSelector(linkSelector);
			console.log('Senna scanned link selector ' + linkSelector);
		}
	}

	/**
	 * Maybe sets app link loading css class from `data-senna-loading-css-class`
	 * data attribute.
	 */
	maybeSetLoadingCssClass_() {
		var loadingCssClass = this.baseElement.getAttribute(__WEBPACK_IMPORTED_MODULE_1__dataAttributes__["a" /* default */].loadingCssClass);
		if (Object(__WEBPACK_IMPORTED_MODULE_0_metal__["isDefAndNotNull"])(loadingCssClass)) {
			this.app.setLoadingCssClass(loadingCssClass);
			console.log('Senna scanned loading css class ' + loadingCssClass);
		}
	}

	/**
	 * Maybe sets app update scroll position from
	 * `data-senna-update-scroll-position` data attribute.
	 */
	maybeSetUpdateScrollPosition_() {
		var updateScrollPosition = this.baseElement.getAttribute(__WEBPACK_IMPORTED_MODULE_1__dataAttributes__["a" /* default */].updateScrollPosition);
		if (Object(__WEBPACK_IMPORTED_MODULE_0_metal__["isDefAndNotNull"])(updateScrollPosition)) {
			if (updateScrollPosition === 'false') {
				this.app.setUpdateScrollPosition(false);
			} else {
				this.app.setUpdateScrollPosition(true);
			}
			console.log('Senna scanned update scroll position ' + updateScrollPosition);
		}
	}

	/**
	 * Queries elements from document and returns an array of elements.
	 * @param {!string} selector
	 * @return {array.<Element>}
	 */
	querySelectorAllAsArray_(selector) {
		return Array.prototype.slice.call(__WEBPACK_IMPORTED_MODULE_2__globals_globals__["a" /* default */].document.querySelectorAll(selector));
	}

	/**
	 * Updates element id if handled as special surface element. Some surfaces
	 * are slightly different from others, like when threating <code>body</code>
	 * as surface.
	 * @param {Element} element
	 */
	updateElementIdIfSpecialSurface_(element) {
		if (!element.id && element === __WEBPACK_IMPORTED_MODULE_2__globals_globals__["a" /* default */].document.body) {
			element.id = 'senna_surface_' + Object(__WEBPACK_IMPORTED_MODULE_0_metal__["getUid"])();
		}
	}

	/**
	 * Sets the base element.
	 * @param {Element} baseElement
	 */
	setBaseElement(baseElement) {
		this.baseElement = baseElement;
	}

}

/* harmony default export */ __webpack_exports__["a"] = (AppDataAttributeHandler);


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = ({
	basePath: 'data-senna-base-path',
	linkSelector: 'data-senna-link-selector',
	loadingCssClass: 'data-senna-loading-css-class',
	senna: 'data-senna',
	dispatch: 'data-senna-dispatch',
	surface: 'data-senna-surface',
	updateScrollPosition: 'data-senna-update-scroll-position'
});

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.customEvents = undefined;
exports.addClasses = addClasses;
exports.closest = closest;
exports.append = append;
exports.buildFragment = buildFragment;
exports.contains = contains;
exports.delegate = delegate;
exports.enterDocument = enterDocument;
exports.exitDocument = exitDocument;
exports.hasClass = hasClass;
exports.isEmpty = isEmpty;
exports.match = match;
exports.next = next;
exports.on = on;
exports.once = once;
exports.parent = parent;
exports.registerCustomEvent = registerCustomEvent;
exports.removeChildren = removeChildren;
exports.removeClasses = removeClasses;
exports.replace = replace;
exports.supportsEvent = supportsEvent;
exports.toElement = toElement;
exports.toggleClasses = toggleClasses;
exports.triggerEvent = triggerEvent;

var _metal = __webpack_require__(0);

var _domData = __webpack_require__(8);

var _domData2 = _interopRequireDefault(_domData);

var _DomDelegatedEventHandle = __webpack_require__(40);

var _DomDelegatedEventHandle2 = _interopRequireDefault(_DomDelegatedEventHandle);

var _DomEventHandle = __webpack_require__(14);

var _DomEventHandle2 = _interopRequireDefault(_DomEventHandle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var elementsByTag_ = {};
var supportCache_ = {};
var customEvents = exports.customEvents = {};

var LAST_CONTAINER = '__metal_last_container__';
var USE_CAPTURE = {
	blur: true,
	error: true,
	focus: true,
	invalid: true,
	load: true,
	scroll: true
};

/**
 * Adds the requested CSS classes to an element.
 * @param {!Element|!Nodelist} elements The element or elements to add CSS classes to.
 * @param {string} classes CSS classes to add.
 */
function addClasses(elements, classes) {
	if (!(0, _metal.isObject)(elements) || !(0, _metal.isString)(classes)) {
		return;
	}

	if (!elements.length) {
		elements = [elements];
	}

	for (var i = 0; i < elements.length; i++) {
		if ('classList' in elements[i]) {
			addClassesWithNative_(elements[i], classes);
		} else {
			addClassesWithoutNative_(elements[i], classes);
		}
	}
}

/**
 * Adds the requested CSS classes to an element using classList.
 * @param {!Element} element The element to add CSS classes to.
 * @param {string} classes CSS classes to add.
 * @private
 */
function addClassesWithNative_(element, classes) {
	classes.split(' ').forEach(function (className) {
		if (className) {
			element.classList.add(className);
		}
	});
}

/**
 * Adds the requested CSS classes to an element without using classList.
 * @param {!Element} element The element to add CSS classes to.
 * @param {string} classes CSS classes to add.
 * @private
 */
function addClassesWithoutNative_(element, classes) {
	var elementClassName = ' ' + element.className + ' ';
	var classesToAppend = '';

	classes = classes.split(' ');

	for (var i = 0; i < classes.length; i++) {
		var className = classes[i];

		if (elementClassName.indexOf(' ' + className + ' ') === -1) {
			classesToAppend += ' ' + className;
		}
	}

	if (classesToAppend) {
		element.className = element.className + classesToAppend;
	}
}

/**
 * Adds an event listener to the given element, to be triggered via delegate.
 * @param {!Element} element
 * @param {string} eventName
 * @param {!function()} listener
 * @private
 */
function addElementListener_(element, eventName, listener) {
	addToArr_(_domData2.default.get(element, 'listeners', {}), eventName, listener);
}

/**
 * Adds an event listener to the given element, to be triggered via delegate
 * selectors.
 * @param {!Element} element
 * @param {string} eventName
 * @param {string} selector
 * @param {!function()} listener
 * @private
 */
function addSelectorListener_(element, eventName, selector, listener) {
	var delegatingData = _domData2.default.get(element, 'delegating', {});
	addToArr_(delegatingData[eventName].selectors, selector, listener);
}

/**
 * Adds a value to an array inside an object, creating it first if it doesn't
 * yet exist.
 * @param {!Array} arr
 * @param {string} key
 * @param {*} value
 * @private
 */
function addToArr_(arr, key, value) {
	if (!arr[key]) {
		arr[key] = [];
	}
	arr[key].push(value);
}

/**
 * Attaches a delegate listener, unless there's already one attached.
 * @param {!Element} element
 * @param {string} eventName
 * @private
 */
function attachDelegateEvent_(element, eventName) {
	var delegatingData = _domData2.default.get(element, 'delegating', {});
	if (!delegatingData[eventName]) {
		delegatingData[eventName] = {
			handle: on(element, eventName, handleDelegateEvent_, !!USE_CAPTURE[eventName]),
			selectors: {}
		};
	}
}

/**
 * Gets the closest element up the tree from the given element (including
 * itself) that matches the specified selector, or null if none match.
 * @param {Element} element
 * @param {string} selector
 * @return {Element}
 */
function closest(element, selector) {
	while (element && !match(element, selector)) {
		element = element.parentNode;
	}
	return element;
}

/**
 * Appends a child node with text or other nodes to a parent node. If
 * child is a HTML string it will be automatically converted to a document
 * fragment before appending it to the parent.
 * @param {!Element} parent The node to append nodes to.
 * @param {!(Element|NodeList|string)} child The thing to append to the parent.
 * @return {!Element} The appended child.
 */
function append(parent, child) {
	if ((0, _metal.isString)(child)) {
		child = buildFragment(child);
	}
	if (child instanceof NodeList) {
		var childArr = Array.prototype.slice.call(child);
		for (var i = 0; i < childArr.length; i++) {
			parent.appendChild(childArr[i]);
		}
	} else {
		parent.appendChild(child);
	}
	return child;
}

/**
 * Helper for converting a HTML string into a document fragment.
 * @param {string} htmlString The HTML string to convert.
 * @return {!Element} The resulting document fragment.
 */
function buildFragment(htmlString) {
	var tempDiv = document.createElement('div');
	tempDiv.innerHTML = '<br>' + htmlString;
	tempDiv.removeChild(tempDiv.firstChild);

	var fragment = document.createDocumentFragment();
	while (tempDiv.firstChild) {
		fragment.appendChild(tempDiv.firstChild);
	}
	return fragment;
}

/**
 * Checks if the first element contains the second one.
 * @param {!Element} element1
 * @param {!Element} element2
 * @return {boolean}
 */
function contains(element1, element2) {
	if ((0, _metal.isDocument)(element1)) {
		// document.contains is not defined on IE9, so call it on documentElement instead.
		return element1.documentElement.contains(element2);
	} else {
		return element1.contains(element2);
	}
}

/**
 * Listens to the specified event on the given DOM element, but only calls the
 * given callback listener when it's triggered by elements that match the
 * given selector or target element.
 * @param {!Element} element The DOM element the event should be listened on.
 * @param {string} eventName The name of the event to listen to.
 * @param {!Element|string} selectorOrTarget Either an element or css selector
 *     that should match the event for the listener to be triggered.
 * @param {!function(!Object)} callback Function to be called when the event
 *     is triggered. It will receive the normalized event object.
 * @param {boolean=} opt_default Optional flag indicating if this is a default
 *     listener. That means that it would only be executed after all non
 *     default listeners, and only if the event isn't prevented via
 *     `preventDefault`.
 * @return {!EventHandle} Can be used to remove the listener.
 */
function delegate(element, eventName, selectorOrTarget, callback, opt_default) {
	var customConfig = customEvents[eventName];
	if (customConfig && customConfig.delegate) {
		eventName = customConfig.originalEvent;
		callback = customConfig.handler.bind(customConfig, callback);
	}

	if (opt_default) {
		// Wrap callback so we don't set property directly on it.
		callback = callback.bind();
		callback.defaultListener_ = true;
	}

	attachDelegateEvent_(element, eventName);
	if ((0, _metal.isString)(selectorOrTarget)) {
		addSelectorListener_(element, eventName, selectorOrTarget, callback);
	} else {
		addElementListener_(selectorOrTarget, eventName, callback);
	}

	return new _DomDelegatedEventHandle2.default((0, _metal.isString)(selectorOrTarget) ? element : selectorOrTarget, eventName, callback, (0, _metal.isString)(selectorOrTarget) ? selectorOrTarget : null);
}

/**
 * Verifies if the element is able to trigger the Click event,
 * simulating browsers behaviour, avoiding event listeners to be called by triggerEvent method.
 * @param {Element} node Element to be checked.
 * @param {string} eventName The event name.
 * @private
 */
function isAbleToInteractWith_(node, eventName, opt_eventObj) {
	if (opt_eventObj && eventName === 'click' && opt_eventObj.button === 2) {
		// Firefox triggers "click" events on the document for right clicks. This
		// causes our delegate logic to trigger it for regular elements too, which
		// shouldn't happen. Ignoring them here.
		return false;
	}

	var matchesSelector = ['BUTTON', 'INPUT', 'SELECT', 'TEXTAREA', 'FIELDSET'];
	if (eventName === 'click' && matchesSelector.indexOf(node.tagName) > -1) {
		return !(node.disabled || parent(node, 'fieldset[disabled]'));
	}
	return true;
}

/**
 * Inserts node in document as last element.
 * @param {Element} node Element to remove children from.
 */
function enterDocument(node) {
	node && append(document.body, node);
}

/**
 * Removes node from document.
 * @param {Element} node Element to remove children from.
 */
function exitDocument(node) {
	if (node && node.parentNode) {
		node.parentNode.removeChild(node);
	}
}

/**
 * This is called when an event is triggered by a delegate listener. All
 * matching listeners of this event type from `target` to `currentTarget` will
 * be triggered.
 * @param {!Event} event The event payload.
 * @return {boolean} False if at least one of the triggered callbacks returns
 *     false, or true otherwise.
 * @private
 */
function handleDelegateEvent_(event) {
	normalizeDelegateEvent_(event);
	var ret = true;
	var container = event.currentTarget;
	var defFns = [];

	ret &= triggerDelegatedListeners_(container, event, defFns);
	ret &= triggerDefaultDelegatedListeners_(defFns, event);

	event.delegateTarget = null;
	event[LAST_CONTAINER] = container;
	return ret;
}

/**
 * Checks if the given element has the requested css class.
 * @param {!Element} element
 * @param {string} className
 * @return {boolean}
 */
function hasClass(element, className) {
	if ('classList' in element) {
		return hasClassWithNative_(element, className);
	} else {
		return hasClassWithoutNative_(element, className);
	}
}

/**
 * Checks if the given element has the requested css class using classList.
 * @param {!Element} element
 * @param {string} className
 * @return {boolean}
 * @private
 */
function hasClassWithNative_(element, className) {
	return element.classList.contains(className);
}

/**
 * Checks if the given element has the requested css class without using classList.
 * @param {!Element} element
 * @param {string} className
 * @return {boolean}
 * @private
 */
function hasClassWithoutNative_(element, className) {
	return (' ' + element.className + ' ').indexOf(' ' + className + ' ') >= 0;
}

/**
 * Checks if the given element is empty or not.
 * @param {!Element} element
 * @return {boolean}
 */
function isEmpty(element) {
	return element.childNodes.length === 0;
}

/**
 * Check if an element matches a given selector.
 * @param {Element} element
 * @param {string} selector
 * @return {boolean}
 */
function match(element, selector) {
	if (!element || element.nodeType !== 1) {
		return false;
	}

	var p = Element.prototype;
	var m = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || p.oMatchesSelector;
	if (m) {
		return m.call(element, selector);
	}

	return matchFallback_(element, selector);
}

/**
 * Check if an element matches a given selector, using an internal implementation
 * instead of calling existing javascript functions.
 * @param {Element} element
 * @param {string} selector
 * @return {boolean}
 * @private
 */
function matchFallback_(element, selector) {
	var nodes = document.querySelectorAll(selector, element.parentNode);
	for (var i = 0; i < nodes.length; ++i) {
		if (nodes[i] === element) {
			return true;
		}
	}
	return false;
}

/**
 * Returns the next sibling of the given element that matches the specified
 * selector, or null if there is none.
 * @param {!Element} element
 * @param {?string} selector
 */
function next(element, selector) {
	do {
		element = element.nextSibling;
		if (element && match(element, selector)) {
			return element;
		}
	} while (element);
	return null;
}

/**
 * Normalizes the event payload for delegate listeners.
 * @param {!Event} event
 * @private
 */
function normalizeDelegateEvent_(event) {
	event.stopPropagation = stopPropagation_;
	event.stopImmediatePropagation = stopImmediatePropagation_;
}

/**
 * Listens to the specified event on the given DOM element. This function normalizes
 * DOM event payloads and functions so they'll work the same way on all supported
 * browsers.
 * @param {!Element|string} element The DOM element to listen to the event on, or
 *   a selector that should be delegated on the entire document.
 * @param {string} eventName The name of the event to listen to.
 * @param {!function(!Object)} callback Function to be called when the event is
 *   triggered. It will receive the normalized event object.
 * @param {boolean} opt_capture Flag indicating if listener should be triggered
 *   during capture phase, instead of during the bubbling phase. Defaults to false.
 * @return {!DomEventHandle} Can be used to remove the listener.
 */
function on(element, eventName, callback, opt_capture) {
	if ((0, _metal.isString)(element)) {
		return delegate(document, eventName, element, callback);
	}
	var customConfig = customEvents[eventName];
	if (customConfig && customConfig.event) {
		eventName = customConfig.originalEvent;
		callback = customConfig.handler.bind(customConfig, callback);
	}
	element.addEventListener(eventName, callback, opt_capture);
	return new _DomEventHandle2.default(element, eventName, callback, opt_capture);
}

/**
 * Listens to the specified event on the given DOM element once. This
 * function normalizes DOM event payloads and functions so they'll work the
 * same way on all supported browsers.
 * @param {!Element} element The DOM element to listen to the event on.
 * @param {string} eventName The name of the event to listen to.
 * @param {!function(!Object)} callback Function to be called when the event
 *   is triggered. It will receive the normalized event object.
 * @return {!DomEventHandle} Can be used to remove the listener.
 */
function once(element, eventName, callback) {
	var domEventHandle = on(element, eventName, function () {
		domEventHandle.removeListener();
		return callback.apply(this, arguments);
	});
	return domEventHandle;
}

/**
 * Gets the first parent from the given element that matches the specified
 * selector, or null if none match.
 * @param {!Element} element
 * @param {string} selector
 * @return {Element}
 */
function parent(element, selector) {
	return closest(element.parentNode, selector);
}

/**
 * Registers a custom event.
 * @param {string} eventName The name of the custom event.
 * @param {!Object} customConfig An object with information about how the event
 *   should be handled.
 */
function registerCustomEvent(eventName, customConfig) {
	customEvents[eventName] = customConfig;
}

/**
 * Removes all the child nodes on a DOM node.
 * @param {Element} node Element to remove children from.
 */
function removeChildren(node) {
	var child = void 0;
	while (child = node.firstChild) {
		node.removeChild(child);
	}
}

/**
 * Removes the requested CSS classes from an element.
 * @param {!Element|!NodeList} elements The element or elements to remove CSS classes from.
 * @param {string} classes CSS classes to remove.
 */
function removeClasses(elements, classes) {
	if (!(0, _metal.isObject)(elements) || !(0, _metal.isString)(classes)) {
		return;
	}

	if (!elements.length) {
		elements = [elements];
	}

	for (var i = 0; i < elements.length; i++) {
		if ('classList' in elements[i]) {
			removeClassesWithNative_(elements[i], classes);
		} else {
			removeClassesWithoutNative_(elements[i], classes);
		}
	}
}

/**
 * Removes the requested CSS classes from an element using classList.
 * @param {!Element} element The element to remove CSS classes from.
 * @param {string} classes CSS classes to remove.
 * @private
 */
function removeClassesWithNative_(element, classes) {
	classes.split(' ').forEach(function (className) {
		if (className) {
			element.classList.remove(className);
		}
	});
}

/**
 * Removes the requested CSS classes from an element without using classList.
 * @param {!Element} element The element to remove CSS classes from.
 * @param {string} classes CSS classes to remove.
 * @private
 */
function removeClassesWithoutNative_(element, classes) {
	var elementClassName = ' ' + element.className + ' ';

	classes = classes.split(' ');

	for (var i = 0; i < classes.length; i++) {
		elementClassName = elementClassName.replace(' ' + classes[i] + ' ', ' ');
	}

	element.className = elementClassName.trim();
}

/**
 * Replaces the first element with the second.
 * @param {Element} element1
 * @param {Element} element2
 */
function replace(element1, element2) {
	if (element1 && element2 && element1 !== element2 && element1.parentNode) {
		element1.parentNode.insertBefore(element2, element1);
		element1.parentNode.removeChild(element1);
	}
}

/**
 * The function that replaces `stopImmediatePropagation_` for events.
 * @private
 */
function stopImmediatePropagation_() {
	var event = this; // eslint-disable-line
	event.stopped = true;
	event.stoppedImmediate = true;
	Event.prototype.stopImmediatePropagation.call(event);
}

/**
 * The function that replaces `stopPropagation` for events.
 * @private
 */
function stopPropagation_() {
	var event = this; // eslint-disable-line
	event.stopped = true;
	Event.prototype.stopPropagation.call(event);
}

/**
 * Checks if the given element supports the given event type.
 * @param {!Element|string} element The DOM element or element tag name to check.
 * @param {string} eventName The name of the event to check.
 * @return {boolean}
 */
function supportsEvent(element, eventName) {
	if (customEvents[eventName]) {
		return true;
	}

	if ((0, _metal.isString)(element)) {
		if (!elementsByTag_[element]) {
			elementsByTag_[element] = document.createElement(element);
		}
		element = elementsByTag_[element];
	}

	var tag = element.tagName;
	if (!supportCache_[tag] || !supportCache_[tag].hasOwnProperty(eventName)) {
		supportCache_[tag] = supportCache_[tag] || {};
		supportCache_[tag][eventName] = 'on' + eventName in element;
	}
	return supportCache_[tag][eventName];
}

/**
 * This triggers all default matched delegated listeners of a given event type.
 * @param {!Array} defaultFns Array to collect default listeners in, instead
 * @param {!Event} event
 * @return {boolean} False if at least one of the triggered callbacks returns
 *     false, or true otherwise.
 * @private
 */
function triggerDefaultDelegatedListeners_(defFns, event) {
	var ret = true;

	for (var i = 0; i < defFns.length && !event.defaultPrevented; i++) {
		event.delegateTarget = defFns[i].element;
		ret &= defFns[i].fn(event);
	}

	return ret;
}

/**
 * This triggers all matched delegated listeners of a given event type when its
 * delegated target is able to interact.
 * @param {!Element} container
 * @param {!Event} event
 * @param {!Array} defaultFns Array to collect default listeners in, instead
 *     of running them.
 * @return {boolean} False if at least one of the triggered callbacks returns
 *     false, or true otherwise.
 * @private
 */
function triggerDelegatedListeners_(container, event, defaultFns) {
	var ret = true;
	var currElement = event.target;
	var limit = container.parentNode;

	while (currElement && currElement !== limit && !event.stopped) {
		if (isAbleToInteractWith_(currElement, event.type, event)) {
			event.delegateTarget = currElement;
			ret &= triggerElementListeners_(currElement, event, defaultFns);
			ret &= triggerSelectorListeners_(container, currElement, event, defaultFns);
		}
		currElement = currElement.parentNode;
	}

	return ret;
}

/**
 * Converts the given argument to a DOM element. Strings are assumed to
 * be selectors, and so a matched element will be returned. If the arg
 * is already a DOM element it will be the return value.
 * @param {string|Element|Document} selectorOrElement
 * @return {Element} The converted element, or null if none was found.
 */
function toElement(selectorOrElement) {
	if ((0, _metal.isElement)(selectorOrElement) || (0, _metal.isDocument)(selectorOrElement) || (0, _metal.isDocumentFragment)(selectorOrElement)) {
		return selectorOrElement;
	} else if ((0, _metal.isString)(selectorOrElement)) {
		if (selectorOrElement[0] === '#' && selectorOrElement.indexOf(' ') === -1) {
			return document.getElementById(selectorOrElement.substr(1));
		} else {
			return document.querySelector(selectorOrElement);
		}
	} else {
		return null;
	}
}

/**
 * Adds or removes one or more classes from an element. If any of the classes
 * is present, it will be removed from the element, or added otherwise.
 * @param {!Element} element The element which classes will be toggled.
 * @param {string} classes The classes which have to added or removed from the element.
 */
function toggleClasses(element, classes) {
	if (!(0, _metal.isObject)(element) || !(0, _metal.isString)(classes)) {
		return;
	}

	if ('classList' in element) {
		toggleClassesWithNative_(element, classes);
	} else {
		toggleClassesWithoutNative_(element, classes);
	}
}

/**
 * Adds or removes one or more classes from an element using classList.
 * If any of the classes is present, it will be removed from the element,
 * or added otherwise.
 * @param {!Element} element The element which classes will be toggled.
 * @param {string} classes The classes which have to added or removed from the element.
 * @private
 */
function toggleClassesWithNative_(element, classes) {
	classes.split(' ').forEach(function (className) {
		element.classList.toggle(className);
	});
}

/**
 * Adds or removes one or more classes from an element without using classList.
 * If any of the classes is present, it will be removed from the element,
 * or added otherwise.
 * @param {!Element} element The element which classes will be toggled.
 * @param {string} classes The classes which have to added or removed from the element.
 * @private
 */
function toggleClassesWithoutNative_(element, classes) {
	var elementClassName = ' ' + element.className + ' ';

	classes = classes.split(' ');

	for (var i = 0; i < classes.length; i++) {
		var className = ' ' + classes[i] + ' ';
		var classIndex = elementClassName.indexOf(className);

		if (classIndex === -1) {
			elementClassName = '' + elementClassName + classes[i] + ' ';
		} else {
			var before = elementClassName.substring(0, classIndex);
			var after = elementClassName.substring(classIndex + className.length);
			elementClassName = before + ' ' + after;
		}
	}

	element.className = elementClassName.trim();
}

/**
 * Triggers all listeners for the given event type that are stored in the
 * specified element.
 * @param {!Element} element
 * @param {!Event} event
 * @param {!Array} defaultFns Array to collect default listeners in, instead
 *     of running them.
 * @return {boolean} False if at least one of the triggered callbacks returns
 *     false, or true otherwise.
 * @private
 */
function triggerElementListeners_(element, event, defaultFns) {
	var lastContainer = event[LAST_CONTAINER];
	if (!(0, _metal.isDef)(lastContainer) || !contains(lastContainer, element)) {
		var listeners = _domData2.default.get(element, 'listeners', {})[event.type];
		return triggerListeners_(listeners, event, element, defaultFns);
	}
	return true;
}

/**
 * Triggers the specified event on the given element.
 * NOTE: This should mostly be used for testing, not on real code.
 * @param {!Element} element The node that should trigger the event.
 * @param {string} eventName The name of the event to be triggred.
 * @param {Object=} opt_eventObj An object with data that should be on the
 *   triggered event's payload.
 */
function triggerEvent(element, eventName, opt_eventObj) {
	if (isAbleToInteractWith_(element, eventName, opt_eventObj)) {
		var eventObj = document.createEvent('HTMLEvents');
		eventObj.initEvent(eventName, true, true);
		_metal.object.mixin(eventObj, opt_eventObj);
		element.dispatchEvent(eventObj);
	}
}

/**
 * Triggers the given listeners array.
 * @param {Array<!function()>} listeners
 * @param {!Event} event
 * @param {!Element} element
 * @param {!Array} defaultFns Array to collect default listeners in, instead
 *     of running them.
 * @return {boolean} False if at least one of the triggered callbacks returns
 *     false, or true otherwise.
 * @private
 */
function triggerListeners_(listeners, event, element, defaultFns) {
	var ret = true;
	listeners = listeners || [];
	for (var i = 0; i < listeners.length && !event.stoppedImmediate; i++) {
		if (listeners[i].defaultListener_) {
			defaultFns.push({
				element: element,
				fn: listeners[i]
			});
		} else {
			ret &= listeners[i](event);
		}
	}
	return ret;
}

/**
 * Triggers all selector listeners for the given event.
 * @param {!Element} container
 * @param {!Element} element
 * @param {!Event} event
 * @param {!Array} defaultFns Array to collect default listeners in, instead
 *     of running them.
 * @return {boolean} False if at least one of the triggered callbacks returns
 *     false, or true otherwise.
 * @private
 */
function triggerSelectorListeners_(container, element, event, defaultFns) {
	var ret = true;
	var data = _domData2.default.get(container, 'delegating', {});
	var map = data[event.type].selectors;
	var selectors = Object.keys(map);
	for (var i = 0; i < selectors.length && !event.stoppedImmediate; i++) {
		if (match(element, selectors[i])) {
			var listeners = map[selectors[i]];
			ret &= triggerListeners_(listeners, event, element, defaultFns);
		}
	}
	return ret;
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metal = __webpack_require__(0);

var _domData = __webpack_require__(8);

var _domData2 = _interopRequireDefault(_domData);

var _metalEvents = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This is a special EventHandle, that is responsible for dom delegated events
 * (only the ones that receive a target element, not a selector string).
 * @extends {EventHandle}
 */
var DomDelegatedEventHandle = function (_EventHandle) {
	_inherits(DomDelegatedEventHandle, _EventHandle);

	/**
  * The constructor for `DomDelegatedEventHandle`.
  * @param {!Event} emitter Element the event was subscribed to.
  * @param {string} event The name of the event that was subscribed to.
  * @param {!Function} listener The listener subscribed to the event.
  * @param {string=} opt_selector An optional selector used when delegating
  *     the event.
  * @constructor
  */
	function DomDelegatedEventHandle(emitter, event, listener, opt_selector) {
		_classCallCheck(this, DomDelegatedEventHandle);

		var _this = _possibleConstructorReturn(this, (DomDelegatedEventHandle.__proto__ || Object.getPrototypeOf(DomDelegatedEventHandle)).call(this, emitter, event, listener));

		_this.selector_ = opt_selector;
		return _this;
	}

	/**
  * @inheritDoc
  */


	_createClass(DomDelegatedEventHandle, [{
		key: 'removeListener',
		value: function removeListener() {
			var delegating = _domData2.default.get(this.emitter_, 'delegating', {});
			var listeners = _domData2.default.get(this.emitter_, 'listeners', {});
			var selector = this.selector_;
			var arr = (0, _metal.isString)(selector) ? delegating[this.event_].selectors : listeners;
			var key = (0, _metal.isString)(selector) ? selector : this.event_;

			_metal.array.remove(arr[key] || [], this.listener_);
			if (arr[key] && arr[key].length === 0) {
				delete arr[key];
			}
		}
	}]);

	return DomDelegatedEventHandle;
}(_metalEvents.EventHandle);

exports.default = DomDelegatedEventHandle;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metal = __webpack_require__(0);

var _EventHandle = __webpack_require__(13);

var _EventHandle2 = _interopRequireDefault(_EventHandle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var singleArray_ = [0];

/**
 * EventEmitter utility.
 * @constructor
 * @extends {Disposable}
 */

var EventEmitter = function (_Disposable) {
	_inherits(EventEmitter, _Disposable);

	function EventEmitter() {
		_classCallCheck(this, EventEmitter);

		/**
   * Holds event listeners scoped by event type.
   * @type {Object<string, !Array<!function()>>}
   * @protected
   */
		var _this = _possibleConstructorReturn(this, (EventEmitter.__proto__ || Object.getPrototypeOf(EventEmitter)).call(this));

		_this.events_ = null;

		/**
   * Handlers that are triggered when an event is listened to.
   * @type {Array}
   */
		_this.listenerHandlers_ = null;

		/**
   * Configuration option which determines if an event facade should be sent
   * as a param of listeners when emitting events. If set to true, the facade
   * will be passed as the first argument of the listener.
   * @type {boolean}
   * @protected
   */
		_this.shouldUseFacade_ = false;
		return _this;
	}

	/**
  * Adds a handler to given holder variable. If the holder doesn't have a
  * value yet, it will receive the handler directly. If the holder is an array,
  * the value will just be added to it. Otherwise, the holder will be set to a
  * new array containing its previous value plus the new handler.
  * @param {*} holder
  * @param {!function()|Object} handler
  * @return {*} The holder's new value.
  * @protected
  */


	_createClass(EventEmitter, [{
		key: 'addHandler_',
		value: function addHandler_(holder, handler) {
			if (!holder) {
				holder = handler;
			} else {
				if (!Array.isArray(holder)) {
					holder = [holder];
				}
				holder.push(handler);
			}
			return holder;
		}

		/**
   * Adds a listener to the end of the listeners array for the specified events.
   * @param {!(Array|string)} event
   * @param {!Function} listener
   * @param {boolean} opt_default Flag indicating if this listener is a default
   *   action for this event. Default actions are run last, and only if no previous
   *   listener call `preventDefault()` on the received event facade.
   * @return {!EventHandle} Can be used to remove the listener.
   */

	}, {
		key: 'addListener',
		value: function addListener(event, listener, opt_default) {
			this.validateListener_(listener);

			var events = this.toEventsArray_(event);
			for (var i = 0; i < events.length; i++) {
				this.addSingleListener_(events[i], listener, opt_default);
			}

			return new _EventHandle2.default(this, event, listener);
		}

		/**
   * Adds a listener to the end of the listeners array for a single event.
   * @param {string} event
   * @param {!Function} listener
   * @param {boolean} opt_default Flag indicating if this listener is a default
   *   action for this event. Default actions are run last, and only if no previous
   *   listener call `preventDefault()` on the received event facade.
   * @return {!EventHandle} Can be used to remove the listener.
   * @param {Function=} opt_origin The original function that was added as a
   *   listener, if there is any.
   * @protected
   */

	}, {
		key: 'addSingleListener_',
		value: function addSingleListener_(event, listener, opt_default, opt_origin) {
			this.runListenerHandlers_(event);
			if (opt_default || opt_origin) {
				listener = {
					default: opt_default,
					fn: listener,
					origin: opt_origin
				};
			}
			this.events_ = this.events_ || {};
			this.events_[event] = this.addHandler_(this.events_[event], listener);
		}

		/**
   * Builds facade for the given event.
   * @param {string} event
   * @return {Object}
   * @protected
   */

	}, {
		key: 'buildFacade_',
		value: function buildFacade_(event) {
			if (this.getShouldUseFacade()) {
				var facade = {
					preventDefault: function preventDefault() {
						facade.preventedDefault = true;
					},
					target: this,
					type: event
				};
				return facade;
			}
		}

		/**
   * Disposes of this instance's object references.
   * @override
   */

	}, {
		key: 'disposeInternal',
		value: function disposeInternal() {
			this.events_ = null;
		}

		/**
   * Execute each of the listeners in order with the supplied arguments.
   * @param {string} event
   * @param {*} opt_args [arg1], [arg2], [...]
   * @return {boolean} Returns true if event had listeners, false otherwise.
   */

	}, {
		key: 'emit',
		value: function emit(event) {
			var listeners = this.getRawListeners_(event);
			if (listeners.length === 0) {
				return false;
			}

			var args = _metal.array.slice(arguments, 1);
			this.runListeners_(listeners, args, this.buildFacade_(event));
			return true;
		}

		/**
   * Gets the listener objects for the given event, if there are any.
   * @param {string} event
   * @return {!Array}
   * @protected
   */

	}, {
		key: 'getRawListeners_',
		value: function getRawListeners_(event) {
			var directListeners = toArray(this.events_ && this.events_[event]);
			return directListeners.concat(toArray(this.events_ && this.events_['*']));
		}

		/**
   * Gets the configuration option which determines if an event facade should
   * be sent as a param of listeners when emitting events. If set to true, the
   * facade will be passed as the first argument of the listener.
   * @return {boolean}
   */

	}, {
		key: 'getShouldUseFacade',
		value: function getShouldUseFacade() {
			return this.shouldUseFacade_;
		}

		/**
   * Returns an array of listeners for the specified event.
   * @param {string} event
   * @return {Array} Array of listeners.
   */

	}, {
		key: 'listeners',
		value: function listeners(event) {
			return this.getRawListeners_(event).map(function (listener) {
				return listener.fn ? listener.fn : listener;
			});
		}

		/**
   * Adds a listener that will be invoked a fixed number of times for the
   * events. After each event is triggered the specified amount of times, the
   * listener is removed for it.
   * @param {!(Array|string)} event
   * @param {number} amount The amount of times this event should be listened
   * to.
   * @param {!Function} listener
   * @return {!EventHandle} Can be used to remove the listener.
   */

	}, {
		key: 'many',
		value: function many(event, amount, listener) {
			var events = this.toEventsArray_(event);
			for (var i = 0; i < events.length; i++) {
				this.many_(events[i], amount, listener);
			}

			return new _EventHandle2.default(this, event, listener);
		}

		/**
   * Adds a listener that will be invoked a fixed number of times for a single
   * event. After the event is triggered the specified amount of times, the
   * listener is removed.
   * @param {string} event
   * @param {number} amount The amount of times this event should be listened
   * to.
   * @param {!Function} listener
   * @protected
   */

	}, {
		key: 'many_',
		value: function many_(event, amount, listener) {
			var self = this;

			if (amount <= 0) {
				return;
			}

			function handlerInternal() {
				if (--amount === 0) {
					self.removeListener(event, handlerInternal);
				}
				listener.apply(self, arguments);
			}

			self.addSingleListener_(event, handlerInternal, false, listener);
		}

		/**
   * Checks if a listener object matches the given listener function. To match,
   * it needs to either point to that listener or have it as its origin.
   * @param {!Object} listenerObj
   * @param {!Function} listener
   * @return {boolean}
   * @protected
   */

	}, {
		key: 'matchesListener_',
		value: function matchesListener_(listenerObj, listener) {
			var fn = listenerObj.fn || listenerObj;
			return fn === listener || listenerObj.origin && listenerObj.origin === listener;
		}

		/**
   * Removes a listener for the specified events.
   * Caution: changes array indices in the listener array behind the listener.
   * @param {!(Array|string)} events
   * @param {!Function} listener
   * @return {!Object} Returns emitter, so calls can be chained.
   */

	}, {
		key: 'off',
		value: function off(event, listener) {
			this.validateListener_(listener);
			if (!this.events_) {
				return this;
			}

			var events = this.toEventsArray_(event);
			for (var i = 0; i < events.length; i++) {
				this.events_[events[i]] = this.removeMatchingListenerObjs_(toArray(this.events_[events[i]]), listener);
			}

			return this;
		}

		/**
   * Adds a listener to the end of the listeners array for the specified events.
   * @param {!(Array|string)} events
   * @param {!Function} listener
   * @return {!EventHandle} Can be used to remove the listener.
   */

	}, {
		key: 'on',
		value: function on() {
			return this.addListener.apply(this, arguments);
		}

		/**
   * Adds handler that gets triggered when an event is listened to on this
   * instance.
   * @param {!function()}
   */

	}, {
		key: 'onListener',
		value: function onListener(handler) {
			this.listenerHandlers_ = this.addHandler_(this.listenerHandlers_, handler);
		}

		/**
   * Adds a one time listener for the events. This listener is invoked only the
   * next time each event is fired, after which it is removed.
   * @param {!(Array|string)} events
   * @param {!Function} listener
   * @return {!EventHandle} Can be used to remove the listener.
   */

	}, {
		key: 'once',
		value: function once(events, listener) {
			return this.many(events, 1, listener);
		}

		/**
   * Removes all listeners, or those of the specified events. It's not a good
   * idea to remove listeners that were added elsewhere in the code,
   * especially when it's on an emitter that you didn't create.
   * @param {(Array|string)=} opt_events
   * @return {!Object} Returns emitter, so calls can be chained.
   */

	}, {
		key: 'removeAllListeners',
		value: function removeAllListeners(opt_events) {
			if (this.events_) {
				if (opt_events) {
					var events = this.toEventsArray_(opt_events);
					for (var i = 0; i < events.length; i++) {
						this.events_[events[i]] = null;
					}
				} else {
					this.events_ = null;
				}
			}
			return this;
		}

		/**
   * Removes all listener objects from the given array that match the given
   * listener function.
   * @param {Array.<Object>} listenerObjs
   * @param {!Function} listener
   * @return {Array.<Object>|Object} The new listeners array for this event.
   * @protected
   */

	}, {
		key: 'removeMatchingListenerObjs_',
		value: function removeMatchingListenerObjs_(listenerObjs, listener) {
			var finalListeners = [];
			for (var i = 0; i < listenerObjs.length; i++) {
				if (!this.matchesListener_(listenerObjs[i], listener)) {
					finalListeners.push(listenerObjs[i]);
				}
			}
			return finalListeners.length > 0 ? finalListeners : null;
		}

		/**
   * Removes a listener for the specified events.
   * Caution: changes array indices in the listener array behind the listener.
   * @param {!(Array|string)} events
   * @param {!Function} listener
   * @return {!Object} Returns emitter, so calls can be chained.
   */

	}, {
		key: 'removeListener',
		value: function removeListener() {
			return this.off.apply(this, arguments);
		}

		/**
   * Runs the handlers when an event is listened to.
   * @param {string} event
   * @protected
   */

	}, {
		key: 'runListenerHandlers_',
		value: function runListenerHandlers_(event) {
			var handlers = this.listenerHandlers_;
			if (handlers) {
				handlers = toArray(handlers);
				for (var i = 0; i < handlers.length; i++) {
					handlers[i](event);
				}
			}
		}

		/**
   * Runs the given listeners.
   * @param {!Array} listeners
   * @param {!Array} args
   * @param (Object) facade
   * @protected
   */

	}, {
		key: 'runListeners_',
		value: function runListeners_(listeners, args, facade) {
			if (facade) {
				args.push(facade);
			}

			var defaultListeners = [];
			for (var i = 0; i < listeners.length; i++) {
				var listener = listeners[i].fn || listeners[i];
				if (listeners[i].default) {
					defaultListeners.push(listener);
				} else {
					listener.apply(this, args);
				}
			}
			if (!facade || !facade.preventedDefault) {
				for (var j = 0; j < defaultListeners.length; j++) {
					defaultListeners[j].apply(this, args);
				}
			}
		}

		/**
   * Sets the configuration option which determines if an event facade should
   * be sent as a param of listeners when emitting events. If set to true, the
   * facade will be passed as the first argument of the listener.
   * @param {boolean} shouldUseFacade
   * @return {!Object} Returns emitter, so calls can be chained.
   */

	}, {
		key: 'setShouldUseFacade',
		value: function setShouldUseFacade(shouldUseFacade) {
			this.shouldUseFacade_ = shouldUseFacade;
			return this;
		}

		/**
   * Converts the parameter to an array if only one event is given. Reuses the
   * same array each time this conversion is done, to avoid using more memory
   * than necessary.
   * @param  {!(Array|string)} events
   * @return {!Array}
   * @protected
   */

	}, {
		key: 'toEventsArray_',
		value: function toEventsArray_(events) {
			if ((0, _metal.isString)(events)) {
				singleArray_[0] = events;
				events = singleArray_;
			}
			return events;
		}

		/**
   * Checks if the given listener is valid, throwing an exception when it's not.
   * @param  {*} listener
   * @protected
   */

	}, {
		key: 'validateListener_',
		value: function validateListener_(listener) {
			if (!(0, _metal.isFunction)(listener)) {
				throw new TypeError('Listener must be a function');
			}
		}
	}]);

	return EventEmitter;
}(_metal.Disposable);

function toArray(val) {
	val = val || [];
	return Array.isArray(val) ? val : [val];
}

exports.default = EventEmitter;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metal = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * EventEmitterProxy utility. It's responsible for linking two EventEmitter
 * instances together, emitting events from the first emitter through the
 * second one. That means that listening to a supported event on the target
 * emitter will mean listening to it on the origin emitter as well.
 * @param {EventEmitter} originEmitter Events originated on this emitter
 *   will be fired for the target emitter's listeners as well.
 * @param {EventEmitter} targetEmitter Event listeners attached to this emitter
 *   will also be triggered when the event is fired by the origin emitter.
 * @param {Object} opt_blacklist Optional blacklist of events that should not be
 *   proxied.
 * @constructor
 * @extends {Disposable}
 */
var EventEmitterProxy = function (_Disposable) {
	_inherits(EventEmitterProxy, _Disposable);

	function EventEmitterProxy(originEmitter, targetEmitter, opt_blacklist, opt_whitelist) {
		_classCallCheck(this, EventEmitterProxy);

		/**
   * Map of events that should not be proxied.
   * @type {Object}
   * @protected
   */
		var _this = _possibleConstructorReturn(this, (EventEmitterProxy.__proto__ || Object.getPrototypeOf(EventEmitterProxy)).call(this));

		_this.blacklist_ = opt_blacklist;

		/**
   * The origin emitter. This emitter's events will be proxied through the
   * target emitter.
   * @type {EventEmitter}
   * @protected
   */
		_this.originEmitter_ = originEmitter;

		/**
   * A list of events that are pending to be listened by an actual origin
   * emitter. Events are stored here when the origin doesn't exist, so they
   * can be set on a new origin when one is set.
   * @type {Array}
   * @protected
   */
		_this.pendingEvents_ = null;

		/**
   * Holds a map of events from the origin emitter that are already being proxied.
   * @type {Object<string, !EventHandle>}
   * @protected
   */
		_this.proxiedEvents_ = null;

		/**
   * The target emitter. This emitter will emit all events that come from
   * the origin emitter.
   * @type {EventEmitter}
   * @protected
   */
		_this.targetEmitter_ = targetEmitter;

		/**
   * Map of events that should be proxied. If whitelist is set blacklist is ignored.
   * @type {Object}
   * @protected
   */
		_this.whitelist_ = opt_whitelist;

		_this.startProxy_();
		return _this;
	}

	/**
  * Adds the given listener for the given event.
  * @param {string} event
  * @param {!function()} listener
  * @return {!EventHandle} The listened event's handle.
  * @protected
  */


	_createClass(EventEmitterProxy, [{
		key: 'addListener_',
		value: function addListener_(event, listener) {
			return this.originEmitter_.on(event, listener);
		}

		/**
   * @inheritDoc
   */

	}, {
		key: 'disposeInternal',
		value: function disposeInternal() {
			this.removeListeners_();
			this.proxiedEvents_ = null;
			this.originEmitter_ = null;
			this.targetEmitter_ = null;
		}

		/**
   * Emits the specified event type on the target emitter.
   * @protected
   */

	}, {
		key: 'emitOnTarget_',
		value: function emitOnTarget_() {
			this.targetEmitter_.emit.apply(this.targetEmitter_, arguments);
		}

		/**
   * Proxies the given event from the origin to the target emitter.
   * @param {string} event
   */

	}, {
		key: 'proxyEvent',
		value: function proxyEvent(event) {
			if (this.shouldProxyEvent_(event)) {
				this.tryToAddListener_(event);
			}
		}

		/**
   * Removes the proxy listener for all events.
   * @protected
   */

	}, {
		key: 'removeListeners_',
		value: function removeListeners_() {
			if (this.proxiedEvents_) {
				var events = Object.keys(this.proxiedEvents_);
				for (var i = 0; i < events.length; i++) {
					this.proxiedEvents_[events[i]].removeListener();
				}
				this.proxiedEvents_ = null;
			}
			this.pendingEvents_ = null;
		}

		/**
   * Changes the origin emitter. This automatically detaches any events that
   * were already being proxied from the previous emitter, and starts proxying
   * them on the new emitter instead.
   * @param {!EventEmitter} originEmitter
   */

	}, {
		key: 'setOriginEmitter',
		value: function setOriginEmitter(originEmitter) {
			var _this2 = this;

			var events = this.originEmitter_ && this.proxiedEvents_ ? Object.keys(this.proxiedEvents_) : this.pendingEvents_;
			this.originEmitter_ = originEmitter;
			if (events) {
				this.removeListeners_();
				events.forEach(function (event) {
					return _this2.proxyEvent(event);
				});
			}
		}

		/**
   * Checks if the given event should be proxied.
   * @param {string} event
   * @return {boolean}
   * @protected
   */

	}, {
		key: 'shouldProxyEvent_',
		value: function shouldProxyEvent_(event) {
			if (this.whitelist_ && !this.whitelist_[event]) {
				return false;
			}
			if (this.blacklist_ && this.blacklist_[event]) {
				return false;
			}
			return !this.proxiedEvents_ || !this.proxiedEvents_[event];
		}

		/**
   * Starts proxying all events from the origin to the target emitter.
   * @protected
   */

	}, {
		key: 'startProxy_',
		value: function startProxy_() {
			this.targetEmitter_.onListener(this.proxyEvent.bind(this));
		}

		/**
   * Adds a listener to the origin emitter, if it exists. Otherwise, stores
   * the pending listener so it can be used on a future origin emitter.
   * @param {string} event
   * @protected
   */

	}, {
		key: 'tryToAddListener_',
		value: function tryToAddListener_(event) {
			if (this.originEmitter_) {
				this.proxiedEvents_ = this.proxiedEvents_ || {};
				this.proxiedEvents_[event] = this.addListener_(event, this.emitOnTarget_.bind(this, event));
			} else {
				this.pendingEvents_ = this.pendingEvents_ || [];
				this.pendingEvents_.push(event);
			}
		}
	}]);

	return EventEmitterProxy;
}(_metal.Disposable);

exports.default = EventEmitterProxy;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metal = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * EventHandler utility. It's useful for easily removing a group of
 * listeners from different EventEmitter instances.
 * @constructor
 * @extends {Disposable}
 */
var EventHandler = function (_Disposable) {
	_inherits(EventHandler, _Disposable);

	function EventHandler() {
		_classCallCheck(this, EventHandler);

		/**
   * An array that holds the added event handles, so the listeners can be
   * removed later.
   * @type {Array.<EventHandle>}
   * @protected
   */
		var _this = _possibleConstructorReturn(this, (EventHandler.__proto__ || Object.getPrototypeOf(EventHandler)).call(this));

		_this.eventHandles_ = [];
		return _this;
	}

	/**
  * Adds event handles to be removed later through the `removeAllListeners`
  * method.
  * @param {...(!EventHandle)} var_args
  */


	_createClass(EventHandler, [{
		key: 'add',
		value: function add() {
			for (var i = 0; i < arguments.length; i++) {
				this.eventHandles_.push(arguments[i]);
			}
		}

		/**
   * Disposes of this instance's object references.
   * @override
   */

	}, {
		key: 'disposeInternal',
		value: function disposeInternal() {
			this.eventHandles_ = null;
		}

		/**
   * Removes all listeners that have been added through the `add` method.
   */

	}, {
		key: 'removeAllListeners',
		value: function removeAllListeners() {
			for (var i = 0; i < this.eventHandles_.length; i++) {
				this.eventHandles_[i].removeListener();
			}

			this.eventHandles_ = [];
		}
	}]);

	return EventHandler;
}(_metal.Disposable);

exports.default = EventHandler;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dom = __webpack_require__(2);

var _metalEvents = __webpack_require__(7);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * DomEventEmitterProxy utility. It extends `EventEmitterProxy` to also accept
 * dom elements as origin emitters.
 * @extends {EventEmitterProxy}
 */
var DomEventEmitterProxy = function (_EventEmitterProxy) {
	_inherits(DomEventEmitterProxy, _EventEmitterProxy);

	function DomEventEmitterProxy() {
		_classCallCheck(this, DomEventEmitterProxy);

		return _possibleConstructorReturn(this, (DomEventEmitterProxy.__proto__ || Object.getPrototypeOf(DomEventEmitterProxy)).apply(this, arguments));
	}

	_createClass(DomEventEmitterProxy, [{
		key: 'addListener_',

		/**
   * Adds the given listener for the given event.
   * @param {string} event
   * @param {!function()} listener
   * @return {!EventHandle} The listened event's handle.
   * @protected
   * @override
   */
		value: function addListener_(event, listener) {
			if (this.originEmitter_.addEventListener) {
				if (this.isDelegateEvent_(event)) {
					var index = event.indexOf(':', 9);
					var eventName = event.substring(9, index);
					var selector = event.substring(index + 1);
					return (0, _dom.delegate)(this.originEmitter_, eventName, selector, listener);
				} else {
					return (0, _dom.on)(this.originEmitter_, event, listener);
				}
			} else {
				return _get(DomEventEmitterProxy.prototype.__proto__ || Object.getPrototypeOf(DomEventEmitterProxy.prototype), 'addListener_', this).call(this, event, listener);
			}
		}

		/**
   * Checks if the given event is of the delegate type.
   * @param {string} event
   * @return {boolean}
   * @protected
   */

	}, {
		key: 'isDelegateEvent_',
		value: function isDelegateEvent_(event) {
			return event.substr(0, 9) === 'delegate:';
		}

		/**
   * Checks if the given event is supported by the origin element.
   * @param {string} event
   * @protected
   */

	}, {
		key: 'isSupportedDomEvent_',
		value: function isSupportedDomEvent_(event) {
			if (!this.originEmitter_ || !this.originEmitter_.addEventListener) {
				return true;
			}
			return this.isDelegateEvent_(event) && event.indexOf(':', 9) !== -1 || (0, _dom.supportsEvent)(this.originEmitter_, event);
		}

		/**
   * Checks if the given event should be proxied.
   * @param {string} event
   * @return {boolean}
   * @protected
   * @override
   */

	}, {
		key: 'shouldProxyEvent_',
		value: function shouldProxyEvent_(event) {
			return _get(DomEventEmitterProxy.prototype.__proto__ || Object.getPrototypeOf(DomEventEmitterProxy.prototype), 'shouldProxyEvent_', this).call(this, event) && this.isSupportedDomEvent_(event);
		}
	}]);

	return DomEventEmitterProxy;
}(_metalEvents.EventEmitterProxy);

exports.default = DomEventEmitterProxy;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metal = __webpack_require__(0);

var _dom = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Utility functions for running javascript code in the global scope.
 */
var globalEval = function () {
	function globalEval() {
		_classCallCheck(this, globalEval);
	}

	_createClass(globalEval, null, [{
		key: 'run',

		/**
   * Evaluates the given string in the global scope.
   * @param {string} text
   * @param {function()=} opt_appendFn Optional function to append the node
   *   into document.
   * @return {Element} script
   */
		value: function run(text, opt_appendFn) {
			var script = document.createElement('script');
			script.text = text;
			if (opt_appendFn) {
				opt_appendFn(script);
			} else {
				document.head.appendChild(script);
			}
			(0, _dom.exitDocument)(script);
			return script;
		}

		/**
   * Evaluates the given javascript file in the global scope.
   * @param {string} src The file's path.
   * @param {function()=} opt_callback Optional function to be called
   *   when the script has been run.
   * @param {function()=} opt_appendFn Optional function to append the node
   *   into document.
   * @return {Element} script
   */

	}, {
		key: 'runFile',
		value: function runFile(src, opt_callback, opt_appendFn) {
			var script = document.createElement('script');
			script.src = src;

			var callback = function callback() {
				(0, _dom.exitDocument)(script);
				opt_callback && opt_callback();
			};
			(0, _dom.once)(script, 'load', callback);
			(0, _dom.once)(script, 'error', callback);

			if (opt_appendFn) {
				opt_appendFn(script);
			} else {
				document.head.appendChild(script);
			}

			return script;
		}

		/**
   * Evaluates the code referenced by the given script element.
   * @param {!Element} script
   * @param {function()=} opt_callback Optional function to be called
   *   when the script has been run.
   * @param {function()=} opt_appendFn Optional function to append the node
   *   into document.
   * @return {Element} script
   */

	}, {
		key: 'runScript',
		value: function runScript(script, opt_callback, opt_appendFn) {
			var callback = function callback() {
				opt_callback && opt_callback();
			};
			if (script.type && script.type !== 'text/javascript') {
				_metal.async.nextTick(callback);
				return;
			}
			(0, _dom.exitDocument)(script);
			if (script.src) {
				return globalEval.runFile(script.src, opt_callback, opt_appendFn);
			} else {
				_metal.async.nextTick(callback);
				return globalEval.run(script.text, opt_appendFn);
			}
		}

		/**
   * Evaluates any script tags present in the given element.
   * @param {!Element} element
   * @param {function()=} opt_callback Optional function to be called
   *   when the script has been run.
   * @param {function()=} opt_appendFn Optional function to append the node
   *   into document.
   */

	}, {
		key: 'runScriptsInElement',
		value: function runScriptsInElement(element, opt_callback, opt_appendFn) {
			var scripts = element.querySelectorAll('script');
			if (scripts.length) {
				globalEval.runScriptsInOrder(scripts, 0, opt_callback, opt_appendFn);
			} else if (opt_callback) {
				_metal.async.nextTick(opt_callback);
			}
		}

		/**
   * Runs the given scripts elements in the order that they appear.
   * @param {!NodeList} scripts
   * @param {number} index
   * @param {function()=} opt_callback Optional function to be called
   *   when the script has been run.
   * @param {function()=} opt_appendFn Optional function to append the node
   *   into document.
   */

	}, {
		key: 'runScriptsInOrder',
		value: function runScriptsInOrder(scripts, index, opt_callback, opt_appendFn) {
			globalEval.runScript(scripts.item(index), function () {
				if (index < scripts.length - 1) {
					globalEval.runScriptsInOrder(scripts, index + 1, opt_callback, opt_appendFn);
				} else if (opt_callback) {
					_metal.async.nextTick(opt_callback);
				}
			}, opt_appendFn);
		}
	}]);

	return globalEval;
}();

exports.default = globalEval;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metal = __webpack_require__(0);

var _dom = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Utility functions for running styles.
 */
var globalEvalStyles = function () {
	function globalEvalStyles() {
		_classCallCheck(this, globalEvalStyles);
	}

	_createClass(globalEvalStyles, null, [{
		key: 'run',

		/**
   * Evaluates the given style.
   * @param {string} text
   * @param {function()=} opt_appendFn Optional function to append the node
   *   into document.
   * @return {Element} style
   */
		value: function run(text, opt_appendFn) {
			var style = document.createElement('style');
			style.innerHTML = text;
			if (opt_appendFn) {
				opt_appendFn(style);
			} else {
				document.head.appendChild(style);
			}
			return style;
		}

		/**
   * Evaluates the given style file.
   * @param {string} href The file's path.
   * @param {function()=} opt_callback Optional function to be called
   *   when the styles has been run.
   * @param {function()=} opt_appendFn Optional function to append the node
   *   into document.
   * @return {Element} style
   */

	}, {
		key: 'runFile',
		value: function runFile(href, opt_callback, opt_appendFn) {
			var link = document.createElement('link');
			link.rel = 'stylesheet';
			link.href = href;
			globalEvalStyles.runStyle(link, opt_callback, opt_appendFn);
			return link;
		}

		/**
   * Evaluates the code referenced by the given style/link element.
   * @param {!Element} style
   * @param {function()=} opt_callback Optional function to be called
   *   when the script has been run.
   * @param {function()=} opt_appendFn Optional function to append the node
   *   into document.
   *  @return {Element} style
   */

	}, {
		key: 'runStyle',
		value: function runStyle(style, opt_callback, opt_appendFn) {
			var callback = function callback() {
				opt_callback && opt_callback();
			};
			if (style.rel && style.rel !== 'stylesheet') {
				_metal.async.nextTick(callback);
				return;
			}

			if (style.tagName === 'STYLE') {
				_metal.async.nextTick(callback);
			} else {
				(0, _dom.once)(style, 'load', callback);
				(0, _dom.once)(style, 'error', callback);
			}

			if (opt_appendFn) {
				opt_appendFn(style);
			} else {
				document.head.appendChild(style);
			}

			return style;
		}

		/**
   * Evaluates any style present in the given element.
   * @param {!Element} element
   * @param {function()=} opt_callback Optional function to be called when the
   *   style has been run.
   * @param {function()=} opt_appendFn Optional function to append the node
   *   into document.
   */

	}, {
		key: 'runStylesInElement',
		value: function runStylesInElement(element, opt_callback, opt_appendFn) {
			var styles = element.querySelectorAll('style,link');
			if (styles.length === 0 && opt_callback) {
				_metal.async.nextTick(opt_callback);
				return;
			}

			var loadCount = 0;
			var callback = function callback() {
				if (opt_callback && ++loadCount === styles.length) {
					_metal.async.nextTick(opt_callback);
				}
			};
			for (var i = 0; i < styles.length; i++) {
				globalEvalStyles.runStyle(styles[i], callback, opt_appendFn);
			}
		}
	}]);

	return globalEvalStyles;
}();

exports.default = globalEvalStyles;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _dom = __webpack_require__(2);

var _features = __webpack_require__(15);

var _features2 = _interopRequireDefault(_features);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mouseEventMap = {
	mouseenter: 'mouseover',
	mouseleave: 'mouseout',
	pointerenter: 'pointerover',
	pointerleave: 'pointerout'
};
Object.keys(mouseEventMap).forEach(function (eventName) {
	(0, _dom.registerCustomEvent)(eventName, {
		delegate: true,
		handler: function handler(callback, event) {
			var related = event.relatedTarget;
			var target = event.delegateTarget;
			if (!related || related !== target && !(0, _dom.contains)(target, related)) {
				event.customType = eventName;
				return callback(event);
			}
		},
		originalEvent: mouseEventMap[eventName]
	});
});

var animationEventMap = {
	animation: 'animationend',
	transition: 'transitionend'
};
Object.keys(animationEventMap).forEach(function (eventType) {
	var eventName = animationEventMap[eventType];
	(0, _dom.registerCustomEvent)(eventName, {
		event: true,
		delegate: true,
		handler: function handler(callback, event) {
			event.customType = eventName;
			return callback(event);
		},
		originalEvent: _features2.default.checkAnimationEventName()[eventType]
	});
});

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
  * Debounces function execution.
  * @param {!function()} fn
  * @param {number} delay
  * @return {!function()}
  */

Object.defineProperty(exports, "__esModule", {
	value: true
});
function debounce(fn, delay) {
	return function debounced() {
		var args = arguments;
		cancelDebounce(debounced);
		debounced.id = setTimeout(function () {
			fn.apply(null, args);
		}, delay);
	};
}

/**
 * Cancels the scheduled debounced function.
 */
function cancelDebounce(debounced) {
	clearTimeout(debounced.id);
}

exports.default = debounce;
exports.cancelDebounce = cancelDebounce;
exports.debounce = debounce;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.parse = parse;
exports.toRegex = toRegex;
exports.extractData = extractData;

var _metal = __webpack_require__(0);

var _metal2 = _interopRequireDefault(_metal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REGEX = /([\/])?(?:(?:\:(\w+)(?:\(((?:\\.|[^\\()])*)\))?|\(((?:\\.|[^\\()])+)\))([+*?])?)/g;

/**
 * Converts the given array of regex matches to a more readable object format.
 * @param {!Array<string>} matches
 * @return {!Object}
 */
function convertMatchesToObj(matches) {
	return {
		match: matches[0],
		prefix: matches[1],
		name: matches[2],
		paramPattern: matches[3],
		unnamedPattern: matches[4],
		modifier: matches[5]
	};
}

/**
 * Converts the given tokens parsed from a route format string to a regex.
 * @param {!Array<string|!Object>} tokens
 * @return {!RegExp}
 */
function convertTokensToRegex(tokens) {
	var regex = '';
	for (var i = 0; i < tokens.length; i++) {
		if (_metal2.default.isString(tokens[i])) {
			regex += escape(tokens[i]);
		} else {
			var capture = encloseNonCapturingGroup(tokens[i].pattern);
			if (tokens[i].repeat) {
				capture += encloseNonCapturingGroup('\\/' + capture) + '*';
			}
			capture = escape(tokens[i].prefix) + ('(' + capture + ')');
			if (tokens[i].optional) {
				if (!tokens[i].partial) {
					capture = encloseNonCapturingGroup(capture);
				}
				capture += '?';
			}
			regex += capture;
		}
	}
	return new RegExp('^' + makeTrailingSlashOptional(regex) + '$');
}

/**
 * Encloses the given regex pattern into a non capturing group.
 * @param {string} pattern
 * @return {string}
 */
function encloseNonCapturingGroup(pattern) {
	return '(?:' + pattern + ')';
}

/**
 * Escapes the given string to show up in the path regex.
 * @param {string} str
 * @return {string}
 */
function escape(str) {
	return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
}

/**
 * Makes trailing slash optional on paths.
 * @param {string} regex
 * @param {string}
 */
function makeTrailingSlashOptional(regex) {
	if (/\/$/.test(regex)) {
		regex += '?';
	} else {
		regex += '\\/?';
	}
	return regex;
}

/**
 * Parses the given route format string into tokens representing its contents.
 * @param {!Array|string} routeOrTokens Either a route format string or tokens
 *     previously parsed via the `parse` function.
 * @return {!Array<string|!Object>} An array of tokens that can be either plain
 *     strings (part of the route) or objects containing informations on params.
 */
function parse(routeOrTokens) {
	if (!_metal2.default.isString(routeOrTokens)) {
		return routeOrTokens;
	}

	var route = routeOrTokens;
	var unnamedCount = 0;
	var tokens = [];
	var currPath = '';
	var index = 0;

	var matches = REGEX.exec(route);
	while (matches) {
		var data = convertMatchesToObj(matches);

		currPath = route.slice(index, matches.index);
		index = matches.index + data.match.length;
		tokens.push(currPath);

		tokens.push({
			name: data.name ? data.name : '' + unnamedCount++,
			partial: route[index] && route[index] !== data.prefix,
			prefix: data.prefix || '',
			pattern: data.paramPattern || data.unnamedPattern || '[^\\/]+',
			repeat: data.modifier === '*' || data.modifier === '+',
			optional: data.modifier === '*' || data.modifier === '?'
		});

		matches = REGEX.exec(route);
	}

	if (index < route.length) {
		tokens.push(route.substr(index));
	}
	return tokens;
}

/**
 * Converts the given route format string to a regex that can extract param
 * data from paths matching it.
 * @param {!Array|string} routeOrTokens Either a route format string or tokens
 *     previously parsed via the `parse` function.
 * @return {!RegExp}
 */
function toRegex(routeOrTokens) {
	return convertTokensToRegex(parse(routeOrTokens));
}

/**
 * Extracts data from the given path according to the specified route format.
 * @param {!Array|string} routeOrTokens Either a route format string or tokens
 *     previously parsed via the `parse` function.
 * @param {string} The path to extract param data from.
 * @return {Object<string, string>} The data object, or null if the path doesn't
 *     match the given format.
 */
function extractData(routeOrTokens, path) {
	var data = {};
	var tokens = parse(routeOrTokens);
	var match = path.match(convertTokensToRegex(tokens));

	if (!match) {
		return null;
	}

	var paramIndex = 1;
	for (var i = 0; i < tokens.length; i++) {
		if (!_metal2.default.isString(tokens[i])) {
			var value = match[paramIndex++];
			if (_metal2.default.isDef(value)) {
				if (tokens[i].repeat) {
					value = value.split('/');
				}
				data[tokens[i].name] = value;
			}
		}
	}
	return data;
}

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_metal__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_metal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_metal__);




class Cacheable extends __WEBPACK_IMPORTED_MODULE_0_metal__["Disposable"] {

	/**
	 * Abstract class for defining cacheable behavior.
	 * @constructor
	 */
	constructor() {
		super();

		/**
		 * Holds the cached data.
		 * @type {!Object}
		 * @default null
		 * @protected
		 */
		this.cache = null;

		/**
		 * Holds whether class is cacheable.
		 * @type {boolean}
		 * @default false
		 * @protected
		 */
		this.cacheable = false;
	}

	/**
	 * Adds content to the cache.
	 * @param {string} content Content to be cached.
	 * @chainable
	 */
	addCache(content) {
		if (this.cacheable) {
			this.cache = content;
		}
		return this;
	}

	/**
	 * Clears the cache.
	 * @chainable
	 */
	clearCache() {
		this.cache = null;
		return this;
	}

	/**
	 * Disposes of this instance's object references.
	 * @override
	 */
	disposeInternal() {
		this.clearCache();
	}

	/**
	 * Gets the cached content.
	 * @return {Object} Cached content.
	 * @protected
	 */
	getCache() {
		return this.cache;
	}

	/**
	 * Whether the class is cacheable.
	 * @return {boolean} Returns true when class is cacheable, false otherwise.
	 */
	isCacheable() {
		return this.cacheable;
	}

	/**
	 * Sets whether the class is cacheable.
	 * @param {boolean} cacheable
	 */
	setCacheable(cacheable) {
		if (!cacheable) {
			this.clearCache();
		}
		this.cacheable = cacheable;
	}

}

/* harmony default export */ __webpack_exports__["a"] = (Cacheable);


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metal = __webpack_require__(0);

var _metalUri = __webpack_require__(4);

var _metalUri2 = _interopRequireDefault(_metalUri);

var _metalPromise = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ajax = function () {
	function Ajax() {
		_classCallCheck(this, Ajax);
	}

	_createClass(Ajax, null, [{
		key: 'parseResponseHeaders',


		/**
   * XmlHttpRequest's getAllResponseHeaders() method returns a string of
   * response headers according to the format described on the spec:
   * {@link http://www.w3.org/TR/XMLHttpRequest/#the-getallresponseheaders-method}.
   * This method parses that string into a user-friendly name/value pair
   * object.
   * @param {string} allHeaders All headers as string.
   * @return {!Array.<Object<string, string>>}
   */
		value: function parseResponseHeaders(allHeaders) {
			var headers = [];
			if (!allHeaders) {
				return headers;
			}
			var pairs = allHeaders.split('\r\n');
			for (var i = 0; i < pairs.length; i++) {
				var index = pairs[i].indexOf(': ');
				if (index > 0) {
					var name = pairs[i].substring(0, index);
					var value = pairs[i].substring(index + 2);
					headers.push({
						name: name,
						value: value
					});
				}
			}
			return headers;
		}

		/**
   * Requests the url using XMLHttpRequest.
   * @param {!string} url
   * @param {!string} method
   * @param {?string} body
   * @param {MultiMap=} opt_headers
   * @param {MultiMap=} opt_params
   * @param {number=} opt_timeout
   * @param {boolean=} opt_sync
   * @param {boolean=} opt_withCredentials
   * @return {Promise} Deferred ajax request.
   * @protected
   */

	}, {
		key: 'request',
		value: function request(url, method, body, opt_headers, opt_params, opt_timeout, opt_sync, opt_withCredentials) {
			url = url || '';
			method = method || 'GET';

			var request = new XMLHttpRequest();
			var previousReadyState = 0;

			var promise = new _metalPromise.CancellablePromise(function (resolve, reject) {
				request.onload = function () {
					if (request.aborted) {
						request.onerror();
						return;
					}
					resolve(request);
				};
				request.onreadystatechange = function () {
					if (previousReadyState && previousReadyState < 3 && 4 === request.readyState) {
						request.terminatedPrematurely = true;
					}
					previousReadyState = request.readyState;
				};
				request.onerror = function () {
					var message = 'Request error';
					if (request.terminatedPrematurely) {
						message = 'Request terminated prematurely';
					}
					var error = new Error(message);
					error.request = request;
					reject(error);
				};
			}).thenCatch(function (reason) {
				request.abort();
				throw reason;
			}).thenAlways(function () {
				clearTimeout(timeout);
			});

			url = new _metalUri2.default(url);

			if (opt_params) {
				url.addParametersFromMultiMap(opt_params).toString();
			}

			url = url.toString();

			request.open(method, url, !opt_sync);

			if (opt_withCredentials) {
				request.withCredentials = true;
			}

			if (opt_headers) {
				opt_headers.names().forEach(function (name) {
					request.setRequestHeader(name, opt_headers.getAll(name).join(', '));
				});
			}

			request.send((0, _metal.isDef)(body) ? body : null);

			if ((0, _metal.isDefAndNotNull)(opt_timeout)) {
				var timeout = setTimeout(function () {
					promise.cancel('Request timeout');
				}, opt_timeout);
			}

			return promise;
		}
	}]);

	return Ajax;
}();

exports.default = Ajax;

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/**
 * Holds value error messages.
 * @const
 */
class errors {
}

/**
 * Invalid status error message.
 * @type {string}
 * @static
 */
errors.INVALID_STATUS = 'Invalid status code';

/**
 * Request error message.
 * @type {string}
 * @static
 */
errors.REQUEST_ERROR = 'Request error';

/**
 * Request timeout error message.
 * @type {string}
 * @static
 */
errors.REQUEST_TIMEOUT = 'Request timeout';

/**
 * Request is blocked by CORS issue message.
 * @type {string}
 * @static
 */
errors.REQUEST_PREMATURE_TERMINATION = 'Request terminated prematurely';

/* harmony default export */ __webpack_exports__["a"] = (errors);


/***/ })
/******/ ])});;