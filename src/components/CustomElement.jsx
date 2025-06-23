class MyElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<p>Hello from custom element</p>`;
  }
}
customElements.define("my-element", MyElement);

function MyCustom() {
  return (
    <>
      <my-element></my-element>
      <p>Greetings for EveryOne</p>
      <button is="my-button">Click me</button>
    </>
  );
}

class MyButton extends HTMLButtonElement {
  constructor() {
    super();

    this.style.backgroundColor = "blue";
    this.style.color = "white";
    this.style.padding = "10px";
    this.style.margin = "10px";

    this.addEventListener("click", () => {
      alert("Button Clicked!");
    });
  }
}

customElements.define("my-button", MyButton, { extends: "button" });

export default MyCustom;
