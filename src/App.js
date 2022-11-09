import { useEffect, useState } from "react";
import "./App.css";
export default function App() {
  const [value, setValue] = useState(() => {
    return localStorage.getItem("appData") || " ";
  });
  useEffect(() => {
    localStorage.setItem("appData", value);
  }, [value]);

  return (
    <div>
      React Marathon, appData:
      <input
        size='5'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type='number'
      ></input>
    </div>
  );
}
