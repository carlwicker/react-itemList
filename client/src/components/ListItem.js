import React from "react";
import "./ListItem.css";

function ListItem(props) {
  return (
    <tr>
      <th scope="row">{props._id}</th>
      <td>{props.name}</td>
      <td>
        <button className="btn btn-primary">Edit</button>{" "}
        <button
          onClick={() => console.log("Clicked: " + props._id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ListItem;
