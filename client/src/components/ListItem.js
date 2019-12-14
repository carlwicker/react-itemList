import React, { Component } from "react";
import "./ListItem.css";
import Axios from "axios";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: props._id,
      name: props.name,
      selected: "none"
    };
  }

  render() {
    return (
      <tr>
        <th scope="row" className="fitWidth">
          {this.state._id}
        </th>
        <td>{this.state.name}</td>
        <td className="fitWidth">
          <button
            onClick={() => {
              this.setState({ selected: this.state._id }, () => {
                console.log("Selected: " + this.state.selected);
              });
            }}
            className="btn btn-primary"
          >
            Edit
          </button>{" "}
          <button
            onClick={() =>
              Axios.delete(
                "https://react-item-list.herokuapp.com/api/items/" +
                  this.state._id
              )
                .then(success => console.log("Deleted: " + this.state._id))
                .catch(err => console.log(err))
            }
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default ListItem;
