import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Dani_Board from './Dani_Board';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DaniBoard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
