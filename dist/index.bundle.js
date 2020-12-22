module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./src/config/config.js":
/*!******************************!*\
  !*** ./src/config/config.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! joi */ \"joi\");\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_0__);\n/* config.js */\n // require and configure dotenv, will load vars in .env in PROCESS.ENV\n\n__webpack_require__(/*! dotenv */ \"dotenv\").config(); // 建立每個變數 joi 驗證規則\n\n\nconst envVarSchema = joi__WEBPACK_IMPORTED_MODULE_0___default.a.object().keys({\n  NODE_ENV: joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().default('development').allow(['development', 'production']),\n  // 字串且預設值為development 並只允許兩種參數\n  PORT: joi__WEBPACK_IMPORTED_MODULE_0___default.a.number().default(8080),\n  // 數字且預設值為 8080\n  MYSQL_PORT: joi__WEBPACK_IMPORTED_MODULE_0___default.a.number().default(3306),\n  //數字且預設值為3306\n  MYSQL_HOST: joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().default('127.0.0.1'),\n  //字串取預設值為127.0.0.1\n  MYSQL_USER: joi__WEBPACK_IMPORTED_MODULE_0___default.a.string(),\n  // 字串\n  MYSQL_PASS: joi__WEBPACK_IMPORTED_MODULE_0___default.a.string(),\n  // 字串\n  MYSQL_NAME: joi__WEBPACK_IMPORTED_MODULE_0___default.a.string(),\n  // 字串\n  VERSION: joi__WEBPACK_IMPORTED_MODULE_0___default.a.string() // 字串\n\n}).unknown().required(); // process.env 撈取 .env 內的變數做 joi 驗證\n\nconst {\n  error,\n  value: envVars\n} = joi__WEBPACK_IMPORTED_MODULE_0___default.a.validate(process.env, envVarSchema);\n\nif (error) {\n  throw new Error(`Config validation error: ${error.message}`);\n} //設定\n\n\nconst config = {\n  version: envVars.VERSION,\n  // API版本\n  env: envVars.NODE_ENV,\n  // 開發模式(development、production)\n  port: envVars.PORT,\n  // API 阜號\n  mysqlPort: envVars.MYSQL_PORT,\n  // 連接阜號(MYSQL_PORT)\n  mysqlHost: envVars.MYSQL_HOST,\n  // 主機名稱 (MYSQL_HOST)\n  mysqlUserName: envVars.MYSQL_USER,\n  // 用戶名稱 (MYSQL_USER)\n  mysqlPass: envVars.MYSQL_PASS,\n  // 資料庫密碼(MYSQL_PASS)\n  mysqlDatabase: envVars.MYSQL_DATABASE // 資料庫名稱(MYSQL_DATABASE)\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (config);\n\n//# sourceURL=webpack:///./src/config/config.js?");

/***/ }),

/***/ "./src/config/express.js":
/*!*******************************!*\
  !*** ./src/config/express.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/config */ \"./src/config/config.js\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _server_routes_index_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../server/routes/index.route */ \"./src/server/routes/index.route.js\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _server_helper_AppError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../server/helper/AppError */ \"./src/server/helper/AppError.js\");\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! http-status */ \"http-status\");\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(http_status__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_1___default()();\napp.get('/', (req, res) => {\n  res.send(`Show Text From Express ${_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port}`);\n}); //使用此功能解析後\n\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.urlencoded({\n  extended: true\n}));\napp.use(cors__WEBPACK_IMPORTED_MODULE_4___default()());\napp.use(morgan__WEBPACK_IMPORTED_MODULE_5___default()('dev')); //途徑必須在解析後\n\napp.use('/api', _server_routes_index_route__WEBPACK_IMPORTED_MODULE_2__[\"default\"]); //Joi驗證 可是我們沒有用\n// app.use((err, req, res, next) => {\n//   console.log('Step 1')\n//   console.log(err.code)\n//   console.log(err.message)\n//   console.log(err.status)\n//   let errorMessage;\n//   let errorCode;\n//   let errorStatus;\n//   // express validation error 所有傳入參數驗證錯誤\n//   if (err instanceof expressValidation.ValidationError) {\n//     if (err.errors[0].location === 'query' || err.errors[0].location === 'body') {\n//       errorMessage = err.errors[0].messages;\n//       errorCode = 400;\n//       errorStatus = httpStatus.BAD_REQUEST;\n//     }\n//     const error = new APPError.APIError(errorMessage, errorStatus, true, errorCode);\n//     console.log('Run inside')\n//     return next(error);\n//   }\n//   console.log(err.code)\n//   console.log(err.message)\n//   console.log(err.status)\n//   return next(err);\n// });\n// error handler, send stacktrace only during development 錯誤後最後才跑這邊\n\napp.use((err, req, res, next) => {\n  res.status(err.status).json({\n    message: err.isPublic ? err.message : http_status__WEBPACK_IMPORTED_MODULE_7___default.a[err.status],\n    code: err.code ? err.code : http_status__WEBPACK_IMPORTED_MODULE_7___default.a[err.status],\n    stack: _config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].env === 'development' ? err.stack : {}\n  });\n  next();\n});\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./src/config/express.js?");

/***/ }),

/***/ "./src/config/param-validation.js":
/*!****************************************!*\
  !*** ./src/config/param-validation.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! joi */ \"joi\");\n/* harmony import */ var joi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(joi__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  createActicle: {\n    body: {\n      user_id: joi__WEBPACK_IMPORTED_MODULE_0___default.a.number().required(),\n      // 數字＋必填\n      article_title: joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().required(),\n      // 字串＋必填\n      article_tag: joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().required(),\n      // 字串＋必填\n      article_content: joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().min(20).required() // 文章長度至少20字\n\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/config/param-validation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/config */ \"./src/config/config.js\");\n/* harmony import */ var _config_express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/express */ \"./src/config/express.js\");\n\n\n\nif (!module.parent) {\n  // listen on port config.port\n  _config_express__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listen(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port, () => {\n    console.log(`server started on  port http://127.0.0.1: ${_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port} (${_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].env})`);\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_config_express__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/server/controllers/article.controller.js":
/*!******************************************************!*\
  !*** ./src/server/controllers/article.controller.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_article_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/article.module */ \"./src/server/modules/article.module.js\");\n// article.controller.js\n\n/* Article  POST 新增 */\n\nconst articlePost = (req, res) => {\n  // 取得新增參數\n  const insertValues = req.body;\n  _modules_article_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createArticle(insertValues).then(result => {\n    res.send(result); // 成功回傳result結果\n  }).catch(err => {\n    return res.send(err);\n  }); // 失敗回傳錯誤訊息\n};\n\nconst articleGet = (req, res) => {\n  _modules_article_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].selectArticle().then(result => {\n    res.send(result); // 成功回傳result結果\n  }).catch(err => {\n    return res.send(err);\n  }); // 失敗回傳錯誤訊息\n};\n\nconst articlePut = (req, res) => {\n  // 取得修改id\n  const userId = req.params.article_id; // 取得修改參數\n\n  const insertValues = req.body;\n  _modules_article_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateArticle(insertValues, userId).then(result => {\n    res.send(result);\n  }).catch(err => {\n    return res.send(err);\n  });\n};\n\nconst articleDelete = (req, res) => {\n  const deleteId = req.params.article_id;\n  _modules_article_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteArticle(deleteId).then(result => {\n    res.send(result);\n  }).catch(err => {\n    return res.send(err);\n  });\n};\n\nconst articlePersonalGet = (req, res) => {\n  _modules_article_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].selectPersonalArticle(req.token).then(result => {\n    res.send(result);\n  }).catch(err => {\n    return res.status(403).send(err);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  articlePost,\n  articleGet,\n  articlePut,\n  articleDelete,\n  articlePersonalGet\n});\n\n//# sourceURL=webpack:///./src/server/controllers/article.controller.js?");

/***/ }),

/***/ "./src/server/controllers/user.controller.js":
/*!***************************************************!*\
  !*** ./src/server/controllers/user.controller.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_user_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/user.module */ \"./src/server/modules/user.module.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst userPost = (req, res) => {\n  // const insertValues = req.body  ; //是整體JSON資料\n  //是必須傳入的參數\n  const insertValues = {\n    user_name: req.body.user_name,\n    user_age: req.body.user_age,\n    user_birthday: req.body.user_birthday,\n    user_password: bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.hashSync(req.body.user_password, 10) // 密碼加密\n\n  };\n  _modules_user_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createUser(insertValues).then(result => {\n    res.send(result); // 成功回傳result結果\n  }).catch(err => {\n    return res.send(err);\n  }); // 失敗回傳錯誤訊息\n};\n\nconst userGet = (req, res) => {\n  _modules_user_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].selectUser().then(result => {\n    res.send(result);\n  }).catch(err => {\n    return res.send(err);\n  });\n};\n\nconst userPut = (req, res) => {\n  const insertValues = req.body;\n  const userId = req.params.user_id;\n  _modules_user_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateUser(insertValues, userId).then(result => {\n    res.send(result);\n  }).catch(err => {\n    return res.send(err);\n  });\n}; //這邊的.user_id 對應到route的路徑 必須一樣\n\n\nconst userDelete = (req, res) => {\n  const userID = req.params.user_id;\n  _modules_user_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteUser(userID).then(result => {\n    res.send(result);\n  }).catch(err => {\n    return res.send(err);\n  });\n};\n\nconst userLogin = (req, res, next) => {\n  // const insertValues = req.body  ; //是整體JSON資料\n  const insertValues = req.body;\n  _modules_user_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].selectUserLogin(insertValues).then(result => {\n    res.send(result); // 成功回傳result結果\n  }).catch(err => {\n    console.log('傳送失敗' + err.code + 'code');\n    next(err);\n  }); // 失敗回傳錯誤訊息\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  userPost,\n  userGet,\n  userDelete,\n  userPut,\n  userLogin\n});\n\n//# sourceURL=webpack:///./src/server/controllers/user.controller.js?");

/***/ }),

/***/ "./src/server/helper/AppError.js":
/*!***************************************!*\
  !*** ./src/server/helper/AppError.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-status */ \"http-status\");\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_status__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\r\n * @extends Error\r\n */\n\nclass ExtendableError extends Error {\n  constructor(message, status, isPublic, code) {\n    super(message);\n    this.message = message;\n    this.name = this.constructor.name;\n    this.status = status;\n    this.isPublic = isPublic;\n    this.code = code;\n    this.isOperational = true; // This is required since bluebird 4 doesn't append it anymore.\n\n    Error.captureStackTrace(this, this.constructor.name);\n  }\n\n}\n\nclass APIError extends ExtendableError {\n  /**\r\n   * Creates an API error.\r\n   * @param {string} message - Error message.\r\n   * @param {number} status - HTTP status code of error.\r\n   * @param {boolean} isPublic - Whether the message should be visible to user or not.\r\n   */\n  constructor(message, status = http_status__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL_SERVER_ERROR, isPublic = false, code) {\n    super(message, status, isPublic, code);\n    this.name = 'APIError';\n  }\n\n}\n/**\r\n * 信箱尚未註冊 Error\r\n * @extends ExtendableError\r\n */\n\n\nclass LoginError1 extends ExtendableError {\n  /**\r\n   * Creates an API error.\r\n   * @param {string} message - Error message.\r\n   * @param {number} status - HTTP status code of error.\r\n   * @param {boolean} isPublic - Whether the message should be visible to user or not.\r\n   */\n  constructor(message = '用戶未註冊！', status = http_status__WEBPACK_IMPORTED_MODULE_0___default.a.NOT_FOUND, isPublic = true, code = 401) {\n    super(message, status, isPublic, code);\n    this.name = 'LoginNameError';\n  }\n\n}\n/**\r\n * 密碼錯誤 Error.\r\n * @extends ExtendableError\r\n */\n\n\nclass LoginError2 extends ExtendableError {\n  /**\r\n   * Creates an API error.\r\n   * @param {string} message - Error message.\r\n   * @param {number} status - HTTP status code of error.\r\n   * @param {boolean} isPublic - Whether the message should be visible to user or not.\r\n   */\n  constructor(message = '您輸入的密碼有誤！', status = http_status__WEBPACK_IMPORTED_MODULE_0___default.a.NOT_FOUND, isPublic = true, code = 401) {\n    super(message, status, isPublic, code);\n    this.name = 'LoginPasswordError';\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  APIError,\n  LoginError1,\n  LoginError2\n});\n\n//# sourceURL=webpack:///./src/server/helper/AppError.js?");

/***/ }),

/***/ "./src/server/helper/AppResponse.js":
/*!******************************************!*\
  !*** ./src/server/helper/AppResponse.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass ScuessResponse {\n  constructor(code, message, result) {\n    this.code = code;\n    this.message = message;\n    this.result = result;\n  }\n\n}\n\nclass LoginSucess extends ScuessResponse {\n  constructor(code, message, result) {\n    super(code, message, result);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  LoginSucess\n});\n\n//# sourceURL=webpack:///./src/server/helper/AppResponse.js?");

/***/ }),

/***/ "./src/server/modules/article.module.js":
/*!**********************************************!*\
  !*** ./src/server/modules/article.module.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql */ \"mysql\");\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/config */ \"./src/config/config.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst connectionPool = mysql__WEBPACK_IMPORTED_MODULE_0___default.a.createPool({\n  connectionLimit: 10,\n  host: _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysqlHost,\n  user: _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysqlUserName,\n  password: _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysqlPass,\n  database: _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysqlDatabase\n}); //新增\n\nconst createArticle = insertValues => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      // 資料庫連線\n      if (connectionError) {\n        reject(connectionError); // 若連線有問題回傳錯誤\n      } else {\n        console.log('This is ' + insertValues);\n        connection.query('INSERT INTO Article SET ?', insertValues, (error, result) => {\n          // Article資料表寫入一筆資料\n          if (error) {\n            console.error('SQL error: ', error); // 寫入資料庫有問題時回傳錯誤\n\n            reject(error);\n          } else if (result.affectedRows === 1) {\n            resolve(`新增成功！ article_id: ${result.insertId}`); // 寫入成功回傳寫入id\n          }\n\n          connection.release();\n        });\n      }\n    });\n  });\n}; //查詢\n\n\nconst selectArticle = () => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      // 資料庫連線\n      if (connectionError) {\n        reject(connectionError); // 若連線有問題回傳錯誤\n      } else {\n        connection.query( // Article撈取所有欄位的值組\n        `SELECT\n                  *\n                FROM\n                  Article`, (error, result) => {\n          if (error) {\n            console.error('SQL error: ', error);\n            reject(error); // 寫入資料庫有問題時回傳錯誤\n          } else {\n            resolve(result); // 撈取成功回傳 JSON 資料\n          }\n\n          connection.release();\n        });\n      }\n    });\n  });\n};\n\nconst updateArticle = (insertValues, userId) => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      if (connectionError) {\n        console.log('SQL Error');\n        reject(connectionError);\n      } else {\n        connection.query(`UPDATE article Set ? Where user_id = ?`, [insertValues, userId], (error, result) => {\n          if (error) {\n            console.log('SQL ERROR');\n            reject(error);\n          } else if (result.affectedRows === 0) {\n            resolve('修改未成功');\n          } else if (result.affectedRows === 1) {\n            resolve('修改成功!');\n          } else {\n            resolve('資料無異動');\n          }\n\n          connection.release();\n        });\n      }\n    });\n  });\n};\n\nconst deleteArticle = userId => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      if (connectionError) {\n        console.log('SQL ERROR');\n        reject(connectionError);\n      } else {\n        connection.query(`delete from article where user_id = ?`, userId, (error, result) => {\n          if (error) {\n            reject(error);\n          } else if (result.affectedRows === 1) {\n            resolve('刪除成功');\n          } else {\n            resolve('刪除未成功');\n          }\n\n          connection.release();\n        });\n      }\n    });\n  });\n};\n\nconst selectPersonalArticle = token => {\n  return new Promise((resolve, reject) => {\n    jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.verify(token, 'my_secret_key', (err, decoded) => {\n      if (err) {\n        console.log('驗證失敗');\n        reject(err); // 驗證失敗回傳錯誤\n      } else {\n        console.log('驗證成功');\n        const user_id = decoded.payload.user_id;\n        connectionPool.getConnection((connectionError, connection) => {\n          if (connectionError) {\n            reject(connectionError);\n          } else {\n            console.log('開始查詢');\n            connection.query('SELECT * FROM Article where user_id = ?', [user_id], (error, result) => {\n              if (error) {\n                console.log(error);\n                reject(error);\n              } else {\n                resolve(result);\n              }\n\n              connection.release();\n            });\n          }\n        }); // resolve(payload); // 驗證成功回傳 payload data\n      }\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  createArticle,\n  selectArticle,\n  updateArticle,\n  deleteArticle,\n  selectPersonalArticle\n});\n\n//# sourceURL=webpack:///./src/server/modules/article.module.js?");

/***/ }),

/***/ "./src/server/modules/user.module.js":
/*!*******************************************!*\
  !*** ./src/server/modules/user.module.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql */ \"mysql\");\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/config */ \"./src/config/config.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helper_AppError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/AppError */ \"./src/server/helper/AppError.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _helper_AppResponse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helper/AppResponse */ \"./src/server/helper/AppResponse.js\");\n\n\n\n\n\n\n\nconst connectionPool = mysql__WEBPACK_IMPORTED_MODULE_0___default.a.createPool({\n  connectionLimit: 10,\n  host: _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysqlHost,\n  user: _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysqlUserName,\n  password: _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysqlPass,\n  database: _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysqlDatabase\n});\n\nconst createUser = insertValues => {\n  return new Promise((reslove, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      if (connectionError) {\n        console.log(`SQL Error`);\n        reject(connectionError);\n      } else {\n        connection.query(`INSERT INTO user Set ?`, insertValues, (error, result) => {\n          if (error) {\n            reject(error);\n          } else if (result.affectedRows === 1) {\n            reslove(`新增成功 id = ${result.insertId}`);\n          } else {\n            reject('新增失敗');\n          }\n\n          connection.release();\n        });\n      }\n    });\n  });\n};\n\nconst selectUser = () => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      // 資料庫連線\n      if (connectionError) {\n        reject(connectionError); // 若連線有問題回傳錯誤\n      } else {\n        connection.query( // Article撈取所有欄位的值組\n        `SELECT\n              *\n            FROM\n              user`, (error, result) => {\n          if (error) {\n            console.error('SQL error: ', error);\n            reject(error); // 寫入資料庫有問題時回傳錯誤\n          } else {\n            resolve(result); // 撈取成功回傳 JSON 資料\n          }\n\n          connection.release();\n        });\n      }\n    });\n  });\n};\n\nconst updateUser = (insertValues, userID) => {\n  return new Promise((reslove, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      if (connectionError) {\n        console.log('SQL Error');\n        reject(connectionError);\n      } else {\n        connection.query('UPDATE USER SET ? where user_id = ?', [insertValues, userID], (error, result) => {\n          if (error) {\n            reject(error);\n          } else if (result.message.match('Changed: 1')) {\n            reslove('成功更新');\n          } else {\n            reject('更新失敗');\n          }\n\n          connection.release();\n        });\n      }\n    });\n  });\n};\n\nconst deleteUser = userId => {\n  return new Promise((reslove, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      if (connectionError) {\n        console.log('SQL Error');\n        reject(connectionError);\n      } else {\n        connection.query('delete from user where user_id = ?', userId, (error, result) => {\n          if (error) {\n            reject(error);\n          } else if (result.affectedRows === 1) {\n            reslove('成功刪除');\n          } else {\n            reject('無變動');\n          }\n\n          connection.release();\n        });\n      }\n    });\n  });\n};\n\nconst selectUserLogin = insertValues => {\n  return new Promise((resolve, reject) => {\n    connectionPool.getConnection((connectionError, connection) => {\n      // 資料庫連線\n      if (connectionError) {\n        console.log('SQL Error');\n        reject(connectionError);\n      } else {\n        connection.query('SELECT * FROM User WHERE user_name = ?', insertValues.user_name, (error, result) => {\n          if (error) {\n            console.error('SQL error: ', error);\n            reject(error); // 寫入資料庫有問題時回傳錯誤\n          } else if (Object.keys(result).length === 0) {\n            reject(new _helper_AppError__WEBPACK_IMPORTED_MODULE_3__[\"default\"].LoginError1()); //查無名稱\n          } else {\n            const dbHashPassword = result[0].user_password; // 資料庫加密後的密碼\n\n            const userPassword = insertValues.user_password; // 使用者登入輸入的密碼\n\n            bcrypt__WEBPACK_IMPORTED_MODULE_2___default.a.compare(userPassword, dbHashPassword).then(res => {\n              // 使用bcrypt做解密驗證\n              if (res) {\n                const payload = {\n                  user_id: result[0].user_id,\n                  user_name: result[0].user_name,\n                  user_birthday: result[0].user_birthday\n                }; //這邊標記的名字my_secret_key 必須與 拿取的相符 也就是jwt.verify()這邊的名稱\n\n                const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default.a.sign({\n                  payload,\n                  exp: Math.floor(Date.now() / 1000) + 60 * 15\n                }, 'my_secret_key'); // resolve(Object.assign(\n                //   {code:200,},{message:'登入成功',token}));\n\n                const json = JSON.stringify({\n                  code: 200,\n                  message: \"成功登入\",\n                  token: token,\n                  data: {\n                    user: result[0].user_name\n                  }\n                });\n                resolve(json);\n              } else {\n                // resolve('您輸入的密碼有誤！');\n                reject(new _helper_AppError__WEBPACK_IMPORTED_MODULE_3__[\"default\"].LoginError2()); //密碼有誤\n              }\n            });\n          }\n\n          connection.release();\n        });\n      }\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  createUser,\n  selectUser,\n  deleteUser,\n  updateUser,\n  selectUserLogin\n});\n\n//# sourceURL=webpack:///./src/server/modules/user.module.js?");

/***/ }),

/***/ "./src/server/routes/article.route.js":
/*!********************************************!*\
  !*** ./src/server/routes/article.route.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_article_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/article.controller */ \"./src/server/controllers/article.controller.js\");\n/* harmony import */ var _config_param_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/param-validation */ \"./src/config/param-validation.js\");\n/* harmony import */ var express_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express-validation */ \"express-validation\");\n/* harmony import */ var express_validation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express_validation__WEBPACK_IMPORTED_MODULE_3__);\n// article.route.js\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.route('/').get(_controllers_article_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].articleGet).post(express_validation__WEBPACK_IMPORTED_MODULE_3___default()(_config_param_validation__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createActicle), _controllers_article_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].articlePost);\n/** 新增 Article 值組 */\n\nrouter.route('/:article_id').put(_controllers_article_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].articlePut).delete(_controllers_article_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].articleDelete);\n\nconst ensureToken = (req, res, next) => {\n  const bearerHeader = req.headers.authorization;\n\n  if (typeof bearerHeader !== 'undefined') {\n    const bearer = bearerHeader.split(' '); // 字串切割\n\n    const bearerToken = bearer[1]; // 取得 JWT\n\n    req.token = bearerToken; // 在response中建立一個token參數\n\n    next(); // 結束 Middleware 進入 articleCtrl.articlePersonalGet\n  } else {\n    res.status(403).send(Object.assign({\n      code: 403\n    }, {\n      message: '您尚未登入！'\n    })); // Header 查無 Rearer Token\n  }\n};\n\nrouter.get('/personal', ensureToken, _controllers_article_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].articlePersonalGet);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/server/routes/article.route.js?");

/***/ }),

/***/ "./src/server/routes/index.route.js":
/*!******************************************!*\
  !*** ./src/server/routes/index.route.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../config/config */ \"./src/config/config.js\");\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mysql */ \"mysql\");\n/* harmony import */ var mysql__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mysql__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _article_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./article.route */ \"./src/server/routes/article.route.js\");\n/* harmony import */ var _user_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.route */ \"./src/server/routes/user.route.js\");\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! http-status */ \"http-status\");\n/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(http_status__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router(); //3000/api\n\nrouter.get('/', (req, res) => {\n  res.send(`此路徑是: localhost:${_config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].port}/api`);\n}); //3000/api/sqlTest\n\nrouter.get('/sqlTest', (req, res) => {\n  const connectionPool = mysql__WEBPACK_IMPORTED_MODULE_2___default.a.createPool({\n    // 建立一個連線池\n    connectionLimit: 10,\n    // 限制池子連線人數\n    host: _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysqlHost,\n    // 主機名稱\n    user: _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysqlUserName,\n    // 用戶名稱 \n    password: _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysqlPass,\n    // 資料庫密碼\n    database: _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mysqlDatabase // 資料庫名稱\n\n  });\n  connectionPool.getConnection((err, connection) => {\n    //建立一個連線若錯誤回傳err\n    if (err) {\n      res.send(err);\n      console.log('連線失敗！');\n    } else {\n      res.send('連線成功！');\n      console.log(connection);\n    }\n  });\n}); // 3000/api/article\n\nrouter.use('/article', _article_route__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nrouter.use('/user', _user_route__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/server/routes/index.route.js?");

/***/ }),

/***/ "./src/server/routes/user.route.js":
/*!*****************************************!*\
  !*** ./src/server/routes/user.route.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/user.controller */ \"./src/server/controllers/user.controller.js\");\n/* harmony import */ var _config_param_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/param-validation */ \"./src/config/param-validation.js\");\n/* harmony import */ var express_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express-validation */ \"express-validation\");\n/* harmony import */ var express_validation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express_validation__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.route('/').post(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].userPost).get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].userGet);\nrouter.route('/:user_id').put(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].userPut).delete(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].userDelete);\nrouter.route('/login').post(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].userLogin);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/server/routes/user.route.js?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");\n\n//# sourceURL=webpack:///external_%22bcrypt%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-validation":
/*!*************************************!*\
  !*** external "express-validation" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-validation\");\n\n//# sourceURL=webpack:///external_%22express-validation%22?");

/***/ }),

/***/ "http-status":
/*!******************************!*\
  !*** external "http-status" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http-status\");\n\n//# sourceURL=webpack:///external_%22http-status%22?");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"joi\");\n\n//# sourceURL=webpack:///external_%22joi%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mysql\");\n\n//# sourceURL=webpack:///external_%22mysql%22?");

/***/ })

/******/ });