import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import packaging from '../assets/img/bottle-package.jpg'
import wrapbottle from '../assets/img/wrap-bottle.jpg'

const PackagingOptions = () => {
  return (
    
    <>
     <Header/>

      <div
                       className="hero-section position-relative"
                       style={{
                         backgroundImage: `url(${wrapbottle})`,
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
                             Packaging Options
                       
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
                          Balaji glaspac has an exclusive and specialized in-house design team which ensures that the customers are provided various packaging options to choose from. They are provided with complete support – right from the initial concept stage to the final stage. We use state-of-the-art technology that uses the most modern methods for ensuring proper packaging without damaging the bottles.
Since ancient times, glass has proved to be a great packaging option for the beverage industry, and it remains true today. Glass bottles provide excellent uses for the food and beverage industry by maintaining the quality of their contents and protecting the product from external factors.
                          </p>
                        
                        <p>
                        Creating packaging that stands out on the shelves is an essential asset that helps distinguish your product from the competition. Package decoration speaks volumes about your company. It’s not enough to have a bottle that functions well; it also needs to look good in order to get a consumer’s attention. Trust us when we say, we want your package to stand out on the shelf just as much as you do!
                        </p>

                          <p>
                          That’s why Balaji glaspac is fully equipped to handle every packaging decoration needs including:
                          </p>
                          <ul>
                      <li>
                        
                        Labels: Heat Transfer, In-Mold, Pressure-Sensitive
                      </li>
                      <li>
                       
                        Shrink Sleeves
                      </li>
                      <li>
                        
                        Shrink Bands
                      </li>
                      <li>
                        
                        Printing: Silk Screening, Hot Stamp, Offset
Wax
Balaji glaspac understands there is no cookie-cutter solutions that will make your packaging stand out from the crowd. Count on us to bring our experience and industry knowledge to your package decoration needs
                      </li>
                      
                      
                    </ul>
                         
                          
                          
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <img className="rounded-4" src={packaging} alt="" />
                      </div>
                    </div>
                  </div>
                </section>

                <Footer/>
    </>

  )
}

export default PackagingOptions