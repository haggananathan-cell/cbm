"use client";
import { useState } from "react";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["Dashboard", "Presenters", "Programs", "Articles", "Media"];

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Mobile Menu Action Trigger Toggle */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        style={{
          position: "fixed",
          top: "15px",
          right: "15px",
          zIndex: 1000,
          padding: "8px 12px",
          background: "#1a1a1a",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
        className="toggle-button"
      >
        {isMenuOpen ? "✕ Close" : "☰ Menu"}
      </button>

      {/* Responsive Navigation Sidebar Panel */}
      <aside
        className={`sidebar ${isMenuOpen ? "open" : ""}`}
        style={{
          width: "240px",
          background: "#1a1a1a",
          color: "#fff",
          padding: "2rem 1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          transition: "transform 0.3s ease",
        }}
      >
        <div>
          <h2
            style={{
              fontSize: "1.2rem",
              color: "#0070f3",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            CBM Radio Admin
          </h2>
          <nav
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            {navItems.map((item) => (
              <Link
                key={item}
                href={
                  item === "Dashboard"
                    ? "/dashboard"
                    : `/dashboard/${item.toLowerCase()}`
                }
                onClick={() => setIsMenuOpen(false)}
                style={{
                  color: "#ccc",
                  textDecoration: "none",
                  padding: "0.75rem 1rem",
                  borderRadius: "4px",
                  display: "block",
                }}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>

        {/* Working Logout Button linking directly to home */}
        <Link
          href="/"
          style={{
            background: "#d32f2f",
            color: "white",
            textDecoration: "none",
            textAlign: "center",
            padding: "0.75rem",
            borderRadius: "4px",
            fontWeight: "bold",
          }}
        >
          Logout
        </Link>
      </aside>

      {/* Main Panel Content Window */}
      <main
        className="content-window"
        style={{ flex: 1, padding: "2rem", background: "#f5f7fb" }}
      >
        {children}
      </main>

      {/* Embedded Lightweight Mobile Media Breakpoint Styling Rules */}
      <style>{`
        @media (max-width: 768px) {
          .sidebar {
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            transform: translateX(-100%);
            z-index: 999;
          }
          .sidebar.open {
            transform: translateX(0);
          }
          .content-window {
            padding: 4rem 1rem 1rem 1rem !important;
          }
        }
        @media (min-width: 769px) {
          .toggle-button {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
