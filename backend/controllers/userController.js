const User = require("../models/User");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

//register new user (/api/v1/register)
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "avatars/kccxqjyqjyqjyqjyqjyq",
      url: "https://res.cloudinary.com/dxqjyqjyqjyqjyqjyq/image/upload/v1620000000/avatars/kccxqjyqjyqjyqjyqjyq.png",
    },
  });

  const token = user.getJWTToken();

  res.status(201).json({
    success: true,
    token,
  });
});

//login user (/api/v1/login)
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  //checks if email and password is entered by user
  if (!email || !password) {
    return next(new ErrorHandler("Please enter email and password", 400));
  }

  //finding the user in db
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }

  //checks if psassword is correct or not
  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }

  const token = user.getJWTToken();
  res.status(200).json({
    success: true,
    token,
  });
});
