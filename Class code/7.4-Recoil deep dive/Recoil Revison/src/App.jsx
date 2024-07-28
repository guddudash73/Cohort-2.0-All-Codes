import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { jobsAtom, messagesAtom, networkAtom, notificationAtom } from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <MainApp></MainApp>
    </RecoilRoot>
  );
}

function MainApp() {
  const networkAtomCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom); // accessing the default values from the atoms
  const messagesAtomCount = useRecoilValue(messagesAtom);
  const [notificationAtomCount, setNotificationAtomCount] =
    useRecoilState(notificationAtom); // accessing the default values and the updating function from the atoms
  return (
    <div>
      <button>Home</button>
      <button>
        My Networks ({networkAtomCount >= 100 ? "99+" : networkAtomCount})
      </button>
      <button>Jobs ({jobsAtomCount})</button>
      <button>Messages ({messagesAtomCount})</button>
      <button>Notification ({notificationAtomCount})</button>
      <button onClick={() => setNotificationAtomCount((e) => e + 1)}>me</button>
    </div>
  );
}
export default App;
