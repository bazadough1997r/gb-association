import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const GuestRoute = ({ isGuest, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isGuest) {
          return <Component />;
        } else {
          return (
            <Redirect
              to={{
                pathname: '/testo',
                state: { from: props.location },
              }}
            />
          );
        }
      }}
    />
  );
}

export default GuestRoute;