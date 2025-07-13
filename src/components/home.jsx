import { useState } from "react";

export default function InputField() {
  const [showTextarea, setTextareaShow] = useState(false);
  const [getText, setGetText] = useState('');
  

  function handleClick() {
   setTextareaShow(true)
  }
  function closeClick(){
    setTextareaShow(false);
  }
  return (
    <div>
      <div className="">
        <button onClick={handleClick} className="input-butt">
          Create
        </button>

        {showTextarea && (
          <div className="sec-content">
            <div className="icons">
              <button onClick={closeClick}>close</button>
              <button>Add</button>
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
  );
}
