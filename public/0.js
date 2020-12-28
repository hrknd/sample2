(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./resources/js/Pages/Bookmark/List/index.tsx":
/*!****************************************************!*\
  !*** ./resources/js/Pages/Bookmark/List/index.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var BookmarkListPage = function (_a) {
    var bookmarks = _a.bookmarks;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("ul", { className: "list-group" }, bookmarks.length > 0 &&
            bookmarks.map(function (bookmark, index) {
                return (react_1.default.createElement("li", { className: "list-group-item", key: index },
                    react_1.default.createElement("p", null,
                        "Title:",
                        bookmark.title)));
            }))));
};
exports.default = BookmarkListPage;


/***/ })

}]);