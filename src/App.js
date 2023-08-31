
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import AboutText from './components/About';

function App() {
  return (
    <>
      <Navbar  title = "TextUtils" aboutText = "About Us"/>
      <div className='container my-3'>
          <TextForm heading= "Enter the text here"/>
      </div>
      {/* <div className='container my-3'>
          <AboutText/>
      </div> */}
    </>
  );
}

export default App;
