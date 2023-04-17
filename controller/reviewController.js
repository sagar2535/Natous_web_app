const Review = require('../model/reviewModel');
const AppError = require('../utils/AppError');
const { catchAsync } = require('../utils/catchAsync');

exports.getAllReviews = catchAsync(async (req, res, next) => {
  const reviews = await Review.find();
  if (!reviews) {
    return next(new AppError('Review is not found in this route', 400));
  }
  res.status(200).json({
    status: 'success',
    results: reviews.length,
    data: {
      reviews,
    },
  });
});

exports.createReview = catchAsync(async (req, res, next) => {
  const review = await Review.create(req.body);
  if (!review) {
    return next(new AppError('unable to create review', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      review,
    },
  });
});
