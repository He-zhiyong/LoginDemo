import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './config/registerServiceWorker';
//import App from './components/App';
import TodoListApp from './components/TodoListApp';

ReactDOM.render(<TodoListApp/>, document.getElementById('root'));
registerServiceWorker();
