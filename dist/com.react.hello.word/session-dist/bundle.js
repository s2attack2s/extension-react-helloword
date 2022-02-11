/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/session-src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/session-src/index.js":
/*!**********************************!*\
  !*** ./src/session-src/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Session = __webpack_require__(/*! ./src/Session.js */ "./src/session-src/src/Session.js");

var _Session2 = _interopRequireDefault(_Session);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.session = _Session2.default; /**
                                     * @author Tomer Riko Shalev
                                     */

/***/ }),

/***/ "./src/session-src/src/ScriptLoader.js":
/*!*********************************************!*\
  !*** ./src/session-src/src/ScriptLoader.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @author Tomer Riko Shalev
 */

/**
 * load jsx scripts dynamically
 */
var ScriptLoader = function () {
    function ScriptLoader() {
        _classCallCheck(this, ScriptLoader);

        this.EvalScript_ErrMessage = "EvalScript error.";

        this.cs = new CSInterface();
    }

    _createClass(ScriptLoader, [{
        key: "loadJSX",


        /**
         * loadJSX - load a jsx file dynamically, this
         * will also load all of it's includes which is desirable
         *
         * @param  {type} fileName the file name
         * @return {type}          description
         */
        value: function loadJSX(fileName) {
            var cs = this.cs;
            var extensionRoot = cs.getSystemPath(SystemPath.EXTENSION) + "/host/";

            cs.evalScript('$.evalFile("' + extensionRoot + fileName + '")');
        }

        /**
         * evalScript - evaluate a JSX script
         *
         * @param  {type} functionName the string name of the function to invoke
         * @param  {type} params the params object
         * @return {Promise} a promise
         */

    }, {
        key: "evalScript",
        value: function evalScript(functionName, params) {
            var params_string = params ? JSON.stringify(params) : '';
            var eval_string = functionName + "('" + params_string + "')";
            var that = this;

            return new Promise(function (resolve, reject) {

                var callback = function callback(eval_res) {
                    // console.log('weird' + eval_res)
                    if (typeof eval_res === 'string') {
                        // console.log(eval_res)
                        if (eval_res.toLowerCase().indexOf('error') != -1) {
                            that.log('err eval');
                            reject(that.createScriptError(eval_res));

                            return;
                        }
                    }

                    that.log('success eval');

                    resolve(eval_res);

                    return;
                };

                that.cs.evalScript(eval_string, callback);
            });
        }
    }, {
        key: "createScriptError",
        value: function createScriptError(reason, data) {
            return { reason: reason, data: data };
        }

        /**
         * log some info with session prefix
         *
         * @param  {string} val what to log
         */

    }, {
        key: "log",
        value: function log(val) {
            console.log(this.name + " " + val);
        }
    }, {
        key: "cs",
        get: function get() {
            return this._cs;
        },
        set: function set(val) {
            this._cs = val;
        }
    }, {
        key: "name",
        get: function get() {
            return 'ScriptLoader:: ';
        }
    }]);

    return ScriptLoader;
}();

var scriptLoader = new ScriptLoader();

exports.default = scriptLoader;

/***/ }),

/***/ "./src/session-src/src/Session.js":
/*!****************************************!*\
  !*** ./src/session-src/src/Session.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author Tomer Riko Shalev
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _events = __webpack_require__(/*! events */ "events");

var _events2 = _interopRequireDefault(_events);

var _ScriptLoader = __webpack_require__(/*! ./ScriptLoader */ "./src/session-src/src/ScriptLoader.js");

var _ScriptLoader2 = _interopRequireDefault(_ScriptLoader);

var _DataManagers = __webpack_require__(/*! ./managers/DataManagers.js */ "./src/session-src/src/managers/DataManagers.js");

var _DataManagers2 = _interopRequireDefault(_DataManagers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * the main plugin session. This can enter the node modules as
 * well as the host
 *
 */
var Session = function () {
    function Session() {
        _classCallCheck(this, Session);

        this._managers = new _DataManagers2.default();

        //super()

        this.init();
    }

    /**
     * init - session
     *
     */


    _createClass(Session, [{
        key: 'init',
        value: function init() {
            // init before everything so I can intercept console.log
            this._managers.init();
            this.log('session is initing...');
            // load jsx file dynamically
            this.log('loading the main jsx file');
            _ScriptLoader2.default.loadJSX('main.jsx');

            // some testing
            this.test();
            // var fs = require('fs-extra')
            //console.log(fs)

            this.log('session is inited');
        }

        /**
         * get data managers
         *
         * @return {type}  description
         */

    }, {
        key: 'scriptLoader',


        /**
         * scriptLoader - get the script loader
         *
         */
        value: function scriptLoader() {
            return _ScriptLoader2.default;
        }

        /**
         * test - let's test things
         *
         */

    }, {
        key: 'test',
        value: function test() {
            var _this = this;

            var obj = {
                name: 'tomer'
            };

            _ScriptLoader2.default.evalScript('test_host', obj).then(function (res) {
                _this.log('result is ' + res);
            });
        }

        /**
         * invoke the plugin
         *
         * @param  {{textures:boolean, masks:boolean, info: boolean, flatten:boolean}} options for plugin
         *
         * @return {object} describes how well the execution of plugin was
         */

    }, {
        key: 'invokePlugin',
        value: function invokePlugin(options) {
            var folderPath = options.folderPath,
                isFlattenChecked = options.isFlattenChecked,
                isInfoChecked = options.isInfoChecked,
                isInspectVisibleChecked = options.isInspectVisibleChecked,
                isMasksChecked = options.isMasksChecked,
                isTexturesChecked = options.isTexturesChecked,
                isMeaningfulNamesChecked = options.isMeaningfulNamesChecked,
                isHierarchicalChecked = options.isHierarchicalChecked;

            // i reparse everything to detect failures

            var pluginData = {
                destinationFolder: folderPath,
                exportInfoJson: isInfoChecked,
                inspectOnlyVisibleLayers: isInspectVisibleChecked,
                exportMasks: isMasksChecked,
                exportTextures: isTexturesChecked,
                flatten: !isHierarchicalChecked,
                namePrefix: isMeaningfulNamesChecked ? 'layer' : undefined
            };

            var that = this;

            return new Promise(function (resolve, reject) {

                _ScriptLoader2.default.evalScript('invoke_document_worker', pluginData).then(function (res) {
                    resolve(JSON.parse(res));
                }).catch(function (err) {
                    reject(err);
                });
            });
        }

        /**
         * log some info with session prefix
         *
         * @param  {string} val what to log
         */

    }, {
        key: 'log',
        value: function log(val) {
            console.log(this.name + ' ' + val);
        }
    }, {
        key: 'managers',
        get: function get() {
            return this._managers;
        }
    }, {
        key: 'name',
        get: function get() {
            return 'Session:: ';
        }
    }]);

    return Session;
}();

var session = new Session();

exports.default = session;

/***/ }),

/***/ "./src/session-src/src/managers/DataManagers.js":
/*!******************************************************!*\
  !*** ./src/session-src/src/managers/DataManagers.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @author Tomer Riko Shalev
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _LogManager = __webpack_require__(/*! ./LogManager.js */ "./src/session-src/src/managers/LogManager.js");

var _LogManager2 = _interopRequireDefault(_LogManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataManagers = function () {
    function DataManagers() {
        _classCallCheck(this, DataManagers);

        this._manager_log = undefined;
    }

    _createClass(DataManagers, [{
        key: 'init',
        value: function init() {
            this._manager_log = new _LogManager2.default();

            this._manager_log.init();
        }

        /**
         * get log - the log manager
         *
         * @return {LogManager} the log manager
         */

    }, {
        key: 'log',
        get: function get() {
            return this._manager_log;
        }
    }]);

    return DataManagers;
}();

exports.default = DataManagers;

/***/ }),

/***/ "./src/session-src/src/managers/LogManager.js":
/*!****************************************************!*\
  !*** ./src/session-src/src/managers/LogManager.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @author Tomer Riko Shalev
 */

/**
 * log management
 *
 */
var LogManager = function () {
    function LogManager() {
        _classCallCheck(this, LogManager);

        this._logs = [];
    }

    _createClass(LogManager, [{
        key: 'init',
        value: function init() {
            this.log('initing...');

            var log = console.log;

            if (console === undefined) return;
            var that = this;
            // override the console.log method
            console.log = function () {
                // log.call(this, 'My Console!!!')
                // log.apply(this, Array.prototype.slice.call(arguments))
                // retain older console.log functionality
                log.call.apply(log, [this].concat(Array.prototype.slice.call(arguments)));
                // save the log internally
                that.addRawLog.apply(that, arguments);
            };
        }

        /**
         * addLog - collect log
         *
         * @param  {Object} val anything
         *
         */

    }, {
        key: 'addRawLog',
        value: function addRawLog(val) {
            this._logs.push(val);
        }
    }, {
        key: 'log',
        value: function log(val) {
            return this.name + ' ' + val;
        }
    }, {
        key: 'rawLogs',
        get: function get() {
            return this._logs;
        }
    }, {
        key: 'name',
        get: function get() {
            return 'LogManager:: ';
        }
    }]);

    return LogManager;
}();

exports.default = LogManager;

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map