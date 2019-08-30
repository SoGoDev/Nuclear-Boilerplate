import * as React from 'react'
import BaseComponent from "../../Framework/Fundamental/BaseComponent/BaseComponent";
import {setTheme} from "../../AppState/ThemeState/Actions";
import {STORE_CONNECT} from "../../Framework/Store/Decorators";

// @ts-ignore
@STORE_CONNECT([], [setTheme])
export default class Home extends BaseComponent {

  render() {
    return (
      <div>
        <div className="text">
          {this.toLocal('hello')}
        </div>
        <button onClick={()=> this.getStoreDispatchFunc('setTheme')('light-theme')}>light</button>
        <button onClick={()=>this.getStoreDispatchFunc('setTheme')('dark-theme')}>dark</button>
      </div>
    )
  }
}

