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
    <section className="contact-area pt-50 pb-50">

    <style>
    {`
      .contact-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 24px;
      }

      .grid-item {
        margin-bottom: 0;
      }

      .card {
        width: 100%;
        height: 100%;
      }

      .address{
       width: 100%;
        height: 62%;
      }

      .address1{
      margin-top:10px;
      width:100%;
      height:35%
      }

      /* Tablet View */
      @media screen and (max-width: 992px) {
        .contact-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      /* Mobile View */
      @media screen and (max-width: 576px) {
        .contact-grid {
          grid-template-columns: 1fr;
          gap: 16px;
        }

        /* Reordering for mobile view */
        .grid-item:nth-child(1) { order: 2; } /* Nashik Map */
        .grid-item:nth-child(2) { order: 1; } /* Head Office */
        .grid-item:nth-child(3) { order: 3; } /* Branch Office */
        .grid-item:nth-child(4) { order: 4; } /* Nagpur Map */
        .grid-item:nth-child(5) { order: 5; } /* Email */
        .grid-item:nth-child(6) { order: 6; } /* Phone */

        .card {
          margin-bottom: 0;
        }

        .card iframe {
          height: 250px; /* Slightly smaller maps on mobile */
        }
      }
    `}
  </style>
  <div className="container my-5">
    <div className="contact-grid">
      {/* Head Office - First row, first card */}

      <div className="grid-item ">
        <div className="card">
          <div className="card-body">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.960595476655!2d73.79840891461617!3d19.996229387151272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdff42d8a2c2817%3A0x43c5000a313459df!2sNivrutti%20Complex!5e0!3m2!1sen!2sin!4v1688016610515!5m2!1sen!2sin&markers=color:red%7Clabel:%7C19.996229387151272,73.79840891461617"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="grid-item ">
        <div className="address card ">
          <div className="card-body">
            <h5 className="card-title">
              <i className="fa fa-location-dot"></i> Head Office
            </h5>
            <p className="card-text">
              Office No. 05, 1st Floor, Nivrutti Complex, Near Tractor House,
              New Mumbai-Agra Road, Dwarka, Nashik – 422011, Maharashtra.
            </p>
          </div>
        </div>
        <div className="address1 card">
          <div className="card-body">
            <h5 className="card-title">
              <i className="fa fa-envelope"></i> Email
            </h5>
            <p className="card-text">info@balajiglaspac.com</p>
          </div>
        </div>
      </div>

     

      {/* Branch Office - First row, second card */}
      <div className="grid-item ">
        <div className="address card">
          <div className="card-body">
            <h5 className="card-title">
              <i className="fa fa-location-dot"></i> Branch Office
            </h5>
            <p className="card-text">
              Saurabh Apartment, A-6, 2nd Floor, R C Baxter Marg, New Colony,
              Nagpur-440001, Maharashtra.
            </p>
          </div>
        </div>
        <div className="address1 card">
          <div className="card-body">
            <h5 className="card-title">
              <i className="fa fa-phone"></i> Phone
            </h5>
            <p className="card-text">+91 253 2507474</p>
          </div>
        </div>
      </div>

      {/* Nashik Map - Second row, first card */}
      <div className="grid-item item-4">
        <div className="card">
          <div className="card-body">
            <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.845529368327!2d79.07917471461664!3d21.147872493496244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd57d85c71bb813%3A0x52d3d7db4c81e25d!2sSaurabh%20Apartment%2C%20A-6%2C%202nd%20Floor%2C%20R%20C%20Baxter%20Marg%2C%20New%20Colony%2C%20Nagpur-440001%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1688106193081!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
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
