import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import spiritsHero from "../assets/img/spiritBottle.jpg";
import spiritsHero2 from "../assets/img/spiritBottle2.jpg";
import spiritsHero3 from "../assets/img/spiritBottle3.jpg";
import spiritsHero4 from "../assets/img/spiritBottle4.jpg";
import vodka from "../assets/img/vodka.jpg";
import vodka2 from "../assets/img/vodka2.jpg";
import vodka3 from "../assets/img/vodka3.jpg";
import whiskey from "../assets/img/whiskey.jpg";
import whiskey2 from "../assets/img/whiskey2.jpg";
import whiskey3 from "../assets/img/whiskey3.jpg";

const styles = {
  heroSection: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    minHeight: "100vh",
  },
  sectionSpacing: {
    padding: "80px 0",
  },
  featureCard: {
    padding: "30px 20px",
    height: "100%",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 15px rgba(0,0,0,0.05)",
  },
  productCard: {
    height: "100%",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 15px rgba(0,0,0,0.05)",
  },
};

const SpiritsBottles = () => {
  const [activeTab, setActiveTab] = useState("premium");
  const [searchQuery, setSearchQuery] = useState("");

  const cards = [

    {
      title: "Flask Tafla 430g PP2815 500ml",
      artNo: "12620",
      description: "500 ml, PP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1002283-grid_2.jpg"
    },
    {
      title: "Flask Tafla 620g PP2815 1000ml",
      artNo: "26552",
      description: "1000 ml, PP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1008383-grid_2.jpg"
    },
    {
      title: "Flask Meinl 400g PP3121 500ml",
      artNo: "21407",
      description: "500 ml, PP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003898-grid_2.jpg"
    },
    {
      title: "Flask Meinl 630g PP3121 1000ml",
      artNo: "22001",
      description: "1000 ml, PP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003900-grid_2.jpg"
    },
    {
      title: "Flask 185g PP2815 200ml",
      artNo: "26610",
      description: "200 ml, PP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003527-grid_2.jpg"
    },
    {
      title: "Flask 490g BP3121 700ml",
      artNo: "26066",
      description: "700 ml, BVP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003276-grid_2.jpg"
    },
    {
      title: "Flyaga 500ml",
      artNo: "34627",
      description: "500 ml, PP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001460-grid_2.jpg"
    },
    {
      title: "Glass bottle Flask VPG PP 200 ml",
      artNo: "31777",
      description: "200 ml, PP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1011011-grid_2.jpg"
    },
    {
      title: "Vodka 210g PP3032 200ml",
      artNo: "35478",
      description: "200 ml, PP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012928-grid_2.jpg"
    },
    {
      title: "Whisky Vierkant 566g PP3032 700ml",
      artNo: "26111",
      description: "700 ml, PP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003298-grid_2.jpg"
    },
    {
      title: "Sparflasche 605g BP3121 500ml",
      artNo: "10988",
      description: "500 ml, BVP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001080-grid_2.jpg"
    },
    {
      title: "Luccia 426g RB18 500ml",
      artNo: "31136",
      description: "500 ml, Ring cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1010714-grid_2.jpg"
    },
    {
      title: "Cutura 675g PP3121 700ml",
      artNo: "24317",
      description: "700 ml, PP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009570-grid_2.jpg"
    },
    {
      title: "Čutura 675g PP3121 750ml",
      artNo: "14421",
      description: "750 ml, PP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1004080-grid_3.jpg"
    },
    {
      title: "Cristalina 60mm 525g OB18,1 500ml",
      artNo: "15812",
      description: "500 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1005542-grid_2.jpg"
    },
    {
      title: "Triangule 480g WM17,5 200ml",
      artNo: "20212",
      description: "200 ml, Preson finish",
      img: "https://katalog.vetropack.com/static_cache/img/1006235-grid_2.jpg"
    },
    {
      title: "Brandy 545g PP3121 1000ml",
      artNo: "24908",
      description: "1000 ml, PP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009809-grid_2.jpg"
    },
    {
      title: "Lavina Cognac 450g OB16 500ml",
      artNo: "35254",
      description: "500 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1012781-grid_2.jpg"
    },
    {
      title: "Bottle VP spirit 500 ml",
      artNo: "31508",
      description: "500 ml, PP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1002173-grid_2.jpg"
    },
    {
      title: "Brandy 350g PP2800 500ml",
      artNo: "35459",
      description: "500 ml, PP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012914-grid_2.jpg"
    },
    {
      title: "Brandy 450g BV3000 700ml",
      artNo: "35456",
      description: "700 ml, BVS finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012912-grid_2.jpg"
    },
    {
      title: "Spirituosen rund 250g BP3121 350ml",
      artNo: "26549",
      description: "350 ml, BVP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001223-grid_2.jpg"
    },
    {
      title: "Spirituosen rund 300g BP3121 500ml",
      artNo: "24538",
      description: "500 ml, BVP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001371-grid_2.jpg"
    },
    {
      title: "Spirituosen rund 425g BP3121 700ml",
      artNo: "10264",
      description: "700 ml, BVP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001224-grid_2.jpg"
    },
    {
      title: "Spirituosen rund 550g BP3121 1000ml",
      artNo: "10050",
      description: "1000 ml, BVP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001043-grid_2.jpg"
    },
    {
      title: "Vermouth 509g BP3121 1000ml",
      artNo: "33285",
      description: "1000 ml, BVP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1011710-grid_2.jpg"
    },
    {
      title: "Whisky rund 431g PP3121 700ml",
      artNo: "36212",
      description: "700 ml, PP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1013222-grid_2.jpg"
    },
    {
      title: "Alexander 435g PP3115 1000ml",
      artNo: "33820",
      description: "1000 ml, PP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1005892-grid_2.jpg"
    },
    {
      title: "Alexander 320g PP3115 700ml",
      artNo: "23127",
      description: "700 ml, PP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009055-grid_2.jpg"
    },
    {
      title: "Eco Gin 500g OB18,2 500ml",
      artNo: "33220",
      description: "500 ml, Ring cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1011691-grid_2.jpg"
    },
    {
      title: "Eco Gin 550g OB18,2 700ml",
      artNo: "33221",
      description: "700 ml, Ring cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1011694-grid_2.jpg"
    },
    {
      title: "Vodka 638g PP3121 1000ml",
      artNo: "27548",
      description: "1000 ml, PP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001266-grid_2.jpg"
    },
    {
      title: "Lemon 555g PP3121 1000ml",
      artNo: "19541",
      description: "1000 ml, PP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1007091-grid_2.jpg"
    },
    {
      title: "MÜLLER-Platin WM10 100ml",
      artNo: "36613",
      description: "100 ml, Preson finish",
      img: "https://katalog.vetropack.com/static_cache/img/1002774-grid_2.jpg"
    },
    {
      title: "MÜLLER-Platin WM10 100ml",
      artNo: "26009",
      description: "100 ml, Preson finish",
      img: "https://katalog.vetropack.com/static_cache/img/1002773-grid_2.jpg"
    },
    {
      title: "Platin WM16,5 200ml",
      artNo: "22434",
      description: "200 ml, Preson finish",
      img: "https://katalog.vetropack.com/static_cache/img/1002777-grid_2.jpg"
    },
    {
      title: "Platin WM16,5 500ml",
      artNo: "36577",
      description: "500 ml, Preson finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003479-grid_2.jpg"
    },
    {
      title: "Weinbrand 580g PP2815 1000ml",
      artNo: "25632",
      description: "1000 ml, PP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001830-grid_2.jpg"
    },
    {
      title: "Henkel 270g LM3132 200ml",
      artNo: "25878",
      description: "200 ml, Swing closer",
      img: "https://katalog.vetropack.com/static_cache/img/1002231-grid_2.jpg"
    },
    {
      title: "Symphonie63 455g OB16,5 350ml",
      artNo: "12809",
      description: "350 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1002923-grid_2.jpg"
    },
    {
      title: "Symphonie60 500g OB17,5 500ml",
      artNo: "12935",
      description: "500 ml, Top cork",
      img: "https://katalog.vetropack.com/static_cache/img/1002928-grid_2.jpg"
    },
    {
      title: "Nashorn 240g PP2815 350ml",
      artNo: "23868",
      description: "350 ml, PP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1002302-grid_2.jpg"
    },
    {
      title: "Napoleon 370g PP2860 500ml",
      artNo: "21807",
      description: "500 ml, PP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1008358-grid_2.jpg"
    },
    {
      title: "VERSUS 360g PP3144 500ml",
      artNo: "31363",
      description: "500 ml, PP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1010807-grid_2.jpg"
    },
    {
      title: "VERSUS 448g PP3144 700ml",
      artNo: "31362",
      description: "700 ml, PP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1010806-grid_2.jpg"
    },
    {
      title: "VERSUS 546g PP3144 1000ml",
      artNo: "33311",
      description: "1000 ml, PP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1011742-grid_2.jpg"
    },
    {
      title: "VERSUS 546g PP3144 1000ml",
      artNo: "31581",
      description: "1000 ml, PP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1010805-grid_2.jpg"
    },
    {
      title: "LIKER 452g PP3144 700ml",
      artNo: "33212",
      description: "700 ml, PP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1011685-grid_2.jpg"
    },
    {
      title: "LIKER 480g PP3144 1000ml",
      artNo: "33214",
      description: "1000 ml, PP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1011686-grid_2.jpg"
    },
    {
      title: "Konjak 350g PP3121 500ml",
      artNo: "14257",
      description: "500 ml, PP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003914-grid_2.jpg"
    },
    {
      title: "Konjak 350g PP3121 500ml",
      artNo: "30233",
      description: "500 ml, PP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003911-grid_2.jpg"
    },
    {
      title: "Konjak 500g PP3121 1000ml",
      artNo: "15324",
      description: "1000 ml, PP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1004522-grid_2.jpg"
    },
    {
      title: "Konjak 500g PP3121 1000ml",
      artNo: "34644",
      description: "1000 ml, PP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012386-grid_2.jpg"
    },
    {
      title: "Konjak 500g PP3121 1000ml",
      artNo: "30165",
      description: "1000 ml, PP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1004514-grid_2.jpg"
    },
    {
      title: "Bordo 95g SM2012 100ml",
      artNo: "24802",
      description: "100 ml, Special finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003917-grid_2.jpg"
    },
    {
      title: "Bordo 175g PP2815 200ml",
      artNo: "24017",
      description: "200 ml, PP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009448-grid_2.jpg"
    },
    {
      title: "Bordeaux Spirit. 695g PP3115 2000ml",
      artNo: "13138",
      description: "2000 ml, PP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1002689-grid_2.jpg"
    },
    {
      title: "Feine Brände PP3121 700ml",
      artNo: "24030",
      description: "700 ml, PP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1002822-grid_2.jpg"
    },
    {
      title: "Linda 300g PP2815 500ml",
      artNo: "21083",
      description: "500 ml, PP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1007955-grid_2.jpg"
    },
    {
      title: "Lark 420g PP3121 700ml",
      artNo: "22170",
      description: "700 ml, PP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1008348-grid_2.jpg"
    },
    {
      title: "Lark 420g PP3121 700ml",
      artNo: "27088",
      description: "700 ml, PP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001193-grid_2.jpg"
    },
    {
      title: "Lieh 270g PP2815 500ml",
      artNo: "25032",
      description: "500 ml, PP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009849-grid_2.jpg"
    },
    {
      title: "Lieh 425g PP2815 700ml",
      artNo: "26155",
      description: "700 ml, PP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003319-grid_3.jpg"
    },
    {
      title: "Lieh 490g MC281G 1000ml",
      artNo: "32080",
      description: "1000 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1011134-grid_2.jpg"
    },
    {
      title: "Lieh 490g PP2815 1000ml",
      artNo: "26156",
      description: "1000 ml, PP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003320-grid_2.jpg"
    },
    {
      title: "Bordolese Magia70 475g WM18 700ml",
      artNo: "28870",
      description: "700 ml, Preson finish",
      img: "https://katalog.vetropack.com/static_cache/img/1010443-grid_2.jpg"
    },
    {
      title: "Bordolese Magia70 475g WM18 700ml",
      artNo: "28872",
      description: "700 ml, Preson finish",
      img: "https://katalog.vetropack.com/static_cache/img/1010444-grid_2.jpg"
    },
    {
      title: "Vodka 750g PP3144 2000ml",
      artNo: "35012",
      description: "2000 ml, PP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012609-grid_2.jpg"
    },
    {
      title: "Vodka 310g PP2800 500ml",
      artNo: "35462",
      description: "500 ml, PP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012916-grid_2.jpg"
    },
    {
      title: "Zlata 450g PP3144 700ml",
      artNo: "35476",
      description: "700 ml, PP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012927-grid_2.jpg"
    },
    {
      title: "Zlata 560g PP3144 1000ml",
      artNo: "35482",
      description: "1000 ml, PP finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012930-grid_2.jpg"
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

      {/* Hero Section - Adjusted spacing */}
      <div className="position-relative overflow-hidden pt-5">
        <div
          className="hero-diagonal bg-dark text-white py-6"
          style={styles.heroSection}
        >
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-lg-6">
                <h1 className="display-3 fw-bold mb-4">
                  Premium Spirit Bottles
                </h1>
                <p className="lead mb-4">
                  Elevate your brand with our exquisite collection of glass
                  bottles designed specifically for premium spirits and liquors.
                </p>
                <div className="d-flex gap-3">
                  <button className="btn btn-primary btn-lg">
                    Explore Collection
                  </button>
                  <button className="btn btn-outline-light btn-lg">
                    Download Catalog
                  </button>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="position-relative">
                  <img
                    src={spiritsHero}
                    alt="Premium Spirit Bottle"
                    className="img-fluid floating-animation"
                  />
                  <div className="position-absolute top-50 start-50 translate-middle z-n1">
                    <div className="hero-circle"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section - Added consistent spacing */}
      <section style={styles.sectionSpacing}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Our Spirit Bottle Collection</h2>
            <p className="lead text-muted">
              Choose from our extensive range of premium bottles
            </p>
          </div>

          <div className="category-tabs mb-4">
            <ul className="nav nav-pills justify-content-center gap-3">
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    activeTab === "premium" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("premium")}
                >
                  Premium Spirits
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    activeTab === "vodka" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("vodka")}
                >
                  Vodka Bottles
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    activeTab === "whiskey" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("whiskey")}
                >
                  Whiskey Bottles
                </button>
              </li>
            </ul>
          </div>

          <div className="tab-content">
            <div
              className={`tab-pane fade ${
                activeTab === "premium" ? "show active" : ""
              }`}
            >
              <div className="row g-4">
                {/* Premium Spirit Bottles */}
                <div className="col-md-6 col-lg-4">
                  <div className="product-card">
                    <div className="product-image">
                      <img src={spiritsHero2} alt="Premium Bottle" />
                      <div className="product-overlay">
                        <button className="btn btn-light">Quick View</button>
                      </div>
                    </div>
                    <div className="product-details p-3">
                      <h4>Crystal Clear Premium</h4>
                      <p>750ml | Custom Engravings Available</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="badge bg-primary">Best Seller</span>
                        <button className="btn btn-outline-primary btn-sm">
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Add more premium bottles */}

                <div className="col-md-6 col-lg-4">
                  <div className="product-card">
                    <div className="product-image">
                      <img
                        src={spiritsHero3}
                        alt="Premium Bottle"
                        className="img-fluid"
                      />
                      <div className="product-overlay">
                        <button className="btn btn-light">Quick View</button>
                      </div>
                    </div>
                    <div className="product-details p-3">
                      <h4>Crystal Clear Premium</h4>
                      <p>750ml | Custom Engravings Available</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="badge bg-primary">Best Seller</span>
                        <button className="btn btn-outline-primary btn-sm">
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4">
                  <div className="product-card">
                    <div className="product-image">
                      <img
                        src={spiritsHero4}
                        alt="Premium Bottle"
                        className="img-fluid"
                      />
                      <div className="product-overlay">
                        <button className="btn btn-light">Quick View</button>
                      </div>
                    </div>
                    <div className="product-details p-3">
                      <h4>Crystal Clear Premium</h4>
                      <p>750ml | Custom Engravings Available</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="badge bg-primary">Best Seller</span>
                        <button className="btn btn-outline-primary btn-sm">
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vodka Bottles Tab */}
            <div
              className={`tab-pane fade ${
                activeTab === "vodka" ? "show active" : ""
              }`}
            >
              <div className="row g-4">
                <div className="col-md-6 col-lg-4">
                  <div className="product-card">
                    <div className="product-image">
                      <img src={vodka} alt="Vodka Bottle" />
                      <div className="product-overlay">
                        <button className="btn btn-light">Quick View</button>
                      </div>
                    </div>
                    <div className="product-details p-3">
                      <h4>Premium Vodka Bottle</h4>
                      <p>700ml | Frosted Glass Available</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="badge bg-primary">New Arrival</span>
                        <button className="btn btn-outline-primary btn-sm">
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4">
                  <div className="product-card">
                    <div className="product-image">
                      <img src={vodka2} alt="Vodka Bottle" />
                      <div className="product-overlay">
                        <button className="btn btn-light">Quick View</button>
                      </div>
                    </div>
                    <div className="product-details p-3">
                      <h4>Elite Vodka Collection</h4>
                      <p>1000ml | Premium Finish</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="badge bg-primary">Popular</span>
                        <button className="btn btn-outline-primary btn-sm">
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4">
                  <div className="product-card">
                    <div className="product-image">
                      <img src={vodka3} alt="Vodka Bottle" />
                      <div className="product-overlay">
                        <button className="btn btn-light">Quick View</button>
                      </div>
                    </div>
                    <div className="product-details p-3">
                      <h4>Designer Vodka Bottle</h4>
                      <p>500ml | Luxury Edition</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="badge bg-primary">
                          Limited Edition
                        </span>
                        <button className="btn btn-outline-primary btn-sm">
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Whiskey Bottles Tab */}
            <div
              className={`tab-pane fade ${
                activeTab === "whiskey" ? "show active" : ""
              }`}
            >
              <div className="row g-4">
                <div className="col-md-6 col-lg-4">
                  <div className="product-card">
                    <div className="product-image">
                      <img src={whiskey} alt="Whiskey Bottle" />
                      <div className="product-overlay">
                        <button className="btn btn-light">Quick View</button>
                      </div>
                    </div>
                    <div className="product-details p-3">
                      <h4>Classic Whiskey Decanter</h4>
                      <p>750ml | Premium Crystal</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="badge bg-primary">Best Seller</span>
                        <button className="btn btn-outline-primary btn-sm">
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4">
                  <div className="product-card">
                    <div className="product-image">
                      <img src={whiskey2} alt="Whiskey Bottle" />
                      <div className="product-overlay">
                        <button className="btn btn-light">Quick View</button>
                      </div>
                    </div>
                    <div className="product-details p-3">
                      <h4>Vintage Whiskey Bottle</h4>
                      <p>700ml | Antique Finish</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="badge bg-primary">Exclusive</span>
                        <button className="btn btn-outline-primary btn-sm">
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4">
                  <div className="product-card">
                    <div className="product-image">
                      <img src={whiskey3} alt="Whiskey Bottle" />
                      <div className="product-overlay">
                        <button className="btn btn-light">Quick View</button>
                      </div>
                    </div>
                    <div className="product-details p-3">
                      <h4>Square Whiskey Bottle</h4>
                      <p>1000ml | Heavy Base</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="badge bg-primary">Premium</span>
                        <button className="btn btn-outline-primary btn-sm">
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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


      {/* Features Section - Added consistent spacing and card styling */}
      <section className="bg-light" style={styles.sectionSpacing}>
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="fw-bold">Why Choose Our Bottles</h2>
            <p className="lead text-muted">
              Discover the features that set our spirit bottles apart
            </p>
          </div>
          <div className="row g-4">
            <div className="col-md-3">
              <div
                className="feature-card text-center"
                style={styles.featureCard}
              >
                <div className="feature-icon mb-3">
                  <i className="fas fa-award fa-3x text-primary"></i>
                </div>
                <h4>Premium Quality</h4>
                <p>
                  Extra flint glass composition for crystal-clear clarity and
                  premium feel
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="feature-card text-center"
                style={styles.featureCard}
              >
                <div className="feature-icon mb-3">
                  <i className="fas fa-palette fa-3x text-primary"></i>
                </div>
                <h4>Customization</h4>
                <p>
                  Extensive options for embossing, frosting, and custom designs
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="feature-card text-center"
                style={styles.featureCard}
              >
                <div className="feature-icon mb-3">
                  <i className="fas fa-recycle fa-3x text-primary"></i>
                </div>
                <h4>Eco-Friendly</h4>
                <p>
                  Sustainable production with recycled glass options available
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="feature-card text-center"
                style={styles.featureCard}
              >
                <div className="feature-icon mb-3">
                  <i className="fas fa-shield-alt fa-3x text-primary"></i>
                </div>
                <h4>Quality Assured</h4>
                <p>Rigorous testing for durability and leak-proof guarantee</p>
              </div>
            </div>
          </div>
          <div className="row g-4 mt-2">
            <div className="col-md-3">
              <div
                className="feature-card text-center"
                style={styles.featureCard}
              >
                <div className="feature-icon mb-3">
                  <i className="fas fa-box fa-3x text-primary"></i>
                </div>
                <h4>Bulk Orders</h4>
                <p>Flexible quantities with competitive wholesale pricing</p>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="feature-card text-center"
                style={styles.featureCard}
              >
                <div className="feature-icon mb-3">
                  <i className="fas fa-truck fa-3x text-primary"></i>
                </div>
                <h4>Global Shipping</h4>
                <p>Secure packaging and worldwide delivery options</p>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="feature-card text-center"
                style={styles.featureCard}
              >
                <div className="feature-icon mb-3">
                  <i className="fas fa-tools fa-3x text-primary"></i>
                </div>
                <h4>Technical Support</h4>
                <p>Expert guidance on bottle specifications and requirements</p>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="feature-card text-center"
                style={styles.featureCard}
              >
                <div className="feature-icon mb-3">
                  <i className="fas fa-clock fa-3x text-primary"></i>
                </div>
                <h4>Quick Turnaround</h4>
                <p>Fast production and timely delivery commitments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process - Added consistent spacing */}
      <section style={styles.sectionSpacing}>
        <div className="container">
          <h2 className="text-center fw-bold mb-5">
            Our Manufacturing Excellence
          </h2>
          <div className="row g-4">
            {/* Step 1 */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="rounded-circle bg-primary bg-opacity-10 p-3 d-inline-block mb-3">
                    <i className="fas fa-flask fa-2x text-primary"></i>
                  </div>
                  <h4 className="card-title h5 mb-3">Raw Material Selection</h4>
                  <p className="card-text text-muted">
                    Premium quality silica sand and raw materials sourced from
                    trusted suppliers for exceptional clarity.
                  </p>
                  <div className="badge bg-primary">Step 1</div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="rounded-circle bg-primary bg-opacity-10 p-3 d-inline-block mb-3">
                    <i className="fas fa-temperature-high fa-2x text-primary"></i>
                  </div>
                  <h4 className="card-title h5 mb-3">Melting & Refining</h4>
                  <p className="card-text text-muted">
                    Advanced furnace technology ensures perfect melting and
                    removal of impurities.
                  </p>
                  <div className="badge bg-primary">Step 2</div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="rounded-circle bg-primary bg-opacity-10 p-3 d-inline-block mb-3">
                    <i className="fas fa-fill-drip fa-2x text-primary"></i>
                  </div>
                  <h4 className="card-title h5 mb-3">Molding Process</h4>
                  <p className="card-text text-muted">
                    Precision molds and cutting-edge IS machines create
                    perfectly shaped bottles.
                  </p>
                  <div className="badge bg-primary">Step 3</div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="rounded-circle bg-primary bg-opacity-10 p-3 d-inline-block mb-3">
                    <i className="fas fa-temperature-low fa-2x text-primary"></i>
                  </div>
                  <h4 className="card-title h5 mb-3">Annealing</h4>
                  <p className="card-text text-muted">
                    Controlled cooling process ensures optimal strength and
                    durability.
                  </p>
                  <div className="badge bg-primary">Step 4</div>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="rounded-circle bg-primary bg-opacity-10 p-3 d-inline-block mb-3">
                    <i className="fas fa-microscope fa-2x text-primary"></i>
                  </div>
                  <h4 className="card-title h5 mb-3">Quality Inspection</h4>
                  <p className="card-text text-muted">
                    Rigorous testing for defects and compliance with industry
                    standards.
                  </p>
                  <div className="badge bg-primary">Step 5</div>
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="rounded-circle bg-primary bg-opacity-10 p-3 d-inline-block mb-3">
                    <i className="fas fa-paint-brush fa-2x text-primary"></i>
                  </div>
                  <h4 className="card-title h5 mb-3">Surface Treatment</h4>
                  <p className="card-text text-muted">
                    Optional decorating, coating, and finishing for enhanced
                    aesthetics.
                  </p>
                  <div className="badge bg-primary">Step 6</div>
                </div>
              </div>
            </div>

            {/* Step 7 */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="rounded-circle bg-primary bg-opacity-10 p-3 d-inline-block mb-3">
                    <i className="fas fa-box-open fa-2x text-primary"></i>
                  </div>
                  <h4 className="card-title h5 mb-3">Packaging</h4>
                  <p className="card-text text-muted">
                    Secure packaging solutions to ensure safe transportation
                    worldwide.
                  </p>
                  <div className="badge bg-primary">Step 7</div>
                </div>
              </div>
            </div>

            {/* Step 8 */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="rounded-circle bg-primary bg-opacity-10 p-3 d-inline-block mb-3">
                    <i className="fas fa-truck fa-2x text-primary"></i>
                  </div>
                  <h4 className="card-title h5 mb-3">Delivery</h4>
                  <p className="card-text text-muted">
                    Timely shipping and delivery to meet your production
                    schedules.
                  </p>
                  <div className="badge bg-primary">Step 8</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customization Section - Added consistent spacing */}
      <section className="bg-dark text-white" style={styles.sectionSpacing}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="mb-4">Custom Design Options</h2>
              <div className="custom-options">
                <div className="custom-option d-flex align-items-center mb-3">
                  <div className="custom-option-icon me-3">
                    <i className="fas fa-palette fa-2x"></i>
                  </div>
                  <div>
                    <h5 className="mb-1">Color Options</h5>
                    <p className="mb-0">Choose from various glass colors</p>
                  </div>
                </div>
                {/* Add more custom options */}
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src={spiritsHero}
                alt="Customization"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}

      {/* Custom CSS */}

      <Footer />
    </>
  );
};

export default SpiritsBottles;
