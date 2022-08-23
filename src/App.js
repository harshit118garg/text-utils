import React, { useState } from 'react'
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState({
    msg: null,
    type: null
  });

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert({
        msg: null,
        type: null
      });
    }, 3500)
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'white'
    } else {
      setMode('dark')
      document.body.style.backgroundColor = '#565859'
    }
  }

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForms head="Enter your text to Analyze" mode={mode} showAlert={showAlert} />
    </>
  )
}

export default App;