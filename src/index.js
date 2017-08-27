import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './server/registerServiceWorker';
import Login from './common/pages/Login';

ReactDOM.render(<Login/>, document.getElementById('root'));
registerServiceWorker();
