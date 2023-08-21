import React, { useEffect, useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './context/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log('App > useEffect started!')
    const storedUserLoggedInInfo = localStorage.getItem('isLoggedIn')
    if (storedUserLoggedInInfo === '1') {
      setIsLoggedIn(true)
    }
  }, [])

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', '1')
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false);
  };
  // The isLoggedIn in our context obj updates based on the isLoggedIn from
  // useState. Now we dont have to pass props to child components. All the 
  // child components of the provider will get the isLoggedIn state from 
  // context object.
  return (
    //I dont pass the logoutHandler in the Home component using the context
    // because there I use it directly?!? it's not just to forward it to 
    // another component...
    <React.Fragment>
      <AuthContext.Provider value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler
      }}>
        <MainHeader />
        <main>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && <Home onLogout={logoutHandler} />}
        </main>
      </AuthContext.Provider>
    </React.Fragment>
  );
}

export default App;
