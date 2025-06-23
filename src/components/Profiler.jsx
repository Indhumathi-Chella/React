import { Profiler, useState } from "react";

function onRender(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime
) {
  console.log(`[Profiler - ${id}]`);
  console.log(`Phase: ${phase}`);
  console.log(`Actual Duration: ${actualDuration.toFixed(2)} ms`);
  console.log(`Base Duration: ${baseDuration.toFixed(2)} ms`);
  console.log(`Start: ${startTime.toFixed(2)} ms`);
  console.log(`Commit: ${commitTime.toFixed(2)} ms`);
  console.log("-----------------------------");
}

export default function ProfilerExample() {
  return (
    <>
      <Profiler id="AppProfiler" onRender={onRender}>
        <AppProfiler />
      </Profiler>
    </>
  );
}

function AppProfiler() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p
        style={{
          border: "2px solid black",
          padding: 10,
          margin: 10,
          width: 50,
          textAlign: "center",
        }}
      >
        {count}
      </p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  );
}

<button onClick={() => setCount(count + 1)}>Increment</button>;
