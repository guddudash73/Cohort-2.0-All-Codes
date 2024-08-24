import { useEffect, useState } from "react";

function useInterval(fn, timeout) {
  const time = useEffect(() => {
    setInterval(() => {
      fn();
    }, timeout);

    return () => {
      clearTimeout(time);
    };
  }, [timeout]);
}

export function Counter() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount((c) => c + 1);
  }, 1000);

  return (
    <>
      <div>counter {count}</div>
    </>
  );
}
