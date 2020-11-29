import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    searchComment: async (_, args) =>
      prisma.comments({
        where: {
          text_contains: args.text,
        },
      }),
  },
};
