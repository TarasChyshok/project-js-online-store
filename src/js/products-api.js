import axios from 'axios';
import { API_ENDPOINTS, BASE_URL, PRODUCTS_PER_PAGE } from './constants';
axios.defaults.baseURL = BASE_URL;
export async function getCategories() {
  //https://dummyjson.com/products/category-list
  const { data } = await axios.get(API_ENDPOINTS.CATEGORIES);
  return data;
}

export async function getProducts(page) {
  // https://dummyjson.com/products?limit=10&skip=10
  const skip = (page - 1) * PRODUCTS_PER_PAGE;
  const { data } = await axios.get(API_ENDPOINTS.PRODUCTS, {
    params: { limit: PRODUCTS_PER_PAGE, skip },
  });
  return data;
}
