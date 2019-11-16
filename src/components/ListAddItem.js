import React from "react";
import "./ListAddItem.css";

function ListAddItem(props) {
  return (
    <div id="list-item-add" className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        id="add-item-input"
        defaultValue=""
      ></input>
      <div className="input-group-append">
        <button className="btn btn-primary">Add Item</button>
      </div>
    </div>
  );
}

export default ListAddItem;
