import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Users extends Component {

  renderUsers() {
    return this.props.users.map((user, idx) => {
      const key = `user-${idx}`

      return <li key={key}>{user.userName} from {user.hometown}</li>
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderUsers()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    primaryUser: state.users[0]
   }
}

export const ConnectedUsers = connect(mapStateToProps)(Users) // aren't we supposed to be connecting something around here?
