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
     <section className="service-area pt-100 pb-70">

<style>
{`
/* Desktop view - 10 items per row */
@media (min-width: 1400px) {
  .col-lg-custom {
    flex: 0 0 10%;
    max-width: 10%;
    padding: 8px;
  }

  .service-item {
    padding: 12px;
  }

  .service-item i {
    font-size: 20px;
    margin: 8px 0;
    display: flex; /* Centering the icon */
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    height: 40px; /* Set a height for centering */
  }

  .service-item h3 {
    font-size: 14px;
    margin: 8px 0;
    text-align: center; /* Center the title */
  }

  .service-item p {
    font-size: 12px;
    line-height: 1.4;
    margin-bottom: 8px;
    text-align: center; /* Center the paragraph text */
  }

  .service-item .service-link {
    font-size: 12px;
    text-align: center; /* Center the link */
  }

  .service-item img {
    max-height: 30px;
    width: auto;
  }
}

/* Laptop view - 5 items per row */
@media (min-width: 992px) and (max-width: 1399px) {
  .col-lg-custom {
    flex: 0 0 20%;
    max-width: 20%;
  }
}

/* Tablet view */
@media (max-width: 991px) {
  .col-sm-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
}

/* Mobile view */
@media (max-width: 575px) {
  .col-sm-6 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .service-item {
    margin-bottom: 20px; /* Add space at the bottom of each service item */
    padding: 15px; /* Ensure padding is consistent */
    box-sizing: border-box; /* Include padding in width calculations */
  }
}

.service-item {
  height: 100%;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center items in the column */
}

.service-item p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 15px;
  max-width: 100%;
  line-height: 1.5;
}

.service-item h3 {
  margin: 12px 0;
}

.service-item i {
  margin: 8px 0;
}

.service-link {
  margin-top: auto;
}

.container-fluid {
  padding-left: 30px;
  padding-right: 30px;
}

.row {
  margin-left: -8px;
  margin-right: -8px;
}
`}
</style>

<div id="our-products">
  <div className="container-fluid">
    <div className="section-title">
      <span className="sub-title">Our Products</span>
      <h3 className="fw-bold text-white">
        Premium Glass Solutions For Your <span>Business</span>
      </h3>
    </div>
    <div className="row justify-content-center">
    
      {/* 1. Industrial Bottles*/}
      <div className="col-sm-6 col-lg-custom mb-2">
        <div className="service-item">
          <img src={service1} alt="Service" />
          <img src={service2} alt="Service" />
          <i className="fa-solid fa-wine-bottle" />
          <h3>
            <Link to="/industrial-bottles"  onClick={() => window.scrollTo(0, 0)}>Industrial Bottles</Link>
          </h3>
          <p title="Pharmaceutical-grade bottles designed for oral medications and
            supplements with precise dosing features.">
            Pharmaceutical-grade bottles designed for oral medications and
            supplements with precise dosing features.
          </p>
          <Link className="service-link" to="/industrial-bottles"  onClick={() => window.scrollTo(0, 0)}>
            Read More
          </Link>
        </div>
      </div>

      {/* 2.Customizable Bottles*/}
      <div className="col-sm-6 col-lg-custom mb-2">
        <div className="service-item">
          <img src={service1} alt="Service" />
          <img src={service2} alt="Service" />
          <i className="fa-solid fa-wine-bottle" />
          <h3>
            <Link to="/customizable-bottles"  onClick={() => window.scrollTo(0, 0)}>Customizable Bottles</Link>
          </h3>
          <p title="Precision dropper bottles for essential oils, serums, and
            liquid medications with accurate dispensing.">
            Precision dropper bottles for essential oils, serums, and
            liquid medications with accurate dispensing.
          </p>
          <Link className="service-link" to="/customizable-bottles"  onClick={() => window.scrollTo(0, 0)}>
            Read More
          </Link>
        </div>
      </div>

      {/* 3. Premium Bottles*/}
      <div className="col-sm-6 col-lg-custom mb-2">
        <div className="service-item">
          <img src={service1} alt="Service" />
          <img src={service2} alt="Service" />
          <i className="fa-solid fa-beer-mug-empty" />
          <h3>
            <Link to="/premium-bottles"  onClick={() => window.scrollTo(0, 0)}>Premium Bottles</Link>
          </h3>
          <p title="High-quality glass vials and ampoules for pharmaceutical and
            laboratory applications with precise specifications.">
            High-quality glass vials and ampoules for pharmaceutical and
            laboratory applications with precise specifications.
          </p>
          <Link className="service-link" to="/premium-bottles"  onClick={() => window.scrollTo(0, 0)}>
            Read More
          </Link>
        </div>
      </div>


      {/* 5. Eco-Friendly Bottles */}
      <div className="col-sm-6 col-lg-custom mb-2">
        <div className="service-item">
          <img src={service1} alt="Service" />
          <img src={service2} alt="Service" />
          <i className="fa-solid fa-champagne-glasses" />
          <h3>
            <Link to="/eco-friendly-bottles"  onClick={() => window.scrollTo(0, 0)}>
              Eco-Friendly Bottles
            </Link>
          </h3>
          <p title="Custom pharmaceutical bottles designed for specific medical
            applications with strict quality standards.">
            Custom pharmaceutical bottles designed for specific medical
            applications with strict quality standards.
          </p>
          <Link
            className="service-link"
            to="/eco-friendly-bottles"  onClick={() => window.scrollTo(0, 0)}
          >
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