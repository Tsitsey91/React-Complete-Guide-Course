import './ExpenseForm.css'
// import Button from '@mui/joy/Button'
import { useState } from 'react'

const ExpenseForm = (props) => {

    const [enteredTitle,setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate,setEnteredDate] = useState('')
    // const [enteredInput, setEnteredInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // })

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value) //event.target.value = current value of textbox
        // setEnteredInput({
        //     ...enteredInput,
        //     enteredTitle: event.target.value
        // })
        // better than the above alternative (if we are using only one state func)
        // setEnteredInput((prevState)=>{
        //     return {...prevState, enteredTitle:event.target.value}
        // })
    }

    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value)
        // setEnteredInput({
        //     ...enteredInput,
        //     enteredAmount: event.target.value
        // })
    }

    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value)
        // setEnteredInput({
        //     ...enteredInput,
        //     enteredTitle: event.target.value
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault() //when a submit event occurs in a form the browser reloads the page
        // and send the sumbit to the server...we want to prevent that default
        // behavior for now
        const expenseData={
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        // console.log(expenseData)
        props.onSavedExpenseData(expenseData)
        //καθαρίζω τα data από τη φόρμα αφού έχω κρατήσει αυτά που πάτησε
        setEnteredTitle('')//2way binding
        setEnteredAmount('')//2way binding
        setEnteredDate('')//2way binding
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                    type='text' 
                    value={enteredTitle} //2way binding (to change the value not just listen 
                    //for when the user changes it)
                    onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input 
                    type='number' min='0.01' step='0.01' 
                    value={enteredAmount}  //2way binding (to change the value not just listen 
                    //for when the user changes it)
                    onChange={amountChangeHandler} 
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31'
                    value={enteredDate} //2way binding (to change the value not just listen 
                    //for when the user changes it)
                    onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancelEditing}>Cancel</button>
                <button variant='solid' type='submit'>
                    Add Expense
                </button>
            </div>
        </form>
    )
}

export default ExpenseForm