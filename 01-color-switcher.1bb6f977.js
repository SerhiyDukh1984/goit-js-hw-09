const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");e.addEventListener("click",(function(){d=setInterval((()=>{e.disabled=!0,t.disabled=!1,document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),500)})),t.addEventListener("click",(function(){e.disabled=!1,t.disabled=!0,clearInterval(d)})),t.disabled=!0;let d=0;
//# sourceMappingURL=01-color-switcher.1bb6f977.js.map