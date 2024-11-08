import React from 'react'
import classes from './Logo.module.css'

const Logo = () => {
    return (
      <div className={classes.container}>
        <a href="https://webtechsupport.co.uk">
          <img src={`${process.env.PUBLIC_URL}/wts-black.svg`} alt="WebtechSupport" style={{ width: "150px", height: "auto" }} />
        </a>
      </div>
    );
}

export default Logo;