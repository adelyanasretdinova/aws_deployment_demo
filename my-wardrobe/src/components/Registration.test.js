import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Registration from "./Registration";
import { server } from "../mocks/server.js";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const setRegisteredIn = jest.fn();

describe("Registration", () => {
  test("renders the form", () => {
    render(<Registration setLoggedIn={setRegisteredIn} />);
    // elements are present using the lable
    const inputUserName = screen.getByLabelText(/username/i);
    expect(inputUserName).toBeInTheDocument();
    const inputPassword = screen.getByLabelText(/password/i);
    expect(inputPassword).toBeInTheDocument();
    const inputEmail = screen.getByLabelText(/email/i);
    expect(inputEmail).toBeInTheDocument();
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  test("displays text for ok login", async () => {
    render(<Registration setLoggedIn={setRegisteredIn} />);
    // fill out form:
    await userEvent.type(screen.getByLabelText(/username/i), "Tester");
    await userEvent.type(screen.getByLabelText(/password/i), "ABC123abc!");
    await userEvent.type(screen.getByLabelText(/email/i), "email@gmail.com");
    await userEvent.click(screen.getByRole("button"));
    // check if we see the text
    expect(await screen.findByText("You are logged in!")).toBeInTheDocument();
  });
});
