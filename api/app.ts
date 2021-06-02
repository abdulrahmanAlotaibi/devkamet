import express from "express";
import { BaseError, catcher, handleError } from "./middlewares/errorHandler";
import { HttpStatusCode } from "./shared/http";
import { prapareErrorSubs } from "./subscribers/errorSubscriber";
import connectDB from "./config/db";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import cookieParser from "cookie-parser";
import rateLimiter from "./middlewares/rateLimiter";
import config from "config";

const app = express();

console.log(config.get("JWT_SECRET"));

// Access-Control-Allow-Origin *
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

// Register Event Emitter for 'uncaughtException'
prapareErrorSubs();

// To parse incoming requests as json
app.use(express.json());

app.use(cookieParser());

// Set Static folder
app.use(express.static(path.join(__dirname, "public")));

// Logging in dev mode
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

// Define API rate limiting
app.use(rateLimiter);

// Define Routes
app.use("/api/v1/auth", require("./routes/authRoute"));
app.use("/api/v1/users", require("./routes/userRoute"));
app.use("/api/v1/courses", require("./routes/courseRoute"));
app.use("/api/v1/ide", require("./routes/IDERoute"));
app.use("/api/v1/lessons", require("./routes/lessonRoute"));
app.use("/api/v1/announcements", require("./routes/announcementRoute"));
app.use("/api/v1/common", require("./routes/commonRoute"));

// To check the availablity of the server
app.get("/_health", (req, res) => {
  res.status(200).send("ok");
});

connectDB();

// Not found 404
app.get("/", (req: any, res: any, next: any) => {
  try {
    throw new BaseError(
      "API Error: not found 404",
      HttpStatusCode.NOT_FOUND,
      "Resource not found, try again later",
      true,
      "Internal server error, try again later"
    );
  } catch (err) {
    next(err);
  }
});

// Error handler
app.use(handleError);

export default app;
