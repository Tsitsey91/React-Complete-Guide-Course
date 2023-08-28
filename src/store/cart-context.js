import React from "react";

//we initialize this context with default data which will not be used
// but will give us better autcompletion later (due to VScode)
// the true initial data are in the initialCartContext obejct in the
//  CartProvider.js file
const CartContext = React.createContext({
    // for autocompletion
    items: [],
    totalAmount: 0,
    addItem: (item) => { },
    removeItem: (id) => { }
})

export default CartContext
// Here we created the Context. Next step is to manage that context
// in some component using usetate or useReducer or whateva...