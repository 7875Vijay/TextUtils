import React, { useState } from 'react'

export default function About() {

  const [btnText, setBtnText] = useState("DarkMode")

  const [myStyle, setMyStyle] = useState(
    {
      color:"#353639",
      backgroundColor:"white",
    }
  )

  const toggleStyle=()=>{
    if(myStyle.color === "#353639"){
      setMyStyle({
        color:"white",
        backgroundColor:"#353639",
        border:"2px solid white"
      })
      setBtnText("LightMode")
    }
    else{
      setMyStyle({
        color:"#353639",
        backgroundColor:"white",
      })
      setBtnText("DarkMode")
    }
  }

  

  return (
    <div className='container'>
       
        <div className="accordion" id="accordionExample" style={myStyle}>
          <h1 className='my-3'>About Us</h1>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Accordion Item #1
                    </button>
                </h2>
                <div style={myStyle} id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong> 
                        It is shown by default, until the collapse plugin adds the appropriate classNamees 
                        that we use to style each element. These classNamees control the overall appearance, 
                        as well as the showing and hiding via CSS transitions. You can modify any of this with 
                        custom CSS or overriding our default variables. It's also worth noting that just about 
                        any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
          <div className="accordion-item">
              <h2 className="accordion-header">
                  <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Accordion Item #2
                  </button>
              </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div style={myStyle} className="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until
                    the collapse plugin adds the appropriate classNamees that we use to style each element. 
                    These classNamees control the overall appearance, as well as the showing and hiding via 
                    CSS transitions. You can modify any of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go within the 
                    <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
          </div>
          <div className="accordion-item">
              <h2 className="accordion-header">
                  <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Accordion Item #3
                  </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div style={myStyle} className="accordion-body">
                      <strong>This is the third item's accordion body.</strong> It is hidden by default, until the 
                      collapse plugin adds the appropriate classNamees that we use to style each element. These 
                      classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. 
                      You can modify any of this with custom CSS or overriding our default variables. It's also worth 
                      noting that just about any HTML can go within the <code>.accordion-body</code>, though the 
                      transition does limit overflow.
                  </div>
              </div>
          </div>
        </div>
        <button onClick={toggleStyle} type="button" className="btn btn-primary my-3" >{btnText}</button>
    </div>
  )
}
