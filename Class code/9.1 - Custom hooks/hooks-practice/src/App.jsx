import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import { PreviousHooks } from "./Hooks/PreviousHooks";
import { DataFetchingHook } from "./Hooks/dataFetchingHook";
import { Online } from "./Hooks/useIsOnline";
import { MouseMove } from "./Hooks/useMousePointer";
import { Counter } from "./Hooks/useInterval";
import { Debounce } from "./Hooks/useDebounce";

function App() {
  return (
    <>
      {/* <PreviousHooks></PreviousHooks> */}
      {/* <DataFetchingHook></DataFetchingHook> */}
      {/* <Online></Online> */}
      {/* <MouseMove></MouseMove> */}
      {/* <Counter></Counter> */}
      <Debounce></Debounce>
    </>
  );
}

export default App;
