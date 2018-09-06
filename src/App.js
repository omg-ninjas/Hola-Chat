import React, { Component } from 'react';
import Layout from './components/Layout.js';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Layout title='Hola Chat'/>
      </div>
    );
  }
}

export default App;
