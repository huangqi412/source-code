module.exports={domContentLoadedThen:async e=>"loading"==document.readyState?new Promise(a=>{document.addEventListener("DOMContentLoaded",()=>a(e()),{once:!0})}):e(),getData:async(e=location.href)=>{const a=e.replace(/\/(\w+)\.html$/,"/data$1.js"),t=await fetch(a,{credentials:"include"}),n=(await t.text()).replace("globalCache = ","").replace(/;$/,"");return JSON.parse(n)},getRandomElement:e=>e[Math.floor(Math.random()*e.length)],createArrayOf:(e,a)=>new Array(a).fill(e)};