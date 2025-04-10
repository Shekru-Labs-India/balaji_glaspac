import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
import service1 from "../assets/img/home-one/service-shape.png";
import service2 from "../assets/img/home-one/service-shape2.png";
import lotionSerumBottle from "../assets/img/lotionBottle.jpg";
import lotionSerumBottle2 from "../assets/img/lotionBottle2.jpg";

const LotionSerumBottles = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <Header />

      {/* Hero Section with Split Design */}
      <section className="position-relative pt-5 mt-5">
        <div className="container-fluid p-0">
          <div
            className="row g-0 align-items-center"
            style={{ minHeight: "100vh" }}
          >
            <div
  className="col-lg-6 d-flex align-items-center position-relative text-white"
  style={{
    height: "85vh",
    backgroundImage: `url(${lotionSerumBottle})`, // Replace with your actual image variable or URL
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

  {/* Original Content Unchanged */}
  <div className="p-5 position-relative" style={{ zIndex: 2 }}>
    <div className="mb-4">
      <span className="badge bg-light text-primary px-3 py-2">
        Premium Packaging
      </span>
    </div>
    <h1 className="display-3 text-white fw-bold mb-4">
      Lotion & Serum Bottles
    </h1>
    <p className="lead text-white opacity-75 mb-4">
      Specialized glass bottles for cosmetic products with various
      pump and dispenser options. Designed for optimal product
      preservation and elegant presentation.
    </p>

    {/* Quick Stats */}
    <div className="row g-4 mb-4">
      {[
        { number: "50+", label: "Designs" },
        { number: "15+", label: "Pump Types" },
        { number: "100%", label: "Quality Tested" },
      ].map((stat, index) => (
        <div key={index} className="col-4">
          <div className="border-start border-light border-2 ps-3">
            <h2 className="text-white mb-0">{stat.number}</h2>
            <p className="text-white-50 mb-0">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>

    <Link
      to="/contact"
      className="btn btn-outline-primary btn-lg px-4 mt-5"
    >
      Request Samples
      <i className="fa-solid fa-arrow-right ms-2"></i>
    </Link>
  </div>
</div>

            <div className="col-lg-6" style={{ height: "85vh" }}>
              <div className="h-100">
                <Slider {...sliderSettings}>
                  <div>
                    <img
                      src={lotionSerumBottle}
                      alt="Lotion Bottle"
                      style={{
                        width: "100%",
                        height: "85vh",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div>
                    <img
                      src={lotionSerumBottle}
                      alt="Serum Bottle"
                      style={{
                        width: "100%",
                        height: "85vh",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Product Categories</h2>
            <p className="lead text-muted">
              Choose the Perfect Bottle for Your Brand
            </p>
          </div>
          <div className="row g-4">
            {[
              {
                title: "Luxury Serum Bottles",
                features: ["Dropper caps", "UV protection", "15-50ml range"],
                icon: "fa-solid fa-gem",
              },
              {
                title: "Premium Lotion Bottles",
                features: ["Pump dispensers", "Wide neck", "100-500ml range"],
                icon: "fa-solid fa-pump-soap",
              },
              {
                title: "Treatment Bottles",
                features: ["Airless pumps", "Double wall", "30-100ml range"],
                icon: "fa-solid fa-spray-can",
              },
            ].map((category, index) => (
              <div key={index} className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-5">
                    <div className="rounded-circle bg-primary bg-opacity-10 p-3 d-inline-flex mb-4">
                      <i className={`${category.icon} text-primary fs-2`}></i>
                    </div>
                    <h3 className="h4 mb-3">{category.title}</h3>
                    <ul className="list-unstyled text-start">
                      {category.features.map((feature, i) => (
                        <li key={i} className="mb-2">
                          <i className="fa-solid fa-check text-primary me-2"></i>
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

      {/* Features Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                style={{ minHeight: "400px" }}
                className="d-flex flex-column justify-content-center"
              >
                <h2 className="display-6 fw-bold mb-4">Premium Features</h2>
                <div className="vstack gap-4">
                  {[
                    {
                      title: "UV Protection",
                      desc: "Preserves sensitive formulations",
                      icon: "fa-solid fa-shield-halved",
                    },
                    {
                      title: "Airless Technology",
                      desc: "Prevents product oxidation",
                      icon: "fa-solid fa-wind",
                    },
                    {
                      title: "Precise Dispensing",
                      desc: "Controlled product delivery",
                      icon: "fa-solid fa-droplet",
                    },
                  ].map((feature, index) => (
                    <div key={index} className="d-flex gap-3">
                      <div className="flex-shrink-0">
                        <div className="rounded-circle bg-primary p-3 text-white">
                          <i className={feature.icon}></i>
                        </div>
                      </div>
                      <div>
                        <h4 className="mb-1">{feature.title}</h4>
                        <p className="mb-0 text-muted">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src={lotionSerumBottle2}
                alt="Features"
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

      {/* CTA Section */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="display-6 fw-bold mb-4">
                Ready to Elevate Your Brand?
              </h2>
              <p className="lead mb-5">
                Let's discuss your cosmetic packaging needs and find the perfect
                solution.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <Link to="/contact" className="btn btn-primary btn-lg px-4">
                  Get Started
                  <i className="fa-solid fa-arrow-right ms-2"></i>
                </Link>
                <button className="btn btn-outline-primary btn-lg px-4">
                  View Catalog
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

export default LotionSerumBottles;
