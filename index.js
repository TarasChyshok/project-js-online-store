import"./assets/styles-JE8YjOlG.js";import{a as o}from"./assets/vendor-N5iQpiFS.js";const n="https://dummyjson.com",s={CATEGORIES:"/products/category-list"};o.defaults.baseURL=n;async function c(){const{data:t}=await o.get(s.CATEGORIES);return t}const r={categoriesList:document.querySelector("ul.categories")};function i(t){const e=t.map(a=>`<li class="categories__item">
   <button class="categories__btn" type="button">${a}</button>
 </li>
`).join("");r.categoriesList.innerHTML=e}async function u(){try{const e=["all",...await c()];i(e)}catch(t){console.log(t)}}document.addEventListener("DOMContentLoaded",u);
//# sourceMappingURL=index.js.map
