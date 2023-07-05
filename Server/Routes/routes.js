const controller = require('../Controllers/controller');
const path = require('path');

module.exports = app => {
  app.get('/api/pets', controller.getAllPets);
  app.get('/api/pets/:id', controller.getPet);
  app.post('/api/pets', controller.createPet);
  app.put('/api/pets/:id', controller.editPet);
  app.delete('/api/pets/:id', controller.deletePet);
  app.all("*", (req, res, next) => {
    res.sendFile(path.resolve('./client/dist/public/index.html'));
  });
}