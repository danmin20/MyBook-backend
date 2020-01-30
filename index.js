import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
  typeDefs: `type Book {
        isbn: String!
        title: String!
        link: String
        image: String
        author: String!
        price: Int
        discount: Int
        publisher: String!
        description: String
    }
    type Query {
        books(term: String!): [Book]!
        book(id: String!): Book
    }
    `,
  resolvers
});

server.start(() => console.log("server running"));
