import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

// Import your images
import service1 from "../assets/img/home-one/service-shape.png";
import service2 from "../assets/img/home-one/service-shape2.png";
import champagne1 from "../assets/img/champagneBottle1.jpg";
import champagne2 from "../assets/img/champagneBottle3.jpg";
import champagne3 from "../assets/img/champagneBottle3.jpg";
const ChampagneBottles = () => {
  const [activeTab, setActiveTab] = useState("standard");

  // Add card data for each tab
  const cardData = {
    standard: [
      {
        title: "Standard Champagne Bottle",
        description:
          "Elegant design with superior pressure resistance and premium finish.",
      },
      {
        title: "Standard Champagne Bottle",
        description:
          "Elegant design with superior pressure resistance and premium finish.",
      },
      {
        title: "Standard Champagne Bottle",
        description:
          "Elegant design with superior pressure resistance and premium finish.",
      },
    ],
    magnum: [
      {
        title: "Magnum Champagne Bottle",
        description:
          "Double-sized bottle perfect for larger celebrations and events.",
      },
      {
        title: "Magnum Champagne Bottle",
        description:
          "Double-sized bottle perfect for larger celebrations and events.",
      },
      {
        title: "Magnum Champagne Bottle",
        description:
          "Double-sized bottle perfect for larger celebrations and events.",
      },
    ],
    custom: [
      {
        title: "Custom Champagne Bottle",
        description:
          "Personalized designs with bespoke features and branding options.",
      },
      {
        title: "Custom Champagne Bottle",
        description:
          "Personalized designs with bespoke features and branding options.",
      },
      {
        title: "Custom Champagne Bottle",
        description:
          "Personalized designs with bespoke features and branding options.",
      },
    ],
  };

  return (
    <>
      <Header />

      {/* Elegant Hero Section */}
      <section className="champagne-hero position-relative">
        <div className="container">
          <div className="row align-items-center min-vh-100" style={{ backgroundImage: 'url("")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            {/* Left Content Side */}
            <div className="col-lg-6">
              <div className="hero-content py-5">
                {/* Animated Line Above Title */}
                <div className="title-line mb-4">
                  <span className="sub-title premium-letter-spacing text-uppercase fw-bold">
                    Luxury & Elegance
                  </span>
                </div>

                <h1 className="hero-title display-4 fw-bold mb-4">
                  Premium Champagne Bottles
                </h1>

                <p className="hero-description lead mb-5">
                  Crafted for excellence, designed for celebration. Our
                  champagne bottles combine strength and sophistication.
                </p>

                {/* Features List with Enhanced Design */}
                <div className="hero-features mb-5">
                  {[
                    {
                      title: "Pressure Resistant",
                      desc: "Up to 6 bar pressure capacity",
                    },
                    {
                      title: "Premium Glass Quality",
                      desc: "Crystal clear finish",
                    },
                    {
                      title: "Custom Engravings",
                      desc: "Personalized branding options",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="feature-item d-flex align-items-center mb-3"
                    >
                      <div className="feature-icon me-3">
                        <i className="fa-solid fa-check-circle text-primary fs-4"></i>
                      </div>
                      <div className="feature-text">
                        <h6 className="mb-0 fw-bold">{feature.title}</h6>
                        <small className="text-muted">{feature.desc}</small>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="hero-cta">
                  <button
                    className="btn btn-lg px-4 me-3"
                    style={{ backgroundColor: "#fa5f0b", color: "white" }}
                  >
                    Get Quote
                  </button>
                  <button className="btn btn-outline-dark btn-lg px-4">
                    View Catalog
                  </button>
                </div>
              </div>
            </div>

            {/* Right Image Side */}
            <div className="col-lg-6">
              <div
                className="hero-image-wrapper position-relative"
                style={{ height: "600px" }}
              >
                <img
                  src={champagne3}
                  alt="Premium Bottle"
                  className="img-fluid position-absolute"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    maxHeight: "90%",
                    objectFit: "contain",
                  }}
                />
                <div
                  className="bottle-backdrop position-absolute"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "80%",
                    height: "80%",
                    background:
                      "radial-gradient(circle, rgba(250,95,11,0.1) 0%, rgba(250,95,11,0.05) 100%)",
                    borderRadius: "50%",
                    filter: "blur(20px)",
                    zIndex: -1,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="product-categories py-5">
        <div className="container">
          <div className="section-title text-center mb-5">
            <span className="sub-title">Our Collection</span>
            <h2>Champagne Bottle Types</h2>
          </div>

          <div className="category-tabs mb-4">
            <ul className="nav nav-pills justify-content-center">
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    activeTab === "standard" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("standard")}
                >
                  Standard
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    activeTab === "magnum" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("magnum")}
                >
                  Magnum
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    activeTab === "custom" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("custom")}
                >
                  Custom
                </button>
              </li>
            </ul>
          </div>

          <div className="row g-4">
            {cardData[activeTab].map((card, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="service-item">
                  <img src={service1} alt="Service" />
                  <img src={service2} alt="Service" />
                  <i className="fa-solid fa-champagne-glasses" />
                  <h3>
                    <Link to="#">{card.title}</Link>
                  </h3>
                  <p>{card.description}</p>
                  <Link className="service-link" to="#">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="manufacturing-process py-5 bg-light">
        <div className="container">
          <div className="section-title text-center mb-5">
            <span className="sub-title">Excellence in Manufacturing</span>
            <h2>Our Production Process</h2>
          </div>

          <div className="row g-4">
            {[
              {
                icon: "fa-solid fa-flask",
                title: "Material Selection",
                description: "Premium quality glass materials",
              },
              {
                icon: "fa-solid fa-temperature-high",
                title: "Molding Process",
                description: "Precision temperature control",
              },
              {
                icon: "fa-solid fa-magnifying-glass",
                title: "Quality Testing",
                description: "Rigorous pressure testing",
              },
              {
                icon: "fa-solid fa-award",
                title: "Final Inspection",
                description: "Detailed quality checks",
              },
            ].map((step, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="process-card text-center px-0">
                  <div className="process-icon mb-3">
                    <i className={`${step.icon} fa-2x`}></i>
                  </div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mb-4">Ready to Order?</h2>
              <p className="lead mb-5">
                Contact our team to discuss your champagne bottle requirements
              </p>
              <button
                className="btn btn-lg px-4 me-3"
                style={{ backgroundColor: "#fa5f0b", color: "white" }}
              >
                Get Quote
              </button>
              <button className="btn btn-outline-dark btn-lg px-4">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ChampagneBottles;
