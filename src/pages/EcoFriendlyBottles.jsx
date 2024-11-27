import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

// Import images
import service1 from "../assets/img/home-one/service-shape.png";
import service2 from "../assets/img/home-one/service-shape2.png";
import ecoFriendlyBottle from "../assets/img/ecoBottle.jpg";
import ecoFriendlyBottle2 from "../assets/img/ecoBottle2.jpg";

const EcoFriendlyBottles = () => {
  return (
    <>
      <Header />

      {/* Nature-Inspired Hero Section */}
      <section className="bg-light position-relative overflow-hidden pt-5 mt-3">
        <div className="container min-vh-100 d-flex align-items-center">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <span className="badge bg-success px-3 py-2 mb-4">
                Eco-Conscious Solutions
              </span>
              <h1 className="display-3 fw-bold text-success mb-4">
                Sustainable Glass
                <span className="d-block text-dark">For A Better Tomorrow</span>
              </h1>
              <div className="eco-stats row g-4 mb-5">
                {[
                  { number: "80%", label: "Recycled Materials" },
                  { number: "100%", label: "Recyclable" },
                  { number: "-40%", label: "Carbon Footprint" },
                ].map((stat, index) => (
                  <div key={index} className="col-auto">
                    <div className="p-3 bg-white rounded-3 shadow-sm">
                      <h3 className="h2 fw-bold text-success mb-1">
                        {stat.number}
                      </h3>
                      <p className="text-muted small mb-0">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn btn-success btn-lg px-4 me-3">
                Get Started
                <i className="fa-solid fa-leaf ms-2"></i>
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="position-relative">
                <img
                  src={ecoFriendlyBottle}
                  alt="Eco Bottles"
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

      {/* Sustainability Features */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {[
              {
                icon: "fa-recycle",
                title: "Recycled Content",
                desc: "Made with up to 80% recycled glass materials",
              },
              {
                icon: "fa-leaf",
                title: "Eco Production",
                desc: "Energy-efficient manufacturing process",
              },
              {
                icon: "fa-seedling",
                title: "Zero Waste",
                title: "Zero Waste",
                desc: "100% recyclable and reusable products",
              },
              {
                icon: "fa-sun",
                title: "Solar Powered",
                desc: "Facilities powered by renewable energy",
              },
            ].map((feature, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm hover-lift bg-light">
                  <div className="card-body text-center p-4">
                    <div className="rounded-circle bg-success text-white p-3 d-inline-block mb-3">
                      <i className={`fa-solid ${feature.icon} fs-3`}></i>
                    </div>
                    <h3 className="h5 mb-2">{feature.title}</h3>
                    <p className="text-muted mb-0">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-5 bg-success text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="display-6 fw-bold mb-4">
                Our Environmental Impact
              </h2>
              <div className="vstack gap-4">
                {[
                  {
                    metric: "Carbon Reduction",
                    value:
                      "40% less CO2 emissions compared to traditional manufacturing",
                  },
                  {
                    metric: "Water Conservation",
                    value:
                      "30% reduction in water usage through recycling systems",
                  },
                  {
                    metric: "Energy Efficiency",
                    value: "50% of energy from renewable sources",
                  },
                ].map((impact, index) => (
                  <div
                    key={index}
                    className="d-flex gap-3 bg-white bg-opacity-10 p-3 rounded"
                  >
                    <div>
                      <h4 className="h5 mb-1 text-white">{impact.metric}</h4>
                      <p className="mb-0 text-white-50">{impact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src={ecoFriendlyBottle2}
                alt="Environmental Impact"
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Eco CTA */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="display-6 mb-4">
                Join the Sustainable Revolution
              </h2>
              <p className="lead text-muted mb-4">
                Make a positive impact on the environment with our eco-friendly
                glass packaging solutions.
              </p>
              <Link to="/contact" className="btn btn-success btn-lg px-5">
                Start Your Green Journey
                <i className="fa-solid fa-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default EcoFriendlyBottles;
