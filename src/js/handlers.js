import { getCategories, getProducts } from './products-api';
import {
  renderCategories,
  renderProducts,
  showLoadMoreButton,
} from './render-function';

let currentPage = 1;

export async function initHomePage() {
  try {
    const data = await getCategories();
    const categories = ['all', ...data];
    renderCategories(categories);

    const { products, limit, skip, total } = await getProducts(currentPage);

    renderProducts(products);

    if (total - limit - skip > 0) {
      showLoadMoreButton();
    }
  } catch (error) {
    console.log(error);
  }
}
