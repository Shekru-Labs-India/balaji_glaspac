import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Contact = () => {
  return (
    
    <>
    {/* <Header/> */}
    {/* Page Title */}
    <div className="page-title-area">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="title-item">
              <h2>Contact</h2>
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <span>/</span>
                </li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* End Page Title */}
    {/* Contact */}
    <section className="contact-area pt-100 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-item contact-left">
              <h3>Our Located Place</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
                velit libero vero, aliquid magnam sed, quidem labore unde
                aspernatur esse iusto quo quas, dolorum atque dignissimos
                asperiores. Ab, est accusantium.
              </p>
              <ul>
                <li>
                  <i className="bx bx-location-plus" />
                  Address: Head Office – Office No. 05 , 1st Floor, Nivrutti Complex, Near Tractor House, New Mumbai-Agra Road, Dwarka, Nashik – 422011. Maharashtra.
                </li>
                <li>
                  <i className="bx bx-mail-send" />
                  <a href="/cdn-cgi/l/email-protection#f79e999198b7859895839e94d994989a">
                    <span
                      className="__cf_email__"
                      data-cfemail="e78e898188a7958885938e84c984888a"
                    >
                    info@balajiglaspac.com
                    </span>
                  </a>
                </li>
                <li>
                  <i className="bx bx-phone-call" />
                  <a href="tel:+8562-65516-595">+91 253 2507474</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-item contact-right">
              <h3>Get In Touch</h3>
              <form id="contactForm">
                <div className="row">
                  <div className="col-sm-6 col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        required=""
                        data-error="Please enter your name"
                        placeholder="Name"
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-6">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        required=""
                        data-error="Please enter your email"
                        placeholder="Email"
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="phone_number"
                        id="phone_number"
                        required=""
                        data-error="Please enter your number"
                        className="form-control"
                        placeholder="Phone"
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="msg_subject"
                        id="msg_subject"
                        className="form-control"
                        required=""
                        data-error="Please enter your subject"
                        placeholder="Subject"
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        className="form-control"
                        id="message"
                        cols={30}
                        rows={8}
                        required=""
                        data-error="Write your message"
                        placeholder="Message"
                        defaultValue={""}
                      />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-12">
                    <button type="submit" className="contact-btn btn">
                      Send Message
                    </button>
                    <div id="msgSubmit" className="h3 text-center hidden" />
                    <div className="clearfix" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Contact */}
    {/* Map */}
    <div className="map-area">
      <iframe
        id="map"
        src="https://www.google.com/maps?q=507,+MAYURA+LANDMARK-I,+1,+Veera+Desai+Industrial+Estate+Rd,+Veera+Desai+Industrial+Estate,+Andheri+West,+Mumbai,+Maharashtra+400053&output=embed"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex={0}
      />
    </div>
    {/* End Map */}
    {/* <Footer/> */}
  </>
  

  )
}

export default Contact