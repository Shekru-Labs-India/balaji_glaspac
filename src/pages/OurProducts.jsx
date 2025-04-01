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
    <div className="row">
    
  {/* 1. Wine Bottles */}
  <div className="col-sm-6 col-lg-custom mb-2">
    <div className="service-item">
      <img src={service1} alt="Service" />
      <img src={service2} alt="Service" />
      <i className="fa-solid fa-wine-bottle" />
      <h3>
        <Link to="/wine-bottles" onClick={() => window.scrollTo(0, 0)}>Wine Bottles</Link>
      </h3>
      <p title="Premium glass bottles designed specifically for wine packaging, featuring various sizes and styles to meet your needs.">
        Premium glass bottles designed specifically for wine packaging, featuring various sizes and styles to meet your needs.
      </p>
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
      <i className="fa-solid fa-beer-mug-empty" />
      <h3>
        <Link to="/beer-bottles" onClick={() => window.scrollTo(0, 0)}>Beer Bottles</Link>
      </h3>
      <p title="Durable glass bottles perfect for beer packaging, available in multiple colors and sizes for your brewing needs.">
        Durable glass bottles perfect for beer packaging, available in multiple colors and sizes for your brewing needs.
      </p>
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
          <i className="fa-solid fa-whiskey-glass" />
          <h3>
            <Link to="/spirits-bottles"  onClick={() => window.scrollTo(0, 0)}>Spirits Bottles</Link>
          </h3>
          <p title="Elegant glass bottles designed for spirits and liquors,
            featuring premium finishes and distinctive designs.">
            Elegant glass bottles designed for spirits and liquors,
            featuring premium finishes and distinctive designs.
          </p>
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
            <Link to="/champagne-bottles"  onClick={() => window.scrollTo(0, 0)}>Champagne Bottles</Link>
          </h3>
          <p title="Specialized bottles designed to withstand pressure, perfect
            for champagne and sparkling wines.">
            Specialized bottles designed to withstand pressure, perfect
            for champagne and sparkling wines.
          </p>
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
            <Link to="/water-bottles"  onClick={() => window.scrollTo(0, 0)}>Water Bottles</Link>
          </h3>
          <p title="Crystal clear glass bottles for water packaging, available in
            various sizes and designs for pure refreshment.">
            Crystal clear glass bottles for water packaging, available in
            various sizes and designs for pure refreshment.
          </p>
          <Link className="service-link" to="/water-bottles"  onClick={() => window.scrollTo(0, 0)}>
            Read More
          </Link>
        </div>
      </div>

      {/* 6. Juice and Soda Bottles */}
      <div className="col-sm-6 col-lg-custom mb-2">
        <div className="service-item">
          <img src={service1} alt="Service" />
          <img src={service2} alt="Service" />
          <i className="fa-solid fa-glass-water" />
          <h3>
            <Link to="/juice-soda-bottles"  onClick={() => window.scrollTo(0, 0)}>Juice and Soda Bottles</Link>
          </h3>
          <p title="Versatile bottles perfect for beverages, featuring various
            neck finishes and closure options.">
            Versatile bottles perfect for beverages, featuring various
            neck finishes and closure options.
          </p>
          <Link className="service-link" to="/juice-soda-bottles"  onClick={() => window.scrollTo(0, 0)}>
            Read More
          </Link>
        </div>
      </div>

      {/* 7. Specialty Drink Bottles */}
      <div className="col-sm-6 col-lg-custom mb-2">
        <div className="service-item">
          <img src={service1} alt="Service" />
          <img src={service2} alt="Service" />
          <i className="fa-solid fa-martini-glass" />
          <h3>
            <Link to="/specialty-drink-bottles"  onClick={() => window.scrollTo(0, 0)}>
              Specialty Drink Bottles
            </Link>
          </h3>
          <p title="Custom bottles for cold-pressed juices, kombucha, and other
            specialty beverages with unique designs.">
            Custom bottles for cold-pressed juices, kombucha, and other
            specialty beverages with unique designs.
          </p>
          <Link className="service-link" to="/specialty-drink-bottles"  onClick={() => window.scrollTo(0, 0)}>
            Read More
          </Link>
        </div>
      </div>

      {/* 8. Food Jars */}
      <div className="col-sm-6 col-lg-custom mb-2">
        <div className="service-item">
          <img src={service1} alt="Service" />
          <img src={service2} alt="Service" />
          <i className="fa-solid fa-jar" />
          <h3>
            <Link to="/food-jars"  onClick={() => window.scrollTo(0, 0)}>Food Jars</Link>
          </h3>
          <p title=" Wide-mouth jars perfect for food packaging, preserves, and
            condiments with secure sealing options.">
            Wide-mouth jars perfect for food packaging, preserves, and
            condiments with secure sealing options.
          </p>
          <Link className="service-link" to="/food-jars"  onClick={() => window.scrollTo(0, 0)}>
            Read More
          </Link>
        </div>
      </div>

      {/* 9. Oral Liquid Bottles */}
      <div className="col-sm-6 col-lg-custom mb-2">
        <div className="service-item">
          <img src={service1} alt="Service" />
          <img src={service2} alt="Service" />
          <i className="fa-solid fa-prescription-bottle-medical" />
          <h3>
            <Link to="/oral-liquid-bottles"  onClick={() => window.scrollTo(0, 0)}>Oral Liquid Bottles</Link>
          </h3>
          <p title="Pharmaceutical-grade bottles designed for oral medications and
            supplements with precise dosing features.">
            Pharmaceutical-grade bottles designed for oral medications and
            supplements with precise dosing features.
          </p>
          <Link className="service-link" to="/oral-liquid-bottles"  onClick={() => window.scrollTo(0, 0)}>
            Read More
          </Link>
        </div>
      </div>

      {/* 10. Dropper Bottles */}
      <div className="col-sm-6 col-lg-custom mb-2">
        <div className="service-item">
          <img src={service1} alt="Service" />
          <img src={service2} alt="Service" />
          <i className="fa-solid fa-eye-dropper" />
          <h3>
            <Link to="/dropper-bottles"  onClick={() => window.scrollTo(0, 0)}>Dropper Bottles</Link>
          </h3>
          <p title="Precision dropper bottles for essential oils, serums, and
            liquid medications with accurate dispensing.">
            Precision dropper bottles for essential oils, serums, and
            liquid medications with accurate dispensing.
          </p>
          <Link className="service-link" to="/dropper-bottles"  onClick={() => window.scrollTo(0, 0)}>
            Read More
          </Link>
        </div>
      </div>

      {/* 11. Vials and Ampoules */}
      <div className="col-sm-6 col-lg-custom mb-2">
        <div className="service-item">
          <img src={service1} alt="Service" />
          <img src={service2} alt="Service" />
          <i className="fa-solid fa-vial" />
          <h3>
            <Link to="/vials-ampoules"  onClick={() => window.scrollTo(0, 0)}>Vials and Ampoules</Link>
          </h3>
          <p title="High-quality glass vials and ampoules for pharmaceutical and
            laboratory applications with precise specifications.">
            High-quality glass vials and ampoules for pharmaceutical and
            laboratory applications with precise specifications.
          </p>
          <Link className="service-link" to="/vials-ampoules"  onClick={() => window.scrollTo(0, 0)}>
            Read More
          </Link>
        </div>
      </div>

      {/* 12. Tablet and Capsule Bottles */}
      <div className="col-sm-6 col-lg-custom mb-2">
        <div className="service-item">
          <img src={service1} alt="Service" />
          <img src={service2} alt="Service" />
          <i className="fa-solid fa-pills" />
          <h3>
            <Link to="/tablet-capsule-bottles"  onClick={() => window.scrollTo(0, 0)}>
              Tablet and Capsule Bottles
            </Link>
          </h3>
          <p title=" Specialized bottles for tablets and capsules with
            moisture-resistant properties and child-resistant caps.">
            Specialized bottles for tablets and capsules with
            moisture-resistant properties and child-resistant caps.
          </p>
          <Link className="service-link" to="/tablet-capsule-bottles"  onClick={() => window.scrollTo(0, 0)}>
            Read More
          </Link>
        </div>
      </div>

      {/* 13. Specialty Pharmaceutical Bottles */}
      <div className="col-sm-6 col-lg-custom mb-2">
        <div className="service-item">
          <img src={service1} alt="Service" />
          <img src={service2} alt="Service" />
          <i className="fa-solid fa-prescription-bottle" />
          <h3>
            <Link to="/specialty-pharmaceutical-bottles"  onClick={() => window.scrollTo(0, 0)}>
              Specialty Pharmaceutical Bottles
            </Link>
          </h3>
          <p title="Custom pharmaceutical bottles designed for specific medical
            applications with strict quality standards.">
            Custom pharmaceutical bottles designed for specific medical
            applications with strict quality standards.
          </p>
          <Link
            className="service-link"
            to="/specialty-pharmaceutical-bottles"  onClick={() => window.scrollTo(0, 0)}
          >
            Read More
          </Link>
        </div>
      </div>

      {/* 14. Perfume Bottles */}
      <div className="col-sm-6 col-lg-custom mb-2">
        <div className="service-item">
          <img src={service1} alt="Service" />
          <img src={service2} alt="Service" />
          <i className="fa-solid fa-spray-can-sparkles" />
          <h3>
            <Link to="/perfume-bottles"  onClick={() => window.scrollTo(0, 0)}>Perfume Bottles</Link>
          </h3>
          <p title="Elegant and decorative bottles for fragrances, featuring
            sophisticated designs and premium finishes.">
            Elegant and decorative bottles for fragrances, featuring
            sophisticated designs and premium finishes.
          </p>
          <Link className="service-link" to="/perfume-bottles"  onClick={() => window.scrollTo(0, 0)}>
            Read More
          </Link>
        </div>
      </div>

      {/* 15. Lotion and Serum Bottles */}
      <div className="col-sm-6 col-lg-custom mb-2">
        <div className="service-item">
          <img src={service1} alt="Service" />
          <img src={service2} alt="Service" />
          <i className="fa-solid fa-pump-soap" />
          <h3>
            <Link to="/lotion-serum-bottles"  onClick={() => window.scrollTo(0, 0)}>
              Lotion and Serum Bottles
            </Link>
          </h3>
          <p title="Specialized bottles for cosmetic products with various pump
            and dispenser options for optimal usage.">
            Specialized bottles for cosmetic products with various pump
            and dispenser options for optimal usage.
          </p>
          <Link className="service-link" to="/lotion-serum-bottles"  onClick={() => window.scrollTo(0, 0)}>
            Read More
          </Link>
        </div>
      </div>

      {/* 16. Industrial Bottles */}
      <div className="col-sm-6 col-lg-custom mb-2">
        <div className="service-item">
          <img src={service1} alt="Service" />
          <img src={service2} alt="Service" />
          <i className="fa-solid fa-industry" />
          <h3>
            <Link to="/industrial-bottles"  onClick={() => window.scrollTo(0, 0)}>Industrial Bottles</Link>
          </h3>
          <p title="Heavy-duty glass bottles designed for industrial chemicals and
            solutions with safety features.">
            Heavy-duty glass bottles designed for industrial chemicals and
            solutions with safety features.
          </p>
          <Link className="service-link" to="/industrial-bottles"  onClick={() => window.scrollTo(0, 0)}>
            Read More
          </Link>
        </div>
      </div>

      {/* 17. Customizable Bottles */}
      <div className="col-sm-6 col-lg-custom mb-2">
        <div className="service-item">
          <img src={service1} alt="Service" />
          <img src={service2} alt="Service" />
          <i className="fa-solid fa-wand-magic-sparkles" />
          <h3>
            <Link to="/customizable-bottles"  onClick={() => window.scrollTo(0, 0)}>Customizable Bottles</Link>
          </h3>
          <p title="Bespoke bottle solutions with customizable shapes, colors, and
            finishes to match your brand identity.">
            Bespoke bottle solutions with customizable shapes, colors, and
            finishes to match your brand identity.
          </p>
          <Link className="service-link" to="/customizable-bottles"  onClick={() => window.scrollTo(0, 0)}>
            Read More
          </Link>
        </div>
      </div>

      {/* 18. Premium Bottles */}
      <div className="col-sm-6 col-lg-custom mb-2">
        <div className="service-item">
          <img src={service1} alt="Service" />
          <img src={service2} alt="Service" />
          <i className="fa-solid fa-crown" />
          <h3>
            <Link to="/premium-bottles"  onClick={() => window.scrollTo(0, 0)}>Premium Bottles</Link>
          </h3>
          <p title=" Luxury glass bottles with superior quality and distinctive
            designs for high-end products.">
            Luxury glass bottles with superior quality and distinctive
            designs for high-end products.
          </p>
          <Link className="service-link" to="/premium-bottles"  onClick={() => window.scrollTo(0, 0)}>
            Read More
          </Link>
        </div>
      </div>

      {/* 19. Eco-Friendly Bottles */}
      <div className="col-sm-6 col-lg-custom mb-2">
        <div className="service-item">
          <img src={service1} alt="Service" />
          <img src={service2} alt="Service" />
          <i className="fa-solid fa-leaf" />
          <h3>
            <Link to="/eco-friendly-bottles"  onClick={() => window.scrollTo(0, 0)}>Eco-Friendly Bottles</Link>
          </h3>
          <p title="Sustainable glass bottles made with recycled materials and
            eco-conscious manufacturing processes.">
            Sustainable glass bottles made with recycled materials and
            eco-conscious manufacturing processes.
          </p>
          <Link className="service-link" to="/eco-friendly-bottles"  onClick={() => window.scrollTo(0, 0)}>
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