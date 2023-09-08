const userRouter = require("express").Router(),
 userController = require("../controllers/users"),
 auth = require('../utils/auth')

// const path = require("path");

userRouter.post("register", userController.register);
userRouter.post("login", userController.login);
userRouter.get(":id", auth.authenticateJWT, userController.getUser);
userRouter.put(":id", auth.authenticateJWT, userController.editUser);
userRouter.delete(":id", auth.authenticateJWT, userController.deleteUser);

module.exports = userRouter;
