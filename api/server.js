import express from "express";
import cors from 'cors';
import mongoose from 'mongoose' 
import routeVehicule from './routes/route.js'


const app = express();



app.use(express.json())


app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/rooms", routeVehicule);


mongoose.connect('mongodb+srv://beugredesnosjeremie:rDSsDlN4tibSb6p6@reservation.cor1lbg.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
  console.log('connecté a Mongodb')
  app.listen(4000, () => {
    console.log("bienvenue nous somme connecter sur le port");
  });
})
.catch((error)=>{
    console.log(error)
})



