//global middlewares
import {logger} from './GlobalMiddlewares/Support';
//modules
import {ThemeReducer} from './ThemeState';
import {GlobalReducer} from './GlobalState'

export const globalMiddlewares = [
  logger
];

export const modulesList = [
  {
    name: 'themeStore',
    reducer: ThemeReducer
  },
  {
    name: 'global',
    reducer: GlobalReducer
  }
];


