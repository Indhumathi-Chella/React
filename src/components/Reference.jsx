import { useRef, forwardRef, useState } from "react";

function InputFocus() {
  const inputRef = useRef(null);
  return (
    <>
      <h2>Use Ref</h2>
      <label htmlFor="name">
        Name :
        <input type="text" ref={inputRef} id="name" />
      </label>
      <button onClick={() => inputRef.current.focus()}>Focus Feild </button>
      <button onClick={() => (inputRef.current.value = "")}>
        Remove Feild{" "}
      </button>
    </>
  );
}

const CustomInput = forwardRef((props, ref) => {
  return <input type="text" ref={ref} {...props} />;
});

function DisplayInput() {
  const inputRef = useRef();
  return (
    <>
      <CustomInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>
        Click and Make Focus
      </button>
    </>
  );
}

function Input({ ref: inputRef }) {
  return <input type="text" ref={inputRef} />;
}

function Display() {
  const inputRef = useRef();
  return (
    <>
      <Input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
      <button onClick={() => inputRef.current.blur()}>Remove</button>
    </>
  );
}

function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);
    if (videoRef.current) {
      nextIsPlaying ? videoRef.current.play() : videoRef.current.pause();
    }
  }

  function handleEnded() {
    setIsPlaying(false);
  }

  return (
    <>
      <video width="250" ref={videoRef} onEnded={handleEnded}>
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
      <button
        onClick={handleClick}
        style={{
          display: "block",
          padding: 10,
          margin: 10,
          backgroundColor: "white",
        }}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </>
  );
}

export { InputFocus, DisplayInput, Display, VideoPlayer };
