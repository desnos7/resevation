import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Header from "../components/header.jsx";
import moment from "moment";

import axios from "axios";

import "../assets/css/reservation.css";

function reservation() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //boostrap state en haut
  const { id, dateDebut, dateFin } = useParams();
  const [vehicule, setVehicule] = useState({});
  const [bon, setBon] = useState([]);
  const [loading, setLoading] = useState();

  const [valeur,setValeur]=useState()
  console.log(dateDebut, dateFin);

  const Debut = Date.parse(dateDebut);
  const Fin= Date.parse(dateFin)

  const TotalJour=((Fin-Debut)/86400000)+1;
  
const calcule=valeur*TotalJour
console.log(calcule);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await axios.post(
        `http://localhost:4000/vehicules/detail/${id}`
      );
      const data = response.data;
      setVehicule(data);
      setValeur(data.prixjournee)
      console.log(data);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div style={{ marginBottom: "4rem", height: "20rem" }}>
        <Header />
      </div>
      <div className="container mt-5  bg-light shadow  p-6  bg-white rounded">
        <div className="card ">
          <div className="row">
            <div className="col-sm-5">
              <img
                className="d-block w-100"
                src="https://picsum.photos/150?image=641"
                alt=""
              />
            </div>
            <div className="col-sm-7 position-relative ">
              <div className="card-block ">
                <h4 className="card-title"> {}</h4>
                <p>nom de Produit:{vehicule.name}</p>
                <p> nom de lutilisateur: </p>
                <p>dateDebut:{dateDebut}</p>
                <p>dateFin:{dateFin}</p>
                <br />
                <h3>Montant</h3>
                <p> total Jours: {TotalJour}</p>
                <p>Montant a payer par jour:{
vehicule.prixjournee}</p>
                <h5>MONTANT TOTAL:{calcule} FCfa</h5>
                <Button
                  variant="primary"
                  className="position-absolute end-50  mt-5"
                  onClick={handleShow}
                >
                  Reservez
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Reservez votre article</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="name@example.com"
                          autoFocus
                        />
                        <Form.Label>Payez</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="name@example.com"
                          autoFocus
                        />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Fermer
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Payez
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default reservation;
