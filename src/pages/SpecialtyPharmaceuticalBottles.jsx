import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Slider from "react-slick";

// Import images
import service1 from "../assets/img/home-one/service-shape.png";
import service2 from "../assets/img/home-one/service-shape2.png";
import specialtyBottle from "../assets/img/Pharmaceutical.jpg";
import specialtyBottle2 from "../assets/img/Pharmaceutical2.jpg";
import type1 from "../assets/img/type1Glass.jpg";
import type2 from "../assets/img/type2Glass.jpg";
import type3 from "../assets/img/type3Glass.jpg";

const SpecialtyPharmaceuticalBottles = () => {
  const [activeTab, setActiveTab] = useState("type1");

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <Header />

      {/* Innovative Split Hero Section */}
      <section className="position-relative pt-5 mt-3 overflow-hidden">
        <div className="container-fluid p-0">
          <div className="row g-0" style={{ minHeight: "85vh" }}>
            <div className="col-lg-6 bg-primary">
              <div
                className="p-5 text-white d-flex align-items-center"
                style={{ minHeight: "400px" }}
              >
                <div>
                  <div className="d-flex align-items-center mb-4">
                    <div>
                      <span className="text-uppercase fw-light mb-2 d-block">
                        Premium Quality
                      </span>
                      <h1 className="display-5 fw-bold mb-0">
                        Specialty Pharmaceutical Bottles
                      </h1>
                    </div>
                  </div>
                  <p className="lead opacity-75 mb-4">
                    Advanced glass packaging solutions designed for specific
                    medical applications, meeting the highest pharmaceutical
                    standards.
                  </p>

                  <div className="d-flex gap-3 mt-4">
                    <button className="btn btn-light btn-lg px-4">
                      Get Details
                      <i className="fa-solid fa-arrow-right ms-2"></i>
                    </button>
                    <button className="btn btn-outline-light btn-lg px-4">
                      View Catalog
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div style={{ height: "400px" }} className="position-relative">
                <Slider {...sliderSettings} className="h-100">
                  <div>
                    <img
                      src={specialtyBottle}
                      alt="Pharmaceutical Bottle"
                      style={{
                        width: "100%",
                        height: "400px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div>
                    <img
                      src={specialtyBottle2}
                      alt="Medical Bottle"
                      style={{
                        width: "100%",
                        height: "400px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            {[
              {
                icon: "fa-solid fa-shield-virus",
                title: "Chemical Resistance",
                desc: "Superior protection against aggressive pharmaceutical compounds",
              },
              {
                icon: "fa-solid fa-microscope",
                title: "USP Standards",
                desc: "Meets or exceeds all USP container requirements",
              },
              {
                icon: "fa-solid fa-temperature-low",
                title: "Temperature Stable",
                desc: "Maintains integrity across temperature ranges",
              },
              {
                icon: "fa-solid fa-fingerprint",
                title: "Traceability",
                desc: "Complete batch tracking and documentation",
              },
            ].map((feature, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <div className="rounded-circle bg-primary bg-opacity-10 p-3 d-inline-flex mb-3">
                      <i className={`${feature.icon} text-primary fs-3`}></i>
                    </div>
                    <h4 className="h5 mb-2">{feature.title}</h4>
                    <p className="text-muted mb-0">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications with Tabs */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="pe-lg-5" style={{ minHeight: "400px" }}>
                <div className="section-title mb-4">
                  <span className="sub-title text-primary text-uppercase fw-bold mb-2 d-block">
                    Technical Details
                  </span>
                  <h2 className="display-6 fw-bold">Advanced Specifications</h2>
                </div>
                <div className="tab-content mt-4">
                  {[
                    {
                      id: "type1",
                      title: "Type I Glass",
                      content:
                        "Highest chemical resistance for sensitive medications",
                      icon: "fa-flask-vial",
                      image: type1,
                    },
                    {
                      id: "type2",
                      title: "Type II Glass",
                      content:
                        "Treated soda-lime glass for enhanced durability",
                      icon: "fa-vial",
                      image: type2,
                    },
                    {
                      id: "type3",
                      title: "Type III Glass",
                      content: "General-purpose pharmaceutical grade glass",
                      icon: "fa-prescription-bottle",
                      image: type3,
                    },
                  ].map((spec, index) => (
                    <div
                      key={index}
                      className={`nav-link text-start mb-3 p-4 rounded-3 ${
                        index === 0 ? "active" : ""
                      }`}
                      role="tabpanel"
                      id={spec.id}
                      onClick={() => setActiveTab(spec.id)}
                      style={{
                        minHeight: "100px",
                        cursor: "pointer",
                        backgroundColor:
                          activeTab === spec.id ? "#0d6efd" : "white",
                        color: activeTab === spec.id ? "white" : "inherit",
                      }}
                    >
                      <div className="d-flex align-items-center gap-3">
                        <div className="flex-shrink-0">
                          <i
                            className={`fa-solid ${spec.icon} fs-3`}
                            style={{
                              color:
                                activeTab === spec.id ? "white" : "#0d6efd",
                            }}
                          ></i>
                        </div>
                        <div>
                          <h4
                            className="h5 mb-2"
                            style={{
                              color:
                                activeTab === spec.id ? "white" : "inherit",
                            }}
                          >
                            {spec.title}
                          </h4>
                          <p
                            className="small mb-0"
                            style={{
                              color:
                                activeTab === spec.id
                                  ? "rgba(255,255,255,0.8)"
                                  : "inherit",
                            }}
                          >
                            {spec.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="bg-white rounded-4 p-3"
                style={{ height: "400px" }}
              >
                {[
                  {
                    id: "type1",
                    image: type1,
                  },
                  {
                    id: "type2",
                    image: type2,
                  },
                  {
                    id: "type3",
                    image: type3,
                  },
                ].map((item, index) => (
                  <img
                    key={index}
                    src={item.image}
                    alt={`Type ${index + 1} Glass`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      borderRadius: "8px",
                      display: activeTab === item.id ? "block" : "none",
                      transition: "opacity 0.3s ease",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="service-area pt-100 pb-70">
        <div className="container">
          <div className="section-title text-center mb-5">
            <span className="sub-title">Applications</span>
            <h2>Specialized Solutions For Every Need</h2>
          </div>
          <div className="row g-4">
            {[
              {
                icon: "fa-solid fa-capsules",
                title: "Injectable Medications",
                desc: "Sterile packaging for injectable drugs",
              },
              {
                icon: "fa-solid fa-eye-dropper",
                title: "Ophthalmic Solutions",
                desc: "Precision bottles for eye medications",
              },
              {
                icon: "fa-solid fa-vials",
                title: "Biological Products",
                desc: "Storage for sensitive biological compounds",
              },
            ].map((app, index) => (
              <div key={index} className="col-lg-4">
                <div className="service-item text-center h-100">
                  <i className={app.icon}></i>
                  <h3>{app.title}</h3>
                  <p>{app.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Certifications */}
      <section className="bg-light py-5 ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mb-4">Quality Certifications</h2>
              <div className="row g-4">
                {[
                  "ISO 15378",
                  "USP <660>",
                  "EP 3.2.1",
                  "FDA DMF",
                  "JP Standards",
                  "GMP Certified",
                ].map((cert, index) => (
                  <div key={index} className="col-6 col-md-4">
                    <div className="border rounded p-3 h-100">
                      <i className="fa-solid fa-certificate text-primary mb-2"></i>
                      <h5 className="mb-0">{cert}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="partner-area pb-5 pt-0">
        <div className="container">
          <div className="partner-wrap">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="partner-content">
                  <h2>Need Custom Pharmaceutical Packaging?</h2>
                  <p>
                    Let our experts help you find the perfect solution for your
                    specific requirements.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 text-lg-end">
                <Link to="/contact" className="cmn-btn">
                  Request Consultation
                  <i className="fa-solid fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default SpecialtyPharmaceuticalBottles;
