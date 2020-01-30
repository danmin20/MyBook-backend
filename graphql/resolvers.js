import { getBooks, getBook } from "./db";

const resolvers = {
  Query: {
    books: (_, { term }) => getBooks(term),
    book: (_, { id }) => getBook(id)
  }
};

export default resolvers;
