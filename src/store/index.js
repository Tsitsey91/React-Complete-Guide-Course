// Create a store. Create a reducer for the counter

import { createStore } from "redux"
import { configureStore, createSlice } from "@reduxjs/toolkit"

const initialState = { counter: 0, showCounter: true }

// we create a slice(a subset) of our global state(we can create many 
// slices in different files)
const counterSlice = createSlice({
    name: 'counter',
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
            state.counter = state.counter + action.payload
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        },
    }
})


// to get access to the reducer for when we have many createSlice's !!!
const store = configureStore({
    reducer: counterSlice.reducer
})
// This is THE MOST GENERAL for when we have multiple slices(e.g. multiple reducers)
// the above is just because in our small app we only have 1 createSlice(for now)
// const store = configureStore({
//     reducer: {slice1.reducer, slice2.reducer}
// })

// we export the actions so that we can dispatch actions from other components
export const counterActions = counterSlice.actions
// we export the store so that we can dispatch actions 
// from the components of our React app...We connect our app 
// with the store from redux
export default store