import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [input, setInput] = useState(true);

  function showInput() {
    setInput(false);
  }

  return (
    <div className="app">
      {input ? (
        <InputNumber showInput={showInput}></InputNumber>
      ) : (
        <InputOtp></InputOtp>
      )}
    </div>
  );
}

function InputNumber({ showInput }) {
  return (
    <div className="inputDiv">
      <p id="logintxt">Login via OTP</p>
      <input
        style={{
          height: "40px",
          width: "250px",
          padding: " 0 10px 0 10px ",
          border: "none",
          borderRadius: "5px",
        }}
        type="number"
        placeholder="Enter Your Mobile Number"
      />
      <button
        style={{
          height: "30px",
          width: "80px",
          border: "1px solid aliceblue",
          backgroundColor: "#36454F",
          color: "aliceblue",
          cursor: "pointer",
          borderRadius: "5px",
        }}
        onClick={showInput}
      >
        Send OTP
      </button>
    </div>
  );
}

function InputOtp() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRef = useRef([]);
  console.log(otp);

  function handleOnChange(e, index) {
    if (isNaN(e.value)) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = e.value;
    setOtp(newOtp);

    if (e.nextSibling && e.value) {
      inputRef.current[index + 1].focus();
    }
  }

  function handleBackspace(e, index) {
    if (e.keyCode === 8 && !otp[index] && index > 0) {
      inputRef.current[index - 1].focus();
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <p id="logintxt">Enter OTP</p>
      <div style={{ display: "flex", gap: "20px" }}>
        {otp.map((data, index) => (
          <input
            className="otpInputs"
            type="number"
            maxLength={1}
            onChange={(e) => handleOnChange(e.target, index)}
            ref={(el) => (inputRef.current[index] = el)}
            onKeyDown={(e) => handleBackspace(e, index)}
          />
        ))}
      </div>
      <button
        style={{
          height: "30px",
          width: "80px",
          border: "1px solid aliceblue",
          backgroundColor: "#36454F",
          color: "aliceblue",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        Login
      </button>
    </div>
  );
}

export default App;
