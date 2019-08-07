/*eslint-disable*/
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'babel-polyfill';
import App from './App';

const el = document.getElementById('app');

render(
  <AppContainer>
    <App />
  </AppContainer>,
  el,
);

// 如果开启热加载，会在浏览器不刷新的情况下，更新页面内容。部分内容不会更新！！！
if (module.hot) {
  module.hot.accept('./App', () => {
    const App = require('./App').default;
    render(
      <App />,
      el,
    );
  });
}
