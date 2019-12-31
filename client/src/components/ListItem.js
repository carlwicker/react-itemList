import React from "react";
import "./ListItem.css";

function ListItem(props) {
  const handleEditClick = () => {
    let _id = props._id;
    let name = props.name;

    props.listEditHandler(_id, name);
    console.log("Editing: " + _id);
  };

  const handleDeleteClick = () => {
    let _id = props._id;
    props.deleteButtonHandler(_id);
  };

  return (
    <tr>
      <th scope="row" className="fitWidth">
        {props._id}
      </th>
      <td>{props.name}</td>
      <td className="fitWidth">
        <button onClick={handleEditClick} className="btn btn-primary">
          Edit
        </button>{" "}
        <button onClick={handleDeleteClick} className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ListItem;
