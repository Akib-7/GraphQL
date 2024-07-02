import userModel from "../../Models/user.js";
const fetchAlusers = async () => {
  var allUsers = await userModel.find();
  return allUsers;
};

export default fetchAlusers;
