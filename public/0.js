(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./resources/js/Pages/Home/index.tsx":
/*!*******************************************!*\
  !*** ./resources/js/Pages/Home/index.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var layout_1 = __importDefault(__webpack_require__(/*! ../../components/common/layout */ "./resources/js/components/common/layout/index.tsx"));
var Home = function () {
    var foo = 'React';
    var bar = 'TypeScript';
    return (react_1.default.createElement(layout_1.default, { title: "testReact" },
        react_1.default.createElement("p", null,
            "Hello ",
            foo,
            " + ",
            bar)));
};
exports.default = Home;


/***/ }),

/***/ "./resources/js/components/common/layout/index.tsx":
/*!*********************************************************!*\
  !*** ./resources/js/components/common/layout/index.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var Layout = function (props) {
    var title = props.title, children = props.children;
    return (React.createElement("div", { className: "container" },
        title && (React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col-sm-12" },
                React.createElement("h1", null, title)))),
        React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col-sm-12" }, children))));
};
exports.default = Layout;


/***/ })

}]);