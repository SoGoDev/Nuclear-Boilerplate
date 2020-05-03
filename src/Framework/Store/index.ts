import AppStore from './Store';
import * as Decorators from './Decorators';
const {store, persistor} = AppStore();
export {
  Decorators,
  store,
  persistor
}

