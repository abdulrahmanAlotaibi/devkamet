import express from "express";
const { auth } = require("../middlewares/auth");
import validationChecker from "../middlewares/validator";
import { signIn } from "../middlewares/validationChecklist";
import * as authController from "../controllers/authController";
const router = express.Router();

/**
 *  @route  GET api/v1/auth
 *  @desc   Get user by token
 *  @access Private
 */
router.get("/", auth, authController.authUser);

/**
 *  @route  POST api/v1/auth
 *  @desc   Sign In and get a new token
 *  @access Public
 */
router.post("/", signIn, validationChecker, authController.signIn);


module.exports = router;
