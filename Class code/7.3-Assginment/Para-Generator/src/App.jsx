import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [words, setWords] = useState("");
  const [para, setPara] = useState("");

  const worsArr = [
    "apple",
    "go",
    "this",
    "city",
    "index",
    "car",
    "mobile",
    "paper",
  ];

  function generatePara() {
    if (!words || isNaN(words) || words <= 0) {
      alert("Please Enter a number");
      return;
    }

    let sentence = "";
    for (let i = 0; i <= words; i++) {
      const randomNum = Math.floor(Math.random() * worsArr.length);

      sentence = sentence + worsArr[randomNum] + " ";
    }

    setPara(sentence.trim());
  }

  function Paragraph() {
    if (para === "") {
      return <div></div>;
    }

    return (
      <div
        style={{
          width: "70vw",
          border: "1px solid black",
          padding: "15px",
          borderRadius: "5px",
        }}
      >
        {para}
        {console.log(para)}
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <p style={{ fontSize: "25px", fontWeight: "bold" }}>
        Paragraph Generator
      </p>
      <div style={{ padding: "30px" }}>
        <input
          style={{
            height: "30px",
            width: "60vw",
            marginRight: "20px",
            padding: "10px",
          }}
          type="text"
          onChange={(e) => {
            setWords(e.target.value);
          }}
          placeholder="Enter Number of Words"
        />

        <button
          style={{
            height: "50px",
            width: "100px",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "black",
            color: "white",
            fontWeight: "bold",
            fontSize: "15px",
          }}
          onClick={generatePara}
        >
          {" "}
          Generate{" "}
        </button>
      </div>

      <Paragraph></Paragraph>
    </div>
  );
}

export default App;
