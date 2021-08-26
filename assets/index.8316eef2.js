var e,t,r,o,n=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)},s=(e,t,r)=>(n(e,t,"read from private field"),r?r.call(e):t.get(e)),l=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},i=(e,t,r,o)=>(n(e,t,"write to private field"),o?o.call(e,r):t.set(e,r),r);import{r as a,t as c,c as d,o as u,a as g,i as p,b as h,d as f,e as m,f as v,s as w,g as k,h as b,m as y,I as x,j as M,k as C,l as z}from"./vendor.c1c5917e.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const N=[{grid:16,cell:"1.5rem"},{grid:24,cell:"1rem"},{grid:32,cell:"0.75rem"},{grid:40,cell:"0.6rem"},{grid:48,cell:"0.5rem"},{grid:56,cell:"0.43125rem"},{grid:64,cell:"0.375rem"},{grid:96,cell:"0.25rem"}],S=e=>a(0,e).map((()=>({state:()=>!1,toggle:()=>{}}))).map(((e,t,r)=>r.slice())),L=e=>S(e).map((e=>e.map((()=>({state:()=>Math.random()>=.8,toggle:()=>{}})))));e=new WeakMap,t=new WeakMap,r=new WeakMap,o=new WeakMap;const P=new class{constructor(n=100,s={lightness:.6,saturation:1}){l(this,e,void 0),l(this,t,void 0),l(this,r,void 0),l(this,o,{}),i(this,e,360/Math.sqrt(n**2*2)),i(this,t,100*s.saturation),i(this,r,100*s.lightness),i(this,o,{})}withHue(t){const r=360/Math.sqrt(t**2*2);return r!==s(this,e)&&i(this,o,{}),i(this,e,r),this}getColor(n,l){const i=[n,l].join("-");if(i in s(this,o))return s(this,o)[i];const a=`hsl(${Math.floor(Math.sqrt(n**2+l**2)*s(this,e))},${s(this,t)}%,${s(this,r)}%)`;return s(this,o)[i]=a,a}},j=e=>e.map(((t,r)=>t.map(((t,o)=>{const n=(s=t.state(),l=((e,t)=>(({y:e,x:t})=>[-1,0,1].reduce(((r,o,n,s)=>s.reduce(((r,n)=>n||o?[...r,[e+o,t+n]]:r),r)),[]))(t).map((e=>t=>{return(([t,r])=>e[t][r])((r=e.length,t.map((e=>t=>-1===t?e-1:t===e?0:t)(r))));var r})(e)).filter((e=>e.state())).length)(e,{y:r,x:o}),s?l>=2&&l<=3:3===l);var s,l;return{state:()=>n,toggle:()=>{}}})))),G=c('<div class="rounded-full bg-dark text-accent p-2 px-4 font-bold"> fps</div>'),B=e=>{const[t,r]=d(0);let o=0;function n(t){const s=e.frames;r(s-t),o=window.setTimeout((()=>n(s)),1e3)}return u((()=>{n(e.frames)})),g((()=>{clearTimeout(o)})),(()=>{const e=G.cloneNode(!0),r=e.firstChild;return p(e,t,r),h((r=>f(e,{"opacity-0 border":t()<=0},r))),e})()},U=c('<div class="flex m-auto ring-4 ring-dark bg-dark rounded-xl p-1"><div class="border-2 rounded-lg border-dark"></div></div>'),T=e=>(()=>{const t=U.cloneNode(!0),r=t.firstChild;return p(r,(()=>e.children)),t})(),$=c('<div role="button" class="rounded-full m-px"></div>'),q=e=>{var t;const r=N[null!=(t=e.sizeIndex)?t:0].cell;return(()=>{const t=$.cloneNode(!0);return v(t,"click",e.onClick,!0),w(t,e,!1,!1),h((o=>{var n;return k(t,`background-color: ${null!=(n=e.bgColor)?n:"#262626"}; height: ${r}; width: ${r}; transition: background-color 0.1s ease-out;`,o)})),t})()};m(["click"]);const A=c('<button role="button" class="rounded-full text-white h-16 w-16 p-4 grid place-items-center hover:opacity-75 focus:outline-none focus:ring focus:ring-offset-gray-800 focus:ring-offset-2 disabled:opacity-50 disabled:filter disabled:grayscale disabled:cursor-not-allowed"></button>'),I=({variant:e,...t})=>(()=>{const r=A.cloneNode(!0);return f(r,{"bg-blue-800 ring-blue-800/60":"blue"===e||!e,"bg-red-800 ring-red-800/60":"red"===e,"bg-teal-800 ring-teal-800/60":"teal"===e,"bg-cyan-800 ring-cyan-800/60":"cyan"===e,"bg-green-800 ring-green-800/60":"green"===e}),w(r,t,!1,!1),r})(),O=c('<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Shuffle</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M400 304l48 48-48 48M400 112l48 48-48 48M64 352h85.19a80 80 0 0066.56-35.62L256 256"></path><path d="M64 160h85.19a80 80 0 0166.56 35.62l80.5 120.76A80 80 0 00362.81 352H416M416 160h-53.19a80 80 0 00-66.56 35.62L288 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path></svg>'),R=c('<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Refresh</title><path d="M320 146s24.36-12-64-12a160 160 0 10160 160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 58l80 80-80 80"></path></svg>'),W=c('<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Play Skip Forward</title><path d="M112 111v290c0 17.44 17 28.52 31 20.16l247.9-148.37c12.12-7.25 12.12-26.33 0-33.58L143 90.84c-14-8.36-31 2.72-31 20.16z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M400 80v352"></path></svg>'),E=c('<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Play</title><path d="M112 111v290c0 17.44 17 28.52 31 20.16l247.9-148.37c12.12-7.25 12.12-26.33 0-33.58L143 90.84c-14-8.36-31 2.72-31 20.16z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></path></svg>'),F=c('<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Pause</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M176 96h16v320h-16zM320 96h16v320h-16z"></path></svg>'),H=O.cloneNode(!0),D=R.cloneNode(!0),K=W.cloneNode(!0),J=E.cloneNode(!0),Q=F.cloneNode(!0),V=c('<div class="w-full flex justify-evenly"></div>'),X=e=>(()=>{const t=V.cloneNode(!0);return p(t,b(I,{get onclick(){return e.onRandom},variant:"teal",get children(){return H}}),null),p(t,b(I,{get onclick(){return e.onReset},variant:"cyan",get children(){return D}}),null),p(t,(()=>{const t=y((()=>!!e.isPlaying),!0);return()=>t()?b(I,{get onclick(){return e.onNextState},variant:"blue",disabled:!0,get children(){return K}}):b(I,{get onclick(){return e.onNextState},variant:"blue",get children(){return K}})})(),null),p(t,(()=>{const t=y((()=>!!e.isPlaying),!0);return()=>t()?b(I,{get onclick(){return e.onTogglePlay},variant:"red",get children(){return Q}}):b(I,{get onclick(){return e.onTogglePlay},variant:"green",get children(){return J}})})(),null),t})(),Y=c("<div></div>"),Z=c('<main class="grid h-screen bg-gradient-to-br from-dark to-primary place-items-center text-light"><div class="grid gap-8 place-items-center md:-mt-24 transform "><h1 class="text-4xl w-full "><div class="flex flex-wrap mx-auto justify-evenly items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 166 155.3" class="w-12"><defs><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="27.5" y1="3" x2="152" y2="63.5"><stop offset=".1" stop-color="#76b3e1"></stop><stop offset=".3" stop-color="#dcf2fd"></stop><stop offset="1" stop-color="#76b3e1"></stop></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="95.8" y1="32.6" x2="74" y2="105.2"><stop offset="0" stop-color="#76b3e1"></stop><stop offset=".5" stop-color="#4377bb"></stop><stop offset="1" stop-color="#1f3b77"></stop></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="18.4" y1="64.2" x2="144.3" y2="149.8"><stop offset="0" stop-color="#315aa9"></stop><stop offset=".5" stop-color="#518ac8"></stop><stop offset="1" stop-color="#315aa9"></stop></linearGradient><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="75.2" y1="74.5" x2="24.4" y2="260.8"><stop offset="0" stop-color="#4377bb"></stop><stop offset=".5" stop-color="#1a336b"></stop><stop offset="1" stop-color="#1a336b"></stop></linearGradient></defs><path d="M163 35S110-4 69 5l-3 1c-6 2-11 5-14 9l-2 3-15 26 26 5c11 7 25 10 38 7l46 9 18-30z" fill="#76b3e1"></path><path d="M163 35S110-4 69 5l-3 1c-6 2-11 5-14 9l-2 3-15 26 26 5c11 7 25 10 38 7l46 9 18-30z" opacity=".3" fill="url(#a)"></path><path d="m52 35-4 1c-17 5-22 21-13 35 10 13 31 20 48 15l62-21S92 26 52 35z" fill="#518ac8"></path><path d="m52 35-4 1c-17 5-22 21-13 35 10 13 31 20 48 15l62-21S92 26 52 35z" opacity=".3" fill="url(#b)"></path><path d="M134 80a45 45 0 0 0-48-15L24 85 4 120l112 19 20-36c4-7 3-15-2-23z" fill="url(#c)"></path><path d="M114 115a45 45 0 0 0-48-15L4 120s53 40 94 30l3-1c17-5 23-21 13-34z" fill="url(#d)"></path></svg><svg width="180" viewBox="0 0 63 12.8" xmlns="http://www.w3.org/2000/svg"><path d="M.8 9.9s1.2 1.3 3.1 1.3c1.3 0 2.3-.8 2.3-2C6.2 6.3.4 7 .4 3.4.4 1.7 1.8.2 4 .2c2 0 3.1 1.1 3.1 1.1l-.5 1s-1-1-2.5-1-2.4 1-2.5 2c0 2.7 5.8 2 5.8 5.8 0 1.7-1.3 3.2-3.5 3.2-2.4 0-3.7-1.5-3.7-1.5zM19.1.3c3.3 0 5.9 2.6 5.9 6s-2.6 6.1-5.9 6.1-5.9-2.7-5.9-6.1 2.6-6 5.9-6zm0 11c2.6 0 4.7-2.2 4.7-5s-2.1-4.9-4.7-4.9-4.7 2.1-4.7 4.9c-.1 2.7 2 5 4.7 5zM31.7.5h1.1v10.6h5.3v1h-6.5zm12.7.1h1.1v11.6h-1.1zm8.6 0h3.7c3.5 0 5.8 2.2 5.8 5.8 0 3.7-2.4 5.8-5.9 5.8h-3.7zm3.6 10.6c2.8 0 4.8-1.6 4.8-4.8 0-3.1-1.9-4.8-4.7-4.8h-2.5v9.6z" fill="currentcolor"></path></svg><div class="text-[#d5dce5]">Game of Life</div></div> </h1></div></main>'),_=c('<div class="flex flex-1"></div>'),ee=()=>{const[e,t]=d(3),r=N[e()].grid,o=e=>e.map((e=>e.map((e=>{const[t,r]=d(e.state());return{state:t,toggle:()=>r(!t())}})))),[n,s]=d(o(L(r))),[l,i]=d(0),a=()=>s((()=>o(L(r)))),c=()=>s((e=>o(j(e)))),u=()=>{s((()=>o(S(r))))};let g=0,[h,f]=d(!1);const m=()=>{if(h())return window.cancelAnimationFrame(g),void M((()=>{s(o),f(!1),i(0)}));f(!0),function e(){M((()=>{s(j),i(C)})),h()&&(g=window.requestAnimationFrame(e))}()},v=e=>t=>{0===t.button&&1===t.buttons&&e().toggle()};return(()=>{const t=Z.cloneNode(!0),o=t.firstChild;return o.firstChild,p(o,b(X,{onRandom:a,onTogglePlay:m,onReset:u,onNextState:c,get isPlaying(){return h()}}),null),p(o,b(T,{get children(){const t=Y.cloneNode(!0);return p(t,b(x,{get each(){return n()},children:(t,o)=>(()=>{const n=_.cloneNode(!0);return p(n,b(x,{get each(){return t()},children:(t,n)=>(()=>{const s=y((()=>!!t().state()),!0);return b(q,{get onMouseDown(){return v(t)},get onMouseMove(){return v(t)},get isAlive(){return t().state()},get sizeIndex(){return e()},get bgColor(){return s()?((e,t,r)=>r?P.withHue(r).getColor(e,t):P.getColor(e,t))(o,n,r):void 0}})})()})),n})()})),t}}),null),p(o,b(B,{get frames(){return l()}}),null),t})()};z((()=>b(ee,{})),document.getElementById("root"));
