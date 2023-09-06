import React,{useState} from 'react'  //useState is the hooks used for the text area

export default function TextForm(props) {
    const [text, setText] = useState("")
    //text = "this is the converted text"   //this is the wrong way to change the text
    //setText("this is the converted text") //this is the right way to change the text

    const handelUPclick = ()=>{
        setText(text.toUpperCase())
        props.showAlert("Converted to Uppercase", "success")
    }
    const handelLOclick = ()=>{
        setText(text.toLowerCase())
        props.showAlert("Converted to Lowercase", "success")
    }
    const onchangeEvent = (event)=>{
        setText(event.target.value)
    }
    const handelClearText = ()=>{
        setText("")
        props.showAlert("Text Cleared", "success")
    }
    const handelCopyText = ()=>{
        let tx = document.getElementById("mybox")
        tx.select()
        navigator.clipboard.writeText(tx.value) //navigator is a way to navigate our text in to the teclipboard 
                                                //and we use the writeText() function to write the value of tx object
        props.showAlert("Text Copied", "success")
    }
    const handelSpacesText = ()=>{
        let pureText = text.replace(/\s+/g, ' '); //this is the method to replace all unwanted spaces with single space
        pureText = pureText.trim()
        setText(pureText)
        props.showAlert("Unnecessory spaces removed", "success")
    }


    return (
        <>
        <div className='container my-3'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="mybox" rows="10" style={{background:props.mode==="light"?"#F5FAFF":"#083E78", color:props.mode==="dark"?"#F5FAFF":"#083E78"}} onChange={onchangeEvent} value={text} placeholder='Enter text here'></textarea>
            </div>
            <button className='btn btn-primary mx-1 my-1' onClick={handelUPclick}>Convert to UpperCase</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handelLOclick}>Convert to LowerCase</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handelClearText}>Clear Text</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handelCopyText}>Copy Text</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handelSpacesText}>Remove Extra Spaces</button>
        </div>
        <div className='container my-3'>
            <h1>Text summary</h1>
            <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p> {0.008*text.split(" ").length-0.008} minuts will take to read the above paragraph</p>
        </div>
        </>
    )
}

