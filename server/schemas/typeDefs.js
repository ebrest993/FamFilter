const typeDefs = `
  scalar Date
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }

  type Thread {
    _id: ID
    title: String
    createdBy: User
    members: [User]
    messages: [Message]
  }

  type Message {
    _id: ID
    user: User
    message: String
    createdAt: Date
    thread: Thread
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
    addThread(title: String!, members: [ID]!, message: String!): Thread
    addMessage(threadId: ID!, messageText: String!): Thread
    deleteMessage(threadId: ID!, messageId: ID!): Thread
  }
`;

module.exports = typeDefs;
