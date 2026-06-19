import Link from "next/link";

export default function LoginPage() {
  return (
    <main
      style={{
        maxWidth: "400px",
        margin: "8rem auto",
        padding: "2rem",
        background: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      }}
    >
      <h2 style={{ marginBottom: "1.5rem", textAlign: "center" }}>
        Account Login
      </h2>
      <form
        action="/dashboard"
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <input
          type="email"
          placeholder="Admin Email"
          required
          style={{
            padding: "0.75rem",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <input
          type="password"
          placeholder="Password"
          required
          style={{
            padding: "0.75rem",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "0.75rem",
            background: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Log In
        </button>
      </form>
      <p
        style={{ fontSize: "0.9rem", textAlign: "center", marginTop: "1.5rem" }}
      >
        New here?{" "}
        <Link href="/register" style={{ color: "#0070f3" }}>
          Create an admin account
        </Link>
      </p>
    </main>
  );
}
