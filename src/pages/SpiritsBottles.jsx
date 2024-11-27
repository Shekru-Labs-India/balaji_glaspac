import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import spiritsHero from "../assets/img/spiritBottle.jpg";

const SpiritsBottles = () => {
  const [activeTab, setActiveTab] = useState("premium");

  return (
    <>
      <Header />

      {/* Hero Section with Diagonal Design */}
      <div className="position-relative overflow-hidden">
        <div
          className="hero-diagonal bg-dark text-white py-6"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
            minHeight: "80vh",
          }}
        >
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-lg-6">
                <h1 className="display-3 fw-bold mb-4">
                  Premium Spirit Bottles
                </h1>
                <p className="lead mb-4">
                  Elevate your brand with our exquisite collection of glass
                  bottles designed specifically for premium spirits and liquors.
                </p>
                <div className="d-flex gap-3">
                  <button className="btn btn-primary btn-lg">
                    Explore Collection
                  </button>
                  <button className="btn btn-outline-light btn-lg">
                    Download Catalog
                  </button>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="position-relative">
                  <img
                    src={spiritsHero}
                    alt="Premium Spirit Bottle"
                    className="img-fluid floating-animation"
                  />
                  <div className="position-absolute top-50 start-50 translate-middle z-n1">
                    <div className="hero-circle"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories with Interactive Tabs */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Our Spirit Bottle Collection</h2>
            <p className="lead text-muted">
              Choose from our extensive range of premium bottles
            </p>
          </div>

          <div className="category-tabs mb-4">
            <ul className="nav nav-pills justify-content-center gap-3">
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    activeTab === "premium" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("premium")}
                >
                  Premium Spirits
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    activeTab === "vodka" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("vodka")}
                >
                  Vodka Bottles
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    activeTab === "whiskey" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("whiskey")}
                >
                  Whiskey Bottles
                </button>
              </li>
            </ul>
          </div>

          <div className="tab-content">
            <div
              className={`tab-pane fade ${
                activeTab === "premium" ? "show active" : ""
              }`}
            >
              <div className="row g-4">
                {/* Premium Spirit Bottles */}
                <div className="col-md-6 col-lg-4">
                  <div className="product-card">
                    <div className="product-image">
                      <img
                        src={spiritsHero}
                        alt="Premium Bottle"
                        className="img-fluid"
                      />
                      <div className="product-overlay">
                        <button className="btn btn-light">Quick View</button>
                      </div>
                    </div>
                    <div className="product-details p-3">
                      <h4>Crystal Clear Premium</h4>
                      <p>750ml | Custom Engravings Available</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="badge bg-primary">Best Seller</span>
                        <button className="btn btn-outline-primary btn-sm">
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Add more premium bottles */}

                <div className="col-md-6 col-lg-4">
                  <div className="product-card">
                    <div className="product-image">
                      <img
                        src={spiritsHero}
                        alt="Premium Bottle"
                        className="img-fluid"
                      />
                      <div className="product-overlay">
                        <button className="btn btn-light">Quick View</button>
                      </div>
                    </div>
                    <div className="product-details p-3">
                      <h4>Crystal Clear Premium</h4>
                      <p>750ml | Custom Engravings Available</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="badge bg-primary">Best Seller</span>
                        <button className="btn btn-outline-primary btn-sm">
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4">
                  <div className="product-card">
                    <div className="product-image">
                      <img
                        src={spiritsHero}
                        alt="Premium Bottle"
                        className="img-fluid"
                      />
                      <div className="product-overlay">
                        <button className="btn btn-light">Quick View</button>
                      </div>
                    </div>
                    <div className="product-details p-3">
                      <h4>Crystal Clear Premium</h4>
                      <p>750ml | Custom Engravings Available</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="badge bg-primary">Best Seller</span>
                        <button className="btn btn-outline-primary btn-sm">
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Add content for other tabs */}
          </div>
        </div>
      </section>

      {/* Features with Animated Icons */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-3">
              <div className="feature-card text-center p-4">
                <div className="feature-icon mb-3">
                  <i className="fas fa-medal fa-3x text-primary"></i>
                </div>
                <h4>Premium Quality</h4>
                <p>Superior glass quality for premium spirits</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature-card text-center p-4">
                <div className="feature-icon mb-3">
                  <i className="fas fa-medal fa-3x text-primary"></i>
                </div>
                <h4>Premium Quality</h4>
                <p>Superior glass quality for premium spirits</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature-card text-center p-4">
                <div className="feature-icon mb-3">
                  <i className="fas fa-medal fa-3x text-primary"></i>
                </div>
                <h4>Premium Quality</h4>
                <p>Superior glass quality for premium spirits</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="feature-card text-center p-4">
                <div className="feature-icon mb-3">
                  <i className="fas fa-medal fa-3x text-primary"></i>
                </div>
                <h4>Premium Quality</h4>
                <p>Superior glass quality for premium spirits</p>
              </div>
            </div>

            {/* Add more feature cards */}
          </div>
        </div>
      </section>

      {/* Manufacturing Process Timeline */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Our Manufacturing Excellence</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h4>Raw Material Selection</h4>
                <p>Premium quality silica and materials</p>
              </div>
            </div>
            {/* Add more timeline items */}
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-5 bg-dark text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="mb-4">Custom Design Options</h2>
              <div className="custom-options">
                <div className="custom-option d-flex align-items-center mb-3">
                  <div className="custom-option-icon me-3">
                    <i className="fas fa-palette fa-2x"></i>
                  </div>
                  <div>
                    <h5 className="mb-1">Color Options</h5>
                    <p className="mb-0">Choose from various glass colors</p>
                  </div>
                </div>
                {/* Add more custom options */}
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src={spiritsHero}
                alt="Customization"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mb-4">Ready to Order?</h2>
              <p className="lead mb-4">
                Contact our team to discuss your requirements and get a custom
                quote
              </p>
              <form className="contact-form">
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS */}

      <Footer />
    </>
  );
};

export default SpiritsBottles;
