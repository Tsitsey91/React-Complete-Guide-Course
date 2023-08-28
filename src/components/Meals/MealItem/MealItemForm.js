import { useContext, useRef, useState, Fragment } from 'react'
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'
import CartContext from '../../../store/cart-context'

const MealItemForm = (props) => {

    const [amountIsValid, setAmountValidity] = useState(true)

    const amountInputRef = useRef()
    const submitForm = (event) => {
        event.preventDefault()
        const enteredAmount = amountInputRef.current.value //always string
        const enteredAmountNumber = +enteredAmount //transformation to number
        // checking form validity
        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5
        ) {
            setAmountValidity(false)
            return
        }
        setAmountValidity(true)
        props.onAddToCart(enteredAmountNumber)
    }
    return (
        <form className={classes.form} onSubmit={submitForm}>
            <Input
                ref={amountInputRef}
                label="Amount"
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    // min: '1',
                    // max: '5',
                    step: '1',
                    defaultValue: '1'
                }} />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount</p>}
        </form>
    )
}

export default MealItemForm