import React from "react";
import "./ListItem.css";
import Axios from "axios";

function ListItem(props) {
  return (
    <tr>
      <th scope="row">{props._id}</th>
      <td>{props.name}</td>
      <td>
        <button className="btn btn-primary">Edit</button>{" "}
        <button
          onClick={() =>
            Axios.delete(
              "https://react-item-list.herokuapp.com/api/items/" + props._id
            )
          }
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ListItem;
