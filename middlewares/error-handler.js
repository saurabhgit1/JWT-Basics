import CustomAPIError from "../errors/custom-errors.js";
import { StatusCodes } from "http-status-codes";

const errorHandler = (error, req, res, next) => {
  if (error instanceof CustomAPIError) {
    return res.status(error.statusCode).json({ msg: error.message });
  }
  console.log("eee", error);
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ msg: "Server Error!!!!" });
};

export default errorHandler;
