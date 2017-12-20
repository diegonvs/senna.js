define(["metal","metal-promise","metal-uri","metal-dom","metal-useragent","metal-events","metal-debounce","metal-path-parser","metal-ajax","metal-structs"], function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_21__, __WEBPACK_EXTERNAL_MODULE_22__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
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
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_metal__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_metal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_metal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_metal_path_parser__ = __webpack_require__(19);
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_metal__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_metal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_metal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_metal_dom__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_metal_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_metal_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cacheable_Cacheable__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_metal_promise__ = __webpack_require__(2);
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_metal_dom__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_metal_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_metal_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_metal__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_metal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_metal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_metal_events__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_metal_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_metal_events__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_metal_promise__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_metal_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_metal_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_metal_debounce__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_metal_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_metal_debounce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__globals_globals__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__route_Route__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__screen_Screen__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__surface_Surface__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_metal_uri__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_metal_uri___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_metal_uri__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_utils__ = __webpack_require__(3);














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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__globals_globals__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_metal__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_metal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_metal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_metal_dom__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_metal_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_metal_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_metal_promise__ = __webpack_require__(2);
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_metal__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_metal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_metal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_metal_dom__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_metal_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_metal_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_metal_promise__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_metal_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_metal_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals_globals__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RequestScreen__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__surface_Surface__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_metal_useragent__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_metal_useragent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_metal_useragent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_metal_uri__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_metal_uri___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_metal_uri__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_utils__ = __webpack_require__(3);












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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_metal__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_metal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_metal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_metal_ajax__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_metal_ajax___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_metal_ajax__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_metal_structs__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_metal_structs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_metal_structs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_metal_promise__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_metal_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_metal_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__errors_errors__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_utils__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__globals_globals__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Screen__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_metal_uri__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_metal_uri___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_metal_uri__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_metal_useragent__ = __webpack_require__(12);
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
/* 12 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_utils__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_dataAttributeHandler__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_App__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__screen_HtmlScreen__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__screen_RequestScreen__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__route_Route__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__screen_Screen__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "dataAttributeHandler", function() { return __WEBPACK_IMPORTED_MODULE_1__app_dataAttributeHandler__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return __WEBPACK_IMPORTED_MODULE_2__app_App__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlScreen", function() { return __WEBPACK_IMPORTED_MODULE_3__screen_HtmlScreen__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return __WEBPACK_IMPORTED_MODULE_5__route_Route__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RequestScreen", function() { return __WEBPACK_IMPORTED_MODULE_4__screen_RequestScreen__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Screen", function() { return __WEBPACK_IMPORTED_MODULE_6__screen_Screen__["a"]; });










/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_2__app_App__["a" /* default */]);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__globals_globals__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppDataAttributeHandler__ = __webpack_require__(15);





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
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_metal__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_metal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_metal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dataAttributes__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals_globals__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__screen_HtmlScreen__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__route_Route__ = __webpack_require__(6);









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
/* 16 */
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
/* 17 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ }),
/* 20 */
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
/* 21 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_21__;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_22__;

/***/ }),
/* 23 */
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