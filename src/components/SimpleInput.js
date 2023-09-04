import { useRef, useState } from "react";

const SimpleInput = (props) => {

  // 1st approach - with on submit and state(getting the value on every change)
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)


  const handleNameInputChange = event => {
    setEnteredName(event.target.value)
    setEnteredNameTouched(true)
  }
  //2nd approach - with Ref and reading the value when we need it
  const nameInputRef = useRef()

  const handleFormSubmission = event => {
    event.preventDefault()
    setEnteredNameTouched(true)

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false)
      return
    }

    setEnteredNameIsValid(true)
    console.log('using state: ' + enteredName) //1st approach
    const enteredName2 = nameInputRef.current.value // 2nd approach
    console.log('using Ref: ' + enteredName2)

    setEnteredName('')
  }

  //NOTE: if you want instant validation go with state. If you only want to validate
  // one time (at the end) then use Ref. Also state is better if you want
  // to reset the value of the input (see above)

  const enteredNameIsInvalid = !enteredNameIsValid && enteredNameTouched

  const nameInputClasses = enteredNameIsInvalid ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={handleFormSubmission}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          ref={nameInputRef}
          type='text'
          id='name'
          onChange={handleNameInputChange}
          value={enteredName} //binding value back to the state
        />
        {enteredNameIsInvalid &&
          <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
