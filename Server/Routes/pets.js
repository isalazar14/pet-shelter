const petRouter = require("express").Router();
const controller = require("../controllers/pets");
// const path = require("path");

petRouter.get("", controller.getAllPets);
petRouter.get(":id", controller.getPet);
petRouter.post("", controller.createPet);
petRouter.put(":id", controller.editPet);
petRouter.delete(":id", controller.deletePet);

module.exports = petRouter;
