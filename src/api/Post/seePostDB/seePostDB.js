import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seePostDB: async (_, args) => {
      return prisma.posts({
        first: args.first,
        skip: args.offset,
        orderBy: "createdAt_DESC"
      });
    }
  }
};
