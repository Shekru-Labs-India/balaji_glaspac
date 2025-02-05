import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";


import Header from "../components/Header";
import Footer from "../components/Footer";
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


const Clients = () => {
 

  return (
   
    <>
      <Header />

      {/* Page Title */}
      <div className="page-title-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="title-item">
                <h2>Client</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <span>/</span>
                  </li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Page Title */}

      <section className="py-5 ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mx-auto text-center mt-5 mb-4 mb-lg-0">
              <div className="section-heading title-style5 mt-0 text-center">
                <h5 style={{ color: "#F15A22" }}>
                  <strong>Our Valued Clients</strong>
                </h5>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  loop={true}
  autoplay={{ delay: 2500 }}
  pagination={{ clickable: true, el: ".swiper-pagination" }}
  navigation
  spaceBetween={30}
  slidesPerView="auto"
  breakpoints={{
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 25
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 25
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 30
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 30
    },
    1600: {
      slidesPerView: 7,
      spaceBetween: 30
    }
  }}
>
  {clientLogos.map((client) => (
    <SwiperSlide key={client.id}>
      <div className="text-center">
        <img
          src={client.logo}
          alt={`${client.name} Logo`}
          className="img-fluid client-logo"
          style={{
            width: "clamp(100px, 10vw, 150px)", // Responsive image size
            height: "clamp(100px, 10vw, 150px)", // Responsive image size
            objectFit: "cover",
            borderRadius: "50%",
            border: "2px solid #e9ecef",
            padding: "10px",
            backgroundColor: "#fff",
            transition: "transform 0.3s ease",
            margin: "auto"
          }}
        />
      </div>
    </SwiperSlide>
  ))}
  
  {/* Add custom navigation buttons if needed */}
  <div className="swiper-button-prev"></div>
  <div className="swiper-button-next"></div>
</Swiper>

{/* Pagination Dots */}
<div className="swiper-pagination"></div>

<style>
  {`
    /* Custom styles for better responsiveness */
    .swiper {
      padding: 20px 40px;
    }
    
    .swiper-button-next,
    .swiper-button-prev {
      color: #333;
      background: rgba(255, 255, 255, 0.8);
      width: 35px;
      height: 35px;
      border-radius: 50%;
      &:after {
        font-size: 18px;
      }
    }

    .swiper-pagination-bullet {
      width: 10px;
      height: 10px;
      background: #333;
      opacity: 0.5;
    }

    .swiper-pagination-bullet-active {
      opacity: 1;
    }

    @media (max-width: 768px) {
      .swiper {
        padding: 20px 30px;
      }
      
      .swiper-button-next,
      .swiper-button-prev {
        width: 30px;
        height: 30px;
        &:after {
          font-size: 16px;
        }
      }
    }
  `}
</style>


      <Footer />
    </>
  );
};

export default Clients;
