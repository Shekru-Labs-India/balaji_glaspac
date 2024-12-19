import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import design from '../assets/img/design.png'
import inhouse from '../assets/img/industrialBottle.jpg'

const InHouseDesign = () => {
  return (
    
   <>
  <Header/>

    <div
                      className="hero-section position-relative"
                      style={{
                        backgroundImage: `url(${inhouse})`,
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
                            In House Design Studio
                      
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
                         Design is the art of creation. Good design is a blend of functionality and aesthetic appeal. Yet, even familiar objects such as custom glass bottles can change their design. Sometimes they must change to become viable for the future, more environmentally friendly or simply better. Design and innovation go hand-in-hand because every technical development follows a design process.
                         </p>
                         
                         
                         <p>
                         We work with our customers to develop custom glass packaging that embodies their product idea and marketing strategy in three ways: in its look, feel and materials. Good design gives a product a clear identity and positions it strategically in the market.
                         </p>
                         <p>
                         The work by the department targets the end-user and involves industrial design, graphic design, and lid and cap technologies, making the AGI glaspac an important solution partner at the design phase for customers seeking innovation. The innovative and creative glass packaging designs, which are the fruit of the work done jointly by a group of industrial designers, engineers, and technical experts as well as the extensive experience of the Group in this area, have won many awards at the national and international level.
                         </p>
                         
                         
                         
                       </div>
                     </div>
                     <div className="col-lg-6">
                       <img className="rounded-4" src={design} alt="" />
                     </div>
                   </div>
                 </div>
               </section>

               <Footer/>
   </>

  )
}

export default InHouseDesign