import { getVehicule, detail } from "../controllers/controller.js";

import express from "express";
import User from "../model/utilisateurs.js";
const router = express.Router();

router.get("/getvehicule", getVehicule);

router.post("/detail/:id", detail);


// router.get("/test", async (req, res) => {
//   console.log("klfjkldsjfkldsjk");
//   const user = await User.create({
//     name: "jean",
//     phonenumber: 123456789,
//     addressEmail: "akoto@lol.com",
//     motDePasse: "helloboy",
//     Compte: 234567890,
//   });

//   res.json({ user });
// });

export default router;
