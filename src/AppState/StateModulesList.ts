//global middlewares
import {logger} from './GlobalMiddlewares/Support';
//modules
import {ThemeReducer} from './ThemeState';

export const globalMiddlewares = [
  logger
];

export const modulesList = [
  {
    name: 'themeStore',
    reducer: ThemeReducer
  }
];


