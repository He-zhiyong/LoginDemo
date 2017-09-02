import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Login from './pages/Login';
import './styles/common.css';

ReactDOM.render(<Login/>, document.getElementById('root'));
registerServiceWorker();
