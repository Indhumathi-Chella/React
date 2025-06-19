import { useEffect, useState } from "react";
function Timer() {
  useEffect(() => {
    const time = setInterval(() => {
      console.log("starts");
    }, 10);

    return () => {
      clearInterval(time);
      console.log("Timer end");
    };
  }, []);
  return <h2>Timer is running....</h2>;
}

function LightON() {
  useEffect(() => {
    console.log("Light Turned ON");

    return () => {
      console.log("Light Turned OFF");
    };
  }, []);

  return <h1>Light is Turned ON</h1>;
}

function SwitchLight() {
  const [lightOn, setLightOn] = useState(true);

  return (
    <div>
      <button onClick={() => setLightOn((prev) => !prev)}>
        {lightOn ? "Turn OFF" : "Turn ON"}
      </button>
      {lightOn && <LightON />}
    </div>
  );
}

function ScrollLogger() {
  useEffect(() => {
    function onScroll() {
      console.log(window.scrollY);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div>Scroll the page and check console</div>;
}

export { Timer, SwitchLight, ScrollLogger };
