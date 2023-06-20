import "../assets/css/inscription.css";

function inscription() {
  return (
    <>
      <form className="form_main" action="/post/inscription" method="POST">
        <p className="heading">INSCRIPTION</p>
        <p className="form-title">Inscrivez-vous</p>
        <div className="inputContainer">
          <input type="text" placeholder="Nom" name="nom" className="inputField" />
        </div>
        <div className="inputContainer">
          <input
            type="email"
            placeholder="Adress email"
            name="email"
            className="inputField"
          />
        </div>

        <div className="inputContainer">
          <input
            type="number"
            placeholder="Numero telephone"
            name="telephone"
            className="inputField"
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
            name="password"
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
