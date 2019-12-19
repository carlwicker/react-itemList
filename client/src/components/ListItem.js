import React from "react";
import "./ListItem.css";
import Axios from "axios";

class ListItem extends React.Component {
  handleEditClick = () => {
    let name = this.props.name;
    let _id = this.props._id;
    this.props.editHandler(name, _id);
  };

  render() {
    return (
      <tr>
        <th scope="row" className="fitWidth">
          {this.props._id}
        </th>
        <td>{this.props.name}</td>
        <td className="fitWidth">
          <button onClick={this.handleEditClick} className="btn btn-primary">
            Edit
          </button>{" "}
          <button
            onClick={() =>
              Axios.delete(
                "https://react-item-list.herokuapp.com/api/items/" +
                  this.props._id
              )
                .then(success => console.log("Deleted: " + this.props._id))
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
