const e=document.querySelector("form"),t=e.elements.delay,o=e.elements.step,n=e.elements.amount,i=document.querySelector("button");i.addEventListener("click",(function(e){i.disabled=!0,e.preventDefault(),l=Number(t.value);for(let e=1;e<=n.value;e+=1)s=e,r(s,l).then(u).catch(m),l+=Number(o.value)}));let l=0,s=0;function u({position:e,delay:t}){console.log(`✅ Fulfilled promise ${e} in ${t}ms`)}function m({position:e,delay:t}){console.log(`❌ Rejected promise ${e} in ${t}ms`)}function r(e,t){return new Promise(((o,n)=>{timeoutId=setTimeout((()=>{const i=Math.random()>.3;return counter=1,i?(o(`✅ Fulfilled promise ${e} in ${t}ms`),{position:e,delay:t}):(n(`❌ Rejected promise ${e} in ${t}ms`),{position:e,delay:t})}),t)}))}i.disabled=!1;
//# sourceMappingURL=03-promises.d6150379.js.map
