import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import service1 from "../assets/img/home-one/service-shape.png";
import service2 from "../assets/img/home-one/service-shape2.png";
import benefit from "../assets/img/home-one/benefit-shape.png";
import partner from "../assets/img/home-one/partner-shape.png";
import video1 from "../assets/img/manufacturing.mp4";
import { Link } from "react-router-dom";
import wineBottle from "../assets/img/wine.jpg";
import spiritBottle from "../assets/img/spiritBottle.jpg";
import beerBottle from "../assets/img/BeerBottle.jpg";
import waterBottle from "../assets/img/waterBottle.jpg";
import juiceBottle from "../assets/img/juiceSodaBottle.jpg";
import foodJar from "../assets/img/foodJars.jpg";
import client1 from "../assets/img/client1.png";
import client2 from "../assets/img/client2.png";
import client3 from "../assets/img/client3.png";
import client4 from "../assets/img/client4.png";
import client5 from "../assets/img/client5.png";
import client6 from "../assets/img/client6.png";
import client7 from "../assets/img/client7.png";
import client8 from "../assets/img/client8.png";
import client9 from "../assets/img/client9.png";
import client10 from "../assets/img/client10.png";
import client11 from "../assets/img/client11.png";
import client12 from "../assets/img/client12.png";
import client13 from "../assets/img/client13.png";
import client14 from "../assets/img/client14.png";
import client15 from "../assets/img/client15.png";
import client16 from "../assets/img/client16.png";
import client17 from "../assets/img/client17.png";
import client18 from "../assets/img/client18.png";
import client19 from "../assets/img/client19.png";
import client20 from "../assets/img/client20.png";
import client21 from "../assets/img/client21.png";

// Create products array
const products = [
  {
    id: 1,
    name: "Pharmaceutical Bottles",
    image: wineBottle,
    path: "/PharmaceuticalBottles",
    description: "Premium Glass Wine Bottles",
  },
  {
    id: 2,
    name: "Spirit Bottles",
    image: spiritBottle,
    path: "/spirits-bottles",
    description: "Luxury Spirit Containers",
  },
  {
    id: 3,
    name: "Beer Bottles",
    image: beerBottle,
    path: "/beer-bottles",
    description: "Quality Beer Packaging",
  },
  {
    id: 4,
    name: "Water Bottles",
    image: waterBottle,
    path: "/water-bottles",
    description: "Crystal Clear Water Bottles",
  },
  {
    id: 5,
    name: "Juice Bottles",
    image: juiceBottle,
    path: "/juice-soda-bottles",
    description: "Beverage Containers",
  },
  {
    id: 6,
    name: "Food Jars",
    image: foodJar,
    path: "/food-jars",
    description: "Food Storage Solutions",
  },
];

// Add this array near your other data/imports
const clients = [
  { id: 1, name: "NESTLÉ", logo: client1 },
  { id: 2, name: "RADICO KHAITAN", logo: client2 },
  { id: 3, name: "DR. REDDY'S LABORATORIES", logo: client3 },
  { id: 4, name: "SULA VINEYARDS", logo: client4 },
  { id: 5, name: "GLAXOSMITHKLINE (GSK)", logo: client5 },
  { id: 6, name: "LAZARO", logo: client6 },
  { id: 7, name: "UNILEVER", logo: client7 },
  { id: 8, name: "REVLON", logo: client8 },
  { id: 9, name: "HALDIRAM'S", logo: client9 },
  { id: 10, name: "MERCK", logo: client10 },
  { id: 11, name: "DABUR", logo: client11 },
  { id: 12, name: "CARLSBERG", logo: client12 },
  { id: 13, name: "BACARDI", logo: client13 },
  { id: 14, name: "CHANEL", logo: client14 },
  { id: 15, name: "COCA-COLA", logo: client15 },
  { id: 16, name: "JTC GROUP", logo: client16 },
  { id: 17, name: "UNITED SPIRITS", logo: client17 },
  { id: 18, name: "AMUL", logo: client18 },
  { id: 19, name: "DIAGEO", logo: client19 },
  { id: 20, name: "SAB MILLER", logo: client20 },
  { id: 21, name: "L'ORÉAL", logo: client21 },
];
// Add this array after your other data/constants
const clientLogos = [
  { id: 1, name: "SULA VINEYARDS", logo: client1 },
  { id: 2, name: "RADICO KHAITAN", logo: client2 },
  { id: 3, name: "DR. REDDY'S LABORATORIES", logo: client3 },
  { id: 4, name: "NESTLÉ", logo: client4 },
  { id: 5, name: "GLAXOSMITHKLINE", logo: client5 },
  { id: 6, name: "LAZARO", logo: client6 },
  { id: 7, name: "UNILEVER", logo: client7 },
  { id: 8, name: "REVLON", logo: client8 },
  { id: 9, name: "HALDIRAM'S", logo: client9 },
  { id: 10, name: "MERCK", logo: client10 },
  { id: 11, name: "DABUR", logo: client11 },
  { id: 12, name: "CARLSBERG", logo: client12 },
  { id: 13, name: "Client 13", logo: client13 },
  { id: 14, name: "Client 14", logo: client14 },
  { id: 15, name: "Client 15", logo: client15 },
  { id: 16, name: "Client 16", logo: client16 },
  { id: 17, name: "Client 17", logo: client17 },
  { id: 18, name: "Client 18", logo: client18 },
  { id: 19, name: "Client 19", logo: client19 },
  { id: 20, name: "Client 20", logo: client20 },
  { id: 21, name: "Client 21", logo: client21 },
];

// In your component's CSS
const carouselStyles = {
  foreign: {
    backgroundColor: "#f8f9fa",
    padding:20
    
  },
  item: {
    margin: "0 15px",
    transition: "transform 0.3s ease",
    cursor: "pointer",
    maxWidth: "250px",
    margin: "0 auto",
  },
  imageContainer: {
    overflow: "hidden",
    borderRadius: "8px",
    height: "200px",
    width: "200px",
    marginBottom: "15px",
    margin: "0 auto",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease",
  },
  title: {
    fontSize: "1.1rem",
    color: "#333",
    marginBottom: "5px",
    fontWeight: "600",
  },
};

const Home = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const $ = window.jQuery;
      // About slider initialization
      $(".about-img-slider").owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 3000,
        navText: [
          "<i class='fa-solid fa-chevron-left'></i>",
          "<i class='fa-solid fa-chevron-right'></i>",
        ],
      });

      // Foreign slider initialization with updated settings
      $(".foreign-slider").owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 3000,
        navText: [
          "<i class='fa-solid fa-chevron-left'></i>",
          "<i class='fa-solid fa-chevron-right'></i>",
        ],
        responsive: {
          0: { items: 1 },
          576: { items: 2 },
          768: { items: 3 },
          992: { items: 4 },
          1200: { items: 5 },
        },
        onInitialized: function () {
          // Remove left margin from nav buttons
          $(".owl-nav").css({
            margin: "0",
            position: "absolute",
            top: "50%",
            width: "100%",
            transform: "translateY(-50%)",
          });
          $(".owl-prev").css({
            left: "0",
            position: "absolute",
          });
          $(".owl-next").css({
            right: "0",
            position: "absolute",
          });
        },
      });
    }
  }, []);

  return (
    <>
      <Header style={{ position: "fixed", width: "100%", zIndex: 1 }} />
      {/* Banner */}
      <div className="position-relative w-100 min-vh-100 overflow-hidden">
        {/* Video */}
        <video
          loop
          muted
          autoPlay
          playsInline
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ objectFit: "cover", zIndex: -1 }}
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <div className="position-absolute top-50 start-50 translate-middle text-center" style={{ 
            backgroundColor: 'rgba(33, 37, 41, 0.3)', // bg-dark with 0.5 opacity
            padding: '2rem',
            width: '80%',
            maxWidth: '1200px'
          }}>
          <h1 className="fw-bold text-white" style={{ opacity: 1 }}>
            Our Products To Help Customers Work Faster, Smarter & Efficiently
          </h1>
          <p className="text-white fw-bold" style={{ opacity: 1 }}> 
            At Balaji Glaspac, we combine traditional glass-making expertise with
            modern manufacturing technologies. Our state-of-the-art facilities
            and skilled workforce ensure the highest quality standards while
            maintaining efficient production processes and environmental
            responsibility.
          </p>
        </div>
      </div>

      {/* End Banner */}
      {/* About */}
      <section className="about-area pb-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section-title">
                <span className="sub-title">About Us</span>
                <h2>Leading Glass Manufacturing Excellence Since 2007</h2>
              </div>
              <div className="about-content">
                <p>
                  At Balaji Glaspac, we are committed to delivering premium
                  glass packaging solutions that combine innovation with
                  sustainability. Our state-of-the-art manufacturing facilities
                  and dedicated team ensure we meet the highest standards of
                  quality while maintaining cost-effectiveness for our clients.
                </p>
                <h3 className="mb-3">Our Vision</h3>
                <p>
                "To be a globally recognised leader in sourcing and distribution, 
                delivering unparalleled value and fostering sustainable partnerships that drive innovation, 
                efficiency, and growth across industries."
                </p>
                <p>
                This emphasises ambition, sustainability, and value creation, 
                which are appropriate for a company specialising in sourcing or distribution.
                </p>
                <ul>
                  <li>
                    <i className="fa-solid fa-check" />
                    To ensure excellent product design that fully meets customer
                    requirements
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    To supply quality products, at cost-effective prices
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    To ensure timely delivery
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    To be cost effective and a profitable organisation
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    To upgrade technology with a system of continuous
                    improvement
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    To train and upgrade the skills of the employees on an
                    ongoing basis
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-stretch">
              <div className="about-img-wrap w-100">
                <div
                  className="about-img-slider owl-theme owl-carousel"
                  style={{ height: "450px" }}
                >
                  <div className="about-img-item h-100">
                    <img
                      src={img1}
                      alt="About"
                      className=" "
                      style={{
                        height: "450px",
                        width: "595px",
                        borderRadius: "8px",
                      }}
                    />
                  </div>
                  <div className="about-img-item h-100">
                    <img
                      src={img2}
                      alt="About"
                      className=""
                      style={{
                        height: "450px",
                        borderRadius: "8px",
                        width: "595px",
                      }}
                    />
                  </div>
                  <div className="about-img-item h-100">
                    <img
                      src={img3}
                      alt="About"
                      className=""
                      style={{
                        height: "450px",
                        borderRadius: "8px",
                        width: "595px",
                      }}
                    />
                  </div>
                  <div className="about-img-item h-100">
                    <img
                      src={img4}
                      alt="About"
                      className=""
                      style={{
                        height: "450px",
                        borderRadius: "8px",
                        width: "595px",
                      }}
                    />
                  </div>
                </div>
                <div
                  className="about-year"
                  style={{
                    position: "absolute",
                    bottom: "0px",
                    right: "20px",
                    zIndex: "1",
                  }}
                >
                  <h2>
                    18 <span>Years</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About */}
      {/* Service */}
      <section className="service-area py-4">
        <style>
          {`
            .service-item {
              height: 100%;
              background: #fff;
              border-radius: 5px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              transition: all 0.3s ease;
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
            }
            
            .service-item img {
              max-height: 20px;
              width: auto;
            }

            .service-item i {
              color: #fa5f0b;
            }

            .service-item h3 {
              font-weight: 600;
            }

            .service-item h3 a {
              color: #333;
              text-decoration: none;
            }
            
            .service-item h3 a:hover {
              color: #fa5f0b;
            }

            .service-item p {
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              max-width: 100%;
              line-height: 1.3;
            }

            .service-link {
              color: #fa5f0b;
              text-decoration: none;
              font-weight: 500;
              margin-top: auto;
            }
            
            .service-link:hover {
              text-decoration: underline;
            }
          `}
        </style>

        <div id="our-products">
          <div className="container">
            <div className="section-title ">
              <span className="sub-title">Our Products</span>
              <h3 className="fw-bold text-white">
                Premium Glass Solutions For Your <span>Business</span>
              </h3>
            </div>
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-2 justify-content-center">
              
              {/* 1. Pharmaceutical Bottles */}
              <div className="col">
                <div className="service-item p-2">
                  <img src={service1} alt="Service" className="img-fluid mb-1" />
                  <img src={service2} alt="Service" className="img-fluid mb-1" />
                  <i className="fa-solid fa-wine-bottle fs-6 my-1" />
                  <h3 className="fs-6 my-1">
                    <Link to="/PharmaceuticalBottles" onClick={() => window.scrollTo(0, 0)}>Pharmaceutical Bottles</Link>
                  </h3>
                  {/* <p className="small mb-1" title="Premium glass bottles designed specifically for wine packaging, featuring various sizes and styles to meet your needs.">
                    Premium glass bottles designed specifically for wine packaging.
                  </p> */}
                  <Link className="service-link small" to="/PharmaceuticalBottles" onClick={() => window.scrollTo(0, 0)}>
                    Read More
                  </Link>
                </div>
              </div>

              {/* 2. Food Containers */}
              <div className="col">
                <div className="service-item p-2">
                  <img src={service1} alt="Service" className="img-fluid mb-1" />
                  <img src={service2} alt="Service" className="img-fluid mb-1" />
                  <i className="fa-solid fa-beer-mug-empty fs-6 my-1" />
                  <h3 className="fs-6 my-1">
                    <Link to="/FoodContainers" onClick={() => window.scrollTo(0, 0)}>Food Containers</Link>
                  </h3>
                  {/* <p className="small mb-1" title="Durable glass bottles perfect for beer packaging, available in multiple colors and sizes for your brewing needs.">
                    Durable glass bottles perfect for beer packaging.
                  </p> */}
                  <Link className="service-link small" to="/FoodContainers" onClick={() => window.scrollTo(0, 0)}>
                    Read More
                  </Link>
                </div>
              </div>
               
              {/* 3. Liquor Bottles */}
              <div className="col">
                <div className="service-item p-2">
                  <img src={service1} alt="Service" className="img-fluid mb-1" />
                  <img src={service2} alt="Service" className="img-fluid mb-1" />
                  <i className="fa-solid fa-whiskey-glass fs-6 my-1" />
                  <h3 className="fs-6 my-1">
                    <Link to="/LiquorBottles" onClick={() => window.scrollTo(0, 0)}>Liquor Bottles</Link>
                  </h3>
                  {/* <p className="small mb-1" title="Specialized bottles designed to withstand pressure, perfect for champagne and sparkling wines.">
                    Specialized bottles designed to withstand pressure.
                  </p> */}
                  <Link className="service-link small" to="/LiquorBottles" onClick={() => window.scrollTo(0, 0)}>
                    Read More
                  </Link>
                </div>
              </div>

              {/* 4. Beverage Bottles */}
              <div className="col">
                <div className="service-item p-2">
                  <img src={service1} alt="Service" className="img-fluid mb-1" />
                  <img src={service2} alt="Service" className="img-fluid mb-1" />
                  <i className="fa-solid fa-champagne-glasses fs-6 my-1" />
                  <h3 className="fs-6 my-1">
                    <Link to="/BeverageBottles" onClick={() => window.scrollTo(0, 0)}>Beverage Bottles</Link>
                  </h3>
                  {/* <p className="small mb-1" title="Specialized bottles designed to withstand pressure, perfect for champagne and sparkling wines.">
                    Specialized bottles for champagne and sparkling wines.
                  </p> */}
                  <Link className="service-link small" to="/BeverageBottles" onClick={() => window.scrollTo(0, 0)}>
                    Read More
                  </Link>
                </div>
              </div>

              {/* 5. Cosmetic and Personal Care */} 
              <div className="col">
                <div className="service-item p-2">
                  <img src={service1} alt="Service" className="img-fluid mb-1" />
                  <img src={service2} alt="Service" className="img-fluid mb-1" />
                  <i className="fa-solid fa-paintbrush fs-6 my-1" />
                  <h3 className="fs-6 my-1">
                    <Link to="/CosmeticPersonalCare" onClick={() => window.scrollTo(0, 0)}>Cosmetic and Personal Care</Link>
                  </h3>
                  {/* <p className="small mb-1" title="Crystal clear glass bottles for water packaging, available in various sizes and designs for pure refreshment.">
                    Crystal clear glass bottles for water packaging.
                  </p> */}
                  <Link className="service-link small" to="/CosmeticPersonalCare" onClick={() => window.scrollTo(0, 0)}>
                    Read More
                  </Link>
                </div>
              </div>

              {/* 6. Chemicals */}
              <div className="col">
                <div className="service-item p-2">
                  <img src={service1} alt="Service" className="img-fluid mb-1" />
                  <img src={service2} alt="Service" className="img-fluid mb-1" />
                  <i className="fa-solid fa-flask fs-6 my-1" />
                  <h3 className="fs-6 my-1">
                    <Link to="/Chemicals" onClick={() => window.scrollTo(0, 0)}>Chemicals</Link>
                  </h3>
                  {/* <p className="small mb-1" title="Versatile bottles perfect for beverages, featuring various neck finishes and closure options.">
                    Versatile bottles perfect for beverages.
                  </p> */}
                  <Link className="service-link small" to="/Chemicals" onClick={() => window.scrollTo(0, 0)}>
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Service */}
      
      {/* Foreign */}
      <div className="foreign-area mt-10" style={carouselStyles.foreign}>
        <div className="container-fluid">
          <div className="section-title text-center mb-5">
            <h2>Featured Products</h2>
          </div>
          <div className="foreign-slider owl-theme owl-carousel">
            {products.map((product) => (
              <div
                key={product.id}
                className="foreign-item"
                style={carouselStyles.item}
              >
                <Link to={product.path}>
                  <div style={carouselStyles.imageContainer}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="img-fluid img-thumbnail rounded-4"
                      style={carouselStyles.image}
                    />
                  </div>
                  <div className="foreign-bottom text-center">
                    <h3 style={carouselStyles.title}>{product.name}</h3>
                    <p className="text-muted">{product.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End Foreign */}
      {/* Team */}

      {/* End Team */}
      {/* Benefit */}
      <section className="benefit-area">
        <div className="container">
          <div className="benefit-content">
            <div className="section-title">
              <p>DELIVERING INNOVATION</p>
              <h2>
              Sustainability
              goals
              </h2>
            </div>
            <p>
            We are an integrated container glass manufacturer comprised of agile and experienced engineers .
            </p>
            <div className="row">
              <div className="col-sm-6 col-lg-6">
                <div className="benefit-inner">
                <i className="fa-solid fa-seedling"></i>
                  <h4>Environment</h4>
                </div>
              </div>
              <div className="col-sm-6 col-lg-6">
                <div className="benefit-inner">
                <i className="fa-solid fa-hand-holding-heart"></i>
                  <h4>Health & Safety</h4>
                </div>
              </div>
              <div className="col-sm-6 col-lg-6">
                <div className="benefit-inner">
                  <i className="fa-solid fa-shield" />
                  <h4>Integrity</h4>
                </div>
              </div>
              {/* <div className="col-sm-6 col-lg-6">
                <div className="benefit-inner">
                  <i className="fa-solid fa-microchip" />
                  <h4>The Emerging Tech Exparts</h4>
                </div>
              </div> */}
            </div>
            <Link to="/about" className="cmn-btn">
              Know Details
              <i className="fa-solid fa-arrow-right" />
            </Link>
            <div className="benefit-shape">
              <img src={benefit} alt="Benefit" />
            </div>
          </div>
        </div>
      </section>
      {/* End Benefit */}
      {/* Partner */}
      <section className="partner-area pb-100">
        <div className="container">
          <div className="partner-wrap">
            <div className="partner-shape">
              <img src={partner} alt="Partner" />
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="partner-content">
                  <div className="section-title">
                    <h2>Looking for a Reliable &amp; Stable partner</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="partner-btn">
                  <Link to="/contact"  onClick={() => window.scrollTo(0, 0)} className="cmn-btn">
                    Contact Us
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Partner */}
      {/* Cost */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <div className="bg-white rounded-4 shadow-sm p-4 p-lg-5 h-100">
                <h3
                  className="display-6 fw-bold mb-4"
                  style={{ color: "#fa5f0b" }}
                >
                  Why Choose Our Glass Products?
                </h3>
                <ul className="list-unstyled mb-4">
                  <li className="d-flex align-items-center mb-3">
                    <i
                      className="fa-solid fa-check me-3 fs-5"
                      style={{ color: "#fa5f0b" }}
                    ></i>
                    <span className="fs-5">Premium Quality Materials</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i
                      className="fa-solid fa-check me-3 fs-5"
                      style={{ color: "#fa5f0b" }}
                    ></i>
                    <span className="fs-5">Customizable Designs</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i
                      className="fa-solid fa-check me-3 fs-5"
                      style={{ color: "#fa5f0b" }}
                    ></i>
                    <span className="fs-5">Eco-Friendly Manufacturing</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i
                      className="fa-solid fa-check me-3 fs-5"
                      style={{ color: "#fa5f0b" }}
                    ></i>
                    <span className="fs-5">Competitive Pricing</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <i
                      className="fa-solid fa-check me-3 fs-5"
                      style={{ color: "#fa5f0b" }}
                    ></i>
                    <span className="fs-5">Global Shipping</span>
                  </li>
                </ul>
                <p className="lead text-muted mb-4">
                  Experience excellence in glass manufacturing with our
                  state-of-the-art facilities and expert craftsmanship. We
                  deliver quality that exceeds industry standards.
                </p>
                <Link
                  to="/contact"  onClick={() => window.scrollTo(0, 0)}
                  className="cmn-btn px-4 text-white"
                  style={{ backgroundColor: "#fa5f0b" }}
                >
                  Get a Quote <i className="fa-solid fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="h-100">
                <img
                  src={img1}
                  className="img-fluid rounded-4 shadow-sm w-100 h-100 object-fit-cover"
                  alt="Glass Manufacturing Process"
                  style={{ maxHeight: "500px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Cost */}

      <section className="about-area ptb-100">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="section-title">
                      
                      <h2>Why Partner with Us?</h2>
                    </div>
                    <div className="about-content">
                      <p>
                      Choosing to work with Balaji Glaspac offers distinct advantages over engaging directly with manufacturers:
                      </p>
                      <p>
                      Comprehensive Solutions: We simplify your supply chain by offering a curated portfolio of products from multiple trusted sources, saving you the time and effort of dealing with various manufacturers.
                      </p>
                      <p>
                      Market Expertise: Our deep understanding of market trends and industry demands allows us to provide valuable insights and ensure you receive the most suitable and innovative solutions.
                      </p>
                      <p>
                      Customised Services: Unlike manufacturers focused solely on production, we offer personalised services such as flexible quantities, tailored packaging, and logistical support to meet your unique requirements.
                      </p>
                      <p>
                      Cost Efficiency: We secure competitive pricing by leveraging our established relationships and bulk procurement capabilities, which can significantly reduce your business's costs.
                      </p>
                      <p>
                      Streamlined Communication: With us, you benefit from a single point of contact for all your needs, eliminating the complexity of coordinating with multiple manufacturers.
                      </p>
                      <p>
                      Risk Mitigation: Our rigorous quality checks, dependable logistics, and contingency planning ensure a seamless and reliable experience,even in challenging market conditions.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <img className="rounded-4" src={img2} alt="" style={{ maxWidth: "100%", height: "auto" }} />
                  </div>
                </div>
              </div>
            </section>
      
            <section className="client-logos py-5 my-5">
  <div className="container">
    <div className="section-title text-center mb-5">
      <h2>Our Trusted Partners</h2>
    </div>
    <div className="row justify-content-center align-items-center g-4">
      {clientLogos.map((client) => (
        <div key={client.id} className="col-6 col-sm-4 col-md-2 text-center">
          <img
            src={client.logo}
            alt={`${client.name} Logo`}
            className="img-fluid client-logo rounded-circle"
            style={{
              width: "150px",
              height: "150px",
              objectFit: "cover",
              transition: "transform 0.3s ease",
              border: "2px solid #e9ecef",
              padding: "10px",
              backgroundColor: "#fff",
            }}
          />
        </div>
      ))}
    </div>
  </div>
</section>

      
      <Footer />
    </>
  );
};

export default Home;
