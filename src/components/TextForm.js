import React,{useState} from 'react'  //useState is the hooks used for the text area

export default function TextForm(props) {
    
    const [text, setText] = useState()
    //text = "this is the converted text"   //this is the wrong way to change the text
    //setText("this is the converted text") //this is the right way to change the text

    const handelUPclick = ()=>{
        console.log(text)
        setText(text.toUpperCase())
        console.log(text)
    }
    const onchangeEvent = (event)=>{
        console.log("onchanged fired")
        setText(event.target.value)
    }

    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="mybox" rows="15" onChange={onchangeEvent} value={text}></textarea>
            </div>
            <button className='btn btn-primary' onClick={handelUPclick}>Convert to uppercase</button>
        </>
    )
}

