import React from "react";
import AddUser from "./components/AddUser";
import Users from "./components/Users";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          name: "Mehmet",
          email: "mehmet@mehmetmucahit.net",
        },
        {
          id: 2,
          name: "Mucahit",
          email: "mucahit@mehmetmucahit.net",
        },
        {
          id: 3,
          name: "Cagliyan",
          email: "cagliyan@mehmetmucahit.net",
        },
      ],
    };
    this.deleteUser = this.deleteUser.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  addUser(newUser) {
    let updatedUsers = this.state.users;
    updatedUsers.push(newUser);

    this.setState({
      users: updatedUsers,
    });
  }
  deleteUser(id) {
    let updatedUsers = this.state.users;
    updatedUsers = updatedUsers.filter((user) => user.id !== id);
    this.setState({
      users: updatedUsers,
    });
  }

  render() {
    return (
      <div className="container py-5">
        <h4 className="text-center">User Create & Delete App</h4>
        <hr className="my-3" />
        <AddUser addUser={this.addUser} />
        <hr className="my-3" />
        <Users deleteUser={this.deleteUser} users={this.state.users} />
      </div>
    );
  }
}

export default App;
