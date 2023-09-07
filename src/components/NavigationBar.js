import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './NavigationBar.module.css'

function NavigationBar() {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive }) =>
                                isActive ? classes.active : undefined}
                            end>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/products'
                            className={({ isActive }) =>
                                isActive ? classes.active : undefined}
                            end>
                            Products
                        </NavLink>

                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavigationBar