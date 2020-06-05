import {connect} from 'react-redux';
import * as Lodash from 'lodash'

export function STORE_CONNECT(STORE_KEYS?: [string] | [], STORE_ACTIONS?: { [key: string]: Function }) {

  const mapStateToProps = store => {
    if (!STORE_KEYS || !Array.isArray(STORE_KEYS) || !STORE_KEYS.length) return {APP_STORE_PROPS: store};

    return STORE_KEYS.reduce((acc: { APP_STORE_PROPS: {} }, cur: string) => {
      if (Lodash.get(store, cur)) Lodash.set(acc.APP_STORE_PROPS, cur, Lodash.get(store, cur));

      return acc
    }, {APP_STORE_PROPS: {}})

  };

  const mapDispatchToProps = dispatch => {
    if (!STORE_ACTIONS || STORE_ACTIONS === {}) return {};

    return Object.entries(STORE_ACTIONS).reduce((acc: { APP_STORE_DISPATCH: {} }, cur: [string, Function]) => {
      Lodash.set(acc.APP_STORE_DISPATCH, cur[0], (payload) => dispatch(cur[1](payload)));
      return acc
    }, {APP_STORE_DISPATCH: {}})

  };


  return function (target) {
    return <any>connect(mapStateToProps, mapDispatchToProps)(target)

  }
}
