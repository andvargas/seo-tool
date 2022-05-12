import React from 'react'
import classes from './Logo.module.css'

const Logo = () => {
    return (
        <div className={classes.container}>
            <h2>FloatingPint<span className={classes.pint}>🍺</span>com</h2>
        </div>
    )
}

export default Logo;