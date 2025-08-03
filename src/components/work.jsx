import { useState } from "react";

export default function Work() {
    const [showTextarea, setTextareaShow] = useState(false);
    const [getText, setGetText] = useState("");
    const [editText, setEditText] = useState("")
    const [editId, setEditId] = useState("")
  const [cardList, setCardList] = useState([
    // { id: 1, text: "Card one", column: "todo" },
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

  function handleClick() {
    setTextareaShow(true);
  }
  function closeClick() {
    setTextareaShow(false);
  }

  function addCard() {
   if(getText.trim() === "")return
   const newCard = {
    id: cardList.length + 1,
    text: getText,
    column: 'todo'
   }
   setCardList([...cardList, newCard])
   setGetText("")
   setTextareaShow(false);
  }
  function deleteButton(id){
    setCardList(cardList.filter((card)=>card.id !== id))
  }
  function startEdit(card){
   setEditId(card.id)
   setEditText(card.text)
  }
  function saveEdit(id){
  if(editText.trim() === '') return
  setCardList(
    cardList.map((card)=>( card.id === id ?{...card, text:editText}:card))
  )
  setEditId('')
  setEditText('')
  }

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "20%", marginTop: "60px" }}>
        <div className="side-bar">
          <button onClick={handleClick} className="input-butt">
            Create
          </button>
          {/* <button onClick={handleEdit} className="input-butt">
            Search
          </button> */}
          <button className="input-butt">New-Board</button>
          <button></button>

          {showTextarea && (
            <div className="sec-content">
              <div className="icons">
                <button onClick={closeClick}>close</button>
                <button onClick={addCard}>Add</button>
              </div>
              <textarea
                className="textarea"
                onChange={(e) => setGetText(e.target.value)}
                value={getText}
              />
            </div>
          )}
        </div>
      </div>

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
                    <div>
                      {editId === card.id ? (
                        <>
                          <input
                            type="text"
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                          />
                          <button onClick={() => saveEdit(card.id)}>💾</button>
                        </>
                      ) : (
                        <div className="displayCard">
                          <span>{card.text}</span>
                          <div className="displayCard2">
                            <button
                              onClick={() => deleteButton(card.id)}
                              className="displayCard-butt"
                            >
                              ❌
                            </button>
                            <button
                              onClick={() => startEdit(card)}
                              className="displayCard-butt"
                            >
                              ✏️
                            </button>
                          </div>
                        </div>
                      )}

                      {/* {card.text}
                      <button
                        onClick={() => deleteButton(card.id)}
                        className="displayCard-butt"
                      >
                        X
                      </button>
                      <button>✏️</button> */}
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
