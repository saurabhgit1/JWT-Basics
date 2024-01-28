import CustomAPIError from "../errors/custom-errors.js"

const errorHandler = (error,req,res,next) => {
    if (error instanceof CustomAPIError) {
        return res.status(error.statusCode).json({ msg: error.message });
    }
    return res.status(500).json({ msg: "Server Error!!!!" });
}

export default errorHandler;