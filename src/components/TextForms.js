import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForms(props) {

    const [text, setText] = useState("Enter your text here")

    const handleText = (e) => {
        setText(e.target.value)
    }
    const upperCaseBtn = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case 👍👍👍", "success");
    }
    const lowerCaseBtn = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower Case 👍👍👍", "success");
    }
    const clearTextBtn = () => {
        let newText = "";
        setText(newText)
        props.showAlert("Text Cleared 👍👍👍", "success");
    }
    const copyTextBtn = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Message Copied 👍👍👍", "success");
    }
    const removeExtraSpaceBtn = () => {
        let newText = text.replace(/\s+/g, ' ')
        setText(newText.trim())
        props.showAlert("Extra Spaces Removed 👍👍👍", "success");
    }

    return (
        <>
            <div class="container mb-4 mt-3">
                <h1 style={{ color: (props.mode === 'dark') ? 'white' : 'black' }}>{props.head}</h1>
                <textarea
                    className="form-control mt-3 mb-4  border border-3 rounded"
                    id="myText"
                    rows="8"
                    value={text}
                    style={{ backgroundColor: (props.mode === 'dark') ? '#4c4b4c' : 'white', color: (props.mode === 'dark') ? 'white' : 'black' }}
                    onChange={handleText}>
                </textarea>

                <div className="container">
                    <div className="row">
                    <button
                        disabled = {text.length === 0}
                        className="btn btn-primary mx-1 col col-md-2 col-sm-3 col-lg-2 my-1"
                        onClick={upperCaseBtn}>
                        Convert to UpperCase
                    </button>

                    <button
                        disabled = {text.length === 0}
                        className="btn btn-primary mx-1 col col-md-2 col-sm-3 col-lg-2 my-1"
                        onClick={lowerCaseBtn}>
                        Convert to LowerCase
                    </button>

                    <button
                        disabled = {text.length === 0}
                        className="btn btn-primary mx-1 col col-md-2 col-sm-3 col-lg-2 my-1"
                        onClick={clearTextBtn}>
                        Clear Text
                    </button>

                    <button
                        disabled = {text.length === 0}
                        className="btn btn-primary mx-1 col col-md-2 col-sm-3 col-lg-2 my-1"
                        onClick={copyTextBtn}>
                        Copy Text
                    </button>

                    <button
                        disabled = {text.length === 0}
                        className="btn btn-primary mx-1 col col-md-2 col-sm-3 col-lg-2 my-1"
                        onClick={removeExtraSpaceBtn}>
                        Remove Extra Spaces
                    </button>
                    </div>
                </div>
            </div>

            <div className="container border border-3 rounded px-3 py-2 mb-3">
                <h2 
                    style={{ color: (props.mode === 'dark') ? 'white' : 'black' }} className="text-end">
                    Your Text Summary
                </h2>
                <p 
                    className="border-top border-2 border-secondary" 
                    style={{ color: (props.mode === 'dark') ? 'white' : 'black' }}>
                    {text.split(/\s+/).filter((e) => {return e.length !== 0}).length} words and {text.length} characters
                </p>
                <p 
                    style={{ color: (props.mode === 'dark') ? 'white' : 'black' }}>
                    {0.004 * text.split(/\s+/).filter((e) => {return e.length !== 0}).length} minutes to read
                </p>
            </div>

            <div className="container border border-3 rounded px-3 py-2 mb-5">
                <h2 
                    style={{ color: (props.mode === 'dark') ? 'white' : 'black' }} 
                    className="text-end">
                    Preview
                </h2>
                <p 
                    className="border-top border-2 border-secondary" 
                    style={{ color: (props.mode === 'dark') ? 'white' : 'black' }}>
                    {text.length>0 ? text : "Enter something to preview it here"}
                </p>
            </div>
        </>
    )
}

TextForms.propTypes = {
    head: PropTypes.string
}

TextForms.defaultProps = {
    head: "Enter Your Text"
}
