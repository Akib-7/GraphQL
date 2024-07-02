import userModel from "../../Models/user.js";
import bcrypt from "bcryptjs";

const createUser = async (parent, { userInput }) => {
  const user = await userModel.findOne({ email: userInput.email });
  if (user) {
    console.log("User already Registered");
  } else {
    var salt = await bcrypt.genSalt(10);
    var securePassword = await bcrypt.hash(userInput.password, salt);
    const newUser = await userModel.create({
      ...userInput,
      password: securePassword,
    });
    return newUser;
  }
};

export default createUser;
