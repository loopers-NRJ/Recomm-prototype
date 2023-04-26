import { PrismaClient } from "@prisma/client";

class Client {
  private static instance: PrismaClient;

  static getInstance() {
    if (!Client.instance) {
      Client.instance = new PrismaClient();
    }
    return Client.instance;
  }
}

export default Client.getInstance();
