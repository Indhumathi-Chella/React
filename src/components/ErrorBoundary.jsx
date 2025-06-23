import { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something Went Wrong!</h1>;
    }
    return this.props.children;
  }
}

function Greeting({ text }) {
  if (!text) {
    throw new Error("Text is missing!");
  }
  return <h1>{text}</h1>;
}

function GreetingLayout() {
  return (
    <>
      <ErrorBoundary>
        <Greeting text="Hi,Everyone" />
        <Greeting text="" />
        <Greeting text="Hi,Everyone" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Greeting text="Hi,Everyone" />
      </ErrorBoundary>
    </>
  );
}
export { GreetingLayout };
