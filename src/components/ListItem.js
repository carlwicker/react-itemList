import React from "react";
import "./ListItem.css";

function ListItem(props) {
  return <li>{props.listItem[0].name}</li>;
}

export default ListItem;
