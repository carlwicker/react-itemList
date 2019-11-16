const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

const app = express();
const port = 5000 || process.env.PORT;

// Environmental Variables
require("dotenv").config();

const db = process.env.DB;

app.use(bodyParser.urlencoded({ extended: false }));

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

// Start Server
app.listen(port, () => console.log("Server started on port: " + port));
