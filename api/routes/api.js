var express = require("express");
var router = express.Router();

router.get("/api", (req, res, next) => {
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
  res.render("index", { title: items[0].name });
});

module.exports = router;
