import { render, screen } from "@testing-library/react";
import OutfitCard from "./OutfitCard";

describe("Outfit card", () => {
  test("Render a button", () => {
    render(<OutfitCard item={{ url: "", descrshort: "a", id: "1" }} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  test("renders descrshort of props", () => {
    render(<OutfitCard item={{ url: "", descrshort: "abc", id: "1" }} />);
    const text = screen.getByText("abc");
    expect(text).toBeInTheDocument();
  });
  test("renders url of props", () => {
    render(<OutfitCard item={{ url: "some.url", descrshort: "a", id: "1" }} />);
    const button = screen.getByRole("img");
    expect(button).toHaveAttribute("src", expect.stringContaining("some.url"));
  });
});
