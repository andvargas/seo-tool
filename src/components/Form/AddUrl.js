import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUrl.module.css";
import { BsIntersect } from "react-icons/bs";

const AddUrl = (props) => {
  const [enteredUrl, setEnteredUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [touched, setTouched] = useState(classes.hidden);
  const [baseUrl, setBaseUrl] = useState("");

  const trimHandler = (event) => {
    event.preventDefault();
    setShortenedUrl(
      enteredUrl.substring(enteredUrl.lastIndexOf("/") + 1, 75 - baseUrl.length)
    );
  };

  const copyValue = (event) => {
    event.preventDefault();
    setEnteredUrl("");
    if (shortenedUrl) {
      navigator.clipboard.writeText(shortenedUrl);
    } else navigator.clipboard.writeText(enteredUrl);
    setTouched(classes.copied);
  };

  const urlChangeHandler = (event) => {
    setEnteredUrl(event.target.value);
    setTouched(classes.hidden);
    setShortenedUrl("");
  };

  const shortenedHandler = (event) => {
    setShortenedUrl(enteredUrl);
    setShortenedUrl(event.target.value);
  };
  const length = enteredUrl.length + (baseUrl.length || 0);

  const addBaseUrl = () => {
    let baseUrlPrompt = prompt(
      "Please enter the base url - everything before the slug"
    );
    if (baseUrlPrompt !== null) setBaseUrl(baseUrlPrompt);
  };
  console.log(addBaseUrl);

  return (
    <Card className={classes.input}>
      <h1>URL length SEO tester tool</h1>
      <h5>
        Choose shorter, human-readable URLs with descriptive keywords. We
        recommend keeping URLs under 75 characters.
      </h5>
      <div style={{ paddingBottom: "15px" }}>
        <button onClick={addBaseUrl}>
          <BsIntersect /> Add base url{" "}
        </button>
        <span style={{ paddingLeft: "20px" }}>{baseUrl}</span>
      </div>

      <form onSubmit={trimHandler}>
        <label htmlFor="inputurl">
          Add Url to trim |{" "}
          <span className={length < 75 ? classes.valid : classes.invalid}>
            Characters: {length}
          </span>
        </label>
        <textarea
          id="inputurl"
          onChange={urlChangeHandler}
          value={enteredUrl}
          placeholder="Copy & paste your url to check length... or add base url above"
        ></textarea>
        <label htmlFor="outputurl">Slug (trimmed)</label>
        <textarea
          id="outputurl"
          onChange={shortenedHandler}
          value={shortenedUrl}
        ></textarea>
        <Button type="submit">Trim to size</Button>
        <Button type="button" onClick={copyValue}>
          Copy slug
        </Button>
        <span className={touched}>copied!</span>
      </form>
    </Card>
  );
};

export default AddUrl;
