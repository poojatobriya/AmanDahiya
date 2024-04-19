import React ,{useState} from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Alert from './components/Alert';
import About from './components/About'

import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";


export default function App() {
  const [mode,setmode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      showAlert(null);
    }, 4000);

  }

const removeBodyClasses=()=>{
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-success')

}

  const togglemode=(cls)=>{
    removeBodyClasses();
    document.bodyclassList.add('bg-'+cls)
    if(mode==='light'){ 
      setmode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("dark mode enabled","success");
      //document.title="Textutil-dark mode";
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode enabled","success");
      //document.title="Textutil-light mode";
    }
  }

  return (
    <>
    <BrowserRouter>
    
         <Navbar title="aman" aboutText="dahiya" mode={mode} togglemode={togglemode} />
         <Alert alert={alert}/>
      <div className="container my-3">

         <Routes>
            <Route exact path="/about" element = {<About mode={mode} />}/>
            <Route exact path="/" element ={<Form showAlert={showAlert} heading="try textutil- character counter ,word counter" mode={mode}/>}/>
         </Routes>
     </div>
     
    </BrowserRouter>

    </>
  );
}
