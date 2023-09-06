import useInput from "../hooks/use-input";

const BasicForm = (props) => {

  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameIsInvalid,
    handleValueInputChange: handleFirstNameInputChange,
    handleValueInputBlur: handleFirstNameInputBlur,
    reset: resetFirstName
  } = useInput(value => value.trim() !== '')

  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameIsInvalid,
    handleValueInputChange: handleLastNameInputChange,
    handleValueInputBlur: handleLastNameInputBlur,
    reset: resetLastName
  } = useInput(value => value.trim() !== '')

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailIsInvalid,
    handleValueInputChange: handleEmailInputChange,
    handleValueInputBlur: handleEmailInputBlur,
    reset: resetEmail
  } = useInput(value => value.includes('@'))


  const handleFormSubmission = (event) => {
    event.preventDefault()

    if (!firstNameIsValid || !lastNameIsValid || !emailIsValid) {
      return
    }

    resetFirstName()
    resetLastName()
    resetEmail()
  }

  const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid

  const classesFirstName = firstNameIsInvalid ? 'form-control invalid' : 'form-control'
  const classesLastName = lastNameIsInvalid ? 'form-control invalid' : 'form-control'
  const classesEmail = emailIsInvalid ? 'form-control invalid' : 'form-control'

  return (
    <form>
      <div className='control-group'>
        <div className={classesFirstName}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            onChange={handleFirstNameInputChange}
            onBlur={handleFirstNameInputBlur}
            value={firstName}
          />
          {firstNameIsInvalid && <p className="error-text">First name should not be empty</p>}
        </div>
        <div className={classesLastName}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            onChange={handleLastNameInputChange}
            onBlur={handleLastNameInputBlur}
            value={lastName}
          />
          {lastNameIsInvalid && <p className="error-text">Last name should not be empty</p>}
        </div>
      </div>
      <div className={classesEmail}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='text'
          id='name'
          onChange={handleEmailInputChange}
          onBlur={handleEmailInputBlur}
          value={email}
        />
        {emailIsInvalid && <p className="error-text">Last name should not be empty</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid} onClick={handleFormSubmission}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
