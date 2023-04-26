import client from "./client";

export const getBrand = async (id: string) => {
  const brand = await client.brand.findUnique({
    where: {
      id,
    },
  });
  return brand;
};

export const getBrands = async () => {
  const brands = await client.brand.findMany();
  return brands;
};

export const createBrand = async (name: string) => {
  const brand = await client.brand.create({
    data: {
      name,
    },
  });
  return brand;
};

export default {
  getBrand,
  getBrands,
  createBrand,
};
