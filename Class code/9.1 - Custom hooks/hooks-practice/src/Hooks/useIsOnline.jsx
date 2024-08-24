import { useEffect, useState } from "react";

function useIsOnline() {
  const [onLine, setOnLine] = useState(window.navigator.onLine);
  //   setInterval(() => {
  //     setOnLine(window.navigator.onLine);
  //   }, 5000);
  useEffect(() => {
    window.addEventListener("online", () => setOnLine(true));
    window.addEventListener("offline", () => setOnLine(false));

    return () => {
      window.removeEventListener("online", () => setOnLine(true));
      window.removeEventListener("offline", () => setOnLine(false));
    };
  }, []);

  return onLine;
}

export function Online() {
  const online = useIsOnline();

  return <div>{online ? <div>Online</div> : <div>Offline</div>}</div>;
}
