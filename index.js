const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const News = require("./models/News");
// Importing Routes
const ExecuteRoute = require("./routes/ExecuteRoute");

// Connection to Database
const MONGODB_URI = `mongodb+srv://${process.env.MONGODB_ATLAS_USERNAME}:${process.env.MONGODB_ATLAS_PASSWORD}@projects.f7s6vqh.mongodb.net/${process.env.MONGODB_ATLAS_COLLECTION}`;
mongoose.set("strictQuery", false);
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Serving on port ${process.env.PORT} `);
    });

    console.log("Connected to MongoDB Atlas open");
  })
  .catch((err) => {
    console.log("error found");
    console.log(err);
  });
// Configuration for express
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Hello there");
});
// Hamro Course Faculty Routes
app.use("/api", ExecuteRoute);
