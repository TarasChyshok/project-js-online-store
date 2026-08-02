import"./assets/styles-JE8YjOlG.js";import{a as c}from"./assets/vendor-N5iQpiFS.js";const p="https://dummyjson.com",d={CATEGORIES:"/products/category-list",PRODUCTS:"/products"},i=12;c.defaults.baseURL=p;async function m(){const{data:t}=await c.get(d.CATEGORIES);return t}async function _(t){const e=(t-1)*i,{data:s}=await c.get(d.PRODUCTS,{params:{limit:i,skip:e}});return s}const n={categoriesList:document.querySelector("ul.categories"),productsList:document.querySelector(".products"),loadMoreBtn:document.querySelector(".load-more-btn")};function g(t){const e=t.map(s=>`<li class="categories__item">
   <button class="categories__btn" type="button">${s}</button>
 </li>
`).join("");n.categoriesList.innerHTML=e}function y(t){const e=t.map(({id:s,thumbnail:a,title:o,brand:r,category:u,price:l})=>`
    <li class="products__item" data-id="${s}">
    <img class="products__image" src="${a}" alt="${o}"/>
    <p class="products__title">${o}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:</span>${r}</p>
    <p class="products__category">Category: ${u} </p>
    <p class="products__price">Price: $${l}</p>
 </li>

    `).join("");n.productsList.insertAdjacentHTML("beforeend",e)}function L(){n.loadMoreBtn.classList.remove("is-hidden")}let P=1;async function f(){try{const e=["all",...await m()];g(e);const{products:s,limit:a,skip:o,total:r}=await _(P);y(s),r-a-o>0&&L()}catch(t){console.log(t)}}document.addEventListener("DOMContentLoaded",f);
//# sourceMappingURL=index.js.map
