import { useRef, useState } from "react";

const SimpleInput = (props) => {

  // 1st approach - with on submit and state(getting the value on every change)
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)


  const handleNameInputChange = event => {
    setEnteredName(event.target.value)

    if (event.target.value.trim() !== '') {
      setEnteredNameIsValid(true)
    }
  }


  const handleNameInputBlur = event => {
    setEnteredNameTouched(true)

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false)
    }
  }

  const handleFormSubmission = event => {
    event.preventDefault()
    setEnteredNameTouched(true)

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false)
      return
    }

    setEnteredNameIsValid(true)
    console.log('using state: ' + enteredName) //1st approach

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
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
