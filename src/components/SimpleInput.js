import { useState } from "react";

const SimpleInput = (props) => {

  // 1st approach - with on submit and state(getting the value on every change)
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)

  const enteredNameIsValid = enteredName.trim() !== ''
  const enteredNameIsInvalid = !enteredNameIsValid && enteredNameTouched

  const enteredEmailIsEmpty = enteredEmail.trim() === ''
  const enteredEmailIsContainsPapaki = enteredEmail.includes('@')
  const enteredEmailIsValid = !enteredEmailIsEmpty
    && enteredEmailIsContainsPapaki && enteredEmailTouched
  const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched

  const formIsValid = enteredNameIsValid


  const handleNameInputChange = event => {
    setEnteredName(event.target.value)
  }

  const handleNameInputBlur = () => {
    setEnteredNameTouched(true)
  }

  const handleEmailInputChange = event => {
    setEnteredEmail(event.target.value)
  }

  const handleEmailInputBlur = () => {
    setEnteredEmailTouched(true)
  }

  const handleFormSubmission = event => {
    event.preventDefault()
    setEnteredNameTouched(true)
    setEnteredEmailTouched(true)

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return
    }
    console.log('using state: ' + enteredName) //1st approach

    // we reset the states once the form is submitted
    setEnteredName('')
    setEnteredNameTouched(false)
    setEnteredEmail('')
    setEnteredEmailTouched(false)
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
        <label htmlFor='name'>Your Email</label>
        <input
          type='text'
          id='email'
          onChange={handleEmailInputChange}
          onBlur={handleEmailInputBlur}
          value={enteredEmail} //binding value back to the state
        />
        {enteredEmailIsEmpty && enteredEmailTouched &&
          <p className="error-text">Email must not be empty</p>}
        {!enteredEmailIsContainsPapaki && !enteredEmailIsEmpty &&
          <p className="error-text">Email must contain a '@'</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
