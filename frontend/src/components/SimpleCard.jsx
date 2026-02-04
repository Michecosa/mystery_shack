export default function SimpleCard({ title, children }) {
  return (
    <>
      <div
        className="product-card glow-qui h-100 d-flex flex-column p-4"
        style={{
          border: "1px solid rgba(255, 193, 7, 0.2)",
        }}
      >
        <div className="flex-grow-1">
          <h3 className="h2 fw-black mb-3 text-uppercase tracking-tight text-white">
            {title}
          </h3>

          <div className="text-opacity-50 small text-warning fw-normal">
            {children}
          </div>
        </div>

        <div
          className="mt-4"
          style={{ borderTop: "1px solid #ffc107", width: "30px" }}
        ></div>
      </div>
    </>
  );
}
