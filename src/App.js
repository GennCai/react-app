import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    message: 'Hello Genn'
  }
  componentDidMount() {
    
  }

  onMessageChange = (e) => {
    console.log('make a change');
    
    this.setState({message: e.target.value})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, say {this.state.message}.
        </p>
        <p>
          <input
            value={this.state.message}
            onChange={this.onMessageChange}
          />
        </p>
      </div>
    );
  }
}

export default App;
