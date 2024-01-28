import express from "express";
import { dashboardController } from "../controllers/main.js";

const router = express.Router();
router.route("/dashboard").get(dashboardController);

export default router;
