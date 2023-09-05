import React from "react"
export default function About(props) {
  return (
    <div className='container'>
       
        <div className={`accordion bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`}id="accordionExample">
          <h1 className='my-3'>About Us</h1>
                <p className={`accordion bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`}>
                  Hello my name is vijay i have created this most commonly usefull web application
                  to manipulate the text like convert text to uppercase, convert to lowercase,
                  copy text, clear text, remove the text, and as help i have included the word counts,
                  dark mode for better view and night work efficiently, as well as i have added the 
                  time to read the text paragraph which is shows how much time you can averagly takes to
                  read the paragraph containt. as a practice of react i have developed this app thanks visit 
                  again.......
                </p>

        </div>
        {/* <button onClick={toggleStyle} type="button" className="btn btn-primary my-3" >{btnText}</button> */}
    </div>
  )
}
