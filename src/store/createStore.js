import { applyMiddleware, createStore } from 'redux';
import reducers from '../reducers';
import crashReporter from '../middleware/crashReporter';

export default () => {
  let preloadedState = {};
  if (window.localStorage.preloadedState) {
    preloadedState = JSON.parse(window.localStorage.preloadedState);
  }

  const store = createStore(
    reducers,
    preloadedState,
    applyMiddleware(crashReporter)
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
