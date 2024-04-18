import React ,{useState} from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
// import About from './components/About'

export default function App() {
  const [mode,setmode]=useState('light');

  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#042743';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
    }
  }

  return (
    <>
      <Navbar title="aman" aboutText="dahiya" mode={mode} togglemode={togglemode} />
      <div className="container my-3">
            <Form heading="Enter text to analyze" mode={mode}/>
            {/* <About/> */}
      </div>
     
    </>
  )
}
