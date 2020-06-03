import * as React from 'react';
import * as Lodash from 'lodash';
import Localize from "../../Localizer";

export default class BaseComponent extends React.Component<any, any> {


  getProp(key, defaultKey = null) {
    return Lodash.get(this.props, key, defaultKey)
  }

  getStoreProp(key, defaultKey = null) {
    return this.getProp(`APP_STORE_PROPS.${key}`, defaultKey);
  }

  callHook(key, payload) {
    if (this.getProp(key) instanceof Function) return this.getProp(key)(payload);
    return null;
  }

  getStoreDispatchFunc(key) {
    return this.getProp(`APP_STORE_DISPATCH.${key}`, null);
  }

  callStoreDispatchFunc(key, payload) {
    const dispatch = this.getProp(`APP_STORE_DISPATCH.${key}`, null);
    if (dispatch !== null) return dispatch(payload);
    return null;
  }

  toLocal(text): string {
    return Localize(text)
  }

  navigateTo(path) {
    if (this.getProp('history.push', undefined)) this.callHook('history.push', path);
  }

  navigateBack() {
    if (this.getProp('history.goBack', undefined)) this.getProp('history.goBack')();
  }

  render() {
    return null;
  }
}
