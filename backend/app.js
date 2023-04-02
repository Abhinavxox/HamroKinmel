const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

//importing all the routes
const products = require("./routes/product");
const users = require("./routes/user");
const orders = require("./routes/order");

app.use("/api/v1/", products);
app.use("/api/v1", users);
app.use("/api/v1", orders);

//middleware to handler errors
app.use(errorMiddleware);

module.exports = app;
