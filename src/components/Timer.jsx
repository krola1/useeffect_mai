import { useEffect } from "react";
import { useState } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);

  //useffect with empty dependency array, runs only on mount
  useEffect(() => {
    //sets counde to be run at interval
    const intervalID = setInterval(() => {
      setSeconds((prev) => prev + 1);
      console.log("tick");
    }, 1000);

    //return is triggered on unmount
    return () => {
      clearInterval(intervalID);
      console.log("cleanup");
    };
  }, []); /// dependency array defines when code is run, empty aray == initial mount)
  return (
    <>
      <h3>Timer:{seconds}</h3>
    </>
  );
}
