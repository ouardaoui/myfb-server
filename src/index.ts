import { ApolloServer } from "apollo-server";
import { data } from "./db";
import { typeDefs } from "./schema";
import { Query } from "./resolvers/Query";
import { User } from "./resolvers/User";
import { Post } from "./resolvers/Post";
import { Comment } from "./resolvers/Comment"
const context = {
  data,
}

const resolvers = {
  Query,
  User,
  Comment,
  Post
}

const server = new ApolloServer({ typeDefs, resolvers, context })

server.listen().then(({ url }) => {
  console.log(`${url}`)
})