import { useState } from "react";

export default function Home(){
const [cardList, setCardList] = useState([
  {id:1, text:"Card one", column:"todo"},
  {id:2, text:"Card two", column:"inProgress"},
  {id:3, text:"Card three", column:"done"},
])


  const [currentCardId, setCurrentCardId] =useState(null)

  function handleDrop(column){
    setCardList((prevCards)=>{prevCards.map((card)=> {
      if(card.id === draggedCardId){
         return { id: card.id, text: card.text, column: column }
        } else{
          return card
         }}
    
    )})
    setDraggedCardId(null);
  }
 
  

  function allowDrop (e){
    e.preventDefault()
  }


 
  
    return (
      <div>
        <div className="container">
          <h1 className="text-h1">Simple Kanban Board</h1>
          <div className="content">
            <div className="board" >

          


              <h2 className="text-h2">Todo List</h2>
              <div className="card" draggable="true">
                come here
              </div>
              <div className="card" draggable="true">
                booking for food 
              </div>
            </div>

            <div className="board">
              <h2 className="text-h2">In Progress</h2>
            </div>

            <div className="board">
              <h2 className="text-h2">Done</h2>
            </div>
          </div>
        </div>
      </div>
    );
} 