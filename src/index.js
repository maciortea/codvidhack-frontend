import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/app';
import { BrowserRouter as Router } from 'react-router-dom';
import MetaTags from 'react-meta-tags';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <MetaTags>
      <meta property="Content-Security-Policy" content="upgrade-insecure-requests" />
    </MetaTags>
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
