import { useContext, useState, useEffect } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context'

const HeaderCartButton = (props) => {

    const cartCtx = useContext(CartContext)
    const numberOfItemsInCart = cartCtx.items.reduce(
        (currentNumber, item) => {
            return currentNumber + item.amount
        }, 0
    )

    const [btnShouldAnimate, setBtnShouldAnimate] = useState(false)
    const buttonClasses = `${classes.button} ${btnShouldAnimate ? classes.bump : ''}`
    useEffect(() => {
        console.log('useEffect started')
        if (cartCtx.items.length === 0) {
            return
        }
        setBtnShouldAnimate(true) //basically adds the class 'bump' in the button to animate
        console.log('setBtnShouldAnimate(true) will execute')
        const timer = setTimeout(() => {
            setBtnShouldAnimate(false)
            console.log('setTimetout execs ->setBtnShouldAnimate(false)')
        }, 300)

        return () => {
            console.log('cleanup')
            clearTimeout(timer)
        }
    }, [cartCtx.items])

    return (
        <button className={buttonClasses} onClick={props.onOpenModal}>
            {/* Icon */}
            <span className={classes.icon}>
                <CartIcon />
            </span>
            {/* Text */}
            <span>
                Your Cart
            </span>
            {/* Badge */}
            <span className={classes.badge}>
                {numberOfItemsInCart}
            </span>
        </button>
    )
}

export default HeaderCartButton