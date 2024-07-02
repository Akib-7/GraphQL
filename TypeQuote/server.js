import connectToMongo from "./DB_Connection/db.js";
connectToMongo();

import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core/dist/plugin/landingPage/graphqlPlayground/index.js";

import typeDefs from "./GQL_Schema/schemaGQL.js";
import resolvers from "./Resolvers/resolver.js";
import checkLogin from "./Middleware/checkLogin.js";
// Apollo Server instance creation for listening to a port

const server = new ApolloServer({
  typeDefs: typeDefs,

  resolvers: resolvers,

  context: checkLogin,

  plugins: [
    //PLayground is similar to Postman
    ApolloServerPluginLandingPageGraphQLPlayground(),
  ],
});

server.listen().then(({ url }) => {
  console.log(`server ready at ${url}`);
});
