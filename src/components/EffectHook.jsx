import { useEffect, useState } from "react";

function LiveClock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <h3>Clock</h3>
      <div style={{ display: "flex" }}>
        <div
          style={{
            border: "2px solid gold",
            width: 100,
            padding: 10,
            margin: 5,
            textAlign: "center",
            fontSize: "24px",
          }}
        >
          {time.getHours()}
        </div>
        <span style={{ fontSize: 30, textAlign: "center", margin: 10 }}>:</span>
        <div
          style={{
            border: "2px solid gold",
            width: 100,
            padding: 10,
            margin: 5,
            textAlign: "center",
            fontSize: "24px",
          }}
        >
          {time.getMinutes()}
        </div>
        <span style={{ fontSize: 30, textAlign: "center", margin: 10 }}>:</span>
        <div
          style={{
            border: "2px solid gold",
            width: 100,
            padding: 10,
            margin: 5,
            textAlign: "center",
            fontSize: "24px",
          }}
        >
          {time.getSeconds()}
        </div>
      </div>
    </>
  );
}

export { LiveClock };
