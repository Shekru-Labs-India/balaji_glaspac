import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

// Import images
import service1 from "../assets/img/home-one/service-shape.png";
import service2 from "../assets/img/home-one/service-shape2.png";

const TabletCapsuleBottles = () => {
  return (
    <>
      <Header />

      {/* Hero Section with Image Background */}
      <div className="banner-area banner-img-one">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="banner-content">
                    <h1>Tablet & Capsule Bottles</h1>
                    <p>
                      Pharmaceutical-grade glass bottles with moisture
                      protection and child-resistant features
                    </p>
                    <div className="banner-btn-area">
                      <Link to="/contact" className="cmn-btn">
                        Request Samples
                      </Link>
                      <Link to="#specifications" className="cmn-btn-two">
                        View Specifications
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about-img-wrap">
                    <div className="about-img-slider owl-theme owl-carousel">
                      <div className="about-img-item">
                        <img
                          src={service1}
                          alt="Tablet Bottle"
                          className="img-fluid"
                        />
                      </div>
                      <div className="about-img-item">
                        <img
                          src={service2}
                          alt="Capsule Bottle"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Features Grid */}
      <section className="service-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Product Features</span>
            <h2>
              Pharmaceutical Excellence in Every <span>Detail</span>
            </h2>
          </div>
          <div className="row">
            {[
              {
                icon: "fa-solid fa-shield-virus",
                title: "Moisture Protection",
                description:
                  "Advanced barrier properties to protect medicine integrity",
              },
              {
                icon: "fa-solid fa-lock",
                title: "Child-Resistant Caps",
                description:
                  "Safety-first design with certified child-resistant closures",
              },
              {
                icon: "fa-solid fa-flask",
                title: "USP Type III Glass",
                description:
                  "Meets pharmaceutical industry standards for chemical stability",
              },
              {
                icon: "fa-solid fa-qrcode",
                title: "Tracking Features",
                description: "Built-in lot number and expiry date areas",
              },
            ].map((service, index) => (
              <div key={index} className="col-sm-6 col-lg-3">
                <div className="service-item">
                  <img src={service1} alt="Service" />
                  <img src={service2} alt="Service" />
                  <i className={service.icon} />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section id="specifications" className="about-area pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img-wrap">
                <div className="about-img-slider owl-theme owl-carousel">
                  <div className="about-img-item">
                    <img src={service1} alt="Tablet Bottle" />
                  </div>
                  <div className="about-img-item">
                    <img src={service2} alt="Capsule Bottle" />
                  </div>
                </div>
                <div className="about-shape">
                  <img src={service1} alt="Shape" />
                  <img src={service2} alt="Shape" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title">
                  <span className="sub-title">Specifications</span>
                  <h2>Technical Details</h2>
                </div>
                <ul>
                  {[
                    "Available in 30cc to 1000cc sizes",
                    "Child-resistant and senior-friendly caps",
                    "Desiccant-compatible designs",
                    "Light protection options available",
                    "Tamper-evident sealing",
                    "Custom embossing available",
                  ].map((spec, index) => (
                    <li key={index}>
                      <i className="fa-solid fa-check" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="cost-area pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="cost-content">
                <div className="section-title">
                  <span className="sub-title">Quality Standards</span>
                  <h2>Meeting Global Pharmaceutical Requirements</h2>
                </div>
                <div className="cost-text">
                  <div className="row">
                    {[
                      "USP <660> Compliance",
                      "FDA Approved Materials",
                      "ISO 15378 Certified",
                      "GMP Manufacturing",
                      "CGMP Guidelines",
                      "EU Pharmacopeia",
                    ].map((standard, index) => (
                      <div key={index} className="col-lg-6">
                        <div className="cost-card mb-4">
                          <i className="fa-solid fa-certificate text-primary" />
                          <h4>{standard}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cost-img">
                <img
                  src={service2}
                  alt="Quality"
                  className="img-fluid rounded-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="partner-area pb-100">
        <div className="container">
          <div className="partner-wrap">
            <div className="partner-shape">
              <img src={service1} alt="Partner" />
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="partner-content">
                  <div className="section-title">
                    <h2>Ready to Order Pharmaceutical Packaging?</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="partner-btn">
                  <Link className="cmn-btn" to="/contact">
                    Get a Quote
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default TabletCapsuleBottles;
