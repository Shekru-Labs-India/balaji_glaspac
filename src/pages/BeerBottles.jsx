import React,{useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import beerHero from "../assets/img/BeerBottle.jpg";
import BeerBottle2 from "../assets/img/BeerBottle2.jpg";
import BeerBottle3 from "../assets/img/BeerBottle3.jpg";
import BeerBottle4 from "../assets/img/BeerBottle4.jpg";

const BeerBottles = () => {

   const [searchQuery, setSearchQuery] = useState("");

  const cards = [
 
    {
      title: "Ale Premium Ret 285g KK2618 330ml",
      artNo: "19437",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1006476-grid_2.jpg"
    },
    {
      title: "Ale Premium RET 285g KK2618 330ml",
      artNo: "30268",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001248-grid_2.jpg"
    },
    {
      title: "A Bier 175g DK2613 330ml",
      artNo: "25681",
      description: "330 ml, Twist crown",
      img: "https://katalog.vetropack.com/static_cache/img/1001855-grid_2.jpg"
    },
    {
      title: "A Bier 194g KK2613 330ml",
      artNo: "26415",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003383-grid_2.jpg"
    },
    {
      title: "Ale ET 217H 195g DK2613 330ml",
      artNo: "25695",
      description: "330 ml, Twist crown",
      img: "https://katalog.vetropack.com/static_cache/img/1001866-grid_2.jpg"
    },
    {
      title: "Ale ET 217H 195g 330ml",
      artNo: "31529",
      description: "330 ml, Twist crown",
      img: "https://katalog.vetropack.com/static_cache/img/1001821-grid_2.jpg"
    },
    {
      title: "Ale ET 217H 195g DK2613 330ml",
      artNo: "25620",
      description: "330 ml, Twist crown",
      img: "https://katalog.vetropack.com/static_cache/img/1001822-grid_3.jpg"
    },
    {
      title: "Ale ET 217H 195g DK2613 330ml",
      artNo: "25690",
      description: "330 ml, Twist crown",
      img: "https://katalog.vetropack.com/static_cache/img/1001862-grid_2.jpg"
    },
    {
      title: "Ale ET 217H 195g KK2613 330ml",
      artNo: "24366",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009600-grid_2.jpg"
    },
    {
      title: "Ale ET 217H 195g KK2613 330ml",
      artNo: "33169",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003237-grid_2.jpg"
    },
    {
      title: "Ale ET 217H 195g KK2613 330ml",
      artNo: "24370",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009588-grid_2.jpg"
    },
    {
      title: "Ale ET 219H 199g MC281G 330ml",
      artNo: "34025",
      description: "330 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1009590-grid_2.jpg"
    },
    {
      title: "Ale ET 219H 199g MC281G 330ml",
      artNo: "27196",
      description: "330 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1001243-grid_2.jpg"
    },
    {
      title: "Ale ET 219H 199g MC281G 330ml",
      artNo: "34883",
      description: "330 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1012507-grid_2.jpg"
    },
    {
      title: "Ale 205H 185g KK2618 250ml",
      artNo: "25109",
      description: "250 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009869-grid_2.jpg"
    },
    {
      title: "Ale 205H 185g KK2618 250ml",
      artNo: "25107",
      description: "250 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009868-grid_2.jpg"
    },
    {
      title: "Ale 201H 170g DK2613 330ml",
      artNo: "26138",
      description: "330 ml, Twist crown",
      img: "https://katalog.vetropack.com/static_cache/img/1001779-grid_2.jpg"
    },
    {
      title: "Glass bottle 33cl Ale leicht-170g",
      artNo: "31744",
      description: "330 ml, Twist crown",
      img: "https://katalog.vetropack.com/static_cache/img/1001458-grid_2.jpg"
    },
    {
      title: "Longneck Ret 290H 570g KK2917 750ml",
      artNo: "27043",
      description: "750 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001171-grid_2.jpg"
    },
    {
      title: "Longneck Ret 289H 562g KK2616 750ml",
      artNo: "35802",
      description: "750 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1013002-grid_2.jpg"
    },
    {
      title: "Longneck Ret 290H 570g RB18,5 750ml",
      artNo: "27044",
      description: "750 ml, Ring cork finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001172-grid_2.jpg"
    },
    {
      title: "Longneck 205g KK2618 330ml",
      artNo: "28113",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001523-grid_2.jpg"
    },
    {
      title: "Longneck 205g KK2618 330ml",
      artNo: "32160",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1011167-grid_2.jpg"
    },
    {
      title: "Longneck 125g KK2613 150ml",
      artNo: "31563",
      description: "150 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1010915-grid_2.jpg"
    },
    {
      title: "Longneck Ret 435g KK2613 330ml",
      artNo: "15871",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1002575-grid_2.jpg"
    },
    {
      title: "Ale 264H 260g KK2613 500ml",
      artNo: "18593",
      description: "500 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1006471-grid_2.jpg"
    },
    {
      title: "Ale 264H 260g KK2613 500ml",
      artNo: "22916",
      description: "500 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1008806-grid_2.jpg"
    },
    {
      title: "Ale 264H 260g KK2613 500ml",
      artNo: "26075",
      description: "500 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003279-grid_2.jpg"
    },
    {
      title: "Ale 266H 264g MC281G 500ml",
      artNo: "36604",
      description: "500 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1013422-grid_2.jpg"
    },
    {
      title: "Silenus Ale 270g KK2613 500ml",
      artNo: "25013",
      description: "500 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009500-grid_2.jpg"
    },
    {
      title: "Silenus Ale 270g KK2613 500ml",
      artNo: "23967",
      description: "500 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009413-grid_2.jpg"
    },
    {
      title: "Silenus Ale 205g KK2613 330ml",
      artNo: "24120",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009499-grid_2.jpg"
    },
    {
      title: "Silenus Ale 205g KK2613 330ml",
      artNo: "23965",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009412-grid_2.jpg"
    },
    {
      title: "Standard Ale Ret KK2618 330ml",
      artNo: "26805",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001028-grid_2.jpg"
    },
    {
      title: "Gundola 225g KK2613 330ml",
      artNo: "31806",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1011028-grid_2.jpg"
    },
    {
      title: "LONGNECK VA 190g KK2618 330ml",
      artNo: "36950",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1013576-grid_1.jpg"
    },
    {
      title: "Longneck LP 237H 210g KK2618 330ml",
      artNo: "32363",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1011290-grid_2.jpg"
    },
    {
      title: "Longneck LP 237H 210g KK2618 330ml",
      artNo: "32364",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1011291-grid_2.jpg"
    },
    {
      title: "LN Ret BNR 218H 280g KK2612 330ml",
      artNo: "20793",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1005811-grid_2.jpg"
    },
    {
      title: "LN Ret BNR 218H 280g KK2612 330ml",
      artNo: "22322",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1008636-grid_2.jpg"
    },
    {
      title: "LN Ret BNR 245H 355g KK2618 500ml",
      artNo: "17575",
      description: "500 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1005812-grid_2.jpg"
    },
    {
      title: "Ale Ret 238H 310g KK2618 330ml",
      artNo: "30033",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1005952-grid_2.jpg"
    },
    {
      title: "Ale 233H 302g KK2613 330ml",
      artNo: "32339",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1011275-grid_1.jpg"
    },
    {
      title: "Ale Ret 238H 310g KK2618 330ml",
      artNo: "33355",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1008923-grid_2.jpg"
    },
    {
      title: "Ale Ret 238H 310g KK2618 330ml",
      artNo: "31434",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009867-grid_2.jpg"
    },
    {
      title: "Ale Ret 270H 385g KK2618 500ml",
      artNo: "23630",
      description: "500 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1005951-grid_2.jpg"
    },
    {
      title: "Ale Ret 270H 385g KK2618 500ml",
      artNo: "22870",
      description: "500 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1008922-grid_2.jpg"
    },
    {
      title: "Pivo nep. 224H 186g KK2613 330ml",
      artNo: "28114",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001528-grid_2.jpg"
    },
    {
      title: "Pivo nep. 224H 186g KK2613 330ml",
      artNo: "27563",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001275-grid_2.jpg"
    },
    {
      title: "Pivo nep. 224H 186g KK2613 330ml",
      artNo: "30695",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001276-grid_2.jpg"
    },
    {
      title: "Spec. Christmas 166g KK2613 250ml",
      artNo: "30193",
      description: "250 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003277-grid_2.jpg"
    },
    {
      title: "Ale Ret 264H 351g KK2612 500ml",
      artNo: "25144",
      description: "500 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009039-grid_2.jpg"
    },
    {
      title: "Ale 196H 164g KK2613 250ml",
      artNo: "31270",
      description: "250 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001910-grid_2.jpg"
    },
    {
      title: "Ale 195H 167g MC281G 250ml",
      artNo: "30184",
      description: "250 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1001704-grid_2.jpg"
    },
    {
      title: "Ale 274H 320g KK2613 660ml",
      artNo: "24058",
      description: "660 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009464-grid_2.jpg"
    },
    {
      title: "Longneck 237H 210g KK2618 330ml",
      artNo: "27552",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001267-grid_2.jpg"
    },
    {
      title: "Glass bottle Beer LN 330 ml",
      artNo: "30419",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1002717-grid_2.jpg"
    },
    {
      title: "bottle Beer LM 330 ml",
      artNo: "32013",
      description: "330 ml, Swing closer",
      img: "https://katalog.vetropack.com/static_cache/img/1011119-grid_2.jpg"
    },
    {
      title: "bottle Beer LM 750 ml",
      artNo: "32014",
      description: "750 ml, Swing closer",
      img: "https://katalog.vetropack.com/static_cache/img/1011120-grid_2.jpg"
    },
    {
      title: "CH III 173g DK2613 330ml",
      artNo: "25761",
      description: "330 ml, Twist crown",
      img: "https://katalog.vetropack.com/static_cache/img/1001939-grid_2.jpg"
    },
    {
      title: "Gambrinus Ret 255g KK2618 330ml",
      artNo: "31470",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1010861-grid_2.jpg"
    },
    {
      title: "Obus Bier 265g DK2613 500ml",
      artNo: "33363",
      description: "500 ml, Twist crown",
      img: "https://katalog.vetropack.com/static_cache/img/1011755-grid_2.jpg"
    },
    {
      title: "Eva light Bier 130g DK2613 250ml",
      artNo: "31369",
      description: "250 ml, Twist crown",
      img: "https://katalog.vetropack.com/static_cache/img/1010811-grid_2.jpg"
    },
    {
      title: "Euro Ret 345g KK2618 500ml",
      artNo: "16931",
      description: "500 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1002016-grid_2.jpg"
    },
    {
      title: "EURO RET 345g KK2618 500ml",
      artNo: "30061",
      description: "500 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001921-grid_2.jpg"
    },
    {
      title: "Euro Ret 345g KK2618 500ml",
      artNo: "14097",
      description: "500 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003293-grid_2.jpg"
    },
    {
      title: "Euro Ret 335g MC287R 500ml",
      artNo: "26700",
      description: "500 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1001007-grid_2.jpg"
    },
    {
      title: "Gambrinus 180g KK2618 330ml",
      artNo: "27840",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001415-grid_2.jpg"
    },
    {
      title: "Gambrinus AW 225g KK2618 330ml",
      artNo: "30670",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003001-grid_2.jpg"
    },
    {
      title: "Euro pivo 310g KK2618 500ml",
      artNo: "31167",
      description: "500 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1010729-grid_2.jpg"
    },
    {
      title: "Bottle Evro 2 500 ml",
      artNo: "30545",
      description: "500 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1002129-grid_2.jpg"
    },
    {
      title: "Glass bottle Baltijos Alus 500 ml",
      artNo: "31053",
      description: "500 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001560-grid_2.jpg"
    },
    {
      title: "Tulip light 500ml",
      artNo: "34120",
      description: "500 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1012161-grid_2.jpg"
    },
    {
      title: "bottle NRW mineral light KK 500 ml",
      artNo: "31782",
      description: "500 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1011017-grid_2.jpg"
    },
    {
      title: "Tradition 540g LM3131 750ml",
      artNo: "34165",
      description: "750 ml, Swing closer",
      img: "https://katalog.vetropack.com/static_cache/img/1012191-grid_2.jpg"
    },
    {
      title: "Tradition 520g SK17,6 750ml",
      artNo: "34342",
      description: "750 ml, Crown finish spumante",
      img: "https://katalog.vetropack.com/static_cache/img/1012280-grid_1.jpg"
    },
    {
      title: "Birra BG - B - 56 300g sk17,6 330ml",
      artNo: "28471",
      description: "330 ml, Crown finish spumante",
      img: "https://katalog.vetropack.com/static_cache/img/1010241-grid_2.jpg"
    },
    {
      title: "Birra BG - B - 80 600g SK17,6 750ml",
      artNo: "28430",
      description: "750 ml, Crown finish spumante",
      img: "https://katalog.vetropack.com/static_cache/img/1010213-grid_2.jpg"
    },
    {
      title: "Bügelflasche Ret 485g LM3231 500ml",
      artNo: "19726",
      description: "500 ml, Swing closer",
      img: "https://katalog.vetropack.com/static_cache/img/1007193-grid_2.jpg"
    },
    {
      title: "Bügelbier Ret 320g LM3232 330ml",
      artNo: "31309",
      description: "330 ml, Swing closer",
      img: "https://katalog.vetropack.com/static_cache/img/1010785-grid_2.jpg"
    },
    {
      title: "Vichy Ret 320g LM 330ml",
      artNo: "31662",
      description: "330 ml, Swing closer",
      img: "https://katalog.vetropack.com/static_cache/img/1010956-grid_2.jpg"
    },
    {
      title: "Vichy Ret 375g LM 500ml",
      artNo: "31663",
      description: "500 ml, Swing closer",
      img: "https://katalog.vetropack.com/static_cache/img/1010957-grid_2.jpg"
    },
    {
      title: "Bügelbier Ret 390g LM3232 500ml",
      artNo: "26076",
      description: "500 ml, Swing closer",
      img: "https://katalog.vetropack.com/static_cache/img/1003631-grid_3.jpg"
    },
    {
      title: "Bottle Beer LM 500 ml",
      artNo: "26821",
      description: "500 ml, Swing closer",
      img: "https://katalog.vetropack.com/static_cache/img/1001034-grid_4.jpg"
    },
    {
      title: "Bottle Litva 2 1000 ml",
      artNo: "26935",
      description: "1000 ml, Swing closer",
      img: "https://katalog.vetropack.com/static_cache/img/1001106-grid_2.jpg"
    },
    {
      title: "Glas bottle Litva 2 1000ml",
      artNo: "32369",
      description: "1000 ml, Swing closer",
      img: "https://katalog.vetropack.com/static_cache/img/1011296-grid_2.jpg"
    },
    {
      title: "Bottle Litva 2 1000 ml",
      artNo: "26812",
      description: "1000 ml, Swing closer",
      img: "https://katalog.vetropack.com/static_cache/img/1001029-grid_2.jpg"
    },
    {
      title: "SBV Bier Ret 500g KK2618 580ml",
      artNo: "26197",
      description: "580 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003360-grid_2.jpg"
    },
    {
      title: "Vichy 175g KK2613 250ml",
      artNo: "31658",
      description: "250 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1010954-grid_2.jpg"
    },
    {
      title: "Vichy 220g KK2618 330ml",
      artNo: "31659",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1010955-grid_2.jpg"
    },
    {
      title: "NRW Ret 380g KK2618 500ml",
      artNo: "13691",
      description: "500 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1002066-grid_2.jpg"
    },
    {
      title: "Vichy Ret 320g KK2618 330ml",
      artNo: "12398",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1002104-grid_2.jpg"
    },
    {
      title: "Vichy light 260g KK2613 500ml",
      artNo: "30525",
      description: "500 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1002115-grid_3.jpg"
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

      {/* Hero Section with Image Background */}
      <div className="position-relative vh-100 pt-5">
        <img
          src={beerHero}
          alt="Beer Bottle Manufacturing"
          className="position-absolute w-100 h-100"
          style={{ objectFit: "cover" }}
        />
        <div
          className="position-absolute w-100 h-100 bg-dark"
          style={{ opacity: 0.6 }}
        ></div>
        <div className="container position-relative h-100">
          <div className="d-flex align-items-center justify-content-center h-100 text-white text-center">
            <div>
              <h1 className="display-2 fw-bold mb-4">
                Craft Your Perfect Beer Bottle
              </h1>
              <p className="lead mb-4">Premium Glass Solutions for Breweries</p>
              <button
                className="btn btn-lg px-5"
                style={{ backgroundColor: "#fa5f0b", color: "white" }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>


      



      {/* Product Categories with Horizontal Scroll */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center my-5">Our Beer Bottle Collection</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
            {/* Standard Beer Bottle */}
            <div className="col">
              <div className="card h-100 border-0 shadow-sm">
                <div className="position-relative" style={{ height: "300px" }}>
                  <img
                    src={beerHero}
                    className="card-img-top w-100 h-100"
                    alt="Standard Beer Bottle"
                    style={{ objectFit: "cover" }}
                  />
                  <span className="position-absolute top-0 end-0 badge bg-primary m-3">
                    Popular
                  </span>
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">Standard Beer Bottle</h5>
                  <p className="card-text text-muted">
                    Classic design for mainstream beers
                  </p>
                  <ul className="list-unstyled mt-auto mb-0">
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      330ml
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      500ml
                    </li>
                    <li>
                      <i className="fas fa-check-circle text-success me-2"></i>
                      650ml
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            

            {/* Craft Beer Bottle */}
            <div className="col">
              <div className="card h-100 border-0 shadow-sm">
                <div style={{ height: "300px" }}>
                  <img
                    src={BeerBottle3}
                    className="card-img-top w-100 h-100"
                    alt="Craft Beer Bottle"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">Craft Beer Bottle</h5>
                  <p className="card-text text-muted">
                    Unique designs for craft breweries
                  </p>
                  <ul className="list-unstyled mt-auto mb-0">
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Custom Shapes
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Embossing
                    </li>
                    <li>
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Multiple Colors
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Premium Beer Bottle */}
            <div className="col">
              <div className="card h-100 border-0 shadow-sm">
                <div style={{ height: "300px" }}>
                  <img
                    src={BeerBottle4}
                    className="card-img-top w-100 h-100"
                    alt="Premium Beer Bottle"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">Premium Beer Bottle</h5>
                  <p className="card-text text-muted">
                    Luxury designs for premium brands
                  </p>
                  <ul className="list-unstyled mt-auto mb-0">
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Unique Shapes
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Premium Finish
                    </li>
                    <li>
                      <i className="fas fa-check-circle text-success me-2"></i>
                      Brand Integration
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-fluid mt-5"  >

<div className="container-fluid  mb-5">
<div className="row align-items-center " style={{ marginTop: "50px" }}>
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

      {/* Features Section with Animation */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm hover-lift">
                <div className="card-body text-center">
                  <i className="fas fa-shield-alt fa-3x text-primary mb-3"></i>
                  <h4 className="card-title">Durability</h4>
                  <p className="card-text">
                    Enhanced strength for better handling and transportation
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm hover-lift">
                <div className="card-body text-center">
                  <i className="fas fa-recycle fa-3x text-primary mb-3"></i>
                  <h4 className="card-title">Sustainability</h4>
                  <p className="card-text">
                    Eco-friendly materials and production processes
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm hover-lift">
                <div className="card-body text-center">
                  <i className="fas fa-palette fa-3x text-primary mb-3"></i>
                  <h4 className="card-title">Customization</h4>
                  <p className="card-text">
                    Flexible design options to match your brand
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm hover-lift">
                <div className="card-body text-center">
                  <i className="fas fa-award fa-3x text-primary mb-3"></i>
                  <h4 className="card-title">Quality</h4>
                  <p className="card-text">
                    International standards compliance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Specification Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Technical Specifications</h2>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                src={beerHero}
                alt="Bottle Specifications"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-lg-6">
              <div className="spec-details p-4 border rounded shadow-sm">
                <h3 className="mb-3">Dimensions</h3>
                <ul className="list-unstyled">
                  <li>Height: 229mm - 330mm</li>
                  <li>Diameter: 60mm - 88mm</li>
                  <li>Capacity: 330ml - 750ml</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with Parallax */}
      <section
        className="py-5 text-white"
        style={{
          backgroundImage: `url(${beerHero})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mb-4">Ready to Order?</h2>
              <p className="lead mb-4">
                Contact our team to discuss your requirements and get a custom
                quote
              </p>
              <button className="btn btn-light btn-lg me-3">Get Quote</button>
              <button className="btn btn-outline-light btn-lg">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Add custom CSS for animations */}
      <style jsx>{`
        .hover-lift {
          transition: transform 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-5px);
        }
      `}</style>

      <Footer />
    </>
  );
};

export default BeerBottles;
