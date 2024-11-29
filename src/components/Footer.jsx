import React from "react";
import logo from "../assets/img/balaji_glaspac.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleTheme = () => {
    document.body.classList.toggle("theme-dark");
    const themeIcon = document.getElementById("theme-icon");
    if (document.body.classList.contains("theme-dark")) {
      themeIcon.className = "fa-solid fa-moon";
    } else {
      themeIcon.className = "fa-solid fa-sun";
    }
  };

  return (
    <>
      {/* Footer */}
      <footer className="pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-logo">
                  <div className="d-flex align-items-center">
                    <img
                      src={logo}
                      width={50}
                      height="auto"
                      alt="Logo"
                      className="rounded-4"
                    />
                    <div className="d-flex flex-column ms-2">
                      <h5 className="mb-0 fw-bold text-white">
                        BALAJI <br />
                        GLASPAC
                      </h5>
                    </div>
                  </div>
                  <p className="mt-3">
                    Leading Glass Manufacturing Excellence Since 2007
                  </p>
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/profile.php?id=61569130629576"
                        target="_blank"
                      >
                        <i className="fa-brands fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://x.com/balajiglaspac" target="_blank">
                        <i className="fa-brands fa-x-twitter" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/balaji_glaspac?igsh=enY3cWdobXpjY2c5"
                        target="_blank"
                      >
                        <i className="fa-brands fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/balaji-glaspac-95534533b/"
                        target="_blank"
                      >
                        <i className="fa-brands fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-3">
              <div className="footer-item">
                <div className="footer-service">
                  <h3>Products</h3>
                  <ul>
                    <li>
                      <Link to="/wine-bottles">Wine Bottles</Link>
                    </li>
                    <li>
                      <Link to="/beer-bottles">Beer Bottles</Link>
                    </li>
                    <li>
                      <Link to="/spirits-bottles">Spirits Bottles</Link>
                    </li>
                    <li>
                      <Link to="/water-bottles">Water Bottles</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-3">
              <div className="footer-item">
                <div className="footer-service">
                  <h3>Quick Links</h3>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/clients">Clients</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-touch">
                  <h3>Get In Touch</h3>
                  <ul>
                    <li>
                      <i className="fa-solid fa-phone" />
                      <h4>Phone</h4>
                      <a href="tel:+912532507474">+91 253 2507474</a>
                    </li>
                    <li>
                      <i className="fa-solid fa-envelope" />
                      <h4>Email</h4>
                      <a href="mailto:info@balajiglaspac.com">
                        info@balajiglaspac.com
                      </a>
                    </li>
                    <li>
                      <i className="fa-solid fa-location-dot" />
                      <h4>Address</h4>
                      <span>
                        Head Office – Office No. 05 , 1st Floor, Nivrutti
                        Complex, Near Tractor House, New Mumbai-Agra Road,
                        Dwarka, Nashik – 422011. Maharashtra.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <>
        {/* Copyright */}
        <div className="copyright-area">
          <div className="container">
            <div className="copyright-item d-flex justify-content-between align-items-center">
              <p>
                Powered by{" "}
                <a href="https://shekruweb.com/" target="_blank">
                  Shekru Labs India Pvt Ltd
                </a>
              </p>
              <p>© 2024 Balaji Glaspac. All Rights Reserved.</p>
            </div>
          </div>
        </div>
        {/* End Copyright */}
        <div
          id="toTop"
          className="back-to-top-btn"
          style={{ display: "block", cursor: "pointer" }}
          onClick={scrollToTop}
        >
          <i className="fa-solid fa-arrow-up"></i>
        </div>
      </>

      {/* End Footer */}
    </>
  );
};

export default Footer;
