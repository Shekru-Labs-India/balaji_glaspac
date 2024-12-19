import React from 'react'
import mould from '../assets/img/Mould.jpg'
import Header from '../components/Header'
import Footer from '../components/Footer'
import img2 from '../assets/img/img2.jpg'

const MouldShop = () => {
  return (
    
   <>

    <Header/>

    <div
                  className="hero-section position-relative"
                  style={{
                    backgroundImage: `url(${img2})`,
                    height: "60vh",
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
                        Applied Ceramic Label 
                  
                        </h1>
                        
                      </div>
                    </div>
                  </div>
                </div>
    

    <section className="about-area1 ptb-100">
                 <div className="container">
                   <div className="row align-items-center">
                     <div className="col-lg-6">
                       
                       <div className="about-content">
                         <p>
                         AGI glaspac assist customers to bring an idea/concept to reality.
                          Right from the beginning our design team aims to ensure that the technical quality of the container, as well as the aesthetic requirement is of high standard. 
                          AGI work with the customer, design agency and glass manufacturer whichever is relevant for the particular assignment following the 5 steps:
                         </p>
                        
                         
                         <p>
                         Idea/concept: At this stage we will work with the customer’s initial design brief and product requirements to create a first container sketch for discussion purposes. 
                         In a concept the parameters such as (finish type, container height, shape, labelling …) will be established.
                         </p>
                         <p>
                         Container specification: After the concept agreement a container drawing with all relevant technical information will be produced.
                          Such a specification will take care of the container physical requirements (forming machine type SG, DG, TG, QG, forming process, internal pressure, impact, vertical load …).
                         </p>
                         <p>
                         Mould design: With the container specification clarified the mould manufacturing drawings can be produced for any machine type and process (BB, NNPB, PB). 
                         The design can be made around existing equipment (interchangeable parts, machine set-ups…) or for complete new set-ups.
                          Either way AGI will work closely with the glass manufacturer considering the machine/equipment base. 
                         During this design process a list of required accessories will be produced.
                        </p>
                        <p>
                        Brand identifying engraving or logo will be considered during the concept, AGI understand that the image of the container is of paramount importance as it is representing the brand on a shelf. 
                        AGI produce container and mould designs for the Blow & Blow (BB), Light Weight Blow & Blow (LWBB), Press & Blow (PB) and Narrow Neck Press & Blow (NNPB) forming processes.
                        </p>
                        <p>
                        We have the facility to manage the design process from cradle to grave (initial concept through to the product being on the retailer’s shelf). 
                        In addition on site forming support for sampling and first commercial runs can be offered.
                        </p>
                         
                         
                       </div>
                     </div>
                     <div className="col-lg-6">
                       <img className="rounded-4" src={mould} alt="" />
                     </div>
                   </div>
                 </div>
               </section>

               <Footer/>
   </>

  )
}

export default MouldShop