const User = require('../model/userModel');
// const AppError = require('../utils/AppError');
const { catchAsync } = require('../utils/catchAsync');

exports.signUp = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);
  //   if (!newUser) {
  // return next(new AppError('',400));
  //   }
  res.status(201).json({
    status: 'success',
    data: {
      user: newUser,
    },
  });
});

exports.login = catchAsync(async (req, res, next) => {});
