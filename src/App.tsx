import * as React from 'react';
import './App.css';
import Game from './components/Game/Game';
import About from './components/About/About';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { WithData } from './components/HoC/WithData';

const logo = require('./logo.svg');

// WithData is a Higer Order Component -
// it returns the passed component with "data" prop that is the result of an HTTP call
const AboutCmp = WithData(About as any);

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
          <Route path="/about" component={AboutCmp} />
          <Route exact={true} path="/" component={Game} />
          
        </div>
      </Router>
    );
  }
}

export default App;
