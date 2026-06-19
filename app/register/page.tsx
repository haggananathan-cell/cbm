import Link from "next/link";

export default function RegisterPage() {
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
        Admin Registration
      </h2>
      <form
        action="/login"
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <input
          type="text"
          placeholder="Full Name"
          required
          style={{
            padding: "0.75rem",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <input
          type="email"
          placeholder="Email Address"
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
            background: "green",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Register Profile
        </button>
      </form>
      <p
        style={{ fontSize: "0.9rem", textAlign: "center", marginTop: "1.5rem" }}
      >
        Already registered?{" "}
        <Link href="/login" style={{ color: "#0070f3" }}>
          Sign In
        </Link>
      </p>
    </main>
  );
}
