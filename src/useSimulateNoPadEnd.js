import { useEffect } from "react";

export default function useSimulateNoPadEnd() {
  useEffect(() => {
    if (import.meta.env.VITE_SIMULATE_MODE === "true")
      delete String.prototype.padEnd;
  }, []);
}
