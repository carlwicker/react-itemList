import React from "react";
import "./ListAddItem.css";

class ListAddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  render() {
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
}

export default ListAddItem;
