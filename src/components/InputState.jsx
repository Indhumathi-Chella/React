import { useState } from "react";

function Input({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{width:200, margin :10, display:"block"}}
    />
  );
}

export default function TextInputs() {
  const [text, setText] = useState("");
  return (
    <>
      <h2>Lifting State</h2>
      <Input value={text} onChange={setText} />
      <Input value={text} onChange={setText} />
    </>
  );
}
