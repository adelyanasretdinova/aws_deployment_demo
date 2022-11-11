import { rest } from "msw";
import { setupServer } from "msw/node";
let path = `${process.env.REACT_APP_WARDROBE_API}/users/login`;
let pathRegistration = `${process.env.REACT_APP_WARDROBE_API}/users`;

const handlers = [
  rest.post(path, (req, res, ctx) => {
    // the real response, match with ctx
    // res.status(200).json({
    //     message: "logged in",
    //     token : token
    // })
    return res(
      ctx.status(200),
      ctx.json({
        message: "logged in",
        token: "a token",
      })
    );
  }),
  // the real response, match with ctx
  // res.status(201).json({
  // success: true,
  // message: "Item was added",
  // data: addedUser,
  rest.post(pathRegistration, (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        success: true,
        message: "User is registered",
        token: "the token",
      })
    );
  }),
];

export const server = setupServer(...handlers);
