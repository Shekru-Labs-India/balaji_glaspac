import React, { useState, useEffect } from "react";
import logo from "../assets/img/balaji_glaspac.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdowns, setActiveDropdowns] = useState({});
  const [mobileDropdowns, setMobileDropdowns] = useState({
    products: false,
    beverage: false,
    food: false,
    pharma: false,
    cosmetic: false,
  });

  // Add toggle functions
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (key) => {
    setActiveDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const toggleMobileDropdown = (key) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Add this effect to handle body class
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
    }

    return () => {
      document.body.classList.remove("mobile-menu-open");
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Header top */}
      <div className="header-top-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="header-top-item">
                <div className="header-left">
                  <ul>
                    <li>
                      <i className="flaticon-mail" />
                      <a href="/cdn-cgi/l/email-protection#eb838e878784ab9984899f8288c5888486">
                        <span
                          className="__cf_email__"
                          data-cfemail="3b535e5757547b4954594f525815585456"
                        >
                          info@balajiglaspac.com
                        </span>
                      </a>
                    </li>
                    <li>
                      <i className="flaticon-phone" />
                      <a href="tel:882658506">+91 253 2507474</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="header-top-item">
                <div className="header-right">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com" target="_blank">
                        <i className="fa-brands fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com" target="_blank">
                        <i className="fa-brands fa-x-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.com" target="_blank">
                        <i className="fa-brands fa-pinterest" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com" target="_blank">
                        <i className="fa-brands fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Header top */}
      {/* Start Navbar Area */}
      <div className="navbar-area sticky-top">
        {/* Mobile Device */}
        <div className="mobile-nav mean-container">
          <div className="mean-bar">
            <button
              className="meanmenu-reveal"
              onClick={toggleMobileMenu}
              style={{
                border: "none",
                background: "none",
                right: 0,
                left: "auto",
                textAlign: "center",
                textIndent: 0,
                fontSize: 18,
                padding: "10px 15px",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1000,
              }}
            >
              <span className="hamburger-menu">
                <span
                  style={{
                    display: "block",
                    height: "2px",
                    width: "25px",
                    background: "#fff",
                    marginBottom: "5px",
                  }}
                ></span>
                <span
                  style={{
                    display: "block",
                    height: "2px",
                    width: "25px",
                    background: "#fff",
                    marginBottom: "5px",
                  }}
                ></span>
                <span
                  style={{
                    display: "block",
                    height: "2px",
                    width: "25px",
                    background: "#fff",
                  }}
                ></span>
              </span>
            </button>
            <nav className="mean-nav">
              <ul
                className="navbar-nav w-100"
                style={{
                  display: isMobileMenuOpen ? "block" : "none",
                  background: "#fff",
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: "100%",
                  zIndex: 999,
                }}
              >
                <li className="nav-item">
                  <Link to="/" className="nav-link px-3 py-2 border-bottom">
                    Home
                  </Link>
                </li>

                {/* Product List Dropdown */}
                <li className="nav-item">
                  <div
                    className="nav-link px-3 py-2 border-bottom d-flex justify-content-between align-items-center"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleMobileDropdown("products");
                    }}
                  >
                    <span>Catalogue</span>
                    <i
                      className={`fa-solid ${
                        mobileDropdowns.products
                          ? "fa-chevron-up"
                          : "fa-chevron-down"
                      }`}
                    />
                  </div>

                  <div
                    className={`${
                      mobileDropdowns.products ? "show" : "d-none"
                    }`}
                  >
                    {/* Beverage Bottles Section */}
                    <div className="nav-item">
                      <div
                        className="nav-link ps-4 py-2 border-bottom d-flex justify-content-between align-items-center"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleMobileDropdown("beverage");
                        }}
                      >
                        <div className="d-flex align-items-center">
                          <i
                            className="fa-solid fa-arrow-turn-up me-2"
                            style={{ transform: "rotate(90deg)" }}
                          />
                          <span>Beverage Bottles</span>
                        </div>
                      </div>
                      <div
                        className={`${
                          mobileDropdowns.beverage ? "show" : "d-none"
                        }`}
                      >
                        <Link
                          to="/wine-bottles"
                          className="nav-link ps-5 py-2 border-bottom d-flex justify-content-between align-items-center"
                        >
                          <div className="d-flex align-items-center">
                            <i className="fa-solid fa-arrow-right me-2" />
                            <span>Wine Bottles</span>
                          </div>
                        </Link>
                        <Link
                          to="/beer-bottles"
                          className="nav-link ps-5 py-2 border-bottom d-flex justify-content-between align-items-center"
                        >
                          <div className="d-flex align-items-center">
                            <i className="fa-solid fa-arrow-right me-2" />
                            <span>Beer Bottles</span>
                          </div>
                        </Link>
                        <Link
                          to="/spirits-bottles"
                          className="nav-link ps-5 py-2 border-bottom d-flex justify-content-between align-items-center"
                        >
                          <div className="d-flex align-items-center">
                            <i className="fa-solid fa-arrow-right me-2" />
                            <span>Spirits Bottles</span>
                          </div>
                        </Link>
                        <Link
                          to="/champagne-bottles"
                          className="nav-link ps-5 py-2 border-bottom d-flex justify-content-between align-items-center"
                        >
                          <div className="d-flex align-items-center">
                            <i className="fa-solid fa-arrow-right me-2" />
                            <span>Champagne Bottles</span>
                          </div>
                        </Link>
                        <Link
                          to="/water-bottles"
                          className="nav-link ps-5 py-2 border-bottom d-flex justify-content-between align-items-center"
                        >
                          <div className="d-flex align-items-center">
                            <i className="fa-solid fa-arrow-right me-2" />
                            <span>Water Bottles</span>
                          </div>
                        </Link>
                        <Link
                          to="/juice-and-soda-bottles"
                          className="nav-link ps-5 py-2 border-bottom d-flex justify-content-between align-items-center"
                        >
                          <div className="d-flex align-items-center">
                            <i className="fa-solid fa-arrow-right me-2" />
                            <span>Juice and Soda Bottles</span>
                          </div>
                        </Link>
                        <Link
                          to="/specialty-drink-bottles"
                          className="nav-link ps-5 py-2 border-bottom d-flex justify-content-between align-items-center"
                        >
                          <div className="d-flex align-items-center">
                            <i className="fa-solid fa-arrow-right me-2" />
                            <span>Specialty Drink Bottles</span>
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Food Containers Section */}
                    <div className="nav-item">
                      <div
                        className="nav-link ps-4 py-2 border-bottom d-flex justify-content-between align-items-center"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleMobileDropdown("food");
                        }}
                      >
                        <div className="d-flex align-items-center">
                          <i
                            className="fa-solid fa-arrow-turn-up me-2"
                            style={{ transform: "rotate(90deg)" }}
                          />
                          <span>Food Containers</span>
                        </div>
                      </div>
                      <div
                        className={`${
                          mobileDropdowns.food ? "show" : "d-none"
                        }`}
                      >
                        <Link
                          to="/food-jars"
                          className="nav-link ps-5 py-2 border-bottom d-flex justify-content-between align-items-center"
                        >
                          <div className="d-flex align-items-center">
                            <i className="fa-solid fa-arrow-right me-2" />
                            <span>Food Jars</span>
                          </div>
                        </Link>
                        <Link
                          to="/spice-and-seasoning-jars"
                          className="nav-link ps-5 py-2 border-bottom d-flex justify-content-between align-items-center"
                        >
                          <div className="d-flex align-items-center">
                            <i className="fa-solid fa-arrow-right me-2" />
                            <span>Spice and Seasoning Jars</span>
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Pharmaceutical Bottles Section */}
                    <div className="nav-item">
                      <div
                        className="nav-link ps-4 py-2 border-bottom d-flex justify-content-between align-items-center"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleMobileDropdown("pharma");
                        }}
                      >
                        <div className="d-flex align-items-center">
                          <i
                            className="fa-solid fa-arrow-turn-up me-2"
                            style={{ transform: "rotate(90deg)" }}
                          />
                          <span>Pharmaceutical Bottles</span>
                        </div>
                      </div>
                      <div
                        className={`${
                          mobileDropdowns.pharma ? "show" : "d-none"
                        }`}
                      >
                        <Link
                          to="/oral-liquid-bottles"
                          className="nav-link ps-5 py-2 border-bottom d-flex justify-content-between align-items-center"
                        >
                          <div className="d-flex align-items-center">
                            <i className="fa-solid fa-arrow-right me-2" />
                            <span>Oral Liquid Bottles</span>
                          </div>
                        </Link>
                        <Link
                          to="/dropper-bottles"
                          className="nav-link ps-5 py-2 border-bottom d-flex justify-content-between align-items-center"
                        >
                          <div className="d-flex align-items-center">
                            <i className="fa-solid fa-arrow-right me-2" />
                            <span>Dropper Bottles</span>
                          </div>
                        </Link>
                        <Link
                          to="/vials-and-ampoules"
                          className="nav-link ps-5 py-2 border-bottom d-flex justify-content-between align-items-center"
                        >
                          <div className="d-flex align-items-center">
                            <i className="fa-solid fa-arrow-right me-2" />
                            <span>Vials and Ampoules</span>
                          </div>
                        </Link>
                        <Link
                          to="/tablet-and-capsule-bottles"
                          className="nav-link ps-5 py-2 border-bottom d-flex justify-content-between align-items-center"
                        >
                          <div className="d-flex align-items-center">
                            <i className="fa-solid fa-arrow-right me-2" />
                            <span>Tablet and Capsule Bottles</span>
                          </div>
                        </Link>
                        <Link
                          to="/specialty-pharmaceutical-bottles"
                          className="nav-link ps-5 py-2 border-bottom d-flex justify-content-between align-items-center"
                        >
                          <div className="d-flex align-items-center">
                            <i className="fa-solid fa-arrow-right me-2" />
                            <span>Specialty Pharmaceutical Bottles</span>
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Cosmetic and Personal Care Section */}
                    <div className="nav-item">
                      <div
                        className="nav-link ps-4 py-2 border-bottom d-flex justify-content-between align-items-center"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleMobileDropdown("cosmetic");
                        }}
                      >
                        <div className="d-flex align-items-center">
                          <i
                            className="fa-solid fa-arrow-turn-up me-2"
                            style={{ transform: "rotate(90deg)" }}
                          />
                          <span>Cosmetic and Personal Care</span>
                        </div>
                      </div>
                      <div
                        className={`${
                          mobileDropdowns.cosmetic ? "show" : "d-none"
                        }`}
                      >
                        <Link
                          to="/perfume-bottles"
                          className="nav-link ps-5 py-2 border-bottom d-flex justify-content-between align-items-center"
                        >
                          <div className="d-flex align-items-center">
                            <i className="fa-solid fa-arrow-right me-2" />
                            <span>Perfume Bottles</span>
                          </div>
                        </Link>
                        <Link
                          to="/lotion-and-serum-bottles"
                          className="nav-link ps-5 py-2 border-bottom d-flex justify-content-between align-items-center"
                        >
                          <div className="d-flex align-items-center">
                            <i className="fa-solid fa-arrow-right me-2" />
                            <span>Lotion and Serum Bottles</span>
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Other Categories */}
                    <Link
                      to="/industrial-bottles"
                      className="nav-link ps-4 py-2 border-bottom d-flex justify-content-between align-items-center"
                    >
                      <div className="d-flex align-items-center">
                        <i className="fa-solid fa-arrow-right me-2" />
                        <span>Industrial Bottles</span>
                      </div>
                    </Link>
                    <Link
                      to="/customizable-bottles"
                      className="nav-link ps-4 py-2 border-bottom d-flex justify-content-between align-items-center"
                    >
                      <div className="d-flex align-items-center">
                        <i className="fa-solid fa-arrow-right me-2" />
                        <span>Customizable Bottles</span>
                      </div>
                    </Link>
                    <Link
                      to="/premium-bottles"
                      className="nav-link ps-4 py-2 border-bottom d-flex justify-content-between align-items-center"
                    >
                      <div className="d-flex align-items-center">
                        <i className="fa-solid fa-arrow-right me-2" />
                        <span>Premium Bottles</span>
                      </div>
                    </Link>
                    <Link
                      to="/eco-friendly-bottles"
                      className="nav-link ps-4 py-2 border-bottom d-flex justify-content-between align-items-center"
                    >
                      <div className="d-flex align-items-center">
                        <i className="fa-solid fa-arrow-right me-2" />
                        <span>Eco-Friendly Bottles</span>
                      </div>
                    </Link>
                  </div>
                </li>

                <li className="nav-item">
                  <Link
                    to="/clients"
                    className="nav-link px-3 py-2 border-bottom"
                  >
                    Clients
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/about"
                    className="nav-link px-3 py-2 border-bottom"
                  >
                    About
                  </Link>
                </li>

                {/* Services dropdown */}

                <li className="nav-item">
                  <Link
                    to="/contact"
                    className="nav-link px-3 py-2 border-bottom"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <a href="index.html" className="logo">
            <div className="d-flex align-items-center">
              <img
                src={logo}
                width={50}
                height="auto"
                alt="Logo"
                className="rounded-4"
              />
              <div className="d-flex flex-column ms-2">
                <h6 className="mb-0 fw-bold text-white">
                  BALAJI <br />
                  GLASPAC
                </h6>
              </div>
            </div>
          </a>
        </div>

        {/* Desktop Device */}
        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <a className="navbar-brand" href="index.html">
                <div className="d-flex align-items-center">
                  <img
                    src={logo}
                    width={50}
                    height="auto"
                    alt="Logo"
                    className="rounded-4"
                  />
                  <div className="d-flex flex-column ms-2">
                    <h5 className="mb-0 fw-bold text-dark">
                      BALAJI <br />
                      GLASPAC
                    </h5>
                  </div>
                </div>
              </a>
              <div
                className="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/" className="nav-link dropdown-toggle active">
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="nav-link dropdown-toggle">
                      Catalogue <i className="fa-solid fa-chevron-down" />
                    </a>
                    <ul className="dropdown-menu">
                      {/* Beverage Bottles Section */}
                      <li className="nav-item dropdown-submenu">
                        <a href="#" className="nav-link dropdown-toggle">
                          <i
                            className="fa-solid fa-arrow-turn-up me-2"
                            style={{ transform: "rotate(90deg)" }}
                          />
                          Beverage Bottles
                        </a>
                        <ul className="dropdown-menu submenu">
                          <li>
                            <Link to="/wine-bottles" className="nav-link">
                              <i className="fa-solid fa-arrow-right me-2" />
                              Wine Bottles
                            </Link>
                          </li>
                          <li>
                            <Link to="/beer-bottles" className="nav-link">
                              <i className="fa-solid fa-arrow-right me-2" />
                              Beer Bottles
                            </Link>
                          </li>
                          <li>
                            <Link to="/spirits-bottles" className="nav-link">
                              <i className="fa-solid fa-arrow-right me-2" />
                              Spirits Bottles
                            </Link>
                          </li>
                          <li>
                            <Link to="/champagne-bottles" className="nav-link">
                              <i className="fa-solid fa-arrow-right me-2" />
                              Champagne Bottles
                            </Link>
                          </li>
                          <li>
                            <Link to="/water-bottles" className="nav-link">
                              <i className="fa-solid fa-arrow-right me-2" />
                              Water Bottles
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/juice-and-soda-bottles"
                              className="nav-link"
                            >
                              <i className="fa-solid fa-arrow-right me-2" />
                              Juice and Soda Bottles
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/specialty-drink-bottles"
                              className="nav-link"
                            >
                              <i className="fa-solid fa-arrow-right me-2" />
                              Specialty Drink Bottles
                            </Link>
                          </li>
                        </ul>
                      </li>

                      {/* Food Containers Section */}
                      <li className="nav-item dropdown-submenu">
                        <a href="#" className="nav-link dropdown-toggle">
                          <i
                            className="fa-solid fa-arrow-turn-up me-2"
                            style={{ transform: "rotate(90deg)" }}
                          />
                          Food Containers
                        </a>
                        <ul className="dropdown-menu submenu">
                          <li>
                            <Link to="/food-jars" className="nav-link">
                              <i className="fa-solid fa-arrow-right me-2" />
                              Food Jars
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/spice-and-seasoning-jars"
                              className="nav-link"
                            >
                              <i className="fa-solid fa-arrow-right me-2" />
                              Spice and Seasoning Jars
                            </Link>
                          </li>
                        </ul>
                      </li>

                      {/* Pharmaceutical Bottles Section */}
                      <li className="nav-item dropdown-submenu">
                        <a href="#" className="nav-link dropdown-toggle">
                          <i
                            className="fa-solid fa-arrow-turn-up me-2"
                            style={{ transform: "rotate(90deg)" }}
                          />
                          Pharmaceutical Bottles
                        </a>
                        <ul className="dropdown-menu submenu">
                          <li>
                            <Link
                              to="/oral-liquid-bottles"
                              className="nav-link"
                            >
                              <i className="fa-solid fa-arrow-right me-2" />
                              Oral Liquid Bottles
                            </Link>
                          </li>
                          <li>
                            <Link to="/dropper-bottles" className="nav-link">
                              <i className="fa-solid fa-arrow-right me-2" />
                              Dropper Bottles
                            </Link>
                          </li>
                          <li>
                            <Link to="/vials-and-ampoules" className="nav-link">
                              <i className="fa-solid fa-arrow-right me-2" />
                              Vials and Ampoules
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/tablet-and-capsule-bottles"
                              className="nav-link"
                            >
                              <i className="fa-solid fa-arrow-right me-2" />
                              Tablet and Capsule Bottles
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/specialty-pharmaceutical-bottles"
                              className="nav-link"
                            >
                              <i className="fa-solid fa-arrow-right me-2" />
                              Specialty Pharmaceutical Bottles
                            </Link>
                          </li>
                        </ul>
                      </li>

                      {/* Cosmetic and Personal Care Section */}
                      <li className="nav-item dropdown-submenu">
                        <a href="#" className="nav-link dropdown-toggle">
                          <i
                            className="fa-solid fa-arrow-turn-up me-2"
                            style={{ transform: "rotate(90deg)" }}
                          />
                          Cosmetic and Personal Care
                        </a>
                        <ul className="dropdown-menu submenu">
                          <li>
                            <Link to="/perfume-bottles" className="nav-link">
                              <i className="fa-solid fa-arrow-right me-2" />
                              Perfume Bottles
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/lotion-and-serum-bottles"
                              className="nav-link"
                            >
                              <i className="fa-solid fa-arrow-right me-2" />
                              Lotion and Serum Bottles
                            </Link>
                          </li>
                        </ul>
                      </li>

                      {/* Other Categories */}
                      <li>
                        <Link
                          to="/industrial-bottles"
                          className="nav-link text-dark"
                        >
                          <i className="fa-solid fa-arrow-right me-2" />
                          Industrial Bottles
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/customizable-bottles"
                          className="nav-link text-dark"
                        >
                          <i className="fa-solid fa-arrow-right me-2" />
                          Customizable Bottles
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/premium-bottles"
                          className="nav-link text-dark"
                        >
                          <i className="fa-solid fa-arrow-right me-2" />
                          Premium Bottles
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/eco-friendly-bottles"
                          className="nav-link text-dark"
                        >
                          <i className="fa-solid fa-arrow-right me-2" />
                          Eco-Friendly Bottles
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link to="/clients" className="nav-link">
                      Clients
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/about" className="nav-link">
                      About
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/contact" className="nav-link">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* End Navbar Area */}
    </>
  );
};

export default Header;
