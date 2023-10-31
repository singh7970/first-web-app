import React, { useState } from 'react'


export default function TextForm(props) {
  const handelupClick = () => {
    // console.log("Upercase was Clicked" +text)
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handeOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);

  }
  const [text, setText] = useState("")


  const handelclick = () => {
    // console.log("Upercase was Clicked" +text)
    let newText = text.toLowerCase();
    setText(newText)
  }
  const cleartext = () => {
    // console.log("Upercase was Clicked" +text)
    let newText = ("")
    setText(newText)
  }

  return (

    <>
      <div className='ALL'>

        <div className="container " style={{ Color:props.mode==='dark'?'white':'black'}}>
          <h6 >{props.heading}</h6>

          <textarea className="form-control" value={text} onChange={handeOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }} id="exampleFormControlTextarea1" rows="3"></textarea>
          <button className="btn btn-primary" onClick={handelupClick}>convert to uppercase</button>
          <button className="lower" onClick={handelclick}>  click to lowercase</button>
          <button className="dele" onClick={cleartext}>  DELETE</button>



        </div>
        <div className="container my-5" style={{ Color:props.mode==='dark'?'white':'black'}}><h1>YOUR text summary</h1>
          <p>{text.split(" ").length} wordsand {text.length} cherecters</p>
          <p>{0.008 * text.split(" ").length} to read this pera</p>
          <h3>

            total:{text}
          </h3>

        </div>
        
      </div>
    </>

  )
}
