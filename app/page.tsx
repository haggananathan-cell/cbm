export default function DashboardPage() {
  const cards = [
    { title: "Total Presenters", value: "14", border: "#0070f3" },
    { title: "Total Programs", value: "6", border: "#10b981" },
    { title: "Total Articles", value: "38", border: "#f59e0b" },
    { title: "Total Media Files", value: "241", border: "#ef4444" },
  ];

  return (
    <div>
      <h1 style={{ margin: "0 0 2rem 0", color: "#333" }}>
        CBM Radio Admin Dashboard
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {cards.map((card) => (
          <div
            key={card.title}
            style={{
              background: "#fff",
              padding: "1.5rem",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
              borderLeft: `6px solid ${card.border}`,
            }}
          >
            <h3
              style={{
                margin: 0,
                fontSize: "0.85rem",
                color: "#888",
                textTransform: "uppercase",
              }}
            >
              {card.title}
            </h3>
            <p
              style={{
                margin: "0.5rem 0 0 0",
                fontSize: "2.25rem",
                fontWeight: "bold",
                color: "#1a1a1a",
              }}
            >
              {card.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
