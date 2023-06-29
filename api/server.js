import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import routeVehicule from "./routes/route.js";

import { userVerification } from "./Middlewares/authMiddleware.js";
import sigupInscription from "./routes/incription.js";
import cookieParser from "cookie-parser";
import transactione from "./routes/payement.js"

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/vehicules", routeVehicule);
app.use("/post", sigupInscription);

app.use("/transaction", transactione);


mongoose
  .connect(
    "mongodb+srv://beugredesnosjeremie:H4wJPgdAqJ4cxGwU@reservation.cor1lbg.mongodb.net/test"
  )
  .then(() => {
    console.log("connecté a Mongodb");
    app.listen(4000, () => {
      console.log("bienvenue nous somme connecter sur le port");
    });
  })
  .catch((error) => {
    console.log(error);
  });
