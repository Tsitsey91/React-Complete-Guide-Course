// Create a store. Create a reducer for the counter

import { createStore } from "redux"

const initialState = { counter: 0, showCounter: true }
const counterReducer = (currentState = initialState, action) => {
    // NEVER MUTATE THE EXISTING STATE-IT COULD LEAD TO UNPREDICTABLE BUGS
    // I.E. NEVER DO SOMETHING LIKE currentState.counter++ and then return it
    if (action.type === 'increment') {
        return {
            counter: currentState.counter + 1,
            showCounter: true
        }
    }
    if (action.type === 'decrement') {
        return {
            counter: currentState.counter - 1,
            showCounter: true
        }
    }
    if (action.type === 'increase') {
        return {
            counter: currentState.counter + action.amount,
            showCounter: true
        }
    }
    if (action.type === 'toggleCounter') {
        return {
            counter: currentState.counter,
            showCounter: !currentState.showCounter
        }
    }
    return currentState
}

const store = createStore(counterReducer)
// we export the store so that we can dispatch actions 
// from the components of our React app...We connect our app 
// with the store from redux
export default store