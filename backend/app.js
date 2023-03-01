const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");

app.use(express.json());

//importing all the routes
const products = require("./routes/product");

app.use("/api/v1/", products);

//middleware to handler errors
app.use(errorMiddleware);

module.exports = app;
