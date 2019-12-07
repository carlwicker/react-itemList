import React from "react";
import "./List.css";

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
    fetch("https://react-item-list.herokuapp.com/api/items")
      // fetch("http://localhost:5000/api/customers")
      .then(res => res.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          users: result
        });
      });
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
                    <a href="#">Edit</a> | <a href="/">Delete</a>
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
