import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card'
import classes from './AddTitle.module.css'
import { BsFillExclamationTriangleFill } from 'react-icons/bs'

const AddTitle = props => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [touched, setTouched] = useState(false)

    const trimHandler = (event) => {
        event.preventDefault()
        setEnteredTitle(pixelTrim(enteredTitle))
    }

    const copyValue = (event) => {
        event.preventDefault()
        navigator.clipboard.writeText(enteredTitle);
        //setTouched(false)
        setEnteredTitle('')
    }

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        setTouched(true)
    }

    const pixelTrim = (str) => {
        const string = []
        for (let i = 0; i < str.length; i++) {
            string.push(str[i])
            if (getTextWidth(string.join('')) > 592) return string.join('')
        }
        //return string.join('')
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
                Title pixel-length SEO tester tool
            </h1>
            <h5>Google typically displays the first 600 pixels of the title tag. If you keep your titles under 600 pixels wide, our research suggests that you can expect about 90% of your titles to display properly in the SERPs.</h5>
            
            <form  onSubmit={trimHandler}>
                <label htmlFor='inputurl'>Add Title to trim | <span className={length < 600 && length > 200 ? classes.valid : classes.invalid }>Pixels: {Math.round(length)}</span> <span style={{float:'right'}} className={(length > 200 || !touched ? (length > 600 ? classes.invalid : classes.hidden) : classes.invalid)}> <BsFillExclamationTriangleFill /> {errMessage}</span></label>
                <textarea id='inputurl' onChange={titleChangeHandler} value={enteredTitle}></textarea>
                <Button type='submit'>Trim to size</Button>
                <Button type='button' onClick={copyValue}>Copy Title</Button>
                <span 
                    className={ (!touched || enteredTitle.length > 0 )? classes.hidden : classes.copied}
                    >copied to clipboard!
                </span>
            </form>
        </Card>
        
    )

};

export default AddTitle;