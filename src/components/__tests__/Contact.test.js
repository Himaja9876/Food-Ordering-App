import { screen, render, getByRole } from "@testing-library/dom";
import Contact from "../Contact";

test("should load ContactUs page", () => {

  render(<Contact />);

  const heading = getByRole("heading");

  expect(heading).toBeInTheDocument();
});