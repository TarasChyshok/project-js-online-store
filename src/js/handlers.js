import { getCategories } from './products-api';
import { renderCategories } from './render-function';

export async function initHomePage() {
  try {
    const data = await getCategories();
    const categories = ['all', ...data];
    renderCategories(categories);
  } catch (error) {
    console.log(error);
  }
}
