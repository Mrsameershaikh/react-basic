import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import About from './components/About';


function App() {
  const[mode,setMode]=useState('light'); //whether dark mode is enable or not
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#001a06';
      document.body.style.color='#b3b300';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
    }
  }
  return (
    <>
    <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
    
    <div className="container my-3">
    <About/>
    <TextForm heading="Enter the text to analyze below" mode={mode}/>
    </div>
    </>
  );
}
export default App;
    
    
    
    



