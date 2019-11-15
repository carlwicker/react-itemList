const express = require("express");

const app = express();
const port = 5000 || process.env.PORT;

require("dotenv/types").config();

app.get("/", (req, res) => {
  res.redirect("/");
});

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

  res.json(items);
});

app.listen(port, () => console.log("Server started on port: " + port));
