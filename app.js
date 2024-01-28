import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mainRouter from "./routers/main.js";
import routeNotFoundMW from "./middlewares/not-found.js";
import errorHandlerMW from "./middlewares/error-handler.js";

const port = process.env.PORT;
const app = express();

app.use(express.json());

//setting routes
app.use("/api/v1", mainRouter);

app.use(routeNotFoundMW);
app.use(errorHandlerMW);

const start = () => {
  try {
    //connect to db
    //start server
    app.listen(process.env.PORT, console.log("Server started at" + port));
  } catch (error) {
    console.error(error);
  }
};
start();
