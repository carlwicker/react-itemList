import React from "react";
import "./List.css";
import Axios from "axios";

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
                <tr key={user._id}>
                  <th scope="row">{user._id}</th>
                  <td>{user.name}</td>
                  <td>
                    <a href="/">Edit</a> |{" "}
                    <a href={"/api/items/" + user._id}>Delete</a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default List;
