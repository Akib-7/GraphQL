import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import userModel from "../../Models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const login = async (parent, { loginDetails }) => {
  const userData = await userModel.findOne({ email: loginDetails.email });
  var success = false;
  if (!userData) {
    throw new Error("invalid Password");
  }

  var verifyPassword = await bcrypt.compare(
    loginDetails.password,
    userData.password
  );

  if (!verifyPassword) {
    throw new Error("invalid Password");
  } else {
    var payload = { user: userData };
    console.log();

    var token = jwt.sign(payload, process.env.JWT_SECRET);
    success = true;
    console.log(success, token);
    return { token };
  }
};

export default login;
