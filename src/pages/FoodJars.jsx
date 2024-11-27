import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

// Import images
import service1 from "../assets/img/home-one/service-shape.png";
import service2 from "../assets/img/home-one/service-shape2.png";
import foodJar from "../assets/img/foodJars.jpg";

const FoodJars = () => {
  return (
    <>
      <Header />

      {/* Hero Section - adjusted spacing */}
      <section className="bg-light position-relative overflow-hidden pt-5 mt-5">
        <div className="container min-vh-100 d-flex align-items-center">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="section-title mb-4">
                <span className="sub-title fs-5 fw-bold">
                  Food Storage Solutions
                </span>
                <h1 className="display-4 fw-bold">Food Jars</h1>
              </div>
              <p className="lead mb-4">
                Wide-mouth jars perfect for food packaging, preserves, and
                condiments with secure sealing options for maximum freshness.
              </p>
              <div className="about-content mb-5">
                <ul className="list-unstyled">
                  <li className="d-flex align-items-center mb-3">
                    <i className="fa-solid fa-check text-primary me-3" />
                    <span>Airtight Sealing Technology</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="fa-solid fa-check text-primary me-3" />
                    <span>Wide-Mouth Design for Easy Filling</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="fa-solid fa-check text-primary me-3" />
                    <span>Heat-Resistant Glass</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i className="fa-solid fa-check text-primary me-3" />
                    <span>Multiple Size Options</span>
                  </li>
                </ul>
              </div>
              <div className="d-flex gap-3">
                <button className="cmn-btn">
                  Request Quote
                  <i className="fa-solid fa-arrow-right ms-2" />
                </button>
                <button className="cmn-btn-outline">Download Catalog</button>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="position-relative">
                <img
                  src={foodJar}
                  alt="Food Jar"
                  style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    marginTop: "2rem",
                    marginBottom: "2rem",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Grid - adjusted spacing */}
      <section className="service-area pt-100 pb-70">
        <div className="container">
          <div className="row g-4">
            {[
              {
                icon: "fa-solid fa-jar",
                title: "Preserves & Jams",
                features: [
                  "Heat-resistant glass",
                  "Vacuum seal capability",
                  "Multiple size options",
                ],
              },
              {
                icon: "fa-solid fa-pepper-hot",
                title: "Pickles & Condiments",
                features: [
                  "Wide mouth design",
                  "Chemical resistant",
                  "Airtight sealing",
                ],
              },
              {
                icon: "fa-solid fa-seedling",
                title: "Dry Storage",
                features: [
                  "Moisture protection",
                  "Clear glass finish",
                  "Various capacities",
                ],
              },
            ].map((item, index) => (
              <div key={index} className="col-md-4">
                <div className="service-item text-center h-100">
                  <img src={service1} alt="Service" className="shape-1" />
                  <img src={service2} alt="Service" className="shape-2" />
                  <i className={`${item.icon} fs-1 mb-4`} />
                  <h3>{item.title}</h3>
                  <ul className="list-unstyled mt-3">
                    {item.features.map((feature, i) => (
                      <li key={i} className="mb-2">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - adjusted spacing */}
      <section className="benefit-area mt-5">
        <div className="container">
          <div className="benefit-content ">
            <div className="section-title text-center mb-5">
              <h2>Key Benefits of Our Food Jars</h2>
            </div>
            <div className="row">
              {[
                {
                  icon: "fa-solid fa-shield-halved",
                  title: "Food Safety Certified",
                },
                {
                  icon: "fa-solid fa-temperature-high",
                  title: "Heat Resistant",
                },
                {
                  icon: "fa-solid fa-recycle",
                  title: "Eco-Friendly",
                },
                {
                  icon: "fa-solid fa-lock",
                  title: "Secure Sealing",
                },
              ].map((benefit, index) => (
                <div key={index} className="col-sm-6 col-lg-3">
                  <div className="benefit-inner text-center">
                    <i className={benefit.icon} />
                    <h4>{benefit.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section - adjusted spacing */}
      <section className="partner-area pb-5">
        <div className="container">
          <div className="partner-wrap">
            <div className="partner-shape">
              <img src={service2} alt="Partner" />
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="partner-content">
                  <div className="section-title">
                    <h2>Ready to Order Custom Food Jars?</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="partner-btn text-lg-end">
                  <Link className="cmn-btn" to="/contact">
                    Contact Us
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

export default FoodJars;
