'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

define(['exports', 'metal', 'metal-dom', '../cacheable/Cacheable', 'metal-promise'], function (exports, _metal, _metalDom, _Cacheable2, _metalPromise) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Cacheable3 = _interopRequireDefault(_Cacheable2);

	var _metalPromise2 = _interopRequireDefault(_metalPromise);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}

		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}

		return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	var _get = function get(object, property, receiver) {
		if (object === null) object = Function.prototype;
		var desc = Object.getOwnPropertyDescriptor(object, property);

		if (desc === undefined) {
			var parent = Object.getPrototypeOf(object);

			if (parent === null) {
				return undefined;
			} else {
				return get(parent, property, receiver);
			}
		} else if ("value" in desc) {
			return desc.value;
		} else {
			var getter = desc.get;

			if (getter === undefined) {
				return undefined;
			}

			return getter.call(receiver);
		}
	};

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
		}

		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var Screen = function (_Cacheable) {
		_inherits(Screen, _Cacheable);

		/**
   * Screen class is a special type of route handler that provides helper
   * utilities that adds lifecycle and methods to provide content to each
   * registered surface.
   * @constructor
   * @extends {Cacheable}
   */
		function Screen() {
			_classCallCheck(this, Screen);

			var _this = _possibleConstructorReturn(this, (Screen.__proto__ || Object.getPrototypeOf(Screen)).call(this));

			/**
    * Holds the screen id.
    * @type {string}
    * @protected
    */
			_this.id = _this.makeId_((0, _metal.getUid)());

			/**
    * Holds the screen title. Relevant when the page title should be
    * upadated when screen is rendered.
    * @type {?string=}
    * @default null
    * @protected
    */
			_this.title = null;
			return _this;
		}

		/**
   * Fires when the screen is active. Allows a screen to perform any setup
   * that requires its DOM to be visible. Lifecycle.
   */

		_createClass(Screen, [{
			key: 'activate',
			value: function activate() {
				console.log('Screen [' + this + '] activate');
			}
		}, {
			key: 'beforeDeactivate',
			value: function beforeDeactivate() {
				console.log('Screen [' + this + '] beforeDeactivate');
			}
		}, {
			key: 'beforeUpdateHistoryPath',
			value: function beforeUpdateHistoryPath(path) {
				return path;
			}
		}, {
			key: 'beforeUpdateHistoryState',
			value: function beforeUpdateHistoryState(state) {
				return state;
			}
		}, {
			key: 'deactivate',
			value: function deactivate() {
				console.log('Screen [' + this + '] deactivate');
			}
		}, {
			key: 'disposeInternal',
			value: function disposeInternal() {
				_get(Screen.prototype.__proto__ || Object.getPrototypeOf(Screen.prototype), 'disposeInternal', this).call(this);
				console.log('Screen [' + this + '] dispose');
			}
		}, {
			key: 'evaluateScripts',
			value: function evaluateScripts(surfaces) {
				Object.keys(surfaces).forEach(function (sId) {
					if (surfaces[sId].activeChild) {
						_metalDom.globalEval.runScriptsInElement(surfaces[sId].activeChild);
					}
				});
				return _metalPromise2.default.resolve();
			}
		}, {
			key: 'evaluateStyles',
			value: function evaluateStyles() {
				return _metalPromise2.default.resolve();
			}
		}, {
			key: 'flip',
			value: function flip(surfaces) {
				var _this2 = this;

				console.log('Screen [' + this + '] flip');

				var transitions = [];

				Object.keys(surfaces).forEach(function (sId) {
					var surface = surfaces[sId];
					var deferred = surface.show(_this2.id);
					transitions.push(deferred);
				});

				return _metalPromise2.default.all(transitions);
			}
		}, {
			key: 'getId',
			value: function getId() {
				return this.id;
			}
		}, {
			key: 'getSurfaceContent',
			value: function getSurfaceContent() {
				console.log('Screen [' + this + '] getSurfaceContent');
			}
		}, {
			key: 'getTitle',
			value: function getTitle() {
				return this.title;
			}
		}, {
			key: 'load',
			value: function load() {
				console.log('Screen [' + this + '] load');
				return _metalPromise2.default.resolve();
			}
		}, {
			key: 'makeId_',
			value: function makeId_(id) {
				return 'screen_' + id;
			}
		}, {
			key: 'setId',
			value: function setId(id) {
				this.id = id;
			}
		}, {
			key: 'setTitle',
			value: function setTitle(title) {
				this.title = title;
			}
		}, {
			key: 'toString',
			value: function toString() {
				return this.id;
			}
		}]);

		return Screen;
	}(_Cacheable3.default);

	/**
  * @param {*} object
  * @return {boolean} Whether a given instance implements
  * <code>Screen</code>.
  */
	Screen.isImplementedBy = function (object) {
		return object instanceof Screen;
	};

	exports.default = Screen;
});