import userModel from "../../Models/user.js";

// single User is not refrenced anywhere so its parent is undefined. If you write the singleUser(parent) then it will return undefined .
// args = _id of user
const fetchSingleUser = async (parent, args) => {
  var user = await userModel.findById({ _id: args._id });
  return user;
};

export default fetchSingleUser;
