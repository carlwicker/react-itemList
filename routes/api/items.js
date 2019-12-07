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
// @desc    Post items
// @access  Public
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save().then(item => res.json(item));
});

// @route   DELETE api/items/:if
// @desc    Delete items
// @access  Public
router.delete("/:_id", (req, res) => {
  Item.findById(req.params._id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(494).json({ success: false }));
});

module.exports = router;
