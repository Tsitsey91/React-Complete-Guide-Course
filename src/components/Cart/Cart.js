import { useContext } from 'react'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'

const Cart = props => {

    const cartCtx = useContext(CartContext)
    const handleAddItem = item => {
        cartCtx.addItem({ ...item, amount: 1 })
    }
    const handleRemoveItem = id => {
        cartCtx.removeItem(id)
    }

    const cartitems = cartCtx.items.map(
        item => <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={handleRemoveItem.bind(null, item.id)}
            onAdd={handleAddItem.bind(null, item)}
        />
    )
    const totalAmountToPay = `$${cartCtx.totalAmount.toFixed(2)}`
    const cartHasItems = cartCtx.items.length > 0

    return (
        <Modal onCloseModal={props.onCloseModal}>
            <ul className={classes['cart-items']}>
                {cartitems}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmountToPay}</span>
            </div>
            <div className={classes.actions}>
                <button
                    className={classes['button--alt']}
                    onClick={props.onCloseModal}
                >Close</button>
                {cartHasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal >
    )
}

export default Cart