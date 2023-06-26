import React, { useState, useEffect } from "react";
import axios from "axios";
import ComVehicules from "../components/comVehicules";
import Loader from "../components/loader";
import { DatePicker, Space } from "antd";
const { RangePicker } = DatePicker;
import Moment from "moment";

import "../assets/css/vehicule.css";

function Vehicule() {
  
  const [vehicules, setVehicules] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState(null);

  const [dateDebut, setDateDebut] = useState("");
  const [dateFin, setDateFin] = useState("");

  const [JourTotal,setJourTotlal]=useState(0)


  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:4000/vehicules/getvehicule"
      );
      const data = response.data;
      setVehicules(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  function valeurDate(valeur) {
    setDateDebut(valeur[0].format("MM-DD-YYYY"));
    setDateFin(valeur[1].format("MM-DD-YYYY"));
  }

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <p>Error</p>
      ) : (
        <div>
          <div className="mr-5 bg-light shadow p-3 container  bg-white rounded mt-5 ">
            <RangePicker
              className="p-3 "
              format="MM-DD-YYYY"
              onChange={valeurDate}
            />
          </div>
          {vehicules.map((voiture) => {
            return (
              <ComVehicules
                voiture={voiture}
                dateDebut={dateDebut}
                dateFin={dateFin}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Vehicule;
