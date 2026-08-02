import refs from './refs';
export function renderCategories(categories) {
  const elementsMarkup = categories
    .map(category => {
      return `<li class="categories__item">
   <button class="categories__btn" type="button">${category}</button>
 </li>
`;
    })
    .join('');
  refs.categoriesList.innerHTML = elementsMarkup;
}

export function renderProducts(products) {
  const elementsMarkup = products
    .map(({ id, thumbnail, title, brand, category, price }) => {
      return `
    <li class="products__item" data-id="${id}">
    <img class="products__image" src="${thumbnail}" alt="${title}"/>
    <p class="products__title">${title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:</span>${brand}</p>
    <p class="products__category">Category: ${category} </p>
    <p class="products__price">Price: $${price}</p>
 </li>

    `;
    })
    .join('');
  refs.productsList.insertAdjacentHTML('beforeend', elementsMarkup);
}

export function showLoadMoreButton() {
  refs.loadMoreBtn.classList.remove('is-hidden');
}
export function hideLoadMoreButton() {
  refs.loadMoreBtn.classList.add('is-hidden');
}
