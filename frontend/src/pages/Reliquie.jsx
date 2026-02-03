import { useState } from "react";
import jumbotronImg from "../assets/jumbotronReliquie.png";
import Card from "../components/Card";
import soldi from "../assets/soldi.png";
import cristalloImg from "../assets/cristalli.png";
import diarioImg from "../assets/diario3.png";
import fezImg from "../assets/fez.png";
import gnomoImg from "../assets/gnome.png";
import occhiImg from "../assets/occhi.png";
import conirvoImg from "../assets/conirvo.png";
import piedeImg from "../assets/piede.png";
import orsicornoImg from "../assets/orsicorno.png";
import reliquieImg from "../assets/cartello.png";
import lampadaImg from "../assets/lampada.png";

export default function Reliquie() {
  const [searchTerm, setSearchTerm] = useState("");

  const reliquieProducts = [
    {
      id: 6,
      title: "Gnomo da Giardino",
      price: "45.00",
      image: gnomoImg,
      tag: "VIVO?",
      desc: "Sta fermo tutto il giorno. Potrebbe scappare di notte.",
    },
    {
      id: 2,
      title: "Banconota da -12 Dollari",
      price: "12.00",
      image: soldi,
      tag: "MENO CHE INUTILE",
      desc: "È meno che inutile! Ma è un pezzo da collezione.",
    },
    {
      id: 3,
      title: "Cristalli della Statura",
      price: "350.00",
      image: cristalloImg,
      tag: null,
      desc: "Ti rendono alto 3 metri o piccolo come un topo. A caso.",
    },
    {
      id: 1,
      title: "L'Orsicorno Impeagliato",
      price: "189.99",
      image: orsicornoImg,
      tag: "RARO",
      desc: "Maestoso, feroce e decisamente incollato a mano. Non rimborsabile se il corno si stacca.",
    },
    {
      id: 5,
      title: "Il Fez di Stan Pines",
      price: "79.99",
      image: fezImg,
      tag: null,
      desc: "Il cappello ufficiale per chi vuole gestire un'attività discutibile.",
    },
    {
      id: 4,
      title: "Diario #3 Originale",
      price: "618.00",
      image: diarioImg,
      tag: "NON TOCCARE",
      desc: "Pagine piene di creature strane e codici...",
    },
    {
      id: 7,
      title: "Barattolo di Occhi Onniscenti",
      price: "89.99",
      image: occhiImg,
      tag: null,
      desc: "Ottimo per avere un testimone oculare dei tuoi crimini. Nota: sbattono le palpebre raramente.",
    },
    {
      id: 8,
      title: "Il Leggendario Conirvo",
      price: "149.99",
      image: conirvoImg,
      tag: "RARO",
      desc: "Metà coniglio, metà cervo, 100% tassidermia discutibile. Stan giura di averlo preso a mani nude.",
    },
    {
      id: 9,
      title: "Impronta di Sasquatch Fossile",
      price: "250.00",
      image: piedeImg,
      tag: null,
      desc: "Trovata nel bosco o creata con cemento fresco? Il mistero fa parte del prezzo!",
    },
  ];

  const filteredProducts = reliquieProducts.filter((product) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      product.title.toLowerCase().includes(searchLower) ||
      product.desc.toLowerCase().includes(searchLower)
    );
  });

  return (
    <>
      <div>
        <header
          className="jumbotron-section pt-5 d-flex justify-content-center align-items-center"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.4) 60%, rgb(0, 0, 0) 100%), url(${jumbotronImg})`,
            minHeight: "400px",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="position-relative">
            {/* Titolo Principale */}
            <img
              src={reliquieImg}
              alt="Benvenuti al Mystery Shack"
              className="img-fluid"
              style={{
                maxHeight: "350px",
                width: "auto",
              }}
            />

            {/* LAMPADA DESTRA */}
            <div
              className="d-none d-lg-block position-absolute"
              style={{
                bottom: "-20px",
                right: "-80px",
                height: "180px",
                zIndex: 5,
                pointerEvents: "none",
                filter: "drop-shadow(0 -15px 10px rgb(255, 191, 0))",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 40%, transparent 95%)",
                maskImage:
                  "linear-gradient(to bottom, black 85%, transparent 95%)",
              }}
            >
              <img src={lampadaImg} alt="Lampada" style={{ height: "100%" }} />
            </div>

            {/* LAMPADA SINISTRA */}
            <div
              className="d-none d-lg-block position-absolute"
              style={{
                bottom: "-20px",
                left: "-95px",
                height: "200px",
                zIndex: 5,
                pointerEvents: "none",
                filter: "drop-shadow(0 -15px 10px rgb(255, 191, 0))",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 40%, transparent 95%)",
                maskImage:
                  "linear-gradient(to bottom, black 85%, transparent 95%)",
              }}
            >
              <img src={lampadaImg} alt="Lampada" style={{ height: "100%" }} />
            </div>
          </div>
        </header>

        {/* Sezione Griglia Prodotti */}
        <section className="container">
          <div className="container text-center text-uppercase fw-light p-3 shadow-sm">
            <p
              className=" mb-0"
              style={{ fontFamily: '"Oswald", sans-serif', fontSize: "0.8rem" }}
            >
              Nessun rimborso. Gli oggetti potrebbero essere maledetti,
              infestati o semplicemente pezzi di plastica incollati male.
              Acquistando, accetti di non fare causa a Stan Pines o alla Mystery
              Shack.
            </p>
          </div>

          <div className="row justify-content-center mt-3 mb-5">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control rounded-0 shadow-none custom-input"
                placeholder="Cerca tra i misteri (es. Diario, Sasquatch...)"
                style={{
                  fontFamily: '"Oswald", sans-serif',
                  backgroundColor: "transparent",
                  color: "white",
                }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="row g-4">
            {filteredProducts.length > 0 ? (
              <>
                {filteredProducts.map((product) => (
                  <Card key={product.id} product={product} />
                ))}

                <div className="col-12 text-center my-5">
                  <button className="btn btn-warning fw-bold rounded-0 btn-card">
                    MOSTRAMI ALTRO!
                  </button>
                </div>
              </>
            ) : (
              <div className="col-12 text-center py-5">
                <h3
                  style={{ fontFamily: '"Oswald", sans-serif', color: "white" }}
                >
                  Nessun reperto trovato! <br />
                  Prova a cercare altro
                </h3>
              </div>
            )}
          </div>
        </section>
      </div>
      <div
        className="container text-center text-uppercase fw-light pt-3 px-3 shadow-sm"
        style={{ marginBottom: "-3rem" }}
      >
        <p style={{ fontFamily: '"Oswald", sans-serif', fontSize: "0.8rem" }}>
          Nessun rimborso. Gli oggetti potrebbero essere maledetti, infestati o
          semplicemente pezzi di plastica incollati male. Acquistando, accetti
          di non fare causa a Stan Pines o alla Mystery Shack.
        </p>
      </div>
    </>
  );
}
