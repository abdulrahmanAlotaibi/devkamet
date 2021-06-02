import express from "express";
import { signUp } from "../middlewares/validationChecklist";
import validationChecker from "../middlewares/validator";
import * as userController from "../controllers/userController";
import multer from "multer";
import { HttpStatusCode } from "../shared/http";

const upload = multer({
  limits: {
    fileSize: 500000, // Bytes
  },
});

const router = express.Router();

/**
 * @route   POST api/v1/users
 * @desc    Register a user
 * @access  Public
 */

router.post(
  "/",
  (req: any, res: any, next: any) => {
    upload.single("avatar")(req, res, (error: any) => {
      if (error) {
        console.error(`API Error: Multer error ${error.name}`);
        res.status(HttpStatusCode.BAD_REQUEST).json({
          status: "failed",
          message:
            "Invalid image 📷, please check the image size (Maximum size is: 5 MB ) ",
        });
      } else {
        next();
      }
    });
  },
  signUp,
  validationChecker,
  userController.signUp
);

router.post("/contact");

module.exports = router;
