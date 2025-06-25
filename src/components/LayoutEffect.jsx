import { useState, useLayoutEffect, useRef } from "react";

export default function BoxWidth() {
  const [width, setWidth] = useState(0);
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    function updateWidth() {
      if (boxRef.current)
        setWidth(boxRef.current.getBoundingClientRect().width);
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);
  return (
    <>
      <div
        ref={boxRef}
        style={{ width: "50%",textAlign:"center", padding:50, backgroundColor: "skyblue" }}
      >
        Resize the screen for width changes
      </div>
      <p>Box width :{width}</p>
    </>
  );
}
