import * as React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from "redux-persist/integration/react";
import {Router} from 'react-router';
import {createBrowserHistory} from 'history';
import {syncHistoryWithStore} from 'react-router-redux';

import {AppStore} from './Framework/Store';
import RoutesFactory from './Framework/Router';

import {ThemeProvider} from "./Framework/Components/ThemeProvider";
import './Styles/index.scss';

const browserHistory = createBrowserHistory();
const {store, persistor} = AppStore();
const history = syncHistoryWithStore(browserHistory, store);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider>
          <PersistGate persistor={persistor} loading={null}>
            <Router history={history}>
              {RoutesFactory()}
            </Router>
          </PersistGate>
        </ThemeProvider>
      </Provider>
    );
  }

}

export default App;
