// @flow
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    message: "Hello Genn"
  };
  componentDidMount() {}
  onReset = () => {
    // this.setState({ message: process.env.PORT });
    console.log(process.env);
    
  }
  onMessageChange = e => {
    console.log('make a change');
    // console.log(styles);
    
    this.setState({ message: e.target.value });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className={`error`}>To get started, say {this.state.message}.</p>
        <p>
          <input value={this.state.message} onChange={this.onMessageChange} />
          <button onClick={this.onReset}>RESET</button>
        </p>
      </div>
    );
  }
}

export default App;
