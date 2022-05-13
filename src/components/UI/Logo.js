import React from 'react'
import classes from './Logo.module.css'

const Logo = () => {
    return (
        <div className={classes.container}>
            <a href='https://floatingpint.com'>
                <h2>FloatingPint<span className={classes.pint}>🍺</span>com</h2>
            </a>
        </div>
    )
}

export default Logo;