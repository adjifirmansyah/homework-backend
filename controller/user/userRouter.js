const express = require("express");
const router = express.Router();
const {
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("./userController");
const { postValidator, runValidation } = require("./userValidator");

router
  .get("/", getUser)
  .post("/", postValidator, runValidation, createUser)
  .put("/", updateUser)
  .delete("/", deleteUser);

module.exports = router;
