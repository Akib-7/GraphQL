import quoteModel from "./../../Models/quotes.js";

const deleteQuote = async (parent, { _id }, { user }) => {
  if (!user._id) {
    throw new Error("User not Logged in");
  } else {
    var quote = await quoteModel.findById(_id);

    if (!quote) {
      throw new Error("Quote does not Exist");
    }

    if (quote) {
      if (quote.writtenBy.toString() !== user._id) {
        throw new Error("Not Allowed");
      } else {
        await quoteModel.findByIdAndDelete(_id).populate("writtenBy");
        return "Deleted Successfully";
      }
    }
  }
};

export default deleteQuote;
