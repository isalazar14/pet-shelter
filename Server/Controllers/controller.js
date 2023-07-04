const Pet = require('../Models/Pet');

module.exports = {
  getAllPets: (req,res) => {
    Pet.find().sort({animalType: 1, name: 1})
      .then(data => {
        res.json({ status: "success", results: data});
      })
      .catch(err => {
        res.json({ status: "error", results: err });
      })
  },
  getPet: (req,res) => {
    Pet.findOne({_id: req.params.id})
      .then(data => {
        res.json({ status: "success", results: data });
      })
      .catch(err => {
        res.json({ status: "error", results: err });
      })
  },
  createPet: (req,res) => {
    Pet.create(req.body)
      .then(data => {
        res.json({ status: "success", results: data});
      })
      .catch(err => {
        res.json({ status: "error", results: err });
      })
  },
  editPet: (req,res) => {
    Pet.findOneAndUpdate({_id: req.params.id}, req.body, { runValidators: true, new: true })
      .then(data => {
        res.json({ status: "success", results: data});
      })
      .catch(err => {
        res.json({ status: "error", results: err });
      })
  },
  deletePet: (req,res) => {
    Pet.findOneAndDelete({_id: req.params.id})
      .then(data => {
        res.json({ status: "success", results: data});
      })
      .catch(err => {
        res.json({ status: "error", results: err });
      })
  }
}