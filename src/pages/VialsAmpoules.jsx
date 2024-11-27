import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

// Import images
import service1 from "../assets/img/home-one/service-shape.png";
import service2 from "../assets/img/home-one/service-shape2.png";

const VialsAmpoules = () => {
  return (
    <>
      <Header />

      {/* Hero Section with Floating Cards */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <div className="pe-lg-5">
                <div className="d-inline-block border border-primary rounded-pill px-3 py-1 mb-4">
                  <span className="text-primary">Medical Grade Glass</span>
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
                      className="badge bg-white border px-3 py-2"
                    >
                      <i className="fa-solid fa-certificate text-primary me-2"></i>
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
                          <div className="rounded-circle bg-primary bg-opacity-10 p-3 d-inline-flex mb-3">
                            <i
                              className={`${product.icon} text-primary fs-3`}
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
                  <h3 className="h4 mb-4">{item.category} Specifications</h3>
                  <ul className="list-unstyled mb-0">
                    {item.specs.map((spec, i) => (
                      <li key={i} className="d-flex align-items-center mb-3">
                        <i className="fa-solid fa-check text-primary me-3"></i>
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
      <section className="cost-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="cost-content">
                <div className="section-title">
                  <span className="sub-title">Quality Assurance</span>
                  <h2>Rigorous Testing & Quality Control</h2>
                </div>
                <ul className="about-content">
                  <li>
                    <i className="fa-solid fa-check" />
                    Dimensional accuracy testing
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    Chemical resistance analysis
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    Hydrolytic resistance testing
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    Break force verification
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cost-img">
                <img
                  src={service2}
                  alt="Quality Control"
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
