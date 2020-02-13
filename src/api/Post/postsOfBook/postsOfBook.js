import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    postsOfBook: async (_, { isbn }) => {
      return prisma.posts({
        where: { book: { isbn } }
      });
    }
  }
};
