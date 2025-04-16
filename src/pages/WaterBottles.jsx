import React,{useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

// Import images
import service1 from "../assets/img/home-one/service-shape.png";
import service2 from "../assets/img/home-one/service-shape2.png";
import water1 from "../assets/img/waterbottle (2).jpg";

// Define theme colors
const colors = {
  theme: "#ff5d22", // Main orange theme color
  themeLight: "#ff8f66", // Lighter shade for hovers
  themeDark: "#e54d1a", // Darker shade for active states
  themeOpacity: {
    light: "#ff5d2215", // 15% opacity for light backgrounds
    medium: "#ff5d2230", // 30% opacity for medium emphasis
    high: "#ff5d2250", // 50% opacity for high emphasis
  },
};

const WaterBottles = () => {

   const [searchQuery, setSearchQuery] = useState("");


  const cards = [

    {
      title: "Keule Softdrink 150g DK2615 250ml",
      artNo: "24984",
      description: "250 ml, Twist crown",
      img: "https://katalog.vetropack.com/static_cache/img/1006559-grid_2.jpg"
    },
    {
      title: "Keule softdrink bottle",
      artNo: "17793",
      description: "250 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003782-grid_2.jpg"
    },
    {
      title: "Keule Softdrink 150g KK2615 250ml",
      artNo: "28079",
      description: "250 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001514-grid_2.jpg"
    },
    {
      title: "Keule Softdrink 150g MC281G 250ml",
      artNo: "27909",
      description: "250 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1001448-grid_2.jpg"
    },
    {
      title: "Keule Softdrink 150g MC281G 250ml",
      artNo: "27910",
      description: "250 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1001449-grid_2.jpg"
    },
    {
      title: "Keule Softdrink 150g MC281G 250ml",
      artNo: "27908",
      description: "250 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1001447-grid_2.jpg"
    },
    {
      title: "Keule Softdrink 205g MC281G 330ml",
      artNo: "22008",
      description: "330 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1008455-grid_2.jpg"
    },
    {
      title: "Keule Softdrink 265g MC287R 500ml",
      artNo: "34085",
      description: "500 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1012145-grid_2.jpg"
    },
    {
      title: "Keule Softdrink 265g MC287R 500ml",
      artNo: "33832",
      description: "500 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1012018-grid_2.jpg"
    },
    {
      title: "Keule Softdrink 265g MC287R 500ml",
      artNo: "28080",
      description: "500 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1001515-grid_2.jpg"
    },
    {
      title: "Keule Saftflasche 190g KK 330ml",
      artNo: "37134",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1013356-grid_1.jpg"
    },
    {
      title: "Keule Saftflasche 190g MC287R 330ml",
      artNo: "34060",
      description: "330 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1010816-grid_2.jpg"
    },
    {
      title: "Tropical Tonic 140g KK 200ml",
      artNo: "32111",
      description: "200 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1011141-grid_2.jpg"
    },
    {
      title: "Tropical Tonic 140g MCA28 200ml",
      artNo: "34886",
      description: "200 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1012379-grid_2.jpg"
    },
    {
      title: "Ale 177g KK2615 250ml",
      artNo: "33485",
      description: "250 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1011841-grid_2.jpg"
    },
    {
      title: "Vichy Limo 390g MC281G 750ml",
      artNo: "36350",
      description: "750 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1013307-grid_2.jpg"
    },
    {
      title: "L AF Norm Ret 640g MC281G 1000ml",
      artNo: "13069",
      description: "1000 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1002610-grid_2.jpg"
    },
    {
      title: "Universal Softdr.500g MC281G 1000ml",
      artNo: "18767",
      description: "1000 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1006560-grid_2.jpg"
    },
    {
      title: "Kurzhals Ret 610g LM3231 1000ml",
      artNo: "24352",
      description: "1000 ml, Swing closer",
      img: "https://katalog.vetropack.com/static_cache/img/1009582-grid_2.jpg"
    },
    {
      title: "Einheit Softdr. 500g MC281G 1000ml",
      artNo: "19404",
      description: "1000 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1007024-grid_2.jpg"
    },
    {
      title: "Limo 365g MC287R Ret 500ml",
      artNo: "27086",
      description: "500 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1001187-grid_2.jpg"
    },
    {
      title: "L AF Norm Ret 310g KK2618 350ml",
      artNo: "13066",
      description: "350 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1002608-grid_2.jpg"
    },
    {
      title: "LN LAD 210g DK2618 330ml",
      artNo: "31300",
      description: "330 ml, Twist crown",
      img: "https://katalog.vetropack.com/static_cache/img/1002252-grid_2.jpg"
    },
    {
      title: "Mineral Most Ret 355g KK2613 500ml",
      artNo: "10193",
      description: "500 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001160-grid_2.jpg"
    },
    {
      title: "Mineral Norm Ret 292g KK2613 330ml",
      artNo: "10514",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001430-grid_2.jpg"
    },
    {
      title: "Einwegflasche 150g MC281G 330ml",
      artNo: "28072",
      description: "330 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1002635-grid_2.jpg"
    },
    {
      title: "Einwegflasche 160g MC287R 330ml",
      artNo: "34451",
      description: "330 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1012178-grid_2.jpg"
    },
    {
      title: "Einwegflasche 160g MC287R 330 ml",
      artNo: "33744",
      description: "330 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1010808-grid_2.jpg"
    },
    {
      title: "L AF Norm Ret 640g MC281G 1000ml",
      artNo: "27591",
      description: "1000 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1002611-grid_2.jpg"
    },
    {
      title: "Kropfhals 270g MC281G 250ml",
      artNo: "25968",
      description: "250 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1003183-grid_2.jpg"
    },
    {
      title: "OSTROM VA 190g MC281G 300ml",
      artNo: "30167",
      description: "300 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1009735-grid_2.jpg"
    },
    {
      title: "ZDROJ 190g MC281G 300ml",
      artNo: "31320",
      description: "300 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1010788-grid_2.jpg"
    },
    {
      title: "Radka 345g MC281G 700ml",
      artNo: "27052",
      description: "700 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1001174-grid_2.jpg"
    },
    {
      title: "Radka 345g MC281G 700ml",
      artNo: "30745",
      description: "700 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1003025-grid_2.jpg"
    },
    {
      title: "RADKA 345g MC281G 700ml",
      artNo: "28241",
      description: "700 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1001175-grid_2.jpg"
    },
    {
      title: "OBUS VA 225g KK2612 330ml",
      artNo: "30137",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001912-grid_2.jpg"
    },
    {
      title: "Mineralka 145g MC281G 250ml",
      artNo: "36886",
      description: "250 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1013548-grid_1.jpg"
    },
    {
      title: "Mineralka 145g MC281G 250ml",
      artNo: "36785",
      description: "250 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1013462-grid_2.jpg"
    },
    {
      title: "Mineralka 148g KK2613 250ml",
      artNo: "36263",
      description: "250 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1013243-grid_2.jpg"
    },
    {
      title: "Mineralka 148g KK2613 250ml",
      artNo: "26124",
      description: "250 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003306-grid_2.jpg"
    },
    {
      title: "Mineralka 148g KK2613 250ml",
      artNo: "26123",
      description: "250 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003305-grid_2.jpg"
    },
    {
      title: "Mineralka 151g MC281G 250ml",
      artNo: "33236",
      description: "250 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1011425-grid_2.jpg"
    },
    {
      title: "Mineralka 151g MC281G 250ml",
      artNo: "32659",
      description: "250 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1011426-grid_2.jpg"
    },
    {
      title: "Mineralka 374g MC281G 750ml",
      artNo: "33541",
      description: "750 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1011861-grid_2.jpg"
    },
    {
      title: "Mineralka 374g MC281G 750ml",
      artNo: "25895",
      description: "750 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1002237-grid_2.jpg"
    },
    {
      title: "L AF Norm Ret 310g KK2618 350ml",
      artNo: "13067",
      description: "350 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1002609-grid_2.jpg"
    },
    {
      title: "Aura 280g MC31,5 330ml",
      artNo: "31547",
      description: "330 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1010911-grid_2.jpg"
    },
    {
      title: "Aura 280g PP3115 330ml",
      artNo: "31240",
      description: "330 ml, PP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003043-grid_2.jpg"
    },
    {
      title: "Aura 465g MC31,5 750ml",
      artNo: "32645",
      description: "750 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1011418-grid_2.jpg"
    },
    {
      title: "Nela 190g MC281G 330ml",
      artNo: "21802",
      description: "330 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1008356-grid_2.jpg"
    },
    {
      title: "Nela 190g MC281G 330ml",
      artNo: "31208",
      description: "330 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1010745-grid_2.jpg"
    },
    {
      title: "Radka 190g KK2612 330ml",
      artNo: "23675",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009307-grid_2.jpg"
    },
    {
      title: "RADKA F1 190g MC281G 330ml",
      artNo: "28240",
      description: "330 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1009426-grid_2.jpg"
    },
    {
      title: "Radka 190g MC281G 330ml",
      artNo: "30744",
      description: "330 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1003024-grid_2.jpg"
    },
    {
      title: "Radka 190g MC281G 330ml",
      artNo: "26002",
      description: "330 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1003202-grid_2.jpg"
    },
    {
      title: "Glass bottle Euro 2 BP 500 ml",
      artNo: "30249",
      description: "500 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1002239-grid_2.jpg"
    },
    {
      title: "Glass bottle Euro 2 BP 500 ml",
      artNo: "32551",
      description: "500 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1011378-grid_2.jpg"
    },
    {
      title: "Glass bottle NRW mineral light 500ml",
      artNo: "31143",
      description: "500 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1010877-grid_2.jpg"
    },
    {
      title: "NRW mineral light 500ml",
      artNo: "31130",
      description: "500 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1010878-grid_2.jpg"
    },

  ]

  const filteredCards = cards.filter(
    (card) =>
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.artNo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="pt-5 mt-5">
      <div
    className="position-absolute top-0 start-0 w-100 h-100"
    style={{
      backgroundImage: `url(https://t3.ftcdn.net/jpg/07/86/76/06/360_F_786760607_IwcScz3k7Efj42i1S7mnewhWQXrhAa0o.jpg)`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      filter: "blur(1px)",
      opacity: 0.3,
      zIndex: 0,
    }}
  ></div>
        <div className="container ">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <div className="py-5">
                {/* Title Section */}
                <div className="mb-4">
                  <span
                    className="badge rounded-pill px-3 py-2 mb-3"
                    style={{
                      backgroundColor: colors.themeOpacity.light,
                      color: colors.theme,
                    }}
                  >
                    Pure & Pristine
                  </span>

                  <h1 className="display-4 fw-bold mb-4">
                    Crystal Clear Water Bottles
                  </h1>

                  <p className="lead text-black  mb-5">
                    Premium glass water bottles that combine purity,
                    sustainability, and elegant design for the perfect water
                    drinking experience.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="row g-4 mb-5">
                  {[
                    {
                      icon: "fa-droplet",
                      title: "Crystal Clear Quality",
                      desc: "Premium glass clarity",
                    },
                    {
                      icon: "fa-recycle",
                      title: "Eco-Friendly",
                      desc: "100% recyclable materials",
                    },
                    {
                      icon: "fa-shield",
                      title: "Food-Grade Safety",
                      desc: "Meets highest standards",
                    },
                  ].map((feature, index) => (
                    <div key={index} className="col-md-4">
                      <div className="card border-0 shadow-sm h-100">
                        <div className="card-body p-4 text-center">
                          <div className="d-flex flex-column align-items-center">
                            <div
                              className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                              style={{
                                backgroundColor: colors.themeOpacity.light,
                                width: "70px",
                                height: "70px",
                              }}
                            >
                              <i
                                className={`fa-solid ${feature.icon} fs-3`}
                                style={{ color: colors.theme }}
                              ></i>
                            </div>
                            <div className="feature-content">
                              <h6 className="fw-bold mb-2">{feature.title}</h6>
                              <p className="text-muted mb-0 small">
                                {feature.desc}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons - Using original classes */}
                <div className="d-flex flex-wrap gap-3">
                  <button className="cmn-btn border-0">View Catalog</button>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="col-lg-6 position-relative">
              <div className="hero-image-wrapper h-100 d-flex align-items-center justify-content-center">
                <div className="water-effect"></div>
                <div className="single-bottle-container position-relative w-100 h-100 d-flex align-items-center">
                  <img
                    src={water1}
                    alt="Premium Water Bottle"
                    className="single-bottle floating-animation img-fluid"
                    style={{
                      height: "auto",
                      maxHeight: "100%",
                      width: "100%",
                      objectFit: "contain",
                      objectPosition: "center",
                      padding: "2rem",
                    }}
                  />
                  <div
                    className="bottle-backdrop"
                    style={{
                      position: "absolute",
                      bottom: "2rem",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "80%",
                      height: "20px",
                      filter: "blur(15px)",
                      opacity: "0.2",
                      background: colors.theme,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="product-categories py-5">
        <div className="container">
          <div className="section-title text-center mb-5">
            <span className="sub-title">Our Collection</span>
            <h2>Water Bottle Categories</h2>
          </div>

          <div className="row g-4">
            {[
              {
                icon: "fa-solid fa-bottle-water",
                title: "Still Water Bottles",
                description: "Classic designs for still water packaging",
              },
              {
                icon: "fa-solid fa-burst",
                title: "Sparkling Water Bottles",
                description: "Pressure-resistant bottles for carbonated water",
              },
              {
                icon: "fa-solid fa-leaf",
                title: "Premium Water Bottles",
                description: "Luxury designs for premium water brands",
              },
            ].map((item, index) => (
              <div key={index} className="col-md-6 col-lg-4 d-flex">
                {" "}
                {/* Added d-flex */}
                <div className="service-item w-100">
                  {" "}
                  {/* Added w-100 for full width */}
                  <img src={service1} alt="Service" />
                  <img src={service2} alt="Service" />
                  <i className={item.icon} />
                  <h3>
                    <Link to="#">{item.title}</Link>
                  </h3>
                  <p>{item.description}</p>
                  <Link className="service-link" to="#">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container-fluid mt-5"  >

<div className="container-fluid  mb-5">
<div className="row align-items-center " >
{/* Search field on the left */}
<div className="col-md-4 mb-3 mb-md-0 ">
<label className="form-label fw-bold">Search</label>
<div className="input-group">
<input
type="text"
className="form-control"
placeholder="Article name or number"
value={searchQuery}
onChange={(e) => setSearchQuery(e.target.value)}
/>
<button className="btn btn-outline-secondary" type="button">
<i className="fa-solid fa-magnifying-glass"></i>
</button>
</div>
</div>

{/* Results text aligned beside search field */}
<div className="col-md-4 offset-md-4 text-center text-md-start">
<p className="mb-0 fw-bold">200 results with your filter setting</p>
</div>
</div>
</div>

<div className="row mb-3">




<div className="col-md-12">
<div className="row g-4">
{filteredCards.map((card, index) => (
<div className="col-12 col-md-3" key={index}>
<div className={`card h-100 p-3 ${index === 1 ? "border-primary" : ""}`}>
<h6
className="fw-bold text-truncate-2"
style={{ display: "-webkit-box", WebkitBoxOrient: "vertical", overflow: "hidden", WebkitLineClamp: 2 }}
>
{card.title}
</h6>
<div className="d-flex">
<img
  src={card.img}
  style={{ width: "98px", height: "175px" }}
  className="img-fluid mb-3 me-3"
  alt={card.title}
/>
<div className="d-flex flex-column justify-content-center">
  <p className="text-muted mb-1">
    <strong>Art. No. {card.artNo}</strong>
  </p>
  <p className="mb-1">{card.description}</p>
  
</div>
</div>
</div>
</div>
))}
{filteredCards.length === 0 && (
<div className="col-12">
<p>No results found for "{searchQuery}"</p>
</div>
)}
</div>
</div>



</div>

</div>


      {/* Manufacturing Process */}
      <section className="manufacturing-process py-5 bg-light">
        <div className="container">
          <div className="section-title text-center mb-5">
            <span className="sub-title">Our Process</span>
            <h2>Manufacturing Excellence</h2>
          </div>

          <div className="row g-4">
            {[
              {
                icon: "fa-solid fa-flask",
                title: "Material Selection",
                description: "Premium quality glass materials",
              },
              {
                icon: "fa-solid fa-temperature-high",
                title: "Molding Process",
                description: "Precision temperature control",
              },
              {
                icon: "fa-solid fa-magnifying-glass",
                title: "Quality Testing",
                description: "Rigorous quality checks",
              },
              {
                icon: "fa-solid fa-award",
                title: "Final Inspection",
                description: "Detailed quality assurance",
              },
            ].map((step, index) => (
              <div key={index} className="col-md-6 col-lg-3 d-flex">
                <div className="process-card text-center w-100">
                  <div className="process-icon mb-3">
                    <i
                      className={`${step.icon} fa-2x`}
                      style={{ color: colors.theme }}
                    ></i>
                  </div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default WaterBottles;
