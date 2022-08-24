import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, settext] = useState("");
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        settext(newText);
        props.showAlert("Converted to uppercase","success");
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        settext(newText);
        props.showAlert("Converted to lowercase","success");
    }
    const clearTextArea = () => {
        if(window.confirm("Do you really want to clear the text?")){
            settext("")
            props.showAlert("Text cleared","success");
        }else{
            let newText = text;
            settext(newText);
            props.showAlert("Text not cleared","success");
        }

    }
    const textCopy = () => {
        let text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied successfully","success");
    }
    const removeSpace = () => {
        let newText=text.split(/[ ]+/);
        settext(newText.join(" "));
        props.showAlert("Extra spaces removed","success");
        
    }
    const upperFirstLetter=()=>{
        let splitStr = text.toLowerCase().split(' ');
        for (let i = 0; i < splitStr.length; i++) {
            // You do not need to check if i is larger than splitStr length, as your for does that for you
            // Assign it back to the array
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
        }
        settext(splitStr.join(' '));
        props.showAlert("First letter of words converted to uppercase","success");
    }
    const handleOnChange = (event) => {
        // console.log("On change");
        settext(event.target.value)
    }
    return (
        <>
            <div className="container">
                <h4>{props.heading}</h4>
                <div className="mb-3" >
                    <textarea className="form-control" value={text} style={{ backgroundColor:props.mode==='dark'?'gray':'white' }} onChange={handleOnChange} id="mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={textCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={removeSpace}>Remove space</button>
                <button className="btn btn-primary mx-2" onClick={upperFirstLetter}>Ucase first letter</button>
                <button className="btn btn-primary mx-2 btn-danger" onClick={clearTextArea}>Clear Text </button>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p style={{ color:props.mode==='dark'?'gray':'black' }}>{text.split(' ').length} words and {text.length} characters</p>
                <p style={{ color:props.mode==='dark'?'gray':'black' }}>{0.008 * text.split(" ").length} minutes need to read</p>
                <h3>Preview</h3>
                <p style={{ color:props.mode==='dark'?'gray':'black' }}>{text.length>0?text:'Enter something in the textbox above to preview it here'}</p>
            </div>
        </>
    )
}
