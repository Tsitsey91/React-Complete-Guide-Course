// Create a store. Create a reducer for the counter

import { createStore } from "redux"
import { createSlice } from "@reduxjs/toolkit"

const initialState = { counter: 0, showCounter: true }

// we create a slice(a subset) of our global state(we can create many 
// slices in different files)
createSlice({
    name: 'counterSlice',
    initialState: initialState,
    // the reduces below are equiv to the "counterReducer" below but they use redux-toolkit(less boilerplate)
    reducers: {
        increment(state) {
            state.counter++ // with redux-toolkit we can mutate the state(under the hood the state obj is copied and a new one is returned, so we dont mutate it...its just redux-toolkit that takes care of this)
        },
        decrement(state) {
            state.counter--
        },
        increase(state, action) {
            state.counter = state.counter + action.amount
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        },
    }
})

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