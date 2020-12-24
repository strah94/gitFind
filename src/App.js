import './App.css';
import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
class App extends Component {
  foo1 = () => 'Bars'; //class method

  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;
