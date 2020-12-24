import './App.css';
import React, { Component } from 'react';

class App extends Component {
  foo1 = () => 'Bars'; //class method

  render() {
    const name = 'John Doe';
    const loading = true;
    const foo = () => 'Bar'; //function
    const showName = true;

    return (
      //must have only one parent element
      //we can use React.Fragment(ghost element) if we don't want div to be parent element
      <div className="App">
        <h1>
          Hello {this.foo1()} and {showName && name}
        </h1>
        <h1>Hello {foo()}</h1>
      </div>
    );
  }
}

export default App;
