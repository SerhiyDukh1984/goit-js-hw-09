!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");t.addEventListener("click",(function(){a=setInterval((function(){t.disabled=!0,e.disabled=!1,document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),500)})),e.addEventListener("click",(function(){t.disabled=!1,e.disabled=!0,clearInterval(a)})),e.disabled=!0;var a=0}();
//# sourceMappingURL=01-color-switcher.7c6cafe9.js.map