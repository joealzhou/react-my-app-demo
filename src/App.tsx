import React from 'react'
import { Router } from 'react-router-dom'
import Routes from './routes'
import { createBrowserHistory } from 'history';
import { Provider } from "react-redux";
import { store } from './reducers/index';

export const history = createBrowserHistory()

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>

  );
}

export default App;
