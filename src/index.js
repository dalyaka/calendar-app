import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import MainComponent from './components/App';

const root = document.getElementById('root');

function render() {
  ReactDOM.render((
    <AppContainer>
      <MainComponent />
    </AppContainer>
  ), root);
}

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./components/App', render);
}

render();
