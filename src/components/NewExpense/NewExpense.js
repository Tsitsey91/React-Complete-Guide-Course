import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {

    const savedExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData)
        props.onAddExpense(expenseData)
        setIsEditing(false)
    }

    const [isEdititng, setIsEditing] = useState(false)

    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }

    return (
        <div className='new-expense'>
            {
                !isEdititng &&
                <button onClick={startEditingHandler}>Add New Expense</button>
            }
            {
                isEdititng &&
                <ExpenseForm onSavedExpenseData={savedExpenseDataHandler}
                onCancelEditing = {stopEditingHandler}
                />
            }
        </div>
    )
}

export default NewExpense