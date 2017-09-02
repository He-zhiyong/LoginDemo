import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './styles/common.less';
import Routes from './routes';

ReactDOM.render(<Routes/>, document.getElementById('root'));
registerServiceWorker();
