import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Import images (you'll need to add these to your assets)
import wineHero from "../assets/img/WineBottle.jpg";
import manufacturing1 from "../assets/img/WineBottle.jpg";
import manufacturing2 from "../assets/img/WineBottle.jpg";
import bottleType1 from "../assets/img/WineBottle.jpg";
import bottleType2 from "../assets/img/WineBottle.jpg";
import bottleType3 from "../assets/img/WineBottle.jpg";
import process1 from "../assets/img/WineBottle.jpg";
import process2 from "../assets/img/WineBottle.jpg";
import process3 from "../assets/img/WineBottle.jpg";

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
                <button className="btn btn-primary">Request Quote</button>
                <button className="btn btn-outline-primary">
                  Download Catalog
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6">
                  <img
                    src={manufacturing1}
                    alt="Manufacturing Process"
                    className="img-fluid rounded shadow"
                  />
                </div>
                <div className="col-6">
                  <img
                    src={manufacturing2}
                    alt="Quality Control"
                    className="img-fluid rounded shadow"
                  />
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
            {/* Bordeaux Style */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <img
                  src={bottleType1}
                  className="card-img-top"
                  alt="Bordeaux Bottle"
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Bordeaux Style</h5>
                  <p className="card-text">
                    Classic straight-sided bottles with high shoulders, perfect
                    for Cabernet Sauvignon, Merlot, and other Bordeaux-style
                    wines.
                  </p>
                  <ul className="list-unstyled">
                    <li>
                      <i className="fa-solid fa-check text-success me-2"></i>
                      750ml Standard
                    </li>
                    <li>
                      <i className="fa-solid fa-check text-success me-2"></i>
                      1.5L Magnum
                    </li>
                    <li>
                      <i className="fa-solid fa-check text-success me-2"></i>3L
                      Double Magnum
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Burgundy Style */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <img
                  src={bottleType2}
                  className="card-img-top"
                  alt="Burgundy Bottle"
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Burgundy Style</h5>
                  <p className="card-text">
                    Gently sloped shoulders and wider bodies, ideal for Pinot
                    Noir, Chardonnay, and other Burgundian varietals.
                  </p>
                  <ul className="list-unstyled">
                    <li>
                      <i className="fa-solid fa-check text-success me-2"></i>
                      750ml Standard
                    </li>
                    <li>
                      <i className="fa-solid fa-check text-success me-2"></i>
                      1.5L Magnum
                    </li>
                    <li>
                      <i className="fa-solid fa-check text-success me-2"></i>
                      Custom Sizes Available
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Specialty Bottles */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <img
                  src={bottleType3}
                  className="card-img-top"
                  alt="Specialty Bottle"
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Specialty Designs</h5>
                  <p className="card-text">
                    Custom shapes and designs for unique brand expressions,
                    including proprietary molds and distinctive features.
                  </p>
                  <ul className="list-unstyled">
                    <li>
                      <i className="fa-solid fa-check text-success me-2"></i>
                      Custom Shapes
                    </li>
                    <li>
                      <i className="fa-solid fa-check text-success me-2"></i>
                      Embossing Options
                    </li>
                    <li>
                      <i className="fa-solid fa-check text-success me-2"></i>
                      Unique Colors
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Features & Benefits</h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="d-flex align-items-start">
                <i className="fa-solid fa-shield-halved text-primary fs-4 me-3 mt-1"></i>
                <div>
                  <h5 className="fw-bold">Superior Protection</h5>
                  <p>
                    UV protection and optimal thickness for wine preservation
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="d-flex align-items-start">
                <i className="fa-solid fa-recycle text-primary fs-4 me-3 mt-1"></i>
                <div>
                  <h5 className="fw-bold">Eco-Friendly</h5>
                  <p>Sustainable manufacturing and recyclable materials</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="d-flex align-items-start">
                <i className="fa-solid fa-palette text-primary fs-4 me-3 mt-1"></i>
                <div>
                  <h5 className="fw-bold">Customizable</h5>
                  <p>Various colors, shapes, and embossing options</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="d-flex align-items-start">
                <i className="fa-solid fa-certificate text-primary fs-4 me-3 mt-1"></i>
                <div>
                  <h5 className="fw-bold">Certified Quality</h5>
                  <p>Meeting international quality standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-primary text-white">
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
              <button className="btn btn-light btn-lg">Contact Us Now</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default WineBottles;
