import CustomAPIError from "../errors/custom-errors.js";

const dashboardController = (req, res) => {
    // throw new Error("koi bhi");
    // throw new CustomAPIError("apna error", 201);
  res.status(200).send("dashboard controller success");
};

export { dashboardController };
