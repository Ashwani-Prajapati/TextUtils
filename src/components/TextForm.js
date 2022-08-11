import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text has been converted to Upper Case!", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text has been converted to Lower Case!", "success");

  };
  const clearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text has been cleared!", "success");

  };
  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text has been copied!", "success");

  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className={`container my-3 text-${props.mode==="white"?"dark":"light"}`}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control my-3" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" style={{background: `${props.mode==="white"?"white":"grey"}`,color:`${props.mode==="white"?"black":"white"}`}}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary" onClick={clearText}>
          ClearText
        </button>
        <button className="btn btn-primary mx-2" onClick={copyText}>
          Copy Text
        </button>
        <div className="container my-3">
          <h2>Your text summary</h2>
          <p>
            {text.split(" ").length} words and {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").length} Menutes read</p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
