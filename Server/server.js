const express = require("express"),
 app = express(),
 mongoose = require("mongoose"),
//  routes = require("./Server/Routes/routes"),
 cors = require("cors"),
 petRouter = require("./routes/pets"),
 userRouter = require("./routes/users")

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/api/pets/", petRouter);
app.use("/api/users/", userRouter);
app.get("*", (req, res) => {
  res.sendFile(path.resolve("../client/dist/public/index.html"));
});
app.all('*', (req, res) => {
    res.sendStatus(500)
})
mongoose
  .connect("mongodb://127.0.0.1/beltExamPets", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((value) => {
    console.log("Connected to MongoDB");

    const port = 8000;
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
