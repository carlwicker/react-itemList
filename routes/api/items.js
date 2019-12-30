const express = require("express");
const router = express.Router();

// Item Model
const Item = require("../../models/Item");

// @route   GET api/items
// @desc    Get all items
// @access  Public
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// @route   POST api/items
// @desc    Post item
// @access  Public
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save().then(item => res.json(item));
  console.log(req.body.name);
});

// @route   PATCH api/items/update/:id
// @desc    Update item
// @access  Public
router.put("/update/:_id", (req, res) => {
  Item.findOneAndUpdate(
    { _id: req.params._id },
    { name: req.body.name }
  ).then(() => res.json({ success: true }));
});

// @route   DELETE api/items/:id
// @desc    Delete item
// @access  Public
router.delete("/:_id", (req, res) => {
  Item.findById(req.params._id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
