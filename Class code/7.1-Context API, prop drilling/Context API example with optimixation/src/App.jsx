//tried this code to get rid of unnecessary re-Render for the buttons

import React, { useCallback, useContext, useState } from "react";
import { CountContext } from "./context";

function App() {
  const [count, setCount] = useState(0);
  const decrease = useCallback(() => {
    setCount((count) => count - 1);
  }, []);

  const increase = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  return (
    <div>
      <CountContext.Provider value={{ count }}>
        <CountRender />
      </CountContext.Provider>
      <div>--------</div>
      <div>--------</div>
      <Buttons increase={increase} decrease={decrease} />
    </div>
  );
}

function CountRender() {
  const { count } = useContext(CountContext);
  return <div>{count}</div>;
}

const Buttons = React.memo(({ increase, decrease }) => {
  return (
    <div>
      <button onClick={increase}>Increase</button>

      <button onClick={decrease}>Decrease</button>
    </div>
  );
});

export default App;
