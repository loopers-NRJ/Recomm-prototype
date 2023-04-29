import client from "./client";

import bcrypt from "bcrypt";

export const createUser = async (
  email: string,
  name: string,
  password: string
) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const response = await client.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  });
  return response;
};

export const getMyListings = async (userId: string) => {
  const response = await client.product.findMany({
    where: {
      userId,
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
  return response;
};

export const getUser = async (email: string, password: string) => {
  const response = await client.user.findUnique({
    where: {
      email,
    },
  });
  if (!response) return new Error("User not found");
  const isPasswordCorrect = await bcrypt.compare(password, response.password);
  if (!isPasswordCorrect) return new Error("Incorrect password");
  return response;
};
