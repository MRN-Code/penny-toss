import React from 'react'
import { render } from 'react-dom'
import { ReduxRouter } from 'redux-router';
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';

import 'bootstrap/dist/css/bootstrap.css';
import './css/main.css';


const store = configureStore();

render(
    <Provider store={store}>
        <ReduxRouter />
    </Provider>,
    document.getElementById('root')
);
