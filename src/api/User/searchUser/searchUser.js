import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    searchUser: async (_, args) =>
      prisma.users({
        where: {
          name_contains: args.name
        }
      })
  }
};
