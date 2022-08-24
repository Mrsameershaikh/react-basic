import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import About from './components/About';
import Alert from './components/Alert';


function App() {
  const[mode,setMode]=useState('light'); //whether dark mode is enable or not
  const[alert,setAlert]=useState(null);

  const showAlert=(message, type)=>{
        setAlert({
          msg:message,
          type:type
        })
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#001a06';
      document.body.style.color='#b3b300';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
    <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <About/>
    <TextForm heading="Enter the text to analyze below" mode={mode}/>
    </div>
    </>
  );
}
export default App;
    
    
    
    



