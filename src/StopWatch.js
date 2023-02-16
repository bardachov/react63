import { useEffect, useRef, useState } from "react";

export default function StopWatch() {
  const timerIdRef = useRef(0);
  const [count, setCount] = useState(0);
  
  const startHandler = () => {
    if (timerIdRef.current) {
      return;
    }
    timerIdRef.current = setInterval(
      () => setCount((c) => c + 1),
      1000
    );
  };
  
  const stopHandler = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
  };
  
  useEffect(() => {
    return () => clearInterval(timerIdRef.current);
  }, []);
  
  return (
    <div>
      <div>Timer: {count}s</div>
      <div>
        <button onClick={startHandler}>Start</button>
        <button onClick={stopHandler}>Stop</button>
      </div>
    </div>
  );
}
