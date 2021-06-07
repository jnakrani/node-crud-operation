const router = require("express").Router();

const User = require("../controllers/user.controller.js");

  // Create a new User
  router.post("/signup", User.createUser);

  // check login a User
  router.post("/login", User.loginUser);

  // Retrieve all User
  router.get("/", User.findAllUser);

  // Retrieve a single User with id
  router.get("/:id", User.findOneUser);

  // Add a single User Start Time with id
  router.put("/:id", User.updatedateUser);

  // Delete a User with id
  router.delete("/:id", User.deleteUser);

module.exports = router
