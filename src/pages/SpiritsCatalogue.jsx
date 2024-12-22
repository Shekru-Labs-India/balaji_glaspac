import React,{useState} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
import CatalogueNav from './CatalogueNav';

const SpiritsCatalogue = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [activeItem, setActiveItem] = useState('Beer');

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
  <p className="mb-0 fw-bold">71 results with your filter setting</p>
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

export default SpiritsCatalogue