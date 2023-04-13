const User = require('../models/user.model');

module.exports = {
  // Get all users
  getAllUsers: async (req, res, next) => {
    try {
      const users = await User.find({});
      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  },

  // Get a user by ID
  getUserById: async (req, res, next) => {
    try {
      const user = await User.findById(req.params.userId);
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  },

  // Create a new user
  createUser: async (req, res, next) => {
    try {
        console.log(req.body)
      const user = new User(req.body);
      await user.save();
      res.status(201).json(user);
    } catch (err) {
      next(err);
    }
  },

  // Update a user
  updateUser: async (req, res, next) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.userId,
        req.body,
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      next(err);
    }
  },

  // Delete a user
  deleteUser: async (req, res, next) => {
    try {
      await User.findByIdAndRemove(req.params.userId);
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  },
};
