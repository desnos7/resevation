import React, { useEffect } from "react";
import voiture from "../assets/images/vehicule.jpg";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import "../assets/css/acceuil.css";

function acceuil() {
  return (
    <>
      <Header />

      <div className="img1">
        <img src={voiture} alt="" />
        <p>Cher client nous vous accompagnons avec précision ...</p>
      </div>

      <section id="gallery">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="card">
                <img src={voiture} alt="" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Les voitures berlines</h5>
                  <p className="card-text">
                    Au départ tricorps, elle a évolué en bicorps avec hayon dans
                    les années 60, puis en monocorps 20 ans plus tard.
                    Typiquement dotée de 4 fenêtres latérales et d'autant de
                    portes, elle emporte de 4 à 6 personnes sur 2 rangées de
                    sièges.
                  </p>
                  <a href="" className="btn btn-outline-success btn-sm">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card">
                <img src={voiture} alt="" className="card-img-top" />

                <div className="card-body">
                  <h5 className="card-title">Les voitures berlines</h5>
                  <p className="card-text">
                    Au départ tricorps, elle a évolué en bicorps avec hayon dans
                    les années 60, puis en monocorps 20 ans plus tard.
                    Typiquement dotée de 4 fenêtres latérales et d'autant de
                    portes, elle emporte de 4 à 6 personnes sur 2 rangées de
                    sièges.
                  </p>
                  <a href="" className="btn btn-outline-success btn-sm">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card">
                <img src={voiture} alt="" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Les voitures berlines</h5>
                  <p className="card-text">
                    Au départ tricorps, elle a évolué en bicorps avec hayon dans
                    les années 60, puis en monocorps 20 ans plus tard.
                    Typiquement dotée de 4 fenêtres latérales et d'autant de
                    portes, elle emporte de 4 à 6 personnes sur 2 rangées de
                    sièges.
                  </p>
                  <a href="" className="btn btn-outline-success btn-sm">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="contact" className="contact-area section-padding">
        <div className="container">
          <div className="section-title text-center">
            <h1>Les voitures berlines</h1>
            <p>
              Au départ tricorps, elle a évolué en bicorps avec hayon dans les
              années 60, puis en monocorps 20 ans plus tard. Typiquement dotée
              de 4 fenêtres latérales et d'autant de portes, elle emporte de 4 à
              6 personnes sur 2 rangées de sièges.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-7 mb-4">
              <div className="contact">
                <form
                  className="form"
                  name="enq"
                  method="post"
                  action="contact.php"
                  onsubmit="return validation();"
                >
                  <div className="row">
                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required="required"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required="required"
                      />
                    </div>
                    <div className="form-group col-md-12 mb-4">
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder="Subject"
                        required="required"
                      />
                    </div>
                    <div className="form-group col-md-12 mb-4">
                      <textarea
                        rows="6"
                        name="message"
                        className="form-control"
                        placeholder="Your Message"
                        required="required"
                      ></textarea>
                    </div>
                    <div className="col-md-12 text-center">
                      <button
                        type="submit"
                        value="Send message"
                        name="submit"
                        id="submitButton"
                        className="btn btn-contact-bg"
                        title="Submit Your Message!"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="single_address">
                <i className="fa fa-map-marker"></i>
                <h4>Our Address</h4>
                <p>3481 Melrose Place, Beverly Hills</p>
              </div>
              <div className="single_address">
                <i className="fa fa-envelope"></i>
                <h4>Send your message</h4>
                <p>Info@example.com</p>
              </div>
              <div className="single_address">
                <i className="fa fa-phone"></i>
                <h4>Call us on</h4>
                <p>(+1) 517 397 7100</p>
              </div>
              <div className="single_address">
                <i className="fa fa-clock-o"></i>
                <h4>Work Time</h4>
                <p>
                  Mon - Fri: 08.00 - 16.00. <br />
                  Sat: 10.00 - 14.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default acceuil;
