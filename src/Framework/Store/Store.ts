import {
  createStore,
  combineReducers,
  applyMiddleware,
  Reducer
} from 'redux';

import storage from 'redux-persist/lib/storage';
import {persistStore, persistReducer} from 'redux-persist';
import {routerReducer} from 'react-router-redux';

import {modulesList, globalMiddlewares} from '../../AppState/StateModulesList';
import {middlewareWrapper, MiddlewareFunction} from './MiddlewareHelper';

interface Module {
  name: string,
  reducer: Reducer,
  //Auto save date before page will refresh.
  cache?: boolean
  middleware?: MiddlewareFunction | [MiddlewareFunction]
}

const persistConfig = {
  key: 'root',
  storage,
  whitelist: []
};

const middlewares = [];
const reducers = {
  routing: routerReducer
};

function prepareMiddleware(middleware: MiddlewareFunction | [MiddlewareFunction]) {
  if (Array.isArray(middleware)) return middleware.map(middlewareWrapper);
  return middlewareWrapper(middleware);
}

function prepareModules(module: Module) {
  //@ts-ignore
  if (module.middleware) middlewares.push(...prepareMiddleware(module.middleware));
  if (module.cache) persistConfig.whitelist.push(module.name);
  reducers[module.name] = module.reducer

}


//@ts-ignore
middlewares.push(...prepareMiddleware(globalMiddlewares));
modulesList.forEach(prepareModules);

export default () => {
  const store = createStore(
    persistReducer(persistConfig, combineReducers(reducers)),
    applyMiddleware(...middlewares)
  );
  const persistor = persistStore(store);
  return {store, persistor}
}
