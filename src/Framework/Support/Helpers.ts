import * as Lodash from "lodash";

export function getProp(props, key, defaultKey = null) {
  return Lodash.get(props, key, defaultKey)
}

export function getStoreProp(props, key, defaultKey = null) {
  return getProp(props, `APP_STORE_PROPS.${key}`, defaultKey);
}

export function callHook(props, key, payload) {
  if (getProp(props, key) instanceof Function) return getProp(props, key)(payload);
  return null;
}

export function getStoreDispatchFunc(props, key) {
  return getProp(props, `APP_STORE_DISPATCH.${key}`, null);
}

export function callStoreDispatchFunc(props, key, payload) {
  const dispatch = getProp(props, `APP_STORE_DISPATCH.${key}`, null);
  if (dispatch !== null) return dispatch(payload);
  return null;
}

export function navigateTo(props, path) {
  if (getProp('history.push', undefined)) callHook(props, 'history.push', path);
}

export function navigateBack(props) {
  if (getProp(props, 'history.goBack', undefined)) getProp(props, 'history.goBack')();
}
