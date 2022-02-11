import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, createStore} from 'redux';
import {CalculatorReducer} from "./ducks/reducer";
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from "redux-logger";
import {Provider} from "react-redux";

const store = createStore(CalculatorReducer, composeWithDevTools(applyMiddleware(logger)))

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
