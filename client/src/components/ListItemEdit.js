import React from "react";
import "./ListItemEdit.css";

function ListItemEdit(props) {
  return (
    <form>
      <div id="list-item-add" className="input-group mb-3 form-group">
        <input
          className="form-control"
          id="edit-item-input"
          defaultValue={props._id}
        ></input>
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary">
            Edit Item
          </button>
        </div>
      </div>
    </form>
  );
}

export default ListItemEdit;
