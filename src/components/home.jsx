import { useState } from "react";

export default function InputField() {
  const [showTextaera, setTextareaShow] = useState(false);
  const [getText, setGetText] = useState('');

  function handleClick() {
   setTextareaShow(true)
  }
  return (
    <div>
      <div className="input">
        <button onClick={handleClick} className="input-butt">
          Create
        </button>
        <div>
          {showTextaera && (
            <textarea
              className="textarea"
              onChange={(e) => {
               return setGetText(e.target.value);
              }}
              value = { getText }
            />
          )}
        </div>
      </div>
    </div>
  );
}
