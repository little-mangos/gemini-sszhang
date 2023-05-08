// export {default as Comment} from './components/Comment'
// export {default as Menu} from './components/Menu'
// export {default as Icon} from './components/Icon'
// export {default as Upload} from './components/Upload'


//export {default as ReactHoot} from './components/ReactHook/index'




import './styles/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import React from 'react';
// import ReactDOM from 'react-dom';
const React = require('react');
const ReactDOM = require('react-dom');






ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
