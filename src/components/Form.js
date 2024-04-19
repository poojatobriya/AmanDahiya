import React from 'react'
import {useState} from 'react'



export default function Form(props) {
  const handleonchange=(event)=>{
                  setText(event.target.value);
  }
  const handleupclick=()=>{
    setText(text.toUpperCase());
    props.showAlert("converted to uppercase","success");
  }
  const handleloclick=()=>{
    setText(text.toLowerCase());
    props.showAlert("converted to LowerCase","success");
  }
  const handleclrclick=()=>{
    let newtext="";
    setText(newtext);
    props.showAlert("Text cleared","success");
  }
  const [text,setText]=useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1 classname="my-4">{props.heading}</h1>

      <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} onChange={handleonchange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} rows="8"></textarea>
      </div>
      
     <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleupclick}>convert to uppercase</button>
     <button disabled={text.length===0} className="btn btn-primary  mx-1 my-1" onClick={handleloclick}>convert to lowercase</button>
     <button disabled={text.length===0} className="btn btn-primary  mx-1 my-1" onClick={handleclrclick}>clear</button>
     <p> </p>
   </div>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>your text summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length}characters</p>
      <h2>preview</h2>
      <p>{text.length>0?text:"enter something in the textbox to preview it"}</p>
    </div>
   </>
  )
}
