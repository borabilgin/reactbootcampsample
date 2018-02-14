import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

/** 
 * Tests like these can be considered the minimum, 
 * and act as a smoke-test to verify your component
 * at least renders
 **/

it('renders without crashing with enzyme', () => {
  shallow(<App />);
});