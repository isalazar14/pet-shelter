const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./Server/Routes/routes");
const cors = require("cors");

app.use(express.static(__dirname + "/public/dist/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
mongoose
  .connect("mongodb://127.0.0.1/beltExamPets", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((value) => {
    console.log("Connected to MongoDB");
    routes(app);

    const port = 8000;
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
