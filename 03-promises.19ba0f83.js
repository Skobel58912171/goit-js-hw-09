var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var l={id:e,exports:{}};return o[e]=l,n.call(l.exports,l,l.exports),l.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},e.parcelRequired7c6=n);var l=n("eWCmQ");const i=document.querySelector(".form");function r(e,o){return new Promise(((t,n)=>{const l=Math.random()>.3;setTimeout((()=>{l?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}i.addEventListener("submit",(function(e){e.preventDefault();const{delay:o,step:t,amount:n}=e.target.elements,s=Number(n.value),a=Number(o.value),d=Number(t.value);console.log(n.value),console.log(o.value),console.log(t.value);let u=a;const c=i.lastElementChild;c.disabled=!1;for(let e=1;e<=s;e+=1)r(e,u).then((({position:e,delay:o})=>{l.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{l.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)})),u+=d;c.disabled=!0}));
//# sourceMappingURL=03-promises.19ba0f83.js.map
