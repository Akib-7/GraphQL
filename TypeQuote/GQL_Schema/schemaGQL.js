import { gql } from "apollo-server";
// ` `(back Ticks) =taged template literals
//What can we query into our gql server from client s_ide
// EXAMPLE
// const typeDefs = gql`
//     type Query{
//             greet:String
//     }

// `
// RESOLVER : works like a brain for resolving queries

// ACTUAL QUERIES
// You cannot give comments ins_ide the backticks

// 1- QUERY && MUTATION
const typeDefs = gql`
  type Query {
    fetchAlusers: [USER]
    fetchSingleUser(_id: ID!): USER
    fetchAllQuotes: [QUOTE]
    fetchSingleUserQuote(writtenBy: ID!): [QUOTE]
  }
  type USER {
    _id: ID!
    name: String!
    email: String!
    password: String!
    individualQuotes: [QUOTE]
  }

  type QUOTE {
    _id: ID!
    writtenBy: USER!
    quote: String
  }

  type Mutation {
    createUser(userInput: USERINPUT!): USER
    login(loginDetails: LOGINDETAILS!): Token
    addQuote(quote: String!): String
    updateQuote(_id: String!, newQuote: String!): String
    deleteQuote(_id: String!): String
  }

  type Token {
    token: String
  }
  input USERINPUT {
    name: String!
    email: String!
    password: String!
  }
  input LOGINDETAILS {
    email: String!
    password: String!
  }
`;

// Instead passing arguments in the create user . I can write my own type: input and pass that to create user
//  type Mutation{
//     createUser(name:String! , email:String! , password:String!):USER }
export default typeDefs;
