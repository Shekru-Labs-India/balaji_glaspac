import React,{ useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'


import img1 from '../assets/img/img1.jpg'
import img2 from '../assets/img/img2.jpg'
import img3 from '../assets/img/img3.jpg'
import img4 from '../assets/img/img4.jpg'
import img6 from '../assets/img/img6.jpg'
import team1 from '../assets/img/home-one/team1.jpg'
import team2 from '../assets/img/home-one/team2.jpg'
import team3 from '../assets/img/home-one/team3.jpg'
import aboutman from '../assets/img/home-one/about-man.png'
import aboutsignature from '../assets/img/home-one/about-signature.png'
import service1 from '../assets/img/home-one/service-shape.png'
import service2 from '../assets/img/home-one/service-shape2.png'

import about2 from '../assets/img/home-one/about2.png'
import about3 from '../assets/img/home-one/about3.jpg'
import about4 from '../assets/img/home-one/about4.png'
import about5 from '../assets/img/home-one/about5.png'
import cost from '../assets/img/home-one/cost-girl.png'
import benefit from '../assets/img/home-one/benefit-shape.png'

import partner from '../assets/img/home-one/partner-shape.png'
import video1 from '../assets/img/manufacturing.mp4'

const Home = () => {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const $ = window.jQuery;
      // About slider initialization
      $('.about-img-slider').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 3000,
        navText: [
          "<i class='bx bx-left-arrow-alt'></i>",
          "<i class='bx bx-right-arrow-alt'></i>"
        ]
      });

       // Foreign slider initialization
       $('.foreign-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 3000,
        responsive: {
          0: {
            items: 1
          },
          576: {
            items: 2
          },
          768: {
            items: 3
          },
          992: {
            items: 4
          },
          1200: {
            items: 5
          }
        }
      });
    }
  }, []);

 

  return (
    
    <>
    <Header/>
    {/* Banner */}
    <div className="banner-area banner-img-one banner-area-video">
      <video loop 
        muted 
        autoPlay
        playsInline  className="background-video"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida.
              </p>
              <a className="cmn-btn" href="about.html">
                Discover More
                <i className="bx bx-right-arrow-alt" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* End Banner */}
    {/* About */}
    <section className="about-area ptb-100">
      <div className="container">
        <div className="row align-iems-center">
          <div className="col-lg-6">
            <div className="section-title">
              <span className="sub-title">About Us</span>
              <h2>
                Design, Simulate, and Control Your Robotic System with the Action
                SDK
              </h2>
            </div>
            <div className="about-content">
              <p>
                ‘’Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo’’
              </p>
              <ul>
                <li>
                  <i className="bx bx-check" />
                  Full-Service Electrical Layout Design
                </li>
                <li>
                  <i className="bx bx-check" />
                  Writing And Installation
                </li>
                <li>
                  <i className="bx bx-check" />
                  Emergency Power Solution
                </li>
                <li>
                  <i className="bx bx-check" />
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
                <img src={about3} alt="About" />
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
          <span className="sub-title">Services</span>
          <h2>
            Services We Offer You From Our <span>Company</span>
          </h2>
        </div>
        <div className="row">
          <div className="col-sm-6 col-lg-4">
            <div className="service-item">
              <img src={service1} alt="Service" />
              <img src={service2} alt="Service" />
              <i className="flaticon-mechanical-arm" />
              <h3>
                <a href="service-details.html">Industrial Robot</a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore aliqua.
              </p>
              <a className="service-link" href="service-details.html">
                Read More
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="service-item">
              <img src={service1} alt="Service" />
              <img src={service2} alt="Service" />
              <i className="bx bx-bulb" />
              <h3>
                <a href="service-details.html">Unique Technology</a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore aliqua.
              </p>
              <a className="service-link" href="service-details.html">
                Read More
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="service-item">
              <img src={service1} alt="Service" />
              <img src={service2} alt="Service" />
              <i className="flaticon-automation" />
              <h3>
                <a href="service-details.html">Automation Industry</a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore aliqua.
              </p>
              <a className="service-link" href="service-details.html">
                Read More
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="service-item">
              <img src={service1} alt="Service" />
              <img src={service2} alt="Service" />
              <i className="flaticon-lab-tool" />
              <h3>
                <a href="service-details.html">Chemical Research</a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore aliqua.
              </p>
              <a className="service-link" href="service-details.html">
                Read More
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="service-item">
              <img src={service1} alt="Service" />
              <img src={service2} alt="Service" />
              <i className="flaticon-oil-drill" />
              <h3>
                <a href="service-details.html">Oil &amp; Gas Industry</a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore aliqua.
              </p>
              <a className="service-link" href="service-details.html">
                Read More
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="service-item">
              <img src={service1} alt="Service" />
              <img src={service2} alt="Service" />
              <i className="flaticon-robotic-arm" />
              <h3>
                <a href="service-details.html">Mechanical Works</a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore aliqua.
              </p>
              <a className="service-link" href="service-details.html">
                Read More
              </a>
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
    <div className="foreign-area">
      <div className="container-fluid">
        <div className="foreign-slider owl-theme owl-carousel">
          <div className="foreign-item">
            <a href="project-details.html">
              <img src={img1} alt="Foreign" width={354} height={410} />
            </a>
            <div className="foreign-bottom">
              <h3>
                <a href="project-details.html">Dronesense</a>
              </h3>
              <span>Industrial Company</span>
            </div>
          </div>
          <div className="foreign-item">
            <a href="project-details.html">
              <img src={img2} width={354} height={410} alt="Foreign" />
            </a>
            <div className="foreign-bottom">
              <h3>
                <a href="project-details.html">Manufecture Robot</a>
              </h3>
              <span>Industrial Construction</span>
            </div>
          </div>
          <div className="foreign-item">
            <a href="project-details.html">
              <img src={img3} width={354} height={410} alt="Foreign" />
            </a>
            <div className="foreign-bottom">
              <h3>
                <a href="project-details.html">Logistic Transport</a>
              </h3>
              <span>Industrial Company</span>
            </div>
          </div>
          <div className="foreign-item">
            <a href="project-details.html">
              <img src={img1} width={354} height={410} alt="Foreign" />
            </a>
            <div className="foreign-bottom">
              <h3>
                <a href="project-details.html">Healthcare</a>
              </h3>
              <span>Industrial Management</span>
            </div>
          </div>
          <div className="foreign-item">
            <a href="project-details.html">
              <img src={img4} width={354} height={410} alt="Foreign" />
            </a>
            <div className="foreign-bottom">
              <h3>
                <a href="project-details.html">Chemical Research</a>
              </h3>
              <span>Industrial Research</span>
            </div>
          </div>
          <div className="foreign-item">
            <a href="project-details.html">
              <img src={img6} width={354} height={410} alt="Foreign" />
            </a>
            <div className="foreign-bottom">
              <h3>
                <a href="project-details.html">Electronic Waste</a>
              </h3>
              <span>Industrial Company</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* End Foreign */}
    {/* Team */}
    <section className="team-area">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">Team</span>
          <h2>Our Expert Team</h2>
        </div>
        <div className="row">
          <div className="col-sm-6 col-lg-4">
            <div className="team-item">
              <img src={team2} alt="Team" />
              <h3>Andres Pedlock</h3>
              <span>CEO, Company</span>
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
          <div className="col-sm-6 col-lg-4">
            <div className="team-item">
              <img src={team3} alt="Team" />
              <h3>Adam Meir</h3>
              <span>Lead Developer</span>
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
          <div className="col-sm-6 offset-sm-3 offset-lg-0 col-lg-4">
            <div className="team-item">
              <img src={team1} alt="Team" />
              <h3>Jack Farnes</h3>
              <span>Manager of Company</span>
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
    </section>
    {/* End Team */}
    {/* Benefit */}
    <section className="benefit-area">
      <div className="container">
        <div className="benefit-content">
          <div className="section-title">
            <h2>
              Get Benefits of Using Latest Artificial Intelligence Technologies.
            </h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
            suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
            lacus vel facilisis.
          </p>
          <div className="row">
            <div className="col-sm-6 col-lg-6">
              <div className="benefit-inner">
                <i className="flaticon-darts" />
                <h4>Complete Technology Partner</h4>
              </div>
            </div>
            <div className="col-sm-6 col-lg-6">
              <div className="benefit-inner">
                <i className="flaticon-customer" />
                <h4>Backed By 100% Customer References</h4>
              </div>
            </div>
            <div className="col-sm-6 col-lg-6">
              <div className="benefit-inner">
                <i className="flaticon-security-purposes" />
                <h4>Fast, Scalable, &amp; Reliable</h4>
              </div>
            </div>
            <div className="col-sm-6 col-lg-6">
              <div className="benefit-inner">
                <i className="flaticon-artificial-intelligence" />
                <h4>The Emerging Tech Exparts</h4>
              </div>
            </div>
          </div>
          <a className="cmn-btn" href="about.html">
            Know Details
            <i className="bx bx-right-arrow-alt" />
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
                  <i className="bx bx-right-arrow-alt" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Partner */}
    {/* Cost */}
    <section className="cost-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="cost-content">
              <div className="section-title">
                <span className="sub-title">Project</span>
                <h2>Professional, Reliable &amp; Cost Effective</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas.
              </p>
              <ul className="align-items-center">
                <li>
                  <img src={cost} alt="Cost" />
                </li>
                <li>
                  <h4>- Teresa Mera</h4>
                  <span>Developer</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="cost-img">
              <img src={img1} alt="Cost" />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Cost */}
    <Footer/>
  </>
  

  )
}

export default Home