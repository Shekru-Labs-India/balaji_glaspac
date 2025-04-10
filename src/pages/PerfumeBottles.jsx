import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Slider from "react-slick";

// Import images
import service1 from "../assets/img/home-one/service-shape.png";
import service2 from "../assets/img/home-one/service-shape2.png";
import perfumeBottle from "../assets/img/perfumeBottle.jpg";
import perfumeBottle2 from "../assets/img/perfumeBottle2.jpg";
import perfumeBottle3 from "../assets/img/perfumeBottle3.jpg";
import perfumeBottle4 from "../assets/img/perfumeBottle4.jpg";

const PerfumeBottles = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <>
      <Header />

      {/* Elegant Hero Section */}
      <section className="position-relative bg-black text-white pt-5 mt-3 overflow-hidden">
      <div
  className="container-fluid px-lg-4 position-relative text-white"
  style={{
    backgroundImage: `url(${perfumeBottle})`, // Replace with your actual image variable or URL
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

  {/* Original content, unchanged, with zIndex to appear above the blur */}
  <div className="position-relative" style={{ zIndex: 2 }}>
    <div className="row align-items-center" style={{ minHeight: "100vh" }}>
      <div className="col-lg-5 ps-lg-5">
        <div className="p-4 p-xl-5" style={{ minHeight: "400px" }}>
          <div className="d-flex flex-column justify-content-center">
            <h1
              className="display-4 fw-bold mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Luxury Perfume Bottles
            </h1>
            <p className="lead opacity-75 mb-4">
              Exquisite glass bottles that elevate your fragrance with
              sophisticated designs and premium finishes. Each piece is a
              work of art.
            </p>
            <div className="d-flex gap-3">
              <Link
                to="/contact"
                className="btn btn-outline-light btn-lg px-4"
              >
                Request Catalog
              </Link>
              <Link
                to="#collections"
                className="btn btn-light btn-lg px-4"
              >
                View Collections
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-7">
        <div className="slider-container" style={{ height: "400px" }}>
          <Slider {...sliderSettings}>
            <div className="px-3">
              <img
                src={perfumeBottle}
                alt="Luxury Perfume Bottle"
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="px-3">
              <img
                src={perfumeBottle2}
                alt="Premium Fragrance Bottle"
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "contain",
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

      {/* Collections Grid */}
      <section id="collections" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2
              className="display-5 mb-3"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Signature Collections
            </h2>
            <div className="width-3rem height-4px bg-primary mx-auto mb-4"></div>
          </div>
          <div className="row g-4">
            {[
              {
                title: "Classic Collection",
                desc: "Timeless designs with refined elegance",
                img: perfumeBottle,
                features: [
                  "Crystal Clear Glass",
                  "Multiple Sizes",
                  "Custom Finishes",
                ],
              },
              {
                title: "Modern Collection",
                desc: "Contemporary shapes for bold statements",
                img: perfumeBottle2,
                features: [
                  "Unique Shapes",
                  "Premium Decoration",
                  "Innovative Designs",
                ],
              },
              {
                title: "Luxury Collection",
                desc: "Exceptional craftsmanship for premium brands",
                img: perfumeBottle3,
                features: [
                  "Premium Glass",
                  "Artistic Details",
                  "Bespoke Options",
                ],
              },
            ].map((collection, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div
                  className="card border-0 shadow-sm"
                  style={{
                    minHeight: "500px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ height: "250px", overflow: "hidden" }}>
                    <img
                      src={collection.img}
                      alt={collection.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderTopLeftRadius: "0.375rem",
                        borderTopRightRadius: "0.375rem",
                      }}
                    />
                  </div>
                  <div
                    className="card-body p-4"
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <h3 className="h4 mb-3">{collection.title}</h3>
                      <p className="text-muted mb-4">{collection.desc}</p>
                    </div>
                    <ul className="list-unstyled mb-0">
                      {collection.features.map((feature, idx) => (
                        <li key={idx} className="mb-2">
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

      {/* Customization Options */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                style={{ minHeight: "400px" }}
                className="d-flex flex-column justify-content-center pe-lg-4"
              >
                <h2
                  className="display-6 mb-4"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Customization Options
                </h2>
                <div className="row g-4">
                  {[
                    {
                      icon: "fa-palette",
                      title: "Custom Colors",
                      desc: "Wide range of glass colors",
                    },
                    {
                      icon: "fa-shapes",
                      title: "Unique Shapes",
                      desc: "Distinctive bottle designs",
                    },
                    {
                      icon: "fa-spray-can",
                      title: "Surface Finishes",
                      desc: "Premium decorative options",
                    },
                    {
                      icon: "fa-star",
                      title: "Special Effects",
                      desc: "Metallic and frost finishes",
                    },
                  ].map((option, index) => (
                    <div key={index} className="col-sm-6">
                      <div
                        className="d-flex gap-3 p-3 bg-white rounded-3 shadow-sm h-100"
                        style={{ minHeight: "120px" }}
                      >
                        <div className="flex-shrink-0">
                          <div className="rounded-circle bg-primary bg-opacity-10 p-3">
                            <i
                              className={`fa-solid ${option.icon} text-primary fs-3`}
                            ></i>
                          </div>
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                          <h4 className="h5 mb-2">{option.title}</h4>
                          <p className="mb-0 text-muted small">{option.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative">
                <img
                  src={perfumeBottle4}
                  alt="Customization"
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

      {/* Luxury CTA */}
      <section className="py-5 bg-black text-white">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2
                className="display-6 mb-4"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Create Your Signature Bottle
              </h2>
              <p className="lead opacity-75 mb-4">
                Let our design experts help you create a unique bottle that
                perfectly embodies your brand's essence.
              </p>
              <Link to="/contact" className="btn btn-outline-light btn-lg px-4">
                Start Your Project
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

export default PerfumeBottles;
