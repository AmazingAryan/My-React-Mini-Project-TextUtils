import React, {useState} from "react"



export default function TextForm(props) {
  const handleUpClick = () => {
    
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "info")

  }
  const handleLoClick = () => {
    
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "info")

  }
  const handleCopy = () => {
    
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied", "info")

  }

  const handleExtraSpaces = () => {
    
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "info")

  }

  const handleBClick = () => {
    let newText = text;
    
        setText(newText);
        props.showAlert("Error", "danger")

  }

  const handleClearClick = () => {
    
    let newText = ''
    setText(newText);

  }

  const handleOnChange = (event) => {
    
    setText(event.target.value);

  }

  const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode ==='light'?'black':'#d3d3d3'}}>
        <h1>{props.Heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor: props.mode ==='light'?'white':'black', color: props.mode ==='light'?'black':'#d3d3d3'}}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-1" onClick={handleBClick}>Convert to Bold</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
    </div>
    <div className="container my-4" style={{color: props.mode ==='light'?'black':'#d3d3d3'}}>
      <h4>Your Text summary:</h4>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes to read</p>
      <h4>Preview:</h4>
      <p>{text.length>0?text:"Enter something in the textarea to preview it here.."}</p>
    </div>
    </>
  );
}
