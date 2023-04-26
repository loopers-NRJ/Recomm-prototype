import client from "./client";

export const getProducts = async () => {
  const response = await client.product.findMany();
  return response;
};

export const getProduct = async (id: string) => {
  const response = await client.product.findUnique({
    where: { id },
  });
  return response;
};

export const getProductByUserId = async (userId: string) => {
  const response = await client.product.findMany({
    where: {
      userId,
    },
  });
  return response;
};

export const createProduct = async (
  userId: string,
  modelId: string,
  price: number,
  images: string[]
) => {
  // not optimized yet
  const user = await client.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) return new Error("User not found");

  const model = await client.model.findUnique({
    where: {
      id: modelId,
    },
  });
  if (!model) return new Error("Model not found");

  const response = await client.product.create({
    data: {
      model: {
        connect: {
          id: model.id,
        },
      },
      user: {
        connect: {
          id: user.id,
        },
      },
      price,
      pictures: images,
    },
  });
  return response;
};
