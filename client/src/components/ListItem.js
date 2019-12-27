import React from "react";
import "./ListItem.css";

class ListItem extends React.Component {
  handleEditClick = () => {
    let name = this.props.name;
    let _id = this.props._id;
    this.props.listEditHandler(name, _id);
  };

  handleDeleteClick = () => {
    let _id = this.props._id;
    this.props.deleteButtonHandler(_id);
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
          <button onClick={this.handleDeleteClick} className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default ListItem;
