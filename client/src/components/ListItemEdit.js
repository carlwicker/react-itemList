import React from "react";
import "./ListItemEdit.css";

function ListItemEdit(props) {
  let selected_id = props.selected_id;
  let selectedName = props.selectedName;

  // Disable Input Field
  if (selectedName === undefined) {
    return (
      <form>
        <div id="list-item-add" className="input-group mb-3 form-group">
          <input
            readOnly
            className="form-control"
            id="edit-item-input"
            defaultValue={selectedName}
            onChange={e => {
              console.log(e.target.value);
            }}
          ></input>
          <div className="input-group-append">
            <button
              disabled
              type="submit"
              className="btn btn-primary"
              onClick={() => {
                // db update here
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
      <form>
        <div id="list-item-add" className="input-group mb-3 form-group">
          <input
            className="form-control"
            id="edit-item-input"
            defaultValue={selectedName}
            onChange={e => {
              console.log(e.target.value);
            }}
          ></input>
          <div className="input-group-append">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => {
                // db update here`
              }}
            >
              Update Item
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default ListItemEdit;
