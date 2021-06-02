import { check, body } from "express-validator";

export const signIn = [
  check("email", "Email is not valid")
    .isEmail()
    .normalizeEmail()
    .trim()
    .escape(),
  check("password", "Password is not valid")
    .not()
    .isEmpty({ ignore_whitespace: true })
    .isLength({ min: 7 }),
];

export const signUp = [
  check("name", "Name is required")
    .not()
    .isEmpty({ ignore_whitespace: true })
    .trim()
    .escape(),
  body("email", "Email is not valid")
    .isEmail()
    .normalizeEmail()
    .trim()
    .escape(),
  body("password")
    .matches(".*[0-9].*")
    .withMessage("Your password should have at least one number")
    .matches(/[!@#$%^&*(),.?":{}|<>]/)
    .withMessage("Your password should have at least one sepcial character")
    .isLength({ min: 8, max: 15 })
    .withMessage("Your password should have min and max length between 8-15"),
  body("confirmPassword", "Passwords must be equal").custom(
    (value, { req }) => value === req.body.password
  ),
  check("confirmPassword", "Confirm Password is not valid").isLength({
    min: 8,
    max: 15,
  }),
];

// FIXME: Not finished
export const job = [
  check("language", "language is not valid").isString(),
  check("password", "Password is not valid")
    .not()
    .isEmpty({ ignore_whitespace: true })
    .isLength({ min: 7 }),
];

// FIXME: Not finished
export const manageCourse = [
  check("title", "Title is not valie").not().isEmpty().trim().escape(),
  check("description", "Description is not valid")
    .not()
    .isEmpty({ ignore_whitespace: true })
    .trim()
    .escape(),
];
