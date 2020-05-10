import React from 'react';
import './app.css';

import Routes from './routes';
import Navigation from './navigation'

function App() {
  return (
    <div>
      <Navigation />
      <Routes />
    </div>
  );
}

export default App;
