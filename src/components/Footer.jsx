import React from 'react'
import logo from '../assets/img/balaji_glaspac.png'

const Footer = () => {
  return (
    
   <>
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
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
        <div className="col-sm-6 col-lg-3">
          <div className="footer-item">
            <div className="footer-service">
              <h3>Links</h3>
              <ul>
                <li>
                  <a href="index.html" target="_blank">
                    Home
                  </a>
                </li>
                <li>
                  <a href="about.html" target="_blank">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    Products
                  </a>
                </li>
                <li>
                  <a href="contact.html" target="_blank">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="footer-item">
            <div className="footer-service">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="service-details.html" target="_blank">
                    Manufacturing
                  </a>
                </li>
                <li>
                  <a href="service-details.html" target="_blank">
                    Automation
                  </a>
                </li>
                <li>
                  <a href="service-details.html" target="_blank">
                    Commercial
                  </a>
                </li>
                <li>
                  <a href="service-details.html" target="_blank">
                    Healthcare
                  </a>
                </li>
                <li>
                  <a href="service-details.html" target="_blank">
                    Automatic Machine
                  </a>
                </li>
                <li>
                  <a href="service-details.html" target="_blank">
                    Upgrade Data
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="footer-item">
            <div className="footer-touch">
              <h3>Get In Touch</h3>
              <ul>
                <li>
                  <i className="bx bxs-phone-call" />
                  <h4>Phone</h4>
                  <a href="tel:882569756">+91 253 2507474</a>
                </li>
                <li>
                  <i className="bx bx-mail-send" />
                  <h4>Email</h4>
                  <a href="/cdn-cgi/l/email-protection#82ebece4edc2f0ede0f6ebe1ace1edef">
                    <span
                      className="__cf_email__"
                      data-cfemail="5831363e37182a373a2c313b763b3735"
                    >
                      info@balajiglaspac.com
                    </span>
                  </a>
                </li>
                <li>
                  <i className="bx bx-location-plus" />
                  <h4>Address</h4>
                  <span>
                    Head Office – Office No. 05 , 1st Floor, Nivrutti Complex,
                    Near Tractor House, New Mumbai-Agra Road, Dwarka, Nashik –
                    422011. Maharashtra.
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
      <div className="copyright-item">
        <p>
          {" "}
          Powered by{" "}
          <a href="https://shekruweb.com/" target="_blank">
            Shekru Labs India Pvt Ltd
          </a>
        </p>
      </div>
    </div>
  </div>
  {/* End Copyright */}
</>

  {/* End Footer */}
</>

   </>

  )
}

export default Footer