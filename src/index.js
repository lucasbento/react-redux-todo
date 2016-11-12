import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import injectTapEventPlugin from 'react-tap-event-plugin';

import store from './store/configureStore';

import TodoApp from './containers/TodoApp';

injectTapEventPlugin();

const rootEl = document.getElementById('root');

render(
  <AppContainer>
    <Provider store={store}>
      <TodoApp />
    </Provider>
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./containers/TodoApp', () => {
    const NextApp = require('./containers/TodoApp').default;

    render(
      <AppContainer>
        <Provider store={store}>
          <NextApp />
        </Provider>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
