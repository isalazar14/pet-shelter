const User = require("../models/user");

module.exports = {
  // getAllUsers: (req,res) => {
  //   User.find().sort({animalType: 1, name: 1})
  //     .then(data => {
  //       res.json({ status: "success", results: data});
  //     })
  //     .catch(err => {
  //       res.json({ status: "error", results: err });
  //     })
  // },
  getUser(req, res) {
    User.findOne({ _id: req.params.id })
      .then((data) => {
        res.json({ status: "success", results: data });
      })
      .catch((err) => {
        res.json({ status: "error", results: err });
      });
  },
  register(req, res) {
    const { username, password } = req.body;

    // Implement registration logic here (e.g., save user data to MongoDB)

    // Respond with success or error
    User.create(req.body)
      .then((data) => {
        res.status(200).json({ message: "Registration successful" });
        res.json({ status: "success", results: data });
      })
      .catch((err) => {
        res.json({ status: "error", results: err });
      });
  },
  editUser(req, res) {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, {
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
    User.findOneAndDelete({ _id: req.params.id })
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
