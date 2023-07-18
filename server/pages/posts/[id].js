"use strict";
(() => {
var exports = {};
exports.id = 646;
exports.ids = [646];
exports.modules = {

/***/ 2035:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1774);
/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7740);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([remark__WEBPACK_IMPORTED_MODULE_1__, remark_html__WEBPACK_IMPORTED_MODULE_2__]);
([remark__WEBPACK_IMPORTED_MODULE_1__, remark_html__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const useParseMarkDown = (content)=>{
    const { 0: contentHtml , 1: setContentHtml  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    (async ()=>{
        const processedContent = await (0,remark__WEBPACK_IMPORTED_MODULE_1__.remark)().use(remark_html__WEBPACK_IMPORTED_MODULE_2__["default"]).process(content);
        setContentHtml(processedContent.toString());
    })();
    return {
        contentHtml
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useParseMarkDown);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5556:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_news__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5658);
/* harmony import */ var _hooks_useParseMarkDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2035);
/* harmony import */ var _utils_convertDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3811);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_news__WEBPACK_IMPORTED_MODULE_3__, _hooks_useParseMarkDown__WEBPACK_IMPORTED_MODULE_4__]);
([_services_news__WEBPACK_IMPORTED_MODULE_3__, _hooks_useParseMarkDown__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const getServerSideProps = (context)=>{
    // const { id } = context.params;
    return {
        props: {}
    };
};
const BannerImage = ()=>{
    return /*#__PURE__*/ _jsx(_Fragment, {});
};
const ContentBlock = ({ title , content , date  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "container-base py-[60px]",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "section-title",
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "block mb-[40px] text-lightGray leading-[2em]",
                children: date
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                dangerouslySetInnerHTML: {
                    __html: content
                },
                className: "[&>p>a]:text-purpule [&>p>a]:underline leading-[2em]"
            })
        ]
    });
};
const DetailEvent = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { id  } = router.query;
    const { data: response , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)([
        "detail-post",
        id
    ], ()=>_services_news__WEBPACK_IMPORTED_MODULE_3__/* .NewsServices.getPostNews */ .H.getPostNews(id), {
        select: ({ data  })=>{
            return {
                id: data.data.id,
                ...data.data.attributes,
                date: (0,_utils_convertDate__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(data.data.attributes.publishedAt)
            };
        }
    });
    const { contentHtml  } = (0,_hooks_useParseMarkDown__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(response?.content);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "min-h-screen"
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ContentBlock, {
            title: response.title,
            content: contentHtml,
            date: response.date
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetailEvent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2973:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ instance)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const API_URL = `${"https://www.sstu.ru"}/api`;
const instance = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: API_URL
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1175:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 1774:
/***/ ((module) => {

module.exports = import("remark");;

/***/ }),

/***/ 7740:
/***/ ((module) => {

module.exports = import("remark-html");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [190], () => (__webpack_exec__(5556)));
module.exports = __webpack_exports__;

})();