import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { render } from "../../test-utils";
import { DataCard } from "./DataCard";

it("renders IndexCard", () => {
  render(<DataCard />);
  const el = screen.getByText("Today's UV Index");
  expect(el).toBeInTheDocument();
});
