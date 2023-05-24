const isAdmin = require("../../middleware/auth.middleware");
const { upload } = require("../../middleware/files.middleware");

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
  createReview,
  addReview,
  checkCode,
  resendCode,
} = require("../controllers/User.controllers");

const express = require("express").Router();

const userRoutes = express;

userRoutes.post("/register", upload.single("imagen"), register);
userRoutes.post("/login", login);
userRoutes.get("/forgotPassword", forgotPassword);
userRoutes.post("/changePassword", changePassword);
userRoutes.delete("/deleteUser", deleteUser);
userRoutes.post("/checkCode", checkCode);
userRoutes.post("/resendCode", resendCode);

userRoutes.get("/name/:name", getByName);
userRoutes.get("/", getAll);
userRoutes.get("/:id", getById);

userRoutes.post("/addtoEvent", addToEvent);

module.exports = userRoutes;
