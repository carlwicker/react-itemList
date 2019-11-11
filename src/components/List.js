import React from "react";
import ListItem from "./ListItem";
import "./List.css";
import itemData from "../itemData";

class List extends React.Component {
  render() {
    const listData = itemData.map(item => {
      return <ListItem key={item.id} id={item.id} name={item.name} />;
    });

    return (
      <div id="list">
        List Component
        <ul>{listData}</ul>
      </div>
    );
  }
}

export default List;
