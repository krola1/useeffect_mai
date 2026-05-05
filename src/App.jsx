import { useState } from "react";
import "./App.css";
import Timer from "./components/Timer";
import User from "./components/User";
export default function App() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <>
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? "Hide" : "Show"}
      </button>

      {showTimer && <Timer />}

      <User />
    </>
  );
}
