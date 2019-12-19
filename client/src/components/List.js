import React from "react";
import "./List.css";
import Axios from "axios";
import ListItem from "./ListItem";
import ListItemEdit from "./ListItemEdit";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      users: [],
      selected: "None"
    };
  }

  componentDidMount() {
    Axios.get("https://react-item-list.herokuapp.com/api/items").then(
      result => {
        this.setState({
          isLoaded: true,
          users: result.data
        });
      }
    );
  }

  componentDidUpdate() {
    Axios.get("https://react-item-list.herokuapp.com/api/items").then(
      result => {
        this.setState({
          isLoaded: true,
          users: result.data,
          selected: this.state.selected
        });
      }
    );
  }

  editHandler = name => {
    this.setState({ selected: name });
  };

  render() {
    let users = this.state.users;
    let selected = this.state.selected;

    return (
      <div>
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
              {users.map((user, index) => {
                return (
                  <ListItem
                    key={user._id}
                    _id={user._id}
                    name={user.name}
                    editHandler={this.editHandler}
                  ></ListItem>
                );
              })}
            </tbody>
          </table>
        </div>
        <ListItemEdit selected={selected} />
      </div>
    );
  }
}

export default List;
