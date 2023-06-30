import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Navigate, useParams } from "react-router-dom";
import Header from "../components/header.jsx";
import moment from "moment";

import axios from "axios";

import "../assets/css/reservation.css";

function reservation() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //boostrap state en haut
  const { id, dateDebut, dateFin } = useParams();
  const [vehicule, setVehicule] = useState({});
  const [bon, setBon] = useState([]);
  const [loading, setLoading] = useState();

  const [valeur, setValeur] = useState();
  console.log(dateDebut, dateFin);

  const Debut = Date.parse(dateDebut);
  const Fin = Date.parse(dateFin);

  const TotalJour = (Fin - Debut) / 86300000 + 1;
  const calcule = valeur * TotalJour;
  const get = JSON.parse(localStorage.getItem("utilisateur"));
  console.log("get:", get);

  console.log(calcule);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await axios.post(
        `http://localhost:3000/vehicules/detail/${id}`
      );
      const data = response.data;
      console.log("data:", data);

      setVehicule(data);
      setValeur(data.prixjournee);
      console.log(data);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  async function handlePayement() {
    const donne = {
      userId: get._id,
      productId: vehicule._id,
      mount: calcule,
    };
    console.log("donne:", donne);
    try {
      const { data } = await axios.post(
        "http://localhost:3000/transaction/payement/",
        donne
      );
      navigate("/profile");
    } catch (error) {
      console.log("error: ertyugiohjpk$ôùigomufyldtertyiuoihpo");
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
                <p> nom de lutilisateur: {get.firstname}</p>
                <p>dateDebut:{dateDebut}</p>
                <p>dateFin:{dateFin}</p>
                <br />
                <h3>Montant</h3>
                <p> total Jours: {TotalJour}</p>
                <p>Montant a payer par jour:{vehicule.prixjournee}</p>
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
                          type="text"
                          value={get.firstname}
                          placeholder="name@example.com"
                          autoFocus
                        />
                        <Form.Label>Payez</Form.Label>
                        <Form.Control
                          type="number"
                          value={calcule}
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
                    <Button variant="primary" onClick={handlePayement}>
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
