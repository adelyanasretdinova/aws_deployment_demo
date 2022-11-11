import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Registration from "./Registration";
import { server } from "../mocks/server.js";
import { rest } from "msw";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Registration", () => {
  xtest("renders the form", () => {
    render(<Registration />);
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

  xtest("displays text Created for ok registration", async () => {
    render(<Registration />);
    // fill out form:
    await userEvent.type(screen.getByLabelText(/username/i), "Tester");
    await userEvent.type(screen.getByLabelText(/password/i), "ABC123abc!");
    await userEvent.type(screen.getByLabelText(/email/i), "email@gmail.com");
    await userEvent.click(screen.getByRole("button"));
    // check if we see the text
    expect(await screen.findByText("Created")).toBeInTheDocument();
  });

  test("displays error when signup does not work", async () => {
    // mock a 500 response
    let pathSignup = `${process.env.REACT_APP_WARDROBE_API}/users`;
    server.use(
      rest.post(pathSignup, (req, res, ctx) => {
        // body/json is optional for this test
        return res(
          ctx.status(500),
          ctx.json({
            success: false,
            errors: "could not sign up",
          })
        );
      })
    );
    render(<Registration />);
    // fill out form:
    await userEvent.type(screen.getByLabelText(/username/i), "Tester");
    await userEvent.type(screen.getByLabelText(/email/i), "test@mail.com");
    await userEvent.type(screen.getByLabelText(/password/i), "ABC123abc!");
    await userEvent.click(screen.getByRole("button"));
    // check if we see the text

    expect(
      await screen.findByText("There was an error when signing up")
    ).toBeInTheDocument();
    expect(screen.queryByText("Created")).not.toBeInTheDocument();
  });
});
