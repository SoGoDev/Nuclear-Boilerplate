import {connect} from 'react-redux';
import * as Lodash from 'lodash'


export function STORE_CONNECT(STORE_KEYS?: [string], STORE_ACTIONS?: [any]) {

  const mapStateToProps = store => {
    if (!STORE_KEYS || !Array.isArray(STORE_KEYS) || !STORE_KEYS.length) return store;

    return STORE_KEYS.reduce((acc: { APP_STORE_PROPS: {} }, cur: string) => {
      if (Lodash.get(store, cur)) Lodash.set(acc.APP_STORE_PROPS, cur, Lodash.get(store, cur));

      return acc
    }, {APP_STORE_PROPS: {}})

  };

  const mapDispatchToProps = dispatch => {
    if (!STORE_ACTIONS || !Array.isArray(STORE_ACTIONS) || !STORE_ACTIONS.length) return {};

    return STORE_ACTIONS.reduce((acc: { APP_STORE_DISPATCH: {} }, cur: Function) => {
      Lodash.set(acc.APP_STORE_DISPATCH, cur.name, (payload) => dispatch(cur(payload)));
      return acc
    }, {APP_STORE_DISPATCH: {}})

  };


  return function (target) {
    return <any>connect(mapStateToProps, mapDispatchToProps)(target)

  }
}
