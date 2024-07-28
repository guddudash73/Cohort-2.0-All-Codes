import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [backgrund, setBackground] = useState("");

  useEffect(() => {
    document.body.style.background = backgrund;
  }, [backgrund]);

  function changeBg(e) {
    setBackground(e.target.innerText.toLowerCase());
  }

  return (
    <div id="buttonContainer">
      <span onClick={changeBg} style={{ backgroundColor: "red" }}>
        Red
      </span>
      <span onClick={changeBg} style={{ backgroundColor: "yellow" }}>
        Yellow
      </span>
      <span
        onClick={changeBg}
        style={{ backgroundColor: "black", color: "white" }}
      >
        Black
      </span>
      <span onClick={changeBg} style={{ backgroundColor: "purple" }}>
        Purple
      </span>
      <span onClick={changeBg} style={{ backgroundColor: "green" }}>
        Green
      </span>
      <span onClick={changeBg} style={{ backgroundColor: "blue" }}>
        Blue
      </span>
      <span onClick={changeBg} style={{ backgroundColor: "white" }}>
        White
      </span>
    </div>
  );
}

export default App;
