(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{1833:function(e,t,a){"use strict";a.r(t);a(46),a(19),a(12),a(14),a(7),a(13),a(9),a(10),a(11),a(16),a(15),a(20),a(18);var n=a(0),r=a.n(n),o=a(6),l=(a(61),a(88),a(38),a(118),a(33),a(50),a(57),a(73),a(58),a(2)),i=a(391),c=a(71),u=a(47);var m=function(e){var t=Object(i.a)().t,a=e.rotateClockwise,n=e.rotateCounterClockwise;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{dataElement:"pageRotationHeader",className:"type"},t("action.rotate")),r.a.createElement(c.a,{dataElement:"rotatePageClockwise",className:"row",onClick:a},r.a.createElement(u.a,{title:"option.thumbnailPanel.rotatePageClockwise",img:"icon-header-page-manipulation-page-rotation-clockwise-line",role:"option"}),r.a.createElement("div",{className:"title"},t("option.thumbnailPanel.rotateClockwise"))),r.a.createElement(c.a,{dataElement:"rotatePageCounterClockwise",className:"row",onClick:n},r.a.createElement(u.a,{title:"option.thumbnailPanel.rotatePageCounterClockwise",img:"icon-header-page-manipulation-page-rotation-counterclockwise-line",role:"option"}),r.a.createElement("div",{className:"title"},t("option.thumbnailPanel.rotateCounterClockwise"))))},s=a(1356),p=a(4),d=a.n(p),E=a(36),f=a(5),g={pageNumbers:d.a.arrayOf(d.a.number),warn:d.a.bool};function b(e){var t=Object(o.d)(),a=e.pageNumbers,n=e.warn;return r.a.createElement(m,{rotateCounterClockwise:function(){n?!Object(s.k)(a,t)&&Object(s.p)(a):Object(s.p)(a),Object(E.l)()&&t(l.a.closeElement(f.a.PAGE_MANIPULATION_OVERLAY))},rotateClockwise:function(){n?!Object(s.k)(a,t)&&Object(s.o)(a):Object(s.o)(a),Object(E.l)()&&t(l.a.closeElement(f.a.PAGE_MANIPULATION_OVERLAY))}})}b.propTypes=g;var v=b,O=a(1520),y=a(1563);var N=function(e){var t=e.dataElement,a=e.pageNumbers,n=e.header,o=e.operations;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{dataElement:t,className:"type"},n),o.map((function(e){return r.a.createElement(c.a,{key:e.dataElement,className:"row",dataElement:e.dataElement,onClick:function(){return e.onClick(a)}},function(e){if(e.img)return r.a.createElement(u.a,{title:e.title,img:e.img,role:"option"})}(e),r.a.createElement("div",{className:"title"},e.title))})))},h=a(62),A=a(1);function C(){return(C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function w(e){var t=e.children,a=e.pageNumbers,n=e.pageManipulationOverlayItems,o=r.a.Children.toArray(t);return n.map((function(e,t){var n=e.dataElement,l=e.type,i=o.find((function(e){return e.props.dataElement===n})),c=n||"".concat(l,"-").concat(t);return i||("divider"===l&&(i=r.a.createElement("div",{className:"divider"})),"customPageOperation"===l&&(i=r.a.createElement(N,C({key:n,pageNumbers:a},e)))),i?r.a.cloneElement(i,{key:c}):null}))}var P=function(e){var t=e.pageNumbers,a=e.pageManipulationOverlayItems,i=Object(o.d)(),c=Object(n.useCallback)((function(){i(l.a.setPageManipulationOverlayAlternativePosition(null)),i(l.a.closeElements([f.a.PAGE_MANIPULATION_OVERLAY]))}),[i]),u=A.a.getDocument(),m=null==u?void 0:u.type,s=m===h.a.XOD,p=m===h.a.OFFICE||m===h.a.LEGACY_OFFICE,d=a;if(s||p){var E=d.reduce((function(e,t,a){var n,r,o=t.dataElement;"pageAdditionalControls"===o&&(e.push(a),"divider"===(null===(n=d[a+1])||void 0===n?void 0:n.type)&&e.push(a+1));"pageManipulationControls"===o&&(e.push(a),"divider"===(null===(r=d[a-1])||void 0===r?void 0:r.type)&&e.push(a-1));return e}),[]);d=d.filter((function(e,t){return!E.includes(t)}))}return Object(n.useEffect)((function(){return A.a.addEventListener("documentLoaded",c),function(){A.a.removeEventListener("documentLoaded",c)}}),[]),r.a.createElement(w,{pageNumbers:t,pageManipulationOverlayItems:d},!s&&!p&&r.a.createElement(y.a,{pageNumbers:t,dataElement:"pageAdditionalControls"}),r.a.createElement(v,{pageNumbers:t,dataElement:"pageRotationControls"}),!s&&!p&&r.a.createElement(O.a,{pageNumbers:t,dataElement:"pageManipulationControls"}))},k=a(223),j=a(3);function I(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,o,l,i=[],c=!0,u=!1;try{if(o=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;c=!1}else for(;!(c=(n=o.call(a)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){u=!0,r=e}finally{try{if(!c&&null!=a.return&&(l=a.return(),Object(l)!==l))return}finally{if(u)throw r}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return L(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return L(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var M=function(){var e=I(Object(o.e)((function(e){return[j.a.getSelectedThumbnailPageIndexes(e),j.a.getCurrentPage(e),j.a.getPageManipulationOverlayItems(e)]}),o.c),3),t=e[0],a=e[1],n=e[2],l=t.length>0?t.map((function(e){return e+1})):[a],c=I(Object(i.a)(),1)[0];return r.a.createElement(k.a,{menu:f.a.PAGE_MANIPULATION_OVERLAY,trigger:f.a.PAGE_MANIPULATION_OVERLAY_BUTTON,ariaLabel:c("option.thumbnailPanel.moreOptionsMenu")},r.a.createElement("span",{className:"visually-hidden"},r.a.createElement("p",{"aria-live":"assertive",role:"alert"}," ",c("option.thumbnailPanel.moreOptionsMenu"))),r.a.createElement(P,{pageNumbers:l,pageManipulationOverlayItems:n}))};t.default=M}}]);
//# sourceMappingURL=76.chunk.js.map