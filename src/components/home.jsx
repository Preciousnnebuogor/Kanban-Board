export default function Home(){
    return (
      <div>
        <div className="container">
          <h1 className="text-h1">Simple Kanban Board</h1>
          <div className="content">
            <div className="board">
              <h2 className="text-h2">Todo List</h2>
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