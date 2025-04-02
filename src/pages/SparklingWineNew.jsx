import React,{useState} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import wineHero from "../assets/img/WineBottle.jpg";

const SparklingWineNew = () => {
 
    const [searchQuery, setSearchQuery] = useState("");

    const cards = [

  
        {
          title: "Frizzante Burgunder BV3060 750ml",
          artNo: "26801",
          description: "750 ml, BVS finish",
          img: "https://katalog.vetropack.com/static_cache/img/1001023-grid_2.jpg"
        },
        {
          title: "Collio 720g SK17,5 750ml",
          artNo: "30067",
          description: "750 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1001399-grid_2.jpg"
        },
        {
          title: "Emiliana 480g BM17,6 750ml",
          artNo: "22346",
          description: "750 ml, Cork finish",
          img: "https://katalog.vetropack.com/static_cache/img/1004367-grid_2.jpg"
        },
        {
          title: "Emiliana 480g BM17,6 750ml",
          artNo: "22347",
          description: "750 ml, Cork finish",
          img: "https://katalog.vetropack.com/static_cache/img/1004404-grid_2.jpg"
        },
        {
          title: "Glass bottle Dorato 750ml",
          artNo: "32133",
          description: "750 ml, Combined crown finish",
          img: "https://katalog.vetropack.com/static_cache/img/1011152-grid_2.jpg"
        },
        {
          title: "Glass bottle Dorato 750ml",
          artNo: "32132",
          description: "750 ml, Combined crown finish",
          img: "https://katalog.vetropack.com/static_cache/img/1011151-grid_2.jpg"
        },
        {
          title: "Glass bottle Dorato 750ml",
          artNo: "32134",
          description: "750 ml, Combined crown finish",
          img: "https://katalog.vetropack.com/static_cache/img/1011153-grid_2.jpg"
        },
        {
          title: "Frizz. BG Antea70 700g BM17,5 750ml",
          artNo: "28767",
          description: "750 ml, Cork finish",
          img: "https://katalog.vetropack.com/static_cache/img/1010388-grid_3.jpg"
        },
        {
          title: "Frizz. BG Nuova70 550g BM17,5 750ml",
          artNo: "28778",
          description: "750 ml, Cork finish",
          img: "https://katalog.vetropack.com/static_cache/img/1010396-grid_3.jpg"
        },
        {
          title: "Frizz. BG Nuova70 550g BM17,5 750ml",
          artNo: "28851",
          description: "750 ml, Cork finish",
          img: "https://katalog.vetropack.com/static_cache/img/1010428-grid_2.jpg"
        },
        {
          title: "Frizz. BG Sole70 600g BM17,5 750ml",
          artNo: "28657",
          description: "750 ml, Cork finish",
          img: "https://katalog.vetropack.com/static_cache/img/1010341-grid_2.jpg"
        },
        {
          title: "Frizz.Ren.Nouv.70 550g BM17,5 750ml",
          artNo: "28852",
          description: "750 ml, Cork finish",
          img: "https://katalog.vetropack.com/static_cache/img/1010429-grid_2.jpg"
        },
        {
          title: "Frizz.Ren.Nouv.70 550g OB17,5 750ml",
          artNo: "28403",
          description: "750 ml, Top cork",
          img: "https://katalog.vetropack.com/static_cache/img/1010201-grid_2.jpg"
        },
        {
          title: "Frizz. BG Nuova70 400g BM17,5 375ml",
          artNo: "28421",
          description: "375 ml, Cork finish",
          img: "https://katalog.vetropack.com/static_cache/img/1010208-grid_2.jpg"
        },
        {
          title: "FrizzBG Cantina70 550g BM17,5 750ml",
          artNo: "28538",
          description: "750 ml, Top cork",
          img: "https://katalog.vetropack.com/static_cache/img/1010272-grid_3.jpg"
        },
        {
          title: "FZ BG Trad.55 550g BM17,5 750ml",
          artNo: "28714",
          description: "750 ml, Cork finish",
          img: "https://katalog.vetropack.com/static_cache/img/1010367-grid_3.jpg"
        },
        {
          title: "FZ BG Fashion PK80 550gSK17,6 750ml",
          artNo: "28619",
          description: "750 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1010320-grid_2.jpg"
        },
        {
          title: "FrizzBG pesante65 1200g BM17,5 750ml",
          artNo: "28734",
          description: "750 ml, Cork finish",
          img: "https://katalog.vetropack.com/static_cache/img/1010373-grid_2.jpg"
        },
        {
          title: "FrizzBG Supreme90 600g BM17,5 750ml",
          artNo: "28614",
          description: "750 ml, Cork finish",
          img: "https://katalog.vetropack.com/static_cache/img/1010317-grid_2.jpg"
        },
        {
          title: "Frizz.Ren.Punto70 700g OB17,5 750ml",
          artNo: "28548",
          description: "750 ml, Top cork",
          img: "https://katalog.vetropack.com/static_cache/img/1010278-grid_2.jpg"
        },
        {
          title: "CH TOSCA LEG90 640g SK17,6 750ml",
          artNo: "36452",
          description: "750 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1013359-grid_2.jpg"
        },
        {
          title: "SP BACCO NEW90 600g SK17,6 750ml",
          artNo: "36416",
          description: "750 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1013343-grid_2.jpg"
        },
        {
          title: "SP Collio Leg90 600g SK17,6 750ml",
          artNo: "36401",
          description: "750 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1013337-grid_3.jpg"
        },
        {
          title: "Sekt 550g KK2918 700ml",
          artNo: "18389",
          description: "700 ml, Crown finish",
          img: "https://katalog.vetropack.com/static_cache/img/1001215-grid_2.jpg"
        },
        {
          title: "Sekt 550g KK2918 700ml",
          artNo: "36129",
          description: "700 ml, Crown finish",
          img: "https://katalog.vetropack.com/static_cache/img/1013188-grid_2.jpg"
        },
        {
          title: "Sekt ES 610g SK18 750ml",
          artNo: "35913",
          description: "750 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1009463-grid_2.jpg"
        },
        {
          title: "Sekt ES 610g SK18 750ml",
          artNo: "22466",
          description: "750 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1008728-grid_2.jpg"
        },
        {
          title: "Sekt ES 610g SK18 750ml",
          artNo: "23836",
          description: "750 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1009350-grid_2.jpg"
        },
        {
          title: "Sekt Meth. Trad. 775g SK17.5 750ml",
          artNo: "26980",
          description: "750 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1003206-grid_2.jpg"
        },
        {
          title: "Frizzante Sektfl. 610g BVS 750ml",
          artNo: "30347",
          description: "750 ml, BVS finish",
          img: "https://katalog.vetropack.com/static_cache/img/1002064-grid_2.jpg"
        },
        {
          title: "Sekt 206g MC281G 200ml",
          artNo: "36020",
          description: "200 ml, MCA",
          img: "https://katalog.vetropack.com/static_cache/img/1013111-grid_2.jpg"
        },
        {
          title: "Sekt 206g MC281G 200ml",
          artNo: "31482",
          description: "200 ml, MCA",
          img: "https://katalog.vetropack.com/static_cache/img/1003325-grid_2.jpg"
        },
        {
          title: "Sekt 206g MC281G 200ml",
          artNo: "33356",
          description: "200 ml, MCA",
          img: "https://katalog.vetropack.com/static_cache/img/1003431-grid_2.jpg"
        },
        {
          title: "Sekt Magnum 1500g SK18 1500ml",
          artNo: "22174",
          description: "1500 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1005243-grid_2.jpg"
        },
        {
          title: "SP Collio Light 600g SK17,6 750ml",
          artNo: "28050",
          description: "750 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1001509-grid_2.jpg"
        },
        {
          title: "SP Flute sekt bottle 750g 750ml",
          artNo: "28049",
          description: "750 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1001508-grid_2.jpg"
        },
        {
          title: "Mols 580g MC281G 750ml",
          artNo: "30633",
          description: "750 ml, MCA",
          img: "https://katalog.vetropack.com/static_cache/img/1003342-grid_2.jpg"
        },
        {
          title: "SPUMANTE RUSCO 750g BM17,6 750ml",
          artNo: "28284",
          description: "750 ml, Cork finish",
          img: "https://katalog.vetropack.com/static_cache/img/1001290-grid_2.jpg"
        },
        {
          title: "SPUMANTE RUSCO 750g BM17,6 750ml",
          artNo: "31254",
          description: "750 ml, Cork finish",
          img: "https://katalog.vetropack.com/static_cache/img/1010774-grid_4.jpg"
        },
        {
          title: "Spumante Club 600g SK18 750ml",
          artNo: "26190",
          description: "750 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1003348-grid_2.jpg"
        },
        {
          title: "Spumante Club 600g SK18 750ml",
          artNo: "26459",
          description: "750 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1003426-grid_2.jpg"
        },
        {
          title: "Spumante Club 600g SK18 750ml",
          artNo: "27655",
          description: "750 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1001302-grid_2.jpg"
        },
        {
          title: "Spumante Club 600g SK18 750ml",
          artNo: "27075",
          description: "750 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1001183-grid_2.jpg"
        },
        {
          title: "Sparkling avia 200ml",
          artNo: "32370",
          description: "200 ml, MCA",
          img: "https://katalog.vetropack.com/static_cache/img/1002183-grid_2.jpg"
        },
        {
          title: "Glass botlle Sparkling avia 200 ml",
          artNo: "30156",
          description: "200 ml, MCA",
          img: "https://katalog.vetropack.com/static_cache/img/1010052-grid_2.jpg"
        },
        {
          title: "Glass bottle Raud sparkling SK 750ml",
          artNo: "31660",
          description: "750 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1010914-grid_2.jpg"
        },
        {
          title: "Bottle Raud sparkling 750 ml",
          artNo: "30963",
          description: "750 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1002348-grid_3.jpg"
        },
        {
          title: "Glass bottle Raud sparkling 750 ml",
          artNo: "27547",
          description: "750 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1001265-grid_2.jpg"
        },
        {
          title: "Spum.Norma90 RP40 750g SK17,6 750ml",
          artNo: "28864",
          description: "750 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1010439-grid_2.jpg"
        },
        {
          title: "Spum Enovitis 700g SK17,5 750ml",
          artNo: "28569",
          description: "750 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1010291-grid_2.jpg"
        },
        {
          title: "Spumante Tosca80 750g OB18,5 750ml",
          artNo: "30427",
          description: "750 ml, Top cork",
          img: "https://katalog.vetropack.com/static_cache/img/1002069-grid_2.jpg"
        },
        {
          title: "Spum.Tosca80 RP40 750g SK17,6 750ml",
          artNo: "28473",
          description: "750 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1010243-grid_2.jpg"
        },
        {
          title: "Spumante Tosca80 750g SK17,6 750ml",
          artNo: "30424",
          description: "750 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1010465-grid_4.jpg"
        },
        {
          title: "Spumante Collina80 750gKM17,6 750ml",
          artNo: "28774",
          description: "750 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1010393-grid_2.jpg"
        },
        {
          title: "Spum. Artu Legg 750g SK17,6 750ml",
          artNo: "32291",
          description: "750 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1011248-grid_2.jpg"
        },
        {
          title: "Spum. Artu Legg 750g SK17,6 750ml",
          artNo: "32292",
          description: "750 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1011249-grid_2.jpg"
        },
        {
          title: "Sparkling 600g SK17,5 750ml",
          artNo: "35095",
          description: "750 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1012667-grid_2.jpg"
        },
        {
          title: "Sparkling 600g SK17,5 750ml",
          artNo: "35094",
          description: "750 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1012666-grid_2.jpg"
        },
        {
          title: "Champagne COLLIO 700g SK17,6 750ml",
          artNo: "35113",
          description: "750 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1012682-grid_2.jpg"
        },
        {
          title: "Champagne COLLIO 700g SK17,5 750ml",
          artNo: "35114",
          description: "750 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1012681-grid_2.jpg"
        },
        {
          title: "Champagne 680g SK17,5 750ml",
          artNo: "35118",
          description: "750 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1012686-grid_2.jpg"
        },
        {
          title: "Champagne 680g SK17,5 750ml",
          artNo: "35117",
          description: "750 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1012685-grid_2.jpg"
        },
        {
          title: "Sekt 800g SK17,6 750ml",
          artNo: "36056",
          description: "750 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1013143-grid_2.jpg"
        },
        {
          title: "Sekt 800g SK17,6 750ml",
          artNo: "31578",
          description: "750 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1009349-grid_3.jpg"
        },
        {
          title: "Sekt 800g SK17,6 750ml",
          artNo: "23906",
          description: "750 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1002830-grid_2.jpg"
        },
        {
          title: "Sekt 800g SK17,6 750ml",
          artNo: "21308",
          description: "750 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1002829-grid_2.jpg"
        },
        {
          title: "Sekt 1700g SK17,6 1500ml",
          artNo: "23000",
          description: "1500 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1002945-grid_2.jpg"
        },
        {
          title: "Šampanija classic 835g SK17,6 750ml",
          artNo: "26535",
          description: "750 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1003467-grid_2.jpg"
        },
        {
          title: "Šampanija classic 835g SK17,6 750ml",
          artNo: "26536",
          description: "750 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1003468-grid_2.jpg"
        },
        {
          title: "Penina 900g SK17,6 750ml",
          artNo: "23473",
          description: "750 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1006492-grid_2.jpg"
        },
        {
          title: "Penina 900g SK17,6 750ml",
          artNo: "25598",
          description: "750 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1001811-grid_2.jpg"
        },
        {
          title: "Sekt 480g SK17,6 375ml",
          artNo: "20902",
          description: "375 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1005231-grid_2.jpg"
        },
        {
          title: "Spumante AIDA 900g SK17,6 750ml",
          artNo: "28662",
          description: "750 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1010345-grid_4.jpg"
        },
        {
          title: "Spum. Aida90 1750g SK17,6 1500ml",
          artNo: "28696",
          description: "1500 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1010361-grid_2.jpg"
        },
        {
          title: "Spum. Nizza100 900g SK17,6 750ml",
          artNo: "29274",
          description: "750 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1010397-grid_3.jpg"
        },
        {
          title: "Spumante Artù90 900g SK17,6 750ml",
          artNo: "28809",
          description: "750 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1010411-grid_3.jpg"
        },
        {
          title: "Spum. Artù90 CT 900g SK17,6 750ml",
          artNo: "28514",
          description: "750 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1010259-grid_2.jpg"
        },
        {
          title: "Spum. Magnum90 1750g SK17,6 1500ml",
          artNo: "31927",
          description: "1500 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1010289-grid_2.jpg"
        },
        {
          title: "Spumante Artù70 500g SK17,6 375ml",
          artNo: "28932",
          description: "375 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1010475-grid_3.jpg"
        },
        {
          title: "Champagne 835g SK17,6 750ml",
          artNo: "36283",
          description: "750 ml, Crown finish spumante",
          img: "https://katalog.vetropack.com/static_cache/img/1013240-grid_2.jpg"
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

  <div
          className="hero-section position-relative"
          style={{
            backgroundImage: `url(${wineHero})`,
            height: "180px",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="position-absolute top-0 start-0 w-100 h-100 bg-dark"
            style={{ opacity: "0.5" }}
          ></div>
          <div className="container position-relative h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <div className="text-center text-white mt-5">
                <h1 className="display-3 fw-bold">
                  Wine Bottles Manufacturing
                </h1>
                <p className="lead mb-0">
                  Premium Glass Solutions for the Wine Industry
                </p>
              </div>
            </div>
          </div>
        </div>

         
                  
                 
      <div className="container-fluid py-0"  >

      <h2 className="text-center fw-bold mb-5">
                    Our Wine Bottle Collection
                  </h2>

<div className="container-fluid  py-0">
<div className="row align-items-center " style={{ marginTop: "50px" }}>
{/* Search field on the left */}
<div className="col-md-4 mb-3 mb-md-0 py-3 ">
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
                
              
        
  

  <Footer/>
  </>

  )
}

export default SparklingWineNew