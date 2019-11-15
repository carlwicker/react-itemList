var express = require("express");
var router = express.Router();

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

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: items[0].name });
});

module.exports = router;
