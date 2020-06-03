//global middlewares
import {logger} from './GlobalMiddlewares/Support';
//modules
import {GlobalReducer} from './GlobalState'

export const globalMiddlewares = [
  logger
];

export const modulesList = [
  {
    name: 'global',
    reducer: GlobalReducer
  }
];


