import quoteModel from "../../Models/quotes.js";

const fetchSingleUserQuote = async (parent, args) => {
  var quotes = await quoteModel.findById({ _id: args._id });
  return quotes;
};

export default fetchSingleUserQuote;
