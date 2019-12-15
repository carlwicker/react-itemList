import React from "react";
import "./ListItem.css";
import Axios from "axios";

function ListItem(props) {
  return (
    <tr>
      <th scope="row" className="fitWidth">
        {props._id}
      </th>
      <td>{props.name}</td>
      <td className="fitWidth">
        <button
          onClick={() => {
            // Currently working here, learn lift state.
            console.log("Selected: " + props._id);
          }}
          className="btn btn-primary"
        >
          Edit
        </button>{" "}
        <button
          onClick={() =>
            Axios.delete(
              "https://react-item-list.herokuapp.com/api/items/" + props._id
            )
              .then(success => console.log("Deleted: " + props._id))
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

export default ListItem;
