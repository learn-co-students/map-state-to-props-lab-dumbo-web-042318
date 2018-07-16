import React, { Component } from 'react';
import UserInput from './components/UserInput'
import {ConnectedUsers} from './components/Users'
// we aren't usin export default, so we need to grab by name

export class App extends Component {
  render() {
    console.log("props", this.props);
    return (
      <div className="App">
        <UserInput store={this.props.store}/>
        <ConnectedUsers />
      </div>
    );
  }
}
export default App;
