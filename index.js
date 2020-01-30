import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
  typeDefs: `type Book {
        id: Int!
        title: String!
        link: String!
        image: String
        author: String!
        price: Int
        discount: Int
        publisher: String!
        description: String!
    }
    type Query {
        books(term: String!): [Book]!
        book(title: String!): Book!
    }
    `,
  resolvers
});

server.start(() => console.log("server running"));
