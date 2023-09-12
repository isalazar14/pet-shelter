const petRouter = require("express").Router(),
  petsController = require("../controllers/pets"),
  auth = require("../utils/auth");
// const path = require("path");

petRouter.get("/", petsController.getAllPets);
petRouter.get("/:id", petsController.getPet);
petRouter.post("/", auth.authenticateJWT, petsController.createPet);
// petRouter.post("/", petsController.createPet);
petRouter.put("/:id", auth.authenticateJWT, petsController.editPet);
petRouter.delete("/:id", auth.authenticateJWT, petsController.deletePet);

module.exports = petRouter;
