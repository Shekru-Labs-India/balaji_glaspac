import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

// Import images
import service1 from "../assets/img/home-one/service-shape.png";
import service2 from "../assets/img/home-one/service-shape2.png";
import vial from "../assets/img/vial.jpg";

// Add theme color at the top of your file
const themeColor = "#ff5d22"; // Your orange theme color

const VialsAmpoules = () => {
  return (
    <>
      <Header />

      {/* Hero Section with Floating Cards */}
      <section className="bg-light pt-5 mt-5">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <div className="pe-lg-5">
                <div
                  className="d-inline-block border rounded-pill px-3 py-1 mb-4"
                  style={{ borderColor: themeColor + "!important" }}
                >
                  <span style={{ color: themeColor }}>Medical Grade Glass</span>
                </div>
                <h1 className="display-4 fw-bold mb-4">Vials & Ampoules</h1>
                <p className="lead mb-5">
                  High-precision glass vials and ampoules for pharmaceutical,
                  medical, and diagnostic applications. Manufactured to meet
                  stringent industry standards.
                </p>

                {/* Certification Badges */}
                <div className="d-flex flex-wrap gap-3 mb-5">
                  {[
                    "ISO 15378",
                    "USP Type I",
                    "EP Standards",
                    "GMP Certified",
                  ].map((cert, index) => (
                    <span
                      key={index}
                      className="badge bg-white border text-dark px-3 py-2"
                    >
                      <i
                        className="fa-solid fa-certificate me-2"
                        style={{ color: themeColor }}
                      ></i>
                      {cert}
                    </span>
                  ))}
                </div>

                <Link to="/contact" className="cmn-btn">
                  Request Technical Documentation
                  <i className="fa-solid fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative">
                {/* Floating Product Cards */}
                <div className="row g-4">
                  {[
                    {
                      title: "Clear Glass Vials",
                      specs: "2ml - 100ml",
                      icon: "fa-solid fa-vial",
                    },
                    {
                      title: "Amber Glass Vials",
                      specs: "2ml - 50ml",
                      icon: "fa-solid fa-vial-circle-check",
                    },
                    {
                      title: "Clear Ampoules",
                      specs: "1ml - 20ml",
                      icon: "fa-solid fa-syringe",
                    },
                    {
                      title: "Amber Ampoules",
                      specs: "1ml - 10ml",
                      icon: "fa-solid fa-prescription-bottle",
                    },
                  ].map((product, index) => (
                    <div key={index} className="col-6">
                      <div className="card border-0 shadow-lg h-100">
                        <div className="card-body p-4">
                          <div
                            className="rounded-circle p-3 d-inline-flex mb-3"
                            style={{
                              backgroundColor: `${themeColor}20`, // 20 is for 12% opacity
                            }}
                          >
                            <i
                              className={`${product.icon} fs-3`}
                              style={{ color: themeColor }}
                            ></i>
                          </div>
                          <h4 className="h5 mb-2">{product.title}</h4>
                          <p className="small text-muted mb-0">
                            Capacity: {product.specs}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center mb-5">
              <h2 className="h1">Technical Specifications</h2>
              <p className="lead text-muted">
                Meeting Global Pharmaceutical Standards
              </p>
            </div>
          </div>
          <div className="row g-4">
            {[
              {
                category: "Vials",
                specs: [
                  "Type I Borosilicate Glass",
                  "Crimp-top or Screw-cap options",
                  "Custom capacity ranges",
                  "Sterilization compatible",
                ],
              },
              {
                category: "Ampoules",
                specs: [
                  "Break-ring technology",
                  "OPC/CBR options",
                  "Clear or amber glass",
                  "USP Type I glass",
                ],
              },
            ].map((item, index) => (
              <div key={index} className="col-md-6">
                <div className="benefit-inner h-100 p-4 rounded bg-light">
                  <h3 className="h4 mb-4">
                    {item.category} <span>Specifications</span>
                  </h3>
                  <ul className="list-unstyled mb-0">
                    {item.specs.map((spec, i) => (
                      <li key={i} className="d-flex align-items-center mb-3">
                        <i
                          className="fa-solid fa-check me-3"
                          style={{ color: themeColor }}
                        ></i>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Carousel */}
      <section className="service-area pt-100 pb-70">
        <div className="container">
          <div className="section-title text-center mb-5">
            <span className="sub-title">Applications</span>
            <h2>Industry Applications</h2>
          </div>
          <div className="row">
            {[
              {
                icon: "fa-solid fa-pills",
                title: "Pharmaceuticals",
                description: "Injectable medications and vaccines",
              },
              {
                icon: "fa-solid fa-microscope",
                title: "Diagnostics",
                description: "Laboratory reagents and specimens",
              },
              {
                icon: "fa-solid fa-flask",
                title: "Biotechnology",
                description: "Biological samples and compounds",
              },
            ].map((service, index) => (
              <div key={index} className="col-sm-6 col-lg-4">
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

      {/* Quality Assurance */}
      <section className="cost-area pt-5 pb-0">
        <div className="container px-0">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6">
              <div className="cost-content pe-lg-4">
                {/* Title Section */}
                <div className="section-title mb-5">
                  {" "}
                  {/* Increased bottom margin */}
                  <span
                    className="sub-title d-inline-block ms-4 mb-3 text-uppercase"
                    style={{ color: themeColor }}
                  >
                    Quality Assurance
                  </span>
                  <h2 className="display-6 fw-bold ms-4">
                    Rigorous Testing & Quality Control
                  </h2>
                </div>

                {/* Cards Grid */}
                <div className="row g-4">
                  {[
                    {
                      title: "Dimensional accuracy testing",
                      icon: "fa-ruler-combined",
                    },
                    {
                      title: "Chemical resistance analysis",
                      icon: "fa-flask",
                    },
                    {
                      title: "Hydrolytic resistance testing",
                      icon: "fa-droplet",
                    },
                    {
                      title: "Break force verification",
                      icon: "fa-gauge-high",
                    },
                  ].map((item, index) => (
                    <div key={index} className="col-md-6">
                      <div className="card border-0 shadow-sm h-100 hover-shadow transition">
                        <div className="card-body p-4">
                          <div className="d-flex align-items-center gap-3">
                            {" "}
                            {/* Added gap */}
                            <div
                              className="rounded-circle p-3 d-inline-flex align-items-center justify-content-center"
                              style={{
                                backgroundColor: `${themeColor}15`,
                                width: "48px",
                                height: "48px",
                              }}
                            >
                              <i
                                className={`fa-solid ${item.icon}`}
                                style={{
                                  color: themeColor,
                                  fontSize: "1.25rem",
                                }}
                              />
                            </div>
                            <h5 className="card-title mb-0 fs-6 fw-semibold">
                              {item.title}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="position-relative h-100">
                <img
                  src={vial}
                  alt="Quality Control"
                  className="img-fluid rounded-4 shadow-sm w-100"
                  style={{
                    height: "500px",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
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
                    <h2>Need Pharmaceutical Grade Packaging?</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="partner-btn">
                  <Link className="cmn-btn" to="/contact">
                    Contact Our Experts
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

export default VialsAmpoules;
