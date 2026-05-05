import { useState } from "react";
import "./App.css";
import Timer from "./components/Timer";
import User from "./components/User";
import { useEffect } from "react";
export default function App() {
  const [showTimer, setShowTimer] = useState(false);

  //useeffect tar inn to argumenter,
  //første er en anonym funksjon med en kodeblokk
  //den andre er et dependency array som definerer når koden skal kjøres, tom array = on first mount
  useEffect(() => {
    // alt i return kodeblokk kjøres på unmount
    return () => {};
  }, []);

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
