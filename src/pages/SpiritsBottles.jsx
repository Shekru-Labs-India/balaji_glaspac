import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import spiritsHero from "../assets/img/spiritBottle.jpg";
import spiritsHero2 from "../assets/img/spiritBottle2.jpg";
import spiritsHero3 from "../assets/img/spiritBottle3.jpg";
import spiritsHero4 from "../assets/img/spiritBottle4.jpg";
import vodka from "../assets/img/vodka.jpg";
import vodka2 from "../assets/img/vodka2.jpg";
import vodka3 from "../assets/img/vodka3.jpg";
import whiskey from "../assets/img/whiskey.jpg";
import whiskey2 from "../assets/img/whiskey2.jpg";
import whiskey3 from "../assets/img/whiskey3.jpg";

const styles = {
  heroSection: {
    clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
    minHeight: "70vh",
  },
  sectionSpacing: {
    padding: "80px 0",
  },
  featureCard: {
    padding: "30px 20px",
    height: "100%",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 15px rgba(0,0,0,0.05)",
  },
  productCard: {
    height: "100%",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 15px rgba(0,0,0,0.05)",
  },
};

const SpiritsBottles = () => {
  const [activeTab, setActiveTab] = useState("premium");

  return (
    <>
      <Header />

      {/* Hero Section - Adjusted spacing */}
      <div className="position-relative overflow-hidden pt-5">
        <div
          className="hero-diagonal bg-dark text-white py-6"
          style={styles.heroSection}
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

      {/* Categories Section - Added consistent spacing */}
      <section style={styles.sectionSpacing}>
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
                      <img src={spiritsHero2} alt="Premium Bottle" />
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
                        src={spiritsHero3}
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
                        src={spiritsHero4}
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

            {/* Vodka Bottles Tab */}
            <div
              className={`tab-pane fade ${
                activeTab === "vodka" ? "show active" : ""
              }`}
            >
              <div className="row g-4">
                <div className="col-md-6 col-lg-4">
                  <div className="product-card">
                    <div className="product-image">
                      <img src={vodka} alt="Vodka Bottle" />
                      <div className="product-overlay">
                        <button className="btn btn-light">Quick View</button>
                      </div>
                    </div>
                    <div className="product-details p-3">
                      <h4>Premium Vodka Bottle</h4>
                      <p>700ml | Frosted Glass Available</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="badge bg-primary">New Arrival</span>
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
                      <img src={vodka2} alt="Vodka Bottle" />
                      <div className="product-overlay">
                        <button className="btn btn-light">Quick View</button>
                      </div>
                    </div>
                    <div className="product-details p-3">
                      <h4>Elite Vodka Collection</h4>
                      <p>1000ml | Premium Finish</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="badge bg-primary">Popular</span>
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
                      <img src={vodka3} alt="Vodka Bottle" />
                      <div className="product-overlay">
                        <button className="btn btn-light">Quick View</button>
                      </div>
                    </div>
                    <div className="product-details p-3">
                      <h4>Designer Vodka Bottle</h4>
                      <p>500ml | Luxury Edition</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="badge bg-primary">
                          Limited Edition
                        </span>
                        <button className="btn btn-outline-primary btn-sm">
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Whiskey Bottles Tab */}
            <div
              className={`tab-pane fade ${
                activeTab === "whiskey" ? "show active" : ""
              }`}
            >
              <div className="row g-4">
                <div className="col-md-6 col-lg-4">
                  <div className="product-card">
                    <div className="product-image">
                      <img src={whiskey} alt="Whiskey Bottle" />
                      <div className="product-overlay">
                        <button className="btn btn-light">Quick View</button>
                      </div>
                    </div>
                    <div className="product-details p-3">
                      <h4>Classic Whiskey Decanter</h4>
                      <p>750ml | Premium Crystal</p>
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
                      <img src={whiskey2} alt="Whiskey Bottle" />
                      <div className="product-overlay">
                        <button className="btn btn-light">Quick View</button>
                      </div>
                    </div>
                    <div className="product-details p-3">
                      <h4>Vintage Whiskey Bottle</h4>
                      <p>700ml | Antique Finish</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="badge bg-primary">Exclusive</span>
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
                      <img src={whiskey3} alt="Whiskey Bottle" />
                      <div className="product-overlay">
                        <button className="btn btn-light">Quick View</button>
                      </div>
                    </div>
                    <div className="product-details p-3">
                      <h4>Square Whiskey Bottle</h4>
                      <p>1000ml | Heavy Base</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="badge bg-primary">Premium</span>
                        <button className="btn btn-outline-primary btn-sm">
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Added consistent spacing and card styling */}
      <section className="bg-light" style={styles.sectionSpacing}>
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="fw-bold">Why Choose Our Bottles</h2>
            <p className="lead text-muted">
              Discover the features that set our spirit bottles apart
            </p>
          </div>
          <div className="row g-4">
            <div className="col-md-3">
              <div
                className="feature-card text-center"
                style={styles.featureCard}
              >
                <div className="feature-icon mb-3">
                  <i className="fas fa-award fa-3x text-primary"></i>
                </div>
                <h4>Premium Quality</h4>
                <p>
                  Extra flint glass composition for crystal-clear clarity and
                  premium feel
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="feature-card text-center"
                style={styles.featureCard}
              >
                <div className="feature-icon mb-3">
                  <i className="fas fa-palette fa-3x text-primary"></i>
                </div>
                <h4>Customization</h4>
                <p>
                  Extensive options for embossing, frosting, and custom designs
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="feature-card text-center"
                style={styles.featureCard}
              >
                <div className="feature-icon mb-3">
                  <i className="fas fa-recycle fa-3x text-primary"></i>
                </div>
                <h4>Eco-Friendly</h4>
                <p>
                  Sustainable production with recycled glass options available
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="feature-card text-center"
                style={styles.featureCard}
              >
                <div className="feature-icon mb-3">
                  <i className="fas fa-shield-alt fa-3x text-primary"></i>
                </div>
                <h4>Quality Assured</h4>
                <p>Rigorous testing for durability and leak-proof guarantee</p>
              </div>
            </div>
          </div>
          <div className="row g-4 mt-2">
            <div className="col-md-3">
              <div
                className="feature-card text-center"
                style={styles.featureCard}
              >
                <div className="feature-icon mb-3">
                  <i className="fas fa-box fa-3x text-primary"></i>
                </div>
                <h4>Bulk Orders</h4>
                <p>Flexible quantities with competitive wholesale pricing</p>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="feature-card text-center"
                style={styles.featureCard}
              >
                <div className="feature-icon mb-3">
                  <i className="fas fa-truck fa-3x text-primary"></i>
                </div>
                <h4>Global Shipping</h4>
                <p>Secure packaging and worldwide delivery options</p>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="feature-card text-center"
                style={styles.featureCard}
              >
                <div className="feature-icon mb-3">
                  <i className="fas fa-tools fa-3x text-primary"></i>
                </div>
                <h4>Technical Support</h4>
                <p>Expert guidance on bottle specifications and requirements</p>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="feature-card text-center"
                style={styles.featureCard}
              >
                <div className="feature-icon mb-3">
                  <i className="fas fa-clock fa-3x text-primary"></i>
                </div>
                <h4>Quick Turnaround</h4>
                <p>Fast production and timely delivery commitments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process - Added consistent spacing */}
      <section style={styles.sectionSpacing}>
        <div className="container">
          <h2 className="text-center fw-bold mb-5">
            Our Manufacturing Excellence
          </h2>
          <div className="row g-4">
            {/* Step 1 */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="rounded-circle bg-primary bg-opacity-10 p-3 d-inline-block mb-3">
                    <i className="fas fa-flask fa-2x text-primary"></i>
                  </div>
                  <h4 className="card-title h5 mb-3">Raw Material Selection</h4>
                  <p className="card-text text-muted">
                    Premium quality silica sand and raw materials sourced from
                    trusted suppliers for exceptional clarity.
                  </p>
                  <div className="badge bg-primary">Step 1</div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="rounded-circle bg-primary bg-opacity-10 p-3 d-inline-block mb-3">
                    <i className="fas fa-temperature-high fa-2x text-primary"></i>
                  </div>
                  <h4 className="card-title h5 mb-3">Melting & Refining</h4>
                  <p className="card-text text-muted">
                    Advanced furnace technology ensures perfect melting and
                    removal of impurities.
                  </p>
                  <div className="badge bg-primary">Step 2</div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="rounded-circle bg-primary bg-opacity-10 p-3 d-inline-block mb-3">
                    <i className="fas fa-fill-drip fa-2x text-primary"></i>
                  </div>
                  <h4 className="card-title h5 mb-3">Molding Process</h4>
                  <p className="card-text text-muted">
                    Precision molds and cutting-edge IS machines create
                    perfectly shaped bottles.
                  </p>
                  <div className="badge bg-primary">Step 3</div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="rounded-circle bg-primary bg-opacity-10 p-3 d-inline-block mb-3">
                    <i className="fas fa-temperature-low fa-2x text-primary"></i>
                  </div>
                  <h4 className="card-title h5 mb-3">Annealing</h4>
                  <p className="card-text text-muted">
                    Controlled cooling process ensures optimal strength and
                    durability.
                  </p>
                  <div className="badge bg-primary">Step 4</div>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="rounded-circle bg-primary bg-opacity-10 p-3 d-inline-block mb-3">
                    <i className="fas fa-microscope fa-2x text-primary"></i>
                  </div>
                  <h4 className="card-title h5 mb-3">Quality Inspection</h4>
                  <p className="card-text text-muted">
                    Rigorous testing for defects and compliance with industry
                    standards.
                  </p>
                  <div className="badge bg-primary">Step 5</div>
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="rounded-circle bg-primary bg-opacity-10 p-3 d-inline-block mb-3">
                    <i className="fas fa-paint-brush fa-2x text-primary"></i>
                  </div>
                  <h4 className="card-title h5 mb-3">Surface Treatment</h4>
                  <p className="card-text text-muted">
                    Optional decorating, coating, and finishing for enhanced
                    aesthetics.
                  </p>
                  <div className="badge bg-primary">Step 6</div>
                </div>
              </div>
            </div>

            {/* Step 7 */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="rounded-circle bg-primary bg-opacity-10 p-3 d-inline-block mb-3">
                    <i className="fas fa-box-open fa-2x text-primary"></i>
                  </div>
                  <h4 className="card-title h5 mb-3">Packaging</h4>
                  <p className="card-text text-muted">
                    Secure packaging solutions to ensure safe transportation
                    worldwide.
                  </p>
                  <div className="badge bg-primary">Step 7</div>
                </div>
              </div>
            </div>

            {/* Step 8 */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="rounded-circle bg-primary bg-opacity-10 p-3 d-inline-block mb-3">
                    <i className="fas fa-truck fa-2x text-primary"></i>
                  </div>
                  <h4 className="card-title h5 mb-3">Delivery</h4>
                  <p className="card-text text-muted">
                    Timely shipping and delivery to meet your production
                    schedules.
                  </p>
                  <div className="badge bg-primary">Step 8</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customization Section - Added consistent spacing */}
      <section className="bg-dark text-white" style={styles.sectionSpacing}>
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

      {/* Custom CSS */}

      <Footer />
    </>
  );
};

export default SpiritsBottles;
