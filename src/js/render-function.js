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
