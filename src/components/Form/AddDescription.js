import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card'
import classes from './AddTitle.module.css'
import { BsFillExclamationTriangleFill } from 'react-icons/bs'

const AddDescription = props => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [touched, setTouched] = useState(false)

    const trimHandler = (event) => {
        event.preventDefault()
        if (enteredTitle.trim().length === 0) {
            return;
        }
        setEnteredTitle(pixelTrim(enteredTitle))
    }

    const copyValue = (event) => {
        event.preventDefault()
        navigator.clipboard.writeText(enteredTitle);
        setTouched(false)
        setEnteredTitle('')
    }

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        setTouched(true)
    }

    const pixelTrim = (str) => {
        const string = []
        for (let i = 0; i < str.length; i++) {
            if (getTextWidth(string.join('')) < 928) string.push(str[i])
        }
        return string.join('')
    }

    function getTextWidth(text) {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
      
        context.font = getComputedStyle(document.body).font;
      
        return context.measureText(text).width;
      }
    const length = getTextWidth(enteredTitle)
    const errMessage = (length > 600) ? 'Title too long' : 'title too short'

    return (
        <Card className={classes.input}>
            <h1>
                Meta description pixel-length tester
            </h1>
            <h5>Based on the width of Google's desktop search results, your meta description tags should be kept between 400 and 928 pixel width. In order to be displayed properly in the SERPs,  it's best to keep meta descriptions long enough that they're sufficiently descriptive.</h5>
            <p className={classes.small}>On the Airsquare e-commerce platform the title tag is identical to the "Short Summary" field (on each product page)</p>
            <form  onSubmit={trimHandler}>
                <label htmlFor='inputurl'>Add meta description to trim | <span className={length < 928 && length > 400 ? classes.valid : classes.invalid}>Pixels: {Math.round(length)}</span> <span style={{float:'right'}} className={(length > 400 || !touched ? (length > 928 ? classes.invalid : classes.hidden) : classes.invalid)}> <BsFillExclamationTriangleFill /> {errMessage}</span></label>
                <textarea id='inputurl' rows='5' onChange={titleChangeHandler} value={enteredTitle}></textarea>
                <Button type='submit'>Trim to size</Button>
                <Button type='button' onClick={copyValue}>Copy Description</Button>
                <span className={classes.hidden}>copied to clipboard!</span>
            </form>
        </Card>
        
    )

};

export default AddDescription;