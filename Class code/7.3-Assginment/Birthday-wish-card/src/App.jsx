import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [render, setRender] = useState(false);

  function renderWish() {
    setRender(true);
  }

  // function renderWish() {
  //   if (name === "") {
  //     return;
  //   }
  //   return (
  //     <>
  //       <Birthdaywish name={name}></Birthdaywish>
  //     </>
  //   );
  // }

  let timeout;
  function handleName(e) {
    clearTimeout(timeout);
    timeout = setTimeout(() => setName(e.target.value), 1000);
  }

  return (
    <div>
      <input type="text" onChange={handleName} />
      <button onClick={renderWish}>Done</button>
      {render ? <Birthdaywish name={name}></Birthdaywish> : <></>}
    </div>
  );
}

function Birthdaywish({ name }) {
  const wishes = [
    `Happy birthday, ${name}! Wishing you a day of happiness and a year brimming with success!`,
    `Happy birthday, ${name}! I wish you a day of joy and happiness!`,
    `Enjoy your special day, ${name}! You deserve it!`,
  ];

  return (
    <div>
      {wishes.map((wish, index) => (
        <div key={index}>{wish}</div>
      ))}
    </div>
  );
}

export default App;
