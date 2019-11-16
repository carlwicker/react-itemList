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
    console.log(this.state);

    return (
      <ul>
        {users.map(user => {
          return (
            <li key={user.id}>
              {user.id} - {user.name} - {user.username} - {user.address.city}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default List;
