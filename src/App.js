import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {

  state = {
    userOutputs: [
      { username: 'Slava'},
      { username: 'Lioha' }
    ]
  };

  switchNameHandler = (fullName1, fullName2) => {
    //this.state.persons[0].name = 'Maximilian'; wrong
    this.setState({userOutputs:
      [
        { username: fullName1 },
        { username: fullName2 }
      ]
    })
  };

  

  nameChangedHandler = (event) => {
    const output = [...this.state.userOutputs];
    output[1].username = event.target.value;
    this.setState( {
      userOutputs: output
    }

    )
  }

  render() {
    return (
      <div className="App">

        <h1>Let's do it, Scotty!</h1>
        <button className="UserOutput" onClick={() => this.switchNameHandler('Veaceslav', 'Alexei')}>Push Me!</button>
        <UserOutput username={this.state.userOutputs[0].username}/>
        
        <UserOutput username={this.state.userOutputs[1].username} />
        <UserInput changed={this.nameChangedHandler}/>
      </div>
    );
  }
}

export default App;
