const express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  appRouter = require('./routes/router'),
  cors = require("cors"),
  path = require("path");

require("dotenv").config({ path: path.join(__dirname, "../.env") });

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(appRouter)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
mongoose
  .connect(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((value) => {
    console.log("Connected to MongoDB");

    const port = process.env.SERVER_PORT;
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
