const e=document.querySelector("form"),t=e.elements.delay,o=e.elements.step,n=e.elements.amount;console.log("🚀 ~ amountEl",n.value);const l=document.querySelector("button");function i(e,t){return new Promise(((o,l)=>{timeoutId=setTimeout((()=>{0>n&&clearTimeout(timeoutId);Math.random()>.3?o({position:e,delay:t}):l({position:e,delay:t})}),t)}))}function u({position:e,delay:t}){console.log(`Fulfilled promise ${e} in ${t}ms`)}function s({position:e,delay:t}){console.log(`Rejected promise ${e} in ${t}ms`)}e.addEventListener("submit",(function(e){l.disabled=!0,e.preventDefault();let m=Number(t.value);for(let e=1;e<=n.value;e+=1)i(e,m).then(u).catch(s),m+=Number(o.value)}));
//# sourceMappingURL=03-promises.8666af13.js.map
