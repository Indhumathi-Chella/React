import { render, screen } from "@testing-library/react";
import Greetings from "../../src/components/Greetings";

it("render greetings", () =>{
    render( <Greetings name="Indhu" />);
    expect(screen.getByText(/hello,indhu/i)).toBeInTheDocument();
});