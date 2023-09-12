const appRouter = require("express").Router()
const path = require('path');

appRouter.use("/api/pets", petRouter);
appRouter.use("/api/users", userRouter);
appRouter.get("/client", (req, res) => {
  res.sendFile(path.resolve("../client/dist/public/index.html"));
});
app.use("*", (req, res) => {
  res.sendStatus(400);
});

module.exports = appRouter