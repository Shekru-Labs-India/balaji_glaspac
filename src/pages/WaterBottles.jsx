import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

// Import images
import service1 from "../assets/img/home-one/service-shape.png";
import service2 from "../assets/img/home-one/service-shape2.png";
import water1 from "../assets/img/waterbottle (2).jpg";

// Define theme colors
const colors = {
  theme: "#ff5d22", // Main orange theme color
  themeLight: "#ff8f66", // Lighter shade for hovers
  themeDark: "#e54d1a", // Darker shade for active states
  themeOpacity: {
    light: "#ff5d2215", // 15% opacity for light backgrounds
    medium: "#ff5d2230", // 30% opacity for medium emphasis
    high: "#ff5d2250", // 50% opacity for high emphasis
  },
};

const WaterBottles = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="pt-5 mt-5">
        <div className="container ">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <div className="py-5">
                {/* Title Section */}
                <div className="mb-4">
                  <span
                    className="badge rounded-pill px-3 py-2 mb-3"
                    style={{
                      backgroundColor: colors.themeOpacity.light,
                      color: colors.theme,
                    }}
                  >
                    Pure & Pristine
                  </span>

                  <h1 className="display-4 fw-bold mb-4">
                    Crystal Clear Water Bottles
                  </h1>

                  <p className="lead text-secondary mb-5">
                    Premium glass water bottles that combine purity,
                    sustainability, and elegant design for the perfect water
                    drinking experience.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="row g-4 mb-5">
                  {[
                    {
                      icon: "fa-droplet",
                      title: "Crystal Clear Quality",
                      desc: "Premium glass clarity",
                    },
                    {
                      icon: "fa-recycle",
                      title: "Eco-Friendly",
                      desc: "100% recyclable materials",
                    },
                    {
                      icon: "fa-shield",
                      title: "Food-Grade Safety",
                      desc: "Meets highest standards",
                    },
                  ].map((feature, index) => (
                    <div key={index} className="col-md-4">
                      <div className="card border-0 shadow-sm h-100">
                        <div className="card-body p-4 text-center">
                          <div className="d-flex flex-column align-items-center">
                            <div
                              className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                              style={{
                                backgroundColor: colors.themeOpacity.light,
                                width: "70px",
                                height: "70px",
                              }}
                            >
                              <i
                                className={`fa-solid ${feature.icon} fs-3`}
                                style={{ color: colors.theme }}
                              ></i>
                            </div>
                            <div className="feature-content">
                              <h6 className="fw-bold mb-2">{feature.title}</h6>
                              <p className="text-muted mb-0 small">
                                {feature.desc}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons - Using original classes */}
                <div className="d-flex flex-wrap gap-3">
                  <button className="cmn-btn border-0">View Catalog</button>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="col-lg-6 position-relative">
              <div className="hero-image-wrapper h-100 d-flex align-items-center justify-content-center">
                <div className="water-effect"></div>
                <div className="single-bottle-container position-relative w-100 h-100 d-flex align-items-center">
                  <img
                    src={water1}
                    alt="Premium Water Bottle"
                    className="single-bottle floating-animation img-fluid"
                    style={{
                      height: "auto",
                      maxHeight: "100%",
                      width: "100%",
                      objectFit: "contain",
                      objectPosition: "center",
                      padding: "2rem",
                    }}
                  />
                  <div
                    className="bottle-backdrop"
                    style={{
                      position: "absolute",
                      bottom: "2rem",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "80%",
                      height: "20px",
                      filter: "blur(15px)",
                      opacity: "0.2",
                      background: colors.theme,
                    }}
                  ></div>
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
              <div key={index} className="col-md-6 col-lg-4 d-flex">
                {" "}
                {/* Added d-flex */}
                <div className="service-item w-100">
                  {" "}
                  {/* Added w-100 for full width */}
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
              <div key={index} className="col-md-6 col-lg-3 d-flex">
                <div className="process-card text-center w-100">
                  <div className="process-icon mb-3">
                    <i
                      className={`${step.icon} fa-2x`}
                      style={{ color: colors.theme }}
                    ></i>
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
