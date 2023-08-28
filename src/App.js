import { useState } from 'react';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const INITIAL_EXPENSES = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]

  const [expenses, setExpenses] = useState(INITIAL_EXPENSES)

  const addExpenseHandler = (expense) => {
    console.log("In App.js")
    console.log(expense)
    // 1st way-working but totally correct for when you want to update
    
    // the state basing on a previous state (like our list of items)...
    //setExpenses([...INITIAL_EXPENSES,expense])
    
    //2nd way - correct for these cases(see above comment) - we pass 
    // a function not just the new list... The function automatically 
    // takes as argument the previousState (list) (that's just React)
    setExpenses((previousExpenses)=>{
      return [expense,...previousExpenses]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
