"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,471];
exports.modules = {

/***/ 7341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const PurpleButton = ({ children , onClick , className ="" ,  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        onClick: onClick,
        className: `${className} w-full flex rounded-md items-center justify-center gap-[10px] uppercase 
      bg-purpule text-white py-[16px] text-[15px] hover:bg-transparent border-2 
      border-purpule hover:border-2 hover:border-purpule transition-colors ease-out 
      active:bg-purple-dark active:border-purple-dark`,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PurpleButton);


/***/ }),

/***/ 4140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const HorizontCard = ({ className , title , icon , url ="" ,  })=>{
    const redirect = (url)=>{
        window.open(url, "_blank");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        href: url,
        target: "_blank",
        rel: "noreferrer",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            onClick: ()=>redirect(url),
            className: `${className} bg-dark-gray rounded-[10px] p-5 group flex justify-center h-full group cursor-pointer
      md:py-[40px] md:pr-[] 
      lg:pr-[86px] lg:pl-[32px] 
  `,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "hidden text-[16px] font-heading w-[258px] group-hover:text-purpule md:block xl:text-[24px] ",
                    children: title
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "h-[105px] [&>svg]:w-[95px] [&>svg]:h-[95px] md:ml-auto md:self-center ",
                    children: icon
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HorizontCard);


/***/ }),

/***/ 1830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


const VerticalCard = ({ title , icon , className , url ="" ,  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const redirect = (url)=>{
        if (!url || url === "") return;
        window.open(url, "_blank");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        href: url,
        target: "_blank",
        rel: "noreferrer",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            onClick: ()=>redirect(url),
            className: " bg-dark-gray rounded-[10px] p-5 group flex flex-col h-full justify-center items-center group cursor-pointer px-5 md:pt-[40px] md:px-[26px] lg:h-[512px] lg:pb-[62px] ",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "hidden text-[16px] font-heading group-hover:text-purpule lg:block xl:text-[24px] ",
                    children: title
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "h-[105px] [&>svg]:w-[95px] [&>svg]:h-[95px] md:mt-auto group-hover:fill-purpule ",
                    children: icon
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VerticalCard);


/***/ }),

/***/ 1753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);


const InfinityLineBoard = ({ slides  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "h-[64px] overflow-hidden relative",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "w-[200%] flex items-center absolute top-0 h-full animate-scrollLine",
            children: [
                slides.map((i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "h-[64px] min-w-[360px] flex justify-center items-start",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            src: i.src,
                            alt: i.name,
                            objectPosition: "center",
                            objectFit: "cover"
                        })
                    }, i.id)),
                slides.map((i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "h-[64px] min-w-[360px] flex justify-center items-start",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            src: i.src,
                            alt: i.name,
                            objectPosition: "center",
                            objectFit: "cover"
                        })
                    }, i.id)),
                slides.map((i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "h-[64px] min-w-[360px] flex justify-center items-start",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            src: i.src,
                            alt: i.name,
                            objectPosition: "center",
                            objectFit: "cover"
                        })
                    }, i.id))
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InfinityLineBoard);


/***/ }),

/***/ 6753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const IconArrowRight = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: "37",
        height: "15",
        viewBox: "0 0 37 15",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M36.7071 8.20711C37.0976 7.81659 37.0976 7.18342 36.7071 6.7929L30.3431 0.428935C29.9526 0.0384104 29.3195 0.0384104 28.9289 0.428935C28.5384 0.819459 28.5384 1.45262 28.9289 1.84315L34.5858 7.5L28.9289 13.1569C28.5384 13.5474 28.5384 14.1805 28.9289 14.5711C29.3195 14.9616 29.9526 14.9616 30.3431 14.5711L36.7071 8.20711ZM-8.74228e-08 8.5L36 8.5L36 6.5L8.74228e-08 6.5L-8.74228e-08 8.5Z",
            fill: "white"
        })
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconArrowRight);


/***/ }),

/***/ 441:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3877);
/* harmony import */ var _testData_staticData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8184);
/* harmony import */ var _components_cards_CardNews__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7805);
/* harmony import */ var _components_cards_cardSocial_verticalCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1830);
/* harmony import */ var _components_cards_cardSocial_horizontCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4140);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _services_mainContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6906);
/* harmony import */ var _services_news__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5658);
/* harmony import */ var _components_caruselBoard_InfinityLineboard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1753);
/* harmony import */ var _components_icons_svg_IconArrowRight__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6753);
/* harmony import */ var _components_buttons_BaseButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7341);
/* harmony import */ var _utils_convertDate__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3811);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_4__, swiper__WEBPACK_IMPORTED_MODULE_5__, _services_mainContent__WEBPACK_IMPORTED_MODULE_12__, _services_news__WEBPACK_IMPORTED_MODULE_13__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_4__, swiper__WEBPACK_IMPORTED_MODULE_5__, _services_mainContent__WEBPACK_IMPORTED_MODULE_12__, _services_news__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















// Icons
const IconTwitch = next_dynamic__WEBPACK_IMPORTED_MODULE_10___default()(null, {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../components/icons-svg/IconTwitch"
        ]
    },
    ssr: false
});
const IconDiscord = next_dynamic__WEBPACK_IMPORTED_MODULE_10___default()(null, {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../components/icons-svg/IconDiscord"
        ]
    },
    ssr: false
});
const IconTelegram = next_dynamic__WEBPACK_IMPORTED_MODULE_10___default()(null, {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../components/icons-svg/IconTelegram"
        ]
    },
    ssr: false
});
const IconVk = next_dynamic__WEBPACK_IMPORTED_MODULE_10___default()(null, {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../components/icons-svg/IconVk"
        ]
    },
    ssr: false
});


const getStaticProps = async ()=>{
    return {
        props: {}
    };
};

const SectionCarusel = ()=>{
    const { data: response  } = (0,react_query__WEBPACK_IMPORTED_MODULE_11__.useQuery)([
        "Slider"
    ], ()=>_services_mainContent__WEBPACK_IMPORTED_MODULE_12__/* .MainContentServices.getSliderData */ .i.getSliderData(), {
        select: ({ data  })=>data.data.map((item)=>{
                return {
                    id: item.id,
                    ...item.attributes,
                    img: item.attributes.ContentImage.data.attributes.formats.large.url
                };
            })
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.Swiper, {
            slidesPerView: 1,
            pagination: {
                clickable: true
            },
            modules: [
                swiper__WEBPACK_IMPORTED_MODULE_5__.Pagination,
                swiper__WEBPACK_IMPORTED_MODULE_5__.Navigation
            ],
            navigation: true,
            children: response?.map((slide)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CaruselSlide, {
                        ...slide,
                        img: `${"https://www.sstu.ru"}${slide.img}`
                    })
                }, slide.id))
        })
    });
};
const CaruselSlide = ({ title , subTitle , img  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `relative min-h-[555px] h-[90vh]`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute top-0 left-0 -z-10 bottom-0 right-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    src: img,
                    alt: "",
                    objectFit: "cover",
                    layout: "fill",
                    className: "top-0",
                    priority: true
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container-base flex flex-col justify-center h-full",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "font-heading text-dynamic leading-[102%] lg:text-[60px] max-w-[708px] mb-11",
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "font-text text-[20px] lg:text-[18px]",
                        children: subTitle
                    })
                ]
            })
        ]
    });
};
const SectionInfo = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "container-base py-[40px] lg:flex lg:justify-between lg:self-start lg:pt-[118px] lg:pb-[142px] ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative w-[280px] h-[240px] mx-auto lg:basis-1/2 lg:h-[416px] lg:max-w-[536px] ",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            src: "/images/LogoPng.png",
                            alt: "logo",
                            layout: "fill",
                            objectFit: "cover"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "lg:basis-1/2 lg:flex lg:flex-col lg:justify-center lg:self-center lg:max-w-[536px]",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "section-title mb-1 lg:mb-[40px] ",
                                children: "CyberDOGS"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "indent-3",
                                children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aliquam facilis officiis, quo non itaque nisi, a reprehenderit similique aut doloremque, nemo expedita. Mollitia perspiciatis obcaecati similique nemo eligendi consequatur."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "indent-3",
                                children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aliquam facilis officiis, quo non itaque nisi"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_caruselBoard_InfinityLineboard__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                slides: _testData_staticData__WEBPACK_IMPORTED_MODULE_6__/* .imagesGames */ .Vt
            })
        ]
    });
};
const SectionNews = ()=>{
    const { data: response  } = (0,react_query__WEBPACK_IMPORTED_MODULE_11__.useQuery)([
        "News"
    ], ()=>_services_news__WEBPACK_IMPORTED_MODULE_13__/* .NewsServices.getLastNews */ .H.getLastNews(), {
        select: ({ data  })=>data.data.map((item)=>{
                return {
                    id: item.id,
                    ...item.attributes,
                    date: (0,_utils_convertDate__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)(item.attributes.publishedAt),
                    img: item.attributes.preview_img.data?.attributes.url
                };
            })
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "container-base py-[40px] lg:pt-[140px] lg:pb-[60px] ",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "section-title mb-5 lg:mb-[40px] ",
                children: "последние новости"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid gap-6 md:grid-cols-news-grid-main lg:items-center ",
                children: [
                    Boolean(response) && response.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cards_CardNews__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            id: item.id,
                            title: item.title,
                            subTitle: item.date,
                            imageUrl: `${"https://www.sstu.ru"}${item.img}`,
                            url: item.img
                        }, item.id)),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_buttons_BaseButton__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: "/posts/",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    className: "flex gap-4 items-center",
                                    children: [
                                        "все новости",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_svg_IconArrowRight__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {})
                                    ]
                                })
                            })
                        })
                    })
                ]
            })
        ]
    });
};
const SectionContacts = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "container-base pb-[60px]",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "section-title lg:mb-[40px] mb-5 ",
                children: "мы в соц. сетях"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid grid-cols-2 grid-flow-col gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-2 ",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid gap-4 sm:col-span-2 lg:col-span-1 ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cards_cardSocial_horizontCard__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                title: "присоединяйся в наш discord!",
                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IconDiscord, {
                                    className: "group-hover:fill-purpule"
                                }),
                                url: "https://discord.com"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cards_cardSocial_horizontCard__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                title: "присоединяйся в наш vk!",
                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IconVk, {
                                    className: "group-hover:fill-purpule"
                                }),
                                url: "https://vk.com/cyberlab_sstu"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid gap-4 sm:col-span-3 lg:col-span-1 lg:grid-cols-2 ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cards_cardSocial_verticalCard__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                title: "присоединяйся в наш twitch!",
                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IconTwitch, {
                                    className: "group-hover:fill-purpule"
                                }),
                                url: "https://www.twitch.tv/hardecki"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_cards_cardSocial_verticalCard__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                title: "присоединяйся в наш tg",
                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IconTelegram, {
                                    className: "group-hover:fill-purpule"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
const Home = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SectionCarusel, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SectionInfo, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SectionNews, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SectionContacts, {})
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6906:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ MainContentServices)
/* harmony export */ });
/* harmony import */ var _conf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2973);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_conf__WEBPACK_IMPORTED_MODULE_0__]);
_conf__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const MainContentServices = {
    async getSliderData () {
        return _conf__WEBPACK_IMPORTED_MODULE_0__/* .instance.get */ .e.get(`/main-slides?populate=ContentImage`);
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 3877:
/***/ ((module) => {

module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [159,675,952,664,152,353,190,805,184], () => (__webpack_exec__(441)));
module.exports = __webpack_exports__;

})();