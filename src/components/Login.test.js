import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Login from "./Login";
import { server } from "../mocks/server.js";

// mock server:
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// mock  callback functions:
const setLoggedIn = jest.fn();

describe("Login", () => {
  test("renders the form", () => {
    render(<Login setLoggedIn={setLoggedIn} />);
    // elements are present using the lable
    const inputEmail = screen.getByLabelText(/email/i);
    expect(inputEmail).toBeInTheDocument();
    const inputPassword = screen.getByLabelText(/password/i);
    expect(inputPassword).toBeInTheDocument();
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  test("displays text for ok login", async () => {
    render(<Login setLoggedIn={setLoggedIn} />);
    // fill out form:
    await userEvent.type(screen.getByLabelText(/email/i), "Tester@gmail.com");
    await userEvent.type(screen.getByLabelText(/password/i), "ABC123abc!");
    await userEvent.click(screen.getByRole("button"));
    // check if we see the text

    expect(await screen.findByText("You are logged in!")).toBeInTheDocument();
  });
});
