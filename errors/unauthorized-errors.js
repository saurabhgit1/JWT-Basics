import CustomAPIError from "./custom-errors.js";
import { StatusCodes } from "http-status-codes";

class UnAuthorizedErrors extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

export default UnAuthorizedErrors;
