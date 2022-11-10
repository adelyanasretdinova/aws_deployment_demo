import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import WardrobeCard from "./WardrobeCard";

let testItem = {
  url: "a",
  descrshort: "a",
  descrlong: "a",
  id: "1",
};

describe("Wardrobe card", () => {
  test("renders descrshort of props", () => {
    render(<WardrobeCard item={{ ...testItem, descrshort: "abc" }} />);
    const text = screen.getByText("abc");
    expect(text).toBeInTheDocument();
  });
  test("renders url of props", () => {
    render(<WardrobeCard item={{ ...testItem, url: "some.url" }} />);
    const button = screen.getByRole("img");
    expect(button).toHaveAttribute("src", expect.stringContaining("some.url"));
  });
  test("Renders buttons", () => {
    render(<WardrobeCard item={{ ...testItem }} />);
    const button = screen.getAllByRole("button");
    expect(button[0]).toHaveTextContent("Add to outfit");
    expect(button[1]).toHaveTextContent("Delete");
    expect(button[2]).toHaveTextContent("Edit");
  });

  test("Opens Modal on click", async () => {
    render(<WardrobeCard item={{ ...testItem }} />);
    // check that the modal is not visible before click
    const modalText1 = screen.queryByText("Edit your item");
    expect(modalText1).not.toBeInTheDocument();

    // click
    await userEvent.click(screen.getByRole("button", { name: /edit/i }));

    // check that the modal is  visible after click
    const modalText2 = screen.getByText("Edit your item");
    expect(modalText2).toBeInTheDocument();
  });
});
