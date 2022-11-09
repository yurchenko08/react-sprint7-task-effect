import { useEffect, useState } from "react";
import "./App.css";
export default function App() {
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue(localStorage.getItem("appData"));
  }, [value]);
  return (
    <div>
      React Marathon, appData:
      <input size='5' value={value}></input>
    </div>
  );
}
