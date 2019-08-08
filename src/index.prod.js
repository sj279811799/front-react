/*eslint-disable*/
import React, { Component } from 'react';
import { render } from 'react-dom';
import 'babel-polyfill';
import App from './routes';

const el = document.getElementById('app');

render(
    <App />,
    el
);