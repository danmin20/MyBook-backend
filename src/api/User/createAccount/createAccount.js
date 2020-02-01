import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    createAccount: async (_, args) => {
      const { name, email } = args;
      const exists = await prisma.$exists.user(email);
      if (exists) {
        throw Error("This email is already exists");
      }
      await prisma.createUser({
        name,
        email
      });
      return true;
    }
  }
};
