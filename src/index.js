/*eslint-disable*/
import React, { Component } from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'babel-polyfill';
import App from './App';

const el = document.getElementById('app');

render(
    <AppContainer>
        <App />
    </AppContainer>,
    el
);

if (module.hot) {
    module.hot.accept('./App', () => {
        const App = require('./App').default;
        render(
            <App />,
            el
        );
    })
} 