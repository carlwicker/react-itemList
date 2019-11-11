import React from "react";
import "./ListAddItem.css";

function ListAddItem() {
  return (
    <div id="list-item-add">
      <label>ListItemAdd Component </label>
      <input
        type="text"
        id="add-item-input"
        defaultValue="Some input text"
      ></input>
      <button className="btn btn-primary">Add Item</button>
    </div>
  );
}

export default ListAddItem;
