import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Acceuil from "../src/pages/acceuil.jsx";
import Connexion from "../src/pages/connexion.jsx";
import Inscription from "../src/pages/inscription.jsx";



function App() {
  return (
    <>
   
      <BrowserRouter>

        <Routes>
       
          <Route path={"/"} element={<Acceuil/>} />
         <Route path={"/connexion"} element={<Connexion/>}/>
         <Route path={"/inscription"} element={<Inscription/>}/>

         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
