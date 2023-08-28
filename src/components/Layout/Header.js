import { Fragment } from 'react'
import classes from './Header.module.css'
import mealsImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactiveMeals</h1>
                <HeaderCartButton onOpenModal={props.onOpenModal} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='A table with food' />
            </div>
        </Fragment>
    )
}

export default Header