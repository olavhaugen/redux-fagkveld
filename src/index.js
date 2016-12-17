import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import createStore from './store/createStore';

const render = (Root, store) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Root />
      </Provider>
    </AppContainer>,
    document.getElementById('new-years-resolutions-app')
  );
}

const store = createStore();
render(App, store);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    render(NextApp, store);
  });
}
