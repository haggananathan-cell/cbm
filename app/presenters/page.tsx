"use client";
import { useState, useEffect } from "react";

// Simulated Local API Mock Endpoint Data matching offline requirements
const mockApiData = [
  { id: 1, name: "John Doe", show: "Morning Drive Radio", status: "Active" },
  { id: 2, name: "Sarah Smith", show: "Late Night Jazz", status: "On Break" },
  { id: 3, name: "Alex Jones", show: "Weekly Sports Talk", status: "Active" },
];

export default function PresentersPage() {
  const [presenters, setPresenters] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [show, setShow] = useState("");

  // Simulates offline API request execution lifecycle
  useEffect(() => {
    setPresenters(mockApiData);
  }, []);

  const handleAddPresenter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !show) return;
    const newEntry = { id: Date.now(), name, show, status: "Active" };
    setPresenters([...presenters, newEntry]);
    setName("");
    setShow("");
  };

  return (
    <div>
      <h1 style={{ margin: "0 0 1.5rem 0" }}>Presenters Management</h1>

      {/* Required Form Interaction Block */}
      <form
        onSubmit={handleAddPresenter}
        style={{
          display: "flex",
          gap: "1rem",
          background: "#fff",
          padding: "1rem",
          borderRadius: "8px",
          marginBottom: "2rem",
          flexWrap: "wrap",
        }}
      >
        <input
          type="text"
          placeholder="Presenter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "0.5rem", flex: 1, minWidth: "150px" }}
        />
        <input
          type="text"
          placeholder="Radio Show Title"
          value={show}
          onChange={(e) => setShow(e.target.value)}
          style={{ padding: "0.5rem", flex: 1, minWidth: "150px" }}
        />
        <button
          type="submit"
          style={{
            padding: "0.5rem 1rem",
            background: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          + Add New
        </button>
      </form>

      {/* Required Public API Table Component Layout */}
      <div
        style={{
          overflowX: "auto",
          background: "#fff",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "left",
          }}
        >
          <thead>
            <tr style={{ background: "#eaeaea" }}>
              <th style={{ padding: "1rem" }}>Name</th>
              <th style={{ padding: "1rem" }}>Show Name</th>
              <th style={{ padding: "1rem" }}>Status</th>
              <th style={{ padding: "1rem" }}>Available Operations Actions</th>
            </tr>
          </thead>
          <tbody>
            {presenters.map((p) => (
              <tr key={p.id} style={{ borderBottom: "1px solid #eee" }}>
                <td style={{ padding: "1rem" }}>{p.name}</td>
                <td style={{ padding: "1rem" }}>{p.show}</td>
                <td style={{ padding: "1rem" }}>
                  <span
                    style={{
                      padding: "3px 8px",
                      borderRadius: "4px",
                      background: p.status === "Active" ? "#e1f5fe" : "#ffe0b2",
                      color: p.status === "Active" ? "#0288d1" : "#f57c00",
                      fontSize: "0.85rem",
                    }}
                  >
                    {p.status}
                  </span>
                </td>

                {/* Required Visible Action Target Buttons */}
                <td style={{ padding: "1rem" }}>
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <button
                      onClick={() => alert(`Viewing profile: ${p.name}`)}
                      style={{
                        padding: "4px 8px",
                        background: "#0070f3",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontSize: "0.8rem",
                      }}
                    >
                      View
                    </button>
                    <button
                      onClick={() => alert(`Editing profile id: ${p.id}`)}
                      style={{
                        padding: "4px 8px",
                        background: "#f59e0b",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontSize: "0.8rem",
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() =>
                        setPresenters(
                          presenters.filter((item) => item.id !== p.id),
                        )
                      }
                      style={{
                        padding: "4px 8px",
                        background: "#ef4444",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontSize: "0.8rem",
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
