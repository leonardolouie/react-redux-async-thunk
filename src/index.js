import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux"
import store from './reducers/store'
const storemoto = store;
ReactDOM.render(<Provider store={storemoto}><App /></Provider> , document.getElementById('root'));