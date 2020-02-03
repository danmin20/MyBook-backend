import { prisma } from "../../../../generated/prisma-client";
import getBooks from "../../Book/getBooks/getBooks";

export default {
  Mutation: {
    upload: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const { sentiment, bookId } = args;
      const book = await getBooks({ term: { bookId } });
      const post = await prisma.createPost({
        sentiment,
        user: { connect: { id: user.id } }
      });
      await prisma.createBook({
        isbn: book.isbn,
        title: book.title,
        link: book.link,
        image: book.image,
        author: book.author,
        price: book.price,
        discount: book.discount,
        publisher: book.publisher,
        description: book.description,
        post: {
          connect: {
            id: post.id
          }
        }
      });
      return post;
    }
  }
};
