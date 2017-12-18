import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import factory from "./facades/countryFactory";

 ReactDOM.render(
    <App factory={factory} />,document.getElementById('root')
  );


