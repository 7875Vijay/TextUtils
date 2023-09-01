
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import AboutText from './components/About';

function App() {

  const [mode, setmode] = useState('light')
  const toggleMode=()=>{
    if(mode === "light"){
      setmode("dark");
      document.body.style.background = "#022244"
      document.body.style.color = "#F5FAFF"
    }
    else{
      setmode("light")
      document.body.style.background = "#F5FAFF"
      document.body.style.color = "#022244"
    }
  }    

  return (
    <>
      <Navbar  title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className='container my-3'>
          <TextForm heading= "Enter the text here" mode={mode}/>
      </div>
      {/* <div className='container my-3'>
          <AboutText/>
      </div> */}
    </>
  );

}

export default App;
