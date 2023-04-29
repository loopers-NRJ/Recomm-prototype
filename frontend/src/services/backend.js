import { formPost, get, post } from "./http";

export const getCategory = async () => {
  return get("category");
};

export const getCategoryById = async (id) => {
  return get(`category/${id}`);
};

export const getProducts = async () => {
  return get("products");
};

export const getProductsByCategory = async (categoryId) => {
  return get(`category/${categoryId}/products`);
};

export const getBrandsByCategory = async (categoryId) => {
  return get(`category/${categoryId}/brands`);
};

export const getBrands = async () => {
  return get("brands");
};

export const getModelsByBrand = async (brandId) => {
  return get(`brands/${brandId}/models`);
};

export const getProduct = async (productId) => {
  return get(`products/${productId}`);
};

export const signup = async (email, name, password) => {
  return post("users/register", { email, name, password });
};

export const login = async (email, password) => {
  return post("users/login", { email, password });
};

export const getMyListings = async (userId) => {
  return post("users/mylistings", { userId });
};

export const createProduct = async (product) => {
  return formPost("products", product);
};
