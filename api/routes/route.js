import {getVehicule} from "../controllers/controller.js";

import express from "express";
const router = express.Router();

router.get("/getvehicule",getVehicule);

export default router;


