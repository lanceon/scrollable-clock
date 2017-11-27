import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer, RootReducerShape } from './reducers';

export default function configureStore(initialState: RootReducerShape) {
  const store = createStore(rootReducer, initialState, composeWithDevTools());
  if (module.hot) {
    module.hot.accept('./reducers/index', () => {
      // eslint-disable-next-line
      const newReducer = require('./reducers/index').default;
      store.replaceReducer(newReducer);
    });
  }

  return store;
}
