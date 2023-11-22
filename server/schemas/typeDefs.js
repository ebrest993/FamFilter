const typeDefs = `
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }

  type Auth {
    token: ID
  }

  type Query {
    user: User
  }

  type Mutation {
    signin(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;
//There should be a mutation labeled "AddUser"

module.exports = typeDefs;
