import React, { Component } from "react";
import Axios from "axios";
import "./ListItemEdit.css";

export class ListItemEdit extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  render() {
    return (
      <form>
        <div id="list-item-add" className="input-group mb-3">
          <input className="form-control" id="edit-item-input"></input>
          <div className="input-group-append">
            <button type="submit" className="btn btn-primary">
              Edit Item
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default ListItemEdit;
