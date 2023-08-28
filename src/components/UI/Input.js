import React from 'react'
import classes from './Input.module.css'

const Input = React.forwardRef((props, forwardedRef) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={forwardedRef} {...props.input}></input>
            {/* convenient way to make input highly configurable. the 
            attributes of input will be populated from the object input 
            which we will pass in the props. */}
        </div>
    )
})

export default Input