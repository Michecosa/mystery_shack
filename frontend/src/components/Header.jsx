import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import headerLOGO from "../assets/headerLOGO.png";
import "../Header.min.css";

export default function Header() {
  const { cartCount } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`navbar navbar-expand-md fixed-top navbar-transparent ${isOpen ? "bg-mobile-open" : ""}`}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgb(0, 0, 0), rgba(0, 0, 0, 0))`,
        paddingBottom: "2rem !important",
      }}
    >
      <div className="container">
        {/* LOGO */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={headerLOGO}
            alt="Mystery Shack"
            style={{ maxHeight: "50px", width: "auto" }}
            className="img-fluid"
          />
        </Link>

        <button
          className="navbar-toggler custom-toggler border-0"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-md-0 text-uppercase fw-bold py-3">
            <li className="nav-item">
              <a
                className="nav-link custom-link text-dark hover-warning"
                href="#reliquie"
                onClick={() => setIsOpen(false)}
              >
                Reliquie
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link custom-link text-dark"
                href="#abbigliamento"
                onClick={() => setIsOpen(false)}
              >
                Abbigliamento
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link custom-link"
                href="#diari"
                onClick={() => setIsOpen(false)}
              >
                Diari
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link custom-link text-danger fw-bolder"
                href="#misteri"
                onClick={() => setIsOpen(false)}
              >
                Non Entrare
              </a>
            </li>
          </ul>

          {/* ICONA CARRELLO (Allineata a destra) */}
          <div className="d-flex align-items-center ms-md-4 mt-3 mt-md-0">
            <Link
              to="/carrello"
              className="position-relative custom-link  text-decoration-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-cart4"
                viewBox="0 0 16 16"
              >
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
              </svg>

              {/* BADGE CONTATORE */}
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartCount}
                  <span className="visually-hidden">prodotti nel carrello</span>
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
