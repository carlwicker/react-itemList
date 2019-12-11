import React from "react";
import Axios from "axios";
import "./ListAddItem.css";

class ListAddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    Axios.post("https://react-item-list.herokuapp.com/api/items", this.state)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <div id="list-item-add" className="input-group mb-3">
        <input
          value={this.state.name}
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
