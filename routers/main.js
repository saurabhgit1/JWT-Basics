import express from "express";
import { dashboardController, loginController } from "../controllers/main.js";
import authCheck from "../middlewares/auth.js";

const router = express.Router();
router.route("/dashboard").get(authCheck, dashboardController);
router.route("/login").post(loginController);

export default router;
