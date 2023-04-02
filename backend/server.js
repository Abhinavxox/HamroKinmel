const app = require("./app");
const connectDatabase = require("./config/database");
const cloudinary = require("cloudinary");
const dotenv = require("dotenv");

//Handle uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`ERROR : ${err.message}`);
  console.log(`Shutting down the server due to uncaught exception`);
  process.exit(1);
});

// console.log(a);

//setting up config file
dotenv.config({ path: "backend/config/config.env" });

//connecting to database
connectDatabase();

//setting up cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});

//Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.log(`ERROR : ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
