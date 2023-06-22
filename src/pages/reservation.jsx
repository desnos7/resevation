import React, { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import axios from "axios";

import "../assets/css/reservation.css";

function reservation() {
  const { id,dateDebut,dateFin } = useParams();
  const [vehicules, setVehicules] = useState("");
  const [loading, setLoading] = useState();

     useEffect(() => {
      fetchData()
     }, []);

     async function fetchData() {
      try {
        setLoading(true);
        const response = await axios.post(
          `http://localhost:4000/rooms/detail/${id}/`
        );
        const data = response.data;
        setVehicules(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } 
    }

        return (
    <>
      <div className="container">
        <div className="card ">
          <div className="row">
            <div className="col-sm-5">
              <img
                className="d-block w-100"
                src="https://picsum.photos/150?image=641"
                alt=""
              />
            </div>
            <div className="col-sm-7">
              <div className="card-block ">
                <h4 className="card-title"> {vehicules.name}</h4>
                <p></p>
                <p> nom de lutilisateur: </p>
                <p>dateDebut:{dateDebut}</p>
                <p>dateFin:{dateFin}</p>
                <br />
                <a href="#" className="btn btn-primary btn-sm float-right">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default reservation;
