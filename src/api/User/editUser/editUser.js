import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    editUser: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { name, bio } = args;
      const { user } = request;
      return prisma.updateUser({
        where: { id: user.id },
        data: { name, bio }
      });
    }
  }
};
