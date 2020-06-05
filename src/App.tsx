import * as React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from "redux-persist/integration/react";
import {Router} from 'react-router';
import {createBrowserHistory} from 'history';
import {syncHistoryWithStore} from 'react-router-redux';

import {store, persistor} from './Framework/Store';
import RoutesFactory from './Framework/Router';

import ThemeProvider from "./Framework/Components/ThemeProvider";
import './Styles/index.scss';

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, store);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <ThemeProvider>
            <Router history={history}>
              {RoutesFactory(store)}
            </Router>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    );
  }

}

export default App;
