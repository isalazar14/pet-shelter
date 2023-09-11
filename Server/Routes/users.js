const userRouter = require("express").Router(),
 usersController = require("../controllers/users"),
 auth = require('../utils/auth')

// const path = require("path");

userRouter.post("register", usersController.register);
userRouter.post("login", usersController.login);
userRouter.get(":id", auth.authenticateJWT, usersController.getUser);
userRouter.put(":id", auth.authenticateJWT, usersController.editUser);
userRouter.delete(":id", auth.authenticateJWT, usersController.deleteUser);

module.exports = userRouter;
