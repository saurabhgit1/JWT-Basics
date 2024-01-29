import express from "express";
import { dashboardController, loginController } from "../controllers/main.js";

const router = express.Router();
router.route("/dashboard").get(dashboardController);
router.route("/login").post(loginController);

export default router;
