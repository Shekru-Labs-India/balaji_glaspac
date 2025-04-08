import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

// Import images
import service1 from "../assets/img/home-one/service-shape.png";
import service2 from "../assets/img/home-one/service-shape2.png";
import industrialBottle from "../assets/img/industrialBottle.jpg";
import industrialBottle2 from "../assets/img/industrialBottle2.jpg";

const IndustrialBottles = () => {
  return (
    <>
      <Header />

      {/* Hero Section - adjusted spacing */}
      <section className="bg-dark position-relative overflow-hidden pt-5 mt-3">
        <div className="container-fluid vh-100">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="p-5 h-100 d-flex flex-column justify-content-center bg-gradient">
                <div className="d-flex align-items-center mb-4">
                  <div className="border-3 border-warning border-start ps-3">
                    <h1 className="display-4 text-white fw-bold mb-0">
                      Industrial Glass Bottles
                    </h1>
                  </div>
                </div>
                <div className="row g-4 mt-4">
                  {[
                    { number: "500+", label: "Resistant Options" },
                    { number: "99.9%", label: "Safety Rating" },
                    { number: "24/7", label: "Technical Support" },
                  ].map((stat, index) => (
                    <div key={index} className="col-md-4">
                      <div className="border border-warning border-2 p-3">
                        <h2 className="text-warning mb-1">{stat.number}</h2>
                        <p className="text-white mb-0 small ">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src={industrialBottle}
                alt="Industrial Bottle"
                style={{
                  width: "100%",
                  height: "500px",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Safety Features Section - adjusted spacing */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="display-6 mb-4 fw-bold text-uppercase">
                Safety First Design
              </h2>
              <div className="row g-4">
                {[
                  {
                    icon: "fa-shield-halved",
                    title: "Chemical Resistance",
                    desc: "Withstands aggressive chemicals",
                  },
                  {
                    icon: "fa-temperature-high",
                    title: "Temperature Stable",
                    desc: "High thermal shock resistance",
                  },
                  {
                    icon: "fa-triangle-exclamation",
                    title: "Warning Labels",
                    desc: "Clear hazard communication",
                  },
                  {
                    icon: "fa-lock",
                    title: "Secure Closures",
                    desc: "Tamper-evident options",
                  },
                ].map((feature, index) => (
                  <div key={index} className="col-sm-6">
                    <div
                      className="d-flex p-3 bg-white rounded shadow-sm"
                      style={{ minHeight: "100px" }}
                    >
                      <i
                        className={`fa-solid ${feature.icon} text-warning fs-3 me-3`}
                      ></i>
                      <div>
                        <h4 className="h5 mb-1">{feature.title}</h4>
                        <p className="mb-0 text-muted small">{feature.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src={industrialBottle2}
                alt="Safety Features"
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

      {/* Technical Specifications - adjusted spacing */}
      <section className="py-5 bg-dark text-white">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div
                className="border border-warning p-4"
                style={{ minHeight: "400px" }}
              >
                <h3 className="mb-4">Technical Specifications</h3>
                <div className="table-responsive">
                  <table className="table table-dark table-bordered mb-0">
                    <tbody>
                      {[
                        { spec: "Volume Range", value: "100ml - 20L" },
                        { spec: "Wall Thickness", value: "2.5mm - 5mm" },
                        { spec: "Pressure Rating", value: "Up to 15 PSI" },
                        { spec: "Temperature Range", value: "-20°C to 120°C" },
                      ].map((row, index) => (
                        <tr key={index}>
                          <th className="text-warning">{row.spec}</th>
                          <td>{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="border border-warning p-4"
                style={{ minHeight: "400px" }}
              >
                <h3 className="mb-4">Compliance Standards</h3>
                <ul className="list-unstyled mb-0">
                  {[
                    "ISO 9001:2015 Certified",
                    "ASTM D3475 Standards",
                    "UN Packaging Requirements",
                    "GHS Labeling Compliance",
                    "DOT Transportation Standards",
                  ].map((standard, index) => (
                    <li key={index} className="mb-3 d-flex align-items-center">
                      <i className="fa-solid fa-check text-warning me-2"></i>
                      {standard}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial CTA - adjusted spacing */}
      <section className="py-5 bg-warning">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="display-6 mb-4 text-dark fw-bold">
                Need Industrial-Grade Packaging?
              </h2>
              <p className="lead mb-4 text-dark">
                Our team of experts is ready to help you find the right solution
                for your industrial needs.
              </p>
              <Link to="/contact" className="btn btn-dark btn-lg px-5">
                Request Technical Consultation
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

export default IndustrialBottles;
