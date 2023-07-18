"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ useScrollBlock)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useScrollBlock = ()=>{
    const scroll = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    const blockScroll = ()=>{
        if (typeof document === "undefined") return;
        const html = document.documentElement;
        const { body  } = document;
        if (!body || !body.style || scroll.current) return;
        const scrollBarWidth = window.innerWidth - html.clientWidth;
        const bodyPaddingRight = parseInt(window.getComputedStyle(body).getPropertyValue("padding-right")) || 0;
        html.style.position = "relative";
        html.style.overflow = "hidden";
        body.style.position = "relative";
        body.style.overflow = "hidden";
        body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`;
        scroll.current = true;
    };
    const allowScroll = ()=>{
        if (typeof document === "undefined") return;
        const html = document.documentElement;
        const { body  } = document;
        if (!body || !body.style || !scroll.current) return;
        html.style.position = "";
        html.style.overflow = "";
        body.style.position = "";
        body.style.overflow = "";
        body.style.paddingRight = "";
        scroll.current = false;
    };
    return [
        blockScroll,
        allowScroll
    ];
};



/***/ }),

/***/ 4115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app),
  "queryClient": () => (/* binding */ queryClient)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(1175);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./src/config/seo.config.ts
const siteName = "CyberSport";
const titleMerge = (title)=>`${title} | ${siteName}`;

;// CONCATENATED MODULE: ./src/utils/meta/Meta.tsx




const Meta = ({ title , description , image  })=>{
    const { asPath  } = (0,router_.useRouter)();
    const currentUrl = `${process.env.APP_URL}${asPath}`;
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    itemProp: "headline",
                    children: titleMerge(title)
                }),
                description ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            itemProp: "description",
                            name: "description",
                            content: description
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "canonical",
                            href: currentUrl
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            property: "og:locale",
                            content: "ru"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            property: "og:title",
                            content: titleMerge(title)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            property: "og:url",
                            content: currentUrl
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            property: "og:image",
                            content: image
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            property: "og:site_name",
                            content: siteName
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            property: "og:description",
                            content: description
                        })
                    ]
                }) : /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "robots",
                    content: "noindex, nofollow"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "icon",
                    type: "image/png",
                    sizes: "16x16",
                    href: "/favicon/favicon-16x16.png"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "icon",
                    type: "image/png",
                    sizes: "32x32",
                    href: "/favicon/favicon-32x32.png"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "apple-touch-icon",
                    sizes: "180x180",
                    href: "/favicon/apple-touch-icon.png"
                })
            ]
        })
    });
};
/* harmony default export */ const meta_Meta = (Meta);

// EXTERNAL MODULE: ./src/hooks/useScrollBlock.ts
var useScrollBlock = __webpack_require__(8486);
;// CONCATENATED MODULE: ./src/components/loading/index.tsx

const LoadPage = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "text-[40px] absolute top-[116px] w-full h-screen left-0 z-50 bg-main-bg flex justify-center items-center transition-opacity duraion-200 overflow-hidden",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "mt-[-10%] [transform-style:preserve-3d] animate-flipFlap",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                version: "1.0",
                xmlns: "http://www.w3.org/2000/svg",
                width: "200.000000pt",
                height: "800.000000pt",
                viewBox: "0 0 200.000000 800.000000",
                preserveAspectRatio: "xMidYMid meet",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("metadata", {
                        children: "Created by potrace 1.16, written by Peter Selinger 2001-2019"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("g", {
                        transform: "translate(0.000000,800.000000) scale(0.039063,-0.156250)",
                        fill: "#000000",
                        stroke: "none",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M3610 4313 l0 -618 -36 -23 c-19 -13 -74 -37 -122 -53 -48 -17 -125 -48 -171 -70 -46 -21 -96 -39 -110 -39 -44 0 -99 -19 -130 -45 -24 -21 -39 -25 -94 -25 l-65 0 24 58 c38 93 27 206 -25 245 -12 9 -17 32 -19 87 -4 109 -23 177 -121 439 -49 130 -101 273 -116 319 -33 102 -60 127 -103 96 -35 -26 -106 -169 -133 -270 -15 -58 -22 -122 -26 -237 -5 -139 -8 -157 -22 -153 -41 13 -166 36 -194 36 -30 0 -33 3 -54 63 -12 34 -51 114 -86 177 -67 121 -80 152 -121 290 -44 147 -75 183 -141 166 -35 -9 -61 -59 -120 -238 -73 -222 -96 -341 -99 -508 l-2 -135 -42 -82 c-48 -95 -86 -186 -148 -360 -57 -160 -77 -198 -133 -256 -60 -63 -97 -81 -225 -112 -58 -13 -123 -33 -143 -44 -83 -43 -169 -137 -251 -276 -89 -151 -356 -809 -404 -995 -77 -300 -3 -494 214 -562 107 -33 261 -19 462 41 100 29 100 29 125 10 13 -11 55 -29 94 -40 78 -24 182 -23 231 3 24 13 35 13 84 0 90 -23 207 -5 472 74 124 36 270 79 325 94 l100 27 65 -50 c147 -113 290 -142 420 -86 24 11 51 26 60 34 14 13 22 11 65 -10 60 -31 135 -33 185 -7 20 11 68 22 110 25 122 10 354 97 467 175 16 11 50 33 78 50 59 37 69 30 63 -46 -3 -41 -1 -47 17 -47 16 0 21 10 28 52 5 29 12 53 17 53 5 0 8 -8 8 -17 -3 -36 24 -93 55 -119 18 -15 43 -47 57 -72 44 -80 111 -97 253 -67 38 8 96 28 130 45 43 22 85 33 146 40 156 18 228 47 314 129 95 90 141 218 140 391 -1 265 -97 511 -264 679 -50 50 -135 101 -168 101 -11 0 -11 4 2 18 56 61 77 196 43 274 l-16 37 64 -44 c83 -59 185 -97 258 -99 51 -1 61 3 85 27 26 26 28 33 27 110 -1 94 -20 158 -119 413 -77 196 -95 233 -142 285 -52 58 -95 76 -208 88 -63 8 -120 21 -159 38 -34 14 -90 33 -125 42 l-63 16 6 75 c8 103 33 434 41 551 6 80 4 97 -9 108 -26 22 -45 -3 -49 -67 -2 -31 -4 48 -5 176 l-2 232 -25 0 c-20 0 -25 -6 -29 -32 -3 -18 -8 -262 -11 -542 -4 -280 -9 -514 -11 -521 -3 -7 -26 -26 -52 -43 -26 -17 -58 -42 -70 -55 -23 -24 -25 -25 -64 -11 -47 16 -180 19 -209 4 -19 -11 -19 -2 -19 473 0 266 -3 539 -7 605 -6 119 -7 122 -30 122 l-23 0 0 -617z m-1030 255 c12 -40 60 -173 106 -295 91 -241 119 -334 129 -430 6 -57 5 -63 -12 -63 -31 0 -146 60 -178 93 -17 18 -70 50 -118 72 -104 48 -102 43 -94 249 4 112 10 159 31 229 33 112 84 217 106 217 4 0 17 -33 30 -72z m1364 -913 c55 -27 59 -27 71 -11 12 16 15 15 39 -6 22 -18 28 -35 33 -81 l6 -58 -129 6 c-80 5 -159 3 -208 -4 -44 -6 -80 -10 -82 -9 -1 2 -4 41 -6 88 -3 81 -2 84 22 97 17 10 51 13 110 10 68 -3 97 -10 144 -32z m-322 -108 l4 -67 -36 -10 c-95 -25 -90 -25 -90 10 0 25 -4 31 -17 28 -13 -2 -19 -14 -21 -39 -2 -27 -9 -39 -28 -48 -35 -16 -43 -14 -64 12 -24 29 -49 12 -31 -22 11 -19 6 -23 -61 -57 -92 -46 -170 -96 -230 -146 -27 -22 -48 -38 -48 -35 0 35 35 188 50 217 27 53 51 64 145 66 65 1 81 5 83 18 4 21 71 54 187 95 50 18 104 41 120 51 34 22 32 25 37 -73z m-1856 46 l63 -36 7 -99 c6 -88 15 -120 31 -105 2 3 0 29 -5 59 -6 29 -13 73 -17 97 l-6 44 23 -17 c65 -48 288 -136 383 -152 22 -3 45 -11 50 -18 13 -14 44 -16 305 -20 l214 -3 9 -34 c14 -54 2 -139 -31 -212 -38 -83 -127 -179 -187 -202 -53 -21 -84 -9 -170 61 -128 106 -201 126 -430 123 -121 -2 -161 1 -207 15 -107 34 -158 98 -180 225 -23 132 21 310 76 311 5 0 37 -17 72 -37z m2283 -139 c30 -6 31 -8 31 -59 l0 -53 -54 1 c-59 2 -61 14 -6 37 30 12 40 42 20 55 -16 10 -104 -43 -148 -88 -23 -23 -69 -84 -104 -136 -59 -89 -90 -122 -102 -110 -3 3 -8 80 -12 171 l-7 167 39 6 c21 4 44 8 49 10 18 6 262 5 294 -1z m187 -55 c72 -41 150 -127 185 -205 37 -81 33 -107 -6 -39 -47 83 -55 95 -66 95 -40 0 -3 -103 63 -175 40 -44 48 -58 42 -79 -8 -32 -29 -50 -89 -77 -42 -18 -61 -21 -134 -16 -123 7 -121 6 -121 92 l0 73 36 6 c29 6 35 11 32 29 -2 17 -9 22 -31 20 -27 -2 -27 -1 -27 63 0 57 2 64 20 64 24 0 27 32 5 50 -11 9 -15 32 -15 77 l0 65 28 -7 c15 -3 50 -20 78 -36z m-614 -126 c2 -87 2 -160 0 -162 -5 -9 -55 46 -72 79 -20 41 -40 126 -40 175 0 32 3 35 48 49 26 8 50 15 54 15 4 1 8 -70 10 -156z m-159 49 c13 -121 66 -220 139 -258 23 -12 29 -21 26 -41 -3 -22 -11 -28 -58 -40 -68 -17 -145 -63 -209 -124 -58 -56 -126 -153 -116 -168 12 -21 34 -11 56 27 27 43 118 142 131 142 5 0 0 -12 -11 -26 -48 -61 -33 -157 30 -189 41 -22 144 -25 144 -6 0 10 -20 19 -64 27 -46 8 -70 18 -83 34 -32 40 -20 62 47 86 33 11 79 31 103 43 l42 21 0 -80 c0 -47 -5 -89 -12 -101 -11 -17 -10 -22 5 -33 30 -23 19 -44 -47 -91 -92 -66 -149 -89 -200 -81 -78 13 -116 61 -116 149 0 68 -16 73 -66 22 -24 -24 -64 -51 -90 -61 -42 -16 -48 -16 -79 -1 -19 9 -45 33 -59 54 -25 38 -25 38 -10 118 8 44 17 139 21 210 8 157 18 180 69 155 40 -18 41 -23 9 -38 -32 -15 -57 -65 -59 -121 -1 -41 2 -46 22 -49 17 -3 22 1 22 20 0 43 21 98 40 108 19 10 19 9 -1 -33 -26 -54 -20 -117 15 -170 l24 -35 -21 -21 c-20 -19 -20 -22 -5 -37 15 -15 20 -13 69 24 30 22 88 60 129 85 87 53 124 88 125 121 1 13 12 38 26 57 21 30 24 45 24 119 -1 70 -6 97 -29 154 -24 56 -27 70 -15 77 23 15 26 11 32 -49z m-66 -47 c15 -35 28 -88 31 -125 4 -60 2 -68 -23 -98 -18 -21 -36 -32 -53 -32 -33 0 -97 29 -154 68 -24 16 -62 39 -86 51 -23 12 -40 26 -37 31 18 30 267 174 287 168 6 -2 21 -31 35 -63z m663 -276 l0 -62 -32 7 c-79 14 -212 55 -198 60 25 9 204 55 218 56 8 0 12 -19 12 -61z m-2171 19 c0 -7 -12 -116 -27 -243 -23 -198 -29 -230 -44 -233 -15 -3 -18 4 -18 50 0 58 34 366 45 411 7 27 46 40 44 15z m379 -4 l22 -6 -2 -232 c-3 -211 -5 -231 -20 -234 -12 -2 -18 3 -18 14 0 16 -1 16 -15 -2 -10 -13 -14 -15 -15 -5 0 8 -6 22 -13 30 -9 12 -11 69 -9 229 3 210 4 212 25 212 12 0 32 -3 45 -6z m2252 -71 c39 -83 30 -157 -27 -242 -27 -39 -49 -59 -83 -73 -55 -24 -145 -91 -161 -119 -8 -15 -8 -24 0 -32 8 -8 21 -1 49 25 131 127 241 131 360 15 162 -157 253 -388 255 -642 2 -159 -34 -267 -117 -353 -69 -73 -148 -105 -300 -122 -62 -7 -104 -19 -160 -46 -82 -39 -200 -63 -250 -50 -15 4 -39 19 -53 34 l-25 27 44 8 c112 19 156 40 137 63 -8 10 -18 10 -52 -2 -42 -15 -140 -24 -151 -13 -3 3 -11 40 -18 83 -14 91 -14 90 73 100 114 11 159 43 159 112 0 70 -20 83 -126 82 -79 -2 -88 0 -105 21 -50 61 9 141 116 158 67 11 154 -51 212 -152 16 -27 37 -51 46 -53 22 -4 22 21 1 53 -16 24 -15 26 15 54 17 16 38 46 47 67 28 68 16 199 -17 178 -5 -3 -9 -35 -9 -71 0 -68 -17 -118 -50 -148 -18 -16 -20 -15 -55 24 -20 22 -61 52 -91 67 -63 31 -117 29 -189 -6 -69 -33 -71 -32 -79 73 -3 50 -9 155 -13 233 l-6 140 32 44 c31 43 40 83 21 95 -5 3 -20 -11 -32 -32 l-23 -38 -6 35 c-7 45 -6 47 36 54 92 18 178 82 195 147 12 43 7 59 -16 59 -22 0 -15 64 7 68 22 4 59 -48 66 -92 4 -29 0 -39 -32 -74 -35 -39 -39 -62 -11 -62 14 0 59 45 75 77 15 29 14 67 -2 106 l-14 32 77 1 c90 1 153 26 197 79 15 18 31 34 34 34 3 1 12 -11 19 -26z m-580 -25 c63 -19 114 -38 114 -43 -16 -120 -16 -118 5 -112 51 13 -5 -70 -68 -103 -39 -19 -145 -43 -243 -55 l-58 -6 0 34 c0 22 7 40 22 53 11 10 34 39 50 63 50 79 30 156 -47 181 -19 6 -35 16 -35 22 0 19 139 1 260 -34z m-1325 -105 c24 -155 79 -302 137 -368 35 -39 45 -45 80 -45 32 0 46 6 68 30 l28 30 21 -35 c21 -36 118 -105 177 -127 40 -14 41 -20 10 -61 -33 -45 -63 -107 -76 -159 -11 -41 -15 -46 -53 -57 -23 -7 -58 -23 -78 -36 l-36 -24 -78 162 c-43 89 -110 225 -148 302 -38 77 -75 161 -83 187 -8 25 -30 70 -49 98 -19 29 -35 58 -35 64 0 23 66 72 102 75 4 1 10 -16 13 -36z m1233 -300 l-3 -68 -46 -23 c-71 -35 -136 -39 -219 -12 -50 16 -74 20 -82 12 -23 -23 99 -72 181 -72 39 1 101 17 162 44 14 6 17 -10 23 -131 4 -76 9 -173 13 -215 6 -76 5 -78 -16 -78 -29 0 -58 -16 -104 -56 l-37 -34 -148 0 -147 0 -22 39 c-28 48 -91 81 -156 81 l-47 0 1 63 c2 119 13 182 31 185 26 5 53 -45 55 -104 1 -64 9 -80 29 -63 20 17 17 96 -5 146 -12 26 -34 51 -58 66 l-38 24 3 117 c2 64 7 116 11 116 4 0 13 -16 20 -35 20 -56 80 -90 155 -90 67 1 91 11 200 84 59 39 80 47 150 57 45 6 85 12 89 13 4 0 7 -29 5 -66z m-852 32 c43 -29 103 -33 148 -10 15 8 30 15 32 15 2 0 4 -45 4 -100 0 -113 -6 -123 -62 -94 -68 35 -119 76 -137 112 -19 39 -36 102 -27 102 3 0 22 -11 42 -25z m-801 -408 c3 -12 5 -56 3 -97 l-3 -75 -36 -9 c-51 -13 -86 -1 -109 37 -37 59 -20 115 44 147 56 27 94 27 101 -3z m134 3 c24 -11 65 -36 91 -55 26 -19 53 -35 59 -35 6 0 18 -14 26 -31 13 -24 14 -34 4 -45 -9 -12 -4 -25 28 -72 72 -103 77 -160 22 -247 -42 -66 -108 -105 -180 -105 -75 0 -97 18 -101 84 l-3 48 64 34 c36 19 80 48 98 66 54 52 70 137 24 125 -13 -3 -29 6 -48 25 -47 49 -90 71 -127 65 l-33 -5 -7 60 c-10 100 -9 108 17 108 12 0 42 -9 66 -20z m-343 -146 c-8 -75 3 -102 55 -133 27 -17 28 -19 12 -33 -24 -20 -87 -40 -266 -83 -156 -37 -225 -44 -232 -22 -2 6 -6 47 -10 90 l-6 78 30 -22 31 -23 92 18 c139 26 232 58 236 80 4 20 -2 20 -92 0 -28 -7 -29 -6 -22 22 4 16 15 37 25 47 22 22 86 46 125 47 l29 0 -7 -66z m-719 -9 c75 -38 124 -119 109 -179 -9 -38 -45 -40 -129 -6 -91 36 -147 40 -147 10 0 -11 4 -20 9 -20 5 0 7 -27 4 -59 -10 -104 35 -148 200 -194 107 -30 139 -56 135 -106 -2 -27 -11 -41 -37 -58 -65 -44 -186 -21 -288 53 -64 45 -73 49 -84 33 -13 -22 36 -65 123 -109 42 -21 95 -41 117 -45 48 -8 54 -28 14 -49 -67 -34 -181 -27 -264 15 -48 24 -103 89 -117 138 -7 21 -12 73 -12 115 0 44 -4 76 -10 76 -13 0 -13 73 2 144 9 45 16 60 34 66 13 5 30 23 39 41 26 50 96 120 140 140 55 25 102 24 162 -6z m1883 -84 c0 -52 -4 -82 -13 -89 -7 -6 -44 -12 -82 -14 -55 -2 -70 -6 -70 -18 0 -9 -10 -28 -22 -43 -12 -16 -24 -41 -28 -57 -4 -16 -14 -32 -24 -35 -10 -3 -26 -14 -36 -25 -16 -18 -16 -20 -1 -26 9 -3 33 2 54 12 21 11 59 19 89 19 67 0 103 -30 103 -86 0 -45 -17 -64 -69 -80 -104 -31 -211 46 -211 151 0 51 27 116 58 144 19 16 21 26 15 76 -3 36 -1 65 7 79 18 35 105 71 173 71 l57 0 0 -79z m-802 30 c58 -43 60 -51 22 -83 -27 -22 -31 -31 -22 -40 10 -10 19 -8 45 7 l32 18 -20 -22 c-17 -20 -84 -61 -98 -61 -3 0 -4 8 -3 18 1 12 -6 17 -21 16 -19 0 -23 5 -22 30 l0 31 16 -22 c16 -24 38 -30 48 -13 10 15 -46 82 -63 75 -11 -4 -13 0 -8 17 3 13 6 28 6 35 0 10 12 16 41 22 3 0 24 -12 47 -28z m1535 -15 c3 -8 -7 -28 -24 -45 -30 -32 -36 -59 -19 -91 14 -26 -25 -52 -89 -58 -45 -4 -48 -3 -47 19 1 18 -5 25 -21 27 -22 3 -28 -6 -24 -35 1 -7 -7 -13 -17 -13 -26 0 -18 46 9 53 23 6 25 35 4 43 -17 7 -48 -14 -40 -26 3 -4 -5 -10 -16 -13 -17 -5 -20 -11 -17 -31 5 -24 2 -26 -26 -25 -17 0 -25 3 -18 6 6 2 12 13 12 23 0 10 9 20 21 23 30 8 21 42 -11 42 -16 0 -25 -6 -25 -15 0 -8 -8 -18 -17 -22 -21 -8 -24 -44 -5 -51 6 -3 -6 -6 -28 -6 -30 -1 -36 2 -27 11 7 7 12 20 12 30 0 10 6 18 14 18 23 0 30 20 13 38 -13 13 -19 13 -32 2 -9 -7 -14 -19 -11 -26 2 -6 -5 -14 -16 -17 -15 -4 -19 -11 -15 -28 6 -21 4 -21 -59 -16 -36 2 -67 7 -70 10 -3 3 6 16 20 30 15 15 26 38 26 52 0 14 4 24 8 21 5 -3 89 -6 188 -8 194 -2 193 -2 263 57 45 37 75 44 84 21z m-2672 -146 c5 0 9 -11 9 -24 0 -14 11 -38 24 -53 22 -26 30 -28 98 -28 50 0 84 6 107 18 49 24 71 15 71 -31 0 -20 3 -48 7 -61 5 -21 4 -22 -15 -12 -31 16 -57 13 -77 -9 -22 -24 -34 -18 -28 14 6 30 -27 66 -62 66 -25 0 -65 -31 -65 -50 0 -18 -73 19 -102 50 -30 32 -34 62 -18 105 7 19 15 25 26 21 9 -3 20 -6 25 -6z m852 -14 c3 -8 31 -31 61 -50 47 -30 96 -89 84 -102 -5 -4 -518 -148 -565 -159 -33 -7 -33 -6 -33 32 0 21 9 65 21 98 11 32 18 67 16 76 -6 21 -13 19 166 59 76 18 155 38 175 45 49 18 69 18 75 1z m1652 -90 c5 -1 -42 -28 -105 -59 -105 -52 -277 -107 -332 -107 -33 0 -18 70 27 129 l38 49 181 -5 c99 -2 185 -6 191 -7z m-1095 -81 c-1 -121 -143 -217 -253 -172 -39 17 -56 36 -59 67 -3 22 -1 23 60 21 79 -3 133 21 193 87 46 50 59 49 59 -3z m1130 23 c0 -18 -160 -119 -255 -161 -120 -53 -202 -78 -282 -84 -80 -6 -79 -7 -67 54 l6 30 96 7 c123 8 286 56 402 118 96 51 100 53 100 36z m-1501 -75 c23 -83 20 -87 -71 -112 -46 -13 -180 -52 -298 -87 -296 -89 -425 -108 -505 -78 -29 11 -17 43 23 59 20 9 51 30 68 46 42 41 83 38 98 -8 16 -46 31 -59 50 -44 14 11 14 15 0 37 -9 13 -14 29 -12 35 2 6 114 41 248 78 135 37 274 77 310 88 36 12 68 21 72 22 4 1 12 -16 17 -36z m676 -104 c38 -17 60 -20 102 -16 46 5 55 3 64 -14 35 -67 -83 -116 -171 -71 -36 18 -68 77 -57 107 8 19 5 19 62 -6z"
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const loading = (LoadPage);

;// CONCATENATED MODULE: ./src/pages/_app.tsx





const MainLayout = dynamic_default()(()=>__webpack_require__.e(/* import() */ 220).then(__webpack_require__.bind(__webpack_require__, 220)), {
    loadableGenerated: {
        modules: [
            "_app.tsx -> " + "../components/layouts/MainLayout"
        ]
    }
});






// const Header = dynamic(() => import("../components/header"), { ssr: false });
function Loading() {
    const router = (0,router_.useRouter)();
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(false);
    const [blockScroll, allowScroll] = (0,useScrollBlock/* useScrollBlock */.h)();
    (0,external_react_.useEffect)(()=>{
        const handleStart = (url)=>{
            setLoading(true);
            blockScroll();
        };
        const handleComplete = (url)=>setTimeout(()=>{
                setLoading(false);
                allowScroll();
            }, 500);
        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleComplete);
        router.events.on("routeChangeError", handleComplete);
        return ()=>{
            router.events.off("routeChangeStart", handleStart);
            router.events.off("routeChangeComplete", handleComplete);
            router.events.off("routeChangeError", handleComplete);
        };
    }, [
        router.events,
        router.asPath,
        allowScroll,
        blockScroll
    ]);
    return loading ? true : false;
}
const queryClient = new external_react_query_.QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
});
function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_query_.QueryClientProvider, {
            client: queryClient,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(meta_Meta, {
                    title: "СГТУ ПРАК",
                    description: "СГТУ ПРАКТИС"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(MainLayout, {
                    children: Loading() ? /*#__PURE__*/ jsx_runtime_.jsx(loading, {}) : /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [152], () => (__webpack_exec__(4115)));
module.exports = __webpack_exports__;

})();