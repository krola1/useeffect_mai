import { useEffect } from "react";
import { useState } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setSeconds((prev) => prev + 1);
      console.log("tick");
    }, 1000);

    return () => {
      clearInterval(intervalID);
      console.log("cleanup");
    };
  }, []);
  return (
    <>
      <h3>Timer:{seconds}</h3>
    </>
  );
}
