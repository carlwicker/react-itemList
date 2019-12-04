const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
var path = require("path");
var cors = require("cors");

const app = express();
const port = process.env.PORT;

// Environmental Variables
require("dotenv").config();

// Enable CORS
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "client/build")));
console.log(__dirname);

const db = process.env.DB;

// Fake API
app.get("/api/customers", (req, res) => {
  const items = [
    {
      id: 1,
      name: "john doe"
    },
    {
      id: 2,
      name: "carl wicker"
    },
    {
      id: 3,
      name: "monika nutaututue"
    }
  ];

  const data = fetch("https://jsonplaceholder.typicode.com/users")
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
  res.sendFile(path.join(__dirname + "index.html"));
});

// Start Server
app.listen(port, () => console.log("Server started on port: " + port));
