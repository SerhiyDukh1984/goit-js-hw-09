const e=document.querySelector("form"),t=e.elements.delay,o=e.elements.step,n=e.elements.amount,i=document.querySelector("button");function l({position:e,delay:t}){console.log(`✅ Fulfilled promise ${e} in ${t}ms`)}function u({position:e,delay:t}){console.log(`❌ Rejected promise ${e} in ${t}ms`)}function s(e,t){return new Promise(((e,o)=>{timeoutId=setTimeout((()=>{let l=0,u=0;if(u>n)return clearTimeout(timeoutId),void(i.disabled=!1);l=1,u=1,Math.random()>.3?e({position:1,delay:t}):o({position:1,delay:t})}),t)}))}e.addEventListener("submit",(function(e){i.disabled=!0,e.preventDefault();let m=Number(t.value);for(let e=1;e<=n.value;e+=1)s(e,m).then(l).catch(u),m+=Number(o.value)}));
//# sourceMappingURL=03-promises.dbca489d.js.map