const typeDefs = `
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }

  type Thread {
    title: String
    createdBy: User
    members: [User]
    messages: [Message]
  }

  type Message {
    user: User
    message: String
    createdAt: Date
  }

  type Auth {
    token: ID
  }

  type Query {
    user: User
    users: [User]
    threads: [Thread]
    messages: [Message]
  }

  type Mutation {
    signin(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
