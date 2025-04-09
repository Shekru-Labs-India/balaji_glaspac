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
            <span className="sub-title">Our Products</span>
            <h3 className="fw-bold text-white">
              Premium Glass Solutions For Your <span>Business</span>
            </h3>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-6 g-3 justify-content-center">
          
        {/* 1. Pharmaceutical Bottles */}
        <div className="col">
          <div className="service-item">
            <img src={service1} alt="Service" />
            <img src={service2} alt="Service" />
            <i className="fa-solid fa-wine-bottle " />
            <h3>
              <Link to="/PharmaceuticalBottles" onClick={() => window.scrollTo(0, 0)}>Pharmaceutical Bottles</Link>
            </h3>
            <p title="Premium glass bottles designed specifically for wine packaging, featuring various sizes and styles to meet your needs.">
              Premium glass bottles designed specifically for wine packaging, featuring various sizes and styles to meet your needs.
            </p>
            <Link className="service-link" to="/PharmaceuticalBottles" onClick={() => window.scrollTo(0, 0)}>
              Read More
            </Link>
          </div>
        </div>

            {/* 2. Food Containers */}
            <div className="col">
          <div className="service-item">
            <img src={service1} alt="Service" />
            <img src={service2} alt="Service" />
            <i className="fa-solid fa-beer-mug-empty" />
            <h3>
              <Link to="/FoodContainers" onClick={() => window.scrollTo(0, 0)}>Food Containers</Link>
            </h3>
            <p title="Durable glass bottles perfect for beer packaging, available in multiple colors and sizes for your brewing needs.">
              Durable glass bottles perfect for beer packaging, available in multiple colors and sizes for your brewing needs.
            </p>
            <Link className="service-link" to="/FoodContainers" onClick={() => window.scrollTo(0, 0)}>
              Read More
            </Link>
          </div>
        </div>
         

            {/* 3. Liquor Bottles */}
            <div className="col">
              <div className="service-item">
                <img src={service1} alt="Service" />
                <img src={service2} alt="Service" />
                <i className="fa-solid fa-whiskey-glass" />
                <h3>
                  <Link to="/LiquorBottles"  onClick={() => window.scrollTo(0, 0)}>Liquor Bottles</Link>
                </h3>
                <p title="Specialized bottles designed to withstand pressure, perfect
                  for champagne and sparkling wines.">
                  Specialized bottles designed to withstand pressure, perfect
                  for champagne and sparkling wines.
                </p>
                <Link className="service-link" to="/LiquorBottles"  onClick={() => window.scrollTo(0, 0)}>
                  Read More
                </Link>
              </div>
            </div>

             {/* 4. Beverage Bottles */}
          <div className="col">
              <div className="service-item">
                <img src={service1} alt="Service" />
                <img src={service2} alt="Service" />
                <i className="fa-solid fa-champagne-glasses" />
                <h3>
                  <Link to="/BeverageBottles"  onClick={() => window.scrollTo(0, 0)}>Beverage Bottles</Link>
                </h3>
                <p title="Specialized bottles designed to withstand pressure, perfect
                  for champagne and sparkling wines.">
                  Specialized bottles designed to withstand pressure, perfect
                  for champagne and sparkling wines.
                </p>
                <Link className="service-link" to="/BeverageBottles"  onClick={() => window.scrollTo(0, 0)}>
                  Read More
                </Link>
              </div>
            </div>

            {/* 5. Cosmetic and Personal Care */} 
            <div className="col">
              <div className="service-item">
                <img src={service1} alt="Service" />
                <img src={service2} alt="Service" />
                <i className="fa-solid fa-paintbrush" />
                <h3>
                  <Link to="/CosmeticPersonalCare"  onClick={() => window.scrollTo(0, 0)}>Cosmetic and Personal Care</Link>
                </h3>
                <p title="Crystal clear glass bottles for water packaging, available in
                  various sizes and designs for pure refreshment.">
                  Crystal clear glass bottles for water packaging, available in
                  various sizes and designs for pure refreshment.
                </p>
                <Link className="service-link" to="/CosmeticPersonalCare"  onClick={() => window.scrollTo(0, 0)}>
                  Read More
                </Link>
              </div>
            </div>

            {/* 6. Chemicals */}
            <div className="col">
              <div className="service-item">
                <img src={service1} alt="Service" />
                <img src={service2} alt="Service" />
                <i className="fa-solid fa-flask" />
                <h3>
                  <Link to="/Chemicals"  onClick={() => window.scrollTo(0, 0)}>Chemicals</Link>
                </h3>
                <p title="Versatile bottles perfect for beverages, featuring various
                  neck finishes and closure options.">
                  Versatile bottles perfect for beverages, featuring various
                  neck finishes and closure options.
                </p>
                <Link className="service-link" to="/Chemicals"  onClick={() => window.scrollTo(0, 0)}>
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