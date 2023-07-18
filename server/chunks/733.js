"use strict";
exports.id = 733;
exports.ids = [733];
exports.modules = {

/***/ 7733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/header/burger.tsx

const Burger = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "cursor-pointer",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
            width: "37",
            height: "15",
            viewBox: "0 0 37 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M37 0H0L3.58065 6H33.4194L37 0Z",
                    fill: "#6C48D1"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M31.5 9H5.5L9.21429 15H27.7857L31.5 9Z",
                    fill: "#6C48D1"
                })
            ]
        })
    });
};
/* harmony default export */ const burger = (Burger);

// EXTERNAL MODULE: ./src/hooks/useScrollBlock.ts
var useScrollBlock = __webpack_require__(8486);
;// CONCATENATED MODULE: ./src/hooks/useWindowSize.ts

function useWindowSize() {
    const { 0: windowSize , 1: setWindowSize  } = (0,external_react_.useState)({
        width: undefined,
        height: undefined
    });
    (0,external_react_.useEffect)(()=>{
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return ()=>window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}
/* harmony default export */ const hooks_useWindowSize = (useWindowSize);

;// CONCATENATED MODULE: ./src/components/header/navMenu.tsx








const NavMenu = ({ navList  })=>{
    const { 0: isOpen , 1: setIsOpen  } = (0,external_react_.useState)(false);
    const [blockScroll, allowScroll] = (0,useScrollBlock/* useScrollBlock */.h)();
    const onNavOpen = (isOpen)=>{
        setIsOpen(!isOpen);
        !isOpen ? blockScroll() : allowScroll();
    };
    const onClickNavItem = ()=>{
        setIsOpen(false);
        allowScroll();
    };
    const size = hooks_useWindowSize();
    (0,external_react_.useEffect)(()=>{
        if (size.width && size.width > 1280 && isOpen) {
            onClickNavItem();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        size,
        isOpen
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "flex items-center xl:gap-[48px]",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "relative w-[60px] h-[60px] cursor-pointer md:w-[88px] md:h-[68px] ",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            className: "z-20",
                            src: "/icons/logo.svg",
                            alt: "logo",
                            layout: "fill"
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `absolute left-0 top-0 ${isOpen ? "opacity-100 block" : "opacity-0 hidden"}  bg-main-bg w-full xl:static z-10 transition-all duration-500 xl:opacity-100 xl:block`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: "flex flex-col items-center justify-center h-[100vh] xl:h-auto xl:pt-0 xl:items-start xl:flex-row xl:gap-10",
                    children: navList.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "font-heading text-[30px] xl:text-[16px]",
                            onClick: onClickNavItem,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(LinkItem, {
                                name: item.name,
                                path: item.path
                            })
                        }, `link-${item.path}`))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "ml-auto xl:hidden z-20",
                onClick: ()=>onNavOpen(isOpen),
                children: /*#__PURE__*/ jsx_runtime_.jsx(burger, {})
            })
        ]
    });
};
const LinkItem = ({ name , path  })=>{
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: path,
        className: "relative",
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            className: ` bg-clip-text cursor-pointer anim-link ${router.pathname == path && "text-purpule"}  `,
            children: name
        })
    });
};
/* harmony default export */ const navMenu = (NavMenu);

// EXTERNAL MODULE: ./src/utils/headerData.ts
var headerData = __webpack_require__(9544);
;// CONCATENATED MODULE: ./src/components/header/index.tsx



const Header = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "w-full fixed z-20 bg-main-bg drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)]",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container mx-auto max-w-[1360px] px-5 py-3 md:py-6",
            children: /*#__PURE__*/ jsx_runtime_.jsx(navMenu, {
                navList: headerData/* navLinks */.F
            })
        })
    });
};
/* harmony default export */ const header = (Header);


/***/ }),

/***/ 9544:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ navLinks)
/* harmony export */ });
const navLinks = [
    {
        name: "главная",
        path: "/"
    },
    {
        name: "о нас",
        path: "/about"
    },
    {
        name: "новости",
        path: "/posts"
    },
    {
        name: "команда",
        path: "/teams"
    },
    {
        name: "сотрудничество",
        path: "/contacts"
    },
    {
        name: "twitch",
        path: "/stream"
    }, 
];


/***/ })

};
;