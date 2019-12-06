const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
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

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "client/build/")));

// Mongoose Connection
const db = process.env.MONGODB_URI;
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });

// Mongoose Model
const listItem = mongoose.model("listItem", {
  name: String
});

const item = new listItem({ name: "do something" });
item.save().then(() => console.log("data test"));

// New API
app.use("/api/items", items);

// Fake API
app.get("/api/customers", (req, res) => {
  const data = fetch("https://react-item-list.herokuapp.com/api/customers")
    .then(res => {
      if (res.status >= 400) {
        throw new Error("Bad response");
      }
      return res.json();
    })
    .then(user => {
      // Output JSON
      res.json(user);
    })
    .catch(err => {
      console.error(err);
    });
});

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname + "client", "build", "index.html"));
});

// Start Server
app.listen(port, () => console.log("Server started on port: " + port));
