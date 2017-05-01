const typeDefinitions = `
type User {
  id: ID!
  qqId: String
  weiboId: String
  facebookId: String
  twitterId: String
  githubId: String
  avatar: String
  firstName: String
  lastName: String
  nickname: String
  timezone: Int
  publisher: Boolean
  createdAt: String
  updatedAt: String
  posts: [Post]
}
type Post {
  id: ID!
  title: String
  url: String
  content: String
  views: Int
  createdAt: String
  updatedAt: String
  comments: [Comment]
  user: User
}
type Comment {
  id: ID!
  content: String
  locked: Boolean
  createdAt: String
  updatedAt: String
  post: Post
}


input UserInput {
  rowId: Int
  qqId: String
  weiboId: String
  facebookId: String
  twitterId: String
  githubId: String
  avatar: String
  nickname: String!
  firstName: String
  lastName: String
  publisher: Boolean
  createdAt: String
  updatedAt: String
}

input CreateUserInput {
  clientMutationId: String
  user: UserInput!
}
type CreateUserPayload {
  clientMutationId: String
  user: User
  query: Query
}



type Query {
  user(firstName: String, lastName: String): User
  getUSDA: String
}
type Mutation {

  createUser(
    input: CreateUserInput!
  ): CreateUserPayload

}
schema {
  query: Query
  mutation: Mutation
}
`;

export default [typeDefinitions];
