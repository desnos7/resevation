import {logo } from "../assets/images/logo.png"

function header() {
    return (
   <div>
    <header>
   <nav class="navbar">
       <link to="/"> <img src={logo} alt="" class="logo"/></link>
       <div class="navlinks">
           <ul>
               <li class=""><a href="/">ACCEUIL</a></li>
               <li><link to="/" >PROFILE</link> </li>
               <li><link to="/" >CONNEXION</link> </li>
               <li><link to="/">VEHICULES</link> </li>             
           </ul>

       </div>
      <link to="/" /> <img src={logo} alt="" class="menuburger"/>

   </nav>
</header>


</div>


    )
    
}

export default header