import { useEffect } from "react";
import "./App.css";
export default function App() {
  const value = "";
  useEffect(() => {
    localStorage.setItem("appData", value);
  }, [value]);

  return (
    <div>
      React Marathon, appData:
      <input
        size='5'
        value={localStorage.getItem("appData") || " "}
        type='number'
      ></input>
    </div>
  );
}
