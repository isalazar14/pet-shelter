const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, unique: true},
  petType: { type: String, required: true, minlength: 3 },
  description: { type: String, required: true},
  skill1: { type: String },
  skill2: { type: String },
  skill3: { type: String },
  likes: { type: Number, integer: true, default: 0 },
}, { timestamps: true });

const Pet = mongoose.model('pet', PetSchema);

module.exports = Pet;