(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();var d=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o={},b={},h={},A={},x={};Object.defineProperty(x,"__esModule",{value:!0});var M={};Object.defineProperty(M,"__esModule",{value:!0});var P={};Object.defineProperty(P,"__esModule",{value:!0});var S={};Object.defineProperty(S,"__esModule",{value:!0});var B={};Object.defineProperty(B,"__esModule",{value:!0});var g={};Object.defineProperty(g,"__esModule",{value:!0});g.classnames=void 0;const U=e=>Object.entries(e).map(([t,n])=>n&&t),j=e=>!!e,$=(e,t,n)=>n.indexOf(e)===t,H=[];function L(e){return e?typeof e=="string"?[e]:Array.isArray(e)?e.flatMap(L).filter(j):U(e).filter(j):H}function F(e){const t=L(e).filter($);return t.length>0?t.join(" "):void 0}g.classnames=F;(function(e){var t=d&&d.__createBinding||(Object.create?function(s,i,r,l){l===void 0&&(l=r);var c=Object.getOwnPropertyDescriptor(i,r);(!c||("get"in c?!i.__esModule:c.writable||c.configurable))&&(c={enumerable:!0,get:function(){return i[r]}}),Object.defineProperty(s,l,c)}:function(s,i,r,l){l===void 0&&(l=r),s[l]=i[r]}),n=d&&d.__exportStar||function(s,i){for(var r in s)r!=="default"&&!Object.prototype.hasOwnProperty.call(i,r)&&t(i,s,r)};Object.defineProperty(e,"__esModule",{value:!0}),n(x,e),n(M,e),n(P,e),n(S,e),n(B,e),n(g,e)})(A);Object.defineProperty(h,"__esModule",{value:!0});h.setAttributes=void 0;const V=A;function q(e,t){for(const n of Object.keys(e))n in t&&(t[n]=e[n])}const k=new RegExp("^on\\p{Lu}","u");function K(e,t){for(const n of Object.keys(t)){if(n==="__source"||n==="__self"||n==="tsxTag")continue;const s=t[n];if(n==="class"){const i=(0,V.classnames)(s);i&&e.setAttribute(n,i)}else if(n==="ref")s.current=e;else if(k.test(n)){const i=n.replace(/Capture$/,""),r=n!==i,l=i.toLowerCase().substring(2);e.addEventListener(l,s,r)}else n==="style"&&typeof s!="string"?q(s,e.style):n==="dangerouslySetInnerHTML"?e.innerHTML=s:s===!0?e.setAttribute(n,n):(s||s===0)&&e.setAttribute(n,s.toString())}}h.setAttributes=K;var a={};Object.defineProperty(a,"__esModule",{value:!0});a.applyTsxTag=a.createDomElement=a.applyChildren=void 0;function W(e,t){t instanceof Element?e.appendChild(t):typeof t=="string"||typeof t=="number"?e.appendChild(document.createTextNode(t.toString())):console.warn("Unknown type to append: ",t)}function D(e,t){for(const n of t)!n&&n!==0||(Array.isArray(n)?D(e,n):W(e,n))}a.applyChildren=D;function J(e,t){const n=t!=null&&t.is?{is:t.is}:void 0;return t!=null&&t.xmlns?document.createElementNS(t.xmlns,e,n):document.createElement(e,n)}a.createDomElement=J;function Q(e,t){let n=e,s=t;return s&&"tsxTag"in s&&(n=s.tsxTag,!s.is&&e.includes("-")&&(s={...s,is:e})),{finalTag:n,finalAttrs:s}}a.applyTsxTag=Q;Object.defineProperty(b,"__esModule",{value:!0});b.createRef=b.h=b.createElement=void 0;const X=h,y=a;function I(e,t,...n){if(typeof e=="function")return e({...t,children:n});const{finalTag:s,finalAttrs:i}=(0,y.applyTsxTag)(e,t),r=(0,y.createDomElement)(s,i);return i&&(0,X.setAttributes)(r,i),(0,y.applyChildren)(r,n),r}b.createElement=I;b.h=I;const Y=()=>({current:null});b.createRef=Y;var _={},u={};Object.defineProperty(u,"__esModule",{value:!0});u.jsxDEV=u.jsxs=u.jsx=void 0;const Z=h,v=a;function w(e,t){if(typeof e=="function")return e(t);const{children:n,...s}=t,{finalTag:i,finalAttrs:r}=(0,v.applyTsxTag)(e,s),l=(0,v.createDomElement)(i,r);return(0,Z.setAttributes)(l,r),(0,v.applyChildren)(l,[n]),l}u.jsx=w;u.jsxs=w;u.jsxDEV=w;Object.defineProperty(_,"__esModule",{value:!0});_.defineCustomElement=void 0;const ee=u;function te(e,t,n){return customElements.define(e,t,n),s=>(0,ee.jsx)(e,s)}_.defineCustomElement=te;var R={};Object.defineProperty(R,"__esModule",{value:!0});(function(e){var t=d&&d.__createBinding||(Object.create?function(s,i,r,l){l===void 0&&(l=r);var c=Object.getOwnPropertyDescriptor(i,r);(!c||("get"in c?!i.__esModule:c.writable||c.configurable))&&(c={enumerable:!0,get:function(){return i[r]}}),Object.defineProperty(s,l,c)}:function(s,i,r,l){l===void 0&&(l=r),s[l]=i[r]}),n=d&&d.__exportStar||function(s,i){for(var r in s)r!=="default"&&!Object.prototype.hasOwnProperty.call(i,r)&&t(i,s,r)};Object.defineProperty(e,"__esModule",{value:!0}),n(b,e),n(_,e),n(u,e),n(R,e)})(o);const E="/dobby-ai/card_back.svg",ne="/dobby-ai/card_figured_1.svg",oe="/dobby-ai/card_figured_2.svg",ie="/dobby-ai/card_figured_3.svg",se="/dobby-ai/card_figured_4.svg",re="/dobby-ai/card_figured_5.svg",p=({id:e="none",figure:t,click:n=N})=>{switch(t){case"blank":return o.h("div",{class:"image memory-game-cell-image","data-card-id":e});case"back":return o.h(m,{id:e,src:E,click:n});case"first":return o.h(m,{id:e,src:ne,click:n});case"second":return o.h(m,{id:e,src:oe,click:n});case"third":return o.h(m,{id:e,src:ie,click:n});case"fourth":return o.h(m,{id:e,src:se,click:n});case"fifth":return o.h(m,{id:e,src:re,click:n});default:return o.h(m,{id:e,src:E,click:n})}};function N(e){console.log("clicked! event: ",e)}const m=({id:e,src:t,click:n=N})=>o.h("figure",{onClick:n,class:"image memory-game-cell-image"},o.h("img",{src:t,"data-card-id":e})),le=()=>o.h("div",{class:"fixed-grid has-3-cols-mobile memory-game"},o.h("div",{class:"grid"},C));function ce(e){console.log("card_id",e);let t=document.getElementById(e||"none"),n=O.get(e||"blank");for(console.log("-------DEBUG (unfold_card - actions/cards)-------"),console.log("raw card_element",t);t!=null&&t.firstChild;)t.removeChild(t.lastChild);t==null||t.appendChild(o.h(p,{id:e,figure:n,click:de}))}function ae(e){let t=document.getElementById(e||"none");for(console.log("-------DEBUG (unfold_card)-------"),console.log("raw card_element",t);t!=null&&t.firstChild;)t.removeChild(t.lastChild);t==null||t.appendChild(o.h(p,{id:e,figure:"back",click:z}))}function ue(e){e.preventDefault();const t=document.getElementById("interaction-box");for(;t.firstChild;)t.removeChild(t.lastChild);const n=o.h(le,null);console.log("new_element",n),t.appendChild(n)}function z(e){e.stopPropagation();let n=e.target.getAttribute("data-card-id")||"none";console.log("handler card_id",n),document.getElementById(n||"none"),ce(n)}function de(e){e.stopPropagation();let n=e.target.getAttribute("data-card-id")||"none";console.log("handler card_id",n),document.getElementById(n||"none"),ae(n)}const fe=15,be=[4,5,8,10,11],T=["first","first","second","second","third","third","fourth","fourth","fifth","fifth"],O=new Map,C=[],me=e=>e.sort(()=>Math.random()-.5);function he(){let e=[];me(T);for(let t=0;t<fe;t++){if(be.includes(t)){const i=o.h("div",{id:"gamecell-"+t.toString(),class:"cell"},o.h(p,{id:"gamecell-"+t.toString(),figure:"blank"}));C.push(i),e.push(i);continue}const n=T.shift();O.set("gamecell-"+t,n);const s=o.h("div",{id:"gamecell-"+t.toString(),class:"cell"},o.h(p,{id:"gamecell-"+t.toString(),figure:"back",click:z}));C.push(s),e.push(s)}return console.log("CURRENT_FIGURES_MAP: ",O),e}const pe=()=>o.h("nav",{class:"navbar is-fixed-top",role:"navigation","aria-label":"main navigation"},o.h("div",{class:"navbar-brand"},o.h("p",{class:"navbar-item oswald-font is-size-3-tablet is-size-4-mobile"},o.h("span",{class:"icon-text"},o.h("span",{class:"icon"},o.h("span",{class:"material-symbols-outlined is-size-3-tablet is-size-4-mobile"},"earthquake")),o.h("span",null,"DobbyAI"))),o.h("p",{class:"navbar-burger oswald-font is-size-4-tablet is-size-5-mobile"},"18 settembre '24")),o.h("div",{class:"navbar-menu"},o.h("div",{class:"navbar-start"}),o.h("div",{class:"navbar-end"},o.h("div",{class:"navbar-item oswald-font is-size-4-tablet is-size-5-mobile"},o.h("p",null,"18 settembre '24"))))),ge="/dobby-ai/dobby.svg",_e=()=>o.h("div",{class:"columns is-mobile dobby-columns"},o.h("div",{class:"column pl-0 pr-0 pt-6 pb-0 is-one-third is-one-third-mobile"},o.h("figure",{class:"image dobby-image"},o.h("img",{src:ge}))),o.h("div",{class:"column pl-0 pt-5 is-two-thirds is-two-thirds-mobile"},o.h("p",{id:"dobby-bubble-element",class:"is-size-4 is-size-6-mobile pl-3 oswald-font"})));function ye(e){e.preventDefault(),console.log("default click action!")}const ve=({text:e="ClocheButton",onclick:t=ye})=>o.h("button",{id:"cloche-button",onClick:t,class:"button is-primary oswald-font cloche-button cloche-button-hidden"},e),Oe="/dobby-ai/potter-map.svg",Ce=()=>o.h("div",{id:"interaction-box",class:"interaction-box"},o.h("figure",{class:"image potter-map-image"},o.h("img",{src:Oe}))),we=()=>o.h("section",{class:"section container is-fluid pl-4 pr-4 pt-4 pb-0 viewbox"},o.h("div",{class:"columns is-multiline"},o.h("div",{class:"column is-half-desktop viewbox-column-dobby"},o.h(_e,null)),o.h("div",{class:"column level mb-0 is-half-desktop viewbox-column-cloche"},o.h("div",{class:"level-item"},o.h(ve,{text:"ALOHOMORA",onclick:ue}))),o.h("div",{class:"column is-half-desktop is-offset-half pt-0 pb-0 viewbox-column-interaction"},o.h("div",{class:"level"},o.h("div",{class:"level-item viewbox-level-item-interaction "},o.h(Ce,null)))))),je=()=>{const e=document.getElementById("cloche-button");e==null||e.classList.remove("cloche-button-hidden"),console.log("removed cloche-button-hidden class from button!")},G=(e,t,n,s="",i=200)=>{let r=s;if(s.length<t.length){let l=n.shift();r+=l,console.log("acc: ",r),e.innerHTML+=l,setTimeout(()=>G(e,t,n,r,i),i)}else setTimeout(()=>{console.log("SHOW BUTTON"),je()},850)};function Ee(e,t,n=65){let s=t.split("");G(e,t,s,"",n)}const Te="Ciao Erica! Sono Dobby, un elfo domestico virtuale. Tuo fratello mi ha programmato per farti gli auguri, ma credo di aver fatto un pasticcio...troppa Burrobirra ieri sera...",f=document.querySelector("body");f==null||f.insertBefore(o.h(we,null),f.firstChild);f==null||f.insertBefore(o.h(pe,null),f.firstChild);const Ae=document.getElementById("dobby-bubble-element");he();console.log("past init_cell_list call");setTimeout(()=>Ee(Ae,Te),1e3);
