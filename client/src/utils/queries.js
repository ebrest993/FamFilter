import { gql } from '@apollo/client';

export const QUERY_USER = gql`
 query User {
    user {
      _id
      firstName
      lastName
      email
    }
  }
`;

export const QUERY_USERS = gql`
query Users {
  users {
    _id
    email
    firstName
    lastName
  }
}`