!function(){var e=document.querySelector(".form"),n=(document.querySelector('[name="delay"]'),document.querySelector('[name="step"]'),document.querySelector('[name="amount"]'),document.querySelector("button")),o=null,t=null,u=[],a=0;e.addEventListener("submit",(function(e){e.preventDefault(),n.disabled=!0;var c=e.currentTarget.elements;o=Number(c.delay.value),t=Number(c.step.value);for(var r=Number(c.amount.value),l=1;l<=r;l+=1)u.push(l);u.map((function(e){var n,u;1!==(a=e)&&(o+=t),(n=a,u=o,new Promise((function(e,o){var t=Math.random()>.3;setTimeout((function(){t?e({position:n,delay:u}):o({position:n,delay:u})}),u)}))).then((function(e){var n=e.position,o=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))}))}))}();
//# sourceMappingURL=03-promises.d0dc6fdc.js.map
