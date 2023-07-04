const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, minlength: 3, unique: true },
    animalType: { type: String, required: true, minlength: 3 },
    description: { type: String, required: true },
    skills: {
      type: [String],
      maxlength: 3
    },
    likes: { type: Number, integer: true, default: 0 },
  },
  { timestamps: true }
);

const Pet = mongoose.model("pet", PetSchema);

module.exports = Pet;
