import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seePostDB: async (_, args) => {
      return prisma.posts({
        first: args.first,
        after: args.after,
        orderBy: "createdAt_DESC"
      });
    }
  }
};
