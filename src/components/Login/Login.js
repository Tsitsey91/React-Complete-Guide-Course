import React, { useEffect, useReducer, useState } from 'react';
// import { useEffect } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    // we the 'action' returned by the 'emailChangeHandler' and
    // we return a new state snapshot for emailState
    return { value: action.val, isValid: action.val.includes('@') }
  }
  if (action.type === 'INPUT_BLUR') {
    // we access the value of the email from the last state snapshot 'state'
    // see the 'validateEmailHandler' we don't return a val so we cannot
    // access the value through there...that's why React gives us the last
    // state snapshot in the 'state' input param.
    return { value: state.value, isValid: state.value.includes('@') }
  }
  return { value: '', isValid: undefined }
}

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 }
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 }
  }
  return { value: '', isValid: null }
}

const Login = (props) => {
  // we handle the two below states using the Reducer !
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null
  })

  const [passwordState, dispacthPassword] = useReducer(passwordReducer, {
    value: '', isValid: null
  })

  // object destructuring - we are pulling the isValid properties from the 
  // objects and we are storing them into the emailIsValid & passwordIsValid
  // variables. We doing that because checking form validity runs with every key
  // stroke (too many times) because the useEffect depends and runs every
  // time the emailState or passwordState change
  // The advantage is that whenever just the value changes but not the validity
  // then the useEffect will not run
  const { isValid: emailIsValid } = emailState //object destructuring-to avoid unecessary exec of useEffect
  const { isValid: passwordIsValid } = passwordState

  useEffect(() => {
    // see comment in passwordChangeHandler > setFormIsValid
    // now this useEffect will run everytime that emailState or passwordState
    // changes and will update the validity of the form accordingly BASED
    // ON THE LATEST snapshots of the two inputs (email,pw)...hence this is
    // the correct point to use the setFormIsValid and not inside the 'passwordChangeHandler'
    // or 'emailChangeHandler'
    const identifier = setTimeout(() => {
      console.log('checking form validity-useEffect')
      setFormIsValid(
        emailIsValid && passwordIsValid
      )
    }, 500)

    // CLEANUP function - it will run before every execution of the useEffect
    // except for the 1st time. We will use it to clean the previous timer
    // and set a new one
    return () => {
      console.log('CLEANUP-useEffect')
      clearTimeout(identifier)
    }

  }, [emailIsValid, passwordIsValid]) // [emailState, passwordState]

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    // calling dispatchEmail will trigger the reducers' function i.e. emailReducer
    // the below object will be the 'action' input param in emailReducer
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value })

    // setFormIsValid(
    //   event.target.value.includes('@') && passwordState.isValid
    // )
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    // dispacthPassword(action)--->passwordReducer(action)...just like in email
    dispacthPassword({ type: 'USER_INPUT', val: event.target.value })

    // this is not optimal because we are updating the forms' state based on 
    // another state(another variable i.e. emailState) and it is not guaranteed
    // that the emailState will be the last state due to how React schedules
    // state updates...we will comment it out and use the 'useEffect' above
    // (see comment there)
    // (the same applies also for the emailChangeHandler)
    // setFormIsValid(
    //   emailState.isValid && event.target.value.trim().length > 6
    // )
  };

  const validateEmailHandler = () => {
    //INPUT_BLUR to signify that this runs when the input lost focus
    // (i.e. the validateEmailHandler)...see the JSX code below
    dispatchEmail({ type: 'INPUT_BLUR' })
  };

  const validatePasswordHandler = () => {
    dispacthPassword({ type: 'INPUT_BLUR' })
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
