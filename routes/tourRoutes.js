const express = require('express');
const {
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
  aliasTopTour,
  getTourStats,
  getMonthlyPlan,
} = require('../controller/tourController');
const { protect, restrictTo } = require('../controller/authController');
const reviewRouter = require('./reviewRoutes');

const router = express.Router();

// router.param('id', checkID);s
router.use('/:tourId/reviews', reviewRouter);

router.route('/top-5-cheap').get(aliasTopTour, getAllTours);

router.route('/tour-stats').get(getTourStats);

router.route('/monthly-plan/:year').get(getMonthlyPlan);

router.route('/').get(protect, getAllTours).post(createTour);

router
  .route('/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(protect, restrictTo('admin', 'lead-guide'), deleteTour);
// router
//   .route('/:tourId/reviews')
//   .post(protect, restrictTo('user'), createReview);
module.exports = router;
