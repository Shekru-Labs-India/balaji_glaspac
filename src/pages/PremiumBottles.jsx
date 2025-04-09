import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Slider from "react-slick";

// Import images
import service1 from "../assets/img/home-one/service-shape.png";
import service2 from "../assets/img/home-one/service-shape2.png";
import premiumBottle from "../assets/img/premiumBottle.jpg";
import premiumBottle2 from "../assets/img/premiumBottle2.jpg";
import premiumBottle3 from "../assets/img/premiumBottle3.jpg";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const PremiumBottles = () => {
  return (
    <>
      <Header />

      {/* Luxury Hero Section */}
      <section
  className="bg-black text-white position-relative pt-5 mt-3"
  style={{
    backgroundImage: `url(${premiumBottle2})`, // Replace with your image import or URL
    backgroundSize: "cover",
    backgroundPosition: "center",
    
  }}
>
  {/* Blur Overlay */}
  <div
    className="position-absolute top-0 start-0 w-100 h-100"
    style={{
      backdropFilter: "blur(6px)",
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      zIndex: 1,
    }}
  ></div>

  {/* Content on top of blur */}
  <div className="position-relative" style={{ zIndex: 2 }}>
    <div className="container">
      <div className="row align-items-center" style={{ minHeight: "85vh" }}>
        <div className="col-lg-6">
          <div
            style={{ minHeight: "400px" }}
            className="d-flex flex-column justify-content-center"
          >
            <span className="premium-text-gold text-uppercase premium-letter-spacing mb-3 d-block">
              Luxury Glass Collection
            </span>
            <h1
              className="display-2 fw-bold mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Premium Glass
              <span className="premium-text-gold d-block">Excellence</span>
            </h1>
            <p className="lead opacity-75 mb-4">
              Exquisite glass bottles crafted with precision for luxury
              brands that demand perfection.
            </p>
            <div className="d-flex gap-4">
              <Link
                to="/contact"
                className="btn premium-btn-gold btn-lg px-4"
              >
                Request Collection
              </Link>
              <button className="btn btn-outline-light btn-lg px-4">
                View Catalog
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="slider-container" style={{ height: "400px" }}>
            <Slider {...sliderSettings}>
              <div className="px-3">
                <img
                  src={premiumBottle}
                  alt="Premium Bottle"
                  style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "contain",
                    filter: "brightness(0.9)",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                />
              </div>
              <div className="px-3">
                <img
                  src={premiumBottle2}
                  alt="Luxury Glass"
                  style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "contain",
                    filter: "brightness(0.9)",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Premium Features */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2
              className="display-5 fw-bold"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Signature Features
            </h2>
            <div className="width-3rem height-4px premium-bg-gold mx-auto"></div>
          </div>
          <div className="row g-4">
            {[
              {
                icon: "fa-gem",
                title: "Superior Quality",
                desc: "Ultra-clear glass with exceptional transparency",
              },
              {
                icon: "fa-crown",
                title: "Luxury Finishes",
                desc: "Premium metallic and special effect coatings",
              },
              {
                icon: "fa-wand-magic-sparkles",
                title: "Bespoke Designs",
                desc: "Custom shapes and unique artistic elements",
              },
              {
                icon: "fa-star",
                title: "Elite Standards",
                desc: "Rigorous quality control and perfect execution",
              },
            ].map((feature, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm premium-hover-lift">
                  <div className="card-body text-center p-4">
                    <i
                      className={`fa-solid ${feature.icon} premium-text-gold fs-1 mb-3`}
                    ></i>
                    <h3 className="h4 mb-2">{feature.title}</h3>
                    <p className="text-muted mb-0">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections Showcase */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div
                style={{ minHeight: "400px" }}
                className="d-flex flex-column justify-content-center pe-lg-4"
              >
                <h2
                  className="display-6 fw-bold mb-4"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Premium Collections
                </h2>
                <div className="vstack gap-4">
                  {[
                    {
                      title: "Royal Collection",
                      desc: "Majestic designs with gold accents",
                    },
                    {
                      title: "Diamond Series",
                      desc: "Faceted glass with crystal-like brilliance",
                    },
                    {
                      title: "Platinum Edition",
                      desc: "Contemporary luxury with metallic finishes",
                    },
                    {
                      title: "Heritage Line",
                      desc: "Timeless elegance with modern sophistication",
                    },
                  ].map((collection, index) => (
                    <div
                      key={index}
                      className="d-flex gap-3 p-3 bg-white rounded shadow-sm"
                      style={{ minHeight: "80px" }}
                    >
                      <div className="flex-shrink-0">
                        <div className="rounded-circle bg-black bg-opacity-10 p-3">
                          <i className="fa-solid fa-crown premium-text-gold fs-3"></i>
                        </div>
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <h4 className="h5 mb-1">{collection.title}</h4>
                        <p className="mb-0 text-muted">{collection.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <div
                className="position-relative bg-white rounded-4 shadow-lg p-4"
                style={{
                  height: "450px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={premiumBottle3}
                  alt="Premium Collection"
                  style={{
                    width: "90%",
                    height: "400px",
                    objectFit: "contain",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
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
                      "radial-gradient(circle, rgba(255,215,0,0.1) 0%, rgba(255,215,0,0) 70%)",
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

      {/* Luxury CTA */}
      <section className="py-5 bg-black text-white">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2
                className="display-6 mb-4"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Elevate Your Brand
              </h2>
              <p className="lead opacity-75 mb-4">
                Let us help you create a distinctive premium glass packaging
                that reflects your brand's excellence.
              </p>
              <Link to="/contact" className="btn premium-btn-gold btn-lg px-5">
                Begin Your Journey
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

export default PremiumBottles;
