const User = require('../model/userModel');
const { catchAsync } = require('../utils/catchAsync');
const AppError = require('../utils/AppError');

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();
  if (!users) {
    return next(new AppError('User is not Found on this Route', 404));
  }
  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users,
    },
  });
});
exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This Route is not yet Defined',
  });
};
exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This Route is not yet Defined',
  });
};
exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This Route is not yet Defined',
  });
};
exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This Route is not yet Defined',
  });
};
