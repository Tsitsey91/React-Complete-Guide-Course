import { Button } from '@mui/material'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import React, { useState } from 'react'

const ExpenseItem = (props) => {
    /**
     * Because of I commented out the below parts of code, now this 
     * componet does not an internal state i.e. its "Stateless component"
     * i.e its just here to display some data
     */

    // const [title, setTitle] = useState(props.title)

    // const clickHandler = () => {
    //     if (title==='Updated!!!'){
    //         setTitle(props.title)
    //     }else{
    //         setTitle('Updated!!!')
    //     }
    //     console.log('Clicked!!!')
    // }

    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                </div>
                <div className='expense-item__price'>
                    ${props.amount}
                </div>
                {/* <Button variant="contained" sx={{ margin: 0.8 }}
                onClick={clickHandler} >
                Change Title
            </Button> */}
            </Card>
        </li>
    )
}

export default ExpenseItem