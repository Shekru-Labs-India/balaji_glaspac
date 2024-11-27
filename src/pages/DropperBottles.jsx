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
import dropperbottle1 from "../assets/img/dropperBottle1.jpg";
import dropperbottle2 from "../assets/img/dropperBottle2.jpg";

const DropperBottles = () => {
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

      {/* Banner with Counter Stats */}
      <div className="banner-area banner-img-one">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="banner-content">
                    <span className="sub-title fs-5 fw-bold">
                      Precision Dispensing
                    </span>
                    <h1>Dropper Bottles</h1>
                    <p>
                      Premium glass dropper bottles for essential oils, serums,
                      and precise liquid dispensing. Featuring calibrated
                      droppers and tamper-evident closures.
                    </p>
                  </div>

                  {/* Counter Stats */}
                  <div className="row mt-5">
                    <div className="col-sm-4">
                      <div className="counter-item">
                        <h3>
                          <span className="odometer">15+</span>
                        </h3>
                        <p>SIZE OPTIONS</p>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="counter-item">
                        <h3>
                          <span className="odometer">99.9%</span>
                        </h3>
                        <p>ACCURACY</p>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="counter-item">
                        <h3>
                          <span className="odometer">5+</span>
                        </h3>
                        <p>DROPPER TYPES</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about-img">
                    <Slider {...sliderSettings}>
                      <div>
                        <img
                          src={dropperbottle1}
                          alt="Dropper"
                          style={{
                            width: "100%",
                            height: "500px",
                            objectFit: "cover",
                            borderRadius: "8px",
                          }}
                        />
                      </div>
                      <div>
                        <img
                          src={dropperbottle2}
                          alt="Dropper"
                          style={{
                            width: "100%",
                            height: "500px",
                            objectFit: "cover",
                            borderRadius: "8px",
                          }}
                        />
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Applications Section */}
      <section className="service-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Applications</span>
            <h2>
              Perfect For Your <span>Products</span>
            </h2>
          </div>
          <div className="row">
            {[
              {
                icon: "fa-solid fa-oil-can",
                title: "Essential Oils",
                description:
                  "Perfect for aromatherapy and therapeutic oils. Features precise dispensing mechanism and UV protection.",
              },
              {
                icon: "fa-solid fa-eye-dropper",
                title: "Cosmetic Serums",
                description:
                  "Ideal for skincare and beauty products. Ensures controlled application and product preservation.",
              },
              {
                icon: "fa-solid fa-flask-vial",
                title: "Laboratory Use",
                description:
                  "Designed for scientific applications. Provides accurate measurements and contamination prevention.",
              },
            ].map((service, index) => (
              <div key={index} className="col-sm-6 col-lg-4">
                <div
                  className="service-item px-0"
                  style={{
                    minHeight: "300px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "2rem",
                    textAlign: "center",
                  }}
                >
                  <img src={service1} alt="Service" />
                  <img src={service2} alt="Service" />
                  <i
                    className={service.icon}
                    style={{
                      fontSize: "2.5rem",
                      marginBottom: "1rem",
                      display: "block",
                    }}
                  />
                  <h3 style={{ marginBottom: "1rem" }}>{service.title}</h3>
                  <p style={{ marginBottom: 0 }}>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features with Benefits */}
      <section className="benefit-area mt-5">
        <div className="container">
          <div className="benefit-content pe-3">
            <div className="section-title text-center">
              <h2>Key Features & Benefits</h2>
            </div>
            <div className="row ">
              {[
                {
                  icon: "fa-solid fa-droplet",
                  title: "Precise Dispensing",
                },
                {
                  icon: "fa-solid fa-shield",
                  title: "UV Protection",
                },
                {
                  icon: "fa-solid fa-check-double",
                  title: "Quality Tested",
                },
                {
                  icon: "fa-solid fa-recycle",
                  title: "Eco-Friendly",
                },
              ].map((benefit, index) => (
                <div key={index} className="col-sm-6 col-lg-6">
                  <div className="benefit-inner mt-3">
                    <i className={benefit.icon} />
                    <h4>{benefit.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="partner-area pb-100">
        <div className="container">
          <div className="partner-wrap">
            <div className="partner-shape">
              <img src={service2} alt="Partner" />
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="partner-content">
                  <div className="section-title">
                    <h2>Ready to Order Custom Dropper Bottles?</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="partner-btn">
                  <Link className="cmn-btn" to="/contact">
                    Contact Us
                    <i className="fa-solid fa-arrow-right ms-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default DropperBottles;
