import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import jwt from "jsonwebtoken";

const checkLogin = ({ req })=> {
        const { token } = req.headers;
    
        if (token) {
          var data = jwt.verify(token, process.env.JWT_SECRET);
          return { user:data.user };
        }
      }


export default checkLogin