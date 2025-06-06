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
      <footer className="py-5  min-vh-100">
        <div className="container py-5">
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div className="footer-item py-5">
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
                      <h5 className="mb-0 fw-bold text-white fs-1">
                        BALAJI <br />
                        GLASPAC
                      </h5>
                    </div>
                  </div>
                  <p className="mt-3 fs-5 py-5">
                    Leading Glass Manufacturing Excellence Since 2007
                  </p>
                  <ul>
                    <li>
                      <Link
                        to="https://www.facebook.com/profile.php?id=61569130629576"
                        target="_blank"
                      >
                        <i className="fa-brands fa-facebook" />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://x.com/balajiglaspac" target="_blank">
                        <i className="fa-brands fa-x-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.instagram.com/balaji_glaspac?igsh=enY3cWdobXpjY2c5"
                        target="_blank"
                      >
                        <i className="fa-brands fa-instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.linkedin.com/in/balaji-glaspac-95534533b/"
                        target="_blank"
                      >
                        <i className="fa-brands fa-linkedin" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-3">
              <div className="footer-item py-5">
                <div className="footer-service fs-5 py-5">
                  <h3 className="fs-1">Products</h3>
                  <ul>
                    <li>
                      <Link to="/wine-bottles" onClick={() => window.scrollTo(0, 0)}>Wine Bottles</Link>
                    </li>
                    <li>
                      <Link to="/beer-bottles" onClick={() => window.scrollTo(0, 0)}>Beer Bottles</Link>
                    </li>
                    <li>
                      <Link to="/spirits-bottles" onClick={() => window.scrollTo(0, 0)}>Spirits Bottles</Link>
                    </li>
                    <li>
                      <Link to="/water-bottles" onClick={() => window.scrollTo(0, 0)}>Water Bottles</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-3">
              <div className="footer-item py-5">
                <div className="footer-service fs-5 py-5">
                  <h3 className="fs-1">Quick Links</h3>
                  <ul>
                    <li>
                      <Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link>
                    </li>
                    <li>
                      <Link to="/about" onClick={() => window.scrollTo(0, 0)}>About</Link>
                    </li>
                    <li>
                      <Link to="/clients" onClick={() => window.scrollTo(0, 0)}>Clients</Link>
                    </li>
                    <li>
                      <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
           
            <div className="col-6 col-lg-3">
  <div className="footer-item py-5">
    <div className="footer-touch fs-5 py-5">
      <h3 className="fs-1">Get In Touch</h3>
      <ul className="list-unstyled">
        <li className="d-flex align-items-start mb-3">
          <i className="fa-solid fa-phone me-2"></i>
          <div>
            <h4 className="mb-1">Phone</h4>
            <h6 className="text-decoration-none d-block" style={{ color: '#cdcccc', whiteSpace: 'nowrap' }}>
              +91 253 2507474
            </h6>
            <h6 className="text-decoration-none d-block" style={{ color: '#cdcccc', whiteSpace: 'nowrap' }}>
              +91 95611 66665
            </h6>
          </div>
        </li>
        <li className="d-flex align-items-center mb-3">
          <i className="fa-solid fa-envelope me-2"></i>
          <div>
            <h4 className="mb-1">Email</h4>
            <a
              href="mailto:info@balajiglaspac.com"
              className="text-decoration-none d-block"
            >
              info@balajiglaspac.com
            </a>
          </div>
        </li>
        <li className="d-flex align-items-center">
  <i className="fa-solid fa-location-dot me-2"></i>
  <div className="address-container">
    <h4 className="mb-1">Address</h4>
    <h6 className="address-text">
      Head Office – Office No. 05,
      1st Floor, Nivrutti Complex,
      Near Tractor House,
      New Mumbai-Agra Road,
      Dwarka,<br />
      Nashik – 422011.Maharashtra.
    </h6>
  </div>
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
                <Link to="https://shekruweb.com/" target="_blank">
                  Shekru Labs India Pvt Ltd
                </Link>
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
