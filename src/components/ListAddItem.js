import React from "react";
import "./ListAddItem.css";

function ListAddItem() {
  const addItemForm = document.getElementById("add-item-input");

  console.log(addItemForm);

  return (
    <form>
      <label>ListItemAdd Component</label>
      <input type="text" id="add-item-input"></input>
      <button>Test Button</button>
    </form>
  );
}

export default ListAddItem;
