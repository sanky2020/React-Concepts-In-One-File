import React, { useState } from "react";

function CRUDInterview() {
  const [str, setStr] = useState("");
  const [display, setDisplay] = useState(false);
  const [arr, setArr] = useState([]);

  const addFunc = () => {
    console.log(str);
    setArr([...arr, str]);
    setDisplay(true);
  };

  console.log(arr);

  const deleteFunc = (i) => {
    console.log(arr, i);
    arr.splice(i, 1);
    console.log(...arr);
    setArr([...arr]);
    
  };

  return (
    <div className="App">
    <h3>Creat an input element, and render the typed text each on new-line upon clicking the button.<br/> Once rendered whichever text is clicked upon, it should delete that specific line of text.</h3>
      <input type="text" onChange={(e) => setStr(e.target.value)} />
      <button onClick={addFunc}>Add</button>
      {display
        ? arr.map((item, index) => {
            return (
              <p key={index} onClick={(e) => deleteFunc(index)}>
                {item}
              </p>
            );
          })
        : ""}
    </div>
  );
}

export default CRUDInterview;
