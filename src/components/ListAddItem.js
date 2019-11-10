import React from "react";
import "./ListAddItem.css";

function ListAddItem() {
  let addItemForm = document.getElementById("add-item-input");

  return (
    <form id="list-add-item-form">
      <label>ListItemAdd Component </label>
      <input
        type="text"
        id="add-item-input"
        defaultValue="Some input text"
      ></input>
      <button href="#" className="btn btn-primary">
        Add Item
      </button>
    </form>
  );
}

export default ListAddItem;
