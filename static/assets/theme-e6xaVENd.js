import{d as e,i as t}from"./offlineDatabase-BW0713d3.js";import{$ as n,Et as r,Nt as i,St as a,W as o,X as s,ct as c,dt as l,et as u,ft as d,it as f,jt as p,lt as m,mt as h,nt as ee,ot as g,r as _,st as te,tt as v,wt as y,xt as b,yt as ne}from"./shadowSupport-ONgSg9Jw.js";import{_ as x,n as re,s as ie,t as ae,v as S,y as C}from"./ReaderButton-Tpb8egK1.js";import{i as oe,n as w,r as T,t as se}from"./shadowDom-Cx9vISAl.js";import{n as E}from"./userIdentity-BHodHHd7.js";import{s as D}from"./readerFontSize-CX-0gRwn.js";var ce=`/*! 
 * OverlayScrollbars
 * Version: 2.16.0
 * 
 * Copyright (c) Rene Haas | KingSora.
 * https://github.com/KingSora
 * 
 * Released under the MIT license.
 */
.os-size-observer,.os-size-observer-listener{direction:inherit;pointer-events:none;visibility:hidden;box-sizing:border-box;overflow:hidden;scroll-behavior:auto!important}.os-size-observer,.os-size-observer-listener,.os-size-observer-listener-item,.os-size-observer-listener-item-final{writing-mode:horizontal-tb;position:absolute;top:0;left:0}.os-size-observer{z-index:-1;contain:strict;padding:inherit;border:inherit;box-sizing:inherit;flex-flow:row;margin:-133px;display:flex;inset:0;transform:scale(.1)}.os-size-observer:before{content:"";box-sizing:inherit;flex:none;width:10px;height:10px;padding:10px}.os-size-observer-appear{animation:1ms forwards os-size-observer-appear-animation}.os-size-observer-listener{box-sizing:border-box;padding:inherit;border:inherit;flex:auto;margin:-133px;position:relative;transform:scale(10)}.os-size-observer-listener.ltr{margin-left:0;margin-right:-266px}.os-size-observer-listener.rtl{margin-left:-266px;margin-right:0}.os-size-observer-listener:empty:before{content:"";width:100%;height:100%}.os-size-observer-listener:empty:before,.os-size-observer-listener>.os-size-observer-listener-item{padding:inherit;border:inherit;box-sizing:content-box;flex:auto;display:block;position:relative}.os-size-observer-listener-scroll{box-sizing:border-box;display:flex}.os-size-observer-listener-item{direction:ltr;flex:none;bottom:0;right:0;overflow:hidden}.os-size-observer-listener-item-final{transition:none}@keyframes os-size-observer-appear-animation{0%{cursor:auto}to{cursor:none}}.os-trinsic-observer{box-sizing:border-box;z-index:-1;contain:strict;border:none;flex:none;max-width:0;height:0;max-height:1px;margin:0;padding:0;position:relative;top:calc(100% + 1px);overflow:hidden}.os-trinsic-observer:not(:empty){height:calc(100% + 1px);top:-1px}.os-trinsic-observer:not(:empty)>.os-size-observer{width:1000%;min-width:1px;height:1000%;min-height:1px}html[data-overlayscrollbars-body]{overflow:hidden}html[data-overlayscrollbars-body],html[data-overlayscrollbars-body]>body{width:100%;height:100%;margin:0}html[data-overlayscrollbars-body]>body{margin:0;overflow:visible}[data-overlayscrollbars]{position:relative}[data-overlayscrollbars~=host],[data-overlayscrollbars-padding]{display:flex;scroll-behavior:auto!important;flex-flow:row!important;align-items:stretch!important}[data-overlayscrollbars-padding],[data-overlayscrollbars-viewport]:not([data-overlayscrollbars]){box-sizing:inherit;z-index:0;border:none;flex:auto;width:100%;min-width:0;height:auto;margin:0;padding:0;position:relative}[data-overlayscrollbars-viewport]:not([data-overlayscrollbars]){--os-vaw:0;--os-vah:0;outline:none}[data-overlayscrollbars-viewport]:not([data-overlayscrollbars]):focus{outline:none}[data-overlayscrollbars-viewport][data-overlayscrollbars-viewport~=arrange]:before{content:"";pointer-events:none;z-index:-1;min-width:1px;min-height:1px;width:var(--os-vaw);height:var(--os-vah);position:absolute}[data-overlayscrollbars~=host],[data-overlayscrollbars-padding]{overflow:hidden!important}[data-overlayscrollbars~=host][data-overlayscrollbars~=noClipping],[data-overlayscrollbars-padding~=noClipping]{overflow:visible!important}[data-overlayscrollbars-viewport]{--os-viewport-overflow-x:hidden;--os-viewport-overflow-y:hidden;overflow-x:var(--os-viewport-overflow-x);overflow-y:var(--os-viewport-overflow-y)}[data-overlayscrollbars-viewport~=overflowXVisible]{--os-viewport-overflow-x:visible}[data-overlayscrollbars-viewport~=overflowXHidden]{--os-viewport-overflow-x:hidden}[data-overlayscrollbars-viewport~=overflowXScroll]{--os-viewport-overflow-x:scroll}[data-overlayscrollbars-viewport~=overflowYVisible]{--os-viewport-overflow-y:visible}[data-overlayscrollbars-viewport~=overflowYHidden]{--os-viewport-overflow-y:hidden}[data-overlayscrollbars-viewport~=overflowYScroll]{--os-viewport-overflow-y:scroll}[data-overlayscrollbars-viewport~=overflowImportant]{overflow-x:var(--os-viewport-overflow-x)!important;overflow-y:var(--os-viewport-overflow-y)!important}[data-overlayscrollbars-viewport~=noContent]:not(#osFakeId){font-size:0!important;line-height:0!important}[data-overlayscrollbars-viewport~=noContent]:not(#osFakeId):before,[data-overlayscrollbars-viewport~=noContent]:not(#osFakeId):after,[data-overlayscrollbars-viewport~=noContent]:not(#osFakeId)>:not(#osFakeId){clip:rect(0, 0, 0, 0)!important;white-space:nowrap!important;border-width:0!important;width:1px!important;height:1px!important;margin:-1px!important;padding:0!important;display:none!important;position:absolute!important;overflow:hidden!important}[data-overlayscrollbars-viewport~=measuring],[data-overlayscrollbars-viewport~=scrolling]{scroll-behavior:auto!important;scroll-snap-type:none!important}[data-overlayscrollbars-viewport~=measuring][data-overlayscrollbars-viewport~=overflowXVisible]{overflow-x:hidden!important}[data-overlayscrollbars-viewport~=measuring][data-overlayscrollbars-viewport~=overflowYVisible]{overflow-y:hidden!important}[data-overlayscrollbars-content]{box-sizing:inherit}[data-overlayscrollbars-contents]:not(#osFakeId):not([data-overlayscrollbars-padding]):not([data-overlayscrollbars-viewport]):not([data-overlayscrollbars-content]){display:contents}[data-overlayscrollbars-grid],[data-overlayscrollbars-grid] [data-overlayscrollbars-padding]{grid-template:1fr/1fr;display:grid}[data-overlayscrollbars-grid]>[data-overlayscrollbars-padding],[data-overlayscrollbars-grid]>[data-overlayscrollbars-viewport],[data-overlayscrollbars-grid]>[data-overlayscrollbars-padding]>[data-overlayscrollbars-viewport]{width:auto!important;height:auto!important}@property --os-scroll-percent{syntax:"<number>";inherits:true;initial-value:0}@property --os-viewport-percent{syntax:"<number>";inherits:true;initial-value:0}.os-scrollbar{--os-viewport-percent:0;--os-scroll-percent:0;--os-scroll-direction:0;--os-scroll-percent-directional:calc(var(--os-scroll-percent) - (var(--os-scroll-percent) + (1 - var(--os-scroll-percent)) * -1) * var(--os-scroll-direction));contain:size layout;contain:size layout style;pointer-events:none;opacity:0;visibility:hidden;transition:opacity .15s,visibility .15s,top .15s,right .15s,bottom .15s,left .15s;position:absolute}body>.os-scrollbar{z-index:99999;position:fixed}.os-scrollbar-transitionless{transition:none!important}.os-scrollbar-track{position:relative;border:none!important;padding:0!important}.os-scrollbar-handle{position:absolute}.os-scrollbar-track,.os-scrollbar-handle{pointer-events:none;width:100%;height:100%}.os-scrollbar.os-scrollbar-track-interactive .os-scrollbar-track,.os-scrollbar.os-scrollbar-handle-interactive .os-scrollbar-handle{pointer-events:auto;touch-action:none}.os-scrollbar-horizontal{bottom:0;left:0}.os-scrollbar-vertical{top:0;right:0}.os-scrollbar-rtl.os-scrollbar-horizontal{right:0}.os-scrollbar-rtl.os-scrollbar-vertical{left:0;right:auto}.os-scrollbar-visible{opacity:1;visibility:visible}.os-scrollbar-auto-hide.os-scrollbar-auto-hide-hidden{opacity:0;visibility:hidden}.os-scrollbar-interaction.os-scrollbar-visible{opacity:1;visibility:visible}.os-scrollbar-unusable,.os-scrollbar-unusable *,.os-scrollbar-wheel,.os-scrollbar-wheel *{pointer-events:none!important}.os-scrollbar-unusable .os-scrollbar-handle{opacity:0!important;transition:none!important}.os-scrollbar-horizontal .os-scrollbar-handle{bottom:0;left:calc(var(--os-scroll-percent-directional) * 100%);transform:translateX(calc(var(--os-scroll-percent-directional) * -100%));width:calc(var(--os-viewport-percent) * 100%)}.os-scrollbar-vertical .os-scrollbar-handle{right:0;top:calc(var(--os-scroll-percent-directional) * 100%);transform:translateY(calc(var(--os-scroll-percent-directional) * -100%));height:calc(var(--os-viewport-percent) * 100%)}@supports (container-type:size){.os-scrollbar-track{container-type:size}.os-scrollbar-horizontal .os-scrollbar-handle{transform:translateX(calc(var(--os-scroll-percent-directional) * 100cqw + var(--os-scroll-percent-directional) * -100%));left:auto}.os-scrollbar-vertical .os-scrollbar-handle{transform:translateY(calc(var(--os-scroll-percent-directional) * 100cqh + var(--os-scroll-percent-directional) * -100%));top:auto}.os-scrollbar-rtl.os-scrollbar-horizontal .os-scrollbar-handle{left:0;right:auto}}.os-scrollbar-rtl.os-scrollbar-vertical .os-scrollbar-handle{left:0;right:auto}.os-scrollbar.os-scrollbar-horizontal.os-scrollbar-cornerless,.os-scrollbar.os-scrollbar-horizontal.os-scrollbar-cornerless.os-scrollbar-rtl{left:0;right:0}.os-scrollbar.os-scrollbar-vertical.os-scrollbar-cornerless,.os-scrollbar.os-scrollbar-vertical.os-scrollbar-cornerless.os-scrollbar-rtl{top:0;bottom:0}@media print{.os-scrollbar{display:none}}.os-scrollbar{--os-size:0;--os-padding-perpendicular:0;--os-padding-axis:0;--os-track-border-radius:0;--os-track-bg:none;--os-track-bg-hover:none;--os-track-bg-active:none;--os-track-border:none;--os-track-border-hover:none;--os-track-border-active:none;--os-handle-border-radius:0;--os-handle-bg:none;--os-handle-bg-hover:none;--os-handle-bg-active:none;--os-handle-border:none;--os-handle-border-hover:none;--os-handle-border-active:none;--os-handle-min-size:33px;--os-handle-max-size:none;--os-handle-perpendicular-size:100%;--os-handle-perpendicular-size-hover:100%;--os-handle-perpendicular-size-active:100%;--os-handle-interactive-area-offset:0}.os-scrollbar-track{border:var(--os-track-border);border-radius:var(--os-track-border-radius);background:var(--os-track-bg);transition:opacity .15s,background-color .15s,border-color .15s}.os-scrollbar-track:hover{border:var(--os-track-border-hover);background:var(--os-track-bg-hover)}.os-scrollbar-track:active{border:var(--os-track-border-active);background:var(--os-track-bg-active)}.os-scrollbar-handle{border:var(--os-handle-border);border-radius:var(--os-handle-border-radius);background:var(--os-handle-bg)}.os-scrollbar-handle:hover{border:var(--os-handle-border-hover);background:var(--os-handle-bg-hover)}.os-scrollbar-handle:active{border:var(--os-handle-border-active);background:var(--os-handle-bg-active)}.os-scrollbar-track:before,.os-scrollbar-handle:before{content:"";display:block;position:absolute;inset:0}.os-scrollbar-horizontal{padding:var(--os-padding-perpendicular) var(--os-padding-axis);right:var(--os-size);height:var(--os-size)}.os-scrollbar-horizontal.os-scrollbar-rtl{left:var(--os-size);right:0}.os-scrollbar-horizontal .os-scrollbar-track:before{top:calc(var(--os-padding-perpendicular) * -1);bottom:calc(var(--os-padding-perpendicular) * -1)}.os-scrollbar-horizontal .os-scrollbar-handle{min-width:var(--os-handle-min-size);max-width:var(--os-handle-max-size);height:var(--os-handle-perpendicular-size);transition:opacity .15s,background-color .15s,border-color .15s,height .15s}.os-scrollbar-horizontal .os-scrollbar-handle:before{top:calc((var(--os-padding-perpendicular) + var(--os-handle-interactive-area-offset)) * -1);bottom:calc(var(--os-padding-perpendicular) * -1)}.os-scrollbar-horizontal:hover .os-scrollbar-handle{height:var(--os-handle-perpendicular-size-hover)}.os-scrollbar-horizontal:active .os-scrollbar-handle{height:var(--os-handle-perpendicular-size-active)}.os-scrollbar-vertical{padding:var(--os-padding-axis) var(--os-padding-perpendicular);bottom:var(--os-size);width:var(--os-size)}.os-scrollbar-vertical .os-scrollbar-track:before{left:calc(var(--os-padding-perpendicular) * -1);right:calc(var(--os-padding-perpendicular) * -1)}.os-scrollbar-vertical .os-scrollbar-handle{min-height:var(--os-handle-min-size);max-height:var(--os-handle-max-size);width:var(--os-handle-perpendicular-size);transition:opacity .15s,background-color .15s,border-color .15s,width .15s}.os-scrollbar-vertical .os-scrollbar-handle:before{left:calc((var(--os-padding-perpendicular) + var(--os-handle-interactive-area-offset)) * -1);right:calc(var(--os-padding-perpendicular) * -1)}.os-scrollbar-vertical.os-scrollbar-rtl .os-scrollbar-handle:before{right:calc((var(--os-padding-perpendicular) + var(--os-handle-interactive-area-offset)) * -1);left:calc(var(--os-padding-perpendicular) * -1)}.os-scrollbar-vertical:hover .os-scrollbar-handle{width:var(--os-handle-perpendicular-size-hover)}.os-scrollbar-vertical:active .os-scrollbar-handle{width:var(--os-handle-perpendicular-size-active)}[data-overlayscrollbars-viewport~=measuring]>.os-scrollbar,.os-theme-none.os-scrollbar{display:none!important}.os-theme-dark,.os-theme-light{box-sizing:border-box;--os-size:10px;--os-padding-perpendicular:2px;--os-padding-axis:2px;--os-track-border-radius:10px;--os-handle-interactive-area-offset:4px;--os-handle-border-radius:10px}.os-theme-dark{--os-handle-bg:#00000070;--os-handle-bg-hover:#0000008c;--os-handle-bg-active:#000000a8}.os-theme-light{--os-handle-bg:#ffffff70;--os-handle-bg-hover:#ffffff8c;--os-handle-bg-active:#ffffffa8}[data-overlayscrollbars-initialize]:not([data-overlayscrollbars-viewport]),[data-overlayscrollbars-viewport~=scrollbarHidden],html[data-overlayscrollbars-viewport~=scrollbarHidden]>body{scrollbar-width:none!important}[data-overlayscrollbars-initialize]:not([data-overlayscrollbars-viewport])::-webkit-scrollbar{appearance:none!important;width:0!important;height:0!important;display:none!important}[data-overlayscrollbars-initialize]:not([data-overlayscrollbars-viewport])::-webkit-scrollbar-corner{appearance:none!important;width:0!important;height:0!important;display:none!important}[data-overlayscrollbars-viewport~=scrollbarHidden]::-webkit-scrollbar{appearance:none!important;width:0!important;height:0!important;display:none!important}[data-overlayscrollbars-viewport~=scrollbarHidden]::-webkit-scrollbar-corner{appearance:none!important;width:0!important;height:0!important;display:none!important}html[data-overlayscrollbars-viewport~=scrollbarHidden]>body::-webkit-scrollbar{appearance:none!important;width:0!important;height:0!important;display:none!important}html[data-overlayscrollbars-viewport~=scrollbarHidden]>body::-webkit-scrollbar-corner{appearance:none!important;width:0!important;height:0!important;display:none!important}[data-overlayscrollbars-initialize]:not([data-overlayscrollbars]):not(html):not(body){overflow:auto}`,O=h(`<reader-sheet-layer class=reader-sheet-layer>`,1),le=h(`<style>`),ue=h(`<div class=reader-sheet-backdrop aria-hidden=true>`),de=h(`<div class=reader-sheet role=dialog aria-modal=true tabindex=-1 style=--reader-sheet-swipe-offset:0px;will-change:auto><!$><!/><div class=reader-sheet-body>`),k={sheetId:``,open:!1,placement:`bottom`,onClose:()=>void 0,closeLabel:`Close`,closeIcon:!1,showCloseButton:!0,dismissOnSwipe:!0,initialFocusSelector:void 0,content:[],accessibleLabel:``,accessibleLabelledBy:void 0},fe=[`a[href]`,`area[href]`,`button, reader-button`,`input:not([type="hidden"])`,`select`,`textarea`,`iframe`,`object`,`embed`,`summary`,`[contenteditable="true"]`,`[tabindex]`].join(`,`),A=56,pe=8,j=0,M,N;function me(){j+=1,j===1&&(M=document.documentElement.style.overflowY,N=document.body.style.overflowY,document.documentElement.style.overflowY=`hidden`,document.body.style.overflowY=`hidden`)}function P(){j!==0&&(--j,j===0&&(document.documentElement.style.overflowY=M??``,document.body.style.overflowY=N??``,M=void 0,N=void 0))}function he(e,t){let n=getComputedStyle(e),r=n.transitionProperty.split(`,`).map(e=>e.trim()).findIndex(e=>e===t||e===`all`);if(r<0)return 0;let i=n.transitionDuration.split(`,`).map(e=>e.trim()),a=i[r%i.length];return a===void 0?0:a.endsWith(`ms`)?Number.parseFloat(a):a.endsWith(`s`)?Number.parseFloat(a)*1e3:0}function F(e){let t=b(()=>e.children),[n,a]=r();y(()=>({host:n(),sheetId:e.id,open:e.open,placement:e.placement,onClose:e.onClose,closeLabel:e.closeLabel,closeIcon:e.closeIcon,showCloseButton:e.showCloseButton,dismissOnSwipe:e.dismissOnSwipe,initialFocusSelector:e.initialFocusSelector,content:t(),accessibleLabel:`ariaLabel`in e?e.ariaLabel:void 0,accessibleLabelledBy:`ariaLabelledBy`in e?e.ariaLabelledBy:void 0}),({host:e,sheetId:t,open:n,placement:r,onClose:i,closeLabel:a,closeIcon:o,showCloseButton:s,dismissOnSwipe:c,initialFocusSelector:l,content:u,accessibleLabel:d,accessibleLabelledBy:f})=>{e!==void 0&&(e.sheetId=t,e.open=n,e.placement=r,e.onClose=i,e.closeLabel=a,e.closeIcon=o,e.showCloseButton=s,e.dismissOnSwipe=c,e.initialFocusSelector=l,e.content=u,e.accessibleLabel=d,e.accessibleLabelledBy=f)});var o=v(O);return g(()=>e=>{a(e)},o),o.content=()=>t(),o._$owner=i(),u(()=>({e:e.id,t:e.open,a:e.placement,o:e.onClose,i:e.closeLabel,n:e.closeIcon,s:e.showCloseButton,h:e.dismissOnSwipe,r:e.initialFocusSelector,d:`ariaLabel`in e?e.ariaLabel:void 0,l:`ariaLabelledBy`in e?e.ariaLabelledBy:void 0}),({e,t,a:n,o:r,i,n:a,s,h:c,r:l,d:u,l:d},f)=>{e!==f?.e&&(o.sheetId=e),t!==f?.t&&(o.open=t),n!==f?.a&&(o.placement=n),r!==f?.o&&(o.onClose=r),i!==f?.i&&(o.closeLabel=i),a!==f?.n&&(o.closeIcon=a),s!==f?.s&&(o.showCloseButton=s),c!==f?.h&&(o.dismissOnSwipe=c),l!==f?.r&&(o.initialFocusSelector=l),u!==f?.d&&(o.accessibleLabel=u),d!==f?.l&&(o.accessibleLabelledBy=d)}),o}function I(e,t){let n,i,o,d,h=!1,_,b=0,x=e.initialFocusSelector,S=0,C,T,E,D=!1,O=!1,k=!1,j,M=new Map,N=[],[F,I]=r(`closed`),[L,z]=r(0),[B,V]=r(`idle`),H=`closed`;n=t;function U(){return typeof e.open==`function`?e.open():e.open}function W(t){let r=n;r!==void 0&&(r.dataset.state=t,r.dataset.placement=e.placement,r.setAttribute(`aria-hidden`,t===`closed`?`true`:`false`),r.toggleAttribute(`inert`,t!==`open`),r.classList.toggle(`is-open`,t===`open`),r.classList.toggle(`is-closed`,t===`closed`),r.classList.toggle(`is-closing`,t===`closing`)),i!==void 0&&(i.classList.toggle(`is-open`,t===`open`),i.classList.toggle(`is-closing`,t===`closing`),i.style.willChange=t===`open`||t===`closing`?`opacity`:``);let a=o;if(a!==void 0){a.dataset.state=t,a.dataset.placement=e.placement,a.classList.toggle(`is-open`,t===`open`),a.classList.toggle(`is-closed`,t===`closed`),a.classList.toggle(`is-closing`,t===`closing`),a.classList.toggle(`is-swipe-tracking`,B()===`tracking`),a.classList.toggle(`is-swipe-settling`,B()===`settling`),a.style.setProperty(`--reader-sheet-swipe-offset`,`${L()}px`),a.style.willChange=t===`open`||t===`closing`?`transform, opacity`:``;for(let e of R(a,`.reader-sheet-option`))e.style.willChange=t===`open`?`transform, opacity`:``}}function G(e){H=e,I(e),W(e)}function K(e){M.has(e)||(M.set(e,e.inert),e.inert=!0)}function q(){if(n===void 0||N.length>0)return;let e=n;for(;e!==document.body;){let t=e,n=t.parentNode;if(n===null)return;let r=n instanceof ShadowRoot?n.children:n.childNodes;for(let e of r)e===t||!(e instanceof HTMLElement)||K(e);let i=new MutationObserver(e=>{for(let n of e)for(let e of n.addedNodes)e instanceof HTMLElement&&e!==t&&K(e)});i.observe(n,{childList:!0}),N.push(i),e=n instanceof ShadowRoot?n.host:n}}function J(){for(let e of N)e.disconnect();N.length=0;for(let[e,t]of M)e.inert=t;M.clear()}function Y(){return o===void 0?[]:oe(fe,o).filter(e=>e.tabIndex>=0&&!e.matches(`:disabled, [disabled]`)&&e.getClientRects().length>0&&se(e,`[aria-hidden="true"], [inert]`)===null)}function _e(e){if(n===void 0)return!1;let t=e;for(;t!==null;){if(t===n)return!0;if(t.parentNode!==null){t=t.parentNode;continue}t=t instanceof ShadowRoot?t.host:null}return!1}function ve(e,t){let n=e;for(;n!==null;){if(n instanceof HTMLElement&&t.includes(n))return n;if(n.parentNode!==null){n=n.parentNode;continue}n=n instanceof ShadowRoot?n.host:null}}function ye(t){if(t!==b||!U()||o===void 0)return;let n=(e.initialFocusSelector===void 0?null:ge(o,e.initialFocusSelector))??Y()[0]??o;if(getComputedStyle(n).visibility!==`visible`){_=requestAnimationFrame(()=>ye(t));return}_=void 0,n.focus()}function be(){b+=1,_!==void 0&&cancelAnimationFrame(_);let e=b;_=requestAnimationFrame(()=>ye(e))}function xe(){b+=1,_!==void 0&&(cancelAnimationFrame(_),_=void 0)}function Se(){let e=d;d=void 0,!(e===void 0||!e.isConnected||e.matches(`:disabled, [disabled]`))&&(e.focus({preventScroll:!0}),w()!==e&&queueMicrotask(()=>{e.isConnected&&!e.matches(`:disabled, [disabled]`)&&e.focus({preventScroll:!0})}))}function Ce(){let e=w();!(e instanceof HTMLElement)||!_e(e)||(j===void 0&&(j=document.body.getAttribute(`tabindex`)),document.body.tabIndex=-1,document.body.focus({preventScroll:!0}))}function X(){let e=j;if(j=void 0,e!==void 0){if(e===null){document.body.removeAttribute(`tabindex`);return}document.body.setAttribute(`tabindex`,e)}}function Z(){S+=1,C?.(),C=void 0}function we(){T!==void 0&&(window.clearTimeout(T),T=void 0),z(0),V(`idle`)}function Q(){V(`settling`),z(0),T!==void 0&&window.clearTimeout(T);let e=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches?0:Te(getComputedStyle(o??t).getPropertyValue(`--motion-swipe-settle`));T=window.setTimeout(()=>{T=void 0,V(`idle`)},e)}function Te(e){let t=e.trim();return t.endsWith(`ms`)?Number.parseFloat(t):t.endsWith(`s`)?Number.parseFloat(t)*1e3:0}function Ee(){let t=Math.max(240,window.innerHeight*.9);return e.placement===`bottom`?t:-t}function De(t){let n=e.placement===`bottom`?Math.max(0,t):Math.min(0,t),r=Math.max(160,window.innerHeight*.72);z(Math.sign(n)*Math.min(Math.abs(n),r))}function Oe(e){e!==S||U()||(C?.(),C=void 0,G(`closed`),J(),Se(),X(),k&&(k=!1,P()))}function ke(){Z(),Ce();let e=S,t=o,n=t?.classList.contains(`is-swipe-tracking`)===!0;if(n&&V(`idle`),t===void 0||window.matchMedia(`(prefers-reduced-motion: reduce)`).matches||!n&&he(t,`transform`)===0){Oe(e);return}let r=n=>{n.target===t&&n.propertyName===`transform`&&Oe(e)};t.addEventListener(`transitionend`,r),C=()=>t.removeEventListener(`transitionend`,r),G(`closing`)}function Ae(t){if(!U())return;if(t.key===`Escape`){t.preventDefault(),t.stopPropagation(),e.onClose();return}if(t.key!==`Tab`||o===void 0)return;let n=Y(),r=n[0],i=n.length-1,a=n[i];if(r===void 0||a===void 0){t.preventDefault(),o.focus();return}let s=w(),c=s===null?void 0:ve(s,n),l=c===void 0?-1:n.indexOf(c);if(t.shiftKey&&l<=0){t.preventDefault(),a.focus();return}!t.shiftKey&&(l===-1||l===i)&&(t.preventDefault(),r.focus())}function $(){let e=n?.getAttribute(`data-state`)??o?.getAttribute(`data-state`),t=e===`open`||e===`closing`;if(i?.style.setProperty(`will-change`,t?`opacity`:``),o!==void 0){o.style.setProperty(`will-change`,t?`transform, opacity`:``);for(let t of R(o,`.reader-sheet-option`))t.style.setProperty(`will-change`,e===`open`?`transform, opacity`:``)}}function je(){let e=U();if(e!==h){if(h=e,e){if(Z(),d===void 0){let e=w();d=e instanceof HTMLElement?e:void 0}G(`open`),k||(k=!0,me()),we(),q(),be();return}xe(),ke()}}return y(()=>U(),()=>je()),y(()=>e.initialFocusSelector,e=>{e!==x&&(x=e,U()&&be())}),p(()=>{je(),document.addEventListener(`keydown`,Ae,!0);let t=o===void 0||e.dismissOnSwipe===!1?void 0:new re(o,{threshold:()=>A,disregardVelocityThreshold:()=>A}),n=t?.on(`panstart`,()=>{D=!1,O=!1,we()}),r=t?.on(`panmove`,()=>{if(t===void 0||D||O)return;let n=t.touchMoveX??0,r=t.touchMoveY??0;if(Math.abs(n)>Math.abs(r)&&Math.abs(n)>pe){D=!0,Q();return}if(!(Math.abs(r)<=pe)){if(!(e.placement===`bottom`?r>0:r<0)){D=!0,Q();return}V(`tracking`),De(r)}}),i=t?.on(`panend`,()=>{if(E!==void 0&&window.clearTimeout(E),D||O){O||Q();return}E=window.setTimeout(()=>{E=void 0,O||Q()},0)}),a=()=>{U()&&(D=!0,O=!1,Q())};o?.addEventListener(`touchcancel`,a,{passive:!0});let s=t?.on(`swipeup`,()=>{!U()||e.placement!==`top`||D||(O=!0,E!==void 0&&(window.clearTimeout(E),E=void 0),z(Ee()),e.onClose())}),c=t?.on(`swipedown`,()=>{!U()||e.placement!==`bottom`||e.dismissOnSwipe===!1||D||(O=!0,E!==void 0&&(window.clearTimeout(E),E=void 0),z(Ee()),e.onClose())});return()=>{document.removeEventListener(`keydown`,Ae,!0),T!==void 0&&window.clearTimeout(T),E!==void 0&&window.clearTimeout(E),n?.cancel(),r?.cancel(),i?.cancel(),o?.removeEventListener(`touchcancel`,a),s?.cancel(),c?.cancel(),t?.destroy(),xe(),Z(),J(),Se(),X(),k&&(k=!1,P())}}),p(()=>{let e=n;if(e===void 0)return;let t=new MutationObserver($);return t.observe(e,{attributes:!0,attributeFilter:[`data-state`]}),$(),()=>t.disconnect()}),[(()=>{var e=v(le);return f(e,`
:host {
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
}

:host(.reader-sheet-layer) {
  position: fixed;
  z-index: 20;
  inset: 0;
  display: flex;
  justify-content: center;
  min-inline-size: 0;
  visibility: hidden;
  pointer-events: none;
}

:host(.reader-sheet-layer[data-placement="top"]) {
  align-items: flex-start;
}

:host(.reader-sheet-layer[data-placement="bottom"]) {
  align-items: flex-end;
}

:host(.reader-sheet-layer[data-state="open"]),
:host(.reader-sheet-layer[data-state="closing"]) {
  visibility: visible;
}

:host(.reader-sheet-layer[data-state="open"]) {
  pointer-events: auto;
}

.reader-sheet-backdrop {
  position: absolute;
  inset: 0;
  inline-size: 100%;
  block-size: 100%;
  border: 0;
  border-radius: 0;
  padding: 0;
  background: var(--color-ink);
  opacity: 0;
  transition: opacity var(--motion-sheet) var(--ease-decelerate);
}

.reader-sheet-backdrop.is-open {
  opacity: 0.4;
  transition-timing-function: var(--ease-decelerate);
}

.reader-sheet-backdrop:is(.is-open, .is-closing) {
  will-change: opacity;
}

.reader-sheet {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  grid-template-rows: auto minmax(0, 1fr);
  inline-size: 100%;
  min-inline-size: 0;
  min-block-size: 0;
  max-block-size: calc(100dvb - env(safe-area-inset-top) - env(safe-area-inset-bottom));
  overflow: hidden;
  border: 0;
  background: var(--color-paper);
  box-shadow: var(--shadow-paper);
  opacity: 0;
  transition: transform var(--motion-sheet) var(--ease-decelerate),
    opacity var(--motion-sheet) var(--ease-decelerate);
}

.reader-sheet:is([data-state="open"], [data-state="closing"]) {
  will-change: transform, opacity;
}

.reader-sheet[data-placement="top"] {
  border-block-start: 0;
  border-radius: 0 0 var(--radius-lg) var(--radius-lg);
  padding-block-start: env(safe-area-inset-top);
  transform: translateY(-100%);
}

.reader-sheet[data-placement="bottom"] {
  border-block-end: 0;
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
  padding-block-end: env(safe-area-inset-bottom);
  transform: translateY(100%);
}

.reader-sheet[data-state="open"]:is([data-placement="bottom"], [data-placement="top"]) {
  transform: translateY(var(--reader-sheet-swipe-offset, 0px));
}

.reader-sheet[data-state="closing"],
.reader-sheet-backdrop.is-closing {
  transition-timing-function: var(--ease-accelerate);
}

.reader-sheet.is-swipe-tracking {
  will-change: transform;
}

.reader-sheet[data-state="open"].is-swipe-tracking {
  transition: none;
}

.reader-sheet[data-state="open"].is-swipe-settling {
  transition: transform var(--motion-swipe-settle) var(--ease-emphasized),
    opacity var(--motion-swipe-settle) var(--ease-emphasized);
}

.reader-sheet[data-state="open"] {
  opacity: 1;
  transform: translateY(0);
}

.reader-sheet-body {
  grid-column: 1 / -1;
  grid-row: 1;
  display: grid;
  min-inline-size: 0;
  min-block-size: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  padding: var(--space-4);
}

.reader-selection-listbox {
  display: grid;
  grid-auto-rows: max-content;
  min-inline-size: 0;
  min-block-size: 0;
  max-block-size: 100%;
  align-content: start;
  overflow-y: auto;
  overscroll-behavior: contain;
  border: var(--border-default) solid var(--color-rule);
  border-radius: var(--radius-md);
  background: var(--color-paper);
}

.reader-sheet-option + .reader-sheet-option {
  border-block-start: var(--border-default) solid var(--color-rule);
}

.reader-sheet[data-state="open"] .reader-sheet-option[data-sheet-state="open"]:nth-child(-n + 8) {
  animation: reader-sheet-option-enter var(--motion-standard) var(--ease-decelerate) both;
  will-change: transform, opacity;
}

.reader-sheet[data-state="open"] .reader-sheet-option[data-sheet-state="open"]:nth-child(2) {
  animation-delay: var(--motion-stagger-step);
}

.reader-sheet[data-state="open"] .reader-sheet-option[data-sheet-state="open"]:nth-child(3) {
  animation-delay: calc(var(--motion-stagger-step) * 2);
}

.reader-sheet[data-state="open"] .reader-sheet-option[data-sheet-state="open"]:nth-child(4) {
  animation-delay: calc(var(--motion-stagger-step) * 3);
}

.reader-sheet[data-state="open"] .reader-sheet-option[data-sheet-state="open"]:nth-child(5) {
  animation-delay: calc(var(--motion-stagger-step) * 4);
}

.reader-sheet[data-state="open"] .reader-sheet-option[data-sheet-state="open"]:nth-child(6) {
  animation-delay: calc(var(--motion-stagger-step) * 5);
}

.reader-sheet[data-state="open"] .reader-sheet-option[data-sheet-state="open"]:nth-child(7) {
  animation-delay: calc(var(--motion-stagger-step) * 6);
}

.reader-sheet[data-state="open"] .reader-sheet-option[data-sheet-state="open"]:nth-child(8) {
  animation-delay: calc(var(--motion-stagger-step) * 7);
}

@keyframes reader-sheet-option-enter {
  from {
    opacity: 0;
    transform: translateY(var(--space-2));
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.reader-chapter-selection-grid {
  display: grid;
  grid-template-columns: max-content minmax(0, 1fr);
  block-size: 100%;
  min-inline-size: 0;
  min-block-size: 0;
  gap: 0;
}

.reader-book-listbox {
  grid-row: 1 / -1;
  position: relative;
  z-index: 5;
  inline-size: max-content;
  max-inline-size: none;
  margin-block-start: calc(1.5 * var(--text-label) + var(--space-2));
  overflow-x: clip;
  scrollbar-gutter: auto;
  border-inline-end: 0;
  border-start-end-radius: 0;
  border-end-end-radius: 0;
}

.reader-book-listbox > [data-overlayscrollbars-viewport] {
  grid-area: 1;
  block-size: auto !important;
  min-block-size: 0;
}

.reader-book-listbox[data-overlayscrollbars~="host"] {
  display: grid !important;
  grid-template: 1fr / 1fr;
}

.reader-book-listbox .os-scrollbar.reader-book-scrollbar {
  --os-size: 0.5rem;
  --os-padding-perpendicular: 0.125rem;
  --os-track-bg: transparent;
  --os-track-bg-hover: transparent;
  --os-track-bg-active: transparent;
  --os-handle-bg: var(--color-scrollbar-handle);
  --os-handle-bg-hover: var(--color-scrollbar-handle-hover);
  --os-handle-bg-active: var(--color-scrollbar-handle-active);
  --os-handle-border-radius: 999px;
}

.reader-book-selection-bridge {
  display: none;
  position: absolute;
  z-index: 3;
  inset-block: 0;
  inset-inline-start: calc(100% - var(--border-default));
  inline-size: var(--border-default);
  background: var(--color-paper);
  pointer-events: none;
}

.reader-selection-column {
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  block-size: 100%;
  min-inline-size: 0;
  min-block-size: 0;
  gap: var(--space-2);
  overflow: hidden;
}

.reader-chapter-selection-grid > .reader-selection-column:first-child {
  position: relative;
  z-index: 1;
  overflow: visible;
}

.reader-selection-column h3 {
  min-inline-size: 0;
  margin: 0;
  color: var(--color-ink-muted);
  font-size: var(--text-label);
  line-height: 1.5;
  overflow-wrap: anywhere;
  text-wrap: balance;
  word-break: auto-phrase;
}

.reader-chapter-listbox {
  grid-template-columns: repeat(auto-fill, minmax(var(--action-min), 1fr));
  align-self: stretch;
  max-block-size: none;
  gap: 0;
  padding: 0;
  border-inline-start: var(--border-default) solid var(--color-rule);
  border-start-start-radius: 0;
  border-end-start-radius: 0;
}

.reader-chapter-listbox .reader-sheet-option,
.reader-day-listbox .reader-sheet-option {
  inline-size: auto;
  min-block-size: var(--action-min);
  padding: var(--space-2);
}

.reader-chapter-listbox .reader-sheet-option + .reader-sheet-option,
.reader-day-listbox .reader-sheet-option + .reader-sheet-option {
  border-block-start: 0;
}

.reader-day-listbox {
  grid-template-columns: repeat(auto-fill, minmax(var(--action-min), 1fr));
  gap: 0;
  padding: 0;
}

#reader-version-dialog-body,
#reader-language-dialog-body,
#reader-chapter-dialog-body,
#reader-day-dialog-body {
  padding-block-start: calc(var(--reader-compact-action-min) + var(--space-4));
}

#reader-settings-dialog-body {
  padding-block-start: calc(max(var(--reader-compact-action-min), 2.75rem) + var(--space-4));
}

#reader-version-dialog[data-placement="bottom"],
#reader-language-dialog[data-placement="bottom"],
#reader-chapter-dialog[data-placement="bottom"],
#reader-day-dialog[data-placement="bottom"] {
  inset-block-end: 0;
  border-block-end: 0;
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
}

#reader-print-preview-dialog {
  display: block;
  block-size: 100dvb;
  inline-size: 100%;
  max-block-size: none;
  max-inline-size: none;
  border: 0;
  border-radius: 0;
  padding-block-start: 0;
  box-shadow: none;
}

#reader-print-preview-dialog .reader-sheet-body {
  display: block;
  block-size: 100%;
  overflow: hidden;
  padding: 0;
}

@media (min-width: 768px) {
  .reader-sheet {
    inline-size: min(calc(100% - (2 * var(--space-4))), var(--content-max-inline-size));
  }

  .reader-sheet[data-placement="bottom"] {
    inset-block-end: var(--space-4);
    max-block-size: calc(
      100dvb - var(--space-8) - env(safe-area-inset-top) - env(safe-area-inset-bottom)
    );
    border-radius: var(--radius-lg);
  }

  .reader-sheet-body {
    padding-inline: var(--space-6);
  }
}

@media (max-width: 640px) {
  .reader-chapter-selection-grid {
    grid-template-columns: max-content minmax(0, 1fr);
  }

  .reader-chapter-selection-grid > .reader-selection-column:first-child {
    grid-template-rows: calc(1.5 * var(--text-label)) minmax(0, 1fr);
  }

  .reader-chapter-selection-grid .reader-book-listbox {
    grid-row: 2;
    margin-block-start: 0;
  }

  .reader-chapter-selection-grid .reader-selection-listbox {
    block-size: calc(
      round(down, calc(100% - (2 * var(--border-default))), var(--action-min))
        + (2 * var(--border-default))
    );
  }

  .reader-chapter-selection-grid .reader-sheet-option {
    block-size: var(--action-min);
  }

  .reader-book-listbox {
    scrollbar-gutter: stable;
  }
}

@media (prefers-reduced-motion: reduce) {
  .reader-sheet[data-state="open"] .reader-sheet-option[data-sheet-state="open"]:nth-child(-n + 8) {
    animation: none;
  }

  .reader-sheet-backdrop,
  .reader-sheet {
    transition-duration: 0.01ms;
  }
}

@media print {
  :host(.reader-sheet-layer) {
    display: none !important;
  }
}

${ce}
`),e})(),(()=>{var t=v(ue);return s(t,`click`,e.onClose,!0),g(()=>e=>{i=e,W(H)},t),u(()=>({e:F()===`open`,t:F()===`closing`,a:F()===`open`||F()===`closing`?`opacity`:``}),({e,t:n,a:r},i)=>{e!==i?.e&&t.classList.toggle(`is-open`,e),n!==i?.t&&t.classList.toggle(`is-closing`,n),r!==i?.a&&l(t,`will-change`,r)}),te(),t})(),(()=>{var t=v(de),n=t.firstChild,[r,i]=ee(n.nextSibling),s=r.nextSibling;return g(()=>e=>{o=e,W(H),$()},t),f(t,a(ne,{get when(){return e.showCloseButton!==!1},get children(){return a(ae,{class:`secondary-action reader-sheet-close`,type:`button`,get"aria-label"(){return e.closeLabel},get onClick(){return e.onClose},get children(){return a(ie,{})}})}}),r,i),f(s,c(()=>e.children)),u(()=>({e:e.id,t:e.placement,a:e.ariaLabelledBy,o:e.ariaLabelledBy===void 0?e.ariaLabel:void 0,i:`${e.id}-body`}),({e,t:n,a:r,o:i,i:a},o)=>{e!==o?.e&&m(t,`id`,e),n!==o?.t&&m(t,`data-placement`,n),r!==o?.a&&m(t,`aria-labelledby`,r),i!==o?.o&&m(t,`aria-label`,i),a!==o?.i&&m(s,`id`,a)}),t})()]}function L(){customElements.get(`reader-sheet-layer`)===void 0&&o(`reader-sheet-layer`,k,(e,{element:t})=>{let n={id:e.sheetId,open:e.open,placement:e.placement,onClose:e.onClose,closeLabel:e.closeLabel,children:e.content,...e.closeIcon===void 0?{}:{closeIcon:e.closeIcon},...e.showCloseButton===void 0?{}:{showCloseButton:e.showCloseButton},...e.dismissOnSwipe===void 0?{}:{dismissOnSwipe:e.dismissOnSwipe},...e.initialFocusSelector===void 0?{}:{initialFocusSelector:e.initialFocusSelector}};return I(e.accessibleLabelledBy===void 0?{...n,ariaLabel:e.accessibleLabel??``}:{...n,ariaLabelledBy:e.accessibleLabelledBy},t)})}function ge(e,t){return T(t,e)}function R(e,t){return oe(t,e)}n([`click`]);var z=h(`<reader-field>`,1);function B(e){let t=x(()=>_(()=>e.children));var n=v(z);return d(n,S(()=>C(e,`children`),t,{"prop:content":()=>e.children}),!1),n._$owner=i(),te(),n}var V=class extends Error{operation;status;name=`ProfileCompletionHttpError`;constructor(e,t){super(`${e} failed with HTTP ${t}`),this.operation=e,this.status=t}},H=class extends Error{operation;name=`ProfileCompletionRequestError`;constructor(e,t){super(`${e} request failed`,t),this.operation=e}};async function U(e){try{await t(await E(),e)}catch(e){throw new H(`Profile completion`,{cause:e})}}async function W(){let t=await E();return await e(t)??null}function G(e,t){return t===`increase`?e<15:e>1}async function K(n){let r=await E(),i=await e(r);if(i==null)throw new V(`Profile level adjustment`,404);let a=D.parse(n===`increase`?Math.min(i+1,15):Math.max(i-1,1));return await t(r,a),a}var q=`#ffffff`,J=`#121212`;function Y(e){let t=document.documentElement;e===null?t.removeAttribute(`data-theme`):t.dataset.theme=e?`dark`:`light`;let n=e===null?void 0:e?J:q;for(let e of document.querySelectorAll(`meta[name='theme-color'][data-theme-color]`))e.content=n??(e.dataset.themeColor===`dark`?J:q)}export{W as a,B as c,G as i,F as l,V as n,K as o,H as r,U as s,Y as t,L as u};