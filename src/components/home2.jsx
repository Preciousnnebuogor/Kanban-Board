import { useState } from "react";

export default function Home2() {
  const [currentColumn, setCurrentColumn] = useState("inProgress");

  function handleDragStart(e) {
    e.dataTransfer.setData("text/plain", "card");
  }

  function handleDrop(column) {
    setCurrentColumn(column);
  }

  function allowDrop(e) {
    e.preventDefault();
  }

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      {/* Todo List Column */}
      <div
        onDragOver={allowDrop}
        onDrop={() => handleDrop("todo")}
        style={{
          width: "200px",
          height: "200px",
          border: "2px dashed #aaa",
          padding: "10px",
        }}
      >
        <h2>Todo List</h2>
        {currentColumn === "todo" && (
          <div
            draggable
            onDragStart={handleDragStart}
            style={{
              background: "#f1f1f1",
              padding: "10px",
              borderRadius: "5px",
              marginTop: "10px",
            }}
          >
            Drag me
          </div>
        )}
      </div>

      {/* In Progress Column */}
      <div
        onDragOver={allowDrop}
        onDrop={() => handleDrop("inProgress")}
        style={{
          width: "200px",
          height: "200px",
          border: "2px dashed #aaa",
          padding: "10px",
        }}
      >
        <h2>In Progress</h2>
        {currentColumn === "inProgress" && (
          <div
            draggable
            onDragStart={handleDragStart}
            style={{
              background: "#f1f1f1",
              padding: "10px",
              borderRadius: "5px",
              marginTop: "10px",
            }}
          >
            Drag me
          </div>
        )}
      </div>
    </div>
  );
}
