(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./resources/js/Pages/Bookmark/View/index.tsx":
/*!****************************************************!*\
  !*** ./resources/js/Pages/Bookmark/View/index.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inertia_1 = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var layout_1 = __importDefault(__webpack_require__(/*! ../../../components/common/layout */ "./resources/js/components/common/layout/index.tsx"));
var BookmarkViewPage = function (_a) {
    var bookmark = _a.bookmark;
    var handleSave = function (event) {
        event.preventDefault();
        inertia_1.Inertia.post('/bookmark/make-active', { id: bookmark.id });
    };
    return (react_1.default.createElement(layout_1.default, null,
        react_1.default.createElement("div", { className: "row" },
            react_1.default.createElement("div", { className: "col-md-6" }, bookmark.title && (react_1.default.createElement("div", { className: "card" },
                react_1.default.createElement("div", { className: "card-header" }, bookmark.title),
                react_1.default.createElement("div", { className: "card-body" },
                    react_1.default.createElement("p", null,
                        "Url: ",
                        bookmark.url),
                    react_1.default.createElement("p", null, bookmark.description),
                    react_1.default.createElement("div", { className: "mb-3" },
                        react_1.default.createElement("img", { src: bookmark.img_url, alt: bookmark.title, width: "100%" })),
                    react_1.default.createElement("button", { className: "btn btn-primary", onClick: handleSave }, "Save"))))))));
};
exports.default = BookmarkViewPage;


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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var nav_1 = __importDefault(__webpack_require__(/*! ../nav */ "./resources/js/components/common/nav/index.tsx"));
var Layout = function (_a) {
    var children = _a.children;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "mb-3" },
            React.createElement(nav_1.default, null)),
        React.createElement("div", { className: "container" }, children),
        ";"));
};
exports.default = Layout;


/***/ }),

/***/ "./resources/js/components/common/nav/index.tsx":
/*!******************************************************!*\
  !*** ./resources/js/components/common/nav/index.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var ziggy_js_1 = __importDefault(__webpack_require__(/*! ziggy-js */ "./node_modules/ziggy-js/dist/js/route.min.js"));
var Menu = function () {
    return (react_1.default.createElement("nav", { className: "navbar navbar-expand-md navbar-light bg-white shadow-sm" },
        react_1.default.createElement("div", { className: "container" },
            react_1.default.createElement("a", { className: "navbar-brand", href: "{{ url('/') }}" }, "Bookmark"),
            react_1.default.createElement("button", { className: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarSupportedContent", "aria-controls": "navbarSupportedContent", "aria-expanded": "false", "aria-label": "{{ __('Toggle navigation') }}" },
                react_1.default.createElement("span", { className: "navbar-toggler-icon" })),
            react_1.default.createElement("div", { className: "collapse navbar-collapse", id: "navbarSupportedContent" },
                react_1.default.createElement("ul", { className: "navbar-nav mr-auto" },
                    react_1.default.createElement("li", { className: "nav-item" },
                        react_1.default.createElement(inertia_react_1.InertiaLink, { className: "nav-link", href: ziggy_js_1.default('bookmark.index').url() }, "Bookmarks")),
                    react_1.default.createElement("li", { className: "nav-item" },
                        react_1.default.createElement(inertia_react_1.InertiaLink, { className: "nav-link", href: ziggy_js_1.default('bookmark.add').url() }, "Bookmark Add"))),
                react_1.default.createElement("ul", { className: "navbar-nav ml-auto" },
                    react_1.default.createElement("li", { className: "nav-item" },
                        react_1.default.createElement("a", { className: "nav-link", href: "#" }, "Logout")))))));
};
exports.default = Menu;


/***/ })

}]);