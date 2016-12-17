import { applyMiddleware, createStore, compose } from 'redux';
import reducers from '../reducers';
import crashReporter from '../middleware/crashReporter';

export default () => {
  let preloadedState = {};
  if (window.localStorage.preloadedState) {
    preloadedState = JSON.parse(window.localStorage.preloadedState);
  }
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducers,
    preloadedState,
    composeEnhancers(
      applyMiddleware(crashReporter)
    )
  );

  window.debug = {
    setState: (state) => {
      window.localStorage.preloadedState = JSON.stringify(state);
      window.location.reload();
    },
    dispatch: (action) => {
      store.dispatch(action);
    }
  };

  return store;
}
