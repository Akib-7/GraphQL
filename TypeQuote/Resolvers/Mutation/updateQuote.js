import quoteModel from "./../../Models/quotes.js";

const updateQuote = async (parent, { _id, newQuote }, { user }) => {
  if (!user._id) {
    console.log("User not Logged in");
  } else {
    var quote = await quoteModel.findById(_id).populate("writtenBy");
    if (!quote) {
      throw new Error("Quote Not Found");
    } else if (quote) {
      if (quote.writtenBy._id.toString() !== user._id) {
        throw new Error("Not Allowed");
      }
    }

    await quoteModel
      .findByIdAndUpdate(_id, { quote: newQuote })
      .populate("writtenBy");
    return "Updated Successfully";
  }
};

export default updateQuote;
