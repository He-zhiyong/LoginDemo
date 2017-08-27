import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from '../server/registerServiceWorker';
//import App from './components/App';
import TodoListApp from '../common/components/TodoListApp';

ReactDOM.render(<TodoListApp/>, document.getElementById('root'));
registerServiceWorker();
