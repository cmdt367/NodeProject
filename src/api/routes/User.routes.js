const {
  register,
  getAll,
  getById,
  getByName,
  forgotPassword,
  changePassword,
  login,
  logout,
  updateUser,
  deleteUser,
  createEvent,
  addToEvent,
} = require("../controllers/User.controllers");

const express = require("express").Router();

const userRoutes = express;

userRoutes.post("/register", register);
userRoutes.post("/login", login);
userRoutes.get("/forgotPassword", forgotPassword);
userRoutes.post("/changePassword", changePassword);
userRoutes.get("/name/:name", getByName);
userRoutes.get("/", getAll);
userRoutes.get("/:id", getById);

module.exports = userRoutes;
