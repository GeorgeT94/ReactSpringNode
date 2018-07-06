import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import registerServiceWorker from './App/registerServiceWorker';
import Body from './App/Body';

ReactDOM.render(<Body/>, document.getElementById('root'));
registerServiceWorker();
