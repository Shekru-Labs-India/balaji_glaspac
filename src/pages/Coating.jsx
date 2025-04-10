import React from 'react'
import coating from '../assets/img/coating.jpg'
import Header from '../components/Header'
import Footer from '../components/Footer'
import coating1 from '../assets/img/coating1.jpg'

const Coating = () => {
  return (
    
   <>
   <Header/>

    <div
                 className="hero-section position-relative"
                 style={{
                   backgroundImage: `url(${coating1})`,
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
                       <h1 className="display-3 fw-bold mb-4">
                       Coating
                
                       </h1>
                       
                     </div>
                   </div>
                 </div>
               </div>

   <section className="about-area py-0">
  <div className="container">
    {/* Top Paragraphs */}
    <div className="row">
      <div className="col-12">
        <p className='py-0'>
          We have the largest in-house glass container decoration facilities. Having two centres of decoration excellence makes us flexible and efficient, optimising production at each location and sharing knowledge across the Group.
          Both centres have developed and produced internationally acclaimed bottle designs using cutting-edge glass decoration techniques in response to customer needs and trends.
        </p>
        <div className="row justify-content-center">
      <div className="col-12 col-md-10 text-center">
        <img
          className="img-fluid rounded-4"
          src={coating}
          alt="Ceramic Process"
          style={{  height: "473", width: "1200px" }}
        />
      </div>
    </div>
        <p className='mt-0'>
          Coating is a cost-effective and flexible way to achieve outstanding colour, to provide a premium look and feel.
          The technique can give a wide range of effects: matte, gloss, eggshell, acid etch, organic, metallic, and pearlescent.
          Coating is often combined with other decoration techniques such as pressure-sensitive labelling (PSL), printing, or embossing, offering unlimited options and uniquely tailored branding.
        </p>
      </div>
      
    </div>

    {/* Image in the Middle */}
    

    {/* Bottom Paragraphs */}
    <div className="row">
      <div className="col-12">
        <p className='mt-5'>
          Coating is a process that prevents mechanical damage to bottles during production, packing, and transportation.
          We have the necessary facilities for applying hot-end and cold-end coating on bottles which not only prevents damage to customer filling lines but also enhances the overall utility and safety till it reaches the end consumer.
        </p>
        <p>
          We have also installed hot-end and cold-end coating equipment for 5 beer manufacturing lines. We have also installed hot-end and cold-end coating for 3 liquor lines also.
          Cold-end coating is a protective film that gives the glass a smooth surface that resists scratching and other surface damage.
          Since glass bottles and jars often travel through conveyors and scuff against each other during transit, this coating prevents the glass from scratching or sticking together.
        </p>
      </div>
    </div>
  </div>
</section>

<Footer/>

   </>

  )
}

export default Coating