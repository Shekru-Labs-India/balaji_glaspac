import React from 'react'
import ceramic from '../assets/img/applied-ceramic.jpg'
import Header from '../components/Header'
import Footer from '../components/Footer'
import label from '../assets/img/premiumBottle.jpg'

const AppliedCeramic = () => {
  return (
    
   <>
   <Header/>

   <div
              className="hero-section position-relative"
              style={{
                backgroundImage: `url(${label})`,
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
             
    <div className="container my-5">
            <div className="row">
                {/* Left Column: Text */}
                <div className="col-12 col-lg-6">
                <p>
                      It is a process by which ceramic paint is applied directly to the surface of a bottle and fired through a Lehr furnace. After firing at temperatures up to 1180° F the label design is permanently fused to the glass. 
                      We can wrap 360 degrees around the bottle and push design limitations experienced with traditional paper labeling.
                      </p>
                    <h2>Advantages Include</h2>
                    <ul>
                        <li>Permanent adhesion</li>
                        <li>No bubbling, wrinkling or torn label corners</li>
                        <li>Scuff-proof/Waterproof/Cellar proof</li>
                        <li>No application issues at bottling</li>
                        <li>360° design surface</li>
                    </ul>
                    <p>
                    Our machines can print up to nine colors, including precious metals such as gold, platinum, and copper. On print runs from 100 cases to 25,000 cases, direct screen-printing costs competitive with all other labeling applications. This alternative to paper creates eye-catching labels that are resistant to wrinkling, smearing, scuffing and are most importantly, waterproof. Beverage Incentive Glass is a full-service bottle and glassware direct screen labeling company. We specialize in screen printing, simulated etching, and decals for wine, spirit, beer, and specialty food containers. Going paperless will actually strengthen your brand impact by elegantly screen printing your labels. There are many benefits from ACL such as Increased bottling line efficiency, improved label durability, design flexibility branding/packaging impact. Increasing clients’ brand value by providing unique and cost-effective alternatives to paper labels.
                    </p>
                </div>

                {/* Right Column: Image */}
                <div className="col-12 col-lg-6">
                    <img src={ceramic} alt="Machine Image" className="img-fluid rounded-4" />
                </div>

                {/* Full-width Remaining Paragraph */}
                <div className="col-12">
                    <p>
                    Balaji Glaspac has the most modern and advanced screen printing facilities available in the country which involves the use of Strutz, Rosario, and Tecno.5 machines. These machines are state of the art machines and have the capability to print up to six different colors on a single bottle. Today, we can print more than 1.2 Mn plus bottles per day.
                    </p>
                    <p>
                    Our specially-adapted screen printing process lets you utilise a larger print area than paper labels, so you can dream big when it comes to creating striking graphics for your product. Think unusually shaped labels, multiple colours, graphics meant to be seen through transparent liquid or even designs that wrap right around the bottle.
                    </p>
                    <p>
                    What better way to create a brand that leaps off the shelf? Screen printing is the ideal way to create practical, beautiful packaging solutions. At Balaji Glaspac, we have perfected the unique process of printing onto glass after bottling, which means you only print what you need now. This is great news for your cash flow, but also allows you the flexibility to change the label details as needed – without intrusive over-stickers.
                    </p>
                </div>
            </div>
        </div>

            </section>

            <Footer/>
      
   </>

  )
}

export default AppliedCeramic