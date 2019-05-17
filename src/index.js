import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import DaniBoard from './DaniBoard';

ReactDOM.render(<DaniBoard />, document.getElementById('root'));
registerServiceWorker();

