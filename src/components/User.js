import React from "react";

class User extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.onDeleteClick = this.onDeleteClick.bind(this);
  // }
  // bind yöntem 1 - doc'a göre bu yöntem daha iyi

  // onDeleteClick = (e) => {
  //   console.log(this);
  // };
  // bind yöntem 2 - delete butonunda 3.yöntem kullanılıyor

  onDeleteClick(id, e) {
    const { deleteUser } = this.props;

    deleteUser(id);
  }
  render() {
    const { id, name, email } = this.props;
    return (
      <tr>
        <td> {id} </td>
        <td>{name}</td>
        <td>{email}</td>
        <td>
          <button
            onClick={this.onDeleteClick.bind(this, id)}
            type="button"
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default User;
