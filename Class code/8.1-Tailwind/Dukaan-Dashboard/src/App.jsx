import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./components/header";
import { Dashboard } from "./components/page";
import { Sidebar } from "./components/sidebar";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <div className=" flex">
      <RecoilRoot>
        <Sidebar></Sidebar>
        <div className="w-full">
          <Header></Header>
          <Dashboard></Dashboard>
        </div>
      </RecoilRoot>
    </div>
  );
}

export default App;
