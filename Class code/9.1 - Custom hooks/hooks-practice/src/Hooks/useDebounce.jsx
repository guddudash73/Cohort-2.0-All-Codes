import { useEffect, useState } from "react";

function useDebounce(input, time) {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      console.log(input);
    }, time);

    return () => {
      clearTimeout(timeOut);
    };
  }, [input]);
}

export function Debounce() {
  const [input, setInput] = useState("");

  useDebounce(input, 1000);

  return (
    <>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
    </>
  );
}
