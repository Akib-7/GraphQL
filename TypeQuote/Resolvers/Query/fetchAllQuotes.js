import quoteModel from "../../Models/quotes.js";

const fetchAllQuotes = async () => {
  var allUsersQuotes = await quoteModel.find().populate("writtenBy");
  return allUsersQuotes;
};

export default fetchAllQuotes;
