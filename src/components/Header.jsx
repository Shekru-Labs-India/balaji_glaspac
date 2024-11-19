import React from 'react'
import logo from '../assets/img/balaji_glaspac.png'


const Header = () => {
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
                      <i className="bx bxl-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com" target="_blank">
                      <i className="bx bxl-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com" target="_blank">
                      <i className="bx bxl-pinterest-alt" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com" target="_blank">
                      <i className="bx bxl-linkedin" />
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
      <div className="mobile-nav">
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
              <h5 className="mb-0 fw-bold text-white">
                BALAJI <br />
                GLASPAC
              </h5>
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
                  <a href="#" className="nav-link dropdown-toggle active">
                    Home{" "}
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="index.html" className="nav-link">
                        Home Page One
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link dropdown-toggle">
                    Pages <i className="bx bx-chevron-down" />
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="feature.html" className="nav-link">
                        Feature
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="team.html" className="nav-link">
                        Team
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="testimonial.html" className="nav-link">
                        Testimonial
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="faq.html" className="nav-link">
                        FAQ
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="404.html" className="nav-link">
                        404 Error Page
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="coming-soon.html" className="nav-link">
                        Coming Soon
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="privacy-policy.html" className="nav-link">
                        Privacy Policy
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="terms-and-conditions.html" className="nav-link">
                        Terms &amp; Conditions
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="about.html" className="nav-link">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link dropdown-toggle">
                    Services <i className="bx bx-chevron-down" />
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="service.html" className="nav-link">
                        Services Style One
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="service-two.html" className="nav-link">
                        Services Style Two
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="service-three.html" className="nav-link">
                        Services Style Three
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="service-details.html" className="nav-link">
                        Service Details
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link dropdown-toggle">
                    Projects <i className="bx bx-chevron-down" />
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="project.html" className="nav-link">
                        Projects
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="project-details.html" className="nav-link">
                        Project Details
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link dropdown-toggle">
                    Blog <i className="bx bx-chevron-down" />
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="blog.html" className="nav-link">
                        Blog
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="blog-details.html" className="nav-link">
                        Blog Details
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="contact.html" className="nav-link">
                    Contact
                  </a>
                </li>
              </ul>
              <div className="side-nav">
                <a href="contact.html">Get A Quote</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
    {/* End Navbar Area */}
  </>
  

  )
}

export default Header