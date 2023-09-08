const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 2,
    },
    username: {
      type: String,
      required: true,
      minlength: 2,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate: {
        validator(value) {
          return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value);
        },
        message: 'Invalid email format',
      }
    },
    password: {
      type: String,
      required: true,
      minlength: 8
    },
    role: {
      type: String,
      default: "user", // You can define user roles
      enum: ["user", "admin"],
    },
    pets: [
      {
        type: mongoose.Types.ObjectId,
        ref: "pet",
      },
    ],
    likedPets: [
      {
        type: mongoose.Types.ObjectId,
        ref: "pet",
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
