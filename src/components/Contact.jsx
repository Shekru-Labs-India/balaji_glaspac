import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <Header />
      {/* Page Title */}
      <div className="page-title-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="title-item">
                <h2>Contact</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <span>/</span>
                  </li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Page Title */}
      {/* Contact */}
      <section className="contact-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-8 col-sm-12 mx-auto">
              <div className="contact-item contact-left">
                <h3>Our Located Place</h3>

                <ul className="contact-info-list">
                  <li>
                    <i className="fa fa-map-marker-alt" />
                    <span>
                      Head Office – Office No. 05 , 1st Floor, Nivrutti Complex,
                      Near Tractor House, New Mumbai-Agra Road, Dwarka, Nashik –
                      422011. Maharashtra.
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-envelope" />
                    <a href="mailto:info@balajiglaspac.com">
                      info@balajiglaspac.com
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-phone" />
                    <a href="tel:+912532507474">+91 253 2507474</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Contact */}
      {/* Map */}

      {/* End Map */}
      <Footer />
    </>
  );
};

export default Contact;
