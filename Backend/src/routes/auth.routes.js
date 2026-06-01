const {Router} = require('express');
const authrouter = Router();
const authController = require('../controllers/auth.controller');
const { authUser } = require('../middlewares/auth.middleware');

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 */
authrouter.post('/register', authController.registerUserController);

/**
 * @route POST /api/auth/login
 * @desc Login a user
 * @access Public
 */
authrouter.post('/login', authController.loginUserController);

/**
 * @route POST /api/auth/logout
 * @desc Logout the current user
 * @access Private
 */
authrouter.post('/logout', authUser, authController.logoutUserController);

/**
 * @route GET /api/auth/me
 * @desc Get the current logged-in user
 * @access Private
 */
authrouter.get('/me', authUser, authController.getMeController);

module.exports = authrouter;