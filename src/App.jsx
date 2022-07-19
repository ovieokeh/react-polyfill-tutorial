import { useEffect } from "react";

import useSimulateNoPadEnd from "./useSimulateNoPadEnd";
import "./App.css";

const days = [
  { name: "Monday", feeling: "😭" },
  { name: "Tuesday", feeling: "😔" },
  { name: "Wednesday", feeling: "😐" },
  { name: "Thursday", feeling: "😊" },
  { name: "Friday", feeling: "😀" },
  { name: "Saturday", feeling: "🥳" },
  { name: "Sunday", feeling: "🥺" },
];

function App() {
  useSimulateNoPadEnd();

  useEffect(() => {
    // Your code goes here
  }, []);

  return (
    <div className="App">
      <h1>Weekday feels</h1>

      <div>
        {days.map((day) => {
          const dayName = day.name; // Update this line to use padEnd

          return (
            <div key={day.name}>
              <p className="monospace">
                {dayName} {day.feeling}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
