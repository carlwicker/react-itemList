import React from "react";
import "./ListItem.css";

function ListItem(props) {
  return (
    <li>
      {props.listItem[0].id}: {props.listItem[0].name}{" "}
      <button className="btn btn-primary">Edit</button>
      <button className="btn btn-primary">Delete</button>
    </li>
  );
}

export default ListItem;
