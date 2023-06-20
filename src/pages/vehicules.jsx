import React, { useState, useEffect } from "react";
import axios from "axios";
import ComVehicules from "../components/comVehicules";

import "../assets/css/vehicule.css";

function Vehicule() {
  const [vehicules, setVehicules] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:4000/rooms/getvehicule"
      );
      const data = response.data;
      setVehicules(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {loading ? (
        <p>loader ...</p>
      ) : error ? (
        <p>Error</p>
      ) : (
        <div>
          {vehicules.map((voiture) => {
            return <ComVehicules voiture={voiture} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Vehicule;
