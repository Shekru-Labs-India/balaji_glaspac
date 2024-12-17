import React,{useState} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const AlcoholBeverage = () => {

  const [selectedColor, setSelectedColor] = useState('');
  const [selectedFinish, setSelectedFinish] = useState('');
  const [selectedCirculationType, setSelectedCirculationType] = useState('');
  const [selectedHitType, setSelectedHitType] = useState('');
  const [searchQuery, setSearchQuery] = useState("");

  const cards = [
    {
      title: "Ale Premium Ret 285g KK2618 330ml",
      artNo: "19437",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1006476-grid_2.jpg",
    },
    {
      title: "Ale Premium RET 285g KK2618 330ml",
      artNo: "30268",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001248-grid_2.jpg",
    },
    {
      title: "A Bier 175g DK2613 330ml",
      artNo: "25681",
      description: "330 ml, Twist crown",
      img: "https://katalog.vetropack.com/static_cache/img/1001855-grid_2.jpg",
    },

    {
      title: "A Bier 194g KK2613 330ml",
      artNo: "26415",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003383-grid_2.jpg",
    },
    {
      title: "Ale ET 217H 195g DK2613 330ml",
      artNo: "25695",
      description: "330 ml, Twist crown",
      img: "	https://katalog.vetropack.com/static_cache/img/1001866-grid_2.jpg",
    },
    {
      title: "Ale ET 217H 195g 330ml",
      artNo: "31529",
      description: "330 ml, Twist crown",
      img: "https://katalog.vetropack.com/static_cache/img/1001821-grid_2.jpg",
    },

    {
      title: "Ale ET 217H 195g DK2613 330ml",
      artNo: "25620",
      description: "330 ml, Twist crown",
      img: "https://katalog.vetropack.com/static_cache/img/1001822-grid_3.jpg",
    },
    {
      title: "Ale ET 217H 195g DK2613 330ml",
      artNo: "25690",
      description: "330 ml, Twist crown",
      img: "https://katalog.vetropack.com/static_cache/img/1001862-grid_2.jpg",
    },
    {
      title: "Ale ET 217H 195g KK2613 330ml",
      artNo: "24366",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009600-grid_2.jpg",
    },

    {
      title: "Ale ET 217H 195g KK2613 330ml",
      artNo: "33169",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003237-grid_2.jpg",
    },
    {
      title: "Ale ET 217H 195g KK2613 330ml",
      artNo: "24370",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009588-grid_2.jpg",
    },
    {
      title: "Ale ET 219H 199g MC281G 330ml",
      artNo: "34025",
      description: "330 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1009590-grid_2.jpg",
    },

    {
      title: "Ale ET 219H 199g MC281G 330ml",
      artNo: "27196",
      description: "330 ml, MCA ",
      img: "	https://katalog.vetropack.com/static_cache/img/1001243-grid_2.jpg",
    },
    {
      title: "Ale ET 219H 199g MC281G 330ml",
      artNo: "34883",
      description: "330 ml, MCA",
      img: "	https://katalog.vetropack.com/static_cache/img/1012507-grid_2.jpg",
    },
    {
      title: "Ale 205H 185g KK2618 250ml",
      artNo: "25109",
      description: "250 ml, Crown finish",
      img: "	https://katalog.vetropack.com/static_cache/img/1009869-grid_2.jpg",
    },

    {
      title: "Ale 205H 185g KK2618 250ml",
      artNo: "25107",
      description: "250 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009868-grid_2.jpg",
    },
    {
      title: "Ale 201H 170g DK2613 330ml",
      artNo: "26138",
      description: "330 ml, Twist crown",
      img: "https://katalog.vetropack.com/static_cache/img/1001779-grid_2.jpg",
    },
    {
      title: "Glass bottle 33cl Ale leicht-170g",
      artNo: "31744",
      description: "330 ml, Twist crown",
      img: "https://katalog.vetropack.com/static_cache/img/1001458-grid_2.jpg",
    },

    {
      title: "Longneck Ret 290H 570g KK2917 750ml",
      artNo: "27043",
      description: "750 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001171-grid_2.jpg",
    },
    {
      title: "Longneck Ret 289H 562g KK2616 750ml",
      artNo: "35802",
      description: "750 ml, Crown finish",
      img: "	https://katalog.vetropack.com/static_cache/img/1013002-grid_2.jpg",
    },
    {
      title: "Longneck Ret 290H 570g RB18,5 750ml",
      artNo: "27044",
      description: "750 ml, Ring cork finish",
      img: "	https://katalog.vetropack.com/static_cache/img/1001172-grid_2.jpg",
    },

    {
      title: "Longneck 205g KK2618 330ml",
      artNo: "28113",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001523-grid_2.jpg",
    },
    {
      title: "Longneck 205g KK2618 330ml",
      artNo: "32160",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1011167-grid_2.jpg",
    },
    {
      title: "Longneck 125g KK2613 150ml",
      artNo: "31563",
      description: "150 ml, Crown finish",
      img: "	https://katalog.vetropack.com/static_cache/img/1010915-grid_2.jpg",
    },

    {
      title: "Longneck Ret 435g KK2613 330ml",
      artNo: "15871",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1002575-grid_2.jpg",
    },
    {
      title: "Ale 264H 260g KK2613 500ml",
      artNo: "18593",
      description: "500 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1006471-grid_2.jpg",
    },
    {
      title: "Ale 264H 260g KK2613 500ml",
      artNo: "22916",
      description: "500 ml, Crown finish",
      img: "	https://katalog.vetropack.com/static_cache/img/1008806-grid_2.jpg",
    },

    {
      title: "Ale 264H 260g KK2613 500ml",
      artNo: "26075",
      description: "500 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1003279-grid_2.jpg",
    },
    {
      title: "Ale 266H 264g MC281G 500ml",
      artNo: "36604",
      description: "500 ml, MCA",
      img: "https://katalog.vetropack.com/static_cache/img/1013422-grid_2.jpg",
    },
    {
      title: "Silenus Ale 270g KK2613 500ml",
      artNo: "25013",
      description: "500 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009500-grid_2.jpg",
    },

    {
      title: "Silenus Ale 270g KK2613 500ml",
      artNo: "23967",
      description: "500 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009413-grid_2.jpg",
    },
    {
      title: "Silenus Ale 205g KK2613 330ml",
      artNo: "24120",
      description: "330 ml, Crown finish",
      img: "	https://katalog.vetropack.com/static_cache/img/1009499-grid_2.jpg",
    },
    {
      title: "Silenus Ale 205g KK2613 330ml",
      artNo: "23965",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1009412-grid_2.jpg",
    },

    {
      title: "Standard Ale Ret KK2618 330ml",
      artNo: "26805",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1001028-grid_2.jpg",
    },
    {
      title: "Gundola 225g KK2613 330ml",
      artNo: "31806",
      description: "330 ml, Crown finish",
      img: "	https://katalog.vetropack.com/static_cache/img/1011028-grid_2.jpg",
    },
    {
      title: "LONGNECK VA 190g KK2618 330ml",
      artNo: "36950",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1013576-grid_1.jpg",
    },

    {
      title: "Longneck LP 237H 210g KK2618 330ml",
      artNo: "32363",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1011290-grid_2.jpg",
    },
    {
      title: "Longneck LP 237H 210g KK2618 330ml",
      artNo: "32364",
      description: "330 ml, Crown finish",
      img: "	https://katalog.vetropack.com/static_cache/img/1011291-grid_2.jpg",
    },
    {
      title: "LN Ret BNR 218H 280g KK2612 330ml",
      artNo: "20793",
      description: "330 ml, Crown finish",
      img: "https://katalog.vetropack.com/static_cache/img/1005811-grid_2.jpg",
    },


    {
      title: "CH III 173g DK2613 330ml",
      artNo: "25761",
      description: "330 ml, Twist crown ",
      img: "	https://katalog.vetropack.com/static_cache/img/1001939-grid_2.jpg",
    },
    {
      title: "Gambrinus Ret 255g KK2618 330ml",
      artNo: "31470",
      description: "330 ml, Crown finish",
      img: "	https://katalog.vetropack.com/static_cache/img/1010861-grid_2.jpg",
    },
    {
      title: "Obus Bier 265g DK2613 500ml",
      artNo: "33363",
      description: "500 ml, Ring Twist crown",
      img: "https://katalog.vetropack.com/static_cache/img/1011755-grid_2.jpg",
    },

    {
      title: "Vichy Ret 375g LM 500ml",
      artNo: "31663",
      description: "500 ml, Swing closer ",
      img: "https://katalog.vetropack.com/static_cache/img/1010957-grid_2.jpg",
    },
    {
      title: "Bügelbier Ret 390g LM3232 500ml",
      artNo: "26076",
      description: "500 ml, Swing closer",
      img: "https://katalog.vetropack.com/static_cache/img/1003631-grid_3.jpg",
    },
    {
      title: "Bottle Beer LM 500 ml",
      artNo: "26821",
      description: "500 ml, Swing closer",
      img: "https://katalog.vetropack.com/static_cache/img/1001034-grid_4.jpg",
    },
  ];

  const filteredCards = cards.filter(
    (card) =>
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.artNo.toLowerCase().includes(searchQuery.toLowerCase())
  );


  // Handle change in radio button selection
  const handleRadioChange = (e) => {
    setSelectedCirculationType(e.target.value);
  
  };


  const handleRadioChanges = (e) => {
   
    setSelectedHitType(e.target.value);
  };

  // Handle change in dropdown selection
  const handleChange = (e) => {
    setSelectedFinish(e.target.value);
    setSelectedColor(e.target.value);
  };

 

  return (
    
   <>
   <Header/>

    <div className="container-fluid mt-4"  >

     
    <div className="container mt-4 mb-5" >
  <div className="row align-items-center" style={{ marginTop: "150px" }}>
    
  <div className="col-md-4 mb-3 mb-md-0">
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

    <div className="col-md-4 text-center">
      <p className="mb-0 fw-bold">93 results with your filter setting</p>
    </div>

    <div className="col-md-4 d-flex justify-content-end">
      <div className="me-3">
        <label className="form-label fw-bold me-1">Sort by</label>
        <select className="form-select form-select-sm d-inline-block w-auto">
          <option>Sort by</option>
          <option>Sub-Groups</option>
          <option>Nominal contents</option>
          <option>Finish type group</option>
          <option>Colour</option>
        </select>
      </div>

      <div className="btn-group" role="group">
        <button type="button" className="btn btn-outline-secondary active">
        <i className="fa-solid fa-border-all"></i>
        </button>
        <button type="button" className="btn btn-outline-secondary">
        <i className="fa-solid fa-list"></i>
        </button>
        <button type="button" className="btn btn-outline-secondary">
        <i className="fa-solid fa-arrows-alt"></i>
        </button>
      </div>
    </div>
  </div>
</div>


     

      <div className="row">
    
        <div className="col-md-3 mb-4">
          <div className="p-3 bg-light rounded">
            <h5 className="mb-3 text-uppercase">SUB-GROUPS</h5>
            <div className="form-check mb-2">
              <input type="checkbox" className="form-check-input" id="longNeck" />
              <label className="form-check-label" for="longNeck">Long Neck (59)</label>
            </div>
            <div className="form-check mb-2">
              <input type="checkbox" className="form-check-input" id="shortNeck" />
              <label className="form-check-label" for="shortNeck">Short Neck (15)</label>
            </div>
            <div className="form-check mb-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="beerSpecial"
              />
              <label className="form-check-label" for="beerSpecial"
                >Beer Special (4)</label
              >
            </div>
            <div className="form-check mb-2">
              <input type="checkbox" className="form-check-input" id="swingTop" />
              <label className="form-check-label" for="swingTop">Swing Top (9)</label>
            </div>
            <div className="form-check mb-4">
              <input type="checkbox" className="form-check-input" id="vichy" />
              <label className="form-check-label" for="vichy">Vichy (6)</label>
            </div>

            <h5 className="mb-3 text-uppercase">NOMINAL CONTENTS</h5>
            <input
              type="range"
              className="slider mb-2"
              min="150"
              max="1000"
              value="500"
            />
            <p>150 ml - 1000 ml</p>

            <h5 className="mb-3 text-uppercase">BRIMFULL</h5>
            <input
              type="range"
              className="slider mb-2"
              min="164"
              max="1020"
              value="500"
            />
            <p>164 ml - 1020 ml</p>

            <h5 className="mb-3 text-uppercase">FILLING LINE</h5>
            <input
              type="range"
              className="slider mb-2"
              min="34"
              max="81"
              value="500"
            />
            <p>34 mm - 81 mm</p>

            <h5 className="mb-3 text-uppercase">NET WEIGHT</h5>
            <input
              type="range"
              className="slider mb-2"
              min="125"
              max="627"
              value="500"
            />
            <p>125 g - 627 g</p>

            <div>
      <h5 className="mb-3 text-uppercase">FINISH TYPE GROUP</h5>

      {/* Dropdown for Finish Type Selection */}
      <select
        className="form-select mb-2"
        value={selectedFinish}
        onChange={handleChange}
        style={{ width: '200px' }}
      >
        <option value="">Select Finish Type</option>
        <option value="twist_crown">Twist Crown</option>
        <option value="crown_finish">Crown Finish</option>
        <option value="swing_closer">Swing Closer</option>
        <option value="mca">MCA</option>
        <option value="ring_cork_finish">Ring Cork Finish</option>
        <option value="crown_finish_spumante">Crown Finish Spumante</option>
      </select>

      {/* Display the selected finish */}
      <div style={{ marginTop: '10px', fontWeight: 'bold' }}>
        Selected Finish Type: {selectedFinish ? selectedFinish.replace('_', ' ') : 'None'}
      </div>
    </div>


            <div>
      <h5 className="mb-3 text-uppercase">Colour</h5>

      {/* Dropdown for Color Selection */}
      <select 
        className="form-select mb-2" 
        value={selectedColor} 
        onChange={handleChange}
        style={{ width: '200px' }}
      >
        <option value="">Select a color</option>
        <option value="flint">Flint</option>
        <option value="green">Green</option>
        <option value="amber">Amber</option>
        <option value="vetrogreen">Vetrogreen</option>
      </select>

      
      
    </div>
            

            <h5 className="mb-3 text-uppercase">HEIGHT</h5>
            <input
              type="range"
              className="slider mb-2"
              min="155"
              max="312"
              value="500"
            />
            <p>155 mm - 312 mm</p>

            <h5 className="mb-3 text-uppercase">DIAMETER</h5>
            <input
              type="range"
              className="slider mb-2"
              min="48.5"
              max="92.9"
              value="500"
            />
            <p>48.5 mm - 92.9 mm</p>

            <div>
      <h5 className="mb-3 text-uppercase">Circulation Type</h5>

      {/* Radio buttons for Circulation Type */}
      <div>
        <label>
          <input
            type="radio"
            name="circulationType"
            value="any"
            checked={selectedCirculationType === 'any'}
            onChange={handleRadioChange}
          />
          Any
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="circulationType"
            value="nonreturnable"
            checked={selectedCirculationType === 'nonreturnable'}
            onChange={handleRadioChange}
          />
          Nonreturnable
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="circulationType"
            value="returnable"
            checked={selectedCirculationType === 'returnable'}
            onChange={handleRadioChange}
          />
          Returnable
        </label>
      </div>

      {/* Display the selected circulation type */}
      <div style={{ marginTop: '10px', fontWeight: 'bold' }}>
        Selected Circulation Type: {selectedCirculationType ? selectedCirculationType : 'None'}
      </div>
    </div>

    <div>
      <h5 className="mb-3 text-uppercase">New Hits</h5>

      {/* Radio buttons for New Hits */}
      <div>
        <label>
          <input
            type="radio"
            name="newHitType"
            value="any"
            checked={selectedHitType === 'any'}
            onChange={handleRadioChanges}
          />
          Any
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="newHitType"
            value="nonreturnable"
            checked={selectedHitType === 'nonreturnable'}
            onChange={handleRadioChanges}
          />
          Nonreturnable
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="newHitType"
            value="returnable"
            checked={selectedHitType === 'returnable'}
            onChange={handleRadioChanges}
          />
          Returnable
        </label>
      </div>

      {/* Display the selected new hit type */}
      <div style={{ marginTop: '10px', fontWeight: 'bold' }}>
        Selected New Hit Type: {selectedHitType ? selectedHitType : 'None'}
      </div>
    </div>
          </div>
        </div>

        
        <div className="col-md-9">
  <div className="row g-4">
    {filteredCards.map((card, index) => (
      <div className="col-12 col-md-4" key={index}>
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
              <div>
                <input
                  type="radio"
                  name="selectBottle"
                  className="custom-radio me-2"
                />
              </div>
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

export default AlcoholBeverage