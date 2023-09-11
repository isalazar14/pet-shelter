const db = require("../utils/db"),
  auth = require("../utils/auth"),
  bcrypt = require("bcrypt"),
  saltRounds = 10;

module.exports = {
  // getAllUsers: (req,res) => {
  //   db.User.find().sort({animalType: 1, name: 1})
  //     .then(data => {
  //       res.json({ status: "success", results: data});
  //     })
  //     .catch(err => {
  //       res.json({ status: "error", results: err });
  //     })
  // },
  getUser(req, res) {
    db.User.findOne({ _id: req.params.id })
      .then((data) => {
        res.json({ status: "success", results: data });
      })
      .catch((err) => {
        res.json({ status: "error", results: err });
      });
  },
  async register(req, res) {
    const { name, username, email, password } = req.body,
      pwSalt = bcrypt.genSaltSync(saltRounds),
      pwHash = bcrypt.hashSync(password, pwSalt),
      newUserData = {
        name,
        username,
        email,
        pwHash,
        pwSalt,
      };

    // Implement registration logic here (e.g., save user data to MongoDB)

    // Respond with success or error

    db.User.create(newUserData)
      .then((newUser) => {
        const accessToken = auth.generateAuthToken(newUser);
        res.status(200).json({ message: "Registration successful" });
        res.json({ status: "success", results: newUser });
      })
      .catch((err) => {
        res.json({ status: "error", results: err });
      });
  },
  editUser(req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body, {
      runValidators: true,
      new: true,
    })
      .then((data) => {
        res.json({ status: "success", results: data });
      })
      .catch((err) => {
        res.json({ status: "error", results: err });
      });
  },
  deleteUser: (req, res) => {
    db.User.findOneAndDelete({ _id: req.params.id })
      .then((data) => {
        res.json({ status: "success", results: data });
      })
      .catch((err) => {
        res.json({ status: "error", results: err });
      });
  },
  login(req, res) {
    (req, res) => {
      const { username, password } = req.body;

      // Implement login logic here (e.g., validate user credentials)

      // Respond with success or error
      if (/* credentials are valid */ true) {
        res.status(200).json({ message: "Login successful" });
      } else {
        res.status(401).json({ message: "Login failed" });
      }
    };
  },
  logout(req, res) {
    res.json({ message: "logging out" });
  },
};
