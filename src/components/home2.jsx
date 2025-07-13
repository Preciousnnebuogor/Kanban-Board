import { useState } from "react";

export default function Home() {
  const [cardList, setCardList] = useState([
    { id: 1, text: "Card one", column: "todo" },
    // { id: 2, text: "Card two", column: "inProgress" },
    // { id: 3, text: "Card three", column: "done" },
  ]);

  const [draggedCardId, setDraggedCardId] = useState(null);

  function handleDragStart(id) {
    setDraggedCardId(id); // Save the id of the card being dragged
  }

  function handleDrop(columnParm) {
    setCardList((prevCards) => {
      return prevCards.map((card) => {
        if (card.id === draggedCardId) {
          // Manually update only the column of the dragged card
          return {
            id: card.id,
            text: card.text,
            column: columnParm,
          };
        } else {
          return card;
        }
      });
    });

    setDraggedCardId(null); // Reset after drop
  }

  function allowDrop(e) {
    e.preventDefault(); // Allow the card to be dropped
  }

  return (
    <div>
      <div className="container">
        <h1 className="text-h1">Simple Kanban Board</h1>

        <div className="content">
          {/* Loop through columns dynamically */}
          {["todo", "inProgress", "done"].map((section) => (
            <div
              className="board"
              key={section}
              onDragOver={allowDrop}
              onDrop={() => handleDrop(section)}
            >
              <h2 className="text-h2">
                {section === "todo"
                  ? "Todo List"
                  : section === "inProgress"
                  ? "In Progress"
                  : "Done"}
              </h2>

              {/* Loop through and render only the cards that belong to this column */}
              {cardList
                .filter((card) => card.column === section)
                .map((card) => (
                  <div
                    className="card"
                    key={card.id}
                    draggable="true"
                    onDragStart={() => handleDragStart(card.id)}
                  >
                    {card.text}
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
