import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { render } from "../../test-utils";
import { DataCard } from "./DataCard";

it("renders IndexCard", () => {
  render(<DataCard />);
  const el = screen.getByTestId("weather-card");
  expect(el).toBeInTheDocument();
});
