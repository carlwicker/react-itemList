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
    fetch("https://jsonplaceholder.typicode.com/users")
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
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">City</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => {
              return (
                <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.address.city}</td>
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
