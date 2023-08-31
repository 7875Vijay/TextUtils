import React,{useState} from 'react'  //useState is the hooks used for the text area

export default function TextForm(props) {
    const [text, setText] = useState()
    //text = "this is the converted text"   //this is the wrong way to change the text
    //setText("this is the converted text") //this is the right way to change the text

    const handelUPclick = ()=>{
        setText(text.toUpperCase())
    }
    const handelLOclick = ()=>{
        setText(text.toLowerCase())
    }
    const onchangeEvent = (event)=>{
        setText(event.target.value)
    }

    return (
        <>
        <div className='container my-3'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="mybox" rows="15" onChange={onchangeEvent} value={text}></textarea>
            </div>
            <button className='btn btn-primary mx-1' onClick={handelUPclick}>Convert to UpperCase</button>
            <button className='btn btn-primary mx-1' onClick={handelLOclick}>Convert to LowerCase</button>
        </div>
        <div className='container my-3'>
            <h1>Text summary</h1>
            <p> {text.split(" ").length} words and {text.length}</p>
            <p> {0.008*text.split(" ").length}minuts will take to read the above paragraph</p>
        </div>
        </>
    )
}

