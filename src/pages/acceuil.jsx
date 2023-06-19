import React, { useEffect } from "react";
import voiture from "../assets/images/vehicule.jpg";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import "../assets/css/acceuil.css";
import axios from 'axios';
function acceuil() {

useEffect(()=>{

},[])



  return (
    <>
      <Header />
      
        <div class="img1">
          <img src={voiture} alt="" />
          <p>Cher client nous vous accompagnons avec précision ...</p>
        </div>

        <section id="gallery">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 mb-4">
                <div class="card">
                  <img src={voiture} alt="" class="card-img-top" />
                  <div class="card-body">
                    <h5 class="card-title">Sunset</h5>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Ut eum similique repellat a laborum, rerum voluptates
                      ipsam eos quo tempore iusto dolore modi dolorum in
                      pariatur. Incidunt repellendus praesentium quae!
                    </p>
                    <a href="" class="btn btn-outline-success btn-sm">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 mb-4">
                <div class="card">
                  <img src={voiture} alt="" class="card-img-top" />

                  <div class="card-body">
                    <h5 class="card-title">Sunset</h5>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Ut eum similique repellat a laborum, rerum voluptates
                      ipsam eos quo tempore iusto dolore modi dolorum in
                      pariatur. Incidunt repellendus praesentium quae!
                    </p>
                    <a href="" class="btn btn-outline-success btn-sm">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 mb-4">
                <div class="card">
                  <img src={voiture} alt="" class="card-img-top" />
                  <div class="card-body">
                    <h5 class="card-title">Sunset</h5>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Ut eum similique repellat a laborum, rerum voluptates
                      ipsam eos quo tempore iusto dolore modi dolorum in
                      pariatur. Incidunt repellendus praesentium quae!
                    </p>
                    <a href="" class="btn btn-outline-success btn-sm">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="contact" class="contact-area section-padding">
          <div class="container">
            <div class="section-title text-center">
              <h1>Get in Touch</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                vitae risus nec dui venenatis dignissim. Aenean vitae metus in
                augue pretium ultrices.
              </p>
            </div>
            <div class="row">
              <div class="col-lg-7 mb-4">
                <div class="contact">
                  <form
                    class="form"
                    name="enq"
                    method="post"
                    action="contact.php"
                    onsubmit="return validation();"
                  >
                    <div class="row">
                      <div class="form-group col-md-6 mb-4">
                        <input
                          type="text"
                          name="name"
                          class="form-control"
                          placeholder="Name"
                          required="required"
                        />
                      </div>
                      <div class="form-group col-md-6">
                        <input
                          type="email"
                          name="email"
                          class="form-control"
                          placeholder="Email"
                          required="required"
                        />
                      </div>
                      <div class="form-group col-md-12 mb-4">
                        <input
                          type="text"
                          name="subject"
                          class="form-control"
                          placeholder="Subject"
                          required="required"
                        />
                      </div>
                      <div class="form-group col-md-12 mb-4">
                        <textarea
                          rows="6"
                          name="message"
                          class="form-control"
                          placeholder="Your Message"
                          required="required"
                        ></textarea>
                      </div>
                      <div class="col-md-12 text-center">
                        <button
                          type="submit"
                          value="Send message"
                          name="submit"
                          id="submitButton"
                          class="btn btn-contact-bg"
                          title="Submit Your Message!"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-lg-5">
                <div class="single_address">
                  <i class="fa fa-map-marker"></i>
                  <h4>Our Address</h4>
                  <p>3481 Melrose Place, Beverly Hills</p>
                </div>
                <div class="single_address">
                  <i class="fa fa-envelope"></i>
                  <h4>Send your message</h4>
                  <p>Info@example.com</p>
                </div>
                <div class="single_address">
                  <i class="fa fa-phone"></i>
                  <h4>Call us on</h4>
                  <p>(+1) 517 397 7100</p>
                </div>
                <div class="single_address">
                  <i class="fa fa-clock-o"></i>
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
