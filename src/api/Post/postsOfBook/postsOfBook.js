import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    postsOfBook: async (_, args) => {
      return prisma.posts({
        first: args.first,
        after: args.after,
        where: { book: { isbn: args.isbn } }
      });
    }
  }
};
