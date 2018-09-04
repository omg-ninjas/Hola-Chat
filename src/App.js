import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

     <iframe
       src="https://tokbox.com/embed/embed/ot-embed.js?embedId=090db9fc-2043-498e-b969-bb6512f3d87c&room=DEFAULT_ROOM&iframe=true"
       width="800px"
       height="640px"
       allow="microphone; camera"
     ></iframe>
   
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
