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
  });
  return response;
};
