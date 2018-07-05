import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Body from './Body';

ReactDOM.render(<Body/>, document.getElementById('root'));
registerServiceWorker();
