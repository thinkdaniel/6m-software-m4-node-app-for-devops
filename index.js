require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

// Use helmet middleware for security
app.use(helmet());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", // React dev server
    credentials: true, // <-- allow cookies/credentials
  })
);

// Add morgan middleware for logging requests
app.use(morgan("dev"));

// Disable X-Powered-By header
app.disable("x-powered-by");

// This is parse JSON request bodies
app.use(express.json());

const { print, getHome, createUser } = require("./controller");
const { login, logout, transfer } = require("./authController");

app.get("/", print);
app.get("/home", getHome);
app.post("/users", createUser);
app.post("/login", login);
app.post("/logout", logout);
app.get("/transfer", transfer);

app.listen(process.env.PORT, () => {
  console.log(`Listening to port ${process.env.PORT}`);
});
