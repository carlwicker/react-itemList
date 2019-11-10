import React from "react";
import "./ListAddItem.css";

function ListAddItem() {
  let addItemForm = document.getElementById("add-item-input");
  console.log(addItemForm);

  return (
    <form id="list-add-item-form">
      <label>ListItemAdd Component </label>
      <input
        type="text"
        id="add-item-input"
        defaultValue="Some input text"
      ></input>
      <button href="#">Test Button</button>
    </form>
  );
}

export default ListAddItem;
