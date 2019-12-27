import React from "react";
import "./List.css";
import Axios from "axios";
import ListItem from "./ListItem";
import ListItemEdit from "./ListItemEdit";
import ListAddItem from "./ListAddItem";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      itemList: [],
      selectedName: "None",
      selected_id: "None",
      newItem: {
        name: ""
      }
    };
  }

  componentDidMount() {
    Axios.get("https://react-item-list.herokuapp.com/api/items").then(
      result => {
        this.setState({
          itemList: result.data
        });
      }
    );
  }

  // Edit Button Handler

  listEditHandler = (name, _id) => {
    this.setState({ selected: name, _id: _id });
  };

  // Add Item Form Handlers

  handleAddItemChange = name => {
    this.setState({
      newItem: { name: name.target.value },
      dataRefresh: true
    });
  };

  handleAddItemSubmit = e => {
    e.preventDefault();
    Axios.post(
      "https://react-item-list.herokuapp.com/api/items",
      this.state.newItem
    )
      .then(response => {
        console.log("Added: " + response.data._id);
      })
      .then(() => {
        this.setState({
          newItem: { name: "" },
          dataRefresh: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  // Delete buttton Handler

  deleteButtonHandler = _id => {
    Axios.delete("https://react-item-list.herokuapp.com/api/items/" + _id)
      .then(success => {
        console.log("Deleted: " + _id);
        this.setState({
          dataRefresh: true
        });
      })
      .catch(err => console.log(err));
  };

  componentDidUpdate(prevProps, prevState) {
    // Fix infinate loop here
    if (prevState.itemList === this.state.itemList) {
      Axios.get("https://react-item-list.herokuapp.com/api/items").then(
        result => {
          this.setState({
            itemList: result.data
          });
        }
      );
    }
  }

  // Render

  render() {
    let itemList = this.state.itemList;
    let selected = this.state.selected;
    let _id = this.state._id;

    return (
      <div>
        <ListAddItem
          handleAddItemChange={this.handleAddItemChange}
          handleAddItemSubmit={this.handleAddItemSubmit}
          newItem={this.state.newItem.name}
        />
        <div id="list">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Item Name</th>
                <th scope="col">Controls</th>
              </tr>
            </thead>
            <tbody>
              {itemList.map((item, index) => {
                // console.log(item);
                return (
                  <ListItem
                    key={item._id}
                    _id={item._id}
                    name={item.name}
                    listEditHandler={this.listEditHandler}
                    deleteButtonHandler={this.deleteButtonHandler}
                  ></ListItem>
                );
              })}
            </tbody>
          </table>
        </div>
        <ListItemEdit selectedName={selected} selected_id={_id} />
      </div>
    );
  }
}

export default List;
