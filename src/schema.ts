import { gql } from "apollo-server";

export const typeDefs = gql`
type User {
  id: Float!
  name: String!
  email: String!
  age: Int
  comments: [Comment]
  posts: [Post]
}
type Post{
  id: String!
  title: String!
  body: String!
  published: Boolean!
  author: Float!
  comments: [Comment]
}
type Comment {
  id: String!
  text: String!
  author: Float!
}

type Query {
  users(query: String) : [User]!
  comments: [Comment]!
  posts(query: String): [Post]!
  me: User!
}
`