const userRouter = require("express").Router(),
  usersController = require("../controllers/users"),
  auth = require("../utils/auth");

userRouter.post("/register", usersController.register);
userRouter.post("/login", usersController.logIn);
userRouter.post("/logout", usersController.logOut);
userRouter.get("/:id", auth.authenticateJWT, usersController.getUser);
userRouter.put("/:id", auth.authenticateJWT, usersController.editUser);
userRouter.delete("/:id", auth.authenticateJWT, usersController.deleteUser);

module.exports = userRouter;
