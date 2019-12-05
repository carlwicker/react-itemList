import React from "react";
import "./ListAddItem.css";

class ListAddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("OUTPUT: " + this.state.value);
    event.preventDefault();
  }

  componentDidUpdate() {
    console.log(this.state.value);
  }

  render() {
    return (
      <div id="list-item-add" className="input-group mb-3">
        <input
          value={this.state.value}
          onChange={this.handleChange}
          type="text"
          className="form-control"
          id="add-item-input"
        ></input>
        <div className="input-group-append">
          <button className="btn btn-primary" onClick={this.handleSubmit}>
            Add Item
          </button>
        </div>
      </div>
    );
  }
}

export default ListAddItem;
