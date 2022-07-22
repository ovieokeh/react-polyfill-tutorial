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
    if (!String.prototype.padEnd) {
      console.log("padEnd is not supported. Using polyfill.");

      String.prototype.padEnd = function padEnd(targetLength, padString) {
        targetLength =
          typeof targetLength !== "number" || targetLength < 0
            ? 0
            : targetLength;
        padString = String(padString || " ");

        if (this.length > targetLength) return String(this);

        targetLength = targetLength - this.length;
        if (targetLength > padString.length) {
          padString += padString.repeat(targetLength / padString.length);
        }

        return String(this) + padString.slice(0, targetLength);
      };
    }
  }, []);

  return (
    <div className="App">
      <h1>Weekday feels</h1>

      <div>
        {days.map((day) => {
          const dayName = day.name.padEnd(23);

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
