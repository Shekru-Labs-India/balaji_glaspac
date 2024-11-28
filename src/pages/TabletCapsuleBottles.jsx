import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Import images
import service1 from "../assets/img/home-one/service-shape.png";
import service2 from "../assets/img/home-one/service-shape2.png";
import capsule from "../assets/img/capsule.jpg";
import capsule2 from "../assets/img/capsule2.jpg";
import capsule3 from "../assets/img/capsule3.jpg";
import capsule4 from "../assets/img/capsule4.jpg";

// At the top of your file, add the theme color
const themeColor = "#ff5d22"; // Your orange theme color

// Update styles object
const styles = {
  bannerImage: {
    height: "400px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  featureIcon: {
    fontSize: "2.5rem",
    color: themeColor,
    marginBottom: "1rem",
  },
  // Add custom button styles to match template
  templateBtn: {
    backgroundColor: themeColor,
    borderColor: themeColor,
    "&:hover": {
      backgroundColor: themeColor,
      borderColor: themeColor,
    },
  },
  templateBtnOutline: {
    color: themeColor,
    borderColor: themeColor,
    "&:hover": {
      backgroundColor: themeColor,
      borderColor: themeColor,
    },
  },
};

const TabletCapsuleBottles = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-light pt-5 mt-5">
        <div className="container">
          <div className="row align-items-center min-vh-75">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="display-4 fw-bold mb-4">
                Tablet & Capsule Bottles
              </h1>
              <p className="lead mb-4">
                Pharmaceutical-grade glass bottles with moisture protection and
                child-resistant features
              </p>
              <div className="d-flex gap-3">
                <Link
                  to="/contact"
                  className="btn btn-lg"
                  style={{
                    backgroundColor: themeColor,
                    borderColor: themeColor,
                    color: "white",
                  }}
                >
                  Request Samples
                </Link>
                <Link
                  to="#specifications"
                  className="btn btn-lg"
                  style={{
                    color: themeColor,
                    borderColor: themeColor,
                    "&:hover": {
                      backgroundColor: themeColor,
                      color: "white",
                    },
                  }}
                >
                  View Specifications
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-4">
                <div className="col-6">
                  <img
                    src={capsule}
                    alt="Tablet Bottle"
                    className="img-fluid shadow-sm"
                    style={styles.bannerImage}
                  />
                </div>
                <div className="col-6">
                  <img
                    src={capsule2}
                    alt="Capsule Bottle"
                    className="img-fluid shadow-sm"
                    style={styles.bannerImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h6 style={{ color: themeColor }} className="fw-bold mb-3">
              Product Features
            </h6>
            <h2 className="display-5 mb-4">
              Pharmaceutical Excellence in Every Detail
            </h2>
          </div>
          <div className="row g-4">
            {[
              {
                icon: "fa-shield-virus",
                title: "Moisture Protection",
                description:
                  "Advanced barrier properties to protect medicine integrity",
              },
              {
                icon: "fa-lock",
                title: "Child-Resistant Caps",
                description:
                  "Safety-first design with certified child-resistant closures",
              },
              {
                icon: "fa-flask",
                title: "USP Type III Glass",
                description:
                  "Meets pharmaceutical industry standards for chemical stability",
              },
              {
                icon: "fa-qrcode",
                title: "Tracking Features",
                description: "Built-in lot number and expiry date areas",
              },
            ].map((feature, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm p-4 text-center">
                  <div className="card-body">
                    <i
                      className={`fas ${feature.icon}`}
                      style={{ ...styles.featureIcon, color: themeColor }}
                    ></i>
                    <h4 className="h5 mb-3">{feature.title}</h4>
                    <p className="text-muted mb-0">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section id="specifications" className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center gy-5">
            {" "}
            {/* Added vertical gap between rows on mobile */}
            <div className="col-lg-6">
              <div className="position-relative h-100">
                {" "}
                {/* Added relative positioning and height */}
                <img
                  src={capsule3}
                  alt="Specifications"
                  className="img-fluid rounded-4 shadow-sm"
                  style={{
                    height: "500px", // Fixed height
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ps-lg-5">
                {" "}
                {/* Added padding on left side for larger screens */}
                <div className="mb-4">
                  {" "}
                  {/* Grouped heading elements */}
                  <h6
                    style={{ color: themeColor }}
                    className="fw-bold text-uppercase mb-3"
                  >
                    Specifications
                  </h6>
                  <h2 className="display-6 fw-bold mb-4">Technical Details</h2>
                </div>
                <div className="row g-4">
                  {" "}
                  {/* Added gap between specification items */}
                  {[
                    "Available in 30cc to 1000cc sizes",
                    "Child-resistant and senior-friendly caps",
                    "Desiccant-compatible designs",
                    "Light protection options available",
                    "Tamper-evident sealing",
                    "Custom embossing available",
                  ].map((spec, index) => (
                    <div key={index} className="col-md-6">
                      <div className="d-flex align-items-center p-3 bg-white rounded-3 shadow-sm h-100">
                        <i
                          className="fas fa-check me-3"
                          style={{
                            color: themeColor,
                            fontSize: "1.2rem",
                          }}
                        ></i>
                        <span className="fw-medium">{spec}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="pt-5">
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6">
              <div className="pe-lg-4">
                {" "}
                {/* Added padding end for larger screens */}
                <div className="mb-4">
                  <h6
                    style={{ color: themeColor }}
                    className="fw-bold text-uppercase mb-3"
                  >
                    Quality Standards
                  </h6>
                  <h2 className="display-6 fw-bold mb-4">
                    Meeting Global Pharmaceutical Requirements
                  </h2>
                </div>
                <div className="row g-4">
                  {[
                    "USP <660> Compliance",
                    "FDA Approved Materials",
                    "ISO 15378 Certified",
                    "GMP Manufacturing",
                    "CGMP Guidelines",
                    "EU Pharmacopeia",
                  ].map((standard, index) => (
                    <div key={index} className="col-md-6">
                      <div className="card border-0 shadow-sm h-100">
                        <div className="card-body p-4">
                          {" "}
                          {/* Increased padding */}
                          <div className="d-flex align-items-center gap-3">
                            {" "}
                            {/* Added gap */}
                            <div
                              className="rounded-circle bg-opacity-10 p-3"
                              style={{ backgroundColor: `${themeColor}20` }}
                            >
                              {" "}
                              {/* Icon container */}
                              <i
                                className="fas fa-certificate"
                                style={{
                                  color: themeColor,
                                  fontSize: "1.2rem",
                                }}
                              ></i>
                            </div>
                            <h5 className="card-title mb-0 fs-6 fw-semibold">
                              {standard}
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
                  src={capsule4}
                  alt="Quality"
                  className="img-fluid rounded-4 shadow-sm w-100"
                  style={{
                    height: "500px", // Fixed height to match content
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

export default TabletCapsuleBottles;
