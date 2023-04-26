import client from "./client";

export const getModels = async () => {
  const models = await client.model.findMany();
  return models;
};

export const getModelsByBrand = async (brandId: string) => {
  const models = await client.model.findMany({
    where: {
      brandId,
    },
  });
  return models;
};

export const getModel = async (id: string) => {
  const model = await client.model.findUnique({
    where: {
      id,
    },
  });
  return model;
};

export const createModel = async (
  name: string,
  brandId: string,
  categoryId: string
) => {
  const category = await client.category.findUnique({
    where: {
      id: categoryId,
    },
  });
  if (!category) return new Error("Category not found");

  const brand = await client.brand.findUnique({
    where: {
      id: brandId,
    },
  });
  if (!brand) return new Error("Brand not found");

  const model = await client.model.create({
    data: {
      name,
      category: {
        connect: {
          id: category.id,
        },
      },
      brand: {
        connect: {
          id: brand.id,
        },
      },
    },
  });

  return model;
};

export default {
  getModels,
  getModel,
  createModel,
};
