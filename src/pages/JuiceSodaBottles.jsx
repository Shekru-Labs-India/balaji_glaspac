import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

// Import images
import service1 from "../assets/img/home-one/service-shape.png";
import service2 from "../assets/img/home-one/service-shape2.png";
import juiceSodaBottle from "../assets/img/juiceSodaBottle.jpg";

const JuiceSodaBottles = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-primary text-white position-relative overflow-hidden pt-5 mt-3">
        <div className="container min-vh-100 d-flex align-items-center">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="p-4 p-lg-5">
                <span className="badge bg-warning mb-3">
                  Refreshing Designs
                </span>
                <h1 className="display-4 fw-bold mb-4">Juice & Soda Bottles</h1>
                <p className="lead mb-4">
                  Versatile bottles perfect for beverages, featuring various
                  neck finishes and closure options for optimal freshness.
                </p>

                {/* Features */}
                <div className="d-flex flex-column gap-3 mb-4">
                  {/* Features content remains the same */}
                </div>

                <div className="d-flex gap-3">
                  <button className="btn btn-warning btn-lg px-4">
                    Get Quote
                  </button>
                  <button className="btn btn-outline-light btn-lg px-4">
                    Download Catalog
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="position-relative">
                <img
                  src={juiceSodaBottle}
                  alt="Juice Bottle"
                  style={{
                    width: "100%",
                    height: "500px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Our Collection</h2>
            <p className="lead text-muted">
              Choose from our wide range of bottle designs
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                icon: "fa-solid fa-droplet",
                title: "Juice Bottles",
                description: "Perfect for fresh juices and smoothies",
                features: [
                  "Wide mouth options",
                  "Clear glass",
                  "Custom shapes",
                ],
              },
              {
                icon: "fa-solid fa-burst",
                title: "Carbonated Drink Bottles",
                description: "Designed for sodas and sparkling beverages",
                features: [
                  "Pressure resistant",
                  "Various neck finishes",
                  "Multiple sizes",
                ],
              },
              {
                icon: "fa-solid fa-leaf",
                title: "Health Drink Bottles",
                description: "Ideal for wellness and functional beverages",
                features: [
                  "Premium finish",
                  "Ergonomic design",
                  "UV protection",
                ],
              },
            ].map((item, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <div className="rounded-circle bg-primary bg-opacity-10 p-3 d-inline-block mb-3">
                      <i className={`${item.icon} text-primary fs-3`}></i>
                    </div>
                    <h4 className="mb-3">{item.title}</h4>
                    <p className="text-muted">{item.description}</p>
                    <ul className="list-unstyled mt-3">
                      {item.features.map((feature, i) => (
                        <li key={i} className="mb-2">
                          <i className="fa-solid fa-check text-success me-2"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="display-6 fw-bold mb-4">Ready to Order?</h2>
              <p className="lead mb-5">
                Contact our team to discuss your beverage packaging needs
              </p>
              <div className="d-flex justify-content-center gap-3">
                <button className="btn btn-primary btn-lg px-4">
                  Contact Sales
                </button>
                <button className="btn btn-outline-primary btn-lg px-4">
                  Request Sample
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default JuiceSodaBottles;
