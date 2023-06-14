import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import Reservation from "./pages/reservation.jsx";
import Acceuil from "./pages/acceuil.jsx";
import Vehicule from "./pages/vehicules.jsx";


import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
       
          <Route path={"/acceuil"} element={<Acceuil/>} />
          <Route path={"/reservation"} element={<Reservation />} />
          <Route path={"/vehicule"} element={<Vehicule />} />
          <Route path={"/connexion"} element={<Connexion />} />
          <Route path={"/Inscription"} element={<Inscription />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
