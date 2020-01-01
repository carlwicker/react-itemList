const express = require("express");
const bodyParser = require("body-parser");
var path = require("path");
var cors = require("cors");
const mongoose = require("mongoose");

const items = require("./routes/api/items");

const app = express();
const port = process.env.PORT || 5000;

// Environmental Variables
require("dotenv").config();

// Enable CORS
app.use(cors());

// parse application/json
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "client/build/")));

// Mongoose Connection
const db = process.env.MONGODB_URI;
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });

// Mongoose Model
const listItem = mongoose.model("listItem", {
  name: String
});

// Items API Endpoints
app.use("/api/items", items);

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname + "client", "build", "index.html"));
});

// Start Server
app.listen(port, () => console.log("Server started on port: " + port));
