import React from "react";

class AddUser extends React.Component {
  state = {
    name: "",
    email: "",
  };
  onNameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onEmailChange(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onAddSubmit(e) {
    const { addUser } = this.props;
    const { name, email } = this.state;
    const newUser = {
      id: Math.floor(Math.random() * 100) + 1,
      // id: Math.round(asd),
      name: name,
      email: email,
    };
    addUser(newUser);
    e.preventDefault();
    console.log(newUser.id);
  }
  render() {
    const { name, email } = this.state;
    return (
      <form onSubmit={this.onAddSubmit.bind(this)}>
        <h5>User Create Form</h5>
        <div>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={this.state.name}
            onChange={this.onNameChange.bind(this)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={this.state.email}
            onChange={this.onEmailChange.bind(this)}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary btn-block">
            Add New User
          </button>
        </div>
      </form>
    );
  }
}

export default AddUser;
