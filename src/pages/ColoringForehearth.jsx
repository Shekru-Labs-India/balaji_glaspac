import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import coloring from '../assets/img/Coloring-Forehearth.png'
import coloring1 from '../assets/img/Coloring-Forehearth1.png'
import coloring2 from '../assets/img/coloring-forehearths3.jpg'
import about2 from '../assets/img/about2.png'

const ColoringForehearth = () => {
  return (
    
   <>
   <Header/>

   <div
           className="hero-section position-relative"
           style={{
             backgroundImage: `url(${about2})`,
             height: "210px",
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
               <div className="text-center text-white">
                 <h1 className="display-3 fw-bold mb-4">
                 Coloring  Forehearth Technology
                 </h1>
                 
               </div>
             </div>
           </div>
         </div>


   <section className="content-area py-5">

  <div className="container">

    <h3>
    Balaji glaspac is the only manufacturer to offer Forehearth coloured glass containers in India, giving customers the scale advantage to enter the market   
    </h3>
    {/* Row 1: Left Paragraph, Right Image */}
    <div className="row align-items-center mb-5">
      <div className="col-md-6">
        <p>
        The Balaji glaspac colouring Forehearth is a favourable method for the production of coloured glass without having to change the colour in the entire furnace. The advantages are having two colours simultaneously and the possibility of a temporary colouring process.
        </p>
        <p>
        The colour Forehearth technology is very flexible allowing the full range of products in a wide range of colours including container, tableware and cosmetic containers.
        </p>
        <p>
        The design of the colouring Forehearths depends on the required capacity and works either with centreline radiation cooling or with centreline air cooling. Both represent today’s most advanced technology in Forehearth design. The refractory structure design is an up to date modern construction employing all today’s techniques to achieve homogenous colour distribution together with high thermal homogeneity and minimum energy requirements.  
        </p>
      </div>
      <div className="col-md-6 text-center">
        <img className="img-fluid rounded-4" src={coloring} alt="Right Image" />
      </div>
    </div>

    {/* Row 2: Left Image, Right Paragraph */}
    <div className="row align-items-center">
      <div className="col-md-6 text-center">
        <img className="img-fluid rounded-4" src={coloring1} alt="Left Image" />
      </div>
      <div className="col-md-6">
        <p>
        High quality refractory material is used for channel blocks which are surrounded with suitably graded insulation material.
        </p>
        <p>
        The roof blocks of the superstructure are made of a different kind of refractory material to achieve a long lifetime. Special bonded alumo-zirconoxide refractory material (zircon mullite) with high density and low porosity is used in the colouring sections where high corrosive colouring agents are applied while the cooling and conditioning sections are covered with sillimanite material. The cover blocks are of a special shape to achieve the highest temperature homogeneity at gob point.  
        </p>
      </div>
    </div>

    <div className="row align-items-center mb-5">
      <div className="col-md-6">

        <p>
        The Forehearths are individually designed depending on the colours required, the tonnage and the conditions on-site. All Forehearths generally consist of   
        </p>
      <ul>
                  <li>
                    
                    Heating and dosing zone
                  </li>
                  <li>
                    
                    Stirrer zone
                  </li>
                  <li>
                   
                    Cooling zone(s)
                  </li>
                  <li>
                   
                    Conditioning zone.
                  </li>
        </ul>          
        <p>
        For the heating and dosing zone, Balaji glaspac provides an accurate working weighing system to feed the exact quantity of colouring agents onto the glass surface. The subsequent stirrer zone is equipped with several benches of stirrer units to mix the colouring agent with the basic flint glass.
        </p>
        <p>
        Most important at colouring Forehearths is a stable gas/air mixture heating system in order not to influence the colour especially for colours in reduced atmosphere. Therefore Balaji glaspac provides the precise mixing CORA system. In addition, a lambda control can be installed to regulate the actual oxygen content in the gas/air mixture.
        </p>
        <p>
        Balaji glaspac colouring Forehearth systems are applied in several glass industries such as container glass, tableware or sheet glass production.
        </p>
      </div>
      <div className="col-md-6 text-center">
        <img className="img-fluid rounded-4" src={coloring2} alt="Right Image" />
      </div>
    </div>

  </div>
</section>

   <Footer/>
 
   </>

  )
}

export default ColoringForehearth