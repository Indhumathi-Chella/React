import { useState, useEffect, useRef } from "react";

function StopWatch() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const start = () => {
    if (intervalRef.current) return;
    const startTime = Date.now() - time * 1000;
    intervalRef.current = setInterval(() => {
      setTime((Date.now() - startTime) / 1000);
    }, 100);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(0);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const isRunning = intervalRef.current !== null;
  const isPaused = time > 0 && !isRunning;

  return (
    <div>
      <h3>Stop Watch</h3>
      <div
        style={{
          border: "2px solid brown",
          width: 100,
          height: 100,
          borderRadius: "50%",
          padding: 10,
          margin: 5,
          position: "relative",
          fontSize: "18px",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: "50%",
            right: "50%",
            transform: "translate(50%,-50%)",
          }}
        >
          {" "}
          {time.toFixed(2)} s
        </span>
      </div>
      <button
        onClick={start}
        style={{
          border: "2px solid brown",
          padding: 5,
          margin: 5,
        }}
      >
        {isRunning ? "Pause" : "Start"}
      </button>
      <button
        onClick={stop}
        style={{
          border: "2px solid brown",
          padding: 5,
          margin: 5,
        }}
      >
        Stop
      </button>
      <button
        onClick={reset}
        style={{
          border: "2px solid brown",
          padding: 5,
          margin: 5,
        }}
      >
        Reset
      </button>
    </div>
  );
}

export { StopWatch };
