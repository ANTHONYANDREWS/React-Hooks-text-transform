import React, { useState } from 'react'

function TextChange() {
    const[text, setText] = useState();
    const[transform, setTransform] = useState({});

    const changeInText = (e) =>{
        setText(e.target.value)
    }

    const handleChecked = (e) =>{
        setTransform((transform)=>({
            ...transform,
            [e.target.name]: e.target.checked
            
        }))
    }
    console.log(transform)

    const displayStyle =  {

        ...(transform.bold ? {fontWeight: "bold"}: null),
        ...(transform.italic ? {fontStyle : "italic"}: null),
        ...(transform.underline ? {textDecoration : "underline"}: null)
    }
    
  return (
    
    <div>
      <input type="text" onChange={changeInText} />
      <br />
      <br />
      <input type="checkbox" 
      name='bold'
      checked = {transform.bold || false}
      onClick={handleChecked}
      />
      bold
      <br />
      <input type="checkbox" 
      name='italic'
      checked = {transform.italic || false}
      onClick={handleChecked}
      />
      Italic
      <br />
      <input type="checkbox" 
      name='underline'
      checked={transform.underline || false}
      onClick = {handleChecked}
      />
      Underline
      <br />
      <br />
      <br />

      <p style={displayStyle}>{text}</p>
    </div>
  )
}


export default TextChange;
