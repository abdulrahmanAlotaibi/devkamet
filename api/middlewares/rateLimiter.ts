import rateLimit from "express-rate-limit";
const API_RATE_LIMIT = require("config").get("API_RATE_LIMIT");

const rateLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 hrs in milliseconds
  max: API_RATE_LIMIT,
  message: "You have exceeded the 100 requests in 24 hrs limit!",
  headers: true,
});

export default rateLimiter;
