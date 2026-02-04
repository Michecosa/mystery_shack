import jumbotronChiSiamo from "../assets/chisiamo.png";
import legnoImg from "../assets/legno.png";
import ramoImg0 from "../assets/backgroundEl1.png";
import pageImg from "../assets/page.png";

export default function ChiSiamo() {
  const getWoodStyle = (rotation) => ({
    backgroundImage: `url(${legnoImg})`,
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    padding: "6rem 5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "#e0d7c6",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.44)",
    filter: "drop-shadow(0 0 10px rgb(255, 193, 7))",
    transform: `rotate(${rotation}deg)`,
  });

  const pageStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.42), rgba(44, 31, 23, 0), rgba(118, 118, 118, 0), rgba(44, 31, 23, 0.42))`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "15rem",
    paddingTop: "0rem",
    filter: "drop-shadow(0 10px 10px rgba(0, 0, 0, 0.49))",
  };

  return (
    <div style={{ backgroundColor: "#000" }}>
      <div
        className="d-flex justify-content-center align-items-start position-relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgb(0, 0, 0), rgba(118, 118, 118, 0.3), rgb(0, 0, 0)), url(${jumbotronChiSiamo})`,
          minHeight: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          zIndex: "9",
        }}
      ></div>

      <div
        className="row align-items-stretch justify-content-center g-5 px-3 position-relative"
        style={{ ...pageStyle, paddingBottom: "15rem", margin: 0 }}
      >
        <div
          className="text-center"
          style={{
            paddingBottom: "2rem",
            filter: "drop-shadow(0 0 10px rgb(255, 193, 7))",
          }}
        >
          <h2
            className="display-1 text-uppercase mb-4 h2-offer-clients text-warning"
            style={{
              borderBottom: "2px solid",
              display: "inline",
              width: "auto",
            }}
          >
            Chi siamo noi?
          </h2>
        </div>

        <div className="col-12 col-md-6 col-lg-5 d-flex flex-column gap-4 text-center">
          <div style={getWoodStyle(-2)}>
            <h2>I Custodi del Mistero</h2>
            <p className="flex-grow-1 mb-0">
              Creato dal "filantropo" Stan Pines, il Mystery Shack è il faro
              dell'ignoto nell'Oregon. Il posto più onesto della contea (non
              controllate i registri fiscali).
            </p>
          </div>

          <div style={getWoodStyle(2)}>
            <h2>Meraviglie Inaudite</h2>
            <p className="flex-grow-1 mb-0">
              Dal Jackalope alla Donna Gatto, ogni reperto è garantito come
              "probabilmente vero". Se non lo vedi, è solo troppo spaventoso per
              i tuoi occhi mortali.
            </p>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-5 d-flex flex-column gap-4 text-center">
          <div style={getWoodStyle(5)}>
            <h2>Un Team imbattibile</h2>
            <p className="flex-grow-1 mb-0">
              Tra esperti del paranormale (e delle pulizie) e stagisti
              silenziosi, siamo una famiglia. Soos ripara tutto, Wendy... resta
              seduta con stile.
            </p>
          </div>

          <div style={getWoodStyle(-2)}>
            <h2>La Nostra Promessa</h2>
            <p className="flex-grow-1 mb-0">
              La vostra soddisfazione è importante, ma il vostro denaro è la
              nostra passione. Entrate come estranei, uscite con almeno tre
              portachiavi!
            </p>
          </div>

          <img
            src={ramoImg0}
            alt="ramo"
            className="m-0 p-0 position-absolute d-none d-lg-block"
            style={{
              width: "50vw",
              height: "auto",
              bottom: "0rem",
              left: "0%",
            }}
          />
        </div>
      </div>
    </div>
  );
}
