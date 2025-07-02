function NotFound() {
  return (
    <div
      style={{
        padding: "12rem",
        color: "white",
        textAlign: "center",
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>❌Error 404</h2>
      <p style={{ fontSize: "1.5rem" }}>Página no encontrada.</p>
    </div>
  );
}

export default NotFound;