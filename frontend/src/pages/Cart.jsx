import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../Reliquie.min.css";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + parseFloat(item.price) * item.quantity,
    0,
  );

  if (cartItems.length === 0) {
    return (
      <div
        className="container py-5 text-center mt-5 pt-5 d-flex flex-column justify-content-center align-content-center"
        style={{ minHeight: "60vh" }}
      >
        <h1 className="text-uppercase text-white fw-bold mb-4">
          Il tuo carrello è vuoto
        </h1>
        <p className="text-warning mb-4">
          Sembra che non abbia aggiunto nessun mistero ancora...
        </p>
        <div>
          <Link
            to="/reliquie"
            className="btn btn-warning fw-bold rounded-0 btn-card"
          >
            Vai alle Reliquie
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5 mt-5 pt-5">
      <h1 className="text-uppercase text-white fw-bold mb-4">
        Il Tuo Carrello
      </h1>

      <div className="row">
        {/* Colonna Principale - Articoli */}
        <div className="col-lg-8 mb-4 mb-lg-0">
          <div
            className="card rounded-0 border-warning"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <div className="table-responsive p-3">
              <table
                className="table table-dark custom-table-hover mb-0"
                style={{ background: "transparent" }}
              >
                <thead>
                  <tr className="border-warning">
                    <th className="text-uppercase text-warning fw-bold bg-transparent">
                      Articolo
                    </th>
                    <th className="text-center text-uppercase text-warning fw-bold bg-transparent">
                      Quantità
                    </th>
                    <th className="text-right text-uppercase text-warning fw-bold bg-transparent">
                      Totale
                    </th>
                    <th className="text-center text-uppercase text-warning fw-bold bg-transparent">
                      Azione
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-secondary">
                      <td className="align-middle bg-transparent">
                        <div className="d-flex align-items-center">
                          <img
                            src={item.image}
                            alt={item.title}
                            style={{
                              width: "80px",
                              height: "80px",
                              objectFit: "cover",
                              marginRight: "15px",
                            }}
                          />
                          <div>
                            <h6 className="text-uppercase fw-bold mb-1">
                              {item.title}
                            </h6>
                            <small style={{ opacity: "0.70" }}>
                              {item.desc}
                            </small>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle text-center bg-transparent">
                        <div className="d-flex justify-content-center align-items-center gap-2">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                Math.max(1, item.quantity - 1),
                              )
                            }
                            className="btn btn-sm btn-warning rounded-0 fw-bold"
                          >
                            &ndash;
                          </button>
                          <input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) =>
                              updateQuantity(
                                item.id,
                                parseInt(e.target.value) || 1,
                              )
                            }
                            className="form-control form-control-sm text-center"
                            style={{ width: "60px" }}
                          />
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="btn btn-sm btn-warning rounded-0 fw-bold"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="align-middle text-right text-warning fw-bold bg-transparent">
                        ${parseFloat(item.price).toFixed(2)}
                      </td>
                      <td className="align-middle text-center bg-transparent">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="btn btn-sm btn-danger rounded-0 fw-bold"
                        >
                          RIMUOVI
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Colonna Laterale - Riepilogo */}
        <div className="col-lg-4">
          <div
            className="card rounded-0 border-warning"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <div className="card-body">
              <h5 className="card-title text-uppercase text-warning fw-bold mb-3">
                Riepilogo Ordine
              </h5>

              <div className="mb-3">
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-white">Articoli totali:</span>
                  <span className="text-warning fw-bold">
                    {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                </div>
                <hr className="border-warning" />
                <div className="d-flex justify-content-between">
                  <span className="text-white fw-bold">TOTALE:</span>
                  <span className="text-warning fw-bold h5">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                className="btn btn-warning w-100 fw-bold rounded-0 mb-2"
                disabled
              >
                PROCEDI AL PAGAMENTO (PRESTO)
              </button>
              <Link
                to="/reliquie"
                className="btn btn-outline-warning w-100 fw-bold rounded-0"
              >
                CONTINUA LO SHOPPING
              </Link>
            </div>
          </div>

          <div className="alert alert-warning mt-3 rounded-0 small">
            <strong>Attenzione:</strong> Nessun rimborso. Gli oggetti potrebbero
            essere maledetti, infestati o semplicemente pezzi di plastica
            incollati male.
          </div>
        </div>
      </div>
    </div>
  );
}
