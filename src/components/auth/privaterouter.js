import React from 'react';
import {Route, Redirect} from 'react-router';
import { getSession } from '../helper/helper';

const PrivateRouter =({component:RouteComponent,...rest}) =>{
    const jwt = getSession();

      return (
        <Route {...rest}
            render={routerPros =>
            jwt ? (
                <RouteComponent {...routerPros} />
                )
                :(
                <Redirect to={'/'} /> 
                    )
             } />
      )
}

export default PrivateRouter
