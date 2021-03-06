import { prisma } from "../../../../generated/prisma-client";
import { getBooks } from "../../../getBooks";

export default {
  Mutation: {
    upload: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const { title, sentiment, bookId } = args;
      const [book] = await getBooks(bookId, 1);
      const post = await prisma.createPost({
        title,
        sentiment,
        user: { connect: { id: user.id } }
      });
      await prisma.createBook({
        isbn: book.isbn.replace(/<b>/gi, "").replace(/<\/b>/gi, ""),
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
