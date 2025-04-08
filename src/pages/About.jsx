import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import aboutImg from "../assets/img/img2.jpg";
import aboutShape1 from "../assets/img/about2.png";
import aboutShape2 from "../assets/img/img6.jpg";
function About() {
  return (
    <div className="about-wrapper">
      <Header />

      {/* About Section  start*/}
      <section className="about-area ptb-100">
        <div className="container vh-100">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section-title">
                <span className="sub-title">About Us</span>
                <h2>Leading Manufacturer and Exporter of Glass Containers</h2>
              </div>
              <div className="about-content">
                <p>
                  Established in 2007, Balaji Glaspac is a prominent
                  manufacturer, exporter, and supplier of high-quality glass
                  containers, bottles, and tumblers. Our products serve various
                  segments, including pharmaceutical, liquor, beer, food, dairy,
                  and chemical industries. We ensure top-notch quality by
                  manufacturing at our own and associate units across India.
                </p>
                <p>
                  Our extensive product range includes injection vials, nail
                  polish bottles, olive oil bottles, jam jars, honey jars,
                  chemical bottles, and more. We cater to a diverse customer
                  base with products ranging from 5 ml pharmaceutical bottles to
                  4000 ml chemical jars, available in Flint, Amber, and Green
                  colors.
                </p>
                <p>
                Balaji Glaspac is a trusted global sourcing and distribution partner.
                 We specialise in delivering high-quality products and tailored solutions to meet our clients’ diverse needs. 
                 With a deep understanding of market dynamics, robust supply chain networks, and a commitment to excellence,
                  we bridge the gap between manufacturers and end-users across industries. Our mission is to provide seamless, 
                  efficient, and value-driven services that empower businesses to thrive in a competitive landscape.
                </p>
                
              </div>
            </div>
            <div className="col-lg-6  mb-5 pb-5">
              <div className="about-img-wrap">
                <div className="about-img">
                  <img
                    src={aboutImg}
                    alt="About Balaji Glaspac"
                    className="main-img"
                    style={{
                      width: "100%",
                      height: "500px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                </div>
                <div className="about-year">
                  <h2>
                    18 <span>Years</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Section start */}
      <div className="job-area job-area-two job-area-three">
        <div className="container-fluid">
          <div className="row m-0">
            <div className="col-lg-6">
              <div className="">
                <img
                  src={aboutShape2}
                  alt="About Balaji Glaspac"
                  className="main-img"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="job-content">
                <div className="section-title">
                  <h2>Advanced Manufacturing Excellence</h2>
                </div>
                <p>
                  At Balaji Glaspac, we combine traditional glass-making
                  expertise with modern manufacturing technologies. Our
                  state-of-the-art facilities and skilled workforce ensure the
                  highest quality standards while maintaining efficient
                  production processes and environmental responsibility.
                </p>
                <p>
                  Committed to excellence, we stay ahead by embracing the latest
                  trends in the glass market. Our skilled workforce and
                  customer-centric approach enable us to meet the precise needs
                  of our clients. We also offer high-quality glass bottle
                  printing services, ensuring meticulous quality checks at every
                  stage.
                </p>
                <ul>
                  <li>
                    <i className="fa-solid fa-check me-3"></i>
                    Quality Assurance
                  </li>
                  <li>
                    <i className="fa-solid fa-check me-3"></i>
                    Advanced Technology
                  </li>
                  <li>
                    <i className="fa-solid fa-check me-3"></i>
                    Cost Efficiency
                  </li>
                  <li>
                    <i className="fa-solid fa-check me-3"></i>
                    Quick Turnaround
                  </li>
                  <li>
                    <i className="fa-solid fa-check me-3"></i>
                    Sustainable Practices
                  </li>
                  <li>
                    <i className="fa-solid fa-check me-3"></i>
                    Safety Standards
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Counter Section */}
      <section
        className="counter-area pt-100"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${aboutShape1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          color: "#fff",
          padding: "100px 0",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="counter-text">
                <h2 className="text-white">Our Global Impact in Numbers</h2>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-sm-4 col-lg-4">
                  <div className="counter-item">
                    <h3>
                      <span className="odometer text-white" data-count="1226">
                        1226
                      </span>
                    </h3>
                    <p className="text-white">HAPPY CLIENTS</p>
                  </div>
                </div>
                <div className="col-sm-4 col-lg-4">
                  <div className="counter-item">
                    <h3>
                      <span className="odometer text-white" data-count="1552">
                        1552
                      </span>
                    </h3>
                    <p className="text-white">WORKERS</p>
                  </div>
                </div>
                <div className="col-sm-4 col-lg-4">
                  <div className="counter-item">
                    <h3>
                      <span className="odometer text-white" data-count="1000">
                        1000
                      </span>
                    </h3>
                    <p className="text-white">EXPERT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="offer-area offer-area-three pb-100 pt-100">
  <style>
    {`
      .offer-item {
        height: 100%;
        display: flex;
        flex-direction: column;
        background: #fff;
        padding: 30px;
        border-radius: 5px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        min-height: 300px; /* Set minimum height */
      }

      .offer-top {
        margin-bottom: 20px;
      }

      .offer-top i {
        font-size: 40px;
        color: #fa5f0b;
      }

      .offer-bottom {
        flex: 1;
        display: flex;
        flex-direction: column;
      }

      .offer-bottom h3 {
        margin-bottom: 15px;
        font-size: 22px;
      }

      .offer-bottom h3 a {
        color: #022e6b;
        text-decoration: none;
      }

      .offer-bottom p {
        margin: 0;
        color: #666;
        line-height: 1.6;
      }

      /* Ensure consistent spacing in grid */
      .row {
        margin: -15px;
      }

      .col-lg-4 {
        padding: 15px;
      }
    `}
  </style>

  <div className="container">
    <div className="section-title">
      <span className="sub-title">Services</span>
      <h2>Services We Offer You From Our Company</h2>
    </div>
    <div className="row">
      {[

{
  icon: "fa-solid fa-flask",
  title: "Pharmaceutical Packaging",
  description:
    "Specialized glass containers for medicines, vaccines, and healthcare products with highest quality standards.",
},
{
  icon: "fa-solid fa-wine-glass",
  title: "Beverage Bottles",
  description:
    "Premium glass bottles for wines, spirits, beer, and non-alcoholic beverages with custom designs.",
},
{
  icon: "fa-solid fa-spray-can",
  title: "Cosmetic Containers",
  description:
    "Elegant glass packaging solutions for perfumes, lotions, and beauty products with aesthetic appeal.",
},
{
  icon: "fa-solid fa-jar",
  title: "Food Packaging",
  description:
    "Food-grade glass jars and containers ensuring product freshness and safety with reliable sealing.",
},
{
  icon: "fa-solid fa-recycle",
  title: "Sustainable Solutions",
  description:
    "Eco-friendly glass packaging options with recyclable materials and sustainable manufacturing processes.",
},
{
  icon: "fa-solid fa-cog",
  title: "Custom Engineering",
  description:
    "Tailored glass packaging solutions with custom designs, sizes, and specifications for unique requirements.",
},
        
      ].map((service, index) => (
        <div key={index} className="col-lg-4 col-md-6">
          <div className="offer-item">
            <div className="offer-top">
              <i className={service.icon}></i>
            </div>
            <div className="offer-bottom">
              <h3>
                <a className="fw-bold" href="#">{service.title}</a>
              </h3>
              <p>{service.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      <Footer />
    </div>
  );
}

export default About;
