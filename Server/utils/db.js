const User = require("../models/user"),
  Pet = require("../models/pet"),
  RefreshToken = require("../models/refreshToken"),
  db = {
    User,
    Pet,
    RefreshToken,
  };

module.exports = db;
