const mongoose = require("mongoose");


const PetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      unique: true,
    },
    animalType: {
      type: String,
      required: true,
      minlength: 3,
    },
    age: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true,
    },
    skills: {
      type: [String],
      maxlength: 3,
    },
    likedByUsers: [{
      type: mongoose.Types.ObjectId,
      ref: "User"
    }],
    owner: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  { timestamps: true }
);

const Pet = mongoose.model("pet", PetSchema);

module.exports = Pet;
