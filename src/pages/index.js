import { graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import SearchEngineOptimization from "../components/seo";
import Officecounter from "../components/Officecounter";

const IndexPage = () => {
  return (
    <div>
      <SearchEngineOptimization title="Home" />
      <div className="bg-ui-light pb-12 lg:pb-0 w-full px-4 sm:px-6 lg:px-12 bg-gradient">
        <div className="flex flex-col lg:flex-row items-center max-w-screen-2xl mx-auto pt-[100px] md:pt-0">
          <div className="w-[50%] absolute right-0 top-[50px] md:relative md:top-auto md:w-[80%] lg:w-1/2 h-auto ">
          <StaticImage
            src="../images/dog-hero.png"
            alt="A brown dog sitting on the white chair with red cup"
            placeholder="tracedSVG"
            
            objectFit="contain"
          />
          </div>
         
          <div>
            <h1 className="logo-text-ui">Kalina Vet</h1>
            <p className="mt-2  font-normal max-w-[450px]">
              Herzlich Willkommen bei der <b>Kleintierpraxis</b> in Zasieki. In
              unserer Kleintierpraxis kümmern wir uns vollumfassend um Ihr
              Haustier und bieten Ihnen und Ihrem kleinen Liebling ein
              umfangreiches Leistungsspektrum an.
            </p>
            {/*  <p className="mt-2 text-lg font-normal">Tierarzt</p>
            <p className="mt-0 text-5xl font-normal">Kalina Adamkiewicz</p> */}
            <Link
              to="/kontakt"
              className="btn-ui mt-16 min-w-full lg:min-w-0 inline-block"
            >
              Termin Buchen
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-ui-red">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center max-w-screen-2xl mx-auto">

          
          <div className="grid grid-col-1 md:grid-cols-5 justify-center gap-8 flex-wrap text-white  text-xl ">
            {/*  <div className="w-[350px] text-center ">
            <Link to="/kontakt">
            <StaticImage 
              src="../images/hotline.png"
              alt="Telefon"
              placeholder="tracedSVG"
              objectFit="contain"
              className="w-16 mb-4"
              />
              <p>Termin nur nach telefonischer Terminvereinbarung</p>
              </Link>
          </div> */}

            <div className="md:max-w-[350px] w-full md:w-[350px] text-center">
              <Link to="/kontakt">
                <StaticImage
                  src="../images/profilaktyka.png"
                  alt="profilaktyka"
                  placeholder="tracedSVG"
                  objectFit="contain"
                  className="w-16 mb-4"
                />
                <p>Verhütung</p>
              </Link>
            </div>
            {/*  <div className="w-[350px] text-center">
          <Link to="/kontakt">
          <StaticImage 
              src="../images/location.png"
              alt="Lokalizacja"
              placeholder="tracedSVG"
              objectFit="contain"
              className="w-16 mb-4"
              />
            <p>Neue Adresse: <br />Zasieki 75</p>
            </Link>
          </div> */}
            <div className="md:max-w-[350px] w-full md:w-[350px] text-center">
              <StaticImage
                src="../images/medical-report.png"
                alt="Untersuchung"
                placeholder="tracedSVG"
                objectFit="contain"
                className="w-16 mb-4"
              />
              <p>Untersuchung</p>
            </div>
            <div className="md:max-w-[350px] w-full md:w-[350px] text-center">
              <StaticImage
                src="../images/scalpel.png"
                alt="Chirurgie"
                placeholder="tracedSVG"
                objectFit="contain"
                className="w-16 mb-4"
              />
              <p>Chirurgie</p>
            </div>
            <div className="md:max-w-[350px] w-full md:w-[350px] text-center">
              <StaticImage
                src="../images/medicine.png"
                alt="Medicine"
                placeholder="tracedSVG"
                objectFit="contain"
                className="w-16 mb-4"
              />
              <p>Medikamenten</p>
            </div>
            
            <Link
              to="/leistungen"
              className=" max-w-[200px] items-center  flex md:mr-auto md:ml-0 text-center text-white btn-ui btn-second border-white shadow-[#bf12029c]"
            >
              Lernen Sie alle unsere Services kennen
            </Link>
          
          </div>
        
          </div>
        </div>
      </div>
      <div className="container my-12 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="">
            <Link to="/kontakt">
              <div className="bg-ui-red w-24 h-24 rounded-full mx-auto p-4">
                <StaticImage
                  src="../images/vet-calender.png"
                  alt="Medicine"
                  placeholder="tracedSVG"
                  objectFit="contain"
                  className="w-16"
                />
              </div>
              <h2 className="text-3xl">Termin</h2>
              <p>Montag bis Freitag.</p>
              <p>Bitte rufen Sie uns an, um einen Termin zu vereinbaren.</p>
            </Link>
          </div>
          <div className="">
            <a href="https://goo.gl/maps/RhWSeY2qMm7NY9eS9" target="_blank">
              <div className="bg-ui-red w-24 h-24 rounded-full mx-auto p-4">
                <StaticImage
                  src="../images/location.png"
                  alt="Medicine"
                  placeholder="tracedSVG"
                  objectFit="contain"
                  className="w-16"
                />
              </div>
              <h2 className="text-3xl">Neue Adresse</h2>
              <p>Tierarzt in Zasieki</p>
              <p>Zasieki 75</p>
            </a>
          </div>
          <div className="">
            <div className="bg-ui-red w-24 h-24 rounded-full mx-auto p-4">
              <StaticImage
                src="../images/pet-shop.png"
                alt="pet shop"
                placeholder="tracedSVG"
                objectFit="contain"
                className="w-16"
              />
            </div>

            <h2 className="text-3xl">Online Shop</h2>
            {/* <p><b>Medikamente</b> nur für Praxispatienten</p> */}
            <p>
              <b>Haustierprodukte</b>
            </p>
            <p className="uppercase font-semibold text-ui-red">
              <b>demnächst</b>
            </p>
            {/* <p><b>Zahlung</b> per Karte oder Nachnahme</p>
          <p><b>Abholung</b> in der Praxis oder Apotheke</p> */}
          </div>
        </div>
      </div>
      <div className="my-24 bg-ui-light">
      <div className="container ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 class="text-3xl mb-8 ">Über Uns</h2>
            <p className="max-w-[700px] mb-4"><strong>Kalina Adamkiewicz</strong> ist Tierärztin und Inhaberin einer Tierarztpraxis in Zasieki. Darüber hinaus absolvierte sie auch eine Spezialisierung in Kleintierchirurgie. Sie hat an zahlreichen Weiterbildungen in der Veterinärmedizin teilgenommen.</p>
            <p className="max-w-[700px]">Sie verbessert ständig ihre Qualifikationen, um Ihren Haustieren so viel wie möglich zu helfen.</p>
            <Officecounter />
            {/* <Link to='/uber-uns'
            class="mr-4  btn-ui btn-second text-sm font-medium text-gray-700 hover:text-gray-600">
              Finde mehr heraus
            </Link> */}
        </div>
        <div>
        <StaticImage
                src="../images/kitty.png"
                alt="Kitty"
                placeholder=""
                objectFit="contain"
                className=""
              />
        </div>
        </div>
       
      </div>
      </div>
      {/*  <div className="layout-base my-12 min-h-0">
        <Grid
          title={"Producte"}
          cta={{ to: "/products", text: "Alle Produkte" }}
        >
          {prods.slice(0, 4).map(p => {
            return <ProductListItem product={p} key={p.handle} />
          })}
        </Grid>
        <div className="mt-12">
          <Grid
            title="Kategorien"
            cta={{ to: "/collections", text: "Alle Kategorien" }}
          >
            {collectionPreviews.slice(0, 4).map(collection => {
              return (
                <CollectionPreview
                  key={collection.id}
                  collection={collection}
                />
              )
            })}
          </Grid>
        </div>
      </div> */}
    </div>
  );
};

export default IndexPage;
