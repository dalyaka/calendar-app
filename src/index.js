import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Match } from 'react-router'
import { AppContainer } from 'react-hot-loader';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

import MainComponent from './components/App';

const root = document.getElementById('root');

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function render() {
  ReactDOM.render((
     <Provider store={store}>
      <AppContainer>
        <BrowserRouter>
          <div>
            <Match exactly pattern="/" component={MainComponent} />
            <Match pattern="/:id" component={MainComponent} />
          </div>
        </BrowserRouter>
      </AppContainer>
    </Provider>
  ), root);
}

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./components/App', render);
}

render();
