import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'react-toastify/dist/ReactToastify.min.css'
import createStore from "./store/createStore";
const store = createStore(window.__INITIAL_STATE__)
ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
