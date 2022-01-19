import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Alert from './Components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState([]);
  
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042c54';
      viewAlert("Dark mode is Enabled","Success");
    } 
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      viewAlert("Light mode is Enabled","Success");
    }
  }
  const viewAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 800);
  }
  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        < Alert  alert={alert} /> 
        < Home viewAlert={viewAlert} mode={mode} /> 
        {/* <Routes> */}
          {/* <Route exact path='/'  element={ < Home  /> }></Route> */}
        {/* </Routes> */}
      </Router>
    </>
  );
}

export default App;