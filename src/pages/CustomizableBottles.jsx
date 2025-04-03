import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

// Import images
import service1 from "../assets/img/home-one/service-shape.png";
import service2 from "../assets/img/home-one/service-shape2.png";
import custombottle from "../assets/img/customBottle1.jpg";
import custombottle2 from "../assets/img/customBottle2.jpg";

const CustomizableBottles = () => {
  return (
    <>
      <Header />

      {/* Creative Hero Section */}
      <section className="min-vh-100 d-flex align-items-center bg-light pt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 py-3">
              <span
                className="premium-letter-spacing text-uppercase fw-bold px-3 rounded py-2 mb-4"
                style={{ backgroundColor: "#fa5f0b", color: "white" }}
              >
                Design Your Vision
              </span>
              <h1 className="display-3 fw-bold mb-4">
                Custom Glass Solutions
                <span className="text- d-block">For Your Brand</span>
              </h1>
              <div className="row g-4 mb-5">
                {[
                  { number: "1000+", label: "Custom Designs Delivered" },
                  { number: "100%", label: "Design Flexibility" },
                  { number: "3-5", label: "Weeks Production Time" },
                ].map((stat, index) => (
                  <div key={index} className="col-auto">
                    <h3 className="h2 fw-bold mb-1">{stat.number}</h3>
                    <p className="text-muted mb-0">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6 mt-5 pt-2">
              <div className="position-relative">
                <div className="about-img-item">
                  <img
                    src={custombottle}
                    alt="Custom Bottle"
                    className="img-fluid rounded-4 shadow-lg"
                    style={{
                      height: "500px",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Design Elements</h2>
            <p className="lead text-muted">
              Create your unique bottle with our extensive customization options
            </p>
          </div>
          <div className="row g-4">
            {[
              {
                icon: "fa-shapes",
                title: "Shape & Size",
                features: [
                  "Custom Molds",
                  "Unique Profiles",
                  "Various Capacities",
                ],
              },
              {
                icon: "fa-palette",
                title: "Colors & Finishes",
                features: [
                  "Premium Colors",
                  "Surface Textures",
                  "Special Effects",
                ],
              },
              {
                icon: "fa-layer-group",
                title: "Decorative Elements",
                features: ["Embossing", "Debossing", "Screen Printing"],
              },
              {
                icon: "fa-wand-magic-sparkles",
                title: "Special Features",
                features: ["Custom Necks", "Unique Bases", "Integrated Design"],
              },
            ].map((option, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <div className="rounded-circle bg-primary bg-opacity-10 p-3 d-inline-flex mb-4">
                      <i
                        className={`fa-solid ${option.icon} text-primary fs-3`}
                      ></i>
                    </div>
                    <h3 className="h4 mb-3">{option.title}</h3>
                    <ul className="list-unstyled mb-0">
                      {option.features.map((feature, idx) => (
                        <li key={idx} className="mb-2 text-muted">
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

      {/* Design Process */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <h2 className="display-6 fw-bold mb-4">Our Design Process</h2>
              <div className="vstack gap-4">
                {[
                  {
                    step: "01",
                    title: "Consultation",
                    desc: "Initial meeting to understand your requirements",
                  },
                  {
                    step: "02",
                    title: "Design Phase",
                    desc: "Creating concepts and 3D renderings",
                  },
                  {
                    step: "03",
                    title: "Prototyping",
                    desc: "Sample production for your approval",
                  },
                  {
                    step: "04",
                    title: "Production",
                    desc: "Full-scale manufacturing of your custom bottles",
                  },
                ].map((process, index) => (
                  <div key={index} className="d-flex gap-3">
                    <div className="flex-shrink-0">
                      <span
                        className="badge  px-2 py-1"
                        style={{ backgroundColor: "#fa5f0b", color: "white" }}
                      >
                        {process.step}
                      </span>
                    </div>
                    <div>
                      <h4 className="h5 mb-1">{process.title}</h4>
                      <p className="mb-0 text-muted">{process.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <img
                src={custombottle2}
                alt="Design Process"
                className="img-fluid rounded-4 shadow"
                style={{
                  height: "500px",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Creative CTA */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="display-6 mb-4">
                Ready to Create Your Custom Bottle?
              </h2>
              <p className="lead mb-4 opacity-75">
                Let our design experts help bring your vision to life with our
                state-of-the-art customization capabilities.
              </p>
              <div className="d-flex gap-3 justify-content-center">
                <Link to="/contact" className="btn btn-light btn-lg px-4">
                  Start Your Design
                  <i className="fa-solid fa-pencil ms-2"></i>
                </Link>
                <Link to="#" className="btn btn-outline-light btn-lg px-4">
                  View Gallery
                  <i className="fa-solid fa-images ms-2"></i>
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

export default CustomizableBottles;
