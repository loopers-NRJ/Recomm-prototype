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

export default {
  getCategory,
  getCategories,
  createCategory,
};
