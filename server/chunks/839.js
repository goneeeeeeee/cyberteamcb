"use strict";
exports.id = 839;
exports.ids = [839];
exports.modules = {

/***/ 4839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/footer/spoilerBlock.tsx

const SpoilerBlock = ({ isShow , children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `${isShow ? "h-full" : "h-0"} overflow-hidden
      lg:h-full
    `,
        children: children
    });
};
/* harmony default export */ const spoilerBlock = (SpoilerBlock);

;// CONCATENATED MODULE: ./src/components/icons-svg/IconTwitch.tsx

const IconTwitch = ({ className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: "87",
        height: "90",
        viewBox: "0 0 87 90",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: `${className}`,
                d: "M64.5 22.5H57V45H64.5V22.5Z",
                fill: "white"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: `${className}`,
                d: "M38.25 22.5H45.75V45H38.25V22.5Z",
                fill: "white"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: `${className}`,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M0.75 15L6.62996 0H87V56.25L64.5 78.75H45.75L34.0725 90H19.5V78.75H0.75V15ZM64.5 63.75L79.5 48.75V7.5H15.75V63.75H30.75V75L42 63.75H64.5Z",
                fill: "white"
            })
        ]
    });
};
/* harmony default export */ const icons_svg_IconTwitch = (IconTwitch);

;// CONCATENATED MODULE: ./src/components/icons-svg/IconDiscord.tsx

const iconDiscord = ({ className  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: "120",
        height: "120",
        viewBox: "0 0 120 120",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: `${className}`,
                d: "M7.5 43.5C7.5 30.8988 7.5 24.5982 9.95235 19.7852C12.1095 15.5516 15.5516 12.1095 19.7852 9.95235C24.5982 7.5 30.8988 7.5 43.5 7.5H76.5C89.1012 7.5 95.4018 7.5 100.215 9.95235C104.448 12.1095 107.89 15.5516 110.048 19.7852C112.5 24.5982 112.5 30.8988 112.5 43.5V76.5C112.5 89.1012 112.5 95.4018 110.048 100.215C107.89 104.448 104.448 107.89 100.215 110.048C95.4018 112.5 89.1012 112.5 76.5 112.5H43.5C30.8988 112.5 24.5982 112.5 19.7852 110.048C15.5516 107.89 12.1095 104.448 9.95235 100.215C7.5 95.4018 7.5 89.1012 7.5 76.5V43.5Z",
                fill: "white"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M88.6355 35.0249C83.2949 32.6775 77.5847 30.9714 71.615 30C70.8816 31.2453 70.0252 32.9203 69.4347 34.2528C63.0886 33.3562 56.8007 33.3562 50.5714 34.2528C49.981 32.9203 49.1049 31.2453 48.3653 30C42.389 30.9714 36.6723 32.6837 31.3319 35.0374C20.5603 50.33 17.6403 65.243 19.1003 79.944C26.2446 84.9565 33.1683 88.0012 39.9751 89.9937C41.6557 87.8207 43.1547 85.5107 44.446 83.076C41.9867 82.198 39.6312 81.1147 37.4055 79.8567C37.996 79.446 38.5735 79.0162 39.1316 78.5742C52.7065 84.5392 67.4555 84.5392 80.8683 78.5742C81.4326 79.0162 82.0102 79.446 82.5942 79.8567C80.362 81.1207 78.0001 82.2042 75.5407 83.0822C76.8321 85.5107 78.3245 87.827 80.0115 90C86.8248 88.0075 93.755 84.9627 100.899 79.944C102.613 62.9017 97.9729 48.1258 88.6355 35.0249ZM46.2953 70.903C42.2203 70.903 38.8785 67.3287 38.8785 62.9765C38.8785 58.624 42.1489 55.0437 46.2953 55.0437C50.4418 55.0437 53.7834 58.6177 53.712 62.9765C53.7187 67.3287 50.4418 70.903 46.2953 70.903ZM73.7045 70.903C69.6294 70.903 66.2875 67.3287 66.2875 62.9765C66.2875 58.624 69.5581 55.0437 73.7045 55.0437C77.8507 55.0437 81.1926 58.6177 81.1213 62.9765C81.1213 67.3287 77.8507 70.903 73.7045 70.903Z",
                fill: "#333336"
            })
        ]
    });
/* harmony default export */ const IconDiscord = (iconDiscord);

;// CONCATENATED MODULE: ./src/components/icons-svg/IconVk.tsx

const IconVk = ({ className =""  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: "120",
        height: "120",
        viewBox: "0 0 120 120",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                className: `${className}`,
                d: "M57.8125 112.5H62.1875C85.9875 112.5 97.8438 112.5 105.194 105.15C112.5 97.8 112.5 85.9 112.5 62.1875V57.725C112.5 34.1 112.5 22.2 105.194 14.85C97.8438 7.5 85.9437 7.5 62.1875 7.5H57.8125C34.0125 7.5 22.1562 7.5 14.8062 14.85C7.5 22.2 7.5 34.1 7.5 57.8125V62.275C7.5 85.9 7.5 97.8 14.85 105.15C22.2 112.5 34.1 112.5 57.8125 112.5Z",
                fill: "white"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M63.0145 82.5C39.9524 82.5 26.7981 67.0158 26.25 41.25H37.8022C38.1816 60.1614 46.6982 68.1719 53.4439 69.8236V41.25H64.3215V57.5601C70.983 56.8581 77.9817 49.4257 80.3428 41.25H91.2203C90.3306 45.4901 88.5572 49.5049 86.0108 53.0431C83.4645 56.5813 80.2001 59.5669 76.4218 61.8131C80.6393 63.8655 84.3644 66.7705 87.3513 70.3364C90.3383 73.9023 92.5191 78.048 93.75 82.5H81.7762C80.6713 78.6331 78.4256 75.1717 75.3206 72.5494C72.2156 69.9271 68.3894 68.2607 64.3215 67.759V82.5H63.0145Z",
                fill: "#333336"
            })
        ]
    });
/* harmony default export */ const icons_svg_IconVk = (IconVk);

;// CONCATENATED MODULE: ./src/components/icons-svg/IconTelegram.tsx

const IconTelegram = ({ className  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: "120",
        height: "120",
        viewBox: "0 0 120 120",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                className: `${className}`,
                cx: "60",
                cy: "60",
                r: "52.5",
                fill: "white"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M86.1996 38.283C86.6672 35.2624 83.7953 32.8783 81.1096 34.0575L27.6181 57.5432C25.6921 58.3888 25.833 61.306 27.8305 61.9421L38.8618 65.455C40.9672 66.1255 43.247 65.7788 45.0855 64.5087L69.9561 47.326C70.7061 46.8079 71.5236 47.8742 70.8828 48.5349L52.9804 66.9924C51.2438 68.7829 51.5885 71.8168 53.6774 73.1268L73.7211 85.6961C75.9692 87.1059 78.8613 85.6896 79.2818 82.9731L86.1996 38.283Z",
                fill: "#333336"
            })
        ]
    });
};
/* harmony default export */ const icons_svg_IconTelegram = (IconTelegram);

;// CONCATENATED MODULE: ./public/icons/halfLogoFooter.svg
/* harmony default export */ const halfLogoFooter = ({"src":"/_next/static/media/halfLogoFooter.7526d33c.svg","height":512,"width":512});
// EXTERNAL MODULE: ./src/testData/staticData.ts + 4 modules
var staticData = __webpack_require__(8184);
// EXTERNAL MODULE: ./src/utils/headerData.ts
var headerData = __webpack_require__(9544);
;// CONCATENATED MODULE: ./src/components/footer/index.tsx












const Info = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col self-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: "z-20",
                        src: "/icons/logo.svg",
                        alt: "logo",
                        width: 60,
                        height: 60
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "text-purpule font-heading text-[20px] block text-center",
                        children: "CyberDOGS"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-[#6B6B72] text-[16px]",
                children: "CyberDogs SGTU"
            })
        ]
    });
};
const Contacts = ({})=>{
    const { 0: isOpenContacts , 1: setIsOpenContacts  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                className: "text-purpule text-[24px] font-heading mb-2",
                onClick: ()=>setIsOpenContacts(!isOpenContacts),
                children: "соц. сети"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(spoilerBlock, {
                isShow: isOpenContacts,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "grid grid-cols-2 gap-5",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "[&>svg]:w-[50px] [&>svg]:h-[50px] cursor-pointer",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "[&>svg]:w-[50px] [&>svg]:h-[50px] cursor-pointe group",
                                href: staticData/* linkSocial1.twitch */.gb.twitch,
                                target: "_blank",
                                rel: "noreferrer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_svg_IconTwitch, {
                                    className: "group-hover:fill-purpule"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "[&>svg]:w-[50px] [&>svg]:h-[50px] cursor-pointer",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "[&>svg]:w-[50px] [&>svg]:h-[50px] cursor-pointer group",
                                href: staticData/* linkSocial1.discrod */.gb.discrod,
                                target: "_blank",
                                rel: "noreferrer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(IconDiscord, {
                                    className: "group-hover:fill-purpule"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "[&>svg]:w-[50px] [&>svg]:h-[50px] cursor-pointer",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "[&>svg]:w-[50px] [&>svg]:h-[50px] cursor-pointer group",
                                href: staticData/* linkSocial1.vk */.gb.vk,
                                target: "_blank",
                                rel: "noreferrer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_svg_IconVk, {
                                    className: "group-hover:fill-purpule"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "[&>svg]:w-[50px] [&>svg]:h-[50px] cursor-pointer",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "[&>svg]:w-[50px] [&>svg]:h-[50px] cursor-pointer group",
                                href: "",
                                target: "_blank",
                                rel: "noreferrer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(icons_svg_IconTelegram, {
                                    className: "group-hover:fill-purpule"
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};
const Navigation = ({ navList  })=>{
    const { 0: isOpenNav , 1: setIsOpenNav  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                className: "text-purpule text-[24px] font-heading mb-0",
                onClick: ()=>setIsOpenNav(!isOpenNav),
                children: "Сайт"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(spoilerBlock, {
                isShow: isOpenNav,
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: "mb-2",
                    children: navList.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: "font-heading text-[20px] hover:text-purpule",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: item.path,
                                children: item.name
                            })
                        }, `link-${item.name}`))
                })
            })
        ]
    });
};
const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "w-full bg-main-bg overflow-y-scroll bottom-0 z-[-1] fixed h-[372px]",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "relative h-full",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container mx-auto max-w-[1360px] px-5 pb-[70px]",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col gap-0 sm:flex-row sm:gap-[45px] sm:flex-wrap ",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "order-3 self-center w-full lg:order-1 lg:self-start lg:mr-[140px] lg:max-w-[215px] ",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Info, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                className: "order-1",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Navigation, {
                                    navList: headerData/* navLinks */.F
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "order-2 mb-10 basis-1/3 max-w-fit",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Contacts, {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "right-0 bottom-0 -z-[1] hidden xl:block xl:absolute",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: halfLogoFooter,
                            alt: ""
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const footer = (Footer);


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