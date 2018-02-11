import * as React from 'react';
import './App.css';
import Game from './components/Game/Game';
import About from './components/About/About';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <Router>      
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Tic Tac Toe</h1>
            <NavLink exact={true} to="/"  className="menu-link" activeClassName="active">Game</NavLink>
            <NavLink exact={true} to="/about" className="menu-link" activeClassName="active">About</NavLink>
          </header>        
          <Route path="/about" component={About} />
          <Route exact={true} path="/" component={Game} />
          
        </div>
      </Router>
    );
  }
}

export default App;
