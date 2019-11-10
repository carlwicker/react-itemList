import React from "react";
import ListItem from "./ListItem";
import "./List.css";

class List extends React.Component {
  render() {
    const list = {
      props: {
        listItem: [
          {
            id: 1,
            name: "ListItem Component"
          }
        ]
      }
    };

    return (
      <div id="list">
        List Component
        <ul>
          <ListItem listItem={list.props.listItem} />
        </ul>
      </div>
    );
  }
}

export default List;
