import "./App.css";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { notifications, totalNotificationSelector } from "./atoms";
import { useEffect } from "react";
import axios from "axios";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  // useEffect(() => { //Using this method the App will show 0 for fraction of seconds because in the atoms default value we set the values 0 so first it will so the default value then after getting the value from the api call it will show the values
  //   // fetch
  //   axios.get("https://sum-server.100xdevs.com/notifications").then((res) => {
  //     setNetworkCount(res.data);
  //   });
  // }, []);

  return (
    <>
      <button>Home</button>

      <button>
        My network (
        {networkCount.networks >= 100 ? "99+" : networkCount.networks})
      </button>
      <button>Jobs {networkCount.jobs}</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  );
}

export default App;
