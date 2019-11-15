import React from "react";
import "./ListItem.css";

function ListItem(props) {
  return (
    <li>
      {props.id}: {props.name} <button className="btn btn-primary">Edit</button>
      <button className="btn btn-primary">Delete</button>
    </li>
  );
}

export default ListItem;
