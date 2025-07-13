import { useState } from "react";

export default function Home(){
  const [currentColumn, setCurrentColumn] =useState('Todo List')

  function dragStart(e){
    e.dataTransfer.setData('text/plain','card')
  }
 
  function handleDrop(column){
  setCurrentColumn(column)
  }

  function allowDrop (e){
    e.preventDefault()
  }

  function dragOver(e  ) {} 
    return (
      <div>
        <div className="container">
          <h1 className="text-h1">Simple Kanban Board</h1>
          <div className="content">
            <div className="board">
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