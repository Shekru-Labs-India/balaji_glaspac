import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import service1 from "../assets/img/home-one/service-shape.png";
import service2 from "../assets/img/home-one/service-shape2.png";

const OurProducts = () => {
  return (
    
    <>
    <Header/>

     {/* Service */}
     <section className="service-area pt-100 pb-70 d-flex flex-column min-vh-100">

     <style>
          {`
          .service-item {
            height: 100%;
            background: #fff;
            border-radius: 5px;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 15px;
          }

          .service-item p {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-bottom: 15px;
            max-width: 100%;
            line-height: 1.5;
            text-align: center;
          }

          .service-item h3 {
            margin: 12px 0;
            text-align: center;
          }

          .service-item i {
            margin: 8px 0;
            font-size: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 40px;
          }

          .service-link {
            margin-top: auto;
            text-align: center;
          }

          .service-item img {
            max-height: 30px;
            width: auto;
          }
          `}
</style>

<div id="our-products">
  <div className="container">
    <div className="section-title">
      <span className="sub-title">Our Services</span>
    </div>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-6 g-3 justify-content-center">
    
  {/* 1. Wine Bottles */}
  <div className="col-sm-6 col-lg-custom mb-2">
    <div className="service-item">
      <img src={service1} alt="Service" />
      <img src={service2} alt="Service" />
      <i className="fa-solid fa-truck-fast " />
      <h3>
        <Link to="/packagingoptions" onClick={() => window.scrollTo(0, 0)}>Packaging Options</Link>
      </h3>
      
      <Link className="service-link" to="/wine-bottles" onClick={() => window.scrollTo(0, 0)}>
        Read More
      </Link>
    </div>
  </div>

      {/* 2. Beer Bottles */}
      <div className="col-sm-6 col-lg-custom mb-2">
    <div className="service-item">
      <img src={service1} alt="Service" />
      <img src={service2} alt="Service" />
      <i className="fa-solid fa-wine-bottle" />
      <h3>
        <Link to="/coloring" onClick={() => window.scrollTo(0, 0)}>Coloring Forehearth Technology</Link>
      </h3>
      
      <Link className="service-link" to="/beer-bottles" onClick={() => window.scrollTo(0, 0)}>
        Read More
      </Link>
    </div>
  </div>

      {/* 3. Spirits Bottles */}
      <div className="col-sm-6 col-lg-custom mb-2">
        <div className="service-item">
          <img src={service1} alt="Service" />
          <img src={service2} alt="Service" />
          <i className="fa-solid fa-house" />
          <h3>
            <Link to="/inhousedesign"  onClick={() => window.scrollTo(0, 0)}>In House Design Studio</Link>
          </h3>
          
          <Link className="service-link" to="/spirits-bottles"  onClick={() => window.scrollTo(0, 0)}>
            Read More
          </Link>
        </div>
      </div>

      {/* 4. Champagne Bottles */}
      <div className="col-sm-6 col-lg-custom mb-2">
        <div className="service-item">
          <img src={service1} alt="Service" />
          <img src={service2} alt="Service" />
          <i className="fa-solid fa-champagne-glasses" />
          <h3>
            <Link to="/appliedceramic"  onClick={() => window.scrollTo(0, 0)}>Applied Ceramic Label</Link>
          </h3>
          
          <Link className="service-link" to="/champagne-bottles"  onClick={() => window.scrollTo(0, 0)}>
            Read More
          </Link>
        </div>
      </div>

      {/* 5. Water Bottles */}
      <div className="col-sm-6 col-lg-custom mb-2">
        <div className="service-item">
          <img src={service1} alt="Service" />
          <img src={service2} alt="Service" />
          <i className="fa-solid fa-bottle-water" />
          <h3>
            <Link to="/coating"  onClick={() => window.scrollTo(0, 0)}>Coating</Link>
          </h3>
          
          <Link className="service-link" to="/water-bottles"  onClick={() => window.scrollTo(0, 0)}>
            Read More
          </Link>
        </div>
      </div>

      
    </div>
  </div>
  </div>
</section>
{/* End Service */}

    <Footer/>
    </>

  )
}

export default OurProducts