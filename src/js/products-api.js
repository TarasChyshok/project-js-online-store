import axios from 'axios';
import { API_ENDPOINTS, BASE_URL } from './constants';
axios.defaults.baseURL = BASE_URL;
export async function getCategories() {
  //https://dummyjson.com/products/category-list
  const { data } = await axios.get(API_ENDPOINTS.CATEGORIES);
  return data;
}
