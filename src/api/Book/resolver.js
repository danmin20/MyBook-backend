import { getBooks } from "../../getBooks";

export const resolvers = {
  Query: {
    books: (_, { term, start }) => getBooks(term, start)
  }
};
