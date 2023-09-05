
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';



// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";


function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (massage, type)=>{
    setAlert({
      msg:massage,
      type:type,
    })
    setTimeout(() => {
       setAlert(null);
    }, 3000);
  }

  const [mode, setmode] = useState('light')
  const toggleMode=()=>{
    if(mode === "light"){
      setmode("dark");
      document.body.style.background = "#022244"
      document.body.style.color = "#F5FAFF"
      showAlert("Dark mode activated", "success")
      document.title = "Text Utils - Dark Mode"
    }
    else{
      setmode("light")
      document.body.style.background = "#F5FAFF"
      document.body.style.color = "#022244"
      showAlert("Light mode activated", "success")
      document.title = "Text Utils - Light Mode"
    }
  }    
  


  return (
    <>
    {/* <Router> */}
      <Navbar  title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>

      <div className='container my-3'>
      {/* <Switch> */}
            {/* <Route exact path="/about"> */}
              {/* <About mode={mode}/> */}
            {/* </Route> */}

            {/* <Route exact path="/"> */}
              <TextForm heading= "Enter the text here" mode={mode} showAlert = {showAlert}/> 
            {/* </Route> */}
      {/* </Switch> */}
      
      </div>
      
    {/* </Router> */}
    
    </>
  );

}

export default App;
