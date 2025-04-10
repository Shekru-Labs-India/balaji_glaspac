import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

// Import images
import service1 from "../assets/img/home-one/service-shape.png";
import service2 from "../assets/img/home-one/service-shape2.png";
import specialtyBottle from "../assets/img/specialityBottle.jpg";
import specialtyBottle2 from "../assets/img/specialityBottle2.jpg";

const SpecialtyDrinkBottles = () => {
  return (
    <>
      <Header />

      {/* Hero Section with Diagonal Design */}
      <section
  className="position-relative overflow-hidden bg-dark text-white pt-5 mt-3"
  style={{
    backgroundImage: `url(${specialtyBottle2})`, // Replace with your actual image
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Blur overlay to affect background only */}
  <div
    className="position-absolute top-0 start-0 w-100 h-100"
    style={{
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 1,
    }}
  ></div>

  {/* Main content (sharp and above blur) */}
  <div className="container-fluid position-relative" style={{ zIndex: 2 }}>
    <div
      className="row align-items-center g-0"
      style={{ minHeight: "100vh" }}
    >
      <div className="col-lg-7">
        <div className="p-5" style={{ minHeight: "400px" }}>
          <div className="pe-lg-5">
            <div className="d-inline-block border border-warning rounded-pill px-3 py-1 mb-4">
              <span className="text-warning">Artisanal Excellence</span>
            </div>
            <h1 className="display-3 fw-bold mb-4">
              Specialty Drink Bottles
            </h1>
            <p className="lead mb-4">
              Custom bottles for cold-pressed juices, kombucha, and other
              specialty beverages. Designed to preserve unique flavors and
              enhance shelf presence.
            </p>

            {/* Key Features Grid */}
            <div className="row g-4 mb-4">
              <div className="col-md-6">
                <div
                  className="d-flex p-4 rounded h-100"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    minHeight: "100px",
                  }}
                >
                  <i className="fa-solid fa-flask-vial fs-2 text-warning me-3"></i>
                  <div className="d-flex flex-column justify-content-center">
                    <h5 className="mb-1">UV Protection</h5>
                    <p className="mb-0 small">
                      Preserves natural ingredients
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="d-flex p-4 rounded h-100"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    minHeight: "100px",
                  }}
                >
                  <i className="fa-solid fa-temperature-low fs-2 text-warning me-3"></i>
                  <div className="d-flex flex-column justify-content-center">
                    <h5 className="mb-1">Temperature Stable</h5>
                    <p className="mb-0 small">
                      Suitable for cold storage
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex flex-wrap gap-3">
              <button className="btn btn-warning btn-lg px-4">
                Request Samples
              </button>
              <button className="btn btn-outline-light btn-lg px-4">
                View Catalog
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-5">
        <div
          className="position-relative"
          style={{
            height: "500px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={specialtyBottle}
            alt="Specialty Bottle"
            style={{
              width: "auto",
              height: "500px",
              objectFit: "contain",
              padding: "2rem",
              transition: "transform 0.3s ease",
              zIndex: 2,
              position: "relative",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          />
          {/* Decorative glow effect */}
          <div
            className="position-absolute"
            style={{
              width: "200px",
              height: "200px",
              background:
                "radial-gradient(circle, rgba(255,193,7,0.1) 0%, rgba(255,193,7,0) 70%)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
            }}
          ></div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Applications Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h6 className="text-primary fw-bold mb-2">PERFECT FOR</h6>
            <h2 className="display-5 fw-bold">Specialty Applications</h2>
          </div>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {[
              {
                icon: "fa-solid fa-leaf",
                title: "Kombucha",
                description:
                  "Pressure-resistant bottles for fermented tea beverages",
              },
              {
                icon: "fa-solid fa-blender",
                title: "Cold-Pressed Juices",
                description: "Premium clarity for showcasing natural colors",
              },
              {
                icon: "fa-solid fa-seedling",
                title: "Plant-Based Drinks",
                description: "Sustainable packaging for eco-conscious brands",
              },
              {
                icon: "fa-solid fa-fire",
                title: "Hot-Fill Capable",
                description: "Thermal shock resistant for hot-filled beverages",
              },
              {
                icon: "fa-solid fa-shield",
                title: "Probiotic Drinks",
                description:
                  "Protection for live cultures and beneficial bacteria",
              },
              {
                icon: "fa-solid fa-droplet",
                title: "Wellness Shots",
                description: "Small format bottles for concentrated drinks",
              },
            ].map((item, index) => (
              <div key={index} className="col">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="rounded-circle bg-primary bg-opacity-10 p-3 d-inline-flex mb-3">
                      <i className={`${item.icon} text-primary fs-4`}></i>
                    </div>
                    <h4 className="mb-3">{item.title}</h4>
                    <p className="text-muted">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h6 className="text-primary fw-bold mb-2">SPECIFICATIONS</h6>
            <h2 className="display-6 fw-bold mb-4">Technical Details</h2>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                style={{ minHeight: "400px" }}
                className="d-flex flex-column justify-content-center pe-lg-4"
              >
                <div className="vstack gap-4">
                  {[
                    {
                      label: "Capacity Range",
                      value: "60ml to 1000ml",
                      icon: "fa-flask",
                    },
                    {
                      label: "Neck Finish Options",
                      value: "Multiple thread patterns available",
                      icon: "fa-rotate",
                    },
                    {
                      label: "Material",
                      value: "Type III glass with UV protection",
                      icon: "fa-cube",
                    },
                    {
                      label: "Customization",
                      value: "Embossing, screen printing, labeling",
                      icon: "fa-wand-magic-sparkles",
                    },
                  ].map((spec, index) => (
                    <div
                      key={index}
                      className="d-flex align-items-center p-3 bg-white rounded-3 shadow-sm"
                      style={{ minHeight: "80px" }}
                    >
                      <div className="flex-shrink-0">
                        <div className="rounded-circle bg-primary bg-opacity-10 p-3">
                          <i
                            className={`fa-solid ${spec.icon} text-primary fs-5`}
                          ></i>
                        </div>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h5 className="mb-1">{spec.label}</h5>
                        <p className="mb-0 text-muted">{spec.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="position-relative bg-white rounded-4 shadow-sm p-4"
                style={{ height: "400px" }}
              >
                <img
                  src={specialtyBottle2}
                  alt="Technical Specifications"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.02)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
                {/* Optional decorative element */}
                <div
                  className="position-absolute"
                  style={{
                    width: "150px",
                    height: "150px",
                    background:
                      "radial-gradient(circle, rgba(13,110,253,0.1) 0%, rgba(13,110,253,0) 70%)",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 0,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="display-6 fw-bold mb-4">Ready to Get Started?</h2>
              <p className="lead mb-5">
                Let's discuss your specialty beverage packaging needs
              </p>
              <div className="d-flex justify-content-center gap-3">
                <button className="btn btn-light btn-lg px-4">
                  Contact Sales
                </button>
                <button className="btn btn-outline-light btn-lg px-4">
                  Download Specs
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

export default SpecialtyDrinkBottles;
