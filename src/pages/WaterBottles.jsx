import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

// Import images
import service1 from "../assets/img/home-one/service-shape.png";
import service2 from "../assets/img/home-one/service-shape2.png";
import water1 from "../assets/img/waterBottle.jpg";

const WaterBottles = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="water-hero">
        <div className="container-fluid">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <div className="hero-content-wrapper">
                <div className="hero-content px-lg-5 px-4 py-5">
                  <div className="title-line mb-3">
                    <span className="sub-title">Pure & Pristine</span>
                  </div>

                  <h1 className="hero-title mb-4">
                    Crystal Clear Water Bottles
                  </h1>

                  <p className="hero-description mb-5">
                    Premium glass water bottles that combine purity,
                    sustainability, and elegant design for the perfect water
                    drinking experience.
                  </p>

                  <div className="hero-features mb-5">
                    <div className="feature-item">
                      <div className="feature-icon">
                        <i className="fa-solid fa-droplet"></i>
                      </div>
                      <div className="feature-text">
                        <h6 className="mb-0">Crystal Clear Quality</h6>
                        <small className="text-muted">
                          Premium glass clarity
                        </small>
                      </div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">
                        <i className="fa-solid fa-recycle"></i>
                      </div>
                      <div className="feature-text">
                        <h6 className="mb-0">Eco-Friendly</h6>
                        <small className="text-muted">
                          100% recyclable materials
                        </small>
                      </div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">
                        <i className="fa-solid fa-shield"></i>
                      </div>
                      <div className="feature-text">
                        <h6 className="mb-0">Food-Grade Safety</h6>
                        <small className="text-muted">
                          Meets highest standards
                        </small>
                      </div>
                    </div>
                  </div>

                  <div className="hero-cta">
                    <button className="btn btn-primary btn-lg px-4 me-3">
                      Get Quote
                    </button>
                    <button className="btn btn-outline-light btn-lg px-4">
                      View Catalog
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 position-relative">
              <div className="hero-image-wrapper">
                <div className="water-effect"></div>
                <div className="single-bottle-container">
                  <img
                    src={water1}
                    alt="Premium Water Bottle"
                    className="single-bottle floating-animation"
                  />
                  <div className="bottle-backdrop"></div>
                </div>
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
            <h2>Water Bottle Categories</h2>
          </div>

          <div className="row g-4">
            {[
              {
                icon: "fa-solid fa-bottle-water",
                title: "Still Water Bottles",
                description: "Classic designs for still water packaging",
              },
              {
                icon: "fa-solid fa-burst",
                title: "Sparkling Water Bottles",
                description: "Pressure-resistant bottles for carbonated water",
              },
              {
                icon: "fa-solid fa-leaf",
                title: "Premium Water Bottles",
                description: "Luxury designs for premium water brands",
              },
            ].map((item, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="service-item">
                  <img src={service1} alt="Service" />
                  <img src={service2} alt="Service" />
                  <i className={item.icon} />
                  <h3>
                    <Link to="#">{item.title}</Link>
                  </h3>
                  <p>{item.description}</p>
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
            <span className="sub-title">Our Process</span>
            <h2>Manufacturing Excellence</h2>
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
                description: "Rigorous quality checks",
              },
              {
                icon: "fa-solid fa-award",
                title: "Final Inspection",
                description: "Detailed quality assurance",
              },
            ].map((step, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="process-card text-center">
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

      <Footer />
    </>
  );
};

export default WaterBottles;
