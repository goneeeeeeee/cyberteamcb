"use strict";
exports.id = 493;
exports.ids = [493];
exports.modules = {

/***/ 6495:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports.Z = _extends;
function _extends() {
    return extends_.apply(this, arguments);
}
function extends_() {
    extends_ = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return extends_.apply(this, arguments);
}


/***/ }),

/***/ 2648:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
exports.Z = _interopRequireDefault;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}


/***/ }),

/***/ 4260:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const ItemPagination = ({ isActive , item  })=>{
    return /*#__PURE__*/ _jsx("div", {
        children: /*#__PURE__*/ _jsx("span", {
            className: `${isActive && "text-purpule"}`,
            children: item
        })
    });
};
const Pagination = ({ currentPage , pageSize , pageCount , total , maxRange =2 , onChange ,  })=>{
    const toShowPages = 5;
    const onClickPrevBtn = (currentPage)=>{
        if (currentPage <= 1) return;
        onChange(--currentPage);
        return;
    };
    const onClickNextBtn = (currentPage)=>{
        if (currentPage >= pageCount) return;
        onChange(++currentPage);
        return;
    };
    const range = (start, end)=>{
        const length = end - start + 1;
        return Array.from({
            length
        }, (_, idx)=>idx + start);
    };
    const renderPages = ()=>{
        const totalPageNumbers = maxRange + toShowPages;
        const leftRangeIndex = Math.max(currentPage - maxRange, 1);
        const rightRangeIndex = Math.min(currentPage + maxRange, pageCount);
        // if (totalPageNumbers >= pageCount) {
        //   return range();
        // }
        return range(leftRangeIndex, rightRangeIndex);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: ()=>onClickPrevBtn(currentPage),
                    className: "bg-transparent mr-8 group",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "group-hover:[&>svg>path]:fill-purpule",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            className: "",
                            width: "8",
                            height: "14",
                            viewBox: "0 0 8 14",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M8 2L3 7L8 12L7 14L0 7L7 0L8 2Z",
                                fill: "white"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex gap-5",
                    children: renderPages().map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>onChange(item),
                            className: `bg-transparent ${item === currentPage && "text-purpule text-[16px]"}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: item
                            })
                        }, item))
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: ()=>onClickNextBtn(currentPage),
                    className: "bg-transparent ml-8 group",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "group-hover:[&>svg>path]:fill-purpule",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            width: "8",
                            height: "14",
                            viewBox: "0 0 8 14",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M1.74846e-07 12L5 7L1.04907e-06 2L1 -6.11959e-07L8 7L1 14L1.74846e-07 12Z",
                                fill: "white"
                            })
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);


/***/ }),

/***/ 2126:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_cards_CardNews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7805);
/* harmony import */ var _utils_convertDate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3811);
/* harmony import */ var _services_news__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5658);
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4260);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_news__WEBPACK_IMPORTED_MODULE_4__]);
_services_news__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const ContentTab = ({ content , filter , pageSize , stylesContentContainer ,  })=>{
    const { 0: currentPage , 1: setCurrentPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const { data: response , isLoading , isFetched ,  } = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)([
        content,
        currentPage
    ], ()=>_services_news__WEBPACK_IMPORTED_MODULE_4__/* .NewsServices.getPosts */ .H.getPosts(filter, currentPage, pageSize), {
        select: ({ data  })=>{
            return {
                ...data.meta,
                data: data.data.map((item)=>{
                    return {
                        id: item.id,
                        ...item.attributes,
                        date: (0,_utils_convertDate__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(item.attributes.publishedAt),
                        img: item.attributes.preview_img.data?.attributes.url ?? ""
                    };
                })
            };
        },
        keepPreviousData: true
    });
    const onPageChange = (newPage)=>{
        setCurrentPage(newPage);
        window.scroll(0, 0);
    };
    return isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${stylesContentContainer} mb-[30px] md:mb-[60px]`,
                children: response?.data.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cards_CardNews__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        id: item.id,
                        title: item.title,
                        subTitle: item.date,
                        imageUrl: `${"https://www.sstu.ru"}${item.img}`,
                        url: item.img
                    }, item.id))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex justify-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pagination__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    currentPage: currentPage,
                    pageCount: response?.pagination.pageCount,
                    // pageCount={10}
                    total: response?.pagination.total,
                    onChange: onPageChange,
                    pageSize: response?.pagination.pageSize
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentTab);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;