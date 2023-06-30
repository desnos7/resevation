import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Acceuil from "../src/pages/acceuil.jsx";
import Connexion from "../src/pages/connexion.jsx";
import Inscription from "../src/pages/inscription.jsx";
import Vehicules from "../src/pages/vehicules.jsx";
import Reservation from "../src/pages/reservation.jsx"
import ProfileAdmin from "../src/pages/profileAdmin.jsx";
import profileUser from "../src/pages/profileUser.jsx";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Acceuil />} />
          <Route path={"/connexion"} element={<Connexion />} />
          <Route path={"/inscription"} element={<Inscription />} />
          <Route path={"/vehicules"} element={<Vehicules />} />
          <Route path={"/vehicules/detail/:id/:dateDebut/:dateFin"} element={<Reservation />} />
          <Route path={"/admin"}  element={<ProfileAdmin/>} />
          <Route path={"/profile"}  element={<profileUser/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
