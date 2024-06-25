import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");

  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");

  };

  const handleSpaces = () => {
    const currentText = text;
    const newText = currentText.replace(/\s+/g, " ");
    setText(newText);
    props.showAlert("Unnecessary Spaces Removed" , "success");

  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text copied in clipboard" , "success");

  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  const wordCount = text === "" ? 0 : text.trim().split(/\s+/).length;

  return (
    <>
      <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h3 className='mb-2'>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode === 'dark' ? '#13466e' : 'white' , color: props.mode === 'dark' ? 'white' : '#042743'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSpaces}>
          Remove Extra Space
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h2>Your text summary</h2>
        <p>
          {wordCount} words and {text.length} characters
        </p>
        <p> {0.008 * wordCount} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to Preview"}</p>
      </div>
    </>
  );
}
