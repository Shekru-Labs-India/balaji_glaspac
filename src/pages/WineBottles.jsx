import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Import images (you'll need to add these to your assets)
import wineHero from "../assets/img/WineBottle.jpg";
import wine from "../assets/img/wine.jpg";
import wine2 from "../assets/img/wine2.jpg";
import wine3 from "../assets/img/wine3.jpg";
import wine4 from "../assets/img/wine4.jpg";
import wine5 from "../assets/img/wine5.jpg";
import process1 from "../assets/img/wine6.jpg";
import process2 from "../assets/img/wine7.jpg";
import process3 from "../assets/img/wine8.jpg";

// Define theme colors object
const colors = {
  theme: "#ff5d22", // Main orange theme color
  themeLight: "#ff8f66", // Lighter shade
  themeDark: "#e54d1a", // Darker shade
  themeOpacity: {
    light: "#ff5d2215", // 15% opacity
    medium: "#ff5d2230", // 30% opacity
    high: "#ff5d2250", // 50% opacity
  },
  text: {
    primary: "#2b2b2b", // Dark text
    secondary: "#6c757d", // Gray text
    light: "#ffffff", // White text
  },
  background: {
    light: "#f8f9fa", // Light background
    white: "#ffffff", // White background
    dark: "#2b2b2b", // Dark background
  },
};

const WineBottles = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <div
        className="hero-section position-relative"
        style={{
          backgroundImage: `url(${wineHero})`,
          height: "60vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100 bg-dark"
          style={{ opacity: "0.5" }}
        ></div>
        <div className="container position-relative h-100">
          <div className="d-flex align-items-center justify-content-center h-100">
            <div className="text-center text-white">
              <h1 className="display-3 fw-bold mb-4">
                Wine Bottles Manufacturing
              </h1>
              <p className="lead mb-0">
                Premium Glass Solutions for the Wine Industry
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4">
                Crafting Excellence in Wine Packaging
              </h2>
              <p className="lead mb-4">
                At Balaji Glaspac, we understand that wine bottles are more than
                just containers – they're an essential part of the wine's
                presentation and preservation.
              </p>
              <p className="mb-4">
                Our state-of-the-art manufacturing facility produces premium
                wine bottles that meet international quality standards while
                offering customization options to match your brand's unique
                identity.
              </p>
              <div className="d-flex gap-3">
                <button className="cmn-btn border-0">Request Quote</button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6">
                  <div style={{ height: "350px" }}>
                    <img
                      src={wine}
                      alt="Manufacturing Process"
                      className="img-fluid rounded shadow w-100 h-100"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div style={{ height: "350px" }}>
                    <img
                      src={wine2}
                      alt="Quality Control"
                      className="img-fluid rounded shadow w-100 h-100"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottle Types Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">
            Our Wine Bottle Collection
          </h2>
          <div className="row g-4">
            {[
              {
                image: wine3,
                title: "Bordeaux Style",
                description:
                  "Classic straight-sided bottles with high shoulders, perfect for Cabernet Sauvignon, Merlot, and other Bordeaux-style wines.",
                features: ["750ml Standard", "1.5L Magnum", "3L Double Magnum"],
              },
              {
                image: wine4,
                title: "Burgundy Style",
                description:
                  "Gently sloped shoulders and wider bodies, ideal for Pinot Noir, Chardonnay, and other Burgundian varietals.",
                features: [
                  "750ml Standard",
                  "1.5L Magnum",
                  "Custom Sizes Available",
                ],
              },
              {
                image: wine5,
                title: "Specialty Designs",
                description:
                  "Custom shapes and designs for unique brand expressions, including proprietary molds and distinctive features.",
                features: [
                  "Custom Shapes",
                  "Embossing Options",
                  "Unique Colors",
                ],
              },
            ].map((item, index) => (
              <div key={index} className="col-md-4 d-flex">
                <div className="card h-100 border-0 shadow-sm w-100">
                  <div className="card-img-wrapper" style={{ height: "300px" }}>
                    <img
                      src={item.image}
                      className="card-img-top h-100 w-100"
                      alt={item.title}
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <ul className="list-unstyled mt-auto">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="mb-2">
                          <i
                            className="fa-solid fa-check me-2"
                            style={{ color: colors.theme }}
                          ></i>
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

      {/* Manufacturing Process */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">
            Our Manufacturing Process
          </h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="text-center">
                <img
                  src={process1}
                  alt="Raw Materials"
                  className="img-fluid rounded-circle mb-3"
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <h4 className="fw-bold">Raw Materials</h4>
                <p>
                  Premium quality silica sand, soda ash, and limestone carefully
                  selected and tested.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <img
                  src={process2}
                  alt="Melting Process"
                  className="img-fluid rounded-circle mb-3"
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <h4 className="fw-bold">Melting & Forming</h4>
                <p>
                  Advanced furnace technology ensuring perfect glass composition
                  and forming.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <img
                  src={process3}
                  alt="Quality Control"
                  className="img-fluid rounded-circle mb-3"
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <h4 className="fw-bold">Quality Control</h4>
                <p>
                  Rigorous testing and inspection ensuring every bottle meets
                  our high standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section
        className="py-5"
        style={{ backgroundColor: colors.background.light }}
      >
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Features & Benefits</h2>
          <div className="row g-4">
            {[
              {
                icon: "fa-shield-halved",
                title: "Superior Protection",
                desc: "UV protection and optimal thickness for wine preservation",
              },
              {
                icon: "fa-recycle",
                title: "Eco-Friendly",
                desc: "Sustainable manufacturing and recyclable materials",
              },
              {
                icon: "fa-palette",
                title: "Customizable",
                desc: "Various colors, shapes, and embossing options",
              },
              {
                icon: "fa-certificate",
                title: "Certified Quality",
                desc: "Meeting international quality standards",
              },
            ].map((item, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="d-flex align-items-start">
                  <div
                    className="rounded-circle p-3 me-3"
                    style={{
                      backgroundColor: colors.themeOpacity.light,
                    }}
                  >
                    <i
                      className={`fa-solid ${item.icon} fs-4`}
                      style={{ color: colors.theme }}
                    ></i>
                  </div>
                  <div>
                    <h5 className="fw-bold">{item.title}</h5>
                    <p className="text-secondary mb-0">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5  ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-3">
                Ready to Order Custom Wine Bottles?
              </h2>
              <p className="lead mb-lg-0">
                Contact our team today to discuss your requirements and get a
                customized quote.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <button
                className="btn btn-lg px-4"
                style={{
                  backgroundColor: colors.text.light,
                  color: colors.theme,
                  border: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = colors.themeLight;
                  e.currentTarget.style.color = colors.text.light;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = colors.text.light;
                  e.currentTarget.style.color = colors.theme;
                }}
              >
                Contact Us Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default WineBottles;
