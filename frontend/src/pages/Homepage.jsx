import diarioImg from "../assets/diario3.png";
import fezImg from "../assets/fez.png";
import gnomoImg from "../assets/gnome.png";

import jumbotronImg from "../assets/jumbotron.png";
import benvenutiImg from "../assets/benvenuti.png";
import spedizioneImg from "../assets/spedizione.png";
import Card from "../components/Card";
import OfferClients from "../components/OfferClients";
import Text from "../components/Text";
import "../Hero.min.css";
import "../Button.min.css";

const Homepage = () => {
  const products = [
    {
      id: 1,
      title: "Diario #3 Originale",
      price: "618.00",
      image: diarioImg,
      tag: "NON TOCCARE",
      desc: "Pagine piene di creature strane e codici...",
    },
    {
      id: 2,
      title: "Il Fez di Stan Pines",
      price: "79.99",
      image: fezImg,
      tag: null,
      desc: "Il cappello ufficiale per chi vuole gestire un'attività discutibile.",
    },
    {
      id: 3,
      title: "Gnomo da Giardino",
      price: "45.00",
      image: gnomoImg,
      tag: "VIVO?",
      desc: "Sta fermo tutto il giorno. Potrebbe scappare di notte.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <header
        className="hero-section pt-5"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgb(0, 0, 0), rgba(118, 118, 118, 0.3), rgb(0, 0, 0)), url(${jumbotronImg})`,
        }}
      >
        <div className="container text-center">
          {" "}
          <div className="hero-content mx-auto">
            <div className="mb-4">
              <img
                src={benvenutiImg}
                alt="Benvenuti al Mystery Shack"
                className="img-fluid"
                style={{ maxHeight: "650px", width: "auto" }}
              />
            </div>

            <p
              className="hero-subtitle fs-3 special-font mx-auto text-white"
              style={{
                maxWidth: "700px",
                marginTop: "-2.5rem",
              }}
            >
              L'unico posto al mondo <br /> dove il sovranaturale costa poco
            </p>

            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center mt-4">
              <button className="btn-shack-primary px-5 py-3 fs-4">
                ACQUISTA ORA <br />
                (NO RIMBORSI!)
              </button>
            </div>
            <img
              src={spedizioneImg}
              alt="spedizione via carrello da golf"
              className="img-fluid mt-5"
              style={{ maxHeight: "120px", width: "auto" }}
            />
          </div>
        </div>

        {/* Badge No Refunds */}
        <div className="no-refunds-badge d-none d-lg-block">
          NO <br /> RIMBORSI
        </div>
      </header>

      {/* Griglia Prodotti */}
      <section className="container py-5">
        <div className="row g-4">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </section>
      <Text />
      <OfferClients />
    </div>
  );
};

export default Homepage;
