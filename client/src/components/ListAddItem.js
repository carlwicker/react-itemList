import React from "react";
import "./ListAddItem.css";

class ListAddItem extends React.Component {
  render() {
    return (
      <div id="list-item-add" className="input-group mb-3">
        <input
          value={this.props.newItem}
          onChange={this.props.handleAddItemChange}
          type="text"
          className="form-control"
          id="add-item-input"
        ></input>
        <div className="input-group-append">
          <button
            onClick={this.props.handleAddItemSubmit}
            className="btn btn-primary"
          >
            Add Item
          </button>
        </div>
      </div>
    );
  }
}

export default ListAddItem;
