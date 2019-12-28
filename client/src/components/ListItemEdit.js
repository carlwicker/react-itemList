import React from "react";
import "./ListItemEdit.css";
import Axios from "axios";

function ListItemEdit(props) {
  const selected = {
    _id: props.selected_id,
    name: props.selectedName
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
            <button
              disabled
              type="submit"
              className="btn btn-primary"
              onClick={() => {
                // db Do Nothing as Disabled
              }}
            >
              Update Item
            </button>
          </div>
        </div>
      </form>
    );
  } else {
    // Enable Input Field
    return (
      <form
        onSubmit={e => {
          // db update here`
          e.preventDefault();
          console.log(selected);
          Axios.post(
            "https://react-item-list.herokuapp.com/api/items/update/" +
              selected._id,
            selected
          ).catch((error, msg) => {
            console.log(error);
          });
        }}
      >
        <div id="list-item-add" className="input-group mb-3 form-group">
          <input
            className="form-control"
            id="edit-item-input"
            defaultValue={selected.name}
            onChange={e => {
              e.preventDefault();
              selected.name = e.target.value;
              console.log(selected.name);
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
