import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [valueNum, setValueNum] = useState("");
  useEffect(() => {
    setValueNum(localStorage.getItem("appData") || "");
  }, [valueNum]);

  return (
    <div>
      React Marathon, appData:{" "}
      <input size='5' value={valueNum} readOnly={true}></input>
    </div>
  );
}
