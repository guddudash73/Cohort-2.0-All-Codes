import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      {/*this is using css*/}
      {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ backgroundColor: "red" }}>hi</div>
        <div style={{ backgroundColor: "green" }}>hi</div>
        <div style={{ backgroundColor: "yellow" }}>hi</div>
      </div> */}

      {/*this is using tailwind*/}
      {/* <div className="flex justify-between">
        <div className="bg-red-500">hi</div>
        <div className="bg-green-500">hi</div>
        <div className="bg-yellow-500">hi</div>
      </div> */}

      {/*This means that it will divide the screen into three parts, and each child will take one of them. If there are five children, the first three will be placed on the first line, and the other two will be placed on the second line */}
      {/* <div className="grid grid-cols-3">
        <div className="bg-red-500 col-span-2">hi</div>
        <div className="bg-green-500 col-span-2">hi</div>
        <div className="bg-yellow-500">hi</div>
        <div className="bg-yellow-500">hi</div>
        <div className="bg-yellow-500">hi</div>
      </div> */}

      {/*Responsiveness*/}
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="bg-red-500">hii there</div>
        <div className="bg-green-500">hii there</div>
        <div className="bg-yellow-500">hii there</div>
      </div>
    </>
  );
}

export default App;
