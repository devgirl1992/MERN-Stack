const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require("./routes/api/items");

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

//DB Config
const db = require("./config/keys").mongoURI;

//Connect to mongo
mongoose
  .connect(db)
  .then(() => console.log("Mongo DB Connected..."))
  .catch(err => console.log(err));

//use Routes
app.use("/api/items", items);

//run server
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on Port ${port}`));
