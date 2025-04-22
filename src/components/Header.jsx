import React, { useState, useEffect } from "react";
import logo from "../assets/img/balaji_glaspac.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdowns, setActiveDropdowns] = useState({});
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({
    products: false,
    beverage: false,
    food: false,
    pharma: false,
    liquor: false,
    cosmetic: false,
    chemicals: false,
    services: false,
  });

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.warn(`Element with id ${sectionId} not found.`);
    }
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

      {/* Start Navbar Area */}
      <div
        className={`navbar-area${
          isScrolled ? "navbar-scrolled" : ""
        }`}
      >
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
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link px-3 py-2 border-bottom custom-active"
                        : "nav-link px-3 py-2 border-bottom"
                    }
                  >
                    Home
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link px-3 py-2 border-bottom custom-active"
                        : "nav-link px-3 py-2 border-bottom"
                    }
                  >
                    About
                  </NavLink>
                </li>

                {/* Product List Dropdown */}
                <li className="nav-item">

                <div

                  className="nav-link px-3 py-2 border-bottom d-flex justify-content-between align-items-center"
                  onClick={(e) => {
               e.preventDefault();
        toggleMobileDropdown("products");


    }}
>  <span>Products</span>
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
                      </div>
                    </div>

                    {/* Liquor Bottles Section */}
                    <div className="nav-item">
                      <div
                        className="nav-link ps-4 py-2 border-bottom d-flex justify-content-between align-items-center"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleMobileDropdown("liquor");
                        }}
                      >
                        <div className="d-flex align-items-center">
                          <i
                            className="fa-solid fa-arrow-turn-up me-2"
                            style={{ transform: "rotate(90deg)" }}
                          />
                          <span>Liquor Bottles</span>
                        </div>
                      </div>
                      <div
                        className={`${
                          mobileDropdowns.liquor ? "show" : "d-none"
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
                          to="/sparklingwinenew"
                          className="nav-link ps-5 py-2 border-bottom d-flex justify-content-between align-items-center"
                        >
                          <div className="d-flex align-items-center">
                            <i className="fa-solid fa-arrow-right me-2" />
                            <span>Sparkling Wine</span>
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

                    {/* Chemicals Section */}
                    <div className="nav-item">
                      <div
                        className="nav-link ps-4 py-2 border-bottom d-flex justify-content-between align-items-center"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleMobileDropdown("chemicals");
                        }}
                      >
                        <div className="d-flex align-items-center">
                          <i
                            className="fa-solid fa-arrow-turn-up me-2"
                            style={{ transform: "rotate(90deg)" }}
                          />
                          <span>Chemicals</span>
                        </div>
                      </div>
                      <div
                        className={`${
                          mobileDropdowns.chemicals ? "show" : "d-none"
                        }`}
                      >
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
                    </div>


                  </div>
                </li>


                 {/* Services Dropdown */}
    <li className="nav-item">
      <div
        className="nav-link px-3 py-2 border-bottom d-flex justify-content-between align-items-center"
        onClick={(e) => {
          e.preventDefault();
          toggleMobileDropdown("services");
        }}
      >
        <span>Services</span>
        <i
          className={`fa-solid ${
            mobileDropdowns.services ? "fa-chevron-up" : "fa-chevron-down"
          }`}
        />
      </div>
      <div
        className={`${
          mobileDropdowns.services ? "show" : "d-none"
        }`}
      >
        <Link
          to="/packagingoptions"
          className="nav-link ps-4 py-2 border-bottom d-flex align-items-center"
        >
           <div className="d-flex align-items-center">
          <i className="fa-solid fa-arrow-right me-2" />
          <span>Packaging Options </span>
          </div>
        </Link>
        <Link
          to="/coloring"
          className="nav-link ps-4 py-2 border-bottom d-flex align-items-center"
        >
          <div className="d-flex align-items-center">
          <i className="fa-solid fa-arrow-right me-2" />
         <span>Coloring Forehearth Technology </span>
         </div>
        </Link>
        <Link
          to="/inhousedesign"
          className="nav-link ps-4 py-2 border-bottom d-flex align-items-center"
        >
           <div className="d-flex align-items-center">
          <i className="fa-solid fa-arrow-right me-2" />
         <span>In House Design Studio </span>
         </div>
        </Link>
        <Link
          to="/appliedceramic"
          className="nav-link ps-4 py-2 border-bottom d-flex align-items-center"
        >
           <div className="d-flex align-items-center">
          <i className="fa-solid fa-arrow-right me-2" />
         <span> Applied Ceramic Label</span>
         </div>
        </Link>

        <Link
          to="/coating"
          className="nav-link ps-4 py-2 border-bottom d-flex align-items-center"
        >
          <div className="d-flex align-items-center">
          <i className="fa-solid fa-arrow-right me-2" />
         <span>Coating </span>
         </div>
        </Link>


        {/* <Link
          to="/mouldshop"
          className="nav-link ps-4 py-2 border-bottom d-flex align-items-center"
        >
          <div className="d-flex align-items-center">
          <i className="fa-solid fa-arrow-right me-2" />
          <span>Mould Shop </span>
          </div>
        </Link> */}
      </div>
    </li>




                <li className="nav-item">
                  <NavLink
                    to="/clients"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link px-3 py-2 border-bottom custom-active"
                        : "nav-link px-3 py-2 border-bottom"
                    }
                  >
                    Clients
                  </NavLink>
                </li>



                <li className="nav-item">
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link px-3 py-2 border-bottom custom-active"
                        : "nav-link px-3 py-2 border-bottom"
                    }
                  >
                    Contact
                  </NavLink>
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
        <div className="main-nav py-0">
          <div className="container-fluid px-0">
            <nav className="navbar navbar-expand-md navbar-light py-0 position-relative">
              <div className="d-flex justify-content-between align-items-center w-100 mb-1">
                {/* Logo - Start */}
                <Link className="navbar-brand ms-0 ps-1 me-auto" to="/">
                  <div className="d-flex align-items-center">
                    <img
                      src={logo}
                      width={40}
                      height="auto"
                      alt="Logo"
                      className="rounded-4"
                    />
                    <div className="d-flex flex-column ms-3">
                      <h4 className="mb-0 fw-bold fs-6 text-dark">
                        BALAJI <br />
                        GLASPAC
                      </h4>
                    </div>
                  </div>
                </Link>

                {/* Navbar toggler for responsive design */}
                <button
                  className="navbar-toggler d-md-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation - Center */}
                <div className="collapse navbar-collapse justify-content-center mt-n4" id="navbarSupportedContent">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <NavLink
                        to="/" onClick={() => window.scrollTo(0, 0)}
                        className={({ isActive }) =>
                          isActive ? "nav-link active custom-active" : "nav-link"
                        }
                      >
                        Home
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        to="/about"  onClick={() => window.scrollTo(0, 0)}
                        className={({ isActive }) =>
                          isActive ? "nav-link active custom-active" : "nav-link"
                        }
                      >
                        About
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        to="/ourproducts"
                        className="nav-link dropdown-toggle"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        Products <i className="fa-solid fa-chevron-down" />
                      </NavLink>
                      <ul className="dropdown-menu">
                        {/* Pharmaceutical Bottles Section */}
                        <li className="nav-item dropdown-submenu">
  <NavLink
    to="/PharmaceuticalBottles"
    className={({ isActive }) =>
      isActive ? "nav-link dropdown-toggle custom-active" : "nav-link dropdown-toggle"
    }
    onClick={() => window.scrollTo(0, 0)}
  >
    <i
      className="fa-solid fa-arrow-turn-up me-2"
      style={{ transform: "rotate(90deg)" }}
    />
    Pharmaceutical Bottles
  </NavLink>
  <ul className="dropdown-menu submenu">
    <li>
      <NavLink
        to="/oral-liquid-bottles"
        onClick={() => window.scrollTo(0, 0)}
        className={({ isActive }) =>
          isActive ? "nav-link custom-active" : "nav-link"
        }
      >
        <i className="fa-solid fa-arrow-right me-2" />
        Oral Liquid Bottles
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/dropper-bottles"
        onClick={() => window.scrollTo(0, 0)}
        className={({ isActive }) =>
          isActive ? "nav-link custom-active" : "nav-link"
        }
      >
        <i className="fa-solid fa-arrow-right me-2" />
        Dropper Bottles
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/vials-and-ampoules"
        onClick={() => window.scrollTo(0, 0)}
        className={({ isActive }) =>
          isActive ? "nav-link custom-active" : "nav-link"
        }
      >
        <i className="fa-solid fa-arrow-right me-2" />
        Vials and Ampoules
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/tablet-and-capsule-bottles"
        onClick={() => window.scrollTo(0, 0)}
        className={({ isActive }) =>
          isActive ? "nav-link custom-active" : "nav-link"
        }
      >
        <i className="fa-solid fa-arrow-right me-2" />
        Tablet and Capsule Bottles
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/specialty-pharmaceutical-bottles"
        onClick={() => window.scrollTo(0, 0)}
        className={({ isActive }) =>
          isActive ? "nav-link custom-active" : "nav-link"
        }
      >
        <i className="fa-solid fa-arrow-right me-2" />
        Specialty Pharmaceutical Bottles
      </NavLink>
    </li>
  </ul>
                        </li>


                        {/* Food Containers Section */}
                          <li className="nav-item">
                          <NavLink
                                to="/FoodContainers"
                              onClick={() => window.scrollTo(0, 0)}
                          className={({ isActive }) =>
                        isActive ? "nav-link custom-active" : "nav-link"
                        }
    >
                        <i
                          className="fa-solid fa-arrow-turn-up me-2"
                          style={{ transform: "rotate(90deg)" }}
                        />
                        Food Containers
                      </NavLink>
                  </li>



                           {/* Liquor Bottles Section */}
                           <li className="nav-item dropdown-submenu">
  <NavLink
    to="/LiquorBottles"
    className={({ isActive }) =>
      isActive ? "nav-link dropdown-toggle custom-active" : "nav-link dropdown-toggle"
    }
    onClick={() => window.scrollTo(0, 0)}
  >
    <i
      className="fa-solid fa-arrow-turn-up me-2"
      style={{ transform: "rotate(90deg)" }}
    />
    Liquor Bottles
  </NavLink>

  <ul className="dropdown-menu submenu">
    <li>
      <NavLink
        to="/wine-bottles"
        onClick={() => window.scrollTo(0, 0)}
        className={({ isActive }) =>
          isActive ? "nav-link custom-active" : "nav-link"
        }
      >
        <i className="fa-solid fa-arrow-right me-2" />
        Wine Bottles
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/sparklingwinenew"
        onClick={() => window.scrollTo(0, 0)}
        className={({ isActive }) =>
          isActive ? "nav-link custom-active" : "nav-link"
        }
      >
        <i className="fa-solid fa-arrow-right me-2" />
        Sparkling Wine
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/beer-bottles"
        onClick={() => window.scrollTo(0, 0)}
        className={({ isActive }) =>
          isActive ? "nav-link custom-active" : "nav-link"
        }
      >
        <i className="fa-solid fa-arrow-right me-2" />
        Beer Bottles
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/spirits-bottles"
        onClick={() => window.scrollTo(0, 0)}
        className={({ isActive }) =>
          isActive ? "nav-link custom-active" : "nav-link"
        }
      >
        <i className="fa-solid fa-arrow-right me-2" />
        Spirits Bottles
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/champagne-bottles"
        onClick={() => window.scrollTo(0, 0)}
        className={({ isActive }) =>
          isActive ? "nav-link custom-active" : "nav-link"
        }
      >
        <i className="fa-solid fa-arrow-right me-2" />
        Champagne Bottles
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/specialty-drink-bottles"
        onClick={() => window.scrollTo(0, 0)}
        className={({ isActive }) =>
          isActive ? "nav-link custom-active" : "nav-link"
        }
      >
        <i className="fa-solid fa-arrow-right me-2" />
        Specialty Drink Bottles
      </NavLink>
    </li>
  </ul>
</li>



                        {/* Beverage Bottles Section */}
                        <li className="nav-item dropdown-submenu">
  <NavLink
    to="/BeverageBottles"
    className={({ isActive }) =>
      isActive ? "nav-link dropdown-toggle custom-active" : "nav-link dropdown-toggle"
    }
    onClick={() => window.scrollTo(0, 0)}
  >
    <i
      className="fa-solid fa-arrow-turn-up me-2"
      style={{ transform: "rotate(90deg)" }}
    />
    Beverage Bottles
  </NavLink>

  <ul className="dropdown-menu submenu">
    <li>
      <NavLink
        to="/water-bottles"
        onClick={() => window.scrollTo(0, 0)}
        className={({ isActive }) =>
          isActive ? "nav-link custom-active" : "nav-link"
        }
      >
        <i className="fa-solid fa-arrow-right me-2" />
        Water Bottles
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/juice-and-soda-bottles"
        onClick={() => window.scrollTo(0, 0)}
        className={({ isActive }) =>
          isActive ? "nav-link custom-active" : "nav-link"
        }
      >
        <i className="fa-solid fa-arrow-right me-2" />
        Juice and Soda Bottles
      </NavLink>
    </li>
  </ul>
</li>


                        {/* Cosmetic and Personal Care Section */}
                        <li className="nav-item dropdown-submenu">
  <NavLink
    to="/CosmeticPersonalCare"
    className={({ isActive }) =>
      isActive ? "nav-link dropdown-toggle custom-active" : "nav-link dropdown-toggle"
    }
    onClick={() => window.scrollTo(0, 0)}
  >
    <i
      className="fa-solid fa-arrow-turn-up me-2"
      style={{ transform: "rotate(90deg)" }}
    />
    Cosmetic and Personal Care
  </NavLink>

  <ul className="dropdown-menu submenu">
    <li>
      <NavLink
        to="/perfume-bottles"
        onClick={() => window.scrollTo(0, 0)}
        className={({ isActive }) =>
          isActive ? "nav-link custom-active" : "nav-link"
        }
      >
        <i className="fa-solid fa-arrow-right me-2" />
        Perfume Bottles
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/lotion-and-serum-bottles"
        onClick={() => window.scrollTo(0, 0)}
        className={({ isActive }) =>
          isActive ? "nav-link custom-active" : "nav-link"
        }
      >
        <i className="fa-solid fa-arrow-right me-2" />
        Lotion and Serum Bottles
      </NavLink>
    </li>
  </ul>
</li>



                         {/* Chemicals Section */}
                         <li className="nav-item dropdown-submenu">
  <NavLink
    to="/Chemicals"
    className={({ isActive }) =>
      isActive ? "nav-link dropdown-toggle custom-active" : "nav-link dropdown-toggle"
    }
    onClick={() => window.scrollTo(0, 0)}
  >
    <i
      className="fa-solid fa-arrow-turn-up me-2"
      style={{ transform: "rotate(90deg)" }}
    />
    Chemicals
  </NavLink>

  <ul className="dropdown-menu submenu">
    <li>
      <NavLink
        to="/industrial-bottles"
        onClick={() => window.scrollTo(0, 0)}
        className={({ isActive }) =>
          isActive ? "nav-link custom-active" : "nav-link text-dark"
        }
      >
        <i className="fa-solid fa-arrow-right me-2" />
        Industrial Bottles
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/customizable-bottles"
        onClick={() => window.scrollTo(0, 0)}
        className={({ isActive }) =>
          isActive ? "nav-link custom-active" : "nav-link text-dark"
        }
      >
        <i className="fa-solid fa-arrow-right me-2" />
        Customizable Bottles
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/premium-bottles"
        onClick={() => window.scrollTo(0, 0)}
        className={({ isActive }) =>
          isActive ? "nav-link custom-active" : "nav-link text-dark"
        }
      >
        <i className="fa-solid fa-arrow-right me-2" />
        Premium Bottles
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/eco-friendly-bottles"
        onClick={() => window.scrollTo(0, 0)}
        className={({ isActive }) =>
          isActive ? "nav-link custom-active" : "nav-link text-dark"
        }
      >
        <i className="fa-solid fa-arrow-right me-2" />
        Eco-Friendly Bottles
      </NavLink>
    </li>
  </ul>
</li>


                        {/* Other Categories */}
                      </ul>
                    </li>

                    {/* Services Dropdown */}
                    <li className="nav-item">
                      <NavLink
                        to="/ServicesProduct"
                        className="nav-link dropdown-toggle"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        Services <i className="fa-solid fa-chevron-down" />
                      </NavLink>
                      <ul className="dropdown-menu">

                      <li>
                          <NavLink
                            to="/packagingoptions" onClick={() => window.scrollTo(0, 0)}
                            className={({ isActive }) =>
                              isActive
                                ? "nav-link custom-active"
                                : "nav-link text-dark"
                            }
                          >
                            <i className="fa-solid fa-arrow-right me-2" />
                            Packaging Options
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/coloring" onClick={() => window.scrollTo(0, 0)}
                            className={({ isActive }) =>
                              isActive
                                ? "nav-link custom-active"
                                : "nav-link text-dark"
                            }
                          >
                            <i className="fa-solid fa-arrow-right me-2" />
                            Coloring Forehearth Technology
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/inhousedesign" onClick={() => window.scrollTo(0, 0)}
                            className={({ isActive }) =>
                              isActive
                                ? "nav-link custom-active"
                                : "nav-link text-dark"
                            }
                          >
                            <i className="fa-solid fa-arrow-right me-2" />
                            In House Design Studio
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/appliedceramic" onClick={() => window.scrollTo(0, 0)}
                            className={({ isActive }) =>
                              isActive
                                ? "nav-link custom-active"
                                : "nav-link text-dark"
                            }
                          >
                            <i className="fa-solid fa-arrow-right me-2" />
                            Applied Ceramic Label
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/coating" onClick={() => window.scrollTo(0, 0)}
                            className={({ isActive }) =>
                              isActive
                                ? "nav-link custom-active"
                                : "nav-link text-dark"
                            }
                          >
                            <i className="fa-solid fa-arrow-right me-2" />
                            Coating
                          </NavLink>
                        </li>
                        {/* <li>
                          <NavLink
                            to="/mouldshop" onClick={() => window.scrollTo(0, 0)}
                            className={({ isActive }) =>
                              isActive
                                ? "nav-link custom-active"
                                : "nav-link text-dark"
                            }
                          >
                            <i className="fa-solid fa-arrow-right me-2" />
                            Mould Shop
                          </NavLink>
                        </li> */}
                      </ul>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/clients" onClick={() => window.scrollTo(0, 0)}
                        className={({ isActive }) =>
                          isActive ? "nav-link active custom-active" : "nav-link"
                        }
                      >
                        Clients
                      </NavLink>
                    </li>



                    <li className="nav-item">
                      <NavLink
                        to="/contact"  onClick={() => window.scrollTo(0, 0)}
                        className={({ isActive }) =>
                          isActive ? "nav-link active custom-active" : "nav-link"
                        }
                      >
                        Contact
                      </NavLink>
                    </li>

                  </ul>
                </div>

                {/* Social Media Links - End */}
                <div className="header-right ms-auto">
                  <ul className="d-flex list-unstyled mb-0">
                    <li className="mx-3">
                      <Link
                        to="https://www.facebook.com/profile.php?id=61569130629576"
                        target="_blank"
                      >
                        <i className="fa-brands fa-facebook fa-2x text-white" />
                      </Link>
                    </li>
                    <li className="mx-3">
                      <Link to="https://x.com/balajiglaspac" target="_blank">
                        <i className="fa-brands fa-x-twitter fa-2x text-white" />
                      </Link>
                    </li>
                    <li className="mx-3">
                      <Link
                        to="https://www.instagram.com/balaji_glaspac?igsh=enY3cWdobXpjY2c5"
                        target="_blank"
                      >
                        <i className="fa-brands fa-instagram fa-2x text-white" />
                      </Link>
                    </li>
                    <li className="mx-3">
                      <Link
                        to="https://www.linkedin.com/in/balaji-glaspac-95534533b/"
                        target="_blank"
                      >
                        <i className="fa-brands fa-linkedin fa-2x text-white" />
                      </Link>
                    </li>
                  </ul>
                </div>
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