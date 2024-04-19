import React ,{useState} from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Alert from './components/Alert';
import About from './components/About'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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

  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("dark mode enabled","success");
      document.title="Textutil-dark mode";
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode enabled","success");
      document.title="Textutil-light mode";
    }
  }

  return (
    <>
    <Router>
    
         <Navbar title="aman" aboutText="dahiya" mode={mode} togglemode={togglemode} />
         <Alert alert={alert}/>
      <div className="container my-3">

         <Switch>
            <Route exact path="/about">
                <About/>
            </Route>
            <Route exact path="/">
              <Form showAlert={showAlert} heading="Enter text to analyze" mode={mode}/>
            </Route>
         </Switch>
     </div>
     
    </Router>

    </>
  );
}
