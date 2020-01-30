import { getBooks, getBook } from "./db";

const resolvers = {
  Query: {
    books: (_, { term }) => getBooks(term),
    book: (_, { title }) => getBook(title)
  }
};

export default resolvers;
