import { useState } from "react";
import { createPortal } from "react-dom";

function PortalContent() {
  return <div>Alert, Login to Continue!</div>;
}

function DisplayPortal() {
  return createPortal(<PortalContent />, document.body);
}

function Popup({ onClose }) {
  return createPortal(
    <div style={overlayStyle}>
      <div style={popupStyle}>
        <p>Login to Continue</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body
  );
}

function ViewPortal() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>Click</button>
      {show && <Popup onClose={() => setShow(false)} />}
    </>
  );
}

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  height: "100vh",
  width: "100vw",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
};

const popupStyle = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  minWidth: "300px",
  textAlign: "center",
  boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
};

export { DisplayPortal, ViewPortal };
