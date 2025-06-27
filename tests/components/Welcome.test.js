import { render, screen} from "@testing-library/react";
import Welcome from "../../src/components/Welcome";

test("renders welcome message", () => {
  render(<Welcome />);
  expect(screen.getByText(/Hello,everyone from webpack/i)).toBeInTheDocument();
});