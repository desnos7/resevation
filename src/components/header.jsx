
import logo  from "../assets/images/logo.png"
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/header.css";


function header() {

  

    const get = JSON.parse(localStorage.getItem("utilisateur"));
    console.log("get:", get);


    return (
       
   <div>
     get?(
    <header>
   <nav className="navbar">
        <img src={logo} alt="" className="logo"/>
       <div className="navlinks">
           <ul>
               <li className=""><a href="/">ACCEUIL</a></li>
               <li><Link to="/" >PROFILE</Link> </li>
               <li><Link to="/vehicules">VEHICULES</Link> </li>

               <li><Link to="/connexion" >CONNEXION</Link> </li>
               <li><Link to="/inscription" >INSCRIPTION</Link> </li>
               <li><Link to="/profile" >PROFILE</Link> </li> 
        
                        
           </ul>

       </div>
      

   </nav>
</header>):(
    <header>
   <nav className="navbar">
        <img src={logo} alt="" className="logo"/>
       <div className="navlinks">
           <ul>
               <li className=""><a href="/">ACCEUIL</a></li>
               <li><Link to="/" >PROFILE</Link> </li>
               <li><Link to="/vehicules">VEHICULES</Link> </li>

               <li><Link to="/connexion" >DECONNEXION</Link> </li>
              
        
                        
           </ul>

       </div>
      

   </nav>
</header>

)


</div>


    )
    
}

export default header