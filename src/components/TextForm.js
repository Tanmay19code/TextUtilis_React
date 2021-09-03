import React,{useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        console.log('Upper case clicked' + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLowClick = () => {
        console.log('Lower case clicked' + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }
    const handleClearClick = () => {
        console.log('Text Cleared');
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared","success");
    }
    const handleCopyClick = () => {
        console.log('Text Copied');
        let newText = document.getElementById('myBox');
        newText.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied","success");
    }
    const handleSpaceClick = () => {
        console.log('Extra Spaces Cleared');
        let newText = text.split(/[ ] + /);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success");
    }

    const handleOnChange = (event) => {
        console.log("Onchange");
        setText(event.target.value);
    }
    
    const [text,setText] = useState('Enter text here');  

    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1 className="my-3">{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#343a40':'white', color:props.mode==='dark'?'white':'black'} } onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>
                Convert to Upperacase
            </button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>
                Convert to Lowercase
            </button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>
                CLEAR TEXT
            </button>
            <button className="btn btn-primary mx-1" onClick={handleCopyClick}>
                COPY TEXT
            </button>
            <button className="btn btn-primary mx-1" onClick={handleSpaceClick}>
                CLEAR EXTRA SPACES
            </button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes will be  required to read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter text to preview"}</p>
        </div>
        </>
        
    )
}
