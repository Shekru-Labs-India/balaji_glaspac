import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import beerHero from "../assets/img/BeerBottle.jpg";
import BeerBottle2 from "../assets/img/BeerBottle2.jpg";
import BeerBottle3 from "../assets/img/BeerBottle3.jpg";
import BeerBottle4 from "../assets/img/BeerBottle4.jpg";

const BeerBottles = () => {
  return (
    <>
      <Header />

      {/* Hero Section with Image Background */}
      <div className="position-relative vh-100 pt-5">
        <img
          src={beerHero}
          alt="Beer Bottle Manufacturing"
          className="position-absolute w-100 h-100"
          style={{ objectFit: "cover" }}
        />
        <div
          className="position-absolute w-100 h-100 bg-dark"
          style={{ opacity: 0.6 }}
        ></div>
        <div className="container position-relative h-100">
          <div className="d-flex align-items-center justify-content-center h-100 text-white text-center">
            <div>
              <h1 className="display-2 fw-bold mb-4">
                Craft Your Perfect Beer Bottle
              </h1>
              <p className="lead mb-4">Premium Glass Solutions for Breweries</p>
              <button
                className="btn btn-lg px-5"
                style={{ backgroundColor: "#fa5f0b", color: "white" }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Categories with Horizontal Scroll */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center my-5">Our Beer Bottle Collection</h2>
          <div className="row flex-nowrap overflow-auto pb-4">
            {/* Standard Beer Bottle */}
            <div className="col-9 col-md-4">
              <div className="card border-0 shadow-sm">
                <div className="position-relative">
                  <img
                    src={beerHero}
                    className="card-img-top"
                    alt="Standard Beer Bottle"
                  />
                  <span className="position-absolute top-0 end-0 badge bg-primary m-3">
                    Popular
                  </span>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Standard Beer Bottle</h5>
                  <p className="card-text">
                    Classic design for mainstream beers
                  </p>
                  <ul className="list-unstyled">
                    <li>
                      <i className="fas fa-check-circle text-success me-2"></i>
                      330ml
                    </li>
                    <li>
                      <i className="fas fa-check-circle text-success me-2"></i>
                      500ml
                    </li>
                    <li>
                      <i className="fas fa-check-circle text-success me-2"></i>
                      650ml
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Craft Beer Bottle */}
            <div className="col-9 col-md-4">
              <div className="card border-0 shadow-sm">
                <img
                  src={BeerBottle3}
                  className="card-img-top"
                  alt="Craft Beer Bottle"
                />
                <div className="card-body">
                  <h5 className="card-title">Craft Beer Bottle</h5>
                  <p className="card-text">
                    Unique designs for craft breweries
                  </p>
                  <ul className="list-unstyled">
                    <li>
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Custom Shapes
                    </li>
                    <li>
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Embossing
                    </li>
                    <li>
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Multiple Colors
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Premium Beer Bottle */}
            <div className="col-9 col-md-4">
              <div className="card border-0 shadow-sm">
                <img
                  src={BeerBottle4}
                  className="card-img-top"
                  alt="Premium Beer Bottle"
                />
                <div className="card-body">
                  <h5 className="card-title">Premium Beer Bottle</h5>
                  <p className="card-text">Luxury designs for premium brands</p>
                  <ul className="list-unstyled">
                    <li>
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Unique Shapes
                    </li>
                    <li>
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Premium Finish
                    </li>
                    <li>
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Brand Integration
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Animation */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm hover-lift">
                <div className="card-body text-center">
                  <i className="fas fa-shield-alt fa-3x text-primary mb-3"></i>
                  <h4 className="card-title">Durability</h4>
                  <p className="card-text">
                    Enhanced strength for better handling and transportation
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm hover-lift">
                <div className="card-body text-center">
                  <i className="fas fa-recycle fa-3x text-primary mb-3"></i>
                  <h4 className="card-title">Sustainability</h4>
                  <p className="card-text">
                    Eco-friendly materials and production processes
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm hover-lift">
                <div className="card-body text-center">
                  <i className="fas fa-palette fa-3x text-primary mb-3"></i>
                  <h4 className="card-title">Customization</h4>
                  <p className="card-text">
                    Flexible design options to match your brand
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm hover-lift">
                <div className="card-body text-center">
                  <i className="fas fa-award fa-3x text-primary mb-3"></i>
                  <h4 className="card-title">Quality</h4>
                  <p className="card-text">
                    International standards compliance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Specification Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Technical Specifications</h2>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                src={beerHero}
                alt="Bottle Specifications"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-lg-6">
              <div className="spec-details p-4 border rounded shadow-sm">
                <h3 className="mb-3">Dimensions</h3>
                <ul className="list-unstyled">
                  <li>Height: 229mm - 330mm</li>
                  <li>Diameter: 60mm - 88mm</li>
                  <li>Capacity: 330ml - 750ml</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with Parallax */}
      <section
        className="py-5 text-white"
        style={{
          backgroundImage: `url(${beerHero})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mb-4">Ready to Order?</h2>
              <p className="lead mb-4">
                Contact our team to discuss your requirements and get a custom
                quote
              </p>
              <button className="btn btn-light btn-lg me-3">Get Quote</button>
              <button className="btn btn-outline-light btn-lg">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Add custom CSS for animations */}
      <style jsx>{`
        .hover-lift {
          transition: transform 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-5px);
        }
      `}</style>

      <Footer />
    </>
  );
};

export default BeerBottles;
