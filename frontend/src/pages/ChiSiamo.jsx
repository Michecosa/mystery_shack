import chisiamoImg from "../assets/chisiamo.png";
import chisiamoSfondo from "../assets/chisiamoSfondo.png";
import interrogativoImg from "../assets/interrogativo.png";
import { Link } from "react-router-dom";
import Text from "../components/Text";
import "../ChiSiamo.min.css";

export default function ChiSiamo() {
  const staff = [
    {
      nome: "Soos",
      ruolo: "Tuttofare / Guru",
      desc: "Se qualcosa si rompe, lui lo aggiusta con il nastro isolante e il potere dell'ottimismo.",
    },
    {
      nome: "Wendy",
      ruolo: "Cassa / Gestione Stress",
      desc: "È qui solo perché paghiamo (poco) e per guardare il telefono in santa pace.",
    },
    {
      nome: "Dipper & Mabel",
      ruolo: "Stagisti non pagati",
      desc: "Si occupano di catalogare mostri e di far sì che lo zio Stan non finisca in prigione.",
    },
  ];

  const fireflies = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: `${Math.random() * 15 + 10}s`,
    flashDuration: `${Math.random() * 3 + 2}s`,
    delay: `${Math.random() * 5}s`,
  }));

  const backgroundStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(52, 46, 44, 0.11), rgba(0, 0, 0, 0)), url(${chisiamoSfondo})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "scroll",
  };

  return (
    <div style={{ paddingBottom: "10rem" }}>
      <div
        style={{
          ...backgroundStyle,
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          paddingTop: "8rem",
          paddingBottom: "5rem",
        }}
      >
        <div style={{ opacity: "0.8" }}>
          <img
            src={interrogativoImg}
            alt="Mystery Mark"
            className="d-none d-lg-block"
            style={{
              position: "absolute",
              top: "10%",
              left: "6%",
              width: "150px",
              zIndex: 15,
              pointerEvents: "none",
              filter: "drop-shadow(0 0 10px rgb(255, 255, 255))",
            }}
          />
          <img
            src={interrogativoImg}
            alt="Mystery Mark"
            className="d-none d-lg-block"
            style={{
              position: "absolute",
              top: "40%",
              right: "6%",
              width: "160px",
              zIndex: 15,
              pointerEvents: "none",
              filter: "drop-shadow(0 0 10px rgb(255, 255, 255))",
              transform: "rotate(25deg)",
            }}
          />
          <img
            src={interrogativoImg}
            alt="Mystery Mark"
            className="d-none d-lg-block"
            style={{
              position: "absolute",
              bottom: "5%",
              left: "3%",
              width: "100px",
              zIndex: 15,
              pointerEvents: "none",
              filter: "drop-shadow(0 0 10px rgb(255, 255, 255))",
              transform: "rotate(45deg)",
            }}
          />
        </div>
        <div
          className="firefly-container"
          style={{ position: "absolute", zIndex: 1 }}
        >
          {fireflies.map((f) => (
            <div
              key={f.id}
              className="firefly"
              style={{
                left: f.left,
                top: f.top,
                width: f.size,
                height: f.size,
                animationDuration: `${f.duration}, ${f.flashDuration}`,
                animationDelay: `${f.delay}`,
              }}
            />
          ))}
        </div>

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2
                className="display-4 fw-bold my-4"
                style={{ color: "#dc3545" }}
              >
                Il Benvenuto del Direttore
              </h2>
              <p className="lead fst-italic mb-4">
                "Benvenuti! Sono <b>Stanford Pines</b>, ma per voi il Signor
                Pines. Ho fondato il Mystery Shack perché credo che ognuno di
                voi meriti di spendere i propri risparmi in cose che non capisce
                minimamente. Siamo l'unica{" "}
                <span
                  className="text-decoration-line-through"
                  style={{ color: "#f3e5abac" }}
                >
                  trappola per turisti
                </span>{" "}
                attrazione culturale certificata di Gravity Falls."
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <img
                src={chisiamoImg}
                alt="Il Mystery Shack e Stan Pines"
                className="img-fluid"
                style={{
                  margin: "auto",
                  width: "60%",
                  height: "auto",
                  display: "block",
                  objectFit: "contain",
                  filter: "drop-shadow(0 0 7px rgba(21, 7, 7, 0.76))",
                  position: "relative",
                  zIndex: 10,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Text />

      <div
        className="container py-5"
        style={{ position: "relative", zIndex: 3 }}
      >
        <div className="text-center mt-5">
          <Link to="/reliquie" className="text-decoration-none">
            <button
              className="btn btn-lg btn-danger px-5 py-3 rounded-pill fw-bold"
              style={{
                fontSize: "1.5rem",
                borderBottom: "6px solid #9d252f",
                transition: "0.2s",
              }}
            >
              BASTA CHIACCHIERE, PORTAMI AI PRODOTTI!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
