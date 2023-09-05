import { useEffect, useRef, useState } from "react";

const SimpleInput = (props) => {

  // 1st approach - with on submit and state(getting the value on every change)
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)
  const [formIsValid, setFormIsValid] = useState(false)

  const enteredNameIsValid = enteredName.trim() !== ''
  const enteredNameIsInvalid = !enteredNameIsValid && enteredNameTouched

  // to be used in a more general case.
  // General Logic: Whenever one of our inputs is invalid we set the
  //  form validity to false
  useEffect(() => {
    if (enteredNameIsValid) {
      setFormIsValid(true)
    } else {
      setFormIsValid(false)
    }
  }, [enteredNameIsValid])

  const handleNameInputChange = event => {
    setEnteredName(event.target.value)
  }

  const handleNameInputBlur = () => {
    setEnteredNameTouched(true)
  }

  const handleFormSubmission = event => {
    event.preventDefault()
    setEnteredNameTouched(true)

    if (!enteredNameIsValid) {
      return
    }
    console.log('using state: ' + enteredName) //1st approach

    // we reset the states once the form is submitted
    setEnteredName('')
    setEnteredNameTouched(false)
  }

  //NOTE: if you want instant validation go with state. If you only want to validate
  // one time (at the end) then use Ref. Also state is better if you want
  // to reset the value of the input (see above)


  const nameInputClasses = enteredNameIsInvalid ? 'form-control invalid' : 'form-control'

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
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
