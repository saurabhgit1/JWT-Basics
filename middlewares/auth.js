import CustomAPIError from "../errors/custom-errors.js";
import jwt from "jsonwebtoken";

const authCheck = (req, res, next) => {
  try {
    const authorization = req.headers.authorization;
    if (!authorization || !authorization.startsWith("Bearer ")) {
      throw new CustomAPIError("Token Not Present", 401);
    }
    const token = authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.username = decoded.username;
    next();
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      throw new CustomAPIError("Token Incorrect", 401);
    }
    throw error;
  }
};

export default authCheck;
