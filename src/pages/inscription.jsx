import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/inscription.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

function inscription() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    motDePasse: "",
    firstname: "",
    addressEmail: "",
    phonenumber: "",
  });
  const { addressEmail, firstname, phonenumber, motDePasse } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:3000/post/inscription",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/connexion");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      motDePasse: "",
      firstname: "",
      addressEmail: "",
      phonenumber: "",
    });
  };

  return (
    <>
      <form className="form_main" onSubmit={handleSubmit}>
        <p className="heading">INSCRIPTION</p>
        <p className="form-title">Inscrivez-vous</p>
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Nom"
            value={firstname}
            name="firstname"
            className="inputField"
            onChange={handleOnChange}
          />
        </div>
        <div className="inputContainer">
          <input
            type="email"
            placeholder="Adress email"
            name="addressEmail"
            className="inputField"
            value={addressEmail}
            onChange={handleOnChange}
          />
        </div>

        <div className="inputContainer">
          <input
            type="number"
            placeholder="Numero telephone"
            name="phonenumber"
            className="inputField"
            value={phonenumber}
            onChange={handleOnChange}
          />
        </div>

        <div className="inputContainer">
          <svg
            viewBox="0 0 16 16"
            fill="#2e2e2e"
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
            className="inputIcon"
          >
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
          </svg>
          <input
            placeholder="Mot de Passe"
            id="motdepasse"
            className="inputField"
            type="password"
            name="motDePasse"
            value={motDePasse}
            onChange={handleOnChange}
          />
        </div>
        <button id="button">Connexion</button>
        <p className="signup-link">
          <a href="connexion">Retour</a>
        </p>
      </form>
    </>
  );
}

export default inscription;
