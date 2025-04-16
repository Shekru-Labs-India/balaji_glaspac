import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Import images
import service1 from "../assets/img/home-one/service-shape.png";
import service2 from "../assets/img/home-one/service-shape2.png";
import specialtyBottle from "../assets/img/Pharmaceutical.jpg";
import specialtyBottle2 from "../assets/img/Pharmaceutical2.jpg";
import type1 from "../assets/img/type1Glass.jpg";
import type2 from "../assets/img/type2Glass.jpg";
import type3 from "../assets/img/type3Glass.jpg";
// At the top of your file, add the theme color
const themeColor = "#ff5d22"; // Your orange theme color

// Update styles object
const styles = {
  bannerImage: {
    height: "310px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  featureIcon: {
    fontSize: "2.5rem",
    color: themeColor,
    marginBottom: "1rem",
  },
  // Add custom button styles to match template
  templateBtn: {
    backgroundColor: themeColor,
    borderColor: themeColor,
    "&:hover": {
      backgroundColor: themeColor,
      borderColor: themeColor,
    },
  },
  templateBtnOutline: {
    color: themeColor,
    borderColor: themeColor,
    "&:hover": {
      backgroundColor: themeColor,
      borderColor: themeColor,
    },
  },
};

const SpecialtyPharmaceuticalBottles = () => {
   const [activeTab, setActiveTab] = useState("type1");
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section  className="position-relative  text-dark"
  style={{
    backgroundImage: `url(${type1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    
    
  }}
>
  {/* Blurred overlay background */}
  <div
    className="position-absolute top-0 start-0 w-100 h-100"
    style={{
      backgroundColor: "rgba(255, 255, 255, 0.08)",
      zIndex: 1,
    }}
  ></div>

  {/* Foreground content */}
  <div className="container position-relative min-vh-100 my-5 py-5" style={{ zIndex: 2 }}>
    {/* Hero Section */}
    <div className="row align-items-center">
      <div className="col-lg-6  mb-lg-0 text-white">
        <h1 className="display-4 fw-bold mb-1">Specialty Pharmaceutical Bottles</h1>
        <p className="lead">
        Advanced glass packaging solutions designed for specific medical applications, meeting the highest pharmaceutical standards.
        </p>
        <div className="d-flex gap-3 mt-4">
                    <button className="btn btn-light btn-lg px-4">
                      Get Details
                      <i className="fa-solid fa-arrow-right ms-2"></i>
                    </button>
                    <button className="btn btn-outline-light btn-lg px-4">
                      View Catalog
                    </button>
                  </div>
      </div>
      

      {/* Hero Images */}
      <div className="col-lg-6">
        <div className="row g-4">
          <div className="col-lg-6">
            <img
              src={specialtyBottle}
              alt="Capsule Bottle"
              className="img-fluid shadow-sm w-100"
              style={styles.bannerImage}
            />
          </div>
          <div className="col-lg-6">
            <img
              src={specialtyBottle2}
              alt="Capsule Bottle"
              className="img-fluid shadow-sm w-100"
              style={styles.bannerImage}
            />
          </div>
        </div>
      </div>
      
    </div>
     {/* Features Section */}
     <div className="col-lg-12 py-5 my-5">
      <div className="text-center">
      </div>
      <div className="row g-4">
            {[
              {
                icon: "fa-solid fa-shield-virus",
                title: "Chemical Resistance",
                desc: "Superior protection against aggressive pharmaceutical compounds",
              },
              {
                icon: "fa-solid fa-microscope",
                title: "USP Standards",
                desc: "Meets or exceeds all USP container requirements",
              },
              {
                icon: "fa-solid fa-temperature-low",
                title: "Temperature Stable",
                desc: "Maintains integrity across temperature ranges",
              },
              {
                icon: "fa-solid fa-fingerprint",
                title: "Traceability",
                desc: "Complete batch tracking and documentation",
              },
            ].map((feature, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm w-100">
                  <div className="card-body text-center">
                    <div className="rounded-circle bg-primary bg-opacity-10 p-3 d-inline-flex mb-3">
                      <i className={`${feature.icon} text-primary fs-3`}></i>
                    </div>
                    <h4 className="h5 mb-2">{feature.title}</h4>
                    <p className="text-muted mb-0">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
    </div>


    
          
         

    
  </div>
</section>

<section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="pe-lg-5" style={{ minHeight: "400px" }}>
                <div className="section-title mb-4">
                  <span className="sub-title text-primary text-uppercase fw-bold mb-2 d-block">
                    Technical Details
                  </span>
                  <h2 className="display-6 fw-bold">Advanced Specifications</h2>
                </div>
                <div className="tab-content mt-4">
                  {[
                    {
                      id: "type1",
                      title: "Type I Glass",
                      content:
                        "Highest chemical resistance for sensitive medications",
                      icon: "fa-flask-vial",
                      image: type1,
                    },
                    {
                      id: "type2",
                      title: "Type II Glass",
                      content:
                        "Treated soda-lime glass for enhanced durability",
                      icon: "fa-vial",
                      image: type2,
                    },
                    {
                      id: "type3",
                      title: "Type III Glass",
                      content: "General-purpose pharmaceutical grade glass",
                      icon: "fa-prescription-bottle",
                      image: type3,
                    },
                  ].map((spec, index) => (
                    <div
                      key={index}
                      className={`nav-link text-start mb-3 p-4 rounded-3 ${
                        index === 0 ? "active" : ""
                      }`}
                      role="tabpanel"
                      id={spec.id}
                      onClick={() => setActiveTab(spec.id)}
                      style={{
                        minHeight: "100px",
                        cursor: "pointer",
                        backgroundColor:
                          activeTab === spec.id ? "#0d6efd" : "white",
                        color: activeTab === spec.id ? "white" : "inherit",
                      }}
                    >
                      <div className="d-flex align-items-center gap-3">
                        <div className="flex-shrink-0">
                          <i
                            className={`fa-solid ${spec.icon} fs-3`}
                            style={{
                              color:
                                activeTab === spec.id ? "white" : "#0d6efd",
                            }}
                          ></i>
                        </div>
                        <div>
                          <h4
                            className="h5 mb-2"
                            style={{
                              color:
                                activeTab === spec.id ? "white" : "inherit",
                            }}
                          >
                            {spec.title}
                          </h4>
                          <p
                            className="small mb-0"
                            style={{
                              color:
                                activeTab === spec.id
                                  ? "rgba(255,255,255,0.8)"
                                  : "inherit",
                            }}
                          >
                            {spec.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <h2 className="mb-4">Quality Certifications</h2>
              <div className="row g-4">
                {[
                  "ISO 15378",
                  "USP <660>",
                  "EP 3.2.1",
                  "FDA DMF",
                  "JP Standards",
                  "GMP Certified",
                ].map((cert, index) => (
                  <div key={index} className="col-6 col-md-4">
                    <div className="border rounded p-3 h-100">
                      <i className="fa-solid fa-certificate text-primary mb-2"></i>
                      <h5 className="mb-0">{cert}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Applications Grid */}
<section className="service-area pt-100 pb-70">
        <div className="container">
          <div className="section-title text-center mb-5">
            <span className="sub-title">Applications</span>
            <h2>Specialized Solutions For Every Need</h2>
          </div>
          <div className="row g-4">
            {[
              {
                icon: "fa-solid fa-capsules",
                title: "Injectable Medications",
                desc: "Sterile packaging for injectable drugs",
              },
              {
                icon: "fa-solid fa-eye-dropper",
                title: "Ophthalmic Solutions",
                desc: "Precision bottles for eye medications",
              },
              {
                icon: "fa-solid fa-vials",
                title: "Biological Products",
                desc: "Storage for sensitive biological compounds",
              },
            ].map((app, index) => (
              <div key={index} className="col-lg-4">
                <div className="service-item text-center h-100">
                  <i className={app.icon}></i>
                  <h3>{app.title}</h3>
                  <p>{app.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Certifications */}
      <section className="bg-light py-5 ">
        <div className="container">
          <div className="row justify-content-center">
            
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="partner-area pb-5 pt-0">
        <div className="container">
          <div className="partner-wrap">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="partner-content">
                  <h2>Need Custom Pharmaceutical Packaging?</h2>
                  <p>
                    Let our experts help you find the perfect solution for your
                    specific requirements.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 text-lg-end">
                <Link to="/contact" className="cmn-btn">
                  Request Consultation
                  <i className="fa-solid fa-arrow-right ms-2"></i>
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

export default SpecialtyPharmaceuticalBottles;