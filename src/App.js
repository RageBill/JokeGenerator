import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import JokeGenerator from './components/JokeGenerator/JokeGenerator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <JokeGenerator/>
      </div>
    );
  }
}

export default App;
