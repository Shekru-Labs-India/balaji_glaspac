import React from "react";
import { Link } from "react-router-dom";
import rightImage from "../assets/img/client1.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import client1 from "../assets/img/client1.png";
import client2 from "../assets/img/client2.png";
import client3 from "../assets/img/client3.png";
import client4 from "../assets/img/client4.png";
import client5 from "../assets/img/client5.png";
import client6 from "../assets/img/client6.png";
import client7 from "../assets/img/client7.png";
import client8 from "../assets/img/client8.png";
import client9 from "../assets/img/client9.png";
import client10 from "../assets/img/client10.png";
import client11 from "../assets/img/client11.png";
import client12 from "../assets/img/client12.png";
import client13 from "../assets/img/client13.png";
import client14 from "../assets/img/client14.png";
import client15 from "../assets/img/client15.png";
import client16 from "../assets/img/client16.png";
import client17 from "../assets/img/client17.png";
import client18 from "../assets/img/client18.png";
import client19 from "../assets/img/client19.png";
import client20 from "../assets/img/client20.png";
import client21 from "../assets/img/client21.png";

function Clients() {
  const clientsList = [
    {
      logo: client4,
      name: "SULA VINEYARDS",
      type: "Wine & Beverages",
      description:
        "Exclusive partner for <strong>premium wine bottle solutions</strong> for India's largest wine producer. Our collaboration delivers <strong>sophisticated glass packaging</strong> that enhances the premium positioning of their wines. Providing <strong>specialized wine bottles</strong> meeting international quality standards while maintaining the aesthetic appeal required for the luxury wine segment. Our bottles ensure <strong>optimal preservation</strong> of their award-winning wines.",
    },

    {
      logo: client2,
      name: "RADICO KHAITAN",
      type: "Spirits & Beverages Manufacturing",
      description:
        "Premier partner for <strong>premium glass bottle solutions</strong> for Radico's diverse spirits portfolio. Our collaboration delivers <strong>sophisticated packaging designs</strong> that enhance brand value and maintain product excellence. Providing <strong>customized glass bottles</strong> that meet international quality standards while showcasing the premium nature of their iconic brands like Magic Moments, Rampur, and 8PM.",
    },
    {
      logo: client3,
      name: "DR. REDDY'S LABORATORIES",
      type: "Pharmaceutical Manufacturing",
      description:
        "Trusted partner providing <strong>pharmaceutical-grade glass packaging</strong> for Dr. Reddy's extensive medicine portfolio. Our collaboration ensures <strong>highest quality standards</strong> for drug safety and stability. Delivering <strong>specialized glass vials and containers</strong> that meet international pharmaceutical regulations, including USP, EP, and JP standards, while maintaining product integrity throughout its shelf life.",
    },
    {
      logo: client1,
      name: "NESTLÉ",
      type: "Food & Beverage Manufacturing",
      description:
        "Long-standing partnership providing <strong>premium glass packaging solutions</strong> for Nestlé's diverse food and beverage portfolio. Successfully delivered <strong>food-grade glass containers</strong> meeting international safety standards and sustainability goals. Our packaging solutions ensure <strong>product freshness</strong> and maintain the highest quality standards for their iconic brands.",
    },

    {
      logo: client5,
      name: "GLAXOSMITHKLINE (GSK)",
      type: "Pharmaceutical & Healthcare",
      description:
        "Strategic partnership providing <strong>pharmaceutical-grade glass packaging</strong> for GSK's diverse healthcare portfolio. Our collaboration ensures <strong>highest quality standards</strong> for medical packaging solutions. Delivering <strong>specialized glass containers</strong> that meet stringent pharmaceutical regulations and GMP standards. Our packaging solutions guarantee <strong>product integrity</strong> and maintain the efficacy of their products.",
    },
    {
      logo: client6,
      name: "LAZARO",
      type: "Luxury Perfumes & Fragrances",
      description:
        "Exclusive partner providing <strong>premium glass bottle solutions</strong> for Lazaro's luxury fragrance collection. Our collaboration delivers <strong>sophisticated and elegant designs</strong> that enhance brand prestige. Delivering <strong>high-end glass bottles</strong> that combine aesthetic excellence with functional perfection, meeting international quality standards for the luxury perfume industry.",
    },
    {
      logo: client7,
      name: "UNILEVER",
      type: "Consumer Goods & Food Products",
      description:
        "Long-term strategic partner providing <strong>diverse glass packaging solutions</strong> for Unilever's wide range of consumer products. Our collaboration delivers <strong>sustainable glass packaging</strong> that aligns with their environmental commitments. Providing <strong>food-grade containers</strong> meeting international safety standards while supporting their global sustainability initiatives. Our solutions ensure <strong>product integrity</strong> across their food, beverage, and personal care segments.",
    },
    {
      logo: client8,
      name: "REVLON",
      type: "Cosmetics & Beauty Products",
      description:
        "Premium partner providing <strong>sophisticated glass packaging solutions</strong> for Revlon's beauty and cosmetic products. Our collaboration delivers <strong>elegant glass containers</strong> that enhance brand aesthetics and product preservation. Providing <strong>customized beauty packaging</strong> meeting international quality and safety standards while maintaining the luxurious appeal of their iconic cosmetic lines.",
    },
    {
      logo: client9,
      name: "HALDIRAM'S",
      type: "Food & Snacks Manufacturing",
      description:
        "Trusted partner providing <strong>food-grade glass packaging solutions</strong> for Haldiram's extensive snacks and food products. Our collaboration ensures <strong>premium quality containers</strong> that maintain product freshness and shelf life. Delivering <strong>specialized glass jars and containers</strong> that meet international food safety standards while preserving the authentic taste and quality of their iconic Indian snacks and ready-to-eat products.",
    },
    {
      logo: client10,
      name: "MERCK",
      type: "Pharmaceutical & Life Sciences",
      description:
        "Strategic partner providing <strong>pharmaceutical-grade glass packaging solutions</strong> for Merck's innovative medicines and life science products. Our collaboration ensures <strong>highest quality standards</strong> for drug safety and stability. Delivering <strong>specialized glass vials and containers</strong> that meet stringent international pharmaceutical regulations and GMP standards. Our packaging solutions maintain <strong>product integrity</strong> throughout the supply chain.",
    },
    {
      logo: client11,
      name: "DABUR",
      type: "Ayurvedic & Natural Products",
      description:
        "Trusted partner providing <strong>specialized glass packaging solutions</strong> for Dabur's extensive range of ayurvedic and natural products. Our collaboration ensures <strong>premium quality containers</strong> that preserve the efficacy of natural ingredients. Delivering <strong>customized glass packaging</strong> that meets international quality standards while maintaining product integrity. Our solutions support their commitment to delivering authentic ayurvedic and natural healthcare products.",
    },
    {
      logo: client12,
      name: "CARLSBERG",
      type: "Beer & Beverage Manufacturing",
      description:
        "Premium partner providing <strong>specialized glass bottle solutions</strong> for Carlsberg's iconic beer portfolio. Our collaboration delivers <strong>high-quality beer bottles</strong> that maintain product freshness and brand excellence. Delivering <strong>customized glass packaging</strong> that meets international brewing standards while enhancing the premium positioning of their brands. Our solutions ensure <strong>optimal preservation</strong> of their world-renowned beers.",
    },
    {
      logo: client13,
      name: "BACARDI",
      type: "Spirits & Beverages Manufacturing",
      description:
        "Premium partner providing <strong>luxury glass bottle solutions</strong> for Bacardi's iconic spirits portfolio. Our collaboration delivers <strong>sophisticated bottle designs</strong> that enhance brand prestige and product excellence. Delivering <strong>premium glass packaging</strong> that meets international quality standards while maintaining the distinctive character of their world-renowned spirits. Our solutions ensure <strong>perfect preservation</strong> of their premium rum and other spirits.",
    },
    {
      logo: client14,
      name: "CHANEL",
      type: "Luxury Fashion & Beauty",
      description:
        "Exclusive partner providing <strong>luxury glass packaging solutions</strong> for Chanel's prestigious perfume and beauty collections. Our collaboration delivers <strong>exquisite glass designs</strong> that embody their legendary brand elegance. Delivering <strong>premium glass containers</strong> that meet the highest quality standards while maintaining the luxurious aesthetics of their iconic products. Our solutions ensure <strong>perfect presentation</strong> of their world-renowned fragrances and beauty items.",
    },
    {
      logo: client15,
      name: "COCA-COLA",
      type: "Beverage Manufacturing",
      description:
        "Strategic partner providing <strong>iconic glass bottle solutions</strong> for Coca-Cola's legendary beverage portfolio. Our collaboration delivers <strong>signature glass packaging</strong> that maintains their world-famous brand identity. Delivering <strong>premium beverage containers</strong> that meet international quality and safety standards while preserving the distinctive character of their products. Our solutions ensure <strong>perfect preservation</strong> of their globally recognized beverages.",
    },
    {
      logo: client16,
      name: "JTC GROUP",
      type: "Industrial & Manufacturing",
      description:
        "Strategic partner providing <strong>specialized industrial glass solutions</strong> for JTC Group's diverse manufacturing requirements. Our collaboration delivers <strong>high-performance glass products</strong> that meet precise industrial specifications. Delivering <strong>customized glass packaging</strong> that adheres to international manufacturing standards while ensuring optimal functionality. Our solutions support their commitment to quality and innovation across various industrial applications.",
    },
    {
      logo: client17,
      name: "UNITED SPIRITS",
      type: "Spirits & Beverages Manufacturing",
      description:
        "Premium partner providing <strong>specialized glass bottle solutions</strong> for United Spirits' diverse alcoholic beverage portfolio. Our collaboration delivers <strong>premium quality bottles</strong> that enhance brand value and ensure product excellence. Delivering <strong>customized glass packaging</strong> that meets international quality standards while maintaining the distinctive character of their renowned brands. Our solutions ensure <strong>perfect preservation</strong> of their premium spirits across various categories.",
    },
    {
      logo: client18,
      name: "AMUL",
      type: "Dairy & Food Products",
      description:
        "Trusted partner providing <strong>food-grade glass packaging solutions</strong> for Amul's diverse dairy and food product range. Our collaboration delivers <strong>premium quality containers</strong> that ensure product freshness and safety. Delivering <strong>specialized glass packaging</strong> that meets international food safety standards while maintaining the integrity of India's most beloved dairy brand. Our solutions support their commitment to delivering <strong>quality dairy products</strong> across the nation.",
    },
    {
      logo: client19,
      name: "DIAGEO",
      type: "Premium Spirits & Beverages",
      description:
        "Strategic partner providing <strong>premium glass bottle solutions</strong> for Diageo's world-class spirits portfolio. Our collaboration delivers <strong>luxury glass packaging</strong> that enhances their iconic brands' prestige. Delivering <strong>sophisticated bottle designs</strong> that meet international quality standards while maintaining the exceptional character of their premium spirits. Our solutions ensure <strong>perfect presentation</strong> of their globally renowned brands including Johnnie Walker, Smirnoff, and Tanqueray.",
    },
    {
      logo: client20,
      name: "SAB MILLER",
      type: "Beer & Beverage Manufacturing",
      description:
        "Strategic partner providing <strong>premium glass bottle solutions</strong> for SABMiller's extensive beer portfolio. Our collaboration delivers <strong>high-quality beer bottles</strong> that maintain product excellence and brand integrity. Delivering <strong>specialized glass packaging</strong> that meets international brewing standards while ensuring optimal preservation. Our solutions support their commitment to <strong>premium beer packaging</strong> across their diverse brand portfolio.",
    },
    {
      logo: client21,
      name: "L'ORÉAL",
      type: "Cosmetics & Beauty Products",
      description:
        "Premium partner providing <strong>luxury glass packaging solutions</strong> for L'Oréal's extensive beauty and cosmetics portfolio. Our collaboration delivers <strong>sophisticated glass containers</strong> that enhance brand prestige and product preservation. Delivering <strong>customized beauty packaging</strong> that meets international quality standards while maintaining the luxurious aesthetics of their iconic brands. Our solutions ensure <strong>perfect presentation</strong> of their world-renowned beauty and skincare products.",
    },
  ];

  return (
    <div className="clients-wrapper">
      <Header />

      <section className="py-5 mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mx-auto text-center mt-5 mb-4 mb-lg-0">
              <div className="section-heading title-style5 mt-0 text-center">
                <h5 style={{ color: "#F15A22" }}>
                  <strong>Our Valued Clients</strong>
                </h5>
              </div>
              <h1
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  color: "#F15A22",
                }}
                className="text-center"
              >
                Success Stories
              </h1>
              <h1
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  color: "#F15A22",
                }}
                className="text-center"
              >
                & Partnerships
              </h1>
            </div>
          </div>
        </div>
      </section>

      <div className="clients-grid py-4">
        <div className="container">
          {clientsList.map((client, index) => (
            <div key={index} className="client-card mb-5 hover-effect">
              <div className="row align-items-center g-4">
                <div className="col-md-4 col-lg-3 text-center">
                  <div className="client-logo-wrapper p-3">
                    <div className="logo-container">
                      <img
                        src={client.logo}
                        alt={`${client.name} Logo`}
                        className="img-fluid client-logo rounded-circle"
                        style={{
                          width: "150px",
                          height: "150px",
                          objectFit: "cover",
                          transition: "transform 0.3s ease",
                          border: "2px solid #e9ecef",
                          padding: "10px",
                          backgroundColor: "#fff",
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-1 d-none d-lg-block">
                  <div
                    className="border-start border-success opacity-50 w-25"
                    style={{ height: "150px", margin: "0 auto" }}
                  ></div>
                </div>

                <div className="col-md-8 col-lg-8 text-center text-md-start">
                  <h2 className="fw-bold mb-3 d-none d-lg-block d-md-block">
                    {client.name}
                  </h2>
                  <h5 className="text-uppercase my-3">{client.type}</h5>
                  <p
                    className="text-muted p-0"
                    dangerouslySetInnerHTML={{ __html: client.description }}
                  ></p>
                </div>
              </div>

              {index !== clientsList.length - 1 && (
                <div className="d-flex justify-content-center mt-4">
                  <div className="border-top border-success opacity-50 w-90 my-6"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Clients;
