import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

// Import images
import service1 from "../assets/img/home-one/service-shape.png";
import service2 from "../assets/img/home-one/service-shape2.png";
import oralLiquidBottle from "../assets/img/oralBottle.jpg";
import oralLiquidBottle2 from "../assets/img/oralBottle2.jpg";

const OralLiquidBottles = () => {
  return (
    <>
      <Header />

      {/* Hero Section with Split Design */}
      <section className="text-dark position-relative pt-5 mt-3">
  {/* Blurred background image layer */}
  <div
    className="position-absolute top-0 start-0 w-100 h-100"
    style={{
      backgroundImage: `url(${oralLiquidBottle})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      filter: "blur(6px)",
      opacity: 0.3,
      zIndex: 0,
    }}
  ></div>

  {/* Foreground content */}
  <div className="container position-relative" style={{ zIndex: 1 }}>
    <div className="row align-items-center" style={{ minHeight: "85vh" }}>
      <div className="col-lg-6 order-lg-2">
        <div className="p-lg-5 p-4" style={{ minHeight: "400px" }}>
          <div className="mb-4">
            <span className="badge bg-light text-primary px-3 py-2">
              Pharmaceutical Grade
            </span>
          </div>
          <h1 className="display-4 fw-bold mb-4">Oral Liquid Bottles</h1>
          <p className="lead opacity-75 mb-4">
            Pharmaceutical-grade glass bottles designed specifically for
            oral medications and supplements, featuring precise dosing
            capabilities and child-resistant closures.
          </p>

          {/* Certifications */}
          <div className="row g-3 mb-4">
            {["USP", "ISO 9001", "FDA", "GMP"].map((cert, index) => (
              <div key={index} className="col-auto">
                <span className="badge bg-white text-primary p-2 fw-normal">
                  <i className="fa-solid fa-certificate me-2"></i>
                  {cert} Certified
                </span>
              </div>
            ))}
          </div>

          <div className="d-flex gap-3">
            <button className="btn btn-light btn-lg px-4">
              Get Quote
              <i className="fa-solid fa-arrow-right ms-2"></i>
            </button>
            <button className="btn btn-light btn-lg px-4">
              Download Specs
            </button>
          </div>
        </div>
      </div>

      <div className="col-lg-6 order-lg-1">
        <div className="position-relative" style={{ height: "400px" }}>
          <img
            src={oralLiquidBottle}
            alt="Oral Liquid Bottle"
            style={{
              width: "100%",
              height: "500px",
              objectFit: "contain",
              padding: "2rem",
            }}
          />
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {[
              {
                icon: "fa-solid fa-shield-virus",
                title: "Safety Features",
                points: [
                  "Child-resistant closures",
                  "Tamper-evident seals",
                  "Break-resistant glass",
                ],
              },
              {
                icon: "fa-solid fa-flask",
                title: "Material Quality",
                points: [
                  "Type III glass",
                  "Chemical resistant",
                  "USP compliant",
                ],
              },
              {
                icon: "fa-solid fa-droplet",
                title: "Dosing Accuracy",
                points: [
                  "Precise measurements",
                  "Multiple size options",
                  "Calibrated droppers",
                ],
              },
            ].map((feature, index) => (
              <div key={index} className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <div className="rounded-circle bg-primary bg-opacity-10 p-3 d-inline-flex mb-4">
                      <i className={`${feature.icon} text-primary fs-2`}></i>
                    </div>
                    <h3 className="h4 mb-3">{feature.title}</h3>
                    <ul className="list-unstyled text-start">
                      {feature.points.map((point, i) => (
                        <li key={i} className="mb-2 d-flex align-items-center">
                          <i className="fa-solid fa-check text-primary me-2"></i>
                          <span>{point}</span>
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

      {/* Specifications Table */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="h1 mb-4">Technical Specifications</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="table-responsive">
                <table className="table table-bordered bg-white">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th>Size (ml)</th>
                      <th>Neck Finish</th>
                      <th>Glass Type</th>
                      <th>Closure Options</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        size: "15",
                        neck: "18mm",
                        glass: "Type III",
                        closure: "CRC, Dropper",
                      },
                      {
                        size: "30",
                        neck: "20mm",
                        glass: "Type III",
                        closure: "CRC, Dropper",
                      },
                      {
                        size: "60",
                        neck: "22mm",
                        glass: "Type III",
                        closure: "CRC, Pump",
                      },
                      {
                        size: "100",
                        neck: "24mm",
                        glass: "Type III",
                        closure: "CRC, Pump",
                      },
                    ].map((spec, index) => (
                      <tr key={index}>
                        <td>{spec.size}</td>
                        <td>{spec.neck}</td>
                        <td>{spec.glass}</td>
                        <td>{spec.closure}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                style={{ minHeight: "400px" }}
                className="d-flex flex-column justify-content-center pe-lg-4"
              >
                <h2 className="h1 mb-4">Quality Assurance</h2>
                <div className="vstack gap-4">
                  {[
                    {
                      title: "Material Testing",
                      desc: "Rigorous chemical composition analysis",
                    },
                    {
                      title: "Dimensional Control",
                      desc: "Precise measurements for consistent quality",
                    },
                    {
                      title: "Visual Inspection",
                      desc: "100% automated defect detection",
                    },
                  ].map((item, index) => (
                    <div key={index} className="d-flex gap-3">
                      <div className="flex-shrink-0">
                        <div className="rounded-circle bg-primary p-3 text-white">
                          <i className="fa-solid fa-check"></i>
                        </div>
                      </div>
                      <div>
                        <h4 className="mb-1">{item.title}</h4>
                        <p className="mb-0 text-muted">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative">
                <img
                  src={oralLiquidBottle2}
                  alt="Quality Assurance"
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
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-dark text-white py-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="mb-4">Need Pharmaceutical Packaging Solutions?</h2>
              <p className="lead mb-4">
                Our team of experts is ready to help you choose the right oral
                liquid bottles for your pharmaceutical products.
              </p>
              <Link to="/contact" className="btn btn-light btn-lg px-4">
                Contact Our Experts
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

export default OralLiquidBottles;
