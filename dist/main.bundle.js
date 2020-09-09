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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/app.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/app.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"/* BEGIN - CSS RESET */\\nbody {\\n    margin: 0;\\n    background: repeating-linear-gradient(45deg, rgb(224, 54, 88) 0%, rgba(224, 54, 88) 60%, dodgerblue 100%);\\n    width: 100vw;\\n    height: auto;\\n    color: white;\\n    font-family: Arial, Helvetica, sans-serif;\\n    line-height: 25px;\\n    text-align: center;\\n}\\n/* END - CSS RESET */\\n\\n/* BEGIN - Navbar styles */\\nnav {\\n    background-color: rgba(255, 255, 255, 20%);\\n    /*background-color: green;*/\\n    margin-bottom: 2rem;\\n    height: 70px;\\n    width: 100vw;\\n    display: flex;\\n}\\n\\n\\n.navbar-brand img {\\n    padding: 20px 0 0 0;\\n    justify-content: center;\\n}\\n/* END - Navbar styles */\\n\\n/* BEGIN - Layout styles */\\n.container {\\n    max-width: 1280px;\\n    height: auto;\\n    margin: 0 auto;\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: center;\\n}\\n\\n#hero {\\n    padding-right: 30px;\\n    padding-bottom: 100px;\\n}\\n\\n\\n/* END - Layout styles */\\n\\n/* BEGIN - Form styles */\\n#submissionForm {\\n    padding-left: 30px;\\n    display: flex;\\n    flex-direction: column; \\n}\\n\\nh1 {\\n    font-size: 50px;\\n    line-height: 55px;\\n    margin-bottom: 0;\\n}\\n\\n.personalInfo {\\n     text-align: left;   \\n}\\n\\nlabel {\\n    margin-bottom: 5px;\\n}\\n\\n.personalInfo input{\\n    height: 50px;\\n    border-radius: 2px;\\n    border: none;\\n}\\n\\n#firstRow {\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: space-between;\\n    grid-column-gap: 25px;\\n\\n}\\n\\n#secondRow {\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: space-between;\\n    grid-column-gap: 25px;\\n}\\n\\n#thirdRow input{\\n    height: 230px;\\n    margin-bottom: 25px;\\n}\\n\\n\\n#buttonRow {\\n    display: flex;\\n    width: auto;\\n    justify-content: flex-end;\\n    grid-column-gap: 20px;\\n}\\n\\nbutton {    \\n    border-radius: 50px;\\n    width: auto;\\n    padding: 10px 20px;\\n    background-color: #74cc84;\\n    color: white;\\n    border: none;\\n    font-size: 20px;\\n    cursor: pointer;\\n}\\n\\n#click {\\n    display: none;\\n}\\n\\n\\n.hidden {\\n    display: none !important;\\n}\\n\\n.field {\\n    display: flex;\\n    flex-direction: column;\\n    flex-grow: 1;\\n}\\n\\n.field:not(:last-child) {\\n    margin-bottom: 2rem;\\n}\\n/* END - Form styles */\\n\\n\\n\\n/* BEGIN - Footer Styles */\\nfooter {\\n    height: 350px;\\n    display: flex;\\n    flex-direction: column;\\n    background-color: black;\\n    align-items: center;\\n}\\n\\n.colorStrip {\\n    width: 100vw;\\n    height: 20px;\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: space-evenly;\\n\\n}\\n\\n.blue {\\n    background-color: dodgerblue;\\n    flex-grow: 1;\\n}\\n\\n.orange {\\n    background-color: #f14819;\\n    flex-grow: 1;\\n}\\n\\n.yellow {\\n    background-color: gold;\\n    flex-grow: 1;\\n}\\n\\n\\n.green {\\n    background-color: #74cc84;\\n    flex-grow: 1;\\n}\\n\\n.crimson {\\n    background-color: rgb(224, 54, 88);\\n    flex-grow: 1;\\n}\\n\\n.footerContainer {\\n    width: 1280px;\\n    height: auto;\\n    display: flex;\\n    justify-content: flex-end;\\n}\\n\\n.footerContent {\\n    display: flex;\\n    flex-direction: row;\\n    grid-column-gap: 30px;\\n    margin: 40px 0;\\n    line-height: 0px;\\n}\\n\\nh5 {\\n    font-size: 16px;\\n}\\n\\n.text {\\n    text-align: right;\\n}\\n\\n\\n/* END - Footer Styles */\\n\\n\\n\\n/* BEGIN - Modal styles */\\n\\n\\n#modal {\\n    position: absolute;\\n    height: 180px;\\n    width: 1280px;\\n    border-radius: 10px;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    top: 50%;\\n    left: 50%;\\n    transform: translate(-50%, -50%);\\n    padding: 0 100px;\\n    margin: 0 100px;\\n    background-color: #74cc84;\\n    /* visibility: hidden; */\\n}\\n\\n/*#click > #buttonRow > #submissionForm > .container :checked ~ #modal {\\n    opacity: 1;\\n    visibility: visible;\\n}*/\\n\\n\\n/*&#10006;*/\\n#close{\\n    position: absolute;\\n    top: 20px;\\n    right: 20px;\\n    font-size: 20px;\\n    font-weight: bold;\\n    cursor: pointer;\\n}\\n\\n#modal .message {\\n    padding: 5rem;\\n    border-radius: 2rem;\\n    font-size: 1.5rem;\\n    text-transform: uppercase;\\n    color: white;\\n}\\n\\n\\n#modal .message.success {\\n    background-color: #74cc84;\\n}\\n\\n#modal .message.error {\\n    background-color: #f14819;\\n}\\n\\n/*#modal .close {\\n    font-size: 3rem;\\n    color: white;\\n    position: absolute;\\n    top: 20px;\\n    right: 30px;\\n    cursor: pointer;\\n}*/\\n\\n/* END - Modal styles */\\n\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/app.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/app.css":
/*!*********************!*\
  !*** ./src/app.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./app.css */ \"./node_modules/css-loader/dist/cjs.js!./src/app.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/app.css?");

/***/ }),

/***/ "./src/application.js":
/*!****************************!*\
  !*** ./src/application.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Application; });\nclass Application {\n\n    constructor() {\n        this.headers = {};\n        this.token = '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';\n        this.to = 'dev@arrayschool.com';\n        this.subject = 'An Apprentice has submitted their test';\n        this.content = {};\n        this.tags = [\n            'input',\n            'select',\n            'textarea'\n        ];\n    }\n\n    get from() {\n        return document.getElementById('fromEmail').value;\n    }\n\n    listen() {\n        document.getElementsByTagName('form')[0].addEventListener('input', this.handleChange.bind(this));\n        document.getElementById('submit').addEventListener('click', this.handleSend.bind(this));\n        document.getElementById('testSubmit').addEventListener('click', this.handleTestSend.bind(this));\n        document.querySelector('#modal .close').addEventListener('click', this.handleModalClose);\n    }\n\n    handleChange(e) {\n        if (this.tags.indexOf(e.target.tagName.toLowerCase()) != -1) {\n            this.content = Object.assign(this.content, {[e.target.name]: e.target.value});\n        }\n    }\n\n    handleModalClose() {\n        document.getElementById('modal').classList.add('hidden');\n    }\n\n    handleSend() {\n        const content = Object.entries(this.content)\n            .map(([key, value]) => `<div>${key}: ${value}</div>`)\n            .join('');\n        \n        fetch('http://localhost:3033/submitTest', {\n            method: 'POST',\n            headers: {\n                'Content-Type': 'application/json',\n            },\n            body: JSON.stringify({\n                'to': this.to,\n                'subject': this.subject,\n                'from': this.from,\n                'content': content\n            })\n        })\n        .then(res => {\n            console.log(res.status)\n            if (res.status === 200) {\n                Array.from(document.getElementById('submissionForm').elements).forEach((elem) => elem.value = '');\n                this.handleSendResponse(true);\n            } else {\n                this.handleSendResponse(false);\n            }\n        })\n        .catch(e => console.log(e))\n    }\n\n    handleTestSend() {\n        const content = Object.entries(this.content)\n            .map(([key, value]) => `<div>${key}: ${value}</div>`)\n            .join(''),\n            modal = document.getElementById('modal'),\n            message = document.querySelector('#modal .message');\n        message.innerHTML = '<h2>The data in your message will be</h2>' + content;\n        message.classList.add('success');\n        modal.classList.remove('hidden');\n    }\n\n    handleSendResponse(success) {\n        const s = success === true ? true : false;\n        const modal = document.getElementById('modal');\n        const message = document.querySelector('#modal .message');\n\n        message.innerText = s ? \n            'You did it! You are one step closer to becoming an Array Apprentice' :\n            'Whoops! Something went wrong. Take a look at the README.MD file in the root of this project to make sure you have followed all of the instructions';\n        if (s) {\n            message.classList.remove('error');\n            message.classList.add('success');\n        } else {\n            message.classList.remove('success');\n            message.classList.add('error');\n        }\n        modal.classList.remove('hidden');\n    }\n}\n\n//# sourceURL=webpack:///./src/application.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.css */ \"./src/app.css\");\n/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./application */ \"./src/application.js\");\n\n\n\nconst app = new _application__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\ndocument.addEventListener('DOMContentLoaded', () => app.listen());\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });