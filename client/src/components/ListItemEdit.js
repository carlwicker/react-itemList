import React from "react";
import "./ListItemEdit.css";

function ListItemEdit(props) {
  const selected = {
    _id: props.selected_id,
    name: props.selectedName
  };

  const listUpdateButtonHandler = () => {
    console.log(selected);
    let _id = selected._id;
    let name = selected.name;
    props.listUpdateButton(_id, name);
  };

  // Disable Input Field
  if (selected.name === undefined) {
    return (
      <form>
        <div id="list-item-add" className="input-group mb-3 form-group">
          <input
            readOnly
            className="form-control"
            id="edit-item-input"
            defaultValue={selected.name}
            onChange={e => {
              selected.name = e.target.value;
            }}
          ></input>
          <div className="input-group-append">
            <button disabled type="submit" className="btn btn-primary">
              Update Item
            </button>
          </div>
        </div>
      </form>
    );
  } else {
    // Enable Input Field
    return (
      <form onSubmit={listUpdateButtonHandler}>
        <div id="list-item-add" className="input-group mb-3 form-group">
          <input
            className="form-control"
            id="edit-item-input"
            defaultValue={selected.name}
            onChange={e => {
              e.preventDefault();
              selected.name = e.target.value;
              console.log(selected);
            }}
          ></input>
          <div className="input-group-append">
            <button type="submit" className="btn btn-primary">
              Update Item
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default ListItemEdit;
