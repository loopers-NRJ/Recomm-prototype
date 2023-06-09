import client from "./client";

export const getCategory = async (id: string) => {
  const category = await client.category.findUnique({
    where: {
      id,
    },
  });
  return category;
};

export const getCategories = async () => {
  const categories = await client.category.findMany();
  return categories;
};

export const createCategory = async (name: string) => {
  const category = await client.category.create({
    data: {
      name,
    },
  });
  return category;
};

export const getProductsByCategory = async (id: string) => {
  const products = await client.product.findMany({
    where: {
      model: {
        categoryId: id,
      },
    },
    include: {
      model: {
        include: {
          brand: true,
          category: true,
        },
      },
    },
  });
  return products;
};

export const getBrandsByCategory = async (id: string) => {
  const brands = await client.brand.findMany({
    where: {
      models: {
        some: {
          categoryId: id,
        },
      },
    },
  });

  return brands;
};

export default {
  getCategory,
  getCategories,
  createCategory,
};
