import * as React from 'react'
import BaseComponent from "../../Framework/Fundamental/Base/BaseComponent";
import {setTheme} from "../../AppState/GlobalState/Actions";
import {STORE_CONNECT} from "../../Framework/Store/Decorators";

@STORE_CONNECT([], {setTheme})
export default class Home extends BaseComponent {

  render() {
    return (
      <div>
        <div className="text">
          {this.toLocal('hello')}
        </div>
        <button onClick={() => this.callStoreDispatchFunc('setTheme', 'light-theme')}>light</button>
        <button onClick={() => this.callStoreDispatchFunc('setTheme', 'dark-theme')}>dark</button>
      </div>
    )
  }
}

