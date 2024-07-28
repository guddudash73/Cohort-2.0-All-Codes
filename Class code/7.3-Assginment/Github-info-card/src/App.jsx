import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useRecoilState } from "recoil";
import { githubAtom } from "./store/atoms";
import axios from "axios";
import { ProfileComponent } from "./profileComponent";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useRecoilState(githubAtom);

  let timeOut;
  function usernameValue(e) {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      setUsername(e.target.value);
    }, 1000);
  }

  async function getUserData() {
    setUser({});
    const res = await axios.get(`https://api.github.com/users/${username}`);
    setUser(res.data);
  }

  function RenderProfileComponent() {
    if (user.length === 0) {
      return <div></div>;
    } else {
      return (
        <div>
          <ProfileComponent></ProfileComponent>
        </div>
      );
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "50px",
        padding: "20px",
      }}
    >
      <div>
        <input
          style={{
            width: "200px",
            height: "25px",
            paddingLeft: "10px",
            borderRadius: "10px",
          }}
          type="text"
          placeholder="Enter GutHub Username"
          onChange={usernameValue}
        />
        <button
          style={{
            marginLeft: "20px",
            height: "30px",
            border: "none",
            borderRadius: "10px",
            backgroundColor: "#36454F",
            color: "white",
            padding: "8px",
          }}
          onClick={getUserData}
        >
          Generate
        </button>
      </div>
      <RenderProfileComponent></RenderProfileComponent>
    </div>
  );
}

export default App;
