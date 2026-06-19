import Link from "next/link";

export default function HomePage() {
  return (
    <main
      style={{
        maxWidth: "600px",
        margin: "10% auto",
        padding: "2rem",
        textAlign: "center",
        background: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
      }}
    >
      <h1 style={{ color: "#1a1a1a", marginBottom: "1rem" }}>
        Welcome to CBM Radio Portal
      </h1>
      <p style={{ color: "#666", marginBottom: "2rem" }}>
        Please log in or register to access the administrative control dashboard
        panel.
      </p>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        <Link
          href="/login"
          style={{
            padding: "0.75rem 1.5rem",
            background: "#0070f3",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "4px",
            fontWeight: "bold",
          }}
        >
          Login
        </Link>
        <Link
          href="/register"
          style={{
            padding: "0.75rem 1.5rem",
            border: "1px solid #0070f3",
            color: "#0070f3",
            textDecoration: "none",
            borderRadius: "4px",
            fontWeight: "bold",
          }}
        >
          Register
        </Link>
      </div>
    </main>
  );
}
