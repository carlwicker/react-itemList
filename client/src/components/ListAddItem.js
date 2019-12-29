import React from "react";
import "./ListAddItem.css";

function ListAddItem(props) {
  return (
    <form onSubmit={props.handleAddItemSubmit}>
      <div id="list-item-add" className="input-group mb-3">
        <input
          value={props.newItem}
          onChange={props.handleAddItemChange}
          type="text"
          className="form-control"
          id="add-item-input"
        ></input>
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary">
            Add Item
          </button>
        </div>
      </div>
    </form>
  );
}

export default ListAddItem;
