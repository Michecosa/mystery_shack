import footerBg from "../assets/footerBG.png";
import footerLogo from "../assets/footerLOGO.png";

export default function Footer() {
  return (
    <>
      <footer
        className="py-5 mt-5 text-center "
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(${footerBg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          minHeight: "300px",
        }}
      >
        <div className="container mx-auto py-5">
          <img
            src={footerLogo}
            alt="Mystery Shack Emporium"
            className="img-fluid my-4 mx-auto d-block"
            style={{
              maxHeight: "180px",
              width: "70%",
              maxWidth: "650px",
            }}
          />

          <div className="d-flex justify-content-center gap-4 mb-4 fw-bold">
            <a href="#" className="text-decoration-none text-reset">
              <i className="bi bi-instagram me-2"></i>Instagram
            </a>
            <a href="#" className="text-decoration-none text-reset">
              <i className="bi bi-twitter-x me-2"></i>Twitter
            </a>
            <a href="#" className="text-decoration-none text-reset">
              <i className="bi bi-radar me-2"></i>UFO Reports
            </a>
          </div>
          <p
            className="small text-uppercase opacity-75 mx-auto"
            style={{ maxWidth: "450px", letterSpacing: "1px" }}
          >
            Se trovi dei frammenti di portali, <br />
            riportali a Stan Pines. <br />
            <span className="fw-light mt-2 d-block">
              <span className="font-monospace text-warning">
                23-15-15-4-12-21-3-11-25
              </span>
            </span>
          </p>
        </div>
      </footer>
    </>
  );
}
