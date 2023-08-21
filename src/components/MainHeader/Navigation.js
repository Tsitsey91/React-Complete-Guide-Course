import React from 'react';

import classes from './Navigation.module.css';
import AuthContext from '../../context/auth-context';

const Navigation = (props) => {
  return (
  // The consumer takes a child
  // which actually should be a function (between curly braces like this)
  // and as argument, you'll get your Context data.
    <AuthContext.Consumer>
      {(authContextObject)=>{
        return (<nav className={classes.nav}>
          <ul>
            {authContextObject.isLoggedIn && (
              <li>
                <a href="/">Users</a>
              </li>
            )}
            {props.isLoggedIn && (
              <li>
                <a href="/">Admin</a>
              </li>
            )}
            {props.isLoggedIn && (
              <li>
                <button onClick={props.onLogout}>Logout</button>
              </li>
            )}
          </ul>
        </nav>)
      }}
    </AuthContext.Consumer>
  );
};

export default Navigation;
