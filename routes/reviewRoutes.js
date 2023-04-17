const express = require('express');
const {
  getAllReviews,
  createReview,
} = require('../controller/reviewController');
const { protect, restrictTo } = require('../controller/authController');

const router = express.Router();

router
  .route('/')
  .get(getAllReviews)
  .post(protect, restrictTo('user'), createReview);

module.exports = router;
