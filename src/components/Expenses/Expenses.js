import Card from "../UI/Card"
import ExpensesFilter from "./ExpensesFilter"
import ExpenseItem from "./ExpenseItem"
import "./Expenses.css"
import { useState } from "react"
import ExpensesList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart"

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020')

    const onFilterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })



    return (
        <div>
            <Card className="expenses">
                {/*
        selectedYear to set 2way binding and the filter get
        the default value = 2020
        */}
                <ExpensesFilter
                    selectedYear={filteredYear}
                    onFilterChange={onFilterChangeHandler}
                />
                <ExpensesChart expenses={filteredExpenses} />

                <ExpensesList items={filteredExpenses} ></ExpensesList>

            </Card>
        </div>
    )
}

export default Expenses