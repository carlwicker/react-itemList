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
      selected: "None",
      _id: "None"
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

  editHandler = (name, _id) => {
    this.setState({ selected: name, _id: _id });
  };

  render() {
    let users = this.state.users;
    let selected = this.state.selected;
    let _id = this.state._id;

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
        <ListItemEdit selected={selected} _id={_id} />
      </div>
    );
  }
}

export default List;
