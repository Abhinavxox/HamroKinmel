const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");

app.use(express.json());

//importing all the routes
const products = require("./routes/product");
const users = require("./routes/user");

app.use("/api/v1/", products);
app.use("/api/v1", users);

//middleware to handler errors
app.use(errorMiddleware);

module.exports = app;
