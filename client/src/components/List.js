import React from "react";
import "./List.css";
import Axios from "axios";
import ListItem from "./ListItem";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      users: []
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

  // handleDelete(e) {
  //   // e.preventDefault();
  //   console.log(this.state.users[0]);
  //   Axios.delete(
  //     "https://react-item-list.herokuapp.com/api/items/{this.state.data._id}".then(
  //       res => console.log(res.data)
  //     )
  //   );
  // }

  render() {
    let users = this.state.users;

    return (
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
            {users.map(user => {
              return (
                <ListItem key={user._id} _id={user._id} name={user.name} />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default List;
