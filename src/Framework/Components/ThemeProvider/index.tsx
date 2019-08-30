import * as React from 'react'
import {STORE_CONNECT} from "../../Store/Decorators";
import BaseComponent from "../../Fundamental/BaseComponent/BaseComponent";


@STORE_CONNECT(['themeStore'])
export class ThemeProvider extends BaseComponent {
  render() {
    return (
    <div className={this.getStoreProp('themeStore.theme')}>
      {this.props.children}
    </div>
    )
  }
}