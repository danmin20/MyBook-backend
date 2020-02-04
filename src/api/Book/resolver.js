import { getBooks } from "../../getBooks";

export const resolvers = {
  Query: {
    books: (_, { term }) => getBooks(term)
  }
};
