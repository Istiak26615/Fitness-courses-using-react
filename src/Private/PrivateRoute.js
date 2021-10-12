import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect
    // useHistory,
    // useLocation,
  } from "react-router-dom";
  import useAuth from "./../Hooks/useAuth";

const PrivateRoute = ({children, ...rest}) => {
    const {user}=useAuth();
    // let history= useHistory();
    // let location= useLocation();
    return (
        <Route
            {...rest}
            render={({location})=>user.displayName? children:
        <Redirect
        to={{
            pathname: "/login",
            state: { from: location },
          }}
        />
  
    }    
    />
    );
};

export default PrivateRoute;