import { useState } from "react"

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('')
    const [enteredValueTouched, setEnteredValueTouched] = useState(false)

    const enteredValueIsValid = validateValue(enteredValue)
    const enteredValueIsInvalid = !enteredValueIsValid && enteredValueTouched

    const handleValueInputChange = event => {
        setEnteredValue(event.target.value)
    }

    const handleValueInputBlur = () => {
        setEnteredValueTouched(true)
    }

    const reset = () => {
        setEnteredValue('')
        setEnteredValueTouched(false)
    }

    return {
        value: enteredValue,
        isValid: enteredValueIsValid,
        hasError: enteredValueIsInvalid,
        handleValueInputChange,
        handleValueInputBlur,
        //  I return the 2 functions which are defined in this hook so 
        // they can be called from the components that use this hook.
        reset
    }
}

export default useInput