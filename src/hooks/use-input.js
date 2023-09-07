import { useReducer } from "react"

const initialInputState = {
    enteredValue: '',
    enteredValueTouched: false
}
const inputStateReducer = (state, action) => {
    if (action.type === 'INPUT_CHANGED') {
        return {
            enteredValue: action.value,
            enteredValueTouched: state.enteredValueTouched
        }
    }
    if (action.type === 'INPUT_BLURRED') {
        return {
            enteredValue: state.enteredValue,
            enteredValueTouched: true
        }
    }
    if (action.type === 'RESET') {
        return { //RESET ACTION
            enteredValue: '',
            enteredValueTouched: false
        }
    }
    return initialInputState
}

const useInput = (validateValue) => {

    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState)


    const enteredValueIsValid = validateValue(inputState.enteredValue)
    const enteredValueIsInvalid = !enteredValueIsValid && inputState.enteredValueTouched

    const handleValueInputChange = event => {
        dispatch({ type: 'INPUT_CHANGED', value: event.target.value })
    }

    const handleValueInputBlur = () => {
        dispatch({ type: 'INPUT_BLURRED' })
    }

    const reset = () => {
        dispatch({ type: 'RESET' })
    }

    return {
        value: inputState.enteredValue,
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