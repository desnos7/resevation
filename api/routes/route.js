import {getVehicule,detail} from "../controllers/controller.js";

import express from "express";
const router = express.Router();

router.get("/getvehicule",getVehicule);

router.post("/detail/:id",detail)

export default router;


