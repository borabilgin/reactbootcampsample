import * as React from 'react';
import './App.css';
import Game from './components/Game/Game';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Tic Tac Toe</h1>
        </header>        
        <Game />
      </div>
    );
  }
}

export default App;
