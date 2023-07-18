"use strict";
exports.id = 190;
exports.ids = [190];
exports.modules = {

/***/ 5658:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ NewsServices)
/* harmony export */ });
/* harmony import */ var _conf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2973);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_conf__WEBPACK_IMPORTED_MODULE_0__]);
_conf__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const NewsServices = {
    async getLastNews () {
        return _conf__WEBPACK_IMPORTED_MODULE_0__/* .instance.get */ .e.get("/articles?sort=createdAt:DESC&pagination[page]=1&pagination[pageSize]=3&pagination[withCount]=true&filters[type_post][$eq]=article&populate=preview_img");
    },
    async getNews () {
        return _conf__WEBPACK_IMPORTED_MODULE_0__/* .instance.get */ .e.get("/articles?sort=createdAt:DESC&pagination[page]=1&pagination[pageSize]=8&pagination[withCount]=true&filters[type_post][$eq]=article&populate=preview_img");
    },
    async getEvents () {
        return _conf__WEBPACK_IMPORTED_MODULE_0__/* .instance.get */ .e.get("/articles?sort=createdAt:DESC&pagination[page]=1&pagination[pageSize]=3&pagination[withCount]=true&filters[type_post][$eq]=event&populate=preview_img");
    },
    async getPostNews (id) {
        if (false) {}
        return _conf__WEBPACK_IMPORTED_MODULE_0__/* .instance.get */ .e.get(`/articles/${id}/`);
    },
    async getPosts (filter, currentPage, pageSize) {
        return _conf__WEBPACK_IMPORTED_MODULE_0__/* .instance.get */ .e.get(`/articles?sort=createdAt:DESC&pagination[page]=${currentPage}&pagination[pageSize]=${pageSize}&pagination[withCount]=true&filters[type_post][$eq]=${filter}&populate=preview_img`);
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const convertDate = (source_date)=>{
    const date = new Date(source_date);
    const options = {
        month: "long",
        year: "numeric"
    };
    // @ts-ignore
    const result_date = date.toLocaleDateString("ru", options);
    return result_date.slice(0, -3);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (convertDate);


/***/ })

};
;