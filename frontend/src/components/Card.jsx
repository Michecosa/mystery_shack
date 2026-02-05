import { useCart } from "../context/CartContext";
import "../Card.min.css";

export default function Card({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="product-card h-100 d-flex flex-column">
        <div className="flex-grow-1">
          <div className="product-icon-container position-relative d-flex justify-content-center align-items-center">
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            {product.tag && (
              <div
                style={{ top: "10%" }}
                className="position-absolute product-tag start-0 bg-danger text-white px-3 py-1 fw-bold small"
              >
                {product.tag}
              </div>
            )}
          </div>
          <h3 className="h2 fw-black mb-2 text-uppercase tracking-tight">
            {product.title}
          </h3>
          <p className="text-opacity-50 mb-4 small text-warning product-card-desc fw-normal">
            {product.desc}
          </p>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <span className="h3 fw-bold text-warning mb-0">${product.price}</span>
          <button
            onClick={() => addToCart(product)}
            className="btn btn-warning fw-bold rounded-0 btn-card"
          >
            AGGIUNGI
          </button>
        </div>
      </div>
    </div>
  );
}
