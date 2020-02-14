import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";
import "./passport";
import { isAuthenticated } from "./middleware";
import { authenticateJwt } from "./passport";
import "@babel/polyfill";
import "@babel/plugin-transform-runtime";

const PORT = process.env.PORT || 80;

const server = new GraphQLServer({
  schema,
  context: ({ request }) => ({ request, isAuthenticated })
});

server.express.use(logger("dev"));
server.express.use(authenticateJwt);

server.start({ port: PORT }, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
