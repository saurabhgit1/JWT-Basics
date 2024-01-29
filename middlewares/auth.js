import jwt from "jsonwebtoken";
import UnAuthorizedErrors from "../errors/unauthorized-errors.js";

const authCheck = (req, res, next) => {
  try {
    const authorization = req.headers.authorization;
    if (!authorization || !authorization.startsWith("Bearer ")) {
      throw new UnAuthorizedErrors("Token Not Present");
    }
    const token = authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.username = decoded.username;
    next();
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      throw new UnAuthorizedErrors("Token Incorrect");
    }
    throw error;
  }
};

export default authCheck;
