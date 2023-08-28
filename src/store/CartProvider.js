import { useReducer } from "react"
import CartContext from "./cart-context"

const defaultCartState = {
    items: [],
    totalAmount: 0
}
const cartReducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount

        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)
        const existingCartItem = state.items[existingCartItemIndex]
        let updatedItem
        let updatedItems

        if (existingCartItem) {
            updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }
            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem

        } else {
            updatedItem = { ...action.item }
            updatedItems = state.items.concat(updatedItem)
        }

        // const updatedItems = state.items.concat(action.item) //[...state.items, action.item],

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    if (action.type === 'REMOVE_ITEM') {
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.id)
        const existingCartItem = state.items[existingCartItemIndex]

        const updatedTotalAmount = state.totalAmount - existingCartItem.price
        let updatedItem
        let updatedItems

        if (existingCartItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id)
        } else {
            updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount - 1
            }
            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState
}

/**
 * The goal of this component is simply to manage the CartContext (its
 * data...see cart-context.js) and provide that context to all components
 * that want access to it
 */
const CartProvider = props => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    // functions to manage & change the context
    const addItemToCart = item => {
        dispatchCartAction({
            type: 'ADD_ITEM', item: item
        })
    }
    const removeItemFromCart = id => {
        dispatchCartAction({
            type: 'REMOVE_ITEM', id: id
        })
    }

    // this is the real context object, not the one in the cart-context.js
    const cartContextObject = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCart,
        removeItem: removeItemFromCart
    }

    return (
        <CartContext.Provider value={cartContextObject}>
            {props.children} {/* this will allow us to wrap any components,
        with this CartProvider component,
        that should get access to this context*/}
        </CartContext.Provider>
    )
}

export default CartProvider