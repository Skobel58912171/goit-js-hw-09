const t={start:document.querySelector('button[data-action="start"]'),stop:document.querySelector('button[data-action="stop"]')};let e=null;t.start.addEventListener("click",(function(o){t.start.disabled=!0,e=setInterval((()=>{const t=document.querySelector("body");t.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`,console.log(t.style.background)}),1e3)})),t.stop.addEventListener("click",(function(o){t.start.disabled=!1,clearInterval(e)}));
//# sourceMappingURL=01-color-switcher.f5cd6f6e.js.map
