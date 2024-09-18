(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();var f=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},s={},b={},h={},x={},C={};Object.defineProperty(C,"__esModule",{value:!0});var M={};Object.defineProperty(M,"__esModule",{value:!0});var E={};Object.defineProperty(E,"__esModule",{value:!0});var S={};Object.defineProperty(S,"__esModule",{value:!0});var P={};Object.defineProperty(P,"__esModule",{value:!0});var p={};Object.defineProperty(p,"__esModule",{value:!0});p.classnames=void 0;const $=e=>Object.entries(e).map(([n,t])=>t&&n),O=e=>!!e,H=(e,n,t)=>t.indexOf(e)===n,R=[];function L(e){return e?typeof e=="string"?[e]:Array.isArray(e)?e.flatMap(L).filter(O):$(e).filter(O):R}function G(e){const n=L(e).filter(H);return n.length>0?n.join(" "):void 0}p.classnames=G;(function(e){var n=f&&f.__createBinding||(Object.create?function(r,o,i,l){l===void 0&&(l=i);var c=Object.getOwnPropertyDescriptor(o,i);(!c||("get"in c?!o.__esModule:c.writable||c.configurable))&&(c={enumerable:!0,get:function(){return o[i]}}),Object.defineProperty(r,l,c)}:function(r,o,i,l){l===void 0&&(l=i),r[l]=o[i]}),t=f&&f.__exportStar||function(r,o){for(var i in r)i!=="default"&&!Object.prototype.hasOwnProperty.call(o,i)&&n(o,r,i)};Object.defineProperty(e,"__esModule",{value:!0}),t(C,e),t(M,e),t(E,e),t(S,e),t(P,e),t(p,e)})(x);Object.defineProperty(h,"__esModule",{value:!0});h.setAttributes=void 0;const V=x;function q(e,n){for(const t of Object.keys(e))t in n&&(n[t]=e[t])}const U=new RegExp("^on\\p{Lu}","u");function F(e,n){for(const t of Object.keys(n)){if(t==="__source"||t==="__self"||t==="tsxTag")continue;const r=n[t];if(t==="class"){const o=(0,V.classnames)(r);o&&e.setAttribute(t,o)}else if(t==="ref")r.current=e;else if(U.test(t)){const o=t.replace(/Capture$/,""),i=t!==o,l=o.toLowerCase().substring(2);e.addEventListener(l,r,i)}else t==="style"&&typeof r!="string"?q(r,e.style):t==="dangerouslySetInnerHTML"?e.innerHTML=r:r===!0?e.setAttribute(t,t):(r||r===0)&&e.setAttribute(t,r.toString())}}h.setAttributes=F;var a={};Object.defineProperty(a,"__esModule",{value:!0});a.applyTsxTag=a.createDomElement=a.applyChildren=void 0;function K(e,n){n instanceof Element?e.appendChild(n):typeof n=="string"||typeof n=="number"?e.appendChild(document.createTextNode(n.toString())):console.warn("Unknown type to append: ",n)}function D(e,n){for(const t of n)!t&&t!==0||(Array.isArray(t)?D(e,t):K(e,t))}a.applyChildren=D;function W(e,n){const t=n!=null&&n.is?{is:n.is}:void 0;return n!=null&&n.xmlns?document.createElementNS(n.xmlns,e,t):document.createElement(e,t)}a.createDomElement=W;function J(e,n){let t=e,r=n;return r&&"tsxTag"in r&&(t=r.tsxTag,!r.is&&e.includes("-")&&(r={...r,is:e})),{finalTag:t,finalAttrs:r}}a.applyTsxTag=J;Object.defineProperty(b,"__esModule",{value:!0});b.createRef=b.h=b.createElement=void 0;const Q=h,_=a;function B(e,n,...t){if(typeof e=="function")return e({...n,children:t});const{finalTag:r,finalAttrs:o}=(0,_.applyTsxTag)(e,n),i=(0,_.createDomElement)(r,o);return o&&(0,Q.setAttributes)(i,o),(0,_.applyChildren)(i,t),i}b.createElement=B;b.h=B;const X=()=>({current:null});b.createRef=X;var g={},u={};Object.defineProperty(u,"__esModule",{value:!0});u.jsxDEV=u.jsxs=u.jsx=void 0;const Y=h,y=a;function v(e,n){if(typeof e=="function")return e(n);const{children:t,...r}=n,{finalTag:o,finalAttrs:i}=(0,y.applyTsxTag)(e,r),l=(0,y.createDomElement)(o,i);return(0,Y.setAttributes)(l,i),(0,y.applyChildren)(l,[t]),l}u.jsx=v;u.jsxs=v;u.jsxDEV=v;Object.defineProperty(g,"__esModule",{value:!0});g.defineCustomElement=void 0;const Z=u;function k(e,n,t){return customElements.define(e,n,t),r=>(0,Z.jsx)(e,r)}g.defineCustomElement=k;var z={};Object.defineProperty(z,"__esModule",{value:!0});(function(e){var n=f&&f.__createBinding||(Object.create?function(r,o,i,l){l===void 0&&(l=i);var c=Object.getOwnPropertyDescriptor(o,i);(!c||("get"in c?!o.__esModule:c.writable||c.configurable))&&(c={enumerable:!0,get:function(){return o[i]}}),Object.defineProperty(r,l,c)}:function(r,o,i,l){l===void 0&&(l=i),r[l]=o[i]}),t=f&&f.__exportStar||function(r,o){for(var i in r)i!=="default"&&!Object.prototype.hasOwnProperty.call(o,i)&&n(o,r,i)};Object.defineProperty(e,"__esModule",{value:!0}),t(b,e),t(g,e),t(u,e),t(z,e)})(s);const ee=()=>s.h("nav",{class:"navbar is-fixed-top",role:"navigation","aria-label":"main navigation"},s.h("div",{class:"navbar-brand"},s.h("p",{class:"navbar-item oswald-font is-size-3-tablet is-size-4-mobile"},s.h("span",{class:"icon-text"},s.h("span",{class:"icon"},s.h("span",{class:"material-symbols-outlined is-size-3-tablet is-size-4-mobile"},"earthquake")),s.h("span",null,"DobbyAI"))),s.h("p",{class:"navbar-burger oswald-font is-size-4-tablet is-size-5-mobile"},"18 settembre '24")),s.h("div",{class:"navbar-menu"},s.h("div",{class:"navbar-start"}),s.h("div",{class:"navbar-end"},s.h("div",{class:"navbar-item oswald-font is-size-4-tablet is-size-5-mobile"},s.h("p",null,"18 settembre '24"))))),te="/dobby-ai/dobby.svg",ne=()=>s.h("div",{class:"columns is-mobile dobby-columns"},s.h("div",{class:"column pl-0 pr-0 pt-6 pb-0 is-one-third is-one-third-mobile"},s.h("figure",{class:"image dobby-image"},s.h("img",{src:te}))),s.h("div",{class:"column pl-0 pt-5 is-two-thirds is-two-thirds-mobile"},s.h("p",{id:"dobby-bubble-element",class:"is-size-4 is-size-6-mobile pl-3 oswald-font"})));function se(e){e.preventDefault(),console.log("default click action!")}const oe=({text:e="ClocheButton",onclick:n=se})=>s.h("button",{id:"cloche-button",onClick:n,class:"button is-primary oswald-font cloche-button cloche-button-hidden"},e),ie="/dobby-ai/potter-map.svg",re=()=>s.h("div",{id:"interaction-box",class:"interaction-box"},s.h("figure",{class:"image potter-map-image"},s.h("img",{src:ie}))),j="/dobby-ai/card_back.svg",le="/dobby-ai/card_figured_1.svg",ce="/dobby-ai/card_figured_2.svg",ae="/dobby-ai/card_figured_3.svg",ue="/dobby-ai/card_figured_4.svg",fe="/dobby-ai/card_figured_5.svg",de=15,be=[4,5,8,10,11],T=["first","first","second","second","third","third","fourth","fourth","fifth","fifth"],me=e=>e.sort(()=>Math.random()-.5);function he(){let e=[];me(T);for(let n=0;n<de;n++){if(be.includes(n)){e.push(s.h("div",{id:"gamecell-"+n.toString(),class:"cell"},s.h(w,{id:n,figure:"blank"})));continue}e.push(s.h("div",{id:"gamecell-"+n.toString(),class:"cell"},s.h(w,{id:n,figure:T.shift()})))}return e}const w=({id:e=0,figure:n,click:t=I})=>{switch(n){case"blank":return s.h("div",{id:e==null?void 0:e.toString(),class:"image memory-game-cell-image"});case"back":return s.h(m,{id:e==null?void 0:e.toString(),src:j,click:t});case"first":return s.h(m,{id:e==null?void 0:e.toString(),src:le,click:t});case"second":return s.h(m,{id:e==null?void 0:e.toString(),src:ce,click:t});case"third":return s.h(m,{id:e==null?void 0:e.toString(),src:ae,click:t});case"fourth":return s.h(m,{id:e==null?void 0:e.toString(),src:ue,click:t});case"fifth":return s.h(m,{id:e==null?void 0:e.toString(),src:fe,click:t});default:return s.h(m,{id:e==null?void 0:e.toString(),src:j,click:t})}};function I(e){console.log("clicked! event: ",e)}const m=({id:e,src:n,click:t=I})=>s.h("figure",{onClick:t,class:"image memory-game-cell-image"},s.h("img",{src:n})),pe=()=>s.h("div",{class:"fixed-grid has-3-cols-mobile memory-game"},s.h("div",{class:"grid"},he()));function ge(e){e.preventDefault(),console.log("load_memory_game function called");const n=document.getElementById("interaction-box");for(;n.firstChild;)n.removeChild(n.lastChild);const t=s.h(pe,null);n.appendChild(t)}const _e=()=>s.h("section",{class:"section container is-fluid pl-4 pr-4 pt-4 pb-0 viewbox"},s.h("div",{class:"columns is-multiline"},s.h("div",{class:"column is-half-desktop viewbox-column-dobby"},s.h(ne,null)),s.h("div",{class:"column level mb-0 is-half-desktop viewbox-column-cloche"},s.h("div",{class:"level-item"},s.h(oe,{text:"ALOHOMORA",onclick:ge}))),s.h("div",{class:"column is-half-desktop is-offset-half pt-0 pb-0 viewbox-column-interaction"},s.h("div",{class:"level"},s.h("div",{class:"level-item viewbox-level-item-interaction "},s.h(re,null)))))),ye=()=>{const e=document.getElementById("cloche-button");e==null||e.classList.remove("cloche-button-hidden"),console.log("removed cloche-button-hidden class from button!")},N=(e,n,t,r="",o=200)=>{let i=r;if(r.length<n.length){let l=t.shift();i+=l,console.log("acc: ",i),e.innerHTML+=l,setTimeout(()=>N(e,n,t,i,o),o)}else setTimeout(()=>{console.log("SHOW BUTTON"),ye()},850)},A="debugging",d=document.querySelector("body");d==null||d.insertBefore(s.h(_e,null),d.firstChild);d==null||d.insertBefore(s.h(ee,null),d.firstChild);const ve=document.getElementById("dobby-bubble-element");setTimeout(()=>N(ve,A,A.split(""),"",65),1e3);
