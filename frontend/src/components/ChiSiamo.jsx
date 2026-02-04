import jumbotronChiSiamo from "../assets/chisiamo.png";
import SimpleCard from "../components/SimpleCard";
import ramoImg0 from "../assets/backgroundEl1.png";

export default function ChiSiamo() {
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
    <>
      <div
        className="row align-items-stretch justify-content-center g-5 px-3 position-relative"
        style={{
          ...pageStyle,
          paddingBottom: "15rem",
          paddingTop: "5rem",
          margin: 0,
        }}
      >
        <div
          className="text-center"
          style={{
            paddingBottom: "2rem",
          }}
        >
          <h2
            className="display-1 fw-normal text-uppercase mb-4 h2-offer-clients text-warning"
            style={{
              borderBottom: "2px solid",
              display: "inline",
              width: "auto",
            }}
          >
            Chi siamo noi?
          </h2>
        </div>

        <div
          className="col-12 col-md-6 col-lg-5 d-flex flex-column gap-4 text-center"
          style={{ zIndex: 3 }}
        >
          <SimpleCard title="I Custodi del Mistero">
            Creato dal "filantropo" Stan Pines, il Mystery Shack è il faro
            dell'ignoto nell'Oregon. Il posto più onesto della contea (non
            controllate i registri fiscali).
          </SimpleCard>

          <SimpleCard title="Meraviglie Inaudite">
            Dal Jackalope alla Donna Gatto, ogni reperto è garantito come
            "probabilmente vero". Se non lo vedi, è solo troppo spaventoso per i
            tuoi occhi mortali.
          </SimpleCard>
        </div>

        <div
          className="col-12 col-md-6 col-lg-5 d-flex flex-column gap-4 text-center"
          style={{ zIndex: 3 }}
        >
          <SimpleCard title="Un Team imbattibile">
            Tra esperti del paranormale (e delle pulizie) e stagisti silenziosi,
            siamo una famiglia. Soos ripara tutto, Wendy... resta seduta con
            stile.
          </SimpleCard>

          <SimpleCard title="Una Promessa">
            La vostra soddisfazione è importante, ma il vostro denaro è la
            nostra passione. Entrate come estranei, uscite con almeno tre
            portachiavi!
          </SimpleCard>
        </div>

        <img
          src={ramoImg0}
          alt="ramo"
          className="m-0 p-0 position-absolute"
          style={{
            width: "50vw",
            height: "auto",
            bottom: "0rem",
            left: "0%",
          }}
        />
      </div>
    </>
  );
}
