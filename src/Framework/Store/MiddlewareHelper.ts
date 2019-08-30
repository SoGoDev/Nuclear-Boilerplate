import {
  Dispatch,
  Action,
  Store
} from 'redux';

export interface MiddlewareFunction {
  store: Store,
  next: Dispatch,
  action: Action
}

export const middlewareWrapper = (middleware: MiddlewareFunction) => store => next => action => {

  if (middleware instanceof Function) return middleware(store, next, action);
  else {

    console.error(`Middleware ${middleware} is not type of functions`);
    return next(action)
  }

};
