import { render, screen } from "@testing-library/react";
import Outfit from "./Outfit";

describe("Outfit", () => {
  test("Renders a card", () => {
    render(
      <Outfit outfitData={[{ url: "some url", descrshort: "abc", id: "1" }]} />
    );
    const text = screen.getByText("abc");
    expect(text).toBeInTheDocument();
  });
  test("Renders two cards", () => {
    render(
      <Outfit
        outfitData={[
          { url: "some url", descrshort: "abc", id: "1" },
          { url: "some url", descrshort: "def", id: "2" },
        ]}
      />
    );
    const card1 = screen.getByText("abc");
    expect(card1).toBeInTheDocument();
    const card2 = screen.getByText("def");
    expect(card2).toBeInTheDocument();
  });
  // todo: conditional rendering depending on outfit data
});
