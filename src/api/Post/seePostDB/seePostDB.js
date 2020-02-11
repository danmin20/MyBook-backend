import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seePostDB: async () => {
      return prisma.posts({
        orderBy: "createdAt_DESC"
      });
    }
  }
};
