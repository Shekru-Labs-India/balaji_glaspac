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

      

       {/* Banner Section */}
<div
  className="banner-area banner-img-one py-5 overflow-hidden bg-dark text-white vh-100 d-flex align-items-center position-relative"
>
  {/* Blurred Background Image */}
  <div
    className="position-absolute top-0 start-0 w-100 h-100"
    style={{
      backgroundImage: `url(${dropperbottle2})`, // replace with actual image variable
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      filter: "blur(8px)",
      zIndex: 1,
    }}
  ></div>

  {/* Optional dark overlay for better readability */}
  <div
    className="position-absolute top-0 start-0 w-100 h-100 bg-dark"
    style={{ opacity: 0.5, zIndex: 2 }}
  ></div>

  {/* Main Content */}
  <div className="container position-relative" style={{ zIndex: 3 }}>
    <div className="row align-items-center py-4 px-3 gx-5 gy-4">
      {/* Text */}
      <div className="col-lg-6 col-md-12">
        <div className="banner-content text-white">
          <span className="d-block mb-2 text-warning fw-semibold fs-5">Precision Dispensing</span>
          <h1 className="mb-3 text-break fw-bold">Dropper Bottles</h1>
          <p className="mb-4">
            Premium glass dropper bottles for essential oils, serums, and precise liquid
            dispensing. Featuring calibrated droppers and tamper-evident closures.
          </p>

          <div className="row text-center g-2">
            {[
              { value: "15+", label: "SIZE OPTIONS" },
              { value: "99.9%", label: "ACCURACY" },
              { value: "5+", label: "DROPPER TYPES" },
            ].map((item, i) => (
              <div key={i} className="col-4">
                <div
                  className="counter-item h-100 d-flex flex-column justify-content-center py-3 rounded"
                  style={{ border: "2px solid orange" }}
                >
                  <h3 className="fw-bold text-white mb-1">{item.value}</h3>
                  <p className="mb-0 text-white-50 small">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slider */}
      <div className="col-lg-6 col-md-12 order-1 order-lg-2 mb-4 mb-lg-0">
        <Slider {...sliderSettings}>
          {[dropperbottle1, dropperbottle2].map((img, idx) => (
            <div key={idx}>
              <img
                src={img}
                alt="Dropper"
                className="img-fluid w-100 rounded"
                style={{ height: "auto", maxHeight: "500px", objectFit: "cover" }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  </div>
</div>


      {/* Applications Section */}
      <section className="service-area py-5">
        <div className="container">
          <div className="section-title text-center mb-4">
            <span className="sub-title">Applications</span>
            <h2>
              Perfect For Your <span>Products</span>
            </h2>
          </div>
          <div className="row g-4">
            {[{
              icon: "fa-solid fa-oil-can",
              title: "Essential Oils",
              description: "Perfect for aromatherapy and therapeutic oils. Features precise dispensing mechanism and UV protection."
            }, {
              icon: "fa-solid fa-eye-dropper",
              title: "Cosmetic Serums",
              description: "Ideal for skincare and beauty products. Ensures controlled application and product preservation."
            }, {
              icon: "fa-solid fa-flask-vial",
              title: "Laboratory Use",
              description: "Designed for scientific applications. Provides accurate measurements and contamination prevention."
            }].map((service, index) => (
              <div key={index} className="col-sm-6 col-md-4">
                <div className="service-item h-100 d-flex flex-column justify-content-center align-items-center text-center p-3 shadow-sm rounded">
                  <i className={`${service.icon} mb-3`} style={{ fontSize: "2rem" }} />
                  <h5>{service.title}</h5>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Features with Benefits */}
      <section className="benefit-area mt-100">
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


      {/* Call-to-Action Section */}
      <section className="partner-area py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <h2>Ready to Order Custom Dropper Bottles?</h2>
            </div>
            <div className="col-md-6 text-md-end">
              <Link className="cmn-btn btn btn-primary" to="/contact">
                Contact Us <i className="fa-solid fa-arrow-right ms-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default DropperBottles;