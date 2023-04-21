const express = require('express');
const {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
  updateMe,
  deleteMe,
  getMe,
} = require('../controller/userController');

const {
  signUp,
  login,
  forgotPassword,
  resetPassword,
  updatePassword,
  protect,
  restrictTo,
  logout,
} = require('../controller/authController');

const router = express.Router();

router.post('/signup', signUp);

router.post('/login', login);

router.get('/logout', logout);

router.post('/forgotPassword', forgotPassword);

router.patch('/resetPassword/:token', resetPassword);

//Protect all the routes after this middleware is called
router.use(protect);

router.patch('/updateMyPassword', updatePassword);

router.get('/me', getMe, getUser);

router.patch('/updateMe', updateMe);

router.delete('/deleteMe', deleteMe);

// Only Admin have access to this routes
router.use(restrictTo('admin'));

router.route('/').get(getAllUsers).post(createUser);

router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
