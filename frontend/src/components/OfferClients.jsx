import offertaImg from "../assets/offerta.png";

export default function OfferClients() {
  const reviews = [
    {
      id: 1,
      user: "Dipper P.",
      text: "Il fez è fantastico, anche se Stan ha cercato di farmi pagare il doppio all'inizio...",
      rating: 5,
    },
    {
      id: 2,
      user: "Mabel P.",
      text: "Ho comprato 10 gnomi da giardino! Sono così carini (anche se vomitano arcobaleni)",
      rating: 4,
    },
  ];

  const renderStars = (rating) => {
    const totalStars = 5;
    return [...Array(totalStars)].map((_, i) => (
      <i
        key={i}
        className={`bi ${i < rating ? "bi-star-fill" : "bi-star"} me-1`}
      ></i>
    ));
  };

  return (
    <section className="container my-5 p-4">
      <div className="row align-items-center gx-lg-5">
        <div className="col-md-5 mb-4 mb-md-0">
          <div className="offer-image-container shadow-lg">
            <img
              src={offertaImg}
              alt="Offerta Speciale: Compra 2 prendi 3"
              className="img-fluid"
              style={{
                filter: "drop-shadow(0 0 10px rgb(255, 193, 7))",
              }}
            />
          </div>
        </div>

        <div className="col-md-7">
          <h2
            className="h1 text-uppercase mb-4 h2-offer-clients text-warning"
            style={{
              borderBottom: "2px solid",
              display: "inline-block",
            }}
          >
            Cosa dicono i nostri clienti!
          </h2>

          <div className="d-flex flex-column gap-3">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="product-card p-3 d-flex flex-column"
              >
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="fw-bold text-uppercase">{review.user}</span>
                  <span className="small">{renderStars(review.rating)}</span>
                </div>
                <p className="text-opacity-50 mb-0 small text-warning">
                  "{review.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
