import { Link } from "react-router-dom"; // Import necessario
import "../Text.min.css";

const Text = () => {
  const contentArray = [
    "Visita il Mystery Shack!",
    "Tutti i tuoi misteri... a un prezzo!",
    "Antichità improbabili!",
    "Creature bizzarre!",
    "Pergamene misteriose!",
    "Segreti indicibili!",
    "Entra e spendi i tuoi soldi!",
    "Non dire a nessuno cosa vedi!",
    "I tuoi segreti sono al sicuro... per ora.",
  ];

  const renderContent = () => (
    <>
      {contentArray.map((frase, index) => (
        <span key={index}>
          {frase}
          <span className="mx-2">&ndash;</span>
        </span>
      ))}

      <Link
        to="/you-shouldnt-be-here"
        style={{
          textDecoration: "none",
          color: "inherit",
          cursor: "text",
        }}
      >
        Il codice è nella scatola
      </Link>
      <span className="mx-2">&ndash;</span>
    </>
  );

  return (
    <div className="scrolling-text-container mt-4">
      <div className="scrolling-text">
        <span>{renderContent()}</span>
        <span>{renderContent()}</span>
      </div>
    </div>
  );
};

export default Text;
