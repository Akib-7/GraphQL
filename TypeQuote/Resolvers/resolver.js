import fetchAlusers from "./Query/fetchAlusers.js";
import fetchAllQuotes from "./Query/fetchAllQuotes.js";
import fetchSingleUser from "./Query/fetchSingleUser.js";
import fetchSingleUserQuote from "./Query/fetchSingleUserQuote.js";
import createUser from "./Mutation/createUser.js";
import login from "./Mutation/login.js";
import addQuote from "./Mutation/addQuote.js";
import updateQuote from "./Mutation/updateQuote.js";
import deleteQuote from "./Mutation/deleteQuote.js";

import quoteModel from "../Models/quotes.js";
const resolvers = {
  // 1-RESOLVER FOR QUERY
  Query: {
    fetchAlusers,
    fetchAllQuotes,
    fetchSingleUser,
    fetchSingleUserQuote,
  },

  // 2- RESOLVER FOR MUTATION
  Mutation: {
    createUser,
    login,
    addQuote,
    updateQuote,
    deleteQuote,
  },
  // 3-(QUERY) RESOLVER FOR DEALING REFRENCE IN A SCHEMA
  USER: {
    // ourUSer= parent . Jis schema mein quotes ko refer kiya hy woh parent bn jy ga. In our case user is parent for quotes
    individualQuotes: async (ourUser) => {
      var quotes = await quoteModel.find({ writtenBy: ourUser._id });
      return quotes;
    },
  },
};
export default resolvers;
