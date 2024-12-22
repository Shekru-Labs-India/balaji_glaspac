import React,{useState} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
import CatalogueNav from './CatalogueNav';

const FruitJuices = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [activeItem, setActiveItem] = useState('Beer');

  const cards = [

    {
      title: "Süssmost 540g LM3232 900ml",
      artNo: "31915",
      description: "900 ml, Swing closer",
      img: "https://katalog.vetropack.com/static_cache/img/1011084-grid_2.jpg"
    },
    {
      title: "Bordeaux Fruchts.440g MC281G 1000ml",
      artNo: "30342",
      description: "1000 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1002053-grid_2.jpg"
    },
    {
      title: "Bordeaux Fruchtsaft 375g 750ml",
      artNo: "33819",
      description: "750 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1012014-grid_2.jpg"
    },
    {
      title: "Bordeaux Fruchtsaft 375g 750ml",
      artNo: "33818",
      description: "750 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1012013-grid_2.jpg"
    },
    {
      title: "Fruchtsaft Pinta 400g 500ml",
      artNo: "33966",
      description: "500 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1012091-grid_2.jpg"
    },
    {
      title: "Bord. Fruchts.Ret550g MC281G 1000ml",
      artNo: "13775",
      description: "1000 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1003119-grid_2.jpg"
    },
    {
      title: "Sirup 400g MC31,5 700ml",
      artNo: "27064",
      description: "700 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1001177-grid_2.jpg"
    },
    {
      title: "Dječji sok 90g SM26 125ml",
      artNo: "30613",
      description: "125 ml, Special finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009328-grid_2.jpg"
    },
    {
      title: "Sirupflasche 365g MC281G 1000ml",
      artNo: "25866",
      description: "1000 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1002221-grid_2.jpg"
    },
    {
      title: "Vichy Fruchtsaft 390g MC281G 750ml",
      artNo: "20147",
      description: "750 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1007470-grid_2.jpg"
    },
    {
      title: "Bord. Fruchts. Ret 230g KK26 330ml",
      artNo: "13772",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003116-grid_2.jpg"
    },
    {
      title: "Bord. Fruchts. Ret 300g MC281G 500ml",
      artNo: "23799",
      description: "500 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1005092-grid_2.jpg"
    },
    {
      title: "L Fruchtsaft 160g TO38RA 250ml",
      artNo: "32580",
      description: "250 ml, Twist Off",
      img: "https://katalog.vetropack.com/static_cache/img/1011389-grid_2.jpg"
    },
    {
      title: "Juice Fruchtsaft 160g TO53RH 250ml",
      artNo: "18216",
      description: "250 ml, Twist Off",
      img: "https://katalog.vetropack.com/static_cache/img/1003146-grid_2.jpg"
    },
    {
      title: "Juice Fruchtsaft 275g TO53RH 500ml",
      artNo: "18217",
      description: "500 ml, Twist Off",
      img: "https://katalog.vetropack.com/static_cache/img/1003016-grid_2.jpg"
    },
    {
      title: "Juice Fruchtsaft 400g TO53RH 1000ml",
      artNo: "18232",
      description: "1000 ml, Twist Off",
      img: "https://katalog.vetropack.com/static_cache/img/1003018-grid_2.jpg"
    },
    {
      title: "Gourmet Fruchts. 128g TO38RA 200ml",
      artNo: "32702",
      description: "200 ml, Twist Off",
      img: "https://katalog.vetropack.com/static_cache/img/1003302-grid_2.jpg"
    },
    {
      title: "Gourmet Fruchts. 128g TO38RA 200ml",
      artNo: "32703",
      description: "200 ml, Twist Off",
      img: "https://katalog.vetropack.com/static_cache/img/1005898-grid_2.jpg"
    },
    {
      title: "Gourmet Fruchts. 128g TO38RA 200ml",
      artNo: "20898",
      description: "200 ml, Twist Off",
      img: "https://katalog.vetropack.com/static_cache/img/1004974-grid_2.jpg"
    },
    {
      title: "Sok 330g TO43RH 750ml",
      artNo: "26050",
      description: "750 ml, Twist Off",
      img: "https://katalog.vetropack.com/static_cache/img/1006352-grid_2.jpg"
    },
    {
      title: "Fruct 180g TO43RH 300ml",
      artNo: "25312",
      description: "300 ml, Twist Off",
      img: "https://katalog.vetropack.com/static_cache/img/1009930-grid_2.jpg"
    },
    {
      title: "Fruct 330g TO43RH 700ml",
      artNo: "25373",
      description: "700 ml, Twist Off",
      img: "https://katalog.vetropack.com/static_cache/img/1001001-grid_2.jpg"
    },
    {
      title: "Fruct 420g TO43RH 1000ml",
      artNo: "25375",
      description: "1000 ml, Twist Off",
      img: "https://katalog.vetropack.com/static_cache/img/1001002-grid_2.jpg"
    },
    {
      title: "Soczek 160g TO43RH 330ml",
      artNo: "28017",
      description: "330 ml, Twist Off",
      img: "https://katalog.vetropack.com/static_cache/img/1001480-grid_2.jpg"
    },
    {
      title: "Juice Jumbo 440g TO53RH 1000ml",
      artNo: "28039",
      description: "1000 ml, Twist Off",
      img: "https://katalog.vetropack.com/static_cache/img/1001503-grid_2.jpg"
    },
    {
      title: "Juice 135g TO43RH 200ml",
      artNo: "31078",
      description: "200 ml, Twist Off",
      img: "https://katalog.vetropack.com/static_cache/img/1005347-grid_2.jpg"
    },
    {
      title: "Juice 135g TO43RH 200ml",
      artNo: "23683",
      description: "200 ml, Twist Off",
      img: "https://katalog.vetropack.com/static_cache/img/1004297-grid_2.jpg"
    },
    {
      title: "Juice Premium 389g TO43RH 750ml",
      artNo: "26433",
      description: "750 ml, Twist Off",
      img: "https://katalog.vetropack.com/static_cache/img/1003398-grid_2.jpg"
    },
    {
      title: "Juice 360g TO43RH 1000ml",
      artNo: "23531",
      description: "1000 ml, Twist Off",
      img: "https://katalog.vetropack.com/static_cache/img/1009232-grid_2.jpg"
    },
    {
      title: "Juice 320g TO53RH 700ml",
      artNo: "25499",
      description: "700 ml, Twist Off",
      img: "https://katalog.vetropack.com/static_cache/img/1009775-grid_2.jpg"
    },
    {
      title: "Gourmet Fruchts. 170g TO38RA 330ml",
      artNo: "13153",
      description: "330 ml, Twist Off",
      img: "https://katalog.vetropack.com/static_cache/img/1002714-grid_2.jpg"
    },
    {
      title: "Sticla 400g TO53RH 1000ml",
      artNo: "35005",
      description: "1000 ml, Twist Off",
      img: "https://katalog.vetropack.com/static_cache/img/1012604-grid_2.jpg"
    },
    {
      title: "Sticla 320g TO53RH 700ml",
      artNo: "35379",
      description: "700 ml, Twist Off",
      img: "https://katalog.vetropack.com/static_cache/img/1012863-grid_2.jpg"
    },
    {
      title: "Sticla 320g TO53RH 750ml",
      artNo: "35378",
      description: "750 ml, Twist Off",
      img: "https://katalog.vetropack.com/static_cache/img/1012862-grid_2.jpg"
    },
    
  ]

  const filteredCards = cards.filter(
    (card) =>
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.artNo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    
   <>
   <Header/>

<div className="container-fluid mt-4"  >

 
<div className="container-fluid mt-4 mb-5">
<div className="row align-items-center " style={{ marginTop: "150px" }}>
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
  <p className="mb-0 fw-bold">35 results with your filter setting</p>
</div>
</div>
</div>

<CatalogueNav/>

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

<Footer/>
   </>

  )
}

export default FruitJuices