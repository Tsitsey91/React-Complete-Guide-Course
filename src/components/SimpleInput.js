import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: enteredNameIsInvalid,
    handleValueInputChange: handleNameInputChange,
    handleValueInputBlur: handleNameInputBlur,
    reset: resetNameInput
  } = useInput(name => name.trim() !== '')

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: enteredEmailIsInvalid,
    handleValueInputChange: handleEmailInputChange,
    handleValueInputBlur: handleEmailInputBlur,
    reset: resetEmailInput
  } = useInput(email => email.includes('@'))


  const formIsValid = enteredNameIsValid && enteredEmailIsValid


  const handleFormSubmission = event => {
    event.preventDefault()

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return
    }
    console.log('using state: ' + enteredName) //1st approach

    // we reset the states once the form is submitted
    resetNameInput()
    resetEmailInput('')
  }

  //NOTE: if you want instant validation go with state. If you only want to validate
  // one time (at the end) then use Ref. Also state is better if you want
  // to reset the value of the input (see above)


  const nameInputClasses = enteredNameIsInvalid ? 'form-control invalid' : 'form-control'
  const emailInputClasses = enteredEmailIsInvalid ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={handleFormSubmission}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={handleNameInputChange}
          onBlur={handleNameInputBlur}
          value={enteredName} //binding value back to the state
        />
        {enteredNameIsInvalid &&
          <p className="error-text">Name must not be empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>Your E-mail</label>
        <input
          type='email'
          id='email'
          onChange={handleEmailInputChange}
          onBlur={handleEmailInputBlur}
          value={enteredEmail} //binding value back to the state
        />
        {enteredEmailIsInvalid &&
          <p className="error-text">Please enter a valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
