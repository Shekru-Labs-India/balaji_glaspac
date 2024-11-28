import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img6 from "../assets/img/img6.jpg";
import team1 from "../assets/img/home-one/team1.jpg";
import team2 from "../assets/img/home-one/team2.jpg";
import team3 from "../assets/img/home-one/team3.jpg";
import aboutman from "../assets/img/home-one/about-man.png";
import aboutsignature from "../assets/img/home-one/about-signature.png";
import service1 from "../assets/img/home-one/service-shape.png";
import service2 from "../assets/img/home-one/service-shape2.png";

import about2 from "../assets/img/home-one/about2.png";
import about3 from "../assets/img/home-one/about3.jpg";
import about4 from "../assets/img/home-one/about4.png";
import about5 from "../assets/img/home-one/about5.png";
import cost from "../assets/img/home-one/cost-girl.png";
import benefit from "../assets/img/home-one/benefit-shape.png";

import partner from "../assets/img/home-one/partner-shape.png";
import video1 from "../assets/img/manufacturing.mp4";
import { Link } from "react-router-dom";
import wine from "../assets/img/BeerBottle.jpg";
import beer from "../assets/img/BeerBottle.jpg";
import spirits from "../assets/img/BeerBottle.jpg";
import champagne from "../assets/img/BeerBottle.jpg";
import water from "../assets/img/BeerBottle.jpg";
import juiceSoda from "../assets/img/BeerBottle.jpg";
import specialtyDrink from "../assets/img/BeerBottle.jpg";
import foodJars from "../assets/img/BeerBottle.jpg";
import oralLiquid from "../assets/img/BeerBottle.jpg";
import dropper from "../assets/img/BeerBottle.jpg";
import vials from "../assets/img/BeerBottle.jpg";
import tablet from "../assets/img/BeerBottle.jpg";
import pharma from "../assets/img/BeerBottle.jpg";
import perfume from "../assets/img/BeerBottle.jpg";
import lotion from "../assets/img/BeerBottle.jpg";
import industrial from "../assets/img/BeerBottle.jpg";
import custom from "../assets/img/BeerBottle.jpg";
import premium from "../assets/img/BeerBottle.jpg";
import eco from "../assets/img/BeerBottle.jpg";

// Create products array
const products = [
  { id: 1, name: "Wine Bottles", image: wine, path: "/wine-bottles" },
  { id: 2, name: "Beer Bottles", image: beer, path: "/beer-bottles" },
  { id: 3, name: "Spirits Bottles", image: spirits, path: "/spirits-bottles" },
  {
    id: 4,
    name: "Champagne Bottles",
    image: champagne,
    path: "/champagne-bottles",
  },
  { id: 5, name: "Water Bottles", image: water, path: "/water-bottles" },
  {
    id: 6,
    name: "Juice and Soda Bottles",
    image: juiceSoda,
    path: "/juice-soda-bottles",
  },
  {
    id: 7,
    name: "Specialty Drink Bottles",
    image: specialtyDrink,
    path: "/specialty-drink-bottles",
  },
  { id: 8, name: "Food Jars", image: foodJars, path: "/food-jars" },
  {
    id: 9,
    name: "Oral Liquid Bottles",
    image: oralLiquid,
    path: "/oral-liquid-bottles",
  },
  { id: 10, name: "Dropper Bottles", image: dropper, path: "/dropper-bottles" },
  { id: 11, name: "Vials and Ampoules", image: vials, path: "/vials-ampoules" },
  {
    id: 12,
    name: "Tablet and Capsule Bottles",
    image: tablet,
    path: "/tablet-capsule-bottles",
  },
  {
    id: 13,
    name: "Specialty Pharmaceutical Bottles",
    image: pharma,
    path: "/specialty-pharmaceutical-bottles",
  },
  { id: 14, name: "Perfume Bottles", image: perfume, path: "/perfume-bottles" },
  {
    id: 15,
    name: "Lotion and Serum Bottles",
    image: lotion,
    path: "/lotion-serum-bottles",
  },
  {
    id: 16,
    name: "Industrial Bottles",
    image: industrial,
    path: "/industrial-bottles",
  },
  {
    id: 17,
    name: "Customizable Bottles",
    image: custom,
    path: "/customizable-bottles",
  },
  { id: 18, name: "Premium Bottles", image: premium, path: "/premium-bottles" },
  {
    id: 19,
    name: "Eco-Friendly Bottles",
    image: eco,
    path: "/eco-friendly-bottles",
  },
];

// In your component's CSS
const carouselStyles = {
  foreign: {
    width: "100vw",
    marginLeft: "calc(-50vw + 50%)",
    marginRight: "calc(-50vw + 50%)",
    overflow: "hidden",
  },
  item: {
    padding: "10px",
    height: "100%",
  },
  imageContainer: {
    width: "100%",
    height: "300px",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  title: {
    fontSize: "18px",
    margin: "10px 0",
    textAlign: "center",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: "#fa5f0b",
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
      <Header />
      {/* Banner */}
      <div className="banner-area banner-img-one banner-area-video">
        <video
          loop
          muted
          autoPlay
          playsInline
          className="background-video"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <source src={video1} type="video/mp4" />
        </video>
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="banner-content">
                <h1>
                  Our Products To Help Customer To Work Faster, Smarter &amp;
                  Efficiently
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida.
                </p>
                <a className="cmn-btn" href="about.html">
                  Discover More
                  <i className="fa-solid fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Banner */}
      {/* About */}
      <section className="about-area ">
        <div className="container">
          <div className="row align-iems-center">
            <div className="col-lg-6">
              <div className="section-title">
                <span className="sub-title">About Us</span>
                <h2>
                  Design, Simulate, and Control Your Robotic System with the
                  Action SDK
                </h2>
              </div>
              <div className="about-content">
                <p>
                  ‘’Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo’’
                </p>
                <ul>
                  <li>
                    <i className="fa-solid fa-check" />
                    Full-Service Electrical Layout Design
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    Writing And Installation
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    Emergency Power Solution
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    Virtually Industrial Robotic Need You Have
                  </li>
                </ul>
                <img src={aboutman} alt="About" />
                <img src={aboutsignature} alt="About" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-img-wrap">
                <div className="about-img-slider owl-theme owl-carousel">
                  <div className="about-img-item">
                    <img src={img1} width={450} height={532} alt="About" />
                  </div>
                  <div className="about-img-item">
                    <img src={img2} width={450} height={532} alt="About" />
                  </div>
                  <div className="about-img-item">
                    <img src={img3} width={450} height={532} alt="About" />
                  </div>
                  <div className="about-img-item">
                    <img src={img4} width={450} height={532} alt="About" />
                  </div>
                </div>
                <div className="about-shape">
                  <img src={about2} alt="About" />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Bucher_Emhart_Glass_-_Glasformungsmaschine_in_2022.jpg"
                    width={348}
                    height={297}
                    alt="About"
                  />
                  <img src={about4} alt="About" />
                  <img src={about5} alt="About" />
                </div>
                <div className="about-year">
                  <h2>
                    35 <span>Years</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About */}
      {/* Service */}
      <section className="service-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Our Products</span>
            <h2>
              Premium Glass Solutions For Your <span>Business</span>
            </h2>
          </div>
          <div className="row">
            {/* 1. Wine Bottles */}
            <div className="col-sm-6 col-lg-4">
              <div className="service-item">
                <img src={service1} alt="Service" />
                <img src={service2} alt="Service" />
                <i className="fa-solid fa-wine-bottle" />
                <h3>
                  <Link to="/wine-bottles">Wine Bottles</Link>
                </h3>
                <p>
                  Premium glass bottles designed specifically for wine
                  packaging, featuring various sizes and styles to meet your
                  needs.
                </p>
                <Link className="service-link" to="/wine-bottles">
                  Read More
                </Link>
              </div>
            </div>

            {/* 2. Beer Bottles */}
            <div className="col-sm-6 col-lg-4">
              <div className="service-item">
                <img src={service1} alt="Service" />
                <img src={service2} alt="Service" />
                <i className="fa-solid fa-beer-mug-empty" />
                <h3>
                  <Link to="/beer-bottles">Beer Bottles</Link>
                </h3>
                <p>
                  Durable glass bottles perfect for beer packaging, available in
                  multiple colors and sizes for your brewing needs.
                </p>
                <Link className="service-link" to="/beer-bottles">
                  Read More
                </Link>
              </div>
            </div>

            {/* 3. Spirits Bottles */}
            <div className="col-sm-6 col-lg-4">
              <div className="service-item">
                <img src={service1} alt="Service" />
                <img src={service2} alt="Service" />
                <i className="fa-solid fa-whiskey-glass" />
                <h3>
                  <Link to="/spirits-bottles">Spirits Bottles</Link>
                </h3>
                <p>
                  Elegant glass bottles designed for spirits and liquors,
                  featuring premium finishes and distinctive designs.
                </p>
                <Link className="service-link" to="/spirits-bottles">
                  Read More
                </Link>
              </div>
            </div>

            {/* 4. Champagne Bottles */}
            <div className="col-sm-6 col-lg-4">
              <div className="service-item">
                <img src={service1} alt="Service" />
                <img src={service2} alt="Service" />
                <i className="fa-solid fa-champagne-glasses" />
                <h3>
                  <Link to="/champagne-bottles">Champagne Bottles</Link>
                </h3>
                <p>
                  Specialized bottles designed to withstand pressure, perfect
                  for champagne and sparkling wines.
                </p>
                <Link className="service-link" to="/champagne-bottles">
                  Read More
                </Link>
              </div>
            </div>

            {/* 5. Water Bottles */}
            <div className="col-sm-6 col-lg-4">
              <div className="service-item">
                <img src={service1} alt="Service" />
                <img src={service2} alt="Service" />
                <i className="fa-solid fa-bottle-water" />
                <h3>
                  <Link to="/water-bottles">Water Bottles</Link>
                </h3>
                <p>
                  Crystal clear glass bottles for water packaging, available in
                  various sizes and designs for pure refreshment.
                </p>
                <Link className="service-link" to="/water-bottles">
                  Read More
                </Link>
              </div>
            </div>

            {/* 6. Juice and Soda Bottles */}
            <div className="col-sm-6 col-lg-4">
              <div className="service-item">
                <img src={service1} alt="Service" />
                <img src={service2} alt="Service" />
                <i className="fa-solid fa-glass-water" />
                <h3>
                  <Link to="/juice-soda-bottles">Juice and Soda Bottles</Link>
                </h3>
                <p>
                  Versatile bottles perfect for beverages, featuring various
                  neck finishes and closure options.
                </p>
                <Link className="service-link" to="/juice-soda-bottles">
                  Read More
                </Link>
              </div>
            </div>

            {/* 7. Specialty Drink Bottles */}
            <div className="col-sm-6 col-lg-4">
              <div className="service-item">
                <img src={service1} alt="Service" />
                <img src={service2} alt="Service" />
                <i className="fa-solid fa-martini-glass" />
                <h3>
                  <Link to="/specialty-drink-bottles">
                    Specialty Drink Bottles
                  </Link>
                </h3>
                <p>
                  Custom bottles for cold-pressed juices, kombucha, and other
                  specialty beverages with unique designs.
                </p>
                <Link className="service-link" to="/specialty-drink-bottles">
                  Read More
                </Link>
              </div>
            </div>

            {/* 8. Food Jars */}
            <div className="col-sm-6 col-lg-4">
              <div className="service-item">
                <img src={service1} alt="Service" />
                <img src={service2} alt="Service" />
                <i className="fa-solid fa-jar" />
                <h3>
                  <Link to="/food-jars">Food Jars</Link>
                </h3>
                <p>
                  Wide-mouth jars perfect for food packaging, preserves, and
                  condiments with secure sealing options.
                </p>
                <Link className="service-link" to="/food-jars">
                  Read More
                </Link>
              </div>
            </div>

            {/* 9. Oral Liquid Bottles */}
            <div className="col-sm-6 col-lg-4">
              <div className="service-item">
                <img src={service1} alt="Service" />
                <img src={service2} alt="Service" />
                <i className="fa-solid fa-prescription-bottle-medical" />
                <h3>
                  <Link to="/oral-liquid-bottles">Oral Liquid Bottles</Link>
                </h3>
                <p>
                  Pharmaceutical-grade bottles designed for oral medications and
                  supplements with precise dosing features.
                </p>
                <Link className="service-link" to="/oral-liquid-bottles">
                  Read More
                </Link>
              </div>
            </div>

            {/* 10. Dropper Bottles */}
            <div className="col-sm-6 col-lg-4">
              <div className="service-item">
                <img src={service1} alt="Service" />
                <img src={service2} alt="Service" />
                <i className="fa-solid fa-eye-dropper" />
                <h3>
                  <Link to="/dropper-bottles">Dropper Bottles</Link>
                </h3>
                <p>
                  Precision dropper bottles for essential oils, serums, and
                  liquid medications with accurate dispensing.
                </p>
                <Link className="service-link" to="/dropper-bottles">
                  Read More
                </Link>
              </div>
            </div>

            {/* 11. Vials and Ampoules */}
            <div className="col-sm-6 col-lg-4">
              <div className="service-item">
                <img src={service1} alt="Service" />
                <img src={service2} alt="Service" />
                <i className="fa-solid fa-vial" />
                <h3>
                  <Link to="/vials-ampoules">Vials and Ampoules</Link>
                </h3>
                <p>
                  High-quality glass vials and ampoules for pharmaceutical and
                  laboratory applications with precise specifications.
                </p>
                <Link className="service-link" to="/vials-ampoules">
                  Read More
                </Link>
              </div>
            </div>

            {/* 12. Tablet and Capsule Bottles */}
            <div className="col-sm-6 col-lg-4">
              <div className="service-item">
                <img src={service1} alt="Service" />
                <img src={service2} alt="Service" />
                <i className="fa-solid fa-pills" />
                <h3>
                  <Link to="/tablet-capsule-bottles">
                    Tablet and Capsule Bottles
                  </Link>
                </h3>
                <p>
                  Specialized bottles for tablets and capsules with
                  moisture-resistant properties and child-resistant caps.
                </p>
                <Link className="service-link" to="/tablet-capsule-bottles">
                  Read More
                </Link>
              </div>
            </div>

            {/* 13. Specialty Pharmaceutical Bottles */}
            <div className="col-sm-6 col-lg-4">
              <div className="service-item">
                <img src={service1} alt="Service" />
                <img src={service2} alt="Service" />
                <i className="fa-solid fa-prescription-bottle" />
                <h3>
                  <Link to="/specialty-pharmaceutical-bottles">
                    Specialty Pharmaceutical Bottles
                  </Link>
                </h3>
                <p>
                  Custom pharmaceutical bottles designed for specific medical
                  applications with strict quality standards.
                </p>
                <Link
                  className="service-link"
                  to="/specialty-pharmaceutical-bottles"
                >
                  Read More
                </Link>
              </div>
            </div>

            {/* 14. Perfume Bottles */}
            <div className="col-sm-6 col-lg-4">
              <div className="service-item">
                <img src={service1} alt="Service" />
                <img src={service2} alt="Service" />
                <i className="fa-solid fa-spray-can-sparkles" />
                <h3>
                  <Link to="/perfume-bottles">Perfume Bottles</Link>
                </h3>
                <p>
                  Elegant and decorative bottles for fragrances, featuring
                  sophisticated designs and premium finishes.
                </p>
                <Link className="service-link" to="/perfume-bottles">
                  Read More
                </Link>
              </div>
            </div>

            {/* 15. Lotion and Serum Bottles */}
            <div className="col-sm-6 col-lg-4">
              <div className="service-item">
                <img src={service1} alt="Service" />
                <img src={service2} alt="Service" />
                <i className="fa-solid fa-pump-soap" />
                <h3>
                  <Link to="/lotion-serum-bottles">
                    Lotion and Serum Bottles
                  </Link>
                </h3>
                <p>
                  Specialized bottles for cosmetic products with various pump
                  and dispenser options for optimal usage.
                </p>
                <Link className="service-link" to="/lotion-serum-bottles">
                  Read More
                </Link>
              </div>
            </div>

            {/* 16. Industrial Bottles */}
            <div className="col-sm-6 col-lg-4">
              <div className="service-item">
                <img src={service1} alt="Service" />
                <img src={service2} alt="Service" />
                <i className="fa-solid fa-industry" />
                <h3>
                  <Link to="/industrial-bottles">Industrial Bottles</Link>
                </h3>
                <p>
                  Heavy-duty glass bottles designed for industrial chemicals and
                  solutions with safety features.
                </p>
                <Link className="service-link" to="/industrial-bottles">
                  Read More
                </Link>
              </div>
            </div>

            {/* 17. Customizable Bottles */}
            <div className="col-sm-6 col-lg-4">
              <div className="service-item">
                <img src={service1} alt="Service" />
                <img src={service2} alt="Service" />
                <i className="fa-solid fa-wand-magic-sparkles" />
                <h3>
                  <Link to="/customizable-bottles">Customizable Bottles</Link>
                </h3>
                <p>
                  Bespoke bottle solutions with customizable shapes, colors, and
                  finishes to match your brand identity.
                </p>
                <Link className="service-link" to="/customizable-bottles">
                  Read More
                </Link>
              </div>
            </div>

            {/* 18. Premium Bottles */}
            <div className="col-sm-6 col-lg-4">
              <div className="service-item">
                <img src={service1} alt="Service" />
                <img src={service2} alt="Service" />
                <i className="fa-solid fa-crown" />
                <h3>
                  <Link to="/premium-bottles">Premium Bottles</Link>
                </h3>
                <p>
                  Luxury glass bottles with superior quality and distinctive
                  designs for high-end products.
                </p>
                <Link className="service-link" to="/premium-bottles">
                  Read More
                </Link>
              </div>
            </div>

            {/* 19. Eco-Friendly Bottles */}
            <div className="col-sm-6 col-lg-4">
              <div className="service-item">
                <img src={service1} alt="Service" />
                <img src={service2} alt="Service" />
                <i className="fa-solid fa-leaf" />
                <h3>
                  <Link to="/eco-friendly-bottles">Eco-Friendly Bottles</Link>
                </h3>
                <p>
                  Sustainable glass bottles made with recycled materials and
                  eco-conscious manufacturing processes.
                </p>
                <Link className="service-link" to="/eco-friendly-bottles">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Service */}
      {/* Counter */}
      <section className="counter-area pt-100">
        <div className="container">
          <div className="row align-iems-center">
            <div className="col-lg-5">
              <div className="counter-text">
                <h2>We have Completed Some Foreign Clients Project</h2>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-sm-4 col-lg-4">
                  <div className="counter-item">
                    <h3>
                      <span className="odometer" data-count={1226}>
                        00
                      </span>
                    </h3>
                    <p>HAPPY CLIENTS</p>
                  </div>
                </div>
                <div className="col-sm-4 col-lg-4">
                  <div className="counter-item">
                    <h3>
                      <span className="odometer" data-count={1552}>
                        00
                      </span>
                    </h3>
                    <p>WORKERS</p>
                  </div>
                </div>
                <div className="col-sm-4 col-lg-4">
                  <div className="counter-item">
                    <h3>
                      <span className="odometer" data-count={1000}>
                        00
                      </span>
                    </h3>
                    <p>EXPERT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Counter */}
      {/* Foreign */}
      <div className="foreign-area" style={carouselStyles.foreign}>
        <div className="container-fluid p-0">
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
                  <div className="foreign-bottom">
                    <h3 style={carouselStyles.title}>{product.name}</h3>
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
              <h2>
                Get Benefits of Using Latest Artificial Intelligence
                Technologies.
              </h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
            <div className="row">
              <div className="col-sm-6 col-lg-6">
                <div className="benefit-inner">
                  <i className="fa-solid fa-bullseye" />
                  <h4>Complete Technology Partner</h4>
                </div>
              </div>
              <div className="col-sm-6 col-lg-6">
                <div className="benefit-inner">
                  <i className="fa-solid fa-users" />
                  <h4>Backed By 100% Customer References</h4>
                </div>
              </div>
              <div className="col-sm-6 col-lg-6">
                <div className="benefit-inner">
                  <i className="fa-solid fa-shield" />
                  <h4>Fast, Scalable, &amp; Reliable</h4>
                </div>
              </div>
              <div className="col-sm-6 col-lg-6">
                <div className="benefit-inner">
                  <i className="fa-solid fa-microchip" />
                  <h4>The Emerging Tech Exparts</h4>
                </div>
              </div>
            </div>
            <a className="cmn-btn" href="about.html">
              Know Details
              <i className="fa-solid fa-arrow-right" />
            </a>
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
                  <a className="cmn-btn" href="contact.html">
                    Contact Us
                    <i className="fa-solid fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Partner */}
      {/* Cost */}
      <section className="cost-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="cost-content">
                <div className="section-title"></div>
                <p></p>
                <ul className="align-items-center">
                  <li></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cost-img">
                <img
                  src={img1}
                  className="img-fluid img-thumbnail rounded-4 object-fit-cover"
                  alt="Cost"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Cost */}
      <Footer />
    </>
  );
};

export default Home;
