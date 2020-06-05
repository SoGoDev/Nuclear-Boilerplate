import * as React from 'react'
import {STORE_CONNECT} from "../../Store/Decorators";
import {getStoreProp} from '../../Support/Helpers';


function ThemeProvider(props) {
  return (
    <div className={getStoreProp(props, 'global.theme')}>
      {props.children}
    </div>
  )
}

export default STORE_CONNECT(['global'])(ThemeProvider)
