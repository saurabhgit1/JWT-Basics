import CustomAPIError from "../errors/custom-errors.js";
import jwt from "jsonwebtoken";

const loginController = (req, res) => {
  //methods to add validation for username and password
  //1. mongoose -db
  //2. JOI
  //3. Normal JS validation in express controller (using this for now)
  const { username, password } = req.body;
  if (!username || !password) {
    throw new CustomAPIError("Please provide username and password both", 400);
  }

  // id is normally provided by DB
  const id = new Date().getDate();
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.status(200).send({ msg: "user created", token });
};

const dashboardController = (req, res) => {
  // throw new Error("koi bhi");
  // throw new CustomAPIError("apna error", 201);
  try {
    const authorization = req.headers.authorization;
    if (!authorization || !authorization.startsWith("Bearer ")) {
      console.log("hell");
      throw new CustomAPIError(
        "Invalid Token Format. Access Not Allowed!!",
        401
      );
    }
    const token = authorization.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).json({
      msg: `Hello, ${decoded.username}`,
      secret: `Your lucky no. is ${luckyNumber}`,
    });
  } catch (error) {
    console.log("ee", error);
    if (error.name === "JsonWebTokenError") {
      throw new CustomAPIError("Invalid Token. Access Denied.", 401);
    } else {
      throw error;
    }
  }
};

export { dashboardController, loginController };
