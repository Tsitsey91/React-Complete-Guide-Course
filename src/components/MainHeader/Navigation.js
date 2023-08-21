import React, { useContext } from 'react';

import classes from './Navigation.module.css';
import AuthContext from '../../context/auth-context';

const Navigation = (props) => {

  const authContextObject = useContext(AuthContext)

  return (
    <nav className={classes.nav}>
      <ul>
        {authContextObject.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {authContextObject.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {authContextObject.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
