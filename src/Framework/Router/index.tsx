import * as React from "react";
import {Route} from 'react-router';

import routes from '../../Routes';

export interface RouteModel {
  id: string
  path: string
  request?: string
  component: string | React.Component | any
}

export default function () {

  return routes.map((route: RouteModel)=> {
    const conf: RouteModel = {
      id: route.id,
      path: route.path,
      component: route.component
    };

    if(typeof route.component === "string") conf.component = require(`../../Pages${route.component}`).default;

    return <Route
      exact
      sensitive
      key={conf.id}
      path={conf.path}
      component={conf.component}
    />
  })
}
