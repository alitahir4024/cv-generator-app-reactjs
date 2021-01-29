const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const UserResumeData = require("./models/userResumeSchema.js");
const userResumeSchema = require("./models/userResumeSchema.js");
const app = express();

app.use(cors());

mongoose
  .connect(
    "mongodb+srv://theDevNinja:ninja123@basiccluster.d4wud.mongodb.net/theDevNinja?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("DB connected");
  });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// set the data to DB

app.post("/api", (req, res) => {
  var user = new UserResumeData(req.body);
  user
    .save()
    .then((res) => {
      console.log(res);
    })
    .then(() => {
      console.log(res.send);
    });
});

app.get("/api", (req, res) => {
  UserResumeData.find().then((ServerResponse) => {
    res.send(ServerResponse);
  });
});

app.listen("9999", () => {
  console.log("server is listening at port 9999");
});
