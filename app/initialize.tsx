import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import LinkedApp from './linked-app';

const render = (Component: React.ComponentType) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    window.document.getElementById('root')
  );
};

if (module.hot) {
  module.hot.accept('./linked-app', () => {
    // eslint-disable-next-line
    const reactApp = require('./linked-app').default;
    render(reactApp);
  });
}

render(LinkedApp);
