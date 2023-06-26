import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import routeVehicule from "./routes/route.js";

const app = express();

app.use(express.json());

app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/vehicules", routeVehicule);

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
